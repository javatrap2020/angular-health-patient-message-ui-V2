#!/bin/sh
sudo service codedeploy-agent restart
sudo service --status-all
sudo service docker start
sudo service docker start
cd /home/ec2-user/server
sudo rm -rf .dockerignore
cd /home/ec2-user/server/.github/workflows/
sudo rm -rf docker-image.yml
cd /home/ec2-user/server
sudo docker-compose up
sudo rm -rf .dockerignore
