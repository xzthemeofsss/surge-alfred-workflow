const { client } = require("./client");

async function switchProfile(name) {
  return client.post("/v1/profiles/switch", { body: { name } });
}

async function main() {
  var name = process.argv[2];
  try {
    await switchProfile(name);
  } catch (err) {
    console.log(err);
  }
  console.log(name);
}

main();
