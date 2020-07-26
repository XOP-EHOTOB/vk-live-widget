const request = require("prequest");

module.exports = class Widget {
  constructor(token) {
    this.token = token;
  }

  async update(body) {
    return await request(
      {
        method: "POST",
        url: "https://api.vk.com/method/appWidgets.update",
        form: {
          v: "5.95",
          type: "table",
          code: `return ${JSON.stringify(body)};`,
          access_token: this.token,
        },
        headers: { "Content-type": "application/x-www-form-urlencoded" },
      },
      function (err, resp, body) {}
    );
  }
};
