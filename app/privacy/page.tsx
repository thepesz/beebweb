import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Beebsi",
  description: "Beebsi Privacy Policy. How we handle your health data, what we collect, and your rights.",
};

export default function PrivacyPolicy() {
  return (
    <main className="bg-black min-h-screen">
      <div className="max-w-3xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <a href="/" className="text-cyan-400/60 hover:text-cyan-400 text-sm transition-colors duration-200 mb-8 inline-block">&larr; Back to Beebsi</a>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Privacy Policy</h1>
        <p className="text-white/40 text-sm mb-12">Last updated: June 12, 2026</p>

        <div className="space-y-8 text-white/70 text-[15px] leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Introduction</h2>
            <p>Beebsi (&quot;we&quot;, &quot;our&quot;, &quot;the App&quot;) is a health and wellness iOS application that reads data from Apple Health to compute Recovery, Sleep, and Strain scores. We are committed to protecting your privacy and handling your data responsibly.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Data We Collect</h2>
            <h3 className="text-white/90 font-medium mb-2">Health Data (via Apple Health)</h3>
            <p className="mb-3">With your explicit permission, we read the following from Apple HealthKit:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Heart rate and heart rate variability (HRV)</li>
              <li>Resting heart rate</li>
              <li>Sleep analysis (stages, duration)</li>
              <li>Respiratory rate</li>
              <li>Blood oxygen saturation (SpO2)</li>
              <li>Wrist temperature</li>
              <li>Step count and active energy</li>
              <li>Workouts and exercise minutes</li>
              <li>Body mass</li>
            </ul>

            <h3 className="text-white/90 font-medium mt-4 mb-2">Account Data</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Email address (for authentication)</li>
              <li>Display name (optional, from Apple Sign-In)</li>
              <li>Firebase User ID (anonymous identifier)</li>
            </ul>

            <h3 className="text-white/90 font-medium mt-4 mb-2">Technical Data</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Crash reports (via Firebase Crashlytics, anonymized)</li>
              <li>Basic usage analytics (app opens, feature usage)</li>
              <li>Subscription status</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. How We Use Your Data</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong className="text-white/90">Health scores:</strong> All health data processing (Recovery, Sleep, Strain scores) happens <strong className="text-white/90">entirely on your device</strong>. Raw health data never leaves your iPhone.</li>
              <li><strong className="text-white/90">AI Coach:</strong> When you use the AI coaching feature, only anonymized, aggregated scores (not raw health data) are sent to our servers for generating personalized insights.</li>
              <li><strong className="text-white/90">Family sharing:</strong> If you opt into Family Circle, only computed scores (not raw data) are shared with family members you explicitly invite.</li>
              <li><strong className="text-white/90">Crash reports:</strong> Help us fix bugs and improve stability. No health data is included.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Data Storage</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong className="text-white/90">On-device:</strong> Health data and computed scores are stored locally in encrypted CoreData storage on your device.</li>
              <li><strong className="text-white/90">Cloud:</strong> Authentication data is stored in Firebase Authentication. Family sharing data is stored in Firebase Firestore with strict security rules (deny-by-default).</li>
              <li><strong className="text-white/90">No third-party sale:</strong> We never sell, rent, or share your personal or health data with third parties for advertising or marketing purposes.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Third-Party Services</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong className="text-white/90">Firebase</strong> (Google) — Authentication, Crashlytics, Analytics, Cloud Functions</li>
              <li><strong className="text-white/90">RevenueCat</strong> — Subscription management (receives only subscription status, not health data)</li>
              <li><strong className="text-white/90">Apple HealthKit</strong> — Health data source (data stays on device per Apple&apos;s HealthKit guidelines)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Your Rights</h2>
            <p className="mb-3">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong className="text-white/90">Revoke HealthKit access</strong> at any time via iOS Settings &gt; Privacy &gt; Health</li>
              <li><strong className="text-white/90">Delete your account</strong> and all associated data directly in the app (More &gt; Account Settings &gt; Delete Account)</li>
              <li><strong className="text-white/90">Export your data</strong> — health data remains in Apple Health even after deleting Beebsi</li>
              <li><strong className="text-white/90">Opt out of analytics</strong> — you can disable analytics in app settings</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Data Retention</h2>
            <p>When you delete your account, we permanently delete all your data from our servers within 30 days. On-device data is deleted immediately. Crash logs are automatically purged after 90 days.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. Children&apos;s Privacy</h2>
            <p>Beebsi is not intended for children under 13. We do not knowingly collect data from children under 13. If you believe a child has provided us with personal data, please contact us.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">9. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of significant changes via the app or email. Continued use of the app after changes constitutes acceptance of the updated policy.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">10. Contact</h2>
            <p>If you have questions about this Privacy Policy or your data, contact us at:</p>
            <p className="mt-2 text-cyan-400/80">support@beebsi.com</p>
          </section>

        </div>
      </div>
    </main>
  );
}
