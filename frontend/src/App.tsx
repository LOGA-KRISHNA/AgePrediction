import Navbar from "./components/Navbar/Navbar";
import FeatureSection from "./components/featureCard/FeatureSection";
import Faq from "./components/Faq/Faq";
import ImagePredict from "./components/image-predict/AgePredict";
import VoicePredict from "./components/voice-predict/voicePredict";
import Hero from "./components/Hero/hero1.tsx";


export default function App() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-gradient-to-br from-purple-50/30 via-white to-blue-50/30">
      {/* Navbar */}
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <Hero />

        {/* How It Works Section */}
        <section id="about" className="relative w-full px-6 py-20 bg-white/50 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-6">
                How It <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Works</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our AI-powered system uses advanced machine learning to predict age with incredible accuracy
              </p>
            </div>
            <FeatureSection />
          </div>
        </section>

        {/* Prediction Services Section */}
        <section id="services" className="relative w-full py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-6">
                Try Our <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">AI Models</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience the power of AI with our dual prediction system - analyze age through facial features or voice patterns
              </p>
            </div>

            {/* Responsive layout: stack on small, side by side on large */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Face Age Prediction */}
              <div className="flex justify-center">
                <div className="w-full max-w-md">
                  <ImagePredict />
                </div>
              </div>

              {/* Voice Age Prediction */}
              <div className="flex justify-center">
                <div className="w-full max-w-md">
                  <VoicePredict />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="relative w-full py-20 bg-white/80 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <Faq />
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full py-12 bg-gradient-to-r from-purple-900 to-indigo-900 text-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              True Age AI
            </h3>
            <p className="text-purple-200 mb-6">
              Powered by True AgeAI
            </p>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent mb-6"></div>

            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-purple-300">
              <span>© 2025 Age Predictor. All rights reserved.</span>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <button className="hover:text-white transition-colors duration-300">Privacy</button>
                <button className="hover:text-white transition-colors duration-300">Terms</button>
                <button className="hover:text-white transition-colors duration-300">Help</button>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
