# @codegenius/hooks-plugin

新增或修改 `simple-git-hooks` 配置后需要重新初始化, 支持命令模式和 **API** 模式;

使用场景: 用于 `simple-git-hooks` 来配置 `git hooks` 的使用, 方便初始化和更新时使用, 混用过 `husky` 的会按其文档进行删除操作.

## 安装

```bash
npm i @codegenius/hooks-plugin -D
```

```javascript
import { defineConfig } from "code-genius";
import { gitInitSimpleHooksInstaller } from "@codegenius/hooks-plugin";

export default defineConfig({
  plugins: [
    gitInitSimpleHooksInstaller(),
  ],
});
```

## 使用

### 命令模式

```bash
codeg hooks
```

### API 模式

```typescript
import { gitInitSimpleHooks } from "@codegenius/hooks-plugin";

(async () => {
  await gitInitSimpleHooks();
})();
```
