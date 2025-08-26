// faqs.tsx

export interface FAQ {
  title: string;
  content: string;
}

const faqs: FAQ[] = [
  {
    title: "What does this platform do?",
    content:
      "This platform uses AI to analyze images and predict attributes such as age. It’s designed to be simple, interactive, and user-friendly.",
  },
  {
    title: "How accurate are the predictions?",
    content:
      "Predictions are for demonstration purposes only and may not always be precise. The system is trained on sample data and is not a replacement for professional tools.",
  },
  {
    title: "Can I use this on mobile devices?",
    content:
      "Yes! The platform is fully responsive and works across desktops, tablets, and smartphones.",
  },
  {
    title: "Do you store my uploaded images?",
    content:
      "No, uploaded images are processed locally in your browser session. Nothing is stored or shared on external servers.",
  },
  {
    title: "Is the audio output gives numbers or categories?",
    content:
      "Output is based on Category, Whether the Person Belongs to UnderAge(below 18) or Adult (20-30) or Middle-Age(Above 30)",
  },
];

export default faqs;
