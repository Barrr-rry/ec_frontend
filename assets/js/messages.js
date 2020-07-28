const messages = {
  en: {},
  tw: {}
}
const custom_message = {
  address_label: {
    en: 'Address',
    tw: '地址'
  },
  address_value: {
    en: '未翻譯',
    tw: '高雄市前金區中正路1號'
  },
  phone: {
    en: 'Phone',
    tw: '電話'
  },
  ordering_information: {
    en: '未翻譯',
    tw: '訂購資訊'
  },
  delivery_instructions: {
    en: '未翻譯',
    tw: '配送與退換貨政策'
  },
  instructions: {
    en: '未翻譯',
    tw: '配送說明'
  },
  delivery_instruction_1: {
    en: '未翻譯',
    tw: '出貨時間：在收到訂單並確認付款後，我們會於 3\n' +
      '            個工作天內出貨，如遇國定假日或週休二日則順延。'
  },
  delivery_instructions_2: {
    en: '未翻譯',
    tw: ' 免運標準：全館滿 3,000 元即可享免運費優惠（\n' +
      '            特別折扣活動以活動說明為主 ）。'
  },
  delivery_instructions_3: {
    en: '未翻譯',
    tw: '運費說明：訂單未滿免運金額時，消費者須自付運費。'
  },
  area: {
    en: '未翻譯',
    tw: '地區'
  },
  delivery_instructions_4: {
    en: '未翻譯',
    tw: '離島運費：收件地點為台灣離島地區（ 澎湖、金門、馬祖\n' +
      '            ），若選擇超商取貨付款或超商純取貨，訂單未滿免運金額時，消費者須自付運費\n' +
      '            65 元。若選擇貨運，不論運費多寡，消費者皆須自付離島運費。'
  },
  delivery_instructions_5: {
    en: '未翻譯',
    tw: '配送時程說明'
  },
  delivery_instructions_6: {
    en: '未翻譯',
    tw: '超商取貨 ： 在出貨後 2\n' +
      '            個工作天會抵達指定門市，請特別留意到貨簡訊通知（\n' +
      '            若無收到請向電信公司開通廣告簡訊通知 ）。'
  },
  delivery_instructions_7: {
    en: '未翻譯',
    tw: '宅配貨運 ： 在出貨後 1 ~ 2 個工作天送達（\n' +
      '            如遇國定假日或週休二日則順延\n' +
      '            ），請特別留意物流公司的手機通知，以免延誤收貨時間。'
  },
  delivery_instructions_8: {
    en: '未翻譯',
    tw: '運送方式及進度查詢'
  },
  delivery_instructions_9: {
    en: '未翻譯',
    tw: '超商取貨 ： 請至「 超商店到店查詢系統\n' +
      '            」查詢，請於出貨後七天內至指定超商門市取貨。'
  },
  delivery_instructions_10: {
    en: '未翻譯',
    tw: '黑貓宅配 ： 請至「 黑貓物流進度查詢系統 」查詢。'
  },
  delivery_instructions_11: {
    en: '未翻譯',
    tw: '宅配：請至「 宅配貨件追蹤查詢系統 」查詢。'
  },
  delivery_instructions_12: {
    en: '未翻譯',
    tw: '七天鑑賞期權利'
  },
  delivery_instructions_13: {
    en: '未翻譯',
    tw: ' 依據消費者保護法之規定，我們提供您享有商品到貨次日起算七天鑑賞期（\n' +
      '            鑑賞期非試用期\n' +
      '            ）之權益，鑑賞期間作為您評估是否購買該商品，並非提供您試用該商品，您可在鑑賞期間內要求退貨退款。'
  },
  delivery_instructions_14: {
    en: '未翻譯',
    tw: '退貨注意事項'
  },
  delivery_instructions_15: {
    en: '未翻譯',
    tw: '超過七日鑑賞期無法辦理退換貨。'
  },
  delivery_instructions_16: {
    en: '未翻譯',
    tw: '退貨須以整筆訂單申請處理，無法部分辦退。'
  },
  delivery_instructions_17: {
    en: '未翻譯',
    tw: '消耗性產品，一經拆封即無法回復商品衛生原狀，退回商品必須是全新狀態且保持包裝完整或是原廠商防拆封條完整未損毀，否則恕不接受退換貨。'
  },
  delivery_instructions_18: {
    en: '未翻譯',
    tw: '若商品因消費者個人不當使用拆卸，產生人為因素造成之故障、毀損、磨損、擦傷、刮傷、髒污、包裝破損不完整者，不接受退換貨。'
  },
  delivery_instructions_19: {
    en: '未翻譯',
    tw: '因消費者個人因素要求退貨者，需自行負擔產生的相關運費處理費用。'
  },
  delivery_instructions_20: {
    en: '未翻譯',
    tw: '由於產品為網路購物商品，皆以包裹包裝配送，若於運送過程中，產生外盒擠壓破損，而未影響內容物商品，恕不在退換貨標準範圍內。'
  },
  delivery_instructions_21: {
    en: '未翻譯',
    tw: '申請退貨時，請您依退貨退款指示包裝，並自行（ 自費\n' +
      '            ）寄回至指定收貨地址。'
  },
  delivery_instructions_22: {
    en: '未翻譯',
    tw: '符合下述條件其中一項，即可無條件退換貨：'
  },
  delivery_instructions_23: {
    en: '未翻譯',
    tw: '實際收到的商品與訂單成立之訂購商品不符合'
  },
  delivery_instructions_24: {
    en: '未翻譯',
    tw: '產品包裝內配件不齊全或商品規格與外包裝說明不符合。'
  },
  delivery_instructions_25: {
    en: '未翻譯',
    tw: ' 收到商品後如發現有瑕疵損壞或是訂購品項不符的狀況，需要辦理換貨，請盡快拍照通知我們。'
  },
  delivery_instructions_26: {
    en: '未翻譯',
    tw: '※瑕疵損壞定義：收到商品時外觀嚴重破損、收到商品時內容物外漏、收到商品時商品已超過有效期限。'
  },
  delivery_instructions_27: {
    en: '未翻譯',
    tw: '退換貨流程'
  },
  delivery_instructions_28: {
    en: '未翻譯',
    tw: '為簡化您取得適合商品的流程，我們沒有提供換貨服務，僅提供「 退貨處理\n' +
      '            」，取貨後如有不適合的商品，請於收到商品 7 天內，來信客服\n' +
      '            ezgo@gmail.com 辦理退貨申請。'
  },
  delivery_instructions_29: {
    en: '未翻譯',
    tw: '申請退貨時，我們會以 Email\n' +
      '            回覆通知，請您依退貨退款指示包裝，並自行（ 自費\n' +
      '            ）寄回至指定收貨地址。（\n' +
      '            請您妥善包裝，若寄回商品或包裝已損傷或缺漏，可能影響您退貨的權益 ）'
  },
  delivery_instructions_30: {
    en: '未翻譯',
    tw: '辦理退款'
  },
  delivery_instructions_31: {
    en: '未翻譯',
    tw: '選擇現金退回之方式，若退貨狀況成立，我們將於收到退回商品後於隔月五日前，扣除匯費以銀行匯款方式退還您的款項，款項匯入指定之帳戶。'
  },
  delivery_instructions_32: {
    en: '未翻譯',
    tw: '採 ATM 轉帳匯款者，請提供收款戶名、銀行名（ XX銀行XX分行\n' +
      '            ）、銀行帳號等資料，我們將於收到您的完整退款資料後，辦理退款至您的指定帳戶中。'
  },
  delivery_instructions_33: {
    en: '未翻譯',
    tw: '退貨金額以商品金額並扣除匯費（ 30 元\n' +
      '            ）後退還，已產生之運費不予以退費。'
  },
  delivery_instructions_34: {
    en: '未翻譯',
    tw: '若使用信用卡刷卡付款，必須待信用卡公司月底入帳後，才能將款項退回給您，此款項將直接退回您的信用卡帳戶。由於各家信用卡銀行作業程序不同，若您有其他疑問，建議可直接向您的信用卡公司洽詢，以得到較完整的解答。'
  },
  delivery_instructions_35: {
    en: '未翻譯',
    tw: '因個人因素要求退貨者，需自行負擔運費。'
  },
  for_business: {
    en: 'Business Cooperation',
    tw: '商業合作'
  },
  for_business_txt1_1: {
    en: 'We offer stylish, comfortable, and sexy underwear for men.',
    tw: '我們致力於提供時尚、舒適、性感的男性內著。'
  },
  for_business_txt1_2: {
    en: 'We are looking forward to cooperating with top business partners.',
    tw: '歡迎各類優質廠商合作，期待與您一起創造更多的火花。'
  },
  for_business_txt2: {
    en: 'Contact us via havefunwear@gmail.com and we will reply shortly',
    tw: '歡迎與我們聯絡。可先以電子郵件方式寄至 havefunwear@gmail.com，我們將盡速與您聯繫。'
  },
  delivery_rule_txt1: {
    en: '未翻譯',
    tw: "本商品褲頭有HaveFun Men's Underwear的專屬安全膠針。"
  },
  delivery_rule_txt2: {
    en: '未翻譯',
    tw: "因內褲屬於貼身衣物，基於衛生考量，如需退換貨請注意，所有退換貨的商品需於七天鑑賞期內寄回，七天鑑賞期非試用期，為確保您的權益，必須保留HaveFun Men's Underwear安全膠針無剪斷無毀損、不下水、不剪標、不試穿、無異味。"
  },
  delivery_rule_0: {
    en: '未翻譯',
    tw: '換貨：'
  },
  delivery_rule_0_1_0: {
    en: '未翻譯',
    tw: '如收到商品瑕疵或破損，請於取件隔日開始算七日鑑賞期內，提供訂單編號及瑕疵照片至Line私訊，客服會盡速為您處理。'
  },
  delivery_rule_0_2_0: {
    en: '未翻譯',
    tw: '尺寸不合，七日內可提供換貨一次，如購買3件商品，1件需換貨，僅需把該商品退回即可。'
  },
  delivery_rule_0_3_0: {
    en: '未翻譯',
    tw: '本公司會免費幫您寄送換貨商品過去，但您需先負責將商品寄回本公司且自行負擔寄回的運費。'
  },
  delivery_rule_1: {
    en: '未翻譯',
    tw: '寄錯商品：'
  },
  delivery_rule_1_1_0: {
    en: '未翻譯',
    tw: '如收到商品錯誤，請於取件隔日開始算七日鑑賞期內，提供訂單編號及商品照片至Line客服私訊，客服會盡速為您處理。'
  },
  delivery_rule_2: {
    en: '未翻譯',
    tw: '退貨：'
  },
  delivery_rule_2_1_0: {
    en: '未翻譯',
    tw: '請於取件隔日開始算七日鑑賞期內，提供訂單編號至Line客服私訊聯繫，可加速後續的手續。'
  },
  delivery_rule_2_2_0: {
    en: '未翻譯',
    tw: '退回商品需包裝完整。'
  },
  company_terms: {
    en: 'TERMS & CONDITIONS',
    tw: '會員權益及隱私權條款'
  },
  company_terms_txt_1: {
    en: "If you have any questions about the Private Statement of HaveFun Men's Underwear website, the following notices, or personal data protection, please contact HaveFun men's underwear Customer Service Center. We will respond and elaborate as soon as possible.",
    tw: "在您開始使用 HaveFun Men's Underwear 所經營之網站之前，請詳細閱讀以下所有服務條款："
  },
  company_terms_txt_2: {
    en: '',
    tw: "您接受並且遵守本網站所列之所有服務條款。以下條款適用於所有網站訪問者、使用者以及任何個人單位使用該網站的所有服務。"
  },
  company_terms_txt_3: {
    en: '',
    tw: "一經使用該網站之任一服務，即您同意所列之所有服務條款。若您不同意所列之服務條款，則請您立即離開此網站或者不使用任何網站之任何服務提供。"
  },

  company_terms_1_title: {
    en: 'How We Use Your Personal Data',
    tw: "使用者隱私權保護聲明"
  },
  company_terms_1_1: {
    en: "Personal data refers to undisclosed information relating to your identification, such as name, telephone number, address or email contact, including your past data of using HaveFun Men's Underwear products and services.",
    tw: "本網站 HaveFun Men's Underwear 針對消費者與個人資料之蒐集和運用，依中華民國「電腦處理個人資料保護法」及本隱私權保護聲明，HaveFun Men's Underwear 已加強相關之保護措施，但也鄭重提醒您：請勿在網路上公開透露您個人資料，因該資料有可能會被他人蒐集和使用，特別是在網路上公開的發言場合，如聊天室、留言版，更應避免發表個人身份、密碼或電子郵件等相關個人資料。"
  },
  company_terms_1_2: {
    en: "When you register a HaveFun Men's Underwear account, use HaveFun Men's Underwear product, browse website of HaveFun Men's Underwear or our business partners, and attend promotion or rewarding events, HaveFun men's underwear collects your personal data. Also, HaveFun men's underwear may combine your information providing by other corporations with your personal data obtained by HaveFun men's underwear.",
    tw: ""
  },
  company_terms_1_3: {
    en: "When you sign up for HaveFun Men's Underwear, you are asked for information such as name, email address, birth date, gender, etc. When you purchase our products, you may need to submit further details including address or financial information. You are free to choose to provide your personal data to us or not. But if certain data fields are required fields, you can not use related HaveFun men's underwear products and services without providing the data.",
    tw: ""
  },
  company_terms_1_4: {
    en: "HaveFun Men's Underwear also collects the data of your transactions, including related information of our services which you use, and automatically receives and records the data of your computer and browser, inclusive of IP address, software and hardware specification, and your browsing history.",
    tw: ""
  },

  company_terms_2_title: {
    en: "Probable Purposes for Using Your Data Globally, During the Period When You Use HaveFun Men's Underwear Products and Services",
    tw: "個人資料蒐集及使用"
  },
  company_terms_2_1: {
    en: 'Customizing ads and web contents that you see, to fulfill your request for products and services. Also improving our services, contacting you, conducting researches, and providing marketing analyses or business reports without personal data for internal and external customers.',
    tw: "當您瀏覽 HaveFun Men's Underwear 相關網站時，不會主動要求輸入個人資料。"
  },
  company_terms_2_2: {
    en: "HaveFun Men's Underwear website may include some links or services of other social networking websites. Please check the linked websites, websites of business partners, and individually operating web stores for the privacy statement and personal data related disclosure details of their own.",
    tw: "當使用者需要完成購物流程、訂閱電子報、或參加其他活動時，HaveFun Men's Underwear 會要求使用者登錄個人資料，以便完成交易與相關會員服務。"
  },
  company_terms_2_3: {
    en: '',
    tw: "HaveFun Men's Underwear 及其相關網站所取得的個人資料，都僅供 HaveFun Men's Underwear 內部依照原說明的使用目的和範圍。"
  },
  company_terms_2_4: {
    en: '',
    tw: "除非事先說明或依照台灣相關法律規定外，HaveFun Men's Underwear 不會擅自將使用者的個人資料提供給第三者或作為其他目的之用。"
  },
  company_terms_2_5: {
    en: '',
    tw: "HaveFun Men's Underwear 會自動記錄使用者在網站內的瀏覽活動等相關資料，但這些資料僅供作為流量分析和網路行為調查，以便於改善網站的服務品質。"
  },

  company_terms_3_title: {
    en: "Specific Purposes for Collecting, Processing and Using Personal Data By HaveFun Men's Underwear",
    tw: "使用者資料"
  },
  company_terms_3_1: {
    en: 'Marketing, consumer and customer management and services, information and communication services, internet shopping or other electronic commerce services, advertising and business activity management, and other contractual, quasi-contractual or legal relationship managing businesses or affairs.',
    tw: "註冊過程中您可以為自己設定一組電子郵件及密碼，經由該帳號，您可依照網站說明使用相關會員服務。"
  },
  company_terms_3_2: {
    en: '',
    tw: "請妥善保管您的會員帳號及密碼，不要將上述資料提供給任何人。"
  },
  company_terms_3_3: {
    en: '',
    tw: "如果您與他人共用一台電腦或使用公共電腦，請記得關閉您的瀏覽器並清除瀏覽紀錄，以防止他人看到上述資料或取得進入您帳號的方法。"
  },
  company_terms_4_title: {
    en: 'Data Sharing and Revealing',
    tw: "會員及隱私權保護政策之修訂"
  },
  company_terms_4_1: {
    en: "Unless providing the products or services for your request and obtaining your authorization beforehand, HaveFun Men's Underwear do not share your personal data to unrelated individuals or corporates. You can check and modify the personal data in your HaveFun Men's Underwear account anytime, including marketing preferences, etc.",
    tw: "HaveFun Men's Underwear 保留更改本聲明各項內容之權利，我們將於網站同一位置公告更改之聲明外，不另外對會員進行個別通知。"
  },
  company_terms_4_2: {
    en: "HaveFun Men's Underwear may add new categories of marketing information on the marketing preferences page from time to time. We reserve the right to send you particular messages related to HaveFun Men's Underwear services, such as service or administration announcements. These messages are considered as part of your HaveFun men's underwear account. You can not choose to reject receiving them.",
    tw: "若您對本隱私權保護政策有任何問題，請直接與本公司聯繫。"
  },

  company_terms_5_title: {
    en: 'Alteration of Privacy Protection Policy',
    tw: "終止服務"
  },
  company_terms_5_1: {
    en: "HaveFun Men's Underwear has the right to alter this privacy statement and related disclosure details whenever necessary, and to publish it on HaveFun Men's Underwear website after alteration without further individual notice. You may read the altered privacy statement and related disclosure details on this website at any time.",
    tw: "在不需要任何事前通知以下，我們有可能隨時終止您使用我們網站服務的權限；以上終止服務決定並不需要任何理由即可即時生效，包括但不限於您違反本服務條款。"
  },
  company_terms_5_2: {
    en: '',
    tw: "終止服務適用於所有條款的規定，包括但不限於所有權規定、擔保聲明、賠款以及有限責任。"
  },
  company_terms_5_3: {
    en: '',
    tw: "在不需要任何事前通知以下，我們有可能隨時終止您所持有的登入帳號；以上終止服務決定並不需要任何理由即可即時生效，包括但不限於您違反本服務條款。一旦確定終止，您將會立即無法繼續使用所有服務。"
  },
  company_terms_5_4: {
    en: '',
    tw: "若您希望終止您的帳號，您可以隨時終止服務。終止服務適用於所有條款的規定，包括但不限於所有權規定、擔保聲明、賠款以及有限責任。"
  },

  product_terms_1: {
    en: 'Order procedure: ',
    tw: "訂購流程"
  },
  product_terms_1_1: {
    en: 'Sign in or create an account. Become a member and join our membership reward system as a new user by using your email address and password.',
    tw: "請先登入會員。如無會員，只需在註冊處輸入您的e-mail和密碼，即可輕鬆成為會員並享有回饋金會員帳戶！"
  },
  product_terms_1_2: {
    en: 'Add items to the shopping cart.',
    tw: "確認購物車內容，如有折扣代碼歡迎使用，試算總金額後，請點選付款。"
  },
  product_terms_1_3: {
    en: 'Confirm order and enter promotion code if available. Confirm total amount and proceed to pay.',
    tw: "請填寫完整收件資訊。"
  },
  product_terms_1_4: {
    en: 'Fill in complete information on the invoice form.',
    tw: "點選下單，完成訂單。下單完成後可進入會員中心查詢。"
  },
  product_terms_1_5: {
    en: 'Click ‘Check out’ button to complete the order. Members can view purchase records from their account after completion of the order.',
    tw: ""
  },

  product_terms_2: {
    en: 'Payment method: ',
    tw: "付款說明"
  },
  product_terms_2_1: {
    en: 'Please note that online credit card transactions are possible!',
    tw: "信用卡即時線上一次刷卡付款 ( 方便又好用的付款方式，當您選擇線上刷卡方式進行交易時，作業流程透過SSL 加密機制，保障您的個人隱私資料 )"
  },
  product_terms_2_2: {
    en: 'Customers in Taiwan are offered to pay cash on delivery or by credit card.',
    tw: "超商付款取貨-僅供配送地在台灣（台、澎、金、馬地區）( 適合不方便在家收貨或無信用卡的客戶 )"
  },
  product_terms_2_3: {
    en: 'For international customers, please choose credit card as your payment method.',
    tw: "海外地區一律使用信用卡先付款"
  },
  product_terms_2_4: {
    en: 'Online credit card transactions are convenient and practical. Its operation process applies SSL to secure privacy of personal data',
    tw: ""
  },

  product_terms_3: {
    en: 'Shipping method:',
    tw: "運送方式"
  },
  product_terms_3_1: {
    en: 'Free shipping for international orders over NT$ 1800. In this case please select ',
    tw: "超商取貨 出貨後約2-3天會到超商 (假日可領貨)。"
  },
  product_terms_3_2: {
    en: 'International Standard.',
    tw: "宅配取貨 每週一至週五固定出貨，出貨後約2天會到 (假日不送貨)。"
  },
  product_terms_3_3: {
    en: '',
    tw: "全站消費金額滿NT$800元免運。限定台灣（台、澎、金、馬地區）"
  },
  product_terms_3_4: {
    en: '',
    tw: "選取超商取貨，貨品寄出後不論任何原因超過7天未領取，導至被退回原商家，將可能會被設定為黑名單日後不得購買，特殊原因請洽詢本公司Line客服。"
  },
  product_terms_3_5: {
    en: '',
    tw: "選取超商取貨，為保障雙方權益 請務必填寫「與證件相符之真實姓名」；若因取件者未出示證件或拒絕簽名造成超商無法提供取件服務，導至被退回原商家。並酌收70元再次超商配送之物流處理費用。"
  },
  product_terms_3_6: {
    en: '',
    tw: "如本店無法接受您的訂單，將於收到您的訂單後二個工作日內通知您。但法令另有規定者除外。"
  },



  common_problem: {
    en: '未翻譯',
    tw: '常見問題'
  },
  common_problem_0: {
    en: '未翻譯',
    tw: '產品來源是哪裡？。'
  },
  common_problem_1: {
    en: '未翻譯',
    tw: '我們商品一律來自美國公司。'
  },
  common_problem_2: {
    en: '未翻譯',
    tw: '我可以收到產品的保存期限是最新嗎？'
  },
  common_problem_3: {
    en: '未翻譯',
    tw: '請放心，我們的商品都是最新的保存期限，也可以下單前先做詢問喔！'
  },
  common_problem_4: {
    en: '未翻譯',
    tw: '商品圖片與內容是否與實品一模一樣？'
  },
  common_problem_5: {
    en: '未翻譯',
    tw: '是的！'
  },
  common_problem_6: {
    en: '未翻譯',
    tw: '商品缺貨了，什麼時候才會再進貨呢？'
  },
  common_problem_7: {
    en: '未翻譯',
    tw: '如果是預購商品需要 7 - 14 個工作天才會陸續抵台喔！'
  },
  common_problem_8: {
    en: '未翻譯',
    tw: '要多久才能收貨？'
  },
  common_problem_9: {
    en: '未翻譯',
    tw: '現貨部分我們 1 - 2 天內會出貨，到你手上大約需要 2 - 4\n' +
      '              天的時間喔！如果急需，請備註告訴我們，我們會以最快速度幫你處理。'
  },
  common_problem_10: {
    en: '未翻譯',
    tw: '收到貨品後發現有破損，該如何處理？'
  },
  common_problem_11: {
    en: '未翻譯',
    tw: '請儘速與我們聯繫，我們盡快幫你處理退換相關問題。'
  },
  common_problem_12: {
    en: '未翻譯',
    tw: '可以取消訂單嗎？'
  },
  common_problem_13: {
    en: '未翻譯',
    tw: '訂單如果已出貨是無法做取消的喔!'
  },
  common_problem_14: {
    en: '未翻譯',
    tw: '訂購的商品出現缺貨時？'
  },
  common_problem_15: {
    en: '未翻譯',
    tw: '請聯繫我們做確認是否完全無庫存或需等待時間。'
  },
  common_problem_16: {
    en: '未翻譯',
    tw: '請問我可以代購其他你們網頁上以外的商品嗎？'
  },
  common_problem_17: {
    en: '未翻譯',
    tw: '可以，只要是美國的合法網站，我們都可以幫忙代購的。'
  },
  common_problem_18: {
    en: '未翻譯',
    tw: '請問我怎麼看商品的保存期限？'
  },
  common_problem_19: {
    en: '未翻譯',
    tw: ' 大部分的保存期限都是在商品型錄旁邊（ 如數字是 11/25 指的是 11 月\n' +
      '              2025 年）。'
  },
  canncel_order: {
    en: '未翻譯',
    tw: '取消訂單'
  },
  member_center: {
    en: '未翻譯',
    tw: '會員中心'
  },
  back_member_center: {
    en: '未翻譯',
    tw: '返回會員中心'
  },
  my_account: {
    en: 'My Account',
    tw: '我的帳戶'
  },
  order_record: {
    en: '未翻譯',
    tw: '訂單查詢'
  },
  my_favourite: {
    en: '未翻譯',
    tw: '我的最愛'
  },
  common_address: {
    en: '未翻譯',
    tw: '常用地址'
  },
  other_information: {
    en: '未翻譯',
    tw: '其他資訊'
  },
  privacy_statement: {
    en: '未翻譯',
    tw: '隱私權聲明'
  },
  privacy_statement_1: {
    en: '未翻譯',
    tw: '非常歡迎您光臨「 HaveFun Men’s Underwear（ 以下簡稱本網站\n' +
      '          ），為了讓您能夠安心使用本網站的各項服務與資訊，特此向您說明本網站的隱私權保護政策，以保障您的權益，請您詳閱下列內容：'
  },
  privacy_statement_2: {
    en: '未翻譯',
    tw: '一、隱私權保護政策的適用範圍'
  },
  privacy_statement_3: {
    en: '未翻譯',
    tw: '隱私權保護政策內容，包括本網站如何處理在您使用網站服務時收集到的個人識別資料。隱私權保護政策不適用於本網站以外的相關連結網站，也不適用於非本網站所委託或參與管理的人員。'
  },
  privacy_statement_4: {
    en: '未翻譯',
    tw: '二、個人資料的蒐集、處理及利用方式'
  },
  privacy_statement_6: {
    en: '未翻譯',
    tw: '當您造訪本網站或使用本網站所提供之功能服務時，我們將視該服務功能性質，請您提供必要的個人資料，並在該特定目的範圍內處理及利用您的個人資料；非經您書面同意，本網站不會將個人資料用於其他用途。'
  },
  privacy_statement_7: {
    en: '未翻譯',
    tw: '本網站在您使用服務信箱、問卷調查等互動性功能時，會保留您所提供的姓名、電子郵件地址、聯絡方式及使用時間等。'
  },
  privacy_statement_8: {
    en: '未翻譯',
    tw: '於一般瀏覽時，伺服器會自行記錄相關行徑，包括您使用連線設備的IP位址、使用時間、使用的瀏覽器、瀏覽及點選資料記錄等，做為我們增進網站服務的參考依據，此記錄為內部應用，決不對外公佈。'
  },
  privacy_statement_9: {
    en: '未翻譯',
    tw: '為提供精確的服務，我們會將收集的問卷調查內容進行統計與分析，分析結果之統計數據或說明文字呈現，除供內部研究外，我們會視需要公佈統計數據及說明文字，但不涉及特定個人之資料。'
  },
  privacy_statement_10: {
    en: '未翻譯',
    tw: '三、資料之保護'
  },
  privacy_statement_11: {
    en: '未翻譯',
    tw: '本網站主機均設有防火牆、防毒系統等相關的各項資訊安全設備及必要的安全防護措施，加以保護網站及您的個人資料採用嚴格的保護措施，只由經過授權的人員才能接觸您的個人資料，相關處理人員皆簽有保密合約，如有違反保密義務者，將會受到相關的法律處分。'
  },
  privacy_statement_12: {
    en: '未翻譯',
    tw: '如因業務需要有必要委託其他單位提供服務時，本網站亦會嚴格要求其遵守保密義務，並且採取必要檢查程序以確定其將確實遵守。'
  },
  privacy_statement_13: {
    en: '未翻譯',
    tw: '四、網站對外的相關連結'
  },
  privacy_statement_14: {
    en: '未翻譯',
    tw: '本網站的網頁提供其他網站的網路連結，您也可經由本網站所提供的連結，點選進入其他網站。但該連結網站不適用本網站的隱私權保護政策，您必須參考該連結網站中的隱私權保護政策。'
  },
  privacy_statement_15: {
    en: '未翻譯',
    tw: '五、與第三人共用個人資料之政策'
  },
  privacy_statement_16: {
    en: '未翻譯',
    tw: '本網站絕不會提供、交換、出租或出售任何您的個人資料給其他個人、團體、私人企業或公務機關，但有法律依據或合約義務者，不在此限。'
  },
  privacy_statement_17: {
    en: '未翻譯',
    tw: '前項但書之情形包括不限於 ：'
  },
  privacy_statement_18: {
    en: '未翻譯',
    tw: '經由您書面同意。'
  },
  privacy_statement_19: {
    en: '未翻譯',
    tw: '法律明文規定。'
  },
  privacy_statement_20: {
    en: '未翻譯',
    tw: '為免除您生命、身體、自由或財產上之危險。'
  },
  privacy_statement_21: {
    en: '未翻譯',
    tw: '與公務機關或學術研究機構合作，基於公共利益為統計或學術研究而有必要，且資料經過提供者處理或蒐集著依其揭露方式無從識別特定之當事人。'
  },
  privacy_statement_22: {
    en: '未翻譯',
    tw: '當您在網站的行為，違反服務條款或可能損害或妨礙網站與其他使用者權益或導致任何人遭受損害時，經網站管理單位研析揭露您的個人資料是為了辨識、聯絡或採取法律行動所必要者。'
  },
  privacy_statement_23: {
    en: '未翻譯',
    tw: '有利於您的權益。'
  },
  privacy_statement_24: {
    en: '未翻譯',
    tw: '本網站委託廠商協助蒐集、處理或利用您的個人資料時，將對委外廠商或個人善盡監督管理之責。'
  },
  privacy_statement_25: {
    en: '未翻譯',
    tw: '六、Cookie之使用'
  },
  privacy_statement_26: {
    en: '未翻譯',
    tw: '為了提供您最佳的服務，本網站會在您的電腦中放置並取用我們的 Cookie\n' +
      '            ，若您不願接受 Cookie\n' +
      '            的寫入，您可在您使用的瀏覽器功能項中設定隱私權等級為高，即可拒絕\n' +
      '            Cookie 的寫入，但可能會導至網站某些功能無法正常執行 。'
  },
  privacy_statement_27: {
    en: '未翻譯',
    tw: '七、隱私權保護政策之修正。'
  },
  privacy_statement_28: {
    en: '未翻譯',
    tw: '本網站隱私權保護政策將因應需求隨時進行修正，修正後的條款將刊登於網站上。'
  },
  company_name: {
    en: '',
    tw: 'HaveFun Men’s Underwear'
  },
  footer_author: {
    en: 'Copyright © 2019 HaveFun Men’s Underwear - All Rights Reserved. Power By CONQUER',
    tw: 'Copyright © 2019 HaveFun Men’s Underwear - All Rights Reserved. Power By CONQUER'
  },
  ntdoller: {
    en: '未翻譯',
    tw: '新台幣 NTD'
  },
  usdoller: {
    en: '未翻譯',
    tw: '美金 USD'
  },
  about_us: {
    en: 'About Us',
    tw: '關於我們'
  },
  all_products: {
    en: '未翻譯',
    tw: '所有商品'
  },
  brand_category: {
    en: '未翻譯',
    tw: '品牌分類'
  },
  efficacy_classification: {
    en: '未翻譯',
    tw: '功效分類'
  },
  component_classification: {
    en: '未翻譯',
    tw: '成分分類'
  },
  user_classification: {
    en: '未翻譯',
    tw: '使用者分類'
  },
  chose_buy: {
    en: '未翻譯',
    tw: '快速選購'
  },
  special_offer: {
    en: '未翻譯',
    tw: '特惠商品'
  },
  best_sale_goods: {
    en: '未翻譯',
    tw: '暢銷商品'
  },
  new_listing: {
    en: '未翻譯',
    tw: '新品上市'
  },
  constantly_praised: {
    en: '未翻譯',
    tw: '好評不斷'
  },
  please_input_brand_or_prodcut_name: {
    en: '未翻譯',
    tw: '請輸入品牌或是商品名稱'
  },
  search: {
    en: 'Search',
    tw: '搜尋'
  },
  pd_name_fake: {
    en: '未翻譯',
    tw: '健康蔬果營養片'
  },
  bottle: {
    en: '未翻譯',
    tw: '瓶'
  },
  shop_now: {
    en: '未翻譯',
    tw: '立即選購'
  },
  free_shipping: {
    en: 'Free shipping',
    tw: '運費'
  },
  size_chart: {
    en: '未翻譯',
    tw: '尺寸表'
  },
  size: {
    en: '未翻譯',
    tw: '尺寸'
  },
  coupon: {
    en: 'coupon',
    tw: '優惠券'
  },
  coupon_code: {
    en: 'coupon',
    tw: '優惠券碼'
  },
  use_coupon_code: {
    en: 'coupon',
    tw: '使用優惠券代碼'
  },
  loyalty_reward: {
    en: 'Reward point system',
    tw: '回饋金點數制度'
  },
  loyalty_reward_m: {
    en: 'Loyalty reward',
    tw: '忠誠獎勵'
  },
  loyalty_reward_1_1: {
    en: 'Earn ',
    tw: '於本網站每消費 100 元（台幣）可獲得'
  },
  loyalty_reward_1_2: {
    en: ' reward point for every NT$100 spent via our website.',
    tw: '點回饋金點數。'
  },
  loyalty_reward_2_1: {
    en: 'Reward points earned will be credited to your account ',
    tw: '回饋金點數將於消費 '
  },
  loyalty_reward_2_2: {
    en: ' days after completion of the purchase, i.e. without cancellation or refund request.',
    tw: ' 日後，訂單成功交易完成且無退款或取消始撥入回饋金帳戶。'
  },
  loyalty_reward_3: {
    en: 'Each reward point is equivalent to NT$ 1.',
    tw: '回饋金 1 點可折抵消費 NT$1元'
  },
  loyalty_reward_4_1: {
    en: 'Reward points are valid for one ',
    tw: '回饋金點數有效期限為 '
  },
  loyalty_reward_4_2: {
    en: ' day. Its validity will be automatically extended for ',
    tw: ' 天，如期間有消費可自動延長使用期限 '
  },
  loyalty_reward_4_3: {
    en: ' day with your next purchase within that timeline.',
    tw: ' 天並且累積回饋金。'
  },
  loyalty_reward_5: {
    en: "Point validity can also be extended by earning reward points through participation in activities organized by HaveFun Men's Underwear.",
    tw: '參與活動獲得回饋金點數也可延長回饋金使用期限。'
  },
  loyalty_reward_6: {
    en: 'Reward points can only be used for purchases via our website. They are invalidated and reset to zero after expiration of the timeline. They can be neither converted into cash nor reclaimed.',
    tw: '回饋金點數僅能使用於消費折抵，不得變換為現金，如超過期限未使用即歸零，不得返還。'
  },
  loyalty_reward_7: {
    en: "HaveFun Men's Underwear reserves the right to clarify, modify or terminate the reward point system as well as the right to renew memberships and to modify members’ rights and interests. Any change in this regard will be announced on our website without further notice.",
    tw: "HaveFun Men's Underwear 保留回饋金活動解釋、修改、調整、終止，以及會員資格續存、會員權益調整之權利，如有調整以 HaveFun Men's Underwear 官方網站公告為主，不再另行通知。"
  },
  loyalty_reward_btn1: {
    en: '未翻譯',
    tw: '立即註冊會員'
  },
  loyalty_reward_btn2: {
    en: '未翻譯',
    tw: '查看我的忠誠獎勵'
  },
  shi: {
    en: '未翻譯',
    tw: '單筆金額滿 3000 宅配免運'
  },
  free_shipping_fake_value: {
    en: '未翻譯',
    tw: '滿額享免運費'
  },
  coupon_fake_value: {
    en: '未翻譯',
    tw: '最強優惠看這裡'
  },
  loyalty_reward_fake_value: {
    en: '未翻譯',
    tw: '筆筆消費皆有回饋！'
  },
  sale_goods: {
    en: '未翻譯',
    tw: '特賣商品'
  },
  female_everyday: {
    en: '未翻譯',
    tw: '女性日常'
  },
  fake_product_name: {
    en: '未翻譯',
    tw: '金標優質高蛋白'
  },
  language: {
    en: 'English',
    tw: '繁體中文'
  },
  all: {
    en: '未翻譯',
    tw: '全部'
  },
  login: {
    en: 'Login',
    tw: '登入'
  },
  currency: {
    en: '未翻譯',
    tw: '貨幣'
  },
  product_ordering_instructions: {
    en: '未翻譯',
    tw: '商品訂購說明'
  },
  product_list: {
    en: '未翻譯',
    tw: '商品一覽'
  },
  logout: {
    en: 'Logout',
    tw: '登出'
  },
  price_filter: {
    en: '未翻譯',
    tw: '價格篩選'
  },
  price_filter_bottom: {
    en: '未翻譯',
    tw: '價格區間'
  },
  filter: {
    en: '未翻譯',
    tw: '篩選'
  },
  filter_set: {
    en: '未翻譯',
    tw: '篩選設定'
  },
  specification: {
    en: '未翻譯',
    tw: '規格'
  },
  count: {
    en: '未翻譯',
    tw: '數量'
  },
  have_products: {
    en: '未翻譯',
    tw: '有庫存'
  },
  kg: {
    en: 'kg',
    tw: '公斤'
  },
  add_cart: {
    en: 'add cart',
    tw: '加入購物車'
  },
  add_favourite: {
    en: '未翻譯',
    tw: '加入我的最愛'
  },
  shere_products: {
    en: '未翻譯',
    tw: '分享此商品'
  },
  products_description: {
    en: '未翻譯',
    tw: '商品說明'
  },
  products_detail: {
    en: '未翻譯',
    tw: '詳細資訊'
  },
  products_specifition: {
    en: '未翻譯',
    tw: '產品規格'
  },
  maker: {
    en: '未翻譯',
    tw: '製造廠商'
  },
  make_from: {
    en: '未翻譯',
    tw: '製造產地'
  },
  expiration_date: {
    en: 'Expiration Date',
    tw: '保存期限'
  },
  capacity: {
    en: '未翻譯',
    tw: '產品容量'
  },
  weight: {
    en: '未翻譯',
    tw: '重量'
  },
  products_weight: {
    en: '未翻譯',
    tw: '產品重量'
  },
  products_volume: {
    en: '未翻譯',
    tw: '產品體積'
  },
  account_detail: {
    en: '未翻譯',
    tw: '我的帳戶'
  },
  reward_now: {
    en: '未翻譯',
    tw: '目前獎勵金'
  },
  next_discount: {
    en: '未翻譯',
    tw: '於下次消費可折抵'
  },
  doller: {
    en: '未翻譯',
    tw: '元'
  },
  reward_description: {
    en: '未翻譯',
    tw: '回饋點數說明'
  },
  member_name: {
    en: '未翻譯',
    tw: '會員姓名'
  },
  email: {
    en: '未翻譯',
    tw: '電子郵件'
  },
  cellphone: {
    en: '未翻譯',
    tw: '手機'
  },
  cell＿phone: {
    en: '未翻譯',
    tw: '手 機'
  },
  password: {
    en: '未翻譯',
    tw: '密碼'
  },
  shipping_name: {
    en: '未翻譯',
    tw: '收貨人姓名'
  },
  shipping_phone: {
    en: '未翻譯',
    tw: '手機號碼'
  },
  shipping_phonee: {
    en: '未翻譯',
    tw: '收貨人電話'
  },
  shipping_phone_2: {
    en: '未翻譯',
    tw: '手機號碼'
  },
  shipping_address: {
    en: '未翻譯',
    tw: '收貨地址'
  },
  default_memberaddress: {
    en: '未翻譯',
    tw: '當前預設地址'
  },
  set_default_memberaddress: {
    en: '未翻譯',
    tw: '設定為預設地址'
  },
  add_memberaddress: {
    en: '未翻譯',
    tw: '新增一個常用地址'
  },
  member_function: {
    en: '未翻譯',
    tw: '會員功能'
  },
  no_wishlist: {
    en: '未翻譯',
    tw: '沒有收藏資訊'
  },
  product_iamge: {
    en: '未翻譯',
    tw: '產品照片'
  },
  name_specification: {
    en: '未翻譯',
    tw: '品名'
  },
  price: {
    en: '未翻譯',
    tw: '單價'
  },
  wish_date: {
    en: '未翻譯',
    tw: '收藏時間'
  },
  function: {
    en: '未翻譯',
    tw: '功能操作'
  },
  order_number: {
    en: '未翻譯',
    tw: '訂單編號'
  },
  pay_success: {
    en: '未翻譯',
    tw: '訂單已付款'
  },
  pay_fail: {
    en: '未翻譯',
    tw: '付款失敗'
  },
  order_date: {
    en: '未翻譯',
    tw: '訂單日期'
  },
  order_method: {
    en: '未翻譯',
    tw: '寄送方式'
  },
  order_total: {
    en: '未翻譯',
    tw: '商品總金額'
  },
  shipping: {
    en: '未翻譯',
    tw: '運費'
  },
  coupon_used: {
    en: '未翻譯',
    tw: '優惠券折抵'
  },
  reward_back: {
    en: '未翻譯',
    tw: '忠誠獎勵回饋'
  },
  pay_method: {
    en: '未翻譯',
    tw: '付款方式'
  },
  total: {
    en: '未翻譯',
    tw: '總計'
  },
  set_password_title: {
    en: '未翻譯',
    tw: '重新設定密碼'
  },
  pay_again: {
    en: '未翻譯',
    tw: '重新付款'
  },
  cart: {
    en: '未翻譯',
    tw: '購 物 車'
  },
  cartt: {
    en: '未翻譯',
    tw: '購物車'
  },
  write_data: {
    en: '未翻譯',
    tw: '填 寫 資 料'
  },
  order_final: {
    en: '未翻譯',
    tw: '訂 單 結 果'
  },
  little_total: {
    en: '未翻譯',
    tw: '小計'
  },
  used: {
    en: '未翻譯',
    tw: '使 用'
  },
  price_detail: {
    en: '未翻譯',
    tw: '金額明細'
  },
  total_weight: {
    en: '未翻譯',
    tw: '總重量'
  },
  used_coupon: {
    en: '未翻譯',
    tw: '本次使用回饋點數'
  },
  no_coupon: {
    en: '未翻譯',
    tw: '查無此張優惠券'
  },
  cant_use_coupon: {
    en: '未翻譯',
    tw: '您尚未達到此張優惠券門檻'
  },
  coupon_over_date: {
    en: '未翻譯',
    tw: '此張優惠券已過期'
  },
  coupon_member_over: {
    en: '未翻譯',
    tw: '此張優惠券使用次數已達上限'
  },
  coupon_all_over: {
    en: '未翻譯',
    tw: '此張優惠券名額已滿'
  },
  used_reward: {
    en: '未翻譯',
    tw: '忠誠獎勵折抵'
  },
  next_write: {
    en: '未翻譯',
    tw: '下一步 : 填寫資料'
  },
  write: {
    en: '未翻譯',
    tw: '填寫資料'
  },
  ordre_get: {
    en: '未翻譯',
    tw: '本訂單將獲得'
  },
  pay_get: {
    en: '未翻譯',
    tw: '本次消費可累積'
  },
  point_reward: {
    en: '未翻譯',
    tw: '點回饋點數'
  },
  reward: {
    en: '未翻譯',
    tw: '回饋點數'
  },
  cart_no_product: {
    en: '未翻譯',
    tw: '購物車內沒有商品'
  },
  order_no_product: {
    en: '未翻譯',
    tw: '查無訂單'
  },
  pay_online: {
    en: '未翻譯',
    tw: '線上付款'
  },
  pay_later: {
    en: '未翻譯',
    tw: '貨到付款'
  },
  to_home: {
    en: '未翻譯',
    tw: '郵寄'
  },
  to_store: {
    en: '未翻譯',
    tw: '宅配'
  },
  fami: {
    en: '未翻譯',
    tw: '全家'
  },
  hili: {
    en: '未翻譯',
    tw: '萊爾富'
  },
  save_address: {
    en: '未翻譯',
    tw: '儲存至常用地址'
  },
  choose_store: {
    en: '未翻譯',
    tw: '選擇超商'
  },
  rechoose_store: {
    en: '未翻譯',
    tw: '重新選擇超商'
  },
  order_detail: {
    en: '未翻譯',
    tw: '訂單資訊'
  },
  next: {
    en: '未翻譯',
    tw: '下一步'
  },
  order_complete: {
    en: '未翻譯',
    tw: '恭喜您已經完成訂單！'
  },
  order_fail: {
    en: '未翻譯',
    tw: '訂單失敗！'
  },
  order_fail_repay: {
    en: '未翻譯',
    tw: '付款失敗！請重新付款！'
  },
  coupon_over: {
    en: '未翻譯',
    tw: '優惠已經結束'
  },
  over: {
    en: '未翻譯',
    tw: '滿'
  },
  doller_disc: {
    en: '未翻譯',
    tw: '元 現折'
  },
  copy: {
    en: '未翻譯',
    tw: '複製'
  },
  close_menu: {
    en: '未翻譯',
    tw: '關閉選單'
  },
  shipping_code: {
    en: '未翻譯',
    tw: '郵遞區號'
  },
  cancel: {
    en: '未翻譯',
    tw: '取消'
  },
  ok: {
    en: '未翻譯',
    tw: '確認'
  },
  choose_address: {
    en: '未翻譯',
    tw: '選擇地址'
  },
  add_ress: {
    en: '未翻譯',
    tw: '地 址'
  },
  og_password: {
    en: '未翻譯',
    tw: '舊密碼'
  },
  change_password: {
    en: '未翻譯',
    tw: '新密碼'
  },
  check_password: {
    en: '未翻譯',
    tw: '確認新密碼'
  },
  check_Opassword: {
    en: '未翻譯',
    tw: '再次確認密碼'
  },
  check_acc: {
    en: '未翻譯',
    tw: '再次確認帳號（Email）'
  },
  product_count: {
    en: '未翻譯',
    tw: '商品數量'
  },
  abuot_us_0: {
    en: '未翻譯',
    tw: '經營理念'
  },
  abuot_us_1: {
    en: '未翻譯',
    tw: 'EZGO 已經營數年，是值得您信賴的保健食品代購品牌，在全台灣超過\n' +
      '                300 位會員推薦。\n' +
      '                我們代購的範圍包含不同年齡層的營養補充產品，更以美國認證的保健食品為首選，功效涵蓋調整體質、調節血脂、調節生理機能、眼睛保護、關節保養、口腔清潔衛生等各種營養保健食品。'
  },
  about_us_2: {
    en: '未翻譯',
    tw: '我們以保障消費者食安為出發，秉持四大承諾：'
  },
  about_us_3: {
    en: '未翻譯',
    tw: '品質：產品皆以國家健康食品認證為首選，具功效與安全認證，由專家與公正的第三方機構監督把關。'
  },
  about_us_4: {
    en: '未翻譯',
    tw: '安全：產品通過美國各項檢驗，檢驗報告公開透明。'
  },
  about_us_5: {
    en: '未翻譯',
    tw: '專業：我們於台灣代購逾 10 年經驗，提供保健食品諮詢服務。'
  },
  about_us_6: {
    en: '未翻譯',
    tw: '信賴：我們是超過 300\n' +
      '                  位會員推薦的代購品牌，以良好的顧客服務，成為客戶信賴的健康夥伴。'
  },
  brand_page: {
    en: '未翻譯',
    tw: '品牌頁'
  },
  not_found: {
    en: '未翻譯',
    tw: '找不到網頁'
  },
  sorry: {
    en: '未翻譯',
    tw: '抱歉！該網址不存在，請重新輸入網址，或點擊下列按鈕回到首頁。'
  },
  forget_password: {
    en: '未翻譯',
    tw: '忘記密碼'
  },
  email_to: {
    en: '未翻譯',
    tw: '你將於電子郵件中收到更換密碼通知信'
  },
  submit: {
    en: '未翻譯',
    tw: '確定'
  },
  back_login: {
    en: '未翻譯',
    tw: '返回登入'
  },
  keep_login: {
    en: '未翻譯',
    tw: '記住帳號密碼'
  },
  to_register: {
    en: '未翻譯',
    tw: '或前往註冊'
  },
  close_filter: {
    en: '未翻譯',
    tw: '關閉篩選設定'
  },
  main_in: {
    en: '未翻譯',
    tw: '主要成分'
  },
  other_in: {
    en: '未翻譯',
    tw: '其他成分'
  },
  register: {
    en: '未翻譯',
    tw: '註冊'
  },
  register_terms: {
    en: '未翻譯',
    tw: '會員條款'
  },
  register_terms_1_1: {
    en: 'Members can view their purchase records and reward points on their accounts.',
    tw: '註冊會員之後，您可使用會員專屬頁面，包含筆筆消費皆有回饋累積在您的帳戶！'
  },
  register_terms_1_2_1: {
    en: ' point is rewarded for every NT$30 spent. Reward points can be redeemed for the next purchase (1 reward point = NT$ 1). ',
    tw: '每 100 元（台幣） 消費即可累積 '
  },
  register_terms_1_2_2: {
    en: '',
    tw: ' 點回饋金點數，可在下次消費折抵。（ 1 點 = NT$ 1 ) '
  },
  register_terms_1_3: {
    en: 'Sign up for free with just your e-mail and the password!',
    tw: '您只需要使用 E-mail 和密碼即可免費註冊！'
  },
  category_page: {
    en: '未翻譯',
    tw: '分類選單'
  },
  member_success: {
    en: '未翻譯',
    tw: '會員認證成功'
  },
  member: {
    en: '未翻譯',
    tw: '會員'
  },
  member_success_1: {
    en: '未翻譯',
    tw: '可以開始愉快的購物囉！'
  },
  member_fail: {
    en: '未翻譯',
    tw: '會員認證失敗！'
  },
  member_fail_1: {
    en: '未翻譯',
    tw: '您的帳號已經認證過囉！'
  },
  member_fail_2: {
    en: '未翻譯',
    tw: '您的認證失敗，請重新認證！'
  },
  register_success: {
    en: '未翻譯',
    tw: '恭喜您！已經註冊成功'
  },
  to_buy: {
    en: '未翻譯',
    tw: '前往選購'
  },
  female: {
    en: '未翻譯',
    tw: '女用營養系列'
  },
  male: {
    en: '未翻譯',
    tw: '男用營養系列'
  },
  fif_female: {
    en: '未翻譯',
    tw: '50歲以上女用營養系列'
  },
  fif_male: {
    en: '未翻譯',
    tw: '50歲以上男用營養系列'
  },
  boy: {
    en: '未翻譯',
    tw: '兒童與青少年'
  },
  see_now: {
    en: '未翻譯',
    tw: '立即查看商品'
  },
  login_now: {
    en: '未翻譯',
    tw: '立即登入'
  },
  to_cart_write: {
    en: '未翻譯',
    tw: '請至購物車頁面輸入'
  },
  reward_used: {
    en: '未翻譯',
    tw: '回饋點數折抵'
  },
  back_product: {
    en: '未翻譯',
    tw: '返回商品頁'
  },
  category: {
    en: '未翻譯',
    tw: '分類'
  },
  free_shipping_3000: {
    en: '未翻譯',
    tw: '免運'
  },
  new_post: {
    en: '未翻譯',
    tw: '新上市'
  },
  low_to: {
    en: '未翻譯',
    tw: '價格低到高'
  },
  hi_to: {
    en: '未翻譯',
    tw: '價格高到低'
  },
  get_10: {
    en: '未翻譯',
    tw: '顯示 10 筆'
  },
  get_20: {
    en: '未翻譯',
    tw: '顯示 20 筆'
  },
  get_30: {
    en: '未翻譯',
    tw: '顯示 30 筆'
  },
  set_password: {
    en: '未翻譯',
    tw: '設定密碼'

  },
  no_find_products: {
    en: '未翻譯',
    tw: '找不到相關商品'
  },
  mail_to: {
    en: '未翻譯',
    tw: '你將於電子郵件中收到更換密碼通知信'
  },
  cell_phone: {
    en: '未翻譯',
    tw: '手 機'
  },
  nttdoller: {
    en: '未翻譯',
    tw: '台幣（NTD）'
  },
  address: {
    en: '未翻譯',
    tw: '宅配地址'
  },
  cant_see: {
    en: '未翻譯',
    tw: '看不清楚？再換一張'
  },
  Chinese: {
    en: '未翻譯',
    tw: '繁體中文'
  },
  all_brands: {
    en: '未翻譯',
    tw: '所有品牌'
  },
  no_address: {
    en: '未翻譯',
    tw: '尚未設定常用地址'
  },
  store: {
    en: '未翻譯',
    tw: '超商取貨'
  },
  home: {
    en: '未翻譯',
    tw: '宅配到家'
  },
  verification_code: {
    en: '未翻譯',
    tw: '驗證碼'
  },
  no_verification: {
    en: '未翻譯',
    tw: '請點選確認，收取驗證信，完成驗證步驟就可以購買商品囉！'
  },
  have_verification: {
    en: '未翻譯',
    tw: '已驗證'
  },
  noo_verification: {
    en: '未翻譯',
    tw: '未驗證'
  },
  back_index: {
    en: '未翻譯',
    tw: '返回首頁'
  },
  over_freeshipping: {
    en: '未翻譯',
    tw: '達免運門檻'
  },
  send_again: {
    en: '未翻譯',
    tw: '重新發送'
  },
  use_coupon: {
    en: '未翻譯',
    tw: '使用優惠券'
  },
  use_reward: {
    en: '未翻譯',
    tw: '使用回饋點數'
  },
  use_reward_now: {
    en: '未翻譯',
    tw: '請輸入正確的優惠券點數'
  },
  send_mail_to_validate: {
    en: '未翻譯',
    tw: '已寄送驗證信到您的新信箱！'
  },
  have_now: {
    en: '未翻譯',
    tw: '您目前有'
  },
  to_wish: {
    en: '未翻譯',
    tw: '已經加到商品收藏'
  },
  to_cart: {
    en: '未翻譯',
    tw: '已經加到購物車'
  },
  del_wish: {
    en: '未翻譯',
    tw: '已經刪除商品收藏'
  },
  wishlist: {
    en: '未翻譯',
    tw: '我的最愛'
  },
  copy_coupon: {
    en: '未翻譯',
    tw: '已經複製優惠券到剪貼簿'
  },
  copy_product: {
    en: '未翻譯',
    tw: '已經複製商品資訊到剪貼簿'
  },
  chg_password: {
    en: '未翻譯',
    tw: '修改密碼成功'
  },
  send_mail: {
    en: '未翻譯',
    tw: '您將於電子郵件中收到重設密碼通知信'
  },
  send_mail_again: {
    en: '未翻譯',
    tw: '已經重新寄驗證信'
  },
  send_mail_error: {
    en: '未翻譯',
    tw: '寄信失敗，請聯絡客服'
  },
  chg_password_suc: {
    en: '未翻譯',
    tw: '重設密碼成功'
  },
  index: {
    en: '未翻譯',
    tw: '首頁'
  },
  input_plz: {
    en: '未翻譯',
    tw: '請輸入資料'
  },
  edit_information: {
    en: '未翻譯',
    tw: '編輯個人訊息'
  },
  order_detaill: {
    en: '未翻譯',
    tw: '訂單內容'
  },
  ac_no: {
    en: '未翻譯',
    tw: '您的帳號尚未驗證'
  },
  add_cartt: {
    en: '未翻譯',
    tw: '新增至購物車'
  },
  edit_address: {
    en: '未翻譯',
    tw: '編輯地址'
  },
  create_address: {
    en: '未翻譯',
    tw: '新增地址'
  },
  old_pass: {
    en: '未翻譯',
    tw: '請輸入舊密碼'
  },
  new_pass: {
    en: '未翻譯',
    tw: '請輸入 6 ~ 12 個字的密碼 ( 須包含數字與英文 )'
  },
  new_pass_again: {
    en: '未翻譯',
    tw: '請再次輸入新密碼'
  },
  ver: {
    en: '未翻譯',
    tw: '請輸入驗證碼'
  },
  res: {
    en: '未翻譯',
    tw: '註冊結果'
  },
  pass_chk: {
    en: '未翻譯',
    tw: '註冊結果'
  },
  not_found_404: {
    en: '未翻譯',
    tw: '404 找不到網頁'
  },
  acc: {
    en: '未翻譯',
    tw: '帳號'
  },
  acc_e: {
    en: '未翻譯',
    tw: '帳號 ( Email )'
  },
  acc_error: {
    en: '未翻譯',
    tw: '帳號或密碼錯誤'
  },
  acc_inf: {
    en: '未翻譯',
    tw: '帳戶資訊'
  },
  acc_inf_m: {
    en: '未翻譯',
    tw: '管理個人訊息'
  },
  input_email: {
    en: '未翻譯',
    tw: '請輸入您的電子郵件'
  },
  input_cellp: {
    en: '未翻譯',
    tw: '請輸入您的手機 ( 格式 : 0912345678 )'
  },
  ororder_remark: {
    en: '未翻譯',
    tw: '訂單備註 ( 選填 )'
  },
  ororder_remarkk: {
    en: '未翻譯',
    tw: '訂單備註'
  },
  order_f: {
    en: '未翻譯',
    tw: '訂單結果'
  },
  pass_aga: {
    en: '未翻譯',
    tw: '請再次輸入您的密碼'
  },
  acc_aga: {
    en: '未翻譯',
    tw: '請再次輸入您的電子郵件'
  },
  real_name: {
    en: '未翻譯',
    tw: '請輸入您的真實姓名'
  },
  phone_code: {
    en: '未翻譯',
    tw: '區碼'
  },
  phone_a: {
    en: '未翻譯',
    tw: '分機'
  },
  input_line: {
    en: '未翻譯',
    tw: '請輸入您的 LINE ID'
  },
  check_order: {
    en: '未翻譯',
    tw: '查看訂單'
  },
  order_status: {
    en: '未翻譯',
    tw: '訂單狀態'
  },
  store_name: {
    en: '未翻譯',
    tw: '取貨店名'
  },
  point: {
    en: '未翻譯',
    tw: '點'
  },
  phone_code_choose: {
    en: '未翻譯',
    tw: '請選擇區碼'
  },
  pay_status: {
    en: '未翻譯',
    tw: '付款狀態'
  },
  allow_report: {
    en: '未翻譯',
    tw: '是否要接收電子報'
  },
  agree_pact_1: {
    en: '未翻譯',
    tw: '是否已閱讀並同意'
  },
  agree_pact_2: {
    en: '未翻譯',
    tw: '會員條款'
  },
  agree_pact_3: {
    en: '未翻譯',
    tw: '內容'
  },
  member_addr: {
    en: '未翻譯',
    tw: '會員居住地'
  },
  to: {
    en: '未翻譯',
    tw: '，將於'
  },
  overr: {
    en: '未翻譯',
    tw: '到期'
  },
  search_store: {
    en: '未翻譯',
    tw: '查詢超商'
  },
  reward_total: {
    en: '未翻譯',
    tw: '回饋點數總覽'
  },
  country: {
    en: '未翻譯',
    tw: '會籍地區'
  },
  reward_noww: {
    en: '未翻譯',
    tw: '目前回饋點數'
  },
  unreward: {
    en: '未翻譯',
    tw: '待生效回饋點數'
  },
  last: {
    en: '未翻譯',
    tw: '最近一筆'
  },
  year: {
    en: '未翻譯',
    tw: '元回饋金將於'
  },
  money_to: {
    en: '未翻譯',
    tw: '元回饋金將於'
  },
  mounth: {
    en: '未翻譯',
    tw: '月'
  },
  day: {
    en: '未翻譯',
    tw: '日'
  },
  start: {
    en: '未翻譯',
    tw: '生效'
  },
  update_at: {
    en: '未翻譯',
    tw: '更新日期'
  },
  detail: {
    en: '未翻譯',
    tw: '摘要'
  },
  reward_do: {
    en: '未翻譯',
    tw: '回饋點數變動'
  },
  reward_balance: {
    en: '未翻譯',
    tw: '回饋點數餘額'
  },
  Oversea: {
    en: 'Oversea',
    tw: '海外（Oversea）'
  },
  tw: {
    en: 'Taiwan',
    tw: '台灣'
  },
  size_t: {
    en: '未翻譯',
    tw: '尺寸表'
  },
  aaa: {
    en: '未翻譯',
    tw: '條款與細則'
  },
  cac: {
    en: '未翻譯',
    tw: '商業合作'
  },
  sas: {
    en: '未翻譯',
    tw: '配送與換貨說明'
  },
  len: {
    en: 'Height',
    tw: '身高'
  },
  wei: {
    en: 'Weight',
    tw: '體重'
  },
  bir: {
    en: 'Birthday',
    tw: '生日'
  },
  mr: {
    en: 'Mr.',
    tw: '先生'
  },
  mrs: {
    en: 'Mrs.',
    tw: '小姐'
  },
  Country: {
    en: 'Country',
    tw: '國家：'
  },
  First_name: {
    en: 'First name*',
    tw: '名稱*'
  },
  Last_name: {
    en: 'Last name*',
    tw: '姓氏*'
  },
  Addresss: {
    en: 'Address*',
    tw: '地址*'
  },
  Apartment_Suite_Building: {
    en: 'Apartment /Suite /  Building( Optional )',
    tw: '公寓/套房/建築物（選填）'
  },
  Company_name: {
    en: 'Company name( Optional )',
    tw: '公司名稱（選填）'
  },
  City: {
    en: 'City*',
    tw: '城市*'
  },
  Postal_code: {
    en: 'Postal code*',
    tw: '郵遞區號*'
  },
  Phone_number: {
    en: 'Phone number*',
    tw: '收貨人電話*'
  },
  Gender: {
    en: 'Gender',
    tw: '稱謂:'
  },
  to_c: {
    en: '未翻譯',
    tw: '運送國籍'
  },

}
for (const key in custom_message) {
  for (const lang in custom_message[key]) {
    messages[lang][key] = custom_message[key][lang]
  }
}
export default messages
