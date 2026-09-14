export default function PrivacyPolicy() {
  return (
    <>
      <section className="border-b border-brand-100 bg-white px-6 py-14 text-center lg:px-10">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-display text-3xl font-extrabold tracking-tight text-brand-950 sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-brand-800/70">
            How Bakas Renewable Energy Limited collects, uses and protects
            your information.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-3xl space-y-10 px-6 lg:px-10">
          <p className="text-sm text-brand-800/70">
            Last updated: {new Date().getFullYear()}
          </p>

          <div className="space-y-4">
            <h2 className="font-display text-xl font-bold text-brand-950">
              Information We Collect
            </h2>
            <p className="text-sm leading-relaxed text-brand-800/80">
              When you contact us through our website, we may collect your
              name, email address, phone number and any details you share
              about your fuel requirements. We do not collect this
              information for any purpose other than responding to your
              inquiry and providing our products and services.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-xl font-bold text-brand-950">
              How We Use Your Information
            </h2>
            <p className="text-sm leading-relaxed text-brand-800/80">
              We use the information you provide to respond to inquiries,
              prepare quotes, fulfill orders and communicate with you about
              our products. We do not sell or rent your personal information
              to third parties.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-xl font-bold text-brand-950">
              Data Security
            </h2>
            <p className="text-sm leading-relaxed text-brand-800/80">
              We take reasonable measures to protect the information you
              share with us from unauthorized access, disclosure or misuse.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-xl font-bold text-brand-950">
              Contact Us
            </h2>
            <p className="text-sm leading-relaxed text-brand-800/80">
              If you have any questions about this Privacy Policy, please
              contact us at{" "}
              <a href="mailto:bakas.nepal@gmail.com" className="text-brand-600 underline">
                bakas.nepal@gmail.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
