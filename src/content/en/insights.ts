// English insights. Written for the English-speaking reader (foreign shareholders, finance teams
// of international groups); not translations of the Turkish articles. Only the VAT article has a
// Turkish counterpart (pair: 'kdv-belge').
// [BİLGİ GİRİLECEK] ÖRNEK İÇERİK: yayın öncesi sorumlu YMM ve çevirmen tarafından gözden geçirilmeli.
// Like the Turkish articles: no rates, amounts, deadlines or article numbers that need verification.
import type { Article } from '../insights';

export const articlesEn: Article[] = [
  {
    slug: 'transfer-pricing-documentation-turkish-subsidiaries',
    category: 'Tax',
    title: 'Transfer pricing documentation for foreign-owned subsidiaries in Türkiye',
    excerpt:
      'Intra-group transactions are where Turkish subsidiaries of international groups most often face questions. Documentation prepared during the year makes the difference.',
    date: '2 October 2026',
    image: '/img/insight-transfer.webp',
    body: [
      {
        type: 'p',
        text: 'For a Turkish subsidiary of an international group, transactions with the parent company and sister entities are part of daily business: purchases, management fees, licences, financing. Each of these is assessed under the arm’s length principle, and each needs to be documented in a way that a Turkish tax inspector can follow.',
      },
      { type: 'h2', id: 'group-policy', text: 'A group policy is not local documentation' },
      {
        type: 'p',
        text: 'Many groups have a global transfer pricing policy and a master file. These are valuable, but they do not replace the local documentation expected in Türkiye. The local file has to explain the Turkish entity’s own functions, risks and transactions, and connect them to its statutory books.',
      },
      { type: 'h2', id: 'common-gaps', text: 'Where gaps usually appear' },
      {
        type: 'list',
        items: [
          'Management and service fees without evidence of the services actually received',
          'Intra-group financing whose terms are not compared with market conditions',
          'Differences between invoiced amounts and the amounts used in the transfer pricing analysis',
          'Agreements signed at group level but not reflected in the Turkish entity’s records',
        ],
      },
      { type: 'h2', id: 'during-the-year', text: 'Working during the year, not at year end' },
      {
        type: 'p',
        text: 'Most of the information the documentation relies on can be collected as transactions take place. A subsidiary that keeps its agreements, invoices and service evidence together during the year turns the annual report into an update rather than a reconstruction.',
      },
    ],
  },
  {
    slug: 'statutory-audit-turkey-foreign-shareholders',
    category: 'Audit',
    title: 'Statutory audit in Türkiye: what foreign shareholders should know',
    excerpt:
      'Whether a Turkish subsidiary must be audited depends on size criteria set by presidential decree, and on its sector. Here is how the assessment works.',
    date: '25 September 2026',
    image: '/img/insight-sinirli.webp',
    body: [
      {
        type: 'p',
        text: 'Under the Turkish Commercial Code, companies that exceed certain size criteria are subject to independent audit. For foreign shareholders, the question is usually twofold: does the Turkish subsidiary fall within scope, and how does the local audit relate to the group audit?',
      },
      { type: 'h2', id: 'scope', text: 'How the scope is determined' },
      {
        type: 'p',
        text: 'The criteria refer to total assets, net sales and number of employees, and their thresholds are set by presidential decree and may change over time. Companies in certain regulated sectors are subject to audit regardless of size. The assessment therefore has to be made against the criteria in force for the relevant period.',
      },
      { type: 'h2', id: 'group-audit', text: 'Local audit and group reporting' },
      {
        type: 'p',
        text: 'The statutory audit in Türkiye is performed on the financial statements prepared under the Turkish framework. Group reporting packages prepared under other frameworks may follow a different timetable and materiality. Planning both together avoids duplicated work and conflicting requests to the local finance team.',
      },
      { type: 'h2', id: 'practical', text: 'Practical points for the first audit' },
      {
        type: 'list',
        items: [
          'Appointment of the auditor by the general assembly and registration',
          'Agreeing the audit timetable with the group reporting calendar',
          'Review of opening balances when the company is audited for the first time',
        ],
      },
    ],
  },
  {
    slug: 'vat-refunds-exporters-documentation',
    pair: 'kdv-belge',
    category: 'Tax',
    title: 'VAT refunds for exporters: why documentation decides the timeline',
    excerpt:
      'How quickly a VAT refund is concluded in Türkiye usually depends less on the claim itself than on the documents behind it.',
    date: '18 August 2026',
    image: '/img/insight-kdv.webp',
    body: [
      {
        type: 'p',
        text: 'For exporters operating in Türkiye, VAT refunds have a direct effect on cash flow. Whether a claim is concluded smoothly depends largely on the documentation prepared before it is filed.',
      },
      { type: 'h2', id: 'evidence', text: 'Evidencing the transaction behind the refund' },
      {
        type: 'p',
        text: 'Customs declarations, invoices and bookkeeping records need to tell the same story. Differences between them are among the most common reasons for additional requests from the tax office.',
      },
      { type: 'h2', id: 'input-vat', text: 'Input VAT and supplier checks' },
      {
        type: 'p',
        text: 'The input VAT included in the claim is matched with purchase documents, and the suppliers involved are reviewed. Keeping these lists reconciled throughout the year avoids a last-minute review at the time of the claim.',
      },
      { type: 'h2', id: 'report', text: 'The role of the sworn-in CPA report' },
      {
        type: 'p',
        text: 'A refund can be concluded with a sworn-in CPA (YMM) report, which sets out the transactions, input VAT and controls in detail. The better prepared the documentation, the shorter the reporting process.',
      },
    ],
  },
];
