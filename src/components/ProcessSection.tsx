export default function ProcessSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-amber-900 mb-6">
            開発プロセス
          </h2>
          <p className="text-xl md:text-2xl text-amber-800 max-w-4xl mx-auto font-semibold leading-relaxed">
            AI開発パートナー（Claude Code）との協業により、<br className="hidden md:block" />
            お客様のアイデアを効率的にWebアプリケーションへと変換します
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Step 1 */}
          <div className="text-center">
            <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-indigo-600">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">ヒアリング</h3>
            <p className="text-gray-600">
              お客様の要望・目的・ターゲットユーザーを詳しくお聞きします。技術的な知識は不要です。
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center">
            <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-indigo-600">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">AI設計</h3>
            <p className="text-gray-600">
              Claude CodeとリアルタイムでUI/UX設計・技術選定を行い、最適な構成を提案します。
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-indigo-600">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">共同開発</h3>
            <p className="text-gray-600">
              開発過程を画面共有で確認いただきながら、フィードバックを即座に反映します。
            </p>
          </div>

          {/* Step 4 */}
          <div className="text-center">
            <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-indigo-600">4</span>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">納品・サポート</h3>
            <p className="text-gray-600">
              完成したアプリを納品し、運用開始後もバグ修正・機能追加をサポートします。
            </p>
          </div>
        </div>

        {/* プロセスの特徴 */}
        <div className="mt-16 bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
            従来の開発との違い
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-red-600 mb-4">❌ 従来の開発</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• 要件定義に1ヶ月</li>
                <li>• 開発期間3-6ヶ月</li>
                <li>• 途中経過が見えない</li>
                <li>• 修正に追加費用</li>
                <li>• 完成後のサポート別料金</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-green-600 mb-4">✅ AI開発パートナー方式</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• 要件定義1日で完了</li>
                <li>• 開発期間1-2週間</li>
                <li>• リアルタイム進捗共有</li>
                <li>• 修正回数無制限</li>
                <li>• 継続サポート込み</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}