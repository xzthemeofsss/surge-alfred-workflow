const alfy = require("alfy");
const { client } = require("./client");

async function listProfiles() {
  const { body } = await client("/v1/profiles");
  return body.profiles;
}

async function getCurrentProfile() {
  const { body } = await client("/v1/profiles/current");
  return body.name;
}

async function main() {
  try {
    const [names, name] = await Promise.all([
      listProfiles(),
      getCurrentProfile(),
    ]);
    names.splice(names.indexOf(name), 1);
    names.unshift(name);
    const items = alfy.inputMatches(names, "title").map((element) => ({
      title: element,
      arg: element,
    }));
    alfy.output(items);
  } catch (err) {
    console.log(err);
  }
}

main();
