[![Node.js CI](https://github.com/nts-sys/winston-chatwork-webhook-transport/actions/workflows/node.js.yml/badge.svg)](https://github.com/nts-sys/winston-chatwork-webhook-transport/actions/workflows/node.js.yml)

# winston-chatwork-webhook-transport

- node用のloggerであるwinstonについてChatworkへの投稿を行うためのtransport

## Installation

```
npm install winston winston-chatwork-webhook-transport
```

## Usage

### Set up with transports

```Javascript
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
