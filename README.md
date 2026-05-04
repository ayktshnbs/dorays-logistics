# Dorays Logistics Website

Dorays Logistics için hazırlanmış, mobil öncelikli, profesyonel ve iki dilli kurumsal web sitesi projesidir.

Site; Türkçe / İngilizce dil seçeneği, dark / light mode desteği, responsive tasarım, hizmet kartları, kurumsal tanıtım alanları ve teklif / iletişim yönlendirmeleri içermektedir.

## Özellikler

- Mobil öncelikli responsive tasarım
- Türkçe ve İngilizce dil seçeneği
- Dark mode / light mode geçişi
- Profesyonel lojistik şirketi arayüzü
- Kara yolu, deniz yolu, hava yolu, gümrük ve depolama hizmet alanları
- Kurumsal logo kullanımı
- Modern Next.js altyapısı
- Tailwind CSS ile tasarım

## Kullanılan Teknolojiler

- Next.js
- React
- TypeScript
- Tailwind CSS

## Kurulum

Projeyi bilgisayarınıza indirdikten sonra terminali proje klasöründe açın.

```bash
npm install

Tarayıcıdan aşağıdaki adresi açın:

http://localhost:3000
Proje Yapısı
dorays-logistics-website/
├── public/
│   └── dorays-logo.jpg
├── src/
│   └── app/
│       ├── globals.css
│       ├── layout.tsx
│       └── page.tsx
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── postcss.config.mjs
├── next.config.ts
└── README.md
Düzenleme

Ana sayfa içeriği aşağıdaki dosyadan düzenlenebilir:

src/app/page.tsx

Genel stiller aşağıdaki dosyadan düzenlenebilir:

src/app/globals.css

Logo dosyası aşağıdaki klasörde yer alır:

public/dorays-logo.jpg
Build Alma

Projeyi canlıya almadan önce production build oluşturmak için:

npm run build

Build sonrası projeyi çalıştırmak için:

npm run start
Yayına Alma

Bu proje Vercel, Netlify veya kendi sunucunuzda yayınlanabilir. Next.js projeleri için en kolay yöntem Vercel üzerinden deploy etmektir.

Lisans

Bu proje Dorays Logistics için hazırlanmıştır. Tüm marka, logo ve içerik hakları ilgili şirkete aittir.


## .gitignore

```gitignore
# dependencies
node_modules/

# next.js
.next/
out/

# production
build/
dist/

# cache
.cache/
*.tsbuildinfo

# logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*

# env files
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# system files
.DS_Store
Thumbs.db

# editor folders
.vscode/
.idea/

# vercel
.vercel/

# misc
*.log
