// English team profiles. Names, photos and order are the same as content/team.ts; the slug is
// shared too, so /ekip/fatih-olgun ↔ /en/team/fatih-olgun pair automatically.
// [BİLGİ GİRİLECEK] TASLAK ÇEVİRİ: unvan karşılıkları ve özgeçmişler kişilerin onayıyla kesinleşmelidir.
// SMMM (Serbest Muhasebeci Mali Müşavir) → Certified Public Accountant (SMMM)
import { teamMembers, type TeamMember } from '../team';

type Translation = Pick<TeamMember, 'titles' | 'biography' | 'focus' | 'badge'>;

const en: Record<string, Translation> = {
  'fatih-olgun': {
    titles: ['Sworn-in Certified Public Accountant (YMM)', 'Chairman of the Board', 'Former Tax Inspector'],
    biography:
      'A former tax inspector and sworn-in certified public accountant, Fatih Olgun has extensive experience in full certification, tax audits and disputes, corporate restructurings and corporate tax planning. As Chairman of the Board of MarkaDenetim, he leads the firm’s strategic advisory work.',
    focus: ['Full certification', 'Tax audits and disputes', 'Corporate restructuring', 'Corporate tax planning'],
    badge: 'Responsible partner',
  },
  'samet-koz': {
    titles: ['Certified Public Accountant (SMMM)', 'Responsible Auditor'],
    biography:
      'A certified public accountant and KGK-licensed responsible auditor, Samet Köz specialises in independent auditing standards, internal audit and risk management, financial statement analysis and corporate reporting.',
    focus: ['Independent audit', 'Internal audit and risk management', 'Financial statement analysis', 'Corporate reporting'],
  },
  'sukran-kisa': {
    titles: ['VAT Refund Specialist'],
    biography:
      'Specialises in VAT refunds, counter-examination reports and procedures with tax offices, and coordinates cash and offset refund processes for taxpayers.',
    focus: ['VAT refunds', 'Counter-examination reports', 'Tax office procedures', 'Cash and offset refunds'],
  },
  'ozgur-yurt': {
    titles: ['Tax Director'],
    biography:
      'Advises as Tax Director on tax legislation, tax planning and corporate tax compliance, and takes an active role in analysing legislation and developing tax strategies.',
    focus: ['Tax legislation', 'Tax planning', 'Corporate tax compliance', 'Tax strategy'],
  },
  'mehmet-ozkurt': {
    titles: ['VAT Refund Specialist'],
    biography:
      'Prepares VAT refund files arising from exports, reduced rates and withholding, reviews input VAT listings and follows certification procedures.',
    focus: ['Export VAT refunds', 'Reduced-rate and withholding refunds', 'Input VAT review', 'Certification procedures'],
  },
  'aydin-kurutkan': {
    titles: ['VAT Refund Specialist'],
    biography:
      'Experienced in tax legislation, accounting practice and VAT refund procedures, supporting taxpayers with document management and regulatory compliance.',
    focus: ['Tax legislation', 'Accounting practice', 'VAT refund procedures', 'Regulatory compliance'],
  },
};

// Çevirisi olmayan kişi İngilizce sitede gösterilmez (yarım profil yayına çıkmasın)
export const teamMembersEn: TeamMember[] = teamMembers.flatMap((m) => {
  const t = en[m.slug];
  return t ? [{ ...m, ...t }] : [];
});
