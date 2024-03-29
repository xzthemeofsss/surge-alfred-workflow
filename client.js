const got = require("got");

const key = process.env.apiToken;
const port = process.env.port || 6171;
export const client = got.extend({
  baseUrl: `http://127.0.0.1:${port}`,
  json: true,
  headers: {
    "X-key": key,
    "Content-Type": "application/json",
    Accept: "*/*",
  },
});
