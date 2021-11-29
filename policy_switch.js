const { client } = require("./client");
const { listProxies } = require("./policy");

async function switchPolicy(name) {
  const { groups } = await listProxies();
  return client.post("/v1/policy_groups/select", {
    body: { group_name: groups[0], policy: name },
  });
}

async function main() {
  var name = process.argv[2];
  try {
    await switchPolicy(name);
    return name;
  } catch (err) {
    console.log(err);
  }
}

main();
