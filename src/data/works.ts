export interface WorkLink {
  label: string
  url: string
}

export type WorkPhase = "infra" | "rnd" | "sre"

export interface Work {
  title: string
  description: string
  tags: string[]
  category: "Education" | "Observability" | "Learning" | "Web"
  phase?: WorkPhase   // どのキャリアフェーズで学んだか: infra=紫, rnd=緑, sre=ピンク
  github?: string
  links?: WorkLink[]
}

export const phaseStyle: Record<WorkPhase, { label: string; style: string }> = {
  infra: { label: "インフラ期",   style: "background-color: var(--purple-light); color: var(--purple-dark)" },
  rnd:   { label: "R&D期",        style: "background-color: var(--teal-light);   color: var(--teal-dark)"   },
  sre:   { label: "SRE期",        style: "background-color: var(--pink-light);   color: var(--pink-dark)"   },
}

export const works: Work[] = [
  {
    title: "個人ブログ",
    description: "転職を機に情報発信をしつつ、フロントエンドの勉強をするため自前で個人ブログを運用",
    tags: ["TypeScript", "Next.js", "Blog"],
    category: "Web",
    phase: "sre",
    github: "https://github.com/kkmnky/myblog",
    links: [{ label: "サイト", url: "https://kmnky.dev/" }],
  },
  {
    title: "Rusty Todo",
    description: "Rust の学習を目的として作成した Todo アプリ。",
    tags: ["Rust"],
    category: "Learning",
    phase: "sre",
    github: "https://github.com/kkmnky/rusty-todo",
  },
  {
    title: "OpenTelemetry Demo",
    description:
      "自己学習兼会社で分散トレーシングやOpenTelemetryを普及するために作ったサンプル",
    tags: ["OpenTelemetry", "Observability", "Rust", "Django"],
    category: "Observability",
    phase: "sre",
    github: "https://github.com/kkmnky/opentelemetry-demo",
  },
  {
    title: "クラウドネイティブ ハンズオン",
    description:
      "外部イベントで登壇した際に作成したハンズオン。KillerCoda環境を利用。",
    tags: ["Observability", "MicroService"],
    category: "Education",
    phase: "rnd",
    github: "https://github.com/nssol-kaminakaya/killercoda",
    links: [{ label: "イベント", url: "https://ibm-developer.connpass.com/event/285630/" }],
  },
  {
    title: "OTel Demo Shop",
    description:
      "OpenTelemetry 学習用デモアプリの初期版。Javaで実装。",
    tags: ["OpenTelemetry", "Java", "Observability"],
    category: "Observability",
    phase: "rnd",
    github: "https://github.com/kkmnky/otel-demo-shop",
  },
]
