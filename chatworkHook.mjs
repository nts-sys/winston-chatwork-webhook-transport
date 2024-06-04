import Transport from "winston-transport";
import * as https from "https";

export class ChatworkHook extends Transport {
  constructor(opts) {
    super(opts);

    opts = opts || {};

    this.name = opts.name || "chatworkWebhook";
    this.level = opts.level || undefined;
    this.formatter = opts.formatter || undefined;
    this.roomid = opts.roomid || undefined;
    this.token = opts.token || undefined;
  }

  async log(info, callback) {
    const host = "api.chatwork.com";

    let bodyText = `${info.level}: ${info.message}`;
    // if (this.formatter && typeof this.formatter === "function") {
    //   let layout = this.formatter(info);

    //   if (!layout) {
    //     callback();

    //     return;
    //   }

    //   // Note: Supplying `text` when `blocks` is also supplied will cause `text`
    //   // to be used as a fallback for clients/surfaces that don't suopport blocks
    //   Object.keys(layout).forEach((key) => {
    //     payload[key] = layout[key];
    //   });
    // } else {
    //   bodyText = `${info.level}: ${info.message}`;
    // }
    const data = "body=" + bodyText;

    console.log(data);
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

    // let req = https.request(options, (res) => {
    //   console.log("status code : " + res.statusCode);
    //   res.setEncoding("utf8");
    //   res.on("data", (d) => {
    //     console.log(d);
    //     callback();
    //   });
    // });

    // req.on("error", (e) => {
    //   console.error(e);
    // });

    // req.write(data);
    // req.end();
  }
}
