# Planting Tips — 室內可食用香草與廚餘再生指南原型

這是一個以**“交互式對比總表 → 可驗證步驟詳情頁”**為核心結構的靜態網頁原型，強調**植物學真相、可觀察的驗收標準、止損紅線以及每條知識的書本/文獻頁碼出處**。

## 目錄結構

- `index.html` / `styles.css` / `app.js` — 前端交互原型（支持搜索、多維篩選、總表與詳情頁 Hash 路由、角標跳轉高亮溯源）
- `data/schema.json` — 數據結構校驗規範（JSON Schema）
- `data/plants.json` — 唯一事實數據源（已預置小蔥、香菜、歐芹、芹菜、生薑、大蒜、羅勒 7 種高頻植物與真實書目/權威出處）
- `data/plants-bundle.js` — 由構建腳本生成，保證直接雙擊 `index.html`（`file://`）也能正常加載
- `templates/plant-entry-template.md` — 配合 NotebookLM 整理新植物時使用的標準提問詞與 Markdown 模板
- `scripts/validate_and_bundle.py` — 校驗 `data/plants.json` 中每條步驟的 `source_refs` 是否有對應頁碼出處，並同步更新 `data/plants-bundle.js`
- `assets/media/` — 預留放置實拍圖片與步驟演示視頻的目錄

## 本地預覽方式

方式 A（推薦，使用本地靜態服務器）：

```powershell
python -m http.server 8080
```

然後訪問 `http://localhost:8080`。

方式 B：直接雙擊打開 `index.html`。

## 從 NotebookLM 添加新植物流程

1. 參考 `templates/plant-entry-template.md` 中的提示詞，讓 NotebookLM 輸出帶 `[書名, 第X頁]` 的結構化內容。
2. 按 `data/schema.json` 格式添加到 `data/plants.json`（如有實拍圖/視頻可放到 `assets/media/`）。
3. 運行校驗與打包腳本：

```powershell
python scripts/validate_and_bundle.py
```
