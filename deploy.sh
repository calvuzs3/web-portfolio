#!/bin/bash

# Env Vars
POSTGRES_USER="mp-xfiuser"
POSTGRES_PASSWORD=$(openssl rand -base64 12) # Generate a random 12-character password
POSTGRES_DB="mp-xfidb"
SECRET_KEY="mp-xfi-my-secret"          # for the demo app
NEXT_PUBLIC_SAFE_KEY="mp-xfi-safe-key" # for the demo app
DOMAIN_NAME="www.calvuz.net"           # replace with your own
EMAIL="calvetti.luca@gmail.com"        # replace with your own

# Script Vars
REPO_URL="luke@192.168.0.8:~/src/next/magic-portfolio"
APP_DIR=./web-portfolio
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

# Clone the Git repository
if [ -d "$APP_DIR" ]; then
  echo "Directory $APP_DIR already exists. Pulling latest changes..."
  cd $APP_DIR && git pull
else
  echo "Cloning repository from $REPO_URL..."
  # git clone $REPO_URL $APP_DIR
  cd $APP_DIR
fi
cd ..

# For Docker internal communication ("db" is the name of Postgres container)
DATABASE_URL="postgres://$POSTGRES_USER:$POSTGRES_PASSWORD@db:5432/$POSTGRES_DB"

# For external tools (like Drizzle Studio)
DATABASE_URL_EXTERNAL="postgres://$POSTGRES_USER:$POSTGRES_PASSWORD@localhost:5432/$POSTGRES_DB"

# Create the .env file inside the app directory (~/myapp/.env)
echo "POSTGRES_USER=$POSTGRES_USER" >"$APP_DIR/.env"
echo "POSTGRES_PASSWORD=$POSTGRES_PASSWORD" >>"$APP_DIR/.env"
echo "POSTGRES_DB=$POSTGRES_DB" >>"$APP_DIR/.env"
echo "DATABASE_URL=$DATABASE_URL" >>"$APP_DIR/.env"
echo "DATABASE_URL_EXTERNAL=$DATABASE_URL_EXTERNAL" >>"$APP_DIR/.env"

# These are just for the demo of env vars
echo "SECRET_KEY=$SECRET_KEY" >>"$APP_DIR/.env"
echo "NEXT_PUBLIC_SAFE_KEY=$NEXT_PUBLIC_SAFE_KEY" >>"$APP_DIR/.env"

# Restart Nginx to apply the new configuration
sudo systemctl restart nginx

# Navigate to app directory for Docker operations
cd $APP_DIR

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

✅ PostgreSQL data preserved
✅ Docker images preserved
✅ Only application containers rebuilt

Your Next.js app and PostgreSQL database are now running. 
Next.js is available at https://$DOMAIN_NAME

=== TROUBLESHOOTING COMMANDS ===
- Check logs: sudo docker compose logs
- Restart services: sudo docker compose restart
- Manual rebuild if needed: sudo docker compose build --no-cache
"
