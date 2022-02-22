#!/bin/sh
sudo service --status-all
sudo service docker start
sudo service docker start
cd /home/ec2-user/server
sudo docker-compose up
