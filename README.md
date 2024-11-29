this is the userdata to give in amazon ec2 server.

#!/bin/bash
sudo yum install python3-pip -y
sudo yum install git -y
sudo hostnamectl set-hostname K8s
sudo echo -e "Host *\n\tStrictHostKeyChecking no" >> /home/ec2-user/.ssh/config
curl -sL https://rpm.nodesource.com/setup_20.x | sudo bash -
sudo dnf install nodejs -y
git clone https://github.com/vscbobba/simple-nodejs-app
cd simple-nodejs-app
npm install express
nohup node app.js > nohup.out 2>&1 &