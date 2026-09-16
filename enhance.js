window.enhanceDeck = function enhanceDeck(html) {
  const css = `
/* --- Extra infographic components --- */
.o11y-rings{display:grid;grid-template-columns:1.05fr 1fr;gap:22px;margin-top:18px;align-items:stretch}.o11y-core{border:1px solid var(--line);border-radius:28px;padding:28px;background:radial-gradient(circle at 50% 50%,rgba(103,232,249,.12),rgba(255,255,255,.025) 55%);display:flex;flex-direction:column;justify-content:center;min-height:320px}.o11y-core .core-title{font-size:clamp(28px,3.2vw,46px);font-weight:900;line-height:1.1}.o11y-core .core-sub{margin-top:10px;color:var(--muted);font-size:16px;line-height:1.5}.o11y-side{display:grid;grid-template-rows:1fr 1fr;gap:16px}.o11y-side .card{box-shadow:none}
.signal-wheel{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-top:22px}.signal-card{border:1px solid var(--line);border-radius:20px;padding:18px;background:rgba(255,255,255,.025);min-height:170px}.signal-card .sig{font-size:24px;font-weight:900;margin-bottom:8px}.signal-card .question{font-size:15px;color:var(--cyan);margin-bottom:10px}.signal-card p{font-size:15px;color:var(--muted);margin:0}.signal-card.profile{border-style:dashed;opacity:.82}
.diagnose{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-top:24px;align-items:stretch}.diag-step{position:relative;border:1px solid var(--line);border-radius:18px;padding:18px;background:rgba(255,255,255,.028);min-height:180px}.diag-step:not(:last-child)::after{content:'→';position:absolute;right:-20px;top:50%;transform:translateY(-50%);font-size:26px;color:var(--cyan);z-index:3}.diag-step .num{font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:var(--muted)}.diag-step h3{margin:8px 0 8px}.diag-step p{font-size:15px;color:var(--muted)}
.methods{display:grid;grid-template-columns:1.15fr 1fr 1fr;gap:16px;margin-top:22px}.method{border:1px solid var(--line);border-radius:22px;padding:20px;background:rgba(255,255,255,.025)}.method h3{margin-bottom:12px}.chips{display:flex;flex-wrap:wrap;gap:8px}.chip{display:inline-flex;padding:7px 10px;border-radius:999px;border:1px solid var(--line);font-size:13px;background:rgba(255,255,255,.035)}.method.golden{border-top:3px solid var(--amber)}.method.red{border-top:3px solid var(--rose)}.method.use{border-top:3px solid var(--blue)}
.cost-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:22px}.cost-card{border:1px solid var(--line);border-radius:20px;padding:20px;background:rgba(255,255,255,.025)}.cost-card h3{margin-bottom:8px}.cost-card p{font-size:15px;color:var(--muted)}
.journey-infographic{margin-top:10px;border:1px solid var(--line);border-radius:24px;padding:20px 22px;background:linear-gradient(180deg,rgba(96,165,250,.055),rgba(255,255,255,.018));box-shadow:var(--shadow);overflow:auto}.journey-canvas{min-width:940px}.journey-meta{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:14px}.journey-meta .session{font-weight:850;font-size:15px}.journey-meta .time-arrow{color:var(--muted);font-size:13px;letter-spacing:.08em;text-transform:uppercase}.journey-head{display:grid;grid-template-columns:130px repeat(4,1fr);gap:12px;align-items:center;position:relative;margin-bottom:10px}.journey-head::after{content:"";position:absolute;left:156px;right:7%;top:27px;height:2px;background:linear-gradient(90deg,rgba(103,232,249,.22),rgba(103,232,249,.75),rgba(196,181,253,.45));z-index:0}.journey-head .blank{height:1px}.j-step{position:relative;z-index:1;text-align:center}.j-step .dot{width:13px;height:13px;border-radius:50%;margin:0 auto 8px;background:var(--cyan);box-shadow:0 0 0 6px rgba(103,232,249,.10)}.j-step strong{display:block;font-size:16px}.j-step span{display:block;color:var(--muted);font-size:12px;margin-top:3px}.replay-band{display:grid;grid-template-columns:130px 1fr;gap:12px;align-items:center;margin:8px 0 12px}.replay-label{color:var(--muted);font-size:12px;text-transform:uppercase;letter-spacing:.09em}.replay-track{border:1px dashed rgba(196,181,253,.42);background:rgba(196,181,253,.07);border-radius:999px;padding:8px 14px;color:#ddd6fe;font-size:13px;text-align:center}.journey-lanes{display:grid;grid-template-columns:130px repeat(4,1fr);gap:10px 12px;align-items:stretch}.lane-name{display:flex;align-items:center;font-size:13px;font-weight:850;letter-spacing:.05em;text-transform:uppercase;color:var(--muted);padding-right:8px}.lane-cell{min-height:70px;border-radius:14px;border:1px solid rgba(255,255,255,.075);background:rgba(255,255,255,.023);padding:10px;display:flex;flex-wrap:wrap;gap:7px;align-content:center;align-items:center}.lane-cell.muted-cell{opacity:.34}.signal{display:inline-flex;align-items:center;gap:6px;border-radius:999px;padding:6px 9px;font-size:12px;font-weight:750;border:1px solid rgba(255,255,255,.10);background:rgba(255,255,255,.045);white-space:nowrap}.signal.rum{border-color:rgba(110,231,183,.28);color:#bbf7d0;background:rgba(110,231,183,.07)}.signal.product{border-color:rgba(103,232,249,.28);color:#cffafe;background:rgba(103,232,249,.07)}.signal.error{border-color:rgba(253,164,175,.38);color:#fecdd3;background:rgba(253,164,175,.09)}.signal.trace{border-color:rgba(196,181,253,.38);color:#e9d5ff;background:rgba(196,181,253,.09)}.trace-branch{display:flex;align-items:center;gap:7px;flex-wrap:wrap;width:100%}.trace-branch .arrow{color:var(--purple);font-weight:900}.trace-mini{display:inline-flex;gap:5px;align-items:center}.trace-mini span{font-size:11px;padding:4px 6px;border-radius:7px;background:rgba(196,181,253,.10);color:#ddd6fe;border:1px solid rgba(196,181,253,.18)}.journey-legend{display:flex;gap:14px;flex-wrap:wrap;margin-top:12px;padding-left:142px;color:var(--muted);font-size:12px}.journey-legend b{color:var(--text)}
@media(max-width:900px){.o11y-rings{grid-template-columns:1fr}.signal-wheel,.diagnose,.methods,.cost-grid{grid-template-columns:1fr 1fr}.journey-infographic{padding:16px}.journey-canvas{min-width:860px}}@media(max-width:650px){.signal-wheel,.diagnose,.methods,.cost-grid{grid-template-columns:1fr}.diag-step:not(:last-child)::after{display:none}}
`;
  if (!html.includes('.o11y-rings{')) html = html.replace('</style>', css + '\n</style>');

  const o11ySlides = `
<section class="slide" data-title="Observability"><div class="content">
  <div class="eyebrow">O11y · 基本觀念</div><h2>Observability 不只是「有 Dashboard」</h2>
  <div class="o11y-rings">
    <div class="o11y-core"><div class="core-title">從系統輸出，<br>推回系統內部狀態</div><div class="core-sub">OpenTelemetry 的定義：透過 traces、metrics、logs 等 telemetry 去理解系統內部正在發生什麼。</div></div>
    <div class="o11y-side">
      <div class="card accent-blue"><h3>Monitoring</h3><p>持續追蹤已知的重要指標與條件：有沒有壞？有沒有超標？</p></div>
      <div class="card accent-cyan"><h3>Observability</h3><p>事故發生後還能自由切維度、關聯訊號、追一條 request，回答「為什麼」。</p></div>
    </div>
  </div>
</div><aside class="speaker-note">不要把 observability 定義成三個工具。OpenTelemetry 的核心定義是：透過系統 outputs 理解內部 state；而要做到這件事，前提就是 instrumentation。這和 Chapter 13 很自然接得起來。</aside></section>

<section class="slide" data-title="Signals"><div class="content">
  <div class="eyebrow">O11y · Telemetry signals</div><h2>不同 signal，回答不同問題</h2>
  <div class="signal-wheel">
    <div class="signal-card accent-green"><div class="sig">Metrics</div><div class="question">「整體怎麼了？」</div><p>趨勢、分佈、比例、SLO/alert。適合聚合，不適合塞高 cardinality 細節。</p></div>
    <div class="signal-card accent-amber"><div class="sig">Logs</div><div class="question">「當時發生什麼？」</div><p>事件與診斷細節。最好是 structured log，並帶 trace / resource context。</p></div>
    <div class="signal-card accent-purple"><div class="sig">Traces</div><div class="question">「這一次 request 怎麼走？」</div><p>跨 service 的 causal path、span latency、錯誤位置。</p></div>
    <div class="signal-card profile"><div class="sig">Profiles</div><div class="question">「CPU / memory 花在哪段 code？」</div><p>code-level resource usage。現代 O11y 越來越常把 profiling 與 trace 串起來。</p></div>
  </div>
  <div class="callout">真正有價值的不是「四個 signal 都收」，而是<strong>能彼此 correlation</strong>：同一個 resource、trace、release、user journey 可以互相跳轉。</div>
</div><aside class="speaker-note">OpenTelemetry 目前把 traces、metrics、logs、baggage 視為已支援 signals；profiles 仍在持續標準化。這頁用工程實務的四種觀測資料來講，並強調 correlation 比「三大支柱」口號重要。</aside></section>

<section class="slide" data-title="Diagnosis"><div class="content">
  <div class="eyebrow">O11y · Debug flow</div><h2>從「有問題」一路鑽到「哪行 code」</h2>
  <div class="diagnose">
    <div class="diag-step"><div class="num">01 · Detect</div><h3>Metrics / SLO</h3><p>錯誤率升高、p99 變慢、CTR/availability 掉了。</p></div>
    <div class="diag-step"><div class="num">02 · Localize</div><h3>Trace</h3><p>找出是哪個 service / span / dependency 拉長。</p></div>
    <div class="diag-step"><div class="num">03 · Explain</div><h3>Logs</h3><p>看該 span 附近的 error、parameters、fallback、retry。</p></div>
    <div class="diag-step"><div class="num">04 · Optimize</div><h3>Profile</h3><p>需要時再下鑽 CPU、allocation、lock contention。</p></div>
  </div>
  <div class="callout">這不是固定 SOP，而是一個常見「由廣到深」的查法；關鍵是 signals 之間有 shared context 可以跳。</div>
</div><aside class="speaker-note">Google SRE 也把監控分成「先看到 user-impact symptom，再去找 cause」。實際事故不一定照四步走，但這張讓 BE/DE/MLE 很快建立 O11y 的 mental model。</aside></section>

<section class="slide" data-title="Golden RED USE"><div class="content">
  <div class="eyebrow">O11y · 到底要監什麼？</div><h2>三套常見 heuristic，視角不同</h2>
  <div class="methods">
    <div class="method golden"><h3>Four Golden Signals</h3><div class="chips"><span class="chip">Latency</span><span class="chip">Traffic</span><span class="chip">Errors</span><span class="chip">Saturation</span></div><p>Google SRE：若只能看四件事，先看這四個。</p></div>
    <div class="method red"><h3>RED · Service</h3><div class="chips"><span class="chip">Rate</span><span class="chip">Errors</span><span class="chip">Duration</span></div><p>最適合 request-driven service / microservice。</p></div>
    <div class="method use"><h3>USE · Resource</h3><div class="chips"><span class="chip">Utilization</span><span class="chip">Saturation</span><span class="chip">Errors</span></div><p>更適合 CPU、memory、disk、network 等 resource。</p></div>
  </div>
  <div class="callout"><strong>對你們的推薦系統：</strong>先用 RED / Golden Signals 看 Feed API；再用 USE 看 Redis、Kafka、GPU、DB 等 bottleneck。</div>
</div><aside class="speaker-note">Grafana 的官方 best-practice 也把 RED 說成偏 user/service symptom、USE 偏 resource cause。這頁非常適合你們 BE/MLE/Ops 混合背景。</aside></section>

<section class="slide" data-title="O11y Cost"><div class="content">
  <div class="eyebrow">O11y · Telemetry 也有成本</div><h2>不是「越多越好」，而是<strong style="color:var(--amber)">可查、可關聯、可負擔</strong></h2>
  <div class="cost-grid">
    <div class="cost-card"><h3>Cardinality</h3><p>不要把 user_id / request_id 這種高 cardinality 維度直接做 metric labels；細節更適合 trace / log。</p></div>
    <div class="cost-card"><h3>Sampling</h3><p>Trace / log volume 太大時需要 head / tail sampling，並保留錯誤與慢請求等高價值資料。</p></div>
    <div class="cost-card"><h3>Retention</h3><p>Metrics 長留、raw logs/traces 分層 retention；把成本設計當成 O11y 架構的一部分。</p></div>
  </div>
  <div class="callout">這其實和原書 13.1 很呼應：instrumentation 本身會消耗 CPU、network、storage；2026 只是把問題擴展到 telemetry pipeline 與 cardinality。</div>
</div><aside class="speaker-note">Grafana 的成本文件特別強調 metric cardinality：一個帶 ID、timestamp、query string 的 label 就可能讓 series 數爆炸。這頁是很實務的補充，不需要講太深。</aside></section>
`;

  if (!html.includes('data-title="Observability"')) {
    const marker = '<section class="slide" data-title="2026 Summary">';
    const pos = html.indexOf(marker);
    if (pos >= 0) html = html.slice(0, pos) + o11ySlides + html.slice(pos);
  }

  const start = html.indexOf('<section class="slide" data-title="Web Trace">');
  if (start >= 0) {
    const end = html.indexOf('</section>', start) + '</section>'.length;
    const slide = `<section class="slide" data-title="Web Trace"><div class="content">
<div class="eyebrow">Web · 一次 User Journey</div><h2>Client telemetry 現在更像<strong style="color:var(--cyan)">一段旅程</strong></h2>
<div class="journey-infographic"><div class="journey-canvas">
  <div class="journey-meta"><div class="session">Session #84F2 · /search</div><div class="time-arrow">time →</div></div>
  <div class="journey-head"><div class="blank"></div><div class="j-step"><div class="dot"></div><strong>Route / View</strong><span>頁面出現</span></div><div class="j-step"><div class="dot"></div><strong>Interaction</strong><span>使用者操作</span></div><div class="j-step"><div class="dot"></div><strong>API Request</strong><span>跨進後端</span></div><div class="j-step"><div class="dot"></div><strong>Outcome</strong><span>任務結果</span></div></div>
  <div class="replay-band"><div class="replay-label">Session Replay</div><div class="replay-track">重建這段 session 的畫面、互動與時間順序</div></div>
  <div class="journey-lanes">
    <div class="lane-name">RUM / UX</div><div class="lane-cell"><span class="signal rum"><span class="term" tabindex="0" data-tip="Largest Contentful Paint">LCP</span></span><span class="signal rum"><span class="term" tabindex="0" data-tip="Cumulative Layout Shift">CLS</span></span><span class="signal rum">navigation</span></div><div class="lane-cell"><span class="signal rum"><span class="term" tabindex="0" data-tip="Interaction to Next Paint">INP</span></span><span class="signal rum">interaction latency</span></div><div class="lane-cell"><span class="signal rum">network timing</span></div><div class="lane-cell muted-cell"></div>
    <div class="lane-name">Product Events</div><div class="lane-cell"><span class="signal product">page_view</span></div><div class="lane-cell"><span class="signal product">item_viewed</span><span class="signal product">search_submitted</span></div><div class="lane-cell muted-cell"></div><div class="lane-cell"><span class="signal product">checkout_started</span></div>
    <div class="lane-name">Reliability</div><div class="lane-cell muted-cell"></div><div class="lane-cell"><span class="signal error">⚠ JS Error</span></div><div class="lane-cell muted-cell"></div><div class="lane-cell muted-cell"></div>
    <div class="lane-name">Trace / System</div><div class="lane-cell muted-cell"></div><div class="lane-cell muted-cell"></div><div class="lane-cell"><div class="trace-branch"><span class="signal trace"><span class="term" tabindex="0" data-tip="把 frontend request 與 backend spans 串在同一條 trace 上。">trace_id</span></span><span class="arrow">→</span><div class="trace-mini"><span>API</span><span>DB</span><span>Redis</span><span>RecSys</span></div></div></div><div class="lane-cell muted-cell"></div>
  </div>
  <div class="journey-legend"><span><b>橫向</b>＝時間 / journey</span><span><b>縱向</b>＝不同 telemetry signal</span><span><b>trace_id</b>＝從 frontend 鑽進 backend</span></div>
</div></div>
<div class="callout">書裡的 beacon loss / telemetry overhead 問題沒有消失，只是 SDK、batching、RUM 與 browser API 更成熟。</div>
</div><aside class="speaker-note">這頁用 timeline + swimlane 取代 ASCII tree。AntV Infographic 的 sequence / relation 類型很適合這種「沿時間前進、同時有多層訊號」的故事。</aside></section>`;
    html = html.slice(0, start) + slide + html.slice(end);
  }

  return html;
};
