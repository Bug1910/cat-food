import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { X, Gift } from "lucide-react";

export function PromoModal() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 5 秒後顯示優惠彈窗
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* 背景遮罩 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* 彈窗內容 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 100 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md mx-4"
          >
            <div className="bg-gradient-to-br from-orange-400 to-orange-500 rounded-3xl shadow-2xl overflow-hidden">
              {/* 關閉按鈕 */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>

              {/* 內容 */}
              <div className="p-8 text-white text-center relative">
                {/* 背景裝飾 */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>

                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <Gift className="w-10 h-10" />
                </motion.div>

                <h3 className="text-3xl mb-4">首購限定優惠</h3>
                <p className="text-xl mb-2 text-orange-50">新朋友專屬</p>
                <div className="text-5xl mb-4">85折</div>
                <p className="text-lg mb-6 text-orange-50">
                  立即訂閱定期購<br />
                  還可享免運 + 專屬好禮
                </p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-white text-orange-500 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  立即領取優惠
                </motion.button>

                <p className="text-xs mt-4 text-orange-100">
                  優惠碼：FIRST85｜限時 24 小時
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
