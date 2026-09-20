function escapeHtml(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

const typeLabels = {
  trace: '<span class="q-type q-type-trace">📊 Calculation & Trace</span>',
  compare: '<span class="q-type q-type-compare">⚖️ Comparative Analysis</span>',
  scenario: '<span class="q-type q-type-scenario">🎯 Scenario & Application</span>',
  concept: '<span class="q-type q-type-concept">💭 Concept & Fundamentals</span>',
  explain: '<span class="q-type q-type-explain">🔍 Engineering Synthesis</span>'
};

const lessonLabels = {
  L6a: 'L6a Fan and Duct System'
};

// =======================================================
// 12 TOPICS WITH HIGH-PRECISION SCADA ANIMATED SCHEMATICS
// =======================================================
const notesData = [
  {
    id: 't1', icon: '1', title: 'Fan Classifications: Axial, Centrifugal & Propeller',
    titleZh: '風機三大類型與氣流幾何方向',
    diagram: `<svg viewBox="0 0 740 280" xmlns="http://www.w3.org/2000/svg" width="100%">
      <!-- Axial Fan -->
      <g class="scada-unit" transform="translate(15, 20)">
        <rect x="0" y="25" width="220" height="235" fill="#243342" stroke="#3498db" stroke-width="2" rx="6"/>
        <text x="110" y="16" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#3498db">1. Axial-Flow Fan (軸流風機)</text>
        <rect x="25" y="50" width="170" height="70" fill="#1a252f" stroke="#3498db" rx="4"/>
        <circle cx="110" cy="85" r="22" fill="#2980b9"/>
        <line x1="110" y1="50" x2="110" y2="120" stroke="#ecf0f1" stroke-width="2"/>
        <line x1="75" y1="85" x2="145" y2="85" stroke="#ecf0f1" stroke-width="2"/>
        <path d="M 5 85 L 25 85 M 195 85 L 215 85" stroke="#00d2d3" stroke-width="4" class="flow-air-supply"/>
        <text x="110" y="145" text-anchor="middle" font-size="10" fill="#fff" font-weight="bold">Parallel to Axis (平行軸向)</text>
        <text x="110" y="165" text-anchor="middle" font-size="8.5" fill="#bdc3c7">Straight through impeller</text>
        <text x="110" y="185" text-anchor="middle" font-size="8.5" fill="#bdc3c7">Constant distance from axle</text>
        <text x="110" y="210" text-anchor="middle" font-size="9" fill="#00d2d3">High flow, medium pressure</text>
      </g>
      <!-- Centrifugal Fan -->
      <g class="scada-unit" transform="translate(255, 20)">
        <rect x="0" y="25" width="230" height="235" fill="#243342" stroke="#e67e22" stroke-width="2" rx="6"/>
        <text x="115" y="16" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#f39c12">2. Centrifugal Fan (離心風機)</text>
        <path d="M 40 105 A 45 45 0 0 1 155 75 L 185 75 L 185 125 A 45 45 0 0 1 125 155 Z" fill="#1a252f" stroke="#e67e22" stroke-width="2"/>
        <circle cx="105" cy="115" r="18" fill="#d35400"/>
        <path d="M 105 155 L 105 133" stroke="#00d2d3" stroke-width="3" class="flow-air-supply"/>
        <path d="M 185 95 L 220 95" stroke="#00d2d3" stroke-width="3" class="flow-air-supply"/>
        <text x="115" y="175" text-anchor="middle" font-size="10" fill="#fff" font-weight="bold">Turns 90° Radially (90°轉向)</text>
        <text x="115" y="195" text-anchor="middle" font-size="8.5" fill="#bdc3c7">Enters axially, exits radially</text>
        <text x="115" y="215" text-anchor="middle" font-size="8.5" fill="#f1c40f">Scroll housing &amp; cutoff</text>
        <text x="115" y="235" text-anchor="middle" font-size="9" fill="#e67e22">Serves higher static pressure</text>
      </g>
      <!-- Propeller Fan -->
      <g class="scada-unit" transform="translate(505, 20)">
        <rect x="0" y="25" width="220" height="235" fill="#243342" stroke="#e74c3c" stroke-width="2" rx="6"/>
        <text x="110" y="16" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#e74c3c">3. Propeller Fan (螺旋槳風機)</text>
        <rect x="75" y="60" width="10" height="70" fill="#bdc3c7"/>
        <circle cx="110" cy="95" r="22" fill="#78281f"/>
        <text x="110" y="99" text-anchor="middle" font-size="8" fill="#fff">Hub</text>
        <path d="M 85 75 Q 110 55 135 75 M 85 115 Q 110 135 135 115" stroke="#f5b7b1" stroke-width="4"/>
        <text x="110" y="150" text-anchor="middle" font-size="10" fill="#fff" font-weight="bold">Mounted in Wall Orifice</text>
        <text x="110" y="170" text-anchor="middle" font-size="8.5" fill="#e74c3c">NO air duct allowed!</text>
        <text x="110" y="190" text-anchor="middle" font-size="8.5" fill="#bdc3c7">Operates at ~0 Pa static pressure</text>
        <text x="110" y="210" text-anchor="middle" font-size="8.5" fill="#bdc3c7">Curved steel/plastic blades</text>
        <text x="110" y="235" text-anchor="middle" font-size="9" fill="#f1c40f">Low efficiency: 40% to 55%</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 1: Fundamental aerodynamic geometry of Axial (straight-through parallel flow), Centrifugal (axial inlet, 90° radial scroll discharge), and Propeller fans (unconfined wall orifice)',
    sections: [
      {
        title: 'Definition & Three Fan Categories / 風機定義與三大構造類別',
        zh: '<p><strong>通風機 (Fan)</strong> 係一種連續推動空氣或其他氣體流動的葉輪動力流體機械 (rotodynamic machine)[cite: 6]。</p><ul><li><strong>軸流式風機 (Axial-flow fan)</strong>：具有圓筒形外殼，氣流進入和離開葉輪的方向實質上與軸線平行（parallel to axis），氣流在距離軸心恆定半徑處筆直穿過葉輪[cite: 6]。</li><li><strong>離心式風機 (Centrifugal fan)</strong>：氣流沿軸向吸入葉輪中心，經過 <strong>90° 轉向</strong>後，受離心力驅動沿葉片徑向向外拋出，由蝸殼 (scroll) 收集引導至排風口[cite: 6]。克服管網阻力（靜壓）能力強[cite: 6]。</li><li><strong>螺旋槳式風機 (Propeller fan)</strong>：葉輪安裝在牆孔 (orifice plate) 中旋轉，氣流進出<strong>不受任何外殼限制</strong>[cite: 6]。運轉於零或極低靜壓條件下，<strong>絕對不容許接駁任何風管 (no air duct connection allowed)</strong>[cite: 6]。效率較低，僅約 <strong>40% 至 55%</strong>[cite: 6]。</li></ul>',
        en: '<p>A <strong>fan</strong> is a rotodynamic machine which continuously propels air or gas[cite: 6].</p><ul><li><strong>Axial-flow fan</strong>: Cylindrical casing where air enters and leaves substantially parallel to its axis in a straight-through flow at a constant radial distance[cite: 6].</li><li><strong>Centrifugal fan</strong>: Air enters the impeller axially, turns through <strong>90°</strong>, and progresses radially outwards through fan blades into a scroll housing[cite: 6]. Handles higher static pressures[cite: 6].</li><li><strong>Propeller fan</strong>: Operates in an orifice plate without a confining casing; operates at zero or low static pressure; <strong>no air duct connection is allowed</strong>; efficiency is relatively low (<strong>40% to 55%</strong>)[cite: 6].</li></ul>'
      }
    ]
  },
  {
    id: 't2', icon: '2', title: 'Pressure Definitions & Pitot-Static Tube Measurement',
    titleZh: '全壓、動壓、靜壓與皮托管測量原理',
    diagram: `<svg viewBox="0 0 740 280" xmlns="http://www.w3.org/2000/svg" width="100%">
      <g class="scada-unit" transform="translate(20, 20)">
        <rect x="0" y="25" width="700" height="235" fill="#243342" stroke="#34495e" stroke-width="2" rx="8"/>
        <text x="350" y="16" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#1abc9c">Pitot-Static Tube &amp; Manometer Pressure Measurement (皮托管測量全壓/靜壓/動壓)</text>
        <!-- Air Duct -->
        <rect x="40" y="45" width="620" height="60" fill="#1a252f" stroke="#7f8c8d" stroke-width="2"/>
        <path d="M 50 75 L 120 75" stroke="#00d2d3" stroke-width="3" class="flow-air-supply"/>
        <text x="85" y="68" font-size="9" fill="#00d2d3">Air Flow u</text>
        <!-- (a) Static Pressure tap -->
        <g transform="translate(140, 95)">
          <path d="M 0 10 L 0 70 L 30 70 L 30 40" fill="none" stroke="#ecf0f1" stroke-width="2"/>
          <rect x="-4" y="55" width="8" height="20" fill="#3498db"/>
          <text x="15" y="95" text-anchor="middle" font-size="10" fill="#3498db" font-weight="bold">(a) Static Pressure (Ps)</text>
          <text x="15" y="108" text-anchor="middle" font-size="8.5" fill="#bdc3c7">Wall Tap (側壁孔)</text>
        </g>
        <!-- (b) Total Pressure tube -->
        <g transform="translate(320, 75)">
          <path d="M -20 0 L 0 0 L 0 90 L 30 90 L 30 50" fill="none" stroke="#ecf0f1" stroke-width="2"/>
          <rect x="-4" y="75" width="8" height="20" fill="#e74c3c"/>
          <text x="15" y="115" text-anchor="middle" font-size="10" fill="#e74c3c" font-weight="bold">(b) Total Pressure (Pt)</text>
          <text x="15" y="128" text-anchor="middle" font-size="8.5" fill="#bdc3c7">Impact Tube (正對氣流)</text>
        </g>
        <!-- (c) Pitot-Static differential -->
        <g transform="translate(500, 75)">
          <path d="M -30 -5 L 0 -5 L 0 90 L 25 90 L 25 35 M -15 5 L -10 5 L -10 90" fill="none" stroke="#ecf0f1" stroke-width="2"/>
          <rect x="-4" y="65" width="8" height="25" fill="#f1c40f"/>
          <text x="12" y="115" text-anchor="middle" font-size="10" fill="#f1c40f" font-weight="bold">(c) Velocity Pressure (Pv)</text>
          <text x="12" y="128" text-anchor="middle" font-size="8.5" fill="#bdc3c7">Differential: Pt - Ps</text>
        </g>
        <rect x="40" y="195" width="620" height="50" fill="#111" stroke="#1abc9c" rx="4"/>
        <text x="350" y="217" text-anchor="middle" font-size="13" fill="#f1c40f" font-family="Consolas" font-weight="bold">Pt = Ps + Pv   |   Pv = (ρ · u²) / 2   |   Fan Pt = Pt_outlet - Pt_inlet</text>
        <text x="350" y="235" text-anchor="middle" font-size="9.5" fill="#ecf0f1">Standard Air: ρ = 1.204 kg/m³ at 20°C and 101.325 kPa.</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 2: Pressure measurement with U-tube water manometers: (a) Static wall tap, (b) Total pressure impact tube, and (c) Pitot-static tube measuring dynamic velocity pressure Pv = Pt - Ps',
    sections: [
      {
        title: 'Standard Air & Three Pressures / 標準空氣與三種風壓',
        zh: '<p>風機性能標準狀態 (Standard Air) 規定為：密度 $\\rho = 1.204\\text{ kg/m}^3$、大氣壓 $101.325\\text{ kPa}$、溫度 $20\\text{ }^\circ\\text{C}$[cite: 6]。</p><ul><li><strong>風機全壓 (Fan Total Pressure, $P_t$)</strong>：風機出口截面平均全壓與入口截面平均全壓的代數差[cite: 6]：$$P_t = P_{outlet} - P_{inlet}$$[cite: 6]</li><li><strong>風機動壓 (Fan Velocity Pressure, $P_v$)</strong>：對應於風機出口平均風速的動態壓力（按出口總面積計算，不扣除電機阻擋）[cite: 6]：$$P_v = \\frac{\\rho u^2}{2}$$[cite: 6]</li><li><strong>風機靜壓 (Fan Static Pressure, $P_s$)</strong>：全壓與動壓之差值[cite: 6]：$$P_s = P_t - P_v \\iff P_t = P_s + P_v$$[cite: 6]</li></ul>',
        en: '<p><strong>Standard Air Conditions</strong>: $\\rho = 1.204\\text{ kg/m}^3$, pressure = $101.325\\text{ kPa}$, temperature = $20\\text{ }^\circ\\text{C}$[cite: 6].</p><ul><li><strong>Fan Total Pressure ($P_t$)</strong>: Algebraic difference between mean total pressure at fan outlet and inlet: $P_t = P_{outlet} - P_{inlet}$[cite: 6].</li><li><strong>Fan Velocity Pressure ($P_v$)</strong>: Dynamic pressure corresponding to average velocity at fan outlet area: $P_v = \\rho u^2 / 2$[cite: 6].</li><li><strong>Fan Static Pressure ($P_s$)</strong>: Difference between total and velocity pressure: $P_s = P_t - P_v \\iff P_t = P_s + P_v$[cite: 6].</li></ul>'
      },
      {
        title: 'Pitot-Static Tube Measurement / 皮托管與 U 型管測量原理',
        zh: '<p>如圖 2 所示[cite: 6]：</p><ol><li>(a) 管壁直角取壓孔連接 U 型管：測量垂直於流向的<strong>靜壓 ($P_s$)</strong>[cite: 6]；</li><li>(b) 衝擊管正對迎面氣流：測量全動能滯止後的<strong>全壓 ($P_t$)</strong>[cite: 6]；</li><li>(c) 皮托管內外雙層同心套管：外層開側孔感受靜壓，內管正對氣流感受全壓，差壓計讀數即為<strong>動壓 ($P_v = P_t - P_s$)</strong>，由此可直接反推風速 $u = \\sqrt{2 P_v / \\rho}$[cite: 6]。</li></ol>',
        en: '<p>As illustrated in Fig 2[cite: 6]:</p><ol><li>(a) Side wall tap measures <strong>Static Pressure ($P_s$)</strong> perpendicular to flow[cite: 6];</li><li>(b) Impact tube pointed directly upstream measures <strong>Total Pressure ($P_t$)</strong>[cite: 6];</li><li>(c) Pitot-static tube simultaneously connects total and static taps across a differential manometer, measuring <strong>Velocity Pressure ($P_v = P_t - P_s$)</strong> to derive velocity: $u = \\sqrt{2 P_v / \\rho}$[cite: 6].</li></ol>'
      }
    ]
  },
  {
    id: 't3', icon: '3', title: 'Fan Power & Energy Efficiency Formulations',
    titleZh: '風機軸功率、全壓效率與靜壓效率',
    diagram: `<svg viewBox="0 0 740 260" xmlns="http://www.w3.org/2000/svg" width="100%">
      <g class="scada-unit" transform="translate(20, 20)">
        <rect x="0" y="25" width="700" height="215" fill="#243342" stroke="#34495e" stroke-width="2" rx="8"/>
        <text x="350" y="16" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#1abc9c">Fan Power &amp; Efficiency Formulations (風機功率與效率計算方程)</text>
        <rect x="30" y="50" width="310" height="90" fill="#1a252f" stroke="#3498db" rx="4"/>
        <text x="185" y="75" text-anchor="middle" font-size="11" font-weight="bold" fill="#5dade2">Theoretical Air Power Output (Wo)</text>
        <text x="185" y="105" text-anchor="middle" font-size="16" fill="#f1c40f" font-family="Consolas" font-weight="bold">Wo = Pt · V   (Watts)</text>
        <text x="185" y="125" text-anchor="middle" font-size="9" fill="#bdc3c7">Pt in Pa, V in m³/s (Incompressible isentropic work)</text>
        <rect x="360" y="50" width="310" height="90" fill="#1a252f" stroke="#2ecc71" rx="4"/>
        <text x="515" y="75" text-anchor="middle" font-size="11" font-weight="bold" fill="#2ecc71">Fan Total &amp; Static Efficiencies</text>
        <text x="515" y="98" text-anchor="middle" font-size="13" fill="#ecf0f1" font-family="Consolas">η_t = (Pt · V) / Wi  (Total)</text>
        <text x="515" y="123" text-anchor="middle" font-size="13" fill="#abebc6" font-family="Consolas">η_s = (Ps · V) / Wi  (Static)</text>
        <rect x="30" y="155" width="640" height="65" fill="#111" stroke="#f39c12" rx="4"/>
        <text x="350" y="178" text-anchor="middle" font-size="11" fill="#fff">Wi = Fan power input at shaft (軸功率, Watts). Notice that <strong>η_t &gt; η_s</strong> always, because Pt = Ps + Pv.</text>
        <text x="350" y="200" text-anchor="middle" font-size="10" fill="#f1c40f">If static pressure is converted to useful velocity (e.g. diffusers), total efficiency reflects true thermodynamic performance.</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 3: Aerodynamic air power output equation (Wo = Pt · V) and ratio definitions for total vs static efficiencies',
    sections: [
      {
        title: 'Aerodynamic Power Output / 空氣輸出功率',
        zh: '<p>理論上，對於不可壓縮流體的等熵壓縮過程，空氣獲得的機械能（空氣功率輸出 $W_o$）為[cite: 6]：</p><div class="formula-block">W_o = \dot{m} \int v \, dP = V \int dP = P_t \cdot V \quad \text{(Watts)}</div><p>其中 $P_t$ 為風機全壓 (Pa)，$V$ 為體積流量 ($m^3/s$)[cite: 6]。</p>',
        en: '<p>Theoretically, for isentropic compression of a constant-density fluid, fan air power output is[cite: 6]:</p><div class="formula-block">W_o = P_t \cdot V \quad \text{(Watts)}</div><p>where $P_t$ is fan total pressure in Pascals, and $V$ is volume flow rate in $m^3/s$[cite: 6].</p>'
      },
      {
        title: 'Total vs Static Efficiency / 全壓效率 vs 靜壓效率',
        zh: '<ul><li><strong>風機全壓效率 (Fan Total Efficiency, $\\eta_t$)</strong>[cite: 6]：$$\\eta_t = \\frac{\\text{Fan Power Output } W_o}{\\text{Shaft Power Input } W_i} = \\frac{P_t \\cdot V}{W_i}$$[cite: 6]</li><li><strong>風機靜壓效率 (Fan Static Efficiency, $\\eta_s$)</strong>[cite: 6]：$$\\eta_s = \\frac{P_s \\cdot V}{W_i}$$[cite: 6]</li><li>由於 $P_t = P_s + P_v$，在任何工況下永遠有 <strong>$\\eta_t > \\eta_s$</strong>[cite: 6]。</li></ul>',
        en: '<ul><li><strong>Fan Total Efficiency ($\\eta_t$)</strong>[cite: 6]: $\\eta_t = \\frac{P_t \\cdot V}{W_i}$[cite: 6].</li><li><strong>Fan Static Efficiency ($\\eta_s$)</strong>[cite: 6]: $\\eta_s = \\frac{P_s \\cdot V}{W_i}$[cite: 6].</li><li>Because $P_t = P_s + P_v$, <strong>$\\eta_t > \\eta_s$</strong> holds true under all conditions[cite: 6].</li></ul>'
      }
    ]
  },
  {
    id: 't4', icon: '4', title: 'The Fan Laws (Affinity Laws) & Speed/Density Changes',
    titleZh: '風機定律、三次方功率關係與 10% 提速效應',
    diagram: `<svg viewBox="0 0 740 280" xmlns="http://www.w3.org/2000/svg" width="100%">
      <g class="scada-unit" transform="translate(20, 20)">
        <rect x="0" y="25" width="700" height="235" fill="#243342" stroke="#34495e" stroke-width="2" rx="8"/>
        <text x="350" y="16" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#1abc9c">The Fan Affinity Laws &amp; The 10% Speed Increase Effect (風機定律比例關係)</text>
        <g transform="translate(30, 45)">
          <rect x="0" y="0" width="300" height="105" fill="#1a252f" stroke="#3498db" rx="4"/>
          <text x="150" y="22" text-anchor="middle" font-size="11" font-weight="bold" fill="#5dade2">Speed Variation (n1 ➔ n2)</text>
          <text x="20" y="45" font-size="10" fill="#ecf0f1">• Flow: V1 / V2 = (n1 / n2)¹</text>
          <text x="20" y="68" font-size="10" fill="#ecf0f1">• Total Pressure: Pt1 / Pt2 = (n1 / n2)²</text>
          <text x="20" y="91" font-size="10.5" fill="#f1c40f" font-weight="bold">• Power: W1 / W2 = (n1 / n2)³  (CUBIC!)</text>
        </g>
        <g transform="translate(370, 45)">
          <rect x="0" y="0" width="300" height="105" fill="#1a252f" stroke="#2ecc71" rx="4"/>
          <text x="150" y="22" text-anchor="middle" font-size="11" font-weight="bold" fill="#2ecc71">Density Variation (ρ1 ➔ ρ2)</text>
          <text x="20" y="45" font-size="10" fill="#ecf0f1">• Flow: V1 / V2 = 1 (Unchanged)</text>
          <text x="20" y="68" font-size="10" fill="#ecf0f1">• Total Pressure: Pt1 / Pt2 = (ρ1 / ρ2)¹</text>
          <text x="20" y="91" font-size="10" fill="#ecf0f1">• Power: W1 / W2 = (ρ1 / ρ2)¹</text>
        </g>
        <rect x="30" y="165" width="640" height="75" fill="#111" stroke="#e74c3c" stroke-width="2" rx="4"/>
        <text x="350" y="188" text-anchor="middle" font-size="12" fill="#fff" font-weight="bold">The Classical 10% Fan Speed Increase Impact (Slide 11 核心經驗法則):</text>
        <text x="350" y="210" text-anchor="middle" font-size="12" fill="#f1c40f" font-family="Consolas" font-weight="bold">Speed +10% (1.10) ➔ Flow +10% (1.10) | Pressure +21% (1.10² = 1.21) | Power +33% (1.10³ = 1.331)</text>
        <text x="350" y="228" text-anchor="middle" font-size="9.5" fill="#f5b7b1">Motor power demands rise cubically; beware of tripping the motor overcurrent protection!</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 4: Fan Affinity Laws: Proportional flow, quadratic pressure, and cubic power scaling with speed, illustrating the 10% speed vs 33% power surge rule',
    sections: [
      {
        title: 'Governing Fan Laws / 風機相似定律公式群',
        zh: '<p>當同一台風機在轉速變更或流體密度變化時，其性能遵循<strong>風機定律 (Fan Laws)</strong>[cite: 6]：</p><ul><li><strong>轉速變更關係（固定密度 $\\rho$）</strong>：<br>1. 體積流量與轉速成<strong>一次方正比</strong>：$\\frac{V_1}{V_2} = \\frac{n_1}{n_2}$[cite: 6]<br>2. 全壓與轉速成<strong>二次方正比</strong>：$\\frac{P_{t1}}{P_{t2}} = \\left(\\frac{n_1}{n_2}\\right)^2$[cite: 6]<br>3. 軸功率與轉速成<strong>三次方正比</strong>：$\\frac{W_1}{W_2} = \\left(\\frac{n_1}{n_2}\\right)^3$[cite: 6]</li><li><strong>密度變更關係（固定轉速 $n$）</strong>：風量保持不變；全壓與功率均與密度成一次方正比（$\\frac{P_{t1}}{P_{t2}} = \\frac{W_1}{W_2} = \\frac{\\rho_1}{\\rho_2}$）[cite: 6]。</li></ul>',
        en: '<p>The <strong>Fan Laws</strong> predict performance changes when operating conditions vary[cite: 6]:</p><ul><li><strong>Speed Variation</strong>: Volume flow $\\propto n^1$, Total Pressure $\\propto n^2$, Shaft Power $\\propto n^3$[cite: 6].</li><li><strong>Density Variation</strong>: Volume flow is independent of density; Total Pressure and Power $\\propto \\rho^1$[cite: 6].</li></ul>'
      },
      {
        title: 'The 10% Speed Surge Effect / 提速 10% 的工程後果',
        zh: '<div class="key-point"><strong>核心考點數值（Slide 11）：</strong> 若將風機轉速提高 <strong>10%</strong>（即 $n_2 = 1.10 n_1$）[cite: 6]：<br>• 風量增加：$10\\%$（$1.10$ 倍）[cite: 6]<br>• 全壓增加：<strong>$21\\%$</strong>（$1.10^2 = 1.21$ 倍）[cite: 6]<br>• 軸功率劇增：<strong>$33\\%$</strong>（$1.10^3 = 1.331$ 倍）[cite: 6]<br>工程警示：微調風量會導致電機功耗呈三次方暴增，現場調試極易燒毀電機或跳掣！</div>',
        en: '<div class="key-point"><strong>Rule of Thumb (Slide 11):</strong> A <strong>10% increase in fan speed</strong> results in[cite: 6]:<br>• <strong>10% increase</strong> in airflow rate ($1.10$)[cite: 6];<br>• <strong>21% increase</strong> in total pressure ($1.10^2 = 1.21$)[cite: 6];<br>• <strong>33% increase</strong> in power input ($1.10^3 = 1.331$)[cite: 6].<br>Caution: Motor power escalates cubically, risking motor overload!</div>'
      }
    ]
  },
  {
    id: 't5', icon: '5', title: 'Centrifugal Fan Blade Types: Forward, Backward & Radial',
    titleZh: '離心葉輪剖析：前傾、後傾、機翼型與防過載特性',
    diagram: `<svg viewBox="0 0 740 280" xmlns="http://www.w3.org/2000/svg" width="100%">
      <g class="scada-unit" transform="translate(15, 20)">
        <rect x="0" y="25" width="220" height="235" fill="#243342" stroke="#e74c3c" stroke-width="2" rx="6"/>
        <text x="110" y="16" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#e74c3c">Forward Curved (前傾葉片)</text>
        <circle cx="110" cy="80" r="30" fill="#1a252f" stroke="#e74c3c" stroke-width="2"/>
        <!-- Forward curve blades pointing with rotation -->
        <path d="M 100 52 Q 112 50 120 54 M 132 68 Q 138 78 136 88" stroke="#e74c3c" stroke-width="2.5"/>
        <text x="110" y="130" text-anchor="middle" font-size="10" fill="#fff" font-weight="bold">"Squirrel Cage" (鼠籠型)</text>
        <text x="110" y="150" text-anchor="middle" font-size="9" fill="#bdc3c7">• Smallest physical wheel size</text>
        <text x="110" y="170" text-anchor="middle" font-size="9" fill="#f5b7b1">• Lowest efficiency (~60%)</text>
        <text x="110" y="195" text-anchor="middle" font-size="9.5" fill="#e74c3c" font-weight="bold">OVERLOADING Power Curve!</text>
        <text x="110" y="215" text-anchor="middle" font-size="8.5" fill="#ecf0f1">Power continues to rise as flow grows;</text>
        <text x="110" y="230" text-anchor="middle" font-size="8.5" fill="#f1c40f">Must oversize motor to prevent burnout.</text>
      </g>
      <g class="scada-unit" transform="translate(255, 20)">
        <rect x="0" y="25" width="230" height="235" fill="#243342" stroke="#2ecc71" stroke-width="2" rx="6"/>
        <text x="115" y="16" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#2ecc71">Backward Inclined / Airfoil (後傾)</text>
        <circle cx="115" cy="80" r="30" fill="#1a252f" stroke="#2ecc71" stroke-width="2"/>
        <!-- Backward curved blades -->
        <path d="M 115 50 Q 102 60 95 72 M 138 72 Q 130 85 125 98" stroke="#2ecc71" stroke-width="3"/>
        <text x="115" y="130" text-anchor="middle" font-size="10" fill="#fff" font-weight="bold">Airfoil / Backward Curved</text>
        <text x="115" y="150" text-anchor="middle" font-size="9" fill="#abebc6">• Highest efficiency (80% - 85%)</text>
        <text x="115" y="170" text-anchor="middle" font-size="9" fill="#ecf0f1">• Higher operating RPM required</text>
        <text x="115" y="195" text-anchor="middle" font-size="9.5" fill="#2ecc71" font-weight="bold">NON-OVERLOADING Power Curve!</text>
        <text x="115" y="215" text-anchor="middle" font-size="8.5" fill="#ecf0f1">Power reaches peak and levels off;</text>
        <text x="115" y="230" text-anchor="middle" font-size="8.5" fill="#abebc6">Safe against motor burnout on free delivery.</text>
      </g>
      <g class="scada-unit" transform="translate(505, 20)">
        <rect x="0" y="25" width="220" height="235" fill="#243342" stroke="#f39c12" stroke-width="2" rx="6"/>
        <text x="110" y="16" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#f39c12">Radial Blade (徑向葉片)</text>
        <circle cx="110" cy="80" r="30" fill="#1a252f" stroke="#f39c12" stroke-width="2"/>
        <line x1="110" y1="50" x2="110" y2="70" stroke="#f39c12" stroke-width="2.5"/>
        <line x1="140" y1="80" x2="120" y2="80" stroke="#f39c12" stroke-width="2.5"/>
        <text x="110" y="130" text-anchor="middle" font-size="10" fill="#fff" font-weight="bold">Paddle Wheel (平板徑向)</text>
        <text x="110" y="150" text-anchor="middle" font-size="9" fill="#bdc3c7">• Moderate efficiency (~70%)</text>
        <text x="110" y="170" text-anchor="middle" font-size="9" fill="#ecf0f1">• Simple robust mechanical build</text>
        <text x="110" y="195" text-anchor="middle" font-size="9.5" fill="#f39c12" font-weight="bold">Self-Cleaning Characteristic</text>
        <text x="110" y="215" text-anchor="middle" font-size="8.5" fill="#ecf0f1">Material handling, sawdust, factory dust,</text>
        <text x="110" y="230" text-anchor="middle" font-size="8.5" fill="#bdc3c7">and heavy particulate exhausts.</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 5: Centrifugal blade comparisons: Forward curved (overloading power curve, lowest efficiency), Backward/Airfoil (non-overloading self-limiting power, highest efficiency), and Radial (material handling)',
    sections: [
      {
        title: 'Centrifugal Blade Geometries / 離心風機葉片形狀分類',
        zh: '<p>離心風機依葉片彎曲方向分為：<strong>前傾式 (Forward curved)</strong>、<strong>後傾式 (Backward inclined / curved / airfoil)</strong> 及 <strong>徑向式 (Radial blade / tip)</strong>[cite: 6]。</p>',
        en: '<p>Centrifugal fans are categorized by blade geometry: <strong>Forward curved</strong>, <strong>Backward inclined/curved/airfoil</strong>, and <strong>Radial blade/tip</strong>[cite: 6].</p>'
      },
      {
        title: 'Power Overloading vs Efficiency Comparison / 能效與功率過載特性對比',
        zh: '<ul><li><strong>後傾機翼型 (Airfoil / Backward curved)</strong>：<strong>全壓效率最高（可達 80%–85%）</strong>[cite: 6]。其功率-風量曲線具有<strong>非過載特性 (Non-overloading characteristic)</strong>，即功率達到峰值後隨風量進一步增加反而平緩下降，永不燒燬電機，是大型空調箱 (AHU) 的首選[cite: 6]。</li><li><strong>前傾式 (Forward curved)</strong>：葉輪直徑最小、轉速低且安靜，但<strong>效率最低（約 60%）</strong>[cite: 6]。具有<strong>過載特性 (Overloading curve)</strong>，風量越大軸功率直線飆升，若管網阻力小於預期會導致電機嚴重過載燒燬，必須選配較大餘量電機[cite: 6]。</li><li><strong>徑向式 (Radial)</strong>：自清潔抗磨損能力強，專門用於工業含塵、木屑及顆粒物排風[cite: 6]。</li></ul>',
        en: '<ul><li><strong>Backward curved / Airfoil</strong>: <strong>Highest efficiency (80%–85%)</strong> with a <strong>non-overloading power characteristic</strong> (power reaches a maximum and drops off), protecting the motor from burnouts[cite: 6].</li><li><strong>Forward curved</strong>: Compact and quiet at low speeds, but lowest efficiency (~60%) and an <strong>overloading power curve</strong> (power increases indefinitely with flow; requires larger motor margins)[cite: 6].</li><li><strong>Radial blade</strong>: Self-cleaning blades ideal for industrial exhausts carrying dust and particulates[cite: 6].</li></ul>'
      }
    ]
  },
  {
    id: 't6', icon: '6', title: 'Axial Fan Types: Tubeaxial, Vaneaxial & Reverse Operation',
    titleZh: '軸流風機構造、導葉靜壓轉換與樓梯防煙反轉運行',
    diagram: `<svg viewBox="0 0 740 280" xmlns="http://www.w3.org/2000/svg" width="100%">
      <g class="scada-unit" transform="translate(15, 20)">
        <rect x="0" y="25" width="340" height="235" fill="#243342" stroke="#3498db" stroke-width="2" rx="8"/>
        <text x="170" y="16" text-anchor="middle" font-size="12" font-weight="bold" fill="#3498db">Tubeaxial vs Vaneaxial Flow Straightening</text>
        <rect x="25" y="50" width="130" height="70" fill="#1a252f" stroke="#3498db" rx="4"/>
        <text x="90" y="75" text-anchor="middle" font-size="10" fill="#fff" font-weight="bold">Tubeaxial Fan</text>
        <text x="90" y="95" text-anchor="middle" font-size="8.5" fill="#bdc3c7">Impeller in tube, swirling exit</text>
        <rect x="180" y="50" width="140" height="70" fill="#1a252f" stroke="#2ecc71" rx="4"/>
        <text x="250" y="70" text-anchor="middle" font-size="10" fill="#fff" font-weight="bold">Vaneaxial Fan</text>
        <line x1="280" y1="50" x2="280" y2="120" stroke="#f1c40f" stroke-width="3" stroke-dasharray="4 2"/>
        <text x="250" y="90" text-anchor="middle" font-size="8" fill="#f1c40f">Guide Vanes</text>
        <text x="250" y="105" text-anchor="middle" font-size="8" fill="#abebc6">Pv converted to Ps</text>
        <rect x="20" y="135" width="300" height="110" fill="#111" stroke="#3498db" rx="4"/>
        <text x="170" y="155" text-anchor="middle" font-size="10.5" fill="#2ecc71" font-weight="bold">Vaneaxial Guide Vane Benefits (導流葉片好處):</text>
        <text x="170" y="175" text-anchor="middle" font-size="9" fill="#ecf0f1">• Downstream vanes straighten helical swirl into axial flow</text>
        <text x="170" y="195" text-anchor="middle" font-size="9" fill="#f1c40f">• Converts velocity pressure (Pv) into useful static pressure (Ps)</text>
        <text x="170" y="215" text-anchor="middle" font-size="9" fill="#ecf0f1">• Upstream vanes eliminate rotor leading-edge separation</text>
        <text x="170" y="235" text-anchor="middle" font-size="9" fill="#abebc6">• Highest efficiency and pressure among axial designs</text>
      </g>
      <g class="scada-unit" transform="translate(385, 20)">
        <rect x="0" y="25" width="340" height="235" fill="#243342" stroke="#e74c3c" stroke-width="2" rx="8"/>
        <text x="170" y="16" text-anchor="middle" font-size="12" font-weight="bold" fill="#e74c3c">Axial Fan in Reverse Operation (反向運轉特性)</text>
        <circle cx="170" cy="85" r="35" fill="#1a252f" stroke="#e74c3c" stroke-width="2"/>
        <path d="M 140 85 A 30 30 0 0 1 200 85" fill="none" stroke="#f1c40f" stroke-width="3"/>
        <polygon points="135,85 145,78 145,92" fill="#f1c40f"/>
        <text x="170" y="90" text-anchor="middle" font-size="10" fill="#fff" font-weight="bold">Reversed Rotation</text>
        <rect x="20" y="135" width="300" height="110" fill="#111" stroke="#e74c3c" rx="4"/>
        <text x="170" y="155" text-anchor="middle" font-size="10.5" fill="#f5b7b1" font-weight="bold">Severe Flow Penalty when Reversed:</text>
        <text x="170" y="178" text-anchor="middle" font-size="10.5" fill="#f1c40f" font-weight="bold">Delivers only 60% – 70% of original flow!</text>
        <text x="170" y="198" text-anchor="middle" font-size="9" fill="#ecf0f1">• Without guide vanes: 60% to 70% flow achieved</text>
        <text x="170" y="215" text-anchor="middle" font-size="9" fill="#bdc3c7">• WITH guide vanes: flow performance is EVEN WORSE</text>
        <text x="170" y="235" text-anchor="middle" font-size="9" fill="#2ecc71">Primary Application: Staircase pressurization &amp; smoke control</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 6: Axial fan advancements: Vaneaxial flow straightening (converting Pv to Ps) and the 60%–70% capacity penalty during reverse operation (staircase pressurization)',
    sections: [
      {
        title: 'Tubeaxial vs Vaneaxial Fans / 筒形軸流風機 vs 導葉軸流風機',
        zh: '<ul><li><strong>筒形軸流風機 (Tubeaxial fan)</strong>：將葉輪裝於圓筒外殼內，縮小了葉片頂部間隙 (tip clearance)，轉速與全壓均高於普通螺旋槳風機[cite: 6]。</li><li><strong>導葉軸流風機 (Vaneaxial fan)</strong>：在葉輪<strong>下游加裝彎曲導流葉片 (guide vanes)</strong>，消除氣流的螺旋旋轉運動，將部分動壓 ($P_v$) 轉化為靜壓 ($P_s$)[cite: 6]。若導葉安裝在上游，則可引導氣流無分離地平滑進入葉輪前緣，進一步<strong>提高壓力、提升能效並大幅降低噪聲</strong>[cite: 6]。</li></ul>',
        en: '<ul><li><strong>Tubeaxial fan</strong>: Impeller mounted in a cylindrical casing with reduced tip clearance, operating at higher tip speeds and pressure than propeller fans[cite: 6].</li><li><strong>Vaneaxial fan</strong>: Equipped with downstream <strong>curved guide vanes</strong> that straighten airflow and convert dynamic velocity pressure ($P_v$) into static pressure ($P_s$)[cite: 6]. Upstream vanes prevent flow separation, boosting efficiency and minimizing noise[cite: 6].</li></ul>'
      },
      {
        title: 'Reverse Operation Characteristics / 軸流風機反向運行特性',
        zh: '<p>當軸流風機反向旋轉時，氣流輸送方向亦隨之反轉[cite: 6]。</p><div class="key-point"><strong>反向運行風量折減（Slide 21）：</strong><br>• 在<strong>無導流葉片</strong>時，反轉風量僅能達到原額定正向風量的 <strong>60% 至 70%</strong>[cite: 6]；<br>• 若存在<strong>導葉</strong>，導葉此時成為嚴重氣動阻礙，反向送風量<strong>更加惡劣 (even worse)</strong>[cite: 6]；<br>• <strong>工程典型應用</strong>：防煙樓梯間加壓送風與緊急排煙系統 (Staircase pressurization & ventilation)[cite: 6]。</div>',
        en: '<p>Reversing motor rotation reverses airflow direction[cite: 6].</p><div class="key-point"><strong>Reverse Performance Penalty (Slide 21):</strong><br>• Without guide vanes, only <strong>60% to 70%</strong> of design forward airflow is delivered[cite: 6];<br>• With guide vanes, reverse performance is <strong>even worse</strong> due to vane aerodynamic stalling[cite: 6];<br>• <strong>Common application</strong>: Staircase pressurization and emergency smoke relief[cite: 6].</div>'
      }
    ]
  },
  {
    id: 't7', icon: '7', title: 'Airflow Control: Fan Speed (VFD), IGV & Blade Pitch',
    titleZh: '風量調控手段：變頻驅動、入口導葉與葉片變距',
    diagram: `<svg viewBox="0 0 740 260" xmlns="http://www.w3.org/2000/svg" width="100%">
      <g class="scada-unit" transform="translate(20, 20)">
        <rect x="0" y="25" width="700" height="215" fill="#243342" stroke="#34495e" stroke-width="2" rx="8"/>
        <text x="350" y="16" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#1abc9c">Three Fan Capacity Modulation Methods (風量三大調節途徑)</text>
        <rect x="30" y="50" width="195" height="110" fill="#1a252f" stroke="#2ecc71" rx="4"/>
        <text x="127" y="75" text-anchor="middle" font-size="11" font-weight="bold" fill="#2ecc71">1. Fan Speed (VFD)</text>
        <text x="127" y="95" text-anchor="middle" font-size="10" fill="#fff">變頻調速 (Inverter)</text>
        <text x="127" y="125" text-anchor="middle" font-size="9" fill="#f1c40f" font-weight="bold">★ MOST Efficient Method!</text>
        <text x="127" y="145" text-anchor="middle" font-size="8.5" fill="#ecf0f1">Power scales cubically (W ∝ n³)</text>
        <rect x="250" y="50" width="200" height="110" fill="#1a252f" stroke="#3498db" rx="4"/>
        <text x="350" y="75" text-anchor="middle" font-size="11" font-weight="bold" fill="#3498db">2. Inlet Guide Vanes (IGV)</text>
        <text x="350" y="95" text-anchor="middle" font-size="10" fill="#fff">入口導葉調節</text>
        <text x="350" y="120" text-anchor="middle" font-size="8.5" fill="#bdc3c7">Turns simultaneously by linkage</text>
        <text x="350" y="135" text-anchor="middle" font-size="8.5" fill="#5dade2">Common in centrifugal fans</text>
        <text x="350" y="150" text-anchor="middle" font-size="8.5" fill="#e74c3c">NOT suitable for axial fans</text>
        <rect x="475" y="50" width="195" height="110" fill="#1a252f" stroke="#f39c12" rx="4"/>
        <text x="572" y="75" text-anchor="middle" font-size="11" font-weight="bold" fill="#f39c12">3. Blade Pitch Angle</text>
        <text x="572" y="95" text-anchor="middle" font-size="10" fill="#fff">動葉角度調節 (變距)</text>
        <text x="572" y="120" text-anchor="middle" font-size="8.5" fill="#bdc3c7">Varies pitch angle (-8° to +32°)</text>
        <text x="572" y="138" text-anchor="middle" font-size="8.5" fill="#feca57">Adjusts volume flow dynamically</text>
        <text x="572" y="152" text-anchor="middle" font-size="8.5" fill="#ecf0f1">Exclusively for AXIAL fans</text>
        <rect x="30" y="175" width="640" height="50" fill="#111" stroke="#1abc9c" rx="3"/>
        <text x="350" y="198" text-anchor="middle" font-size="10.5" fill="#f1c40f">Energy Conservation Rule: VFD speed control is the most energy-efficient; IGV is superior to duct throttling dampers.</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 7: Three primary fan airflow control strategies: Variable frequency drives (most efficient), Inlet guide vanes (centrifugal), and Blade pitch control (axial)',
    sections: [
      {
        title: 'Three Modulation Methods / 三大風量調節機制',
        zh: '<ol><li><strong>風機轉速調節 (Fan speed modulation)</strong>：採用變頻驅動器 (VFD / Inverters: 變壓、變頻、PWM 脈寬調製) 或雙速/三速電機改變轉速[cite: 6]。<strong>係所有風量調節手段中最節能的高效方式</strong>（軸功率按轉速三次方劇減）[cite: 6]；</li><li><strong>入口導流葉片調節 (Inlet guide vane, IGV)</strong>：在離心風機入口加裝由機械連桿連動的一組旋轉導葉，旋轉導葉產生預旋繞流從而調小風量[cite: 6]。<strong>廣泛應用於離心風機，但絕對不適用於軸流風機</strong>（能效顯著優於在管網加裝節流風閥）[cite: 6]；</li><li><strong>葉片角度調節 (Blade angle adjustment / Pitch modulation)</strong>：直接調校<strong>軸流風機</strong>葉片的安裝角度（常見範圍 $-8^\circ$ 至 $+32^\circ$），改變動態升力以控制風量[cite: 6]。</li></ol>',
        en: '<ol><li><strong>Fan speed modulation</strong>: Utilizing VFDs (adjustable-voltage, adjustable-current, or PWM inverters) or multi-speed motors[cite: 6]. <strong>The most energy-efficient airflow control method</strong>[cite: 6].</li><li><strong>Inlet guide vane (IGV) modulation</strong>: Adjusts angular orientation of motorized mechanical vanes at the centrifugal fan inlet[cite: 6]. <strong>Common in centrifugal fans, but not suitable for axial fans</strong>[cite: 6].</li><li><strong>Blade angle adjustment</strong>: Modulates the pitch angle of <strong>axial fan</strong> blades to vary flow dynamically[cite: 6].</li></ol>'
      }
    ]
  },
  {
    id: 't8', icon: '8', title: 'Fan Operating Point & Selection Criteria',
    titleZh: '風機-管網工況點確定與工程選型考量',
    diagram: `<svg viewBox="0 0 740 280" xmlns="http://www.w3.org/2000/svg" width="100%">
      <g class="scada-unit" transform="translate(20, 20)">
        <rect x="0" y="25" width="700" height="235" fill="#243342" stroke="#34495e" stroke-width="2" rx="8"/>
        <text x="350" y="16" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#1abc9c">Fan Operating Point (工況點 P) &amp; Five Field Deviation Factors</text>
        <line x1="60" y1="200" x2="640" y2="200" stroke="#ecf0f1" stroke-width="2"/>
        <line x1="60" y1="200" x2="60" y2="40" stroke="#ecf0f1" stroke-width="2"/>
        <text x="645" y="205" font-size="10" fill="#ecf0f1">Flow Rate V (m³/s)</text>
        <text x="50" y="35" font-size="10" fill="#ecf0f1">Pressure ΔP (Pa)</text>
        <!-- System Resistance Curve ΔP = R·V² -->
        <path d="M 60 200 Q 220 190, 360 110 T 500 40" fill="none" stroke="#e74c3c" stroke-width="3"/>
        <text x="490" y="30" font-size="10.5" fill="#e74c3c" font-weight="bold">System Curve ΔP = R·V²</text>
        <!-- Fan Performance Curve -->
        <path d="M 60 90 Q 200 80, 360 110 T 560 195" fill="none" stroke="#3498db" stroke-width="3"/>
        <text x="180" y="75" font-size="10.5" fill="#3498db" font-weight="bold">Fan Performance Curve</text>
        <circle cx="360" cy="110" r="7" fill="#f1c40f"/>
        <text x="375" y="105" font-size="11" fill="#f1c40f" font-weight="bold">Operating Point P (Vp, ΔP)</text>
        <rect x="25" y="215" width="650" height="35" fill="#111" stroke="#1abc9c" rx="3"/>
        <text x="350" y="237" text-anchor="middle" font-size="9.5" fill="#ecf0f1">Why actual resistance deviates from design: (1) Calculation error, (2) Excess safety factor, (3) Poor site workmanship, (4) Filter dust, (5) Throttled diffusers.</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 8: Fan system operating point P determined by the intersection of fan aerodynamic curve and duct quadratic resistance curve (ΔP = R·V²)',
    sections: [
      {
        title: 'System Operating Point / 工況點確立',
        zh: '<p>風機工況點 $P$ 係風機性能曲線與管網阻力曲線（$\\Delta P = R \\cdot V^2$）的唯一交點，確定了風機在該系統中實際輸出的風量 $V_p$ 與全壓 $\\Delta P$[cite: 6]。</p>',
        en: '<p>The <strong>system operating point P</strong> is the intersection of the fan aerodynamic performance curve and the duct system resistance curve ($\\Delta P = R V^2$)[cite: 6].</p>'
      },
      {
        title: 'Five Causes of Field Deviation / 實際阻力偏離設計的五大原因',
        zh: '<ol><li>管網沿程與局部阻力<strong>計算誤差</strong>[cite: 6]；</li><li>設計人為疊加<strong>過大的安全余量 (Safety factors)</strong>[cite: 6]；</li><li>地盤現場<strong>安裝施工不良</strong>（過度扭曲、未平整展開、漏風嚴重）[cite: 6]；</li><li>未給初中效過濾器積塵阻力預留合理餘量[cite: 6]；</li><li>建築使用人員自行關閉部分散流器/格柵百葉風閥造成管網阻力劇增[cite: 6]。</li></ol>',
        en: '<ol><li>Pressure loss calculation errors[cite: 6];</li><li>Excessive safety factor allowances added on[cite: 6];</li><li>Improper workmanship during site ductwork installation[cite: 6];</li><li>Inadequate allowance for air filter dirty resistance[cite: 6];</li><li>Occupants tampering with or throttling terminal diffuser dampers[cite: 6].</li></ol>'
      }
    ]
  },
  {
    id: 't9', icon: '9', title: 'Fans in Series vs Parallel Operation',
    titleZh: '風機串聯增壓 vs 並聯倍流與止回風閥配置',
    diagram: `<svg viewBox="0 0 740 280" xmlns="http://www.w3.org/2000/svg" width="100%">
      <g class="scada-unit" transform="translate(15, 20)">
        <rect x="0" y="25" width="340" height="235" fill="#243342" stroke="#3498db" stroke-width="2" rx="8"/>
        <text x="170" y="16" text-anchor="middle" font-size="12" font-weight="bold" fill="#3498db">Fans in Series (風機串聯 — 全壓疊加)</text>
        <rect x="40" y="60" width="75" height="40" fill="#1b4f72" stroke="#3498db" rx="4"/>
        <text x="77" y="85" text-anchor="middle" font-size="9" fill="#fff" font-weight="bold">Fan 1 (ΔP1)</text>
        <path d="M 115 80 L 180 80" stroke="#00d2d3" stroke-width="3" class="flow-air-supply"/>
        <rect x="180" y="60" width="75" height="40" fill="#1b4f72" stroke="#3498db" rx="4"/>
        <text x="217" y="85" text-anchor="middle" font-size="9" fill="#fff" font-weight="bold">Fan 2 (ΔP2)</text>
        <path d="M 255 80 L 305 80" stroke="#00d2d3" stroke-width="3" class="flow-air-supply"/>
        <rect x="20" y="130" width="300" height="115" fill="#111" stroke="#3498db" rx="4"/>
        <text x="170" y="155" text-anchor="middle" font-size="12" fill="#f1c40f" font-family="Consolas" font-weight="bold">ΔP_total = ΔP1 + ΔP2   |   V_total = V1 = V2</text>
        <text x="170" y="180" text-anchor="middle" font-size="9.5" fill="#ecf0f1">• Airflow rate remains the same</text>
        <text x="170" y="200" text-anchor="middle" font-size="9.5" fill="#ecf0f1">• Total pressure is the sum of two fans</text>
        <text x="170" y="225" text-anchor="middle" font-size="9" fill="#abebc6">Ideal for high-resistance steep duct systems</text>
      </g>
      <g class="scada-unit" transform="translate(385, 20)">
        <rect x="0" y="25" width="340" height="235" fill="#243342" stroke="#2ecc71" stroke-width="2" rx="8"/>
        <text x="170" y="16" text-anchor="middle" font-size="12" font-weight="bold" fill="#2ecc71">Fans in Parallel (風機並聯 — 風量加倍)</text>
        <rect x="40" y="50" width="75" height="35" fill="#145a32" stroke="#2ecc71" rx="4"/>
        <text x="77" y="72" text-anchor="middle" font-size="9" fill="#fff" font-weight="bold">Fan 1 (V1)</text>
        <rect x="40" y="95" width="75" height="35" fill="#145a32" stroke="#2ecc71" rx="4"/>
        <text x="77" y="117" text-anchor="middle" font-size="9" fill="#fff" font-weight="bold">Fan 2 (V2)</text>
        <rect x="135" y="52" width="20" height="30" fill="#78281f" stroke="#e74c3c"/>
        <text x="145" y="70" text-anchor="middle" font-size="7" fill="#fff">NRD</text>
        <rect x="135" y="97" width="20" height="30" fill="#78281f" stroke="#e74c3c"/>
        <text x="145" y="115" text-anchor="middle" font-size="7" fill="#fff">NRD</text>
        <path d="M 155 67 L 220 67 L 220 112 L 290 112 M 155 112 L 290 112" fill="none" stroke="#2ecc71" stroke-width="3" class="flow-air-supply"/>
        <rect x="20" y="145" width="300" height="100" fill="#111" stroke="#2ecc71" rx="4"/>
        <text x="170" y="168" text-anchor="middle" font-size="12" fill="#f1c40f" font-family="Consolas" font-weight="bold">V_total = V1 + V2 = 2 · Vw   |   ΔP = same</text>
        <text x="170" y="190" text-anchor="middle" font-size="9.5" fill="#e74c3c" font-weight="bold">Non-Return Damper (NRD) MANDATORY!</text>
        <text x="170" y="210" text-anchor="middle" font-size="9" fill="#ecf0f1">Prevents reverse backflow through idle fan</text>
        <text x="170" y="230" text-anchor="middle" font-size="8.5" fill="#bdc3c7">Suited for flat, low-resistance duct networks</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 9: Multi-fan configurations: Series connection doubles total pressure across steep systems; Parallel connection doubles flow rate and requires non-return backflow dampers',
    sections: [
      {
        title: 'Fans in Series / 風機串聯運行',
        zh: '<p>當兩台風機串聯時，<strong>風量維持恆定，總壓升為兩台風機全壓之代數和</strong>[cite: 6]：</p><div class="formula-block">\Delta P_c = \Delta P_1 + \Delta P_2, \quad V_c = V_1 = V_2</div><p>適用於長途高阻力（陡峭特性曲線）之送排風管路[cite: 6]。</p>',
        en: '<p>When two fans operate in series, the total pressure increases by summing the individual pressures while maintaining constant airflow[cite: 6]:</p><div class="formula-block">\Delta P_c = \Delta P_1 + \Delta P_2, \quad V_c = V_1 = V_2</div>'
      },
      {
        title: 'Fans in Parallel / 風機並聯運行與防倒灌',
        zh: '<p>當兩台相同風機並聯時，在相同壓降下<strong>風量加倍</strong>（$V_t = 2 V_w$）[cite: 6]。</p><div class="key-point"><strong>必須加裝止回風閥 (Non-Return Damper, NRD)：</strong> 每個並聯風機出口端必須設止回風閥，防止當其中一台風機因故障停機時，運行中風機將高壓空氣沿停運風機倒灌回流造成短路循環[cite: 6]。</div>',
        en: '<p>When two fans run in parallel, airflow rate doubles ($V_t = 2 V_w$) across identical pressures[cite: 6].</p><div class="key-point"><strong>Non-return dampers (NRD)</strong> are mandatory at fan discharges to prevent reverse backflow when only one fan is in operation[cite: 6].</div>'
      }
    ]
  },
  {
    id: 't10', icon: '10', title: 'Total & Static Pressure Distribution across an AHU System',
    titleZh: '空調風道全壓與靜壓沿程分佈分析',
    diagram: `<svg viewBox="0 0 740 300" xmlns="http://www.w3.org/2000/svg" width="100%">
      <g class="scada-unit" transform="translate(20, 20)">
        <rect x="0" y="25" width="700" height="255" fill="#243342" stroke="#34495e" stroke-width="2" rx="8"/>
        <text x="350" y="16" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#1abc9c">Pressure Gradient across Central AHU System (空調箱全壓與靜壓沿程水力坡降)</text>
        <!-- Atmospheric Reference Line (0 Pa) -->
        <line x1="30" y1="120" x2="670" y2="120" stroke="#ecf0f1" stroke-width="1.5" stroke-dasharray="6 3"/>
        <text x="50" y="112" font-size="9" fill="#ecf0f1">Atmospheric Datum (Patm = 0 Pa)</text>
        <!-- Total pressure line -->
        <path d="M 60 120 L 140 140 L 220 155 L 290 165 L 340 190 L 380 215 L 380 50 L 440 60 L 520 75 L 640 120" fill="none" stroke="#e74c3c" stroke-width="3"/>
        <text x="400" y="45" font-size="10.5" fill="#e74c3c" font-weight="bold">Total Pressure Line Pt (全壓線)</text>
        <!-- Static pressure line -->
        <path d="M 60 120 L 140 160 L 220 175 L 290 185 L 340 220 L 380 245 L 380 75 L 440 85 L 520 100 L 640 120" fill="none" stroke="#3498db" stroke-width="2.5" stroke-dasharray="4 2"/>
        <text x="400" y="90" font-size="10.5" fill="#3498db" font-weight="bold">Static Pressure Line Ps (靜壓線)</text>
        <!-- AHU Components schematic at bottom -->
        <rect x="290" y="225" width="35" height="45" fill="#78281f" stroke="#e74c3c"/>
        <text x="307" y="250" text-anchor="middle" font-size="7.5" fill="#fff">Filter</text>
        <rect x="330" y="225" width="35" height="45" fill="#1b4f72" stroke="#3498db"/>
        <text x="347" y="250" text-anchor="middle" font-size="7.5" fill="#fff">Coil</text>
        <circle cx="380" cy="247" r="14" fill="#16a085"/>
        <text x="380" y="251" text-anchor="middle" font-size="7.5" fill="#fff">Fan</text>
        <text x="180" y="195" text-anchor="middle" font-size="10" fill="#5dade2" font-weight="bold">Suction Side: NEGATIVE (負壓區)</text>
        <text x="520" y="65" text-anchor="middle" font-size="10" fill="#f5b7b1" font-weight="bold">Discharge Side: POSITIVE (正壓區)</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 10: Pressure distribution profile along a central AHU: Negative suction pressures across return ducts, filters, and coils, followed by a massive fan pressure rise into positive discharge ducts',
    sections: [
      {
        title: 'Pressure Gradients in Ventilation Systems / 全壓與靜壓水力坡降',
        zh: '<p>如 Slide 31 所示，空調風道系統的全壓與靜壓隨流動呈現鮮明的階梯梯度分佈[cite: 6]：</p><ul><li><strong>吸風側（負壓區 Suction Side）</strong>：從室內回風口開始，全壓和靜壓均為負值[cite: 6]。氣流每經過直管段摩擦、彎頭變徑及 <strong>過濾器 (Filter)、冷熱盤管 (Coil)</strong> 時，全壓與靜壓均發生急遽下跌，在風機吸入口達到<strong>全系統最低負壓點</strong>[cite: 6]。</li><li><strong>風機本體 (Fan)</strong>：電機做功使動壓與靜壓瞬間躍升，全壓提升量即為風機全壓 $P_{to} - P_{ti}$[cite: 6]。</li><li><strong>送風側（正壓區 Discharge Side）</strong>：風機出口處為最高正壓點，隨後經送風幹管、支管阻力逐漸消耗，最終在房間送風天花散流器出口釋放，歸零至室內基準大氣壓[cite: 6]。</li></ul>',
        en: '<p>As mapped in Slide 31, pressures evolve across three distinct zones[cite: 6]:</p><ul><li><strong>Suction Side (Negative)</strong>: Pressures are below atmospheric datum; steep drops occur across straight ducts, bends, <strong>air filters, and cooling coils</strong>, reaching a minimum depression at the fan inlet[cite: 6].</li><li><strong>The Fan</strong>: Provides instantaneous total pressure rise ($P_{to} - P_{ti}$)[cite: 6].</li><li><strong>Discharge Side (Positive)</strong>: Pressures become strongly positive, dissipating along supply ducts until exhausting to atmospheric room level through ceiling diffusers[cite: 6].</li></ul>'
      }
    ]
  },
  {
    id: 't11', icon: '11', title: 'Duct Frictional Losses, Darcy Formula & Equivalent Diameter',
    titleZh: '達西摩擦阻力公式、Moody 圖與 Huebscher 等效直徑',
    diagram: `<svg viewBox="0 0 740 280" xmlns="http://www.w3.org/2000/svg" width="100%">
      <g class="scada-unit" transform="translate(20, 20)">
        <rect x="0" y="25" width="700" height="235" fill="#243342" stroke="#34495e" stroke-width="2" rx="8"/>
        <text x="350" y="16" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#1abc9c">Duct Friction Loss &amp; Equivalent Diameter Formulations (風管水力阻力公式)</text>
        <rect x="30" y="45" width="310" height="75" fill="#1a252f" stroke="#3498db" rx="4"/>
        <text x="185" y="68" text-anchor="middle" font-size="11" font-weight="bold" fill="#5dade2">Darcy-Weisbach Circular Duct Equation</text>
        <text x="185" y="98" text-anchor="middle" font-size="15" fill="#f1c40f" font-family="Consolas" font-weight="bold">ΔP = f · (L / D) · (ρ · u² / 2)</text>
        <rect x="360" y="45" width="310" height="75" fill="#1a252f" stroke="#2ecc71" rx="4"/>
        <text x="515" y="68" text-anchor="middle" font-size="11" font-weight="bold" fill="#2ecc71">Hydraulic Diameter for Same Velocity</text>
        <text x="515" y="98" text-anchor="middle" font-size="15" fill="#f1c40f" font-family="Consolas" font-weight="bold">Deq = (2 · a · b) / (a + b)</text>
        <rect x="30" y="130" width="640" height="115" fill="#111" stroke="#f39c12" rx="4"/>
        <text x="350" y="152" text-anchor="middle" font-size="11.5" fill="#fff" font-weight="bold">Huebscher Equation (1984) — Equal Airflow &amp; Equal Friction Loss (同風量等阻直徑):</text>
        <text x="350" y="180" text-anchor="middle" font-size="17" fill="#f1c40f" font-family="Consolas" font-weight="bold">Deq,f = 1.30 · [ (a · b)^0.625 / (a + b)^0.25 ]</text>
        <text x="350" y="205" text-anchor="middle" font-size="9.5" fill="#ecf0f1">Standard Air Reynolds Number: Re = 66.4 · D · u | Galvanized steel roughness ε = 0.15 mm.</text>
        <text x="350" y="225" text-anchor="middle" font-size="9.5" fill="#bdc3c7">Flat Oval Duct Formulation: Deq,f = 1.55 · A^0.625 / Pm^0.25 (where A = area, Pm = perimeter).</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 11: Governing fluid friction laws: Darcy-Weisbach circular duct friction, hydraulic mean diameter (equal velocity), and the classic Huebscher formula (equal flow and equal friction)',
    sections: [
      {
        title: 'Darcy-Weisbach Equation / 達西-魏斯巴赫沿程阻力公式',
        zh: '<p>圓形風管不可壓縮流體湍流流動的沿程全壓損失由達西公式計算[cite: 6]：</p><div class="formula-block">\Delta P = f \frac{L}{D} \frac{\rho u^2}{2} \quad \text{(Pa)}</div><p>其中 $f$ 為摩擦阻力系數（由雷諾數 $Re$ 與絕對粗糙度 $\\epsilon$ 查 Moody 圖確定）[cite: 6]；對於標準空氣，雷諾數簡化為 $Re = 66.4 \\cdot D \\cdot u$；鍍鋅鋼板風管粗糙度取 $\\epsilon = 0.15\\text{ mm}$[cite: 6]。</p>',
        en: '<p>For turbulent flow in circular ducts, pressure loss is given by Darcy\'s equation[cite: 6]:</p><div class="formula-block">\Delta P = f \frac{L}{D} \frac{\rho u^2}{2} \quad \text{(Pa)}</div><p>where $f$ is friction factor derived from Moody Chart via $Re$ and $\\epsilon$ ($\Re = 66.4Du$, $\\epsilon = 0.15\\text{ mm}$ for galvanized steel)[cite: 6].</p>'
      },
      {
        title: 'Equivalent Diameters (Same Velocity vs Huebscher Equal Flow) / 兩種等效直徑',
        zh: '<ul><li><strong>相同風速等效水力直徑 ($D_{eq}$)</strong>[cite: 6]：$$D_{eq} = \\frac{4 \\times \\text{Area}}{\\text{Perimeter}} = \\frac{2ab}{a+b}$$[cite: 6]</li><li><strong>Huebscher (1984) 等風量等阻力等效直徑 ($D_{eq,f}$)</strong>：矩形風管轉為圓形風管在<strong>風量相同且每米摩擦阻力完全相同</strong>時的工程換算式[cite: 6]：<div class="formula-block">D_{eq,f} = 1.30 \frac{(ab)^{0.625}}{(a+b)^{0.25}}</div>[cite: 6]</li><li>扁圓風管 (Flat oval duct) 換算式：$D_{eq,f} = \\frac{1.55 A^{0.625}}{P_m^{0.25}}$[cite: 6]。</li></ul>',
        en: '<ul><li><strong>Hydraulic diameter for same velocity</strong>: $D_{eq} = \\frac{4A}{P} = \\frac{2ab}{a+b}$[cite: 6].</li><li><strong>Huebscher (1984) formula for equal volume flow and equal friction</strong>: Converts rectangular to circular equivalent[cite: 6]:<div class="formula-block">D_{eq,f} = 1.30 \frac{(ab)^{0.625}}{(a+b)^{0.25}}</div>[cite: 6]</li><li><strong>Flat oval duct</strong>: $D_{eq,f} = \\frac{1.55 A^{0.625}}{P_m^{0.25}}$[cite: 6].</li></ul>'
      }
    ]
  },
  {
    id: 't12', icon: '12', title: 'Dynamic Losses in Fittings & Thermal/Acoustic Insulation',
    titleZh: '局部阻力系數 Co、風速分級與防結露保溫隔氣層',
    diagram: `<svg viewBox="0 0 740 280" xmlns="http://www.w3.org/2000/svg" width="100%">
      <g class="scada-unit" transform="translate(20, 20)">
        <rect x="0" y="25" width="700" height="235" fill="#243342" stroke="#34495e" stroke-width="2" rx="8"/>
        <text x="350" y="16" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#1abc9c">Fitting Dynamic Losses &amp; Duct Insulation Structure (局部阻力與風管保溫層構造)</text>
        <g transform="translate(30, 45)">
          <rect x="0" y="0" width="300" height="95" fill="#1a252f" stroke="#3498db" rx="4"/>
          <text x="150" y="22" text-anchor="middle" font-size="11" font-weight="bold" fill="#5dade2">Dynamic Fitting Loss Equation</text>
          <text x="150" y="48" text-anchor="middle" font-size="14" fill="#f1c40f" font-family="Consolas" font-weight="bold">ΔP = Co · (ρ · uo² / 2)</text>
          <text x="150" y="70" text-anchor="middle" font-size="9.5" fill="#ecf0f1">ΔP = Co × Velocity Pressure (Pv)</text>
          <text x="150" y="88" text-anchor="middle" font-size="8.5" fill="#bdc3c7">Co = Local loss coefficient (CIBSE C4 / ASHRAE)</text>
        </g>
        <g transform="translate(370, 45)">
          <rect x="0" y="0" width="300" height="95" fill="#1a252f" stroke="#2ecc71" rx="4"/>
          <text x="150" y="22" text-anchor="middle" font-size="11" font-weight="bold" fill="#2ecc71">Duct Air Velocity Classification</text>
          <text x="20" y="48" font-size="10.5" fill="#fff">• <strong>Low Velocity Duct</strong>: u &lt; 10 m/s</text>
          <text x="20" y="72" font-size="10.5" fill="#f1c40f">• <strong>High Velocity Duct</strong>: 10 m/s &lt; u &lt; 15 m/s</text>
        </g>
        <rect x="30" y="150" width="640" height="90" fill="#111" stroke="#e74c3c" rx="4"/>
        <text x="350" y="172" text-anchor="middle" font-size="11" fill="#fff" font-weight="bold">Thermal &amp; Acoustic Insulation Construction (保溫與防結露設計):</text>
        <text x="350" y="195" text-anchor="middle" font-size="10" fill="#ecf0f1">• Forms: External duct wrap, internal duct liner (dual thermal + acoustic), and fiberglass duct board.</text>
        <text x="350" y="215" text-anchor="middle" font-size="10.5" fill="#f1c40f" font-weight="bold">• Vapour Barrier (Aluminum Foil) MUST be on the OUTSIDE (WARM side) of insulation!</text>
        <text x="350" y="232" text-anchor="middle" font-size="8.5" fill="#bdc3c7">Prevents ambient humidity from penetrating cold insulation and condensing into liquid water.</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 12: Fitting dynamic loss formula, low vs high velocity classification limits, and the vapour barrier installation rule on the warm exterior side',
    sections: [
      {
        title: 'Dynamic Pressure Losses in Fittings / 管件局部阻力計算',
        zh: '<p>氣流通過彎頭、三通、變徑管等管件時的局部阻力損失由局部阻力系數 $C_o$ 乘以參考截面動壓確定[cite: 6]：</p><div class="formula-block">\Delta P = C_o \times \text{Velocity Pressure} = C_o \frac{\rho u_o^2}{2} \quad \text{(Pa)}</div><p>三通匯流或分流時，分為直通端 ($c,s$) 與支管端 ($c,b$) 兩個專項阻力系數計算[cite: 6]。</p>',
        en: '<p>Dynamic pressure losses through fittings are calculated by multiplying local loss coefficient $C_o$ by reference velocity pressure[cite: 6]:</p><div class="formula-block">\Delta P = C_o \frac{\rho u_o^2}{2}</div>'
      },
      {
        title: 'Velocity Classes & Thermal Insulation / 風速分級與防結露保溫',
        zh: '<ul><li><strong>低速風管系統 (Low velocity)</strong>：風速 <strong>$u < 10\\text{ m/s}$</strong>（一般民用空調主幹管）[cite: 6]；</li><li><strong>高速風管系統 (High velocity)</strong>：風速 <strong>$10\\text{ m/s} < u < 15\\text{ m/s}$</strong>[cite: 6]；</li><li><strong>保溫隔氣層黃金法則</strong>：風管內襯 (Duct liner) 同時具備<strong>保溫與消音</strong>雙重功能[cite: 6]；<strong>防潮隔氣層（如鋁箔 Aluminum Foil Vapour Barrier）必須貼於保溫材料的「外表面（即暖側 Warm Side）」</strong>，嚴防外界潮濕空氣滲透至低溫保溫棉內部冷凝結露[cite: 6]。</li></ul>',
        en: '<ul><li><strong>Low velocity system</strong>: $u < 10\\text{ m/s}$[cite: 6].</li><li><strong>High velocity system</strong>: $10\\text{ m/s} < u < 15\\text{ m/s}$[cite: 6].</li><li><strong>Insulation &amp; Vapour Barrier</strong>: Duct liner provides dual thermal and sound insulation[cite: 6]. The <strong>vapour barrier (aluminum foil) must be attached on the outer surface (warm side)</strong> of the insulation to prevent internal condensation[cite: 6].</li></ul>'
      }
    ]
  }
];

// ==========================================
// 25 MULTIPLE CHOICE QUESTIONS (L06a)
// ==========================================
const mcData = [
  {
    question: "What is the official definition of a FAN according to Lecture 6a?",
    options: [
      "A positive displacement machine that compresses gas isothermally",
      "A rotodynamic machine which propels air or other gas continuously",
      "A fluid mixing vessel operating under high static pressure",
      "A heat exchange coil that transfers latent enthalpy"
    ],
    answer: 1,
    explanation: "Slide 2: A fan is defined as a rotodynamic machine which propels air or other gas continuously.",
    lesson: "L6a"
  },
  {
    question: "In a PROPELLER fan, which operational rule must be strictly adhered to?",
    options: [
      "It must always be connected to high-velocity supply ducts",
      "It operates at zero or low static pressure; no air duct connection is allowed",
      "It must be equipped with downstream curved guide vanes",
      "Its impeller must rotate at exactly 1500 rev/min"
    ],
    answer: 1,
    explanation: "Slide 4: A propeller fan operates at zero or low static pressure; therefore, no air duct connection is allowed. Efficiency is low (40% to 55%).",
    lesson: "L6a"
  },
  {
    question: "What are the STANDARD AIR conditions defined for fan rating and aerodynamic calculations?",
    options: [
      "Density = 1.000 kg/m³, Pressure = 100.0 kPa, Temperature = 0 °C",
      "Density = 1.204 kg/m³, Pressure = 101.325 kPa, Temperature = 20 °C",
      "Density = 1.293 kg/m³, Pressure = 101.325 kPa, Temperature = 15 °C",
      "Density = 1.185 kg/m³, Pressure = 98.0 kPa, Temperature = 25 °C"
    ],
    answer: 1,
    explanation: "Slide 5: Standard Air conditions are Density = 1.204 kg/m³, Inlet pressure = 101.325 kPa, Temperature = 20 °C.",
    lesson: "L6a"
  },
  {
    question: "FAN STATIC PRESSURE (Ps) is defined as:",
    options: [
      "The algebraic sum of fan outlet pressure and inlet pressure",
      "The difference between the fan total pressure and fan velocity pressure (Ps = Pt - Pv)",
      "The dynamic velocity pressure measured by the impact tube alone",
      "The pressure required to overcome filter dirty resistance"
    ],
    answer: 1,
    explanation: "Slide 6: Fan static pressure Ps is the difference between fan total pressure Pt and fan velocity pressure Pv (Ps = Pt - Pv).",
    lesson: "L6a"
  },
  {
    question: "When measuring air pressure in a duct, a U-tube manometer connected to a PITOT-STATIC tube differential tapping measures:",
    options: [
      "Fan static pressure Ps alone",
      "Atmospheric barometric pressure Patm",
      "Velocity pressure Pv (the differential Pt - Ps)",
      "Reynolds number directly"
    ],
    answer: 2,
    explanation: "Slide 7: A pitot-static tube connected across a manometer measures velocity pressure Pv by sensing the difference between impact total pressure and side static pressure.",
    lesson: "L6a"
  },
  {
    question: "The theoretical aerodynamic fan air power output (Wo in Watts) for an incompressible flow is calculated as:",
    options: [
      "Wo = Ps / V",
      "Wo = Pt · V",
      "Wo = (Pt · V) / (1000 · η)",
      "Wo = Pv · u²"
    ],
    answer: 1,
    explanation: "Slide 8: Wo = Pt · V (where Pt is in Pa and V is in m³/s).",
    lesson: "L6a"
  },
  {
    question: "According to the Fan Laws, if fan rotational speed n is increased, how do total pressure Pt and power input W scale?",
    options: [
      "Pt scales with n¹; W scales with n²",
      "Pt scales with n²; W scales with n³",
      "Pt scales with n³; W scales with n²",
      "Both Pt and W scale linearly with n¹"
    ],
    answer: 1,
    explanation: "Slide 10: Pressure scales with the square of speed (n²), while power scales with the cube of speed (n³).",
    lesson: "L6a"
  },
  {
    question: "According to Slide 11, increasing fan speed by exactly 10% results in what percentage increases in flow, pressure, and power?",
    options: [
      "Flow +10%, Pressure +10%, Power +10%",
      "Flow +10%, Pressure +20%, Power +30%",
      "Flow +10%, Pressure +21%, Power +33%",
      "Flow +21%, Pressure +33%, Power +44%"
    ],
    answer: 2,
    explanation: "Slide 11: A 10% speed increase gives: 10% increase in airflow (1.10), 21% increase in total pressure (1.10² = 1.21), and 33% increase in power (1.10³ = 1.331).",
    lesson: "L6a"
  },
  {
    question: "Which centrifugal fan blade type has the HIGHEST total aerodynamic efficiency (reaching 80% to 85%)?",
    options: [
      "Forward curved blade",
      "Radial paddle wheel blade",
      "Airfoil / Backward curved blade",
      "Propeller orifice blade"
    ],
    answer: 2,
    explanation: "Slide 16 & 27: The airfoil blade (backward curved) centrifugal fan is the most energy-efficient, reaching over 80%–85% efficiency.",
    lesson: "L6a"
  },
  {
    question: "What is a major operational risk when using a FORWARD CURVED centrifugal fan?",
    options: [
      "The airflow direction reverses at high speeds",
      "It has an overloading power curve; operating at low system resistance causes flow to surge and burns out the motor",
      "It can only handle sawdust and wood shavings",
      "It cannot operate with belt drives"
    ],
    answer: 1,
    explanation: "Slide 15 & 26: Forward curved fans have continuously rising, overloading power curves. Motor overloading must be avoided by sizing larger motors.",
    lesson: "L6a"
  },
  {
    question: "Why does a BACKWARD CURVED centrifugal fan provide inherent motor safety?",
    options: [
      "Its power curve is non-overloading (peaks and levels off as flow increases)",
      "It requires no electrical grounding",
      "It automatically shifts from forward rotation to reverse rotation",
      "It operates at constant 10 m/s tip speed"
    ],
    answer: 0,
    explanation: "Slide 15: Backward curved/inclined fans have a non-overloading power characteristic where power reaches a peak and drops off.",
    lesson: "L6a"
  },
  {
    question: "What does the abbreviation DIDW designate regarding centrifugal fan construction?",
    options: [
      "Direct Inlet Duct Width",
      "Double Inlet Double Width (doubles airflow of SISW)",
      "Dual Inverter Drive Wattage",
      "Differential Induced Draft Wheel"
    ],
    answer: 1,
    explanation: "Slide 17: DIDW stands for Double Inlet Double Width, which doubles the airflow capacity compared to a Single Inlet Single Width (SISW) fan.",
    lesson: "L6a"
  },
  {
    question: "What is the primary function of downstream GUIDE VANES in a Vaneaxial fan?",
    options: [
      "To reverse the rotational direction of the motor",
      "To straighten out helical swirl and convert part of velocity pressure into static pressure",
      "To inject chemical droplets for evaporative cooling",
      "To increase tip clearance"
    ],
    answer: 1,
    explanation: "Slide 18: Curved guide vanes downstream of the impeller straighten airflow pattern and convert part of dynamic velocity pressure into static pressure.",
    lesson: "L6a"
  },
  {
    question: "When an AXIAL fan without guide vanes is operated in REVERSE, how much of its design forward airflow can it deliver?",
    options: ["10% to 20%", "40% to 50%", "60% to 70%", "100% (fully symmetrical)"],
    answer: 2,
    explanation: "Slide 21: When rotation is reversed, an axial fan without guide vanes delivers only 60% to 70% of its original design airflow rate.",
    lesson: "L6a"
  },
  {
    question: "Which of the following represents the MOST energy-efficient method for modulating fan airflow capacity?",
    options: [
      "Discharge throttling dampers in the ductwork",
      "Inlet guide vane (IGV) angular modulation",
      "Fan motor speed modulation (e.g. VFD inverter)",
      "Adjusting diffuser grilles manually"
    ],
    answer: 2,
    explanation: "Slide 27: Using motor speed control (VFD) to adjust airflow is the most energy-efficient method because power scales cubically with speed.",
    lesson: "L6a"
  },
  {
    question: "INLET GUIDE VANE (IGV) modulation is commonly used on which fan type, and is UNSUITABLE for which fan type?",
    options: [
      "Common on Propeller fans; unsuitable for Centrifugal fans",
      "Common on Centrifugal fans; unsuitable for Axial fans",
      "Common on Vaneaxial fans; unsuitable for DIDW fans",
      "Common on Tubeaxial fans; unsuitable for AHU fans"
    ],
    answer: 1,
    explanation: "Slide 24: Inlet guide vane modulation is commonly applied in centrifugal fans, but is not suitable for axial fans.",
    lesson: "L6a"
  },
  {
    question: "Which of the following is NOT listed in Slide 28 as a reason why actual duct system resistance deviates from design?",
    options: [
      "Calculation error in estimating pressure losses",
      "Addition of excessive safety factor allowances",
      "Improper site duct installation workmanship",
      "Atmospheric air density dropping to absolute zero"
    ],
    answer: 3,
    explanation: "Slide 28 lists: calculation error, extra safety factor allowance, improper site workmanship, inadequate dirty filter allowance, and occupant-throttled dampers.",
    lesson: "L6a"
  },
  {
    question: "When two identical fans are connected in SERIES, the combined system curve performance results in:",
    options: [
      "Airflow rate doubles while total pressure remains constant",
      "Total pressure doubles at the same volume flow rate (ΔPc = ΔP1 + ΔP2)",
      "Both airflow rate and total pressure increase by 33%",
      "Static pressure becomes zero"
    ],
    answer: 1,
    explanation: "Slide 29: Connected in series, total pressure is the summation of individual fan pressures at the same airflow rate.",
    lesson: "L6a"
  },
  {
    question: "When two identical fans are connected in PARALLEL, which safety component MUST be installed at each fan outlet?",
    options: [
      "A manual air vent (MAV)",
      "A non-return damper (NRD) to prevent reverse backflow if one fan trips",
      "A flexible canvas connection of at least 3 m length",
      "An electric reheat duct heater"
    ],
    answer: 1,
    explanation: "Slide 30: A non-return damper must be installed to prevent reverse airflow through the idle fan when only one fan is running.",
    lesson: "L6a"
  },
  {
    question: "In an air handling unit (AHU) ductwork system, where is the LOWEST negative pressure (maximum suction depression) located?",
    options: [
      "At the ceiling diffuser discharge",
      "Directly at the fan inlet on the suction side",
      "At the room return air grille",
      "Immediately downstream of the fan discharge"
    ],
    answer: 1,
    explanation: "Slide 31: Suction pressure steadily drops across return ducts, filters, and cooling coils, reaching the lowest negative pressure point at the fan suction inlet.",
    lesson: "L6a"
  },
  {
    question: "In Darcy's duct friction equation ΔP = f · (L/D) · (ρ·u²/2), what absolute roughness value (ε) is used for galvanized steel ducts?",
    options: ["0.001 mm", "0.015 mm", "0.15 mm", "1.5 mm"],
    answer: 2,
    explanation: "Slide 35: For galvanized steel with longitudinal seams and 760 mm joints, absolute roughness ε is taken as 0.15 mm.",
    lesson: "L6a"
  },
  {
    question: "For a rectangular duct with dimensions a and b, what is the hydraulic equivalent diameter (Deq) for the SAME AIR VELOCITY?",
    options: [
      "Deq = 2ab / (a + b)",
      "Deq = 1.30 · (ab)⁰·⁶²⁵ / (a + b)⁰·²⁵",
      "Deq = ab / 2(a + b)",
      "Deq = (a + b) / 2"
    ],
    answer: 0,
    explanation: "Slide 36: Deq = 4·Area / Perimeter = 4ab / 2(a+b) = 2ab / (a+b) for the same air velocity.",
    lesson: "L6a"
  },
  {
    question: "The Huebscher equation Deq,f = 1.30 · (ab)⁰·⁶²⁵ / (a + b)⁰·²⁵ determines the circular equivalent diameter for:",
    options: [
      "The same air velocity and same duct perimeter",
      "The same volume flow rate and same friction pressure loss",
      "The same aspect ratio and sound transmission",
      "Flat oval ducts exclusively"
    ],
    answer: 1,
    explanation: "Slide 36: Huebscher developed this relationship between rectangular and circular ducts for the SAME volume flow rate and same friction loss.",
    lesson: "L6a"
  },
  {
    question: "A LOW-VELOCITY duct system is defined as having an airflow velocity of:",
    options: ["< 2.5 m/s", "< 5.0 m/s", "< 10.0 m/s", "10 to 15 m/s"],
    answer: 2,
    explanation: "Slide 41: Low velocity duct system is defined as airflow velocity < 10 m/s (high velocity is 10 m/s < u < 15 m/s).",
    lesson: "L6a"
  },
  {
    question: "To prevent condensation, on which side of duct insulation MUST the vapour barrier (e.g. aluminum foil) be attached?",
    options: [
      "On the inside surface facing the cold airstream",
      "On the outer surface (the warm side of the insulation)",
      "Sandwiched between two layers of galvanized sheet metal",
      "Vapour barriers are never permitted on air ducts"
    ],
    answer: 1,
    explanation: "Slide 42: The vapour barrier (aluminum foil) is attached on the outer surface (the warm side of the insulation) to prevent condensation.",
    lesson: "L6a"
  }
];

// ==========================================
// 5 SHORT ANSWER QUESTIONS (L06a)
// ==========================================
const shortData = [
  {
    type: "explain",
    lesson: "L6a",
    question: "A ventilation engineer proposes increasing the rotational speed of a supply air fan by 10% to overcome a perceived airflow deficit in an office zone. (a) Apply the Fan Laws to determine the exact percentage changes in: (1) volume flow rate V, (2) fan total pressure Pt, and (3) fan power input W. (b) Explain the practical engineering hazard of this 10% speed increase regarding motor electrical sizing.",
    modelAnswer: "(a) Mathematical Calculations using Fan Affinity Laws (Slide 10–11):\nLet n2 / n1 = 1.10 (a 10% speed increase):\n1. Volume flow rate scaling: V2 / V1 = (n2 / n1)¹ = 1.10\n   ➔ Airflow increases by exactly 10%[cite: 6].\n2. Fan total pressure scaling: Pt2 / Pt1 = (n2 / n1)² = (1.10)² = 1.21\n   ➔ Total pressure increases by 21%[cite: 6].\n3. Fan power input scaling: W2 / W1 = (n2 / n1)³ = (1.10)³ = 1.331\n   ➔ Power input increases by 33.1% (approx. 33%)[cite: 6].\n\n(b) Practical Engineering Hazard:\n• Non-linear Cubic Scaling: While airflow only gains a modest 10%, the required motor power escalates by 33%[cite: 6].\n• Motor Burnout / Overcurrent Trip: If the existing fan motor was selected near its design nameplate rating (with typical 10%–15% safety margin), a 33% power surge will severely overload the motor, triggering thermal overload trips or burning out motor windings[cite: 6]. Motor electrical capacity must always be verified before increasing fan RPM[cite: 6].",
    tips: "Show (1.1)¹ = 1.10 (+10%), (1.1)² = 1.21 (+21%), and (1.1)³ = 1.331 (+33%). State the motor overloading trip risk[cite: 6]."
  },
  {
    type: "trace",
    lesson: "L6a",
    question: "A rectangular supply air duct has internal cross-sectional dimensions of a = 600 mm and b = 300 mm. (a) Calculate the hydraulic equivalent diameter Deq for the same air velocity. (b) Calculate the circular equivalent diameter Deq,f for the same volume flow rate and same friction loss using Huebscher's formula Deq,f = 1.30 · (ab)^0.625 / (a + b)^0.25. (c) Explain why Deq and Deq,f are different.",
    modelAnswer: "Given dimensions: a = 0.6 m, b = 0.3 m (or a = 600 mm, b = 300 mm):\n\n(a) Equivalent Diameter for Same Air Velocity (Deq):\nDeq = (2 · a · b) / (a + b)[cite: 6]\nDeq = (2 · 600 · 300) / (600 + 300) = 360,000 / 900 = 400 mm (or 0.40 m)[cite: 6].\n\n(b) Huebscher Circular Equivalent Diameter for Same Flow & Friction (Deq,f):\nFormula: Deq,f = 1.30 · [ (a · b)^0.625 / (a + b)^0.25 ][cite: 6]\nUsing mm:\n• (a · b) = 600 · 300 = 180,000\n• (180,000)^0.625 ≈ 1957.38\n• (a + b) = 600 + 300 = 900\n• (900)^0.25 ≈ 5.477\n• Deq,f = 1.30 · (1957.38 / 5.477) = 1.30 · 357.38 ≈ 464.6 mm (approx. 465 mm or 0.465 m)[cite: 6].\n\n(c) Physical Difference:\n• Deq is based solely on hydraulic radius (4A/P) to match mean air velocity[cite: 6].\n• Deq,f accounts for the differing velocity profile, boundary layer friction, and duct aspect ratio when matching both identical volume flow (m³/s) and identical pressure gradient (Pa/m)[cite: 6]. Deq,f is larger than Deq to compensate for the higher perimeter-to-area friction of a rectangular shape[cite: 6].",
    tips: "Deq = 2ab/(a+b) = 400 mm. Huebscher Deq,f ≈ 465 mm. Explain equal velocity vs equal flow/friction criteria[cite: 6]."
  },
  {
    type: "compare",
    lesson: "L6a",
    question: "Compare FORWARD CURVED and BACKWARD CURVED (AIRFOIL) centrifugal fans regarding: (a) blade geometry and physical wheel size for a given duty, (b) peak aerodynamic total efficiency, (c) fan power curve characteristics (overloading vs non-overloading), and (d) typical HVAC application.",
    modelAnswer: "(a) Blade Geometry & Wheel Size:\n• Forward Curved: Shallow, curved blades curved in the direction of wheel rotation (squirrel cage)[cite: 6]. Operates at lower tip speeds; has the SMALLEST physical wheel diameter and casing size for a given airflow duty[cite: 6].\n• Backward Curved / Airfoil: Deep blades inclined backward against the direction of rotation[cite: 6]. Requires a larger wheel diameter and higher rotational speed to generate equivalent pressure[cite: 6].\n\n(b) Peak Aerodynamic Efficiency:\n• Forward Curved: Relatively low efficiency, peaking around 60%[cite: 6].\n• Backward Curved / Airfoil: Highest efficiency among centrifugal fans, typically reaching 80% to 85%[cite: 6].\n\n(c) Fan Power Curve Characteristics:\n• Forward Curved: Possesses an OVERLOADING power curve[cite: 6]. Brake horsepower continues to rise steeply as airflow increases[cite: 6]. If system resistance is lower than designed, flow surges and the motor will burn out unless significantly oversized[cite: 6].\n• Backward Curved / Airfoil: Possesses a NON-OVERLOADING (self-limiting) power curve[cite: 6]. Power reaches a maximum near the peak efficiency point and levels off or drops toward free delivery, preventing motor overload[cite: 6].\n\n(d) Typical Application:\n• Forward Curved: Compact residential fan coil units (FCU), package air conditioners, and small domestic equipment where low noise and compact physical envelope are paramount[cite: 6].\n• Backward Curved: Medium to large commercial central air handling units (AHU), variable air volume (VAV) systems, and industrial continuous-duty supply/return systems[cite: 6].",
    tips: "Structure across the 4 points: geometry/size, efficiency (60% vs 85%), overloading vs self-limiting power curve, and FCU vs AHU applications[cite: 6]."
  },
  {
    type: "scenario",
    lesson: "L6a",
    question: "An air handling unit (AHU) operates with a supply fan delivering V = 8.0 m³/s of air. Across the AHU, total pressure at the fan inlet is Pt,inlet = -350 Pa (suction depression), and total pressure at the fan outlet is Pt,outlet = +450 Pa. Outlet area is A = 1.0 m². Air density is ρ = 1.204 kg/m³. (a) Calculate the Fan Total Pressure Pt. (b) Calculate the outlet velocity u and the Fan Velocity Pressure Pv. (c) Calculate the Fan Static Pressure Ps. (d) If the shaft input power is Wi = 8.5 kW, calculate the Fan Total Efficiency ηt.",
    modelAnswer: "(a) Fan Total Pressure (Pt):\nPt = Pt,outlet - Pt,inlet[cite: 6]\nPt = (+450 Pa) - (-350 Pa) = 450 + 350 = 800 Pa[cite: 6].\n\n(b) Outlet Velocity (u) and Velocity Pressure (Pv):\n• Outlet velocity u = V / A = 8.0 m³/s / 1.0 m² = 8.0 m/s[cite: 6].\n• Velocity pressure: Pv = (ρ · u²) / 2 = (1.204 · 8.0²) / 2 = (1.204 · 64) / 2 = 38.53 Pa[cite: 6].\n\n(c) Fan Static Pressure (Ps):\nPs = Pt - Pv = 800 Pa - 38.53 Pa = 761.47 Pa[cite: 6].\n\n(d) Fan Total Efficiency (ηt):\n• Useful aerodynamic power output: Wo = Pt · V = 800 Pa · 8.0 m³/s = 6400 Watts = 6.40 kW[cite: 6].\n• Total Efficiency: ηt = Wo / Wi = 6.40 kW / 8.50 kW = 0.7529 (or 75.3%)[cite: 6].",
    tips: "Pt = 450 - (-350) = 800 Pa. Pv = (1.204·8²)/2 = 38.5 Pa. Ps = 800 - 38.5 = 761.5 Pa. ηt = (800·8)/8500 = 75.3%[cite: 6]."
  },
  {
    type: "compare",
    lesson: "L6a",
    question: "A design team is evaluating two identical fans installed in (a) SERIES versus (b) PARALLEL in a commercial HVAC duct network. (1) How does each arrangement alter the combined pressure and volume flow? (2) What safety device must be fitted in parallel operation? (3) Which duct system characteristic (steep/high resistance vs flat/low resistance) is suited to each?",
    modelAnswer: "(1) Pressure and Volume Flow Modifications:\n• Series Operation: Airflow passes sequentially through both fans[cite: 6]. Volume flow rate remains the same as a single fan (V_total = V1 = V2), but total pressure is the sum of both fans (Pt_total = Pt1 + Pt2)[cite: 6].\n• Parallel Operation: Both fans discharge into a common duct[cite: 6]. Total pressure remains that of a single fan, but total airflow rate doubles at that pressure (V_total = V1 + V2 = 2 · Vw)[cite: 6].\n\n(2) Safety Device Required in Parallel:\n• A Non-Return Damper (NRD) / backdraft damper MUST be fitted at the discharge of each fan[cite: 6].\n• Purpose: If one fan trips or is switched off, the NRD automatically closes, preventing the operating fan from forcing high-pressure air backward through the idle fan into a short-circuit loop[cite: 6].\n\n(3) Duct System Compatibility:\n• Series fans are ideal for STEEP, HIGH-RESISTANCE duct networks (long duct runs, high-efficiency HEPA filters, multiple coils) where high pressure is required to push flow[cite: 6].\n• Parallel fans are ideal for FLAT, LOW-RESISTANCE duct networks where large volumes of air must be shifted at low static pressures (e.g. mine ventilation, tunnel ventilation, large open spaces)[cite: 6].",
    tips: "Cover: Series doubles pressure at same flow; Parallel doubles flow at same pressure; Parallel requires NRDs; Series fits steep duct, Parallel fits flat duct[cite: 6]."
  }
];

// ==========================================
// RENDER & DOM BINDINGS
// ==========================================
function renderNotes() {
  const c = document.getElementById('notesContainer');
  c.innerHTML = '';
  notesData.forEach(topic => {
    const card = document.createElement('div');
    card.className = 'topic-card';
    card.id = topic.id;
    let sectionsHTML = '';
    topic.sections.forEach(sec => {
      sectionsHTML += `
        <h3 style="margin-top:18px;margin-bottom:6px;color:#34495e;font-size:16px;border-bottom:1px dashed #dce1e6;padding-bottom:4px;">${escapeHtml(sec.title)}</h3>
        <div class="lang-pair">
          <div class="lang-cell zh">
            <div class="lang-label">中文重點 / Cantonese &amp; Chinese</div>
            ${sec.zh}
          </div>
          <div class="lang-cell en">
            <div class="lang-label">English Notes</div>
            ${sec.en}
          </div>
        </div>`;
    });
    let diagramHTML = '';
    if (topic.diagram) {
      diagramHTML = `
        <div class="diagram-block">
          <div class="diagram-title">⚡ SCADA Interactive Schematic / 工業級動態氣動原理圖</div>
          ${topic.diagram}
          ${topic.diagramCaption ? '<div class="diagram-caption">' + escapeHtml(topic.diagramCaption) + '</div>' : ''}
        </div>`;
    }
    card.innerHTML = `
      <div class="topic-header">
        <div class="topic-icon">${topic.icon}</div>
        <div class="topic-title">
          <h2>${escapeHtml(topic.title)} <span style="color:#7f8c8d;font-weight:normal;font-size:14px;">/ ${escapeHtml(topic.titleZh)}</span></h2>
        </div>
      </div>
      ${sectionsHTML}
      ${diagramHTML}`;
    c.appendChild(card);
  });
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const shuffledAnswers = {};
function renderMC() {
  const container = document.getElementById('mcContainer');
  container.innerHTML = '';
  mcData.forEach((q, index) => {
    const card = document.createElement('div');
    card.className = 'question-card';
    card.id = 'mc-q' + index;
    const indices = q.options.map((_, i) => i);
    shuffleArray(indices);
    const newAnswerIndex = indices.indexOf(q.answer);
    shuffledAnswers[index] = newAnswerIndex;
    let optionsHTML = '';
    indices.forEach((origIdx, displayIdx) => {
      const opt = q.options[origIdx];
      const safeOpt = escapeHtml(opt);
      optionsHTML += `
        <label id="mc-q${index}-opt${displayIdx}">
          <input type="radio" name="mc${index}" value="${displayIdx}" onchange="recordAnswer(${index}, ${displayIdx})">
          ${safeOpt}
        </label>`;
    });
    card.innerHTML = `
      <div class="q-header">
        <span class="q-number">Q${index + 1}</span>
        <span class="q-tag">${lessonLabels[q.lesson] || q.lesson}</span>
      </div>
      <div class="q-text">${escapeHtml(q.question)}</div>
      <div class="options">${optionsHTML}</div>
      <div class="explanation" id="mc-exp${index}">
        <strong>Explanation / 詳細解釋：</strong>${escapeHtml(q.explanation)}
      </div>`;
    container.appendChild(card);
  });
}

function renderShort() {
  const c = document.getElementById('shortContainer');
  c.innerHTML = '';
  shortData.forEach((q, index) => {
    const card = document.createElement('div');
    card.className = 'question-card short-q';
    card.id = 'short-q' + index;
    const typeTag = typeLabels[q.type] || '';
    const lessonTag = `<span class="q-tag">${lessonLabels[q.lesson] || q.lesson}</span>`;
    const safeQuestion = escapeHtml(q.question).replace(/\n/g, '<br>');
    card.innerHTML = `
      <div class="q-header">
        <span class="q-number">S${index + 1}</span>
        ${typeTag}
        ${lessonTag}
      </div>
      <div class="q-text">${safeQuestion}</div>
      <textarea id="short-input${index}" placeholder="Type your calculations or aerodynamic analysis here / 喺度輸入你的計算或工程分析答案..."></textarea>
      <div class="answer-tips">💡 Tip / 提示：${escapeHtml(q.tips || 'Key engineering concepts')}</div>
      <div class="model-answer" id="short-ans${index}">
        <strong>📝 Model Answer / 規範參考答案：</strong>
        <pre></pre>
      </div>`;
    card.querySelector('pre').textContent = q.modelAnswer;
    c.appendChild(card);
  });
}

let userAnswers = {};
let timerInterval;
let timeLeft = 90 * 60;

function recordAnswer(qIndex, optIndex) {
  userAnswers[qIndex] = optIndex;
  updateStats();
}

function updateStats() {
  const answered = Object.keys(userAnswers).length;
  const total = mcData.length;
  document.getElementById('answeredCount').textContent = answered + '/' + total;
  const percent = (answered / total) * 100;
  document.getElementById('progressBar').style.width = percent + '%';
}

function showSection(section) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  if (section === 'notes') {
    document.getElementById('notesSection').classList.add('active');
    document.querySelectorAll('.tab-btn')[0].classList.add('active');
  } else if (section === 'part1') {
    document.getElementById('part1Section').classList.add('active');
    document.querySelectorAll('.tab-btn')[1].classList.add('active');
  } else if (section === 'part2') {
    document.getElementById('part2Section').classList.add('active');
    document.querySelectorAll('.tab-btn')[2].classList.add('active');
  }
  window.scrollTo({ top: 0, behavior: 'auto' });
}

function submitMC() {
  let correct = 0;
  let reviewHTML = '';
  mcData.forEach((q, index) => {
    const userAnswer = userAnswers[index];
    const correctDisplayAnswer = shuffledAnswers[index];
    const isCorrect = userAnswer === correctDisplayAnswer;
    const card = document.getElementById('mc-q' + index);
    const explanation = document.getElementById('mc-exp' + index);
    explanation.style.display = 'block';
    if (isCorrect) {
      correct++;
      card.classList.add('answered');
      if (userAnswer !== undefined) document.getElementById('mc-q' + index + '-opt' + userAnswer).classList.add('correct');
      reviewHTML += `<div class="review-item correct">Q${index + 1} ✓ — ${escapeHtml(q.question.substring(0, 45))}…</div>`;
    } else {
      card.classList.add('wrong');
      if (userAnswer !== undefined) document.getElementById('mc-q' + index + '-opt' + userAnswer).classList.add('incorrect');
      document.getElementById('mc-q' + index + '-opt' + correctDisplayAnswer).classList.add('correct');
      reviewHTML += `<div class="review-item wrong">Q${index + 1} ✗ — ${escapeHtml(q.question.substring(0, 45))}…</div>`;
    }
  });
  const percent = Math.round((correct / mcData.length) * 100);
  document.getElementById('finalScore').textContent = percent + '%';
  document.getElementById('scoreCircle').style.setProperty('--percent', percent);
  let msg = '';
  if (percent >= 80) msg = '🎉 卓越！你已經徹底掌握通風機動力學、風機定律與風管設計的核心精髓！';
  else if (percent >= 60) msg = '👍 做得好！請仔細閱讀答錯題目的詳細流體計算與解釋。';
  else if (percent >= 50) msg = '✅ 及格。建議重溫風機定律三次方關係、葉片過載特性與等效管徑計算。';
  else msg = '📚 繼續努力！點擊 Notes 重新溫習相應氣動與風管主題後再試一次。';
  document.getElementById('resultMsg').textContent = msg;
  document.getElementById('scoreDisplay').textContent = percent + '%';
  document.getElementById('reviewSection').innerHTML = `<h3>MC Result: ${correct}/${mcData.length} (${percent}%)</h3><div>${reviewHTML}</div>`;
  document.getElementById('resultPanel').style.display = 'block';
  document.getElementById('resultPanel').scrollIntoView({ behavior: 'auto' });
  clearInterval(timerInterval);
}

function showAnswers() {
  shortData.forEach((q, index) => {
    document.getElementById('short-ans' + index).style.display = 'block';
  });
}

function startTimer() {
  timerInterval = setInterval(() => {
    timeLeft--;
    const m = Math.floor(timeLeft / 60);
    const s = timeLeft % 60;
    document.getElementById('timer').textContent = String(m).padStart(2,'0') + ':' + String(s).padStart(2,'0');
    if (timeLeft <= 0) { clearInterval(timerInterval); alert('Time is up!'); submitMC(); }
    if (timeLeft <= 300) document.getElementById('timer').style.color = '#e74c3c';
  }, 1000);
}

document.addEventListener('click', function(e) {
  if (e.target.tagName === 'BUTTON') setTimeout(() => e.target.blur(), 100);
});

window.onload = function() {
  renderNotes();
  renderMC();
  renderShort();
  startTimer();
  updateStats();
};

window.addEventListener('scroll', function() {
  const btn = document.getElementById('toTop');
  if (!btn) return;
  if (window.pageYOffset > 400) btn.classList.add('show');
  else btn.classList.remove('show');
});
