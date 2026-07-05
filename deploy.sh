#!/bin/bash
set -e

# Usage: ./deploy.sh <start|update>
#   start  - provision a fresh VM from scratch (packages, Docker, network) and launch the stack
#   update - pull latest changes from git and rebuild/restart the Docker stack

# Env Vars
DOMAIN_NAME="www.calvuz.net" # replace with your own
EMAIL="calvuzs3@gmail.com"   # replace with your own

# Script Vars
REPO_URL="git@github.com:calvuzs3/web-portfolio.git"
APP_DIR="." # deploy.sh lives in the project root; always run it from there

usage() {
  echo "Usage: $0 <start|update>"
  echo "  start  - provision a fresh VM from scratch and launch the stack"
  echo "  update - git pull latest changes and rebuild/restart the stack"
  exit 1
}

install_docker() {
  echo "=== Installing system dependencies and Docker ==="

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

  # Install Docker
  sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

  # Verify Docker Compose installation
  docker compose --version
  if [ $? -ne 0 ]; then
    echo "Docker Compose installation failed. Exiting."
    exit 1
  fi

  # Ensure Docker starts on boot and start Docker service
  sudo systemctl enable docker
  sudo systemctl start docker
}

check_repo() {
  if [ ! -d ".git" ]; then
    echo "ERROR: $APP_DIR is not a git repository. Clone it first with:"
    echo "  git clone $REPO_URL"
    exit 1
  fi
}

pull_repo() {
  check_repo
  echo "Pulling latest changes from $REPO_URL..."
  git pull
}

setup_network() {
  echo "Setting up Docker network..."
  docker network create -d bridge web-network || echo "Network already exists"
}

reload_nginx() {
  if command -v nginx >/dev/null 2>&1; then
    echo "Restarting Nginx to apply configuration..."
    sudo systemctl restart nginx
  else
    echo "Nginx not found, skipping restart (expected if the reverse proxy is managed elsewhere)."
  fi
}

build_and_start() {
  echo "=== DOCKER DEPLOYMENT ==="

  echo "Stopping existing containers..."
  sudo docker compose down || true

  echo "Removing only stopped containers..."
  sudo docker container prune -f

  echo "Building Docker images..."
  sudo docker compose build

  echo "Starting containers..."
  sudo docker compose up -d

  sleep 10

  echo "Checking container status..."
  if ! sudo docker ps | grep "Up"; then
    echo "Docker containers failed to start. Check logs with 'docker compose logs'."
    exit 1
  fi

  echo "=== RUNNING CONTAINERS ==="
  sudo docker ps

  echo "=== RECENT LOGS ==="
  sudo docker compose logs --tail=20
}

print_success() {
  echo "Deployment complete.

Your Next.js app is now running.
Next.js is available at https://$DOMAIN_NAME

=== TROUBLESHOOTING COMMANDS ===
- Check logs: sudo docker compose logs
- Restart services: sudo docker compose restart
- Manual rebuild if needed: sudo docker compose build --no-cache
"
}

cmd_start() {
  check_repo
  install_docker
  setup_network
  reload_nginx
  build_and_start
  print_success
}

cmd_update() {
  pull_repo
  reload_nginx
  build_and_start
  print_success
}

case "$1" in
start)
  cmd_start
  ;;
update)
  cmd_update
  ;;
*)
  usage
  ;;
esac
