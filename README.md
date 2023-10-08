# @codegenius/hooks-plugin

新增或修改 `simple-git-hooks` 配置后需要重新初始化, 支持命令模式和 **API** 模式;

使用场景: 用于 `simple-git-hooks` 来配置 `git hooks` 的使用, 方便初始化和更新时使用, 混用过 `husky` 的会按其文档进行删除操作.

### 命令模式

```bash
codeg hooks
```

### API 模式

```typescript
import { gitInitSimpleHooks } from "code-genius";

(async () => {
  await gitInitSimpleHooks();
})();
```
