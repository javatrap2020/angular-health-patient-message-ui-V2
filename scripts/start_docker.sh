#!/bin/sh

sudo amazon-linux-extras install docker -y
sudo curl -L https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
#sudo dockerd --debug
sudo usermod -aG docker ec2-user
sudo chmod 666 /var/run/docker.sock
sudo service docker start
sudo docker ps -a
sudo mv /usr/local/bin/docker-compose /usr/bin/docker-compose
sudo su
yum update -y
aws s3 cp s3://bucket-v2-my/.env /home/ec2-user/server
aws s3 cp s3://bucket-v2-my/docker-compose.yml /home/ec2-user/server
exit

