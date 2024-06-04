import Transport from "winston-transport";
import * as https from "https";

export class ChatworkHook extends Transport {
  constructor(opts) {
    super(opts);

    opts = opts || {};

    this.name = opts.name || "chatworkWebhook";
    this.level = opts.level || undefined;
    this.roomid = opts.roomid || undefined;
    this.token = opts.token || undefined;
  }

  async log(info, callback) {
    const host = "api.chatwork.com";

    let bodyText = `${info.level}: ${info.message}`;
    const data = "body=" + bodyText;

    // console.log(data);
    const options = {
      hostname: host,
      port: 443,
      path: "/v2/rooms/" + this.roomid + "/messages",
      method: "POST",
      headers: {
        "X-ChatWorkToken": this.token,
        "Content-Type": "application/x-www-form-urlencoded",
        "Content-Length": Buffer.byteLength(data),
      },
    };

    const req = https.request(options, (res) => {
      res.setEncoding("utf8");
      res.on("data", (d) => {
        callback();
      });
    });

    req.on("error", (e) => {
      console.error(e);
    });

    req.write(data);
    req.end();
  }
}
