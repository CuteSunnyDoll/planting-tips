# 植物条目标准模板（配合 NotebookLM 整理导出）

你可以把下面的提问词（Prompt）发给 NotebookLM，让它严格按此格式整理某种植物并附上**书名与页码**：

> 请只根据我上传的资料回答，不要编造。如果资料里没有提到某一项，请写“资料未提及”。请为每一条关键操作标注 `[来源书名, 第X页]`：
> 1. 植物名称（中文 / 英文 / 学名）
> 2. 是否适合厨余再生，还是更推荐播种 / 买苗分盆？原因是什么？
> 3. 容器深度、配土要求、pH 或基肥要求
> 4. 光照需求与耐阴性
> 5. 分步骤操作（每步写清楚：**动作**、**可观察的验收标准**、**失败/腐烂红线**）
> 6. 常见病虫害与翻车原因

---

## Markdown 笔记模板

```markdown
---
id: green-onion
name_zh: 小葱（香葱 / 青葱）
name_en: Green Onion (Scallion)
aliases: ["香葱", "青葱", "分葱", "Scallions"]
botanical_name: Allium fistulosum
category: allium
scrap_regrow_verdict: high_value
best_starting_method: kitchen_scrap_water_to_soil
water_only_limit: 7–14 天（1–2 轮后必须转土，否则越长越细）
light_requirement: bright_windowsill_ok
expected_harvest_window: 水培 5–7 天可剪第一茬；转土后可持续数月
difficulty: 1
---

## 网红误区 vs 植物学真相
- **常见误区**：...
- **真实科学原理**：... [src_1]

## 可验证步骤
1. **保留葱白与根盘**
   - 动作：...
   - 验收标准（Checkpoint）：...
   - 失败信号（Red Flag）：...
   - 来源：[src_1]

## 常见翻车点与对策
- **症状**：水变浑浊发黏有异味
  - **根因**：...
  - **处理**：... [src_2]

## 出处与页码溯源
- `[src_1]` 书名 / 网页标题 | 作者/出版社 | 第 X 页 / 章节 | URL（如有） | 已核验: true/false
```
