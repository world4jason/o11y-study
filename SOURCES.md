# Sources

Official and primary references for the Chapter 13 study deck and the 2026 comparison.

## Book basis

- 《關鍵迭代：可信賴的線上對照實驗》Chapter 13, pp.153–156.
- 13.1：Client-side / server-side instrumentation、client logging limitations、clock synchronization.
- 13.2：multi-source logs、shared join identifiers、common fields / formats.
- 13.3：instrumentation culture、instrument during development、monitor telemetry quality.

## Web / frontend

### Core Web Vitals
- web.dev — Web Vitals  
  https://web.dev/articles/vitals
- web.dev — How SPA architectures affect Core Web Vitals  
  https://web.dev/articles/vitals-spa-faq

Current Core Web Vitals use LCP, INP and CLS. The recommended thresholds are LCP ≤ 2.5 s, INP ≤ 200 ms and CLS ≤ 0.1, assessed at the 75th percentile. In August 2026, web.dev documented Chrome 151 soft-navigation APIs that allow Core Web Vitals to be measured across SPA route transitions, although ecosystem integration is still rolling out.

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

## App / product instrumentation

### Firebase Performance Monitoring
- Firebase Performance Monitoring  
  https://firebase.google.com/docs/perf-mon
- Firebase screen rendering traces  
  https://firebase.google.com/docs/perf-mon/screen-traces
- App start / foreground / background traces  
  https://firebase.google.com/docs/perf-mon/app-start-foreground-background-traces

For native apps, Firebase Performance Monitoring automatically collects app startup, screen rendering, HTTP network and foreground/background lifecycle traces. Screen-rendering traces report slow and frozen frames.

### Firebase Crashlytics
- Crashlytics for Android  
  https://firebase.google.com/docs/crashlytics/android/get-started

Crashlytics reports fatal crashes, non-fatal errors and Android ANRs.

### Android vitals
- Android Developers — Android vitals  
  https://developer.android.com/topic/performance/vitals

Android vitals includes user-perceived crash and ANR rates as core stability vitals, plus battery and memory-related metrics.

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

## Distributed tracing / OpenTelemetry

### W3C Trace Context
- W3C Trace Context  
  https://www.w3.org/TR/trace-context/

Defines the interoperable `traceparent` and `tracestate` HTTP headers used to propagate trace context across services and vendors.

### OpenTelemetry
- What is OpenTelemetry?  
  https://opentelemetry.io/docs/what-is-opentelemetry/
- Semantic Conventions  
  https://opentelemetry.io/docs/specs/semconv/
- General Semantic Conventions  
  https://opentelemetry.io/docs/specs/semconv/general/
- JavaScript Browser instrumentation  
  https://opentelemetry.io/docs/languages/js/getting-started/browser/
- OpenTelemetry GenAI semantic conventions  
  https://github.com/open-telemetry/semantic-conventions-genai

OpenTelemetry is a vendor-neutral framework and toolkit for generating, collecting and exporting telemetry. It is not itself an observability backend. Semantic conventions cover traces/spans, metrics, logs, profiles and resources. OpenTelemetry's browser client instrumentation is still explicitly documented as experimental and mostly unspecified.

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
