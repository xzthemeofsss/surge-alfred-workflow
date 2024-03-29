const alfy = require("alfy");
const { client } = require("./client");

export async function listProxies() {
  const { body } = await client.get("/v1/policies");
  return { proxies: body.proxies, groups: body["policy-groups"] };
}
async function getCurrentPolicy(groupName) {
  const { body } = await client(
    `/v1/policy_groups/select?group_name=${groupName}`
  );
  return body.policy;
}

async function main() {
  try {
    const { proxies, groups } = await listProxies();
    const proxy = await getCurrentPolicy(groups[0]);
    process.env.group = groups[0];
    proxies.splice(proxies.indexOf(proxy), 1);
    proxies.unshift(proxy);
    const items = alfy.inputMatches(proxies, "title").map((element) => ({
      title: element,
      arg: element,
    }));
    alfy.output(items);
  } catch (err) {
    console.log(err);
  }
}

main();
