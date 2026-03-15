export interface RadarAxis {
  label: string
  score: number // 1–5
}

export interface CareerPhase {
  period: string
  role: string
  description: string
  strengths: string[]
  radar: RadarAxis[]
  certifications: string[]
}

export const careerPhases: CareerPhase[] = [
  {
    period: "2016 – 2021",
    role: "インフラエンジニア（オンプレミス）",
    description:
      "新卒入社後、エンタープライズ向けオンプレミス基盤の設計・構築に従事。Oracle DB・仮想化基盤・クラスタ製品を中心に、通信・金融・医療・流通など多業種の多規模の案件を担当。3年目からはプロジェクト内のリーダーとして顧客折衝・メンバー管理・ベンダーコントロールも経験。",
    strengths: [
      "オンプレ基盤（サーバー・DB・仮想化）の設計・構築",
      "顧客・チーム・ベンダー間の問題を先読み、会話をリードして積極的に解決",
    ],
    radar: [
      { label: "サーバー設計/構築", score: 4 },
      { label: "データベース",      score: 3.5 },
      { label: "仮想化",   score: 4 },
      { label: "運用・監視",        score: 2 },
      { label: "セキュリティ",      score: 2.5 },
      { label: "ネットワーク",      score: 2.5 },
    ],
    certifications: [
      "応用情報技術者 (2014)",
      "セキュリティスペシャリスト (2016)",
      "Oracle Bronze / Silver / Gold (2017–2018)",
    ],
  },
  {
    period: "2021 – 2023",
    role: "R&D（クラウドネイティブ）",
    description:
      "クラウドネイティブのR&Dへ志願して異動し、主に可観測性を担当。初期のOpenTelemetryをゼロから調査し社内ガイドを整備、Killercoda環境でハンズオン化して60名以上に講義を実施。並行して自社サービスのSRE立ち上げも支援し、Azure上の非機能整備・SLI/SLO策定・パイプライン構築を担当。",
    strengths: [
      "可観測性全般やOtel,APMといった個別までの知識・実践・研修講師",
      "AzureベースのSRE立ち上げ・SLI/SLO策定,ITSMS認証に準拠した運用設計",
      "社内での情報発信・勉強会の企画",
    ],
    radar: [
      { label: "可観測性",    score: 3.5 },
      { label: "クラウド",    score: 3 },
      { label: "IaC",         score: 3 },
      { label: "コンテナ", score: 3 },
      { label: "CI/CD",       score: 2.5 },
      { label: "k8s", score: 2.5 },
      { label: "セキュリティ", score: 3 },
    ],
    certifications: [
      "Azure Administrator AZ-103 (2020)",
      "Azure Solution Architect AZ-300/301 (2020)",
      "AWS Certified Developer – Associate (2021)",
      "AWS DevOps Engineer – Professional (2022)",
    ],
  },
  {
    period: "2023 – 現在",
    role: "SRE",
    description:
      "複数サービスの共通プラットフォームを管理しながら、各サービスの信頼性ベースライン向上を推進。前職の経験を活かし、Datadog・OpenTelemetryを複数の社内サービスに導入、啓蒙。加えて、各プロダクトのセキュリティ成熟度の向上や脆弱性試験の内製化を主導。障害対応改善のタスクフォースをリードし社内表彰を受賞。",
    strengths: [
      "モニタリング・可観測性の向上",
      "省庁・ISMS・クラウドの推奨等に合わせたセキュリティ設計",
      "他部署・組織を巻き込み、現状の整理や課題解決をリード",
    ],
    radar: [
      { label: "可観測性",       score: 4 },
      { label: "SLI/SLO設計",   score: 4 },
      { label: "クラウド",   score: 4 },
      { label: "IaC",     score: 4 },
      { label: "CI/CD",     score: 3.5 },
      { label: "インシデント対応", score: 3.5 },
      { label: "信頼性設計",     score: 3.5 },
      { label: "セキュリティ",     score: 3.5 },
      { label: "開発力",         score: 3 },
    ],
    certifications: [],
  },
]

export const positionYears = [
  { role: "SRE",                years: 3.5, color: "var(--pink)"        },
  { role: "インフラPJリーダー", years: 3.5, color: "var(--purple-dark)" },
  { role: "R&D",                years: 2.5, color: "var(--teal-dark)"   },
  { role: "インフラPJメンバー", years: 1.5, color: "var(--purple)"      },
  { role: "PM / サブPM",        years: 1,   color: "var(--teal)"        },
]

export const languageYears = [
  { name: "Terraform",  years: 4, color: "var(--pink)" },
  { name: "TypeScript", years: 3, color: "var(--pink)" },
  { name: "Rust",       years: 2, color: "var(--pink)" },
  { name: "Python",     years: 1, color: "var(--pink)" },
  { name: "Java",       years: 1, color: "var(--teal)" },
]
