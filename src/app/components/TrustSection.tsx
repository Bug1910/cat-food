import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Award, Shield, FlaskConical } from "lucide-react";

export function TrustSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-800">專利認證 · 值得信賴</h2>
          <p className="text-xl text-gray-600">國家級專利技術，為毛孩健康把關</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* 專利證書 1 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-xl relative overflow-hidden"
          >
            <motion.div
              animate={isInView ? {
                scale: [1, 1.1, 1],
                opacity: [0.8, 1, 0.8]
              } : {}}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-4 right-4"
            >
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white text-xs border-4 border-red-600">
                專利<br/>認證
              </div>
            </motion.div>
            <Award className="w-16 h-16 text-blue-600 mb-4" />
            <h3 className="text-2xl mb-3 text-gray-800">中華民國專利證書</h3>
            <p className="text-gray-600 mb-2">專利字號：M123456</p>
            <p className="text-gray-700">益生菌配方技術</p>
          </motion.div>

          {/* 專利證書 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-2xl p-8 shadow-xl relative overflow-hidden"
          >
            <motion.div
              animate={isInView ? {
                scale: [1, 1.1, 1],
                opacity: [0.8, 1, 0.8]
              } : {}}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-4 right-4"
            >
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white text-xs border-4 border-red-600">
                專利<br/>認證
              </div>
            </motion.div>
            <Shield className="w-16 h-16 text-green-600 mb-4" />
            <h3 className="text-2xl mb-3 text-gray-800">中華民國專利證書</h3>
            <p className="text-gray-600 mb-2">專利字號：M789012</p>
            <p className="text-gray-700">速崩解凝結技術</p>
          </motion.div>

          {/* 研發背書 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl p-8 shadow-xl text-white"
          >
            <FlaskConical className="w-16 h-16 mb-4" />
            <h3 className="text-2xl mb-3">專業研發團隊</h3>
            <p className="text-orange-100 mb-2">歷經 200 天研發打樣</p>
            <p className="text-lg">益生菌配方再升級</p>
          </motion.div>
        </div>

        {/* 信任數據 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {[
            { number: "100%", label: "純肉配方" },
            { number: "0", label: "添加膠質" },
            { number: "200+", label: "研發天數" },
            { number: "10萬+", label: "滿意貓家長" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
              className="text-center bg-white rounded-xl p-6 shadow-lg"
            >
              <div className="text-3xl md:text-4xl mb-2 text-orange-500">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
