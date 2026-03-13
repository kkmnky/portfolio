export interface CareerPhase {
  period: string
  role: string
  description: string
  strengths: string[]
  skills: string[]
  certifications: string[]
}

export const careerPhases: CareerPhase[] = [
  {
    period: "20XX – 20XX", // TODO: 実際の年を入れてください
    role: "オンプレインフラエンジニア",
    description:
      "物理サーバー・ネットワーク機器の設計・構築・運用を担当。大規模な企業インフラの安定稼働を支えながら、運用自動化や監視設計に取り組む。",
    strengths: ["インフラ基盤設計", "障害対応・トラブルシューティング", "運用自動化"],
    skills: ["Linux", "ネットワーク設計", "VMware", "Shell Script", "DNS/DHCP", "監視設計"],
    certifications: [
      // TODO: 資格名を追加してください
    ],
  },
  {
    period: "20XX – 20XX", // TODO: 実際の年を入れてください
    role: "クラウドネイティブ研究",
    description:
      "Kubernetes をはじめとするクラウドネイティブ技術の研究・検証に従事。社内へのクラウドネイティブ技術の普及活動やハンズオン教材の作成も担当。",
    strengths: ["コンテナオーケストレーション", "IaC・GitOps", "技術普及・教育コンテンツ作成"],
    skills: ["Kubernetes", "Docker", "Helm", "Terraform", "AWS", "GCP", "GitOps", "CI/CD"],
    certifications: [
      // TODO: 資格名を追加してください
    ],
  },
  {
    period: "20XX – 現在", // TODO: 実際の年を入れてください
    role: "SRE",
    description:
      "SLO/SLI の設計・運用、可観測性基盤の構築、インシデント管理プロセスの改善に取り組む。開発チームと連携し、信頼性とデプロイ速度の両立を推進。",
    strengths: ["SLO/SLI 設計", "可観測性基盤構築", "インシデント対応・改善"],
    skills: [
      "SLO/SLI",
      "Prometheus",
      "Grafana",
      "OpenTelemetry",
      "Go",
      "Python",
      "ArgoCD",
      "Incident Management",
    ],
    certifications: [
      // TODO: 資格名を追加してください
    ],
  },
]
