# 苍鹭之影

与「苍鹭」星云灵魂对话的交互页面。星云粒子 + OpenRouter（Claude）对话。

## 在线预览（GitHub Pages）

代码已推送到 GitHub。**若还没开启 Pages**：打开 [仓库 Pages 设置](https://github.com/mayanzzz/----/settings/pages) → **Source** 选 **Deploy from a branch** → **Branch** 选 **main**，**Path** 选 **/ (root)** → 点 **Save**。等 1～2 分钟后访问：**https://mayanzzz.github.io/----/** 即可。

## 使用方式

- **直接打开**：用浏览器打开 `打开苍鹭之影.html`，在页面右下角「API Key」处粘贴 [OpenRouter API Key](https://openrouter.ai/keys)，即可对话。Key 仅保存在本机 localStorage，不会上传。
- **本地构建（可选）**：复制 `.env.example` 为 `.env`，填入 `OPENROUTER_API_KEY=你的key`，运行 `node build-open-html.js` 可生成已注入 Key 的 HTML（仅供本机使用，勿提交 `.env` 或该生成文件）。

**发布到 GitHub Pages 时**：网站根目录会加载 `index.html`。当前 `index.html` 已与 `打开苍鹭之影.html` 内容一致，效果与本地打开相同。若之后只改了 `打开苍鹭之影.html`，请再执行一次 `cp 打开苍鹭之影.html index.html`（或覆盖复制）后提交，以保持线上与本地一致。

## 技术

- Three.js 粒子 + GLSL 着色器、UnrealBloomPass
- OpenRouter API（默认 `anthropic/claude-3.5-sonnet`）

## 安全说明

- 仓库内 **不包含** 任何 API Key。
- `.env` 已加入 `.gitignore`，不会被提交。请勿将 `.env` 或含 Key 的文件推送到 GitHub。
