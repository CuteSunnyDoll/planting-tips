// Verified inline SVG diagrams for critical indoor planting actions & failure prevention.
window.SVG_DIAGRAMS = {
  water_line: {
    title: "图解：水培水位线 vs 淹没腐烂红线",
    caption: "水位只需没过根盘/节点 1–2 cm；淹没上部切口或泡进叶片，48 小时内必产生细菌黏液腐烂。",
    svg: `<svg viewBox="0 0 640 260" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="水培水位线正确与错误对比">
      <rect width="640" height="260" rx="10" fill="#faf9f4"/>
      <text x="160" y="28" text-anchor="middle" font-size="14" font-weight="700" fill="#145338">✅ 正确：仅浅浸根盘/茎节 (1–2 cm)</text>
      <text x="480" y="28" text-anchor="middle" font-size="14" font-weight="700" fill="#8b1e1e">❌ 错误：水位过高泡烂切口或叶片</text>
      <line x1="320" y1="20" x2="320" y2="245" stroke="#dcd8cb" stroke-dasharray="5 5"/>
      <!-- Left: Good -->
      <rect x="95" y="95" width="130" height="135" rx="8" fill="#ffffff" stroke="#8ab89d" stroke-width="2"/>
      <rect x="97" y="185" width="126" height="43" rx="6" fill="#cce8f4"/>
      <line x1="85" y1="185" x2="235" y2="185" stroke="#1b6ca8" stroke-width="2" stroke-dasharray="4 3"/>
      <text x="240" y="189" font-size="11" fill="#1b6ca8" font-weight="700">水位 1–2cm</text>
      <rect x="145" y="110" width="30" height="88" rx="4" fill="#e9efe2" stroke="#5b8a4b" stroke-width="2"/>
      <rect x="152" y="65" width="16" height="45" rx="3" fill="#4f9d53"/>
      <path d="M148 198 Q140 212 144 222 M160 198 L160 224 M172 198 Q180 212 175 222" stroke="#b99c6b" stroke-width="2" fill="none"/>
      <text x="160" y="248" text-anchor="middle" font-size="11" fill="#56635b">上方切口透气、每日换清水</text>
      <!-- Right: Bad -->
      <rect x="415" y="95" width="130" height="135" rx="8" fill="#ffffff" stroke="#e09191" stroke-width="2"/>
      <rect x="417" y="122" width="126" height="106" rx="6" fill="#d8e3c8"/>
      <line x1="405" y1="122" x2="555" y2="122" stroke="#c93b3b" stroke-width="2" stroke-dasharray="4 3"/>
      <text x="558" y="126" font-size="11" fill="#c93b3b" font-weight="700">淹没过深</text>
      <rect x="465" y="115" width="30" height="85" rx="4" fill="#8f7a53" stroke="#6b4423" stroke-width="2"/>
      <ellipse cx="456" cy="148" rx="11" ry="6" fill="#706233"/>
      <ellipse cx="504" cy="155" rx="11" ry="6" fill="#706233"/>
      <text x="480" y="248" text-anchor="middle" font-size="11" fill="#8b1e1e">水下叶片腐烂+厌氧菌发臭发黏</text>
    </svg>`
  },
  pwt: {
    title: "图解：为什么绝对不要在盆底垫碎石/陶粒（悬挂滞水层 PWT）",
    caption: "土壤颗粒由细骤变为粗石会阻断毛细排水，反而将饱和积水层往上推至植物核心根区（Garden Myths / 园艺流体物理实证）。",
    svg: `<svg viewBox="0 0 640 250" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="悬挂滞水层 PWT 对比图">
      <rect width="640" height="250" rx="10" fill="#faf9f4"/>
      <text x="160" y="26" text-anchor="middle" font-size="14" font-weight="700" fill="#8b1e1e">❌ 盆底垫碎石：抬高积水层闷烂根</text>
      <text x="480" y="26" text-anchor="middle" font-size="14" font-weight="700" fill="#145338">✅ 统一粗颗粒基质：饱和区沉到最底</text>
      <line x1="320" y1="20" x2="320" y2="235" stroke="#dcd8cb" stroke-dasharray="5 5"/>
      <!-- Bad Pot -->
      <polygon points="85,55 235,55 215,215 105,215" fill="#d9c6b0" stroke="#7a5c3e" stroke-width="2"/>
      <polygon points="94,130 226,130 221,170 99,170" fill="#8bb9d9"/>
      <polygon points="99,170 221,170 215,215 105,215" fill="#a09a92"/>
      <circle cx="130" cy="192" r="9" fill="#c7c2ba"/><circle cx="155" cy="195" r="10" fill="#b5afa6"/><circle cx="182" cy="190" r="9" fill="#c7c2ba"/>
      <path d="M160,55 L160,150 M160,100 L135,145 M160,115 L185,152" stroke="#422a16" stroke-width="3" fill="none"/>
      <text x="160" y="154" text-anchor="middle" font-size="11" font-weight="700" fill="#0d3b66">悬挂滞水层 (根系浸水)</text>
      <text x="160" y="236" text-anchor="middle" font-size="11" fill="#8b1e1e">碎石阻断毛细吸水，根区空间被压缩</text>
      <!-- Good Pot -->
      <polygon points="405,55 555,55 535,215 425,215" fill="#c9845b" stroke="#8e4a24" stroke-width="2"/>
      <polygon points="421,182 539,182 535,215 425,215" fill="#8bb9d9"/>
      <path d="M480,55 L480,158 M480,98 L452,148 M480,108 L508,150" stroke="#f0e6d2" stroke-width="3" fill="none"/>
      <text x="480" y="115" text-anchor="middle" font-size="11" font-weight="700" fill="#2d2014">透气颗粒土 (红陶盆侧壁挥发)</text>
      <text x="480" y="203" text-anchor="middle" font-size="11" font-weight="700" fill="#0d3b66">极薄饱和区直接从底孔排出</text>
      <text x="480" y="236" text-anchor="middle" font-size="11" fill="#145338">不垫碎石，全盆统一高孔隙配土</text>
    </svg>`
  },
  pinch_node: {
    title: "图解：罗勒 / 紫苏 / 薄荷「一分二」节点摘心剪法",
    caption: "不要只扯大叶子；剪在两对真叶交叉点上方 0.5 cm，腋芽会同步萌发两根新主枝，越剪越爆盆。",
    svg: `<svg viewBox="0 0 640 240" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="双分枝节点摘心示意图">
      <rect width="640" height="240" rx="10" fill="#faf9f4"/>
      <line x1="180" y1="210" x2="180" y2="50" stroke="#4f8a4b" stroke-width="6" stroke-linecap="round"/>
      <ellipse cx="145" cy="145" rx="28" ry="12" transform="rotate(-20 145 145)" fill="#62a85c"/>
      <ellipse cx="215" cy="145" rx="28" ry="12" transform="rotate(20 215 145)" fill="#62a85c"/>
      <ellipse cx="148" cy="95" rx="22" ry="10" transform="rotate(-18 148 95)" fill="#77bf71"/>
      <ellipse cx="212" cy="95" rx="22" ry="10" transform="rotate(18 212 95)" fill="#77bf71"/>
      <!-- Axillary buds -->
      <circle cx="172" cy="138" r="5" fill="#d9f2b4" stroke="#2d6a3e"/>
      <circle cx="188" cy="138" r="5" fill="#d9f2b4" stroke="#2d6a3e"/>
      <!-- Cut line -->
      <line x1="140" y1="126" x2="225" y2="126" stroke="#c93b3b" stroke-width="2.5" stroke-dasharray="5 3"/>
      <text x="232" y="130" font-size="12" font-weight="700" fill="#c93b3b">✂️ 剪在叶腋芽点上方 0.5 cm</text>
      <!-- Arrow -->
      <path d="M320 130 L375 130" stroke="#1d5c42" stroke-width="3" marker-end="url(#arrow)"/>
      <text x="348" y="118" text-anchor="middle" font-size="11" font-weight="700" fill="#1d5c42">7–10 天后</text>
      <!-- Branched result -->
      <line x1="480" y1="210" x2="480" y2="132" stroke="#4f8a4b" stroke-width="6" stroke-linecap="round"/>
      <path d="M480 135 Q450 105 438 65 M480 135 Q510 105 522 65" stroke="#5da858" stroke-width="5" fill="none" stroke-linecap="round"/>
      <ellipse cx="445" cy="145" rx="24" ry="10" transform="rotate(-20 445 145)" fill="#62a85c"/>
      <ellipse cx="515" cy="145" rx="24" ry="10" transform="rotate(20 515 145)" fill="#62a85c"/>
      <ellipse cx="435" cy="65" rx="18" ry="8" fill="#82cc7b"/>
      <ellipse cx="525" cy="65" rx="18" ry="8" fill="#82cc7b"/>
      <text x="480" y="232" text-anchor="middle" font-size="12" font-weight="700" fill="#145338">一分二爆出双倍侧枝（见花苞同样掐除）</text>
    </svg>`
  },
  superpot_split: {
    title: "图解：超市密植「超密盆」切块分株法（罗勒 / 香菜 / 欧芹）",
    caption: "4 寸盆常挤 20–30 株苗。用消毒小刀纵向切块（百里香最多二等分），切勿暴力手撕主根。",
    svg: `<svg viewBox="0 0 640 230" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="超市密植盆切块分株图">
      <rect width="640" height="230" rx="10" fill="#faf9f4"/>
      <ellipse cx="145" cy="115" rx="75" ry="60" fill="#6b4e35"/>
      <line x1="145" y1="45" x2="145" y2="185" stroke="#ffd166" stroke-width="3" stroke-dasharray="6 4"/>
      <line x1="60" y1="115" x2="230" y2="115" stroke="#ffd166" stroke-width="3" stroke-dasharray="6 4"/>
      <text x="145" y="205" text-anchor="middle" font-size="12" font-weight="700" fill="#56635b">灭菌小刀保留原土坨纵切 2–4 块</text>
      <path d="M250 115 L310 115" stroke="#1d5c42" stroke-width="3"/>
      <!-- Split pots -->
      <rect x="340" y="75" width="75" height="90" rx="6" fill="#c9845b"/><text x="377" y="125" text-anchor="middle" font-size="12" fill="#fff" font-weight="700">独立盆 1</text>
      <rect x="435" y="75" width="75" height="90" rx="6" fill="#c9845b"/><text x="472" y="125" text-anchor="middle" font-size="12" fill="#fff" font-weight="700">独立盆 2</text>
      <rect x="530" y="75" width="75" height="90" rx="6" fill="#c9845b"/><text x="567" y="125" text-anchor="middle" font-size="12" fill="#fff" font-weight="700">独立盆 3</text>
      <text x="472" y="205" text-anchor="middle" font-size="12" font-weight="700" fill="#145338">定植浇透后放散射光处缓苗 5–7 天</text>
    </svg>`
  },
  dli_distance: {
    title: "图解：LED 补光灯瓦数与植物冠层吊挂距离关系",
    caption: "小灯条(10–36W) 挂太高无效，大面板(100W+) 贴太近灼伤漂白；观察顶叶反馈即可微调。",
    svg: `<svg viewBox="0 0 640 240" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="LED补光灯吊挂距离示意图">
      <rect width="640" height="240" rx="10" fill="#faf9f4"/>
      <!-- Left: 10-36W -->
      <rect x="90" y="45" width="140" height="14" rx="4" fill="#333"/>
      <polygon points="95,59 225,59 250,155 70,155" fill="rgba(255,225,130,0.35)"/>
      <line x1="160" y1="62" x2="160" y2="148" stroke="#c97a00" stroke-width="2" stroke-dasharray="4 3"/>
      <text x="235" y="108" font-size="11" font-weight="700" fill="#7a4b00">15–30 cm</text>
      <rect x="120" y="155" width="80" height="45" rx="4" fill="#5da858"/>
      <text x="160" y="222" text-anchor="middle" font-size="12" font-weight="700" fill="#1c2420">10–36W 灯条/夹灯（须贴近叶冠）</text>
      <!-- Right: 100-150W -->
      <rect x="405" y="25" width="150" height="18" rx="4" fill="#333"/>
      <polygon points="410,43 550,43 590,155 370,155" fill="rgba(255,225,130,0.45)"/>
      <line x1="480" y1="45" x2="480" y2="148" stroke="#1d5c42" stroke-width="2" stroke-dasharray="4 3"/>
      <text x="556" y="96" font-size="11" font-weight="700" fill="#1d5c42">35–60 cm</text>
      <rect x="440" y="155" width="80" height="45" rx="4" fill="#3b7a4a"/>
      <text x="480" y="222" text-anchor="middle" font-size="12" font-weight="700" fill="#1c2420">100–150W 量子板（默认 45 cm）</text>
    </svg>`
  }
};
