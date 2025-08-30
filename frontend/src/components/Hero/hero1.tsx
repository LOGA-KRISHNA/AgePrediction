import { Button } from "@heroui/react";
import { motion } from "framer-motion";

export default function Hero(){
  return (
    <section id="home" className="relative w-full min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-10 right-10 w-72 h-72 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center px-4 py-2 mb-8 text-sm font-medium text-purple-600 bg-purple-100 rounded-full border border-purple-200"
        >
          <span className="w-2 h-2 mr-2 bg-purple-500 rounded-full animate-pulse"></span>
          AI-Powered Age Detection
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-black leading-tight mb-6"
        >
          <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
            Discover Your Age
          </span>
          <br />
          <span className="text-gray-800">with AI Precision</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-10"
        >
          Experience cutting-edge <span className="font-semibold text-purple-600">EfficientNet  & SVM</span> technology 
          that predicts age with remarkable accuracy. Our advanced preprocessing ensures 
          <span className="font-semibold text-blue-600"> minimal error rates</span> across diverse applications.
        </motion.p>

        {/* Feature Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-2xl mx-auto"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600">85%</div>
            <div className="text-sm text-gray-600">Accuracy</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">&lt; 10s</div>
            <div className="text-sm text-gray-600">Processing</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-pink-600">AI</div>
            <div className="text-sm text-gray-600">Powered</div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex gap-6 flex-wrap justify-center"
        >
          <Button
            as="a"
            href="#services"
            className="relative px-10 py-4 text-lg font-bold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-purple-500/25"
            size="lg"
          >
            <span className="flex items-center gap-2">
              🎭 Predict by Face
            </span>
          </Button>
          <Button
            as="a"
            href="#try"
            className="px-10 py-4 text-lg font-bold text-purple-600 bg-white/80 backdrop-blur-sm border-2 border-purple-200 rounded-2xl hover:bg-purple-50 hover:border-purple-300 transform hover:scale-105 transition-all duration-300 shadow-xl"
            variant="bordered"
            size="lg"
          >
            
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              <span> Predict by Voice</span>

            </span>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
