import { motion, useScroll, useTransform } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Leaf, Droplet, Heart } from "lucide-react";

export function MacroDetails() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // 創建浮動元素的動畫
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-white to-green-50 relative overflow-hidden">
      {/* 浮動背景元素 */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-20 left-10 w-32 h-32 opacity-20"
      >
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Leaf className="w-full h-full text-green-400" />
        </motion.div>
      </motion.div>

      <motion.div
        style={{ y: y2 }}
        className="absolute top-40 right-20 w-24 h-24 opacity-20"
      >
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <Droplet className="w-full h-full text-blue-400" />
        </motion.div>
      </motion.div>

      <motion.div
        style={{ y: y3 }}
        className="absolute bottom-20 left-1/4 w-28 h-28 opacity-20"
      >
        <motion.div
          animate={{
            y: [0, -15, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <Heart className="w-full h-full text-pink-400" />
        </motion.div>
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-800">食材與質地細節</h2>
          <p className="text-xl text-gray-600">超近距離感受純粹食材之美</p>
        </motion.div>

        {/* 主要視覺區 */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* 左側圖片展示 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/30 to-transparent z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1642497394469-188b0f4bcae6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlja2VuJTIwbWVhdCUyMGZyZXNofGVufDF8fHx8MTc3MDcwMjEzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="新鮮肉塊"
                className="w-full h-96 object-cover"
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-3 z-20"
              >
                <p className="text-gray-800">100% 純肉纖維</p>
              </motion.div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative rounded-2xl overflow-hidden shadow-xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1682457569891-53e4f6ef9271?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0dW5hJTIwZmlzaCUyMGZyZXNofGVufDF8fHx8MTc3MDc0Nzk2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="肉凍質地"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                  <p className="text-white text-sm">天然肉凍</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="relative rounded-2xl overflow-hidden shadow-xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1600186321656-eaffd828d536?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWxtb24lMjBmaXNoJTIwZnJlc2h8ZW58MXx8fHwxNzcwODA3NzI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="纖維質地"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                  <p className="text-white text-sm">細緻纖維</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* 右側特點說明 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center space-y-8"
          >
            <div>
              <h3 className="text-3xl mb-6 text-gray-800">看得見的品質保證</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                每一罐都經過嚴格品質把關，從食材挑選到加工製作，
                堅持不添加任何人工添加物，讓您的愛貓吃得安心。
              </p>
            </div>

            {/* 特點列表 */}
            {[
              { 
                icon: "🥩", 
                title: "純肉配方", 
                description: "100% 真實肉塊，絕不添加肉粉或副產品",
                delay: 0.2
              },
              { 
                icon: "🚫", 
                title: "無添加膠質", 
                description: "天然肉凍取代人工膠質，健康無負擔",
                delay: 0.4
              },
              { 
                icon: "🌿", 
                title: "新鮮食材", 
                description: "當日新鮮食材，保留完整營養與風味",
                delay: 0.6
              },
              { 
                icon: "✨", 
                title: "細緻質地", 
                description: "獨特加工技術，創造完美肉質口感",
                delay: 0.8
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: item.delay }}
                className="flex gap-4 items-start bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl">{item.icon}</div>
                <div>
                  <h4 className="text-xl mb-2 text-gray-800">{item.title}</h4>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* 底部品質認證 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="bg-gradient-to-r from-green-400 to-green-500 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl"
        >
          <h3 className="text-3xl md:text-4xl mb-4">品質承諾</h3>
          <p className="text-lg md:text-xl mb-6 text-green-50">
            通過 ISO 22000、HACCP 國際食品安全認證
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["無添加防腐劑", "無人工色素", "無香料", "無膠質"].map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full"
              >
                {badge}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}