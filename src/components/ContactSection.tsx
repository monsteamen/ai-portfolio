export default function ContactSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-amber-600 to-orange-700">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            お問い合わせ
          </h2>
          <p className="text-xl md:text-2xl text-amber-100 max-w-4xl mx-auto font-semibold leading-relaxed">
            あなたのアイデアをWebアプリに変えませんか？<br className="hidden md:block" />
            まずは無料相談から始めましょう
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* お問い合わせフォーム */}
          <div className="bg-white rounded-2xl p-12 shadow-2xl border-l-4 border-amber-500">
            <h3 className="text-3xl font-black text-amber-900 mb-8">無料相談フォーム</h3>

            <form className="space-y-8">
              <div>
                <label htmlFor="name" className="block text-lg font-black text-amber-900 mb-3">
                  お名前 *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-6 py-4 border-2 border-amber-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-lg"
                  placeholder="山田太郎"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-lg font-black text-amber-900 mb-3">
                  メールアドレス *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-6 py-4 border-2 border-amber-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-lg"
                  placeholder="example@email.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-lg font-black text-amber-900 mb-3">
                  会社名・屋号
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-6 py-4 border-2 border-amber-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-lg"
                  placeholder="株式会社○○（任意）"
                />
              </div>

              <div>
                <label htmlFor="project-type" className="block text-lg font-black text-amber-900 mb-3">
                  ご希望のプラン
                </label>
                <select
                  id="project-type"
                  name="project-type"
                  className="w-full px-6 py-4 border-2 border-amber-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-lg"
                >
                  <option value="">選択してください</option>
                  <option value="basic">ベーシック（50,000円）</option>
                  <option value="standard">スタンダード（150,000円）</option>
                  <option value="premium">プレミアム（300,000円）</option>
                  <option value="custom">カスタム相談</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-lg font-black text-amber-900 mb-3">
                  プロジェクト詳細 *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full px-6 py-4 border-2 border-amber-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-lg"
                  placeholder="作りたいWebアプリの内容、目的、機能など、できるだけ詳しくお書きください。技術的な知識は不要です。"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-black py-6 px-8 rounded-2xl transition duration-300 transform hover:scale-105 shadow-2xl text-xl"
              >
                📞 無料相談を申し込む
              </button>
            </form>

            <p className="text-lg text-amber-700 mt-6 font-medium">
              * 24時間以内にご返信いたします。まずはお気軽にご相談ください。
            </p>
          </div>

          {/* 連絡先情報 */}
          <div className="text-white">
            <h3 className="text-3xl font-black mb-8">その他のお問い合わせ方法</h3>

            <div className="space-y-8">
              <div className="flex items-center">
                <div className="bg-white bg-opacity-20 rounded-full p-4 mr-6">
                  <span className="text-3xl">📧</span>
                </div>
                <div>
                  <div className="font-black text-xl">メール</div>
                  <div className="text-amber-100 text-lg">contact@ai-fukugyou.com</div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-white bg-opacity-20 rounded-full p-4 mr-6">
                  <span className="text-3xl">💬</span>
                </div>
                <div>
                  <div className="font-black text-xl">LINE相談</div>
                  <div className="text-amber-100 text-lg">@ai-development</div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-white bg-opacity-20 rounded-full p-4 mr-6">
                  <span className="text-3xl">🕐</span>
                </div>
                <div>
                  <div className="font-black text-xl">対応時間</div>
                  <div className="text-amber-100 text-lg">平日 9:00-18:00</div>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-white bg-opacity-10 rounded-2xl">
              <h4 className="font-black mb-6 text-xl">よくあるご質問</h4>
              <div className="space-y-6 text-amber-100">
                <div>
                  <strong className="text-lg">Q: 技術的な知識がなくても大丈夫？</strong>
                  <br /><span className="font-medium">A: はい、専門知識は一切不要です。やりたいことを日本語で教えてください。</span>
                </div>
                <div>
                  <strong className="text-lg">Q: 途中で仕様変更は可能？</strong>
                  <br /><span className="font-medium">A: 開発中の修正・変更は柔軟に対応いたします。</span>
                </div>
                <div>
                  <strong className="text-lg">Q: 完成後のサポートは？</strong>
                  <br /><span className="font-medium">A: 全プランに基本サポートが含まれています。</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <div className="bg-white bg-opacity-10 rounded-2xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-black text-white mb-6">
              まずは無料で相談してみませんか？
            </h3>
            <p className="text-xl text-amber-100 mb-8 font-medium leading-relaxed">
              プロジェクトの規模や内容に関わらず、まずはお気軽にご相談ください。<br className="hidden md:block" />
              AI開発パートナーと一緒に、最適なソリューションをご提案いたします。
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-white hover:bg-gray-100 text-amber-600 font-black py-4 px-10 rounded-2xl transition duration-300 transform hover:scale-105 shadow-xl text-lg">
                📞 今すぐ無料相談
              </button>
              <button className="border-4 border-white hover:bg-white hover:text-amber-600 text-white font-black py-4 px-10 rounded-2xl transition duration-300 transform hover:scale-105 text-lg">
                📊 制作事例を見る
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}