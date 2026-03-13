export interface Work {
  title: string
  description: string
  tags: string[]
  url: string
  category: "Education" | "Observability" | "Learning" | "Web"
}

export const works: Work[] = [
  {
    title: "クラウドネイティブ ハンズオン",
    description:
      "KillerCoda を使ったクラウドネイティブ技術のハンズオン教材。Kubernetes 等の実践的な学習コンテンツを提供。",
    tags: ["Kubernetes", "Docker", "Education"],
    url: "https://github.com/nssol-kaminakaya/killercoda",
    category: "Education",
  },
  {
    title: "OpenTelemetry Demo",
    description:
      "OpenTelemetry の学習用デモアプリ。分散トレーシング・メトリクス・ログの収集と可視化を実装。",
    tags: ["OpenTelemetry", "Observability", "Go"],
    url: "https://github.com/kkmnky/opentelemetry-demo",
    category: "Observability",
  },
  {
    title: "OTel Demo Shop",
    description:
      "OpenTelemetry 学習用デモアプリの初期版。Java 実装のマイクロサービス EC サイト。",
    tags: ["OpenTelemetry", "Java", "Observability"],
    url: "https://github.com/kkmnky/otel-demo-shop",
    category: "Observability",
  },
  {
    title: "Rusty Todo",
    description: "Rust の学習を目的として作成した Todo アプリ。",
    tags: ["Rust"],
    url: "https://github.com/kkmnky/rusty-todo",
    category: "Learning",
  },
  {
    title: "このブログ",
    description: "kmnky.dev のブログシステム。",
    tags: ["TypeScript", "Blog"],
    url: "https://github.com/kkmnky/myblog",
    category: "Web",
  },
]
