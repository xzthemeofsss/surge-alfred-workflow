const alfy = require("alfy");
const fs = require("fs");
const path = require("path");

if (!process.env.apiToken) {
  alfy.output([
    {
      title: "Inject Surge API Setting",
      subtitle:
        "This operation will append http-api setting in all your configuration profiles",
    },
  ]);
  return;
}

const data = fs.readdirSync(
  `${process.env.HOME}/Library/Application\ Support/Surge/Profiles`
);

const profileNames = data
  .filter((d) => path.extname(d) === ".conf")
  .map((d) => path.parse(d).name);

const items = alfy.inputMatches(profileNames, undefined).map((element) => ({
  title: element,
  arg: element,
}));

alfy.output(items);
