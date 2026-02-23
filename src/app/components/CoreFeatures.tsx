import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Droplets, CheckCircle, Zap } from "lucide-react";

export function CoreFeatures() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const features = [
    {
      icon: Droplets,
      title: "秒凝結",
      description: "獨特肉質結構，開罐後保持完美型態",
      color: "from-blue-400 to-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: CheckCircle,
      title: "不黏底",
      description: "特殊技術處理，讓罐底輕鬆取出不浪費",
      color: "from-green-400 to-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: Zap,
      title: "速崩解",
      description: "細緻肉質，貓咪輕鬆咀嚼好消化",
      color: "from-orange-400 to-orange-600",
      bgColor: "bg-orange-50"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-blue-50 to-amber-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-800">三大核心特點</h2>
          <p className="text-xl text-gray-600">專利技術加持，給毛孩最好的照護</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5, y: 50 }}
                animate={isInView ? { 
                  opacity: 1, 
                  scale: 1, 
                  y: 0 
                } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.2 + index * 0.2,
                  type: "spring",
                  bounce: 0.4
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative"
              >
                <motion.div
                  animate={hoveredIndex === index ? { 
                    scale: 1.05,
                    rotate: [0, -2, 2, 0]
                  } : { scale: 1, rotate: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`${feature.bgColor} rounded-3xl p-8 shadow-xl h-full flex flex-col items-center text-center relative overflow-hidden`}
                >
                  {/* 背景裝飾圈 */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.color} opacity-10 rounded-full -mr-16 -mt-16`}></div>
                  
                  {/* 圖示 */}
                  <motion.div
                    animate={hoveredIndex === index ? { 
                      rotate: 360,
                      scale: 1.1
                    } : { rotate: 0, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className={`w-24 h-24 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <Icon className="w-12 h-12 text-white" />
                  </motion.div>

                  <h3 className="text-3xl mb-4 text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600 text-lg">{feature.description}</p>

                  {/* 底部裝飾條 */}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: "60%" } : {}}
                    transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                    className={`h-1 bg-gradient-to-r ${feature.color} rounded-full mt-6`}
                  ></motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* 額外說明 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 text-center max-w-3xl mx-auto"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <p className="text-lg text-gray-700 leading-relaxed">
              我們的貓罐頭採用獨家專利技術，確保每一口都是純粹的營養。
              無添加人工色素、防腐劑及膠質，讓您的愛貓享受最天然的美味。
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}