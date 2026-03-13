export interface Activity {
  year: number
  conference: string
  role: string
  url?: string
}

export const activities: Activity[] = [
  {
    year: 2026,
    conference: "SRE Kaigi 2026",
    role: "スタッフ",
  },
  {
    year: 2025,
    conference: "Observability Conference Tokyo 2025",
    role: "スタッフ",
  },
  {
    year: 2023,
    conference: "CloudNative Days 2023",
    role: "スタッフ",
  },
  {
    year: 2022,
    conference: "CloudNative Days 2022",
    role: "スタッフ",
  },
  {
    year: 2021,
    conference: "CloudNative Days 2021",
    role: "スタッフ",
  },
]
