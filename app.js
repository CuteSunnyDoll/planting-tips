(function () {
  "use strict";

  const savedLang = (() => {
    try {
      return localStorage.getItem("planting_lang") === "en" ? "en" : "zh";
    } catch (_) {
      return "zh";
    }
  })();

  const state = {
    lang: savedLang,
    catalog: null,
    lighting: null,
    toolkit: null,
    search: "",
    filter: "all",
    envLight: "all",
    envDiff: "all",
  };

  const els = {
    viewTable: document.getElementById("view-table"),
    viewDetail: document.getElementById("view-detail"),
    viewLighting: document.getElementById("view-lighting"),
    viewSoil: document.getElementById("view-soil"),
    viewPests: document.getElementById("view-pests"),
    navPlants: document.getElementById("nav-plants"),
    navLighting: document.getElementById("nav-lighting"),
    navSoil: document.getElementById("nav-soil"),
    navPests: document.getElementById("nav-pests"),
    btnLangToggle: document.getElementById("btn-lang-toggle"),
    tbody: document.getElementById("plants-tbody"),
    emptyState: document.getElementById("empty-state"),
    searchInput: document.getElementById("search-input"),
    filterChips: document.getElementById("filter-chips"),
    countAll: document.getElementById("count-all"),
    statsStrip: document.getElementById("stats-strip"),
    envLightSelect: document.getElementById("env-light-select"),
    envDiffSelect: document.getElementById("env-diff-select"),
    envAdviceBox: document.getElementById("env-advice-box"),
  };

  const ZH_UI = {
    pageTitle: "室内可食用香草与厨余再生 · 诚实可验证指南",
    eyebrow: "Edible Herbs & Kitchen Scraps · Fact-Checked Guide",
    siteTitle: "室内可食用植物：防踩坑速查总表",
    siteSubtitle:
      '拒绝“清水泡出无限蔬菜”短视频幻觉 — 每种植物标注<strong>真实可行性</strong>、<strong>可验证验收点</strong>与<strong>书本/文献出处页码</strong>。',
    navPlants: "🌿 植物速查总表",
    navLighting: "💡 补光灯 PPFD/DLI",
    navSoil: "🪴 混栽与配土计算器",
    navPests: "🐛 病虫害与隔离检疫",
    btnNotebookLm: "NotebookLM 导入模板",
    langToggleLabel: "🌐 EN",
    wizardTitle: "🏠 按我家环境反向防死推荐",
    wizardSub: "勾选你的真实室内条件，自动过滤容易养死的品种",
    wizardLightLabel: "1. 我家光照条件",
    wizardLightAll: "不限（显示全部植物）",
    wizardLightNoGrow: "只有普通窗台 / 无补光灯（过滤强光死穴品种）",
    wizardLightHasGrow: "有全光谱补光灯 / 全日照南窗",
    wizardDiffLabel: "2. 我能接受的养护难度",
    wizardDiffAll: "不限难度 (1★ – 5★)",
    wizardDiffEasy: "纯新手零失败 (仅看 1★ – 2★)",
    wizardDiffMed: "进阶可折腾 (1★ – 3★)",
    searchPlaceholder: "搜索中英文名或别名，例如：香菜、cilantro、ginger、葱...",
    chipAll: "全部",
    chipHighValue: "高性价比再生",
    chipPartial: "仅收嫩叶 / 长期根茎",
    chipNotRec: "不建议菜梗水培",
    chipGrowLight: "需强光/补光灯",
    thName: "植物名称",
    thVerdict: "厨余再生评级",
    thStart: "推荐起点",
    thWaterLimit: "纯水培上限",
    thLight: "光照门槛",
    thHarvest: "收获周期",
    thSources: "出处数",
    emptyState: "没有匹配该筛选条件的植物，请清空搜索词或切换筛选标签。",
    btnBackTable: "← 返回总表",
    difficultyWord: "难度",
    citationsUnit: "条",
    specStart: "推荐起点",
    specWaterLimit: "纯水培上限",
    specLight: "光照门槛",
    specHarvestDiff: "收获周期与难度",
    specContainerSoil: "容器与配土实操规格",
    panelMythTitle: "网红误区 vs 植物学真相",
    kickerMyth: "常见流言 / 误区",
    kickerTruth: "可验证科学真相",
    panelStepsTitle: "可验证实操步骤（带验收标准与止损红线）",
    labelCheckpoint: "✅ 可验证验收标准：",
    labelRedflag: "⚠️ 失败红线 / 止损信号：",
    panelPitfallsTitle: "常见翻车症状与对策",
    labelSymptom: "症状：",
    labelCause: "根因：",
    labelFix: "处理：",
    panelMediaTitle: "关键动作图解 & 媒体参考",
    mediaPlaceholderTitle: "实拍图 / 演示视频扩展位",
    mediaPlaceholderHint1: "将实拍照片或 MP4 放入 ",
    mediaPlaceholderHint2: ' 并将 JSON 中 type 改为 "image" 或 "video" 即可叠加显示。',
    panelSourcesTitle: "出处与页码溯源",
    badgeVerified: "已核验出处",
    badgePending: "二手中转笔记",
    sourceTypeBook: "书籍",
    sourceTypeWeb: "网站/机构",
    sourceTypeCommunity: "社区共识",
    labelLocation: "定位：",
    linkViewSite: "查看原文网站 ↗",
    footerText:
      'Planting Tips Prototype · 数据源：<code>data/plants.json</code> · 每条步骤均需关联可核验出处',
    modalTitle: "从 NotebookLM 整理并导入新植物",
    modalDesc:
      '本原型的数据源文件为 <code>data/plants.json</code>，标准 Markdown 模板在 <code>templates/plant-entry-template.md</code>。建议在 NotebookLM 中使用下方提问词抽取书本原文与页码：',
    modalPrompt: `请只根据我上传的资料回答，不要编造。如果资料里没有提到某一项，请写“资料未提及”。请为每一条关键操作标注 [来源书名, 第X页]：
1. 植物名称（中文 / 英文 / 学名）
2. 是否适合厨余再生，还是更推荐播种 / 买苗分盆？原因是什么？
3. 容器深度、配土要求、pH 或基肥要求
4. 光照需求与耐阴性
5. 分步骤操作（每步写清楚：动作、可观察的验收标准、失败/腐烂红线）
6. 常见病虫害与翻车原因`,
    modalNote:
      '更新 <code>data/plants.json</code> 后运行：<code>python scripts/validate_and_bundle.py</code> 即可校验所有页码引用并重新生成前端数据包。',
  };

  function ui() {
    return state.lang === "en" && window.I18N_EN ? window.I18N_EN.ui : ZH_UI;
  }

  function escapeHtml(str) {
    return String(str ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function translatePageString(pageStr) {
    if (state.lang !== "en") return pageStr;
    return String(pageStr || "")
      .replace(/书本第\s*([0-9–\-]+)\s*页/g, "Book p. $1")
      .replace(/PDF\s*第\s*([0-9–, \-]+)\s*页/g, "PDF p. $1")
      .split(" — ")[0];
  }

  function localizeSource(src) {
    if (state.lang !== "en" || !window.I18N_EN) return src;
    const en = window.I18N_EN;
    return {
      ...src,
      title: en.book_titles?.[src.title] || src.title,
      author_or_publisher: en.authors?.[src.author_or_publisher] || src.author_or_publisher,
      page_or_section: translatePageString(src.page_or_section),
      quote_or_note: en.source_notes?.[src.ref_id] || src.quote_or_note,
    };
  }

  function localizePlant(p) {
    if (state.lang !== "en" || !window.I18N_EN?.plants?.[p.id]) {
      return {
        ...p,
        display_primary_name: p.name_zh,
        display_secondary_name: p.name_en,
      };
    }
    const ep = window.I18N_EN.plants[p.id];
    return {
      ...p,
      display_primary_name: p.name_en,
      display_secondary_name: p.name_zh,
      verdict_label: ep.verdict_label || p.verdict_label,
      starting_method_label: ep.starting_method_label || p.starting_method_label,
      water_only_limit: ep.water_only_limit || p.water_only_limit,
      light_label: ep.light_label || p.light_label,
      ppfd_dli: ep.ppfd_dli || p.ppfd_dli,
      container_and_soil: ep.container_and_soil || p.container_and_soil,
      expected_harvest_window: ep.expected_harvest_window || p.expected_harvest_window,
      hero_media: p.hero_media
        ? {
            ...p.hero_media,
            caption: p.hero_media.wiki_url
              ? `${p.name_en} (${p.botanical_name}) · Source: Wikipedia / Wikimedia Commons (CC / Public Domain)`
              : ep.hero_caption || p.hero_media.caption,
          }
        : p.hero_media,
      myth_vs_reality: {
        ...p.myth_vs_reality,
        common_myth: ep.myth_vs_reality?.common_myth || p.myth_vs_reality.common_myth,
        botanical_truth: ep.myth_vs_reality?.botanical_truth || p.myth_vs_reality.botanical_truth,
      },
      steps: p.steps.map((s, idx) => ({
        ...s,
        title: ep.steps?.[idx]?.title || s.title,
        action: ep.steps?.[idx]?.action || s.action,
        verification_checkpoint:
          ep.steps?.[idx]?.verification_checkpoint || s.verification_checkpoint,
        failure_signal: ep.steps?.[idx]?.failure_signal || s.failure_signal,
      })),
      pitfalls: p.pitfalls.map((pf, idx) => ({
        ...pf,
        symptom: ep.pitfalls?.[idx]?.symptom || pf.symptom,
        root_cause: ep.pitfalls?.[idx]?.root_cause || pf.root_cause,
        fix: ep.pitfalls?.[idx]?.fix || pf.fix,
      })),
      sources: p.sources.map(localizeSource),
    };
  }

  function applyStaticUiLanguage() {
    const t = ui();
    document.documentElement.lang = state.lang === "en" ? "en" : "zh-CN";
    document.title = t.pageTitle;
    const eyebrow = document.querySelector(".eyebrow");
    const siteTitle = document.querySelector(".site-title");
    const siteSubtitle = document.querySelector(".site-subtitle");
    if (eyebrow) eyebrow.textContent = t.eyebrow;
    if (siteTitle) siteTitle.textContent = t.siteTitle;
    if (siteSubtitle) siteSubtitle.innerHTML = t.siteSubtitle;

    els.navPlants.textContent = t.navPlants;
    els.navLighting.textContent = t.navLighting;
    els.navSoil.textContent = t.navSoil;
    els.navPests.textContent = t.navPests;
    if (els.btnLangToggle) els.btnLangToggle.textContent = t.langToggleLabel;

    // Wizard
    const wizHeader = document.querySelector(".env-wizard-header");
    if (wizHeader) {
      wizHeader.innerHTML = `<strong>${escapeHtml(t.wizardTitle)}</strong><span class="plant-sub">${escapeHtml(t.wizardSub)}</span>`;
    }
    const lblLight = document.querySelector('label[for="env-light-select"]');
    const lblDiff = document.querySelector('label[for="env-diff-select"]');
    if (lblLight) lblLight.textContent = t.wizardLightLabel;
    if (lblDiff) lblDiff.textContent = t.wizardDiffLabel;

    if (els.envLightSelect) {
      els.envLightSelect.options[0].textContent = t.wizardLightAll;
      els.envLightSelect.options[1].textContent = t.wizardLightNoGrow;
      els.envLightSelect.options[2].textContent = t.wizardLightHasGrow;
    }
    if (els.envDiffSelect) {
      els.envDiffSelect.options[0].textContent = t.wizardDiffAll;
      els.envDiffSelect.options[1].textContent = t.wizardDiffEasy;
      els.envDiffSelect.options[2].textContent = t.wizardDiffMed;
    }

    els.searchInput.placeholder = t.searchPlaceholder;

    // Filter chips
    const countVal = els.countAll ? els.countAll.textContent : "22";
    const chipAllBtn = els.filterChips.querySelector('[data-filter="all"]');
    if (chipAllBtn) {
      chipAllBtn.innerHTML = `${escapeHtml(t.chipAll)} (<span id="count-all">${escapeHtml(countVal)}</span>)`;
      els.countAll = document.getElementById("count-all");
    }
    const chipMap = {
      high_value: t.chipHighValue,
      partial_or_rhizome: t.chipPartial,
      not_recommended: t.chipNotRec,
      grow_light_required: t.chipGrowLight,
    };
    Object.entries(chipMap).forEach(([k, label]) => {
      const btn = els.filterChips.querySelector(`[data-filter="${k}"]`);
      if (btn) btn.textContent = label;
    });

    // Table headers
    const ths = document.querySelectorAll("#plants-table thead th");
    const thLabels = [
      t.thName,
      t.thVerdict,
      t.thStart,
      t.thWaterLimit,
      t.thLight,
      t.thHarvest,
      t.thSources,
    ];
    ths.forEach((th, idx) => {
      if (thLabels[idx]) th.textContent = thLabels[idx];
    });

    els.emptyState.textContent = t.emptyState;

    const footerSpan = document.querySelector(".site-footer .container span");
    if (footerSpan) footerSpan.innerHTML = t.footerText;
  }

  function renderCitations(refIds, sourceIndexMap) {
    return (refIds || [])
      .map((id) => {
        const info = sourceIndexMap.get(id);
        const num = info ? info.num : "?";
        const tip = state.lang === "en" ? `Jump to source #${num}` : `查看来源 #${num}`;
        return `<button class="cite-pill" type="button" data-ref="${escapeHtml(id)}" title="${tip}">[${num}]</button>`;
      })
      .join("");
  }

  function renderSvgDiagrams(diagramIds) {
    const dict =
      state.lang === "en" && window.I18N_EN?.diagrams
        ? window.I18N_EN.diagrams
        : window.SVG_DIAGRAMS || {};
    const valid = (diagramIds || []).map((k) => dict[k]).filter(Boolean);
    if (!valid.length) return "";
    return valid
      .map(
        (d) => `
      <div class="svg-diagram-card">
        <div class="svg-diagram-title">${escapeHtml(d.title)}</div>
        <div>${d.svg}</div>
        <div class="plant-sub" style="margin-top:6px;">${escapeHtml(d.caption)}</div>
      </div>
    `
      )
      .join("");
  }

  function matchesFilter(plant) {
    if (state.filter === "high_value") {
      return plant.scrap_regrow_verdict === "high_value";
    }
    if (state.filter === "partial_or_rhizome") {
      return (
        plant.scrap_regrow_verdict === "partial_greens_only" ||
        plant.scrap_regrow_verdict === "long_term_rhizome"
      );
    }
    if (state.filter === "not_recommended") {
      return plant.scrap_regrow_verdict === "not_recommended";
    }
    if (state.filter === "grow_light_required") {
      return plant.light_requirement === "grow_light_required";
    }
    return true;
  }

  function matchesEnvWizard(plant) {
    if (state.envLight === "no_grow_light" && plant.light_requirement === "grow_light_required") {
      return false;
    }
    if (state.envDiff === "easy_only" && plant.difficulty > 2) {
      return false;
    }
    if (state.envDiff === "medium_ok" && plant.difficulty > 3) {
      return false;
    }
    return true;
  }

  function updateEnvAdvice(filteredCount, totalCount) {
    if (!els.envAdviceBox) return;
    if (state.lang === "en") {
      if (state.envLight === "no_grow_light" && state.envDiff === "easy_only") {
        els.envAdviceBox.textContent = `✅ Best Beginner No-Grow-Light Picks (${filteredCount} plants): Start with Microgreens, Green Onions, Garlic Chives, Garlic Greens, Mint, Water Spinach, or Arugula. High-light casualties like Rosemary and Cilantro are hidden.`;
      } else if (state.envLight === "no_grow_light") {
        els.envAdviceBox.textContent = `💡 Hid high-light plants requiring grow lights (Rosemary, Thyme, Oregano, Cilantro, Sage, Basil). Showing ${filteredCount} / ${totalCount} windowsill-compatible plants.`;
      } else if (state.envDiff === "easy_only") {
        els.envAdviceBox.textContent = `🌱 Filtered to 1★–2★ beginner-proof crops (${filteredCount} / ${totalCount} plants) with highest survival rates.`;
      } else {
        els.envAdviceBox.textContent = `Showing ${filteredCount} / ${totalCount} plants. Without a grow light, use the left dropdown to filter out high-light Mediterranean herbs.`;
      }
      return;
    }
    if (state.envLight === "no_grow_light" && state.envDiff === "easy_only") {
      els.envAdviceBox.textContent = `✅ 新手无补光灯最优解（共 ${filteredCount} 种）：首推【芽苗菜、小葱、韭菜、大蒜苗、薄荷、空心菜、芝麻菜】，已为你自动过滤迷迭香、香菜等易死高光品种。`;
    } else if (state.envLight === "no_grow_light") {
      els.envAdviceBox.textContent = `💡 已隐藏必须配补光灯的高光品种（如迷迭香、百里香、牛至、香菜、鼠尾草、罗勒），当前保留 ${filteredCount} / ${totalCount} 种普通窗台可存活品种。`;
    } else if (state.envDiff === "easy_only") {
      els.envAdviceBox.textContent = `🌱 已筛选 1★–2★ 极简入门品种（${filteredCount} / ${totalCount} 种），容错率最高、最适合第一次动手。`;
    } else {
      els.envAdviceBox.textContent = `当前显示 ${filteredCount} / ${totalCount} 种植物；若家里无补光灯，可切换左侧下拉框一键排除易徒长暴毙的高光香草。`;
    }
  }

  function matchesSearch(plant) {
    const q = state.search.trim().toLowerCase();
    if (!q) return true;
    const lp = localizePlant(plant);
    const haystack = [
      plant.name_zh,
      plant.name_en,
      plant.botanical_name,
      ...(plant.aliases || []),
      lp.verdict_label,
      lp.starting_method_label,
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(q);
  }

  function renderTable() {
    const t = ui();
    const plants = state.catalog.plants;
    if (els.countAll) els.countAll.textContent = String(plants.length);

    const filtered = plants.filter(
      (p) => matchesFilter(p) && matchesEnvWizard(p) && matchesSearch(p)
    );
    updateEnvAdvice(filtered.length, plants.length);

    const totalSources = plants.reduce((acc, p) => acc + p.sources.length, 0);
    const verifiedSources = plants.reduce(
      (acc, p) => acc + p.sources.filter((s) => s.verified).length,
      0
    );

    els.statsStrip.textContent =
      state.lang === "en"
        ? `Showing ${filtered.length} / ${plants.length} plants · ${totalSources} total citations (${verifiedSources} verified) · Click any row for verifiable step-by-step instructions & diagrams`
        : `当前显示 ${filtered.length} / ${plants.length} 种植物 · 共收录 ${totalSources} 条引用出处（其中 ${verifiedSources} 条已核验）· 点击任意一行查看可验证步骤与图解`;

    if (filtered.length === 0) {
      els.tbody.innerHTML = "";
      els.emptyState.classList.remove("hidden");
      return;
    }

    els.emptyState.classList.add("hidden");
    els.tbody.innerHTML = filtered
      .map((rawPlant) => {
        const p = localizePlant(rawPlant);
        const verifiedCount = p.sources.filter((s) => s.verified).length;
        const stars = "★".repeat(p.difficulty);
        const thumbHtml =
          p.hero_media && p.hero_media.type === "image"
            ? `<img class="plant-thumb" src="${escapeHtml(p.hero_media.src)}" alt="${escapeHtml(p.display_primary_name)}" loading="lazy" />`
            : "";
        return `
          <tr data-plant-id="${escapeHtml(p.id)}">
            <td>
              <div class="plant-cell-flex">
                ${thumbHtml}
                <div>
                  <button class="plant-name-link" type="button" data-plant-id="${escapeHtml(p.id)}">
                    ${escapeHtml(p.display_primary_name)}
                  </button>
                  <div class="plant-sub">${escapeHtml(p.display_secondary_name)} · <em>${escapeHtml(p.botanical_name)}</em> · ${escapeHtml(t.difficultyWord)} ${stars}</div>
                </div>
              </div>
            </td>
            <td>
              <span class="badge badge-${escapeHtml(p.scrap_regrow_verdict)}">
                ${escapeHtml(p.verdict_label)}
              </span>
            </td>
            <td>${escapeHtml(p.starting_method_label)}</td>
            <td>${escapeHtml(p.water_only_limit)}</td>
            <td>${escapeHtml(p.light_label)}</td>
            <td>${escapeHtml(p.expected_harvest_window)}</td>
            <td><strong>${verifiedCount}</strong>/${p.sources.length} ${escapeHtml(t.citationsUnit)}</td>
          </tr>
        `;
      })
      .join("");
  }

  function renderMediaBlock(media, diagrams) {
    const t = ui();
    const svgHtml = renderSvgDiagrams(diagrams);
    let mediaHtml = "";
    if (!media || media.type === "none") {
      const targetPath = media?.src || "assets/media/your-photo.jpg";
      const caption = media?.caption || "";
      mediaHtml = `
        <div class="media-placeholder">
          <div><strong>${escapeHtml(t.mediaPlaceholderTitle)}</strong></div>
          <div style="margin: 6px 0;">${escapeHtml(caption)}</div>
          <div>${escapeHtml(t.mediaPlaceholderHint1)}<code>${escapeHtml(targetPath)}</code>${escapeHtml(t.mediaPlaceholderHint2)}</div>
        </div>
      `;
    } else if (media.type === "video") {
      mediaHtml = `
        <div class="media-frame">
          <video controls src="${escapeHtml(media.src)}"></video>
          <div class="plant-sub" style="margin-top:6px;">${escapeHtml(media.caption || "")}</div>
        </div>
      `;
    } else {
      const wikiLabel =
        state.lang === "en" ? "View Wikipedia Image Source ↗" : "查看维基百科开放版权图源 ↗";
      const wikiLink = media.wiki_url
        ? `<div style="margin-top:4px; font-size:12px;"><a href="${escapeHtml(media.wiki_url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(wikiLabel)}</a></div>`
        : "";
      mediaHtml = `
        <div class="media-frame">
          <img src="${escapeHtml(media.src)}" alt="${escapeHtml(media.caption || "")}" />
          <div class="plant-sub" style="margin-top:8px;">${escapeHtml(media.caption || "")}</div>
          ${wikiLink}
        </div>
      `;
    }
    return mediaHtml + svgHtml;
  }

  function renderDetail(plantId) {
    const rawPlant = state.catalog.plants.find((p) => p.id === plantId);
    if (!rawPlant) {
      location.hash = "";
      return;
    }
    const t = ui();
    const plant = localizePlant(rawPlant);

    const sourceIndexMap = new Map();
    plant.sources.forEach((src, i) => {
      sourceIndexMap.set(src.ref_id, { num: i + 1, src });
    });

    const stars = "★".repeat(plant.difficulty) + "☆".repeat(5 - plant.difficulty);
    const aliasLabel = state.lang === "en" ? "Aliases: " : "别名：";

    els.viewDetail.innerHTML = `
      <button class="btn btn-back" id="btn-back-table" type="button">${escapeHtml(t.btnBackTable)}</button>

      <div class="detail-hero">
        <div class="detail-title-row">
          <div>
            <h2 class="detail-title">${escapeHtml(plant.display_primary_name)} <span style="font-weight:400; color:var(--muted); font-size:20px;">${escapeHtml(plant.display_secondary_name)}</span></h2>
            <div class="detail-latin">${escapeHtml(plant.botanical_name)} · ${aliasLabel}${escapeHtml((plant.aliases || []).join(" / "))}</div>
          </div>
          <span class="badge badge-${escapeHtml(plant.scrap_regrow_verdict)}">${escapeHtml(plant.verdict_label)}</span>
        </div>

        <div class="specs-grid">
          <div class="spec-box">
            <div class="spec-label">${escapeHtml(t.specStart)}</div>
            <div class="spec-value">${escapeHtml(plant.starting_method_label)}</div>
          </div>
          <div class="spec-box">
            <div class="spec-label">${escapeHtml(t.specWaterLimit)}</div>
            <div class="spec-value">${escapeHtml(plant.water_only_limit)}</div>
          </div>
          <div class="spec-box">
            <div class="spec-label">${escapeHtml(t.specLight)}</div>
            <div class="spec-value">${escapeHtml(plant.light_label)}${plant.ppfd_dli ? `<div class="plant-sub" style="margin-top:4px;">${escapeHtml(plant.ppfd_dli)}</div>` : ""}</div>
          </div>
          <div class="spec-box">
            <div class="spec-label">${escapeHtml(t.specHarvestDiff)}</div>
            <div class="spec-value">${escapeHtml(plant.expected_harvest_window)} · ${stars}</div>
          </div>
          ${plant.container_and_soil ? `
          <div class="spec-box" style="grid-column: 1 / -1;">
            <div class="spec-label">${escapeHtml(t.specContainerSoil)}</div>
            <div class="spec-value">${escapeHtml(plant.container_and_soil)}</div>
          </div>` : ""}
        </div>
      </div>

      <div class="detail-grid">
        <div>
          <div class="panel">
            <h3>${escapeHtml(t.panelMythTitle)}</h3>
            <div class="myth-box">
              <div class="myth-card">
                <div class="card-kicker" style="color:var(--danger-text);">${escapeHtml(t.kickerMyth)}</div>
                <div>${escapeHtml(plant.myth_vs_reality.common_myth)}</div>
              </div>
              <div class="truth-card">
                <div class="card-kicker" style="color:var(--ok-text);">${escapeHtml(t.kickerTruth)}</div>
                <div>
                  ${escapeHtml(plant.myth_vs_reality.botanical_truth)}
                  ${renderCitations(plant.myth_vs_reality.source_refs, sourceIndexMap)}
                </div>
              </div>
            </div>
          </div>

          <div class="panel">
            <h3>${escapeHtml(t.panelStepsTitle)}</h3>
            ${plant.steps
              .map(
                (step) => `
              <div class="step-card">
                <div class="step-header">
                  <div>
                    <span class="step-num">${step.step_number}</span>
                    <span class="step-title">${escapeHtml(step.title)}</span>
                    ${renderCitations(step.source_refs, sourceIndexMap)}
                  </div>
                </div>
                <div>${escapeHtml(step.action)}</div>
                <div class="checkpoint-box">
                  <strong>${escapeHtml(t.labelCheckpoint)}</strong>${escapeHtml(step.verification_checkpoint)}
                </div>
                <div class="redflag-box">
                  <strong>${escapeHtml(t.labelRedflag)}</strong>${escapeHtml(step.failure_signal)}
                </div>
              </div>
            `
              )
              .join("")}
          </div>

          <div class="panel">
            <h3>${escapeHtml(t.panelPitfallsTitle)}</h3>
            ${plant.pitfalls
              .map(
                (pf) => `
              <div class="pitfall-item">
                <div><strong>${escapeHtml(t.labelSymptom)}</strong>${escapeHtml(pf.symptom)} ${renderCitations(pf.source_refs, sourceIndexMap)}</div>
                <div style="margin-top:4px; color:var(--muted);"><strong>${escapeHtml(t.labelCause)}</strong>${escapeHtml(pf.root_cause)}</div>
                <div style="margin-top:4px;"><strong>${escapeHtml(t.labelFix)}</strong>${escapeHtml(pf.fix)}</div>
              </div>
            `
              )
              .join("")}
          </div>
        </div>

        <div>
          <div class="panel">
            <h3>${escapeHtml(t.panelMediaTitle)}</h3>
            ${renderMediaBlock(plant.hero_media, plant.diagrams)}
          </div>

          <div class="panel" id="sources-panel">
            <h3>${escapeHtml(t.panelSourcesTitle)} (${plant.sources.length})</h3>
            ${plant.sources
              .map((src, idx) => {
                const typeMap = {
                  book: t.sourceTypeBook,
                  web: t.sourceTypeWeb,
                  community: t.sourceTypeCommunity,
                };
                const statusBadge = src.verified
                  ? `<span class="badge badge-source-verified">${escapeHtml(t.badgeVerified)}</span>`
                  : `<span class="badge badge-source-pending">${escapeHtml(t.badgePending)}</span>`;
                const linkHtml = src.url
                  ? `<a href="${escapeHtml(src.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(t.linkViewSite)}</a>`
                  : "";
                return `
                  <div class="source-item" id="source-${escapeHtml(src.ref_id)}">
                    <div class="source-meta">
                      <strong>[${idx + 1}] ${escapeHtml(src.title)}</strong>
                      ${statusBadge}
                    </div>
                    <div class="plant-sub">${escapeHtml(typeMap[src.source_type] || src.source_type)} · ${escapeHtml(src.author_or_publisher || "")}</div>
                    <div class="source-page" style="margin:6px 0 4px;">${escapeHtml(t.labelLocation)}${escapeHtml(src.page_or_section)}</div>
                    <div>${escapeHtml(src.quote_or_note || "")}</div>
                    ${linkHtml ? `<div style="margin-top:6px;">${linkHtml}</div>` : ""}
                  </div>
                `;
              })
              .join("")}
          </div>
        </div>
      </div>
    `;

    document.getElementById("btn-back-table").addEventListener("click", () => {
      location.hash = "";
    });

    els.viewDetail.querySelectorAll(".cite-pill").forEach((btn) => {
      btn.addEventListener("click", () => {
        const refId = btn.getAttribute("data-ref");
        const target = document.getElementById(`source-${refId}`);
        if (!target) return;
        target.scrollIntoView({ behavior: "smooth", block: "center" });
        target.classList.add("highlight");
        setTimeout(() => target.classList.remove("highlight"), 1600);
      });
    });
  }

  function renderLighting() {
    const rawLd = state.lighting;
    if (!rawLd) return;
    const isEn = state.lang === "en" && window.I18N_EN?.lighting;
    const ld = isEn ? { ...rawLd, ...window.I18N_EN.lighting } : rawLd;
    const t = ui();

    els.viewLighting.innerHTML = `
      <div class="detail-hero">
        <div class="detail-title-row">
          <div>
            <h2 class="detail-title">${escapeHtml(ld.title)}</h2>
            <div class="detail-latin" style="font-style:normal;"><code>${escapeHtml(ld.formula)}</code></div>
          </div>
          <span class="badge badge-high_value">${escapeHtml(isEn ? ld.badge : "可自测微调 · 附真实出处")}</span>
        </div>

        <div class="dli-calc-box" style="margin-top:18px; margin-bottom:0;">
          <div>
            <label for="calc-ppfd">${escapeHtml(isEn ? ld.calcPpfdLabel : "实测 PPFD (μmol/m²/s，可用手机 Photone App 粗测)")}</label>
            <input id="calc-ppfd" type="number" min="10" max="1500" value="250" />
          </div>
          <div>
            <label for="calc-hours">${escapeHtml(isEn ? ld.calcHoursLabel : "每日补光时长 (小时/天)")}</label>
            <input id="calc-hours" type="number" min="1" max="24" step="0.5" value="14" />
          </div>
          <div class="dli-result-box" id="dli-result-box"></div>
        </div>
      </div>

      <div class="panel">
        <h3>${escapeHtml(isEn ? ld.svgPanelTitle : "视觉图解：不同功率灯具的安全吊挂高度")}</h3>
        ${renderSvgDiagrams(["dli_distance"])}
      </div>

      <div class="panel">
        <h3>${escapeHtml(isEn ? ld.tableATitle : "附表 A：按香草品类与阶段的 PPFD / DLI / 吊挂距离目标")}</h3>
        <div class="table-scroll">
          <table class="plants-table">
            <thead>
              <tr>
                <th>${escapeHtml(isEn ? ld.thStage : "生长阶段 / 品类")}</th>
                <th>${escapeHtml(isEn ? ld.thExamples : "适用植物示例")}</th>
                <th>${escapeHtml(isEn ? ld.thPpfd : "目标 PPFD")}</th>
                <th>${escapeHtml(isEn ? ld.thDli : "目标 DLI")}</th>
                <th>${escapeHtml(isEn ? ld.thPhoto : "每日光周期")}</th>
                <th>${escapeHtml(isEn ? ld.thDist100 : "100–150W 面板建议距离")}</th>
                <th>${escapeHtml(isEn ? ld.thDist30 : "10–36W 灯条建议距离")}</th>
              </tr>
            </thead>
            <tbody>
              ${ld.stage_table
                .map(
                  (row) => `
                <tr>
                  <td><strong>${escapeHtml(row.stage)}</strong></td>
                  <td>${escapeHtml(row.examples)}</td>
                  <td>${escapeHtml(row.ppfd)}</td>
                  <td><strong>${escapeHtml(row.dli)}</strong></td>
                  <td>${escapeHtml(row.photoperiod)}</td>
                  <td>${escapeHtml(row.distance_100w)}</td>
                  <td>${escapeHtml(row.distance_30w)}</td>
                </tr>
              `
                )
                .join("")}
            </tbody>
          </table>
        </div>
      </div>

      <div class="panel">
        <h3>${escapeHtml(isEn ? ld.tableBTitle : "附表 B：不同灯具功率与类型对照")}</h3>
        <div class="table-scroll">
          <table class="plants-table">
            <thead>
              <tr>
                <th>${escapeHtml(isEn ? ld.thFixture : "灯具功率 / 类型")}</th>
                <th>${escapeHtml(isEn ? ld.thUseCase : "典型使用场景")}</th>
                <th>${escapeHtml(isEn ? ld.thSafeDist : "安全吊挂距离")}</th>
                <th>${escapeHtml(isEn ? ld.thNotes : "关键注意事项")}</th>
              </tr>
            </thead>
            <tbody>
              ${ld.wattage_table
                .map(
                  (row) => `
                <tr>
                  <td><strong>${escapeHtml(row.fixture_type)}</strong></td>
                  <td>${escapeHtml(row.typical_use)}</td>
                  <td><strong>${escapeHtml(row.safe_distance)}</strong></td>
                  <td>${escapeHtml(row.notes)}</td>
                </tr>
              `
                )
                .join("")}
            </tbody>
          </table>
        </div>
      </div>

      <div class="detail-grid">
        <div class="panel">
          <h3>${escapeHtml(isEn ? ld.diagPanelTitle : "不买专业仪器的植物反馈自检")}</h3>
          ${ld.diagnostics
            .map(
              (d) => `
            <div class="pitfall-item">
              <div><strong>${escapeHtml(d.signal)}</strong></div>
              <div style="margin-top:4px; color:var(--muted);"><strong>${escapeHtml(isEn ? ld.labelSymptoms : "常见表象：")}</strong>${escapeHtml(d.symptoms)}</div>
              <div style="margin-top:4px;"><strong>${escapeHtml(isEn ? ld.labelAction : "调整动作：")}</strong>${escapeHtml(d.action)}</div>
            </div>
          `
            )
            .join("")}
        </div>

        <div class="panel">
          <h3>${escapeHtml(isEn ? ld.sourcesPanelTitle : "本附表数据来源")} (${rawLd.sources.length})</h3>
          ${rawLd.sources
            .map(
              (s, i) => `
            <div class="source-item">
              <div class="source-meta">
                <strong>[${i + 1}] ${escapeHtml(s.title)}</strong>
                <span class="badge badge-source-verified">${escapeHtml(t.badgeVerified)}</span>
              </div>
              <div class="plant-sub">${escapeHtml(s.publisher)} · ${escapeHtml(s.page_or_section)}</div>
              ${s.url ? `<div style="margin-top:6px;"><a href="${escapeHtml(s.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(t.linkViewSite)}</a></div>` : ""}
            </div>
          `
            )
            .join("")}
        </div>
      </div>
    `;

    const ppfdInput = document.getElementById("calc-ppfd");
    const hoursInput = document.getElementById("calc-hours");
    const resultBox = document.getElementById("dli-result-box");

    function updateDli() {
      const ppfd = Math.max(0, Number(ppfdInput.value) || 0);
      const hours = Math.min(24, Math.max(0, Number(hoursInput.value) || 0));
      const dli = ppfd * hours * 0.0036;
      let verdict = "";
      if (dli < 8) {
        verdict = isEn
          ? ld.verdictLow
          : "偏暗（易徒长黄叶）：仅能勉强维持耐阴植物存活，建议降灯或延长时间。";
      } else if (dli < 14) {
        verdict = isEn
          ? ld.verdictMed
          : "中等光量：适合扦插幼苗、韭菜、小葱、散叶生菜、芝麻菜与半阴期薄荷。";
      } else if (dli < 18) {
        verdict = isEn
          ? ld.verdictGood
          : "充足叶用光量：薄荷、紫苏、欧芹、罗勒、香菜、空心菜均能健康生长。";
      } else {
        verdict = isEn
          ? ld.verdictHigh
          : "高光达标（18+）：可满足迷迭香、百里香、牛至、鼠尾草等地中海高光香草！";
      }
      resultBox.innerHTML = `
        <div class="spec-label">${escapeHtml(isEn ? ld.calcResultLabel : "计算结果 DLI")}</div>
        <div class="spec-value" style="font-size:18px; color:var(--ok-text);">${dli.toFixed(1)} mol/m²/day</div>
        <div class="plant-sub" style="margin-top:4px; color:var(--text);">${escapeHtml(verdict)}</div>
      `;
    }

    ppfdInput.addEventListener("input", updateDli);
    hoursInput.addEventListener("input", updateDli);
    updateDli();
  }

  function renderSoilAndCompatibility() {
    const rawTk = state.toolkit;
    if (!rawTk) return;
    const isEn = state.lang === "en" && window.I18N_EN?.toolkit;
    const tk = isEn ? { ...rawTk, ...window.I18N_EN.toolkit } : rawTk;

    els.viewSoil.innerHTML = `
      <div class="detail-hero">
        <div class="detail-title-row">
          <div>
            <h2 class="detail-title">${escapeHtml(isEn ? tk.soilHeroTitle : "同盆混栽干湿矩阵 & 配土升数计算器")}</h2>
            <div class="detail-latin" style="font-style:normal;">${escapeHtml(isEn ? tk.soilHeroSub : "防止“喜干迷迭香 + 喜湿罗勒 + 侵略性薄荷”种同一盆互相害死，并按花盆容量精确换算配土材料。")}</div>
          </div>
          <span class="badge badge-high_value">${escapeHtml(isEn ? tk.soilHeroBadge : "源自藤田智配土标准 & 园艺流体物理")}</span>
        </div>

        <div class="dli-calc-box" style="margin-top:18px; margin-bottom:0;">
          <div>
            <label for="soil-recipe-select">${escapeHtml(isEn ? tk.labelSelectRecipe : "选择配土配方")}</label>
            <select id="soil-recipe-select">
              ${tk.soil_recipes
                .map((r) => `<option value="${escapeHtml(r.id)}">${escapeHtml(r.name)}</option>`)
                .join("")}
            </select>
          </div>
          <div>
            <label for="soil-liters-input">${escapeHtml(isEn ? tk.labelPotLiters : "花盆总容量 (升 L，1加仑盆≈3.5L，标准长条盆≈10L)")}</label>
            <input id="soil-liters-input" type="number" min="0.5" max="100" step="0.5" value="3" />
          </div>
          <div class="dli-result-box" id="soil-recipe-meta"></div>
        </div>
      </div>

      <div class="panel" id="soil-calc-output"></div>

      <div class="panel">
        <h3>${escapeHtml(isEn ? tk.compatPanelTitle : "同盆混栽「干湿与根系隔离」矩阵")}</h3>
        <div class="compat-grid">
          ${tk.compatibility_groups
            .map(
              (g) => `
            <div class="compat-card">
              <div style="font-weight:700; font-size:15px; color:var(--accent); margin-bottom:6px;">${escapeHtml(g.group)}</div>
              <div class="plant-sub"><strong>${escapeHtml(isEn ? tk.labelMoisture : "浇水节奏：")}</strong>${escapeHtml(g.moisture)}</div>
              <div class="plant-sub"><strong>${escapeHtml(isEn ? tk.labelLightReq : "光照需求：")}</strong>${escapeHtml(g.light)}</div>
              <div style="margin:8px 0;"><strong>${escapeHtml(isEn ? tk.labelIncludedPlants : "包含植物：")}</strong>${escapeHtml(g.plants.join(isEn ? ", " : "、"))}</div>
              <div style="font-size:13px; color:var(--muted);">${escapeHtml(g.rule)}</div>
            </div>
          `
            )
            .join("")}
        </div>
      </div>

      <div class="detail-grid">
        <div class="panel">
          <h3>${escapeHtml(isEn ? tk.physicsPanelTitle : "容器物理红线：为什么盆底绝不垫碎石")}</h3>
          ${renderSvgDiagrams(["pwt", "superpot_split"])}
        </div>

        <div class="panel">
          <h3>${escapeHtml(isEn ? tk.companionPanelTitle : "书中实测伴生防虫组合（《最新有机》第105页）")}</h3>
          ${tk.companion_pairs
            .map(
              (cp) => `
            <div class="pitfall-item">
              <div><strong>${escapeHtml(isEn ? tk.labelPair : "组合：")}${escapeHtml(cp.pair)}</strong></div>
              <div style="margin-top:4px;">${escapeHtml(isEn ? tk.labelEffect : "功效：")}${escapeHtml(cp.effect)}</div>
              <div class="plant-sub" style="margin-top:4px;">${escapeHtml(isEn ? tk.labelSource : "出处：")}${escapeHtml(cp.source)}</div>
            </div>
          `
            )
            .join("")}
        </div>
      </div>
    `;

    const recipeSelect = document.getElementById("soil-recipe-select");
    const litersInput = document.getElementById("soil-liters-input");
    const metaBox = document.getElementById("soil-recipe-meta");
    const outPanel = document.getElementById("soil-calc-output");

    function updateSoilCalc() {
      const recipe =
        tk.soil_recipes.find((r) => r.id === recipeSelect.value) || tk.soil_recipes[0];
      const liters = Math.max(0.5, Number(litersInput.value) || 1);

      metaBox.innerHTML = `
        <div class="spec-label">${escapeHtml(isEn ? tk.labelSuitableFor : "适用植物")}</div>
        <div class="spec-value">${escapeHtml(recipe.suitable_for)}</div>
        <div class="plant-sub" style="margin-top:4px;">${escapeHtml(isEn ? tk.labelSource : "出处：")}${escapeHtml(recipe.source_ref)}</div>
      `;

      const compRows = recipe.components
        .map((c) => {
          const volL = ((liters * c.ratio_pct) / 100).toFixed(2);
          const volMl = Math.round((liters * 1000 * c.ratio_pct) / 100);
          return `
            <tr>
              <td><strong>${escapeHtml(c.material)}</strong></td>
              <td>${c.ratio_pct}%</td>
              <td><strong>${volL}${escapeHtml(isEn ? " L" : " 升")}</strong> (${volMl} ml)</td>
            </tr>
          `;
        })
        .join("");

      const addRows = (recipe.additives_per_liter || [])
        .map((a) => {
          const totalG = Math.round(a.amount_g * liters);
          return `
            <tr>
              <td>${escapeHtml(a.name)}</td>
              <td>${a.amount_g}${escapeHtml(isEn ? " g / L" : " 克 / 升")}</td>
              <td><strong>${escapeHtml(isEn ? `~${totalG} g` : `约 ${totalG} 克`)}</strong></td>
            </tr>
          `;
        })
        .join("");

      outPanel.innerHTML = `
        <h3>${escapeHtml(isEn ? `${tk.calcOutputTitlePrefix}${liters}${tk.calcOutputTitleSuffix}` : `计算明细（按 ${liters} 升盆容量换算）`)}</h3>
        <div class="table-scroll">
          <table class="plants-table">
            <thead>
              <tr>
                <th>${escapeHtml(isEn ? tk.thMaterial : "基质 / 添加物名称")}</th>
                <th>${escapeHtml(isEn ? tk.thRatio : "配比标准")}</th>
                <th>${escapeHtml(isEn ? `${tk.thAmountPrefix}${liters}${tk.thAmountSuffix}` : `${liters} 升花盆所需用量`)}</th>
              </tr>
            </thead>
            <tbody>
              ${compRows}
              ${addRows}
            </tbody>
          </table>
        </div>
        <div class="checkpoint-box" style="margin-top:12px;">
          <strong>${escapeHtml(isEn ? tk.labelPracticalNote : "📌 实操说明：")}</strong>${escapeHtml(recipe.note)}
        </div>
      `;
    }

    recipeSelect.addEventListener("change", updateSoilCalc);
    litersInput.addEventListener("input", updateSoilCalc);
    updateSoilCalc();
  }

  function renderPestsAndQuarantine() {
    const rawTk = state.toolkit;
    if (!rawTk) return;
    const isEn = state.lang === "en" && window.I18N_EN?.toolkit;
    const tk = isEn ? { ...rawTk, ...window.I18N_EN.toolkit } : rawTk;

    els.viewPests.innerHTML = `
      <div class="detail-hero">
        <div class="detail-title-row">
          <div>
            <h2 class="detail-title">${escapeHtml(isEn ? tk.pestsHeroTitle : "室内病虫害看图急救 & 新买盆栽隔离检疫清单")}</h2>
            <div class="detail-latin" style="font-style:normal;">${escapeHtml(isEn ? tk.pestsHeroSub : "整合《最新有机家庭盆栽种菜法》第 105–110 页与《阳台种菜全攻略》PDF 第 9–10 页。")}</div>
          </div>
          <span class="badge badge-not_recommended">${escapeHtml(isEn ? tk.pestsHeroBadge : "预防重于治疗 · 买苗必隔离")}</span>
        </div>
      </div>

      <div class="panel">
        <h3>${escapeHtml(isEn ? tk.pestsTableTitle : "常见病虫害与生理故障：看症状快速止损表")}</h3>
        <div class="table-scroll">
          <table class="plants-table">
            <thead>
              <tr>
                <th>${escapeHtml(isEn ? tk.thPestSymptom : "观察到的症状")}</th>
                <th>${escapeHtml(isEn ? tk.thPestCause : "真实病因 / 虫源")}</th>
                <th>${escapeHtml(isEn ? tk.thPestFix : "立刻执行的急救动作")}</th>
                <th>${escapeHtml(isEn ? tk.thPestSource : "核验出处")}</th>
              </tr>
            </thead>
            <tbody>
              ${tk.pest_diagnostics
                .map(
                  (pd) => `
                <tr>
                  <td><strong>${escapeHtml(pd.symptom)}</strong></td>
                  <td>${escapeHtml(pd.cause)}</td>
                  <td>${escapeHtml(pd.emergency_fix)}</td>
                  <td class="plant-sub">${escapeHtml(pd.source)}</td>
                </tr>
              `
                )
                .join("")}
            </tbody>
          </table>
        </div>
      </div>

      <div class="detail-grid">
        <div class="panel">
          <h3>${escapeHtml(isEn ? tk.sopPanelTitle : "超市 / 苗圃新买活盆：7–14 天防虫隔离 SOP")}</h3>
          <ol class="sop-list">
            ${tk.quarantine_sop.map((step) => `<li>${escapeHtml(step)}</li>`).join("")}
          </ol>
        </div>

        <div class="panel">
          <h3>${escapeHtml(isEn ? tk.spraysPanelTitle : "家庭厨房安全自然喷剂配方（藤田智 p.109–110）")}</h3>
          ${tk.natural_sprays
            .map(
              (sp) => `
            <div class="step-card">
              <div class="step-title">${escapeHtml(sp.name)}</div>
              <div style="margin-top:6px;"><strong>${escapeHtml(isEn ? tk.labelIngredients : "材料：")}</strong>${escapeHtml(sp.ingredients)}</div>
              <div style="margin-top:6px;"><strong>${escapeHtml(isEn ? tk.labelMethod : "做法与用法：")}</strong>${escapeHtml(sp.steps)}</div>
              <div class="plant-sub" style="margin-top:6px;">${escapeHtml(isEn ? tk.labelSource : "出处：")}${escapeHtml(sp.source)}</div>
            </div>
          `
            )
            .join("")}
        </div>
      </div>
    `;
  }

  function handleRoute() {
    applyStaticUiLanguage();
    const hash = location.hash || "";
    const match = hash.match(/^#plant\/([a-z0-9-]+)$/);

    els.navPlants.classList.toggle("active", !["#lighting", "#soil", "#pests"].includes(hash));
    els.navLighting.classList.toggle("active", hash === "#lighting");
    els.navSoil.classList.toggle("active", hash === "#soil");
    els.navPests.classList.toggle("active", hash === "#pests");

    [els.viewTable, els.viewDetail, els.viewLighting, els.viewSoil, els.viewPests].forEach((v) =>
      v.classList.add("hidden")
    );

    if (hash === "#lighting") {
      els.viewLighting.classList.remove("hidden");
      renderLighting();
      window.scrollTo({ top: 0, behavior: "instant" });
    } else if (hash === "#soil") {
      els.viewSoil.classList.remove("hidden");
      renderSoilAndCompatibility();
      window.scrollTo({ top: 0, behavior: "instant" });
    } else if (hash === "#pests") {
      els.viewPests.classList.remove("hidden");
      renderPestsAndQuarantine();
      window.scrollTo({ top: 0, behavior: "instant" });
    } else if (match) {
      els.viewDetail.classList.remove("hidden");
      renderDetail(match[1]);
      window.scrollTo({ top: 0, behavior: "instant" });
    } else {
      els.viewTable.classList.remove("hidden");
      renderTable();
    }
  }

  function bindEvents() {
    els.searchInput.addEventListener("input", (e) => {
      state.search = e.target.value;
      renderTable();
    });

    if (els.btnLangToggle) {
      els.btnLangToggle.addEventListener("click", () => {
        state.lang = state.lang === "en" ? "zh" : "en";
        try {
          localStorage.setItem("planting_lang", state.lang);
        } catch (_) {}
        handleRoute();
      });
    }

    if (els.envLightSelect) {
      els.envLightSelect.addEventListener("change", (e) => {
        state.envLight = e.target.value;
        renderTable();
      });
    }

    if (els.envDiffSelect) {
      els.envDiffSelect.addEventListener("change", (e) => {
        state.envDiff = e.target.value;
        renderTable();
      });
    }

    els.filterChips.addEventListener("click", (e) => {
      const btn = e.target.closest(".chip");
      if (!btn) return;
      els.filterChips.querySelectorAll(".chip").forEach((c) => c.classList.remove("active"));
      btn.classList.add("active");
      state.filter = btn.getAttribute("data-filter");
      renderTable();
    });

    els.tbody.addEventListener("click", (e) => {
      const row = e.target.closest("tr[data-plant-id]");
      if (!row) return;
      const pid = row.getAttribute("data-plant-id");
      location.hash = `#plant/${pid}`;
    });

    els.navPlants.addEventListener("click", () => {
      location.hash = "";
    });

    els.navLighting.addEventListener("click", () => {
      location.hash = "#lighting";
    });

    els.navSoil.addEventListener("click", () => {
      location.hash = "#soil";
    });

    els.navPests.addEventListener("click", () => {
      location.hash = "#pests";
    });

    window.addEventListener("hashchange", handleRoute);
  }

  async function init() {
    if (window.PLANTS_DATA) {
      state.catalog = window.PLANTS_DATA;
    } else {
      const res = await fetch("data/plants.json");
      state.catalog = await res.json();
    }
    if (window.LIGHTING_DATA) {
      state.lighting = window.LIGHTING_DATA;
    } else {
      const resL = await fetch("data/lighting-guide.json");
      state.lighting = await resL.json();
    }
    if (window.TOOLKIT_DATA) {
      state.toolkit = window.TOOLKIT_DATA;
    } else {
      const resT = await fetch("data/toolkit-guide.json");
      state.toolkit = await resT.json();
    }
    bindEvents();
    handleRoute();
  }

  init();
})();
