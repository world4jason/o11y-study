(function(){
  const previousEnhance = window.enhanceDeck;
  window.enhanceDeck = function(baseHtml){
    let html = previousEnhance ? previousEnhance(baseHtml) : baseHtml;
    const css = `
/* --- O11y depth add-on --- */
.telemetry-lifecycle{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-top:22px}.life-step{position:relative;border:1px solid var(--line);border-radius:20px;padding:18px;background:rgba(255,255,255,.025);min-height:200px}.life-step:not(:last-child)::after{content:'→';position:absolute;right:-20px;top:50%;transform:translateY(-50%);font-size:26px;color:var(--cyan);z-index:3}.life-step .n{font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:var(--muted)}.life-step h3{margin:8px 0 10px}.life-step p{font-size:15px;color:var(--muted);margin:0}.life-step .mini{margin-top:12px;font-size:12px;color:#dbeafe}
.pipeline-grid{display:grid;gap:12px;margin-top:20px}.pipeline-row{display:grid;grid-template-columns:110px 1fr;gap:14px;align-items:center}.pipeline-name{font-weight:900;font-size:18px}.pipeline-flow{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;align-items:center}.pipe{border:1px solid var(--line);border-radius:14px;padding:11px 12px;background:rgba(255,255,255,.025);text-align:center;font-size:14px;min-height:48px;display:grid;place-items:center}.pipe.src{border-color:rgba(103,232,249,.28)}.pipe.collect{border-color:rgba(96,165,250,.30)}.pipe.store{border-color:rgba(196,181,253,.30)}.pipe.use{border-color:rgba(110,231,183,.30)}
.instrument-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:22px}.instrument-card{border:1px solid var(--line);border-radius:22px;padding:20px;background:rgba(255,255,255,.025)}.instrument-card h3{margin-bottom:10px}.instrument-card p{font-size:15px;color:var(--muted)}.instrument-card .chips{margin-top:12px}.legacy-flow{display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-top:16px}.legacy-box{border:1px solid var(--line);border-radius:14px;padding:10px 12px;background:rgba(255,255,255,.025);font-size:13px}.legacy-arrow{color:var(--cyan);font-weight:900}
.corr-wrap{display:grid;grid-template-columns:1fr 1.2fr;gap:18px;margin-top:22px;align-items:stretch}.corr-map{position:relative;border:1px solid var(--line);border-radius:24px;background:radial-gradient(circle at 50% 50%,rgba(103,232,249,.07),rgba(255,255,255,.02) 55%);min-height:360px}.corr-node{position:absolute;width:128px;height:128px;border-radius:50%;display:grid;place-items:center;text-align:center;font-weight:900;border:1px solid var(--line);background:#0d1a2b}.corr-node.metrics{left:50%;top:26px;transform:translateX(-50%);border-color:rgba(110,231,183,.4)}.corr-node.logs{left:46px;bottom:38px;border-color:rgba(252,211,77,.4)}.corr-node.traces{right:46px;bottom:38px;border-color:rgba(196,181,253,.45)}.corr-link{position:absolute;font-size:12px;color:var(--muted);background:#0a1422;padding:5px 8px;border:1px solid var(--line);border-radius:999px}.corr-link.exemplar{left:58%;top:46%;transform:translate(-50%,-50%)}.corr-link.traceid{left:50%;bottom:94px;transform:translateX(-50%)}.corr-link.spanmetrics{left:28%;top:46%;transform:translate(-50%,-50%)}.corr-side{display:grid;gap:12px}.corr-card{border:1px solid var(--line);border-radius:18px;padding:16px;background:rgba(255,255,255,.025)}.corr-card h3{font-size:20px;margin-bottom:6px}.corr-card p{font-size:14px;color:var(--muted);margin:0}
@media(max-width:900px){.telemetry-lifecycle{grid-template-columns:1fr 1fr}.pipeline-flow{grid-template-columns:1fr 1fr}.corr-wrap{grid-template-columns:1fr}.corr-map{min-height:340px}}@media(max-width:650px){.telemetry-lifecycle,.instrument-grid{grid-template-columns:1fr}.life-step:not(:last-child)::after{display:none}.pipeline-row{grid-template-columns:1fr}.pipeline-flow{grid-template-columns:1fr}.corr-node{width:108px;height:108px}.corr-node.logs{left:22px}.corr-node.traces{right:22px}}
`;
    if(!html.includes('.telemetry-lifecycle{')) html = html.replace('</style>', css + '\n</style>');

    const slides = `
<section class="slide" data-title="Telemetry Lifecycle"><div class="content">
  <div class="eyebrow">O11y · Telemetry lifecycle</div><h2>Telemetry 不是「寫完 log」就結束</h2>
  <div class="telemetry-lifecycle">
    <div class="life-step"><div class="n">01 · Generate</div><h3>生成</h3><p>SDK、logger、exporter、auto instrumentation 產生 telemetry。</p><div class="mini">Metrics · Logs · Traces · Profiles</div></div>
    <div class="life-step"><div class="n">02 · Collect</div><h3>收集 / 處理</h3><p>接收、batch、filter、enrich、sample、route。</p><div class="mini">OpenTelemetry Collector · Prometheus scrape · Fluent Bit</div></div>
    <div class="life-step"><div class="n">03 · Store</div><h3>儲存 / Index</h3><p>依 signal 特性選擇 TSDB、log store、trace store。</p><div class="mini">Mimir / Prometheus · Loki · Tempo</div></div>
    <div class="life-step"><div class="n">04 · Use</div><h3>查詢 / 告警 / Debug</h3><p>Dashboard、Explore、alert、drill-down、incident investigation。</p><div class="mini">Grafana · PromQL · LogQL · TraceQL</div></div>
  </div>
  <div class="callout">原分享把 O11y 拆成「生成 → 收集 → 儲存 → 使用」。2026 更常把 Collector 視為 vendor-neutral telemetry pipeline，而不是每種 signal 都各維護一套 agent。</div>
</div><aside class="speaker-note">這張源自《國泰人壽的可觀測性實踐》p.19 的四步驟，再用 2026 的 OTel Collector 觀念更新。OpenTelemetry Collector 官方定位就是 receive / process / export traces、metrics、logs，目的之一是減少重複維護多種 agent/collector。</aside></section>

<section class="slide" data-title="Signal Pipelines"><div class="content">
  <div class="eyebrow">O11y · 三條典型資料流</div><h2>Signal 不同，pipeline 也不必完全一樣</h2>
  <div class="pipeline-grid">
    <div class="pipeline-row"><div class="pipeline-name">Metrics</div><div class="pipeline-flow"><div class="pipe src">App / Exporter</div><div class="pipe collect">Scrape / OTLP</div><div class="pipe store">Prometheus / Mimir</div><div class="pipe use">PromQL / Grafana</div></div></div>
    <div class="pipeline-row"><div class="pipeline-name">Logs</div><div class="pipeline-flow"><div class="pipe src">Logger / stdout</div><div class="pipe collect">Fluent Bit / OTel Collector</div><div class="pipe store">Loki / Elastic</div><div class="pipe use">LogQL / Kibana / Grafana</div></div></div>
    <div class="pipeline-row"><div class="pipeline-name">Traces</div><div class="pipeline-flow"><div class="pipe src">SDK / Zero-code</div><div class="pipe collect">OTel Collector</div><div class="pipe store">Tempo / Trace backend</div><div class="pipe use">TraceQL / Grafana</div></div></div>
  </div>
  <div class="callout">這些是<strong>典型組合，不是唯一組合</strong>。OpenTelemetry 的價值之一，就是把 instrumentation / collection 與 backend 解耦。</div>
</div><aside class="speaker-note">來源分享 p.20–26 分別用 Prometheus→Mimir、Logger→Fluent Bit→Loki、OTel→Collector→Tempo 說明 pipeline。這裡保留那個教學價值，但不把某個 vendor stack 當唯一標準。Prometheus/OpenMetrics 仍是常見 metrics exposition；OTel Collector 則能統一接收與轉送多種 signals。</aside></section>

<section class="slide" data-title="Instrumentation"><div class="content">
  <div class="eyebrow">O11y · Instrumentation</div><h2>Code-based + Zero-code，兩種都需要</h2>
  <div class="instrument-grid">
    <div class="instrument-card accent-cyan"><h3>Code-based / Manual</h3><p>你決定 span 名稱、attributes、business context、custom metrics；語義最精準，但需要改程式。</p><div class="chips"><span class="chip">business span</span><span class="chip">model_version</span><span class="chip">feature flag</span></div></div>
    <div class="instrument-card accent-purple"><h3>Zero-code / Automatic</h3><p>Agent / bytecode / monkey patch / eBPF 等方式，先自動收 HTTP、DB、MQ 等 library telemetry；導入快、侵入性低。</p><div class="chips"><span class="chip">Java agent</span><span class="chip">Python agent</span><span class="chip">K8s Operator</span></div></div>
  </div>
  <div class="legacy-flow"><div class="legacy-box">Legacy Service</div><div class="legacy-arrow">→</div><div class="legacy-box">Zero-code instrumentation</div><div class="legacy-arrow">→</div><div class="legacy-box">Traces</div><div class="legacy-arrow">→</div><div class="legacy-box">Span Metrics / RED</div></div>
  <div class="callout">Legacy 系統尤其適合先從低侵入 auto-instrumentation 開始；但要看懂「推薦階段、模型版本、fallback 原因」這類 domain context，最後仍需要 code-based instrumentation。</div>
</div><aside class="speaker-note">來源分享 p.24–28 很適合保留：manual vs automatic，以及 legacy system 用低侵入 instrumentation，再從 traces 產生 request metrics。現在 OTel 官方稱 zero-code instrumentation，可自動捕捉 inbound/outbound HTTP、database、message queue 等 library activity；Collector 目前也有 Span Metrics Connector，Tempo 也能用 metrics-generator / TraceQL metrics 從 traces 產生 RED 類 metrics。</aside></section>

<section class="slide" data-title="Signal Correlation"><div class="content">
  <div class="eyebrow">O11y · Signals 搭配才有價值</div><h2>Correlation：不要讓 Metrics / Logs / Traces 各自成孤島</h2>
  <div class="corr-wrap">
    <div class="corr-map">
      <div class="corr-node metrics">Metrics<br><span class="small">症狀 / 趨勢</span></div>
      <div class="corr-node logs">Logs<br><span class="small">事件細節</span></div>
      <div class="corr-node traces">Traces<br><span class="small">因果路徑</span></div>
      <div class="corr-link exemplar">Exemplar<br>Metrics → Trace</div>
      <div class="corr-link traceid">trace_id / span_id<br>Logs ↔ Trace</div>
      <div class="corr-link spanmetrics">Span Metrics<br>Trace → Metrics</div>
    </div>
    <div class="corr-side">
      <div class="corr-card"><h3>Metrics → Traces</h3><p>Exemplar 像 metric 上的「書籤」，從 latency spike 直接跳到代表性 trace。</p></div>
      <div class="corr-card"><h3>Logs ↔ Traces</h3><p>Structured log 帶 trace_id / span_id，就能從 trace 找 log，也能從 log 回 trace。</p></div>
      <div class="corr-card"><h3>Traces → Metrics</h3><p>Span Metrics / TraceQL metrics 可從 trace 聚合 Rate / Error / Duration、service graph 等。</p></div>
      <div class="corr-card"><h3>共同 Context</h3><p>service、environment、release、route、experiment 等維度要能對齊，才真的能 drill down。</p></div>
    </div>
  </div>
</div><aside class="speaker-note">這一頁是來源分享 p.34–40 最值得帶進來的部分：signals 的綜效，而不是三個 silo。Grafana 現在仍把 exemplar 定義為 metric 到特定 trace 的橋樑；Loki derived fields 可以從 log trace ID 跳到 Tempo；Tempo 可從 traces 產生 RED metrics，或直接用 TraceQL metrics 做 aggregation。</aside></section>
`;

    if(!html.includes('data-title="Telemetry Lifecycle"')){
      const marker = '<section class="slide" data-title="Diagnosis">';
      const pos = html.indexOf(marker);
      if(pos >= 0) html = html.slice(0,pos) + slides + html.slice(pos);
    }
    return html;
  };
})();
