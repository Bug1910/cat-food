import { HeroSection } from "./components/HeroSection";
import { TrustSection } from "./components/TrustSection";
import { CoreFeatures } from "./components/CoreFeatures";
import { ProductLineup } from "./components/ProductLineup";
import { MacroDetails } from "./components/MacroDetails";
import { FAQSection } from "./components/FAQSection";
import { Navigation } from "./components/Navigation";
import { ScrollToTop } from "./components/ScrollToTop";
import { PromoModal } from "./components/PromoModal";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* 導航欄 */}
      <Navigation />
      
      {/* 回到頂部按鈕 */}
      <ScrollToTop />
      
      {/* 優惠彈窗 */}
      <PromoModal />
      
      {/* 首屏視覺 */}
      <div id="hero">
        <HeroSection />
      </div>
      
      {/* 專利與信任背書 */}
      <TrustSection />
      
      {/* 三大核心特點 */}
      <div id="features">
        <CoreFeatures />
      </div>
      
      {/* 全口味產品矩陣 */}
      <div id="products">
        <ProductLineup />
      </div>
      
      {/* 食材與質地細節 */}
      <MacroDetails />
      
      {/* 常見問題與訂閱 CTA */}
      <div id="faq">
        <FAQSection />
      </div>
      
      {/* 頁尾 */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl mb-4">關於我們</h3>
              <p className="text-gray-400 text-sm">
                專注於為毛孩提供最優質的營養，以專業研發與嚴格品管，打造值得信賴的貓罐頭品牌。
              </p>
            </div>
            <div>
              <h3 className="text-xl mb-4">產品資訊</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>全系列口味</li>
                <li>營養成分</li>
                <li>餵食建議</li>
                <li>保存方式</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl mb-4">客戶服務</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>常見問題</li>
                <li>訂購須知</li>
                <li>退換貨政策</li>
                <li>聯絡我們</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl mb-4">聯絡方式</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>客服專線：0800-123-456</li>
                <li>服務時間：週一至週五 9:00-18:00</li>
                <li>Email：service@catfood.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>© 2026 高品質貓罐頭品牌. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}