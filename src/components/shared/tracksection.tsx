import { ShieldCheck, RotateCcw, Globe, HelpCircle } from "lucide-react";

const features = [
  {
    id: 1,
    icon: <ShieldCheck className="w-6 h-6 text-green-600" />,
    title: "Secure Checkout",
    description: "Your info stays safe with us. All payments are encrypted and protected.",
    bg: "bg-green-100",
  },
  {
    id: 2,
    icon: <RotateCcw className="w-6 h-6 text-pink-600" />,
    title: "Easy Returns",
    description: "Changed your mind? No worries — you have 30 days to send it back, stress-free.",
    bg: "bg-pink-100",
  },
  {
    id: 3,
    icon: <Globe className="w-6 h-6 text-blue-600" />,
    title: "Worldwide Delivery",
    description: "From our shop to your doorstep. Fast, reliable shipping wherever you are.",
    bg: "bg-blue-100",
  },
  {
    id: 4,
    icon: <HelpCircle className="w-6 h-6 text-yellow-600" />,
    title: "Here to Help",
    description: "Need something? Our support team’s just a message away — always happy to chat.",
    bg: "bg-yellow-100",
  },
];

export default function TrackSection() {
  return (
    <section className="py-16 bg-white flex justify-center">
      <div className="max-w-7xl w-full mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {features.map((feature) => (
          <div key={feature.id} className="flex flex-col items-start">
            {/* Icon */}
            <div
              className={`w-10 h-10 rounded-md flex items-center justify-center ${feature.bg} mb-4`}
            >
              {feature.icon}
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed">
              {feature.description}
            </p>

            {/* Underline Divider (subtle) */}
            <div className="w-10 mt-3 border-b border-gray-200"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
