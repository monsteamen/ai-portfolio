export default function PortfolioSection() {
  const portfolioItems = [
    {
      id: 1,
      title: "タスク管理アプリ",
      category: "基本システム",
      description: "個人・チーム向けのシンプルなタスク管理システム。追加・完了・削除機能付き。",
      tech: ["React", "TypeScript", "Local Storage"],
      price: "50,000円〜",
      duration: "3日",
      image: "📋",
      features: ["タスク追加・編集・削除", "完了状態管理", "ローカル保存", "レスポンシブ対応"]
    },
    {
      id: 2,
      title: "顧客管理システム",
      category: "ビジネスシステム",
      description: "中小企業向けの顧客情報管理システム。検索・フィルター・エクスポート機能完備。",
      tech: ["Next.js", "TypeScript", "CSV Export"],
      price: "150,000円〜",
      duration: "1週間",
      image: "👥",
      features: ["顧客情報管理", "検索・フィルター", "CSVエクスポート", "データバックアップ"]
    },
    {
      id: 3,
      title: "美容院予約システム",
      category: "業界特化システム",
      description: "美容院・サロン向けの予約管理システム。カレンダー表示と顧客情報連携。",
      tech: ["Next.js", "Calendar API", "Database"],
      price: "300,000円〜",
      duration: "2週間",
      image: "💇‍♀️",
      features: ["予約カレンダー", "顧客管理連携", "時間枠設定", "キャンセル処理"]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-amber-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-amber-900 mb-6">
            制作事例
          </h2>
          <p className="text-xl md:text-2xl text-amber-800 max-w-4xl mx-auto font-semibold leading-relaxed">
            AI開発パートナーとの協業で実際に制作した<br className="hidden md:block" />
            Webアプリケーションをご紹介します
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {portfolioItems.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl shadow-2xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-amber-500">
              {/* アプリアイコン */}
              <div className="bg-gradient-to-br from-amber-500 to-orange-600 p-12 text-center">
                <div className="text-8xl mb-6">{item.image}</div>
                <div className="text-white">
                  <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-lg font-semibold">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* アプリ詳細 */}
              <div className="p-8">
                <h3 className="text-2xl font-black text-amber-900 mb-4">{item.title}</h3>
                <p className="text-amber-700 mb-6 font-medium leading-relaxed">{item.description}</p>

                {/* 機能一覧 */}
                <div className="mb-6">
                  <h4 className="font-black text-amber-900 mb-3 text-lg">主な機能:</h4>
                  <div className="grid grid-cols-1 gap-3">
                    {item.features.map((feature, index) => (
                      <div key={index} className="text-amber-700 flex items-center font-medium">
                        <span className="text-amber-600 mr-2 text-lg">✓</span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* 技術スタック */}
                <div className="mb-6">
                  <h4 className="font-black text-amber-900 mb-3 text-lg">使用技術:</h4>
                  <div className="flex flex-wrap gap-3">
                    {item.tech.map((tech, index) => (
                      <span key={index} className="bg-amber-100 text-amber-800 px-3 py-2 rounded-lg text-sm font-semibold">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 価格・期間 */}
                <div className="flex justify-between items-center mb-6 bg-amber-50 p-4 rounded-xl">
                  <div>
                    <div className="text-sm text-amber-600 font-semibold">開発費用</div>
                    <div className="font-black text-amber-600 text-xl">{item.price}</div>
                  </div>
                  <div>
                    <div className="text-sm text-amber-600 font-semibold">開発期間</div>
                    <div className="font-black text-amber-900 text-xl">{item.duration}</div>
                  </div>
                </div>

                {/* CTAボタン */}
                <button className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-black py-4 px-6 rounded-xl transition duration-300 transform hover:scale-105 shadow-xl">
                  このシステムについて相談
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 追加CTA */}
        <div className="text-center mt-20">
          <div className="bg-white rounded-2xl p-12 shadow-2xl max-w-4xl mx-auto border-l-4 border-amber-500">
            <h3 className="text-3xl md:text-4xl font-black text-amber-900 mb-6">
              あなたのアイデアも形にしませんか？
            </h3>
            <p className="text-xl text-amber-700 mb-8 font-medium leading-relaxed">
              上記以外のシステムも対応可能です。<br className="hidden md:block" />
              まずはお気軽にご相談ください。
            </p>
            <button className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-black py-6 px-12 rounded-2xl transition duration-300 transform hover:scale-105 shadow-2xl text-xl">
              📞 無料相談を申し込む
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}