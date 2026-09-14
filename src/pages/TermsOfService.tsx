export default function TermsOfService() {
  return (
    <>
      <section className="border-b border-brand-100 bg-white px-6 py-14 text-center lg:px-10">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-display text-3xl font-extrabold tracking-tight text-brand-950 sm:text-4xl">
            Terms of Service
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-brand-800/70">
            The terms governing your use of the Bakas Renewable Energy
            Limited website and services.
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
              Acceptance of Terms
            </h2>
            <p className="text-sm leading-relaxed text-brand-800/80">
              By accessing this website, you agree to be bound by these Terms
              of Service. If you do not agree with any part of these terms,
              please do not use our website.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-xl font-bold text-brand-950">
              Use of Our Website
            </h2>
            <p className="text-sm leading-relaxed text-brand-800/80">
              This website is provided for informational purposes about our
              products, services and business. You agree not to misuse the
              site, interfere with its operation, or use it for any unlawful
              purpose.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-xl font-bold text-brand-950">
              Products and Quotes
            </h2>
            <p className="text-sm leading-relaxed text-brand-800/80">
              Product information, pricing and availability shown on this
              website are subject to change without notice. Any quote
              provided in response to an inquiry does not constitute a
              binding offer until confirmed in writing by Bakas Renewable
              Energy Limited.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-xl font-bold text-brand-950">
              Limitation of Liability
            </h2>
            <p className="text-sm leading-relaxed text-brand-800/80">
              Bakas Renewable Energy Limited is not liable for any indirect,
              incidental or consequential damages arising from your use of
              this website.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-xl font-bold text-brand-950">
              Contact Us
            </h2>
            <p className="text-sm leading-relaxed text-brand-800/80">
              If you have any questions about these Terms of Service, please
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
