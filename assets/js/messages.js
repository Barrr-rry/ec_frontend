const messages = {
  en: {},
  tw: {}
}
const custom_message = {
  address_label: {
    en: 'Address',
    tw: '地址'
  },
  phone: {
    en: 'Phone',
    tw: '電話'
  },
  ordering_information: {
    en: 'Order information',
    tw: '訂購資訊'
  },
  delivery_instructions: {
    en: 'Delivery and return policy',
    tw: '配送與退換貨政策'
  },
  instructions: {
    en: 'Delivery note',
    tw: '配送說明'
  },
  delivery_instruction_1: {
    en: 'Shipping time: After receiving the order and confirming the payment, we will ship the goods within 3 working days, and will be postponed in case of a national holiday or two-day weekend.',
    tw: '出貨時間：在收到訂單並確認付款後，我們會於 3\n' +
      '            個工作天內出貨，如遇國定假日或週休二日則順延。'
  },
  delivery_instructions_2: {
    en: 'Free shipping standard: The whole museum can enjoy free shipping discounts for more than 3,000 yuan (Special discount activities are based on the activity description).',
    tw: ' 免運標準：全館滿 3,000 元即可享免運費優惠（\n' +
      '            特別折扣活動以活動說明為主 ）。'
  },
  delivery_instructions_3: {
    en: 'Shipping fee description: When the order is less than the free shipping amount, the consumer must pay for the shipping.',
    tw: '運費說明：訂單未滿免運金額時，消費者須自付運費。'
  },
  area: {
    en: 'area',
    tw: '地區'
  },
  delivery_instructions_4: {
    en: 'Outlying island freight: the delivery location is the outlying islands of Taiwan (Penghu, Kinmen, Matsu, if you choose to pick up and pay for supermarkets or purely to pick up, if the order is less than the free shipping amount, the consumer must pay 65 yuan for shipping. If you choose For freight, consumers must pay for the outlying island freight regardless of the amount of freight.',
    tw: '離島運費：收件地點為台灣離島地區（ 澎湖、金門、馬祖\n' +
      '            ），若選擇超商取貨付款或超商純取貨，訂單未滿免運金額時，消費者須自付運費\n' +
      '            65 元。若選擇貨運，不論運費多寡，消費者皆須自付離島運費。'
  },
  delivery_instructions_5: {
    en: 'Delivery schedule description',
    tw: '配送時程說明'
  },
  delivery_instructions_6: {
    en: 'Superstore pickup: It will arrive at the designated store within 2 working days after shipment. Please pay special attention to the arrival newsletter (if not received, please open the advertisement newsletter to the telecommunications company).',
    tw: '超商取貨 ： 在出貨後 2\n' +
      '            個工作天會抵達指定門市，請特別留意到貨簡訊通知（\n' +
      '            若無收到請向電信公司開通廣告簡訊通知 ）。'
  },
  delivery_instructions_7: {
    en: 'Home delivery freight: delivery within 1 to 2 working days after shipment will be postponed in case of a national holiday or two-day weekend), please pay special attention to the mobile phone notification of the logistics company to avoid delay in the delivery time.',
    tw: '宅配貨運 ： 在出貨後 1 ~ 2 個工作天送達（\n' +
      '            如遇國定假日或週休二日則順延\n' +
      '            ），請特別留意物流公司的手機通知，以免延誤收貨時間。'
  },
  delivery_instructions_8: {
    en: 'Shipping method and progress query',
    tw: '運送方式及進度查詢'
  },
  delivery_instructions_9: {
    en: 'Superstore pickup: Please go to the "Superstore to Store Inquiry System" for inquiries. Please pick up the goods at the designated Superstore within seven days after shipment.',
    tw: '超商取貨 ： 請至「 超商店到店查詢系統\n' +
      '            」查詢，請於出貨後七天內至指定超商門市取貨。'
  },
  delivery_instructions_10: {
    en: 'Black Cat Home Delivery: Please go to "Black Cat Logistics Progress Inquiry System" for inquiries.',
    tw: '黑貓宅配 ： 請至「 黑貓物流進度查詢系統 」查詢。'
  },
  delivery_instructions_11: {
    en: 'Home Delivery: Please go to "Home Delivery Parcel Tracking and Inquiry System" for inquiries.',
    tw: '宅配：請至「 宅配貨件追蹤查詢系統 」查詢。'
  },
  delivery_instructions_12: {
    en: 'Seven-day appreciation period',
    tw: '七天鑑賞期權利'
  },
  delivery_instructions_13: {
    en: 'In accordance with the provisions of the Consumer Protection Law, we provide you with the right to enjoy the seven-day appreciation period and non-trial period from the day after the arrival of the product. The appreciation period serves as your evaluation of whether to purchase the product. It is not for you to try the product. Request a refund within the period.',
    tw: ' 依據消費者保護法之規定，我們提供您享有商品到貨次日起算七天鑑賞期（\n' +
      '            鑑賞期非試用期\n' +
      '            ）之權益，鑑賞期間作為您評估是否購買該商品，並非提供您試用該商品，您可在鑑賞期間內要求退貨退款。'
  },
  delivery_instructions_14: {
    en: 'Note on returns',
    tw: '退貨注意事項'
  },
  delivery_instructions_15: {
    en: 'No refunds or exchanges can be made after the seven-day appreciation period',
    tw: '超過七日鑑賞期無法辦理退換貨。'
  },
  delivery_instructions_16: {
    en: 'Returns must be processed as a whole order application and cannot be partially refunded.',
    tw: '退貨須以整筆訂單申請處理，無法部分辦退。'
  },
  delivery_instructions_17: {
    en: 'Consumable products cannot be restored to their original sanitary condition once the package is opened. The returned product must be in a brand new state and be packaged intact or the original manufacturer’s tamper-evident seal is intact and undamaged. Otherwise, no return or exchange will be accepted.',
    tw: '消耗性產品，一經拆封即無法回復商品衛生原狀，退回商品必須是全新狀態且保持包裝完整或是原廠商防拆封條完整未損毀，否則恕不接受退換貨。'
  },
  delivery_instructions_18: {
    en: 'If the product is broken down, damaged, worn, scratched, scratched, dirty, or package damaged due to improper use and disassembly by the consumer, the product will not be returned or exchanged.',
    tw: '若商品因消費者個人不當使用拆卸，產生人為因素造成之故障、毀損、磨損、擦傷、刮傷、髒污、包裝破損不完整者，不接受退換貨。'
  },
  delivery_instructions_19: {
    en: 'Those who request to return the goods due to consumers\' personal factors shall bear the related shipping costs.',
    tw: '因消費者個人因素要求退貨者，需自行負擔產生的相關運費處理費用。'
  },
  delivery_instructions_20: {
    en: 'Since the products are online shopping products, they are all delivered in parcel packaging. If the outer box is squeezed and damaged during the transportation process without affecting the contents of the product, it will not be within the scope of return and exchange standards.',
    tw: '由於產品為網路購物商品，皆以包裹包裝配送，若於運送過程中，產生外盒擠壓破損，而未影響內容物商品，恕不在退換貨標準範圍內。'
  },
  delivery_instructions_21: {
    en: 'When applying for a return, please pack it in accordance with the return refund instructions and return it to the designated delivery address by yourself (at your own expense).',
    tw: '申請退貨時，請您依退貨退款指示包裝，並自行（ 自費\n' +
      '            ）寄回至指定收貨地址。'
  },
  delivery_instructions_22: {
    en: 'If you meet one of the following conditions, you can return and exchange unconditionally:',
    tw: '符合下述條件其中一項，即可無條件退換貨：'
  },
  delivery_instructions_23: {
    en: 'The goods actually received do not match the ordered goods in the order',
    tw: '實際收到的商品與訂單成立之訂購商品不符合'
  },
  delivery_instructions_24: {
    en: 'The accessories in the product package are not complete or the product specifications do not conform to the outer package instructions.',
    tw: '產品包裝內配件不齊全或商品規格與外包裝說明不符合。'
  },
  delivery_instructions_25: {
    en: 'After receiving the goods, if you find any defects or inconsistencies in the ordered items, you need to exchange the goods, please take a photo and notify us as soon as possible.',
    tw: ' 收到商品後如發現有瑕疵損壞或是訂購品項不符的狀況，需要辦理換貨，請盡快拍照通知我們。'
  },
  delivery_instructions_26: {
    en: '※Defective damage definition: The appearance of the product is severely damaged when the product is received, the content is leaked when the product is received, and the product has exceeded the expiration date when the product is received.',
    tw: '※瑕疵損壞定義：收到商品時外觀嚴重破損、收到商品時內容物外漏、收到商品時商品已超過有效期限。'
  },
  delivery_instructions_27: {
    en: 'Return and exchange process',
    tw: '退換貨流程'
  },
  delivery_instructions_28: {
    en: 'In order to simplify the process for you to obtain suitable products, we do not provide exchange services, but only provide "return processing". If there are unsuitable products after picking up the products, please write to customer service ezgo@gmail.com to process the return within 7 days after receiving the products. Application.',
    tw: '為簡化您取得適合商品的流程，我們沒有提供換貨服務，僅提供「 退貨處理\n' +
      '            」，取貨後如有不適合的商品，請於收到商品 7 天內，來信客服\n' +
      '            ezgo@gmail.com 辦理退貨申請。'
  },
  delivery_instructions_29: {
    en: 'When applying for a return, we will reply to the notification by Email, please pack it according to the return refund instructions, and send it back to the designated delivery address by yourself (at your own expense). (Please pack it properly. If you return the product or the packaging is damaged or missing, it may affect your right to return the product)',
    tw: '申請退貨時，我們會以 Email\n' +
      '            回覆通知，請您依退貨退款指示包裝，並自行（ 自費\n' +
      '            ）寄回至指定收貨地址。（\n' +
      '            請您妥善包裝，若寄回商品或包裝已損傷或缺漏，可能影響您退貨的權益 ）'
  },
  delivery_instructions_30: {
    en: 'Refund',
    tw: '辦理退款'
  },
  delivery_instructions_31: {
    en: 'Choose the cash return method. If the return status is established, we will refund your money by bank transfer after deducting the remittance fee before the fifth of the next month after receiving the returned goods, and the money will be remitted to the designated account.',
    tw: '選擇現金退回之方式，若退貨狀況成立，我們將於收到退回商品後於隔月五日前，扣除匯費以銀行匯款方式退還您的款項，款項匯入指定之帳戶。'
  },
  delivery_instructions_32: {
    en: 'For those who use ATM transfer and remittance, please provide the recipient account name, bank name (XX bank XX branch), bank account number and other information. After receiving your complete refund information, we will process the refund to your designated account.',
    tw: '採 ATM 轉帳匯款者，請提供收款戶名、銀行名（ XX銀行XX分行\n' +
      '            ）、銀行帳號等資料，我們將於收到您的完整退款資料後，辦理退款至您的指定帳戶中。'
  },
  delivery_instructions_33: {
    en: 'The return amount will be refunded based on the amount of the goods minus the exchange fee (30 yuan), and the freight that has been generated will not be refunded.',
    tw: '退貨金額以商品金額並扣除匯費（ 30 元\n' +
      '            ）後退還，已產生之運費不予以退費。'
  },
  delivery_instructions_34: {
    en: 'If you use a credit card to pay, you must wait for the credit card company to enter the account at the end of the month before the payment can be returned to you, and the payment will be directly returned to your credit card account. As the operating procedures of various credit card banks are different, if you have other questions, it is recommended to contact your credit card company directly for a more complete answer.',
    tw: '若使用信用卡刷卡付款，必須待信用卡公司月底入帳後，才能將款項退回給您，此款項將直接退回您的信用卡帳戶。由於各家信用卡銀行作業程序不同，若您有其他疑問，建議可直接向您的信用卡公司洽詢，以得到較完整的解答。'
  },
  delivery_instructions_35: {
    en: 'Those who request the return due to personal factors must bear the freight.',
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
    en: 'This product has the exclusive safety glue needle of HaveFun Men\'s Underwear.',
    tw: "本商品褲頭有HaveFun Men's Underwear的專屬安全膠針。"
  },
  delivery_rule_txt2: {
    en: 'Because underwear is a kind of close-fitting clothing, based on hygiene considerations, if you need to return or exchange goods, please note that all returned goods must be returned within the seven-day appreciation period. The seven-day appreciation period is not a trial period. To ensure your rights, you must keep HaveFun Men\'s Underwear safety glue needles have no cuts, no damage, no water, no cut labels, no try-on, and no peculiar smell.',
    tw: "因內褲屬於貼身衣物，基於衛生考量，如需退換貨請注意，所有退換貨的商品需於七天鑑賞期內寄回，七天鑑賞期非試用期，為確保您的權益，必須保留HaveFun Men's Underwear安全膠針無剪斷無毀損、不下水、不剪標、不試穿、無異味。"
  },
  delivery_rule_0: {
    en: 'Exchange:',
    tw: '換貨：'
  },
  delivery_rule_0_1_0: {
    en: 'If you receive a defective or damaged product, please provide the order number and defective photo to the Line private message within the seven-day appreciation period starting from the day after the pick-up, and the customer service will handle it for you as soon as possible.',
    tw: '如收到商品瑕疵或破損，請於取件隔日開始算七日鑑賞期內，提供訂單編號及瑕疵照片至Line私訊，客服會盡速為您處理。'
  },
  delivery_rule_0_2_0: {
    en: 'If the size does not match, one exchange can be provided within seven days. If you purchase 3 items, 1 item needs to be exchanged, and you only need to return the item.',
    tw: '尺寸不合，七日內可提供換貨一次，如購買3件商品，1件需換貨，僅需把該商品退回即可。'
  },
  delivery_rule_0_3_0: {
    en: 'Our company will help you send the replacement goods for free, but you are responsible for sending the goods back to our company and bear the shipping cost.',
    tw: '本公司會免費幫您寄送換貨商品過去，但您需先負責將商品寄回本公司且自行負擔寄回的運費。'
  },
  delivery_rule_1: {
    en: 'Wrong product:',
    tw: '寄錯商品：'
  },
  delivery_rule_1_1_0: {
    en: 'If you receive a product error, please provide the order number and product photo to the Line customer service private message within the seven-day appreciation period starting from the day after the pickup, and the customer service will handle it for you as soon as possible.',
    tw: '如收到商品錯誤，請於取件隔日開始算七日鑑賞期內，提供訂單編號及商品照片至Line客服私訊，客服會盡速為您處理。'
  },
  delivery_rule_2: {
    en: 'Return:',
    tw: '退貨：'
  },
  delivery_rule_2_1_0: {
    en: 'Please provide the order number to the Line customer service private message to speed up the follow-up procedures during the seven-day appreciation period starting from the next day of the pickup.',
    tw: '請於取件隔日開始算七日鑑賞期內，提供訂單編號至Line客服私訊聯繫，可加速後續的手續。'
  },
  delivery_rule_2_2_0: {
    en: 'The returned goods must be packaged intact.',
    tw: '退回商品需包裝完整。'
  },
  company_terms: {
    en: 'Order instructions and company terms',
    tw: '訂購須知與公司條款'
  },
  company_terms_1: {
    en: 'order process',
    tw: '訂購流程'
  },
  company_terms_0: {
    en: 'Free shipping standard',
    tw: '免運標準'
  },
  company_terms_0_1_0: {
    en: 'All mail is 60 yuan, free shipping over 3000, and the weight is limited to 1 kg.',
    tw: '郵寄一律 60 元，滿 3000 免運，限制重量 1 公斤內。 '
  },
  company_terms_0_2_0: {
    en: 'Home delivery is 90 yuan, free shipping over 3000, and the weight is limited to 999 kg.',
    tw: '宅配一律 90 元，滿 3000 免運，限制重量 999 公斤內。 '
  },
  company_terms_0_3_0: {
    en: 'Superstore pickups are all 65 yuan, free shipping over 3000, and the weight is limited to 5 kg.',
    tw: '超商取貨一律 65 元，滿 3000 免運，限制重量 5 公斤內。\n '
  },
  company_terms_0_1_1: {
    en: '',
    tw: '元，滿 '
  },
  company_terms_0_1_2: {
    en: 'free shipping, limited weight',
    tw: '免運，限制重量'
  },
  company_terms_0_1_3: {
    en: 'Within kilograms',
    tw: '公斤內。'
  },
  company_terms_2: {
    en: 'Please log in as a member first, select the size and quantity of the product you want to purchase, and add it to the shopping cart.',
    tw: '請先登入會員，選擇所要購買商品尺寸與數量，並加入購物車。'
  },
  company_terms_3: {
    en: 'Confirm the content of the shopping cart. If there is a discount code, please use it. After trial calculation of the shipping fee, please click to pay.',
    tw: '確認購物車內容，如有折扣代碼歡迎使用，試算運費後，請點選付款。'
  },
  company_terms_4: {
    en: 'Choose to register as a member, old customers please log in directly.',
    tw: '選擇註冊成為會員，舊客戶請直接登入。'
  },
  company_terms_11: {
    en: 'Please fill in the complete receiving information.',
    tw: '請填寫完整收件資訊。'
  },
  company_terms_5: {
    en: 'Click Place Order to complete the order. After the order is placed, you can enter the member center to check.',
    tw: '點選下單，完成訂單。下單完成後可進入會員中心查詢。'
  },
  company_terms_6: {
    en: 'After completion, we will notify you by email before shipment!',
    tw: '完成後，我們會在出貨前 Email 通知您！'
  },
  company_terms_7: {
    en: 'Credit card payment',
    tw: '信用卡即時線上一次刷卡付款'
  },
  company_terms_8: {
    en: '(Convenient and easy-to-use payment method. When you choose the online credit card method for transaction, the operation process uses SSL encryption mechanism to protect your personal privacy data)',
    tw: ' (\n' +
      '                方便又好用的付款方式，當您選擇線上刷卡方式進行交易時，作業流程透過SSL\n' +
      '                加密機制，保障您的個人隱私資料 )'
  },
  company_terms_9: {
    en: 'Convenience store pickup',
    tw: '超商付款取貨'
  },
  company_terms_10: {
    en: '(Suitable for customers who are not convenient to receive goods at home or without a credit card)',
    tw: '( 適合不方便在家收貨或無信用卡的客戶 )'
  },
  company_terms_12: {
    en: 'payment instructions',
    tw: '付款說明'
  },
  common_problem: {
    en: 'common problem',
    tw: '常見問題'
  },
  common_problem_0: {
    en: 'Where is the product source?',
    tw: '產品來源是哪裡？'
  },
  common_problem_1: {
    en: 'All our products come from American companies.',
    tw: '我們商品一律來自美國公司。'
  },
  common_problem_2: {
    en: 'Is the shelf life of the product I can receive up to date?',
    tw: '我可以收到產品的保存期限是最新嗎？'
  },
  common_problem_3: {
    en: 'Please rest assured that our products have the latest shelf life, and you can also make an inquiry before placing an order!',
    tw: '請放心，我們的商品都是最新的保存期限，也可以下單前先做詢問喔！'
  },
  common_problem_4: {
    en: 'Are the product images and content exactly the same as the actual product?',
    tw: '商品圖片與內容是否與實品一模一樣？'
  },
  common_problem_5: {
    en: 'Yes!',
    tw: '是的！'
  },
  common_problem_6: {
    en: 'The product is out of stock, when will it be restocked?',
    tw: '商品缺貨了，什麼時候才會再進貨呢？'
  },
  common_problem_7: {
    en: 'If it is a pre-order product, it takes 7-14 working days to arrive in Taiwan one after another!',
    tw: '如果是預購商品需要 7 - 14 個工作天才會陸續抵台喔！'
  },
  common_problem_8: {
    en: 'How long will it take to receive the goods?',
    tw: '要多久才能收貨？'
  },
  common_problem_9: {
    en: 'We will ship the stock part within 1-2 days, and it will take about 2-4 days to get to you! If you need it urgently, please note and let us know, and we will handle it for you as quickly as possible.',
    tw: '現貨部分我們 1 - 2 天內會出貨，到你手上大約需要 2 - 4\n' +
      '              天的時間喔！如果急需，請備註告訴我們，我們會以最快速度幫你處理。'
  },
  common_problem_10: {
    en: 'What should I do if there is damage after receiving the goods?',
    tw: '收到貨品後發現有破損，該如何處理？'
  },
  common_problem_11: {
    en: 'Please contact us as soon as possible, we will help you deal with the return and exchange related issues as soon as possible.',
    tw: '請儘速與我們聯繫，我們盡快幫你處理退換相關問題。'
  },
  common_problem_12: {
    en: 'Can I cancel the order?',
    tw: '可以取消訂單嗎？'
  },
  common_problem_13: {
    en: 'If the order has been shipped, it cannot be cancelled!',
    tw: '訂單如果已出貨是無法做取消的喔!'
  },
  common_problem_14: {
    en: 'When the ordered product is out of stock?',
    tw: '訂購的商品出現缺貨時？'
  },
  common_problem_15: {
    en: 'Please contact us to confirm whether it is completely out of stock or need waiting time.',
    tw: '請聯繫我們做確認是否完全無庫存或需等待時間。'
  },
  common_problem_16: {
    en: 'Can I purchase products other than those on your website?',
    tw: '請問我可以代購其他你們網頁上以外的商品嗎？'
  },
  common_problem_17: {
    en: 'Yes, as long as it is a legitimate website in the United States, we can help with purchasing.',
    tw: '可以，只要是美國的合法網站，我們都可以幫忙代購的。'
  },
  common_problem_18: {
    en: 'How do I see the shelf life of the goods?',
    tw: '請問我怎麼看商品的保存期限？'
  },
  common_problem_19: {
    en: 'Most of the shelf life is next to the product catalog (for example, the number 11/25 refers to November 2025).',
    tw: '大部分的保存期限都是在商品型錄旁邊（ 如數字是 11/25 指的是 11 月\n' +
      '              2025 年）。'
  },
  canncel_order: {
    en: 'cancel order',
    tw: '取消訂單'
  },
  member_center: {
    en: 'Member Centre',
    tw: '會員中心'
  },
  back_member_center: {
    en: 'Return to member center',
    tw: '返回會員中心'
  },
  my_account: {
    en: 'my account',
    tw: '我的帳戶'
  },
  order_record: {
    en: 'Order Tracking',
    tw: '訂單查詢'
  },
  my_favourite: {
    en: 'my favourite',
    tw: '我的最愛'
  },
  common_address: {
    en: 'Common Address',
    tw: '常用地址'
  },
  other_information: {
    en: 'Other information',
    tw: '其他資訊'
  },
  privacy_statement: {
    en: 'Privacy statement',
    tw: '隱私權聲明'
  },
  privacy_statement_1: {
    en: 'You are very welcome to visit HaveFun Men\'s Underwear (hereinafter referred to as this website). In order to allow you to use the services and information of this website with peace of mind, we hereby explain to you the privacy protection policy of this website to protect your rights, please Read the following carefully:',
    tw: '非常歡迎您光臨「 HaveFun Men’s Underwear（ 以下簡稱本網站\n' +
      '          ），為了讓您能夠安心使用本網站的各項服務與資訊，特此向您說明本網站的隱私權保護政策，以保障您的權益，請您詳閱下列內容：'
  },
  privacy_statement_2: {
    en: '1. The scope of application of the privacy protection policy',
    tw: '一、隱私權保護政策的適用範圍'
  },
  privacy_statement_3: {
    en: 'The content of the privacy protection policy, including how this website handles the personal identification information collected when you use the website services. The privacy protection policy does not apply to related linked websites other than this website, nor does it apply to personnel who are not entrusted or participated in the management of this website.',
    tw: '隱私權保護政策內容，包括本網站如何處理在您使用網站服務時收集到的個人識別資料。隱私權保護政策不適用於本網站以外的相關連結網站，也不適用於非本網站所委託或參與管理的人員。'
  },
  privacy_statement_4: {
    en: '2. Methods of collecting, processing and using personal data',
    tw: '二、個人資料的蒐集、處理及利用方式'
  },
  privacy_statement_6: {
    en: 'When you visit this website or use the functional services provided by this website, we will consider the nature of the service function, ask you to provide the necessary personal data, and process and use your personal data within the scope of the specific purpose; Written consent, this website will not use personal data for other purposes.',
    tw: '當您造訪本網站或使用本網站所提供之功能服務時，我們將視該服務功能性質，請您提供必要的個人資料，並在該特定目的範圍內處理及利用您的個人資料；非經您書面同意，本網站不會將個人資料用於其他用途。'
  },
  privacy_statement_7: {
    en: 'This website will retain the name, email address, contact information and time of use provided by you when you use interactive functions such as service mailboxes and questionnaires.',
    tw: '本網站在您使用服務信箱、問卷調查等互動性功能時，會保留您所提供的姓名、電子郵件地址、聯絡方式及使用時間等。'
  },
  privacy_statement_8: {
    en: 'During normal browsing, the server will record relevant actions on its own, including the IP address of the connected device, the time of use, the browser used, the browsing and click data records, etc., as a reference basis for us to improve our website services. This record is for internal use and will never be published.',
    tw: '於一般瀏覽時，伺服器會自行記錄相關行徑，包括您使用連線設備的IP位址、使用時間、使用的瀏覽器、瀏覽及點選資料記錄等，做為我們增進網站服務的參考依據，此記錄為內部應用，決不對外公佈。'
  },
  privacy_statement_9: {
    en: 'In order to provide accurate services, we will conduct statistics and analysis on the content of the collected questionnaires, and present the statistical data or explanatory text of the analysis results. Except for internal research, we will publish statistical data and explanatory text as necessary, but does not involve specific Personal information.',
    tw: '為提供精確的服務，我們會將收集的問卷調查內容進行統計與分析，分析結果之統計數據或說明文字呈現，除供內部研究外，我們會視需要公佈統計數據及說明文字，但不涉及特定個人之資料。'
  },
  privacy_statement_10: {
    en: '3. Data protection',
    tw: '三、資料之保護'
  },
  privacy_statement_11: {
    en: 'The host of this website is equipped with various information security equipment such as firewalls, anti-virus systems and necessary safety protection measures to protect the website and your personal data. Strict protection measures are adopted, and only authorized personnel can contact your personal Data and relevant processing personnel have signed a confidentiality agreement. Anyone who violates the confidentiality obligation will be punished by relevant laws.',
    tw: '本網站主機均設有防火牆、防毒系統等相關的各項資訊安全設備及必要的安全防護措施，加以保護網站及您的個人資料採用嚴格的保護措施，只由經過授權的人員才能接觸您的個人資料，相關處理人員皆簽有保密合約，如有違反保密義務者，將會受到相關的法律處分。'
  },
  privacy_statement_12: {
    en: 'If it is necessary to entrust other units to provide services due to business needs, this website will also strictly require them to comply with confidentiality obligations and take necessary inspection procedures to ensure that they will indeed comply.',
    tw: '如因業務需要有必要委託其他單位提供服務時，本網站亦會嚴格要求其遵守保密義務，並且採取必要檢查程序以確定其將確實遵守。'
  },
  privacy_statement_13: {
    en: '4. External links on the website',
    tw: '四、網站對外的相關連結'
  },
  privacy_statement_14: {
    en: 'The web pages of this website provide Internet links to other websites, and you can also click to enter other websites through the links provided on this website. However, the privacy protection policy of this website is not applicable to the linked website, and you must refer to the privacy protection policy in the linked website.',
    tw: '本網站的網頁提供其他網站的網路連結，您也可經由本網站所提供的連結，點選進入其他網站。但該連結網站不適用本網站的隱私權保護政策，您必須參考該連結網站中的隱私權保護政策。'
  },
  privacy_statement_15: {
    en: '5. Policy on sharing personal data with third parties',
    tw: '五、與第三人共用個人資料之政策'
  },
  privacy_statement_16: {
    en: 'This website will never provide, exchange, rent or sell any of your personal information to other individuals, groups, private companies or public agencies, but those with legal basis or contractual obligations are not limited to this.',
    tw: '本網站絕不會提供、交換、出租或出售任何您的個人資料給其他個人、團體、私人企業或公務機關，但有法律依據或合約義務者，不在此限。'
  },
  privacy_statement_17: {
    en: 'The proviso in the preceding paragraph includes but is not limited to:',
    tw: '前項但書之情形包括不限於 ：'
  },
  privacy_statement_18: {
    en: 'With your written consent.',
    tw: '經由您書面同意。'
  },
  privacy_statement_19: {
    en: 'The law expressly stipulates.',
    tw: '法律明文規定。'
  },
  privacy_statement_20: {
    en: 'To avoid danger to your life, body, freedom or property.',
    tw: '為免除您生命、身體、自由或財產上之危險。'
  },
  privacy_statement_21: {
    en: 'Cooperating with public agencies or academic research institutions is necessary for statistical or academic research based on public interest, and the data is processed or collected by the provider and cannot identify a specific party according to its disclosure method.',
    tw: '與公務機關或學術研究機構合作，基於公共利益為統計或學術研究而有必要，且資料經過提供者處理或蒐集著依其揭露方式無從識別特定之當事人。'
  },
  privacy_statement_22: {
    en: 'When your behavior on the website violates the terms of service or may damage or hinder the rights of the website and other users or cause damage to anyone, the website management unit analyzes and reveals your personal information for the purpose of identifying, contacting or taking legal action. Necessary.',
    tw: '當您在網站的行為，違反服務條款或可能損害或妨礙網站與其他使用者權益或導致任何人遭受損害時，經網站管理單位研析揭露您的個人資料是為了辨識、聯絡或採取法律行動所必要者。'
  },
  privacy_statement_23: {
    en: 'Conducive to your rights.',
    tw: '有利於您的權益。'
  },
  privacy_statement_24: {
    en: 'When this website entrusts a manufacturer to assist in the collection, processing or use of your personal data, it will do its best to supervise and manage the outsourced manufacturer or individual.',
    tw: '本網站委託廠商協助蒐集、處理或利用您的個人資料時，將對委外廠商或個人善盡監督管理之責。'
  },
  privacy_statement_25: {
    en: '6. Use of Cookies',
    tw: '六、Cookie之使用'
  },
  privacy_statement_26: {
    en: 'In order to provide you with the best service, this website will place and access our cookies on your computer. If you do not want to accept the writing of cookies, you can set the privacy level in the browser function you use to If high, the writing of cookies can be rejected, but some functions of the website may not be executed normally.',
    tw: '為了提供您最佳的服務，本網站會在您的電腦中放置並取用我們的 Cookie\n' +
      '            ，若您不願接受 Cookie\n' +
      '            的寫入，您可在您使用的瀏覽器功能項中設定隱私權等級為高，即可拒絕\n' +
      '            Cookie 的寫入，但可能會導至網站某些功能無法正常執行 。'
  },
  privacy_statement_27: {
    en: '7. Amendment of privacy protection policy.',
    tw: '七、隱私權保護政策之修正。'
  },
  privacy_statement_28: {
    en: 'The privacy protection policy of this website will be revised at any time in response to needs, and the revised terms will be published on the website.',
    tw: '本網站隱私權保護政策將因應需求隨時進行修正，修正後的條款將刊登於網站上。'
  },
  company_name: {
    en: '',
    tw: '電商系統'
  },
  footer_author: {
    en: 'Copyright © 2019 EC - All Rights Reserved. Power By CONQUER',
    tw: 'Copyright © 2019 電商系統 EC - All Rights Reserved. Power By CONQUER'
  },
  ntdoller: {
    en: 'New Taiwan Dollar NTD',
    tw: '新台幣 NTD'
  },
  usdoller: {
    en: 'USD',
    tw: '美金 USD'
  },
  about_us: {
    en: 'About Us',
    tw: '關於我們'
  },
  all_products: {
    en: 'All products',
    tw: '所有商品'
  },
  brand_category: {
    en: 'Brand category',
    tw: '品牌分類'
  },
  efficacy_classification: {
    en: 'Function classification',
    tw: '功效分類'
  },
  component_classification: {
    en: 'Ingredient classification',
    tw: '成分分類'
  },
  user_classification: {
    en: 'User classification',
    tw: '使用者分類'
  },
  chose_buy: {
    en: 'Quick purchase',
    tw: '快速選購'
  },
  special_offer: {
    en: 'Special offer',
    tw: '特惠商品'
  },
  best_sale_goods: {
    en: 'best sale goods',
    tw: '暢銷商品'
  },
  new_listing: {
    en: 'New product listing',
    tw: '新品上市'
  },
  constantly_praised: {
    en: 'Constant praise',
    tw: '好評不斷'
  },
  please_input_brand_or_prodcut_name: {
    en: 'Please input the brand or product name',
    tw: '請輸入品牌或是商品名稱'
  },
  search: {
    en: 'Search',
    tw: '搜尋'
  },
  pd_name_fake: {
    en: 'Healthy Fruit and Vegetable Nutrition Tablets',
    tw: '健康蔬果營養片'
  },
  bottle: {
    en: 'bottle',
    tw: '瓶'
  },
  shop_now: {
    en: 'Shop now',
    tw: '立即選購'
  },
  free_shipping: {
    en: 'Free shipping',
    tw: '運費'
  },
  size_chart: {
    en: 'Size Chart',
    tw: '尺寸表'
  },
  size: {
    en: 'Size',
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
  loyalty_reward: {
    en: 'Reward point system',
    tw: '回饋金點數制度'
  },
  loyalty_reward_m: {
    en: 'Loyalty reward',
    tw: '忠誠獎勵'
  },
  loyalty_reward_1: {
    en: 'What is a loyalty reward program?',
    tw: '什麼是忠誠獎勵計劃？'
  },
  loyalty_reward_2: {
    en: 'The loyalty reward program is a mechanism that allows customers to get rewards through orders. You can get rewards by purchasing our products. Your reward money can be used to purchase all products on the EC website.',
    tw: '忠誠獎勵計劃是一個讓顧客可以透過訂單獲得獎勵金的機制，您可以透過購買我們的產品獲得獎勵金。您的獎勵金可用於購買\n' +
      '            EC 網站上的所有產品。'
  },
  loyalty_reward_3: {
    en: 'Is there a limit on how much bonus money can I earn?',
    tw: '有限制能賺取多少獎勵金嗎？'
  },
  loyalty_reward_4: {
    en: 'There is no limit to the amount of rewards earned.',
    tw: '賺取的獎勵金額是沒有限制的。'
  },
  loyalty_reward_5: {
    en: 'How long does it take for the loyalty award to show the reward?',
    tw: '忠誠獎需要多久可以顯示獎勵金？'
  },
  loyalty_reward_6: {
    en: 'We usually send the rewards to the member center within 30 days after the order date. Contains the time necessary to deal with canceled orders, refusal to pay, product returns or other related issues. The validity period is 90 days, and calculations will begin after the rewards are credited to your account.',
    tw: '我們通常在訂購日後的 30\n' +
      '            天內將獎勵金發放至會員中心。包含處理取消訂單、撤單拒付、產品退貨或其他相關問題所必需的時間。有效期\n' +
      '            90 天，將於獎勵金發放至您的帳戶後開始計算。'
  },
  loyalty_reward_7: {
    en: 'When does the bonus expire?',
    tw: '獎勵金何時過期？'
  },
  loyalty_reward_btn1: {
    en: 'Register now',
    tw: '立即註冊會員'
  },
  loyalty_reward_btn2: {
    en: 'View my loyalty reward',
    tw: '查看我的忠誠獎勵'
  },
  shi: {
    en: 'Free shipping with a single amount of 3000 or more',
    tw: '單筆金額滿 3000 宅配免運'
  },
  free_shipping_fake_value: {
    en: 'Free shipping on full amount',
    tw: '滿額享免運費'
  },
  coupon_fake_value: {
    en: 'The strongest discount look here',
    tw: '最強優惠看這裡'
  },
  loyalty_reward_fake_value: {
    en: 'Reward for every consumption!',
    tw: '筆筆消費皆有回饋！'
  },
  sale_goods: {
    en: 'Sale items',
    tw: '特賣商品'
  },
  female_everyday: {
    en: 'Women\'s Daily',
    tw: '女性日常'
  },
  language: {
    en: 'English',
    tw: '繁體中文'
  },
  all: {
    en: 'All',
    tw: '全部'
  },
  login: {
    en: 'Login',
    tw: '登入'
  },
  currency: {
    en: 'Currency',
    tw: '貨幣'
  },
  product_ordering_instructions: {
    en: 'Product order description',
    tw: '商品訂購說明'
  },
  product_list: {
    en: 'List of products',
    tw: '商品一覽'
  },
  logout: {
    en: 'Logout',
    tw: '登出'
  },
  price_filter: {
    en: 'Price filter',
    tw: '價格篩選'
  },
  price_filter_bottom: {
    en: 'The price range',
    tw: '價格區間'
  },
  filter: {
    en: 'filter',
    tw: '篩選'
  },
  filter_set: {
    en: 'Filter settings',
    tw: '篩選設定'
  },
  specification: {
    en: 'specification',
    tw: '規格'
  },
  count: {
    en: 'Quantity',
    tw: '數量'
  },
  have_products: {
    en: 'In stock',
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
    en: 'Add to favorites',
    tw: '加入我的最愛'
  },
  shere_products: {
    en: 'Share this product',
    tw: '分享此商品'
  },
  products_description: {
    en: 'Product description',
    tw: '商品說明'
  },
  products_detail: {
    en: 'Details',
    tw: '詳細資訊'
  },
  products_specifition: {
    en: 'Product specifications',
    tw: '產品規格'
  },
  maker: {
    en: 'Manufacturers',
    tw: '製造廠商'
  },
  make_from: {
    en: 'Manufacturing place',
    tw: '製造產地'
  },
  expiration_date: {
    en: 'Shelf life',
    tw: '保存期限'
  },
  capacity: {
    en: 'Product capacity',
    tw: '產品容量'
  },
  weight: {
    en: 'weight',
    tw: '重量'
  },
  products_weight: {
    en: 'product weight',
    tw: '產品重量'
  },
  products_volume: {
    en: 'Product volume',
    tw: '產品體積'
  },
  account_detail: {
    en: 'my account',
    tw: '我的帳戶'
  },
  reward_now: {
    en: 'Current bonus',
    tw: '目前獎勵金'
  },
  next_discount: {
    en: 'Deductible in the next purchase',
    tw: '於下次消費可折抵'
  },
  doller: {
    en: 'dollar',
    tw: '元'
  },
  reward_description: {
    en: 'Reward points description',
    tw: '回饋點數說明'
  },
  member_name: {
    en: 'member name',
    tw: '會員姓名'
  },
  email: {
    en: 'Email',
    tw: '電子郵件'
  },
  cellphone: {
    en: 'Phone',
    tw: '手機'
  },
  cell＿phone: {
    en: 'Phone',
    tw: '手 機'
  },
  password: {
    en: 'Passwrod',
    tw: '密碼'
  },
  shipping_name: {
    en: 'Shipping name',
    tw: '收貨人姓名'
  },
  shipping_phone: {
    en: 'Phone',
    tw: '手機號碼'
  },
  shipping_phonee: {
    en: 'Consignee phone',
    tw: '收貨人電話'
  },
  shipping_phone_2: {
    en: 'Phone',
    tw: '手機號碼'
  },
  shipping_address: {
    en: 'Shipping address',
    tw: '收貨地址'
  },
  default_memberaddress: {
    en: 'Current preset address',
    tw: '當前預設地址'
  },
  set_default_memberaddress: {
    en: 'Set as default address',
    tw: '設定為預設地址'
  },
  add_memberaddress: {
    en: 'Add a common address',
    tw: '新增一個常用地址'
  },
  member_function: {
    en: 'Member function',
    tw: '會員功能'
  },
  no_wishlist: {
    en: 'No collection information',
    tw: '沒有收藏資訊'
  },
  product_iamge: {
    en: 'product photo',
    tw: '產品照片'
  },
  name_specification: {
    en: 'Product name',
    tw: '品名'
  },
  price: {
    en: 'unit price',
    tw: '單價'
  },
  wish_date: {
    en: 'Collection time',
    tw: '收藏時間'
  },
  function: {
    en: 'Function operation',
    tw: '功能操作'
  },
  order_number: {
    en: 'Order number',
    tw: '訂單編號'
  },
  pay_success: {
    en: 'Order paid',
    tw: '訂單已付款'
  },
  pay_fail: {
    en: 'Payment Fail',
    tw: '付款失敗'
  },
  order_date: {
    en: 'Order date',
    tw: '訂單日期'
  },
  order_method: {
    en: 'Delivery method',
    tw: '寄送方式'
  },
  order_total: {
    en: 'Total amount of goods',
    tw: '商品總金額'
  },
  shipping: {
    en: 'Shipping',
    tw: '運費'
  },
  coupon_used: {
    en: 'Coupon discount',
    tw: '優惠券折抵'
  },
  reward_back: {
    en: 'Loyalty rewards',
    tw: '忠誠獎勵回饋'
  },
  pay_method: {
    en: 'payment method',
    tw: '付款方式'
  },
  total: {
    en: 'Total',
    tw: '總計'
  },
  set_password_title: {
    en: 'Reset password',
    tw: '重新設定密碼'
  },
  pay_again: {
    en: 'Repay',
    tw: '重新付款'
  },
  cart: {
    en: 'shopping cart',
    tw: '購 物 車'
  },
  cartt: {
    en: 'shopping cart',
    tw: '購物車'
  },
  write_data: {
    en: 'Fill in the information',
    tw: '填 寫 資 料'
  },
  order_final: {
    en: 'Order result',
    tw: '訂 單 結 果'
  },
  little_total: {
    en: 'Subtotal',
    tw: '小計'
  },
  used: {
    en: 'Use',
    tw: '使 用'
  },
  price_detail: {
    en: 'Amount details',
    tw: '金額明細'
  },
  total_weight: {
    en: 'total weight',
    tw: '總重量'
  },
  used_coupon: {
    en: 'Reward points for this use',
    tw: '本次使用回饋點數'
  },
  no_coupon: {
    en: 'No such coupon found',
    tw: '查無此張優惠券'
  },
  cant_use_coupon: {
    en: 'You have not reached the threshold of this coupon',
    tw: '您尚未達到此張優惠券門檻'
  },
  coupon_over_date: {
    en: 'This coupon has expired',
    tw: '此張優惠券已過期'
  },
  coupon_member_over: {
    en: 'This coupon has been used for the maximum number of times',
    tw: '此張優惠券使用次數已達上限'
  },
  coupon_all_over: {
    en: 'This coupon is full',
    tw: '此張優惠券名額已滿'
  },
  used_reward: {
    en: 'Loyalty reward discount',
    tw: '忠誠獎勵折抵'
  },
  next_write: {
    en: 'Next step: fill in the information',
    tw: '下一步 : 填寫資料'
  },
  write: {
    en: 'Fill in the information',
    tw: '填寫資料'
  },
  ordre_get: {
    en: 'This order will get',
    tw: '本訂單將獲得'
  },
  pay_get: {
    en: 'This consumption can be accumulated',
    tw: '本次消費可累積'
  },
  point_reward: {
    en: ' reward points',
    tw: '點回饋點數'
  },
  reward: {
    en: 'Reward points',
    tw: '回饋點數'
  },
  cart_no_product: {
    en: 'No items in the shopping cart',
    tw: '購物車內沒有商品'
  },
  order_no_product: {
    en: 'Check no order',
    tw: '查無訂單'
  },
  pay_online: {
    en: 'Online payment',
    tw: '線上付款'
  },
  pay_later: {
    en: 'Cash on delivery',
    tw: '貨到付款'
  },
  to_home: {
    en: 'Post',
    tw: '郵寄'
  },
  to_store: {
    en: 'Home delivery',
    tw: '宅配'
  },
  fami: {
    en: 'FamilyMart',
    tw: '全家'
  },
  hili: {
    en: 'Hi-Life',
    tw: '萊爾富'
  },
  save_address: {
    en: 'Save to frequently used address',
    tw: '儲存至常用地址'
  },
  choose_store: {
    en: 'Choose a supermarket',
    tw: '選擇超商'
  },
  rechoose_store: {
    en: 'Re-select the supermarket',
    tw: '重新選擇超商'
  },
  order_detail: {
    en: 'Order information',
    tw: '訂單資訊'
  },
  next: {
    en: 'Next step',
    tw: '下一步'
  },
  order_complete: {
    en: 'Congratulations you have completed your order!',
    tw: '恭喜您已經完成訂單！'
  },
  order_fail: {
    en: 'The order failed!',
    tw: '訂單失敗！'
  },
  order_fail_repay: {
    en: 'Payment Fail! Please make another payment!',
    tw: '付款失敗！請重新付款！'
  },
  coupon_over: {
    en: 'Offer has ended',
    tw: '優惠已經結束'
  },
  over: {
    en: 'Over',
    tw: '滿'
  },
  doller_disc: {
    en: 'now off',
    tw: '元 現折'
  },
  copy: {
    en: 'Copy',
    tw: '複製'
  },
  close_menu: {
    en: 'Close Menu',
    tw: '關閉選單'
  },
  shipping_code: {
    en: 'Postal code',
    tw: '郵遞區號'
  },
  cancel: {
    en: 'Cancel',
    tw: '取消'
  },
  ok: {
    en: 'Confirm',
    tw: '確認'
  },
  choose_address: {
    en: 'Select address',
    tw: '選擇地址'
  },
  add_ress: {
    en: 'Address',
    tw: '地 址'
  },
  og_password: {
    en: 'Old password',
    tw: '舊密碼'
  },
  change_password: {
    en: 'New password',
    tw: '新密碼'
  },
  check_password: {
    en: 'Confirm the new password',
    tw: '確認新密碼'
  },
  check_Opassword: {
    en: 'Confirm password again',
    tw: '再次確認密碼'
  },
  check_acc: {
    en: 'Reconfirm account (Email)',
    tw: '再次確認帳號（Email）'
  },
  product_count: {
    en: 'amount of goods',
    tw: '商品數量'
  },
  abuot_us_0: {
    en: 'Business philosophy',
    tw: '經營理念'
  },
  abuot_us_1: {
    en: 'EZGO has been in business for several years and is a trusted health food purchasing brand recommended by more than 300 members across Taiwan. Our purchasing range includes nutritional supplement products of different age groups, and even the health food certified by the United States is the first choice. The effects cover various nutritional health foods such as adjustment of physical fitness, adjustment of blood lipids, adjustment of physiological functions, eye protection, joint care, oral hygiene, etc.',
    tw: 'EZGO 已經營數年，是值得您信賴的保健食品代購品牌，在全台灣超過\n' +
      '                300 位會員推薦。\n' +
      '                我們代購的範圍包含不同年齡層的營養補充產品，更以美國認證的保健食品為首選，功效涵蓋調整體質、調節血脂、調節生理機能、眼睛保護、關節保養、口腔清潔衛生等各種營養保健食品。'
  },
  about_us_2: {
    en: 'We take the food safety of consumers as the starting point and uphold four major commitments:',
    tw: '我們以保障消費者食安為出發，秉持四大承諾：'
  },
  about_us_3: {
    en: 'Quality: The products are first selected with national health food certification, with efficacy and safety certification, and are supervised by experts and impartial third-party agencies.',
    tw: '品質：產品皆以國家健康食品認證為首選，具功效與安全認證，由專家與公正的第三方機構監督把關。'
  },
  about_us_4: {
    en: 'Safety: The products have passed various inspections in the United States, and the inspection reports are open and transparent.',
    tw: '安全：產品通過美國各項檢驗，檢驗報告公開透明。'
  },
  about_us_5: {
    en: 'Professional: We have over 10 years of experience in purchasing agents in Taiwan and provide health food consulting services.',
    tw: '專業：我們於台灣代購逾 10 年經驗，提供保健食品諮詢服務。'
  },
  about_us_6: {
    en: 'Trust: We are a purchasing brand recommended by more than 300 members. With good customer service, we have become a trusted health partner of our customers.',
    tw: '信賴：我們是超過 300\n' +
      '                  位會員推薦的代購品牌，以良好的顧客服務，成為客戶信賴的健康夥伴。'
  },
  brand_page: {
    en: 'Brand page',
    tw: '品牌頁'
  },
  not_found: {
    en: 'Webpage not found',
    tw: '找不到網頁'
  },
  sorry: {
    en: 'Sorry! The URL does not exist. Please re-enter the URL or click the button below to return to the homepage.',
    tw: '抱歉！該網址不存在，請重新輸入網址，或點擊下列按鈕回到首頁。'
  },
  forget_password: {
    en: 'Forget password',
    tw: '忘記密碼'
  },
  email_to: {
    en: 'You will receive a password change notification letter in the email',
    tw: '你將於電子郵件中收到更換密碼通知信'
  },
  submit: {
    en: 'Confirm',
    tw: '確定'
  },
  back_login: {
    en: 'Back to login',
    tw: '返回登入'
  },
  keep_login: {
    en: 'Remember account password',
    tw: '記住帳號密碼'
  },
  to_register: {
    en: 'Or go to register',
    tw: '或前往註冊'
  },
  close_filter: {
    en: 'Turn off filter settings',
    tw: '關閉篩選設定'
  },
  main_in: {
    en: 'Main ingredients',
    tw: '主要成分'
  },
  other_in: {
    en: 'Other ingredients',
    tw: '其他成分'
  },
  register: {
    en: 'Register',
    tw: '註冊'
  },
  register_checkout: {
    en: 'Register and checkout',
    tw: '註冊並結帳'
  },
  register_terms: {
    en: 'Membership Terms',
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
    en: 'Category menu',
    tw: '分類選單'
  },
  member_success: {
    en: 'Member certification is successful',
    tw: '會員認證成功'
  },
  member: {
    en: 'Member',
    tw: '會員'
  },
  member_success_1: {
    en: 'You can start shopping happily!',
    tw: '可以開始愉快的購物囉！'
  },
  member_fail: {
    en: 'Member certification failed!',
    tw: '會員認證失敗！'
  },
  member_fail_1: {
    en: 'Your account has been verified!',
    tw: '您的帳號已經認證過囉！'
  },
  member_fail_2: {
    en: 'Your authentication failed, please re-authenticate!',
    tw: '您的認證失敗，請重新認證！'
  },
  register_success: {
    en: 'congratulations! Registered successfully',
    tw: '恭喜您！已經註冊成功'
  },
  to_buy: {
    en: 'Go shopping',
    tw: '前往選購'
  },
  female: {
    en: 'Female nutrition series',
    tw: '女用營養系列'
  },
  male: {
    en: 'Men\'s Nutrition Series',
    tw: '男用營養系列'
  },
  fif_female: {
    en: 'Nutrition series for women over 50 years old',
    tw: '50歲以上女用營養系列'
  },
  fif_male: {
    en: 'Men\'s nutrition series over 50 years old',
    tw: '50歲以上男用營養系列'
  },
  boy: {
    en: 'Children and Youth',
    tw: '兒童與青少年'
  },
  see_now: {
    en: 'View products now',
    tw: '立即查看商品'
  },
  login_now: {
    en: 'Sign in now',
    tw: '立即登入'
  },
  to_cart_write: {
    en: 'Please go to the shopping cart page to enter',
    tw: '請至購物車頁面輸入'
  },
  reward_used: {
    en: 'Rebate points discount',
    tw: '回饋點數折抵'
  },
  back_product: {
    en: 'Return to product page',
    tw: '返回商品頁'
  },
  category: {
    en: 'classification',
    tw: '分類'
  },
  free_shipping_3000: {
    en: 'Free transportation',
    tw: '免運'
  },
  new_post: {
    en: 'New Listing',
    tw: '新上市'
  },
  low_to: {
    en: 'Low to high price',
    tw: '價格低到高'
  },
  hi_to: {
    en: 'High to low price',
    tw: '價格高到低'
  },
  get_10: {
    en: 'Showing 10 items',
    tw: '顯示 10 筆'
  },
  get_20: {
    en: 'Showing 20 items',
    tw: '顯示 20 筆'
  },
  get_30: {
    en: 'Showing 30 items',
    tw: '顯示 30 筆'
  },
  set_password: {
    en: 'Set password',
    tw: '設定密碼'

  },
  no_find_products: {
    en: 'Can\'t find related products',
    tw: '找不到相關商品'
  },
  mail_to: {
    en: 'You will receive a password change notification letter in the email',
    tw: '你將於電子郵件中收到更換密碼通知信'
  },
  cell_phone: {
    en: 'Phone',
    tw: '手 機'
  },
  nttdoller: {
    en: 'Taiwan Dollar (NTD)',
    tw: '台幣（NTD）'
  },
  address: {
    en: 'Home delivery address',
    tw: '宅配地址'
  },
  cant_see: {
    en: 'can not see clearly? Change another one',
    tw: '看不清楚？再換一張'
  },
  Chinese: {
    en: 'traditional Chinese',
    tw: '繁體中文'
  },
  all_brands: {
    en: 'All brands',
    tw: '所有品牌'
  },
  no_address: {
    en: 'The frequently used address has not been set',
    tw: '尚未設定常用地址'
  },
  store: {
    en: 'Convenience store pick up',
    tw: '超商取貨'
  },
  home: {
    en: 'Home delivery',
    tw: '宅配到家'
  },
  verification_code: {
    en: 'Verification code',
    tw: '驗證碼'
  },
  no_verification: {
    en: 'Please click Confirm to receive the verification letter, and you can purchase the goods after completing the verification steps!',
    tw: '請點選確認，收取驗證信，完成驗證步驟就可以購買商品囉！'
  },
  have_verification: {
    en: 'Verified',
    tw: '已驗證'
  },
  noo_verification: {
    en: 'Unverified',
    tw: '未驗證'
  },
  back_index: {
    en: 'Back to homepage',
    tw: '返回首頁'
  },
  over_freeshipping: {
    en: 'Free shipping threshold',
    tw: '達免運門檻'
  },
  send_again: {
    en: 'Resend',
    tw: '重新發送'
  },
  use_coupon: {
    en: 'use a coupon',
    tw: '使用優惠券'
  },
  use_reward: {
    en: 'Use reward points',
    tw: '使用回饋點數'
  },
  use_reward_now: {
    en: 'A verification letter has been sent to your new mailbox!',
    tw: '請輸入正確的優惠券點數'
  },
  send_mail_to_validate: {
    en: 'A verification letter has been sent to your new mailbox!',
    tw: '已寄送驗證信到您的新信箱！'
  },
  have_now: {
    en: 'You currently have ',
    tw: '您目前有'
  },
  to_wish: {
    en: 'Already added to the product collection',
    tw: '已經加到商品收藏'
  },
  to_cart: {
    en: 'Already added to shopping cart',
    tw: '已經加到購物車'
  },
  del_wish: {
    en: 'Commodity collection has been deleted',
    tw: '已經刪除商品收藏'
  },
  wishlist: {
    en: 'my favourite',
    tw: '我的最愛'
  },
  copy_coupon: {
    en: 'Coupon has been copied to the scrapbook',
    tw: '已經複製優惠券到剪貼簿'
  },
  copy_product: {
    en: 'The product information has been copied to the clipboard',
    tw: '已經複製商品資訊到剪貼簿'
  },
  chg_password: {
    en: 'successfully change password',
    tw: '修改密碼成功'
  },
  send_mail: {
    en: 'You will receive a password reset notification letter in the email',
    tw: '您將於電子郵件中收到重設密碼通知信'
  },
  send_mail_again: {
    en: 'Re-sent verification letter',
    tw: '已經重新寄驗證信'
  },
  send_mail_error: {
    en: 'Failed to send the letter, please contact customer service',
    tw: '寄信失敗，請聯絡客服'
  },
  chg_password_suc: {
    en: 'Password reset successfully',
    tw: '重設密碼成功'
  },
  index: {
    en: 'Home page',
    tw: '首頁'
  },
  input_plz: {
    en: 'Please input data',
    tw: '請輸入資料'
  },
  edit_information: {
    en: 'Edit personal message',
    tw: '編輯個人訊息'
  },
  order_detaill: {
    en: 'Order content',
    tw: '訂單內容'
  },
  ac_no: {
    en: 'Your account has not been verified',
    tw: '您的帳號尚未驗證'
  },
  add_cartt: {
    en: 'Add to shopping cart',
    tw: '新增至購物車'
  },
  edit_address: {
    en: 'Edit address',
    tw: '編輯地址'
  },
  create_address: {
    en: 'Add address',
    tw: '新增地址'
  },
  old_pass: {
    en: 'Please input the old password',
    tw: '請輸入舊密碼'
  },
  new_pass: {
    en: 'Please input a password of 6 ~ 12 characters (must contain numbers and English)',
    tw: '請輸入 6 ~ 12 個字的密碼 ( 須包含數字與英文 )'
  },
  new_pass_again: {
    en: 'Please input the new password again',
    tw: '請再次輸入新密碼'
  },
  ver: {
    en: 'please input verification code',
    tw: '請輸入驗證碼'
  },
  res: {
    en: 'Registration result',
    tw: '註冊結果'
  },
  pass_chk: {
    en: 'Registration result',
    tw: '註冊結果'
  },
  not_found_404: {
    en: '404 Not Found',
    tw: '404 找不到網頁'
  },
  acc: {
    en: 'Account',
    tw: '帳號'
  },
  acc_e: {
    en: 'Account(EMail)*',
    tw: '帳號 ( Email )*'
  },
  acc_error: {
    en: 'account or password incorrect',
    tw: '帳號或密碼錯誤'
  },
  acc_inf: {
    en: 'Account information',
    tw: '帳戶資訊'
  },
  acc_inf_m: {
    en: 'Manage personal information',
    tw: '管理個人訊息'
  },
  input_email: {
    en: 'Please input your email',
    tw: '請輸入您的電子郵件'
  },
  input_cellp: {
    en: 'Please input your mobile phone (format: 0912345678)',
    tw: '請輸入您的手機 ( 格式 : 0912345678 )'
  },
  ororder_remark: {
    en: 'Order remarks (optional)',
    tw: '訂單備註 ( 選填 )'
  },
  ororder_remarkk: {
    en: 'order notes',
    tw: '訂單備註'
  },
  order_f: {
    en: 'Order result',
    tw: '訂單結果'
  },
  pass_aga: {
    en: 'Please enter the password again',
    tw: '請再次輸入密碼'
  },
  real_name: {
    en: 'please input your real name',
    tw: '請輸入您的真實姓名'
  },
  phone_code: {
    en: 'Area code',
    tw: '區碼'
  },
  phone_a: {
    en: 'telephone extension',
    tw: '分機'
  },
  input_line: {
    en: 'Please input your LINE ID',
    tw: '請輸入您的 LINE ID'
  },
  check_order: {
    en: 'check order',
    tw: '查看訂單'
  },
  order_status: {
    en: 'Order Status',
    tw: '訂單狀態'
  },
  store_name: {
    en: 'Pickup store name',
    tw: '取貨店名'
  },
  point: {
    en: 'point',
    tw: '點'
  },
  phone_code_choose: {
    en: 'Please select an area code',
    tw: '請選擇區碼'
  },
  pay_status: {
    en: 'payment status',
    tw: '付款狀態'
  },
  allow_report: {
    en: 'Do you want to receive newsletters',
    tw: '是否要接收電子報'
  },
  agree_pact_1: {
    en: 'Have you read and agreed',
    tw: '是否已閱讀並同意'
  },
  agree_pact_2: {
    en: 'Membership Terms',
    tw: '會員條款'
  },
  agree_pact_3: {
    en: 'content',
    tw: '內容'
  },
  member_addr: {
    en: 'Member residence',
    tw: '會員居住地'
  },
  to: {
    en: 'Will be',
    tw: '，將於'
  },
  overr: {
    en: 'maturity',
    tw: '到期'
  },
  search_store: {
    en: 'Query supermarket',
    tw: '查詢超商'
  },
  reward_total: {
    en: 'Overview of reward points',
    tw: '回饋點數總覽'
  },
  country: {
    en: 'Membership area',
    tw: '會籍地區'
  },
  reward_noww: {
    en: 'Current reward points',
    tw: '目前回饋點數'
  },
  unreward: {
    en: 'Pending effect reward points',
    tw: '待生效回饋點數'
  },
  last: {
    en: 'Latest',
    tw: '最近一筆'
  },
  year: {
    en: 'year',
    tw: '年'
  },
  money_to: {
    en: 'dollar rebate will be',
    tw: '元回饋金將於'
  },
  mounth: {
    en: 'month',
    tw: '月'
  },
  day: {
    en: 'day',
    tw: '日'
  },
  start: {
    en: 'Take effect',
    tw: '生效'
  },
  update_at: {
    en: 'Updated',
    tw: '更新日期'
  },
  detail: {
    en: 'Summary',
    tw: '摘要'
  },
  reward_do: {
    en: 'Changes in reward points',
    tw: '回饋點數變動'
  },
  reward_balance: {
    en: 'Reward points balance',
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
    en: 'Size Chart',
    tw: '尺寸表'
  },
  aaa: {
    en: 'Terms and conditions',
    tw: '條款與細則'
  },
  cac: {
    en: 'Business cooperation',
    tw: '商業合作'
  },
  sas: {
    en: 'Delivery and exchange instructions',
    tw: '配送與換貨說明'
  },
  len: {
    en: 'Height*',
    tw: '身高*'
  },
  wei: {
    en: 'Weight*',
    tw: '體重*'
  },
  bir: {
    en: 'Birthday*',
    tw: '生日*'
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
    tw: '手機號碼*'
  },
  store_namee: {
    en: 'Branch name',
    tw: '分店名稱'
  },
  store_id: {
    en: 'Store number',
    tw: '分店店號'
  },
  addresss: {
    en: 'Address*',
    tw: '地址*'
  },
  Region: {
    en: 'Region*',
    tw: '地區*'
  },
  SOLD_OUT: {
    en: 'SOLD OUT',
    tw: '售 完'
  },
  aaaaa: {
    en: 'Off shelf',
    tw: '下 架'
  },


}
for (const key in custom_message) {
  for (const lang in custom_message[key]) {
    messages[lang][key] = custom_message[key][lang]
  }
}
export default messages
