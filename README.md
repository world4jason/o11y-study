# o11y-study

讀書會用的 observability / instrumentation study notes and presentation。

目前主題：**《關鍵迭代：可信賴的線上對照實驗》第 13 章〈工具化日誌記錄〉：從當時的 instrumentation 到 2026 的 Web / App / OpenTelemetry / Recommendation / LLM / Agent Observability。**

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
2. 補上 observability 基礎：signals、telemetry lifecycle、collector / storage / query pipeline、signal correlation。
3. 對照今天的 Web RUM / Core Web Vitals、App user-perceived performance、distributed tracing。
4. 把同一套觀念放回推薦系統：product events、request trace、experiment/model metadata。
5. 延伸到 LLM / Agent：GenAI spans、agent workflow tracing、MCP、evaluation。

### 資料來源

官方 / 一手來源集中在 `SOURCES.md`。另外引用使用者提供的〈國泰人壽的可觀測性實踐〉作為 O11y pipeline / signal-correlation 的案例基礎，並以 2026 官方文件更新工具與標準現況。

## GitHub Pages

`main` branch / repository root 為 Pages source，可直接發佈靜態簡報。
