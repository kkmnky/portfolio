export interface ActivityLink {
  label: string
  url: string
}

export interface Activity {
  period: string
  conference: string
  role: string
  description?: string
  logo?: string       // public/ 以下のパス
  links?: ActivityLink[]
}

export const activities: Activity[] = [
  {
    period: "2026",
    conference: "SRE Kaigi 2026",
    role: "コアスタッフ",
    description: "SREのコミュニティに加わりたく、コアスタッフとして参加。メディア班として公式サイトの構築や配信運営を担当。",
    logo: "/logo-sre-kaigi-2026.png",
    links: [
      { label: "サイト", url: "https://2026.srekaigi.net/" },
      { label: "関連記事", url: "https://kmnky.dev/posts/2026/20260201_srekaigi" },
    ],
  },
  {
    period: "2025",
    conference: "Observability Conference Tokyo 2025",
    role: "コアスタッフ",
    description: "可観測性のコミュニティに加わりたく、コアスタッフとして参加。スポンサー担当として各種諸連絡、提出物の収集、公式サイトのジョブボードやスポンサーロゴの掲載を実施。",
    logo: "/logo-observability-conf-2025.png",
    links: [
      { label: "サイト", url: "https://o11ycon.jp/" },
      { label: "関連記事", url: "https://kmnky.dev/posts/2025/20251107_o11ycon" },
    ],
  },
  {
    period: "2021 – 2023",
    conference: "CloudNative Days",
    role: "コアスタッフ",
    description: "3年間コアスタッフとして参加。スポンサー対応・配信運営を担当。",
    logo: "/logo-cloudnative-days.png",
    links: [
      { label: "サイト",   url: "https://cloudnativedays.jp/" },
      { label: "関連記事", url: "https://qiita.com/kmnky/items/c86749911c71801c6b46" },
    ],
  },
]
