import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Beebsi",
  description: "Beebsi Terms of Service. Rules for using the app, subscription terms, and liability.",
};

export default function TermsOfService() {
  return (
    <main className="bg-black min-h-screen">
      <div className="max-w-3xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <a href="/" className="text-cyan-400/60 hover:text-cyan-400 text-sm transition-colors duration-200 mb-8 inline-block">&larr; Back to Beebsi</a>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Terms of Service</h1>
        <p className="text-white/40 text-sm mb-12">Last updated: June 12, 2026</p>

        <div className="space-y-8 text-white/70 text-[15px] leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Acceptance of Terms</h2>
            <p>By downloading, installing, or using Beebsi (&quot;the App&quot;), you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use the App.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Description of Service</h2>
            <p>Beebsi is a health and wellness application that reads data from Apple Health to compute Recovery, Sleep, and Strain scores. The App provides personalized health insights based on your data. Beebsi is <strong className="text-white/90">not a medical device</strong> and does not provide medical advice, diagnosis, or treatment.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. Health Disclaimer</h2>
            <p className="mb-3">The health scores, insights, and coaching provided by Beebsi are for <strong className="text-white/90">informational and educational purposes only</strong>. They are not intended to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Replace professional medical advice</li>
              <li>Diagnose or treat any medical condition</li>
              <li>Serve as a basis for medical decisions</li>
            </ul>
            <p className="mt-3">Always consult a qualified healthcare provider before making health or fitness decisions. If you experience a medical emergency, call emergency services immediately.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Account and Eligibility</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>You must be at least 13 years old to use Beebsi.</li>
              <li>You are responsible for maintaining the security of your account credentials.</li>
              <li>You may create only one account per person.</li>
              <li>You agree to provide accurate information during registration.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Subscriptions and Payments</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-white/90">Free features:</strong> Basic health scores and data viewing are available without a subscription.</li>
              <li><strong className="text-white/90">Beebsi Pro:</strong> Premium features (AI Coach, advanced insights, Family Circle) require an active subscription.</li>
              <li><strong className="text-white/90">Free trial:</strong> New subscribers may be eligible for a free trial period. Trial terms are displayed before purchase.</li>
              <li><strong className="text-white/90">Auto-renewal:</strong> Subscriptions automatically renew at the end of each billing period unless canceled at least 24 hours before the renewal date.</li>
              <li><strong className="text-white/90">Pricing:</strong> Subscription prices are displayed in the App and may vary by region. Prices may change with prior notice.</li>
              <li><strong className="text-white/90">Cancellation:</strong> You can cancel your subscription at any time through your Apple ID account settings (Settings &gt; Apple ID &gt; Subscriptions). Cancellation takes effect at the end of the current billing period.</li>
              <li><strong className="text-white/90">Refunds:</strong> All purchases are processed by Apple. Refund requests must be directed to Apple per their refund policy.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Acceptable Use</h2>
            <p className="mb-3">You agree not to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Reverse engineer, decompile, or disassemble the App</li>
              <li>Use the App for any unlawful purpose</li>
              <li>Attempt to gain unauthorized access to our servers or systems</li>
              <li>Share your account credentials with others</li>
              <li>Use the App to harass, abuse, or harm others</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Intellectual Property</h2>
            <p>All content, features, and functionality of Beebsi (including design, code, algorithms, and branding) are owned by Beebsi and are protected by intellectual property laws. You may not copy, modify, or distribute any part of the App without our written consent.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, Beebsi and its creators shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the App, including but not limited to damages from reliance on health data, scores, or insights provided by the App.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">9. Warranty Disclaimer</h2>
            <p>The App is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, either express or implied. We do not warrant that the App will be uninterrupted, error-free, or that health scores will be accurate in all circumstances.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">10. Account Termination</h2>
            <p>You may delete your account at any time from within the App. We reserve the right to suspend or terminate accounts that violate these terms. Upon termination, your data will be deleted in accordance with our Privacy Policy.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">11. Changes to These Terms</h2>
            <p>We may update these Terms of Service from time to time. Continued use of the App after changes constitutes acceptance of the updated terms. We will notify you of significant changes via the app or email.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">12. Governing Law</h2>
            <p>These Terms shall be governed by and construed in accordance with the laws of Poland, without regard to conflict of law provisions.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">13. Contact</h2>
            <p>If you have questions about these Terms, contact us at:</p>
            <p className="mt-2 text-cyan-400/80">support@beebsi.com</p>
          </section>

        </div>
      </div>
    </main>
  );
}
