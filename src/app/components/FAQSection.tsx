import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

export function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "貓罐頭的保存期限是多久？",
      answer: "未開封的罐頭可保存 24 個月，開封後請冷藏並在 2-3 天內食用完畢，以確保新鮮度和營養價值。"
    },
    {
      question: "是否適合所有年齡的貓咪？",
      answer: "我們的貓罐頭適合成貓及老貓食用。對於幼貓，建議搭配幼貓專用飼料使用。若有特殊健康狀況，請先諮詢獸醫師。"
    },
    {
      question: "為什麼不添加膠質？",
      answer: "人工膠質可能對貓咪腸胃造成負擔。我們使用天然肉凍取代膠質，不僅更健康，也保留了食材的原始風味和營養。"
    },
    {
      question: "益生菌配方有什麼好處？",
      answer: "益生菌能幫助維持腸道健康、促進消化吸收、增強免疫力。我們的專利配方經過 200 天研發，確保益生菌活性與效果。"
    },
    {
      question: "每日建議餵食量是多少？",
      answer: "建議依照貓咪體重調整：3-5kg 貓咪每日 1-1.5 罐，5-7kg 貓咪每日 1.5-2 罐。可依個別狀況調整，並確保充足飲水。"
    },
    {
      question: "定期購有什麼優惠？",
      answer: "定期購享有 85 折優惠，免運費，並可彈性調整配送時間。首次訂閱還可獲得專屬禮品，隨時可暫停或取消。"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-green-50 to-amber-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-800">常見問題</h2>
          <p className="text-xl text-gray-600">解答您的疑問，讓選擇更安心</p>
        </motion.div>

        <div className="max-w-4xl mx-auto mb-16">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="mb-4"
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg text-gray-800 pr-4">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-6 h-6 text-gray-600 flex-shrink-0" />
                  </motion.div>
                </button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5 pt-2 text-gray-600 leading-relaxed border-t border-gray-100">
                    {faq.answer}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA 區塊 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="max-w-3xl mx-auto bg-gradient-to-r from-orange-400 to-orange-500 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl relative overflow-hidden"
        >
          {/* 背景裝飾 */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24"></div>

          <div className="relative z-10">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
              className="text-3xl md:text-4xl mb-4"
            >
              開始定期購，享受更多優惠
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="text-lg md:text-xl mb-8 text-orange-50"
            >
              首次訂閱立享 85 折 + 免運 + 專屬好禮
            </motion.p>

            {/* 呼吸燈效果按鈕 */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { 
                opacity: 1, 
                y: 0,
              } : {}}
              transition={{ duration: 0.6, delay: 1.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative bg-white text-orange-500 px-12 py-5 rounded-full text-xl shadow-xl hover:shadow-2xl transition-shadow overflow-hidden group"
            >
              {/* 呼吸燈效果 */}
              <motion.div
                animate={{
                  opacity: [0.5, 1, 0.5],
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-gradient-to-r from-orange-100 to-yellow-100 -z-10"
              ></motion.div>
              <span className="relative z-10">立即訂閱優惠方案</span>
            </motion.button>

            {/* 信任標記 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-orange-100"
            >
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-white/30 rounded-full flex items-center justify-center">✓</div>
                <span>隨時可暫停或取消</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-white/30 rounded-full flex items-center justify-center">✓</div>
                <span>彈性調整配送時間</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-white/30 rounded-full flex items-center justify-center">✓</div>
                <span>專屬客服支援</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
