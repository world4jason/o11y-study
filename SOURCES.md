# Sources

Official and primary references for the Chapter 13 study deck and the 2026 comparison.

## Book basis

- 《關鍵迭代：可信賴的線上對照實驗》Chapter 13, pp.153–156.
- 13.1：Client-side / server-side instrumentation、client logging limitations、clock synchronization.
- 13.2：multi-source logs、shared join identifiers、common fields / formats.
- 13.3：instrumentation culture、instrument during development、monitor telemetry quality.

## OpenTelemetry

- OpenTelemetry — What is OpenTelemetry?  
  https://opentelemetry.io/docs/what-is-opentelemetry/
- OpenTelemetry documentation  
  https://opentelemetry.io/docs/
- OpenTelemetry GenAI semantic conventions  
  https://github.com/open-telemetry/semantic-conventions-genai

OpenTelemetry is a vendor-neutral framework and toolkit for generating, collecting and exporting traces, metrics and logs. It is not itself an observability backend.

## Web / Real User Monitoring

### RUM
- Grafana Frontend Observability / RUM  
  https://grafana.com/products/cloud/frontend-observability/
- Grafana Frontend Observability capabilities  
  https://grafana.com/docs/grafana-cloud/observe-and-act/monitor-applications/frontend-observability/introduction/what-you-can-do/
- Grafana Faro OSS  
  https://grafana.com/oss/faro/

RUM means Real User Monitoring: frontend telemetry collected from real end-user sessions, including Web Vitals, navigation timing, device/network context, errors, interactions and browser traces. It is distinct from synthetic monitoring, which actively simulates user journeys.

## App / Android quality

### ANR
- Android Developers — ANRs  
  https://developer.android.com/topic/performance/vitals/anr
- Android Developers — Diagnose and fix ANRs  
  https://developer.android.com/topic/performance/anrs/diagnose-and-fix-anrs
- Android vitals  
  https://developer.android.com/games/optimize/vitals

ANR means Application Not Responding. Android triggers ANR conditions when an app cannot respond within platform-defined timeouts; for input dispatch, the typical timeout is 5 seconds. Android vitals tracks ANR rate and user-perceived ANR rate, with user-perceived ANR treated as a core vital.

### Firebase
- Google Analytics for Firebase  
  https://firebase.google.com/docs/analytics
- Firebase Performance Monitoring  
  https://firebase.google.com/docs/perf-mon
- Firebase screen rendering traces  
  https://firebase.google.com/docs/perf-mon/screen-traces
- Firebase pricing  
  https://firebase.google.com/pricing

### PostHog
- PostHog  
  https://posthog.com/

Product analytics, session replay, error tracking, feature flags and experiments.

### Sentry
- Mobile Session Replay GA  
  https://sentry.io/changelog/session-replay-for-mobile-is-now-generally-available/

### Countly Lite
- Countly Lite  
  https://countly.com/lite
- Countly licensing FAQ  
  https://support.countly.com/hc/en-us/articles/360037501312-Countly-Licensing-FAQ

Open-source, self-hosted product analytics covering mobile, web and desktop.

## Frontend / Web observability

### Grafana Faro
- Grafana Faro OSS  
  https://grafana.com/oss/faro/
- Grafana Cloud Frontend Observability  
  https://grafana.com/docs/grafana-cloud/observe-and-act/monitor-applications/frontend-observability/

Open-source browser RUM SDK for performance metrics, logs, exceptions, events and traces.

### OpenReplay
- OpenReplay documentation  
  https://docs.openreplay.com/

Open-source, self-hosted session replay and frontend debugging stack.

## Backend observability stacks

### Grafana ecosystem
- Grafana Tempo  
  https://grafana.com/oss/tempo/
- Grafana Loki  
  https://grafana.com/oss/loki/
- Grafana Mimir  
  https://grafana.com/oss/mimir/
- Grafana Faro  
  https://grafana.com/oss/faro/

### Elastic / Kibana
- OpenTelemetry with Elastic APM  
  https://www.elastic.co/docs/solutions/observability/apm/opentelemetry
- Start with OpenTelemetry in Elastic  
  https://www.elastic.co/docs/solutions/observability/get-started/opentelemetry/start-with-otel

Elastic supports OpenTelemetry / OTLP ingestion and visualizes observability data through Kibana.

### SigNoz
- What is SigNoz?  
  https://signoz.io/docs/what-is-signoz/

Open-source OpenTelemetry-based observability platform for logs, metrics, traces and exceptions.

### ClickStack / HyperDX
- ClickStack announcement  
  https://clickhouse.com/blog/clickstack-a-high-performance-oss-observability-stack-on-clickhouse

Open-source observability stack built on ClickHouse, covering logs, metrics, traces and session replay.

## LLM / Agent observability

### Langfuse
- Langfuse  
  https://langfuse.com/
- Observability / tracing  
  https://langfuse.com/docs/observability/overview

Tracing, prompts, datasets, experiments and evaluations for LLM / agent applications.

### Arize Phoenix
- Phoenix GitHub repository  
  https://github.com/Arize-ai/phoenix

Open-source AI observability and evaluation platform with OpenTelemetry-based tracing, evaluations, datasets and experiments.
