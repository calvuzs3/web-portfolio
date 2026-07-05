#!/bin/bash

# Env Vars
DOMAIN_NAME="www.calvuz.net" # replace with your own
EMAIL="calvuzs3@gmail.com"             # replace with your own

# Script Vars
REPO_URL="git@github.com:calvuzs3/web-portfolio.git"
APP_DIR="." # deploy.sh lives in the project root; always run it from there
SWAP_SIZE="1G" # Swap size of 1GB

# Update package list and upgrade existing packages
sudo apt update && sudo apt upgrade -y

# Add Docker's official GPG key:
sudo apt-get install -y ca-certificates curl lsb-release apt-transport-https software-properties-common
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/debian/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

# Add the repository to Apt sources:
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/debian \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" |
  sudo tee /etc/apt/sources.list.d/docker.list >/dev/null
sudo apt-get update

# Install DOCKER
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

# Verify Docker Compose installation
docker compose --version
if [ $? -ne 0 ]; then
  echo "Docker Compose installation failed. Exiting."
  exit 1
fi

# Ensure Docker starts on boot and start Docker service
sudo systemctl enable docker
sudo systemctl start docker

# Update the repository (deploy.sh lives in $APP_DIR, the project root, so no cd needed)
if [ -d ".git" ]; then
  echo "Pulling latest changes from $REPO_URL..."
  git pull
else
  echo "ERROR: $APP_DIR is not a git repository. Clone it first with:"
  echo "  git clone $REPO_URL"
  exit 1
fi

# Restart Nginx to apply the new configuration
sudo systemctl restart nginx

echo "=== SAFE DOCKER DEPLOYMENT ==="

# Stop existing containers gracefully
echo "Stopping existing containers..."
sudo docker compose down || true

# SAFE CLEANUP - Only remove stopped containers, NOT images or volumes
echo "Removing only stopped containers..."
sudo docker container prune -f

# Create or recreate the network
echo "Setting up Docker network..."
docker network create -d bridge web-network || echo "Network already exists"

# Build with cache for faster deployment (preserves existing images)
echo "Building Docker images..."
sudo docker compose build

# Start containers
echo "Starting containers..."
sudo docker compose up -d

# Wait a moment for containers to start
sleep 10

# Check if Docker Compose started correctly
echo "Checking container status..."
if ! sudo docker ps | grep "Up"; then
  echo "Docker containers failed to start. Check logs with 'docker compose logs'."
  exit 1
fi

# Show running containers
echo "=== RUNNING CONTAINERS ==="
sudo docker ps

# Show container logs for debugging
echo "=== RECENT LOGS ==="
sudo docker compose logs --tail=20

# Output final message
echo "Safe deployment complete.

✅ Docker images preserved
✅ Only application containers rebuilt

Your Next.js app is now running.
Next.js is available at https://$DOMAIN_NAME

=== TROUBLESHOOTING COMMANDS ===
- Check logs: sudo docker compose logs
- Restart services: sudo docker compose restart
- Manual rebuild if needed: sudo docker compose build --no-cache
"
