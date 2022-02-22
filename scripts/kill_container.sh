#!/bin/sh
cd /home/ec2-user
sudo docker ps -a
sudo docker stop spring-boot-docker2
sudo docker rm spring-boot-docker2
sudo docker stop angular-health
sudo docker rm angular-health
sudo docker images
sudo docker image rmi -f javatrap/spring-boot-docker2
sudo docker image rmi -f javatrap/angular-health
cd /home/ec2-user/server
sudo rm docker-compose.yml
cd /home/ec2-user

