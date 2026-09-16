from pathlib import Path

path = Path("index.html")
html = path.read_text(encoding="utf-8")

css_marker = ".journey-infographic{"
css = r'''
.journey-infographic{margin-top:10px;border:1px solid var(--line);border-radius:24px;padding:20px 22px;background:linear-gradient(180deg,rgba(96,165,250,.055),rgba(255,255,255,.018));box-shadow:var(--shadow);overflow:auto}
.journey-canvas{min-width:940px}
.journey-meta{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:14px}.journey-meta .session{font-weight:850;font-size:15px}.journey-meta .time-arrow{color:var(--muted);font-size:13px;letter-spacing:.08em;text-transform:uppercase}
.journey-head{display:grid;grid-template-columns:130px repeat(4,1fr);gap:12px;align-items:center;position:relative;margin-bottom:10px}.journey-head::after{content:"";position:absolute;left:156px;right:7%;top:27px;height:2px;background:linear-gradient(90deg,rgba(103,232,249,.22),rgba(103,232,249,.75),rgba(196,181,253,.45));z-index:0}.journey-head .blank{height:1px}.j-step{position:relative;z-index:1;text-align:center}.j-step .dot{width:13px;height:13px;border-radius:50%;margin:0 auto 8px;background:var(--cyan);box-shadow:0 0 0 6px rgba(103,232,249,.10)}.j-step strong{display:block;font-size:16px}.j-step span{display:block;color:var(--muted);font-size:12px;margin-top:3px}
.replay-band{display:grid;grid-template-columns:130px 1fr;gap:12px;align-items:center;margin:8px 0 12px}.replay-label{color:var(--muted);font-size:12px;text-transform:uppercase;letter-spacing:.09em}.replay-track{border:1px dashed rgba(196,181,253,.42);background:rgba(196,181,253,.07);border-radius:999px;padding:8px 14px;color:#ddd6fe;font-size:13px;text-align:center}
.journey-lanes{display:grid;grid-template-columns:130px repeat(4,1fr);gap:10px 12px;align-items:stretch}.lane-name{display:flex;align-items:center;font-size:13px;font-weight:850;letter-spacing:.05em;text-transform:uppercase;color:var(--muted);padding-right:8px}.lane-cell{min-height:70px;border-radius:14px;border:1px solid rgba(255,255,255,.075);background:rgba(255,255,255,.023);padding:10px;display:flex;flex-wrap:wrap;gap:7px;align-content:center;align-items:center}.lane-cell.muted-cell{opacity:.42}.signal{display:inline-flex;align-items:center;gap:6px;border-radius:999px;padding:6px 9px;font-size:12px;font-weight:750;border:1px solid rgba(255,255,255,.10);background:rgba(255,255,255,.045);white-space:nowrap}.signal.rum{border-color:rgba(110,231,183,.28);color:#bbf7d0;background:rgba(110,231,183,.07)}.signal.product{border-color:rgba(103,232,249,.28);color:#cffafe;background:rgba(103,232,249,.07)}.signal.error{border-color:rgba(253,164,175,.38);color:#fecdd3;background:rgba(253,164,175,.09)}.signal.trace{border-color:rgba(196,181,253,.38);color:#e9d5ff;background:rgba(196,181,253,.09)}
.trace-branch{display:flex;align-items:center;gap:7px;flex-wrap:wrap;width:100%}.trace-branch .arrow{color:var(--purple);font-weight:900}.trace-mini{display:inline-flex;gap:5px;align-items:center}.trace-mini span{font-size:11px;padding:4px 6px;border-radius:7px;background:rgba(196,181,253,.10);color:#ddd6fe;border:1px solid rgba(196,181,253,.18)}
.journey-legend{display:flex;gap:14px;flex-wrap:wrap;margin-top:12px;padding-left:142px;color:var(--muted);font-size:12px}.journey-legend b{color:var(--text)}
@media(max-width:900px){.journey-infographic{padding:16px}.journey-canvas{min-width:860px}}
'''

if css_marker not in html:
    html = html.replace("</style>", css + "\n</style>", 1)

start = html.index('<section class="slide" data-title="Web Trace">')
end = html.index('</section>', start) + len('</section>')

new_slide = r'''<section class="slide" data-title="Web Trace"><div class="content">
<div class="eyebrow">Web · 一次 User Journey</div><h2>Client telemetry 現在更像<strong style="color:var(--cyan)">一段旅程</strong></h2>
<div class="journey-infographic"><div class="journey-canvas">
  <div class="journey-meta"><div class="session">Session #84F2 · /search</div><div class="time-arrow">time →</div></div>
  <div class="journey-head">
    <div class="blank"></div>
    <div class="j-step"><div class="dot"></div><strong>Route / View</strong><span>頁面出現</span></div>
    <div class="j-step"><div class="dot"></div><strong>Interaction</strong><span>使用者操作</span></div>
    <div class="j-step"><div class="dot"></div><strong>API Request</strong><span>跨進後端</span></div>
    <div class="j-step"><div class="dot"></div><strong>Outcome</strong><span>任務結果</span></div>
  </div>
  <div class="replay-band"><div class="replay-label">Session Replay</div><div class="replay-track">重建這段 session 的畫面、互動與時間順序</div></div>
  <div class="journey-lanes">
    <div class="lane-name">RUM / UX</div>
    <div class="lane-cell"><span class="signal rum"><span class="term" tabindex="0" data-tip="Largest Contentful Paint">LCP</span></span><span class="signal rum"><span class="term" tabindex="0" data-tip="Cumulative Layout Shift">CLS</span></span><span class="signal rum">navigation</span></div>
    <div class="lane-cell"><span class="signal rum"><span class="term" tabindex="0" data-tip="Interaction to Next Paint">INP</span></span><span class="signal rum">interaction latency</span></div>
    <div class="lane-cell"><span class="signal rum">network timing</span></div>
    <div class="lane-cell muted-cell"></div>

    <div class="lane-name">Product Events</div>
    <div class="lane-cell"><span class="signal product">page_view</span></div>
    <div class="lane-cell"><span class="signal product">item_viewed</span><span class="signal product">search_submitted</span></div>
    <div class="lane-cell muted-cell"></div>
    <div class="lane-cell"><span class="signal product">checkout_started</span></div>

    <div class="lane-name">Reliability</div>
    <div class="lane-cell muted-cell"></div>
    <div class="lane-cell"><span class="signal error">⚠ JS Error</span></div>
    <div class="lane-cell muted-cell"></div>
    <div class="lane-cell muted-cell"></div>

    <div class="lane-name">Trace / System</div>
    <div class="lane-cell muted-cell"></div>
    <div class="lane-cell muted-cell"></div>
    <div class="lane-cell"><div class="trace-branch"><span class="signal trace"><span class="term" tabindex="0" data-tip="把 frontend request 與 backend spans 串在同一條 trace 上。">trace_id</span></span><span class="arrow">→</span><div class="trace-mini"><span>API</span><span>DB</span><span>Redis</span><span>RecSys</span></div></div></div>
    <div class="lane-cell muted-cell"></div>
  </div>
  <div class="journey-legend"><span><b>橫向</b>＝時間 / journey</span><span><b>縱向</b>＝不同 telemetry signal</span><span><b>trace_id</b>＝從 frontend 鑽進 backend</span></div>
</div></div>
<div class="callout">書裡的 beacon loss / telemetry overhead 問題沒有消失，只是 SDK、batching、RUM 與 browser API 更成熟。</div>
</div><aside class="speaker-note">這頁改成 timeline + swimlane。AntV Infographic 的設計文件把流程／路線／timeline 歸在 path-oriented linear layout；這裡沿用同樣視覺原則，但用自訂 HTML/CSS 表達 user journey、product events、reliability 與 backend trace 四條訊號。重點是讓大家一眼看到：session 是時間軸，telemetry 是疊在上面的多條 lane，而 API request 可以透過 trace context 鑽進 backend。</aside></section>'''

html = html[:start] + new_slide + html[end:]
path.write_text(html, encoding="utf-8")
print("patched", path)
