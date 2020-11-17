const request = require("request-promise-native");

async function main() {
  var name = process.argv[2];

  try {
    await request.post("http://127.0.0.1:6166/v1/profiles/switch", {
      body: JSON.stringify({ name }),
      headers: {
        "X-key": "sss",
        "Content-Type": "application/json",
        Accept: "*/*",
      },
    });
  } catch (err) {
    console.log(err);
  }
  console.log(name);
}

main();
