const alfy = require("alfy");
const got = require("got");

async function main() {
  try {
    const { body } = await got("http://127.0.0.1:6166/v1/profiles", {
      headers: {
        "X-key": "sss",
        "Content-Type": "application/json",
        Accept: "*/*",
      },
    });
    const { profiles: profileNames } = JSON.parse(body);
    const items = alfy.inputMatches(profileNames, undefined).map((element) => ({
      title: element,
      arg: element,
    }));
    alfy.output(items);
  } catch (err) {
    console.log(err);
  }
}

main();
