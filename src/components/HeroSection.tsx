export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 min-h-screen flex items-center relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-900/5 to-orange-900/5"></div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* 会社名・ブランド */}
          <div className="mb-12">
            <h1 className="text-7xl md:text-8xl font-black text-amber-900 mb-4 tracking-tight">
              AI活用副業
            </h1>
            <div className="w-32 h-2 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto rounded-full"></div>
          </div>

          {/* キャッチコピー */}
          <h2 className="text-5xl md:text-6xl font-black text-amber-900 mb-8 leading-tight">
            AI開発パートナーと一緒に<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">
              Webアプリ開発
            </span>
          </h2>

          {/* サブタイトル */}
          <p className="text-2xl md:text-3xl text-amber-800 mb-12 leading-relaxed font-semibold">
            初心者でも安心、要望を形にします
          </p>

          {/* 特徴ポイント */}
          <div className="grid md:grid-cols-3 gap-8 mb-16 text-left">
            <div className="bg-white rounded-2xl p-8 shadow-xl border-l-4 border-amber-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-amber-600 text-4xl mb-4">🚀</div>
              <h3 className="font-black text-xl mb-4 text-amber-900">高速開発</h3>
              <p className="text-amber-700 font-medium leading-relaxed">AI開発パートナーとの協業により、通常の1/3の期間で完成</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl border-l-4 border-orange-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-orange-600 text-4xl mb-4">💡</div>
              <h3 className="font-black text-xl mb-4 text-amber-900">透明性</h3>
              <p className="text-amber-700 font-medium leading-relaxed">開発過程をリアルタイムで共有、安心してお任せいただけます</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl border-l-4 border-yellow-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-yellow-600 text-4xl mb-4">🔧</div>
              <h3 className="font-black text-xl mb-4 text-amber-900">継続サポート</h3>
              <p className="text-amber-700 font-medium leading-relaxed">完成後もバグ修正・機能追加まで継続的にサポート</p>
            </div>
          </div>

          {/* CTA */}
          <div className="space-y-6 md:space-y-0 md:space-x-6 md:flex justify-center">
            <button className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-black py-6 px-12 rounded-2xl transition duration-300 transform hover:scale-105 shadow-2xl w-full md:w-auto text-xl">
              📞 無料相談はこちら
            </button>
            <button className="bg-white hover:bg-amber-50 text-amber-900 font-black py-6 px-12 rounded-2xl border-4 border-amber-600 transition duration-300 w-full md:w-auto text-xl hover:border-orange-600">
              📊 制作事例を見る
            </button>
          </div>

          {/* 実績数値 */}
          <div className="mt-20 grid grid-cols-3 gap-8 text-center">
            <div className="bg-white/80 rounded-2xl p-6 backdrop-blur-sm">
              <div className="text-5xl font-black text-amber-600 mb-2">50+</div>
              <div className="text-amber-800 font-semibold text-lg">制作実績</div>
            </div>
            <div className="bg-white/80 rounded-2xl p-6 backdrop-blur-sm">
              <div className="text-5xl font-black text-orange-600 mb-2">95%</div>
              <div className="text-amber-800 font-semibold text-lg">顧客満足度</div>
            </div>
            <div className="bg-white/80 rounded-2xl p-6 backdrop-blur-sm">
              <div className="text-5xl font-black text-yellow-600 mb-2">1週間</div>
              <div className="text-amber-800 font-semibold text-lg">平均納期</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}