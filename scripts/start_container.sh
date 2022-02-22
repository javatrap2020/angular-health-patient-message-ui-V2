#!/bin/sh
sudo service --status-all
sudo service docker start
sudo service docker start
cd /home/ec2-user/server
sudo rm -rf .dockerignore
sudo docker-compose up
sudo rm -rf .dockerignore
