[![Node.js CI](https://github.com/nts-sys/winston-chatwork-webhook-transport/actions/workflows/node.js.yml/badge.svg)](https://github.com/nts-sys/winston-chatwork-webhook-transport/actions/workflows/node.js.yml)

# winston-chatwork-webhook-transport

- node用のloggerであるwinstonについてChatworkへの投稿を行うためのtransport

## Installation

```
npm install winston winston-chatwork-webhook-transport
```

## Usage

- Chatwork ルームIDを確認する
  - https://help.chatwork.com/hc/ja/articles/360000142942-%E3%83%AB%E3%83%BC%E3%83%A0ID%E3%82%92%E7%A2%BA%E8%AA%8D%E3%81%99%E3%82%8B
- Chatwork APIトークンを発行する
  - https://help.chatwork.com/hc/ja/articles/115000172402-API%E3%83%88%E3%83%BC%E3%82%AF%E3%83%B3%E3%82%92%E7%99%BA%E8%A1%8C%E3%81%99%E3%82%8B

### Set up with transports

```Javascript
import * as dotenv from "dotenv";
import winston from "winston";
import { ChatworkHook } from "winston-chatwork-webhook-transport";

const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.splat(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console({ level: "debug" }),
    new ChatworkHook({
      level: "error",
      roomid: process.env.roomid,
      token: process.env.token,
    }),
  ],
});

logger.debug("Debug Message");
logger.info("Info Message");
logger.warn("Warn Message");
logger.error("Error Message");

```
