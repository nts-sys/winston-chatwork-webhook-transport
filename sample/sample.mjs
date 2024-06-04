import * as dotenv from "dotenv";
import winston from "winston";
import { ChatworkHook } from "../chatworkHook.mjs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, "../.env") });

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
