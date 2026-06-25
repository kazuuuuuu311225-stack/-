/**
 * PHYSICS MISSION — 物理基礎クイズ（ミッション制）
 * PC: ↑↓ Enter / スマホ: タップ
 */
const MISSIONS = [
  {
    missionNumber: 1,
    chapter: '運動の表し方',
    questions: [
      {
        type: 'formula',
        question: '平均速度の定義として正しい式はどれか',
        choices: ['v = x/t', 'v = t/x', 'v = at', 'v = a/t'],
        answer: 0,
        explanation: '平均速度は距離÷時間',
      },
      {
        type: 'formula',
        question: '等速直線運動の位置の式はどれか',
        choices: ['x = vt', 'x = v/t', 'x = at', 'x = at^2'],
        answer: 0,
        explanation: '速度一定なので x = vt',
      },
      {
        type: 'formula',
        question: '等加速度運動における速度の式はどれか',
        choices: ['v = v0 + at', 'v = at^2', 'v = v0t', 'v = a/v0'],
        answer: 0,
        explanation: '基本公式',
      },
      {
        type: 'formula',
        question: '等加速度運動の位置の式はどれか',
        choices: ['x = v0t + (1/2)at^2', 'x = vt', 'x = at', 'x = v/a'],
        answer: 0,
        explanation: '代表的な運動方程式',
      },
      {
        type: 'formula',
        question: '時間を含まない速度の公式はどれか',
        choices: ['v^2 = v0^2 + 2ax', 'v = v0 + at', 'x = vt', 'a = v/t'],
        answer: 0,
        explanation: '等加速度運動の重要公式',
      },
      {
        type: 'meaning',
        question: '速度と速さの違いはどれか',
        choices: ['同じ意味', '速度はベクトル、速さはスカラー', '速さは方向を持つ', '速度は大きさのみ'],
        answer: 1,
        explanation: '速度は向きを持つ',
      },
      {
        type: 'meaning',
        question: '等速直線運動とは何か',
        choices: ['速さが変化する運動', '方向だけ変わる運動', '速度が一定の運動', '加速度が最大の運動'],
        answer: 2,
        explanation: '速さも向きも一定',
      },
      {
        type: 'meaning',
        question: '相対速度とは何か',
        choices: ['絶対的な速度', '他の物体から見た速度', '最大速度', '平均速度'],
        answer: 1,
        explanation: '観測者によって変わる',
      },
      {
        type: 'manipulation',
        question: 'v = x/t を x について解け',
        choices: ['x = vt', 'x = v/t', 'x = t/v', 'x = vt^2'],
        answer: 0,
        explanation: '両辺に t を掛ける',
      },
      {
        type: 'manipulation',
        question: '東3m/s, 北4m/sの合成速度の大きさはどれか',
        choices: ['5 m/s', '7 m/s', '1 m/s', '12 m/s'],
        answer: 0,
        explanation: '三平方の定理',
      },
    ],
  },
  {
    missionNumber: 2,
    chapter: '落体の運動（公式強化）',
    questions: [
      {
        type: 'formula',
        question: '自由落下の速度の式（初速度0）はどれか',
        choices: ['v = gt', 'v = g/t', 'v = gt^2', 'v = t/g'],
        answer: 0,
        explanation: '基本公式',
      },
      {
        type: 'formula',
        question: '自由落下の位置の式はどれか',
        choices: ['y = (1/2)gt^2', 'y = gt', 'y = g/t', 'y = vt'],
        answer: 0,
        explanation: '等加速度運動',
      },
      {
        type: 'formula',
        question: '鉛直投げ上げの速度の式（上向き正）はどれか',
        choices: ['v = v0 - gt', 'v = v0 + gt', 'v = gt', 'v = v0t'],
        answer: 0,
        explanation: '重力は下向き',
      },
      {
        type: 'formula',
        question: '鉛直投げ下ろしの速度の式はどれか',
        choices: ['v = v0 + gt', 'v = v0 - gt', 'v = gt^2', 'v = g/t'],
        answer: 0,
        explanation: '下向き加速',
      },
      {
        type: 'formula',
        question: '等加速度運動の基本式はどれか',
        choices: ['v^2 = v0^2 + 2gy', 'v = gt', 'y = vt', 'v = y/t'],
        answer: 0,
        explanation: '時間を含まない公式',
      },
      {
        type: 'formula',
        question: '水平投射の水平方向の位置の式はどれか',
        choices: ['x = v0 t', 'x = (1/2)gt^2', 'x = gt', 'x = v0t^2'],
        answer: 0,
        explanation: '等速運動',
      },
      {
        type: 'formula',
        question: '水平投射の鉛直方向の式はどれか',
        choices: ['y = (1/2)gt^2', 'y = v0 t', 'y = gt', 'y = v0/g'],
        answer: 0,
        explanation: '自由落下',
      },
      {
        type: 'formula',
        question: '斜方投射の初速度の分解はどれか',
        choices: [
          'v0x = v0cosθ, v0y = v0sinθ',
          'v0x = v0sinθ, v0y = v0cosθ',
          'v0x = v0θ, v0y = v0/θ',
          'v0x = v0^2, v0y = v0',
        ],
        answer: 0,
        explanation: '基本分解',
      },
      {
        type: 'formula',
        question: '斜方投射の水平方向の式はどれか',
        choices: ['x = v0cosθ t', 'x = v0sinθ t', 'x = gt', 'x = t/g'],
        answer: 0,
        explanation: '等速',
      },
      {
        type: 'formula',
        question: '斜方投射の鉛直方向の式はどれか',
        choices: ['y = v0sinθ t - (1/2)gt^2', 'y = v0cosθ t', 'y = gt', 'y = v0t'],
        answer: 0,
        explanation: '重力あり',
      },
      {
        type: 'formula',
        question: '斜方投射の最高点に到達する時間はどれか',
        choices: ['t = v0sinθ / g', 't = g / v0', 't = v0cosθ', 't = g^2'],
        answer: 0,
        explanation: 'vy=0になるとき',
      },
      {
        type: 'formula',
        question: '斜方投射の飛距離はどれか',
        choices: ['R = v0^2 sin2θ / g', 'R = v0 g', 'R = g / v0', 'R = v0 sinθ'],
        answer: 0,
        explanation: '重要公式',
      },
      {
        type: 'meaning',
        question: '水平投射で水平方向の加速度はどうなるか',
        choices: ['0', 'g', '増加', '減少'],
        answer: 0,
        explanation: '力が働かない',
      },
      {
        type: 'meaning',
        question: '鉛直方向の加速度は常にどうか',
        choices: ['g（下向き）', '0', '一定増加', '一定減少'],
        answer: 0,
        explanation: '常に重力',
      },
      {
        type: 'meaning',
        question: '水平投射の落下時間は何で決まるか',
        choices: ['高さ', '初速度', '質量', '角度'],
        answer: 0,
        explanation: '鉛直運動のみ',
      },
      {
        type: 'meaning',
        question: '斜方投射で水平方向の速度はどうなるか',
        choices: ['一定', '増加', '減少', '0になる'],
        answer: 0,
        explanation: '加速度なし',
      },
      {
        type: 'meaning',
        question: '最高点では鉛直方向速度はどうなるか',
        choices: ['0', '最大', '負になる', '一定'],
        answer: 0,
        explanation: '一瞬停止',
      },
      {
        type: 'meaning',
        question: '放物運動になる理由はどれか',
        choices: ['鉛直に加速度がある', '水平方向に加速度', '速度一定', '力ゼロ'],
        answer: 0,
        explanation: '縦だけ加速',
      },
      {
        type: 'meaning',
        question: '投げ上げと投げ下ろしの違いは何か',
        choices: ['初速度の向き', '重力', '時間', '距離'],
        answer: 0,
        explanation: '方向が違う',
      },
      {
        type: 'meaning',
        question: '水平投射と斜方投射の違いはどれか',
        choices: ['初速度の角度', '重力の有無', '加速度の大きさ', '時間'],
        answer: 0,
        explanation: '角度が違う',
      },
    ],
  },
  {
    missionNumber: 3,
    chapter: '力のつり合い',
    questions: [
      {
        type: 'formula',
        question: '力のつり合いの条件として正しいものはどれか',
        choices: ['合力が0', '力が最大', '力が一定', '速度が一定'],
        answer: 0,
        explanation: '合力が0なら加速度も0',
      },
      {
        type: 'meaning',
        question: '力とは何を表す量か',
        choices: ['スカラー量', 'ベクトル量', '時間', '距離'],
        answer: 1,
        explanation: '大きさと向きを持つ',
      },
      {
        type: 'formula',
        question: '重力の大きさを表す式はどれか',
        choices: ['W = mg', 'W = mv', 'W = ma^2', 'W = m/g'],
        answer: 0,
        explanation: '重さ = 質量×重力加速度',
      },
      {
        type: 'meaning',
        question: '重力の向きはどれか',
        choices: ['上向き', '下向き（地球の中心）', '右向き', '速度方向'],
        answer: 1,
        explanation: '常に地球の中心方向',
      },
      {
        type: 'formula',
        question: 'フックの法則を表す式はどれか',
        choices: ['F = kx', 'F = mx', 'F = kt^2', 'F = x/k'],
        answer: 0,
        explanation: 'ばねの復元力',
      },
      {
        type: 'meaning',
        question: 'フックの法則における k は何を表すか',
        choices: ['質量', 'ばね定数', '速度', '時間'],
        answer: 1,
        explanation: 'ばねの硬さ',
      },
      {
        type: 'meaning',
        question: '空気抵抗の性質として正しいものはどれか',
        choices: ['常に一定', '速度に依存する', '方向を持たない', '重力と同じ方向'],
        answer: 1,
        explanation: '速いほど大きくなる',
      },
      {
        type: 'formula',
        question: '力を角度θで分解したとき、水平方向はどれか',
        choices: ['F cosθ', 'F sinθ', 'F tanθ', 'F^2'],
        answer: 0,
        explanation: '横はcos',
      },
      {
        type: 'formula',
        question: '力を角度θで分解したとき、鉛直方向はどれか',
        choices: ['F sinθ', 'F cosθ', 'F θ', 'F^2'],
        answer: 0,
        explanation: '縦はsin',
      },
      {
        type: 'meaning',
        question: '斜面上の物体の重力の分解で斜面方向の成分はどれか',
        choices: ['mg sinθ', 'mg cosθ', 'mg', '0'],
        answer: 0,
        explanation: '斜面方向はsin',
      },
    ],
  },
  {
    missionNumber: 4,
    missionLabel: '3-α',
    chapter: '力の図示（ベクトル）',
    questions: [
      {
        type: 'meaning',
        question: '自由落下している物体に働く力はどれか',
        choices: ['重力のみ（下向き）', '上向きの力', '前向きの力', '力は働かない'],
        answer: 0,
        explanation: '空気抵抗を無視すれば重力のみ',
      },
      {
        type: 'meaning',
        question: '机の上で静止している物体に働く力はどれか',
        choices: ['重力のみ', '垂直抗力のみ', '重力と垂直抗力', '力は働かない'],
        answer: 2,
        explanation: '重力と垂直抗力がつり合う',
      },
      {
        type: 'meaning',
        question: 'ひもで吊るされた物体に働く力はどれか',
        choices: ['重力のみ', '張力のみ', '重力と張力', '力はない'],
        answer: 2,
        explanation: '下に重力、上に張力',
      },
      {
        type: 'meaning',
        question: 'ばねにつながれた物体に働く力はどれか',
        choices: ['重力のみ', '弾性力のみ', '重力と弾性力', '速度'],
        answer: 2,
        explanation: 'ばねは弾性力を持つ',
      },
      {
        type: 'meaning',
        question: '斜面上で静止している物体に働く力はどれか',
        choices: ['重力のみ', '重力と垂直抗力', '重力・垂直抗力・摩擦力', '力はない'],
        answer: 2,
        explanation: '滑らない場合は摩擦も働く',
      },
      {
        type: 'meaning',
        question: '張力の向きはどれか',
        choices: ['常に下向き', '常に上向き', 'ひもの方向に沿って引く向き', 'ランダム'],
        answer: 2,
        explanation: 'ひもに沿って引く',
      },
      {
        type: 'meaning',
        question: '垂直抗力の向きはどれか',
        choices: ['斜面に平行', '面に垂直', '下向き', '速度方向'],
        answer: 1,
        explanation: '面に垂直に働く',
      },
      {
        type: 'meaning',
        question: '弾性力の向きはどれか',
        choices: ['伸びる方向', '縮む方向と逆（元に戻る方向）', '下向き', '上向き'],
        answer: 1,
        explanation: '元に戻ろうとする力',
      },
      {
        type: 'meaning',
        question: '動いている物体に働く空気抵抗の向きはどれか',
        choices: ['運動方向と同じ', '運動方向と逆', '上向きのみ', '下向きのみ'],
        answer: 1,
        explanation: '逆向きに働く',
      },
      {
        type: 'meaning',
        question: '力の図を描くときの正しいルールはどれか',
        choices: [
          'すべての力を1点から矢印で描く',
          '大きさは無視する',
          '1つの力だけ描く',
          '方向は適当でよい',
        ],
        answer: 0,
        explanation: '作用点からベクトルで描く',
      },
    ],
  },
  {
    missionNumber: 5,
    missionLabel: '4',
    chapter: '運動の法則',
    questions: [
      {
        type: 'formula',
        question: '運動方程式として正しい式はどれか',
        choices: ['F = ma', 'F = mv', 'F = m/a', 'F = at'],
        answer: 0,
        explanation: 'ニュートンの第2法則',
      },
      {
        type: 'formula',
        question: '合力を表す式として正しいものはどれか',
        choices: ['ΣF = ma', 'ΣF = m', 'ΣF = v', 'ΣF = t'],
        answer: 0,
        explanation: '合力＝質量×加速度',
      },
      {
        type: 'formula',
        question: '最大静止摩擦力の式はどれか',
        choices: ['f = μN', 'f = N/μ', 'f = μ/N', 'f = mN'],
        answer: 0,
        explanation: 'μは静止摩擦係数',
      },
      {
        type: 'formula',
        question: '動摩擦力の式はどれか',
        choices: ['f = μN', 'f = ma', 'f = v/N', 'f = gN'],
        answer: 0,
        explanation: '動摩擦もμNで表す',
      },
      {
        type: 'formula',
        question: '垂直抗力 N の意味として正しいものはどれか',
        choices: ['面が物体を押す力', '重力', '速度', '摩擦力'],
        answer: 0,
        explanation: '面から受ける反力',
      },
      {
        type: 'formula',
        question: '圧力の定義として正しい式はどれか',
        choices: ['P = F / S', 'P = FS', 'P = F + S', 'P = S / F'],
        answer: 0,
        explanation: '単位面積あたりの力',
      },
      {
        type: 'formula',
        question: '水圧の式として正しいものはどれか',
        choices: ['P = ρgh', 'P = mg', 'P = v/t', 'P = ρ/h'],
        answer: 0,
        explanation: '深さに比例',
      },
      {
        type: 'formula',
        question: '浮力の式として正しいものはどれか',
        choices: ['F = ρgV', 'F = mg', 'F = v/t', 'F = PV'],
        answer: 0,
        explanation: '押しのけた水の重さ',
      },
      {
        type: 'formula',
        question: '空気抵抗が速度に比例する場合の表し方はどれか',
        choices: ['F = kv', 'F = k/v', 'F = v^2', 'F = mg'],
        answer: 0,
        explanation: '低速域のモデル',
      },
      {
        type: 'formula',
        question: '空気抵抗が速度の2乗に比例する場合の式はどれか',
        choices: ['F = kv^2', 'F = k/v', 'F = vt', 'F = mg'],
        answer: 0,
        explanation: '高速域でよく使う',
      },
      {
        type: 'formula',
        question: '静止摩擦力の特徴として正しいものはどれか',
        choices: ['最大値まで変化する', '常に一定', '必ずゼロ', '速度に比例'],
        answer: 0,
        explanation: '必要に応じて変化',
      },
      {
        type: 'formula',
        question: '動摩擦力の特徴として正しいものはどれか',
        choices: ['一定', '時間で変化', '速度に比例', '質量に比例しない'],
        answer: 0,
        explanation: '一定と近似する',
      },
      {
        type: 'meaning',
        question: '運動方程式が成り立つ条件はどれか',
        choices: ['慣性系である', '止まっているときだけ', '真空中のみ', '速度一定のときだけ'],
        answer: 0,
        explanation: '基本は慣性系',
      },
      {
        type: 'meaning',
        question: '摩擦力の向きはどれか',
        choices: ['運動方向と同じ', '運動の逆向き', '上向き', '常に一定方向'],
        answer: 1,
        explanation: '逆向きに働く',
      },
      {
        type: 'meaning',
        question: '圧力が大きくなる条件はどれか',
        choices: ['面積が小さい', '面積が大きい', '力が小さい', '高さが低い'],
        answer: 0,
        explanation: 'P = F/S',
      },
      {
        type: 'meaning',
        question: '水圧は何に比例するか',
        choices: ['深さ', '面積', '時間', '速度'],
        answer: 0,
        explanation: '深いほど大きい',
      },
      {
        type: 'meaning',
        question: '浮力は何によって決まるか',
        choices: ['押しのけた流体の体積', '速度', '時間', '高さ'],
        answer: 0,
        explanation: 'アルキメデスの原理',
      },
      {
        type: 'meaning',
        question: '終端速度とは何か',
        choices: ['速度が一定になる状態', '最大速度', '初速度', '速度ゼロ'],
        answer: 0,
        explanation: '力がつり合う',
      },
      {
        type: 'meaning',
        question: '運動中に合力が0のときどうなるか',
        choices: ['等速運動', '加速する', '止まる', '落下する'],
        answer: 0,
        explanation: '等速直線運動',
      },
      {
        type: 'meaning',
        question: '大気中で物体が落下するとき最終的にどうなるか',
        choices: ['一定速度になる', '無限に加速', '静止する', '上昇する'],
        answer: 0,
        explanation: '終端速度に達する',
      },
    ],
  },
  {
    missionNumber: 6,
    missionLabel: '4-α',
    chapter: '運動方程式（立て方応用）',
    questions: [
      {
        type: 'meaning',
        question: '運動方程式を立てるとき最初にするべきことはどれか',
        choices: ['力をすべて図示する', '式を書く', '速度を求める', '時間を決める'],
        answer: 0,
        explanation: '自由物体図が最重要',
      },
      {
        type: 'meaning',
        question: '運動方程式 ΣF = ma を立てるときのFは何か',
        choices: ['すべての力の合計', '最大の力', '重力のみ', '摩擦力のみ'],
        answer: 0,
        explanation: '全ての力の合力',
      },
      {
        type: 'formula',
        question: '水平面で右向きに力Fが働き摩擦fがあるときの運動方程式はどれか',
        choices: ['F - f = ma', 'F + f = ma', 'F = ma + f', 'f = ma'],
        answer: 0,
        explanation: '逆向きは引く',
      },
      {
        type: 'meaning',
        question: '2物体をひもでつないだ場合の加速度はどうなるか',
        choices: ['同じ', '異なる', '0', '無限大'],
        answer: 0,
        explanation: 'ひもが伸びない',
      },
      {
        type: 'meaning',
        question: '滑車のある2物体問題で張力はどう扱うか',
        choices: ['同じ', '違う', '0になる', '無視する'],
        answer: 0,
        explanation: '理想的な場合同じ',
      },
      {
        type: 'formula',
        question: '2物体系で全体に対して運動方程式を立てるとどうなるか',
        choices: ['内部の張力は消える', '張力が2倍になる', '張力が残る', '成り立たない'],
        answer: 0,
        explanation: '内部力は打ち消し合う',
      },
      {
        type: 'meaning',
        question: '斜面上の物体の運動方程式を立てるとき重要なのはどれか',
        choices: ['力を斜面方向に分解する', '水平に分解する', '分解しない', '時間を無視する'],
        answer: 0,
        explanation: '斜面方向で考える',
      },
      {
        type: 'formula',
        question: '斜面方向の重力成分はどれか',
        choices: ['mg sinθ', 'mg cosθ', 'mg', '0'],
        answer: 0,
        explanation: '滑る方向',
      },
      {
        type: 'formula',
        question: '斜面に垂直な方向の力として正しいものはどれか',
        choices: ['N = mg cosθ', 'N = mg sinθ', 'N = mg', 'N = 0'],
        answer: 0,
        explanation: '垂直抗力',
      },
      {
        type: 'meaning',
        question: '斜面で摩擦がある場合の運動方程式で摩擦の向きはどう決めるか',
        choices: ['動こうとする向きの逆', '常に下向き', '常に上向き', 'ランダム'],
        answer: 0,
        explanation: '逆向きに働く',
      },
      {
        type: 'meaning',
        question: '滑車問題で物体Aが下がるとき物体Bはどうなるか',
        choices: ['上がる', '下がる', '止まる', '動かない'],
        answer: 0,
        explanation: '連動する',
      },
      {
        type: 'formula',
        question: '滑車での2物体（m1, m2）の加速度の特徴はどれか',
        choices: ['同じ大きさ', '異なる', '0になる', '一定でない'],
        answer: 0,
        explanation: '同じひも',
      },
      {
        type: 'meaning',
        question: '運動方程式を各物体ごとに立てる理由はどれか',
        choices: ['力が異なるから', '速さが同じだから', '重力が同じだから', '時間が違うから'],
        answer: 0,
        explanation: 'それぞれの力を考える',
      },
      {
        type: 'formula',
        question: '斜面＋摩擦の運動方程式の形はどれか',
        choices: ['mg sinθ - f = ma', 'mg cosθ + f = ma', 'mg = ma', 'f = ma'],
        answer: 0,
        explanation: '進行方向に沿う',
      },
      {
        type: 'meaning',
        question: '運動方程式を立てるときの最も重要なポイントはどれか',
        choices: ['力を正しく分解する', '公式を覚える', '速度を求める', '時間を固定する'],
        answer: 0,
        explanation: '9割ここで決まる',
      },
    ],
  },
  {
    missionNumber: 7,
    missionLabel: '5',
    chapter: '仕事とエネルギー',
    questions: [
      {
        type: 'formula',
        question: '仕事の定義として正しい式はどれか',
        choices: ['W = Fx', 'W = F/x', 'W = xt', 'W = mv'],
        answer: 0,
        explanation: '力×移動距離',
      },
      {
        type: 'formula',
        question: '力と移動方向がなす角θがある場合の仕事はどれか',
        choices: ['W = Fx cosθ', 'W = Fx sinθ', 'W = Fx tanθ', 'W = F/x'],
        answer: 0,
        explanation: '進行方向成分のみ',
      },
      {
        type: 'formula',
        question: '運動エネルギーの式はどれか',
        choices: ['K = (1/2)mv^2', 'K = mv', 'K = ma', 'K = v/t'],
        answer: 0,
        explanation: '重要公式',
      },
      {
        type: 'formula',
        question: '位置エネルギー（重力）の式はどれか',
        choices: ['U = mgh', 'U = mg', 'U = gh', 'U = mv'],
        answer: 0,
        explanation: '高さに比例',
      },
      {
        type: 'formula',
        question: 'ばねの弾性エネルギーはどれか',
        choices: ['U = (1/2)kx^2', 'U = kx', 'U = mx', 'U = x/k'],
        answer: 0,
        explanation: '2乗になるのが特徴',
      },
      {
        type: 'formula',
        question: '仕事とエネルギーの関係はどれか',
        choices: ['W = ΔK', 'W = K', 'W = mv', 'W = mg'],
        answer: 0,
        explanation: '仕事は運動エネルギーの変化',
      },
      {
        type: 'formula',
        question: '力学的エネルギーの和はどれか',
        choices: ['E = K + U', 'E = K - U', 'E = KU', 'E = K/U'],
        answer: 0,
        explanation: '運動＋位置',
      },
      {
        type: 'formula',
        question: '力学的エネルギー保存則はどれか',
        choices: ['K + U = 一定', 'K = 一定', 'U = 一定', 'W = 一定'],
        answer: 0,
        explanation: '保存される',
      },
      {
        type: 'formula',
        question: '高さhから落下する物体の速度はどれか（保存則）',
        choices: ['v = √(2gh)', 'v = gh', 'v = g/h', 'v = h/t'],
        answer: 0,
        explanation: 'よく使う形',
      },
      {
        type: 'formula',
        question: '位置エネルギーが最大になるのはどれか',
        choices: ['高さが最大', '速度が最大', '時間が最大', '距離が最小'],
        answer: 0,
        explanation: '高さで決まる',
      },
      {
        type: 'formula',
        question: '運動エネルギーが最大になるのはどれか',
        choices: ['速度が最大', '高さが最大', '時間が最大', '質量が最小'],
        answer: 0,
        explanation: 'v²に比例',
      },
      {
        type: 'formula',
        question: 'ばねを2倍伸ばしたとき弾性エネルギーはどうなるか',
        choices: ['4倍', '2倍', '1/2', '変わらない'],
        answer: 0,
        explanation: '2乗なので',
      },
      {
        type: 'meaning',
        question: '仕事とは何を意味するか',
        choices: ['エネルギーの移動', '速度', '加速度', '時間'],
        answer: 0,
        explanation: 'エネルギーのやりとり',
      },
      {
        type: 'meaning',
        question: '力と移動が垂直のとき仕事はどうなるか',
        choices: ['0', '最大', '負になる', '一定'],
        answer: 0,
        explanation: 'cos90°=0',
      },
      {
        type: 'meaning',
        question: '力学的エネルギーが保存される条件はどれか',
        choices: ['非保存力が働かない', '力がある', '速度一定', '時間一定'],
        answer: 0,
        explanation: '摩擦などがない',
      },
      {
        type: 'meaning',
        question: '摩擦力がある場合どうなるか',
        choices: ['力学的エネルギーは減少', '一定', '増加', '消えない'],
        answer: 0,
        explanation: '熱に変換',
      },
      {
        type: 'meaning',
        question: '物体が上昇するとき運動エネルギーはどうなるか',
        choices: ['減少', '増加', '一定', 'ゼロ'],
        answer: 0,
        explanation: '位置エネルギーに変わる',
      },
      {
        type: 'meaning',
        question: '自由落下で落ちるほどどうなるか',
        choices: ['速度が増える', '止まる', '逆向きになる', '0になる'],
        answer: 0,
        explanation: 'エネルギー変換',
      },
      {
        type: 'meaning',
        question: 'ばねが戻るときのエネルギー変化はどれか',
        choices: ['弾性→運動', '運動→弾性', '位置→消失', '変化なし'],
        answer: 0,
        explanation: '元に戻る',
      },
      {
        type: 'meaning',
        question: '仕事が負になるのはどれか',
        choices: ['進行方向と逆の力', '同じ方向', '垂直', 'ゼロ'],
        answer: 0,
        explanation: 'エネルギーを奪う',
      },
    ],
  },
  {
    missionNumber: 8,
    missionLabel: '6',
    chapter: '剛体のつり合い',
    questions: [
      {
        type: 'formula',
        question: '力のモーメントの定義として正しい式はどれか',
        choices: ['M = F × l', 'M = F + l', 'M = F/l', 'M = Fl^2'],
        answer: 0,
        explanation: '力×腕の長さ',
      },
      {
        type: 'meaning',
        question: '力のモーメントとは何を表すか',
        choices: ['回転の効果', '速度', '位置', '時間'],
        answer: 0,
        explanation: '回そうとする働き',
      },
      {
        type: 'formula',
        question: 'モーメントの単位はどれか',
        choices: ['N・m', 'N', 'm', 'J'],
        answer: 0,
        explanation: '力×距離',
      },
      {
        type: 'meaning',
        question: 'てこがつり合う条件はどれか',
        choices: ['左右のモーメントが等しい', '力が同じ', '長さが同じ', '速度が同じ'],
        answer: 0,
        explanation: 'ΣM = 0',
      },
      {
        type: 'formula',
        question: '剛体のつり合い条件として正しいものはどれか',
        choices: ['ΣF = 0 かつ ΣM = 0', 'ΣF = 0 のみ', 'ΣM = 0 のみ', 'F = ma'],
        answer: 0,
        explanation: '並進＋回転ともに0',
      },
      {
        type: 'meaning',
        question: '力の作用線とは何か',
        choices: ['力が働く直線', '速度の方向', '時間軸', '位置'],
        answer: 0,
        explanation: '力の方向ライン',
      },
      {
        type: 'formula',
        question: 'モーメントを求めるときの距離 l は何か',
        choices: ['支点から作用線までの垂直距離', '力の大きさ', '時間', '高さ'],
        answer: 0,
        explanation: '垂直距離が重要',
      },
      {
        type: 'meaning',
        question: '回転中心から遠いほどモーメントはどうなるか',
        choices: ['大きくなる', '小さくなる', '変わらない', '0になる'],
        answer: 0,
        explanation: 'lが大きくなる',
      },
      {
        type: 'formula',
        question: '左右に力F1, F2が働き距離がl1, l2のときのつり合い式はどれか',
        choices: ['F1 l1 = F2 l2', 'F1 + l1 = F2 + l2', 'F1 l2 = F2 l1', 'F1 = F2'],
        answer: 0,
        explanation: 'てこの原理',
      },
      {
        type: 'meaning',
        question: '重心とは何か',
        choices: ['重さが集中している点', '中心の点', '速度が最大の点', '時間の中心'],
        answer: 0,
        explanation: '重さの代表点',
      },
      {
        type: 'formula',
        question: '重心で物体を支えるとどうなるか',
        choices: ['回転しない', '回転する', '加速する', '止まる'],
        answer: 0,
        explanation: 'モーメントが0',
      },
      {
        type: 'meaning',
        question: '一様な棒の重心はどこにあるか',
        choices: ['中央', '端', 'どこでもよい', '外側'],
        answer: 0,
        explanation: '対称性',
      },
      {
        type: 'meaning',
        question: '複数の力が働く場合のつり合い条件はどれか',
        choices: ['合力0かつモーメント0', '力が同じ', '距離が同じ', '時間が同じ'],
        answer: 0,
        explanation: '完全つり合い',
      },
      {
        type: 'formula',
        question: '支点を変えてモーメントをとってもよい理由はどれか',
        choices: ['つり合い条件が成り立つため', '距離が変わるため', '力が消えるため', '時間が変わるため'],
        answer: 0,
        explanation: 'どこでもΣM=0',
      },
      {
        type: 'meaning',
        question: 'モーメントの向きを考えるとき何を区別するか',
        choices: ['時計回りと反時計回り', '上下', '左右', '速度'],
        answer: 0,
        explanation: '回転方向',
      },
    ],
  },
  {
    missionNumber: 9,
    missionLabel: '7',
    chapter: '運動量の保存',
    questions: [
      {
        type: 'formula',
        question: '運動量の定義として正しい式はどれか',
        choices: ['p = mv', 'p = m/v', 'p = v/t', 'p = ma'],
        answer: 0,
        explanation: '基本定義',
      },
      {
        type: 'formula',
        question: '力積の式はどれか',
        choices: ['I = Ft', 'I = F/t', 'I = mt', 'I = vt'],
        answer: 0,
        explanation: '力×時間',
      },
      {
        type: 'formula',
        question: '力積と運動量の関係はどれか',
        choices: ['Ft = Δp', 'Ft = p', 'F = p/t', 't = p'],
        answer: 0,
        explanation: '重要関係式',
      },
      {
        type: 'formula',
        question: '運動量保存則として正しいものはどれか',
        choices: ['衝突前 = 衝突後', '常に0になる', '力が一定', '速度が一定'],
        answer: 0,
        explanation: '外力がなければ保存',
      },
      {
        type: 'formula',
        question: '2物体の衝突での運動量保存式はどれか',
        choices: ["m1v1 + m2v2 = m1v1' + m2v2'", 'm1v1 = m2v2', 'v1 = v2', 'm1 + m2 = v'],
        answer: 0,
        explanation: '基本形',
      },
      {
        type: 'formula',
        question: '反発係数の定義として正しい式はどれか',
        choices: [
          'e = (衝突後の相対速度)/(衝突前の相対速度)',
          'e = v/t',
          'e = m/v',
          'e = F/m',
        ],
        answer: 0,
        explanation: '定義そのもの',
      },
      {
        type: 'formula',
        question: '完全弾性衝突の条件はどれか',
        choices: ['e = 1', 'e = 0', 'e > 1', 'e < 0'],
        answer: 0,
        explanation: 'エネルギー保存も成立',
      },
      {
        type: 'formula',
        question: '完全非弾性衝突の条件はどれか',
        choices: ['e = 0', 'e = 1', 'e = 2', 'e = -1'],
        answer: 0,
        explanation: 'くっつく場合',
      },
      {
        type: 'formula',
        question: '運動量と力学的エネルギーが共に保存されるのはどれか',
        choices: ['完全弾性衝突', '完全非弾性衝突', '自由落下', '摩擦あり運動'],
        answer: 0,
        explanation: '弾性のみ',
      },
      {
        type: 'formula',
        question: '2物体が合体する衝突後の速度はどれで求まるか',
        choices: ['(m1v1 + m2v2)/(m1 + m2)', 'm1v1', 'm2v2', 'v1 + v2'],
        answer: 0,
        explanation: '保存から導く',
      },
      {
        type: 'formula',
        question: '壁にぶつかるときの反発係数の扱いで正しいものはどれか',
        choices: ['壁は動かない（速度0）として考える', '壁が動く', '壁の質量を無視', '考えない'],
        answer: 0,
        explanation: '固定壁として扱う',
      },
      {
        type: 'formula',
        question: '斜めの床との反発で保存されるのはどれか',
        choices: ['床に平行な方向の速度', 'すべての速度', '重力', '時間'],
        answer: 0,
        explanation: '垂直方向だけ変化',
      },
      {
        type: 'meaning',
        question: '運動量とは何を表す量か',
        choices: ['運動の勢い', '位置', '力そのもの', '時間'],
        answer: 0,
        explanation: '勢い',
      },
      {
        type: 'meaning',
        question: '運動量保存則が成り立つ条件はどれか',
        choices: ['外力が働かない', '速度一定', '時間一定', '高さ一定'],
        answer: 0,
        explanation: '系に外力なし',
      },
      {
        type: 'meaning',
        question: '衝突後に物体がくっつく場合何衝突というか',
        choices: ['完全非弾性衝突', '弾性衝突', '反発衝突', '自由衝突'],
        answer: 0,
        explanation: 'e = 0',
      },
      {
        type: 'meaning',
        question: '運動量はどの性質を持つか',
        choices: ['ベクトル', 'スカラー', '時間依存のみ', '距離依存のみ'],
        answer: 0,
        explanation: '方向あり',
      },
      {
        type: 'meaning',
        question: '衝突で力学的エネルギーが減る理由はどれか',
        choices: ['熱や変形に変わる', '消える', '空気に逃げるだけ', '速度が増える'],
        answer: 0,
        explanation: '非弾性の場合',
      },
      {
        type: 'meaning',
        question: '反発係数が大きいほどどうなるか',
        choices: ['よく跳ね返る', '止まる', '吸収される', '遅くなる'],
        answer: 0,
        explanation: '弾む',
      },
      {
        type: 'meaning',
        question: '斜面との衝突で変化するのはどの方向か',
        choices: ['斜面に垂直な方向', '平行方向', '全方向', '変化なし'],
        answer: 0,
        explanation: '法線方向のみ',
      },
      {
        type: 'meaning',
        question: '軽い物体と重い物体の衝突で重い物体はどうなるか',
        choices: ['あまり速度が変わらない', '大きく変わる', '止まる', '反転する'],
        answer: 0,
        explanation: '慣性が大きい',
      },
    ],
  },
  {
    missionNumber: 10,
    missionLabel: '8',
    chapter: '等速円運動・慣性力',
    questions: [
      {
        type: 'formula',
        question: '弧度法での円周はどれか',
        choices: ['2πr', 'πr', 'πr^2', 'r/π'],
        answer: 0,
        explanation: '基本定義',
      },
      {
        type: 'formula',
        question: '角速度ωと速度vの関係はどれか',
        choices: ['v = rω', 'v = ω/r', 'v = r/ω', 'v = ωt'],
        answer: 0,
        explanation: '円運動の基本式',
      },
      {
        type: 'formula',
        question: '周期Tと角速度の関係はどれか',
        choices: ['ω = 2π/T', 'ω = T/2π', 'ω = 2πT', 'ω = T^2'],
        answer: 0,
        explanation: '重要公式',
      },
      {
        type: 'formula',
        question: '等速円運動の向心加速度はどれか',
        choices: ['a = v^2/r', 'a = v/r', 'a = vr', 'a = r/v'],
        answer: 0,
        explanation: '中心向き',
      },
      {
        type: 'formula',
        question: '向心力の式はどれか',
        choices: ['F = mv^2/r', 'F = mv', 'F = v^2', 'F = m/r'],
        answer: 0,
        explanation: '運動方程式から',
      },
      {
        type: 'formula',
        question: '角速度を使った向心加速度はどれか',
        choices: ['a = rω^2', 'a = ω/r', 'a = r/ω', 'a = ω'],
        answer: 0,
        explanation: '別表現',
      },
      {
        type: 'formula',
        question: '弧度法での弧の長さはどれか',
        choices: ['l = rθ', 'l = θ/r', 'l = r/θ', 'l = θ^2'],
        answer: 0,
        explanation: '基本関係',
      },
      {
        type: 'formula',
        question: '等速円運動の運動方程式はどれか',
        choices: ['ΣF = mv^2/r', 'ΣF = ma', 'ΣF = 0', 'F = mg'],
        answer: 0,
        explanation: '向心方向',
      },
      {
        type: 'formula',
        question: '遠心力の式はどれか',
        choices: ['F = mv^2/r', 'F = mg', 'F = ma', 'F = v/t'],
        answer: 0,
        explanation: '見かけの力',
      },
      {
        type: 'formula',
        question: '遠心力の向きはどれか',
        choices: ['外向き', '中心向き', '上向き', '下向き'],
        answer: 0,
        explanation: '中心から外へ',
      },
      {
        type: 'formula',
        question: '鉛直面内円運動の最低点での向心力はどれか',
        choices: ['N - mg = mv^2/r', 'N = mg', 'mg - N = mv^2/r', 'N = 0'],
        answer: 0,
        explanation: '上向きに向心力',
      },
      {
        type: 'formula',
        question: '最高点での向心力はどれか',
        choices: ['N + mg = mv^2/r', 'N = mg', 'mg - N = mv^2/r', 'N = 0'],
        answer: 0,
        explanation: 'どちらも中心向き',
      },
      {
        type: 'meaning',
        question: '等速円運動で速度の大きさはどうか',
        choices: ['一定', '増える', '減る', '0になる'],
        answer: 0,
        explanation: '方向は変わる',
      },
      {
        type: 'meaning',
        question: '等速円運動で加速度はどの方向か',
        choices: ['中心向き', '接線方向', '外向き', '上向き'],
        answer: 0,
        explanation: '向心加速度',
      },
      {
        type: 'meaning',
        question: '慣性力が現れるのはどの系か',
        choices: ['非慣性系', '慣性系', '静止系', '真空'],
        answer: 0,
        explanation: '加速系',
      },
      {
        type: 'meaning',
        question: '慣性系とは何か',
        choices: ['加速度がない系', '回転している系', '加速している系', '重力がある系'],
        answer: 0,
        explanation: '等速直線運動',
      },
      {
        type: 'meaning',
        question: '遠心力とは何か',
        choices: ['外向きの見かけの力', '中心へ引く力', '重力', '摩擦'],
        answer: 0,
        explanation: '非慣性系で現れる',
      },
      {
        type: 'meaning',
        question: '向心力の正体として正しいものはどれか',
        choices: ['実在する力（張力など）', '新しい力', '重力のみ', '速度'],
        answer: 0,
        explanation: '既存の力の合力',
      },
      {
        type: 'meaning',
        question: '円運動で速度の向きはどう変わるか',
        choices: ['常に接線方向', '中心向き', '外向き', '一定方向'],
        answer: 0,
        explanation: '進行方向',
      },
      {
        type: 'meaning',
        question: '円運動の周期が短くなると何が増えるか',
        choices: ['角速度', '半径', '質量', '時間'],
        answer: 0,
        explanation: '速く回る',
      },
    ],
  },
  {
    missionNumber: 11,
    missionLabel: '9',
    chapter: '単振動',
    questions: [
      {
        type: 'formula',
        question: '単振動の変位の式はどれか',
        choices: ['x = A cosωt', 'x = At', 'x = vt', 'x = gt^2'],
        answer: 0,
        explanation: '基本式',
      },
      {
        type: 'formula',
        question: '速度の式はどれか',
        choices: ['v = -Aω sinωt', 'v = Aω cosωt', 'v = At', 'v = gt'],
        answer: 0,
        explanation: '微分して求まる',
      },
      {
        type: 'formula',
        question: '加速度の式はどれか',
        choices: ['a = -ω^2 x', 'a = ωx', 'a = vx', 'a = g'],
        answer: 0,
        explanation: '重要関係式',
      },
      {
        type: 'formula',
        question: '単振動の周期はどれか（一般形）',
        choices: ['T = 2π/ω', 'T = ω/2π', 'T = ω', 'T = 1/ω^2'],
        answer: 0,
        explanation: '基本式',
      },
      {
        type: 'formula',
        question: 'ばね振動の周期はどれか',
        choices: ['T = 2π√(m/k)', 'T = √(k/m)', 'T = m/k', 'T = k/m'],
        answer: 0,
        explanation: '超重要公式',
      },
      {
        type: 'formula',
        question: '単振り子の周期はどれか',
        choices: ['T = 2π√(l/g)', 'T = 2π√(g/l)', 'T = l/g', 'T = g/l'],
        answer: 0,
        explanation: '小振幅',
      },
      {
        type: 'formula',
        question: '最大速度はどれか',
        choices: ['vmax = Aω', 'vmax = ω', 'vmax = A', 'vmax = A^2'],
        answer: 0,
        explanation: '中心で最大',
      },
      {
        type: 'formula',
        question: '最大加速度はどれか',
        choices: ['amax = Aω^2', 'amax = ω', 'amax = A', 'amax = Aω'],
        answer: 0,
        explanation: '端で最大',
      },
      {
        type: 'formula',
        question: '復元力の式はどれか',
        choices: ['F = -kx', 'F = kx', 'F = mx', 'F = x/k'],
        answer: 0,
        explanation: '原点に戻る力',
      },
      {
        type: 'formula',
        question: '角振動数とばね定数の関係はどれか',
        choices: ['ω = √(k/m)', 'ω = k/m', 'ω = m/k', 'ω = k+m'],
        answer: 0,
        explanation: '周期から導く',
      },
      {
        type: 'formula',
        question: '円運動との対応で半径に対応する量はどれか',
        choices: ['振幅A', '速度v', '加速度a', '時間t'],
        answer: 0,
        explanation: '円の半径',
      },
      {
        type: 'formula',
        question: '位相を表す部分はどれか',
        choices: ['ωt', 'A', 'x', 'v'],
        answer: 0,
        explanation: '時間の進み具合',
      },
      {
        type: 'meaning',
        question: '単振動とはどのような運動か',
        choices: ['往復運動', '直線運動', '円運動', '自由落下'],
        answer: 0,
        explanation: '周期的に往復',
      },
      {
        type: 'meaning',
        question: '単振動で速度が最大になる位置はどこか',
        choices: ['中心', '端', 'どこでも同じ', '途中'],
        answer: 0,
        explanation: '最も速い',
      },
      {
        type: 'meaning',
        question: '加速度が最大になる位置はどこか',
        choices: ['端', '中心', '途中', '最初'],
        answer: 0,
        explanation: '距離最大',
      },
      {
        type: 'meaning',
        question: '復元力の向きはどれか',
        choices: ['中心向き', '外向き', '上向き', '下向き'],
        answer: 0,
        explanation: '元に戻る',
      },
      {
        type: 'meaning',
        question: '円運動と単振動の関係はどれか',
        choices: ['円運動の投影', '別の運動', '同じ運動', '無関係'],
        answer: 0,
        explanation: 'x軸への影',
      },
      {
        type: 'meaning',
        question: '位相が同じとはどういうことか',
        choices: ['同じ状態にある', '同じ位置', '同じ速度', '同じ時間'],
        answer: 0,
        explanation: '動きが一致',
      },
      {
        type: 'meaning',
        question: '単振動の周期に影響しないものはどれか（ばね振動）',
        choices: ['振幅', '質量', 'ばね定数', '時間'],
        answer: 0,
        explanation: 'Aは無関係',
      },
      {
        type: 'meaning',
        question: '単振動のエネルギーはどうなるか',
        choices: ['一定', '増える', '減る', '0になる'],
        answer: 0,
        explanation: '保存される',
      },
    ],
  },
  {
    missionNumber: 12,
    missionLabel: '9-α',
    chapter: '単振動（応用例）',
    questions: [
      {
        type: 'formula',
        question: '水平ばね振り子の周期はどれか',
        choices: ['T = 2π√(m/k)', 'T = 2π√(k/m)', 'T = m/k', 'T = k/m'],
        answer: 0,
        explanation: '基本公式',
      },
      {
        type: 'meaning',
        question: '水平ばね振り子で振動中心はどこか',
        choices: ['ばねの自然長の位置', '最大伸び', '最大縮み', '任意'],
        answer: 0,
        explanation: '力がつり合う位置',
      },
      {
        type: 'formula',
        question: '鉛直ばね振り子の周期はどれか',
        choices: ['T = 2π√(m/k)', 'T = 2π√(l/g)', 'T = mg', 'T = k/m'],
        answer: 0,
        explanation: '重力があっても同じ',
      },
      {
        type: 'meaning',
        question: '鉛直ばね振り子で振動中心はどこか',
        choices: ['ばねがつり合った位置', '自然長', '最大位置', '下端'],
        answer: 0,
        explanation: '重力で伸びた位置',
      },
      {
        type: 'formula',
        question: '単振動の全エネルギーはどれか',
        choices: ['E = (1/2)kA^2', 'E = mgh', 'E = (1/2)mv^2', 'E = kx'],
        answer: 0,
        explanation: '振幅で決まる',
      },
      {
        type: 'meaning',
        question: '単振動のエネルギーは時間とともにどうなるか',
        choices: ['一定', '増加', '減少', '0になる'],
        answer: 0,
        explanation: '保存される',
      },
      {
        type: 'formula',
        question: '単振動の位置エネルギーはどれか',
        choices: ['U = (1/2)kx^2', 'U = kx', 'U = mg', 'U = (1/2)mv^2'],
        answer: 0,
        explanation: 'xの2乗に比例',
      },
      {
        type: 'formula',
        question: '単振動の運動エネルギーはどれか',
        choices: ['K = (1/2)mv^2', 'K = (1/2)kx^2', 'K = mgh', 'K = kt'],
        answer: 0,
        explanation: '通常の運動エネルギー',
      },
      {
        type: 'meaning',
        question: '単振動でエネルギーが最大になる位置はどこか',
        choices: ['全エネルギーは常に同じ', '中心', '端', '途中'],
        answer: 0,
        explanation: '総エネルギーは保存',
      },
      {
        type: 'meaning',
        question: 'ばね振動で端では何が最大か',
        choices: ['位置エネルギー', '運動エネルギー', '速度', '時間'],
        answer: 0,
        explanation: '速度は0',
      },
      {
        type: 'meaning',
        question: '中心では何が最大か',
        choices: ['運動エネルギー', '位置エネルギー', '加速度', '時間'],
        answer: 0,
        explanation: '最も速い',
      },
      {
        type: 'formula',
        question: '単振り子の周期はどれか',
        choices: ['T = 2π√(l/g)', 'T = 2π√(m/k)', 'T = l/g', 'T = g/l'],
        answer: 0,
        explanation: '重要公式',
      },
      {
        type: 'meaning',
        question: '単振り子の周期に影響しないものはどれか',
        choices: ['質量', '長さ', '重力加速度', '角度（小さい場合）'],
        answer: 0,
        explanation: 'mは関係ない',
      },
      {
        type: 'meaning',
        question: '単振り子が単振動として扱える条件はどれか',
        choices: ['振れ角が小さい', '振れ角が大きい', '重い', '軽い'],
        answer: 0,
        explanation: 'sinθ ≈ θ',
      },
      {
        type: 'formula',
        question: '鉛直ばね振り子でつり合いの伸びはどれか',
        choices: ['kx = mg', 'kx = m', 'kx = g', 'kx = 0'],
        answer: 0,
        explanation: '力のつり合い',
      },
    ],
  },
  {
    missionNumber: 13,
    missionLabel: '10',
    chapter: '万有引力',
    questions: [
      {
        type: 'formula',
        question: '万有引力の法則はどれか',
        choices: ['F = GmM/r^2', 'F = mM/r', 'F = mr^2', 'F = GM'],
        answer: 0,
        explanation: '逆二乗則',
      },
      {
        type: 'formula',
        question: '重力加速度 g の式はどれか',
        choices: ['g = GM/r^2', 'g = GM/r', 'g = r^2/M', 'g = M/r'],
        answer: 0,
        explanation: '地球から導く',
      },
      {
        type: 'formula',
        question: '万有引力による位置エネルギーはどれか',
        choices: ['U = -GMm/r', 'U = GMm/r', 'U = mgh', 'U = 1/2mv^2'],
        answer: 0,
        explanation: '無限遠を0とする',
      },
      {
        type: 'formula',
        question: '円軌道の人工衛星の速度はどれか',
        choices: ['v = √(GM/r)', 'v = GM/r', 'v = √(r/GM)', 'v = r^2'],
        answer: 0,
        explanation: '向心力から導く',
      },
      {
        type: 'formula',
        question: '人工衛星の周期はどれか',
        choices: ['T = 2π√(r^3/GM)', 'T = 2πr/GM', 'T = r/GM', 'T = GM/r'],
        answer: 0,
        explanation: 'ケプラー第3法則',
      },
      {
        type: 'formula',
        question: '力学的エネルギーの式（円軌道）はどれか',
        choices: ['E = -GMm/(2r)', 'E = GMm/r', 'E = mgh', 'E = mv^2'],
        answer: 0,
        explanation: '負の値になる',
      },
      {
        type: 'formula',
        question: 'ケプラー第1法則はどれか',
        choices: ['軌道は楕円', '面積一定', '周期の2乗比例', '速度一定'],
        answer: 0,
        explanation: '楕円運動',
      },
      {
        type: 'formula',
        question: 'ケプラー第2法則はどれか',
        choices: ['等しい時間で等しい面積', '軌道は円', '速度一定', '距離一定'],
        answer: 0,
        explanation: '面積速度一定',
      },
      {
        type: 'formula',
        question: 'ケプラー第3法則はどれか',
        choices: ['T^2 ∝ r^3', 'T ∝ r', 'T ∝ r^2', 'T^3 ∝ r^2'],
        answer: 0,
        explanation: '周期と軌道半径',
      },
      {
        type: 'formula',
        question: '第一宇宙速度はどれか',
        choices: ['v = √(GM/R)', 'v = GM/R', 'v = R^2', 'v = 2GM'],
        answer: 0,
        explanation: '地表円運動',
      },
      {
        type: 'formula',
        question: '第二宇宙速度はどれか',
        choices: ['v = √(2GM/R)', 'v = GM/R', 'v = 2GM', 'v = R^2'],
        answer: 0,
        explanation: '脱出速度',
      },
      {
        type: 'formula',
        question: '万有引力場での運動エネルギーはどれか（円軌道）',
        choices: ['K = GMm/(2r)', 'K = GMm/r', 'K = mgh', 'K = mv'],
        answer: 0,
        explanation: '全エネルギーから導く',
      },
      {
        type: 'formula',
        question: '万有引力を受ける物体の加速度はどれか',
        choices: ['a = GM/r^2', 'a = r^2/GM', 'a = GM/r', 'a = m/r'],
        answer: 0,
        explanation: '重力加速度と同じ形',
      },
      {
        type: 'meaning',
        question: '万有引力とは何か',
        choices: ['すべての物体間に働く引力', '地球だけの力', '速度に比例', '時間で変化'],
        answer: 0,
        explanation: '普遍的な力',
      },
      {
        type: 'meaning',
        question: '距離が2倍になると万有引力はどうなるか',
        choices: ['1/4になる', '2倍', '1/2', '4倍'],
        answer: 0,
        explanation: '逆二乗則',
      },
      {
        type: 'meaning',
        question: '人工衛星が落ちない理由はどれか',
        choices: ['横方向の速度がある', '重力がない', '空気がある', '軽いから'],
        answer: 0,
        explanation: '円運動している',
      },
      {
        type: 'meaning',
        question: '位置エネルギーが負になる理由はどれか',
        choices: ['無限遠を基準にしている', '速度がある', '重力が弱い', '時間が長い'],
        answer: 0,
        explanation: '基準の取り方',
      },
      {
        type: 'meaning',
        question: '楕円軌道で速さはどうなるか',
        choices: ['近いほど速い', '一定', '遠いほど速い', '0になる'],
        answer: 0,
        explanation: '面積速度一定',
      },
      {
        type: 'meaning',
        question: '重い星の周りでは衛星の速度はどうなるか',
        choices: ['大きくなる', '小さくなる', '変わらない', '0になる'],
        answer: 0,
        explanation: 'GMが大きい',
      },
      {
        type: 'meaning',
        question: '万有引力下での力学的エネルギーはどうなるか',
        choices: ['一定（保存）', '増加', '減少', '0'],
        answer: 0,
        explanation: '保存力',
      },
    ],
  },
];

const SCREENS = { HOME: 'home', MODE: 'mode', QUIZ: 'quiz', RESULT: 'result', SCORE: 'score' };
const MODES = { NORMAL: 'normal', RANDOM: 'random', REVIEW: 'review' };
const TYPE_LABELS = { formula: '公式', meaning: '意味', manipulation: '操作' };
const CHOICE_LABELS = ['A', 'B', 'C', 'D'];

const state = {
  screen: SCREENS.HOME,
  missionIndex: 0,
  missionSelection: 0,
  mode: MODES.NORMAL,
  menuSelection: 0,
  questions: [],
  currentIndex: 0,
  selectedIndex: 0,
  score: 0,
  lastAnswer: null,
  sessionResults: {},
  storedWrongIds: [],
};

const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
const app = document.getElementById('app');

function displayMissionId(m) {
  return m.missionLabel || String(m.missionNumber);
}

function getStorageKey(m) {
  return 'physics-mission-' + displayMissionId(m) + '-wrong-ids';
}

function loadWrongIds(m) {
  try {
    const raw = localStorage.getItem(getStorageKey(m));
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    return [];
  }
}

function saveWrongIds(m, ids) {
  localStorage.setItem(getStorageKey(m), JSON.stringify(ids));
}

function shuffleArray(items) {
  const arr = items.slice();
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
  return arr;
}

function shuffleChoices(q) {
  const indices = q.choices.map(function (_, i) {
    return i;
  });
  const order = shuffleArray(indices);
  return {
    choices: order.map(function (i) {
      return q.choices[i];
    }),
    answer: order.indexOf(q.answer),
  };
}

function withStoredChoices(q) {
  return Object.assign({}, q, {
    _originalChoices: q.choices.slice(),
    _originalAnswer: q.answer,
  });
}

function applyShuffledChoices(index) {
  const q = state.questions[index];
  if (!q || !q._originalChoices) return;
  const shuffled = shuffleChoices({
    choices: q._originalChoices,
    answer: q._originalAnswer,
  });
  state.questions[index] = Object.assign({}, q, shuffled);
}

function getRankMessage(score, total) {
  const ratio = score / total;
  if (ratio === 1) return '★ ミッションクリア！ ★';
  if (ratio >= 0.8) return 'よくできました！';
  if (ratio >= 0.6) return 'もう少し！';
  if (ratio >= 0.4) return '復習しよう';
  return 'がんばろう！';
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function missionData() {
  return MISSIONS[state.missionIndex];
}

function buildQuestionList(allQuestions, mode, wrongIds) {
  const withIds = allQuestions.map(function (q, index) {
    return Object.assign({}, q, { id: index });
  });
  let list;
  if (mode === MODES.REVIEW) {
    const wrongSet = new Set(wrongIds);
    list = withIds.filter(function (q) {
      return wrongSet.has(q.id);
    });
  } else if (mode === MODES.RANDOM) {
    list = shuffleArray(withIds);
  } else {
    list = withIds;
  }
  return list.map(withStoredChoices);
}

function sessionWrongCount() {
  return Object.keys(state.sessionResults).filter(function (k) {
    return !state.sessionResults[k];
  }).length;
}

function menuItems() {
  return [
    { id: MODES.NORMAL, disabled: false },
    { id: MODES.RANDOM, disabled: false },
    { id: MODES.REVIEW, disabled: state.storedWrongIds.length === 0 },
  ];
}

function selectMission(index) {
  state.missionIndex = index;
  state.menuSelection = 0;
  state.storedWrongIds = loadWrongIds(MISSIONS[index]);
  state.screen = SCREENS.MODE;
  render();
}

function startQuiz(selectedMode) {
  const mission = missionData();
  const activeMode = selectedMode || state.mode;
  const list = buildQuestionList(mission.questions, activeMode, state.storedWrongIds);
  if (list.length === 0) return;
  state.mode = activeMode;
  state.questions = list;
  state.currentIndex = 0;
  state.selectedIndex = 0;
  applyShuffledChoices(0);
  state.score = 0;
  state.lastAnswer = null;
  state.sessionResults = {};
  state.screen = SCREENS.QUIZ;
  render();
}

function handleAnswer(index) {
  const q = state.questions[state.currentIndex];
  if (!q) return;
  const isCorrect = index === q.answer;
  state.lastAnswer = index;
  if (isCorrect) state.score += 1;
  state.sessionResults[q.id] = isCorrect;
  state.screen = SCREENS.RESULT;
  render();
}

function handleNext() {
  const isLast = state.currentIndex + 1 >= state.questions.length;
  if (isLast) {
    const mission = missionData();
    const wrongSet = new Set(state.storedWrongIds);
    Object.keys(state.sessionResults).forEach(function (id) {
      const numId = Number(id);
      if (state.sessionResults[id]) wrongSet.delete(numId);
      else wrongSet.add(numId);
    });
    state.storedWrongIds = Array.from(wrongSet);
    saveWrongIds(mission, state.storedWrongIds);
    state.screen = SCREENS.SCORE;
    render();
    return;
  }
  state.currentIndex += 1;
  state.selectedIndex = 0;
  applyShuffledChoices(state.currentIndex);
  state.screen = SCREENS.QUIZ;
  render();
}

function renderHome() {
  var html = '<section class="screen fade-in"><div class="glass-card">';
  html += '<p class="badge">PHYSICS MISSION</p>';
  html += '<h1 class="app-title">PHYSICS MISSION</h1>';
  html += '<p class="app-subtitle">ミッションを選んでください</p>';
  html += '<ul class="menu-list mission-list">';
  MISSIONS.forEach(function (m, index) {
    var sel = state.missionSelection === index ? ' selected' : '';
    html += '<li class="menu-item mission-item' + sel + '" data-index="' + index + '">';
    html += '<span class="mission-number"><span class="mission-arrow">▶</span> MISSION ' + displayMissionId(m) + '</span>';
    html += '<span class="mission-name">（' + escapeHtml(m.chapter) + '）</span>';
    html += '<span class="mission-meta">' + m.questions.length + ' 問</span></li>';
  });
  html += '</ul>';
  html += '<button type="button" class="btn-primary" id="btnConfirmMission">ミッション開始</button>';
  html += isTouch
    ? '<p class="hint">ミッションをタップして開始</p>'
    : '<p class="hint">↑↓ で選択　Enter で決定</p>';
  html += '</div></section>';
  return html;
}

function renderMode() {
  var m = missionData();
  var items = [
    { id: 'normal', label: 'START', desc: '順番に出題' },
    { id: 'random', label: 'ランダム', desc: 'シャッフル出題' },
    {
      id: 'review',
      label: '復習モード',
      desc:
        state.storedWrongIds.length > 0
          ? '間違えた ' + state.storedWrongIds.length + ' 問'
          : '間違えた問題なし',
      disabled: state.storedWrongIds.length === 0,
    },
  ];
  var html = '<section class="screen fade-in"><div class="glass-card">';
  html += '<button type="button" class="btn-back-link" id="btnBackHome">← ミッション選択へ</button>';
  html += '<p class="badge">MISSION ' + displayMissionId(m) + ' · PHYSICS MISSION</p>';
  html += '<h1 class="app-title">' + escapeHtml(m.chapter) + '</h1>';
  html += '<p class="app-subtitle">全 ' + m.questions.length + ' 問 · 4択クイズ</p>';
  html += '<ul class="menu-list">';
  items.forEach(function (item, index) {
    var cls = 'menu-item';
    if (state.menuSelection === index) cls += ' selected';
    if (item.disabled) cls += ' disabled';
    html += '<li class="' + cls + '" data-menu="' + index + '">';
    html += '<span class="menu-label">' + item.label + '</span>';
    html += '<span class="menu-desc">' + item.desc + '</span></li>';
  });
  html += '</ul>';
  html += '<button type="button" class="btn-primary" id="btnStart">' + items[state.menuSelection].label + '</button>';
  html += isTouch
    ? '<p class="hint">モードを選んで START</p>'
    : '<p class="hint">↑↓ で選択　Enter で開始</p>';
  html += '</div></section>';
  return html;
}

function renderQuiz() {
  var m = missionData();
  var q = state.questions[state.currentIndex];
  var current = state.currentIndex + 1;
  var total = state.questions.length;
  var progress = ((current - 1) / total) * 100;
  var html = '<section class="screen fade-in"><div class="glass-card">';
  html += '<div class="quiz-header">';
  html += '<span class="type-badge">' + (TYPE_LABELS[q.type] || q.type) + '</span>';
  html += '<span class="progress-text">' + current + ' / ' + total + '</span></div>';
  html += '<div class="progress-bar"><div class="progress-fill" style="width:' + progress + '%"></div></div>';
  html += '<p class="mission-label">MISSION ' + displayMissionId(m) + ' · ' + escapeHtml(m.chapter) + '</p>';
  html += '<p class="question-text">' + escapeHtml(q.question) + '</p>';
  html += '<ul class="choices-list">';
  q.choices.forEach(function (choice, index) {
    var sel = state.selectedIndex === index ? ' selected' : '';
    html += '<li class="choice-item' + sel + '" data-choice="' + index + '">';
    html += '<span class="choice-label">' + CHOICE_LABELS[index] + '.</span>';
    html += '<span class="choice-text">' + escapeHtml(choice) + '</span></li>';
  });
  html += '</ul>';
  html += isTouch
    ? '<p class="hint">選択肢をタップして回答</p>'
    : '<p class="hint">↑↓ で選択　Enter で決定</p>';
  html += '</div></section>';
  return html;
}

function renderResult() {
  var q = state.questions[state.currentIndex];
  var isCorrect = state.lastAnswer === q.answer;
  var isLast = state.currentIndex + 1 >= state.questions.length;
  var html = '<section class="screen fade-in"><div class="glass-card card-result">';
  html += '<div class="result-icon ' + (isCorrect ? 'correct' : 'incorrect') + '">';
  html += isCorrect ? '✓' : '✗';
  html += '</div>';
  html += '<p class="result-label ' + (isCorrect ? 'correct' : 'incorrect') + '">';
  html += isCorrect ? '正解！' : '不正解…';
  html += '</p>';
  if (isCorrect) {
    html +=
      '<p class="result-detail correct-text">' +
      CHOICE_LABELS[q.answer] +
      '. ' +
      escapeHtml(q.choices[q.answer]) +
      '</p>';
  } else {
    html += '<p class="result-detail">';
    html +=
      '<span class="incorrect-text">あなたの回答: ' +
      CHOICE_LABELS[state.lastAnswer] +
      '. ' +
      escapeHtml(q.choices[state.lastAnswer]) +
      '</span><br>';
    html +=
      '<span class="correct-text">正解: ' +
      CHOICE_LABELS[q.answer] +
      '. ' +
      escapeHtml(q.choices[q.answer]) +
      '</span></p>';
  }
  html += '<div class="explanation-box"><p class="explanation-label">解説</p>';
  html += '<p class="explanation-text">' + escapeHtml(q.explanation) + '</p></div>';
  html += '<button type="button" class="btn-primary" id="btnNext">' + (isLast ? 'スコアを見る' : '次へ') + '</button>';
  if (!isTouch) html += '<p class="hint">Enter で次へ</p>';
  html += '</div></section>';
  return html;
}

function renderScore() {
  var m = missionData();
  var wrong = sessionWrongCount();
  var html = '<section class="screen fade-in"><div class="glass-card card-score">';
  html += '<p class="badge">MISSION COMPLETE</p>';
  html += '<h2 class="score-title">MISSION ' + displayMissionId(m) + ' · ' + escapeHtml(m.chapter) + '</h2>';
  html += '<div class="score-circle"><span class="score-value">' + state.score + '</span>';
  html += '<span class="score-total">/ ' + state.questions.length + '</span></div>';
  html += '<p class="score-rank">' + getRankMessage(state.score, state.questions.length) + '</p>';
  if (wrong > 0) html += '<p class="score-note">今回 ' + wrong + ' 問不正解</p>';
  html += '<div class="score-actions">';
  html += '<button type="button" class="btn-primary" id="btnRetry">もう一度</button>';
  if (state.storedWrongIds.length > 0) {
    html +=
      '<button type="button" class="btn-secondary" id="btnReview">間違えた問題を復習（' +
      state.storedWrongIds.length +
      '問）</button>';
  }
  html += '<button type="button" class="btn-secondary" id="btnBackMode">モード選択へ</button>';
  html += '<button type="button" class="btn-ghost" id="btnHome">ミッション選択へ</button>';
  html += '</div></div></section>';
  return html;
}

function render() {
  var html = '';
  if (state.screen === SCREENS.HOME) html = renderHome();
  else if (state.screen === SCREENS.MODE) html = renderMode();
  else if (state.screen === SCREENS.QUIZ) html = renderQuiz();
  else if (state.screen === SCREENS.RESULT) html = renderResult();
  else if (state.screen === SCREENS.SCORE) html = renderScore();
  app.innerHTML = html;
  bindEvents();
}

function bindEvents() {
  if (state.screen === SCREENS.HOME) {
    app.querySelectorAll('.mission-item').forEach(function (el) {
      el.addEventListener('click', function () {
        var index = Number(el.getAttribute('data-index'));
        state.missionSelection = index;
        if (isTouch) selectMission(index);
        else render();
      });
    });
    var btnConfirm = document.getElementById('btnConfirmMission');
    if (btnConfirm)
      btnConfirm.addEventListener('click', function () {
        selectMission(state.missionSelection);
      });
  }

  if (state.screen === SCREENS.MODE) {
    var btnBack = document.getElementById('btnBackHome');
    if (btnBack)
      btnBack.addEventListener('click', function () {
        state.missionSelection = state.missionIndex;
        state.screen = SCREENS.HOME;
        render();
      });
    app.querySelectorAll('[data-menu]').forEach(function (el) {
      el.addEventListener('click', function () {
        if (el.classList.contains('disabled')) return;
        state.menuSelection = Number(el.getAttribute('data-menu'));
        render();
      });
    });
    var btnStart = document.getElementById('btnStart');
    if (btnStart)
      btnStart.addEventListener('click', function () {
        var modes = [MODES.NORMAL, MODES.RANDOM, MODES.REVIEW];
        var item = menuItems()[state.menuSelection];
        if (!item.disabled) startQuiz(modes[state.menuSelection]);
      });
  }

  if (state.screen === SCREENS.QUIZ) {
    app.querySelectorAll('.choice-item').forEach(function (el) {
      el.addEventListener('click', function () {
        var index = Number(el.getAttribute('data-choice'));
        if (isTouch) handleAnswer(index);
        else if (state.selectedIndex === index) handleAnswer(index);
        else {
          state.selectedIndex = index;
          render();
        }
      });
    });
  }

  if (state.screen === SCREENS.RESULT) {
    var btnNext = document.getElementById('btnNext');
    if (btnNext) btnNext.addEventListener('click', handleNext);
  }

  if (state.screen === SCREENS.SCORE) {
    var btnRetry = document.getElementById('btnRetry');
    if (btnRetry)
      btnRetry.addEventListener('click', function () {
        startQuiz(state.mode);
      });
    var btnReview = document.getElementById('btnReview');
    if (btnReview)
      btnReview.addEventListener('click', function () {
        startQuiz(MODES.REVIEW);
      });
    var btnBackMode = document.getElementById('btnBackMode');
    if (btnBackMode)
      btnBackMode.addEventListener('click', function () {
        state.storedWrongIds = loadWrongIds(missionData());
        state.menuSelection = 0;
        state.screen = SCREENS.MODE;
        render();
      });
    var btnHome = document.getElementById('btnHome');
    if (btnHome)
      btnHome.addEventListener('click', function () {
        state.missionSelection = state.missionIndex;
        state.screen = SCREENS.HOME;
        render();
      });
  }
}

function handleKeydown(event) {
  if (['ArrowUp', 'ArrowDown', 'Enter', 'Escape'].indexOf(event.key) >= 0) {
    event.preventDefault();
  }

  if (state.screen === SCREENS.HOME) {
    if (event.key === 'ArrowUp') {
      state.missionSelection = (state.missionSelection - 1 + MISSIONS.length) % MISSIONS.length;
      render();
    } else if (event.key === 'ArrowDown') {
      state.missionSelection = (state.missionSelection + 1) % MISSIONS.length;
      render();
    } else if (event.key === 'Enter') {
      selectMission(state.missionSelection);
    }
    return;
  }

  if (state.screen === SCREENS.MODE) {
    var items = menuItems();
    if (event.key === 'Escape') {
      state.screen = SCREENS.HOME;
      render();
      return;
    }
    if (event.key === 'ArrowUp') {
      var nextUp = state.menuSelection;
      do {
        nextUp = (nextUp - 1 + items.length) % items.length;
      } while (items[nextUp].disabled && nextUp !== state.menuSelection);
      state.menuSelection = nextUp;
      render();
    } else if (event.key === 'ArrowDown') {
      var nextDown = state.menuSelection;
      do {
        nextDown = (nextDown + 1) % items.length;
      } while (items[nextDown].disabled && nextDown !== state.menuSelection);
      state.menuSelection = nextDown;
      render();
    } else if (event.key === 'Enter') {
      if (!items[state.menuSelection].disabled) {
        startQuiz([MODES.NORMAL, MODES.RANDOM, MODES.REVIEW][state.menuSelection]);
      }
    }
    return;
  }

  if (state.screen === SCREENS.QUIZ) {
    var q = state.questions[state.currentIndex];
    if (!q) return;
    var count = q.choices.length;
    if (event.key === 'ArrowUp') {
      state.selectedIndex = (state.selectedIndex - 1 + count) % count;
      render();
    } else if (event.key === 'ArrowDown') {
      state.selectedIndex = (state.selectedIndex + 1) % count;
      render();
    } else if (event.key === 'Enter') {
      handleAnswer(state.selectedIndex);
    }
    return;
  }

  if (state.screen === SCREENS.RESULT && event.key === 'Enter') {
    handleNext();
  }
}

document.addEventListener('keydown', handleKeydown);
render();
