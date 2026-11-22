# Planting Tips — 室内可食用香草与厨余再生指南原型

这是一个以**“交互式对比总表 → 可验证步骤详情页”**为核心结构的静态网页原型，强调**植物学真相、可观察的验收标准、止损红线以及每条知识的书本/文献页码出处**。

## 目录结构

- `index.html` / `styles.css` / `app.js` — 前端交互原型（支持搜索、多维筛选、总表与详情页 Hash 路由、角标跳转高亮溯源）
- `data/schema.json` — 数据结构校验规范（JSON Schema）
- `data/plants.json` — 唯一事实数据源（已预置小葱、香菜、欧芹、芹菜、生姜、大蒜、罗勒 7 种高频植物与真实书目/权威出处）
- `data/plants-bundle.js` — 由构建脚本生成，保证直接双击 `index.html`（`file://`）也能正常加载
- `templates/plant-entry-template.md` — 配合 NotebookLM 整理新植物时使用的标准提问词与 Markdown 模板
- `scripts/validate_and_bundle.py` — 校验 `data/plants.json` 中每条步骤的 `source_refs` 是否有对应页码出处，并同步更新 `data/plants-bundle.js`
- `assets/media/` — 预留放置实拍图片与步骤演示视频的目录

## 本地预览方式

方式 A（推荐，使用本地静态服务器）：

```powershell
python -m http.server 8080
```

然后访问 `http://localhost:8080`。

方式 B：直接双击打开 `index.html`。

## 从 NotebookLM 添加新植物流程

1. 参考 `templates/plant-entry-template.md` 中的提示词，让 NotebookLM 输出带 `[书名, 第X页]` 的结构化内容。
2. 按 `data/schema.json` 格式添加到 `data/plants.json`（如有实拍图/视频可放到 `assets/media/`）。
3. 运行校验与打包脚本：

```powershell
python scripts/validate_and_bundle.py
```
