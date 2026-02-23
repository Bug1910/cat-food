import { motion, useScroll, useTransform } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ProductLineup() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const products = [
    {
      name: "極鮮鮪魚",
      flavor: "深海鮪魚",
      image: "https://images.unsplash.com/photo-1682457569891-53e4f6ef9271?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0dW5hJTIwZmlzaCUyMGZyZXNofGVufDF8fHx8MTc3MDc0Nzk2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "from-blue-400 to-blue-600",
      bgColor: "bg-blue-50",
      nutrients: { protein: "95%", fat: "3%", fiber: "2%" },
      tags: ["高蛋白", "Omega-3", "護毛亮澤"]
    },
    {
      name: "嫩煎雞肉",
      flavor: "原味雞胸",
      image: "https://images.unsplash.com/photo-1642497394469-188b0f4bcae6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlja2VuJTIwbWVhdCUyMGZyZXNofGVufDF8fHx8MTc3MDcwMjEzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "from-orange-400 to-orange-600",
      bgColor: "bg-orange-50",
      nutrients: { protein: "92%", fat: "5%", fiber: "3%" },
      tags: ["低脂肪", "易消化", "增強免疫"]
    },
    {
      name: "頂級牛肉",
      flavor: "紐西蘭牛",
      image: "https://images.unsplash.com/photo-1613454320437-0c228c8b1723?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWVmJTIwbWVhdCUyMGZyZXNofGVufDF8fHx8MTc3MDgyNzA5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "from-red-400 to-red-600",
      bgColor: "bg-red-50",
      nutrients: { protein: "93%", fat: "4%", fiber: "3%" },
      tags: ["豐富鐵質", "強健骨骼", "增肌配方"]
    },
    {
      name: "野生鮭魚",
      flavor: "挪威鮭魚",
      image: "https://images.unsplash.com/photo-1600186321656-eaffd828d536?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWxtb24lMjBmaXNoJTIwZnJlc2h8ZW58MXx8fHwxNzcwODA3NzI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "from-pink-400 to-pink-600",
      bgColor: "bg-pink-50",
      nutrients: { protein: "94%", fat: "4%", fiber: "2%" },
      tags: ["DHA豐富", "護心配方", "抗氧化"]
    },
    {
      name: "鮮蝦總匯",
      flavor: "白蝦+鮪魚",
      image: "https://images.unsplash.com/photo-1682457569891-53e4f6ef9271?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0dW5hJTIwZmlzaCUyMGZyZXNofGVufDF8fHx8MTc3MDc0Nzk2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "from-teal-400 to-teal-600",
      bgColor: "bg-teal-50",
      nutrients: { protein: "91%", fat: "6%", fiber: "3%" },
      tags: ["雙重鮮味", "護膚配方", "維生素E"]
    },
    {
      name: "鴨肉南瓜",
      flavor: "鴨肉+南瓜",
      image: "https://images.unsplash.com/photo-1642497394469-188b0f4bcae6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlja2VuJTIwbWVhdCUyMGZyZXNofGVufDF8fHx8MTc3MDcwMjEzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "from-amber-400 to-amber-600",
      bgColor: "bg-amber-50",
      nutrients: { protein: "90%", fat: "5%", fiber: "5%" },
      tags: ["豐富纖維", "幫助消化", "護眼配方"]
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-amber-50 to-white overflow-hidden relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-800">全口味產品矩陣</h2>
          <p className="text-xl text-gray-600">六種精選口味，滿足每隻貓咪的獨特喜好</p>
        </motion.div>

        <div className="space-y-12 md:space-y-20">
          {products.map((product, index) => {
            const isEven = index % 2 === 0;
            const xOffset = useTransform(
              scrollYProgress,
              [0, 1],
              isEven ? [-100, 100] : [100, -100]
            );

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                style={{ x: useTransform(scrollYProgress, [0, 1], [0, isEven ? 30 : -30]) }}
                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300`}
              >
                {/* 產品圖片 */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-full md:w-1/2 relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-20 rounded-2xl blur-xl`}></div>
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="rounded-2xl w-full h-80 object-cover relative z-10 shadow-lg"
                  />
                  {/* 浮動標籤 */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                    className={`absolute top-4 right-4 bg-gradient-to-r ${product.color} text-white px-6 py-2 rounded-full text-sm shadow-lg z-20`}
                  >
                    新品上市
                  </motion.div>
                </motion.div>

                {/* 產品資訊 */}
                <div className="w-full md:w-1/2 space-y-4">
                  <div>
                    <h3 className="text-4xl mb-2 text-gray-800">{product.name}</h3>
                    <p className="text-xl text-gray-600">{product.flavor}</p>
                  </div>

                  {/* 營養成分 */}
                  <div className={`${product.bgColor} rounded-xl p-6`}>
                    <h4 className="text-lg mb-3 text-gray-700">營養成分比例</h4>
                    <div className="space-y-3">
                      {Object.entries(product.nutrients).map(([key, value]) => (
                        <div key={key}>
                          <div className="flex justify-between mb-1">
                            <span className="text-gray-600 capitalize">{key === 'protein' ? '蛋白質' : key === 'fat' ? '脂肪' : '纖維'}</span>
                            <span className="text-gray-800">{value}</span>
                          </div>
                          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={isInView ? { width: value } : {}}
                              transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                              className={`h-full bg-gradient-to-r ${product.color}`}
                            ></motion.div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 功能標籤 */}
                  <div className="flex flex-wrap gap-2">
                    {product.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tagIndex}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: index * 0.1 + 0.6 + tagIndex * 0.1 }}
                        className="px-4 py-2 bg-white border-2 border-gray-200 rounded-full text-sm text-gray-700"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* 加入購物車按鈕 */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full bg-gradient-to-r ${product.color} text-white py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transition-shadow`}
                  >
                    立即選購
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}