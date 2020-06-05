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
    tw: '配送與退換貨說明'
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
  company_terms: {
    en: '未翻譯',
    tw: '訂購須知與公司條款'
  },
  company_terms_1: {
    en: '未翻譯',
    tw: '訂購流程'
  },
  company_terms_0: {
    en: '未翻譯',
    tw: '免運標準'
  },
  company_terms_0_1_0: {
    en: '未翻譯',
    tw: '郵寄一律 60 元，滿 3000 免運，限制重量 1 公斤內。 '
  },
  company_terms_0_2_0: {
    en: '未翻譯',
    tw: '宅配一律 90 元，滿 3000 免運，限制重量 999 公斤內。 '
  },
  company_terms_0_3_0: {
    en: '未翻譯',
    tw: '超商取貨一律 65 元，滿 3000 免運，限制重量 5 公斤內。\n '
  },
  company_terms_0_1_1: {
    en: '未翻譯',
    tw: '元，滿 '
  },
  company_terms_0_1_2: {
    en: '未翻譯',
    tw: '免運，限制重量'
  },
  company_terms_0_1_3: {
    en: '未翻譯',
    tw: '公斤內。'
  },
  company_terms_2: {
    en: '未翻譯',
    tw: '請先登入會員，選擇所要購買商品尺寸與數量，並加入購物車。'
  },
  company_terms_3: {
    en: '未翻譯',
    tw: '確認購物車內容，如有折扣代碼歡迎使用，試算運費後，請點選付款。'
  },
  company_terms_4: {
    en: '未翻譯',
    tw: '選擇註冊成為會員，舊客戶請直接登入。'
  },
  company_terms_11: {
    en: '未翻譯',
    tw: '請填寫完整收件資訊。'
  },
  company_terms_5: {
    en: '未翻譯',
    tw: '點選下單，完成訂單。下單完成後可進入會員中心查詢。'
  },
  company_terms_6: {
    en: '未翻譯',
    tw: '完成後，我們會在出貨前 Email 通知您！'
  },
  company_terms_7: {
    en: '未翻譯',
    tw: '信用卡即時線上一次刷卡付款'
  },
  company_terms_8: {
    en: '未翻譯',
    tw: ' (\n' +
      '                方便又好用的付款方式，當您選擇線上刷卡方式進行交易時，作業流程透過SSL\n' +
      '                加密機制，保障您的個人隱私資料 )'
  },
  company_terms_9: {
    en: '未翻譯',
    tw: '超商付款取貨'
  },
  company_terms_10: {
    en: '未翻譯',
    tw: '( 適合不方便在家收貨或無信用卡的客戶 )'
  },
  company_terms_12: {
    en: '未翻譯',
    tw: '付款說明'
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
    tw: '非常歡迎您光臨「 EZGO（ 以下簡稱本網站\n' +
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
    tw: '汴利購'
  },
  footer_author: {
    en: 'Copyright © 2019 EZGO - All Rights Reserved. Power By CONQUER',
    tw: 'Copyright © 2019 汴利購 EZGO - All Rights Reserved. Power By CONQUER'
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
  coupon: {
    en: 'coupon',
    tw: '優惠券'
  },
  coupon_code: {
    en: 'coupon',
    tw: '優惠券碼'
  },
  loyalty_reward: {
    en: 'Loyalty reward',
    tw: '回饋點數'
  },
  loyalty_reward_m: {
    en: 'Loyalty reward',
    tw: '忠誠獎勵'
  },
  loyalty_reward_1: {
    en: '未翻譯',
    tw: '什麼是忠誠獎勵計劃？'
  },
  loyalty_reward_2: {
    en: '未翻譯',
    tw: '忠誠獎勵計劃是一個讓顧客可以透過訂單獲得獎勵金的機制，您可以透過購買我們的產品獲得獎勵金。您的獎勵金可用於購買\n' +
      '            EZGO 網站上的所有產品。'
  },
  loyalty_reward_3: {
    en: '未翻譯',
    tw: '有限制能賺取多少獎勵金嗎？'
  },
  loyalty_reward_4: {
    en: '未翻譯',
    tw: '賺取的獎勵金額是沒有限制的。'
  },
  loyalty_reward_5: {
    en: '未翻譯',
    tw: '忠誠獎需要多久可以顯示獎勵金？'
  },
  loyalty_reward_6: {
    en: '未翻譯',
    tw: '我們通常在訂購日後的 30\n' +
      '            天內將獎勵金發放至會員中心。包含處理取消訂單、撤單拒付、產品退貨或其他相關問題所必需的時間。有效期\n' +
      '            90 天，將於獎勵金發放至您的帳戶後開始計算。'
  },
  loyalty_reward_7: {
    en: '未翻譯',
    tw: '獎勵金何時過期？'
  },
  loyalty_reward_8: {
    en: '未翻譯',
    tw: '獎勵金將於發放至您的帳戶後 90 天過期。'
  },
  loyalty_reward_9: {
    en: '未翻譯',
    tw: '立即註冊會員'
  },
  loyalty_reward_10: {
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
    tw: '忠誠獎勵說明'
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
    tw: '聯絡電話'
  },
  shipping_phonee: {
    en: '未翻譯',
    tw: '收貨人電話'
  },
  shipping_phone_2: {
    en: '未翻譯',
    tw: '聯絡電話'
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
    tw: '本次使用忠誠點數'
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
    tw: '點忠誠點數'
  },
  reward: {
    en: '未翻譯',
    tw: '忠誠點數'
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
    tw: '確認密碼'
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
  category_page: {
    en: '未翻譯',
    tw: '分類選單'
  },
  member_success: {
    en: '未翻譯',
    tw: '會員認證成功'
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
    tw: '恭喜您！已經註冊成功，驗證信已經寄到您的信箱囉！'
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
    tw: '忠誠點數折抵'
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
    tw: '使用忠誠點數'
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
    tw: '編輯個人資料'
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
    tw: '請再次輸入密碼'
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

}
for (const key in custom_message) {
  for (const lang in custom_message[key]) {
    messages[lang][key] = custom_message[key][lang]
  }
}
export default messages
