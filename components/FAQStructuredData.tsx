import { translations } from '@/lib/translations';
import type { Locale } from '@/lib/translations';

interface FAQStructuredDataProps {
  locale: Locale;
}

/**
 * Safely serialize a value as JSON for use inside a <script> tag.
 * Escapes characters that could prematurely close the script block
 * or be misinterpreted by the HTML parser.
 */
function safeJsonLd(data: unknown): string {
  return JSON.stringify(data)
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026')
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');
}

/**
 * Server-rendered FAQ structured data (JSON-LD).
 * Crawlers see the correct locale FAQ content on first render.
 */
export default function FAQStructuredData({ locale }: FAQStructuredDataProps) {
  const faqs = translations.faq.items[locale];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }}
    />
  );
}
