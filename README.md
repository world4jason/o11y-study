# o11y-study

讀書會用的 observability / instrumentation study notes and presentation。

目前主題：**《關鍵迭代：可信賴的線上對照實驗》第 13 章〈工具化日誌記錄〉：從當時的 instrumentation 到 2026 的 Web / App / OpenTelemetry / LLM / Agent Observability。**

## Chapter 13 presentation

`index.html` 是零 build-step 的單頁簡報網站，可以直接用瀏覽器打開，也適合部署到 GitHub Pages。

### 操作

- `→` / `Space` / `PageDown`：下一頁
- `←` / `PageUp`：上一頁
- `N`：顯示 / 隱藏講者提示
- `Home` / `End`：第一頁 / 最後一頁
- 瀏覽器列印可輸出成 PDF；列印模式會自動把每張 slide 分頁。

### 敘事主線

1. 先忠實還原書中第 13 章：client / server instrumentation、multi-source join、logging quality。
2. 補上 2019–2026 的時代背景：OpenTracing + OpenCensus → OpenTelemetry → CNCF Graduated。
3. 對照今天的 Web RUM / Core Web Vitals、App user-perceived performance、distributed tracing。
4. 延伸到 LLM / Agent：GenAI spans、agent workflow tracing、MCP。
5. 最後補上 AI 系統特有的差異：**Observability 回答 what happened；Evaluation 回答 was it good。**

### 資料來源

簡報最後一頁列出官方 / 一手來源，主要包含 OpenTelemetry、CNCF、web.dev、Firebase / Android Developers、OpenAI Agents SDK、Langfuse。GenAI / Agent / MCP semantic conventions 目前仍有 Development 狀態，簡報內已明確標示。

## GitHub Pages

合併本分支後，可在 repository 的 **Settings → Pages** 將 `main` branch / root 設為 Pages source，即可直接發佈靜態簡報。
