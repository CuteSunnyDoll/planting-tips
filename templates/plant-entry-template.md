# 植物條目標準模板（配合 NotebookLM 整理導出）

你可以把下面的提問詞（Prompt）發給 NotebookLM，讓它嚴格按此格式整理某種植物並附上**書名與頁碼**：

> 請只根據我上傳的資料回答，不要編造。如果資料裡沒有提到某一項，請寫“資料未提及”。請為每一條關鍵操作標註 `[來源書名, 第X頁]`：
> 1. 植物名稱（中文 / 英文 / 學名）
> 2. 是否適合廚餘再生，還是更推薦播種 / 買苗分盆？原因是什麼？
> 3. 容器深度、配土要求、pH 或基肥要求
> 4. 光照需求與耐陰性
> 5. 分步驟操作（每步寫清楚：**動作**、**可觀察的驗收標準**、**失敗/腐爛紅線**）
> 6. 常見病蟲害與翻車原因

---

## Markdown 筆記模板

```markdown
---
id: green-onion
name_zh: 小蔥（香蔥 / 青蔥）
name_en: Green Onion (Scallion)
aliases: ["香蔥", "青蔥", "分蔥", "Scallions"]
botanical_name: Allium fistulosum
category: allium
scrap_regrow_verdict: high_value
best_starting_method: kitchen_scrap_water_to_soil
water_only_limit: 7–14 天（1–2 輪後必須轉土，否則越長越細）
light_requirement: bright_windowsill_ok
expected_harvest_window: 水培 5–7 天可剪第一茬；轉土後可持續數月
difficulty: 1
---

## 常見迷思 vs 實際種植真相
- **常見誤區**：...
- **真實科學原理**：... [src_1]

## 可驗證步驟
1. **保留蔥白與根盤**
   - 動作：...
   - 驗收標準（Checkpoint）：...
   - 失敗信號（Red Flag）：...
   - 來源：[src_1]

## 常見翻車點與對策
- **症狀**：水變渾濁發黏有異味
  - **根因**：...
  - **處理**：... [src_2]

## 參考資料與書本頁碼
- `[src_1]` 書名 / 網頁標題 | 作者/出版社 | 第 X 頁 / 章節 | URL（如有） | 已核驗: true/false
```
