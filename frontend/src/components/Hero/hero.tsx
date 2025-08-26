
import { Button } from "@heroui/react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    //bg-gradient-to-b from-[#F4F4F5] via-white to-[#F5A524]/10
    <section    id="home" className="w-full min-h-[70vh] flex bg-gradient-to-b from-[#F4F4F5] via-white to-[#F5A524]/10 flex-col justify-center items-center text-center rounded-2xl px-6 ">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-extrabold leading-tight"
      >
        Predict Your Age with <span className="text-[#F31260]">AI</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl"
      >
        Leverage  <span className="text-[#17C964]">Transformers & SVM</span> techniques to develop a model capable of predicting an individual’s age with high accuracy and minimal error. 
        <span className="text-[#17C964]">Preprocessing methods </span> has been applied to enhance model performance. This solution can be applied across 
        multiple domains, from improving user 
        experience to ensuring compliance with age-related regulations.
      </motion.p>

      {/* CTA Buttons */}
      <div className="mt-6 flex gap-4 flex-wrap justify-center">
        
        <Button
        as="a"
        href="#services"
          style={{ backgroundColor: "#F31260", color: "white" }}
          size="lg"
          radius="full"
          className="text-lg px-8 py-4 font-bold rounded-full"
        >
          BY FACE
        </Button>
        <Button
         as="a"
          style={{ borderColor: "#17C964", color: "#17C964" }}
          variant="bordered"
          href="#try"
          size="lg"
          radius="full"
          className="text-lg px-8 py-4 rounded-full"
        >
          BY VOICE
        </Button>
      </div>
    </section>
  );
}
