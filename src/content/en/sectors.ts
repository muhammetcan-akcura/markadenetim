// English sectors. `pair` = Turkish slug; `services` lists ENGLISH service slugs.
// [BİLGİ GİRİLECEK] TASLAK ÇEVİRİ: yayın öncesi sorumlu YMM ve çevirmen tarafından gözden geçirilmelidir.
// Images: same as the Turkish sectors (credits in content/sectors.ts).
import type { Sector } from '../sectors';

export const sectorsEn: Sector[] = [
  {
    slug: 'export-and-foreign-trade',
    pair: 'ihracat-ve-dis-ticaret',
    num: '01',
    title: 'Export and foreign trade',
    summary: 'VAT refunds arising from the export exemption, foreign exchange differences and the documentation of foreign trade transactions.',
    image: '/img/sector-ihracat.webp',
    services: ['vat-refunds', 'certification', 'tax-advisory'],
    intro:
      'For exporters, a significant part of the tax burden is managed through refund procedures. The consistency of customs, invoice and bookkeeping records has a direct impact on cash flow.',
    topics: [
      'VAT refunds arising from the export exemption and deliveries for export',
      'Foreign exchange differences and valuation of foreign-currency transactions',
      'Closing documents under regimes such as inward processing',
      'Reconciliation of customs declarations with the books',
    ],
    support:
      'We review refund claims at the level of documents and records and conclude them with a sworn-in CPA report. We assess the tax consequences of foreign trade transactions before they take place.',
  },
  {
    slug: 'construction-and-real-estate',
    pair: 'insaat-ve-gayrimenkul',
    num: '02',
    title: 'Construction and real estate',
    summary: 'Long-term construction contracts, progress billing and withholding, refunds on residential deliveries and project-based reporting.',
    image: '/img/sector-insaat.webp',
    services: ['certification', 'audit', 'tax-advisory', 'vat-refunds'],
    intro:
      'Construction projects span several periods; matching revenue, cost and tax consequences to the right period is the central question in this sector.',
    topics: [
      'Allocation of revenue and cost to periods in long-term construction contracts',
      'VAT withholding on progress billings and the resulting refunds',
      'VAT refunds arising from rates applied to residential deliveries',
      'Taxation of land-for-flat (kat karşılığı) arrangements and land transactions',
    ],
    support:
      'We review project-level cost and revenue records and run refund and certification procedures in line with the project timeline. For companies subject to independent audit, we assess project accounting at financial statement level.',
  },
  {
    slug: 'energy',
    pair: 'enerji',
    num: '03',
    title: 'Energy',
    summary: 'Independent audit of regulated licensed companies, investment incentives and sector-specific reporting.',
    image: '/img/sector-enerji.webp',
    services: ['certification', 'audit', 'financial-advisory', 'information-systems-audit'],
    intro:
      'Licensed energy companies are subject to the reporting and audit requirements of the sector regulator as well as general legislation. Large-scale investments bring incentive and financing processes with them.',
    topics: [
      'Independent audit of companies subject to regulator legislation',
      'Use and closing of investment incentive certificates',
      'Financial reporting for project finance',
      'Information systems controls over operational systems',
    ],
    support:
      'We plan the independent audit together with the scope required by sector regulations, and address certification and reporting needs in incentive and financing processes according to the investment timeline.',
  },
  {
    slug: 'finance-and-insurance',
    pair: 'finans-ve-sigortacilik',
    num: '04',
    title: 'Finance and insurance',
    summary: 'Independent audit, information systems audit and data protection for regulated finance and insurance institutions.',
    image: '/img/sector-finans.webp',
    services: ['audit', 'tax-advisory', 'information-systems-audit', 'personal-data-protection'],
    intro:
      'Finance and insurance institutions are subject to detailed audit and reporting requirements set by their sector regulators. In these institutions, the reliability of information systems and the protection of personal data are a natural part of the audit.',
    topics: [
      'Independent audit under the regulator’s legislation',
      'Audit requirements over information systems and business processes',
      'Protection of customer data and data security measures',
      'Sector-specific tax practices',
    ],
    support:
      'We combine the independent audit of financial statements with an information systems audit and a data protection assessment. [TO BE COMPLETED] Regulator authorisations to be confirmed before publication.',
  },
  {
    slug: 'industry-and-manufacturing',
    pair: 'sanayi-ve-uretim',
    num: '05',
    title: 'Industry and manufacturing',
    summary: 'Investment incentive certificates, full certification, cost and inventory valuation, and the financial management of production investments.',
    image: '/img/sector-sanayi.webp',
    services: ['certification', 'audit', 'financial-advisory', 'vat-refunds'],
    intro:
      'For manufacturers, investment in machinery and equipment, cost accounting and inventory valuation are decisive for both tax and financial reporting.',
    topics: [
      'Use and closing of investment incentive certificates',
      'Cost accounting and inventory valuation methods',
      'VAT refunds arising from investment goods and exports',
      'Financial impact of capacity and financing decisions',
    ],
    support:
      'We combine the determination report for closing incentive certificates with full certification and refund procedures, and work with management to align cost and inventory records with the financial statements.',
  },
  {
    slug: 'technology-and-e-documents',
    pair: 'teknoloji-ve-elektronik-belge',
    num: '06',
    title: 'Technology and e-documents',
    summary: 'Information systems audit of special integrators, electronic document processes, R&D incentives and data protection compliance.',
    image: '/img/service-bilgi-sistemleri.webp',
    services: ['tax-advisory', 'information-systems-audit', 'special-integrator-audit', 'personal-data-protection'],
    intro:
      'In technology companies the business model often relies on data and information systems. For providers of electronic document services, the auditability of these systems is also a legal obligation.',
    topics: [
      'Compliance audit of special integrators under Revenue Administration regulations',
      'Controls over e-invoice, e-ledger and e-archive processes',
      'Record keeping for R&D and technology development zone incentives',
      'Processing of personal data and data security',
    ],
    support:
      'We address the information systems audit together with tax and data protection, so that technical controls and legal obligations appear in a single picture.',
  },
];
