export default function Privacy() {
  return (
    <section className="section">
      <div className="container prose">
        <div className="legal-meta">Last updated: August 14, 2026</div>
        <h2>Privacy Policy</h2>
        <p>
          This Privacy Policy explains how Vidzeo ("we", "us") collects, uses, and protects
          information when you use our desktop application and website. By using Vidzeo you
          agree to the practices described below.
        </p>

        <h3>1. Information We Collect</h3>
        <ul>
          <li><strong>Account data:</strong> email and subscription status when you create an account or upgrade a plan.</li>
          <li><strong>Usage data:</strong> anonymous app telemetry such as feature usage and crash reports to improve stability.</li>
          <li><strong>Content:</strong> scripts, audio, and video you create. By default this stays on your device.</li>
        </ul>

        <h3>2. How We Use Information</h3>
        <ul>
          <li>To provide, operate, and improve the Vidzeo app and services.</li>
          <li>To process payments and manage your subscription.</li>
          <li>To respond to support requests and send essential product updates.</li>
        </ul>

        <h3>3. Local-First Processing</h3>
        <p>
          Vidzeo is designed to run on your desktop. Editing, rendering, and your source
          files remain on your machine. Cloud features (such as AI voice and asset
          generation on paid plans) process only the text or audio needed to fulfill
          the request and are not stored longer than required to deliver the result.
        </p>

        <h3>4. Payments & Third Parties</h3>
        <p>
          Payments are handled by PCI-compliant processors. We do not store full card
          numbers. We may share minimal data with service providers strictly necessary to
          operate the product (payment, hosting, analytics).
        </p>

        <h3>5. Data Retention & Deletion</h3>
        <p>
          You can delete your account and associated account data at any time from the app
          or by emailing privacy@vidzeo.app. We delete or anonymize account data within 30
          days of a deletion request.
        </p>

        <h3>6. Security</h3>
        <p>
          We use industry-standard encryption in transit and at rest, and follow
          least-privilege access for internal systems. No method of transmission is 100%
          secure, but we work to protect your information.
        </p>

        <h3>7. Children's Privacy</h3>
        <p>
          Vidzeo is not directed to children under 13, and we do not knowingly collect
          their data.
        </p>

        <h3>8. Changes to This Policy</h3>
        <p>
          We may update this policy periodically. Material changes will be announced in-app
          or by email. Continued use after changes means acceptance of the updated policy.
        </p>

        <h3>9. Contact</h3>
        <p>
          Questions? Email <a href="mailto:privacy@vidzeo.app" className="gradient-text">privacy@vidzeo.app</a>.
        </p>
      </div>
    </section>
  )
}
