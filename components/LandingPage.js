import React, { useEffect, useState } from "react";
import Script from "next/script";
import MailerLiteSignup from "../components/MailerLiteSignup";

export default function LandingPage() {
  const [movieLines, setMovieLines] = useState([]);
  const [lastDropTime, setLastDropTime] = useState(0); // Use state to persist last drop time

  useEffect(() => {
    // Fetch the movie lines
    const fetchMovieLines = async () => {
      const response = await fetch("/movieLines.json");
      const data = await response.json();
      setMovieLines(data);
    };

    fetchMovieLines();

    const createFallingLine = (x, y) => {
      const randomQuote =
        movieLines[Math.floor(Math.random() * movieLines.length)];
      const container = document.createElement("div");
      container.classList.add("falling-line"); // Add falling-line class

      // Create line text
      const line = document.createElement("div");
      line.textContent = `${randomQuote.line}`;
      line.classList.add("line-text"); // Add line-text class

      // Create character text
      const character = document.createElement("div");
      character.textContent = `${randomQuote.character}`;
      character.classList.add("character-text"); // Add character-text class

      // Append the line and character to the container
      container.appendChild(character);
      container.appendChild(line);

      // Set the initial position based on the mouse click
      container.style.left = `${x}px`;
      container.style.top = `${y}px`;
      container.style.opacity = "0"; // Initial opacity

      setTimeout(() => {
        container.style.opacity = "0.7"; // Fade in after 100ms
      }, 100);

      document.body.appendChild(container);

      // Apply "scale up" animation
      setTimeout(() => {
        container.classList.add("animate-scale");
        setTimeout(() => container.classList.remove("animate-scale"), 500); // Remove animation after 500ms
      }, 100); // Start scale animation after fade-in

      // Start falling after the fade-in
      setTimeout(() => {
        container.style.opacity = "0"; // Make the container fully visible
        // container.style.transform = "translateY(100vh)"; // Start falling
        setTimeout(() => container.remove(), 3000); // Remove the container after animation ends
      }, 5000); // Fade-in delay
    };

    const handleClick = (e) => {
      // Check if the click was inside the MailerLite container
      const mailerLiteContainer = document.getElementById("mlb2-19899947");
      if (mailerLiteContainer && mailerLiteContainer.contains(e.target)) {
        // If the click is inside the MailerLite container, stop the event
        e.stopPropagation();
        return;
      }

      const now = Date.now();
      console.log(`Now: ${now}, Last Drop Time: ${lastDropTime}`); // Log both times to track the delay

      // Only trigger if the 500ms delay has passed
      if (now - lastDropTime < 100) {
        console.log("Skipping drop due to delay");
        return;
      }

      setLastDropTime(now); // Update the last drop time to the current time
      console.log("Creating new falling line");

      const canvas = document.getElementById("canvas");
      const rect = canvas.getBoundingClientRect();

      // Only trigger if the click is inside the canvas
      if (
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
      ) {
        createFallingLine(e.clientX, e.clientY);
      }
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [movieLines, lastDropTime]); // Include lastDropTime to update the state correctly

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
      <div
        id="canvas"
        className="animated-background w-screen h-screen bg-gradient-to-r from-blue-500 via-blue-500 to-violet-700 flex flex-col items-center justify-center relative overflow-hidden text-gray-100"
      >
        <h1 className="z-10 text-center text-4xl font-black text-neutral-50">
          LINUS: Lines Made Easy
        </h1>
        <p className=" z-10 text-center mt-2 text-blue-200">
          Your AI-Powered Line Learner.
        </p>

        <MailerLiteSignup />
      </div>
    </>
  );
}
