const quizData = [
  {
    "no": 1301,
    "word": "import",
    "meaning": "輸入する",
    "choices": [
      "輸出する",
      "運ぶ",
      "販売する",
      "輸入する"
    ],
    "sentence": "A large part of our food is imported from Europe.",
    "translation": "私たちの食料の多くはヨーロッパから輸入されている。"
  },
  {
    "no": 1302,
    "word": "export",
    "meaning": "輸出する",
    "choices": [
      "輸出する",
      "配達する",
      "輸入する",
      "生産する"
    ],
    "sentence": "This company exports its products to many countries.",
    "translation": "この会社は製品を多くの国へ輸出している。"
  },
  {
    "no": 1303,
    "word": "vehicle",
    "meaning": "乗り物",
    "choices": [
      "列車",
      "機械",
      "自動車",
      "乗り物"
    ],
    "sentence": "The accident involved more than ten vehicles on the highway.",
    "translation": "その事故では高速道路で10台以上の乗り物が関係した。"
  },
  {
    "no": 1304,
    "word": "automobile",
    "meaning": "自動車",
    "choices": [
      "電車",
      "飛行機",
      "自動車",
      "乗り物"
    ],
    "sentence": "My grandfather still drives the same automobile he bought years ago.",
    "translation": "祖父は何年も前に買った同じ自動車を今でも運転している。"
  },
  {
    "no": 1305,
    "word": "aboard",
    "meaning": "乗って",
    "choices": [
      "乗って",
      "外へ",
      "近くに",
      "向こうに"
    ],
    "sentence": "All the passengers are now aboard the train.",
    "translation": "乗客は全員、今はその列車に乗っている。"
  },
  {
    "no": 1306,
    "word": "tiny",
    "meaning": "とても小さい",
    "choices": [
      "軽い",
      "細い",
      "古い",
      "とても小さい"
    ],
    "sentence": "The baby held a tiny toy in her hand.",
    "translation": "その赤ちゃんは手にとても小さいおもちゃを持っていた。"
  },
  {
    "no": 1307,
    "word": "minimize",
    "meaning": "最小限にする",
    "choices": [
      "制限する",
      "増やす",
      "最小限にする",
      "減らす"
    ],
    "sentence": "We need to minimize waste in the school cafeteria.",
    "translation": "学校の食堂で出るごみを最小限にする必要がある。"
  },
  {
    "no": 1308,
    "word": "particle",
    "meaning": "粒子",
    "choices": [
      "結晶",
      "粒子",
      "分子",
      "細胞"
    ],
    "sentence": "Dust particles were floating in the sunlight.",
    "translation": "ほこりの粒子が日光の中に浮かんでいた。"
  },
  {
    "no": 1309,
    "word": "molecule",
    "meaning": "分子",
    "choices": [
      "原子",
      "分子",
      "粒子",
      "物質"
    ],
    "sentence": "Water is made of simple molecules.",
    "translation": "水は単純な分子でできている。"
  },
  {
    "no": 1310,
    "word": "revive",
    "meaning": "蘇生させる",
    "choices": [
      "回復させる",
      "蘇生させる",
      "保護する",
      "修理する"
    ],
    "sentence": "Doctors worked quickly to revive the patient.",
    "translation": "医師たちは患者を蘇生させるために素早く動いた。"
  },
  {
    "no": 1311,
    "word": "amusement",
    "meaning": "面白さ",
    "choices": [
      "面白さ",
      "驚き",
      "娯楽",
      "冗談"
    ],
    "sentence": "The movie provided a lot of amusement for the children.",
    "translation": "その映画は子どもたちに大きな面白さを与えた。"
  },
  {
    "no": 1312,
    "word": "refresh",
    "meaning": "元気づける",
    "choices": [
      "元気づける",
      "落ち着かせる",
      "安心させる",
      "励ます"
    ],
    "sentence": "A short walk outside refreshed me after class.",
    "translation": "授業の後、外を少し歩くと気分が元気づけられた。"
  },
  {
    "no": 1313,
    "word": "district",
    "meaning": "地域",
    "choices": [
      "地方",
      "区域",
      "中心",
      "地域"
    ],
    "sentence": "This district is famous for its old shops.",
    "translation": "この地域は古い店で有名だ。"
  },
  {
    "no": 1314,
    "word": "wire",
    "meaning": "針金",
    "choices": [
      "針金",
      "板",
      "電線",
      "ひも"
    ],
    "sentence": "He bent a piece of wire into a circle.",
    "translation": "彼は一本の針金を曲げて円にした。"
  },
  {
    "no": 1315,
    "word": "float",
    "meaning": "浮く",
    "choices": [
      "浮く",
      "漂う",
      "落ちる",
      "沈む"
    ],
    "sentence": "Colorful leaves floated on the pond.",
    "translation": "色とりどりの葉が池に浮いていた。"
  },
  {
    "no": 1316,
    "word": "administer",
    "meaning": "管理する",
    "choices": [
      "組織する",
      "管理する",
      "監督する",
      "運営する"
    ],
    "sentence": "The city administers the public library system.",
    "translation": "市は公共図書館の制度を管理している。"
  },
  {
    "no": 1317,
    "word": "supervise",
    "meaning": "監督する",
    "choices": [
      "監督する",
      "補助する",
      "観察する",
      "指導する"
    ],
    "sentence": "A teacher will supervise the science experiment.",
    "translation": "先生がその理科実験を監督する。"
  },
  {
    "no": 1318,
    "word": "panel",
    "meaning": "専門家集団",
    "choices": [
      "観客",
      "記者団",
      "専門家集団",
      "委員会"
    ],
    "sentence": "A panel of doctors discussed the new treatment.",
    "translation": "医師の専門家集団がその新しい治療法について話し合った。"
  },
  {
    "no": 1319,
    "word": "oppose",
    "meaning": "反対する",
    "choices": [
      "拒否する",
      "支持する",
      "批判する",
      "反対する"
    ],
    "sentence": "Many residents oppose the plan to cut down the trees.",
    "translation": "多くの住民が木を切る計画に反対している。"
  },
  {
    "no": 1320,
    "word": "counter",
    "meaning": "カウンター",
    "choices": [
      "棚",
      "カウンター",
      "売り場",
      "机"
    ],
    "sentence": "Please pay at the front counter.",
    "translation": "前のカウンターで支払いをしてください。"
  },
  {
    "no": 1321,
    "word": "reverse",
    "meaning": "逆にする",
    "choices": [
      "戻す",
      "止める",
      "変える",
      "逆にする"
    ],
    "sentence": "Press this button to reverse the direction.",
    "translation": "方向を逆にするにはこのボタンを押してください。"
  },
  {
    "no": 1322,
    "word": "rebel",
    "meaning": "反逆者",
    "choices": [
      "指導者",
      "兵士",
      "反逆者",
      "抗議者"
    ],
    "sentence": "The story is about a young rebel against the king.",
    "translation": "その物語は王に反抗する若い反逆者についての話だ。"
  },
  {
    "no": 1323,
    "word": "revolt",
    "meaning": "反逆",
    "choices": [
      "反逆",
      "戦争",
      "革命",
      "抗議"
    ],
    "sentence": "The heavy taxes led to a revolt.",
    "translation": "重い税が反逆を引き起こした。"
  },
  {
    "no": 1324,
    "word": "tear",
    "meaning": "涙",
    "choices": [
      "血",
      "叫び",
      "汗",
      "涙"
    ],
    "sentence": "A tear rolled down her cheek.",
    "translation": "一筋の涙が彼女の頬を伝った。"
  },
  {
    "no": 1325,
    "word": "recall",
    "meaning": "思い出す",
    "choices": [
      "説明する",
      "忘れる",
      "思い出す",
      "想像する"
    ],
    "sentence": "I can clearly recall my first day at high school.",
    "translation": "高校での最初の日を私ははっきり思い出せる。"
  },
  {
    "no": 1326,
    "word": "sight",
    "meaning": "見ること",
    "choices": [
      "視力",
      "見ること",
      "景色",
      "視線"
    ],
    "sentence": "The sight of the ocean made us smile.",
    "translation": "海を見ることが私たちを笑顔にした。"
  },
  {
    "no": 1327,
    "word": "remind",
    "meaning": "思い出させる",
    "choices": [
      "知らせる",
      "教える",
      "気づかせる",
      "思い出させる"
    ],
    "sentence": "This song reminds me of my childhood.",
    "translation": "この歌は私に子どものころを思い出させる。"
  },
  {
    "no": 1328,
    "word": "unlikely",
    "meaning": "しそうにない",
    "choices": [
      "確実な",
      "しそうにない",
      "かもしれない",
      "珍しい"
    ],
    "sentence": "It is unlikely that he will miss the meeting.",
    "translation": "彼がその会議を欠席することはしそうにない。"
  },
  {
    "no": 1329,
    "word": "briefly",
    "meaning": "少しの間",
    "choices": [
      "突然",
      "少しの間",
      "短く",
      "静かに"
    ],
    "sentence": "We talked briefly before the bell rang.",
    "translation": "ベルが鳴る前に私たちは少しの間話した。"
  },
  {
    "no": 1330,
    "word": "temporary",
    "meaning": "一時的な",
    "choices": [
      "永続的な",
      "仮の",
      "一時的な",
      "短期の"
    ],
    "sentence": "The road closure is only temporary.",
    "translation": "その道路閉鎖は一時的なものにすぎない。"
  },
  {
    "no": 1331,
    "word": "countryside",
    "meaning": "地方",
    "choices": [
      "農村",
      "地方",
      "都会",
      "郊外"
    ],
    "sentence": "They moved from Tokyo to the countryside.",
    "translation": "彼らは東京から地方へ引っ越した。"
  },
  {
    "no": 1332,
    "word": "landscape",
    "meaning": "風景",
    "choices": [
      "眺め",
      "風景",
      "地形",
      "景色"
    ],
    "sentence": "We stopped to admire the mountain landscape.",
    "translation": "私たちは山の風景を眺めるために立ち止まった。"
  },
  {
    "no": 1333,
    "word": "scene",
    "meaning": "光景",
    "choices": [
      "様子",
      "場面",
      "光景",
      "景色"
    ],
    "sentence": "The scene after the festival was very quiet.",
    "translation": "祭りの後の光景はとても静かだった。"
  },
  {
    "no": 1334,
    "word": "photograph",
    "meaning": "写真",
    "choices": [
      "映像",
      "絵",
      "写真",
      "画像"
    ],
    "sentence": "She showed me a photograph of her dog.",
    "translation": "彼女は私に犬の写真を見せてくれた。"
  },
  {
    "no": 1335,
    "word": "genuine",
    "meaning": "本物の",
    "choices": [
      "偽の",
      "純粋な",
      "本物の",
      "正直な"
    ],
    "sentence": "This watch is genuine, not a copy.",
    "translation": "この時計はコピーではなく本物だ。"
  },
  {
    "no": 1336,
    "word": "authentic",
    "meaning": "本物の",
    "choices": [
      "信頼できる",
      "古い",
      "正確な",
      "本物の"
    ],
    "sentence": "The restaurant serves authentic Italian food.",
    "translation": "そのレストランでは本物のイタリア料理を出している。"
  },
  {
    "no": 1337,
    "word": "fancy",
    "meaning": "高価な",
    "choices": [
      "高級な",
      "派手な",
      "高価な",
      "豪華な"
    ],
    "sentence": "We had dinner at a fancy hotel restaurant.",
    "translation": "私たちは高価なホテルのレストランで夕食を食べた。"
  },
  {
    "no": 1338,
    "word": "sophisticated",
    "meaning": "洗練された",
    "choices": [
      "現代的な",
      "洗練された",
      "上品な",
      "高度な"
    ],
    "sentence": "Her writing style is simple but sophisticated.",
    "translation": "彼女の文章のスタイルは簡潔だが洗練されている。"
  },
  {
    "no": 1339,
    "word": "era",
    "meaning": "時代",
    "choices": [
      "歴史",
      "年代",
      "期間",
      "時代"
    ],
    "sentence": "The internet changed the start of a new era.",
    "translation": "インターネットは新しい時代の始まりを変えた。"
  },
  {
    "no": 1340,
    "word": "outstanding",
    "meaning": "傑出した",
    "choices": [
      "特別な",
      "傑出した",
      "有名な",
      "優秀な"
    ],
    "sentence": "She did an outstanding job on the presentation.",
    "translation": "彼女はその発表で傑出した仕事をした。"
  },
  {
    "no": 1341,
    "word": "trait",
    "meaning": "特色",
    "choices": [
      "特徴",
      "性格",
      "才能",
      "特色"
    ],
    "sentence": "Patience is an important trait in a teacher.",
    "translation": "忍耐は教師にとって大切な特色だ。"
  },
  {
    "no": 1342,
    "word": "attribute",
    "meaning": "特質",
    "choices": [
      "要素",
      "能力",
      "性質",
      "特質"
    ],
    "sentence": "Kindness is one of her best attributes.",
    "translation": "親切さは彼女の最も良い特質の一つだ。"
  },
  {
    "no": 1343,
    "word": "grant",
    "meaning": "認める",
    "choices": [
      "選ぶ",
      "認める",
      "与える",
      "許可する"
    ],
    "sentence": "The school granted her request for a leave of absence.",
    "translation": "学校は彼女の休学願いを認めた。"
  },
  {
    "no": 1344,
    "word": "mood",
    "meaning": "気分",
    "choices": [
      "表情",
      "雰囲気",
      "気分",
      "感情"
    ],
    "sentence": "I am not in the mood for a serious talk tonight.",
    "translation": "私は今夜、まじめな話をする気分ではない。"
  },
  {
    "no": 1345,
    "word": "profile",
    "meaning": "プロフィール",
    "choices": [
      "輪郭",
      "プロフィール",
      "紹介文",
      "略歴"
    ],
    "sentence": "Please update your profile before you apply.",
    "translation": "応募前にプロフィールを更新してください。"
  },
  {
    "no": 1346,
    "word": "dominate",
    "meaning": "支配する",
    "choices": [
      "征服する",
      "主導する",
      "管理する",
      "支配する"
    ],
    "sentence": "One company dominates the local market.",
    "translation": "一つの会社がその地域市場を支配している。"
  },
  {
    "no": 1347,
    "word": "colony",
    "meaning": "植民地",
    "choices": [
      "開拓地",
      "集落",
      "植民地",
      "領土"
    ],
    "sentence": "The island was once a British colony.",
    "translation": "その島はかつてイギリスの植民地だった。"
  },
  {
    "no": 1348,
    "word": "lovely",
    "meaning": "素敵な",
    "choices": [
      "親切な",
      "美しい",
      "素敵な",
      "快適な"
    ],
    "sentence": "What a lovely dress you are wearing today.",
    "translation": "今日はなんて素敵なドレスを着ているの。"
  },
  {
    "no": 1349,
    "word": "beauty",
    "meaning": "美人",
    "choices": [
      "美しさ",
      "美人",
      "魅力",
      "美女"
    ],
    "sentence": "Everyone agreed that she was a great beauty.",
    "translation": "だれもが彼女が大変な美人だと認めていた。"
  },
  {
    "no": 1350,
    "word": "grace",
    "meaning": "優雅さ",
    "choices": [
      "気品",
      "礼儀",
      "優雅さ",
      "美しさ"
    ],
    "sentence": "The dancer moved with amazing grace.",
    "translation": "そのダンサーは驚くほどの優雅さで動いた。"
  },
  {
    "no": 1351,
    "word": "secretly",
    "meaning": "ひそかに",
    "choices": [
      "公然と",
      "内輪で",
      "静かに",
      "ひそかに"
    ],
    "sentence": "He secretly planned a birthday party for his sister.",
    "translation": "彼は妹のためにひそかに誕生日会を計画していた。"
  },
  {
    "no": 1352,
    "word": "modification",
    "meaning": "修正",
    "choices": [
      "修正",
      "変更",
      "改善",
      "訂正"
    ],
    "sentence": "The plan needs a small modification before we use it.",
    "translation": "その計画は使う前に少し修正が必要だ。"
  },
  {
    "no": 1353,
    "word": "scandal",
    "meaning": "醜聞",
    "choices": [
      "事件",
      "噂",
      "醜聞",
      "不祥事"
    ],
    "sentence": "The politician resigned after the scandal.",
    "translation": "その政治家は醜聞の後に辞任した。"
  },
  {
    "no": 1354,
    "word": "rumor",
    "meaning": "うわさ",
    "choices": [
      "うわさ",
      "評判",
      "情報",
      "話題"
    ],
    "sentence": "There is a rumor that the store will close soon.",
    "translation": "その店がまもなく閉まるといううわさがある。"
  },
  {
    "no": 1355,
    "word": "imply",
    "meaning": "暗示する",
    "choices": [
      "ほのめかす",
      "暗示する",
      "示す",
      "説明する"
    ],
    "sentence": "His question implied that he knew the truth.",
    "translation": "彼の質問は、彼が真実を知っていることを暗示していた。"
  },
  {
    "no": 1356,
    "word": "reliable",
    "meaning": "信頼できる",
    "choices": [
      "安定した",
      "誠実な",
      "信頼できる",
      "正確な"
    ],
    "sentence": "She is reliable, so everyone asks her for help.",
    "translation": "彼女は信頼できるので、みんなが彼女に助けを求める。"
  },
  {
    "no": 1357,
    "word": "faith",
    "meaning": "信頼",
    "choices": [
      "信用",
      "信念",
      "希望",
      "信頼"
    ],
    "sentence": "I still have faith in your ability.",
    "translation": "私は今でもあなたの力を信頼している。"
  },
  {
    "no": 1358,
    "word": "detective",
    "meaning": "刑事",
    "choices": [
      "警官",
      "探偵",
      "刑事",
      "捜査官"
    ],
    "sentence": "The detective questioned the neighbors.",
    "translation": "その刑事は近所の人たちに事情を聞いた。"
  },
  {
    "no": 1359,
    "word": "arrest",
    "meaning": "逮捕する",
    "choices": [
      "捜索する",
      "逮捕する",
      "拘束する",
      "罰する"
    ],
    "sentence": "The police arrested the suspect that evening.",
    "translation": "警察はその晩、容疑者を逮捕した。"
  },
  {
    "no": 1360,
    "word": "fascinate",
    "meaning": "魅了する",
    "choices": [
      "感動させる",
      "魅了する",
      "引きつける",
      "驚かせる"
    ],
    "sentence": "Stories about space always fascinate me.",
    "translation": "宇宙の話はいつも私を魅了する。"
  },
  {
    "no": 1361,
    "word": "fascinating",
    "meaning": "魅力的な",
    "choices": [
      "珍しい",
      "印象的な",
      "興味深い",
      "魅力的な"
    ],
    "sentence": "It was a fascinating lecture on ancient history.",
    "translation": "それは古代史についての魅力的な講義だった。"
  },
  {
    "no": 1362,
    "word": "educate",
    "meaning": "教育する",
    "choices": [
      "教える",
      "教育する",
      "育てる",
      "訓練する"
    ],
    "sentence": "Schools educate children for the future.",
    "translation": "学校は子どもたちを将来のために教育する。"
  },
  {
    "no": 1363,
    "word": "spiritual",
    "meaning": "精神の",
    "choices": [
      "道徳的な",
      "宗教的な",
      "精神の",
      "内面的な"
    ],
    "sentence": "Music can give people spiritual comfort.",
    "translation": "音楽は人々に精神の安らぎを与えることがある。"
  },
  {
    "no": 1364,
    "word": "ritual",
    "meaning": "儀式",
    "choices": [
      "儀式",
      "典礼",
      "行事",
      "習慣"
    ],
    "sentence": "The wedding ritual lasted for an hour.",
    "translation": "その結婚の儀式は1時間続いた。"
  },
  {
    "no": 1365,
    "word": "reception",
    "meaning": "接待",
    "choices": [
      "応対",
      "歓迎会",
      "接待",
      "受付"
    ],
    "sentence": "The hotel held a reception for its guests.",
    "translation": "そのホテルは宿泊客のために接待の場を設けた。"
  },
  {
    "no": 1366,
    "word": "trial",
    "meaning": "試み",
    "choices": [
      "練習",
      "試み",
      "裁判",
      "実験"
    ],
    "sentence": "Our first trial of the new app was successful.",
    "translation": "新しいアプリの最初の試みは成功した。"
  },
  {
    "no": 1367,
    "word": "penalty",
    "meaning": "罰金",
    "choices": [
      "反則",
      "処罰",
      "代償",
      "罰金"
    ],
    "sentence": "You have to pay a penalty for parking there.",
    "translation": "そこに駐車すると罰金を払わなければならない。"
  },
  {
    "no": 1368,
    "word": "punish",
    "meaning": "罰する",
    "choices": [
      "叱る",
      "注意する",
      "責める",
      "罰する"
    ],
    "sentence": "Teachers should not punish students unfairly.",
    "translation": "教師は生徒を不当に罰してはいけない。"
  },
  {
    "no": 1369,
    "word": "enormous",
    "meaning": "莫大な",
    "choices": [
      "非常な",
      "広大な",
      "巨大な",
      "莫大な"
    ],
    "sentence": "The project required an enormous amount of money.",
    "translation": "その計画には莫大なお金が必要だった。"
  },
  {
    "no": 1370,
    "word": "sanctuary",
    "meaning": "保護区域",
    "choices": [
      "避難所",
      "聖地",
      "自然区",
      "保護区域"
    ],
    "sentence": "This wetland is a sanctuary for rare birds.",
    "translation": "この湿地は希少な鳥の保護区域だ。"
  },
  {
    "no": 1371,
    "word": "resort",
    "meaning": "訴える",
    "choices": [
      "避ける",
      "挑む",
      "訴える",
      "頼る"
    ],
    "sentence": "He had to resort to borrowing money from his uncle.",
    "translation": "彼は叔父からお金を借りるという手段に訴えざるを得なかった。"
  },
  {
    "no": 1372,
    "word": "ease",
    "meaning": "容易さ",
    "choices": [
      "単純さ",
      "楽さ",
      "容易さ",
      "快適さ"
    ],
    "sentence": "The software is popular because of its ease of use.",
    "translation": "そのソフトは使う容易さのために人気がある。"
  },
  {
    "no": 1373,
    "word": "relieve",
    "meaning": "取り除く",
    "choices": [
      "和らげる",
      "取り除く",
      "軽くする",
      "なくす"
    ],
    "sentence": "This medicine can relieve a headache.",
    "translation": "この薬は頭痛を取り除くことができる。"
  },
  {
    "no": 1374,
    "word": "desperate",
    "meaning": "必死の",
    "choices": [
      "熱心な",
      "絶望的な",
      "必死の",
      "切実な"
    ],
    "sentence": "He made a desperate effort to catch the last bus.",
    "translation": "彼は終バスに乗るために必死の努力をした。"
  },
  {
    "no": 1375,
    "word": "incident",
    "meaning": "出来事",
    "choices": [
      "事故",
      "出来事",
      "体験",
      "事件"
    ],
    "sentence": "The teacher talked calmly about the incident.",
    "translation": "先生はその出来事について落ち着いて話した。"
  },
  {
    "no": 1376,
    "word": "accidentally",
    "meaning": "偶然に",
    "choices": [
      "不注意に",
      "偶然に",
      "突然",
      "たまたま"
    ],
    "sentence": "I accidentally deleted the file.",
    "translation": "私はそのファイルを偶然に削除してしまった。"
  },
  {
    "no": 1377,
    "word": "grind",
    "meaning": "挽く",
    "choices": [
      "混ぜる",
      "挽く",
      "削る",
      "砕く"
    ],
    "sentence": "We grind coffee beans every morning.",
    "translation": "私たちは毎朝コーヒー豆を挽く。"
  },
  {
    "no": 1378,
    "word": "combine",
    "meaning": "組み合わせる",
    "choices": [
      "組み合わせる",
      "結びつける",
      "まとめる",
      "混ぜる"
    ],
    "sentence": "You can combine study with short breaks.",
    "translation": "勉強と短い休憩を組み合わせることができる。"
  },
  {
    "no": 1379,
    "word": "minor",
    "meaning": "重要でない",
    "choices": [
      "重要でない",
      "軽い",
      "小さな",
      "副次的な"
    ],
    "sentence": "The mistake was minor and easy to fix.",
    "translation": "そのミスは重要でないので簡単に直せた。"
  },
  {
    "no": 1380,
    "word": "luxury",
    "meaning": "ぜいたく",
    "choices": [
      "快適さ",
      "余裕",
      "高級品",
      "ぜいたく"
    ],
    "sentence": "For us, eating out every week is a luxury.",
    "translation": "私たちにとって毎週外食するのはぜいたくだ。"
  },
  {
    "no": 1381,
    "word": "prosperity",
    "meaning": "繁栄",
    "choices": [
      "繁栄",
      "成長",
      "豊かさ",
      "成功"
    ],
    "sentence": "The town enjoyed years of prosperity.",
    "translation": "その町は何年もの繁栄を楽しんだ。"
  },
  {
    "no": 1382,
    "word": "mostly",
    "meaning": "主に",
    "choices": [
      "だいたい",
      "ほとんど",
      "主に",
      "一般に"
    ],
    "sentence": "The class is made up mostly of first-year students.",
    "translation": "そのクラスは主に1年生で構成されている。"
  },
  {
    "no": 1383,
    "word": "exceed",
    "meaning": "超える",
    "choices": [
      "上回る",
      "達する",
      "越す",
      "超える"
    ],
    "sentence": "The cost may exceed our budget.",
    "translation": "費用は予算を超えるかもしれない。"
  },
  {
    "no": 1384,
    "word": "inner",
    "meaning": "内部の",
    "choices": [
      "内側の",
      "内部の",
      "中心の",
      "精神の"
    ],
    "sentence": "The box has an inner pocket.",
    "translation": "その箱には内部のポケットがある。"
  },
  {
    "no": 1385,
    "word": "interior",
    "meaning": "内部の",
    "choices": [
      "室内の",
      "内部の",
      "国内の",
      "内側の"
    ],
    "sentence": "The interior walls were painted white.",
    "translation": "内部の壁は白く塗られていた。"
  },
  {
    "no": 1386,
    "word": "mainstream",
    "meaning": "主流",
    "choices": [
      "主流",
      "中心",
      "一般",
      "大勢"
    ],
    "sentence": "Online shopping has become part of the mainstream.",
    "translation": "オンライン買い物は主流の一部になった。"
  },
  {
    "no": 1387,
    "word": "extent",
    "meaning": "程度",
    "choices": [
      "度合い",
      "範囲",
      "程度",
      "規模"
    ],
    "sentence": "I did not realize the extent of the damage.",
    "translation": "私は被害の程度に気づいていなかった。"
  },
  {
    "no": 1388,
    "word": "reward",
    "meaning": "報酬",
    "choices": [
      "謝礼",
      "見返り",
      "賞金",
      "報酬"
    ],
    "sentence": "Hard work can bring its own reward.",
    "translation": "努力はそれ自体が報酬になることがある。"
  },
  {
    "no": 1389,
    "word": "revenue",
    "meaning": "収入",
    "choices": [
      "所得",
      "収入",
      "売上",
      "利益"
    ],
    "sentence": "Ticket sales are our main source of revenue.",
    "translation": "チケットの売り上げは私たちの主な収入源だ。"
  },
  {
    "no": 1390,
    "word": "surplus",
    "meaning": "余剰",
    "choices": [
      "余剰",
      "過剰",
      "残り",
      "黒字"
    ],
    "sentence": "The factory sold its surplus materials.",
    "translation": "その工場は余剰の材料を売った。"
  },
  {
    "no": 1391,
    "word": "deposit",
    "meaning": "預金",
    "choices": [
      "預金",
      "貯金",
      "手付金",
      "口座"
    ],
    "sentence": "She made a deposit at the bank this morning.",
    "translation": "彼女は今朝、銀行に預金をした。"
  },
  {
    "no": 1392,
    "word": "personnel",
    "meaning": "職員",
    "choices": [
      "職員",
      "事務員",
      "人員",
      "社員"
    ],
    "sentence": "The hospital needs more medical personnel.",
    "translation": "その病院はもっと多くの医療職員を必要としている。"
  },
  {
    "no": 1393,
    "word": "officer",
    "meaning": "公務員",
    "choices": [
      "警官",
      "役人",
      "公務員",
      "職員"
    ],
    "sentence": "A city officer answered our questions.",
    "translation": "市の公務員が私たちの質問に答えた。"
  },
  {
    "no": 1394,
    "word": "eager",
    "meaning": "熱心な",
    "choices": [
      "意欲的な",
      "熱心な",
      "積極的な",
      "前向きな"
    ],
    "sentence": "The students were eager to join the discussion.",
    "translation": "生徒たちはその議論に加わることに熱心だった。"
  },
  {
    "no": 1395,
    "word": "willing",
    "meaning": "する気がある",
    "choices": [
      "前向きな",
      "承知の",
      "する気がある",
      "乗り気な"
    ],
    "sentence": "She is willing to help us after school.",
    "translation": "彼女は放課後に私たちを手伝う気がある。"
  },
  {
    "no": 1396,
    "word": "reluctant",
    "meaning": "気が進まない",
    "choices": [
      "嫌がる",
      "消極的な",
      "慎重な",
      "気が進まない"
    ],
    "sentence": "He was reluctant to speak in front of everyone.",
    "translation": "彼はみんなの前で話すのに気が進まなかった。"
  },
  {
    "no": 1397,
    "word": "enthusiasm",
    "meaning": "熱中",
    "choices": [
      "熱意",
      "熱中",
      "興奮",
      "関心"
    ],
    "sentence": "Her enthusiasm for science impressed the class.",
    "translation": "科学への彼女の熱中はクラスに強い印象を与えた。"
  },
  {
    "no": 1398,
    "word": "passion",
    "meaning": "情熱",
    "choices": [
      "愛情",
      "熱意",
      "夢中",
      "情熱"
    ],
    "sentence": "His passion for music never faded.",
    "translation": "彼の音楽への情熱は決して薄れなかった。"
  },
  {
    "no": 1399,
    "word": "ambition",
    "meaning": "熱望",
    "choices": [
      "熱望",
      "目標",
      "野心",
      "希望"
    ],
    "sentence": "Her ambition is to become a doctor.",
    "translation": "彼女の熱望は医師になることだ。"
  },
  {
    "no": 1400,
    "word": "ongoing",
    "meaning": "進行中の",
    "choices": [
      "継続中の",
      "進行中の",
      "未完了の",
      "現在の"
    ],
    "sentence": "We are following the ongoing debate closely.",
    "translation": "私たちは進行中の議論を注意深く追っている。"
  }
];