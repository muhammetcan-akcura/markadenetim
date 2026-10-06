// English guides: plain answers to the questions international clients ask. Two have Turkish
// counterparts (pair), one is English-only. `service` refers to ENGLISH service slugs.
// [BİLGİ GİRİLECEK] ÖRNEK İÇERİK: yayın öncesi sorumlu YMM ve çevirmen tarafından gözden geçirilmeli.
// No amounts, rates or deadlines: they change and must be checked against current legislation.
import type { Guide } from '../guides';

export const guidesEn: Guide[] = [
  {
    slug: 'full-certification',
    pair: 'tam-tasdik',
    topic: 'Certification',
    num: '01',
    title: 'Full certification in Türkiye: who needs it and how it works',
    summary:
      'What a full certification engagement with a sworn-in CPA means, when it applies, and the steps from contract to report.',
    service: 'certification',
    image: '/img/service-ymm.webp',
    body: [
      {
        type: 'p',
        text: 'Full certification (tam tasdik) is a confirmation by a sworn-in certified public accountant (YMM) that a company’s annual tax return is consistent with its statutory books and supporting documents. It is given under Law No. 3568 and places personal responsibility on the signing professional.',
      },
      { type: 'h2', id: 'who', text: 'When does it apply?' },
      {
        type: 'p',
        text: 'Legislation may make full certification mandatory for companies above certain criteria. Many other companies, including subsidiaries of international groups, choose it voluntarily to secure their bookkeeping, prepare for tax inspections and give assurance to shareholders and lenders.',
      },
      { type: 'h2', id: 'steps', text: 'The process step by step' },
      {
        type: 'list',
        items: [
          'Engagement: a full certification contract is signed with a sworn-in CPA and notified to the tax office within the required period.',
          'During the year: books and documents are reviewed and findings recorded in working papers.',
          'Year end: valuation, provisions and closing entries are reviewed with their supporting evidence.',
          'Return and report: the return is signed by the sworn-in CPA and the certification report is issued in the prescribed form.',
        ],
      },
      { type: 'h2', id: 'inspection', text: 'Does certification prevent a tax inspection?' },
      {
        type: 'p',
        text: 'No. The tax authority’s right to inspect remains. However, a period whose books have been reviewed and reported on by an independent professional puts the company in a stronger position if an inspection takes place.',
      },
    ],
  },
  {
    slug: 'vat-refunds-ymm-report',
    pair: 'kdv-raporu',
    topic: 'VAT',
    num: '02',
    title: 'VAT refunds in Türkiye: when is a YMM report required?',
    summary:
      'The routes for obtaining a VAT refund, where the sworn-in CPA report fits in, and how to prepare before filing.',
    service: 'vat-refunds',
    image: '/img/service-kdv.webp',
    body: [
      {
        type: 'p',
        text: 'A VAT refund is the repayment, or offset against other tax liabilities, of VAT arising from transactions that give a refund right, such as exports. Turkish legislation provides different routes depending on the type and amount of the refund.',
      },
      { type: 'h2', id: 'routes', text: 'How can a refund be obtained?' },
      {
        type: 'list',
        items: [
          'With a VAT refund certification report issued by a sworn-in CPA',
          'Based on the result of a tax inspection report',
          'Against a guarantee',
          'Within limits set by legislation, without a report',
        ],
      },
      {
        type: 'p',
        text: 'Which route applies depends on the refund type, the amount claimed and the taxpayer’s situation. Since these limits are updated periodically, current legislation should be checked before filing.',
      },
      { type: 'h2', id: 'preparation', text: 'Preparing before the report' },
      {
        type: 'list',
        items: [
          'Reconciling refund listings with the books',
          'Customs and invoice documents for exempt deliveries',
          'Access to original purchase documents for input VAT',
          'Checks on suppliers involved in the claim',
        ],
      },
    ],
  },
  {
    slug: 'first-year-tax-obligations-turkish-subsidiary',
    topic: 'Tax',
    num: '03',
    title: 'First-year tax obligations of a Turkish subsidiary: a checklist',
    summary:
      'The recurring filings, bookkeeping and reporting obligations a newly established company in Türkiye should plan for from the start.',
    service: 'tax-advisory',
    image: '/img/service-vergi-defter.webp',
    body: [
      {
        type: 'p',
        text: 'A newly established company in Türkiye takes on recurring obligations from its first month. Planning them early, together with the group’s reporting calendar, avoids penalties and last-minute work.',
      },
      { type: 'h2', id: 'monthly', text: 'Monthly filings' },
      {
        type: 'p',
        text: 'VAT returns, the combined withholding tax and social security premium return, and stamp duty returns are filed monthly. Our tax calendar lists the current month’s deadlines.',
      },
      { type: 'h2', id: 'periodic', text: 'Quarterly and annual filings' },
      {
        type: 'list',
        items: [
          'Advance (provisional) corporate tax returns during the year',
          'The annual corporate income tax return',
          'Transfer pricing documentation for transactions with related parties',
        ],
      },
      { type: 'h2', id: 'books', text: 'Bookkeeping and e-documents' },
      {
        type: 'p',
        text: 'Statutory books are kept in Turkish, under the Turkish framework, and largely in electronic form (e-ledger, e-invoice, e-archive). Groups that report under another framework need a reconciliation between the local books and the group package.',
      },
      { type: 'h2', id: 'assurance', text: 'Assurance from the start' },
      {
        type: 'p',
        text: 'Some companies choose full certification or an audit from their first year, even when not required, to give the parent company and lenders independent assurance on the local books.',
      },
    ],
  },
];
