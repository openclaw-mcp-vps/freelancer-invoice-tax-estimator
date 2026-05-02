export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For Freelancers Earning $50k+
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Instant tax estimates<br />
          <span className="text-[#58a6ff]">for every invoice</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Create invoices and get real-time quarterly tax estimates automatically. Track deductions, stay ahead of the IRS, and never be blindsided at tax time.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors duration-150"
        >
          Start Free Trial — $19/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No credit card required to try. Cancel anytime.</p>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {["Real-time tax calc", "Quarterly estimates", "Deduction tracker", "Invoice builder", "Self-employment tax"].map((f) => (
            <span key={f} className="bg-[#161b22] border border-[#30363d] text-[#8b949e] text-sm px-4 py-1.5 rounded-full">{f}</span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 text-center shadow-xl">
          <p className="text-[#58a6ff] text-sm font-semibold uppercase tracking-widest mb-2">Pro Plan</p>
          <div className="flex items-end justify-center gap-1 mb-1">
            <span className="text-5xl font-extrabold text-white">$19</span>
            <span className="text-[#8b949e] mb-2">/month</span>
          </div>
          <p className="text-[#6e7681] text-sm mb-6">Everything you need to stay tax-ready year-round</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited invoice creation",
              "Real-time federal & self-employment tax estimates",
              "Quarterly tax payment reminders",
              "Deduction tracking & categorization",
              "Annual tax summary export",
              "Priority email support"
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] mt-0.5 font-bold">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-base transition-colors duration-150"
          >
            Get Started Now
          </a>
          <p className="mt-3 text-xs text-[#6e7681]">Secured by Lemon Squeezy · Cancel anytime</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does the real-time tax calculation work?",
              a: "As you add invoices, our engine applies current federal income tax brackets plus the 15.3% self-employment tax to your running annual income, giving you an accurate quarterly estimate instantly."
            },
            {
              q: "Do I need to connect my bank account?",
              a: "No. You manually enter invoices and expenses. Your financial data stays in your account — no bank linking required."
            },
            {
              q: "Can I cancel my subscription at any time?",
              a: "Yes. Cancel anytime from your billing portal powered by Lemon Squeezy. You keep access until the end of your billing period."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-sm text-[#8b949e] leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} TaxInvoice. Built for independent contractors.
      </footer>
    </main>
  );
}
