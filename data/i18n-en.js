// Complete English (EN) localization for Planting Tips (UI + 22 Plants + Lighting + Toolkit + SVG Diagrams)
window.I18N_EN = {
  ui: {
    pageTitle: "Indoor Edible Herbs & Kitchen Scraps · Fact-Checked Guide",
    eyebrow: "Edible Herbs & Kitchen Scraps · Fact-Checked Guide",
    siteTitle: "Indoor Edible Plants: Anti-Failure Reference Table",
    siteSubtitle:
      'No viral "infinite vegetables in plain water" illusions — every plant lists <strong>true botanical viability</strong>, <strong>verifiable checkpoints</strong>, and <strong>exact book/extension page citations</strong>.',
    navPlants: "🌿 Plant Reference Table",
    navLighting: "💡 Grow Light PPFD/DLI",
    navSoil: "🪴 Companion & Soil Calculator",
    navPests: "🐛 Pests & Quarantine SOP",
    btnNotebookLm: "NotebookLM Import Guide",
    langToggleLabel: "🌐 中文",
    wizardTitle: "🏠 Reverse Filter by Your Home Environment",
    wizardSub: "Select your real indoor conditions to automatically filter out plants prone to dying",
    wizardLightLabel: "1. My Indoor Lighting",
    wizardLightAll: "Any (Show all plants)",
    wizardLightNoGrow: "Windowsill Only / No Grow Light (Hide high-light casualties)",
    wizardLightHasGrow: "Full-Spectrum Grow Light / Full-Sun South Window",
    wizardDiffLabel: "2. Max Care Difficulty",
    wizardDiffAll: "Any Difficulty (1★ – 5★)",
    wizardDiffEasy: "Beginner Foolproof Only (1★ – 2★)",
    wizardDiffMed: "Intermediate Up to 3★ (1★ – 3★)",
    searchPlaceholder: "Search by English, Chinese, or botanical name (e.g., cilantro, ginger, mint, rosemary)...",
    chipAll: "All",
    chipHighValue: "High-Value Regrow",
    chipPartial: "Greens Only / Long-Term Rhizome",
    chipNotRec: "Stem Water-Regrow Not Recommended",
    chipGrowLight: "Requires Grow Light / High Light",
    thName: "Plant Name",
    thVerdict: "Scrap Regrow Verdict",
    thStart: "Best Starting Method",
    thWaterLimit: "Water-Only Limit",
    thLight: "Light Threshold",
    thHarvest: "Harvest Window",
    thSources: "Citations",
    emptyState: "No plants match the current filters. Try clearing your search or switching filter chips.",
    btnBackTable: "← Back to Reference Table",
    difficultyWord: "Difficulty",
    citationsUnit: "refs",
    specStart: "Recommended Start",
    specWaterLimit: "Water-Only Limit",
    specLight: "Light Threshold",
    specHarvestDiff: "Harvest Window & Difficulty",
    specContainerSoil: "Container & Potting Mix Specs",
    panelMythTitle: "Viral Myth vs. Botanical Reality",
    kickerMyth: "Common Viral Myth",
    kickerTruth: "Verifiable Botanical Truth",
    panelStepsTitle: "Verifiable Step-by-Step Protocol (with Checkpoints & Red Flags)",
    labelCheckpoint: "✅ Verifiable Checkpoint: ",
    labelRedflag: "⚠️ Failure Red Flag / Stop Signal: ",
    panelPitfallsTitle: "Common Failure Symptoms & Fixes",
    labelSymptom: "Symptom: ",
    labelCause: "Root Cause: ",
    labelFix: "Actionable Fix: ",
    panelMediaTitle: "Key Action Diagrams & Media Slot",
    mediaPlaceholderTitle: "Real Photo / Demo Video Slot",
    mediaPlaceholderHint1: "Drop a real photo or MP4 into ",
    mediaPlaceholderHint2: ' and set JSON type to "image" or "video" to display.',
    panelSourcesTitle: "Verified Citations & Page Numbers",
    badgeVerified: "Verified Source",
    badgePending: "Secondary Synthesis Note",
    sourceTypeBook: "Book",
    sourceTypeWeb: "Web / Extension",
    sourceTypeCommunity: "Community Consensus",
    labelLocation: "Location: ",
    linkViewSite: "View Source Website ↗",
    footerText:
      'Planting Tips Prototype · Data source: <code>data/plants.json</code> · Every step is backed by verifiable page/extension citations',
    modalTitle: "Extract & Import New Plants from NotebookLM",
    modalDesc:
      'Canonical data lives in <code>data/plants.json</code> and the Markdown template is in <code>templates/plant-entry-template.md</code>. Paste this prompt into NotebookLM to extract book facts with exact page numbers:',
    modalPrompt: `Answer strictly based on my uploaded sources without guessing. If a detail is not mentioned, state "[Not mentioned in sources]". Cite every key operation as [Source Title, Page X]:
1. Plant name (English / Chinese / Botanical name)
2. Is kitchen-scrap water regrowing viable, or is direct seeding / dividing nursery pots better? Why?
3. Pot depth, potting mix formula, pH or base fertilizer requirements
4. Light intensity (PPFD/DLI) & shade tolerance
5. Step-by-step protocol (Action, Verifiable Checkpoint, and Failure/Rot Red Flag for each step)
6. Common pests, diseases, and failure diagnostics`,
    modalNote:
      'After updating <code>data/plants.json</code>, run <code>python scripts/validate_and_bundle.py</code> to validate all citations and rebuild the frontend bundle.'
  },
  diagrams: {
    water_line: {
      title: "Diagram: Safe Water Level vs. Rot Zone",
      caption:
        "Submerge only 1–2 cm of the root plate or bottom node. Flooding upper cut surfaces or leaves causes bacterial slime within 48 hours.",
      svg: `<svg viewBox="0 0 640 260" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Safe water level vs rot zone">
        <rect width="640" height="260" rx="10" fill="#faf9f4"/>
        <text x="160" y="28" text-anchor="middle" font-size="13" font-weight="700" fill="#145338">✅ Correct: Submerge Base/Nodes Only (1–2 cm)</text>
        <text x="480" y="28" text-anchor="middle" font-size="13" font-weight="700" fill="#8b1e1e">❌ Wrong: Flooding Cut Top or Leaves</text>
        <line x1="320" y1="20" x2="320" y2="245" stroke="#dcd8cb" stroke-dasharray="5 5"/>
        <rect x="95" y="95" width="130" height="135" rx="8" fill="#ffffff" stroke="#8ab89d" stroke-width="2"/>
        <rect x="97" y="185" width="126" height="43" rx="6" fill="#cce8f4"/>
        <line x1="85" y1="185" x2="235" y2="185" stroke="#1b6ca8" stroke-width="2" stroke-dasharray="4 3"/>
        <text x="238" y="189" font-size="11" fill="#1b6ca8" font-weight="700">1–2 cm Water</text>
        <rect x="145" y="110" width="30" height="88" rx="4" fill="#e9efe2" stroke="#5b8a4b" stroke-width="2"/>
        <rect x="152" y="65" width="16" height="45" rx="3" fill="#4f9d53"/>
        <path d="M148 198 Q140 212 144 222 M160 198 L160 224 M172 198 Q180 212 175 222" stroke="#b99c6b" stroke-width="2" fill="none"/>
        <text x="160" y="248" text-anchor="middle" font-size="11" fill="#56635b">Cut top stays dry &amp; aerated; change water daily</text>
        <rect x="415" y="95" width="130" height="135" rx="8" fill="#ffffff" stroke="#e09191" stroke-width="2"/>
        <rect x="417" y="122" width="126" height="106" rx="6" fill="#d8e3c8"/>
        <line x1="405" y1="122" x2="555" y2="122" stroke="#c93b3b" stroke-width="2" stroke-dasharray="4 3"/>
        <text x="558" y="126" font-size="11" fill="#c93b3b" font-weight="700">Too Deep</text>
        <rect x="465" y="115" width="30" height="85" rx="4" fill="#8f7a53" stroke="#6b4423" stroke-width="2"/>
        <ellipse cx="456" cy="148" rx="11" ry="6" fill="#706233"/>
        <ellipse cx="504" cy="155" rx="11" ry="6" fill="#706233"/>
        <text x="480" y="248" text-anchor="middle" font-size="11" fill="#8b1e1e">Submerged leaves rot + anaerobic bacterial slime</text>
      </svg>`
    },
    pwt: {
      title: "Diagram: Why Gravel at the Bottom Causes Root Rot (Perched Water Table)",
      caption:
        "A sudden transition from fine soil to coarse gravel blocks capillary drainage, pushing the saturated hypoxic zone UP into the root ball (Garden Myths / soil physics).",
      svg: `<svg viewBox="0 0 640 250" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Perched Water Table diagram">
        <rect width="640" height="250" rx="10" fill="#faf9f4"/>
        <text x="160" y="26" text-anchor="middle" font-size="13" font-weight="700" fill="#8b1e1e">❌ Gravel Layer at Bottom: Raises Saturated Zone</text>
        <text x="480" y="26" text-anchor="middle" font-size="13" font-weight="700" fill="#145338">✅ Uniform Gritty Mix: Saturated Zone at Very Bottom</text>
        <line x1="320" y1="20" x2="320" y2="235" stroke="#dcd8cb" stroke-dasharray="5 5"/>
        <polygon points="85,55 235,55 215,215 105,215" fill="#d9c6b0" stroke="#7a5c3e" stroke-width="2"/>
        <polygon points="94,130 226,130 221,170 99,170" fill="#8bb9d9"/>
        <polygon points="99,170 221,170 215,215 105,215" fill="#a09a92"/>
        <circle cx="130" cy="192" r="9" fill="#c7c2ba"/><circle cx="155" cy="195" r="10" fill="#b5afa6"/><circle cx="182" cy="190" r="9" fill="#c7c2ba"/>
        <path d="M160,55 L160,150 M160,100 L135,145 M160,115 L185,152" stroke="#422a16" stroke-width="3" fill="none"/>
        <text x="160" y="154" text-anchor="middle" font-size="11" font-weight="700" fill="#0d3b66">Perched Water Table (Roots Drown)</text>
        <text x="160" y="236" text-anchor="middle" font-size="11" fill="#8b1e1e">Gravel blocks capillary flow, suffocating roots</text>
        <polygon points="405,55 555,55 535,215 425,215" fill="#c9845b" stroke="#8e4a24" stroke-width="2"/>
        <polygon points="421,182 539,182 535,215 425,215" fill="#8bb9d9"/>
        <path d="M480,55 L480,158 M480,98 L452,148 M480,108 L508,150" stroke="#f0e6d2" stroke-width="3" fill="none"/>
        <text x="480" y="115" text-anchor="middle" font-size="11" font-weight="700" fill="#2d2014">Porous Gritty Mix (Terracotta breathes)</text>
        <text x="480" y="203" text-anchor="middle" font-size="11" font-weight="700" fill="#0d3b66">Low PWT drains straight out bottom hole</text>
        <text x="480" y="236" text-anchor="middle" font-size="11" fill="#145338">No gravel layer; uniform high-porosity substrate</text>
      </svg>`
    },
    pinch_node: {
      title: "Diagram: 1-into-2 Node Pinching (Basil / Perilla / Mint)",
      caption:
        "Never pluck single large leaves off a bare stem. Cut 0.5 cm above a node with two opposite leaves/buds so two lateral branches sprout cleanly.",
      svg: `<svg viewBox="0 0 640 240" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Node pinching diagram">
        <rect width="640" height="240" rx="10" fill="#faf9f4"/>
        <line x1="180" y1="210" x2="180" y2="50" stroke="#4f8a4b" stroke-width="6" stroke-linecap="round"/>
        <ellipse cx="145" cy="145" rx="28" ry="12" transform="rotate(-20 145 145)" fill="#62a85c"/>
        <ellipse cx="215" cy="145" rx="28" ry="12" transform="rotate(20 215 145)" fill="#62a85c"/>
        <ellipse cx="148" cy="95" rx="22" ry="10" transform="rotate(-18 148 95)" fill="#77bf71"/>
        <ellipse cx="212" cy="95" rx="22" ry="10" transform="rotate(18 212 95)" fill="#77bf71"/>
        <circle cx="172" cy="138" r="5" fill="#d9f2b4" stroke="#2d6a3e"/>
        <circle cx="188" cy="138" r="5" fill="#d9f2b4" stroke="#2d6a3e"/>
        <line x1="140" y1="126" x2="225" y2="126" stroke="#c93b3b" stroke-width="2.5" stroke-dasharray="5 3"/>
        <text x="230" y="130" font-size="11.5" font-weight="700" fill="#c93b3b">✂️ Cut 0.5 cm above axillary buds</text>
        <path d="M320 130 L375 130" stroke="#1d5c42" stroke-width="3"/>
        <text x="348" y="118" text-anchor="middle" font-size="11" font-weight="700" fill="#1d5c42">After 7–10 Days</text>
        <line x1="480" y1="210" x2="480" y2="132" stroke="#4f8a4b" stroke-width="6" stroke-linecap="round"/>
        <path d="M480 135 Q450 105 438 65 M480 135 Q510 105 522 65" stroke="#5da858" stroke-width="5" fill="none" stroke-linecap="round"/>
        <ellipse cx="445" cy="145" rx="24" ry="10" transform="rotate(-20 445 145)" fill="#62a85c"/>
        <ellipse cx="515" cy="145" rx="24" ry="10" transform="rotate(20 515 145)" fill="#62a85c"/>
        <ellipse cx="435" cy="65" rx="18" ry="8" fill="#82cc7b"/>
        <ellipse cx="525" cy="65" rx="18" ry="8" fill="#82cc7b"/>
        <text x="480" y="232" text-anchor="middle" font-size="12" font-weight="700" fill="#145338">1 stem splits into 2 bushy branches (pinch flower buds too)</text>
      </svg>`
    },
    superpot_split: {
      title: "Diagram: Splitting Overcrowded Supermarket Herb Pots",
      caption:
        "A 4-inch grocery pot packs 20–30 seedlings. Slice the root ball cleanly into 2–4 sections with a sterile knife (max 2 for thyme) instead of tearing roots by hand.",
      svg: `<svg viewBox="0 0 640 230" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Supermarket pot splitting diagram">
        <rect width="640" height="230" rx="10" fill="#faf9f4"/>
        <ellipse cx="145" cy="115" rx="75" ry="60" fill="#6b4e35"/>
        <line x1="145" y1="45" x2="145" y2="185" stroke="#ffd166" stroke-width="3" stroke-dasharray="6 4"/>
        <line x1="60" y1="115" x2="230" y2="115" stroke="#ffd166" stroke-width="3" stroke-dasharray="6 4"/>
        <text x="145" y="205" text-anchor="middle" font-size="11.5" font-weight="700" fill="#56635b">Slice root ball vertically into 2–4 intact chunks</text>
        <path d="M250 115 L310 115" stroke="#1d5c42" stroke-width="3"/>
        <rect x="340" y="75" width="75" height="90" rx="6" fill="#c9845b"/><text x="377" y="125" text-anchor="middle" font-size="12" fill="#fff" font-weight="700">Pot 1</text>
        <rect x="435" y="75" width="75" height="90" rx="6" fill="#c9845b"/><text x="472" y="125" text-anchor="middle" font-size="12" fill="#fff" font-weight="700">Pot 2</text>
        <rect x="530" y="75" width="75" height="90" rx="6" fill="#c9845b"/><text x="567" y="125" text-anchor="middle" font-size="12" fill="#fff" font-weight="700">Pot 3</text>
        <text x="472" y="205" text-anchor="middle" font-size="11.5" font-weight="700" fill="#145338">Repot, water thoroughly, and acclimate in indirect light for 5–7 days</text>
      </svg>`
    },
    dli_distance: {
      title: "Diagram: LED Grow Light Wattage vs. Canopy Hanging Distance",
      caption:
        "Low-watt strips (10–36W) lose PPFD rapidly if hung too high; 100W+ quantum boards bleach leaves if hung too close.",
      svg: `<svg viewBox="0 0 640 240" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="LED hanging distance diagram">
        <rect width="640" height="240" rx="10" fill="#faf9f4"/>
        <rect x="90" y="45" width="140" height="14" rx="4" fill="#333"/>
        <polygon points="95,59 225,59 250,155 70,155" fill="rgba(255,225,130,0.35)"/>
        <line x1="160" y1="62" x2="160" y2="148" stroke="#c97a00" stroke-width="2" stroke-dasharray="4 3"/>
        <text x="235" y="108" font-size="11" font-weight="700" fill="#7a4b00">15–30 cm (6–12")</text>
        <rect x="120" y="155" width="80" height="45" rx="4" fill="#5da858"/>
        <text x="160" y="222" text-anchor="middle" font-size="11.5" font-weight="700" fill="#1c2420">10–36W Strips/Clips (Keep close to canopy)</text>
        <rect x="405" y="25" width="150" height="18" rx="4" fill="#333"/>
        <polygon points="410,43 550,43 590,155 370,155" fill="rgba(255,225,130,0.45)"/>
        <line x1="480" y1="45" x2="480" y2="148" stroke="#1d5c42" stroke-width="2" stroke-dasharray="4 3"/>
        <text x="552" y="96" font-size="11" font-weight="700" fill="#1d5c42">35–60 cm (14–24")</text>
        <rect x="440" y="155" width="80" height="45" rx="4" fill="#3b7a4a"/>
        <text x="480" y="222" text-anchor="middle" font-size="11.5" font-weight="700" fill="#1c2420">100–150W Quantum Board (Default ~45 cm / 18")</text>
      </svg>`
    }
  },
  lighting: {
    title: "Indoor Herb LED Grow Light PPFD / DLI, Wattage & Hanging Distance Guide",
    formula: "DLI (mol/m²/day) = PPFD (μmol/m²/s) × Photoperiod Hours × 0.0036",
    badge: "Self-Testable · Verified Citations",
    calcPpfdLabel: "Measured Canopy PPFD (μmol/m²/s, e.g., via Photone App)",
    calcHoursLabel: "Daily Light Duration (Hours/day)",
    calcResultLabel: "Calculated DLI",
    verdictLow: "Too Dim (Etiolation risk): Barely sustains shade-tolerant greens; lower fixture or extend timer.",
    verdictMed: "Moderate Light: Good for cuttings, seedlings, garlic chives, scallions, loose-leaf lettuce, arugula, and mint.",
    verdictGood: "Solid Leafy Herb Light: Healthy growth for mint, perilla, parsley, basil, cilantro, and water spinach.",
    verdictHigh: "High-Light Target Met (18+): Sufficient for rosemary, thyme, oregano, and sage!",
    svgPanelTitle: "Visual Guide: Safe Hanging Distance by Fixture Wattage",
    tableATitle: "Table A: Target PPFD / DLI & Hanging Distance by Growth Stage & Herb Type",
    thStage: "Growth Stage / Category",
    thExamples: "Example Plants",
    thPpfd: "Target PPFD",
    thDli: "Target DLI",
    thPhoto: "Photoperiod",
    thDist100: "100–150W Panel Distance",
    thDist30: "10–36W Strip Distance",
    tableBTitle: "Table B: Fixture Wattage & Optical Type Comparison",
    thFixture: "Fixture Wattage / Type",
    thUseCase: "Typical Setup",
    thSafeDist: "Safe Hanging Distance",
    thNotes: "Critical Notes",
    diagPanelTitle: "Visual Plant Feedback Calibration (No PAR Meter Required)",
    labelSymptoms: "Visual Symptoms: ",
    labelAction: "Adjustment Action: ",
    sourcesPanelTitle: "Lighting Guide Sources",
    stage_table: [
      {
        stage: "Cuttings / Rooting / Seedlings",
        examples: "Mint water-to-soil transfer, rosemary/thyme softwood rooting, lettuce/cilantro germination",
        ppfd: "150 – 200 μmol/m²/s",
        dli: "8 – 10 mol/m²/day",
        photoperiod: "12 – 14 h/day",
        distance_100w: "60 – 75 cm (24 – 30 in)",
        distance_30w: "25 – 35 cm (10 – 14 in)"
      },
      {
        stage: "Leafy Culinary Herbs & Alliums (Medium Light)",
        examples: "Mint, scallions, garlic chives, perilla, parsley, loose-leaf lettuce, arugula, chives",
        ppfd: "200 – 350 μmol/m²/s (mint/lettuce tolerate down to 150)",
        dli: "10 – 16 mol/m²/day",
        photoperiod: "12 – 14 h/day (lettuce needs dark night)",
        distance_100w: "45 – 60 cm (18 – 24 in)",
        distance_30w: "15 – 25 cm (6 – 10 in)"
      },
      {
        stage: "Mediterranean Woody & High-Light Herbs",
        examples: "Rosemary, thyme, oregano, sage, basil, cilantro",
        ppfd: "300 – 450 μmol/m²/s (rosemary/oregano up to 400–600)",
        dli: "18 – 22+ mol/m²/day",
        photoperiod: "14 – 16 h/day",
        distance_100w: "30 – 45 cm (12 – 18 in)",
        distance_30w: "12 – 18 cm (5 – 7 in, multi-bar recommended)"
      }
    ],
    wattage_table: [
      {
        fixture_type: "Desktop Clip Lights / Shelf LED Strips (10W – 36W)",
        typical_use: "Windowsill boost or single shelf with 2–4 small pots",
        safe_distance: "15 – 30 cm (6 – 12 in)",
        notes: "Low total photon output; hanging >40 cm drops PPFD sharply and causes leggy stems. Use multiple parallel bars for high-light herbs."
      },
      {
        fixture_type: "Residential Full-Spectrum Quantum Board / Panel (100W – 150W)",
        typical_use: "Primary indoor herb rack (60×60 cm or 90×60 cm footprint)",
        safe_distance: "35 – 60 cm (14 – 24 in)",
        notes: "Start at 45 cm (18 in) at 100% power to prevent bleaching; lower to 35–38 cm (14–15 in) for rosemary/thyme or use dimmer."
      },
      {
        fixture_type: "High-Output Multi-Bar Fixtures (300W+)",
        typical_use: "Grow tents or commercial multi-tier racks",
        safe_distance: "60+ cm (24+ in)",
        notes: "Even when dimmed, maintain at least 60 cm clearance to prevent upper-canopy photobleaching and heat burn."
      }
    ],
    diagnostics: [
      {
        signal: "Light Too Weak / Fixture Too High (Low PPFD / Low DLI)",
        symptoms: "Stems stretching long and thin (etiolation), wide internodes, pale yellow lower leaves, weak aroma",
        action: "Lower fixture by 5–8 cm (2–3 in) per step, or extend timer by 1–2 hours/day; re-check canopy PPFD with Photone."
      },
      {
        signal: "Light Too Intense / Fixture Too Close (Photo-Thermal Stress)",
        symptoms: "Top leaf edges curling upward, white photobleaching on upper leaves, crispy brown scorch spots",
        action: "Raise fixture by 8–12 cm (3–5 in) immediately or dim LED output, and ensure gentle fan airflow across the canopy."
      }
    ]
  },
  toolkit: {
    soilHeroTitle: "Companion Compatibility Matrix & Potting Mix Calculator",
    soilHeroSub:
      'Prevent "drought-loving rosemary + moisture-loving basil + invasive mint" from killing each other in the same planter, and calculate exact substrate volumes by pot size.',
    soilHeroBadge: "Fujita Potting Standards & Container Physics",
    labelSelectRecipe: "Select Potting Mix Formula",
    labelPotLiters: "Total Pot Volume (Liters, 1 gal ≈ 3.5L, standard window box ≈ 10L)",
    labelSuitableFor: "Suitable Plants",
    labelSource: "Source: ",
    calcOutputTitlePrefix: "Calculated Quantities (for ",
    calcOutputTitleSuffix: " L Container)",
    thMaterial: "Substrate / Additive",
    thRatio: "Standard Ratio",
    thAmountPrefix: "Amount Needed for ",
    thAmountSuffix: " L Pot",
    unitLiters: " L",
    unitGramsPerL: " g / L",
    unitGramsApprox: "Approx. ",
    unitGrams: " g",
    labelPracticalNote: "📌 Practical Note: ",
    compatPanelTitle: "Co-Planting Moisture & Root Isolation Matrix",
    labelMoisture: "Watering Rhythm: ",
    labelLightReq: "Light Requirement: ",
    labelIncludedPlants: "Plants: ",
    physicsPanelTitle: "Container Physics Red Line: Why You Must Never Put Gravel at the Bottom",
    companionPanelTitle: "Book-Verified Companion Pairs (Fujita p.105)",
    labelPair: "Pair: ",
    labelEffect: "Benefit: ",
    pestsHeroTitle: "Indoor Pest & Disease Triage + New Plant Quarantine SOP",
    pestsHeroSub: "Synthesized from Fujita Organic Container Gardening (pp. 105–110) and Balcony Hydroponics Guide (pp. 9–10).",
    pestsHeroBadge: "Prevention First · Always Quarantine New Pots",
    pestsTableTitle: "Symptom-to-Action Emergency Triage Table",
    thPestSymptom: "Observed Symptom",
    thPestCause: "Root Cause / Vector",
    thPestFix: "Immediate Emergency Action",
    thPestSource: "Verified Source",
    sopPanelTitle: "7–14 Day Quarantine SOP for New Supermarket / Nursery Pots",
    spraysPanelTitle: "Kitchen-Safe Natural Sprays (Fujita pp. 109–110)",
    labelIngredients: "Ingredients: ",
    labelMethod: "Preparation & Use: ",
    soil_recipes: [
      {
        id: "fujita_general",
        name: "General Leafy Greens & Allium Mix (Fujita Standard)",
        suitable_for: "Scallions, garlic chives, loose-leaf lettuce, perilla, transplanted sprouts, ginger, garlic greens",
        source_ref: "Tomohiro Fujita 'Organic Container Vegetable Gardening' pp. 34, 42, 44, 48, 89",
        components: [
          { material: "Fine Akadama Soil (structural aeration)", ratio_pct: 40, unit: "ml" },
          { material: "Matured Compost (organic matter & slow nutrients)", ratio_pct: 40, unit: "ml" },
          { material: "Leaf Mold / Humus (moisture retention)", ratio_pct: 10, unit: "ml" },
          { material: "Carbonized Rice Hulls (pH buffer & drainage)", ratio_pct: 10, unit: "ml" }
        ],
        additives_per_liter: [
          { name: "Organic Lime (pH balance & calcium)", amount_g: 6 },
          { name: "Base Fertilizer: Rapeseed Meal (mix & rest 1–2 wks)", amount_g: 45 },
          { name: "Base Fertilizer: Fermented Poultry Manure (rest 1–2 wks)", amount_g: 90 }
        ],
        note: "Indoor tip: To avoid odor or fungus gnats from raw organic manure indoors, substitute pre-sterilized commercial organic potting mix blended with 20%–30% perlite."
      },
      {
        id: "mediterranean_2_1",
        name: "Mediterranean Drought-Herb 2:1 High-Drainage Mix",
        suitable_for: "Rosemary, thyme, oregano, sage (never use moisture-control soil)",
        source_ref: "Amazing Herb Garden / Groovy Root / Agronomic Protocols",
        components: [
          { material: "Peat-Free Coco Coir / Compost-Based Potting Mix", ratio_pct: 65, unit: "ml" },
          { material: "Coarse Perlite / Pumice / Horticultural Grit (no fine builder's sand)", ratio_pct: 35, unit: "ml" }
        ],
        additives_per_liter: [],
        note: "Pair with an unglazed terracotta pot and NEVER put gravel at the bottom (prevents a Perched Water Table)."
      },
      {
        id: "cutting_sterile",
        name: "Sterile Fertilizer-Free Rooting Medium (1:1 Formula)",
        suitable_for: "Softwood cuttings of rosemary, thyme, mint, perilla, sage",
        source_ref: "Balcony Vegetable 70 Tips p. 69 / WSU Extension Propagation Handbook",
        components: [
          { material: "Perlite / Coarse River Sand (oxygenation pores)", ratio_pct: 50, unit: "ml" },
          { material: "Vermiculite / Unfertilized Coco-Peat (gentle moisture)", ratio_pct: 50, unit: "ml" }
        ],
        additives_per_liter: [],
        note: "Never add fertilizer during unrooted cutting propagation—salts burn delicate emerging root tips."
      }
    ],
    compatibility_groups: [
      {
        group: "🏜️ Dry & High-Light Mediterranean Group (Can share pot / Never mix with wet herbs)",
        moisture: "Deep dry-down between thorough waterings (every 7–14 days)",
        light: "Strong grow light required (DLI 16–22+)",
        plants: ["Rosemary", "Thyme", "Oregano", "Sage"],
        rule: "All require 35% coarse grit + unglazed terracotta; never co-plant with basil, mint, or lettuce."
      },
      {
        group: "💧 Moisture-Loving Leafy Herbs (Frequent watering to prevent wilt)",
        moisture: "Water when top 1–2 cm dries; never let bone-dry",
        light: "Medium-high light (DLI 12–18)",
        plants: ["Basil", "Perilla (Shiso)", "Parsley", "Cilantro", "Water Spinach"],
        rule: "High leaf surface transpiration; pinch basil and perilla tips regularly so they don't shade out shorter neighbors."
      },
      {
        group: "🧅 Shade-Tolerant Alliums & Salad Greens (Best for bright windowsills)",
        moisture: "Evenly moist (garlic chives & chives turn tough if dried out)",
        light: "Low-to-medium light (DLI 8–14)",
        plants: ["Green Onion", "Garlic Greens", "Garlic Chives", "Chives", "Loose-leaf Lettuce", "Arugula"],
        rule: "Lettuce needs complete darkness at night to prevent bolting; alliums pair well near perilla to deter pests."
      },
      {
        group: "🚫 Mandatory Solo-Pot Group (Invasive runners or special deep cycles)",
        moisture: "Managed individually",
        light: "Placed individually",
        plants: ["Mint (aggressive underground runners)", "Ginger (8–10 month deep rhizome pot)", "Celery (heavy feeder, cool temp)"],
        rule: "Mint runners strangle neighboring roots within months—must be isolated in its own pot (Best Home Vegetable Book p. 57)."
      }
    ],
    companion_pairs: [
      { pair: "Garlic Chives + Perilla (Shiso)", effect: "Mutually deters pests and promotes vigorous vegetative growth", source: "Fujita 'Organic Container Vegetable Gardening' p. 105" },
      { pair: "Basil + Mini Tomato", effect: "Enhances flavor and growth synergy", source: "Fujita 'Organic Container Vegetable Gardening' p. 105" },
      { pair: "Rosemary / Lavender (Placed Adjacent)", effect: "Volatile essential oils help repel flying pests from nearby pots", source: "Fujita 'Organic Container Vegetable Gardening' p. 105" }
    ],
    pest_diagnostics: [
      {
        symptom: "Tiny black flies crawling on soil surface (Fungus Gnats)",
        cause: "Topsoil stays constantly wet with high organic matter; adults lay eggs in damp soil and larvae chew fine root hairs.",
        emergency_fix: "① Let top 3–5 cm of soil dry completely between waterings; ② Place yellow sticky traps at rim level; ③ Top-dress with 1–2 cm coarse sand/Akadama and switch to bottom-watering.",
        source: "Reddit r/IndoorGarden / NC State Extension"
      },
      {
        symptom: "Clusters of green/black soft insects under young leaves + sticky honeydew (Aphids)",
        cause: "Usually hitchhike in on supermarket herb pots and multiply rapidly indoors without natural predators.",
        emergency_fix: "① Isolate affected pot immediately; ② Blast undersides of leaves under tap/shower stream (removes ~80%); ③ Spray diluted insecticidal soap or Fujita p. 109 chili-garlic-soap spray.",
        source: "Fujita p. 109 / Balcony Hydroponics Guide p. 10 / Reddit"
      },
      {
        symptom: "Fine yellow/white stippling dots on leaves + microscopic webbing underneath (Spider Mites)",
        cause: "Hot, stagnant, dry indoor air near heating vents (especially common on basil, perilla, and rosemary).",
        emergency_fix: "① Move away from heaters (keep 13–24°C); ② Rinse leaf undersides thoroughly; ③ Apply insecticidal soap or morning diluted milk spray followed by rinsing (Fujita p. 110).",
        source: "Fujita pp. 107, 110 / Modern Sprout"
      },
      {
        symptom: "White flour-like powdery patches on leaf surfaces (Powdery Mildew)",
        cause: "Stagnant indoor air combined with high canopy humidity or overcrowded foliage.",
        emergency_fix: "① Prune infected leaves and thin dense inner stems; ② Run a small oscillating fan continuously; ③ Spray diluted potassium/sodium bicarbonate solution.",
        source: "Fujita p. 106 / Penn State Extension"
      },
      {
        symptom: "Lower leaves yellowing and plant wilting even though soil is wet",
        cause: "Blocked drainage, gravel layer creating a Perched Water Table, or overwatering causing anaerobic root rot (false drought symptom).",
        emergency_fix: "① Stop watering immediately! ② Unpot and inspect roots: firm white = dry, black slimy & foul = root rot; ③ Trim rotted roots and repot into 30%+ perlite mix in terracotta.",
        source: "Balcony Hydroponics Guide PDF p. 9 / Agronomic Protocols"
      },
      {
        symptom: "Crispy brown leaf margins + white crust on soil or pot rim",
        cause: "Excess fertilizer salt buildup or hard tap water mineral accumulation.",
        emergency_fix: "Flush pot slowly with copious clean water until it drains freely from the bottom, and pause fertilizing for 2–3 weeks.",
        source: "Balcony Hydroponics Guide PDF p. 9 / Reddit r/IndoorGarden"
      }
    ],
    quarantine_sop: [
      "Step 1 (Physical Isolation): Keep any newly bought supermarket or nursery herb pot on a separate windowsill for 7–14 days—never place it right next to your existing indoor garden.",
      "Step 2 (Flashlight Inspection): Use your phone flashlight to inspect growth tips and leaf undersides for aphids, whiteflies, spider mite webbing, or black crown rot.",
      "Step 3 (Divide & Refresh Soil): If it is a crowded 4-inch supermarket pot, slice into 2–4 chunks with a sterile knife (max 2 for thyme) and repot into fresh sterile indoor mix.",
      "Step 4 (Sticky Trap Check): Place a yellow sticky card beside the pot for 7 days; only merge into your main grow rack after confirming zero fungus gnats or pest spots."
    ],
    natural_sprays: [
      {
        name: "Chili-Garlic-Soap Spray (Targets Aphids & Caterpillars)",
        ingredients: "1 L water + 20 g dried chili peppers + 2 crushed garlic bulbs + 1 handful soap flakes/grated pure soap",
        steps: "Boil chopped chili and crushed garlic in 1 L water for 3 minutes → cool completely and strain through gauze → dissolve soap into liquid → spray onto leaf undersides (effective ~1 week).",
        source: "Tomohiro Fujita 'Organic Container Vegetable Gardening' p. 109"
      },
      {
        name: "Diluted Vinegar Foliar Mist (Vitality Boost for Leafy Greens)",
        ingredients: "Culinary vinegar diluted 20x–50x with clean water",
        steps: "Use slightly stronger dilution (20–30x) for thicker lettuce leaves and milder (50x) for tender greens once weekly; always test on 1–2 leaves first.",
        source: "Tomohiro Fujita 'Organic Container Vegetable Gardening' p. 110"
      }
    ]
  },
  plants: {
    "green-onion": {
      verdict_label: "#1 Highest-ROI Kitchen Scrap Water Regrow",
      starting_method_label: "Root-base water start → transfer to soil after 1–2 weeks",
      water_only_limit: "7–14 days (regrowth thins out after 1–2 cuts in plain water; transfer to soil)",
      light_label: "Bright windowsill OK (tolerates partial shade, ideal 15–20°C)",
      expected_harvest_window: "5–7 days in water for 1st cut; lasts months once transferred to soil",
      hero_caption: "Suggested media: Root base with 1–2 cm water line vs. soil-transplanted scallions",
      myth_vs_reality: {
        common_myth: "Put green onion roots in a glass of tap water and you will harvest free scallions forever.",
        botanical_truth: "Tap water contains zero N-P-K nutrients. The bulb base pushes initial shoots using stored carbohydrates. After 1–2 harvests, shoots turn thin, pale, and flavorless; for continuous harvest, transplant into potting soil or add hydroponic nutrients."
      },
      steps: [
        {
          title: "Select & Trim 3–5 cm Bulb Base with Intact Roots",
          action: "Cut 3–5 cm (1–2 in) above the white root base of grocery scallions and peel off any loose outer papery skin.",
          verification_checkpoint: "White basal plate feels firm with pale white/tan roots and zero mushiness.",
          failure_signal: "Base feels squishy, slimy, or smells sour—discard immediately instead of putting in water."
        },
        {
          title: "Shallow Water Start (1–2 cm) & Daily Water Changes",
          action: "Stand upright in a narrow glass with only 1–2 cm of water covering the roots and basal plate—keep upper green cut surfaces dry in the air. Place on a bright windowsill and change water every 1–2 days.",
          verification_checkpoint: "Fresh green center shoots emerge within 48–72 hours while water stays crystal clear.",
          failure_signal: "Cloudy water, gelatinous slime on bulb walls, or foul odor—rinse thoroughly or discard."
        },
        {
          title: "Day 7–10: Transplant into Well-Draining Potting Mix",
          action: "After the first harvest or once white roots reach 2–5 cm, plant into a pot with drainage holes (e.g., Fujita mix: 40% Akadama + 40% compost + 10% leaf mold + 10% rice hulls), leaving the top 1–2 cm exposed. Water when topsoil dries.",
          verification_checkpoint: "Within 1 week in soil, new tubular leaves regain full supermarket thickness and stand upright.",
          failure_signal: "Left in plain water for weeks until shoots look like toothpicks, or overwatered in soggy soil."
        }
      ],
      pitfalls: [
        {
          symptom: "Foul-smelling water and slimy, rotting onion stubs",
          root_cause: "Water level submerged the upper cut wound and water was not changed daily in a warm kitchen.",
          fix: "Keep water level strictly at the bottom 1–2 cm root zone; change water daily; discard any slimy stubs immediately (food safety)."
        },
        {
          symptom: "Pale, floppy, paper-thin shoots",
          root_cause: "Insufficient indoor light or exhausted bulb carbohydrate reserves in plain water.",
          fix: "Move to a brighter south window or grow light and transfer into nutrient-rich potting soil."
        }
      ]
    },
    cilantro: {
      verdict_label: "Stem Water-Regrow Not Recommended (High Rot & Bolting Rate)",
      starting_method_label: "Direct seed in deep pot (or careful pot division); skip cut-stem water jars",
      water_only_limit: "Not applicable (cut grocery stems lack root nodes and rot rapidly in water)",
      light_label: "Strong light / Grow light required (4–6+ hrs direct sun equivalent, keep cool)",
      expected_harvest_window: "Seeds sprout in 7–14 days; harvest outer leaves in 30–45 days",
      hero_caption: "Suggested media: Crushed coriander seed husks for sowing vs. rotted supermarket cut stems",
      myth_vs_reality: {
        common_myth: "Drop supermarket cilantro stems into a cup of water and they will root into an endless herb bush.",
        botanical_truth: "Cilantro is an annual with a fragile central taproot and bolts rapidly under stress. Cut grocery bundles rarely include active root-crown nodes and usually turn into bacterial slime in water. Starting from crushed seeds in a deep pot is vastly more reliable."
      },
      steps: [
        {
          title: "Skip Stem Scraps; Prepare a ≥15–20 cm Deep Pot & Crush Seed Husks",
          action: "Choose a breathable pot at least 15–20 cm deep to accommodate the taproot. Gently press round coriander seed pods into two halves (husks) without crushing the embryos, then soak in warm water for 12–24 hours.",
          verification_checkpoint: "Round pods split cleanly into two hemispherical seeds and swell slightly after soaking.",
          failure_signal: "Using a shallow tray (<8 cm) or soaking rootless cut supermarket stems in water."
        },
        {
          title: "Sow Shallowly (0.5–1 cm) in Cool, Well-Ventilated Conditions",
          action: "Sow seeds 0.5–1 cm deep in fast-draining potting mix (4–5 seeds per spot, 15 cm apart per Baike p. 290). Keep moist and cool (15–22°C ideal; keep away from radiators or hot west-facing glass).",
          verification_checkpoint: "Two narrow cotyledons emerge in 7–14 days followed by serrated true leaves.",
          failure_signal: "Spindly, flopping hypocotyls (light starvation) or damping-off at the soil line from soggy soil."
        },
        {
          title: "Thin to 5–8 cm, Provide Strong Grow Light & Harvest Outer Leaves",
          action: "Thin seedlings to 5–8 cm spacing; suspend a full-spectrum LED grow light 15–25 cm above canopy if window light is weak. Once 12–15 cm tall, harvest outer older leaves while leaving the central growing crown intact.",
          verification_checkpoint: "Compact, dark green fan-shaped leaves with intense aroma; center keeps pushing new leaves.",
          failure_signal: "Single tall stalk shoots up with feathery needle-like leaves (bolting to flower)—harvest all and re-sow."
        }
      ],
      pitfalls: [
        {
          symptom: "Supermarket living cilantro pot collapses within 3 days at home",
          root_cause: "Commercial 'super-pot trap'—dozens of seeds crammed into a 4-inch pot suffer severe root competition and shock.",
          fix: "Slice the root ball gently into 3–4 chunks with a knife and repot into deeper containers, or harvest fresh and sow seeds."
        }
      ]
    },
    parsley: {
      verdict_label: "Crown Base May Root Occasionally; Sowing or Pot Division Preferred",
      starting_method_label: "Divide living nursery pot / Soak seeds before sowing",
      water_only_limit: "Cut stems rarely root; if crown base roots, transfer to soil within 2 weeks",
      light_label: "Medium-strong light (Sunny south window or LED grow light)",
      expected_harvest_window: "2 weeks after dividing living plant; 2–4 weeks just to germinate from seed",
      hero_caption: "Suggested media: Parsley basal crown node identification vs. plain petiole stem",
      myth_vs_reality: {
        common_myth: "Any cut parsley stem from the grocery store will root in a glass of water.",
        botanical_truth: "Parsley is a biennial. Only stems retaining a piece of the basal root crown node can occasionally form adventitious roots in water; plain mid-stem petioles only stay fresh for a few days before yellowing. Dividing a living pot or soaking seeds is far superior."
      },
      steps: [
        {
          title: "Identify Viable Starting Material: Crown Node vs. Living Pot Division",
          action: "If testing scraps, select only thick outer stems still attached to a firm white basal crown piece and strip lower 2/3 leaves. For reliable production, slice a crowded supermarket living parsley pot into 2–3 sections and pot into ≥15 cm deep containers.",
          verification_checkpoint: "Clean cut surfaces with zero black rot; divided clumps retain intact root balls.",
          failure_signal: "Placing bare mid-stem leaf petioles in water or ripping tangled taproots apart by hand."
        },
        {
          title: "Rooting / Acclimation in Bright Indirect Light",
          action: "For water rooting, keep in bright indirect light and change water 2–3 times weekly. For divided soil pots, water thoroughly and acclimate in indirect light for 5–7 days before moving to strong light.",
          verification_checkpoint: "Water cuttings form 2–4 cm white roots in 10–21 days; divided pots unfurl fresh center leaves within a week.",
          failure_signal: "Submerged stem bases turn black and mushy while leaves wilt permanently."
        },
        {
          title: "Transfer to Soil & Harvest Outer Stems Only",
          action: "Pot rooted cuttings once roots reach 3–5 cm. Water when top 2 cm of soil dries. Always harvest outer, older stems at the base, leaving at least 2/3 of the inner crown leaves active.",
          verification_checkpoint: "Central crown continuously pushes curled or flat leaves; never remove >1/3 of foliage at once.",
          failure_signal: "Constantly soggy topsoil breeding fungus gnats or yellowing lower leaves."
        }
      ],
      pitfalls: [
        {
          symptom: "Parsley seeds show zero sign of sprouting after 2 weeks",
          root_cause: "Apiaceae seeds contain natural germination inhibitors and thick seed coats, taking 14–28 days naturally.",
          fix: "Soak seeds in warm water for 24 hours before sowing and keep topsoil evenly damp without disturbing the bed."
        }
      ]
    },
    celery: {
      verdict_label: "Biggest Viral Myth: Water Dish Yields Only Minor Bitter Leaves",
      starting_method_label: "Shallow water base sprout → requires deep rich soil & strong light for real stalks",
      water_only_limit: "5–7 days (plain water only unfurls tiny inner leaves; stalls & rots without soil)",
      light_label: "High light + cool temps (16–21°C ideal; windowsills rarely produce thick stalks)",
      expected_harvest_window: "5–7 days for garnish leaves; several months in deep soil for stalks",
      hero_caption: "Suggested media: Day 7 water-sprouted celery center leaves vs. stalled water-only base",
      myth_vs_reality: {
        common_myth: "Place a cut celery base in a bowl of water and regrow a full-sized, crunchy supermarket head of celery.",
        botanical_truth: "This is a botanical 'telescoping illusion.' The celery base expands pre-existing inner leaf primordia using stored energy within days. Without deep fertile soil, heavy feeding, strong light, and cool temperatures (16–21°C per Baike p. 242), it turns thin, woody, bitter, and bolts."
      },
      steps: [
        {
          title: "Trim a 4–5 cm Intact Base & Elevate in Shallow Water",
          action: "Cut a 4–5 cm intact celery base. Place in a shallow dish with 1.5–2 cm clean water (prop slightly on pebbles or toothpicks so water touches the bottom without flooding the upper cut stalks). Change water daily and rinse crevices.",
          verification_checkpoint: "Within 3–5 days, inner yellow-green heart leaves push upward while outer cut rims stay firm.",
          failure_signal: "White film, gelatinous slime, or rotten-egg odor inside hollow stalk crevices—discard immediately."
        },
        {
          title: "Option A (Quick Soup Garnish): Harvest Center Leaves at Day 7–10 & Compost",
          action: "If you lack a grow light and deep pot, treat it as a one-off kitchen garnish: snip the 5–8 cm fresh center leaves for soup/stock once the outer base softens, then compost the stump before it rots.",
          verification_checkpoint: "Clean, aromatic celery heart leaves harvested before bacterial rot sets in.",
          failure_signal: "Leaving the stump in stagnant water for 3+ weeks until covered in algae and slime."
        },
        {
          title: "Option B (Growing Full Stalks): Transfer to ≥20 cm Deep Rich Soil at Day 7–10",
          action: "Once 1–2 cm white roots emerge around the basal ring, bury the old base in a ≥20 cm deep pot of compost-rich, moisture-retentive soil with the central green shoots exposed. Keep cool (16–21°C) under strong grow lights and feed regularly.",
          verification_checkpoint: "Within 2 weeks in soil, sturdy new petioles emerge from the crown.",
          failure_signal: "Stalks grow pencil-thin, bitter, or bolt prematurely due to heat (>25°C) or low light."
        }
      ],
      pitfalls: [
        {
          symptom: "Clear jelly-like slime and foul smell between celery stalk ribs",
          root_cause: "Overlapping hollow celery petioles trap stagnant water and breed bacteria.",
          fix: "Rinse between stalk ribs under running water daily and keep dish water level below outer cut edges."
        }
      ]
    },
    ginger: {
      verdict_label: "Truly Viable from Grocery Rhizomes, Requires 8–10 Months Patience",
      starting_method_label: "Shallow burial of 2-eye rhizome in ≥20 cm deep pot (never soak long-term)",
      water_only_limit: "Soak 12–24 hrs in warm water before planting only; never grow in plain water",
      light_label: "Warm bright indirect light (25–30°C optimal; tolerates partial shade)",
      expected_harvest_window: "~20 days to sprout; 3–4 mos for young shoots, 8–10 mos for mature rhizomes",
      hero_caption: "Suggested media: Ginger piece with 2 plump growth buds buried 3 cm deep in a 20+ cm pot",
      myth_vs_reality: {
        common_myth: "Toss a supermarket ginger piece into a cup of water or tiny pot and harvest fresh ginger in a few weeks.",
        botanical_truth: "Ginger genuinely grows from grocery rhizomes, but it is a slow tropical crop: sprouting alone takes ~20 days at 25–30°C (Fujita p. 90), and full rhizome harvest takes 8–10 months (though young 'stem ginger' can be pulled at 3–4 leaves). Some imported ginger is treated with sprout inhibitors."
      },
      steps: [
        {
          title: "Select Plump Rhizomes with ≥2 Buds & Cure Cut Surfaces",
          action: "Pick firm, unwrinkled organic or local ginger with pale green/pink growth buds ('eyes'). If cutting a large rhizome, keep at least 2 buds per piece and air-dry the cut surface for 1–2 days to callus (soak overnight in warm water first if sprout inhibitors are suspected).",
          verification_checkpoint: "Buds look plump and slightly raised; cut surfaces are dry and callused.",
          failure_signal: "Shriveled, hollow rhizomes, blue-green mold, or soft spongy flesh."
        },
        {
          title: "Bury Horizontally 3 cm Deep in a ≥20 cm Wide & Deep Container",
          action: "Use a wide pot at least 20 cm deep (Fujita p. 89) filled with rich, porous mix (40% Akadama + 40% compost + 10% leaf mold + 10% rice hulls). Lay ginger horizontally with buds pointing UP, cover with 3 cm soil, press lightly, and water thoroughly once.",
          verification_checkpoint: "Soil cover is ~3 cm; excess water drains from bottom holes within 10 seconds.",
          failure_signal: "Shallow pot (<15 cm) restricting rhizome expansion or heavy clay soil staying waterlogged."
        },
        {
          title: "Keep Warm (25–30°C), Hold Back Water Until Sprouting, Then Hill Soil",
          action: "Before sprouting (~20 days), water ONLY when topsoil dries to prevent rhizome rot. Once shoots emerge, feed every 2 weeks and hill 2 cm of soil over exposed rhizomes. Harvest young 'pencil ginger' at 3–4 leaves, 'leaf ginger' at 5–6 leaves, or full rhizomes in late autumn (Fujita p. 91).",
          verification_checkpoint: "Green bamboo-like shoots break soil in 20–30 days and unfurl aromatic leaves.",
          failure_signal: "Overwatering before emergence causing black, foul-smelling rhizome rot."
        }
      ],
      pitfalls: [
        {
          symptom: "Ginger sits in soil for over a month without sprouting and rots",
          root_cause: "Soil temperature below 20°C induces dormancy while wet soil rots the rhizome, or heavy sprout inhibitor treatment.",
          fix: "Plant only in warm 25–30°C conditions using organic/local ginger with visible swollen buds; keep barely moist until shoots appear."
        }
      ]
    },
    garlic: {
      verdict_label: "Foolproof for Garlic Greens; Impossible to Grow Full Bulbs in Water",
      starting_method_label: "Unpeeled cloves in shallow soil for garlic greens (or 0.5 cm water tray)",
      water_only_limit: "Supports 1–2 cuts of garlic greens only (clove reserves deplete in 14–21 days)",
      light_label: "Bright windowsill OK (very forgiving when grown for greens)",
      expected_harvest_window: "Shoots in 5–7 days; first cut of garlic greens in 14–20 days",
      hero_caption: "Suggested media: Cloves resting in 0.5 cm water vs. soil-grown garlic greens",
      myth_vs_reality: {
        common_myth: "Put a garlic clove in a glass of water and it will grow into a whole new multi-clove garlic bulb.",
        botanical_truth: "Distinguish your harvest target: ① Growing 'garlic greens/scallions' from a clove in shallow soil or water takes just 2 weeks and is nearly foolproof; ② Growing a new multi-clove bulb in water is a 100% myth (it rots)—bulbing requires autumn soil planting, winter cold vernalization, and months of full sun."
      },
      steps: [
        {
          title: "Select Firm, Untreated Cloves with Intact Basal Plates",
          action: "Choose plump, heavy cloves (ideally already showing a tiny green tip or from local farmers' markets) and leave the thin papery tunic intact to protect against fungal rot.",
          verification_checkpoint: "Clove feels solid with an undamaged flat basal root plate.",
          failure_signal: "Soft, hollowed-out cloves or sunken brown fungal lesions."
        },
        {
          title: "Plant Pointed-Tip Up in Shallow Soil (or 0.5 cm Water Tray)",
          action: "Soil method (recommended, zero odor): Push cloves pointed-end UP into drainage pots with the top 1/3 exposed, then water. Water method: Rest cloves in a flat tray with only 0.5–1 cm water touching the bottom basal plate—never submerge the whole clove.",
          verification_checkpoint: "White roots emerge in 3–5 days followed by upright green shoots in 5–10 days.",
          failure_signal: "Submerging cloves halfway up in water, causing slimy fermenting garlic stench."
        },
        {
          title: "Snip Greens at 15–20 cm, Leaving a 3–4 cm Stubble for Regrowth",
          action: "Once garlic greens reach 15–20 cm tall, snip 3–4 cm above the clove tip for stir-fries or garnish. Soil-planted cloves will push 2–3 flushes before the mother clove shrivels.",
          verification_checkpoint: "Clean cut regrows a second flush within 3–5 days.",
          failure_signal: "Stagnant water tray growing algae or shriveled clove left rotting in wet soil."
        }
      ],
      pitfalls: [
        {
          symptom: "Garlic clove sits in water for 2 weeks with zero roots and turns black",
          root_cause: "Commercial garlic sprayed with anti-sprouting chemicals + deep water hypoxia.",
          fix: "Use local/organic cloves showing a green sprout tip and plant in shallow porous soil."
        }
      ]
    },
    basil: {
      verdict_label: "Top Stem-Cutting Rooter (Soil Transfer + Node Pinching = Bushy Harvest)",
      starting_method_label: "Root fresh 10–15 cm stem cuttings in water → pot up / Split supermarket pot",
      water_only_limit: "7–14 days (transfer to soil once roots reach 2.5–5 cm or plant starves)",
      light_label: "High light & warmth required (18–28°C ideal; low light causes black stem rot)",
      expected_harvest_window: "7–14 days to root in water; continuous pinching harvest 3–4 weeks after potting",
      hero_caption: "Suggested media: Basil stem cutting with lower leaves stripped + 1-into-2 node pinching diagram",
      myth_vs_reality: {
        common_myth: "Keep a supermarket living basil pot on the counter as-is; cut basil stems in water only last a few days.",
        botanical_truth: "① Fresh non-woody basil stems with 2–3 nodes root prolifically in water within 7–14 days; ② Conversely, supermarket 'living basil pots' cram 20–30 seedlings into one 4-inch pot—unless divided into 3–5 pots immediately, root competition kills the whole pot within two weeks."
      },
      steps: [
        {
          title: "Take 10–15 cm Softwood Cuttings (or Divide Crowded Supermarket Pot)",
          action: "For cuttings: Cut 0.5 cm below a node on a healthy 10–15 cm non-woody stem, strip all leaves from the lower 2/3, and leave only 2–4 small top leaves. For supermarket pots: slice the root ball gently into 3–4 sections (2–3 plants per new pot).",
          verification_checkpoint: "Submerged stem section has zero attached leaves or petioles and 1–2 clean nodes underwater.",
          failure_signal: "Leaves left underwater to rot, or using dark woody flowering stems."
        },
        {
          title: "Root in Warm, Bright Indirect Light (Never Cold Drafts)",
          action: "Place cuttings in a clear glass with water covering the bottom 1–2 nodes in a warm (≥18°C), bright spot away from cold windowpanes or AC vents. Change water every 3–5 days.",
          verification_checkpoint: "Within 7–14 days, vigorous white roots reach 2.5–5 cm (1–2 in) from the nodes.",
          failure_signal: "Black mushy stem rot spreading upward—re-cut 2 cm above black tissue and disinfect glass."
        },
        {
          title: "Pot into Rich Mix & Pinch 0.5 cm Above Double-Leaf Nodes",
          action: "Transplant into well-draining potting soil once roots reach 2.5–5 cm; water thoroughly when topsoil dries (Fujita p. 94). When 20–30 cm tall, cut 0.5 cm above a node with two opposite axillary buds so the stem splits 1-into-2. Pinch off any flower spikes immediately.",
          verification_checkpoint: "Two lateral branches sprout from the pinched node within 7 days, creating a dense bush.",
          failure_signal: "Plucking single large leaves leaving a tall bare stalk, or letting flower spikes bloom (turns leaves bitter)."
        }
      ],
      pitfalls: [
        {
          symptom: "Fine yellow stippling on leaves or sticky droplets (Spider Mites & Aphids)",
          root_cause: "Dry indoor heat or hitchhiking pests from supermarket pots (Fujita p. 94).",
          fix: "Quarantine new plants 7–14 days; rinse leaf undersides with water and apply insecticidal soap or neem oil."
        }
      ]
    },
    mint: {
      verdict_label: "Ultra-Easy Stem Rooter, Must Be Isolated in Its Own Solo Pot",
      starting_method_label: "Water-root fresh nodal cuttings → solo pot / Divide living pot (skip seeds)",
      water_only_limit: "7–14 days (max 2–3 weeks; transfer to soil or EC 2.0–2.4 nutrient solution)",
      light_label: "Bright window or grow light (supplemental LED required in autumn/winter)",
      ppfd_dli: "PPFD 150–250 μmol·m⁻²·s⁻¹ (hydro 200–320) | DLI 10–16 | 12–14 h/day",
      container_and_soil: "20–25 cm deep wide SOLO pot (never co-plant); 60% coco/peat + 20% perlite + 20% compost (no bottom gravel)",
      expected_harvest_window: "7–14 days to root; first pinch harvest 2–3 weeks after potting (3–4 wks total)",
      hero_caption: "Suggested media: Mint cutting with stripped lower nodes in water vs. 20 cm solo container",
      myth_vs_reality: {
        common_myth: "Mint grows forever in a glass of plain water, or you can plant mint, rosemary, and thyme together in one big planter.",
        botanical_truth: "① Plain water lacks N-P-K; after 2 weeks leaves turn yellow, essential oils drop, and fragile aquatic roots rot; ② Mint sends aggressive underground stolons/runners that strangle any co-planted herbs within months—always isolate in a solo pot (Best Home Vegetable Book p. 57); ③ Supermarket living mint pots must be divided and repotted."
      },
      steps: [
        {
          title: "Select 8–10 cm Fresh Shoot Tips & Strip Lower Leaves",
          action: "Snip an 8–10 cm (3–4 in) healthy shoot tip above a node using clean shears, strip leaves from the lower 1/2 to 2/3, and leave 3–4 small top leaves (Balcony 70 Tips p. 69).",
          verification_checkpoint: "Clean angled cut below a node with 1–2 bare nodes exposed and zero leaves touching water.",
          failure_signal: "Submerged leaves left to ferment within 48 hours or crushed, bruised stem ends."
        },
        {
          title: "Water-Root at 18–24°C with Water Changes Every 2–3 Days",
          action: "Submerge bare nodes in clean water in bright indirect light at 18–24°C, replacing water every 2–3 days.",
          verification_checkpoint: "White adventitious roots reach 2.5–5 cm (1–2 in) with secondary branching within 5–10 days.",
          failure_signal: "Cloudy foul water and brown mushy stem base."
        },
        {
          title: "Pot into a 20–25 cm Wide Solo Container (No Bottom Gravel)",
          action: "Fill a 20–25 cm wide pot with drainage holes using 60% peat/coco coir + 20% perlite + 20% compost. Gently plant rooted cuttings without snapping fragile water roots and water thoroughly.",
          verification_checkpoint: "Water drains freely from bottom holes and stems stand upright.",
          failure_signal: "Crushing brittle water roots or putting gravel at the bottom (creates a Perched Water Table)."
        },
        {
          title: "Acclimate 48–72 Hours, Then Place Under 12–14h LED Light",
          action: "Keep in indirect light at 60–70% humidity for 2–3 days, then place 20–30 cm under a full-spectrum LED (12–14 h/day). Water when top 1 cm dries and empty saucer within 30 minutes.",
          verification_checkpoint: "Compact internodes (<1.5 cm) and crisp, menthol-rich leaves.",
          failure_signal: "Pot sitting in standing saucer water or leggy stretching from dim light."
        }
      ],
      pitfalls: [
        {
          symptom: "Long floppy stems, wide internodes, and yellowing lower leaves",
          root_cause: "Light starvation (etiolation) when canopy PPFD falls below 150 μmol·m⁻²·s⁻¹.",
          fix: "Cut stems back by 1/3 and lower full-spectrum LED grow light to 20–30 cm above canopy for 12–14 h/day."
        },
        {
          symptom: "White powdery patches on leaves (Powdery Mildew)",
          root_cause: "Stagnant indoor air and high humidity inside dense foliage.",
          fix: "Prune affected stems, run a small circulation fan, and spray diluted potassium/sodium bicarbonate."
        }
      ]
    },
    rosemary: {
      verdict_label: "Highest Indoor Difficulty (5★): Woody Scraps Rot; Needs Grow Light + Terracotta",
      starting_method_label: "Buy nursery starter plant / Root green softwood tips in gritty mix (never seed)",
      water_only_limit: "2–4 weeks rooting only (highly aerobic roots; transfer at 2.5–5 cm or roots suffocate)",
      light_label: "Grow light mandatory indoors (14–16 h/day full spectrum; dies on winter windowsills)",
      ppfd_dli: "PPFD 300–400 μmol·m⁻²·s⁻¹ (max 400–600) | DLI 18–25+ | 14–16 h/day",
      container_and_soil: "Unglazed terracotta pot only 2.5–5 cm wider than root ball; 2:1 Mediterranean mix (2 parts coco/compost : 1 part coarse perlite/pumice/horticultural grit)",
      expected_harvest_window: "Nursery plant ~3 mos after acclimation; cuttings 8–12 wks; seeds take 15 mos (~15% germination)",
      hero_caption: "Suggested media: Unglazed terracotta pot + 2:1 gritty mix + root crown flush with soil surface",
      myth_vs_reality: {
        common_myth: "Crispy brown rosemary needles mean drought—water it daily! Repot into a huge deep container so it grows faster.",
        botanical_truth: "① 'False drought' is the #1 killer: once roots rot from overwatering, they stop delivering water and needles turn crispy brown—watering again finishes it off (unpot to check: firm white = dry, black slimy = rot); ② Oversized pots hold dead wet soil and suffocate roots—use a snug unglazed terracotta pot with zero bottom gravel; ③ Winter windowsills (<8 DLI) starve rosemary without a grow light."
      },
      steps: [
        {
          title: "Select 7–10 cm Green Softwood Tips (Skip Woody Stems & Seeds)",
          action: "Snip 7–10 cm (3–4 in) green non-woody shoot tips in spring/autumn and carefully trim needles from the lower 4 cm with sharp shears without tearing the bark (Texas A&M Extension E-623).",
          verification_checkpoint: "Smooth basal cut on pliable green stem; healthy green needles at top.",
          failure_signal: "Using hard brown woody grocery stems (rot in water) or tearing crowded root balls apart by hand."
        },
        {
          title: "Root in Sterile 1:1 Gritty Medium (or Oxygenated Water)",
          action: "Insert into damp fertilizer-free 50% perlite + 50% vermiculite/coco mix at 18–21°C in bright indirect light (or change water every 2–3 days if water-rooting).",
          verification_checkpoint: "After 4–8 weeks, gentle tug meets firm root resistance (Balcony 70 Tips p. 69) or water roots reach 2.5–5 cm.",
          failure_signal: "Stem base turns black and slimy while needles drop."
        },
        {
          title: "Pot in Unglazed Terracotta with 2:1 Mediterranean Gritty Mix",
          action: "Use an unglazed terracotta pot only 2.5–5 cm wider than the root ball. Fill with 2 parts peat-free compost/coco coir + 1 part coarse perlite/pumice/horticultural grit (never fine builder's sand). Position root crown flush with or slightly above the soil surface.",
          verification_checkpoint: "Water penetrates within seconds and drains freely from the bottom without pooling.",
          failure_signal: "Using moisture-retentive potting soil, fine sand, or burying the root crown."
        },
        {
          title: "High-Output LED (14–16h) + 24h Gentle Fan + Deep Dry-Down Cycle",
          action: "Hang full-spectrum LED 25–40 cm above canopy (PPFD 300–400, 14–16 h/day), run a small fan nearby, and water ONLY when soil is dry 5 cm (2 in) down and pot feels light (every 1–2 weeks).",
          verification_checkpoint: "Stiff, fragrant dark-green needles with zero white powdery mildew.",
          failure_signal: "Calendar watering every 2 days or stagnant humid air."
        }
      ],
      pitfalls: [
        {
          symptom: "Needles turn crispy and brown across the whole plant while soil is still damp",
          root_cause: "Anaerobic root rot (Pythium/Phytophthora) destroyed water uptake—classic false drought.",
          fix: "Stop watering immediately! Unpot, trim black mushy roots, and repot any surviving firm white roots into dry 2:1 gritty mix in terracotta."
        },
        {
          symptom: "White floury coating (Powdery Mildew) or yellow stippling (Spider Mites)",
          root_cause: "Stagnant indoor air triggers powdery mildew; hot dry air from heaters triggers spider mites.",
          fix: "Run a 24h micro-fan and spray potassium bicarbonate for mildew; move away from heaters (13–21°C) and use insecticidal soap for mites."
        }
      ]
    },
    thyme: {
      verdict_label: "Water Cuttings Rot Easily (3★): Never Overhead-Water; Repot Whole or Root Soft Tips",
      starting_method_label: "Repot living clump into larger terracotta (max 2-way split) / Root soft tips in perlite",
      water_only_limit: "1–2 weeks rooting max (transfer at 2.5–5 cm or roots swell and melt)",
      light_label: "High-light crop (South window in summer; LED grow light required year-round indoors)",
      ppfd_dli: "PPFD 250–300 μmol·m⁻²·s⁻¹ (hydro 300–400) | DLI 14–20 | 12–16 h/day",
      container_and_soil: "15–20 cm shallow unglazed terracotta pot; cactus/succulent mix or 60–65% potting mix + 35% coarse perlite/grit/pumice",
      expected_harvest_window: "4–6 weeks after potting rooted cuttings; 10–13 weeks (75–95 days) from seed",
      hero_caption: "Suggested media: Bottom-watering thyme in terracotta vs. center canopy melt from overhead watering",
      myth_vs_reality: {
        common_myth: "Water thyme from directly overhead with a watering can, or tear a supermarket thyme pot into a dozen tiny plugs.",
        botanical_truth: "① Thyme grows as a dense, low-lying subshrub cushion—overhead watering traps moisture in the dark crown center, causing fatal 'canopy melt' (crown rot); always bottom-water or pour along the pot rim; ② Thyme's hair-fine fibrous roots die if ripped into tiny plugs—repot the whole clump intact or split in half at most."
      },
      steps: [
        {
          title: "Snip 5–10 cm Green Non-Woody Tips in Spring/Autumn",
          action: "At ~20°C, use sterile shears to snip 5–10 cm green shoot tips (Baike p. 424 / Balcony 70 Tips p. 69), trim lower tiny leaves carefully, and let the angled cut air-dry briefly.",
          verification_checkpoint: "Firm green stem with 2–3 clean nodes and intact top leaves.",
          failure_signal: "Using dark brown post-flowering woody stems."
        },
        {
          title: "Root in Damp Perlite/Vermiculite (or Repot Supermarket Clump Intact)",
          action: "Insert cuttings 3–5 cm deep into moist pure perlite, vermiculite, or river sand at 18–25°C in bright indirect light. If starting from a supermarket pot, transfer the root ball whole (or split in 2 max) into a slightly wider terracotta pot.",
          verification_checkpoint: "Cuttings show firm tug resistance and new tip growth in 1–2 weeks.",
          failure_signal: "Waterlogged medium rotting stem bases or harsh sun scorching unrooted tips."
        },
        {
          title: "Pot in 15–20 cm Terracotta with 35% Coarse Grit (Crown Exposed)",
          action: "Fill a 15–20 cm unglazed terracotta pot with cactus mix or 65% potting soil + 35% coarse perlite/pumice (no bottom gravel, no moisture-control soil). Keep the root crown slightly proud of the soil line.",
          verification_checkpoint: "Water drains through within seconds and root collar stays dry and airy.",
          failure_signal: "Soil stays heavy and wet for >4 days."
        },
        {
          title: "14–16h LED Grow Light + Bottom-Watering Only",
          action: "Place 15–20 cm under an LED grow light (PPFD 250–300, 14–16 h/day). When dry 4–5 cm down and pot feels light, set pot in a 2–3 cm water saucer for 15–20 minutes to bottom-soak, then drain completely.",
          verification_checkpoint: "Dense, aromatic cushion habit with soil drying out cleanly within 2–3 days.",
          failure_signal: "Overhead misting/pouring causing black center rot."
        }
      ],
      pitfalls: [
        {
          symptom: "Center of the thyme plant suddenly turns black, collapses, and melts (Canopy Melt)",
          root_cause: "Overhead watering trapped water inside the dense woody crown with poor indoor airflow.",
          fix: "Prune out all black rotted center stems to open airflow, switch strictly to bottom-watering, and add a small fan."
        },
        {
          symptom: "Bare woody lower stems, wide internodes, and weak scent",
          root_cause: "Insufficient light (DLI < 14 mol·m⁻²·day⁻¹) forcing etiolation.",
          fix: "Move directly under a grow light (PPFD 250–300) for 14h/day and trim leggy tips to trigger lower branching."
        }
      ]
    },
    chives: {
      verdict_label: "Rooted Bulb Clumps Divide Easily (Cut Leaf Tips Alone Cannot Regrow)",
      starting_method_label: "Divide rooted clump (3–4 bulbs/cluster) or sow seeds in spring/autumn",
      water_only_limit: "Not applicable to cut leaf tips (requires intact basal bulbs planted in moisture-retentive soil)",
      light_label: "Bright windowsill OK (hardy perennial, thrives in cool-to-normal room temps)",
      ppfd_dli: "PPFD 150–250 μmol·m⁻²·s⁻¹ | DLI 10–14 | 12–14 h/day",
      container_and_soil: "Window box or 15 cm deep pot; fertile, moisture-retentive potting mix (do not let bone-dry)",
      expected_harvest_window: "2 weeks after trimming potted clump to 5 cm; year 2+ yields heavy repeated cuts",
      hero_caption: "Suggested media: Dividing chives into 3–4 bulb clusters & trimming to 5 cm (2 in) to force vigorous growth",
      myth_vs_reality: {
        common_myth: "Put snipped chive leaves from a grocery clamshell into water and they will root.",
        botanical_truth: "Unlike green onions, packaged cut chives are just hollow leaf blades without the basal bulb—they will only rot in water. To harvest continuously indoors, divide a rooted chive clump into clusters of 3–4 bulbs (Baike p. 428) and trim tops down to 5 cm (2 in) after potting to force thick new shoots (Iowa State Extension)."
      },
      steps: [
        {
          title: "Divide Rooted Clumps into 3–4 Bulb Clusters (or Sow 6–7 Seeds/Spot)",
          action: "Separate a living chive pot into small clusters of 3–4 mini-bulbs and plant 7–8 cm apart in a moisture-retentive planter box (or sow 6–7 seeds per spot covered lightly with soil, Baike p. 429).",
          verification_checkpoint: "Basal bulbs are firm and upright in damp, fertile soil.",
          failure_signal: "Sticking rootless cut green leaf blades into water or planting in bone-dry sand."
        },
        {
          title: "Trim Established Clump to 5 cm (2 Inches) to Force Vigorous Regrowth",
          action: "After potting a nursery clump indoors, cut old weak foliage down to ~5 cm (2 in) above the soil line (Iowa State Extension) and place on a bright cool windowsill.",
          verification_checkpoint: "Within 7–14 days, uniform dark-green tubular leaves shoot up vigorously.",
          failure_signal: "Waterlogged soil rotting the mini-bulbs."
        },
        {
          title: "Pinch Off Flower Buds Early & Top-Dress Monthly",
          action: "Snip leaves once ≥15 cm tall (harvest lightly in year 1 if grown from seed; cut heavily from year 2 onward). Pinch off purple/white flower buds as soon as they appear so leaves don't turn tough, and feed monthly (Baike p. 429).",
          verification_checkpoint: "Tender, hollow leaves regenerate after each cut; divide and repot every 2–3 years.",
          failure_signal: "Letting flower heads bloom and set seed, which makes foliage tough and fibrous."
        }
      ],
      pitfalls: [
        {
          symptom: "Chive leaf tips turn brown, papery, and dry",
          root_cause: "Chives are cold-hardy but drought-sensitive (Baike p. 428); soil dried out completely.",
          fix: "Use moisture-retentive organic potting mix, water before the root zone dries completely, and trim off yellow tips."
        }
      ]
    },
    "garlic-chives": {
      verdict_label: "Most Shade-Tolerant Multi-Year Cut-and-Come-Again Allium (From Root Clumps/Seed)",
      starting_method_label: "Divide perennial rhizome/root clumps or sow seeds (harvest for 3–4 years)",
      water_only_limit: "Not applicable to cut leaves (requires rooted crowns or seeds in soil)",
      light_label: "Highly shade-tolerant (Thrives on bright windowsills or semi-shaded balconies at ~20°C)",
      ppfd_dli: "PPFD 120–220 μmol·m⁻²·s⁻¹ | DLI 8–12 | 10–14 h/day",
      container_and_soil: "18–25 cm deep rectangular planter; 40% Akadama + 40% compost + 10% leaf mold + 10% rice hulls",
      expected_harvest_window: "Seeds sprout in ~10 days; cut at 20–25 cm tall leaving 3–4 cm stubble every 2–3 weeks",
      hero_caption: "Suggested media: Harvesting garlic chives 3–4 cm above soil line & post-cut compost top-dressing",
      myth_vs_reality: {
        common_myth: "You need full outdoor farm sun to grow garlic chives; or cut market leaves can regrow in water.",
        botanical_truth: "① Garlic chives are one of the toughest semi-shade container crops—Fujita (p. 44) specifically notes they thrive in slightly shaded, cool spots (~20°C) and produce for 3–4 years from a single planting; ② Water before the soil dries out (dry soil makes blades tough and fibrous), and always leave 3–4 cm of stubble when cutting."
      },
      steps: [
        {
          title: "Plant Root Clumps (2–4 Plants/Spot) or Sow 5–6 Seeds at 0.5–1 cm Depth",
          action: "Dig 0.5–1 cm shallow holes spaced 15–20 cm apart, sow 5–6 seeds per hole, cover lightly, and water (~10 days to germinate, Fujita p. 45); or plant 2–4 rooted crowns per spot (Baike p. 211).",
          verification_checkpoint: "Slender green blades emerge in ~10 days; transplanted crowns stand firm.",
          failure_signal: "Burying seeds >2 cm deep or over-harvesting thin first-year seedlings."
        },
        {
          title: "Water Before Soil Dries Out Completely (Prevents Tough Blades)",
          action: "Keep in a bright or semi-shaded spot around 20°C. Water thoroughly before the potting mix dries out completely so flat blades stay tender and juicy (Fujita p. 44).",
          verification_checkpoint: "Broad, flat, dark-green blades with crisp texture and strong garlic aroma.",
          failure_signal: "Letting pot dry bone-hard, turning leaves fibrous and leathery."
        },
        {
          title: "Cut 3–4 cm Above Soil Line + Top-Dress & Hill Soil After Every Cut",
          action: "When blades reach 20–30 cm tall, cut with sharp shears leaving 3–4 cm of base stubble above the soil (harvest lightly in year 1 to build roots). After every cut, apply organic fertilizer, add a thin layer of soil, and snip off autumn flower stalks (Fujita p. 45).",
          verification_checkpoint: "Fresh green blades shoot from the 3–4 cm stubble within 3–5 days, ready to cut again in 2–3 weeks.",
          failure_signal: "Cutting flush with the dirt (damages crown meristem) or skipping post-harvest feeding."
        }
      ],
      pitfalls: [
        {
          symptom: "Blades grow thinner and weaker each year",
          root_cause: "Skipped post-harvest fertilizing ('thank-you fertilizer', Fujita p. 45), allowed flower stalks to bloom, or roots became overcrowded after 3–4 years.",
          fix: "Top-dress with compost after every harvest, remove flower stalks early, and dig up/divide clumps every 3–4 years (Baike p. 210)."
        }
      ]
    },
    perilla: {
      verdict_label: "Nodal Cuttings Root Easily in Water; Light-Loving Seeds Also Sprout Fast",
      starting_method_label: "Water-root fresh nodal stem cuttings → soil / Sow seeds in 5 mm shallow furrow",
      water_only_limit: "7–14 days to root in water, then transfer immediately to moist potting mix",
      light_label: "Bright window to full sun (grows in partial shade; stronger light deepens color & aroma)",
      ppfd_dli: "PPFD 180–300 μmol·m⁻²·s⁻¹ | DLI 12–16 | 12–14 h/day",
      container_and_soil: "18–20+ cm deep pot; moisture-retentive porous mix (never let dry out completely)",
      expected_harvest_window: "1–2 wks to root cuttings; 6–8 wks from seed to 30–40 cm bottom-leaf harvest",
      hero_caption: "Suggested media: Harvesting lower large shiso leaves sequentially & pinching top shoot tips",
      myth_vs_reality: {
        common_myth: "Treat perilla (shiso) like Mediterranean rosemary—let the soil dry bone-dry between waterings.",
        botanical_truth: "Although perilla belongs to the mint family (Lamiaceae), its large thin leaves transpire rapidly and hate drying out—Fujita (p. 42) warns to water thoroughly BEFORE the soil dries, or leaves turn rough and attract spider mites. Also, perilla seeds are photoblastic (need light to germinate) and must be covered with only ~5 mm of soil."
      },
      steps: [
        {
          title: "Sow in a 5 mm Shallow Furrow (or Water-Root 2-Node Stem Cuttings)",
          action: "For seeds: Scratch a 5 mm shallow furrow, scatter seeds, and dust with a paper-thin layer of soil (Fujita p. 43). For fresh grocery stems: strip lower leaves to expose 2 nodes and root in water (Balcony 70 Tips p. 69).",
          verification_checkpoint: "Cotyledons emerge in 7–12 days (or white roots form on water cuttings in 7–14 days).",
          failure_signal: "Burying seeds >1.5 cm deep in dark soil or letting germinating topsoil dry out."
        },
        {
          title: "Three-Stage Thinning to 15 cm Spacing",
          action: "Thin seedlings to 3 cm apart after sprouting, 6 cm apart at 5–6 cm tall, and finally 15 cm apart at 10 cm tall (1–2 healthy plants per standard pot, Fujita p. 43).",
          verification_checkpoint: "Sturdy square stems with wide, uncrowded serrated leaves.",
          failure_signal: "Leaving a dozen seedlings crowded in one small pot."
        },
        {
          title: "Feed Every 2 Weeks, Pinch Tips & Harvest Large Lower Leaves First",
          action: "Start feeding at 7–8 true leaves and repeat every 2 weeks with light hilling. Pinch growing tips to promote bushiness (Best Home Vegetable Book p. 77). Once 30–40 cm tall, harvest larger lower leaves sequentially without stripping the plant bare (Fujita p. 43).",
          verification_checkpoint: "Bushy multi-branched canopy continuously producing tender, fragrant leaves.",
          failure_signal: "Dry soil triggering spider mite outbreaks on leaf undersides."
        }
      ],
      pitfalls: [
        {
          symptom: "Dense yellow-white stippling dots on leaves and fine webbing underneath",
          root_cause: "Hot dry indoor air and dry soil invited spider mites and aphids (Fujita p. 42).",
          fix: "Keep soil evenly moist, rinse leaf undersides with water, and spray insecticidal soap."
        }
      ]
    },
    lettuce: {
      verdict_label: "Romaine Stump in Water Regrows Only a Tiny Garnish; Direct-Sow Loose-Leaf Seed Instead",
      starting_method_label: "Direct-sow loose-leaf lettuce 5–10 mm deep (treat romaine cores as a 10-day novelty)",
      water_only_limit: "7–14 days (romaine core exhausts reserves, turns bitter & bolts within 2 weeks)",
      light_label: "Medium-strong light + cool temps (15–20°C; MUST have complete darkness at night)",
      ppfd_dli: "PPFD 150–250 μmol·m⁻²·s⁻¹ | DLI 10–14 | 12–14 h/day (strictly dark at night)",
      container_and_soil: "Wide planter (20 cm spacing); 40% Akadama + 40% compost + 10% leaf mold + 10% rice hulls",
      expected_harvest_window: "10–14 days for 1 mini garnish from stump; 35–45 days from seed for continuous outer-leaf picking",
      hero_caption: "Suggested media: Day 10 romaine stump garnish vs. seed-grown loose-leaf lettuce outer-leaf harvest",
      myth_vs_reality: {
        common_myth: "Put a cut romaine lettuce bottom in a bowl of water and regrow a full-sized crispy head of lettuce.",
        botanical_truth: "University extension specialists confirm you will NEVER grow a full head of lettuce from a scrap in water. The core pushes a few tiny leaves using leftover sugars before turning bitter and bolting within 10–14 days. For real indoor salads, sow loose-leaf lettuce seeds 5–10 mm deep and keep them in complete darkness at night (Fujita p. 34)."
      },
      steps: [
        {
          title: "Choose Your Path: 10-Day Stump Experiment vs. 5–10 mm Shallow Seeding",
          action: "For a 10-day scrap test: set a 4–5 cm romaine stump in 1 cm water, change daily, snip the small inner leaves at day 10–14, then compost. For continuous salad: press 5–10 mm shallow indentations 20 cm apart in moist potting mix, drop 4–7 loose-leaf seeds per spot, and cover thinly (Fujita p. 35).",
          verification_checkpoint: "Seeds kept cool (15–20°C) and moist sprout uniformly within 3–7 days.",
          failure_signal: "Burying photoblastic lettuce seeds >2 cm deep or sowing in >28°C summer heat."
        },
        {
          title: "Three-Stage Thinning Down to 1 Strong Plant per Spot",
          action: "Thin to 3 seedlings per spot once cotyledons open, 2 seedlings at 2–3 true leaves, and 1 vigorous plant per spot at 5–6 true leaves, followed by organic top-dressing and light hilling (Fujita p. 35 / Baike p. 225).",
          verification_checkpoint: "Open rosette of crisp leaves with good airflow around the base.",
          failure_signal: "Unthinned tangles developing basal rot (Sclerotinia) and aphids."
        },
        {
          title: "Keep Cool (15–20°C), Enforce Night Darkness & Pick Outer Leaves Sequentially",
          action: "Provide 12–14h of bright light during the day, and place in a completely dark spot at night (Fujita p. 34 warns artificial night lighting disrupts lettuce photoperiod). Pick outer mature leaves one by one while leaving the center growing point intact.",
          verification_checkpoint: "Sweet, crisp outer leaves harvested every 3–5 days for weeks.",
          failure_signal: "Temps >25°C or 24-hour room lighting triggering rapid central stalk bolting and milky bitter sap."
        }
      ],
      pitfalls: [
        {
          symptom: "Lettuce suddenly shoots up a tall central stem and tastes bitter",
          root_cause: "High indoor temperature (>24°C) or nighttime room light exposure triggered premature bolting.",
          fix: "Grow in cool 15–20°C spots, ensure strict nighttime darkness, and harvest immediately if bolting starts."
        }
      ]
    },
    oregano: {
      verdict_label: "Mediterranean Dry-Root Herb: Soft Tips Root, 90% of Indoor Deaths Are Overwatering & Low Light",
      starting_method_label: "Repot nursery start into gritty terracotta / Root softwood tips",
      water_only_limit: "1–2 weeks for softwood rooting only; transfer immediately to fast-draining gritty mix",
      light_label: "Very high light required (Sunniest south/west window or 10–14+ hrs LED grow light)",
      ppfd_dli: "PPFD 300–450 μmol·m⁻²·s⁻¹ | DLI 16–22 | 14–16 h/day",
      container_and_soil: "Terracotta pot with drainage holes; sterile soilless mix + 30% perlite (never outdoor garden soil)",
      expected_harvest_window: "2–3 weeks after potting nursery plant; 6–8 weeks from seed",
      hero_caption: "Suggested media: Finger-testing dry soil depth before watering oregano & pinching above nodes",
      myth_vs_reality: {
        common_myth: "Water oregano on the same daily schedule as basil/mint, and dig up backyard garden dirt to fill the pot.",
        botanical_truth: "① University extensions (NC State / Iowa State) strictly warn never to use backyard garden soil indoors—it compacts and harbors pests; always use sterile soilless mix with perlite; ② Overwatering is the #1 killer of indoor oregano—let soil dry several inches down between waterings; ③ High light is required to synthesize aromatic carvacrol/thymol oils."
      },
      steps: [
        {
          title: "Pot in Sterile Gritty Soilless Mix with Active Drainage",
          action: "Fill a drainage-equipped terracotta pot with sterile light soilless potting mix amended with 25%–30% perlite (NC State / Penn State Extension). Never use backyard garden dirt.",
          verification_checkpoint: "Water flows rapidly through the pot and saucer is emptied immediately.",
          failure_signal: "Compacted garden soil or decorative cachepots trapping standing water."
        },
        {
          title: "Provide Intense Light & Water Only After Deep Dry-Down",
          action: "Place in your sunniest south/west window or under an LED grow light (14–16 h/day). Test soil with your finger—water thoroughly ONLY when dry several inches down (Iowa State Extension).",
          verification_checkpoint: "Compact, sturdy stems with thick aromatic leaves.",
          failure_signal: "Pale, stretched stems leaning toward the window with almost no oregano scent."
        },
        {
          title: "Pinch Stems Above Nodes Before Flowering",
          action: "Once stems reach 12–15 cm, snip 0.5 cm above a leaf node to encourage dense branching. Pinch off flower buds to keep leaf flavor peak.",
          verification_checkpoint: "Vigorous lateral shoots form a full, cascading mat.",
          failure_signal: "Blackening lower stems and fungus gnats from frequent shallow watering."
        }
      ],
      pitfalls: [
        {
          symptom: "Blackening basal stems, wilting foliage, and fungus gnats on topsoil",
          root_cause: "Overwatering and poor drainage (the #1 indoor oregano killer, Iowa State Extension).",
          fix: "Stop watering, empty saucer, repot into fresh sterile mix with 30% perlite, and deploy yellow sticky traps."
        }
      ]
    },
    microgreens: {
      verdict_label: "#1 Zero-Failure Indoor Starter: No Soil, Just Water, Harvest in 7–10 Days",
      starting_method_label: "Dense seeding on wet sponge/gauze tray; black-out 2 days then expose to window light",
      water_only_limit: "100% water-only from start to harvest (uses concentrated seed reserves over 7–10 days)",
      light_label: "Darkness for first 2 days; bright windowsill for greening (soybean sprouts stay dark full-time)",
      ppfd_dli: "Greening stage: PPFD 100–200 μmol·m⁻²·s⁻¹ or bright windowsill indirect light",
      container_and_soil: "Flat shallow tray lined with wet sponge/cotton/gauze (radish/red cabbage); or gauze-covered jar (bean sprouts)",
      expected_harvest_window: "Sprouts in ~2 days at 18–22°C; snip full tray in 7–10 days",
      hero_caption: "Suggested media: Sponge tray dense seeding under foil blackout vs. greening cotyledons on windowsill",
      myth_vs_reality: {
        common_myth: "Without a balcony, soil, or expensive grow lights, you can only soak rotting vegetable stumps in water.",
        botanical_truth: "Microgreens and sprouts require zero soil and minimal space (Fujita p. 50): powered by dense seed reserves, a wet sponge tray or glass jar at 18–22°C germinates in 2 days and yields a full tray of nutrient-packed greens in 7–10 days with near-100% reliability."
      },
      steps: [
        {
          title: "Line Shallow Tray with Damp Sponge/Gauze & Sow Edge-to-Edge",
          action: "[Radish / Red Cabbage Sprouts] Line a flat tray with water-moistened sponge, cotton, or gauze (damp, not flooded) and spread untreated sprouting seeds in a single dense layer. [Bean Sprouts] Put seeds in a jar with 4–5x water and secure gauze over the mouth with a rubber band (Fujita p. 50).",
          verification_checkpoint: "Seeds form an even single layer resting on damp substrate without floating in deep water.",
          failure_signal: "Drowning seeds underwater (hypoxic rot) or using fungicide-treated field seeds."
        },
        {
          title: "Blackout with Foil at 18–22°C + Mist / Rinse Twice Daily",
          action: "Wrap tray or jar in aluminum foil to block light at 18–22°C. For sponge trays, mist morning and evening with a spray bottle. For jar bean sprouts, invert jar daily to drain, swirl/rinse 2–3 times with fresh water, drain completely, and re-cover with foil.",
          verification_checkpoint: "Crisp white radicles sprout within ~48 hours (fuzzy white root hairs near the tip are healthy root hairs, not mold).",
          failure_signal: "Skipping daily rinses/misting, leading to sour odor and slimy seeds."
        },
        {
          title: "Expose Cotyledons to Window Light to Green Up & Harvest at Day 7–10",
          action: "For radish and red cabbage sprouts, remove foil once yellow cotyledons (double leaves) open and move to a bright windowsill while misting morning and evening. Keep soybean sprouts in the dark full-time (light turns bean sprouts green and tough). Snip at the base at day 7–10.",
          verification_checkpoint: "Cotyledons turn vibrant emerald green within 24–48 hours of light exposure.",
          failure_signal: "Leaving sprouts past day 12–14 in plain water until they starve and collapse."
        }
      ],
      pitfalls: [
        {
          symptom: "Throwing away a healthy tray after mistaking fuzzy white 'root hairs' for mold",
          root_cause: "Cruciferous sprouts (radish/broccoli/cabbage) naturally grow microscopic white root hairs in humid air.",
          fix: "Mist lightly with water: healthy root hairs hug individual roots closely and smell fresh; true mold forms gray cobwebs bridging across multiple seeds and smells musty."
        }
      ]
    },
    "water-spinach": {
      verdict_label: "Champion Supermarket Stem-Cutting Rooter: Loves Heat & Moisture, Harvest in 2–3 Weeks",
      starting_method_label: "Water-root sturdy 2–3 node grocery stems → transfer to wet rich soil (or soak seeds 24h)",
      water_only_limit: "Roots in 3–7 days in water; transfer to rich wet soil (or hydroponic solution) to keep stems tender",
      light_label: "Loves strong sun & heat (grows rapidly at 25–30°C; stalls & yellows below 15°C)",
      ppfd_dli: "PPFD 200–350 μmol·m⁻²·s⁻¹ | DLI 12–18 | 12–14 h/day",
      container_and_soil: "20 cm deep moisture-retentive pot; rich organic soil kept consistently moist",
      expected_harvest_window: "White roots in 3–5 days in water; pinch tender shoots every 2–3 weeks after potting",
      hero_caption: "Suggested media: Supermarket water spinach lower nodal stems rooting in water vs. pinching above 2 basal nodes",
      myth_vs_reality: {
        common_myth: "All leafy vegetable stems rot in water; or you can grow water spinach on a chilly winter windowsill.",
        botanical_truth: "① Water spinach (Convolvulaceae, sweet potato family) has hyper-active nodal root primordia—Baike (pp. 338–339) explicitly notes you can root supermarket stems directly by cutting off the top shoots; ② It is strictly a tropical heat- and water-loving crop (25–30°C ideal) that stalls below 15°C; ③ Never let it dry out or starve for nitrogen, or hollow stems turn tough and stringy."
      },
      steps: [
        {
          title: "Save 10–15 cm Lower Grocery Stems with 2–3 Nodes (or Soak Seeds 24h)",
          action: "Cook the tender upper tips and keep the sturdy 10–15 cm lower stems containing 2–3 nodes, stripping bottom leaves. If starting from seed, soak hard seeds in water for 24 hours before sowing 3–4 seeds per spot at 1 cm depth (Baike p. 339).",
          verification_checkpoint: "Hollow stems are firm and uncrushed with 1–2 clean lower nodes.",
          failure_signal: "Crushed black nodes or attempting to root in <15°C cold water."
        },
        {
          title: "Water-Root for 3–7 Days, Then Plant in Rich Moist Soil",
          action: "Submerge the bottom 1–2 nodes in clean water at 22–30°C, changing water every 1–2 days. Once 2–4 cm white roots ring the nodes (3–7 days), transplant 15–20 cm apart into compost-rich soil and water generously.",
          verification_checkpoint: "Dense white roots sprout around submerged nodes and axillary buds push green leaves.",
          failure_signal: "Left in plain water for weeks without nutrients, producing pale miniature leaves."
        },
        {
          title: "Keep Soil Moist, Feed Biweekly & Harvest Leaving 2 Basal Nodes",
          action: "Never allow soil to dry out; feed every 2 weeks. When shoots reach 25–30 cm, cut above the lowest 2 basal nodes—axillary buds will branch out repeatedly for a new harvest every 2–3 weeks (Baike p. 338).",
          verification_checkpoint: "Crisp, hollow, non-fibrous stems re-branching vigorously after each cut.",
          failure_signal: "Drought stress turning stems woody and tough."
        }
      ],
      pitfalls: [
        {
          symptom: "Stems taste tough, woody, and stringy",
          root_cause: "Soil dried out between waterings, insufficient nitrogen fertilizer, or shoots were left unharvested too long.",
          fix: "Keep soil consistently wet/moist, feed regularly, and harvest young shoots promptly at 20–25 cm."
        }
      ]
    },
    arugula: {
      verdict_label: "Not a Scrap Crop, But Direct-Sown Seeds Sprout in 3–5 Days & Harvest in 25–35 Days",
      starting_method_label: "Direct-sow shallowly (5–10 mm) in a window box",
      water_only_limit: "Water-only works for 7–10 day microgreens; mature peppery leaves require soil",
      light_label: "Bright windowsill or light shade (intense heat & sun make leaves overly pungent and tough)",
      ppfd_dli: "PPFD 150–250 μmol·m⁻²·s⁻¹ | DLI 10–14 | 12–14 h/day",
      container_and_soil: "15 cm deep window box planter; moist, porous general potting mix",
      expected_harvest_window: "Sprouts in 3–5 days; pick outer leaves at 15 cm tall (~3–4 weeks)",
      hero_caption: "Suggested media: Window-box row-sown arugula thinned to 5–8 cm & harvested at 15 cm leaf length",
      myth_vs_reality: {
        common_myth: "Arugula is a fussy gourmet salad green that is hard to grow at home.",
        botanical_truth: "Baike (pp. 234–235) highlights that arugula seeds have an exceptionally high germination rate and grow rapidly in simple window boxes with minimal care. The only secret is harvesting outer leaves early at ~15 cm while keeping soil moist—if left to grow huge or exposed to hot, dry sun, leaves turn leathery and fiercely bitter/spicy."
      },
      steps: [
        {
          title: "Sow in 0.7–1 cm Shallow Furrows in a Window Box",
          action: "Press 0.7–1 cm shallow furrows spaced 10–15 cm apart in moist potting mix, space seeds 1–1.5 cm apart, cover lightly, press gently, and water (Baike p. 235).",
          verification_checkpoint: "Heart-shaped cotyledons emerge uniformly within 3–5 days (>85% germination).",
          failure_signal: "Burying tiny seeds >2 cm deep."
        },
        {
          title: "Thin Twice (Eat the Thinned Micro-Greens in Salads!)",
          action: "At 3 true leaves, thin to 5 cm spacing; at 5 true leaves, thin to 8 cm spacing and top-dress lightly between rows (Baike p. 235). Wash and eat all thinned seedlings as gourmet micro-arugula.",
          verification_checkpoint: "Lobed leaves spread freely without crowding.",
          failure_signal: "Unthinned clumps rotting at the base."
        },
        {
          title: "Harvest Outer Leaves at 15 cm Length for Repeated Cuttings",
          action: "Keep on a bright, cool windowsill (shade slightly in hot weather) with evenly moist soil. Pick outer leaves once they reach ~15 cm, leaving the center crown to keep producing.",
          verification_checkpoint: "Tender leaves with signature nutty, sesame-peppery flavor.",
          failure_signal: "Letting leaves exceed 25 cm under dry, hot conditions until inedibly harsh."
        }
      ],
      pitfalls: [
        {
          symptom: "Leaves taste overwhelmingly harsh, bitter, and tough",
          root_cause: "Harvested too late (>20–25 cm), drought stress, or excessive heat triggering glucosinolate spikes.",
          fix: "Keep soil moist in bright cool light and pick young leaves promptly at 12–15 cm (older leaves can be blanched or stir-fried, Baike p. 234)."
        }
      ]
    },
    dill: {
      verdict_label: "Delicate Taproot Dislikes Transplanting: Skip Stem Water-Regrow; Direct-Sow in Deep Pot",
      starting_method_label: "Direct-sow 5–6 seeds/spot in a ≥20 cm deep pot (or transplant plug before 20 cm tall)",
      water_only_limit: "Not applicable (cut feathery dill fronds do not root in water; they only stay fresh a few days)",
      light_label: "Needs strong light & airflow (low light causes weak, flopping stems; stake tall plants)",
      ppfd_dli: "PPFD 200–350 μmol·m⁻²·s⁻¹ | DLI 12–16 | 12–14 h/day",
      container_and_soil: "20–25+ cm deep container; fertile, well-draining potting mix",
      expected_harvest_window: "Sprouts in 7–14 days; snip feathery leaves once ≥20–25 cm tall",
      hero_caption: "Suggested media: Direct-sown dill in deep pot with 40 cm support stake",
      myth_vs_reality: {
        common_myth: "Stick leftover dill fronds from salmon garnish into water to regrow; or grow dill in a shallow tray.",
        botanical_truth: "Like cilantro and carrots, dill (Apiaceae) grows a sensitive central taproot that hates root disturbance—Baike (pp. 446–447) warns to direct-sow or transplant intact plugs before plants reach 20 cm tall. Cut fronds cannot form roots in water, whereas direct seeding in a deep pot is straightforward."
      },
      steps: [
        {
          title: "Direct-Sow 5–6 Seeds per Spot in a ≥20 cm Deep Pot",
          action: "Sow 5–6 seeds per spot in a ≥20 cm deep pot, cover with a thin layer of soil, and water thoroughly in a sunny spot (Baike p. 447).",
          verification_checkpoint: "Feathery seedlings emerge in 7–14 days; thin to 2–3 strong plants at 3 true leaves.",
          failure_signal: "Bare-root transplanting tall (>30 cm) dill plants, which causes immediate taproot shock and bolting."
        },
        {
          title: "Thin to 1 Plant at 20 cm Tall & Stake at 40–50 cm",
          action: "Leave 1 vigorous plant per spot once 20 cm tall. When plants reach 40–50 cm, insert a bamboo stake for support and top-dress with fertilizer monthly (Baike p. 447).",
          verification_checkpoint: "Upright hollow stems with lush blue-green feathery fronds.",
          failure_signal: "Weak light causing thin stems to kink and collapse."
        },
        {
          title: "Snip Side Fronds As Needed Without Topping the Main Leader Early",
          action: "Snip fresh feathery side leaves anytime during growth for fish, salads, or yogurt sauces while leaving the main growing tip intact.",
          verification_checkpoint: "Sweet, citrus-anise aroma and continuous frond production.",
          failure_signal: "High heat and long days triggering premature umbrella flower heads (stops leaf growth)."
        }
      ],
      pitfalls: [
        {
          symptom: "Dill wilts permanently right after repotting",
          root_cause: "Taproot was damaged or root ball crumbled during late transplanting (Baike p. 446).",
          fix: "Direct-sow seeds directly into their final ≥20 cm deep container so roots are never disturbed."
        }
      ]
    },
    sage: {
      verdict_label: "Mediterranean Perennial Herb: Mound Soil Slightly at Crown for Drainage & Prune Woody Stems",
      starting_method_label: "Plant healthy big-leaved nursery starter / Spring-autumn softwood cuttings",
      water_only_limit: "Rooting phase only (fuzzy leaves rot if kept wet; transfer to gritty mix immediately)",
      light_label: "Strong sunlight or LED grow light required (after 2–3 days shade acclimation)",
      ppfd_dli: "PPFD 250–400 μmol·m⁻²·s⁻¹ | DLI 15–20 | 14–16 h/day",
      container_and_soil: "20 cm deep terracotta pot; 2:1 high-drainage gritty mix (mound soil slightly high at root collar)",
      expected_harvest_window: "Harvest upper green leaves once ≥30 cm tall; prune brown woody stems at base in year 2",
      hero_caption: "Suggested media: Best Home Vegetable Book p. 100 sage mounded-crown planting & pruning brown woody stems",
      myth_vs_reality: {
        common_myth: "Plant sage in a sunken soil depression to hold water, and never cut back old woody branches.",
        botanical_truth: "The 'Best Home Vegetable Gardening Book' (p. 100) highlights two critical rules for sage: ① When potting, mound the soil slightly higher around the root crown to shed water away from the stem base; ② Thin out foliage for airflow and cut brown woody old branches at the base to reduce plant burden and stimulate fresh second-year shoots."
      },
      steps: [
        {
          title: "Pot Healthy Starter with a Slightly Mounded Root Crown",
          action: "In spring or autumn, select a large-leaved healthy sage starter, unpot carefully without snapping the stem, and plant in fast-draining soil with the soil mounded slightly higher around the root base to promote drainage. Firm gently (Best Home Vegetable Book p. 100, Steps 1–5).",
          verification_checkpoint: "Root collar sits on a slight mound so water sheds outward toward the pot rim.",
          failure_signal: "Planting in a sunken pit where water pools against the stem collar."
        },
        {
          title: "Acclimate 2–3 Days in Shade, Then Move to Full Sun / Grow Light",
          action: "Water thoroughly after potting, rest in a shaded spot for 2–3 days, then move to full sun or a strong grow light as soon as new growth begins (Steps 6–7). Let soil dry between waterings.",
          verification_checkpoint: "Pebbled gray-green velvety leaves stand firm and turgid.",
          failure_signal: "Keeping soil soggy or misting fuzzy leaves."
        },
        {
          title: "Harvest Upper Tender Leaves at 30+ cm & Cut Out Brown Woody Stems",
          action: "Once ≥30 cm tall, pick tender green leaves from the upper half by hand to improve inner canopy airflow (Steps 8–10). Cut old brown woody stems at the base to rejuvenate the plant, then top-dress fertilizer around the root zone (Steps 11–12).",
          verification_checkpoint: "Open, well-ventilated center canopy and vigorous new basal shoots.",
          failure_signal: "Overcrowded woody interior rotting in humid stagnant air."
        }
      ],
      pitfalls: [
        {
          symptom: "Velvety gray-green leaves turn black and mushy",
          root_cause: "Water trapped on fuzzy leaves or poor crown drainage.",
          fix: "Water only the soil surface along the rim, never spray foliage, and prune dense inner branches for airflow."
        }
      ]
    },
    lemongrass: {
      verdict_label: "True Supermarket Scrap Champion: Stalks with Intact Basal Root Plate Root Easily into Full Clumps",
      starting_method_label: "Root grocery stalks with intact basal plate in 2–3 cm water → pot in deep container",
      water_only_limit: "14–21 days (transfer to deep rich soil once roots reach 3–5 cm so stalks thicken and tiller)",
      light_label: "Loves full sun / strong grow light & warmth (≥18–22°C)",
      ppfd_dli: "PPFD 250–400 μmol·m⁻²·s⁻¹ | DLI 14–20 | 12–14 h/day",
      container_and_soil: "25–30 cm deep & wide heavy pot; fertile, moisture-retentive yet well-draining potting mix",
      expected_harvest_window: "Roots in 7–14 days in water; pot at 2–3 wks; harvest outer tillers in 2–3 months",
      hero_caption: "Suggested media: Grocery lemongrass stalk with intact basal root disk rooting in shallow water",
      myth_vs_reality: {
        common_myth: "Any chopped lemongrass tube will root; or you can grow thick lemongrass stalks indefinitely in a water jar.",
        botanical_truth: "① University extensions (UIUC / Naples Botanical Garden) confirm lemongrass is one of the very few scraps that truly regenerates the exact culinary part you bought—provided the flat basal root plate at the bottom wasn't sliced off; ② However, after rooting in water, it must be planted in a large deep soil pot under strong light to tiller into thick stalks."
      },
      steps: [
        {
          title: "Pick Fresh Stalks Retaining the Flat Basal Root Disk",
          action: "Select firm grocery lemongrass stalks that still have the pale, slightly bulbous basal root plate intact at the bottom. Trim off dry upper leaf tips to a 10–15 cm stalk and peel away loose, dry outer brown sheaths.",
          verification_checkpoint: "Solid basal disk at the very bottom with tiny root primordia bumps.",
          failure_signal: "Bottom was sliced too high (only hollow concentric leaf sheaths remain with no solid basal plate)."
        },
        {
          title: "Stand in 2–3 cm Warm Water in a Sunny Window (Change Every 2 Days)",
          action: "Place upright in a jar with 2–3 cm clean water covering only the basal plate on a warm (20–28°C) sunny windowsill, changing water every 2 days (Naples Botanical Garden).",
          verification_checkpoint: "Stubby white roots emerge from the base in 7–14 days and green blades push from the center.",
          failure_signal: "Deep water submerging half the stalk without water changes, causing slimy sheath rot."
        },
        {
          title: "Transplant into a 25–30 cm Deep Pot for Heavy Tillering",
          action: "Once roots reach 3–5 cm (1–2 in), plant 3–4 cm deep into a large 25–30 cm container of rich potting soil under strong sun/grow light. Keep soil moist and feed monthly with nitrogen-rich organic fertilizer.",
          verification_checkpoint: "New side shoots (tillers) emerge from the base within a month; twist and pull outer thick stalks to harvest.",
          failure_signal: "Tiny pot restricting tillers or cold winter window (<10°C)."
        }
      ],
      pitfalls: [
        {
          symptom: "Stalks sit in water for 2 weeks turning slimy with zero roots",
          root_cause: "Basal root plate was trimmed off at the store or water is too cold (<16°C).",
          fix: "Start with fresh stalks showing an intact solid basal disk and keep at 22–28°C."
        }
      ]
    },
    "carrot-tops-and-cabbage": {
      verdict_label: "Myth Buster: Carrot Tops Never Regrow a New Carrot! Good Only for Pesto Greens or Kids' Science",
      starting_method_label: "10-day kids' botany experiment or snipping 1 flush of carrot-top greens for pesto (sow seeds for real crops)",
      water_only_limit: "7–14 days (exhausts residual sugar to push feathery greens, then senesces)",
      light_label: "Bright windowsill OK (low light demand as a short-term tabletop display)",
      expected_harvest_window: "7–14 days for feathery carrot greens (never forms a new orange taproot or tight cabbage head)",
      hero_caption: "Suggested media: Carrot top in shallow saucer sprouting feathery greens (labeled: no new root forms below)",
      myth_vs_reality: {
        common_myth: "Put a cut carrot top in water to regrow a whole new orange carrot; put a cabbage stump in water to regrow a tight supermarket cabbage head.",
        botanical_truth: "University of Illinois Extension and UC Master Gardeners explicitly debunk this: ① A carrot is the taproot itself—once cut, the top crown can only push feathery green leaves upward and will NEVER regenerate a new orange carrot root underneath (though the edible greens make great pesto and a fun kids' project); ② A cabbage core has depleted reserves and produces only a loose rosette of small leaves before bolting."
      },
      steps: [
        {
          title: "Set Realistic Expectations: Tabletop Botany Project + 1 Pesto Garnish",
          action: "Cut a 2–2.5 cm carrot top (or intact cabbage core) and set flat in a shallow saucer with only 0.5–1 cm water (covering halfway up the cut block, keeping the upper crown dry in air).",
          verification_checkpoint: "Firm cut surface with central growth point exposed above water.",
          failure_signal: "Expecting a new carrot root to grow downward or flooding the crown underwater."
        },
        {
          title: "Change Water Daily & Watch Feathery Fronds Unfurl",
          action: "Keep on a bright windowsill and replace saucer water daily (Balcony Hydroponics Guide PDF pp. 10–11 recommends fast-sprouting roots for children's botany education). Fern-like green fronds sprout in 3–5 days.",
          verification_checkpoint: "Lush miniature green canopy forms within 7–10 days with clear, odor-free water.",
          failure_signal: "Orange flesh turns soft and milky-white bacteria cloud the dish—discard immediately."
        },
        {
          title: "Day 10–14: Snip Greens for Pesto / Chimichurri & Compost the Stump",
          action: "Before the carrot block shrivels or rots (day 10–14), snip the fresh green fronds to blend with garlic, nuts, and olive oil into carrot-top pesto or chimichurri (CBC Culinary Guide), then compost the base.",
          verification_checkpoint: "Clean, fragrant carrot greens harvested before mold or fungus gnats appear.",
          failure_signal: "Leaving the decaying stump in water for a month until moldy."
        }
      ],
      pitfalls: [
        {
          symptom: "Carrot saucer water turns milky and foul-smelling within 3 days",
          root_cause: "High sugar content in carrot tissue fuels rapid bacterial growth in warm standing water.",
          fix: "Keep carrot slice to 2 cm thick, use only 0.5 cm water depth, and rinse the dish with fresh water daily."
        }
      ]
    },
    watercress: {
      verdict_label: "Semi-Aquatic Scrap King: Grocery Stems Root in Days & Thrive in Sub-Irrigated Trays",
      starting_method_label: "Root grocery watercress stems in water glass → plant in sand+humus box sitting in water tray",
      water_only_limit: "3–7 days to root in a glass; then transfer to sand+humus planter resting in a nutrient-water tray",
      light_label: "Bright indirect light or cool window (15–20°C ideal; avoid hot summer sun)",
      ppfd_dli: "PPFD 150–250 μmol·m⁻²·s⁻¹ | DLI 10–14 | 12–14 h/day",
      container_and_soil: "Shallow window box filled with river sand + humus, sitting inside a 2–3 cm water/liquid-fertilizer bottom tray",
      expected_harvest_window: "White roots in 3–5 days in water; pinch tender top shoots 2–3 weeks after potting",
      hero_caption: "Suggested media: Baike p. 279 grocery watercress rooting in glass & sub-irrigated window box",
      myth_vs_reality: {
        common_myth: "Every indoor plant rots if you leave water in the bottom saucer—let watercress dry out between waterings too.",
        botanical_truth: "Watercress is the exact opposite! It is a semi-aquatic marsh plant—Baike (pp. 278–279) explicitly teaches: ① Stick market-bought edible watercress sprigs in a glass of water and they root rapidly into prime starter plants; ② Indoors, set a shallow planter of river sand and humus INSIDE a water-filled bottom tray (regularly dosed with liquid fertilizer) for constant sub-irrigation—drying out turns stems harsh and pungent!"
      },
      steps: [
        {
          title: "Root Fresh Market Watercress Stems in a Glass of Water",
          action: "Pick crisp, bright-green 10–15 cm stems from a grocery watercress bunch, strip lower submerged leaves, and stand in a glass of clean cool water on a bright windowsill, changing water daily (Baike p. 279).",
          verification_checkpoint: "Fine white adventitious roots sprout from underwater nodes within 3–5 days.",
          failure_signal: "Using yellowing slimy stems or warm stagnant water."
        },
        {
          title: "Transplant into a River-Sand + Humus Box Sitting in a Water Tray",
          action: "Fill a shallow drainage planter with river sand + humus/compost mix, plant rooted cuttings at 9×9 cm spacing, and set the planter inside a deeper waterproof tray holding 2–3 cm of clean water for continuous bottom wicking (Baike p. 279).",
          verification_checkpoint: "Substrate stays cool and evenly saturated while stems branch across the surface.",
          failure_signal: "Letting the soil dry out like a terrestrial herb."
        },
        {
          title: "Add Diluted Liquid Fertilizer to the Tray & Pinch Tender Top Shoots",
          action: "Add diluted hydroponic/liquid fertilizer to the bottom water tray every 7–10 days. Pinch off the tender top 10–12 cm shoots for salads or soups, and pinch off any flower buds early.",
          verification_checkpoint: "Glossy dark-green leaves with crisp, peppery flavor regenerating after each pinch.",
          failure_signal: "Stagnant foul tray water or summer heat (>25°C) triggering flowering."
        }
      ],
      pitfalls: [
        {
          symptom: "Leaves turn pale yellow and stems become thin and hot-tasting",
          root_cause: "Nitrogen depletion in plain water or excessive heat (>25°C).",
          fix: "Dose the bottom sub-irrigation tray with diluted liquid fertilizer and keep in a cool, airy spot (Baike p. 278)."
        }
      ]
    },
    "sweet-potato-greens": {
      verdict_label: "Foolproof Summer Leaf Factory: 1 Tuber Sprouts Endless Vines & Vine Cuttings Root 100%",
      starting_method_label: "Sprout whole tuber in shallow wet soil/half-water → cut 25 cm slips & plant at 45° angle for greens",
      water_only_limit: "Whole tuber in water yields 1–2 cuts; potting vine cuttings in nitrogen-rich soil yields heavy harvests",
      light_label: "Loves heat & bright sun (thrives at 20–30°C; also grows as a bright windowsill trailing plant)",
      ppfd_dli: "PPFD 200–350 μmol·m⁻²·s⁻¹ | DLI 12–18 | 12–14 h/day",
      container_and_soil: "20 cm deep pot; feed nitrogen generously when grown specifically for edible greens",
      expected_harvest_window: "Tuber sprouts in 10–15 days; rooted vine slips yield tender shoot tips every 2 weeks",
      hero_caption: "Suggested media: Baike p. 395 selecting short-internode 7–8 leaf slips & angled shallow planting",
      myth_vs_reality: {
        common_myth: "You can heavy-feed nitrogen in a small balcony pot and harvest both giant sweet potato tubers and endless leaves.",
        botanical_truth: "Baike (pp. 394–395) notes that excess nitrogen causes rampant vine/leaf growth ('vine-crazy') at the expense of root tubers. Indoors, you can flip this trait to your advantage: grow sweet potato slips in a 20 cm pot with generous nitrogen specifically to harvest tender, pest-free 'sweet potato greens' all summer!"
      },
      steps: [
        {
          title: "Sprout an Unblemished Sweet Potato in Warmth (20–30°C)",
          action: "Lay a firm, unrotted sweet potato half-buried horizontally in damp sand/potting mix (or suspend the bottom 1/3 in a glass of water with toothpicks) in a warm 20–30°C bright spot.",
          verification_checkpoint: "Vigorous purple-green sprouts emerge from the tuber eyes within 7–15 days.",
          failure_signal: "Chilly temps (<15°C) or submerging >2/3 of the tuber underwater causing core rot."
        },
        {
          title: "Cut 20–25 cm Sturdy Slips (7–8 Leaves) & Plant at a Shallow Angle",
          action: "Once vine shoots reach 20–25 cm with 7–8 leaves and compact internodes (or using fresh market sweet-potato vine stems), strip the bottom 2–3 nodes and bury horizontally/diagonally 3–5 cm deep in porous soil (Baike p. 395). Water thoroughly.",
          verification_checkpoint: "Buried nodes root within 3–5 days and shoot tips lift upward.",
          failure_signal: "Using weak spindly slips or plunging stems vertically to the wet bottom of a deep pot."
        },
        {
          title: "Feed Nitrogen Biweekly & Pinch 10–15 cm Tender Vine Tips",
          action: "For leafy greens production, feed every 2 weeks with balanced or nitrogen-rich organic fertilizer and keep soil moist. Pinch the tender top 10–15 cm vine tips and young leaves for stir-frying; basal nodes will branch repeatedly.",
          verification_checkpoint: "Plump, tender heart-shaped leaves regenerating every 10–14 days.",
          failure_signal: "Expecting large underground tubers while over-applying nitrogen fertilizer."
        }
      ],
      pitfalls: [
        {
          symptom: "Sweet potato sits in water jar for 2 weeks and turns soft and sour",
          root_cause: "Water is too cold (<15°C in winter) or too much of the tuber is submerged.",
          fix: "Submerge only the bottom 1/3 (or bed in damp coco coir) and keep at 22–28°C."
        }
      ]
    },
    chamomile: {
      verdict_label: "Tea & Companion Pest-Deterrent Star: Start from Sturdy Transplants or Surface-Sown Seed",
      starting_method_label: "Plant sturdy autumn/spring starter (20 cm spacing) or surface-sow photoblastic seeds",
      water_only_limit: "Not applicable (cut flowering stems in water last only a few days as cut flowers)",
      light_label: "Sunny, well-ventilated spot (15–20°C ideal; dislikes stagnant heat)",
      ppfd_dli: "PPFD 200–350 μmol·m⁻²·s⁻¹ | DLI 12–16 | 12–14 h/day",
      container_and_soil: "15–20 cm pot; 40% Akadama + 40% compost + 10% leaf mold + 10% rice hulls (+ 6g/L lime)",
      expected_harvest_window: "Blooms spring–summer; pick flower heads immediately as petals open flat to slightly reflexed",
      hero_caption: "Suggested media: Fujita p. 101 picking chamomile flowers from flat-open to raised-cone stage",
      myth_vs_reality: {
        common_myth: "Leave blooming chamomile flowers on the plant as long as possible and harvest them all at the end.",
        botanical_truth: "Fujita (pp. 100–101) warns that delaying flower harvest shortens the entire blooming season! Pick flowers immediately and frequently—from when white petals open flat until the yellow center cone swells and petals reflex slightly—and feed monthly to trigger wave after wave of new buds."
      },
      steps: [
        {
          title: "Plant Sturdy Starters 20 cm Apart in Well-Draining Mix",
          action: "Select stocky, bright-green chamomile starters and transplant at 20 cm spacing into Fujita mix (40% Akadama + 40% compost + 10% leaf mold + 10% rice hulls), pressing soil firmly around the base (Fujita p. 101).",
          verification_checkpoint: "Plants stand firm in a sunny, airy 15–20°C window or under grow lights.",
          failure_signal: "Waterlogged soil or dark corners."
        },
        {
          title: "Water When Topsoil Dries, Top-Dress Monthly & Prune Long Weak Stems",
          action: "Water thoroughly when topsoil dries; top-dress with organic fertilizer and hill lightly once a month. Prune overly long, crowded stems at the base to lighten plant load and boost airflow against aphids (Fujita p. 101).",
          verification_checkpoint: "Feathery foliage stays clean and aphid-free with abundant flower buds.",
          failure_signal: "Dense stagnant canopy attracting aphid colonies on flower stems."
        },
        {
          title: "Harvest Flowers Frequently at Peak Apple-Scent Stage & Air-Dry",
          action: "Snip flower heads continuously as soon as petals open flat through the stage where the yellow center cone domes upward. Brew fresh as herbal tea or dry in a shaded airy spot and seal in jars.",
          verification_checkpoint: "Frequent deadheading stimulates continuous new flower buds.",
          failure_signal: "Letting flowers wither and set seed on the plant, which halts new blooming."
        }
      ],
      pitfalls: [
        {
          symptom: "Aphids clustering tightly along chamomile flower necks",
          root_cause: "Sweet sap and poor indoor airflow attract aphids (Fujita p. 100).",
          fix: "Thin crowded basal branches for airflow and rinse or apply natural soap/milk sprays before flowering."
        }
      ]
    },
    lavender: {
      verdict_label: "High-Difficulty Woody Herb (4★): Seeds Take 2 Years; Use Starters or 7–8 cm Tip Cuttings",
      starting_method_label: "Repot nursery plant in gritty terracotta / Root 7–8 cm non-flowering tips in Akadama+vermiculite",
      water_only_limit: "Do not soak in plain water (woody aerobic roots rot; root cuttings in Akadama + vermiculite)",
      light_label: "Full sun / strong LED grow light + cool, dry airflow (hates high heat & humidity)",
      ppfd_dli: "PPFD 300–450 μmol·m⁻²·s⁻¹ | DLI 16–22+ | 14–16 h/day",
      container_and_soil: "Unglazed terracotta or window box (30 cm spacing); fast-draining slightly alkaline gritty mix (+ dash of lime)",
      expected_harvest_window: "Blooms spring–summer from cuttings/starters; takes 2 full years if started from seed",
      hero_caption: "Suggested media: Baike p. 433 7–8 cm lavender tip cuttings in Akadama+vermiculite & pre-summer thinning",
      myth_vs_reality: {
        common_myth: "Sow a packet of lavender seeds for quick indoor blooms, and mist/water heavily in summer heat.",
        botanical_truth: "Baike (pp. 432–433) emphasizes two facts: ① Growing lavender from seed to harvest takes 2 full years—start from nursery plants or 7–8 cm non-flowering tip cuttings in Akadama+vermiculite instead; ② Lavender is cold-hardy but dies rapidly in hot, humid weather—you MUST prune and thin branches before humid summer weather to prevent canopy suffocation and root rot."
      },
      steps: [
        {
          title: "Root 7–8 cm Non-Flowering Shoot Tips in Akadama + Vermiculite (or Buy Starter)",
          action: "Snip 7–8 cm vigorous non-flowering shoot tips, strip the lower 4–5 leaves, stand in water for 1 hour, then insert into fertilizer-free Akadama + vermiculite in shaded bright light until rooted (transplant at 10 cm tall, Baike p. 433).",
          verification_checkpoint: "Gray-green tips stay upright and root within 3–6 weeks.",
          failure_signal: "Using flowering stems or rich wet potting dirt for cuttings."
        },
        {
          title: "Pot in Gritty Slightly Alkaline Mix & Enforce Dry-Down Watering",
          action: "Plant in an unglazed terracotta pot or planter box (30 cm spacing) with 35%+ coarse grit and a pinch of dolomitic lime. Place under strong full-spectrum light and water only after soil dries.",
          verification_checkpoint: "Water drains instantly; silvery foliage smells intensely aromatic.",
          failure_signal: "Soggy soil or bottom gravel trapping water."
        },
        {
          title: "Prune Before Humid Summer & Harvest Spikes with 1–2 Leaves Below",
          action: "Before hot, humid summer weather arrives, trim and thin branches to keep the interior airy (Baike p. 432). When harvesting blooms, cut flower spikes together with 1–2 leaves below the spike so lower nodes push fresh shoots.",
          verification_checkpoint: "Breezy, dry inner crown with zero black rot during summer.",
          failure_signal: "Unpruned dense bush rotting from the inside out in summer humidity."
        }
      ],
      pitfalls: [
        {
          symptom: "Lower half of lavender turns black and dies suddenly in summer or heated rooms",
          root_cause: "High heat + humidity trapped inside an unpruned canopy combined with wet roots (Baike p. 432).",
          fix: "Thin inner branches by 1/3 before summer, run an oscillating fan, and keep soil on the dry side."
        }
      ]
    },
    tarragon: {
      verdict_label: "#1 Western Herb Trap: True French Tarragon Sets Zero Viable Seed! Must Buy Plant or Root Cuttings",
      starting_method_label: "Buy true French tarragon starter (divide every 1–2 yrs) or root 12–13 cm spring basal shoots",
      water_only_limit: "Rooting phase only; transfer to fast-draining porous soil immediately",
      light_label: "Sunny & breezy, but needs light shade against scorching midsummer sun",
      ppfd_dli: "PPFD 200–350 μmol·m⁻²·s⁻¹ | DLI 12–16 | 12–14 h/day",
      container_and_soil: "20 cm deep ceramic pot or sunny window box; fast-draining fertile potting mix",
      expected_harvest_window: "Snip tender shoot tips in spring/summer; divide crowded roots every 1–2 years",
      hero_caption: "Suggested media: Baike p. 443 rooting 12–13 cm French tarragon spring shoots & 1–2 yr root division",
      myth_vs_reality: {
        common_myth: "Buy a packet of 'tarragon seeds' online to grow sweet, anise-scented French tarragon for Béarnaise sauce.",
        botanical_truth: "Baike (pp. 442–443) exposes this classic trap: ① True culinary French tarragon (smooth bright-green leaves, rich sweet-anise aroma) is sterile and NEVER produces viable seeds! ② Nearly 100% of 'tarragon seeds' sold are Russian tarragon (hairy leaves, vigorous 1.5m weed-like growth, and zero culinary aroma). You MUST propagate French tarragon from 12–13 cm spring shoot cuttings or root division."
      },
      steps: [
        {
          title: "Verify Smooth-Leaved French Tarragon: Root 12–13 cm Spring Shoots or Divide",
          action: "Never buy tarragon seeds! In spring, snip 12–13 cm newly emerged basal shoots from a true French tarragon mother plant, strip lower leaves, and root in a sterile propagation box (or divide a 2-year-old root crown, Baike p. 443).",
          verification_checkpoint: "Leaves are smooth, glossy green without hairs, and smell strongly of sweet anise when crushed.",
          failure_signal: "Fuzzy, scentless leaves from seed-grown Russian tarragon."
        },
        {
          title: "Pot in Fast-Draining Soil & Shade Against Harsh Midsummer Sun",
          action: "Plant in a well-draining ceramic pot or window box (40 cm spacing) on a bright window. Because French tarragon dislikes scorching heat, provide shade cloth or filtered light during hot summer afternoons (Baike p. 443).",
          verification_checkpoint: "Vigorous spring/autumn shoots without summer leaf scorch.",
          failure_signal: "Full afternoon summer sun baking wet roots."
        },
        {
          title: "Snip Tender Shoot Tips & Divide Roots Every 1–2 Years",
          action: "Snip tender young shoot tips for chicken, fish, eggs, or tarragon vinegar. Because perennial rhizomes crowd rapidly in pots and lose vigor, dig up and divide the root clump every 1–2 years (cut back dead top stems in early spring and top-dress, Baike p. 443).",
          verification_checkpoint: "Rejuvenated clumps push thick aromatic shoots every spring.",
          failure_signal: "Leaving roots pot-bound for 3+ years until the center dies out."
        }
      ],
      pitfalls: [
        {
          symptom: "Tarragon grows 1.5 meters tall and vigorous but has zero aroma or flavor",
          root_cause: "Grown from seed, which is always Russian tarragon (Baike p. 442).",
          fix: "Replace with a vegetatively propagated true French tarragon (Artemisia dracunculus var. sativa) starter plant."
        }
      ]
    },
    fennel: {
      verdict_label: "Deep Taproot Hates Late Transplanting: Direct-Sow in Deep Pot (Distinguish Herb vs. Bulb Fennel)",
      starting_method_label: "Direct-sow 4–5 seeds/spot in a ≥25 cm deep pot (or transplant plug before 15 cm tall)",
      water_only_limit: "Grocery fennel bulb base in shallow water pushes a small frond garnish, never a new bulb",
      light_label: "Full sun / strong grow light & well-drained soil (drought-tolerant, hates soggy roots)",
      ppfd_dli: "PPFD 220–350 μmol·m⁻²·s⁻¹ | DLI 12–18 | 12–14 h/day",
      container_and_soil: "≥25 cm deep pot (for deep taproot); fertile, fast-draining potting mix",
      expected_harvest_window: "Snip feathery leaves once ≥15–20 cm tall; harvest Florence fennel bulbs at 6–7 cm diameter",
      hero_caption: "Suggested media: Baike p. 435 sweet herb fennel leaf harvest vs. Florence bulb fennel hilling",
      myth_vs_reality: {
        common_myth: "Sweet herb fennel and Florence bulb fennel are identical; and you can transplant large fennel plants anytime.",
        botanical_truth: "Baike (pp. 434–435) clarifies two rules: ① Sweet fennel (perennial, grown for feathery leaves and seeds, propagated by seed or division) differs from Florence bulb fennel (annual grown for its swollen 6–7 cm basal bulb, propagated strictly by seed); ② Both have deep taproots that resent disturbance—if started in plugs, transplant gently BEFORE plants reach 15 cm tall."
      },
      steps: [
        {
          title: "Direct-Sow in a ≥25 cm Deep Pot (or Transplant Plugs Before 15 cm Tall)",
          action: "Sow 4–5 seeds per spot in a ≥25 cm deep pot with thin soil cover. If using 9 cm nursery cups, thin to 1 strong seedling at 1–2 true leaves and transplant intact before 15 cm height without disturbing the taproot (Baike p. 435).",
          verification_checkpoint: "Feathery bronze or green fronds expand upright with zero transplant wilt.",
          failure_signal: "Shallow pots (<15 cm) or bare-root transplanting tall seedlings."
        },
        {
          title: "Full Sun + Staged Top-Dressing (Hill Soil Over Florence Fennel Bulbs)",
          action: "Grow in bright sun/grow light. Top-dress fertilizer at 20 cm height. For Florence bulb fennel, apply a second top-dressing as the base begins to swell, remove lower outer leaves, and mound soil over the swelling bulb to blanch it tender (Baike p. 435).",
          verification_checkpoint: "Aromatic feathery foliage on sweet fennel; plump white basal bulb on Florence fennel.",
          failure_signal: "Waterlogged soil rotting the taproot."
        },
        {
          title: "Snip Soft Fronds for Dumplings/Fish (or Cut 6–7 cm Bulbs at Base)",
          action: "For sweet herb fennel, snip soft outer feathery leaves anytime during growth. For Florence fennel, cut the swollen basal bulb once it reaches 6–7 cm (2.5–3 in) in diameter.",
          verification_checkpoint: "Sweet anise-scented fronds regenerating after leaf cuts.",
          failure_signal: "High summer heat triggering premature flowering before bulb swell."
        }
      ],
      pitfalls: [
        {
          symptom: "Fennel stalls or bolts immediately after repotting",
          root_cause: "Deep taproot was snapped or disturbed during late transplanting (Baike p. 434).",
          fix: "Direct-sow seeds straight into a ≥25 cm deep container and thin in place."
        }
      ]
    },
    "garland-chrysanthemum": {
      verdict_label: "Pest-Free Indoor Fast Green: Photoblastic Seeds Need Paper-Thin Cover; Hand-Pinch for Multiple Flushes",
      starting_method_label: "Direct-sow in rows with paper-thin soil cover so seeds barely peek through to light",
      water_only_limit: "Not a water-scrap crop (seeds sprout in ~7 days and yield thinnings in 30–40 days)",
      light_label: "Bright airy window or grow light (15–20°C optimal; best in autumn–spring)",
      ppfd_dli: "PPFD 150–280 μmol·m⁻²·s⁻¹ | DLI 10–15 | 12–14 h/day",
      container_and_soil: "15–20 cm standard planter; 40% Akadama + 40% compost + 10% leaf mold + 10% rice hulls (+ 6g/L lime)",
      expected_harvest_window: "Sprouts in ~7 days; eat thinnings at 8–10 cm; hand-snap top shoots at 20 cm for repeat harvests",
      hero_caption: "Suggested media: Fujita p. 41 light-visible shallow seeding & hand-snapping 20 cm shoots for repeat flushes",
      myth_vs_reality: {
        common_myth: "Bury garland chrysanthemum (shungiku) seeds deep in soil, and pull the whole plant up by the roots when harvesting.",
        botanical_truth: "Fujita (pp. 40–41) highlights two secrets: ① Garland chrysanthemum seeds are photoblastic (require light to stimulate germination)—cover with only a paper-thin dusting of soil so the seeds remain barely visible! ② At 20 cm tall, gently SNAP the tender upper shoot off by hand instead of pulling roots—combined with top-dressing, the lower nodes will keep branching out for repeated hot-pot harvests."
      },
      steps: [
        {
          title: "Sow in Shallow Furrows with Seeds Barely Visible to Light",
          action: "Scratch two shallow furrows 10–15 cm apart, space seeds 1 cm apart, and dust with a paper-thin layer of soil so seeds are still faintly visible to sunlight (Fujita p. 41). Water thoroughly and keep at 15–20°C.",
          verification_checkpoint: "Uniform germination within ~7 days.",
          failure_signal: "Burying seeds >1.5 cm deep in dark soil."
        },
        {
          title: "Three-Stage Thinning & Edible Baby-Green Harvest (3 cm → 6 cm → 15–20 cm)",
          action: "Thin to 3 cm apart at 1–2 true leaves; thin to 6 cm apart at 3–4 true leaves with organic top-dressing and hilling; at 8–10 cm tall, thin to a final 15–20 cm spacing (eat the pulled 10 cm plants!) and top-dress again (Fujita p. 41).",
          verification_checkpoint: "Stocky, fragrant serrated leaves with generous airflow between plants.",
          failure_signal: "Overcrowded unthinned rows developing downy mildew."
        },
        {
          title: "Hand-Snap Tender Top Shoots at 20 cm for Multi-Flush Regrowth",
          action: "When stems reach ~20 cm tall, leave several lower leaves intact and gently snap off the tender upper shoot by hand (Fujita p. 41). Water and feed lightly after each harvest so lateral shoots sprout repeatedly.",
          verification_checkpoint: "Clean snap wound pushes 2–3 tender side shoots within 7–10 days.",
          failure_signal: "Letting soil dry bone-dry, turning stems fibrous."
        }
      ],
      pitfalls: [
        {
          symptom: "Winding white squiggly trails inside leaves",
          root_cause: "Leafminer larvae tunneling inside leaf tissue (Fujita p. 40).",
          fix: "Pinch off and discard mined leaves immediately, maintain 15 cm spacing for airflow, or cover with insect mesh."
        }
      ]
    },
    "cherry-radish": {
      verdict_label: "Only Root Crop That Truly Forms Crisp Underground Bulbs in 25–30 Days Indoors (Real Carrot-Top Alternative)",
      starting_method_label: "Direct-sow in 1 cm furrows in a 15 cm planter (sprouts in 3–5 days, harvest whole in 25–30 days)",
      water_only_limit: "Not applicable (root bulbing requires loose soil & hilling; water-only makes radish sprouts)",
      light_label: "Sunny window or grow light required (15–20°C ideal; low light grows leaves with zero root bulb)",
      ppfd_dli: "PPFD 200–350 μmol·m⁻²·s⁻¹ | DLI 12–16 | 12–14 h/day",
      container_and_soil: "15 cm deep standard or window box planter; loose mix (40% Akadama + 40% compost + 10% leaf mold + 10% rice hulls)",
      expected_harvest_window: "25–30 days from seed; pull immediately once red root shoulders reach 2–3 cm diameter",
      hero_caption: "Suggested media: Fujita pp. 75–76 thinning to 3–4 cm, hilling soil around hypocotyl & pulling at 2–3 cm diameter",
      myth_vs_reality: {
        common_myth: "Root vegetables take 3–4 months in deep containers; or leaving cherry radishes in the soil longer makes them better.",
        botanical_truth: "① While carrot tops in water never grow a new carrot, cherry radishes ('20-day radishes') form crisp, juicy round roots (plus edible greens!) in a standard 15 cm pot in just 25–30 days; ② Both Fujita (p. 76) and Baike (p. 380) warn: you MUST thin to 3–4 cm before 2 true leaves and hill soil around the root neck (or roots won't round out), and pull IMMEDIATELY at 2–3 cm diameter or the interior turns hollow and pithy!"
      },
      steps: [
        {
          title: "Sow 1–2 cm Apart in 1 cm Deep Furrows",
          action: "Make 1 cm deep furrows spaced 10–15 cm apart in a 15 cm deep planter, drop seeds 1–2 cm apart, cover with 5–10 mm soil, press lightly with your palm, and water thoroughly (Fujita p. 75 / Baike p. 381).",
          verification_checkpoint: "Heart-shaped cotyledons emerge uniformly in 3–5 days.",
          failure_signal: "Compacted clay soil or overwatering seedlings after emergence."
        },
        {
          title: "Thin to 3–4 cm Spacing by 1–2 True Leaves & Hill Soil Around Stems",
          action: "Before 1–2 true leaves expand, thin seedlings to 3–4 cm apart (eat the thinned sprouts!) and push soil from both sides up against the root necks to prevent flopping. At 3–4 true leaves, top-dress fertilizer and hill soil again (Fujita p. 76).",
          verification_checkpoint: "Red hypocotyl necks stay supported upright and begin swelling into spheres.",
          failure_signal: "Skipping thinning (<1.5 cm spacing) or letting soil dry out, which prevents round bulb formation."
        },
        {
          title: "Pull Immediately When Visible Root Shoulders Reach 2–3 cm Diameter",
          action: "Around day 25–30, as soon as the red root shoulder pushing above the soil line reaches 2–3 cm across, grip the base and pull. Sow small staggered batches every 1–2 weeks for continuous harvest (Baike p. 380).",
          verification_checkpoint: "Round, crisp, snow-white interior with zero hollow pithiness.",
          failure_signal: "Leaving roots past day 35–40 until hollow, spongy, or cracked."
        }
      ],
      pitfalls: [
        {
          symptom: "Lush green radish leaves on top, but the underground red root stays pencil-thin",
          root_cause: "Insufficient thinning (crowded plants), low indoor light, or dry soil (Fujita p. 76).",
          fix: "Thin strictly to 3–4 cm by the 2-true-leaf stage, hill soil around the neck, keep soil evenly moist, and provide strong light."
        }
      ]
    }
  },
  book_titles: {
    "最新有机家庭盆栽种菜法": "Organic Container Vegetable Gardening (Tomohiro Fujita)",
    "蔬菜栽培百科全书（已拆分第02章）": "Encyclopedia of Vegetable Cultivation (Ch. 02 Leafy Greens)",
    "蔬菜栽培百科全书（已拆分第03章）": "Encyclopedia of Vegetable Cultivation (Ch. 03 Leafy Greens)",
    "蔬菜栽培百科全书（已拆分第04章）": "Encyclopedia of Vegetable Cultivation (Ch. 04 Root & Herb Crops)",
    "最好的家庭种菜书_日 靓丽出版社.pdf": "The Best Home Vegetable Gardening Book (Liangli Press)",
    "阳台菜园：栽培可口蔬菜的 70 个诀窍.pdf": "Balcony Kitchen Garden: 70 Tips for Delicious Vegetables",
    "阳台种菜、种花技术全攻略": "Complete Guide to Balcony Soilless Vegetable & Flower Gardening",
    "香草生活，恋上有香气的日常.pdf": "Herb Life: Falling in Love with Fragrant Daily Living",
    "家庭种菜最健康_赵玲.pdf": "Home Vegetable Gardening for Health (Zhao Ling)",
    "[薰衣草百科圣经].(Lavender: The Genus Lavandula).pdf": "Lavender: The Genus Lavandula (Maria Lis-Balchin)"
  },
  authors: {
    "藤田智": "Tomohiro Fujita",
    "板木利隆 / 机械工业出版社": "Toshitaka Itagi / China Machine Press",
    "中国无土栽培技术论坛": "China Soilless Cultivation Forum",
    "靓丽出版社（已人工核对实页）": "Liangli Press (Page-verified on disk)",
    "本地图书（已人工核对实页）": "Local PDF Book (Page-verified on disk)",
    "赵玲（已人工核对实页）": "Zhao Ling (Page-verified on disk)",
    "Maria Lis-Balchin（本地文字版图书）": "Maria Lis-Balchin (Local Text PDF)",
    "NotebookLM Deep Research 综合笔记": "NotebookLM Deep Research Synthesis Note"
  },
  source_notes: {
    src_watercress_baike_278: "Q&A explicitly teaches rooting market-bought watercress stems in a glass of water, then planting in a shallow river-sand + humus planter sitting inside a liquid-fertilizer water tray for bottom wicking (Book pp. 278–279 / PDF pp. 43–44).",
    src_sweetpotato_baike_394: "Thrives in 20–30°C heat and strong sun; select stocky 7–8 leaf slips with short internodes for angled shallow planting; excess nitrogen drives heavy leaf/vine growth over root tubers (Book pp. 394–395 / PDF pp. 29–30).",
    src_cham_fujita_100: "Asteraceae (annual German & perennial Roman types), optimal 15–20°C in sunny airy spot; water when topsoil dries; watch for aphids; harvest flowers promptly and feed to boost yield (Book p. 100 / PDF p. 101).",
    src_cham_fujita_101: "Plant 20 cm apart, top-dress monthly, prune overly long basal stems for airflow, and pick blooms frequently from flat-open to domed-center stage so blooming doesn't stop early (Book p. 101 / PDF p. 102).",
    src_lav_baike_432: "Evergreen subshrub needing cool, fast-draining slightly alkaline soil; seeds take 2 years—use starters or 7–8 cm tip cuttings in Akadama+vermiculite; prune before humid summer to prevent interior rot (Book pp. 432–433 / PDF pp. 67–68).",
    src_lav_bible: "Lavandula roots are highly sensitive to hypoxic waterlogging; container culture requires high air-filled porosity and strong light.",
    src_tarragon_baike_442: "Distinguishes culinary French tarragon (smooth fragrant leaves, sets no seed—must propagate via 12–13 cm spring shoot cuttings or root division) from seed-grown Russian tarragon (hairy, flavorless); divide every 1–2 years (Book pp. 442–443 / PDF pp. 77–78).",
    src_fennel_baike_434: "Distinguishes sweet herb fennel (perennial leaves/seeds) from Florence bulb fennel (6–7 cm basal bulb, seed-only, hill soil to blanch); deep taproot hates transplanting—plant before 15 cm tall (Book pp. 434–435 / PDF pp. 69–70).",
    src_tonghao_fujita_40: "Asteraceae, optimal 15–20°C in airy spot; photoblastic seeds require paper-thin soil cover so light reaches seeds; watch for leafminers and downy mildew (Book p. 40 / PDF p. 41).",
    src_tonghao_fujita_41: "Thin in 3 stages (3 cm → 6 cm with fertilizer → 15–20 cm edible thinning at 8–10 cm tall); gently hand-snap tender shoots at 20 cm tall for continuous multi-flush harvests (Book p. 41 / PDF p. 42).",
    src_radish_fujita_74: "Brassicaceae, optimal 15–20°C, harvests in ~30 days; sow in 1 cm furrows covered with 5–10 mm soil in full sun (Book pp. 74–75 / PDF pp. 75–76).",
    src_radish_fujita_76: "Thin to 3–4 cm before 1–2 true leaves and hill soil around necks; poor rounding is caused by dry soil or insufficient thinning; pull at 2–3 cm diameter (Book p. 76 / PDF p. 77).",
    src_radish_baike_380: "Ideal for window boxes; grows rapidly and turns hollow/pithy if harvest is delayed—pull promptly and stagger-sow batches (Book pp. 380–381 / PDF pp. 15–16).",
    src_fujita_48: "Liliaceae, optimal temp 15–20°C, semi-shade tolerant; mix 40% Akadama + 40% compost + 10% leaf mold + 10% charred rice hulls + 6g/L organic lime.",
    src_soilless_9: "Leggy spindly stems indicate low light or excess nitrogen; lower leaf yellowing indicates overwatering or nutrient depletion.",
    src_almanac: "Water-only regrowth uses stored basal carbohydrates; must transplant to soil after 1–2 cuts; change water to prevent microbial hazard.",
    src_naples: "Change water daily and discard any slimy or decaying tissue.",
    src_naturalkitchen: "Retain 1–2 inches of the white root base.",
    src_reddit: "Scallions are the most reliable water-jar scrap, but thin out without soil nutrients.",
    src_almanac_cilantro: "Cilantro has a delicate taproot and bolts rapidly under stress; sowing seeds is far more reliable than rooting cut stems.",
    src_reddit_cilantro: "Crowded supermarket pots suffer root shock; windowsills rarely supply enough light without an LED grow light.",
    src_baike_cilantro: "Low heat/cold tolerance; sow 4–5 seeds per spot with thin soil cover at 15 cm spacing; harvest in 6–7 weeks.",
    src_naturalkitchen_parsley: "Parsley cuttings require an intact piece of the basal root crown to induce adventitious roots.",
    src_almanac_parsley: "Biennial herb; cut supermarket stems have much lower rooting rates than seed or pot division.",
    src_marias: "Transplant water-rooted herb cuttings into potting mix once roots reach 1–2 inches (2.5–5 cm).",
    src_reddit_parsley: "Divide crowded grocery herb pots and quarantine to prevent aphids and fungus gnats.",
    src_almanac_celery: "Plain water only triggers stored energy expansion; growing full stalks requires months of rich soil, strong light, and cool temperatures.",
    src_countrylife: "Water-sprouted celery bases provide a small secondary leaf garnish, not a full supermarket head.",
    src_naples_celery: "Change water daily to prevent bacterial buildup; discard if slimy.",
    src_reddit_celery: "Hollow celery ribs trap stagnant water and turn slimy while yielding mostly thin bitter leaves.",
    src_baike_celery: "Celery optimal temp 16–21°C (stalls >25°C), heavy feeder, 5 mm thin soil cover; leaf celery prefers 13–15°C moist well-drained soil.",
    src_fujita_89: "Zingiberaceae, optimal temp 25–30°C, pot depth ≥20 cm; drought-sensitive but rots in waterlogged soil.",
    src_fujita_90: "Cut large rhizomes leaving ≥2 buds per piece, buds facing up, cover with 3 cm soil; sprouts in ~20 days.",
    src_fujita_91: "Feed biweekly after emergence; hill 2 cm soil over exposed rhizomes; harvest young stem ginger at 3–4 leaves or root ginger in autumn.",
    src_stormwater: "Rhizome crop requiring warm, humid, well-drained conditions for 8–10 months to reach full harvest.",
    src_almanac_ginger: "Not a weekend hack—requires 8–10 months of warm tropical conditions.",
    src_almanac_garlic: "Water-sprouting yields garlic greens only; full bulbs require autumn soil planting and cold vernalization.",
    src_tastingtable: "Sprouted garlic greens offer a mild garlic garnish within 2 weeks.",
    src_fujita_94: "Harvest basil shoots around 30 cm tall; water thoroughly when topsoil dries; watch for aphids and spider mites.",
    src_baike_422: "Loves full sun and well-drained slightly dry soil; requires >10°C (optimal ~20°C); pinch flower buds early.",
    src_pnw_basil: "Take 4–6 inch softwood cuttings and strip lower leaves before water rooting.",
    src_marias_basil: "Transplant to potting mix once white roots reach 1–2 inches.",
    src_reddit_basil: "Divide overcrowded 4-inch supermarket basil pots and quarantine against aphids/spider mites.",
    src_mint_xiangcao_69: "Profiles spearmint and compact culinary herbs suited for small container culture (Book p. 69 / PDF p. 73).",
    src_mint_zuihao_57: "Q&A explicitly warns why mint must be planted separately: aggressive underground runners overtake neighboring herbs (Book p. 57 / PDF p. 40).",
    src_mint_yangtai_69: "Take ~10 cm healthy shoot cuttings in spring/autumn, angle-cut, strip lower half of leaves, and root in vermiculite/Akadama (Book p. 69 / PDF p. 76).",
    src_mint_almanac: "Nodal mint cuttings root rapidly in water but require soil transfer for sustained yield.",
    src_mint_foliage: "Strip all submerged leaves to prevent rot; transfer gently when roots reach 1–2 inches.",
    src_mint_gardenbetty: "Supermarket living herbs are densely seeded and must be divided and repotted.",
    src_mint_led: "Autumn/winter apartment windowsills drop to DLI 5–8 and require supplemental LED lighting.",
    src_mint_penn: "Stagnant humid indoor air promotes powdery mildew; maintain airflow and prune.",
    src_mint_unr: "University of Nevada, Reno Extension guide on indoor winter herb cuttings and supplemental lighting.",
    src_mint_agronomy: "Secondary NotebookLM synthesis report noting PPFD 150–250, DLI 10–16, and etiolation thresholds.",
    src_mint_synthesis: "Secondary NotebookLM synthesis report noting Perched Water Table physics and 60–70% acclimation humidity.",
    src_rose_aggie: "Texas A&M Extension E-623: Softwood cuttings root in 4–8 weeks; seeds have ~15% germination and take 15 months to harvest; let topsoil dry between waterings.",
    src_rose_modernsprout: "Use snug unglazed terracotta (1–2 in wider), keep crown flush, run a 24h fan, and avoid false-drought overwatering.",
    src_rose_amazing: "2:1 fast-draining mix (compost/coco + coarse perlite/pumice/grit); water must drain through within seconds.",
    src_rose_gardenmyths: "Gravel or pot shards at the bottom raise the Perched Water Table (PWT) and reduce aerated root volume.",
    src_rose_gorilla: "High-intensity indoor lighting specs for rosemary.",
    src_rose_wsu: "WSU Extension propagation standards for semi-woody cuttings at 18–21°C in sterile porous media.",
    src_rose_gardenbetty: "Old woody stems fail in water; use pliable green new growth.",
    src_rose_yangtai_69: "Lists rosemary for softwood cutting propagation; gentle tug resistance confirms rooting (Book p. 69 / PDF p. 76).",
    src_rose_urbanhydro: "Rosemary hydroponic and photobiological benchmarks.",
    src_rose_hort_unverified: "Horticulture Magazine guide on indoor rosemary light, gritty drainage, and overwintering watering.",
    src_thyme_baike_424: "Perennial subshrub requiring bright sun, fast drainage, and ventilation; propagate via cuttings (Book p. 424 / PDF p. 59).",
    src_thyme_zuihao_101: "Step-by-step illustrated guide to potted thyme management, harvesting, and cutting/layering propagation (Book p. 101 / PDF p. 83).",
    src_thyme_yangtai_69: "Lists thyme for spring/autumn 10 cm softwood cutting propagation in vermiculite/Akadama (Book p. 69 / PDF p. 76).",
    src_thyme_zhaoling_29: "Note: Original chapter covers Gynura, providing general herbaceous stem cutting temperature (18–25°C) and 3–4 node insertion guidelines (Book p. 29 / PDF p. 40).",
    src_thyme_groovy: "High light requirement, dry-down watering cycle (no moisture-control soil), and crown-rot prevention.",
    src_thyme_westlondon: "Thyme has delicate fibrous roots—never rip a supermarket pot into tiny plugs; repot whole or split in two max.",
    src_thyme_urbanhydro: "DLI 18–20 boosts essential oil and fresh weight; seed-to-harvest takes 75–95 days.",
    src_thyme_glowrium: "Recommended PPFD ranges for indoor shelf grow lights.",
    src_thyme_led: "Apartment windowsills in winter fall short of Mediterranean DLI targets.",
    src_thyme_handbook: "Woodhead Publishing Ch. 19: Fine-rooted subshrub propagated from non-woody green tips; tiny photoblastic seeds.",
    src_chives_baike_428: "Cold-hardy but drought-sensitive; plant 3–4 bulbs per cluster in moisture-retentive window boxes; pinch flower buds early so leaves stay tender (Book pp. 428–429 / PDF pp. 63–64).",
    src_chives_uvm: "Hardy perennial well-suited to indoor windowsill containers.",
    src_chives_iastate: "Trim potted chive clumps down to ~2 inches (5 cm) to force vigorous new foliage.",
    src_jiucai_fujita_44: "Liliaceae, optimal ~20°C, tolerates light shade; water before soil dries out completely or blades turn tough; produces for 3–4 years (Book p. 44 / PDF p. 45).",
    src_jiucai_fujita_45: "Germinates in ~10 days; cut at 20–30 cm tall leaving 3–4 cm stubble; top-dress after every cut and divide every 3–4 years (Book p. 45 / PDF p. 46).",
    src_jiucai_baike_210: "Multi-harvest perennial (3–4 bulbs per hole); divide and replant every 3–4 years when roots crowd (Book pp. 210–211 / PDF pp. 85–86).",
    src_perilla_fujita_42: "Lamiaceae, optimal 20–25°C, grows in partial shade; water before soil dries; watch for spider mites, aphids, and rust (Book p. 42 / PDF p. 43).",
    src_perilla_fujita_43: "Sow in 5 mm shallow furrow; thin in 3 stages to 15 cm; feed biweekly; harvest large lower leaves at 30–40 cm (Book p. 43 / PDF p. 44).",
    src_perilla_zuihao_77: "Potted shiso transplanting, tip pinching for lateral branching, and watering guide (Book p. 77 / PDF p. 59).",
    src_perilla_yangtai_69: "Lists perilla (shiso) for softwood stem cutting propagation (Book p. 69 / PDF p. 76).",
    src_perilla_extension: "Keep soil evenly moist and pinch growing tips frequently to prevent tall spindly stalks.",
    src_lettuce_fujita_34: "Asteraceae, optimal 15–20°C (avoid midsummer); needs sunny days but complete darkness at night; pick outer leaves sequentially (Book p. 34 / PDF p. 35).",
    src_lettuce_fujita_35: "Cover seeds 5–10 mm; thin in 3 stages to 1 plant per spot and top-dress; harvest whole at 25 cm or pick outer leaves (Book p. 35 / PDF p. 36).",
    src_lettuce_baike_224: "Shallow-sow tiny photoblastic seeds; high heat and long days trigger bolting; sequential outer-leaf harvest extends yield (Book pp. 224–225 / PDF pp. 99–100).",
    src_lettuce_gardenerspath: "Romaine stumps in water never form a full head; continuous salad harvest requires seeding or rooted hydroponic starts.",
    src_lettuce_almanac: "Stump pushes a tiny flush of leaves from stored carbs before turning bitter and bolting in 10–14 days.",
    src_oregano_iastate: "Requires brightest south/west window or 10–14h grow light; let soil dry several inches down between waterings—overwatering is the #1 killer.",
    src_oregano_ncsu: "Never use outdoor garden soil indoors; use sterile soilless mix in drainage pots and finger-test before watering.",
    src_oregano_uvm: "Mediterranean perennial demanding strong light and dry, well-aerated roots.",
    src_oregano_psu: "Culinary herbs need 6+ hrs direct sun or grow lights to prevent etiolation and essential oil loss.",
    src_micro_fujita_50: "Sponge/gauze tray method (radish/red cabbage: 18–20°C foil blackout 2 days, green in sun, mist twice daily) & gauze-jar bean sprout method (18–22°C full darkness, rinse 2–3x daily, harvest in 7–10 days; Book p. 50 / PDF p. 51).",
    src_kongxin_baike_338: "Convolvulaceae, heat- and moisture-loving; propagate either by soaking hard seeds 24h or rooting supermarket nodal stem cuttings; harvest tender tips every 2–3 weeks (Book pp. 338–339 / PDF pp. 103–104).",
    src_arugula_baike_234: "Brassicaceae, fast high-germination seeds ideal for window boxes; thin to 5 cm at 3 leaves and 8 cm at 5 leaves; pick outer leaves at 15 cm before they turn tough and overly pungent (Book pp. 234–235 / PDF pp. 109–110).",
    src_dill_baike_446: "Apiaceae annual with sensitive taproot—direct-sow or transplant before 20 cm tall; stake at 40–50 cm and feed monthly; harvest feathery leaves anytime (Book pp. 446–447 / PDF pp. 81–82).",
    src_sage_zuihao_100: "12-step illustrated guide: select healthy starter → mound soil slightly at root base for drainage → shade 2–3 days → full sun → harvest upper tender leaves at 30+ cm → prune brown woody stems at base & feed (Book p. 100 / PDF p. 82).",
    src_sage_yangtai_69: "Lists sage for spring/autumn softwood cutting propagation (Book p. 69 / PDF p. 76).",
    src_lemon_naples: "Stand lemongrass stalks with intact basal plates in shallow water in sun, change water every 2 days, and pot once roots reach 1–2 inches.",
    src_lemon_illinois: "Lemongrass is one of the few scraps that reliably regenerates new harvestable stalks from the basal plate.",
    src_myth_illinois: "Scrap regrowing is a great botany demonstration, but carrot tops and cabbage stumps never regenerate a new root or tight head.",
    src_myth_ucanr: "Cut root crowns only push foliage from residual carbs and cannot form a new taproot.",
    src_myth_hortuk: "Once a carrot taproot is harvested, the cut crown can only produce feathery top greens.",
    src_myth_gkh: "Foolproof indoor kids' science project; use shallow water changed daily to prevent rot.",
    src_myth_cbc: "Regrown carrot greens are edible and delicious in carrot-top pesto, chimichurri, or stock.",
    src_soilless_11: "Fast-sprouting seeds and roots make engaging hands-on botany projects for children (PDF pp. 10–11)."
  }
};

