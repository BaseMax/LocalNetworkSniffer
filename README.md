# Local-Network Sniffer

A tiny node js-based program to listen on 80 port and will log all requests and also send logs to Telegram Bot.

## Getting Start

- Create a Telegram bot
- Put telegram bot' Token to `app.js` file
- Start app.js directly or via `pm2 start app.js`

### My Commands

```
curl -sL https://rpm.nodesource.com/setup_10.x | sudo bash -
sudo yum install nodejs
cd ~/
git clone https://github.com/BaseMax/LocalNetworkSniffer
cd LocalNetworkSniffer
npm install express --save
yum install nano
iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-port 8000
sudo sh -c "iptables-save > /etc/iptables.rules"
npm i -g pm2
pm2 start app.js
yum install wget curl
wget -O - http://127.0.0.1/
ls
firewall-cmd --zone=public --add-port=80/tcp --permanent
firewall-cmd --reload
npm install --save node-telegram-bot-api
pm2 log
pm2 list
pm2 restart 0
pm2 log
pm2 list
pm2 stop 0
npm i json-stringify-safe
pm2 restart 0
pm2 log
```

© Copyright 2021, Max Base
