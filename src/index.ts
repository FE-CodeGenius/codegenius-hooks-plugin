import { existsSync } from "node:fs";
import path from "node:path";

import type { CAC } from "cac";
import { execCommand } from "code-genius";

const gitInitSimpleHooks = async () => {
  const dohusky = path.join(process.cwd(), ".husky");
  const githooks = path.join(process.cwd(), ".git", "hooks");
  const exists = existsSync(dohusky);
  if (exists) {
    await execCommand("npx", ["rimraf", dohusky], {
      stdio: "inherit",
    });
    await execCommand("git", ["config", "core.hooksPath", githooks], {
      stdio: "inherit",
    });
  }
  await execCommand("npx", ["rimraf", githooks], {
    stdio: "inherit",
  });
  await execCommand("npx", ["simple-git-hooks"], { stdio: "inherit" });
};

const gitInitSimpleHooksInstaller = () => {
  return {
    name: "hooks",
    describe: "新增或修改 simple-git-hooks 配置后需要重新初始化",
    command: "hooks",
    setup: (cli: CAC) => {
      cli
        .command("hooks", "新增或修改 simple-git-hooks 配置后需要重新初始化")
        .action(async () => await gitInitSimpleHooks());
    },
  };
};

export { gitInitSimpleHooks, gitInitSimpleHooksInstaller };
