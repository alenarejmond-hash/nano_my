import React, { useState, useEffect, useRef } from 'react';
import { 
  Globe, Star, UserCircle2, Diamond, Crown,
  QrCode, Share2, Copy, X, Check,
  RefreshCcw, Play, PlusSquare, UserPlus,
  Smartphone, CreditCard, Key, Sparkles,
  Moon, Brain, PlaneTakeoff, Camera, Activity, 
  Droplets, Building2, Smile, Aperture, ChevronLeft, ChevronRight, ExternalLink,
  Phone, Send, Code2, ChefHat, Info
} from 'lucide-react';

const Instagram = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const CONTENT = {
  ru: {
    creator: {
      bgImage: '/bg-creator.jpg',
      avatar: '/bg-creator.jpg', 
      audioGreeting: '/greeting.mp3',
      badge: 'DESIGN & CODE',
      name1: 'ЕЛЕНА',
      name2: 'СОТНИКОВА',
      role: 'Premium Web',
      status: 'Digital Creator & Web Developer',
      quote1: 'Создаю цифровые экосистемы,',
      quote2: 'в которые влюбляются с первого клика.',
      websiteText: 'Подробнее...',
      websiteLink: 'https://appseapro.com/',
      actionText: 'ОБСУДИТЬ ПРОЕКТ',
      actionLink: 'https://t.me/elenlime',
    },
    contact: {
      phone: '+37494261123',
      whatsapp: '+79995051277',
      telegram: 'elenlime',
      company: 'Premium Web',
      title: 'Digital Creator & Web Developer',
      website: 'https://appseapro.com/'
    },
    views: {
      profile: {
        title: 'Обо мне',
        desc: 'Добро пожаловать в мое цифровое пространство! Меня зовут Елена Сотникова - Web-разработчик и креатор IT-решений премиум-класса.\n\nЯ не просто пишу код. Я создаю цифровой WOW-эффект для вашего бизнеса: от премиальных PWA-визиток до интерактивных систем для ресторанов.\n\nМоя миссия — забрать у вас рутину, автоматизировать процессы с помощью нейросетей и упаковать ваш продукт так, чтобы клиенты влюблялись в него с первого клика. Делаю дорого, эстетично и технологично.',
      },
      solutions: {
        title: 'IT-продукты для бизнеса',
        subtitle: 'Экосистема премиальных решений, где безупречный дизайн встречается со сложным кодом.',
        items: [
          {
            id: 'pwa',
            icon: 'Crown',
            title: 'Цифровые PWA-Визитки',
            short: 'Премиальная PWA-визитка с мгновенным сохранением в телефон клиента.',
            sheetText: 'Это не просто контакты, это ваш цифровой статус.\nВизитка сохраняется на экран телефона как настоящее приложение, вызывая WOW-эффект с первых секунд.\n\n• Безупречная работа: Открывается моментально, работает без VPN (для РФ), а ваш личный QR-код считывается даже без доступа к интернету.\n• Максимальное удобство: Сохранение ваших контактов, соцсетей и ссылок в телефон клиента ровно в 1 клик.\n• Ваш личный бренд: Уникальный именной поддомен в зоне .com для визитки уже включен в стоимость (для РФ в зоне .ru)\n• Никаких подписок: Разовая оплата за разработку — актив ваш навсегда, без скрытых платежей.\n\n✦ Тариф Standart: Стильный шаблонный дизайн под вашу нишу (от 5 700 ₽).\n✦ Тариф Premium: 100% уникальная разработка с 3D-анимациями (от 15 000 ₽).',
            btns: [
              { text: 'Заказать визитку', link: 'https://t.me/elenlime?text=Елена, привет! Хочу заказать свою визитку', primary: true },
              { text: 'Выбрать шаблон', action: 'gallery', primary: false }
            ]
          },
          {
            id: 'horeca',
            icon: 'ChefHat',
            title: 'Smart HoReCa (PWA-Меню)',
            short: 'Интерактивная система заказов без скачивания. Ускоряет сервис, повышает средний чек.',
            sheetText: 'Полноценное приложение вашего заведения, которое работает без скачивания и установки. Увеличьте скорость обслуживания и средний чек за счет цифрового комфорта.\n\n• Сервис нового уровня: Гость сканирует QR-код на столе и мгновенно получает доступ к меню на трех языках (AM, RU, EN).\n• Telegram-интеграция: Сформированные заказы, просьбы принести счет и вызовы официанта моментально прилетают в рабочий чат персонала.\n• Умная архитектура: Облачная панель управления позволяет вам менять цены и ставить блюда в «стоп-лист» в один клик со смартфона.\n• Продающий дизайн: Премиальный, интуитивно понятный интерфейс, который вызывает аппетит и помогает гостю быстрее собрать корзину заказа.',
            btns: [
              { text: 'Рассчитать стоимость', link: 'https://t.me/elenlime?text=Привет! Хочу рассчитать стоимость Smart-меню', primary: true },
              { text: 'Смотреть демо', link: 'https://menu.appseapro.com/', primary: false }
            ]
          },
          {
            id: 'web',
            icon: 'Code2',
            title: 'Кастомная Web-разработка',
            short: 'Премиальные Web-приложения, спроектированные под логику вашего бизнеса.',
            sheetText: 'Забудьте о тяжелых сайтах и шаблонных конструкторах. Я создаю легковесные цифровые продукты с премиальным UI/UX-дизайном, которые работают на ваш имидж и продажи. Ваш бизнес заслуживает индивидуальной архитектуры.\n\n• Умная автоматизация: Бесшовная интеграция виджетов онлайн-записи (YClients, DIKIDI), подключение аналитики и настройка Telegram-ботов для сбора заявок напрямую к вам в мессенджер.\n• Интерфейсы любой сложности: От стильных лендингов и интерактивных прайс-листов до многостраничных PWA-каталогов.\n• Современные технологии: Использование передовых фреймворков. Приложение работает молниеносно, без зависаний и лишнего «визуального шума».\n• Фокус на конверсию: Продумываю путь клиента так, чтобы каждое касание экрана приносило эстетическое удовольствие и вело к целевому действию.',
            btns: [
              { text: 'Обсудить проект', link: 'https://t.me/elenlime?text=Привет! Хочу обсудить web-разработку', primary: true }
            ]
          },
          {
            id: 'nfc',
            icon: 'Key',
            title: 'NFC-Аксессуары (Crazy Horse)',
            short: 'Авторские NFC-брелоки из натуральной кожи Crazy Horse.',
            sheetText: 'Физическое воплощение вашего цифрового статуса. Эксклюзивные NFC-брелоки ручной работы из натуральной винтажной кожи премиум-класса.\n\n• Магия прикосновения: Поделитесь своей цифровой визиткой без лишних слов. Просто приложите брелок к смартфону партнера — и ваши контакты мгновенно откроются на его экране.\n• Безупречная эстетика: Благородная фактура кожи Crazy Horse, надежная металлическая фурнитура и аккуратная ручная сборка. Статусный аксессуар, который приятно держать в руках.\n• Индивидуальная прошивка: NFC-чип скрыт внутри кожи, не требует подзарядки и программируется строго под ваш личный цифровой актив.\n\nДоставка по РФ, Армении и всему миру осуществляется курьерскими службами и оплачивается заказчиком отдельно.\nСтоимость: 2 500 ₽',
            btns: [
              { text: 'Заказать аксессуар', link: 'https://t.me/elenlime?text=Привет! Хочу заказать NFC-аксессуар', primary: true }
            ]
          }
        ]
      },
      portfolio: {
        title: 'Портфолио & Демо',
        desc: 'Интерактивный шоурум digital-продуктов',
        galleryBtn: 'Галерея дизайнов визиток',
        menuBtn: 'Демо Smart-меню',
        videoCaption: 'Promo Video'
      },
      contactsTitle: 'Контакты',
      contacts: { tg: 'Telegram', insta: 'Instagram', phone: 'Позвонить' },
      reviewsTitle: 'Отзывы',
      reviews: [
        { name: 'Виктория', date: '20.03.2026', text: '"Забыла про конструкторы как про страшный сон. Очень плавно, стильно, вайб передается на 100%."' },
        { name: 'Алексей', date: '21.03.2026', text: '"Дизайн просто космос. Клиенты теперь не хотят уходить из моей визитки. Конверсия выросла вдвое!"' },
        { name: 'Мария', date: '01.04.2026', text: '"Елена — мастер своего дела. Все продумано до мелочей: от визуала до анимаций."' },
        { name: 'Дмитрий', date: '12.04.2026', text: '"Эта визитка — просто отвал башки! Партнеры каждый раз в шоке, когда я прикладываю брелок к их телефону и мои контакты сразу появляются на экране. Выглядит невероятно статусно!"' },
        { name: 'Анна', date: '28.04.2026', text: '"Выглядит очень дорого. Больше никаких мятых бумажных карточек, которые все теряют. Открывается моментально, как настоящее приложение на айфоне. Я в восторге!"' }
      ]
    },
    ui: {
      shareTitle: 'Поделиться визиткой',
      shareDesc: 'Дайте отсканировать QR-код или отправьте ссылку напрямую.',
      shareText: 'Привет! Вот моя визитка с контактами:',
      copy: 'Копировать',
      copied: 'Скопировано!',
      send: 'Отправить',
      installTitle: 'Установить приложение',
      installDesc: 'Добавьте визитку на экран «Домой», чтобы открывать её в один клик без браузера.',
      installStep1_1: 'Нажмите кнопку ',
      installStep1_2: '«Поделиться»',
      installStep1_3: 'в меню браузера.',
      installStep2_1: 'Выберите ',
      installStep2_2: '«На экран "Домой"»',
      installStep2_3: 'в появившемся списке.',
      done: 'Готово',
      saveContact: 'Сохранено с цифровой визитки',
      comingSoonVideo: 'Видео в разработке',
      detailsBtn: 'Подробнее'
    },
    conditions: {
      link: 'Условия работы',
      offer: 'Договор оферты',
      title: 'Условия создания вашего digital-актива',
      items: [
          { title: 'Бронирование и старт работ', text: 'Работа ведется строго по предварительной записи. Бронирование даты и старт подготовительных работ осуществляются после 100% оплаты (тариф STANDART) или 50% задатка (кастомный тариф PREMIUM).' },
          { title: 'Разработка цифрового актива', text: 'Вы получаете готовую PWA-систему точно в забронированный день. Обязательное условие — предоставление 100% заполненного брифа и медиа-материалов не позднее, чем за 2 дня до старта. Правки (замена текста/фото) вносятся бесплатно в течение 7 дней после сдачи проекта.' },
          { title: 'Обслуживание Smart HoReCa', text: 'Разработка QR-меню для ресторанов включает разовый платеж за создание системы и абонентскую плату за техническую поддержку и аренду серверов (SaaS). При просрочке абонентского платежа доступ к меню приостанавливается.' },
          { title: 'Производство NFC-аксессуаров', text: 'Каждый брелок из кожи Crazy Horse создается вручную индивидуально под вас. Срок изготовления — 3–7 рабочих дней после утверждения цифровой визитки. Доставка курьерскими службами оплачивается отдельно. Изделия с индивидуальной NFC-прошивкой обмену и возврату не подлежат.' },
          { title: 'Дизайн и кастомизация', text: 'В тариф STANDART включена адаптация фирменных цветов и настройка ссылок/контактов. Изменение базовой архитектуры блоков и добавление кастомных 3D-анимаций производятся только в рамках тарифа PREMIUM.' },
          { title: 'Отмена и поддержка', text: 'Внесенная сумма (100% для Standart или 50% для Premium) является невозвратным задатком, закрепляющим за вами время разработки. В будущем разовое обновление данных на сданном проекте (смена контактов, ссылок или фото) составляет 500 ₽ / 2000 ֏ / 6 $.' }
      ],
      footer: 'Прозрачность — залог безупречного стиля.\nDesign & Code by Elena Sotnikova.',
      accept: 'ПРИНИМАЮ'
    }
  },
  en: {
    creator: {
      bgImage: '/bg-creator.jpg',
      avatar: '/bg-creator.jpg', 
      audioGreeting: '/greeting.mp3',
      badge: 'DESIGN & CODE',
      name1: 'ELENA',
      name2: 'SOTNIKOVA',
      role: 'Premium Web',
      status: 'Digital Creator & Web Developer',
      quote1: 'I create digital ecosystems',
      quote2: 'that people fall in love with from the first click.',
      websiteText: 'Learn more...',
      websiteLink: 'https://appseapro.com/',
      actionText: 'DISCUSS PROJECT',
      actionLink: 'https://t.me/elenlime',
    },
    contact: {
      phone: '+37494261123',
      whatsapp: '+79995051277',
      telegram: 'elenlime',
      company: 'Premium Web',
      title: 'Digital Creator & Web Developer',
      website: 'https://appseapro.com/'
    },
    views: {
      profile: {
        title: 'About Me',
        desc: 'Welcome to my digital space! My name is Elena Sotnikova - Web Developer and creator of premium IT solutions.\n\nI don\'t just write code. I create a digital WOW effect for your business: from premium PWA business cards to interactive systems for restaurants.\n\nMy mission is to take away your routine, automate processes using AI, and package your product so that clients fall in love with it from the first click. I make it expensive, aesthetic, and technological.',
      },
      solutions: {
        title: 'IT Products for Business',
        subtitle: 'An ecosystem of premium solutions where flawless design meets complex code.',
        items: [
          {
            id: 'pwa',
            icon: 'Crown',
            title: 'Digital PWA Cards',
            short: 'Your personal mini-website in the client\'s phone in 1 click.',
            sheetText: 'Works without VPN, instantly saves contact.\n\n• Standart Plan: Stylish template design for your niche (from $72).\n• Premium Plan: 100% unique development with 3D animations (from $189).',
            btns: [
              { text: 'Order a card', link: 'https://t.me/elenlime', primary: true },
              { text: 'Choose template', action: 'gallery', primary: false }
            ]
          },
          {
            id: 'horeca',
            icon: 'ChefHat',
            title: 'Smart HoReCa (PWA Menu)',
            short: 'Interactive QR menu and order processing for restaurants.',
            sheetText: 'A full-fledged app for your establishment without downloading.\n\n• Guests scan a QR code and see a multilingual menu.\n• Orders and waiter calls instantly arrive in a Telegram chat.\n• Price management via Google Sheets.\n• AI generation of food photos.',
            btns: [
              { text: 'Calculate cost', link: 'https://t.me/elenlime', primary: true },
              { text: 'View demo', link: 'https://menu.appseapro.com/', primary: false }
            ]
          },
          {
            id: 'web',
            icon: 'Code2',
            title: 'Custom Web Dev',
            short: 'Premium Web applications designed for your business logic.',
            sheetText: 'Forget about heavy websites and template builders. I create lightweight digital products with premium UI/UX design that work for your image and sales. Your business deserves a custom architecture.\n\n• Smart automation: Seamless integration of online booking widgets (YClients, DIKIDI), analytics connection, and Telegram bots setup to collect requests directly to your messenger.\n• Interfaces of any complexity: From stylish landing pages and interactive price lists to multi-page PWA catalogs.\n• Modern technologies: Utilizing advanced frameworks. The application works lightning fast, without lags and unnecessary "visual noise".\n• Focus on conversion: I design the customer journey so that every touch of the screen brings aesthetic pleasure and leads to the target action.',
            btns: [
              { text: 'Discuss project', link: 'https://t.me/elenlime', primary: true }
            ]
          },
          {
            id: 'nfc',
            icon: 'Key',
            title: 'NFC Accessories (Crazy Horse)',
            short: 'Original NFC keychains from genuine Crazy Horse leather.',
            sheetText: 'The physical embodiment of your digital status. Exclusive handmade NFC keychains from premium genuine vintage leather.\n\n• Magic touch: Share your digital business card without saying a word. Just tap the keychain to a partner\'s smartphone, and your contacts will instantly open on their screen.\n• Flawless aesthetics: Noble texture of Crazy Horse leather, reliable metal hardware, and careful hand assembly. A status accessory that is a pleasure to hold.\n• Custom firmware: The NFC chip is hidden inside the leather, requires no charging, and is programmed strictly for your personal digital asset.\n\nWorldwide delivery by courier services is paid separately by the customer.\nPrice: $32',
            btns: [
              { text: 'Order accessory', link: 'https://t.me/elenlime', primary: true }
            ]
          }
        ]
      },
      portfolio: {
        title: 'Portfolio & Demo',
        desc: 'Interactive showroom of digital products',
        galleryBtn: 'Business Card Gallery',
        menuBtn: 'Smart Menu Demo',
        videoCaption: 'Promo Video'
      },
      contactsTitle: 'Contacts',
      contacts: { tg: 'Telegram', insta: 'Instagram', phone: 'Call' },
      reviewsTitle: 'Reviews',
      reviews: [
        { name: 'Victoria', date: '20.03.2026', text: '"Forgot about website builders like a bad dream. Very smooth, stylish, the vibe is 100% there."' },
        { name: 'Alexey', date: '21.03.2026', text: '"The design is simply cosmic. Clients now don\'t want to leave my business card. Conversions have doubled!"' },
        { name: 'Maria', date: '01.04.2026', text: '"Elena is a master of her craft. Everything is thought out to the smallest detail: from visuals to animations."' },
        { name: 'Dmitry', date: '12.04.2026', text: '"This digital card is simply mind-blowing! Partners are always in shock when I tap the keychain to their phone and my contacts appear instantly. Looks incredibly prestigious!"' },
        { name: 'Anna', date: '28.04.2026', text: '"Looks very expensive. No more crumpled paper cards that everyone loses. Opens instantly, just like a real iPhone app. I love it!"' }
      ]
    },
    ui: {
      shareTitle: 'Share Card',
      shareDesc: 'Let others scan your QR code or send the link directly.',
      shareText: 'Hi! Here is my digital business card:',
      copy: 'Copy',
      copied: 'Copied!',
      send: 'Send',
      installTitle: 'Install App',
      installDesc: 'Add the card to your Home Screen for one-click access.',
      installStep1_1: 'Tap the ',
      installStep1_2: '«Share»',
      installStep1_3: 'button in browser.',
      installStep2_1: 'Select ',
      installStep2_2: '«Add to Home Screen»',
      installStep2_3: '.',
      done: 'Done',
      saveContact: 'Saved from digital business card',
      comingSoonVideo: 'Video in progress',
      detailsBtn: 'Details'
    },
    conditions: {
      link: 'Terms of Work',
      offer: 'Offer Agreement',
      title: 'Terms of Service',
      items: [
          { title: 'Booking & Start of Work', text: 'Work is strictly by appointment. Booking a date and starting preparatory work requires a 100% payment (STANDART plan) or a 50% deposit (custom PREMIUM plan).' },
          { title: 'Digital Asset Development', text: 'You receive the finished PWA system exactly on the booked day. A mandatory condition is the provision of a 100% completed brief and media materials no later than 2 days before the start. Edits (text/photo replacement) are made free of charge within 7 days after delivery.' },
          { title: 'Smart HoReCa Maintenance', text: 'The development of a QR menu for restaurants includes a one-time setup fee and a subscription fee for technical support and server hosting (SaaS). If the subscription payment is overdue, access to the menu is temporarily suspended.' },
          { title: 'NFC Accessories Production', text: 'Each Crazy Horse leather keychain is handcrafted individually for you. Production time is 3-7 business days after the digital card is approved. Courier delivery is paid separately. Items with custom NFC firmware cannot be exchanged or returned.' },
          { title: 'Design & Customization', text: 'The STANDART plan includes adapting brand colors and setting up links/contacts. Changing the basic block architecture and adding custom 3D animations are available only in the PREMIUM plan.' },
          { title: 'Cancellation & Support', text: 'The paid amount (100% for Standart or 50% deposit for Premium) is non-refundable and secures your development time. A one-time update of data on a delivered project (changing contacts, links, or photos) costs $6 / 500 ₽ / 2000 ֏.' }
      ],
      footer: 'Transparency is the key to flawless style.\nDesign & Code by Elena Sotnikova.',
      accept: 'I ACCEPT'
    }
  },
  hy: {
    creator: {
      bgImage: '/bg-creator.jpg',
      avatar: '/bg-creator.jpg', 
      audioGreeting: '/greeting.mp3',
      badge: 'DESIGN & CODE',
      name1: 'ԵԼԵՆԱ',
      name2: 'ՍՈՏՆԻԿՈՎԱ',
      role: 'Premium Web',
      status: 'Digital Creator & Web Developer',
      quote1: 'Ստեղծում եմ թվային էկոհամակարգեր,',
      quote2: 'որոնց սիրահարվում են առաջին իսկ հպումից:',
      websiteText: 'Ավելին...',
      websiteLink: 'https://appseapro.com/',
      actionText: 'ՔՆՆԱՐԿԵԼ ՆԱԽԱԳԻԾԸ',
      actionLink: 'https://t.me/elenlime',
    },
    contact: {
      phone: '+37494261123',
      whatsapp: '+79995051277',
      telegram: 'elenlime',
      company: 'Premium Web',
      title: 'Digital Creator & Web Developer',
      website: 'https://appseapro.com/'
    },
    views: {
      profile: {
        title: 'Իմ մասին',
        desc: 'Բարի գալուստ իմ թվային տարածք: Իմ անունն է Ելենա Սոտնիկովա՝ Web-մշակող և պրեմիում դասի IT-լուծումների ստեղծող:\n\nԵս պարզապես կոդ չեմ գրում: Ես ստեղծում եմ թվային WOW էֆեկտ ձեր բիզնեսի համար՝ պրեմիում PWA այցեքարտերից մինչև ռեստորանների ինտերակտիվ համակարգեր:\n\nԻմ առաքելությունն է ազատել ձեզ առօրյա աշխատանքից, ավտոմատացնել գործընթացները նեյրոցանցերի միջոցով և փաթեթավորել ձեր արտադրանքն այնպես, որ հաճախորդները սիրահարվեն դրան առաջին իսկ հպումից: Ես դա անում եմ թանկ, էսթետիկ և տեխնոլոգիապես:',
      },
      solutions: {
        title: 'IT-արտադրանքներ բիզնեսի համար',
        subtitle: 'Պրեմիում լուծումների էկոհամակարգ, որտեղ անթերի դիզայնը հանդիպում է բարդ կոդին:',
        items: [
          {
            id: 'pwa',
            icon: 'Crown',
            title: 'Թվային PWA Այցեքարտեր',
            short: 'Ձեր անձնական մինի-կայքը հաճախորդի հեռախոսում 1 հպումով:',
            sheetText: 'Աշխատում է առանց VPN-ի, ակնթարթորեն պահպանում է կոնտակտը:\n\n• Standart Տարիֆ. Ոճային ձևանմուշ ձեր ոլորտի համար (սկսած 22 800 ֏): \n• Premium Տարիֆ. 100% անհատական մշակում 3D-անիմացիաներով (սկսած 60 000 ֏):',
            btns: [
              { text: 'Պատվիրել այցեքարտ', link: 'https://t.me/elenlime', primary: true },
              { text: 'Ընտրել ձևանմուշ', action: 'gallery', primary: false }
            ]
          },
          {
            id: 'horeca',
            icon: 'ChefHat',
            title: 'Smart HoReCa (PWA-Մենյու)',
            short: 'Ինտերակտիվ QR-մենյու և պատվերների ընդունում ռեստորանների համար:',
            sheetText: 'Ձեր հաստատության լիարժեք հավելվածը առանց ներբեռնման:\n\n• Հյուրը սկանավորում է QR-կոդը սեղանին և տեսնում բազմալեզու մենյու:\n• Պատվերները և մատուցողի կանչերը ակնթարթորեն հասնում են Telegram:\n• Գների կառավարում Google Աղյուսակների միջոցով:\n• AI-գեներացված սննդի լուսանկարներ:',
            btns: [
              { text: 'Հաշվել արժեքը', link: 'https://t.me/elenlime', primary: true },
              { text: 'Դիտել դեմո', link: 'https://menu.appseapro.com/', primary: false }
            ]
          },
          {
            id: 'web',
            icon: 'Code2',
            title: 'Անհատական Web-մշակում',
            short: 'Պրեմիում Web-հավելվածներ՝ նախագծված ձեր բիզնեսի տրամաբանության համար:',
            sheetText: 'Մոռացեք ծանր կայքերի և ձևանմուշային կոնստրուկտորների մասին: Ես ստեղծում եմ թեթև թվային պրոդուկտներ պրեմիում UI/UX դիզայնով, որոնք աշխատում են ձեր իմիջի և վաճառքների համար: Ձեր բիզնեսն արժանի է անհատական ճարտարապետության:\n\n• Խելացի ավտոմատացում: Առցանց գրանցման վիջեթների (YClients, DIKIDI) անխափան ինտեգրում, վերլուծությունների միացում և Telegram բոտերի կարգավորում՝ հայտերն անմիջապես ձեր մեսենջեր ստանալու համար:\n• Ցանկացած բարդության ինտերֆեյսներ: Ոճային լենդինգներից և ինտերակտիվ գնացուցակներից մինչև բազմաէջ PWA-կատալոգներ:\n• Ժամանակակից տեխնոլոգիաներ: Առաջադեմ ֆրեյմվորքների օգտագործում: Հավելվածն աշխատում է կայծակնային արագությամբ, առանց կախումների և ավելորդ «վիզուալ աղմուկի»:\n• Ֆոկուս կոնվերսիայի վրա: Մտածում եմ հաճախորդի ուղին այնպես, որ էկրանի յուրաքանչյուր հպում էսթետիկ հաճույք պատճառի և տանի դեպի նպատակային գործողություն:',
            btns: [
              { text: 'Քննարկել նախագիծը', link: 'https://t.me/elenlime', primary: true }
            ]
          },
          {
            id: 'nfc',
            icon: 'Key',
            title: 'NFC-Աքսեսուարներ (Crazy Horse)',
            short: 'Հեղինակային NFC-կախազարդեր բնական Crazy Horse կաշվից:',
            sheetText: 'Ձեր թվային կարգավիճակի ֆիզիկական մարմնավորումը: Բացառիկ ձեռագործ NFC-կախազարդեր պրեմիում դասի բնական վինտաժային կաշվից:\n\n• Հպման մոգությունը: Կիսվեք ձեր թվային այցեքարտով առանց ավելորդ բառերի: Պարզապես մոտեցրեք կախազարդը գործընկերոջ սմարթֆոնին, և ձեր կոնտակտներն անմիջապես կհայտնվեն նրա էկրանին:\n• Անթերի էսթետիկա: Crazy Horse կաշվի ազնիվ ֆակտուրա, հուսալի մետաղական ֆուրնիտուրա և խնամքով ձեռագործ աշխատանք: Կարգավիճակային աքսեսուար, որը հաճելի է պահել ձեռքում:\n• Անհատական ծրագրավորում: NFC-չիպը թաքնված է կաշվի մեջ, չի պահանջում լիցքավորում և ծրագրավորվում է խստորեն ձեր անձնական թվային ակտիվի համար:\n\nԱռաքումը ՌԴ, Հայաստան և ամբողջ աշխարհ իրականացվում է սուրհանդակային ծառայությունների միջոցով և վճարվում է պատվիրատուի կողմից առանձին:\nԱրժեքը՝ 10 000 ֏',
            btns: [
              { text: 'Պատվիրել աքսեսուար', link: 'https://t.me/elenlime', primary: true }
            ]
          }
        ]
      },
      portfolio: {
        title: 'Պորտֆոլիո և Դեմո',
        desc: 'Ինտերակտիվ թվային պրոդուկտների ցուցասրահ',
        galleryBtn: 'Այցեքարտերի դիզայնների պատկերասրահ',
        menuBtn: 'Smart-մենյու դեմո',
        videoCaption: 'Promo Video'
      },
      contactsTitle: 'Կապ',
      contacts: { tg: 'Telegram', insta: 'Instagram', phone: 'Զանգահարել' },
      reviewsTitle: 'Արձագանքներ',
      reviews: [
        { name: 'Վիկտորյա', date: '20.03.2026', text: '"Մոռացել եմ կոնստրուկտորների մասին ինչպես վատ երազի: Շատ սահուն, ոճային, մթնոլորտը փոխանցվում է 100%-ով:"' },
        { name: 'Ալեքսեյ', date: '21.03.2026', text: '"Դիզայնը պարզապես տիեզերք է: Հաճախորդներն այժմ չեն ցանկանում լքել իմ այցեքարտը:"' },
        { name: 'Մարիա', date: '01.04.2026', text: '"Ելենան իր գործի վարպետն է: Ամեն ինչ մտածված է մինչև ամենափոքր դետալը՝ վիզուալից մինչև անիմացիաներ:"' },
        { name: 'Դմիտրի', date: '12.04.2026', text: '"Այս թվային այցեքարտը պարզապես ցնցող է: Գործընկերներս միշտ շոկի մեջ են, երբ կախազարդը մոտեցնում եմ նրանց հեռախոսին, և իմ կոնտակտներն անմիջապես հայտնվում են էկրանին:"' },
        { name: 'Աննա', date: '28.04.2026', text: '"Շատ թանկարժեք տեսք ունի: Էլ ոչ մի ճմրթված թղթե այցեքարտ, որոնք բոլորը կորցնում են: Բացվում է ակնթարթորեն՝ ճիշտ ինչպես իսկական հավելվածը:"' }
      ]
    },
    ui: {
      shareTitle: 'Կիսվել այցեքարտով',
      shareDesc: 'Թույլ տվեք սկանավորել QR-կոդը կամ անմիջապես ուղարկեք հղումը:',
      shareText: 'Ողջույն: Ահա իմ թվային այցեքարտը:',
      copy: 'Պատճենել',
      copied: 'Պատճենված է!',
      send: 'Ուղարկել',
      installTitle: 'Տեղադրել հավելվածը',
      installDesc: 'Ավելացրեք այցեքարտը «Գլխավոր» էկրանին:',
      installStep1_1: 'Սեղմեք ',
      installStep1_2: '«Կիսվել»',
      installStep1_3: ' կոճակը բրաուզերում:',
      installStep2_1: 'Ընտրեք ',
      installStep2_2: '«Ավելացնել Գլխավոր էկրանին»',
      installStep2_3: ':',
      done: 'Պատրաստ է',
      saveContact: 'Պահպանված է թվային այցեքարտից',
      comingSoonVideo: 'Տեսանյութը մշակման փուլում է',
      detailsBtn: 'Ավելին'
    },
    conditions: {
      link: 'Աշխատանքի պայմաններ',
      offer: 'Օֆերտայի պայմանագիր',
      title: 'Աշխատանքի պայմանները',
      items: [
          { title: 'Ամրագրում և աշխատանքի մեկնարկ', text: 'Աշխատանքն իրականացվում է միայն նախնական գրանցմամբ: Ամսաթվի ամրագրումը և նախապատրաստական աշխատանքները սկսվում են 100% վճարումից (STANDART սակագին) կամ 50% կանխավճարից (PREMIUM սակագին) հետո:' },
          { title: 'Թվային ակտիվի մշակում', text: 'Դուք ստանում եք պատրաստի PWA-համակարգը ճիշտ ամրագրված օրը: Պարտադիր պայման է լրացված բրիֆի և նյութերի տրամադրումը մեկնարկից առնվազն 2 օր առաջ: Փոփոխությունները (տեքստի/լուսանկարի փոխարինում) անվճար են նախագծի հանձնումից հետո 7 օրվա ընթացքում:' },
          { title: 'Smart HoReCa Սպասարկում', text: 'Ռեստորանների համար QR-մենյուի մշակումը ներառում է միանվագ վճար համակարգի ստեղծման համար և բաժանորդային վճար տեխնիկական աջակցության և սերվերների վարձակալության համար (SaaS): Վճարման ուշացման դեպքում մենյուի հասանելիությունը ժամանակավորապես կասեցվում է:' },
          { title: 'NFC Աքսեսուարների արտադրություն', text: 'Crazy Horse կաշվից յուրաքանչյուր կախազարդ ստեղծվում է ձեռքով անհատական ձեզ համար: Պատրաստման ժամկետը՝ 3-7 աշխատանքային օր: Առաքումը վճարվում է առանձին: Անհատական NFC ծրագրավորմամբ ապրանքները ենթակա չեն փոխանակման կամ վերադարձի:' },
          { title: 'Դիզայն և հարմարեցում', text: 'STANDART սակագինը ներառում է բրենդային գույների և հղումների/կոնտակտների կարգավորում: Բլոկների ճարտարապետության փոփոխությունը և 3D անիմացիաները հասանելի են միայն PREMIUM սակագնով:' },
          { title: 'Չեղարկում և աջակցություն', text: 'Վճարված գումարը (100% կամ 50% կանխավճար) ենթակա չէ վերադարձի և ամրագրում է ձեր ժամանակը: Հանձնված նախագծում տվյալների միանվագ թարմացումը (կոնտակտներ, հղումներ կամ լուսանկարներ) արժե 2000 ֏ / 500 ₽ / 6 $:' }
      ],
      footer: 'Թափանցիկությունը անթերի ոճի գրավականն է:\nDesign & Code by Elena Sotnikova.',
      accept: 'ԸՆԴՈՒՆՈՒՄ ԵՄ'
    }
  },
  analytics: { yandexMetricaId: '108395630' }
};

const GALLERY_TRANSLATIONS = {
  ru: {
    catalog: "Галерея дизайнов",
    back: "Назад",
    openFull: "Открыть",
    notFound1: "Не нашли свою сферу?",
    notFound2: "Адаптируем любой шаблон под вас",
    templates: [
      { id: 'esoteric', name: 'Эзотерика', icon: Moon, url: 'https://esoteric.appsea.ru' },
      { id: 'psychology', name: 'Психолог', icon: Brain, url: 'https://psychologist.appsea.ru' },
      { id: 'travel', name: 'Турагент', icon: PlaneTakeoff, url: 'https://travel.appsea.ru' },
      { id: 'blogger', name: 'Блогер', icon: Camera, url: 'https://blogger.appsea.ru' },
      { id: 'fitness', name: 'Спорт', icon: Activity, url: 'https://fitness.appsea.ru' },
      { id: 'beauty', name: 'Бьюти', icon: Droplets, url: 'https://beauty.appsea.ru' },
      { id: 'realty', name: 'Недвижимость', icon: Building2, url: 'https://realtor.appsea.ru' },
      { id: 'dentistry', name: 'Стоматология', icon: Smile, url: 'https://dental.appsea.ru' },
      { id: 'photographer', name: 'Фотограф', icon: Aperture, url: 'https://photographer.appsea.ru' },
    ]
  },
  hy: {
    catalog: "Դիզայնների Պատկերասրահ",
    back: "Հետ",
    openFull: "Բացել",
    notFound1: "Չգտա՞ք ձեր ոլորտը",
    notFound2: "Կհարմարեցնենք ցանկացած ձևանմուշ",
    templates: [
      { id: 'esoteric', name: 'Էզոթերիկա', icon: Moon, url: 'https://esoteric.appsea.ru' },
      { id: 'psychology', name: 'Հոգեբան', icon: Brain, url: 'https://psychologist.appsea.ru' },
      { id: 'travel', name: 'Տուրգործակալ', icon: PlaneTakeoff, url: 'https://travel.appsea.ru' },
      { id: 'blogger', name: 'Բլոգեր', icon: Camera, url: 'https://blogger.appsea.ru' },
      { id: 'fitness', name: 'Սպորտ', icon: Activity, url: 'https://fitness.appsea.ru' },
      { id: 'beauty', name: 'Գեղեցկություն', icon: Droplets, url: 'https://beauty.appsea.ru' },
      { id: 'realty', name: 'Անշարժ գույք', icon: Building2, url: 'https://realtor.appsea.ru' },
      { id: 'dentistry', name: 'Ստոմատոլոգիա', icon: Smile, url: 'https://dental.appsea.ru' },
      { id: 'photographer', name: 'Լուսանկարիչ', icon: Aperture, url: 'https://photographer.appsea.ru' },
    ]
  },
  en: {
    catalog: "Design Gallery",
    back: "Back",
    openFull: "Open",
    notFound1: "Didn't find your niche?",
    notFound2: "We will adapt any template for you",
    templates: [
      { id: 'esoteric', name: 'Esoterica', icon: Moon, url: 'https://esoteric.appsea.ru' },
      { id: 'psychology', name: 'Psychologist', icon: Brain, url: 'https://psychologist.appsea.ru' },
      { id: 'travel', name: 'Travel Agent', icon: PlaneTakeoff, url: 'https://travel.appsea.ru' },
      { id: 'blogger', name: 'Blogger', icon: Camera, url: 'https://blogger.appsea.ru' },
      { id: 'fitness', name: 'Sport', icon: Activity, url: 'https://fitness.appsea.ru' },
      { id: 'beauty', name: 'Beauty', icon: Droplets, url: 'https://beauty.appsea.ru' },
      { id: 'realty', name: 'Real Estate', icon: Building2, url: 'https://realtor.appsea.ru' },
      { id: 'dentistry', name: 'Dentistry', icon: Smile, url: 'https://dental.appsea.ru' },
      { id: 'photographer', name: 'Photographer', icon: Aperture, url: 'https://photographer.appsea.ru' },
    ]
  }
};

const globalStyles = `
  html, body {
    background-color: #0a0a0a;
    overscroll-behavior: none;
    overflow: hidden;
    position: fixed;
    width: 100%;
    height: 100%;
  }
  .hide-scrollbar::-webkit-scrollbar { display: none; }
  .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; overscroll-behavior: contain; }
  
  #orientation-blocker { display: none; }
  @media screen and (max-height: 600px) and (orientation: landscape) {
    #orientation-blocker { display: flex !important; }
  }

  @keyframes float {
    0% { transform: translateY(0px) rotateX(0deg) rotateY(0deg); }
    50% { transform: translateY(-15px) rotateX(2deg) rotateY(-2deg); }
    100% { transform: translateY(0px) rotateX(0deg) rotateY(0deg); }
  }
  .animate-float { animation: float 6s ease-in-out infinite; }
  .card-preserve-3d { transform-style: preserve-3d; -webkit-transform-style: preserve-3d; }
  .card-backface-hidden { backface-visibility: hidden; -webkit-backface-visibility: hidden; transform: translateZ(0); -webkit-transform: translateZ(0); }
  @keyframes spark-explode {
    0% { transform: translate(0, 0) scale(0.5); opacity: 0.8; }
    100% { transform: translate(var(--tx), var(--ty)) scale(1); opacity: 0.6; }
  }
  @keyframes spark-wander {
    0% { transform: translate(var(--tx), var(--ty)) scale(1); opacity: 0.6; }
    33% { transform: translate(calc(var(--tx) * 1.5 + var(--wx1)), calc(var(--ty) * 1.5 + var(--wy1))) scale(1.5); opacity: 0.8; }
    66% { transform: translate(calc(var(--tx) * 2.5 + var(--wx2)), calc(var(--ty) * 2.5 + var(--wy2))) scale(1.2); opacity: 0.5; }
    100% { transform: translate(calc(var(--tx) * 4 + var(--wx3)), calc(var(--ty) * 4 + var(--wy3))) scale(0.8); opacity: 0; }
  }
  .spark-particle {
    position: absolute; border-radius: 50%; background-color: rgba(255, 255, 255, 0.9);
    box-shadow: 0 0 6px rgba(255, 255, 255, 0.8), 0 0 12px rgba(255, 255, 255, 0.4); pointer-events: none;
    animation: spark-explode 0.8s cubic-bezier(0.1, 0.8, 0.3, 1) forwards, spark-wander var(--wt) linear 0.8s forwards;
  }
  @media (min-width: 640px) {
    @keyframes burn-mask-reveal {
      0% { -webkit-mask-position: 100% 0%; mask-position: 100% 0%; }
      100% { -webkit-mask-position: 0% 100%; mask-position: 0% 100%; }
    }
    @keyframes burn-fire-scan {
      0% { background-position: 100% 0%; opacity: 0; }
      5% { opacity: 1; }
      95% { opacity: 1; }
      100% { background-position: 0% 100%; opacity: 0; }
    }
    .smooth-mask-wipe {
      -webkit-mask-image: linear-gradient(225deg, transparent 47%, rgba(0,0,0,0.6) 49%, black 51%); mask-image: linear-gradient(225deg, transparent 47%, rgba(0,0,0,0.6) 49%, black 51%);
      -webkit-mask-size: 300% 300%; mask-size: 300% 300%; -webkit-mask-position: 100% 0%; mask-position: 100% 0%;
      animation: burn-mask-reveal 3s cubic-bezier(0.4, 0, 0.2, 1) forwards; will-change: mask-position, -webkit-mask-position;
    }
    .burn-fire-edge {
      background: linear-gradient(224deg, transparent 48.5%, rgba(20, 5, 0, 0.95) 49%, var(--burn-c1, rgba(220, 38, 38, 0.9)) 49.5%, var(--burn-c2, rgba(250, 150, 0, 1)) 50%, var(--burn-c3, rgba(255, 220, 50, 0.8)) 50.2%, transparent 51%),
                  linear-gradient(226deg, transparent 48.5%, rgba(20, 5, 0, 0.95) 49%, var(--burn-c1, rgba(220, 38, 38, 0.9)) 49.5%, var(--burn-c2, rgba(250, 150, 0, 1)) 50%, var(--burn-c3, rgba(255, 220, 50, 0.8)) 50.2%, transparent 51%);
      background-size: 300% 300%; background-position: 100% 0%; mix-blend-mode: normal; filter: drop-shadow(0 0 8px var(--burn-c2, rgba(250, 100, 0, 0.8))) blur(0.5px);
      animation: burn-fire-scan 3s cubic-bezier(0.4, 0, 0.2, 1) forwards; will-change: background-position, opacity;
    }
  }
  @media (max-width: 639px) {
    @keyframes mobile-fade-in { 0% { opacity: 0; } 100% { opacity: 1; } }
    .smooth-mask-wipe { opacity: 0; animation: mobile-fade-in 1.5s ease-out forwards; will-change: opacity; }
    .burn-fire-edge { display: none; }
  }
  @keyframes esoteric-slow-drift-1 { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
  @keyframes esoteric-slow-drift-2 { 0% { transform: rotate(360deg); } 100% { transform: rotate(0deg); } }
  .mask-image-bottom { -webkit-mask-image: linear-gradient(to bottom, black 80%, transparent 100%); mask-image: linear-gradient(to bottom, black 80%, transparent 100%); }
  @keyframes equalize { 0%, 100% { height: 4px; } 50% { height: 16px; } }
  .audio-bar { width: 3px; background-color: #fb7185; border-radius: 2px; animation: equalize 1s infinite ease-in-out; }
  @keyframes water-ripple-anim {
    0% { transform: translate(-50%, -50%) scale(0); opacity: 0.8; border: 3px solid rgba(255, 255, 255, 0.6); box-shadow: 0 0 20px rgba(255, 255, 255, 0.4), inset 0 0 20px rgba(255, 255, 255, 0.4); filter: blur(1px); }
    100% { transform: translate(-50%, -50%) scale(4); opacity: 0; border: 1px solid rgba(255, 255, 255, 0); box-shadow: 0 0 50px rgba(255, 255, 255, 0), inset 0 0 50px rgba(255, 255, 255, 0); filter: blur(4px); }
  }
  .water-ripple-element {
    position: absolute; border-radius: 50%; width: 80px; height: 80px;
    background: radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 40%, rgba(255,255,255,0) 70%);
    animation: water-ripple-anim 0.9s cubic-bezier(0.1, 0.5, 0.3, 1) forwards; pointer-events: none; z-index: 100;
  }
  .carousel-gradient-mask {
    -webkit-mask-image: linear-gradient(to right, black 85%, transparent 100%);
    mask-image: linear-gradient(to right, black 85%, transparent 100%);
  }
  .bg-noise {
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
  }
  @keyframes orb-float-1 {
    0%, 100% { transform: translate(0, 0) scale(1); }
    50% { transform: translate(-30px, 20px) scale(1.1); }
  }
  @keyframes orb-float-2 {
    0%, 100% { transform: translate(0, 0) scale(1); }
    50% { transform: translate(30px, -20px) scale(1.2); }
  }
  @keyframes orb-float-3 {
    0%, 100% { transform: translate(0, 0) scale(1); }
    50% { transform: translate(-20px, -30px) scale(0.9); }
  }
`;

if (typeof document !== 'undefined' && !document.getElementById('app-global-styles')) {
  const styleEl = document.createElement('style');
  styleEl.id = 'app-global-styles';
  styleEl.innerHTML = globalStyles;
  document.head.appendChild(styleEl);
}

const triggerVibration = (pattern = 15) => {
  if (typeof navigator !== 'undefined' && navigator.vibrate) {
    navigator.vibrate(pattern);
  }
};

const BurnRevealImage = ({ src, className, style, imgClassName = "", burnColor = "wine", startBurn = true }) => {
  const themes = {
    wine: { c1: 'rgba(88, 11, 37, 0.9)', c2: 'rgba(159, 18, 57, 1)', c3: 'rgba(225, 29, 72, 0.8)' }
  };
  const t = themes[burnColor] || themes.wine;
  return (
    <div className={`absolute inset-0 pointer-events-none rounded-[2.5rem] ${className}`} style={{ ...style, clipPath: 'inset(0 round 2.5rem)', WebkitClipPath: 'inset(0 round 2.5rem)' }}>
      <div className={`absolute inset-0 bg-cover bg-center rounded-[2.5rem] ${imgClassName} ${startBurn ? 'smooth-mask-wipe' : 'opacity-0'}`} style={{ backgroundImage: `url(${src})` }} />
      {startBurn && <div className="absolute inset-0 burn-fire-edge rounded-[2.5rem]" style={{ '--burn-c1': t.c1, '--burn-c2': t.c2, '--burn-c3': t.c3 }} />}
    </div>
  );
};

const CreatorCard = ({ lang, isFlipped, view, onOpenIframe, onOpenGallery, onOpenConditions, onOpenSheet }) => {
  const [isNameRevealed, setIsNameRevealed] = useState(true);
  
  const hackerName1 = CONTENT[lang].creator.name1;
  const hackerName2 = CONTENT[lang].creator.name2;

  return (
    <>
      {/* ЛИЦЕВАЯ СТОРОНА */}
      <div className="absolute inset-0 w-full h-full card-backface-hidden rounded-[2.5rem] shadow-[0_20px_50px_rgba(159,18,57,0.4)] overflow-hidden bg-[#050102] text-white flex flex-col p-[clamp(0.75rem,6cqw,1.5rem)] group-hover:shadow-[0_20px_80px_rgba(159,18,57,0.6)] transition-shadow duration-700 border border-[rgba(255,60,80,0.25)]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#380e1b] via-[#0f0206] to-[#1f030e]"></div>
        <div className="absolute -inset-1/2 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-900/30 via-transparent to-transparent animate-pulse" style={{ animationDuration: '3s' }}></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-rose-500/25 via-transparent to-transparent mix-blend-normal sm:mix-blend-screen"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-rose-900/40 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black from-0% via-black/80 via-[15%] to-transparent to-[30%] pointer-events-none z-0 rounded-[2.5rem]"></div>
        <BurnRevealImage src={CONTENT[lang].creator.bgImage} className="grayscale-[0.2]" burnColor="wine" startBurn={isNameRevealed} />

        <div className="relative z-10 flex flex-col h-full justify-between">
          <div className="flex justify-between items-start shrink-0">
            <div className="bg-[#151515]/60 sm:bg-black/50 backdrop-blur-md px-[clamp(0.5rem,4cqw,1rem)] py-[clamp(0.25rem,2cqw,0.5rem)] rounded-full border border-rose-900/50 flex items-center gap-[clamp(0.375rem,2cqw,0.5rem)]">
              <Crown className="w-[clamp(0.75rem,4cqw,1rem)] h-[clamp(0.75rem,4cqw,1rem)] text-rose-400" />
              <span className="text-[clamp(0.5rem,3cqw,0.75rem)] font-serif tracking-widest uppercase text-rose-200/90">{CONTENT[lang].creator.badge}</span>
            </div>
            <RefreshCcw className="w-[clamp(1.2rem,8cqw,2rem)] h-[clamp(1.2rem,8cqw,2rem)] text-rose-300/60 drop-shadow-[0_0_10px_rgba(159,18,57,0.5)]" />
          </div>

          <div className="text-center pb-[clamp(0.375rem,2cqw,0.5rem)] shrink-0">
            <h2 className="text-[clamp(1.1rem,9cqw,2.25rem)] leading-tight font-serif mb-[clamp(0.375rem,2cqw,0.5rem)] uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-rose-100 via-white to-rose-200 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              {hackerName1}<br />{hackerName2}
            </h2>
            <div className="flex flex-col items-center gap-[clamp(0.5rem,3cqw,0.75rem)] mt-[clamp(0.5rem,3cqw,0.75rem)]">
              <p className="font-serif text-[clamp(0.55rem,3.5cqw,0.8rem)] text-rose-100/70 italic tracking-wider max-w-[85%] mx-auto leading-relaxed">
                "{CONTENT[lang].creator.quote1}<br/>{CONTENT[lang].creator.quote2}"
              </p>
              <div className="flex items-center gap-[clamp(0.25rem,1.5cqw,0.375rem)] bg-[#151515]/60 sm:bg-black/50 backdrop-blur-md px-[clamp(0.4rem,3cqw,0.75rem)] py-[clamp(0.2rem,1.5cqw,0.375rem)] rounded-full border border-rose-900/50 mt-[clamp(0.125rem,1cqw,0.25rem)]">
                <span className="w-[clamp(0.25rem,1.5cqw,0.375rem)] h-[clamp(0.25rem,1.5cqw,0.375rem)] rounded-full bg-rose-500 animate-pulse shadow-[0_0_8px_rgba(225,29,72,0.8)]"></span>
                <span className="text-[clamp(0.45rem,2cqw,0.5625rem)] font-bold uppercase tracking-widest text-rose-200">{CONTENT[lang].creator.status}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ОБОРОТНАЯ СТОРОНА */}
      <div className="absolute inset-0 w-full h-full card-backface-hidden rounded-[2.5rem] shadow-[0_20px_50px_rgba(159,18,57,0.4)] overflow-hidden bg-[#050102] flex flex-col pt-[clamp(1rem,5cqw,1.75rem)] pb-0 px-[clamp(1rem,5cqw,1.75rem)] text-white border border-[rgba(255,60,80,0.25)]" style={{ transform: 'rotateY(180deg) translateZ(0)' }}>
        <div className="absolute inset-0 bg-noise opacity-[0.06] mix-blend-screen pointer-events-none z-0"></div>

        <div className="absolute -top-[20%] -left-[20%] w-[160%] aspect-square rounded-full border border-rose-500/10 border-dashed pointer-events-none" style={{ animation: 'esoteric-slow-drift-1 90s linear infinite', transformOrigin: '45% 55%' }}></div>
        <div className="absolute -bottom-[30%] -right-[30%] w-[140%] aspect-square rounded-full border-[1.5px] border-rose-900/20 pointer-events-none" style={{ animation: 'esoteric-slow-drift-2 100s linear infinite', transformOrigin: '55% 45%' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] aspect-square rounded-full bg-rose-900/20 blur-[50px] pointer-events-none z-0"></div>

        {/* ПЛАВАЮЩИЕ СФЕРЫ (ORBS) - Менее яркие для приятного свечения на телефонах */}
        <div className="absolute top-[5%] left-[5%] w-[45%] aspect-square rounded-full bg-rose-800/40 blur-[45px] pointer-events-none z-0" style={{ animation: 'orb-float-1 10s ease-in-out infinite' }}></div>
        <div className="absolute bottom-[15%] right-[5%] w-[55%] aspect-square rounded-full bg-rose-700/30 blur-[55px] pointer-events-none z-0" style={{ animation: 'orb-float-2 14s ease-in-out infinite' }}></div>
        <div className="absolute top-[45%] right-[25%] w-[35%] aspect-square rounded-full bg-rose-500/20 blur-[65px] pointer-events-none z-0" style={{ animation: 'orb-float-3 12s ease-in-out infinite' }}></div>

        <div className="relative z-10 flex-1 flex flex-col h-full overflow-hidden">
          
          <div className="relative flex-1 w-full overflow-hidden">
            
            {/* 1. ОБО МНЕ */}
            <div className={`absolute inset-0 flex flex-col transition-all duration-500 ease-in-out pb-0 ${view === 'profile' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'}`}>
              <div className="w-[clamp(2.5rem,8cqw,3rem)] h-[clamp(2.5rem,8cqw,3rem)] rounded-full bg-rose-900/30 border border-rose-500/30 flex items-center justify-center mb-[clamp(0.75rem,3cqw,1rem)] shrink-0 shadow-[0_0_15px_rgba(159,18,57,0.2)]">
                <UserCircle2 className="w-[clamp(1.25rem,4cqw,1.5rem)] h-[clamp(1.25rem,4cqw,1.5rem)] text-rose-300" />
              </div>
              <h3 className="text-[clamp(0.85rem,4cqw,1.1rem)] font-bold text-rose-100 mb-[clamp(1.5rem,5cqw,2.5rem)] shrink-0 tracking-wide">{CONTENT[lang].views.profile.title}</h3>
              
              <div className="flex-1 overflow-y-auto hide-scrollbar mask-image-bottom pb-[clamp(3.5rem,10cqw,4.5rem)] pr-[clamp(0.125rem,1cqw,0.25rem)] no-tilt touch-pan-y overscroll-contain flex flex-col relative">
                <div className="flex flex-col gap-[clamp(0.6rem,3cqw,0.85rem)] bg-[#151515]/60 sm:bg-black/50 backdrop-blur-md p-[clamp(0.75rem,3cqw,1rem)] rounded-3xl border border-rose-900/50 shadow-inner relative shrink-0">
                  {CONTENT[lang].views.profile.desc.split('\n\n').map((paragraph, i) => (
                    <p key={i} className="font-serif text-[clamp(0.55rem,3.5cqw,0.8rem)] text-rose-100/90 leading-relaxed block px-[clamp(0.125rem,1cqw,0.25rem)]">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Условия и Оферта */}
              <div 
                className="absolute bottom-4 left-0 right-0 flex flex-row justify-center items-center gap-2 shrink-0 z-20 py-2 px-3"
                onPointerDown={(e) => e.stopPropagation()}
                onTouchStart={(e) => e.stopPropagation()}
                onClick={(e) => e.stopPropagation()}
              >
                <div 
                  className="text-center text-[clamp(0.45rem,2.2cqw,0.6rem)] text-rose-100/30 uppercase tracking-widest cursor-pointer hover:text-rose-100/80 transition-colors font-light" 
                  onClick={(e) => { e.stopPropagation(); onOpenConditions(); }}
                >
                  {CONTENT[lang].conditions.link}
                </div>
                <div className="w-[1px] h-2.5 bg-rose-100/20"></div>
                <a 
                  href="https://docs.google.com/document/d/1QmlZCTfCuHiTuN3yPqbkFHE-bGvOsQgEQ2CFYYcfxto/edit?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-center text-[clamp(0.45rem,2.2cqw,0.6rem)] text-rose-100/30 uppercase tracking-widest cursor-pointer hover:text-rose-100/80 transition-colors font-light" 
                  onClick={(e) => e.stopPropagation()}
                >
                  {CONTENT[lang].conditions.offer}
                </a>
              </div>
            </div>

            {/* 2. IT-ПРОДУКТЫ (КАРУСЕЛЬ) */}
            <div className={`absolute inset-0 flex flex-col transition-all duration-500 ease-in-out ${view === 'solutions' ? 'opacity-100 translate-x-0 z-10' : 'opacity-0 translate-x-4 pointer-events-none z-0'}`}>
              <div className="w-[clamp(2.5rem,8cqw,3rem)] h-[clamp(2.5rem,8cqw,3rem)] rounded-full bg-rose-900/30 border border-rose-500/30 flex items-center justify-center mb-[clamp(0.75rem,3cqw,1rem)] shrink-0 shadow-[0_0_15px_rgba(159,18,57,0.2)]">
                <Diamond className="w-[clamp(1.25rem,4cqw,1.5rem)] h-[clamp(1.25rem,4cqw,1.5rem)] text-rose-300" />
              </div>
              <h3 className="text-[clamp(0.85rem,4cqw,1.1rem)] font-bold text-rose-100 mb-3 shrink-0 tracking-wide">
                {CONTENT[lang].views.solutions.title}
              </h3>
              <p className="font-serif text-[clamp(0.55rem,3.5cqw,0.8rem)] text-rose-100/90 leading-relaxed mb-[clamp(1.5rem,6cqw,2.5rem)] shrink-0 px-[clamp(0.125rem,1cqw,0.25rem)]">
                {CONTENT[lang].views.solutions.subtitle}
              </p>
              
              <div className="flex items-center gap-1.5 text-rose-300/80 mb-3 px-[clamp(0.125rem,1cqw,0.25rem)] shrink-0">
                 <span className="text-[clamp(0.55rem,2.5cqw,0.65rem)] uppercase tracking-widest font-bold">
                    {lang === 'ru' ? 'Свайпайте' : lang === 'en' ? 'Swipe' : 'Սահեցրեք'}
                 </span>
                 <div className="flex -space-x-1.5">
                   <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-pulse" style={{ animationDelay: '0ms' }} />
                   <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-pulse" style={{ animationDelay: '150ms' }} />
                 </div>
              </div>
              
              <div 
                className="flex flex-row gap-[clamp(0.6rem,3cqw,1rem)] overflow-x-auto touch-pan-x snap-x snap-mandatory hide-scrollbar carousel-gradient-mask pb-4 pt-1 no-tilt"
                onClick={e => e.stopPropagation()}
              >
                {CONTENT[lang].views.solutions.items.map((item, idx) => {
                  const IconC = { Crown, ChefHat, Code2, Key }[item.icon];
                  return (
                    <div 
                      key={idx} 
                      className="w-[70%] shrink-0 snap-start bg-[#151515]/60 sm:bg-black/50 backdrop-blur-md p-[clamp(0.75rem,4cqw,1.25rem)] rounded-3xl border border-rose-900/50 shadow-inner flex flex-col justify-between group"
                    >
                      <div>
                        <div className="w-10 h-10 rounded-full bg-rose-900/40 flex items-center justify-center mb-4 border border-rose-500/30 shadow-[0_0_10px_rgba(225,29,72,0.2)]">
                           {IconC && <IconC className="w-5 h-5 text-rose-300" />}
                        </div>
                        <h4 className="text-[clamp(0.6rem,3cqw,0.75rem)] font-bold text-rose-200 mb-2">{item.title}</h4>
                        <p className="font-serif text-[clamp(0.55rem,3.5cqw,0.8rem)] text-rose-100/70 leading-relaxed line-clamp-4">{item.short}</p>
                      </div>
                      <button 
                        onClick={() => onOpenSheet(item)}
                        className="mt-5 w-full bg-rose-900/30 hover:bg-rose-900/60 border border-rose-500/30 py-2 rounded-xl text-rose-200 text-[clamp(0.55rem,2.5cqw,0.65rem)] font-bold tracking-wider uppercase transition-colors flex items-center justify-center gap-1.5 shadow-[0_0_10px_rgba(159,18,57,0.1)] active:scale-95"
                      >
                        {CONTENT[lang].ui.detailsBtn} <Info className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  );
                })}
                <div className="w-4 shrink-0"></div>
              </div>
            </div>

            {/* 3. ПОРТФОЛИО & ДЕМО */}
            <div className={`absolute inset-0 flex flex-col transition-all duration-500 ease-in-out ${view === 'portfolio' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'}`}>
              <div className="w-[clamp(2.5rem,8cqw,3rem)] h-[clamp(2.5rem,8cqw,3rem)] rounded-full bg-rose-900/30 border border-rose-500/30 flex items-center justify-center mb-[clamp(0.75rem,3cqw,1rem)] shrink-0 shadow-[0_0_15px_rgba(159,18,57,0.2)]">
                <Smartphone className="w-[clamp(1.25rem,4cqw,1.5rem)] h-[clamp(1.25rem,4cqw,1.5rem)] text-rose-300" />
              </div>
              <h3 className="text-[clamp(0.85rem,4cqw,1.1rem)] font-bold text-rose-100 mb-[clamp(0.5rem,2cqw,0.75rem)] shrink-0 tracking-wide">{CONTENT[lang].views.portfolio.title}</h3>
              <p className="font-serif text-[clamp(0.55rem,3.5cqw,0.8rem)] text-rose-100/70 mb-[clamp(2rem,6cqw,3rem)] shrink-0 px-[clamp(0.125rem,1cqw,0.25rem)]">{CONTENT[lang].views.portfolio.desc}</p>
              
              <div className="flex-1 overflow-y-auto hide-scrollbar mask-image-bottom pb-[clamp(1.5rem,8cqw,2.5rem)] pr-[clamp(0.125rem,1cqw,0.25rem)] flex flex-col justify-center gap-[clamp(0.6rem,3cqw,1rem)] no-tilt touch-pan-y overscroll-contain">
                 
                 {/* Card 1: Gallery */}
                 <button onClick={(e) => { e.stopPropagation(); onOpenGallery(); }} className="relative overflow-hidden w-full bg-[#151515]/60 sm:bg-black/50 backdrop-blur-md p-4 rounded-3xl border border-rose-900/50 shadow-inner flex items-center gap-4 hover:bg-rose-900/20 hover:border-rose-500/50 transition-all group shrink-0 active:scale-[0.98]">
                    <div className="w-12 h-12 rounded-full bg-rose-900/40 flex items-center justify-center border border-rose-500/30 shrink-0 shadow-[0_0_15px_rgba(159,18,57,0.2)]">
                        <Sparkles className="w-5 h-5 text-rose-300 group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="flex-1 text-left">
                        <h4 className="text-rose-200 text-[clamp(0.6rem,3cqw,0.75rem)] font-bold">{CONTENT[lang].views.portfolio.galleryBtn}</h4>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-rose-900/30 flex items-center justify-center shrink-0 group-hover:bg-rose-600 transition-colors">
                        <ChevronRight className="w-4 h-4 text-rose-400 group-hover:text-white transition-colors" />
                    </div>
                 </button>

                 {/* Card 2: Smart Menu */}
                 <button onClick={(e) => { e.stopPropagation(); onOpenIframe('https://menu.appseapro.com/'); }} className="relative overflow-hidden w-full bg-[#151515]/60 sm:bg-black/50 backdrop-blur-md p-4 rounded-3xl border border-rose-900/50 shadow-inner flex items-center gap-4 hover:bg-rose-900/20 hover:border-rose-500/50 transition-all group shrink-0 active:scale-[0.98]">
                    <div className="w-12 h-12 rounded-full bg-rose-900/40 flex items-center justify-center border border-rose-500/30 shrink-0 shadow-[0_0_15px_rgba(159,18,57,0.2)]">
                        <ChefHat className="w-5 h-5 text-rose-300 group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="flex-1 text-left">
                        <h4 className="text-rose-200 text-[clamp(0.6rem,3cqw,0.75rem)] font-bold">{CONTENT[lang].views.portfolio.menuBtn}</h4>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-rose-900/30 flex items-center justify-center shrink-0 group-hover:bg-rose-600 transition-colors">
                        <ChevronRight className="w-4 h-4 text-rose-400 group-hover:text-white transition-colors" />
                    </div>
                 </button>

                 {/* Card 3: Promo Video */}
                 <button onClick={(e) => { e.stopPropagation(); onOpenIframe('/promo.mp4'); }} className="relative overflow-hidden w-full bg-[#151515]/60 sm:bg-black/50 backdrop-blur-md p-4 rounded-3xl border border-rose-900/50 shadow-inner flex items-center gap-4 hover:bg-rose-900/20 hover:border-rose-500/50 transition-all group shrink-0 active:scale-[0.98]">
                    <div className="absolute top-0 left-0 bg-rose-600 px-3 py-1 rounded-br-xl rounded-tl-3xl text-[8px] font-bold tracking-widest uppercase text-white shadow-md z-10">PROMO VIDEO</div>
                    <div className="w-12 h-12 rounded-full bg-rose-900/40 flex items-center justify-center border border-rose-500/30 shrink-0 shadow-[0_0_15px_rgba(159,18,57,0.2)]">
                        <Play className="w-5 h-5 text-rose-300 group-hover:scale-110 transition-transform ml-0.5" />
                    </div>
                    <div className="flex-1 text-left">
                        <h4 className="text-rose-200 text-[clamp(0.6rem,3cqw,0.75rem)] font-bold mt-1.5">{CONTENT[lang].views.portfolio.videoCaption}</h4>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-rose-900/30 flex items-center justify-center shrink-0 group-hover:bg-rose-600 transition-colors mt-1.5">
                        <ChevronRight className="w-4 h-4 text-rose-400 group-hover:text-white transition-colors" />
                    </div>
                 </button>

              </div>
            </div>

            {/* 4. КОНТАКТЫ */}
            <div className={`absolute inset-0 flex flex-col transition-all duration-500 ease-in-out ${view === 'contacts' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'}`}>
              <div className="w-[clamp(2.5rem,8cqw,3rem)] h-[clamp(2.5rem,8cqw,3rem)] rounded-full bg-rose-900/30 border border-rose-500/30 flex items-center justify-center mb-[clamp(0.75rem,3cqw,1rem)] shrink-0 shadow-[0_0_15px_rgba(159,18,57,0.2)]">
                <Phone className="w-[clamp(1.25rem,4cqw,1.5rem)] h-[clamp(1.25rem,4cqw,1.5rem)] text-rose-300" />
              </div>
              <h3 className="text-[clamp(0.85rem,4cqw,1.1rem)] font-bold text-rose-100 mb-[clamp(2.5rem,8cqw,3.5rem)] shrink-0 tracking-wide">{CONTENT[lang].views.contactsTitle}</h3>
              
              <div className="flex-1 overflow-y-auto hide-scrollbar flex flex-col justify-center gap-[clamp(0.6rem,3cqw,1rem)] pb-[clamp(1.5rem,8cqw,2.5rem)] pr-[clamp(0.125rem,1cqw,0.25rem)] no-tilt touch-pan-y overscroll-contain">
                
                <a href="https://t.me/appseapro" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="bg-[#151515]/60 sm:bg-black/50 backdrop-blur-md p-[clamp(0.75rem,4cqw,1rem)] rounded-3xl border border-rose-900/50 shadow-inner flex items-center gap-4 cursor-pointer hover:bg-rose-900/20 hover:border-rose-500/50 transition-all group shrink-0">
                  <div className="w-[clamp(2rem,6cqw,2.5rem)] h-[clamp(2rem,6cqw,2.5rem)] rounded-full bg-rose-900/40 border border-rose-500/30 flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_10px_rgba(159,18,57,0.2)] shrink-0">
                    <Send className="w-[clamp(1rem,3.5cqw,1.25rem)] h-[clamp(1rem,3.5cqw,1.25rem)] text-rose-300 -ml-0.5" />
                  </div>
                  <span className="text-rose-200 text-[clamp(0.65rem,3cqw,0.8rem)] font-bold">{CONTENT[lang].views.contacts.tg}</span>
                </a>

                <a href="https://instagram.com/appseapro" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="bg-[#151515]/60 sm:bg-black/50 backdrop-blur-md p-[clamp(0.75rem,4cqw,1rem)] rounded-3xl border border-rose-900/50 shadow-inner flex items-center gap-4 cursor-pointer hover:bg-rose-900/20 hover:border-rose-500/50 transition-all group shrink-0">
                  <div className="w-[clamp(2rem,6cqw,2.5rem)] h-[clamp(2rem,6cqw,2.5rem)] rounded-full bg-rose-900/40 border border-rose-500/30 flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_10px_rgba(159,18,57,0.2)] shrink-0">
                    <Instagram className="w-[clamp(1rem,3.5cqw,1.25rem)] h-[clamp(1rem,3.5cqw,1.25rem)] text-rose-300" />
                  </div>
                  <span className="text-rose-200 text-[clamp(0.65rem,3cqw,0.8rem)] font-bold">{CONTENT[lang].views.contacts.insta}</span>
                </a>

                <a href="tel:+37494261123" onClick={(e) => e.stopPropagation()} className="bg-[#151515]/60 sm:bg-black/50 backdrop-blur-md p-[clamp(0.75rem,4cqw,1rem)] rounded-3xl border border-rose-900/50 shadow-inner flex items-center gap-4 cursor-pointer hover:bg-rose-900/20 hover:border-rose-500/50 transition-all group shrink-0">
                  <div className="w-[clamp(2rem,6cqw,2.5rem)] h-[clamp(2rem,6cqw,2.5rem)] rounded-full bg-rose-900/40 border border-rose-500/30 flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_10px_rgba(159,18,57,0.2)] shrink-0">
                    <Phone className="w-[clamp(1rem,3.5cqw,1.25rem)] h-[clamp(1rem,3.5cqw,1.25rem)] text-rose-300" />
                  </div>
                  <span className="text-rose-200 text-[clamp(0.65rem,3cqw,0.8rem)] font-bold">{CONTENT[lang].views.contacts.phone}</span>
                </a>

              </div>
            </div>

            {/* 5. ОТЗЫВЫ */}
            <div className={`absolute inset-0 flex flex-col transition-all duration-500 ease-in-out ${view === 'reviews' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'}`}>
              <div className="flex items-center gap-[clamp(0.5rem,3cqw,0.75rem)] mb-[clamp(1.5rem,4cqw,2rem)] shrink-0">
                <div className="w-[clamp(2rem,6cqw,2.5rem)] h-[clamp(2rem,6cqw,2.5rem)] rounded-full bg-rose-900/30 border border-rose-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(159,18,57,0.2)]">
                  <Star className="w-[clamp(1rem,4cqw,1.25rem)] h-[clamp(1rem,4cqw,1.25rem)] text-rose-300" />
                </div>
                <h3 className="text-[clamp(0.85rem,4cqw,1.1rem)] font-bold text-rose-100 tracking-wide">{CONTENT[lang].views.reviewsTitle}</h3>
              </div>
              
              <div className="flex-1 overflow-y-auto hide-scrollbar flex flex-col justify-center gap-[clamp(0.6rem,2.5cqw,0.85rem)] pb-[clamp(1.5rem,8cqw,2.5rem)] pr-[clamp(0.125rem,1cqw,0.25rem)] mask-image-bottom no-tilt touch-pan-y overscroll-contain">
                {CONTENT[lang].views.reviews.map((rev, idx) => (
                  <div key={idx} className="bg-[#151515]/60 sm:bg-black/50 backdrop-blur-md p-[clamp(0.75rem,3cqw,1rem)] rounded-3xl border border-rose-900/50 shadow-inner relative shrink-0 block">
                    <div className="flex justify-between items-center mb-[clamp(0.4rem,1.5cqw,0.5rem)] px-[clamp(0.125rem,1cqw,0.25rem)]">
                      <div className="flex items-center gap-[clamp(0.4rem,2cqw,0.5rem)]">
                        <span className="text-[clamp(0.6rem,2.5cqw,0.7rem)] text-rose-200/90 font-bold">{rev.name}</span>
                        {rev.date && <span className="text-[clamp(0.5rem,2cqw,0.6rem)] text-rose-500/60 font-medium">{rev.date}</span>}
                      </div>
                      <div className="flex gap-[clamp(0.1rem,0.5cqw,0.15rem)] shrink-0">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-[clamp(0.6rem,2.5cqw,0.75rem)] h-[clamp(0.6rem,2.5cqw,0.75rem)] fill-rose-400 text-rose-400" />
                        ))}
                      </div>
                    </div>
                    <p className="font-serif text-[clamp(0.55rem,3cqw,0.75rem)] text-rose-100/80 leading-relaxed italic px-[clamp(0.125rem,1cqw,0.25rem)]">
                      {rev.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  );
};

const DesignGalleryModal = ({ onClose, lang }) => {
  const [previewInfo, setPreviewInfo] = useState(null);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [ripples, setRipples] = useState([]);
  const t = GALLERY_TRANSLATIONS[lang];

  const handlePointerDown = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now() + Math.random();
    setRipples(prev => [...prev, { x, y, id }]);
    setTimeout(() => { setRipples(prev => prev.filter(r => r.id !== id)); }, 900);
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-0 sm:p-4 bg-[#0a0205] sm:bg-black/80 transition-opacity animate-in fade-in duration-300" onPointerDown={handlePointerDown} onClick={onClose}>
      <div className="w-full h-full sm:max-w-[400px] sm:max-h-[800px] bg-[#0a0205] rounded-none sm:rounded-[2.5rem] overflow-hidden relative shadow-none sm:shadow-[0_0_50px_rgba(159,18,57,0.4)] border-0 sm:border border-rose-900/50 flex flex-col animate-in slide-in-from-bottom-full sm:slide-in-from-bottom-0 sm:zoom-in-95 duration-300" onClick={e => e.stopPropagation()}>
        {ripples.map(r => <div key={r.id} className="water-ripple-element" style={{ left: r.x, top: r.y }} />)}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-rose-600/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-rose-900/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative h-[calc(3.5rem+env(safe-area-inset-top))] max-[380px]:h-[calc(3rem+env(safe-area-inset-top))] pt-[env(safe-area-inset-top)] border-b border-rose-900/50 flex items-center justify-between px-4 sm:px-5 bg-[#0a0205]/80 shrink-0 z-20">
          <div className="flex items-center gap-3 max-[380px]:gap-2">
             <div className="w-7 h-7 max-[380px]:w-6 max-[380px]:h-6 rounded-full bg-rose-900/30 border border-rose-500/30 flex items-center justify-center shadow-[0_0_10px_rgba(159,18,57,0.2)] shrink-0">
                <Sparkles className="w-3.5 h-3.5 max-[380px]:w-3 max-[380px]:h-3 text-rose-400" />
             </div>
             <span className="text-rose-100 font-serif tracking-wider text-[11px] sm:text-sm max-[380px]:text-[10px] uppercase font-bold">{t.catalog}</span>
          </div>
          <button onClick={(e) => { e.stopPropagation(); onClose(); }} className="text-white/40 hover:text-white bg-white/5 hover:bg-white/10 rounded-full p-2 max-[380px]:p-1.5 transition-colors border border-white/5 active:scale-95 z-30">
             <X className="w-4 h-4 max-[380px]:w-3.5 max-[380px]:h-3.5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto hide-scrollbar relative pb-[env(safe-area-inset-bottom)] pt-6 max-[380px]:pt-4 touch-pan-y overscroll-contain z-10">
          <div className="px-5 max-[380px]:px-4 pb-6 flex flex-col">
             <div className="flex flex-col gap-3 max-[380px]:gap-2.5 w-full">
                 {t.templates.map(link => (
                    <div key={link.id} className="relative group w-full">
                       <div className="absolute -inset-0.5 bg-gradient-to-r from-white/10 to-rose-500/20 rounded-2xl max-[380px]:rounded-[1.25rem] blur-[8px] opacity-30 group-hover:opacity-100 group-hover:blur-[12px] transition-all duration-500 pointer-events-none"></div>
                       <button onClick={(e) => { e.stopPropagation(); setIframeLoaded(false); setPreviewInfo(link); }} className="relative w-full overflow-hidden flex flex-row items-center p-3 max-[380px]:p-2.5 rounded-2xl max-[380px]:rounded-[1.25rem] bg-[#0a0205]/95 border border-rose-900/50 hover:border-rose-500/50 hover:bg-[#15050a] transition-all duration-300 active:scale-[0.98] shadow-inner text-left">
                         <div className="absolute inset-0 bg-gradient-to-r from-rose-900/0 via-rose-900/0 to-rose-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                         <div className="w-12 h-12 max-[380px]:w-10 max-[380px]:h-10 rounded-full bg-rose-900/20 border border-rose-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(159,18,57,0.2)] shrink-0 mr-4 max-[380px]:mr-3">
                            <link.icon className="w-5 h-5 max-[380px]:w-4 max-[380px]:h-4 text-rose-400 group-hover:scale-110 transition-transform duration-300" />
                         </div>
                         <span className="text-[14px] max-[380px]:text-[12px] font-bold text-rose-100 tracking-wider leading-tight flex-1">{link.name}</span>
                         <ChevronLeft className="w-5 h-5 max-[380px]:w-4 max-[380px]:h-4 text-rose-500/40 group-hover:text-rose-400 group-hover:-translate-x-1 transition-all rotate-180 shrink-0" />
                       </button>
                    </div>
                 ))}
             </div>
             <div className="mt-8 max-[380px]:mt-6 text-center border-t border-rose-900/30 pt-6 max-[380px]:pt-4 shrink-0 pointer-events-none">
               <p className="text-[11px] max-[380px]:text-[10px] text-rose-100/50 font-light tracking-wide">{t.notFound1}<br/><span className="text-rose-400/80 font-medium mt-1.5 inline-block">{t.notFound2}</span></p>
             </div>
          </div>
        </div>

        {previewInfo && (
          <div className="absolute inset-0 z-[40] flex flex-col bg-[#050102] animate-in fade-in zoom-in-[0.98] duration-300 rounded-none sm:rounded-[2.5rem] overflow-hidden" onPointerDown={e => e.stopPropagation()} onClick={e => e.stopPropagation()}>
             <div className="h-[calc(3.5rem+env(safe-area-inset-top))] max-[380px]:h-[calc(3rem+env(safe-area-inset-top))] pt-[env(safe-area-inset-top)] border-b border-rose-900/50 flex items-center justify-between px-4 sm:px-5 bg-[#0a0205] shrink-0 shadow-lg relative">
                <button onClick={() => setPreviewInfo(null)} className="flex items-center gap-1.5 px-3 py-1.5 max-[380px]:px-2 max-[380px]:py-1 rounded-full bg-rose-900/30 border border-rose-500/30 text-rose-300 hover:bg-rose-900/50 hover:text-rose-100 transition-all active:scale-95 shadow-[0_0_10px_rgba(159,18,57,0.2)] z-10">
                  <ChevronLeft className="w-4 h-4 max-[380px]:w-3.5 max-[380px]:h-3.5" />
                  <span className="text-[10px] max-[380px]:text-[9px] font-bold tracking-widest uppercase">{t.back}</span>
                </button>
                <a href={`${previewInfo.url}?ref=catalog`} target="_blank" rel="noopener noreferrer" className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-1.5 max-[380px]:px-3 max-[380px]:py-1 rounded-full bg-rose-600 border border-rose-400 text-white hover:bg-rose-500 transition-all active:scale-95 shadow-[0_0_15px_rgba(225,29,72,0.4)] z-20">
                  <span className="text-[10px] max-[380px]:text-[9px] font-bold tracking-widest uppercase">{t.openFull}</span>
                  <ExternalLink className="w-3.5 h-3.5 max-[380px]:w-3 max-[380px]:h-3 text-white" />
                </a>
                <div className="w-[74px] max-[380px]:w-[60px] z-10"></div>
             </div>
             <div className="flex-1 relative w-full h-full bg-[#050102]">
                {!iframeLoaded && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-[#050102] z-10">
                     <div className="w-8 h-8 max-[380px]:w-6 max-[380px]:h-6 border-2 border-rose-900/50 border-t-rose-500 rounded-full animate-spin"></div>
                     <span className="text-[10px] max-[380px]:text-[8px] uppercase tracking-widest text-rose-500/50 animate-pulse">Loading...</span>
                  </div>
                )}
                <iframe src={previewInfo.url} className={`w-full h-full border-none transition-opacity duration-700 bg-white ${iframeLoaded ? 'opacity-100' : 'opacity-0'}`} onLoad={() => setIframeLoaded(true)} title={previewInfo.name} />
             </div>
          </div>
        )}
      </div>
    </div>
  );
};

const App = () => {
  const [lang, setLang] = useState('ru'); 
  const [isFlipped, setIsFlipped] = useState(false);
  const [view, setView] = useState('profile');
  const [highlightIndex, setHighlightIndex] = useState(-1);
  const [sequenceDone, setSequenceDone] = useState(false);
  
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const [sparks, setSparks] = useState([]);
  const [bgOffset, setBgOffset] = useState({ x: 0, y: 0 });
  const [showShare, setShowShare] = useState(false);
  const [showPwaPrompt, setShowPwaPrompt] = useState(false);
  const [showIframeModal, setShowIframeModal] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [showConditionsModal, setShowConditionsModal] = useState(false);
  const [activeSheetData, setActiveSheetData] = useState(null);
  const [iframeUrl, setIframeUrl] = useState('');
  const [copied, setCopied] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [globalRipples, setGlobalRipples] = useState([]);
  const [isNodding, setIsNodding] = useState(false);
  
  const cardRef = useRef(null);
  const audioCtxRef = useRef(null);
  const audioRef = useRef(null);
  const isFlippingRef = useRef(false);
  const hasInteractedRef = useRef(false);
  const hasNoddedRef = useRef(false);

  const mainItems = [
    { id: 'profile', icon: UserCircle2, highlight: true },
    { id: 'solutions', icon: Diamond, highlight: false },
    { id: 'portfolio', icon: Smartphone, highlight: false },
    { id: 'contacts', icon: Phone, highlight: false },
    { id: 'reviews', icon: Star, highlight: false }
  ];

  useEffect(() => {
    if (isFlipped && !sequenceDone) {
      let i = 0;
      setHighlightIndex(0); 
      const interval = setInterval(() => {
        i++;
        if (i < mainItems.length) { 
          setHighlightIndex(i); 
        } else if (i === mainItems.length) {
          setHighlightIndex(0); 
        } else {
          setSequenceDone(true); 
          setHighlightIndex(-1); 
          clearInterval(interval);
        }
      }, 500); 
      return () => clearInterval(interval);
    }
  }, [isFlipped, sequenceDone, mainItems.length]);

  useEffect(() => {
    if (hasNoddedRef.current) return;
    const t1 = setTimeout(() => {
      if (!isFlippingRef.current && !hasInteractedRef.current) {
        setIsNodding(true);
        setRotate({ x: 12, y: -30 });
        setGlare({ x: 80, y: 20, opacity: 0.7 });
        hasNoddedRef.current = true;
      }
    }, 1500);
    const t2 = setTimeout(() => {
      if (!isFlippingRef.current && !hasInteractedRef.current && hasNoddedRef.current) {
        setRotate({ x: 0, y: 0 });
        setGlare({ x: 50, y: 50, opacity: 0 });
      }
    }, 2400);
    const t3 = setTimeout(() => { setIsNodding(false); }, 3200);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  useEffect(() => {
    const ymId = CONTENT.analytics.yandexMetricaId;
    if (!ymId) return;
    (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
    m[i].l=1*new Date();
    for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
    k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
    window.ym(ymId, "init", { clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true });
  }, []);

  useEffect(() => {
    const handleGlobalPointerDown = (e) => {
      if (showGallery || showIframeModal || showConditionsModal || showShare || showPwaPrompt || activeSheetData) return;
      const clientX = e.clientX;
      const clientY = e.clientY;
      if (clientX === undefined || clientY === undefined) return;
      const id = Date.now() + Math.random();
      setGlobalRipples(prev => [...prev, { x: clientX, y: clientY, id }]);
      setTimeout(() => { setGlobalRipples(prev => prev.filter(r => r.id !== id)); }, 900);
    };
    window.addEventListener('pointerdown', handleGlobalPointerDown);
    return () => window.removeEventListener('pointerdown', handleGlobalPointerDown);
  }, [showGallery, showIframeModal, showConditionsModal, showShare, showPwaPrompt, activeSheetData]);

  const toggleGreetingAudio = (e) => {
    e.stopPropagation(); 
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.volume = 1.0;
      audio.muted = false;
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(err => {
          console.warn("Safari blocked play, applying fallback:", err);
          audio.load();
          audio.play().catch(e => console.error("Fatal audio error:", e));
        });
      }
    } else {
      audio.pause();
    }
  };

  useEffect(() => {
    const handleGlobalMove = (e) => {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      const x = (clientX / window.innerWidth - 0.5) * 80;
      const y = (clientY / window.innerHeight - 0.5) * 80;
      setBgOffset({ x: -x, y: -y });
    };
    window.addEventListener('mousemove', handleGlobalMove);
    window.addEventListener('touchmove', handleGlobalMove);
    return () => { window.removeEventListener('mousemove', handleGlobalMove); window.removeEventListener('touchmove', handleGlobalMove); };
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const manifest = {
        name: `${CONTENT[lang].creator.name1} ${CONTENT[lang].creator.name2} | ${CONTENT[lang].creator.role}`,
        short_name: "Elena Sotnikova",
        start_url: window.location.pathname,
        display: "standalone",
        background_color: "#0a0a0a",
        theme_color: "#9f1239",
        icons: [{ src: "/icon-192.png", sizes: "192x192", type: "image/png" }]
      };
      const stringManifest = JSON.stringify(manifest);
      const blob = new Blob([stringManifest], { type: 'application/json' });
      const manifestURL = URL.createObjectURL(blob);
      let link = document.querySelector('link[rel="manifest"]');
      if (!link) {
        link = document.createElement('link');
        link.rel = 'manifest';
        document.head.appendChild(link);
      }
      link.href = manifestURL;
    }
  }, [lang]);

  const handlePointerMove = (e) => {
    hasInteractedRef.current = true;
    if (isFlippingRef.current || !cardRef.current || isNodding) return;
    if (isFlipped || e.target.closest('.no-tilt')) {
      setRotate({ x: 0, y: 0 });
      setGlare(prev => ({ ...prev, opacity: 0 }));
      return;
    }
    const rect = cardRef.current.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -25;
    const rotateY = ((x - centerX) / centerX) * 25;
    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;
    setRotate({ x: rotateX, y: rotateY });
    setGlare({ x: glareX, y: glareY, opacity: 1 });
  };

  const handlePointerLeave = () => {
    if (isFlippingRef.current || isNodding) return;
    setRotate({ x: 0, y: 0 });
    setGlare(prev => ({ ...prev, opacity: 0 }));
  };

  const playFlipSound = () => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      if (!audioCtxRef.current) { audioCtxRef.current = new AudioContext(); }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') { ctx.resume(); }
      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();
      osc.connect(gainNode);
      gainNode.connect(ctx.destination);
      osc.type = 'sine';
      osc.frequency.setValueAtTime(300, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(40, ctx.currentTime + 0.15);
      gainNode.gain.setValueAtTime(0, ctx.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.1, ctx.currentTime + 0.05);
      gainNode.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.15);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.15);
    } catch (e) {}
  };

  const handleFlip = () => {
    hasInteractedRef.current = true;
    if (isNodding) return;
    playFlipSound();
    isFlippingRef.current = true;
    setRotate({ x: 0, y: 0 });
    setGlare(prev => ({ ...prev, opacity: 0 }));
    setTimeout(() => { isFlippingRef.current = false; }, 700);

    if (!isFlipped) {
      const newSparks = Array.from({ length: 35 }).map((_, i) => {
        const angle = (Math.PI * 2 * i) / 35 + (Math.random() * 0.5);
        const distance = 80 + Math.random() * 100;
        return {
          id: Date.now() + i,
          tx: Math.cos(angle) * distance + 'px', ty: Math.sin(angle) * distance + 'px',
          wx1: (Math.random() - 0.5) * 100 + 'px', wy1: (Math.random() - 0.5) * 100 + 'px',
          wx2: (Math.random() - 0.5) * 200 + 'px', wy2: (Math.random() - 0.5) * 200 + 'px',
          wx3: (Math.random() - 0.5) * 300 + 'px', wy3: (Math.random() - 0.5) * 300 + 'px',
          wt: (20 + Math.random() * 20) + 's', size: Math.random() * 2.5 + 1.5 + 'px',
        };
      });
      setSparks(newSparks);
    } else {
      setSparks([]);
    }
    triggerVibration([30, 30, 40]);
    setIsFlipped(!isFlipped);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try { await navigator.share({ title: CONTENT[lang].ui.shareTitle, text: CONTENT[lang].ui.shareText, url: window.location.href }); } 
      catch (err) { console.log('Шаринг отменен'); }
    } else {
      handleCopy();
    }
  };

  const handleDownloadVCard = () => {
    const vcard = [
      "BEGIN:VCARD", "VERSION:3.0",
      `FN:${CONTENT[lang].creator.name1} ${CONTENT[lang].creator.name2}`,
      `N:${CONTENT[lang].creator.name2};${CONTENT[lang].creator.name1};;;`,
      `ORG:${CONTENT[lang].contact.company}`,
      `TITLE:${CONTENT[lang].contact.title}`,
      `TEL;TYPE=CELL:${CONTENT[lang].contact.phone}`,
      `TEL;TYPE=WHATSAPP:${CONTENT[lang].contact.whatsapp}`,
      `URL;TYPE=Telegram:https://t.me/${CONTENT[lang].contact.telegram}`,
      `URL:${CONTENT[lang].contact.website}`,
      `NOTE:${CONTENT[lang].ui.saveContact}`,
      "END:VCARD"
    ].filter(Boolean).join("\r\n"); 

    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    const isAndroid = /Android/.test(navigator.userAgent);
    const isTelegram = /Telegram/i.test(navigator.userAgent || navigator.vendor || window.opera);

    if (isIOS && isTelegram) {
      window.location.href = 'data:text/vcard;charset=utf-8,' + encodeURIComponent(vcard);
      return;
    }

    const mimeType = isAndroid ? 'text/x-vcard;charset=utf-8' : 'text/vcard;charset=utf-8';
    const blob = new Blob([vcard], { type: mimeType });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    if (!isAndroid) { link.setAttribute('download', `${CONTENT[lang].creator.name1}_${CONTENT[lang].creator.name2}.vcf`); }
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => window.URL.revokeObjectURL(url), 500);
  };

  return (
    <div className="fixed inset-0 w-full h-full bg-neutral-950 flex flex-col font-sans select-none transition-all duration-500 overflow-hidden justify-center items-center px-4">
      
      {/* БЛОКИРОВЩИК ГОРИЗОНТАЛЬНОЙ ОРИЕНТАЦИИ (ДЛЯ ТЕЛЕФОНОВ) */}
      <div id="orientation-blocker" className="fixed inset-0 z-[99999] bg-[#050102] flex-col items-center justify-center text-rose-200">
         <Smartphone className="w-16 h-16 mb-6 animate-pulse text-rose-400" style={{ transform: 'rotate(90deg)' }} />
         <p className="text-center font-serif tracking-widest uppercase text-[12px] sm:text-[14px] px-8 leading-relaxed text-rose-200/90">
           {lang === 'ru' ? <>Пожалуйста, поверните телефон<br/>в вертикальное положение</> : lang === 'en' ? <>Please rotate your phone<br/>to portrait mode</> : <>Խնդրում ենք շրջել հեռախոսը<br/>ուղղահայաց</>}
         </p>
      </div>

      <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] hidden sm:block pointer-events-none transition-transform duration-1000 ease-out" style={{ transform: `translate(${bgOffset.x}px, ${bgOffset.y}px)` }}></div>
      <div className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-rose-500/10 rounded-full blur-[120px] hidden sm:block pointer-events-none transition-transform duration-1000 ease-out" style={{ transform: `translate(${bgOffset.x * 1.5}px, ${bgOffset.y * 1.5}px)` }}></div>

      <div className="flex-1 w-full flex items-center justify-center min-h-0 relative z-40">
        <div 
          ref={cardRef}
          className="relative z-10 w-full aspect-[10/16] sm:aspect-[10/15] cursor-pointer group animate-float touch-none mx-auto @container"
          style={{ perspective: '1500px', maxWidth: 'min(26rem, 94vw, 52dvh)' }}
          onClick={handleFlip} onMouseMove={handlePointerMove} onMouseLeave={handlePointerLeave} onTouchMove={handlePointerMove} onTouchEnd={handlePointerLeave}
        >
          {sparks.map(spark => (
            <div key={spark.id} className="spark-particle" style={{ '--tx': spark.tx, '--ty': spark.ty, '--wx1': spark.wx1, '--wy1': spark.wx1, '--wx2': spark.wx2, '--wy2': spark.wx2, '--wx3': spark.wx3, '--wy3': spark.wy3, '--wt': spark.wt, width: spark.size, height: spark.size, left: '50%', top: '50%', marginTop: '-' + (parseFloat(spark.size) / 2) + 'px', marginLeft: '-' + (parseFloat(spark.size) / 2) + 'px' }} />
          ))}

          <div className={`w-full h-full card-preserve-3d z-10 relative ${isNodding ? 'transition-all duration-700 ease-in-out' : 'transition-transform duration-100 ease-out'}`} style={{ transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)` }}>
            <div className="relative w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.4,0.2,0.2,1)] card-preserve-3d" style={{ transform: isFlipped ? 'rotateY(180deg) translateZ(0)' : 'rotateY(0deg) translateZ(0)' }}>
              <div className="absolute inset-0 rounded-[2.5rem] pointer-events-none sm:hidden card-backface-hidden" style={{ boxShadow: `0 0 60px rgba(159,18,57,0.6)` }} />
              <div className="absolute inset-0 rounded-[2.5rem] pointer-events-none sm:hidden card-backface-hidden" style={{ transform: 'rotateY(180deg)', boxShadow: `0 0 60px rgba(159,18,57,0.6)` }} />

              <CreatorCard 
                lang={lang} 
                isFlipped={isFlipped}
                view={view}
                onOpenIframe={(url) => { setIframeUrl(url); setShowIframeModal(true); }} 
                onOpenGallery={() => setShowGallery(true)} 
                onOpenConditions={() => setShowConditionsModal(true)}
                onOpenSheet={setActiveSheetData}
              />

              <div className="absolute inset-0 w-full h-full rounded-[2.5rem] pointer-events-none transition-opacity duration-300 card-backface-hidden" style={{ background: `radial-gradient(farthest-corner circle at ${glare.x}% ${glare.y}%, rgba(255, 255, 255, 0.8) 10%, rgba(255, 255, 255, 0) 60%), linear-gradient(${glare.x + glare.y}deg, rgba(255,255,255,0) 30%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 70%)`, boxShadow: `inset ${rotate.y}px ${-rotate.x}px 20px rgba(255, 255, 255, 0.4), inset ${-rotate.y * 1.5}px ${rotate.x * 1.5}px 40px rgba(255, 255, 255, 0.15)`, mixBlendMode: 'overlay', opacity: glare.opacity ? Math.max(0.4, glare.opacity) : 0, zIndex: 50 }} />
              <div className="absolute inset-0 w-full h-full rounded-[2.5rem] pointer-events-none transition-opacity duration-300 card-backface-hidden" style={{ transform: 'rotateY(180deg) translateZ(0)', background: `radial-gradient(farthest-corner circle at ${100 - glare.x}% ${glare.y}%, rgba(255, 255, 255, 0.8) 10%, rgba(255, 255, 255, 0) 60%), linear-gradient(${100 - glare.x + glare.y}deg, rgba(255,255,255,0) 30%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 70%)`, boxShadow: `inset ${-rotate.y}px ${-rotate.x}px 20px rgba(255, 255, 255, 0.4), inset ${rotate.y * 1.5}px ${rotate.x * 1.5}px 40px rgba(255, 255, 255, 0.15)`, opacity: glare.opacity ? Math.max(0.4, glare.opacity) : 0, mixBlendMode: 'overlay', zIndex: 50 }} />
            </div>
          </div>
        </div>
      </div>

      {/* Верхний док управления (System Pill) */}
      <div className="fixed top-[max(1.5rem,calc(env(safe-area-inset-top)+1rem))] right-[max(1rem,env(safe-area-inset-right))] sm:right-6 z-50 flex items-center gap-1 sm:gap-2 px-1 py-1 max-[380px]:px-0.5 max-[380px]:py-0.5 rounded-full bg-[#151515]/60 sm:bg-black/50 backdrop-blur-md border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
        <audio ref={audioRef} src={CONTENT[lang].creator.audioGreeting} preload="auto" playsInline onPlay={() => setIsAudioPlaying(true)} onPause={() => setIsAudioPlaying(false)} onEnded={() => setIsAudioPlaying(false)} style={{ display: 'none' }} />

        <button type="button" onClick={toggleGreetingAudio} className={`shrink-0 active:scale-90 rounded-full transition-all duration-300 group touch-manipulation flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 max-[380px]:w-6 max-[380px]:h-6 ${isAudioPlaying ? 'bg-rose-900/40 text-rose-300 shadow-inner' : 'text-white/40 hover:text-white/90 hover:bg-white/10'}`} aria-label="Голосовое приветствие">
          {isAudioPlaying ? (
            <div className="flex items-end justify-center gap-[2px] w-full h-3 sm:h-3.5 max-[380px]:h-2.5">
              <div className="audio-bar" style={{ animationDelay: '0.0s' }}></div>
              <div className="audio-bar" style={{ animationDelay: '0.3s', height: '10px' }}></div>
              <div className="audio-bar" style={{ animationDelay: '0.6s', height: '14px' }}></div>
              <div className="audio-bar" style={{ animationDelay: '0.2s', height: '8px' }}></div>
            </div>
          ) : ( <Play className="w-3 h-3 sm:w-3.5 sm:h-3.5 max-[380px]:w-2.5 max-[380px]:h-2.5 group-hover:scale-110 transition-transform ml-0.5" /> )}
        </button>

        <div className="w-[1px] h-3.5 sm:h-4 max-[380px]:h-3 bg-white/10"></div>

        <div className="shrink-0 relative flex items-center h-7 sm:h-8 max-[380px]:h-6 rounded-full bg-transparent">
          <div className="absolute top-1 bottom-1 w-[calc(33.333%-0px)] rounded-full bg-gradient-to-r from-rose-800 to-rose-600 border border-rose-400/50 shadow-[0_0_15px_rgba(225,29,72,0.5)] transition-all duration-300 ease-out" style={{ left: lang === 'hy' ? '0px' : lang === 'ru' ? '33.333%' : '66.666%' }} />
          {[ { code: 'hy', label: 'AM' }, { code: 'ru', label: 'RU' }, { code: 'en', label: 'EN' } ].map((item) => (
            <button key={item.code} onClick={(e) => { e.preventDefault(); e.stopPropagation(); triggerVibration(); setLang(item.code); }} className={`relative z-10 px-1.5 sm:px-2 max-[380px]:px-1 h-full flex items-center justify-center text-[9px] sm:text-[10px] max-[380px]:text-[8px] font-bold tracking-wider transition-colors duration-200 touch-manipulation min-w-[24px] sm:min-w-[28px] max-[380px]:min-w-[20px] text-center ${lang === item.code ? 'text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]' : 'text-white/40 hover:text-white/80'}`}>
              {item.label}
            </button>
          ))}
        </div>

        <div className="w-[1px] h-3.5 sm:h-4 max-[380px]:h-3 bg-white/10"></div>

        <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); triggerVibration(); setShowShare(true); }} className="shrink-0 active:scale-90 rounded-full text-white/40 hover:text-white/90 hover:bg-white/10 transition-all duration-300 group touch-manipulation flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 max-[380px]:w-6 max-[380px]:h-6" aria-label="Поделиться">
          <QrCode className="w-3 h-3 sm:w-3.5 sm:h-3.5 max-[380px]:w-2.5 max-[380px]:h-2.5 group-hover:scale-110 transition-transform" />
        </button>

        <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); triggerVibration(); handleDownloadVCard(); }} className="shrink-0 active:scale-90 rounded-full text-white/40 hover:text-white/90 hover:bg-white/10 transition-all duration-300 group touch-manipulation flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 max-[380px]:w-6 max-[380px]:h-6 mr-0.5" aria-label="Сохранить контакт" title="Сохранить в контакты">
          <UserPlus className="w-3 h-3 sm:w-3.5 sm:h-3.5 max-[380px]:w-2.5 max-[380px]:h-2.5 group-hover:scale-110 transition-transform" />
        </button>
      </div>

      {/* Floating Spatial Dock (Нижнее меню) */}
      <div className={`fixed bottom-[max(2rem,calc(env(safe-area-inset-bottom)+1rem))] left-1/2 -translate-x-1/2 z-50 flex items-center justify-between gap-3 sm:gap-4 max-[380px]:gap-2 px-3 sm:px-4 max-[380px]:px-2 py-1 sm:py-1 max-[380px]:py-1 rounded-full bg-[#151515]/60 sm:bg-black/50 backdrop-blur-md border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isFlipped ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-16 opacity-0 scale-90 pointer-events-none'}`}>
        {mainItems.map((item, idx) => {
          const isSeqActive = highlightIndex === idx;
          const isViewActive = view === item.id;
          const isActive = isViewActive || isSeqActive;
          return (
            <button 
              key={item.id}
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); triggerVibration(); setView(item.id); }}
              className={`relative w-8 h-8 sm:w-9 sm:h-9 max-[380px]:w-7 max-[380px]:h-7 rounded-full transition-all duration-300 flex items-center justify-center p-0 
                ${isActive ? 'bg-gradient-to-br from-rose-700 to-rose-400 text-white shadow-[0_0_15px_rgba(225,29,72,0.5)] scale-110 z-10' : 'text-rose-400/60 hover:text-rose-200 hover:bg-rose-900/40'}`}
            >
              <item.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 max-[380px]:w-3 max-[380px]:h-3" />
            </button>
          );
        })}
      </div>

      {/* Всплывающая шторка (Bottom Sheet) */}
      <div 
        className={`fixed inset-0 z-[60] flex flex-col justify-end items-center sm:p-4 transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${activeSheetData ? 'pointer-events-auto' : 'pointer-events-none'}`}
      >
        <div 
          className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${activeSheetData ? 'opacity-100' : 'opacity-0'}`} 
          onClick={(e) => { e.stopPropagation(); setActiveSheetData(null); }}
        />
        
        <div 
          className={`relative w-full sm:max-w-md bg-gradient-to-b from-[#1a050d] to-[#0a0205] sm:border border-t border-rose-900/50 rounded-t-3xl sm:rounded-3xl pt-3 pb-8 max-[380px]:pb-6 sm:pb-6 px-5 max-[380px]:px-4 sm:px-6 shadow-[0_-10px_40px_rgba(159,18,57,0.4)] transition-transform duration-400 ${activeSheetData ? 'translate-y-0 sm:translate-y-0 sm:scale-100' : 'translate-y-full sm:translate-y-10 sm:scale-95 sm:opacity-0'}`}
          onClick={e => e.stopPropagation()}
        >
          <div className="w-10 h-1 bg-rose-900/60 rounded-full mx-auto mb-4 cursor-pointer sm:hidden" onClick={() => setActiveSheetData(null)} />
          
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[1.125rem] max-[380px]:text-[1rem] font-bold text-rose-100 leading-tight">{activeSheetData?.title}</h3>
            <button onClick={() => setActiveSheetData(null)} className="w-8 h-8 rounded-full bg-rose-900/30 flex items-center justify-center shrink-0 hover:bg-rose-900/50 transition-colors">
              <X className="w-4 h-4 text-rose-300" />
            </button>
          </div>
          
          <div className="overflow-y-auto max-h-[60vh] hide-scrollbar mask-image-bottom pb-6">
             <p className="text-[13px] max-[380px]:text-[11px] sm:text-[14px] text-rose-200/80 whitespace-pre-line leading-relaxed font-light">
               {activeSheetData?.sheetText}
             </p>
             
             <div className="flex flex-col gap-3 mt-6">
               {activeSheetData?.btns?.map((btn, idx) => {
                 const btnClasses = `w-full text-center py-3 max-[380px]:py-2.5 rounded-xl font-bold text-[11px] max-[380px]:text-[10px] sm:text-xs uppercase tracking-wider transition-all active:scale-95 ${
                   btn.primary 
                    ? 'bg-rose-600 text-white shadow-[0_0_15px_rgba(225,29,72,0.4)] hover:bg-rose-500' 
                    : 'bg-rose-900/40 backdrop-blur-md border border-rose-500/50 text-white shadow-[0_0_10px_rgba(159,18,57,0.2)] hover:bg-rose-800/60'
                 }`;

                 if (btn.action === 'gallery') {
                   return (
                     <button
                       key={idx}
                       onClick={(e) => {
                         e.stopPropagation();
                         setActiveSheetData(null);
                         setShowGallery(true);
                       }}
                       className={btnClasses}
                     >
                       {btn.text}
                     </button>
                   );
                 }

                 return (
                   <a 
                     key={idx} 
                     href={btn.link} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className={btnClasses}
                   >
                     {btn.text}
                   </a>
                 );
               })}
             </div>
          </div>
        </div>
      </div>

      {showShare && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 max-[380px]:p-3 bg-[#151515]/80 sm:bg-black/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-200" onClick={() => setShowShare(false)}>
          <div className="rounded-[2.5rem] p-5 max-[380px]:p-4 sm:p-8 w-full max-w-sm flex flex-col items-center relative shadow-2xl animate-in zoom-in-95 duration-200 bg-[#0a0205] border border-rose-900/30" onClick={e => e.stopPropagation()}>
            <button onClick={() => setShowShare(false)} className="absolute top-5 right-5 max-[380px]:top-3 max-[380px]:right-3 text-white/40 hover:text-white bg-white/5 hover:bg-white/10 rounded-full p-2 max-[380px]:p-1.5 transition-colors border border-white/5"><X className="w-5 h-5 max-[380px]:w-4 max-[380px]:h-4" /></button>
            <button onClick={() => { setShowShare(false); setShowPwaPrompt(true); }} className="w-12 h-12 max-[380px]:w-10 max-[380px]:h-10 rounded-full bg-rose-900/30 hover:bg-rose-900/50 flex items-center justify-center mb-4 max-[380px]:mb-3 border transition-colors group cursor-pointer active:scale-95 border-rose-500/30">
              <QrCode className="w-6 h-6 max-[380px]:w-5 max-[380px]:h-5 group-hover:scale-110 transition-transform text-rose-400" />
            </button>
            <h3 className="text-xl max-[380px]:text-lg font-bold text-white mb-2 tracking-wide">{CONTENT[lang].ui.shareTitle}</h3>
            <p className="text-sm max-[380px]:text-xs text-white/60 text-center mb-6 max-[380px]:mb-4 leading-relaxed">{CONTENT[lang].ui.shareDesc}</p>
            <div className="bg-white p-4 max-[380px]:p-3 rounded-3xl mb-6 max-[380px]:mb-4 shadow-[0_0_40px_rgba(255,255,255,0.15)] flex items-center justify-center min-h-[170px] max-[380px]:min-h-[130px]">
              <img src="/qr.png" alt="QR Code" className="w-[140px] h-[140px] max-[380px]:w-[110px] max-[380px]:h-[110px] object-contain rounded-lg" onError={(e) => { e.target.onerror = null; e.target.src = "https://api.qrserver.com/v1/create-qr-code/?size=180x180&margin=0&data=" + encodeURIComponent(typeof window !== 'undefined' ? window.location.href : 'https://appseapro.com/'); }} />
            </div>
            <div className="flex gap-3 w-full">
              <button onClick={handleCopy} className="flex-1 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium py-3.5 px-4 max-[380px]:py-2 max-[380px]:px-3 rounded-2xl flex items-center justify-center gap-2 transition-colors text-sm max-[380px]:text-xs">
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                {copied ? CONTENT[lang].ui.copied : CONTENT[lang].ui.copy}
              </button>
              <button onClick={handleShare} className="flex-1 bg-rose-600 hover:bg-rose-500 border border-rose-400 text-white font-bold py-3.5 px-4 max-[380px]:py-2 max-[380px]:px-3 rounded-2xl flex items-center justify-center gap-2 transition-colors text-sm max-[380px]:text-xs shadow-[0_0_15px_rgba(225,29,72,0.4)]">
                <Share2 className="w-4 h-4" /> {CONTENT[lang].ui.send}
              </button>
            </div>
          </div>
        </div>
      )}

      {showPwaPrompt && (
        <div className="fixed inset-0 z-[70] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-[#151515]/80 sm:bg-black/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-300" onClick={() => setShowPwaPrompt(false)}>
          <div className="w-full max-w-sm bg-[#0a0205] sm:rounded-3xl rounded-t-3xl p-6 pb-10 max-[380px]:p-5 max-[380px]:pb-8 sm:pb-6 flex flex-col items-center relative animate-in slide-in-from-bottom-full sm:zoom-in-95 duration-300 border-t sm:border border-rose-900/30 shadow-[0_-10px_40px_rgba(159,18,57,0.2)]" onClick={e => e.stopPropagation()}>
            <div className="w-12 h-1.5 bg-white/20 rounded-full mb-6 max-[380px]:mb-4 sm:hidden"></div>
            <button onClick={() => setShowPwaPrompt(false)} className="absolute top-5 right-5 max-[380px]:top-3 max-[380px]:right-3 text-white/40 hover:text-white bg-white/5 hover:bg-white/10 rounded-full p-2 transition-colors border border-white/5 hidden sm:block"><X className="w-5 h-5 max-[380px]:w-4 max-[380px]:h-4" /></button>
            <div className="w-16 h-16 max-[380px]:w-12 max-[380px]:h-12 bg-gradient-to-br from-rose-900 to-black p-0.5 rounded-2xl shadow-[0_0_20px_rgba(159,18,57,0.4)] mb-5 max-[380px]:mb-4">
               <div className="w-full h-full bg-[#151515]/60 sm:bg-black/50 backdrop-blur-md rounded-[14px] flex items-center justify-center border border-rose-500/20"><Crown className="w-8 h-8 max-[380px]:w-6 max-[380px]:h-6 text-rose-400" /></div>
            </div>
            <h3 className="text-xl max-[380px]:text-lg font-bold text-white mb-2 text-center tracking-wide">{CONTENT[lang].ui.installTitle}</h3>
            <p className="text-sm max-[380px]:text-[11px] text-white/60 text-center mb-8 max-[380px]:mb-5 leading-relaxed">{CONTENT[lang].ui.installDesc}</p>
            <div className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 max-[380px]:p-4 flex flex-col gap-5 max-[380px]:gap-4 mb-8 max-[380px]:mb-5 shadow-inner">
               <div className="flex items-center gap-4 max-[380px]:gap-3">
                 <div className="w-8 h-8 max-[380px]:w-7 max-[380px]:h-7 rounded-full bg-rose-900/40 border border-rose-500/30 flex items-center justify-center shrink-0"><Share2 className="w-4 h-4 max-[380px]:w-3.5 max-[380px]:h-3.5 text-rose-300" /></div>
                 <p className="text-sm max-[380px]:text-[11px] text-white/80 leading-snug">{CONTENT[lang].ui.installStep1_1}<b>{CONTENT[lang].ui.installStep1_2}</b><br/>{CONTENT[lang].ui.installStep1_3}</p>
               </div>
               <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
               <div className="flex items-center gap-4 max-[380px]:gap-3">
                 <div className="w-8 h-8 max-[380px]:w-7 max-[380px]:h-7 rounded-full bg-rose-900/40 border border-rose-500/30 flex items-center justify-center shrink-0"><PlusSquare className="w-4 h-4 max-[380px]:w-3.5 max-[380px]:h-3.5 text-rose-300" /></div>
                 <p className="text-sm max-[380px]:text-[11px] text-white/80 leading-snug">{CONTENT[lang].ui.installStep2_1}<b className="text-white">{CONTENT[lang].ui.installStep2_2}</b><br/>{CONTENT[lang].ui.installStep2_3}</p>
               </div>
            </div>
            <button onClick={() => setShowPwaPrompt(false)} className="w-full bg-gradient-to-r from-[#380e1b] to-black hover:from-[#4a1223] border border-rose-800/50 text-rose-100 font-bold py-4 px-4 max-[380px]:py-3 rounded-2xl transition-colors shadow-[0_0_20px_rgba(159,18,57,0.3)] active:scale-95">{CONTENT[lang].ui.done}</button>
          </div>
        </div>
      )}

      {showConditionsModal && (
        <div className="fixed inset-0 z-[70] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-[#151515]/80 sm:bg-black/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-300 touch-none" onClick={() => setShowConditionsModal(false)}>
          <div className="w-full h-[85vh] sm:h-auto sm:max-h-[85vh] max-w-md bg-[#0a0205] sm:rounded-3xl rounded-t-3xl flex flex-col relative animate-in slide-in-from-bottom-full sm:zoom-in-95 duration-300 border-t sm:border border-rose-900/30 shadow-[0_-10px_40px_rgba(159,18,57,0.2)]" onClick={e => e.stopPropagation()}>
             <div className="flex-shrink-0 flex items-center justify-between p-5 max-[380px]:p-4 border-b border-rose-900/30">
               <h3 className="text-lg max-[380px]:text-base font-bold text-white tracking-wide">{CONTENT[lang].conditions.title}</h3>
               <button onClick={() => setShowConditionsModal(false)} className="text-white/40 hover:text-white bg-white/5 hover:bg-white/10 rounded-full p-2 transition-colors border border-white/5 ml-4 shrink-0"><X className="w-5 h-5 max-[380px]:w-4 max-[380px]:h-4" /></button>
             </div>
             <div className="flex-1 overflow-y-auto p-5 max-[380px]:p-4 pb-8 hide-scrollbar">
                <div className="flex flex-col gap-6 max-[380px]:gap-4">
                  {CONTENT[lang].conditions.items.map((item, idx) => (
                    <div key={idx} className="flex flex-col gap-1.5">
                      <h4 className="text-[15px] max-[380px]:text-[13px] font-bold text-rose-200">{item.title}</h4>
                      <p className="text-[13px] max-[380px]:text-[11px] text-rose-100/70 leading-relaxed font-light">{item.text}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 max-[380px]:mt-6 pt-6 max-[380px]:pt-4 border-t border-rose-900/30 text-center">
                  <p className="text-[11px] max-[380px]:text-[9px] text-rose-100/40 tracking-wider whitespace-pre-line uppercase font-light leading-relaxed">{CONTENT[lang].conditions.footer}</p>
                </div>
             </div>
             <div className="flex-shrink-0 p-5 max-[380px]:p-4 border-t border-rose-900/30 bg-[#0a0205] sm:rounded-b-3xl">
               <button onClick={() => setShowConditionsModal(false)} className="w-full bg-white text-black font-bold py-4 px-4 max-[380px]:py-3 rounded-2xl transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] active:scale-95 hover:bg-rose-100 max-[380px]:text-sm">{CONTENT[lang].conditions.accept}</button>
             </div>
          </div>
        </div>
      )}

      {showGallery && <DesignGalleryModal onClose={() => setShowGallery(false)} lang={lang} />}

      {showIframeModal && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-0 sm:p-4 bg-[#0a0205] sm:bg-black/80 transition-opacity animate-in fade-in duration-300" onClick={() => setShowIframeModal(false)}>
          <div className="w-full h-full sm:max-w-[400px] sm:max-h-[800px] bg-[#0a0205] rounded-none sm:rounded-[2.5rem] overflow-hidden relative shadow-none sm:shadow-[0_0_50px_rgba(159,18,57,0.4)] border-0 sm:border border-rose-900/50 flex flex-col animate-in slide-in-from-bottom-full sm:slide-in-from-bottom-0 sm:zoom-in-95 duration-300" onClick={e => e.stopPropagation()}>
            <div className="h-[calc(3.5rem+env(safe-area-inset-top))] max-[380px]:h-[calc(3rem+env(safe-area-inset-top))] pt-[env(safe-area-inset-top)] border-b border-rose-900/50 flex items-center justify-between px-4 sm:px-5 bg-[#0a0205] shrink-0 relative z-20">
              <div className="flex items-center gap-3 max-[380px]:gap-2">
                <Smartphone className="w-5 h-5 max-[380px]:w-4 max-[380px]:h-4 text-rose-400" />
                <span className="text-rose-100 font-serif tracking-wider text-[11px] sm:text-sm max-[380px]:text-[10px] uppercase font-bold">{lang === 'ru' ? 'Смотреть' : lang === 'en' ? 'Watch' : 'Դիտել'}</span>
              </div>
              
              {iframeUrl !== '/promo.mp4' && (
                  <a href={iframeUrl} target="_blank" rel="noopener noreferrer" className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-1.5 max-[380px]:px-3 max-[380px]:py-1 rounded-full bg-rose-600 border border-rose-400 text-white hover:bg-rose-500 transition-all active:scale-95 shadow-[0_0_15px_rgba(225,29,72,0.4)] z-30">
                    <span className="text-[10px] max-[380px]:text-[9px] font-bold tracking-widest uppercase">{GALLERY_TRANSLATIONS[lang].openFull}</span>
                    <ExternalLink className="w-3.5 h-3.5 max-[380px]:w-3 max-[380px]:h-3 text-white" />
                  </a>
              )}

              <button onClick={() => setShowIframeModal(false)} className="text-white/40 hover:text-white bg-white/5 hover:bg-white/10 rounded-full p-2 transition-colors border border-white/5 active:scale-95"><X className="w-4 h-4 max-[380px]:w-3.5 max-[380px]:h-3.5" /></button>
            </div>
            <div className="flex-1 w-full relative bg-neutral-950 pb-[env(safe-area-inset-bottom)] z-10">
              {iframeUrl === '/promo.mp4' ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#050102] px-6 text-center overflow-hidden">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-rose-900/10 rounded-full blur-[80px] pointer-events-none"></div>
                  <div className="relative w-20 h-20 max-[380px]:w-16 max-[380px]:h-16 mb-8 max-[380px]:mb-6 flex items-center justify-center">
                    <div className="absolute inset-0 bg-rose-900/20 rounded-full blur-md"></div>
                    <div className="absolute inset-0 border border-rose-500/20 rounded-full animate-ping opacity-50" style={{ animationDuration: '3s' }}></div>
                    <div className="absolute inset-2 border border-rose-400/30 rounded-full flex items-center justify-center bg-[#0a0205]/95 shadow-[0_0_15px_rgba(159,18,57,0.3)]"><Play className="w-6 h-6 max-[380px]:w-5 max-[380px]:h-5 text-rose-300 ml-1 opacity-80" /></div>
                  </div>
                  <h3 className="text-rose-100 font-serif text-[18px] sm:text-[20px] max-[380px]:text-[15px] tracking-[0.15em] uppercase font-light drop-shadow-[0_0_10px_rgba(255,255,255,0.2)] leading-relaxed">{CONTENT[lang].ui.comingSoonVideo}</h3>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="w-8 h-[1px] bg-rose-900/50"></div>
                    <span className="text-rose-100/30 text-[9px] uppercase tracking-widest">{lang === 'ru' ? 'В разработке' : lang === 'en' ? 'In progress' : 'Մշակման փուլում է'}</span>
                    <div className="w-8 h-[1px] bg-rose-900/50"></div>
                  </div>
                </div>
              ) : (
                <>
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                    <div className="flex flex-col items-center gap-3"><div className="w-8 h-8 border-2 border-rose-500/30 border-t-rose-500 rounded-full animate-spin"></div><div className="text-rose-200/50 text-[10px] font-serif tracking-widest uppercase">Loading...</div></div>
                  </div>
                  <iframe src={iframeUrl} className="w-full h-full border-0 relative z-10 bg-transparent" title="Preview" sandbox="allow-scripts allow-same-origin allow-popups"></iframe>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="pointer-events-none fixed inset-0 z-[100] overflow-hidden">
        {globalRipples.map(r => <div key={r.id} className="water-ripple-element" style={{ left: r.x, top: r.y, transformOrigin: 'center' }} />)}
      </div>
    </div>
  );
};

export default App;