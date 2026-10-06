// English legal pages: privacy notice (KVKK), privacy policy, cookie policy.
// Faithful translation of content/legal.ts; describes the same real data flows (contact form,
// direct channels, hosting server logs, consent-based Google Maps embed). No analytics/ads cookies.
// [BİLGİ GİRİLECEK] TASLAK ÇEVİRİ: yayın öncesi hukuk danışmanı tarafından onaylanmalıdır.
// Each page states that the Turkish version prevails in case of discrepancy.
import { legalName } from '@/lib/site';
import { tr } from '@/content/tr';
import type { LegalDoc } from '../legal';

const [hq, mardin] = tr.footer.offices;
const email = hq.email;

const controller = [
  `${legalName} (the “Company”)`,
  `Istanbul Head Office: ${hq.address}`,
  `Mardin Office: ${mardin.address}`,
  `Email: ${email}`,
];

const updated = '5 October 2026';
const prevails = 'This is an English translation provided for information. In case of any discrepancy, the Turkish version prevails.';

export const legalEn: Record<'kvkk' | 'gizlilik' | 'cerez', LegalDoc> = {
  kvkk: {
    updated,
    intro: `This privacy notice has been prepared by ${legalName}, as data controller, pursuant to Article 10 of Personal Data Protection Law No. 6698 (“KVKK”), regarding the processing of personal data obtained through our website and direct communication channels. ${prevails}`,
    sections: [
      {
        heading: 'Data controller',
        body: ['The data controller under KVKK is our Company, whose details are set out below:', controller],
      },
      {
        heading: 'Personal data processed',
        body: [
          'Only the following data is processed through our website:',
          [
            'Identity and contact data: name and surname, email address, company name if provided',
            'Request data: the subject you select and the content of your message',
            'Transaction security data: IP address, browser type, date and time of access (server logs of the hosting infrastructure)',
          ],
          'When you contact us directly by phone, email or WhatsApp, the information you share for that purpose is also processed. Please do not include special categories of personal data (such as health or beliefs) in your messages unless necessary.',
        ],
      },
      {
        heading: 'Method of collection',
        body: [
          'Your personal data is collected electronically, through the contact form on our website, email, telephone and messaging channels, when you provide it to us, and through server logs generated automatically while the website operates.',
        ],
      },
      {
        heading: 'Purposes and legal grounds',
        body: [
          'Your personal data is processed for the following purposes and on the legal grounds listed in Article 5 of KVKK:',
          [
            'Receiving, assessing and responding to your meeting or information request: processing being directly related to the conclusion of a contract (Art. 5/2-c) and legitimate interest, provided that it does not harm your fundamental rights and freedoms (Art. 5/2-f)',
            'Ensuring the security of the website and preventing misuse: legitimate interest (Art. 5/2-f)',
            'Fulfilling retention, notification and disclosure obligations arising from legislation: being expressly provided for by law and compliance with a legal obligation (Art. 5/2-a, Art. 5/2-ç)',
            'Establishing, exercising or protecting a right: Art. 5/2-e',
          ],
        ],
      },
      {
        heading: 'Transfers',
        body: [
          'Your personal data is not sold or shared with third parties for marketing purposes. It may be transferred only to the following recipients, limited to the purposes above:',
          [
            'The provider of our website hosting, infrastructure and contact form service (Netlify, Inc., United States of America); form messages are stored on this provider’s systems',
            'The email service provider used to notify us of form messages',
            'Competent public authorities and judicial bodies, upon request',
          ],
          'Transfers that take place because service providers’ servers are located abroad are carried out in accordance with the procedures and safeguards set out in Article 9 of KVKK.',
        ],
      },
      {
        heading: 'Retention period',
        body: [
          'Your personal data is retained for the period required by the purpose of processing and for the retention periods set out in the relevant legislation, after which it is deleted, destroyed or anonymised. If your request becomes a service relationship, your data is retained for the periods prescribed by the legislation applicable to that relationship.',
        ],
      },
      {
        heading: 'Your rights',
        body: [
          'Under Article 11 of KVKK, you may apply to our Company to:',
          [
            'Learn whether your personal data is processed',
            'Request information if it has been processed',
            'Learn the purpose of processing and whether it is used in line with that purpose',
            'Know the third parties to whom it is transferred in Türkiye or abroad',
            'Request correction if it is incomplete or inaccurate',
            'Request deletion or destruction under the conditions of Article 7 of KVKK',
            'Request that correction, deletion and destruction be notified to third parties to whom the data was transferred',
            'Object to a result against you arising exclusively from analysis by automated systems',
            'Claim compensation for damage arising from unlawful processing',
          ],
        ],
      },
      {
        heading: 'How to apply',
        body: [
          'In accordance with the Communiqué on the Procedures and Principles of Application to the Data Controller, you may send your requests in writing to our Istanbul Head Office together with information identifying you, or to ' +
            email +
            ' using a secure electronic signature, mobile signature or the email address registered in our systems.',
          'Your application will be concluded free of charge as soon as possible and within thirty days at the latest, depending on the nature of the request. If the process requires an additional cost, the fee set by the Personal Data Protection Board may be charged.',
        ],
      },
    ],
  },

  gizlilik: {
    updated,
    intro: `This policy explains what information is processed when you visit the ${legalName} website and how it is protected. Detailed information on the processing of personal data is provided in the KVKK Privacy Notice. ${prevails}`,
    sections: [
      {
        heading: 'Scope',
        body: [
          'This policy applies only to this website. The website has no membership or user accounts; you do not need to provide any personal information to browse it.',
        ],
      },
      {
        heading: 'What information we process',
        body: [
          [
            'Name and surname, email, company, subject and message that you share when using the contact form',
            'Technical server logs kept by the hosting infrastructure for the secure operation of the website (IP address, browser type, time of access)',
          ],
          'No analytics tools, advertising or retargeting technologies that measure visitor behaviour are used on the website.',
        ],
      },
      {
        heading: 'Use of information',
        body: [
          'Information submitted through the form is used only to assess your request and respond to you. It is not sold, rented or shared with third parties for marketing purposes.',
        ],
      },
      {
        heading: 'Professional secrecy and confidentiality',
        body: [
          'Sworn-in CPA and independent audit activities are subject to a duty of confidentiality under professional legislation. Information provided to us is handled within this duty and professional ethics rules, accessible only to those involved in the engagement.',
          'We recommend that you do not send confidential financial documents by form or email before a meeting; the method for sharing documents will be agreed after the meeting.',
        ],
      },
      {
        heading: 'Security',
        body: [
          'All connections between the website and your browser are encrypted (HTTPS). Form data is validated on the server side and transmitted only through channels accessible to authorised persons. Please note that no transmission over the internet is entirely free of risk.',
        ],
      },
      {
        heading: 'Third-party content and links',
        body: [
          'Our office locations are shown through a Google Maps embed, with your consent; the WhatsApp link takes you to a service operated by Meta Platforms. The data processing activities of these services are subject to their own privacy policies.',
        ],
      },
      {
        heading: 'Changes and contact',
        body: [
          'This policy is updated when necessary; the current version is always published on this page and the date at the top changes. You can contact us with any questions:',
          controller,
        ],
      },
    ],
  },

  cerez: {
    updated,
    intro: `This policy explains the cookies and similar technologies used on our website, their purposes and how you can manage your preferences. ${prevails}`,
    sections: [
      {
        heading: 'What is a cookie',
        body: [
          'Cookies are small text files stored in your browser by the websites you visit. They may be used to make a website work, remember preferences or collect usage statistics.',
        ],
      },
      {
        heading: 'Cookies used by our website',
        body: [
          'Our website does not set cookies of its own. No analytics, advertising, retargeting or social media tracking cookies are used.',
          'To remember your cookie preference, a single entry named “md-consent” is written to your browser’s local storage (localStorage). It contains only your choice (“Accept” or “Necessary only”) and its date; it is not sent to our server and is not used to identify you.',
        ],
      },
      {
        heading: 'Third-party cookies',
        body: [
          'A Google Maps embed is used at the bottom of the page to show our office locations. These maps are not loaded by default; they load only if you select “Accept” in the cookie notice or press the “Show map” button in the map area.',
          'When a map is loaded, Google LLC may set cookies in your browser and process data through them in accordance with its own policies. These cookies are not under our Company’s control. For details, please refer to Google’s privacy and cookie policies.',
        ],
      },
      {
        heading: 'How to manage cookies',
        body: [
          'A cookie notice is shown at the bottom of the screen on your first visit. “Accept” allows map content to load; “Necessary only” lets you continue without consent. Declining does not restrict any function of the website.',
          'You can change your preference or withdraw consent at any time using the “Cookie preferences” link at the very bottom of the page. After withdrawal, maps will not load from the next view onwards; third-party cookies already set can be deleted in your browser settings.',
          'You can also view, delete or block third-party cookies entirely in your browser settings:',
          [
            'Google Chrome: Settings → Privacy and security → Third-party cookies',
            'Mozilla Firefox: Settings → Privacy & Security → Cookies and Site Data',
            'Safari: Settings → Privacy → Prevent cross-site tracking',
            'Microsoft Edge: Settings → Cookies and site permissions',
          ],
        ],
      },
      {
        heading: 'Changes',
        body: [
          'If optional cookies such as analytics are used on our website in the future, they will be enabled only with your explicit consent and this policy will be updated. You can contact us at ' +
            email +
            ' with any questions.',
        ],
      },
    ],
  },
};
