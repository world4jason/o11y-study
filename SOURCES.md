# Sources

The deck keeps URLs out of the main slides to reduce visual noise. These are the official / primary references used for the 2026 update.

## OpenTelemetry / tracing

- OpenTelemetry — What is OpenTelemetry?  
  https://opentelemetry.io/docs/what-is-opentelemetry/
- OpenTelemetry documentation  
  https://opentelemetry.io/docs/
- OpenTelemetry GenAI semantic conventions  
  https://github.com/open-telemetry/semantic-conventions-genai

Key points used in the deck: OpenTelemetry is a vendor-neutral framework for generating, collecting and exporting traces, metrics and logs; it is not itself the storage/visualization backend. It originated from the merger of OpenTracing and OpenCensus.

## App / product instrumentation

### Firebase
- Google Analytics for Firebase  
  https://firebase.google.com/docs/analytics
- Firebase Performance Monitoring  
  https://firebase.google.com/docs/perf-mon
- Firebase pricing / no-cost products  
  https://firebase.google.com/pricing

Performance Monitoring automatically covers app startup, screen rendering and HTTP network requests on supported native platforms; Firebase lists Analytics, Crashlytics and Performance Monitoring among its no-cost products.

### PostHog
- PostHog product / pricing overview  
  https://posthog.com/

PostHog currently combines product analytics, session replay, error tracking, feature flags and experiments, with usage-based free tiers. Its code is public/open-core, but the company describes cloud as its primary deployment model and self-hosting as comparatively complex.

### Sentry
- Mobile Session Replay GA  
  https://sentry.io/changelog/session-replay-for-mobile-is-now-generally-available/

Sentry's mobile replay supports iOS, Android, Flutter and React Native and correlates replay with errors, logs and network context.

### Countly
- Countly Lite  
  https://countly.com/lite

Countly Lite is an open-source, self-hosted product analytics option covering mobile, web and desktop environments.

## Frontend / Web observability

### Grafana Faro
- Grafana Faro OSS  
  https://grafana.com/oss/faro/
- Grafana Cloud Frontend Observability  
  https://grafana.com/docs/grafana-cloud/observe-and-act/monitor-applications/frontend-observability/
- Supported environments  
  https://grafana.com/docs/grafana-cloud/observe-and-act/monitor-applications/frontend-observability/introduction/supported-environments/

Faro is an open-source browser RUM SDK that collects performance metrics, logs, exceptions, events and traces. Grafana documents React Native and other non-browser JavaScript environments as unsupported for Faro.

## Backend observability stacks

### Grafana ecosystem
- Grafana Tempo  
  https://grafana.com/oss/tempo/
- Grafana Faro  
  https://grafana.com/oss/faro/

The deck uses the common Grafana-stack mental model: Grafana for visualization/exploration, Tempo for traces, Loki for logs, Prometheus/Mimir for metrics, and Faro for browser RUM.

### Elastic / Kibana
- OpenTelemetry with Elastic APM  
  https://www.elastic.co/docs/solutions/observability/apm/opentelemetry
- Start with OpenTelemetry in Elastic  
  https://www.elastic.co/docs/solutions/observability/get-started/opentelemetry/start-with-otel

Elastic accepts OpenTelemetry data over OTLP. As of 2026, Elastic's OTel-native browser RUM remains limited for production use; Elastic recommends its classic browser agent for production RUM while EDOT Browser remains Technical Preview.

### SigNoz
- What is SigNoz?  
  https://signoz.io/docs/what-is-signoz/

SigNoz is an open-source OpenTelemetry-based observability tool for logs, metrics, traces and exceptions.

### ClickStack / HyperDX
- ClickStack announcement  
  https://clickhouse.com/blog/clickstack-a-high-performance-oss-observability-stack-on-clickhouse
- ClickStack architecture / Next.js example  
  https://clickhouse.com/blog/instrumenting-your-app-with-otel-clickstack
- Browser RUM update (May 2026)  
  https://clickhouse.com/blog/whats-new-in-clickstack-may-2026

ClickStack combines an OpenTelemetry Collector, ClickHouse and the HyperDX/ClickStack UI. It supports logs, metrics, traces and session replay; recent releases add an out-of-the-box Browser RUM dashboard.

## LLM / Agent observability

### Langfuse
- Observability / tracing  
  https://langfuse.com/docs/observability/overview
- Evaluation overview  
  https://langfuse.com/docs/evaluation/overview

Langfuse is open source and self-hostable, and models LLM/agent execution as traces with prompts, responses, retrieval, tools, token usage, latency and evaluation scores.

### Arize Phoenix
- Phoenix GitHub repository  
  https://github.com/Arize-ai/phoenix

Phoenix is an open-source AI observability/evaluation platform with OpenTelemetry-based tracing, evaluations, datasets and experiments.

## Book basis

- 《關鍵迭代：可信賴的線上對照實驗》Chapter 13, pp.153–156 — the four-page excerpt used in this study session.
- The deck intentionally preserves the chapter's original framing first: client-side instrumentation, server-side instrumentation, multi-source log joins, and instrumentation culture. The modern tooling sections are an external 2026 update, not claims made by the book.
