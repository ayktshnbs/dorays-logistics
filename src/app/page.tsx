'use client'

import { useMemo, useState } from 'react'

type Lang = 'en' | 'tr'
type Theme = 'light' | 'dark'

type Service = {
  code: string
  title: string
  text: string
}

const content = {
  en: {
    nav: ['Services', 'Process', 'Network', 'Contact'],
    quote: 'Get a Quote',
    menu: 'Menu',
    close: 'Close',
    heroBadge: 'International Freight Forwarder',
    heroTitle: 'Reliable logistics, planned with precision.',
    heroText:
      'Dorays Logistics provides international road, sea and air freight solutions for businesses that need clear communication, disciplined follow-up and dependable delivery planning.',
    primaryCta: 'Request a Freight Quote',
    secondaryCta: 'View Services',
    trustLine: 'Forwarder solutions for import, export and cross-border supply chains.',
    stats: [
      ['24/7', 'Operational coordination'],
      ['30+', 'International trade lanes'],
      ['3', 'Core freight modes'],
    ],
    shipment: 'Shipment Control Panel',
    reference: 'Reference',
    status: 'In transit',
    from: 'Istanbul, TR',
    to: 'Hamburg, DE',
    modes: ['Road', 'Sea', 'Air'],
    checked: 'Documents checked',
    eta: 'ETA updated',
    secured: 'Carrier confirmed',
    servicesBadge: 'Services',
    servicesTitle: 'Freight solutions for modern trade',
    servicesText:
      'A practical service portfolio for exporters, importers, manufacturers and trading companies.',
    services: [
      { code: 'FTL', title: 'Road Freight', text: 'Full truckload and partial road freight across Türkiye, Europe, the Balkans and CIS routes.' },
      { code: 'SEA', title: 'Sea Freight', text: 'FCL, LCL and port-to-door shipping solutions with dependable carrier coordination.' },
      { code: 'AIR', title: 'Air Freight', text: 'Fast and secure air cargo options for urgent, high-value and time-sensitive shipments.' },
      { code: 'CUS', title: 'Customs Coordination', text: 'Document preparation and customs process coordination through experienced partners.' },
      { code: 'WHS', title: 'Warehousing', text: 'Storage, handling, distribution and value-added logistics support when your cargo needs control.' },
      { code: 'PRJ', title: 'Project Cargo', text: 'Special transport planning for oversized, heavy and sensitive industrial cargo.' },
    ] as Service[],
    processBadge: 'Process',
    processTitle: 'A transparent workflow from request to delivery',
    processText:
      'Every shipment starts with route analysis and continues with document checks, carrier coordination and status updates until completion.',
    steps: [
      ['01', 'Route & cargo analysis', 'We review loading point, destination, cargo type, timing and handling requirements.'],
      ['02', 'Offer & transport planning', 'We select the suitable mode, carrier structure and delivery plan for your shipment.'],
      ['03', 'Operational follow-up', 'We coordinate documents, loading, tracking, ETA updates and delivery confirmation.'],
    ],
    networkBadge: 'Network',
    networkTitle: 'Cross-border coordination with a global mindset.',
    networkText:
      'Dorays Logistics coordinates with carriers, agents, warehouses and customs partners to keep your cargo moving smoothly across international routes.',
    regions: ['Europe', 'Türkiye', 'Balkans', 'Middle East', 'CIS Region', 'Global Ports'],
    checks: ['Route planning before loading', 'Shipment updates and ETA follow-up', 'Document and customs process coordination'],
    aboutBadge: 'Why Dorays Logistics?',
    aboutTitle: 'A dependable logistics partner for international trade.',
    features: [
      ['Professional Follow-up', 'Shipments are monitored with operational discipline and direct communication.'],
      ['Flexible Solutions', 'Transport plans are shaped according to cargo type, route, timing and budget.'],
      ['Trusted Partner Network', 'We work with experienced carriers, agents and customs service providers.'],
      ['Transparent Communication', 'You receive clear information before, during and after the shipment.'],
    ],
    contactTitle: 'Move your cargo with confidence.',
    contactText:
      'Share your route, cargo details and preferred freight mode. Our team will prepare a suitable logistics offer.',
    labels: ['Full name', 'Company', 'Email / Phone', 'Route', 'Cargo details'],
    placeholders: ['Full name', 'Company name', 'name@company.com / +90 ...', 'Istanbul to Berlin', 'Cargo type, dimensions, weight, deadline...'],
    send: 'Send Request',
    footer: 'International freight forwarding and supply chain solutions.',
  },
  tr: {
    nav: ['Hizmetler', 'Süreç', 'Ağımız', 'İletişim'],
    quote: 'Teklif Al',
    menu: 'Menü',
    close: 'Kapat',
    heroBadge: 'Uluslararası Forwarder Çözümleri',
    heroTitle: 'Güvenilir lojistik, doğru planlama.',
    heroText:
      'Dorays Logistics; net iletişim, disiplinli operasyon takibi ve güvenilir teslimat planlaması isteyen işletmeler için uluslararası kara, deniz ve hava taşımacılığı çözümleri sunar.',
    primaryCta: 'Taşıma Teklifi İste',
    secondaryCta: 'Hizmetleri İncele',
    trustLine: 'İthalat, ihracat ve sınır ötesi tedarik zincirleri için forwarder çözümleri.',
    stats: [
      ['7/24', 'Operasyon koordinasyonu'],
      ['30+', 'Uluslararası ticaret hattı'],
      ['3', 'Ana taşıma modu'],
    ],
    shipment: 'Sevkiyat Kontrol Paneli',
    reference: 'Referans',
    status: 'Yolda',
    from: 'İstanbul, TR',
    to: 'Hamburg, DE',
    modes: ['Kara', 'Deniz', 'Hava'],
    checked: 'Evrak kontrol edildi',
    eta: 'ETA güncellendi',
    secured: 'Taşıyıcı onaylandı',
    servicesBadge: 'Hizmetler',
    servicesTitle: 'Modern ticaret için lojistik çözümler',
    servicesText:
      'İhracatçılar, ithalatçılar, üreticiler ve ticaret firmaları için pratik hizmet yapısı.',
    services: [
      { code: 'FTL', title: 'Kara Yolu Taşımacılığı', text: 'Türkiye, Avrupa, Balkanlar ve BDT rotalarında komple ve parsiyel kara yolu taşımacılığı.' },
      { code: 'SEA', title: 'Deniz Yolu Taşımacılığı', text: 'FCL, LCL ve limandan kapıya teslim seçenekleriyle güvenilir taşıyıcı koordinasyonu.' },
      { code: 'AIR', title: 'Hava Yolu Taşımacılığı', text: 'Acil, değerli ve zaman hassasiyetli gönderiler için hızlı ve güvenli hava kargo seçenekleri.' },
      { code: 'CUS', title: 'Gümrük Koordinasyonu', text: 'Deneyimli iş ortaklarıyla evrak hazırlığı ve gümrük süreçlerinin koordinasyonu.' },
      { code: 'WHS', title: 'Depolama', text: 'Yükünüz kontrol gerektirdiğinde depolama, elleçleme, dağıtım ve katma değerli lojistik desteği.' },
      { code: 'PRJ', title: 'Proje Taşımacılığı', text: 'Gabari dışı, ağır ve hassas endüstriyel yükler için özel taşıma planlaması.' },
    ] as Service[],
    processBadge: 'Süreç',
    processTitle: 'Talepten teslimata kadar şeffaf iş akışı',
    processText:
      'Her sevkiyat rota analiziyle başlar; evrak kontrolü, taşıyıcı koordinasyonu ve düzenli durum bilgilendirmesiyle tamamlanır.',
    steps: [
      ['01', 'Rota ve yük analizi', 'Yükleme noktası, varış yeri, yük tipi, süre ve elleçleme ihtiyaçları değerlendirilir.'],
      ['02', 'Teklif ve taşıma planı', 'Sevkiyat için uygun mod, taşıyıcı yapısı ve teslimat planı belirlenir.'],
      ['03', 'Operasyon takibi', 'Evrak, yükleme, takip, ETA güncellemeleri ve teslimat teyidi koordine edilir.'],
    ],
    networkBadge: 'Ağımız',
    networkTitle: 'Global bakış açısıyla sınır ötesi koordinasyon.',
    networkText:
      'Dorays Logistics; yükünüzün uluslararası rotalarda sorunsuz ilerlemesi için taşıyıcılar, acenteler, depolar ve gümrük iş ortaklarıyla koordinasyon sağlar.',
    regions: ['Avrupa', 'Türkiye', 'Balkanlar', 'Orta Doğu', 'BDT Bölgesi', 'Global Limanlar'],
    checks: ['Yükleme öncesi rota planlama', 'Sevkiyat ve tahmini varış takibi', 'Evrak ve gümrük süreç koordinasyonu'],
    aboutBadge: 'Neden Dorays Logistics?',
    aboutTitle: 'Uluslararası ticaret için güvenilir lojistik ortağı.',
    features: [
      ['Profesyonel Takip', 'Sevkiyatlar operasyon disiplini ve doğrudan iletişimle takip edilir.'],
      ['Esnek Çözümler', 'Taşıma planı; yük tipi, rota, süre ve bütçeye göre şekillendirilir.'],
      ['Güvenilir İş Ortakları', 'Deneyimli taşıyıcılar, acenteler ve gümrük hizmet sağlayıcılarıyla çalışırız.'],
      ['Şeffaf İletişim', 'Sevkiyat öncesinde, sırasında ve sonrasında net bilgi alırsınız.'],
    ],
    contactTitle: 'Yükünüzü güvenle taşıyın.',
    contactText:
      'Rota, yük detayları ve tercih ettiğiniz taşıma modunu iletin. Ekibimiz size uygun lojistik teklifini hazırlasın.',
    labels: ['Ad soyad', 'Firma', 'E-posta / Telefon', 'Rota', 'Yük detayları'],
    placeholders: ['Ad soyad', 'Firma adı', 'ornek@firma.com / +90 ...', 'İstanbul - Berlin', 'Yük tipi, ölçü, ağırlık, teslim süresi...'],
    send: 'Talep Gönder',
    footer: 'Uluslararası taşımacılık ve tedarik zinciri çözümleri.',
  },
}

export default function Home() {
  const [lang, setLang] = useState<Lang>('en')
  const [theme, setTheme] = useState<Theme>('dark')
  const [open, setOpen] = useState(false)
  const t = useMemo(() => content[lang], [lang])
  const dark = theme === 'dark'
  const navLinks = ['services', 'process', 'network', 'contact']

  const shell = dark ? 'bg-[#07111f] text-white' : 'bg-[#f6f3ee] text-[#101820]'
  const panel = dark ? 'border-white/10 bg-white/[0.06]' : 'border-black/10 bg-white'
  const muted = dark ? 'text-slate-300' : 'text-slate-600'

  return (
    <main className={`${dark ? 'dark' : ''} ${shell} min-h-screen overflow-hidden transition-colors duration-300`}>
      <div className="pointer-events-none fixed inset-0 -z-0 opacity-70">
        <div className={`absolute left-[-18rem] top-[-18rem] h-[34rem] w-[34rem] rounded-full blur-3xl ${dark ? 'bg-[#d7b56d]/15' : 'bg-[#d7b56d]/25'}`} />
        <div className={`absolute right-[-16rem] top-[22rem] h-[32rem] w-[32rem] rounded-full blur-3xl ${dark ? 'bg-[#1d766c]/20' : 'bg-[#96d7cf]/35'}`} />
      </div>

      <header className={`fixed left-0 top-0 z-50 w-full border-b backdrop-blur-xl ${dark ? 'border-white/10 bg-[#07111f]/88' : 'border-black/10 bg-[#f6f3ee]/88'}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
          <a href="#home" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
            <img src="/dorays-logo.jpg" alt="Dorays Logistics logo" className="h-10 w-10 rounded-xl object-cover ring-1 ring-white/10 sm:h-11 sm:w-11" />
            <div className="min-w-0 leading-tight">
              <div className="truncate text-base font-black tracking-tight sm:text-lg">Dorays Logistics</div>
              <div className={`hidden text-[11px] font-semibold uppercase tracking-[0.22em] sm:block ${dark ? 'text-[#d7b56d]' : 'text-[#8a6824]'}`}>Forwarder Solutions</div>
            </div>
          </a>

          <nav className={`hidden items-center gap-7 text-sm font-semibold lg:flex ${muted}`}>
            {t.nav.map((item, index) => (
              <a key={item} className="transition hover:text-[#d7b56d]" href={`#${navLinks[index]}`}>{item}</a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button aria-label="Change language" onClick={() => setLang(lang === 'en' ? 'tr' : 'en')} className={`rounded-full border px-3 py-2 text-xs font-black transition ${panel}`}>
              {lang === 'en' ? 'TR' : 'EN'}
            </button>
            <button aria-label="Change theme" onClick={() => setTheme(dark ? 'light' : 'dark')} className={`rounded-full border px-3 py-2 text-xs font-black transition ${panel}`}>
              {dark ? 'Light' : 'Dark'}
            </button>
            <a href="#contact" className="hidden rounded-full bg-[#d7b56d] px-5 py-3 text-sm font-black text-[#07111f] shadow-lg shadow-[#d7b56d]/15 transition hover:-translate-y-0.5 hover:bg-[#f0ce82] sm:inline-flex">
              {t.quote}
            </a>
            <button onClick={() => setOpen(!open)} className={`rounded-full border px-3 py-2 text-xs font-black lg:hidden ${panel}`}>
              {open ? t.close : t.menu}
            </button>
          </div>
        </div>

        {open && (
          <div className={`border-t px-4 py-4 lg:hidden ${dark ? 'border-white/10 bg-[#07111f]' : 'border-black/10 bg-white'}`}>
            <nav className="mx-auto grid max-w-7xl gap-2">
              {t.nav.map((item, index) => (
                <a key={item} onClick={() => setOpen(false)} className={`rounded-2xl px-4 py-3 text-sm font-bold ${dark ? 'bg-white/5' : 'bg-slate-50'}`} href={`#${navLinks[index]}`}>{item}</a>
              ))}
              <a onClick={() => setOpen(false)} href="#contact" className="rounded-2xl bg-[#d7b56d] px-4 py-3 text-center text-sm font-black text-[#07111f]">{t.quote}</a>
            </nav>
          </div>
        )}
      </header>

      <section id="home" className="relative z-10 px-4 pt-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-10 py-10 sm:py-16 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14 lg:py-24">
          <div>
            <div className={`mb-5 inline-flex rounded-full border px-3 py-2 text-[11px] font-black uppercase tracking-[0.18em] sm:px-4 ${dark ? 'border-[#d7b56d]/30 bg-[#d7b56d]/10 text-[#f0ce82]' : 'border-[#0b3d3a]/15 bg-[#e4f3ef] text-[#0b3d3a]'}`}>
              {t.heroBadge}
            </div>
            <h1 className="max-w-4xl text-4xl font-black leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl">{t.heroTitle}</h1>
            <p className={`mt-6 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8 ${muted}`}>{t.heroText}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className="rounded-full bg-[#d7b56d] px-6 py-4 text-center text-sm font-black text-[#07111f] shadow-xl shadow-[#d7b56d]/20 transition hover:-translate-y-0.5 hover:bg-[#f0ce82]">{t.primaryCta}</a>
              <a href="#services" className={`rounded-full border px-6 py-4 text-center text-sm font-black transition hover:-translate-y-0.5 ${panel}`}>{t.secondaryCta}</a>
            </div>
            <p className={`mt-5 text-sm ${muted}`}>{t.trustLine}</p>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {t.stats.map(([number, label]) => (
                <div key={label} className={`rounded-3xl border p-5 shadow-sm ${panel}`}>
                  <div className="text-3xl font-black text-[#d7b56d]">{number}</div>
                  <div className={`mt-1 text-sm leading-5 ${muted}`}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-[#d7b56d]/25 via-transparent to-[#1d766c]/25 blur-2xl" />
            <div className={`relative rounded-[2rem] border p-4 shadow-2xl sm:p-5 ${dark ? 'border-white/10 bg-[#0b1626]' : 'border-black/10 bg-white'}`}>
              <div className={`rounded-[1.6rem] p-5 sm:p-7 ${dark ? 'bg-[#101d31]' : 'bg-[#0b3d3a]'} text-white`}>
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <img src="/dorays-logo.jpg" alt="Dorays Logistics logo" className="h-14 w-14 rounded-2xl object-cover ring-1 ring-white/15" />
                    <div>
                      <div className="text-sm font-black">{t.shipment}</div>
                      <div className="mt-1 text-xs text-white/60">{t.reference}: DRY-2026-048</div>
                    </div>
                  </div>
                  <span className="rounded-full bg-emerald-300/15 px-3 py-1 text-xs font-bold text-emerald-100">{t.status}</span>
                </div>

                <div className="mt-8 rounded-[1.4rem] border border-white/10 bg-white/[0.07] p-5">
                  <div className="mb-3 flex justify-between text-sm font-bold"><span>{t.from}</span><span>{t.to}</span></div>
                  <div className="relative h-2 rounded-full bg-white/15">
                    <div className="h-2 w-[72%] rounded-full bg-[#d7b56d]" />
                    <div className="absolute left-[70%] top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border-2 border-[#0b3d3a] bg-[#d7b56d]" />
                  </div>
                  <div className="mt-5 grid grid-cols-3 gap-2 text-center">
                    {t.modes.map((mode, index) => (
                      <div key={mode} className="rounded-2xl bg-white/10 p-3">
                        <div className="text-xs font-black text-[#f0ce82]">{['FTL', 'SEA', 'AIR'][index]}</div>
                        <div className="mt-1 text-[11px] text-white/65">{mode}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {[t.checked, t.eta, t.secured].map((item) => (
                    <div key={item} className="rounded-2xl bg-white/10 p-4 text-xs font-semibold text-white/75"><span className="mr-2 text-[#d7b56d]">✓</span>{item}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="relative z-10 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-3xl sm:mb-12">
            <span className="text-xs font-black uppercase tracking-[0.22em] text-[#d7b56d]">{t.servicesBadge}</span>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] sm:text-5xl">{t.servicesTitle}</h2>
            <p className={`mt-4 max-w-2xl text-base leading-7 ${muted}`}>{t.servicesText}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.services.map((service) => (
              <article key={service.title} className={`group rounded-[1.6rem] border p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-2xl sm:p-7 ${panel}`}>
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d7b56d] text-xs font-black text-[#07111f]">{service.code}</div>
                  <div className={`h-px flex-1 translate-x-4 ${dark ? 'bg-white/10' : 'bg-black/10'}`} />
                </div>
                <h3 className="text-xl font-black tracking-tight">{service.title}</h3>
                <p className={`mt-3 text-sm leading-7 ${muted}`}>{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className={`relative z-10 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24 ${dark ? 'bg-[#0a1424]' : 'bg-white'}`}>
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.22em] text-[#d7b56d]">{t.processBadge}</span>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] sm:text-5xl">{t.processTitle}</h2>
            <p className={`mt-5 text-base leading-7 ${muted}`}>{t.processText}</p>
          </div>
          <div className="grid gap-4">
            {t.steps.map(([no, title, text]) => (
              <div key={no} className={`rounded-[1.6rem] border p-5 sm:flex sm:gap-6 sm:p-7 ${panel}`}>
                <div className="mb-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#d7b56d] text-sm font-black text-[#07111f] sm:mb-0">{no}</div>
                <div>
                  <h3 className="text-lg font-black">{title}</h3>
                  <p className={`mt-2 text-sm leading-7 ${muted}`}>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="network" className="relative z-10 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
          <div className={`order-2 rounded-[2rem] border p-4 sm:p-6 lg:order-1 ${panel}`}>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {t.regions.map((region) => (
                <div key={region} className={`rounded-3xl p-5 text-sm font-black shadow-sm sm:p-6 ${dark ? 'bg-white/5 text-[#f0ce82]' : 'bg-[#f3f7f5] text-[#0b3d3a]'}`}>{region}</div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-xs font-black uppercase tracking-[0.22em] text-[#d7b56d]">{t.networkBadge}</span>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] sm:text-5xl">{t.networkTitle}</h2>
            <p className={`mt-5 text-base leading-7 sm:text-lg sm:leading-8 ${muted}`}>{t.networkText}</p>
            <div className="mt-7 space-y-3">
              {t.checks.map((item) => (
                <div key={item} className={`flex items-start gap-3 rounded-2xl border p-4 text-sm font-semibold ${panel}`}><span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#d7b56d] text-xs text-[#07111f]">✓</span>{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] bg-[#101820] p-6 text-white shadow-2xl sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-12">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.22em] text-[#f0ce82]">{t.aboutBadge}</span>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] sm:text-5xl">{t.aboutTitle}</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {t.features.map(([title, text]) => (
              <div key={title} className="rounded-[1.4rem] border border-white/10 bg-white/[0.06] p-5">
                <h3 className="font-black">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/70">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative z-10 px-4 pb-20 sm:px-6 lg:px-8">
        <div className={`mx-auto grid max-w-7xl gap-8 rounded-[2rem] border p-5 shadow-xl sm:p-8 lg:grid-cols-[0.85fr_1.15fr] lg:p-12 ${dark ? 'border-white/10 bg-gradient-to-br from-[#0c1728] to-[#241d10]' : 'border-black/10 bg-gradient-to-br from-[#e4f3ef] to-[#fff1d7]'}`}>
          <div>
            <span className="text-xs font-black uppercase tracking-[0.22em] text-[#d7b56d]">{t.quote}</span>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] sm:text-5xl">{t.contactTitle}</h2>
            <p className={`mt-5 text-base leading-7 ${muted}`}>{t.contactText}</p>
          </div>
          <form className="grid gap-3 sm:grid-cols-2">
            {t.placeholders.slice(0, 4).map((p, i) => (
              <label key={p} className="grid gap-2 text-xs font-black uppercase tracking-[0.14em]">
                <span className={dark ? 'text-slate-300' : 'text-slate-600'}>{t.labels[i]}</span>
                <input className="rounded-2xl border border-black/10 bg-white px-4 py-4 text-sm text-[#101820] outline-none transition focus:border-[#d7b56d] focus:ring-4 focus:ring-[#d7b56d]/20" placeholder={p} />
              </label>
            ))}
            <label className="grid gap-2 text-xs font-black uppercase tracking-[0.14em] sm:col-span-2">
              <span className={dark ? 'text-slate-300' : 'text-slate-600'}>{t.labels[4]}</span>
              <textarea className="min-h-32 rounded-2xl border border-black/10 bg-white px-4 py-4 text-sm text-[#101820] outline-none transition focus:border-[#d7b56d] focus:ring-4 focus:ring-[#d7b56d]/20" placeholder={t.placeholders[4]} />
            </label>
            <button className="rounded-full bg-[#d7b56d] px-8 py-4 text-sm font-black text-[#07111f] shadow-lg shadow-[#d7b56d]/20 transition hover:-translate-y-0.5 hover:bg-[#f0ce82] sm:col-span-2">{t.send}</button>
          </form>
        </div>
      </section>

      <footer className={`relative z-10 border-t px-4 py-10 sm:px-6 lg:px-8 ${dark ? 'border-white/10 bg-[#07111f]' : 'border-black/10 bg-white'}`}>
        <div className={`mx-auto flex max-w-7xl flex-col gap-6 text-sm md:flex-row md:items-center md:justify-between ${muted}`}>
          <div className="flex items-center gap-3">
            <img src="/dorays-logo.jpg" alt="Dorays Logistics logo" className="h-11 w-11 rounded-xl object-cover" />
            <div><strong className={dark ? 'text-white' : 'text-[#101820]'}>Dorays Logistics</strong><br />{t.footer}</div>
          </div>
          <div className="flex flex-wrap gap-5 font-semibold">
            <a href="#services">{t.nav[0]}</a>
            <a href="#process">{t.nav[1]}</a>
            <a href="#network">{t.nav[2]}</a>
            <a href="#contact">{t.nav[3]}</a>
          </div>
        </div>
      </footer>

      <a href="#contact" className="fixed bottom-4 left-4 right-4 z-40 rounded-full bg-[#d7b56d] px-5 py-4 text-center text-sm font-black text-[#07111f] shadow-2xl shadow-black/20 sm:hidden">
        {t.quote}
      </a>
    </main>
  )
}
