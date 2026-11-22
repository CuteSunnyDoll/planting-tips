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
    pageTitle: "室內可食用香草與廚餘再生 · 誠實可驗證指南",
    eyebrow: "Edible Herbs & Kitchen Scraps · Fact-Checked Guide",
    siteTitle: "室內可食用植物：防踩坑速查總表",
    siteSubtitle:
      '破除「光靠清水就能無限收成」的網路迷思 — 每種植物皆標註<strong>真實可行性</strong>、<strong>成功判斷指標</strong>與<strong>書本／文獻出處頁碼</strong>。',
    navPlants: "🌿 植物速查總表",
    navLighting: "💡 補光燈 PPFD/DLI",
    navSoil: "🪴 混栽與配土計算器",
    navPests: "🐛 病蟲害與隔離檢疫",
    btnNotebookLm: "NotebookLM 導入模板",
    langToggleLabel: "🌐 EN",
    wizardTitle: "🏠 按我家條件挑選植物（新手避坑篩選）",
    wizardSub: "選擇你家的實際光線與照顧習慣，自動篩選出最容易種活的植物",
    wizardLightLabel: "1. 我家光照條件",
    wizardLightAll: "不限（顯示全部植物）",
    wizardLightNoGrow: "只有一般窗臺 / 無植物燈（自動隱藏需強光品種）",
    wizardLightHasGrow: "有全光譜補光燈 / 全日照南窗",
    wizardDiffLabel: "2. 我能接受的養護難度",
    wizardDiffAll: "不限難度 (1★ – 5★)",
    wizardDiffEasy: "新手好養首選 (僅看 1★ – 2★)",
    wizardDiffMed: "一般進階照顧 (1★ – 3★)",
    searchPlaceholder: "搜索中英文名或別名，例如：香菜、cilantro、ginger、蔥...",
    chipAll: "全部",
    chipHighValue: "高性價比再生",
    chipPartial: "僅收嫩葉 / 長期根莖",
    chipNotRec: "不建議菜梗水培",
    chipGrowLight: "需強光/補光燈",
    thName: "植物名稱",
    thVerdict: "廚餘再生評估",
    thStart: "建議起步方式",
    thWaterLimit: "純水耕上限",
    thLight: "光照需求",
    thHarvest: "收穫週期",
    thSources: "參考出處",
    emptyState: "沒有匹配該篩選條件的植物，請清空搜索詞或切換篩選標籤。",
    btnBackTable: "← 返回總表",
    difficultyWord: "難度",
    citationsUnit: "條",
    specStart: "建議起步方式",
    specWaterLimit: "純水耕上限",
    specLight: "光照需求",
    specHarvestDiff: "收穫週期與難度",
    specContainerSoil: "容器與配土實操規格",
    panelMythTitle: "常見迷思 vs 實際種植真相",
    kickerMyth: "網路常見迷思",
    kickerTruth: "植物學與實測真相",
    panelStepsTitle: "詳細種植步驟（附成功指標與失敗警訊）",
    labelCheckpoint: "✅ 成功指標（如何確認做對）：",
    labelRedflag: "⚠️ 失敗警訊（出現此狀況請立即處理）：",
    panelPitfallsTitle: "常見問題與急救對策",
    labelSymptom: "症狀：",
    labelCause: "根因：",
    labelFix: "處理：",
    panelMediaTitle: "關鍵步驟圖解 & 植物照片",
    mediaPlaceholderTitle: "實拍圖 / 演示視頻擴展位",
    mediaPlaceholderHint1: "將實拍照片或 MP4 放入 ",
    mediaPlaceholderHint2: ' 並將 JSON 中 type 改為 "image" 或 "video" 即可疊加顯示。',
    panelSourcesTitle: "參考資料與書本頁碼",
    badgeVerified: "已核驗出處",
    badgePending: "整理筆記（待補原始出處）",
    sourceTypeBook: "書籍",
    sourceTypeWeb: "網站/機構",
    sourceTypeCommunity: "社區共識",
    labelLocation: "定位：",
    linkViewSite: "查看原文網站 ↗",
    footerText:
      'Planting Tips Prototype · 數據源：<code>data/plants.json</code> · 每條步驟均需關聯可核驗出處',
    modalTitle: "從 NotebookLM 整理並導入新植物",
    modalDesc:
      '本原型的數據源文件為 <code>data/plants.json</code>，標準 Markdown 模板在 <code>templates/plant-entry-template.md</code>。建議在 NotebookLM 中使用下方提問詞抽取書本原文與頁碼：',
    modalPrompt: `請只根據我上傳的資料回答，不要編造。如果資料裡沒有提到某一項，請寫“資料未提及”。請為每一條關鍵操作標註 [來源書名, 第X頁]：
1. 植物名稱（中文 / 英文 / 學名）
2. 是否適合廚餘再生，還是更推薦播種 / 買苗分盆？原因是什麼？
3. 容器深度、配土要求、pH 或基肥要求
4. 光照需求與耐陰性
5. 分步驟操作（每步寫清楚：動作、可觀察的驗收標準、失敗/腐爛紅線）
6. 常見病蟲害與翻車原因`,
    modalNote:
      '更新 <code>data/plants.json</code> 後運行：<code>python scripts/validate_and_bundle.py</code> 即可校驗所有頁碼引用並重新生成前端數據包。',
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
      .replace(/書本第\s*([0-9–\-]+)\s*頁/g, "Book p. $1")
      .replace(/PDF\s*第\s*([0-9–, \-]+)\s*頁/g, "PDF p. $1")
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
    document.documentElement.lang = state.lang === "en" ? "en" : "zh-Hant";
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
        const tip = state.lang === "en" ? `Jump to source #${num}` : `查看來源 #${num}`;
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
      els.envAdviceBox.textContent = `✅ 無植物燈的新手首選（共 ${filteredCount} 種）：首推【芽苗菜、小蔥、韭菜、大蒜苗、薄荷、空心菜、芝麻菜】，已為你自動過濾迷迭香、香菜等易死高光品種。`;
    } else if (state.envLight === "no_grow_light") {
      els.envAdviceBox.textContent = `💡 已隱藏必須搭配植物燈的強光品種（如迷迭香、百里香、牛至、香菜、鼠尾草、羅勒），當前保留 ${filteredCount} / ${totalCount} 種普通窗臺可存活品種。`;
    } else if (state.envDiff === "easy_only") {
      els.envAdviceBox.textContent = `🌱 已篩選 1★–2★ 新手好養品種（${filteredCount} / ${totalCount} 種），容錯率最高、最適合第一次動手。`;
    } else {
      els.envAdviceBox.textContent = `當前顯示 ${filteredCount} / ${totalCount} 種植物；若家裡沒有植物補光燈，可用左側選單一鍵隱藏需要強光的高難度香草。`;
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
        : `當前顯示 ${filtered.length} / ${plants.length} 種植物 · 共收錄 ${totalSources} 條引用出處（其中 ${verifiedSources} 條已核驗）· 點擊任意一行查看可驗證步驟與圖解`;

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
        state.lang === "en" ? "View Wikipedia Image Source ↗" : "查看維基百科開放版權圖源 ↗";
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
    const aliasLabel = state.lang === "en" ? "Aliases: " : "別名：";

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
          <span class="badge badge-high_value">${escapeHtml(isEn ? ld.badge : "可自測微調 · 附真實出處")}</span>
        </div>

        <div class="dli-calc-box" style="margin-top:18px; margin-bottom:0;">
          <div>
            <label for="calc-ppfd">${escapeHtml(isEn ? ld.calcPpfdLabel : "實測 PPFD (μmol/m²/s，可用手機 Photone App 粗測)")}</label>
            <input id="calc-ppfd" type="number" min="10" max="1500" value="250" />
          </div>
          <div>
            <label for="calc-hours">${escapeHtml(isEn ? ld.calcHoursLabel : "每日補光時長 (小時/天)")}</label>
            <input id="calc-hours" type="number" min="1" max="24" step="0.5" value="14" />
          </div>
          <div class="dli-result-box" id="dli-result-box"></div>
        </div>
      </div>

      <div class="panel">
        <h3>${escapeHtml(isEn ? ld.svgPanelTitle : "視覺圖解：不同功率燈具的安全吊掛高度")}</h3>
        ${renderSvgDiagrams(["dli_distance"])}
      </div>

      <div class="panel">
        <h3>${escapeHtml(isEn ? ld.tableATitle : "附表 A：按香草品類與階段的 PPFD / DLI / 吊掛距離目標")}</h3>
        <div class="table-scroll">
          <table class="plants-table">
            <thead>
              <tr>
                <th>${escapeHtml(isEn ? ld.thStage : "生長階段 / 品類")}</th>
                <th>${escapeHtml(isEn ? ld.thExamples : "適用植物示例")}</th>
                <th>${escapeHtml(isEn ? ld.thPpfd : "目標 PPFD")}</th>
                <th>${escapeHtml(isEn ? ld.thDli : "目標 DLI")}</th>
                <th>${escapeHtml(isEn ? ld.thPhoto : "每日光週期")}</th>
                <th>${escapeHtml(isEn ? ld.thDist100 : "100–150W 面板建議距離")}</th>
                <th>${escapeHtml(isEn ? ld.thDist30 : "10–36W 燈條建議距離")}</th>
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
        <h3>${escapeHtml(isEn ? ld.tableBTitle : "附表 B：不同燈具功率與類型對照")}</h3>
        <div class="table-scroll">
          <table class="plants-table">
            <thead>
              <tr>
                <th>${escapeHtml(isEn ? ld.thFixture : "燈具功率 / 類型")}</th>
                <th>${escapeHtml(isEn ? ld.thUseCase : "典型使用場景")}</th>
                <th>${escapeHtml(isEn ? ld.thSafeDist : "安全吊掛距離")}</th>
                <th>${escapeHtml(isEn ? ld.thNotes : "關鍵注意事項")}</th>
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
          <h3>${escapeHtml(isEn ? ld.diagPanelTitle : "不買專業儀器的植物反饋自檢")}</h3>
          ${ld.diagnostics
            .map(
              (d) => `
            <div class="pitfall-item">
              <div><strong>${escapeHtml(d.signal)}</strong></div>
              <div style="margin-top:4px; color:var(--muted);"><strong>${escapeHtml(isEn ? ld.labelSymptoms : "常見表象：")}</strong>${escapeHtml(d.symptoms)}</div>
              <div style="margin-top:4px;"><strong>${escapeHtml(isEn ? ld.labelAction : "調整動作：")}</strong>${escapeHtml(d.action)}</div>
            </div>
          `
            )
            .join("")}
        </div>

        <div class="panel">
          <h3>${escapeHtml(isEn ? ld.sourcesPanelTitle : "本附表數據來源")} (${rawLd.sources.length})</h3>
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
          : "偏暗（易徒長黃葉）：僅能勉強維持耐陰植物存活，建議降燈或延長時間。";
      } else if (dli < 14) {
        verdict = isEn
          ? ld.verdictMed
          : "中等光量：適合扦插幼苗、韭菜、小蔥、散葉生菜、芝麻菜與半陰期薄荷。";
      } else if (dli < 18) {
        verdict = isEn
          ? ld.verdictGood
          : "充足葉用光量：薄荷、紫蘇、歐芹、羅勒、香菜、空心菜均能健康生長。";
      } else {
        verdict = isEn
          ? ld.verdictHigh
          : "高光達標（18+）：可滿足迷迭香、百里香、牛至、鼠尾草等地中海高光香草！";
      }
      resultBox.innerHTML = `
        <div class="spec-label">${escapeHtml(isEn ? ld.calcResultLabel : "計算結果 DLI")}</div>
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
            <h2 class="detail-title">${escapeHtml(isEn ? tk.soilHeroTitle : "同盆混栽乾溼矩陣 & 配土升數計算器")}</h2>
            <div class="detail-latin" style="font-style:normal;">${escapeHtml(isEn ? tk.soilHeroSub : "防止“喜幹迷迭香 + 喜溼羅勒 + 侵略性薄荷”種同一盆互相害死，並按花盆容量精確換算配土材料。")}</div>
          </div>
          <span class="badge badge-high_value">${escapeHtml(isEn ? tk.soilHeroBadge : "源自藤田智配土標準 & 園藝流體物理")}</span>
        </div>

        <div class="dli-calc-box" style="margin-top:18px; margin-bottom:0;">
          <div>
            <label for="soil-recipe-select">${escapeHtml(isEn ? tk.labelSelectRecipe : "選擇配土配方")}</label>
            <select id="soil-recipe-select">
              ${tk.soil_recipes
                .map((r) => `<option value="${escapeHtml(r.id)}">${escapeHtml(r.name)}</option>`)
                .join("")}
            </select>
          </div>
          <div>
            <label for="soil-liters-input">${escapeHtml(isEn ? tk.labelPotLiters : "花盆總容量 (升 L，1加侖盆≈3.5L，標準長條盆≈10L)")}</label>
            <input id="soil-liters-input" type="number" min="0.5" max="100" step="0.5" value="3" />
          </div>
          <div class="dli-result-box" id="soil-recipe-meta"></div>
        </div>
      </div>

      <div class="panel" id="soil-calc-output"></div>

      <div class="panel">
        <h3>${escapeHtml(isEn ? tk.compatPanelTitle : "同盆混栽「乾溼與根系隔離」矩陣")}</h3>
        <div class="compat-grid">
          ${tk.compatibility_groups
            .map(
              (g) => `
            <div class="compat-card">
              <div style="font-weight:700; font-size:15px; color:var(--accent); margin-bottom:6px;">${escapeHtml(g.group)}</div>
              <div class="plant-sub"><strong>${escapeHtml(isEn ? tk.labelMoisture : "澆水節奏：")}</strong>${escapeHtml(g.moisture)}</div>
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
          <h3>${escapeHtml(isEn ? tk.physicsPanelTitle : "容器物理紅線：為什麼盆底絕不墊碎石")}</h3>
          ${renderSvgDiagrams(["pwt", "superpot_split"])}
        </div>

        <div class="panel">
          <h3>${escapeHtml(isEn ? tk.companionPanelTitle : "書中實測伴生防蟲組合（《最新有機》第105頁）")}</h3>
          ${tk.companion_pairs
            .map(
              (cp) => `
            <div class="pitfall-item">
              <div><strong>${escapeHtml(isEn ? tk.labelPair : "組合：")}${escapeHtml(cp.pair)}</strong></div>
              <div style="margin-top:4px;">${escapeHtml(isEn ? tk.labelEffect : "功效：")}${escapeHtml(cp.effect)}</div>
              <div class="plant-sub" style="margin-top:4px;">${escapeHtml(isEn ? tk.labelSource : "出處：")}${escapeHtml(cp.source)}</div>
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
        <div class="spec-label">${escapeHtml(isEn ? tk.labelSuitableFor : "適用植物")}</div>
        <div class="spec-value">${escapeHtml(recipe.suitable_for)}</div>
        <div class="plant-sub" style="margin-top:4px;">${escapeHtml(isEn ? tk.labelSource : "出處：")}${escapeHtml(recipe.source_ref)}</div>
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
              <td><strong>${escapeHtml(isEn ? `~${totalG} g` : `約 ${totalG} 克`)}</strong></td>
            </tr>
          `;
        })
        .join("");

      outPanel.innerHTML = `
        <h3>${escapeHtml(isEn ? `${tk.calcOutputTitlePrefix}${liters}${tk.calcOutputTitleSuffix}` : `計算明細（按 ${liters} 升盆容量換算）`)}</h3>
        <div class="table-scroll">
          <table class="plants-table">
            <thead>
              <tr>
                <th>${escapeHtml(isEn ? tk.thMaterial : "基質 / 添加物名稱")}</th>
                <th>${escapeHtml(isEn ? tk.thRatio : "配比標準")}</th>
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
          <strong>${escapeHtml(isEn ? tk.labelPracticalNote : "📌 實操說明：")}</strong>${escapeHtml(recipe.note)}
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
            <h2 class="detail-title">${escapeHtml(isEn ? tk.pestsHeroTitle : "室內病蟲害看圖急救 & 新買盆栽隔離檢疫清單")}</h2>
            <div class="detail-latin" style="font-style:normal;">${escapeHtml(isEn ? tk.pestsHeroSub : "整合《最新有機家庭盆栽種菜法》第 105–110 頁與《陽臺種菜全攻略》PDF 第 9–10 頁。")}</div>
          </div>
          <span class="badge badge-not_recommended">${escapeHtml(isEn ? tk.pestsHeroBadge : "預防重於治療 · 買苗必隔離")}</span>
        </div>
      </div>

      <div class="panel">
        <h3>${escapeHtml(isEn ? tk.pestsTableTitle : "常見病蟲害與生理故障：看症狀快速止損表")}</h3>
        <div class="table-scroll">
          <table class="plants-table">
            <thead>
              <tr>
                <th>${escapeHtml(isEn ? tk.thPestSymptom : "觀察到的症狀")}</th>
                <th>${escapeHtml(isEn ? tk.thPestCause : "真實病因 / 蟲源")}</th>
                <th>${escapeHtml(isEn ? tk.thPestFix : "立刻執行的急救動作")}</th>
                <th>${escapeHtml(isEn ? tk.thPestSource : "核驗出處")}</th>
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
          <h3>${escapeHtml(isEn ? tk.sopPanelTitle : "超市 / 苗圃新買活盆：7–14 天防蟲隔離 SOP")}</h3>
          <ol class="sop-list">
            ${tk.quarantine_sop.map((step) => `<li>${escapeHtml(step)}</li>`).join("")}
          </ol>
        </div>

        <div class="panel">
          <h3>${escapeHtml(isEn ? tk.spraysPanelTitle : "家庭廚房安全自然噴劑配方（藤田智 p.109–110）")}</h3>
          ${tk.natural_sprays
            .map(
              (sp) => `
            <div class="step-card">
              <div class="step-title">${escapeHtml(sp.name)}</div>
              <div style="margin-top:6px;"><strong>${escapeHtml(isEn ? tk.labelIngredients : "材料：")}</strong>${escapeHtml(sp.ingredients)}</div>
              <div style="margin-top:6px;"><strong>${escapeHtml(isEn ? tk.labelMethod : "做法與用法：")}</strong>${escapeHtml(sp.steps)}</div>
              <div class="plant-sub" style="margin-top:6px;">${escapeHtml(isEn ? tk.labelSource : "出處：")}${escapeHtml(sp.source)}</div>
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
