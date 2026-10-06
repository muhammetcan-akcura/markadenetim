// English services. Same shape as content/services.ts; `pair` holds the Turkish slug so the
// language switcher and hreflang can match counterparts.
// [BİLGİ GİRİLECEK] TASLAK ÇEVİRİ: yayın öncesi sorumlu YMM ve profesyonel bir çevirmen tarafından
// gözden geçirilmelidir. Türkçe metindeki gibi oran, süre, tutar ve sonuç vaadi içermez.
//
// Terminology (used consistently across the English site):
//   Yeminli Mali Müşavir (YMM)  → Sworn-in Certified Public Accountant (YMM)
//   tam tasdik                  → full certification
//   KDV iadesi                  → VAT refund
//   vergi incelemesi            → tax inspection
//   uzlaşma                     → settlement (uzlaşma) procedure
//   yatırım teşvik belgesi      → investment incentive certificate
//   özel entegratör             → special integrator (licensed e-document service provider)
//   KGK                         → Public Oversight, Accounting and Auditing Standards Authority (KGK)
//   GİB                         → Revenue Administration (GİB)
//   KVKK                        → Personal Data Protection Law No. 6698 (KVKK)
import type { Service } from '../services';

export const servicesEn: Service[] = [
  {
    slug: 'certification',
    pair: 'yeminli-mali-musavirlik',
    num: '01',
    group: 'temel',
    short: 'YMM & certification',
    title: 'Sworn-in CPA Services',
    metaTitle: 'Sworn-in CPA (YMM) Services and Full Certification',
    summary:
      'Full certification, VAT refund certification and special-purpose reports, each based on a documented review process.',
    lead: 'Certification is a written confirmation that every declared amount is supported by evidence. We take on this responsibility through a review process whose scope is defined at the outset.',
    image: '/img/service-ymm.webp',
    scopeHeading: 'Before a signature, certification is a rigorous review.',
    scope: [
      {
        title: 'Full certification',
        text: 'We review the consistency of the corporate tax return with the statutory books and records and document the results in a certification report.',
      },
      {
        title: 'VAT refund certification',
        text: 'We examine the transactions underlying a refund claim against documentary, bookkeeping and legal requirements and prepare the report for submission to the tax office.',
      },
      {
        title: 'Investment incentive certificate closing',
        text: 'We review the expenditure and records of investments made under an incentive certificate and prepare the report supporting its closing.',
      },
      {
        title: 'Special-purpose certification and reports',
        text: 'For other transactions where legislation requires certification by a sworn-in CPA, we agree the scope in writing before work begins.',
      },
    ],
    process: [
      {
        title: 'Initial meeting',
        text: 'We clarify the subject, the period and the legislation behind the certification. The list of required documents is shared at this stage.',
      },
      {
        title: 'Review of books and records',
        text: 'We compare the books, supporting documents and returns. Every finding is recorded in the working papers together with its evidence.',
      },
      {
        title: 'Sharing findings',
        text: 'We discuss our findings openly with management before the report is issued. Matters requiring correction are set out in writing with their reasons.',
      },
      {
        title: 'Report and certification',
        text: 'The report is issued in the form and content required by legislation. After delivery, we follow up on any questions raised by the authorities.',
      },
    ],
    deliverables: [
      { title: 'Certification report', text: 'Signed and supported, in the form required by legislation.' },
      { title: 'Findings letter', text: 'Findings and recommendations, issued to management before the report.' },
      { title: 'Working file', text: 'A traceable record of the review, retained for the statutory period.' },
    ],
    closing: 'Let us review the matter that requires certification together.',
    basis:
      'Law No. 3568 on Independent Accountants, Financial Advisors and Sworn-in Certified Public Accountants, and the certification regulations based on it.',
  },
  {
    slug: 'audit',
    pair: 'denetim',
    num: '02',
    group: 'temel',
    short: 'Independent audit',
    title: 'Audit',
    metaTitle: 'Independent Audit and Limited Review',
    summary: 'Independent audit services that support the accuracy, transparency and reliability of your financial statements.',
    lead: 'An independent audit provides reasonable assurance as to whether financial statements are fairly presented in all material respects. We form this opinion without compromising our independence.',
    image: '/img/service-denetim-beton.webp',
    scopeHeading: 'The value of an opinion lies in how clearly it was reached.',
    scope: [
      {
        title: 'Audit of financial statements',
        text: 'We audit annual financial statements in accordance with independent auditing standards and present our opinion in the auditor’s report.',
      },
      {
        title: 'Limited review',
        text: 'We review interim financial information within the limited assurance framework set out in the standards.',
      },
      {
        title: 'Special-purpose audit',
        text: 'We carry out audits with a predefined scope for a specific account, contract or regulatory filing.',
      },
      {
        title: 'Agreed-upon procedures',
        text: 'We perform the procedures agreed by the parties and report the findings without interpretation.',
      },
    ],
    process: [
      {
        title: 'Acceptance and independence',
        text: 'Before accepting an engagement we complete our independence and ethics assessment. Scope and responsibilities are set out in a written engagement letter.',
      },
      {
        title: 'Planning and risk',
        text: 'We obtain an understanding of the entity, its internal control and the risks of material misstatement, and shape our audit approach accordingly.',
      },
      {
        title: 'Fieldwork',
        text: 'We test controls and account balances using the planned procedures. Every finding is documented with its evidence.',
      },
      {
        title: 'Opinion and reporting',
        text: 'We evaluate the evidence as a whole and form our opinion. Observations on internal control are communicated to management separately.',
      },
    ],
    deliverables: [
      { title: 'Independent auditor’s report', text: 'Including our opinion on the financial statements.' },
      { title: 'Management letter', text: 'Observations and recommendations on internal control and processes.' },
      { title: 'Communication with those charged with governance', text: 'In writing, on the matters required by the standards.' },
    ],
    closing: 'Let us define the scope of your audit together.',
    basis:
      'Independent audit provisions under Turkish Commercial Code No. 6102 and Decree-Law No. 660. [TO BE COMPLETED] Authorisations (KGK, Capital Markets Board, Banking Regulation and Supervision Agency, Energy Market Regulatory Authority, insurance) to be verified against the firm’s licences before publication.',
  },
  {
    slug: 'tax-advisory',
    pair: 'vergi-danismanligi',
    num: '03',
    group: 'temel',
    short: 'Tax',
    title: 'Tax Advisory',
    metaTitle: 'Tax Advisory and Transfer Pricing in Türkiye',
    summary: 'Tax planning, support during tax inspections and dispute procedures, tailored to your business.',
    lead: 'Tax decisions cost least when they are made at the first step of a transaction. We read the legislation through your business’s transactions and present the options with their reasoning.',
    image: '/img/service-vergi-defter.webp',
    scopeHeading: 'The right question is usually asked before the tax return.',
    scope: [
      {
        title: 'Tax planning',
        text: 'We assess the tax consequences of investments, restructurings and major transactions before they take place.',
      },
      {
        title: 'Support during tax inspections',
        text: 'We work with you on document preparation, correspondence with the tax authority and assessments before the inspection minutes are signed.',
      },
      {
        title: 'Settlement and dispute procedures',
        text: 'We evaluate the options available after a tax assessment on their legal merits and prepare for settlement (uzlaşma) meetings.',
      },
      {
        title: 'Transfer pricing',
        text: 'We analyse whether transactions with related parties are at arm’s length and prepare the annual documentation.',
      },
      {
        title: 'Regulatory impact analysis',
        text: 'We report the concrete impact of new legislation on your business, together with practical next steps.',
      },
    ],
    process: [
      {
        title: 'Question and context',
        text: 'We define the matter, the economic substance of the transaction and the timeline together, and agree the question in writing.',
      },
      {
        title: 'Legislation and case law',
        text: 'We review the relevant legislation, rulings of the tax authority and court decisions, and clearly flag areas of uncertainty.',
      },
      {
        title: 'Comparing the options',
        text: 'We set out the available options side by side with their risks and costs, in plain language suited to decision-making.',
      },
      {
        title: 'Implementation and monitoring',
        text: 'We support the bookkeeping and filing steps of the chosen course, and update our assessment if the legislation changes.',
      },
    ],
    deliverables: [
      { title: 'Written opinion', text: 'Setting out the question, the legal basis, the options and our recommendation.' },
      { title: 'Risk memo', text: 'Areas of uncertainty and their possible consequences, in plain language.' },
      { title: 'Implementation timeline', text: 'Bookkeeping and filing steps with responsibilities.' },
    ],
    closing: 'Let us address your tax matter at the decision stage.',
    basis:
      'Tax Procedure Law No. 213 and the related tax laws, together with the professional authority granted under Law No. 3568.',
  },
  {
    slug: 'financial-advisory',
    pair: 'finansal-danismanlik',
    num: '04',
    group: 'temel',
    short: 'Financial advisory',
    title: 'Financial Advisory',
    metaTitle: 'Financial Advisory and Corporate Finance',
    summary:
      'Corporate finance, financial restructuring and management reporting. We build the information that clarifies decisions together with management.',
    lead: 'Management decisions become clear with reliable, timely financial information. We work with management to build and interpret that information.',
    image: '/img/service-finansal.webp',
    scopeHeading: 'A clear set of figures makes for a clear decision.',
    scope: [
      {
        title: 'Financial restructuring',
        text: 'We assess the capital structure, debt profile and cash flows together and analyse restructuring options.',
      },
      {
        title: 'Corporate finance',
        text: 'We support management with financial analysis and transaction preparation in mergers, acquisitions, debt and equity financing.',
      },
      {
        title: 'Financial due diligence',
        text: 'Before a transaction, we review the target company’s financial position, quality of earnings and potential liabilities.',
      },
      {
        title: 'Budgeting and management reporting',
        text: 'We set up the reporting structure, indicators and calendar management needs in order to make decisions.',
      },
      {
        title: 'Transition to international reporting standards',
        text: 'For transitions to TFRS/IFRS and similar frameworks, we prepare accounting policies, opening balances and the note structure together.',
      },
    ],
    process: [
      {
        title: 'The decision question',
        text: 'We define the decision management has to take and the information it requires. Scope and timeline follow from this question.',
      },
      {
        title: 'Data and analysis',
        text: 'We verify financial data at source and build the analysis on verified data. Assumptions are stated separately and explicitly.',
      },
      {
        title: 'Scenarios',
        text: 'We present the financial outcomes of different options in a comparable way, including sensitivities.',
      },
      {
        title: 'Decision and implementation',
        text: 'We share the findings in a report suitable for the board, and support the implementation of the decision as needed.',
      },
    ],
    deliverables: [
      { title: 'Analysis report', text: 'With findings, assumptions and scenarios.' },
      { title: 'Management presentation', text: 'A concise version for the decision-making body.' },
      { title: 'Reporting framework', text: 'Where one is set up, with templates and calendar.' },
    ],
    closing: 'Let us assess the financial decision ahead of you together.',
    basis: 'Professional authority under Law No. 3568, the provisions of Turkish Commercial Code No. 6102 and professional ethics rules.',
  },
  {
    slug: 'vat-refunds',
    pair: 'kdv-iadesi',
    num: '05',
    group: 'uzman',
    short: 'VAT refunds',
    title: 'VAT Refunds',
    metaTitle: 'VAT Refund Certification in Türkiye',
    summary:
      'Review of transactions giving rise to a refund right, preparation of the certification report and follow-up of the procedure.',
    lead: 'A VAT refund depends on demonstrating the refund right fully with documents. We review the claim at the level of books and records before it is submitted to the tax authority.',
    image: '/img/service-kdv.webp',
    scopeHeading: 'A refund is the right of a claim whose evidence is complete.',
    scope: [
      {
        title: 'Exports and deliveries for export',
        text: 'We compare customs, invoice and bookkeeping records for exempt deliveries with the refund claim.',
      },
      {
        title: 'Transactions at reduced rates',
        text: 'We document the refund arising from deliveries at reduced VAT rates, distinguishing input and output tax.',
      },
      {
        title: 'Transactions subject to withholding',
        text: 'For transactions under partial VAT withholding, we verify the basis of the refund right and the calculation against the records.',
      },
      {
        title: 'Pre-submission review',
        text: 'Before the claim is filed, we identify missing documents, inconsistencies and calculation differences and recommend corrections in writing.',
      },
    ],
    process: [
      {
        title: 'Refund type and period',
        text: 'We determine the type of transaction behind the refund and the periods covered. The list of required documents is shared at this stage.',
      },
      {
        title: 'Review of input VAT',
        text: 'We match the input VAT subject to the refund with purchase documents and records, recording every finding in the working papers.',
      },
      {
        title: 'Sharing findings',
        text: 'Before the report, we share gaps and differences openly with management and set out correctable matters with their reasons.',
      },
      {
        title: 'Report and follow-up',
        text: 'We issue the certification report in the form required by legislation and follow any additional information requests from the tax office.',
      },
    ],
    deliverables: [
      { title: 'VAT refund certification report', text: 'Signed and supported, in the form required by legislation.' },
      { title: 'Pre-review memo', text: 'Gaps identified before the claim, with recommendations.' },
      { title: 'Working file', text: 'A traceable record of the review, retained for the statutory period.' },
    ],
    closing: 'Let us review your VAT refund claim together.',
    basis:
      'Value Added Tax Law No. 3065, the related implementation communiqués and the certification authority under Law No. 3568.',
  },
  {
    slug: 'information-systems-audit',
    pair: 'bilgi-sistemleri-denetimi',
    num: '06',
    group: 'uzman',
    short: 'IS audit',
    title: 'Information Systems Audit',
    metaTitle: 'Information Systems Audit',
    summary: 'An independent assessment of business applications, IT infrastructure and process controls.',
    lead: 'Financial information is only as reliable as the systems that produce it. We independently assess controls in information systems from the perspective of financial reporting and regulatory requirements.',
    image: '/img/service-bilgi-sistemleri.webp',
    scopeHeading: 'The reliability of a figure begins with the system that produces it.',
    scope: [
      {
        title: 'IT general controls',
        text: 'We test the design and operation of controls over access, change management, backup and IT operations.',
      },
      {
        title: 'Application controls',
        text: 'We assess automated controls over data entry, processing and reporting in accounting and operational applications.',
      },
      {
        title: 'Regulatory requirements',
        text: 'For entities subject to regulations requiring an information systems audit, we cover the control areas those regulations specify.',
      },
      {
        title: 'Information security assessment',
        text: 'We review information security policies, roles and access rights, and incident management in the context of the organisation.',
      },
    ],
    process: [
      {
        title: 'Scope and system inventory',
        text: 'We identify the systems, applications and processes in scope and define the scope and framework in writing.',
      },
      {
        title: 'Risk and control mapping',
        text: 'We map the risks of each process to the controls that address them, and build the test plan on this mapping.',
      },
      {
        title: 'Control testing',
        text: 'We test the design and operating effectiveness of controls over the period using sampling, documenting every finding with evidence.',
      },
      {
        title: 'Reporting',
        text: 'We report findings with their significance and recommendations, in a form management can track through an action plan.',
      },
    ],
    deliverables: [
      { title: 'Information systems audit report', text: 'Covering scope, approach, findings and opinion.' },
      { title: 'Findings and recommendations', text: 'Ranked by significance, with owners.' },
      { title: 'Control matrix', text: 'Risk and control mapping, maintainable in future periods.' },
    ],
    closing: 'Let us define the scope of your information systems audit together.',
    basis:
      'Independent auditing standards and the regulations of the authority supervising the audited entity. [TO BE COMPLETED] Authorisation by regulator to be verified before publication.',
  },
  {
    slug: 'special-integrator-audit',
    pair: 'ozel-entegrator-bilgi-sistemleri-denetimi',
    num: '07',
    group: 'uzman',
    short: 'Special integrator',
    title: 'Special Integrator Information Systems Audit',
    metaTitle: 'Special Integrator Information Systems Audit',
    summary:
      'Audit of the information systems of licensed e-document service providers, or applicants, against Revenue Administration (GİB) regulations.',
    lead: 'Special integrators are required to operate electronic document processes securely and in line with the authority’s requirements. We independently audit whether their information systems meet this obligation.',
    image: '/img/service-ozel-entegrator.webp',
    scopeHeading: 'The assurance of an electronic document is the auditability of its system.',
    scope: [
      {
        title: 'Pre-application audit',
        text: 'For organisations applying for a special integrator licence, we assess their information systems against the authority’s requirements before the application.',
      },
      {
        title: 'Periodic compliance audit',
        text: 'For licensed providers, we carry out the periodic information systems audit required by the regulations, in line with its scope and reporting requirements.',
      },
      {
        title: 'Security and continuity controls',
        text: 'We test the design and operation of controls over data security, retention, backup and business continuity.',
      },
      {
        title: 'Follow-up of remediation',
        text: 'We track the remediation of identified gaps through management’s action plan and document the outcome.',
      },
    ],
    process: [
      {
        title: 'Scope and regulation',
        text: 'We clarify the type of audit and the regulation it relies on, and share the list of required documents and access.',
      },
      {
        title: 'System and process review',
        text: 'We review electronic document processes end to end and identify the relevant controls across infrastructure and application layers.',
      },
      {
        title: 'Control testing',
        text: 'We test the operation of controls on an evidence basis and document each finding with its significance.',
      },
      {
        title: 'Report',
        text: 'The report follows the form and content required by the authority. Findings are shared with management before the report is issued.',
      },
    ],
    deliverables: [
      { title: 'Information systems audit report', text: 'In the form required by the authority, with scope and opinion.' },
      { title: 'Findings and recommendations', text: 'Ranked by significance, with owners.' },
      { title: 'Working file', text: 'A traceable record of tests and evidence.' },
    ],
    closing: 'Let us plan your special integrator audit together.',
    basis:
      'Tax Procedure Law No. 213 and the Revenue Administration’s regulations on special integrator licences and electronic documents.',
  },
  {
    slug: 'personal-data-protection',
    pair: 'kvkk-uyum',
    num: '08',
    group: 'uzman',
    short: 'Data protection',
    title: 'Personal Data Protection (KVKK)',
    metaTitle: 'KVKK Compliance in Türkiye',
    summary:
      'Review of personal data processing under Law No. 6698 (KVKK), preparation of compliance documents and assessment of safeguards.',
    lead: 'Personal data is one of a business’s quietest obligations. We review your data processing against the principles of the Law and build compliance through documentation.',
    image: '/img/service-kvkk.webp',
    scopeHeading: 'Compliance begins with knowing where the data is.',
    scope: [
      {
        title: 'Data inventory and processing map',
        text: 'Together with each department, we record which personal data is processed, for what purpose, in which process and for how long.',
      },
      {
        title: 'Privacy notices and consent',
        text: 'We prepare privacy notices and, where required, explicit consent texts consistent with the processing purposes.',
      },
      {
        title: 'VERBİS registration',
        text: 'We assess the registration obligation and prepare the Data Controllers’ Registry (VERBİS) filing for obliged organisations.',
      },
      {
        title: 'Technical and organisational measures',
        text: 'We assess access rights, retention and destruction processes and data security measures in line with the Board’s guidelines.',
      },
    ],
    process: [
      {
        title: 'Current state',
        text: 'We identify the departments and processes that handle personal data and agree the interview schedule and document list.',
      },
      {
        title: 'Inventory and analysis',
        text: 'We record processing activities in the inventory and map them to legal bases and retention periods, noting gaps separately.',
      },
      {
        title: 'Compliance documents',
        text: 'We prepare privacy notices, policies and procedures suited to the organisation and test their practicality with each department.',
      },
      {
        title: 'Implementation and review',
        text: 'We monitor the implementation of measures, report progress to management and plan updates to the inventory as processes change.',
      },
    ],
    deliverables: [
      { title: 'Personal data inventory', text: 'With processes, purposes, legal bases and retention periods.' },
      { title: 'Compliance documents', text: 'Privacy notices, policies and procedures.' },
      { title: 'Status report', text: 'Findings and priority actions, in writing for management.' },
    ],
    closing: 'Let us review your personal data processes together.',
    basis: 'Personal Data Protection Law No. 6698, secondary legislation and decisions of the Personal Data Protection Board.',
  },
];
