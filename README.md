# o11y-study

讀書會用的 observability / instrumentation study notes and presentation。

目前主題：**《關鍵迭代：可信賴的線上對照實驗》第 13 章〈工具化日誌記錄〉：從書中的 client / server instrumentation，走到 2026 的 App、推薦系統、OpenTelemetry、LLM / Agent Observability。**

## Chapter 13 presentation

`index.html` 是零 build-step 的單頁簡報網站，可以直接用瀏覽器打開，也適合部署到 GitHub Pages。

### 操作

- `→` / `Space` / `PageDown`：下一頁
- `←` / `PageUp`：上一頁
- `N`：顯示 / 隱藏講者提示
- `Home` / `End`：第一頁 / 最後一頁
- 瀏覽器列印可輸出成 PDF；列印模式會自動把每張 slide 分頁。

### 敘事主線

1. **先把書講完整**：為什麼 instrumentation 是實驗地基、client-side、server-side、multi-source join、instrumentation culture。
2. **補時代背景**：2020 並不是只有 logging；APM / tracing 已存在，但 OpenTelemetry 正在把 fragmented ecosystem 標準化。
3. **翻成 App / 推薦系統語言**：product events、request / trace、experiment、model version、impression / click attribution 如何串起來。
4. **再看 2026 工具箱**：PostHog、Firebase、Sentry、Countly、Grafana/Faro/Loki/Tempo/Mimir、Elastic/Kibana、SigNoz、ClickStack/HyperDX。
5. **最後延伸到 LLM / Agent**：prompt / token / retrieval / tool / workflow tracing，以及 Observability 與 Evaluation 的差異。

### 簡報設計原則

- 每張只留一個主要訊息，避免 logo wall 或大段文字。
- 工具細節、限制與講法放在 speaker notes（按 `N`）。
- 容易變動的官方資料與網址集中在 [`SOURCES.md`](./SOURCES.md)，不塞滿畫面。

### 資料來源

書中內容以 Chapter 13 pp.153–156 為基礎；2026 的工具與做法是另外查證的外部更新。完整官方來源見 [`SOURCES.md`](./SOURCES.md)。

## GitHub Pages

合併本分支後，可在 repository 的 **Settings → Pages** 將 `main` branch / root 設為 Pages source，即可直接發佈靜態簡報。
