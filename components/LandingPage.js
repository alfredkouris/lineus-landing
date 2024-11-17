// components/LandingPage.js
import React from "react";
import FuzzyOverlay from "../components/FuzzyOverlay";
import Script from "next/script";
import MailerLiteSignup from "../components/MailerLiteSignup"; // Import the MailerLiteSignup component

export default function LandingPage() {
  return (
    <>
      <Script
        src="https://assets.mailerlite.com/js/universal.js"
        strategy="lazyOnload"
        onLoad={() => {
          if (typeof window.ml === "function") {
            ml("account", "1193374");
          }
        }}
      />
      <div className="overflow-hidden">
        <FuzzyOverlay />
        <div className="z-10 flex flex-col items-center justify-center h-screen relative overflow-hidden text-gray-100">
          <h1 className="text-center text-4xl font-black text-neutral-50">
            LINEUS
          </h1>
          <p className="text-center mt-2 text-white">
            Your AI-Powered Line Learner. Coming soon.
          </p>
          {/* <div className="mt-8 text-neutral-20 w-fit px-4 py-2 font-semibold text-neutral-200 transition-colors hover:bg-neutral-800">
          Coming Soon...
        </div> */}

          {/* Include the MailerLiteSignup component here */}
          <MailerLiteSignup />
        </div>
      </div>
    </>
  );
}
