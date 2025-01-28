// components/MailerLiteSignup.js
import { useEffect } from "react";

export default function MailerLiteSignup() {
  useEffect(() => {
    // Load external script for MailerLite form functionality
    const script = document.createElement("script");
    script.src =
      "https://groot.mailerlite.com/js/w/webforms.min.js?v2d8fb22bb5b3677f161552cd9e774127";
    script.async = true;
    script.onload = () => {
      console.log("MailerLite form script loaded!");
    };
    script.onerror = () =>
      console.error("MailerLite form script failed to load.");
    document.body.appendChild(script);

    // Optionally handle callback function to display success
    window.ml_webform_success_19899947 = () => {
      const formContainer = document.querySelector(
        ".ml-subscribe-form-19899947 .row-form"
      );
      const successContainer = document.querySelector(
        ".ml-subscribe-form-19899947 .row-success"
      );

      if (formContainer && successContainer) {
        formContainer.style.display = "none";
        successContainer.style.display = "block";
      }
    };

    // Cleanup the script after the component unmounts
    return () => {
      script.remove();
    };
  }, []);

  return (
    <div
      id="mlb2-19899947"
      className="z-10  ml-form-embedContainer mt-2 ml-subscribe-form ml-subscribe-form-19899947 mx-auto p-4 max-w-96 w-full sm:p-6 md:p-8"
    >
      <div className="ml-form-align-center mx-auto w-full max-w-sm sm:max-w-md md:max-w-96">
        <div className="ml-form-embedWrapper embedForm">
          <div className="ml-form-embedBody ml-form-embedBodyDefault row-form">
            <form
              className="ml-block-form space-y-4"
              action="https://assets.mailerlite.com/jsonp/1193374/forms/138229377430193548/subscribe"
              data-code=""
              method="post"
              target="_blank"
            >
              <div className="ml-form-formContent">
                <div className="ml-form-fieldRow ml-last-item">
                  <div className="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                    {/* Input Field */}
                    <input
                      aria-label="email"
                      aria-required="true"
                      type="email"
                      className="form-control w-full px-4 py-2 border focus:outline-none rounded text-black focus:ring-2 focus:ring-black"
                      name="fields[email]"
                      placeholder="Enter your email"
                      autoComplete="email"
                    />
                  </div>
                </div>
              </div>

              <input type="hidden" name="ml-submit" value="1" />
              <div className="ml-form-embedSubmit mt-4">
                <button
                  type="submit"
                  className="w-full py-2 text-neutral-20 w-fit px-4 py-2 font-semibold rounded text-neutral-200 transition-colors bg-neutral-800 hover:bg-black"
                >
                  Join the waitlist
                </button>
                <button
                  disabled
                  style={{ display: "none" }}
                  type="button"
                  className="loading w-full hidden px-4 bg-green text-white font-semibold rounded-lg"
                >
                  <div className="ml-form-embedSubmitLoad hidden"></div>
                  <span className="sr-only">Loading...</span>
                </button>
              </div>

              <input type="hidden" name="anticsrf" value="true" />
            </form>
          </div>

          {/* Success message after form submission */}
          <div
            className="ml-form-successBody row-success mt-4 p-4 rounded bg-black/[.2] text-white"
            style={{ display: "none" }}
          >
            <div className="ml-form-successContent text-center">
              <p>You're in. We can't wait to share more of Linus with you.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
