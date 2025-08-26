import { Button } from "@heroui/react";

export default function Banner() {
  return (
    // bg-gradient-to-r from-blue-600 to-indigo-700
    <section className="w-full text-white rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 shadow-lg overflow-hidden"> 
      <div className="mx-auto max-w-7xl px-6 py-6 lg:flex lg:items-center lg:justify-between lg:gap-12">
        
        {/* Left Content */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
            Predict Your Age with  <span className="text-yellow-200">AI 🚀</span>
          </h1>
          <p className="mt-6 text-lg text-blue-100 max-w-xl">
        Upload a photo and let our AI model predict your age with high accuracy. Powered by deep learning and advanced computer vision. You can also speak, 
        and our AI will analyze your voice patterns to estimate your age

          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            {/* <Button
              as="a"
              href="#services"
              size="lg"
              color="primary"
              radius="lg"
              className="font-semibold"
            >
              Try Using Face
            </Button> */}
            <Button
            as="a"
        href="#services"
          style={{ backgroundColor: "#F31260", color: "white" }}
          size="md"
          radius="full"
          className="text-md px-4 py-2 rounded-full"
        >Try Using Face</Button>
         <Button
         as="a"
        href="#try"
          style={{ backgroundColor: "#00002e", color: "white" }}
          size="md"
          radius="full"
          className="text-md px-4 py-2 rounded-full"
        >Try Using 
        voice</Button>
           
          </div>
        </div>

        {/* Right Image */}
        <div className="mt-12 lg:mt-0 lg:flex-1 lg:flex lg:justify-end">
          <img
            src="age2.jpg"
            alt="AI illustration"
            className="w-full max-w-md rounded-xl shadow-xl hidden sm:block"
          />
        </div>
      </div>
    </section>
  );
}










