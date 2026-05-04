"use client";

import { useState } from "react";

const heroImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuATg-ZtJlZ6x3wRjnZ2FulZVv46VZAE4TCn4QVGoUreoYPEFZ1dfBeSy0Eu2gnFkBcGZGJUhjBe7je_eO60YIm5WiZJY8_g18sHSnzoE5YY1JWJ7t_m6TH6dIcwv6WgpO4UTRZvLRpZAi3Wh7jHMa9JS7o5Uw_G4zaqxUcIQpE-wQGBRkAvivzZo9-uMVZhG6Dfgpj64xcyuMEWN47X65-yEz7Lntp4imacVnMydKICz-eJAdQVQiR9FZALbWgqaEtM-p0WfJv4XbE";

const routeMapImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDQ8cs8Woe2R3oWVsMnSeZvFdjFbdSPiPd98MNjROmJ556I7341joLFeg-KYszXS9ejoFfHqmoo2KSKYUz0I6NOMWaPxa5uuhiDSNML2F5eMl2ZPVab4NDRB7OReEkaTGs_DCpgIrqMV5iIu_A0AryjcTCXCy00qGc0KCCHVDBJh3u5icovYSQey_Hh67wvPDIORtnS1euVMR1Db-KDQMenMI4pL1-kdP_XiaTRjRMD88cYA0dVT1K-Xe1QHs6bU0m1oIkgt-Yhlxo";

const networkImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCfIMSMSUEzf0Ljjpg_2VDeDwRokpSJ4FdMwxmfWXfNXr0UieqGFStLGSxUBkCJ8u1-xy6jaOkz9ZqypyqU7RIxFf7VbLgJfSzlsNN0sUL7M6jkWNTfs801sL924ebIf1usscFxPCXJcZiYJxdzy8XHJ8JrlGbri0wUWhaze6S3NgTiEmBA6eqcm8LzQSSX2LRXf0CBcUVylRpujmldHVAdLn62Zy0ETu6cQ2Gr4wtPQ3HsKV2Jez44we3xo5z1a0f7tsY2b6ts8w4";

const pageCopy = {
  en: {
    nav: [
      ["Process", "#process"],
      ["Network", "#network"],
      ["Contact", "#contact"],
    ],
    quote: "Get a Quote",
    language: "TR",
    light: "Light",
    dark: "Dark",
    heroBadge: "PREMIUM FREIGHT MANAGEMENT",
    heroTitle: "Reliable logistics, planned with precision.",
    heroText:
      "Navigate the complexities of global trade with our command-and-control freight solutions. We provide end-to-end visibility for high-stakes shipments across three core freight modes.",
    heroPrimary: "Request a Freight Quote",
    heroSecondary: "Explore Services",
    shipmentLabel: "LIVE SHIPMENT #DX-8821",
    transit: "IN TRANSIT",
    fromCity: "Istanbul",
    toCity: "Hamburg",
    eta: "ETA",
    cargo: "Cargo",
    cargoValue: "Precision Parts",
    stats: [
      ["24/7", "Operational coordination"],
      ["30+", "International trade lanes"],
      ["3", "Core freight modes"],
    ],
    servicesBadge: "OUR CAPABILITIES",
    servicesTitle: "Freight solutions for modern trade",
    services: [
      [
        "local_shipping",
        "Road Freight",
        "Full truckload (FTL) and less-than-truckload (LTL) services across Europe and the Middle East with real-time GPS tracking.",
      ],
      [
        "directions_boat",
        "Sea Freight",
        "Cost-effective global ocean transport for containerized cargo, bulk shipments, and specialized reefers.",
      ],
      [
        "flight",
        "Air Freight",
        "Express air transport for time-sensitive cargo, high-value electronics, and emergency medical supplies.",
      ],
      [
        "gavel",
        "Customs Coordination",
        "Expert brokerage and compliance management to ensure smooth border crossings in every jurisdiction.",
      ],
      [
        "inventory_2",
        "Warehousing",
        "Strategically located hubs offering inventory management, cross-docking, and last-mile distribution.",
      ],
      [
        "precision_manufacturing",
        "Project Cargo",
        "Specialized heavy-lift and out-of-gauge transport for industrial machinery and energy infrastructure.",
      ],
    ],
    learnMore: "LEARN MORE",
    processBadge: "OUR PROCESS",
    processTitle: "A transparent workflow",
    processSteps: [
      [
        "01",
        "Route & cargo analysis",
        "We evaluate your shipment's requirements, urgency, and destination to determine the optimal route.",
      ],
      [
        "02",
        "Offer & transport planning",
        "Direct quotes and meticulous planning including customs documentation and modal integration.",
      ],
      [
        "03",
        "Operational follow-up",
        "24/7 tracking and coordination by our expert team until the cargo reaches its final destination.",
      ],
    ],
    networkBadge: "GLOBAL NETWORK",
    networkTitle: "Coordination across borders",
    networkText:
      "Our presence spans key economic corridors, bridging the gap between East and West. We specialize in complex transit through:",
    networkLinks: [
      ["public", "Europe & Turkiye"],
      ["lan", "Balkans & Middle East"],
      ["hub", "CIS Region"],
      ["anchor", "Global Ports"],
    ],
    contactTitle: "Move your cargo with confidence",
    contactText:
      "Ready to optimize your supply chain? Speak with our logistics engineers today for a custom freight assessment.",
    formFields: [
      ["FULL NAME", "John Doe", "text"],
      ["COMPANY EMAIL", "john@company.com", "email"],
      ["FREIGHT MODE", "", "select"],
      ["DESTINATION", "Country / Port", "text"],
    ],
    freightOptions: ["Road Freight", "Sea Freight", "Air Freight", "Other"],
    message: "MESSAGE",
    messagePlaceholder: "Describe your shipment needs...",
    send: "Send Inquiry",
    sent: "Inquiry ready. Our team will contact you shortly.",
    footerText:
      "Empowering global trade through technological precision and operational excellence.",
    footerColumns: [
      [
        "SERVICES",
        [
          "Road Transport",
          "Sea Logistics",
          "Air Cargo",
          "Supply Chain Solutions",
        ],
      ],
      ["COMPANY", ["About Us", "Network Map", "Careers", "Contact"]],
      [
        "RESOURCES",
        [
          "Track Shipment",
          "Documentation Guide",
          "Incoterms 2024",
          "Fuel Surcharges",
        ],
      ],
    ],
    legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
  },
  tr: {
    nav: [
      ["Süreç", "#process"],
      ["Ağımız", "#network"],
      ["İletişim", "#contact"],
    ],
    quote: "Teklif Al",
    language: "EN",
    light: "Aydınlık",
    dark: "Koyu",
    heroBadge: "PREMIUM YÜK YÖNETİMİ",
    heroTitle: "Güvenilir lojistik, hassas planlama.",
    heroText:
      "Küresel ticaretin karmaşıklığını komuta ve kontrol odaklı lojistik çözümlerimizle yönetin. Üç temel taşıma modunda kritik sevkiyatlar için uçtan uca görünürlük sağlıyoruz.",
    heroPrimary: "Navlun Teklifi İste",
    heroSecondary: "Hizmetleri İncele",
    shipmentLabel: "CANLI SEVKİYAT #DX-8821",
    transit: "YOLDA",
    fromCity: "İstanbul",
    toCity: "Hamburg",
    eta: "Varış",
    cargo: "Yük",
    cargoValue: "Hassas Parçalar",
    stats: [
      ["7/24", "Operasyon koordinasyonu"],
      ["30+", "Uluslararası ticaret hattı"],
      ["3", "Temel taşıma modu"],
    ],
    servicesBadge: "KABİLİYETLERİMİZ",
    servicesTitle: "Modern ticaret için lojistik çözümler",
    services: [
      [
        "local_shipping",
        "Kara Yolu Taşımacılığı",
        "Avrupa ve Orta Doğu genelinde gerçek zamanlı GPS takibiyle komple (FTL) ve parsiyel (LTL) taşıma hizmetleri.",
      ],
      [
        "directions_boat",
        "Deniz Yolu Taşımacılığı",
        "Konteyner yükleri, dökme sevkiyatlar ve özel reefer çözümleri için maliyet etkin global deniz taşımacılığı.",
      ],
      [
        "flight",
        "Hava Yolu Taşımacılığı",
        "Zaman hassasiyetli yükler, yüksek değerli elektronik ürünler ve acil medikal sevkiyatlar için ekspres hava kargo.",
      ],
      [
        "gavel",
        "Gümrük Koordinasyonu",
        "Her bölgede sorunsuz sınır geçişi için uzman brokerlik ve mevzuat uyum yönetimi.",
      ],
      [
        "inventory_2",
        "Depolama",
        "Envanter yönetimi, cross-docking ve son kilometre dağıtımı sunan stratejik konumlu lojistik merkezleri.",
      ],
      [
        "precision_manufacturing",
        "Proje Taşımacılığı",
        "Endüstriyel makineler ve enerji altyapısı için ağır, gabari dışı ve özel yük taşıma planlaması.",
      ],
    ],
    learnMore: "DETAYLAR",
    processBadge: "SÜRECİMİZ",
    processTitle: "Şeffaf bir iş akışı",
    processSteps: [
      [
        "01",
        "Rota ve yük analizi",
        "Sevkiyatın gereksinimlerini, aciliyetini ve varış noktasını değerlendirerek en uygun rotayı belirleriz.",
      ],
      [
        "02",
        "Teklif ve taşıma planı",
        "Gümrük dokümantasyonu ve mod entegrasyonu dahil net teklifler ve titiz operasyon planlaması sunarız.",
      ],
      [
        "03",
        "Operasyon takibi",
        "Yük nihai varış noktasına ulaşana kadar uzman ekibimizle 7/24 takip ve koordinasyon sağlarız.",
      ],
    ],
    networkBadge: "GLOBAL AĞ",
    networkTitle: "Sınırlar arası koordinasyon",
    networkText:
      "Varlığımız, Doğu ile Batı arasındaki köprüyü kuran ana ekonomik koridorlara yayılır. Karmaşık transit süreçlerinde uzmanlaştığımız bölgeler:",
    networkLinks: [
      ["public", "Avrupa & Türkiye"],
      ["lan", "Balkanlar & Orta Doğu"],
      ["hub", "BDT Bölgesi"],
      ["anchor", "Global Limanlar"],
    ],
    contactTitle: "Yükünüzü güvenle taşıyın",
    contactText:
      "Tedarik zincirinizi optimize etmeye hazır mısınız? Özel navlun değerlendirmesi için lojistik ekibimizle iletişime geçin.",
    formFields: [
      ["AD SOYAD", "John Doe", "text"],
      ["ŞİRKET E-POSTASI", "john@company.com", "email"],
      ["TAŞIMA MODU", "", "select"],
      ["VARIŞ NOKTASI", "Ülke / Liman", "text"],
    ],
    freightOptions: ["Kara Yolu", "Deniz Yolu", "Hava Yolu", "Diğer"],
    message: "MESAJ",
    messagePlaceholder: "Sevkiyat ihtiyacınızı açıklayın...",
    send: "Talep Gönder",
    sent: "Talebiniz hazırlandı. Ekibimiz kısa süre içinde sizinle iletişime geçecek.",
    footerText:
      "Küresel ticareti teknolojik hassasiyet ve operasyonel mükemmellikle güçlendiriyoruz.",
    footerColumns: [
      [
        "HİZMETLER",
        [
          "Kara Taşımacılığı",
          "Deniz Lojistiği",
          "Hava Kargo",
          "Tedarik Zinciri Çözümleri",
        ],
      ],
      ["ŞİRKET", ["Hakkımızda", "Ağ Haritası", "Kariyer", "İletişim"]],
      [
        "KAYNAKLAR",
        [
          "Sevkiyat Takibi",
          "Dokümantasyon Rehberi",
          "Incoterms 2024",
          "Yakıt Ek Ücretleri",
        ],
      ],
    ],
    legal: ["Gizlilik Politikası", "Kullanım Şartları", "Çerez Politikası"],
  },
};

function Icon({
  children,
  className = "",
}: {
  children: string;
  className?: string;
}) {
  return (
    <span className={`material-symbols-outlined ${className}`}>{children}</span>
  );
}

export default function Home() {
  const [lang, setLang] = useState<"en" | "tr">("en");
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [submitted, setSubmitted] = useState(false);
  const copy = pageCopy[lang];
  const isLight = theme === "light";
  const themeLabel = isLight ? copy.dark : copy.light;
  const iconButtonClass = `icon-control ${isLight ? "icon-control-light" : "icon-control-dark"}`;

  return (
    <main
      className={`min-h-screen text-[#eae1d8] transition-colors ${isLight ? "light-site bg-[#f7f5f2]" : "dark-site bg-[#110e09]"}`}
    >
      <header
        className={`sticky top-0 z-50 flex min-h-12 w-full items-center justify-between gap-4 border-b px-4 py-2 text-[13px] shadow-sm sm:px-8 ${isLight ? "border-black/10 bg-[#f7f5f2]" : "border-[#4f4538] bg-[#110e09]"}`}
      >
        <a
          href="#home"
          className="flex items-center gap-2 transition hover:scale-[1.03]"
        >
          <img
            src={isLight ? "/dorays-logo-light.png" : "/dorays-logo-dark.png"}
            alt="Dorays Logistics Logo"
            className={`h-24 md:h-20 w-auto object-contain ${
              isLight ? "" : "drop-shadow-[0_2px_12px_rgba(255,206,128,0.25)]"
            }`}
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {copy.nav.map(([item, href], index) => (
            <a
              key={item}
              className={
                index === 0
                  ? "font-semibold text-[#c88919] text-[15px] md:text-[16px] tracking-wide"
                  : "text-slate-400 transition hover:text-[#c88919] text-[15px] md:text-[16px] tracking-wide"

              }
              href={href}
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setLang(lang === "en" ? "tr" : "en")}
            className={iconButtonClass}
            aria-label="Change language"
            title={lang === "en" ? "Türkçe" : "English"}
          >
            <Icon className="icon-control-symbol">language</Icon>
            <span className="icon-control-badge">{copy.language}</span>
          </button>
          <button
            type="button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={iconButtonClass}
            aria-label="Change theme"
            title={themeLabel}
          >
            <Icon className="icon-control-symbol">
              {isLight ? "dark_mode" : "light_mode"}
            </Icon>
            <span className="sr-only">{themeLabel}</span>
          </button>
          <a
            href="#contact"
            className="inline-flex h-9 items-center rounded bg-[#ffce80] px-4 text-xs font-extrabold text-[#432c00] transition hover:shadow-[0_0_18px_rgba(255,206,128,0.28)]"
          >
            {copy.quote}
          </a>
        </div>
      </header>

      <section
        id="home"
        className="relative flex min-h-[91vh] items-center overflow-hidden px-4 py-16 sm:px-8 lg:px-12"
      >
        <div className="absolute inset-0 bg-black/45">
          <img
            src={heroImage}
            alt="Container port at dusk"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/15 to-[#110e09]" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-black/10" />
        </div>

        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-12">
          <div className="flex flex-col justify-center lg:col-span-6">
            <span className="mb-4 text-xs font-extrabold uppercase tracking-[0.08em] text-[#ffce80]">
              {copy.heroBadge}
            </span>
            <h1 className="max-w-[620px] text-[40px] font-extrabold leading-[1.12] text-white sm:text-5xl lg:text-[56px]">
              {copy.heroTitle}
            </h1>
            <p className="mt-5 max-w-xl text-base font-semibold leading-7 text-white/88">
              {copy.heroText}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex min-h-12 items-center gap-2 rounded bg-[#ffce80] px-8 text-sm font-bold text-[#432c00] transition hover:shadow-[0_0_24px_rgba(255,206,128,0.32)]"
              >
                {copy.heroPrimary}
                <Icon className="text-[20px]">arrow_forward</Icon>
              </a>
              <a
                href="#services"
                className="inline-flex min-h-12 items-center rounded border border-[#9b8f7f] bg-[#16130e]/25 px-8 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-[#231f19]"
              >
                {copy.heroSecondary}
              </a>
            </div>
          </div>

          <div className="relative min-h-[230px] lg:col-span-6">
            <div className="absolute right-0 top-4 hidden h-[330px] w-[420px] opacity-20 lg:block">
              <img
                src={routeMapImage}
                alt="Abstract Eurasian route map"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="relative z-20 ml-auto max-w-md rounded border border-[#4f4538] bg-[#231f19] p-6 shadow-[0_4px_20px_-5px_rgba(255,206,128,0.18)] lg:mt-20">
              <div className="mb-6 flex items-center justify-between">
                <span className="text-xs font-extrabold uppercase tracking-[0.08em] text-[#ffce80]">
                  {copy.shipmentLabel}
                </span>
                <span className="rounded bg-[#ffce80]/20 px-2 py-1 text-xs font-bold text-[#ffce80]">
                  {copy.transit}
                </span>
              </div>
              <div className="mb-8 flex items-center justify-between gap-5">
                <div className="text-center">
                  <p className="font-bold text-white">IST</p>
                  <p className="text-[10px] text-[#9b8f7f]">{copy.fromCity}</p>
                </div>
                <div className="relative h-px flex-1 bg-[#4f4538]">
                  <div className="absolute left-1/3 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-[#ffce80] shadow-[0_0_10px_#ffce80]" />
                  <Icon className="absolute -top-5 left-1/3 -translate-x-1/2 text-[20px] text-[#ffce80]">
                    local_shipping
                  </Icon>
                </div>
                <div className="text-center">
                  <p className="font-bold text-white">HAM</p>
                  <p className="text-[10px] text-[#9b8f7f]">{copy.toCity}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 border-t border-[#4f4538] pt-4 text-sm">
                <div>
                  <p className="text-[#9b8f7f]">{copy.eta}</p>
                  <p className="font-semibold text-white">Oct 24, 18:45</p>
                </div>
                <div>
                  <p className="text-[#9b8f7f]">{copy.cargo}</p>
                  <p className="font-semibold text-white">{copy.cargoValue}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#4f4538] bg-[#1f1b16] px-4 py-8 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 text-center md:grid-cols-3">
          {copy.stats.map(([value, label]) => (
            <div key={label}>
              <span className="block text-2xl font-bold text-[#ffce80]">
                {value}
              </span>
              <span className="mt-1 block text-xs font-bold uppercase tracking-[0.08em] text-[#d2c4b3]">
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section
        id="services"
        className="bg-[#f7f5f2] px-4 py-12 text-[#231f19] sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <span className="text-xs font-extrabold uppercase tracking-[0.08em] text-[#eebf72]">
              {copy.servicesBadge}
            </span>
            <h2 className="mt-2 text-4xl font-extrabold leading-tight text-[#e8ded5] sm:text-5xl">
              {copy.servicesTitle}
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {copy.services.map(([icon, title, text]) => (
              <article
                key={title}
                className="group rounded border border-[#110e09] bg-[#2e2923] p-6 text-white transition hover:border-[#ffce80]"
              >
                <Icon className="mb-5 text-[36px] text-[#ffce80]">{icon}</Icon>
                <h3 className="mb-3 text-lg font-bold">{title}</h3>
                <p className="mb-6 min-h-[72px] text-sm leading-6 text-[#eae1d8]">
                  {text}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-xs font-extrabold text-[#ffce80] transition group-hover:gap-2"
                >
                  {copy.learnMore}{" "}
                  <Icon className="text-[16px]">chevron_right</Icon>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="process"
        className="bg-[#1a1712] px-4 py-12 sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <span className="text-xs font-extrabold uppercase tracking-[0.08em] text-[#ffce80]">
              {copy.processBadge}
            </span>
            <h2 className="mt-2 text-4xl font-extrabold text-white sm:text-5xl">
              {copy.processTitle}
            </h2>
          </div>
          <div className="relative grid gap-10 md:grid-cols-3">
            <div className="absolute left-[18%] right-[18%] top-8 hidden h-px bg-[#4f4538] md:block" />
            {copy.processSteps.map(([number, title, text]) => (
              <article key={number} className="relative text-center">
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded border border-[#4f4538] bg-[#39342e] text-xl font-bold text-[#ffce80] transition hover:border-[#ffce80]">
                  {number}
                </div>
                <h3 className="mb-2 text-lg font-bold text-white">{title}</h3>
                <p className="mx-auto max-w-sm text-sm leading-6 text-[#d2c4b3]">
                  {text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="network"
        className="overflow-hidden bg-[#f7f5f2] px-4 py-12 text-[#231f19] sm:px-8 lg:px-12"
      >
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 lg:flex-row">
          <div className="lg:w-1/2">
            <span className="text-xs font-extrabold uppercase tracking-[0.08em] text-[#eebf72]">
              {copy.networkBadge}
            </span>
            <h2 className="mt-2 max-w-lg text-4xl font-extrabold leading-tight text-[#e8ded5] sm:text-5xl">
              {copy.networkTitle}
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-[#d2c4b3]">
              {copy.networkText}
            </p>
            <div className="mt-9 grid gap-5 sm:grid-cols-2">
              {copy.networkLinks.map(([icon, label]) => (
                <div
                  key={label}
                  className="flex items-center gap-3 text-sm font-semibold text-[#d2c4b3]"
                >
                  <Icon className="text-[22px] text-[#ffce80]">{icon}</Icon>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="rounded border border-[#4f4538] bg-[#231f19] p-2">
              <img
                src={networkImage}
                alt="Digital global cargo route map"
                className="w-full rounded object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="bg-[#1f1b16] px-4 py-12 sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded border border-[#4f4538] bg-[#231f19] lg:flex">
            <div className="flex flex-col justify-between bg-[#ffce80] p-10 text-[#432c00] lg:w-2/5">
              <div>
                <h2 className="mb-4 text-3xl font-extrabold">
                  {copy.contactTitle}
                </h2>
                <p className="mb-12 max-w-md text-sm leading-6 text-[#644400]">
                  {copy.contactText}
                </p>
              </div>
              <div className="space-y-5 text-sm">
                <div className="flex items-center gap-4">
                  <Icon className="text-[20px]">mail</Icon>
                  <span>ops@dorayslogistics.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <Icon className="text-[20px]">call</Icon>
                  <span>+90 (212) 555 0192</span>
                </div>
              </div>
            </div>
            <form
              className="grid gap-4 p-10 lg:w-3/5 md:grid-cols-2"
              onSubmit={(event) => {
                event.preventDefault();
                setSubmitted(true);
              }}
            >
              {copy.formFields.map(([label, placeholder, type]) => (
                <label key={label} className="flex flex-col gap-1">
                  <span className="text-xs font-extrabold uppercase tracking-[0.08em] text-[#9b8f7f]">
                    {label}
                  </span>
                  {type === "select" ? (
                    <select
                      required
                      className="rounded border border-[#4f4538] bg-[#16130e] px-3 py-2.5 text-sm text-[#eae1d8] outline-none focus:border-[#ffce80] focus:ring-1 focus:ring-[#ffce80]"
                    >
                      {copy.freightOptions.map((option) => (
                        <option key={option}>{option}</option>
                      ))}
                    </select>
                  ) : (
                    <input
                      required
                      type={type}
                      placeholder={placeholder}
                      className="rounded border border-[#4f4538] bg-[#16130e] px-3 py-2.5 text-sm text-[#eae1d8] outline-none placeholder:text-[#9b8f7f] focus:border-[#ffce80] focus:ring-1 focus:ring-[#ffce80]"
                    />
                  )}
                </label>
              ))}
              <label className="flex flex-col gap-1 md:col-span-2">
                <span className="text-xs font-extrabold uppercase tracking-[0.08em] text-[#9b8f7f]">
                  {copy.message}
                </span>
                <textarea
                  required
                  rows={4}
                  placeholder={copy.messagePlaceholder}
                  className="rounded border border-[#4f4538] bg-[#16130e] px-3 py-2.5 text-sm text-[#eae1d8] outline-none placeholder:text-[#9b8f7f] focus:border-[#ffce80] focus:ring-1 focus:ring-[#ffce80]"
                />
              </label>
              <button
                type="submit"
                className="min-h-12 rounded bg-[#ffce80] text-sm font-bold text-[#432c00] transition hover:shadow-[0_0_20px_rgba(255,206,128,0.22)] md:col-span-2"
              >
                {copy.send}
              </button>
              {submitted && (
                <p className="rounded border border-[#ffce80]/35 bg-[#ffce80]/10 px-4 py-3 text-sm font-semibold text-[#ffce80] md:col-span-2">
                  {copy.sent}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#4f4538] bg-[#110e09] px-4 py-12 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 grid gap-10 md:grid-cols-4">
            <div>
              <img
                src="/dorays-logo-light.png"
                alt="Dorays Logistics Logo"
                className="mb-4 h-14 w-auto object-contain max-w-[180px]"
              />
              <p className="max-w-xs text-sm leading-6 text-[#9b8f7f]">
                {copy.footerText}
              </p>
            </div>
            {copy.footerColumns.map(([title, links]) => (
              <div key={title as string}>
                <h4 className="mb-4 text-xs font-extrabold uppercase tracking-[0.08em] text-[#eae1d8]">
                  {title}
                </h4>
                <ul className="space-y-2 text-sm text-[#9b8f7f]">
                  {(links as string[]).map((link) => (
                    <li key={link}>
                      <a href="#" className="transition hover:text-[#ffce80]">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center justify-between gap-4 border-t border-[#4f4538] pt-6 text-xs text-[#9b8f7f] md:flex-row">
            <p>© 2024 Dorays Logistics. All rights reserved.</p>
            <div className="flex gap-6">
              {copy.legal.map((item) => (
                <a key={item} href="#" className="hover:text-[#ffce80]">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
