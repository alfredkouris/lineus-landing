// components/LandingPage.js
import FuzzyOverlay from "../components/FuzzyOverlay";
export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen relative overflow-hidden text-gray-100">
      <h1 className="text-center text-8xl font-black text-neutral-50">
        LINEUS
      </h1>
      <p className="text-center text-neutral-400">
        Your AI-Powered Line Learner
      </p>
      <div className="mt-8 text-neutral-20 w-fit px-4 py-2 font-semibold text-neutral-200 transition-colors hover:bg-neutral-800">
        Coming Soon...
      </div>
      <FuzzyOverlay />
    </div>
  );
}
