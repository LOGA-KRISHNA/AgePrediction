
"use client";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/banner";
import Hero from "./components/Hero/hero";
import FeatureSection from "./components/featureCard/FeatureSection";
import Faq from "./components/Faq/Faq";


import ImagePredict from "./components/image-predict/AgePredict";
import VoicePredict from "./components/voice-predict/voicePredict";


export default function App() {


  return (
    <div className="flex flex-col w-full">
      {/* Navbar */}
      <Navbar />
      <Banner />
      <main className="pt-7">
          <Hero />
      <section className="w-full px-6 py-3 pt-2 mt-3 bg-white">
        <h2 className="text-3xl font-bold text-center mt-3 mb-1 text-[#39387d]">
          How It Works
        </h2>

        <FeatureSection />
      </section>
        {/* <ImagePredict />
        <section className="w-full bg-[#f7437a] mt-5">
        <VoicePredict /> */}

       <section>
         <div className="min-h-screen bg-gradient-to-br from-blue-50 to-sky-100  rounded-2xl p-6">
       <h1 className="text-4xl font-bold text-center text-indigo-700 mb-10">
         AI Age Prediction (Face + Voice)
       </h1>

       {/* Responsive layout: stack on small, side by side on large */}
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
         {/* Left: Face Age Prediction */}
         <div className="flex justify-center">
           <ImagePredict />
         </div>

         {/* Right: Voice Age Prediction */}
         <div className="flex justify-center">
           <VoicePredict/>
         </div>
       </div>
     </div>
      </section>


     
        <Faq />
      </main>
   

    </div>
  );
}
