export default function PricingSection() {
  const plans = [
    {
      name: "ベーシック",
      price: "50,000円",
      duration: "3-5日",
      description: "シンプルなWebサイト・LPに最適",
      features: [
        "レスポンシブデザイン",
        "基本的なフォーム機能",
        "SEO最適化",
        "1回の修正対応",
        "1ヶ月サポート"
      ],
      popular: false,
      icon: "🚀"
    },
    {
      name: "スタンダード",
      price: "150,000円",
      duration: "1-2週間",
      description: "管理機能付きWebアプリケーション",
      features: [
        "データ管理機能",
        "ユーザー認証",
        "検索・フィルター",
        "CSVエクスポート",
        "3回の修正対応",
        "3ヶ月サポート"
      ],
      popular: true,
      icon: "⭐"
    },
    {
      name: "プレミアム",
      price: "300,000円",
      duration: "2-4週間",
      description: "フルカスタムシステム開発",
      features: [
        "完全カスタム設計",
        "外部API連携",
        "高度な機能実装",
        "パフォーマンス最適化",
        "修正回数無制限",
        "6ヶ月サポート"
      ],
      popular: false,
      icon: "💎"
    }
  ];

  const additionalServices = [
    {
      name: "継続保守プラン",
      price: "19,800円/月",
      description: "バグ修正・機能追加・セキュリティアップデートを継続的にサポート"
    },
    {
      name: "緊急対応プラン",
      price: "50,000円/回",
      description: "24時間以内の緊急バグ修正・システム復旧対応"
    },
    {
      name: "追加機能開発",
      price: "要相談",
      description: "既存システムへの新機能追加・改善提案・UI/UXアップデート"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-amber-900 mb-6">
            料金プラン
          </h2>
          <p className="text-xl md:text-2xl text-amber-800 max-w-4xl mx-auto font-semibold leading-relaxed">
            明確で分かりやすい料金設定。<br className="hidden md:block" />
            追加費用は事前にご相談いたします
          </p>
        </div>

        {/* メインプラン */}
        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          {plans.map((plan, index) => (
            <div key={index} className={`relative rounded-2xl shadow-2xl ${plan.popular ? 'border-4 border-amber-500 scale-105' : 'border-2 border-amber-200'} bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}>
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-6 py-3 rounded-full text-lg font-black shadow-xl">
                    人気No.1
                  </span>
                </div>
              )}

              <div className="p-10">
                <div className="text-center mb-8">
                  <div className="text-6xl mb-4">{plan.icon}</div>
                  <h3 className="text-3xl font-black text-amber-900">{plan.name}</h3>
                  <p className="text-amber-700 mt-3 font-medium text-lg">{plan.description}</p>
                </div>

                <div className="text-center mb-8">
                  <div className="text-5xl font-black text-amber-600">{plan.price}</div>
                  <div className="text-amber-700 font-semibold text-lg">開発期間: {plan.duration}</div>
                </div>

                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <span className="text-amber-600 mr-3 text-xl">✓</span>
                      <span className="text-amber-700 font-medium text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-5 px-8 rounded-2xl font-black text-xl transition duration-300 transform hover:scale-105 shadow-xl ${
                  plan.popular
                    ? 'bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white'
                    : 'bg-amber-100 hover:bg-amber-200 text-amber-900'
                }`}>
                  {plan.name}プランで相談する
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 追加サービス */}
        <div className="bg-amber-50 rounded-2xl p-12 border-l-4 border-amber-500">
          <h3 className="text-3xl md:text-4xl font-black text-center mb-12 text-amber-900">
            追加サービス
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <h4 className="text-xl font-black text-amber-900 mb-4">{service.name}</h4>
                <div className="text-3xl font-black text-amber-600 mb-4">{service.price}</div>
                <p className="text-amber-700 font-medium">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 料金に含まれるもの */}
        <div className="mt-20 bg-white rounded-2xl p-12 shadow-2xl border-l-4 border-amber-500">
          <h3 className="text-3xl md:text-4xl font-black text-center mb-12 text-amber-900">
            全プランに含まれる内容
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🎨</div>
              <h4 className="font-black text-amber-900 mb-3 text-lg">モダンなデザイン</h4>
              <p className="text-amber-700 font-medium">最新のUI/UXトレンドに基づいたデザイン</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">📱</div>
              <h4 className="font-black text-amber-900 mb-3 text-lg">完全レスポンシブ</h4>
              <p className="text-amber-700 font-medium">PC・タブレット・スマートフォン対応</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h4 className="font-black text-amber-900 mb-3 text-lg">高速パフォーマンス</h4>
              <p className="text-amber-700 font-medium">最適化されたコードで高速動作</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🔒</div>
              <h4 className="font-black text-amber-900 mb-3 text-lg">セキュリティ対策</h4>
              <p className="text-amber-700 font-medium">基本的なセキュリティ対策を実装</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}