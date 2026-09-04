import React, { useState, useEffect, useRef } from 'react';
import { 
  Globe, Star, UserCircle2, Diamond, Crown,
  QrCode, Share2, Copy, X, Check,
  Code2, Play, PlusSquare, UserPlus,
  Smartphone, CreditCard, Key, Sparkles,
  Moon, Brain, PlaneTakeoff, Camera, Activity, 
  Droplets, Building2, Smile, Aperture, ChevronLeft, ExternalLink
} from 'lucide-react';

// Компонент QR-кода
const QRCodeComponent = ({ value, size }) => {
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(value)}`;
  return (
    <div style={{ width: size, height: size }} className="object-contain rounded-lg flex items-center justify-center bg-white overflow-hidden p-3">
      <img 
        src={qrUrl} 
        alt="QR Code" 
        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
      />
    </div>
  );
};

// ==========================================
// ⚙️ НАСТРОЙКИ КОНТЕНТА (МЕНЯТЬ ТЕКСТ, ФОТО И ССЫЛКИ ТОЛЬКО ЗДЕСЬ!)
// ==========================================
const CONTENT = {
  // 🇷🇺 РУССКИЙ ЯЗЫК
  ru: {
    creator: {
      bgImage: '/bg-creator.jpg',
      avatar: '/avatar-creator.jpg', 
      audioGreeting: '/greeting.mp3', // 🔊 Ссылка на ваш аудиофайл (можно сделать разные для RU и EN)
      badge: 'DESIGN & CODE',
      name1: 'ЕЛЕНА',
      name2: 'СОТНИКОВА',
      role: 'Premium Web',
      status: 'Digital Creator',
      quote1: 'Не просто визитка,',
      quote2: 'а ваш главный цифровой актив...',
      websiteText: 'Подробнее...',
      websiteLink: 'https://appsea.ru/',
      actionText: 'ЗАКАЗАТЬ ВИЗИТКУ',
      actionLink: 'https://t.me/elenlime?text=Елена, привет! Хочу заказать свою визитку',
    },
    leadMagnet: {
      title: 'SECRET OFFER',
      description: <>Вы нашли секретную вкладку! Нажмите кнопку ниже, чтобы перейти в Telegram и получить сразу два бонуса:<br/><br/>• Скидку 15% на любой тариф (Start, Plus, Premium)<br/>• Бесплатное тиснение ваших инициалов на кожаном брелоке (если входит в тариф) </>,
      buttonText: 'ЗАБРАТЬ ПРОМОКОД',
      promoCode: 'ELEN-TECH-15%',
      link: 'https://t.me/elenlime?text=Елена, привет! У меня есть промокод ELEN-TECH-15%. Хочу обсудить создание цифровой визитки.',
    },
    contact: {
      phone: '+37494261123',
      whatsapp: '+79995051277',
      telegram: 'elenlime',
      company: 'Premium Web',
      title: 'Digital Creator & Developer',
      website: 'https://appsea.ru/'
    },
    views: {
      profile: {
        title: 'Моя философия',
        desc: <>Создаю умные цифровые визитки, которые сохраняются на экран смартфона как полноценное PWA-приложение. А также авторские NFC-брелоки из натуральной кожи ручной работы.</>,
        features: [
          { icon: 'Crown', title: 'WOW-Эффект', desc: 'ЗАПОМИНАЕШЬСЯ СРАЗУ' },
          { icon: 'CreditCard', title: 'Разовая оплата', desc: 'БЕЗ АБОНЕНТСКОЙ ПЛАТЫ' },
          { icon: 'Globe', title: 'Личный домен', desc: 'ИМЯ.APPSEA.RU' },
          { icon: 'Key', title: 'Без VPN', desc: 'РАБОТАЕТ ВСЕГДА' },
          { icon: 'Sparkles', title: 'Удобство', desc: 'КОНТАКТЫ В 1 КЛИК' },
          { icon: 'Diamond', title: 'Статус', desc: 'ПРЕМИАЛЬНЫЙ ИМИДЖ' }
        ]
      },
      standart: {
        title: 'Тариф STANDART',
        price: '5 300 ₽',
        desc: <>Цифровая PWA-визитка по стильному шаблону под вашу нишу.<br/><br/>• Иконка-приложение на экран смартфона<br/>• Персональный поддомен и хостинг уже включены<br/>• Мгновенное сохранение контакта в 1 клик и стильный QR-код<br/>• Работает без VPN, без установки приложений и без абонентской платы навсегда.<br/><br/>Физический NFC-носитель на выбор (при заказе):<br/>💳 + NFC-карта (пластик, минимализм): +2 400 ₽<br/>🔑 + NFC-брелок (ручная работа, кожа Crazy Horse + тиснение): +7 600 ₽</>
      },
      vip: {
        title: 'Тариф PREMIUM',
        price: 'от 23 500 ₽',
        desc: <>Разработка 100% уникального дизайна и кода с нуля под ваш бренд и статус.<br/><br/>• Кастомные 3D-эффекты, сложные анимации и редкие интерактивы<br/>• Индивидуальная структура под ваши бизнес-задачи<br/>• PWA-формат, персональный поддомен и хостинг навсегда<br/><br/>🎁 ПОДАРОК: Авторский NFC-брелок ручной работы из натуральной кожи Crazy Horse с тиснением ваших инициалов включен в стоимость!</>
      },
      catalog: {
        title: 'Примеры работ',
        desc: 'Посмотрите готовые дизайны визиток и как выглядит NFC-брелок вживую',
        items: [
          { name: 'Галерея дизайнов', desc: 'Посмотреть примеры готовых визиток', url: 'https://start.appsea.ru/' },
          { name: 'NFC-брелок вживую', desc: 'Как выглядит и работает NFC-брелок', url: '/promo.mp4' },
        ]
      },
      reviewsTitle: 'Отзывы',
      reviews: [
        { name: 'Виктория', date: '20.03.2026', text: '"Забыла про конструкторы как про страшный сон. Очень плавно, стильно, вайб передается на 100%."' },
        { name: 'Алексей', date: '21.03.2026', text: '"Дизайн просто космос. Клиенты теперь не хотят уходить из моей мини-апп. Конверсия выросла вдвое!"' },
        { name: 'Мария', date: '01.04.2026', text: '"Елена — мастер своего дела. Все продумано до мелочей: от визуала до анимаций."' }
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
      installStep1_3: 'в меню браузера (обычно внизу).',
      installStep2_1: 'Выберите ',
      installStep2_2: '«На экран "Домой"»',
      installStep2_3: 'в появившемся списке.',
      done: 'Готово',
      saveContact: 'Сохранено с цифровой визитки'
    }
  },

  // 🇬🇧 АНГЛИЙСКИЙ ЯЗЫК
  en: {
    creator: {
      bgImage: '/bg-creator.jpg',
      avatar: '/avatar-creator.jpg', 
      audioGreeting: '/greeting.mp3',
      badge: 'DESIGN & CODE',
      name1: 'ELENA',
      name2: 'SOTNIKOVA',
      role: 'Premium Web',
      status: 'Digital Creator',
      quote1: 'More than just a business card,',
      quote2: 'it\'s your core digital asset...',
      websiteText: 'Learn more...',
      websiteLink: 'https://appsea.ru/',
      actionText: 'ORDER YOUR CARD',
      actionLink: 'https://t.me/elenlime?text=Hi Elena! I want to order my digital business card.',
    },
    leadMagnet: {
      title: 'SECRET OFFER',
      description: <>You've found the secret tab! Click the button below to go to Telegram and instantly receive two bonuses:<br/><br/>• A 15% discount on any plan (Start, Plus, Premium)<br/>• Free embossing of your initials on the leather keychain (if included in your plan)</>,
      buttonText: 'GET PROMO CODE',
      promoCode: 'ELEN-TECH-15%',
      link: 'https://t.me/elenlime?text=Hi Elena! I have the promo code ELEN-TECH-15%. I want to discuss creating a digital business card.',
    },
    contact: {
      phone: '+79995051277',
      whatsapp: '+79995051277',
      telegram: 'elenlime',
      company: 'Premium Web',
      title: 'Digital Creator & Developer',
      website: 'https://appsea.ru/'
    },
    views: {
      profile: {
        title: 'My Philosophy',
        desc: <>I create smart digital business cards that save to your smartphone screen as a fully-fledged PWA. I also make exclusive handmade NFC keychains from genuine leather.</>,
        features: [
          { icon: 'Crown', title: 'WOW Effect', desc: 'MEMORABLE INSTANTLY' },
          { icon: 'CreditCard', title: 'One-time Pay', desc: 'NO SUBSCRIPTIONS' },
          { icon: 'Globe', title: 'Custom Domain', desc: 'NAME.APPSEA.RU' },
          { icon: 'Key', title: 'No VPN Needed', desc: 'WORKS EVERYWHERE' },
          { icon: 'Sparkles', title: 'Convenience', desc: '1-CLICK CONTACTS' },
          { icon: 'Diamond', title: 'Status', desc: 'PREMIUM IMAGE' }
        ]
      },
      standart: {
        title: 'STANDART Plan',
        price: '$59',
        desc: <>Digital PWA business card based on a stylish template tailored to your niche.<br/><br/>• App icon on your smartphone screen<br/>• Personal subdomain and hosting already included<br/>• Instant 1-click contact saving and a stylish QR code<br/>• Works without a VPN, requires no app installations, and has zero subscription fees forever.<br/><br/>Physical NFC carrier of your choice (when ordering):<br/>💳 + NFC card (plastic, minimalist): +$25<br/>🔑 + NFC keychain (handmade, Crazy Horse leather + embossing): +$80</>
      },
      vip: {
        title: 'PREMIUM Plan',
        price: 'from $260',
        desc: <>100% unique design and code development from scratch to match your brand and status.<br/><br/>• Custom 3D effects, complex animations, and rare interactive elements<br/>• Tailored structure designed for your business goals<br/>• PWA format, personal subdomain, and hosting forever<br/><br/>🎁 GIFT: An exclusive handmade NFC keychain made of genuine Crazy Horse leather, embossed with your initials, is included in the price!</>
      },
      catalog: {
        title: 'Portfolio',
        desc: 'Check out ready-made business card designs and see how the NFC keychain looks in real life',
        items: [
          { name: 'Design Gallery', desc: 'View examples of ready-made business cards', url: 'https://start.appsea.ru/' },
          { name: 'NFC Keychain in Real Life', desc: 'How the NFC keychain looks and works', url: '/promo.mp4' },
        ]
      },
      reviewsTitle: 'Reviews',
      reviews: [
        { name: 'Victoria', date: '20.03.2026', text: '"Forgot about website builders like a bad dream. Very smooth, stylish, the vibe is 100% there."' },
        { name: 'Alexey', date: '21.03.2026', text: '"The design is simply cosmic. Clients now don\'t want to leave my mini-app. Conversions have doubled!"' },
        { name: 'Maria', date: '01.04.2026', text: '"Elena is a true professional. Everything is thought out to the smallest detail: from visuals to animations."' }
      ]
    },
    ui: {
      shareTitle: 'Share Card',
      shareDesc: 'Let others scan your QR code or send the link directly.',
      shareText: 'Hi! Here is my digital business card with all my contacts:',
      copy: 'Copy',
      copied: 'Copied!',
      send: 'Send',
      installTitle: 'Install App',
      installDesc: 'Add the business card to your Home Screen for one-click access without a browser.',
      installStep1_1: 'Tap the ',
      installStep1_2: '«Share»',
      installStep1_3: ' button in your browser menu (usually at the bottom).',
      installStep2_1: 'Select ',
      installStep2_2: '«Add to Home Screen»',
      installStep2_3: ' from the list.',
      done: 'Done',
      saveContact: 'Saved from digital business card'
    }
  },

  // 🇦🇲 АРМЯНСКИЙ ЯЗЫК
  hy: {
    creator: {
      bgImage: '/bg-creator.jpg',
      avatar: '/avatar-creator.jpg', 
      audioGreeting: '/greeting.mp3',
      badge: 'DESIGN & CODE',
      name1: 'ԵԼԵՆԱ',
      name2: 'ՍՈՏՆԻԿՈՎԱ',
      role: 'Premium Web',
      status: 'Digital Creator',
      quote1: 'Ավելին, քան պարզապես այցեքարտ,',
      quote2: 'այլ ձեր գլխավոր թվային ակտիվը...',
      websiteText: 'Ավելին...',
      websiteLink: 'https://appsea.ru/',
      actionText: 'ՊԱՏՎԻՐԵԼ ԱՅՑԵՔԱՐՏ',
      actionLink: 'https://t.me/elenlime?text=Ողջույն Ելենա: Ցանկանում եմ պատվիրել իմ թվային այցեքարտը:',
    },
    leadMagnet: {
      title: 'SECRET OFFER',
      description: <>Դուք գտաք գաղտնի ներդիրը: Սեղմեք ստորև նշված կոճակը՝ Telegram անցնելու և միանգամից երկու բոնուս ստանալու համար՝<br/><br/>• 15% զեղչ ցանկացած տարիֆի համար (Start, Plus, Premium)<br/>• Ձեր անվանատառերի անվճար դրոշմում կաշվե կախազարդի վրա (եթե ներառված է տարիֆի մեջ)</>,
      buttonText: 'ՍՏԱՆԱԼ ՊՐՈՄՈԿՈԴԸ',
      promoCode: 'ELEN-TECH-15%',
      link: 'https://t.me/elenlime?text=Ողջույն Ելենա: Ես ունեմ ELEN-TECH-15% պրոմոկոդը: Ցանկանում եմ քննարկել թվային այցեքարտի ստեղծումը:',
    },
    contact: {
      phone: '+79995051277',
      whatsapp: '+79995051277',
      telegram: 'elenlime',
      company: 'Premium Web',
      title: 'Digital Creator & Developer',
      website: 'https://appsea.ru/'
    },
    views: {
      profile: {
        title: 'Իմ փիլիսոփայությունը',
        desc: <>Ստեղծում եմ խելացի թվային այցեքարտեր, որոնք պահպանվում են սմարթֆոնի էկրանին որպես լիարժեք PWA-հավելված: Ինչպես նաև հեղինակային ձեռագործ NFC-կախազարդեր՝ բնական կաշվից:</>,
        features: [
          { icon: 'Crown', title: 'WOW Էֆեկտ', desc: 'ԱՆՄԻՋԱՊԵՍ ՀԻՇՎՈՂ' },
          { icon: 'CreditCard', title: 'Միանվագ վճար', desc: 'ԱՌԱՆՑ ԱՄՍԱՎՃԱՐԻ' },
          { icon: 'Globe', title: 'Անձնական դոմեն', desc: 'ԱՆՈՒՆ.APPSEA.RU' },
          { icon: 'Key', title: 'Առանց VPN', desc: 'ԱՇԽԱՏՈՒՄ Է ՄԻՇՏ' },
          { icon: 'Sparkles', title: 'Հարմարավետություն', desc: 'ԿՈՆՏԱԿՏՆԵՐ 1 ՍԵՂՄՈՒՄՈՎ' },
          { icon: 'Diamond', title: 'Կարգավիճակ', desc: 'ՊՐԵՄԻՈՒՄ ԻՄԻՋ' }
        ]
      },
      standart: {
        title: 'STANDART Տարիֆ',
        price: '21 200 ֏',
        desc: <>Թվային PWA-այցեքարտ ոճային ձևանմուշով՝ հարմարեցված ձեր ոլորտին:<br/><br/>• Հավելվածի պատկերակ սմարթֆոնի էկրանին<br/>• Անհատական ենթադոմենը և հոսթինգն արդեն ներառված են<br/>• Կոնտակտի ակնթարթային պահպանում 1 սեղմումով և ոճային QR-կոդ<br/>• Աշխատում է առանց VPN-ի, առանց ծրագրերի տեղադրման և առանց ամսավճարի ընդմիշտ:<br/><br/>Ֆիզիկական NFC-կրիչի ընտրություն (պատվիրելիս)՝<br/>💳 + NFC-քարտ (պլաստիկ, մինիմալիզմ)՝ + 9 600 ֏<br/>🔑 + NFC-կախազարդ (ձեռագործ, Crazy Horse կաշի + դրոշմում)՝ + 30 400 ֏</>
      },
      vip: {
        title: 'PREMIUM Տարիֆ',
        price: 'սկսած 94 000 ֏',
        desc: <>100% եզակի դիզայնի և կոդի մշակում զրոյից՝ ձեր բրենդի և կարգավիճակի համար:<br/><br/>• Պատվերով 3D-էֆեկտներ, բարդ անիմացիաներ և հազվագյուտ ինտերակտիվ տարրեր<br/>• Անհատական կառուցվածք ձեր բիզնես նպատակների համար<br/>• PWA ձևաչափ, անհատական ենթադոմեն և հոսթինգ ընդմիշտ<br/><br/>🎁 ՆՎԵՐ՝ Հեղինակային ձեռագործ NFC-կախազարդ բնական Crazy Horse կաշվից՝ ձեր անվանատառերի դրոշմամբ, ներառված է արժեքի մեջ:</>
      },
      catalog: {
        title: 'Աշխատանքների օրինակներ',
        desc: 'Դիտեք այցեքարտերի պատրաստի դիզայնները և տեսեք, թե ինչպես է իրականում նայվում NFC-կախազարդը',
        items: [
          { name: 'Դիզայնների պատկերասրահ', desc: 'Դիտել պատրաստի այցեքարտերի օրինակներ', url: 'https://start.appsea.ru/' },
          { name: 'NFC-կախազարդն իրականում', desc: 'Ինչ տեսք ունի և ինչպես է աշխատում NFC-կախազարդը', url: '/promo.mp4' },
        ]
      },
      reviewsTitle: 'Արձագանքներ',
      reviews: [
        { name: 'Վիկտորյա', date: '20.03.2026', text: '"Մոռացել եմ կոնստրուկտորների մասին ինչպես վատ երազի: Շատ սահուն, ոճային, մթնոլորտը փոխանցվում է 100%-ով:"' },
        { name: 'Ալեքսեյ', date: '21.03.2026', text: '"Դիզայնը պարզապես տիեզերք է: Հաճախորդներն այժմ չեն ցանկանում լքել իմ մինի հավելվածը: Կոնվերսիան կրկնապատկվել է:"' },
        { name: 'Մարիա', date: '01.04.2026', text: '"Ելենան իր գործի վարպետն է: Ամեն ինչ մտածված է մինչև մանրուքները՝ վիզուալից մինչև անիմացիաներ:"' }
      ]
    },
    ui: {
      shareTitle: 'Կիսվել այցեքարտով',
      shareDesc: 'Թույլ տվեք սկանավորել QR-կոդը կամ անմիջապես ուղարկեք հղումը:',
      shareText: 'Ողջույն: Ահա իմ թվային այցեքարտը կոնտակտներով՝',
      copy: 'Պատճենել',
      copied: 'Պատճենված է!',
      send: 'Ուղարկել',
      installTitle: 'Տեղադրել հավելվածը',
      installDesc: 'Ավելացրեք այցեքարտը «Գլխավոր» էկրանին՝ մեկ սեղմումով բացելու համար առանց բրաուզերի:',
      installStep1_1: 'Սեղմեք ',
      installStep1_2: '«Կիսվել»',
      installStep1_3: ' կոճակը բրաուզերի ընտրացանկում (սովորաբար ներքևում):',
      installStep2_1: 'Ընտրեք ',
      installStep2_2: '«Ավելացնել Գլխավոր էկրանին»',
      installStep2_3: ' հայտնված ցանկում:',
      done: 'Պատրաստ է',
      saveContact: 'Պահպանված է թվային այցեքարտից'
    }
  },

  // 📊 АНАЛИТИКА (Общая для всех языков)
  analytics: {
    yandexMetricaId: '108395630', 
  }
};

// ==========================================
// 🎨 ДАННЫЕ ДЛЯ ГАЛЕРЕИ ШАБЛОНОВ (ВШИТО)
// ==========================================
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

// --- Глобальные стили для сложных анимаций (вставляем прямо в компонент) ---
const globalStyles = `
  html, body {
    background-color: #0a0a0a;
    overscroll-behavior: none;
    overflow: hidden;
    position: fixed;
    width: 100%;
    height: 100%;
  }
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .hide-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
    overscroll-behavior: contain;
  }
  @keyframes float {
    0% { transform: translateY(0px) rotateX(0deg) rotateY(0deg); }
    50% { transform: translateY(-15px) rotateX(2deg) rotateY(-2deg); }
    100% { transform: translateY(0px) rotateX(0deg) rotateY(0deg); }
  }
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
  .glass-panel {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
  .card-preserve-3d {
    transform-style: preserve-3d;
    -webkit-transform-style: preserve-3d;
  }
  .card-backface-hidden {
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    transform: translateZ(0);
    -webkit-transform: translateZ(0);
  }
  .bg-noise {
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
    opacity: 0.05;
    mix-blend-mode: overlay;
  }
  @keyframes scroll-left {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
  }
  .animate-scroll {
    animation: scroll-left 15s linear infinite;
  }
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
    position: absolute;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.9);
    box-shadow: 0 0 6px rgba(255, 255, 255, 0.8), 0 0 12px rgba(255, 255, 255, 0.4);
    pointer-events: none;
    animation: 
      spark-explode 0.8s cubic-bezier(0.1, 0.8, 0.3, 1) forwards,
      spark-wander var(--wt) linear 0.8s forwards;
  }
  
  /* === АНИМАЦИИ ДЛЯ ЭФФЕКТА СГОРАЮЩЕЙ БУМАГИ (ОПТИМИЗИРОВАНО ДЛЯ GPU) === */
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
      -webkit-mask-image: linear-gradient(225deg, transparent 47%, rgba(0,0,0,0.6) 49%, black 51%);
      mask-image: linear-gradient(225deg, transparent 47%, rgba(0,0,0,0.6) 49%, black 51%);
      -webkit-mask-size: 300% 300%;
      mask-size: 300% 300%;
      -webkit-mask-position: 100% 0%;
      mask-position: 100% 0%;
      animation: burn-mask-reveal 3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
      will-change: mask-position, -webkit-mask-position;
    }
    
    .burn-fire-edge {
      background: 
        linear-gradient(224deg, 
          transparent 48.5%, 
          rgba(20, 5, 0, 0.95) 49%, 
          var(--burn-c1, rgba(220, 38, 38, 0.9)) 49.5%, 
          var(--burn-c2, rgba(250, 150, 0, 1)) 50%, 
          var(--burn-c3, rgba(255, 220, 50, 0.8)) 50.2%,
          transparent 51%
        ),
        linear-gradient(226deg, 
          transparent 48.5%, 
          rgba(20, 5, 0, 0.95) 49%, 
          var(--burn-c1, rgba(220, 38, 38, 0.9)) 49.5%, 
          var(--burn-c2, rgba(250, 150, 0, 1)) 50%, 
          var(--burn-c3, rgba(255, 220, 50, 0.8)) 50.2%,
          transparent 51%
        );
      background-size: 300% 300%;
      background-position: 100% 0%;
      mix-blend-mode: normal;
      filter: drop-shadow(0 0 8px var(--burn-c2, rgba(250, 100, 0, 0.8))) blur(0.5px);
      animation: burn-fire-scan 3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
      will-change: background-position, opacity;
    }
  }

  @media (max-width: 639px) {
    @keyframes mobile-fade-in {
      0% { opacity: 0; }
      100% { opacity: 1; }
    }
    
    .smooth-mask-wipe {
      opacity: 0;
      animation: mobile-fade-in 1.5s ease-out forwards;
      will-change: opacity;
    }
    
    .burn-fire-edge {
      display: none;
    }
  }
  
  /* === АНИМАЦИИ ФОНА === */
  @keyframes esoteric-slow-drift-1 {
    0%   { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  @keyframes esoteric-slow-drift-2 {
    0%   { transform: rotate(360deg); }
    100% { transform: rotate(0deg); }
  }
  
  /* === АНИМАЦИИ ДЛЯ СВЕТОВОГО ШАРА (DOCK ПАНЕЛИ) === */
  @keyframes scan-vertical {
    0%, 10% { top: 5%; opacity: 0; }
    20% { opacity: 1; }
    80% { opacity: 1; }
    90%, 100% { top: 95%; opacity: 0; }
  }
  @keyframes scan-horizontal {
    0%, 10% { left: 5%; opacity: 0; }
    20% { opacity: 1; }
    80% { opacity: 1; }
    90%, 100% { left: 95%; opacity: 0; }
  }

  /* === ПРЕМИУМ-БЛИК ДЛЯ СТАРТОВОЙ КАРТОЧКИ === */
  @keyframes premium-sweep {
    0% { transform: translateX(-100%) skewX(-20deg); }
    50%, 100% { transform: translateX(150%) skewX(-20deg); }
  }

  /* === ПЛАВНОЕ ЗАТУХАНИЕ ДЛЯ СКРОЛЛА ОТЗЫВОВ === */
  .mask-image-bottom {
    -webkit-mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
    mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
  }

  /* === АНИМАЦИЯ ЭКВАЛАЙЗЕРА ДЛЯ АУДИО === */
  @keyframes equalize {
    0%, 100% { height: 4px; }
    50% { height: 16px; }
  }
  .audio-bar {
    width: 3px;
    background-color: #fb7185; /* text-rose-400 */
    border-radius: 2px;
    animation: equalize 1s infinite ease-in-out;
  }

  /* === ИНТЕРАКТИВНЫЙ ШЛЕЙФ ЗА КУРСОРОМ === */
  @keyframes trail-fade {
    0% { opacity: 0.8; transform: scale(1) translate(-50%, -50%); }
    100% { opacity: 0; transform: scale(0.1) translate(-50%, -50%); }
  }
  .trail-particle {
    position: fixed;
    pointer-events: none;
    background: rgba(225, 29, 72, 0.8);
    box-shadow: 0 0 10px rgba(225, 29, 72, 0.6), 0 0 20px rgba(159, 18, 57, 0.4);
    border-radius: 50%;
    width: 8px;
    height: 8px;
    animation: trail-fade 0.5s cubic-bezier(0.25, 1, 0.5, 1) forwards;
    z-index: 9999;
  }
`;

// ==========================================
// 🪄 КОМПОНЕНТ ЭФФЕКТА СГОРАНИЯ (УМНАЯ ЦВЕТОВАЯ ПОДСТРОЙКА)
// ==========================================
const BurnRevealImage = ({ src, className, style, imgClassName = "", burnColor = "wine", startBurn = true }) => {
  const themes = {
    default: { c1: 'rgba(220, 38, 38, 0.9)', c2: 'rgba(250, 150, 0, 1)', c3: 'rgba(255, 220, 50, 0.8)' },
    wine: { c1: 'rgba(88, 11, 37, 0.9)', c2: 'rgba(159, 18, 57, 1)', c3: 'rgba(225, 29, 72, 0.8)' }
  };
  
  const t = themes[burnColor] || themes.wine;

  return (
    <div className={`absolute inset-0 pointer-events-none rounded-[2.5rem] ${className}`} style={{ ...style, clipPath: 'inset(0 round 2.5rem)', WebkitClipPath: 'inset(0 round 2.5rem)' }}>
      {/* 1. Слой самого фото (плавное проявление) */}
      <div 
        className={`absolute inset-0 bg-cover bg-center rounded-[2.5rem] ${imgClassName} ${startBurn ? 'smooth-mask-wipe' : 'opacity-0'}`}
        style={{ backgroundImage: `url(${src})` }}
      />
      {/* 2. Эффект линии огня и тлеющего края с кастомными цветами */}
      {startBurn && (
        <div 
          className="absolute inset-0 burn-fire-edge rounded-[2.5rem]" 
          style={{
            '--burn-c1': t.c1,
            '--burn-c2': t.c2,
            '--burn-c3': t.c3,
          }}
        />
      )}
    </div>
  );
};

// ==========================================
// ШАБЛОНЫ ВИЗИТОК
// ==========================================

// 0. БОСС / СОЗДАТЕЛЬ (Елена Сотникова)
const CreatorCard = ({ lang, onOpenIframe, onOpenGallery }) => {
  const [view, setView] = useState('profile');
  const [isNameRevealed, setIsNameRevealed] = useState(true);
  const hackerName1 = CONTENT[lang].creator.name1;
  const hackerName2 = CONTENT[lang].creator.name2;

  const handlePromoClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    window.location.href = CONTENT[lang].leadMagnet.link;
  };

  return (
    <>
      {/* ЛИЦЕВАЯ СТОРОНА */}
      <div className="absolute inset-0 w-full h-full card-backface-hidden rounded-[2.5rem] shadow-[0_20px_50px_rgba(159,18,57,0.4)] overflow-hidden bg-[#0a0103] text-white flex flex-col p-[clamp(1rem,6cqw,1.5rem)] group-hover:shadow-[0_20px_80px_rgba(159,18,57,0.6)] transition-shadow duration-700">
        
        {/* === КРАСИВЫЙ ПРЕМИАЛЬНЫЙ ГРАДИЕНТ === */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#380e1b] via-[#0f0206] to-[#1f030e]"></div>
        <div className="absolute -inset-1/2 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-900/30 via-transparent to-transparent animate-pulse" style={{ animationDuration: '3s' }}></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-rose-500/25 via-transparent to-transparent mix-blend-normal sm:mix-blend-screen"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-rose-900/40 via-transparent to-transparent"></div>

        {/* ТЕМНЫЙ ПОЛУПРОЗРАЧНЫЙ ГРАДИЕНТ */}
        <div className="absolute inset-0 bg-gradient-to-t from-black from-0% via-black/80 via-[15%] to-transparent to-[30%] pointer-events-none z-0 rounded-[2.5rem]"></div>

        {/* СГОРАЮЩИЙ ФОН */}
        <BurnRevealImage src={CONTENT[lang].creator.bgImage} className="grayscale-[0.2]" burnColor="wine" startBurn={isNameRevealed} />

        <div className="relative z-10 flex flex-col h-full justify-between">
          <div className="flex justify-between items-start shrink-0">
            <div className="bg-[#151515]/95 sm:bg-black/40 sm:backdrop-blur-md px-[clamp(0.75rem,4cqw,1rem)] py-[clamp(0.375rem,2cqw,0.5rem)] rounded-full border border-rose-900/50 flex items-center gap-[clamp(0.375rem,2cqw,0.5rem)]">
              <Crown className="w-[clamp(0.75rem,4cqw,1rem)] h-[clamp(0.75rem,4cqw,1rem)] text-rose-400" />
              <span className="text-[clamp(0.6rem,3cqw,0.75rem)] font-serif tracking-widest uppercase text-rose-200/90">{CONTENT[lang].creator.badge}</span>
            </div>
            <Code2 className="w-[clamp(1.5rem,8cqw,2rem)] h-[clamp(1.5rem,8cqw,2rem)] text-rose-300/60 drop-shadow-[0_0_10px_rgba(159,18,57,0.5)]" />
          </div>

          <div className="text-center pb-[clamp(0.375rem,2cqw,0.5rem)] shrink-0">
            <h2 className={`text-[clamp(1.25rem,8cqw,2.25rem)] leading-tight font-serif mb-[clamp(0.375rem,2cqw,0.5rem)] uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-rose-100 via-white to-rose-200 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]`}>
              {hackerName1}
              <br />
              {hackerName2}
            </h2>
            <div className="flex flex-col items-center gap-[clamp(0.5rem,3cqw,0.75rem)] mt-[clamp(0.5rem,3cqw,0.75rem)]">
              <p className="font-serif text-[clamp(0.625rem,3cqw,0.75rem)] text-rose-100/70 italic tracking-wider max-w-[85%] mx-auto">
                "{CONTENT[lang].creator.quote1} {CONTENT[lang].creator.quote2}"
              </p>
              <div className="flex items-center gap-[clamp(0.25rem,1.5cqw,0.375rem)] bg-black/50 px-[clamp(0.5rem,3cqw,0.75rem)] py-[clamp(0.25rem,1.5cqw,0.375rem)] rounded-full border border-rose-900/50 mt-[clamp(0.125rem,1cqw,0.25rem)]">
                <span className="w-[clamp(0.25rem,1.5cqw,0.375rem)] h-[clamp(0.25rem,1.5cqw,0.375rem)] rounded-full bg-rose-500 animate-pulse shadow-[0_0_8px_rgba(225,29,72,0.8)]"></span>
                <span className="text-[clamp(0.5rem,2cqw,0.5625rem)] font-bold uppercase tracking-widest text-rose-200">{CONTENT[lang].creator.status}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ОБРАТНАЯ СТОРОНА (GlassOS / Vertical Left Dock) */}
      <div className="absolute inset-0 w-full h-full card-backface-hidden rounded-[2.5rem] shadow-[0_20px_50px_rgba(159,18,57,0.4)] overflow-hidden bg-[#0a0205] flex flex-row p-[clamp(0.75rem,4cqw,1rem)] gap-[clamp(0.75rem,4cqw,1rem)] text-white border border-rose-900/40" style={{ transform: 'rotateY(180deg) translateZ(0)' }}>
        
        {/* ФОН */}
        <div className="absolute -top-[20%] -left-[20%] w-[160%] aspect-square rounded-full border border-rose-500/10 border-dashed pointer-events-none" style={{ animation: 'esoteric-slow-drift-1 90s linear infinite', transformOrigin: '45% 55%' }}></div>
        <div className="absolute -bottom-[30%] -right-[30%] w-[140%] aspect-square rounded-full border-[1.5px] border-rose-900/20 pointer-events-none" style={{ animation: 'esoteric-slow-drift-2 100s linear infinite', transformOrigin: '55% 45%' }}></div>
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] aspect-square rounded-full bg-rose-900/20 blur-[50px] pointer-events-none"></div>

        {/* === ЛЕВАЯ ПАНЕЛЬ (DOCK) === */}
        <div 
          className="relative z-50 flex flex-col items-center justify-between bg-[#0a0205] sm:bg-[#0a0205]/80 sm:backdrop-blur-xl py-[clamp(0.75rem,4cqw,1rem)] px-[clamp(0.375rem,2cqw,0.5rem)] rounded-[2rem] border border-rose-900/50 shadow-[0_10px_40px_rgba(159,18,57,0.3)] w-[clamp(2.5rem,12cqw,3.5rem)] shrink-0 no-tilt cursor-default"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Световой шар */}
          <div className="absolute left-1/2 -translate-x-1/2 w-[clamp(1.25rem,6cqw,1.5rem)] h-[clamp(1.25rem,6cqw,1.5rem)] bg-rose-500/30 rounded-full blur-[6px] shadow-[0_0_15px_rgba(225,29,72,0.5)] pointer-events-none z-0" style={{ animation: 'scan-vertical 4s ease-in-out infinite' }}></div>

          <div className="flex flex-col gap-[clamp(0.5rem,2.5cqw,0.625rem)] w-full items-center relative z-10 shrink-0">
            {[
              { id: 'profile', icon: UserCircle2 },
              { id: 'standart', icon: Diamond },
              { id: 'vip', icon: Crown },
              { id: 'catalog', icon: Smartphone, highlight: true },
            ].map((item) => (
              <button 
                key={item.id}
                onClick={() => setView(item.id)}
                className={`relative p-[clamp(0.5rem,2.5cqw,0.625rem)] rounded-full transition-all duration-300 flex items-center justify-center w-full ${item.highlight ? 'mt-[clamp(0.375rem,2cqw,0.5rem)] border border-rose-500/50 bg-rose-900/20 shadow-[0_0_10px_rgba(225,29,72,0.3)] animate-pulse' : ''} ${view === item.id ? 'bg-gradient-to-br from-rose-700 to-rose-400 text-white shadow-[0_0_15px_rgba(225,29,72,0.5)] scale-110' : 'text-rose-400/60 hover:text-rose-200 hover:bg-rose-900/40'}`}
              >
                <item.icon className="w-[clamp(0.75rem,4cqw,1rem)] h-[clamp(0.75rem,4cqw,1rem)]" />
              </button>
            ))}
          </div>
          
          <div className="w-full flex flex-col items-center gap-[clamp(0.375rem,2cqw,0.5rem)] relative z-10 mt-[clamp(0.125rem,1cqw,0.25rem)] shrink-0">
            <div className="w-[clamp(1rem,5cqw,1.25rem)] h-[1px] bg-rose-900/60"></div>
            <button 
              onClick={() => setView('reviews')}
              className={`p-[clamp(0.5rem,2.5cqw,0.625rem)] w-full rounded-full transition-all duration-300 flex items-center justify-center ${view === 'reviews' ? 'bg-rose-600 text-white shadow-[0_0_15px_rgba(225,29,72,0.6)] scale-110' : 'text-rose-400/60 hover:text-rose-200 hover:bg-rose-900/40'}`}
            >
              <Star className="w-[clamp(0.75rem,4cqw,1rem)] h-[clamp(0.75rem,4cqw,1rem)]" />
            </button>
          </div>
        </div>

        {/* === ПРАВАЯ ЧАСТЬ (КОНТЕНТ) === */}
        <div className="relative z-10 flex-1 flex flex-col h-full overflow-hidden">
          <div className="relative flex-1 w-full overflow-hidden">

            {/* 1. ФИЛОСОФИЯ */}
            <div className={`absolute inset-0 flex flex-col pt-[clamp(0.125rem,1cqw,0.25rem)] transition-all duration-500 ease-in-out ${view === 'profile' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'}`}>
              <div className="w-[clamp(2rem,8cqw,2.5rem)] h-[clamp(2rem,8cqw,2.5rem)] rounded-full bg-rose-900/30 border border-rose-500/30 flex items-center justify-center mb-[clamp(0.5rem,3cqw,0.75rem)] shrink-0 shadow-[0_0_15px_rgba(159,18,57,0.2)]">
                <UserCircle2 className="w-[clamp(1rem,4cqw,1.25rem)] h-[clamp(1rem,4cqw,1.25rem)] text-rose-300" />
              </div>
              <h3 className="text-[clamp(1rem,6cqw,1.25rem)] font-serif font-light text-rose-100 tracking-wider mb-[clamp(0.375rem,2cqw,0.5rem)] shrink-0">{CONTENT[lang].views.profile.title}</h3>
              
              <div className="flex-1 overflow-y-auto hide-scrollbar mask-image-bottom pb-[clamp(1.5rem,8cqw,2.5rem)] pr-[clamp(0.125rem,1cqw,0.25rem)] no-tilt touch-pan-y overscroll-contain flex flex-col gap-[clamp(0.5rem,3cqw,0.75rem)]">
                <p className="font-serif text-[clamp(0.6rem,3cqw,0.6875rem)] text-rose-100/80 leading-relaxed bg-[#151515]/95 sm:bg-black/40 sm:backdrop-blur-sm p-[clamp(0.75rem,4cqw,0.875rem)] rounded-2xl border border-rose-900/50 shadow-inner shrink-0 block">
                  {CONTENT[lang].views.profile.desc}
                </p>

                <div className="grid grid-cols-2 gap-[clamp(0.375rem,2cqw,0.5rem)] shrink-0">
                  {CONTENT[lang].views.profile.features.map((feature, idx) => {
                    const IconComp = { Crown, CreditCard, Globe, Key, Sparkles, Diamond }[feature.icon];
                    return (
                      <div key={idx} className="bg-[#151515]/95 sm:bg-black/40 sm:backdrop-blur-sm p-[clamp(0.625rem,3cqw,0.75rem)] rounded-2xl border border-rose-900/50 shadow-inner flex flex-col items-center justify-center text-center gap-[clamp(0.375rem,2cqw,0.5rem)]">
                        <IconComp className="w-[clamp(1.25rem,6cqw,1.5rem)] h-[clamp(1.25rem,6cqw,1.5rem)] text-rose-400" />
                        <div>
                          <div className="text-rose-200 text-[clamp(0.55rem,2.5cqw,0.6875rem)] font-bold mb-[clamp(0.125rem,1cqw,0.25rem)] leading-tight">{feature.title}</div>
                          <div className="text-rose-100/50 text-[clamp(0.4rem,2cqw,0.5rem)] uppercase tracking-wider leading-tight">{feature.desc}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* 2. ТАРИФ STANDART */}
            <div className={`absolute inset-0 flex flex-col pt-[clamp(0.125rem,1cqw,0.25rem)] transition-all duration-500 ease-in-out ${view === 'standart' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'}`}>
              <div className="flex items-center justify-between mb-[clamp(0.5rem,3cqw,0.75rem)] shrink-0">
                <div className="w-[clamp(2rem,8cqw,2.5rem)] h-[clamp(2rem,8cqw,2.5rem)] rounded-full bg-rose-900/30 border border-rose-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(159,18,57,0.2)]">
                  <Diamond className="w-[clamp(1rem,4cqw,1.25rem)] h-[clamp(1rem,4cqw,1.25rem)] text-rose-300" />
                </div>
                <div className="bg-rose-500/20 border border-rose-400/30 px-[clamp(0.5rem,3cqw,0.625rem)] py-[clamp(0.2rem,1.5cqw,0.25rem)] rounded-full flex items-center justify-center whitespace-nowrap shadow-[0_0_15px_rgba(225,29,72,0.2)]">
                  <span className="text-[clamp(0.55rem,2.5cqw,0.625rem)] font-bold uppercase tracking-widest text-rose-200">{lang === 'ru' ? 'Цена:' : lang === 'en' ? 'Price:' : 'Գինը:'} {CONTENT[lang].views.standart.price}</span>
                </div>
              </div>
              <h3 className="text-[clamp(1rem,6cqw,1.25rem)] font-serif font-light text-rose-100 tracking-wider mb-[clamp(0.375rem,2cqw,0.5rem)] shrink-0">{CONTENT[lang].views.standart.title}</h3>
              
              <div className="flex-1 overflow-y-auto hide-scrollbar mask-image-bottom pb-[clamp(1.5rem,8cqw,2.5rem)] pr-[clamp(0.125rem,1cqw,0.25rem)] no-tilt touch-pan-y overscroll-contain">
                <p className="font-serif text-[clamp(0.6rem,3cqw,0.6875rem)] text-rose-100/80 leading-relaxed bg-[#151515]/95 sm:bg-black/40 sm:backdrop-blur-sm p-[clamp(0.75rem,4cqw,0.875rem)] rounded-2xl border border-rose-900/50 shadow-inner block shrink-0">
                  {CONTENT[lang].views.standart.desc}
                </p>
              </div>
            </div>

            {/* 3. ТАРИФ VIP */}
            <div className={`absolute inset-0 flex flex-col pt-[clamp(0.125rem,1cqw,0.25rem)] transition-all duration-500 ease-in-out ${view === 'vip' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'}`}>
              <div className="flex items-center justify-between mb-[clamp(0.5rem,3cqw,0.75rem)] shrink-0">
                <div className="w-[clamp(2rem,8cqw,2.5rem)] h-[clamp(2rem,8cqw,2.5rem)] rounded-full bg-rose-900/30 border border-rose-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(159,18,57,0.2)]">
                  <Crown className="w-[clamp(1rem,4cqw,1.25rem)] h-[clamp(1rem,4cqw,1.25rem)] text-rose-300" />
                </div>
                <div className="bg-rose-500/20 border border-rose-400/30 px-[clamp(0.5rem,3cqw,0.625rem)] py-[clamp(0.2rem,1.5cqw,0.25rem)] rounded-full flex items-center justify-center whitespace-nowrap shadow-[0_0_15px_rgba(225,29,72,0.2)]">
                  <span className="text-[clamp(0.55rem,2.5cqw,0.625rem)] font-bold uppercase tracking-widest text-rose-200">{lang === 'ru' ? 'Цена:' : lang === 'en' ? 'Price:' : 'Գինը:'} {CONTENT[lang].views.vip.price}</span>
                </div>
              </div>
              <h3 className="text-[clamp(1rem,6cqw,1.25rem)] font-serif font-light text-rose-100 tracking-wider mb-[clamp(0.375rem,2cqw,0.5rem)] shrink-0">{CONTENT[lang].views.vip.title}</h3>
              
              <div className="flex-1 overflow-y-auto hide-scrollbar mask-image-bottom pb-[clamp(1.5rem,8cqw,2.5rem)] pr-[clamp(0.125rem,1cqw,0.25rem)] no-tilt touch-pan-y overscroll-contain">
                <p className="font-serif text-[clamp(0.6rem,3cqw,0.6875rem)] text-rose-100/80 leading-relaxed bg-[#151515]/95 sm:bg-black/40 sm:backdrop-blur-sm p-[clamp(0.75rem,4cqw,0.875rem)] rounded-2xl border border-rose-900/50 shadow-inner block shrink-0">
                  {CONTENT[lang].views.vip.desc}
                </p>
              </div>
            </div>

            {/* 4. КАТАЛОГ СТИЛЕЙ & NFC */}
            <div className={`absolute inset-0 flex flex-col pt-[clamp(0.125rem,1cqw,0.25rem)] transition-all duration-500 ease-in-out ${view === 'catalog' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'}`}>
              <div className="w-[clamp(2rem,8cqw,2.5rem)] h-[clamp(2rem,8cqw,2.5rem)] rounded-full bg-rose-900/30 border border-rose-500/30 flex items-center justify-center mb-[clamp(0.5rem,3cqw,0.75rem)] shrink-0 shadow-[0_0_15px_rgba(159,18,57,0.2)]">
                <Smartphone className="w-[clamp(1rem,4cqw,1.25rem)] h-[clamp(1rem,4cqw,1.25rem)] text-rose-300" />
              </div>
              <h3 className="text-[clamp(1rem,6cqw,1.25rem)] font-serif font-light text-rose-100 tracking-wider mb-[clamp(0.375rem,2cqw,0.5rem)] shrink-0">{CONTENT[lang].views.catalog.title}</h3>
              <p className="font-serif text-[clamp(0.6rem,3cqw,0.6875rem)] text-rose-100/70 mb-[clamp(0.5rem,3cqw,0.75rem)] shrink-0 px-[clamp(0.125rem,1cqw,0.25rem)]">{CONTENT[lang].views.catalog.desc}</p>
              
              <div className="flex-1 overflow-y-auto hide-scrollbar mask-image-bottom pb-[clamp(1.5rem,8cqw,2.5rem)] pr-[clamp(0.125rem,1cqw,0.25rem)] flex flex-col gap-[clamp(0.5rem,3cqw,0.75rem)] no-tilt touch-pan-y overscroll-contain">
                {CONTENT[lang].views.catalog.items.map((item, idx) => (
                  <div 
                    key={idx}
                    onClick={(e) => { 
                      e.stopPropagation(); 
                      if (item.url === 'https://start.appsea.ru/') {
                        onOpenGallery();
                      } else {
                        onOpenIframe(item.url); 
                      }
                    }}
                    className="bg-[#151515]/95 sm:bg-black/40 sm:backdrop-blur-sm p-[clamp(0.625rem,3cqw,0.75rem)] rounded-2xl border border-rose-900/50 shadow-inner flex justify-between items-center cursor-pointer hover:bg-rose-900/20 hover:border-rose-500/50 transition-all group shrink-0"
                  >
                    <div>
                      <div className="text-rose-200 text-[clamp(0.6rem,3cqw,0.75rem)] font-bold mb-[clamp(0.125rem,1cqw,0.25rem)]">{item.name}</div>
                      <div className="text-rose-100/60 text-[clamp(0.5rem,2.5cqw,0.625rem)]">{item.desc}</div>
                    </div>
                    <div className="w-[clamp(1.5rem,6cqw,2rem)] h-[clamp(1.5rem,6cqw,2rem)] rounded-full bg-rose-900/40 border border-rose-500/30 flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_10px_rgba(159,18,57,0.2)] shrink-0 ml-[clamp(0.25rem,2cqw,0.5rem)]">
                      <Play className="w-[clamp(0.6rem,3cqw,0.75rem)] h-[clamp(0.6rem,3cqw,0.75rem)] text-rose-300 ml-[clamp(0.0625rem,0.5cqw,0.125rem)]" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 7. ОТЗЫВЫ */}
            <div className={`absolute inset-0 flex flex-col pt-[clamp(0.125rem,1cqw,0.25rem)] transition-all duration-500 ease-in-out ${view === 'reviews' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'}`}>
              <div className="flex items-center gap-[clamp(0.5rem,3cqw,0.75rem)] mb-[clamp(0.5rem,3cqw,0.75rem)] shrink-0">
                <div className="w-[clamp(1.5rem,6cqw,2rem)] h-[clamp(1.5rem,6cqw,2rem)] rounded-full bg-rose-900/30 border border-rose-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(159,18,57,0.2)]">
                  <Star className="w-[clamp(0.75rem,4cqw,1rem)] h-[clamp(0.75rem,4cqw,1rem)] text-rose-300" />
                </div>
                <h3 className="text-[clamp(0.875rem,5cqw,1.125rem)] font-serif font-light text-rose-100 tracking-wider">{CONTENT[lang].views.reviewsTitle}</h3>
              </div>
              
              <div className="flex-1 overflow-y-auto hide-scrollbar flex flex-col gap-[clamp(0.5rem,2.5cqw,0.625rem)] pb-[clamp(1.5rem,8cqw,2.5rem)] pr-[clamp(0.125rem,1cqw,0.25rem)] mask-image-bottom no-tilt touch-pan-y overscroll-contain">
                
                {/* Отзывы */}
                {CONTENT[lang].views.reviews.map((rev, idx) => (
                  <div key={idx} className="bg-[#151515]/95 sm:bg-black/40 sm:backdrop-blur-sm p-[clamp(0.625rem,3cqw,0.75rem)] rounded-2xl border border-rose-900/50 shadow-inner relative shrink-0 block">
                    <div className="flex justify-between items-center mb-[clamp(0.25rem,1.5cqw,0.375rem)] px-[clamp(0.125rem,1cqw,0.25rem)]">
                      <div className="flex items-center gap-[clamp(0.25rem,2cqw,0.5rem)]">
                        <span className="text-[clamp(0.55rem,2.5cqw,0.625rem)] text-rose-200/90 font-medium">{rev.name}</span>
                        {rev.date && <span className="text-[clamp(0.45rem,2cqw,0.5rem)] text-rose-500/60">{rev.date}</span>}
                      </div>
                      <div className="flex gap-[clamp(0.0625rem,0.5cqw,0.125rem)] shrink-0">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-[clamp(0.5rem,2.5cqw,0.625rem)] h-[clamp(0.5rem,2.5cqw,0.625rem)] fill-rose-400 text-rose-400" />
                        ))}
                      </div>
                    </div>
                    <p className="font-serif text-[clamp(0.6rem,3cqw,0.6875rem)] text-rose-100/80 leading-relaxed italic px-[clamp(0.125rem,1cqw,0.25rem)]">
                      {rev.text}
                    </p>
                  </div>
                ))}

              </div>
            </div>

          </div>

          {/* Кнопка записи (Главная кнопка) */}
          <div 
            className="mt-[clamp(0.5rem,3cqw,0.75rem)] w-full no-tilt cursor-default relative z-20 flex flex-col gap-[clamp(0.375rem,2cqw,0.5rem)] shrink-0"
            onClick={(e) => e.stopPropagation()}
          >
            <a href={CONTENT[lang].creator.actionLink} className="w-full bg-gradient-to-r from-[#380e1b] to-black sm:backdrop-blur-md text-rose-100 font-serif text-[clamp(0.6rem,3cqw,0.6875rem)] uppercase tracking-[0.15em] py-[clamp(0.75rem,4cqw,1rem)] rounded-2xl flex items-center justify-center gap-[clamp(0.375rem,2cqw,0.5rem)] hover:from-[#4a1223] transition-all shadow-[0_0_25px_rgba(159,18,57,0.3)] border border-rose-800/50 group active:scale-95 shrink-0">
              <Crown className="w-[clamp(0.75rem,4cqw,1rem)] h-[clamp(0.75rem,4cqw,1rem)] text-rose-400 group-hover:scale-110 transition-transform shrink-0" />
              {CONTENT[lang].creator.actionText} →
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

// ==========================================
// 🌌 МОДАЛЬНОЕ ОКНО ГАЛЕРЕИ ДИЗАЙНОВ
// ==========================================
const DesignGalleryModal = ({ onClose, lang, setLang }) => {
  const [previewInfo, setPreviewInfo] = useState(null);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const t = GALLERY_TRANSLATIONS[lang];

  return (
    <div className="fixed inset-0 z-[150] flex flex-col bg-[#050102]/95 backdrop-blur-3xl animate-in fade-in duration-300 touch-none">
      {/* Neon glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-rose-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-rose-900/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Header */}
      <div className="relative flex items-center justify-between px-4 max-[380px]:px-3 border-b border-rose-900/50 bg-[#0a0205]/80 shrink-0 z-20 shadow-lg h-[50px] max-[380px]:h-[44px]">
        {/* Crown */}
        <div className="flex items-center w-1/4">
           <div className="w-7 h-7 max-[380px]:w-6 max-[380px]:h-6 rounded-full bg-rose-900/30 border border-rose-500/30 flex items-center justify-center shadow-[0_0_10px_rgba(159,18,57,0.2)] shrink-0">
              <Crown className="w-3.5 h-3.5 max-[380px]:w-3 max-[380px]:h-3 text-rose-400" />
           </div>
        </div>

        {/* Language Switcher */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center bg-[#15050a]/90 backdrop-blur-xl border border-rose-900/50 p-0.5 rounded-full shadow-[0_5px_15px_rgba(0,0,0,0.6),0_0_15px_rgba(159,18,57,0.15)] z-[60]">
           {['ru', 'hy', 'en'].map((l) => (
             <button
               key={l}
               onClick={() => setLang(l)}
               className={`px-3 py-1 max-[380px]:px-2.5 max-[380px]:py-0.5 rounded-full text-[10px] max-[380px]:text-[9px] font-bold tracking-widest uppercase transition-all duration-300 flex items-center justify-center ${
                 lang === l
                   ? 'bg-gradient-to-r from-rose-800 to-rose-600 text-white shadow-[inset_0_0_10px_rgba(225,29,72,0.4)]'
                   : 'text-rose-400/60 hover:text-rose-200 hover:bg-white/5'
               }`}
             >
               {l === 'hy' ? 'AM' : l.toUpperCase()}
             </button>
           ))}
        </div>

        {/* Close Button */}
        <div className="w-1/4 flex justify-end">
           <button
             onClick={onClose}
             className="text-white/40 hover:text-white bg-white/5 hover:bg-white/10 rounded-full p-2 max-[380px]:p-1.5 transition-colors border border-white/5 active:scale-95"
           >
             <X className="w-4 h-4 max-[380px]:w-3.5 max-[380px]:h-3.5" />
           </button>
        </div>
      </div>

      {/* Grid */}
      <div className="flex-1 overflow-y-auto hide-scrollbar relative pb-12 pt-6 max-[380px]:pt-4 touch-pan-y overscroll-contain">
        <div className="max-w-xl mx-auto w-full px-5 max-[380px]:px-4 relative z-10 flex flex-col">
           <div className="grid grid-cols-2 gap-4 max-[380px]:gap-3 w-full">
               {t.templates.map(link => (
                  <div key={link.id} className="relative group w-full aspect-square">
                     <div className="absolute -inset-0.5 bg-gradient-to-br from-white/10 to-rose-500/20 rounded-[2rem] max-[380px]:rounded-[1.5rem] blur-[10px] opacity-30 group-hover:opacity-100 group-hover:blur-[14px] transition-all duration-500"></div>
                     <button
                       onClick={() => { setIframeLoaded(false); setPreviewInfo(link); }}
                       className="relative w-full h-full overflow-hidden flex flex-col items-center justify-center p-4 max-[380px]:p-3 rounded-[2rem] max-[380px]:rounded-[1.5rem] bg-[#0a0205]/95 backdrop-blur-md border border-rose-900/50 hover:border-rose-500/50 hover:bg-[#15050a] transition-all duration-300 active:scale-[0.98] shadow-inner"
                     >
                       <div className="absolute inset-0 bg-gradient-to-br from-rose-900/0 via-rose-900/0 to-rose-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                       <div className="w-14 h-14 max-[380px]:w-12 max-[380px]:h-12 rounded-full bg-rose-900/20 border border-rose-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(159,18,57,0.2)] mb-3 max-[380px]:mb-2 shrink-0">
                          <link.icon className="w-6 h-6 max-[380px]:w-5 max-[380px]:h-5 text-rose-400 group-hover:scale-110 transition-transform duration-300" />
                       </div>
                       <span className="text-[13px] max-[380px]:text-[11px] font-bold text-rose-100 tracking-wider text-center leading-tight">
                         {link.name}
                       </span>
                     </button>
                  </div>
               ))}
           </div>
           
           {/* Фраза внизу */}
           <div className="mt-8 max-[380px]:mt-6 text-center border-t border-rose-900/30 pt-6 max-[380px]:pt-4 mb-4 max-[380px]:mb-2 shrink-0">
             <p className="text-[11px] max-[380px]:text-[10px] text-rose-100/50 font-light tracking-wide">
               {t.notFound1}<br/>
               <span className="text-rose-400/80 font-medium mt-1.5 inline-block">{t.notFound2}</span>
             </p>
           </div>
        </div>
      </div>

      {/* Iframe Modal Inside Gallery */}
      {previewInfo && (
        <div className="fixed inset-0 z-[200] flex flex-col bg-[#050102] animate-in fade-in zoom-in-[0.98] duration-300">
           <div className="relative flex items-center justify-between px-4 max-[380px]:px-3 border-b border-rose-900/50 bg-[#0a0205] shrink-0 shadow-lg h-[50px] max-[380px]:h-[44px]">
              <button
                onClick={() => setPreviewInfo(null)}
                className="flex items-center gap-1.5 px-3 py-1.5 max-[380px]:px-2 max-[380px]:py-1 rounded-full bg-rose-900/30 border border-rose-500/30 text-rose-300 hover:bg-rose-900/50 hover:text-rose-100 transition-all active:scale-95 shadow-[0_0_10px_rgba(159,18,57,0.2)]"
              >
                <ChevronLeft className="w-4 h-4 max-[380px]:w-3.5 max-[380px]:h-3.5" />
                <span className="text-[10px] max-[380px]:text-[9px] font-bold tracking-widest uppercase">{t.back}</span>
              </button>
              <a
                href={`${previewInfo.url}?ref=catalog`}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-1.5 max-[380px]:px-3 max-[380px]:py-1 rounded-full bg-rose-600 border border-rose-400 text-white hover:bg-rose-500 transition-all active:scale-95 shadow-[0_0_15px_rgba(225,29,72,0.4)]"
              >
                <span className="text-[10px] max-[380px]:text-[9px] font-bold tracking-widest uppercase">{t.openFull}</span>
                <ExternalLink className="w-3.5 h-3.5 max-[380px]:w-3 max-[380px]:h-3 text-white" />
              </a>
              <div className="w-[74px] max-[380px]:w-[60px]"></div>
           </div>
           <div className="flex-1 relative w-full h-full bg-[#050102]">
              {!iframeLoaded && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-[#050102] z-10">
                   <div className="w-8 h-8 max-[380px]:w-6 max-[380px]:h-6 border-2 border-rose-900/50 border-t-rose-500 rounded-full animate-spin"></div>
                   <span className="text-[10px] max-[380px]:text-[8px] uppercase tracking-widest text-rose-500/50 animate-pulse">Loading...</span>
                </div>
              )}
              <iframe
                src={previewInfo.url}
                className={`w-full h-full border-none transition-opacity duration-700 bg-white ${iframeLoaded ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => setIframeLoaded(true)}
                title={previewInfo.name}
              />
           </div>
        </div>
      )}
    </div>
  );
};

// ==========================================
// ОСНОВНОЙ КОМПОНЕНТ ПРИЛОЖЕНИЯ
// ==========================================

const App = () => {
  const [lang, setLang] = useState('ru');
  const [isFlipped, setIsFlipped] = useState(false);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const [sparks, setSparks] = useState([]);
  const [bgOffset, setBgOffset] = useState({ x: 0, y: 0 });
  const [showShare, setShowShare] = useState(false);
  const [showPwaPrompt, setShowPwaPrompt] = useState(false);
  const [showIframeModal, setShowIframeModal] = useState(false);
  const [showGallery, setShowGallery] = useState(false); // NEW STATE FOR GALLERY
  const [iframeUrl, setIframeUrl] = useState('');
  const [copied, setCopied] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [trail, setTrail] = useState([]);
  const cardRef = useRef(null);
  const audioCtxRef = useRef(null);
  const audioRef = useRef(null);
  const isFlippingRef = useRef(false);

  // Инициализация Яндекс.Метрики
  useEffect(() => {
    const ymId = CONTENT.analytics.yandexMetricaId;
    if (!ymId) return;

    (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
    m[i].l=1*new Date();
    for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
    k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

    window.ym(ymId, "init", {
         clickmap:true,
         trackLinks:true,
         accurateTrackBounce:true,
         webvisor:true
    });
  }, []);

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

  // Глобальный параллакс фона
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

    return () => {
      window.removeEventListener('mousemove', handleGlobalMove);
      window.removeEventListener('touchmove', handleGlobalMove);
    };
  }, []);

  // Динамическая генерация PWA manifest.json
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const manifest = {
        name: `${CONTENT[lang].creator.name1} ${CONTENT[lang].creator.name2} | ${CONTENT[lang].creator.role}`,
        short_name: "Елена Сотникова",
        start_url: window.location.pathname,
      display: "standalone",
      background_color: "#0a0a0a",
      theme_color: "#9f1239",
      icons: [{
        src: CONTENT[lang].creator.avatar || "/avatar-creator.jpg",
        sizes: "192x192",
        type: "image/png"
      }]
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
    if (isFlippingRef.current || !cardRef.current) return;
    
    if (isFlipped) {
      setRotate({ x: 0, y: 0 });
      setGlare(prev => ({ ...prev, opacity: 0 }));
      return;
    }
    
    if (e.target.closest('.no-tilt')) {
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
    if (isFlippingRef.current) return;
    setRotate({ x: 0, y: 0 });
    setGlare(prev => ({ ...prev, opacity: 0 }));
  };

  const playFlipSound = () => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioContext();
      }
      
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

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
    } catch (e) {
      // Игнорируем ошибки автоплея
    }
  };

  const handleFlip = () => {
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
          tx: Math.cos(angle) * distance + 'px',
          ty: Math.sin(angle) * distance + 'px',
          wx1: (Math.random() - 0.5) * 100 + 'px',
          wy1: (Math.random() - 0.5) * 100 + 'px',
          wx2: (Math.random() - 0.5) * 200 + 'px',
          wy2: (Math.random() - 0.5) * 200 + 'px',
          wx3: (Math.random() - 0.5) * 300 + 'px',
          wy3: (Math.random() - 0.5) * 300 + 'px',
          wt: (20 + Math.random() * 20) + 's',
          size: Math.random() * 2.5 + 1.5 + 'px',
        };
      });
      setSparks(newSparks);
    } else {
      setSparks([]);
    }

    if (typeof navigator !== 'undefined' && navigator.vibrate) {
      navigator.vibrate([30, 30, 40]); 
    }
    setIsFlipped(!isFlipped);
  };

  const getGlowColor = () => 'rgba(159,18,57,0.6)';
  const getModalTheme = () => ({ bg: 'rgba(159,18,57,0.15)', border: 'rgba(159,18,57,0.3)', icon: 'text-rose-400' });

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: CONTENT[lang].ui.shareTitle,
          text: CONTENT[lang].ui.shareText,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Шаринг отменен');
      }
    } else {
      handleCopy();
    }
  };

  const getBase64Image = async (imgUrl) => {
    try {
      const response = await fetch(imgUrl);
      const blob = await response.blob();
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result.split(',')[1]); 
        reader.readAsDataURL(blob);
      });
    } catch (e) {
      console.error("Ошибка загрузки фото для vCard", e);
      return null;
    }
  };

  const handleDownloadVCard = async () => {
    let photoBase64 = null;
    let photoStr = "";
    const photoUrl = '/bg-creator.jpg';
    
    try {
      photoBase64 = await getBase64Image(photoUrl);
      if (photoBase64) {
        const foldedBase64 = photoBase64.match(/.{1,75}/g).join('\r\n ');
        photoStr = `PHOTO;TYPE=JPEG;ENCODING=b:\r\n ${foldedBase64}`;
      }
    } catch (e) {
      console.error("Ошибка загрузки фото для vCard", e);
    }

    const vcard = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      `FN:${CONTENT[lang].creator.name1} ${CONTENT[lang].creator.name2}`,
      `N:${CONTENT[lang].creator.name2};${CONTENT[lang].creator.name1};;;`,
      `ORG:${CONTENT[lang].contact.company}`,
      `TITLE:${CONTENT[lang].contact.title}`,
      `TEL;TYPE=CELL:${CONTENT[lang].contact.phone}`,
      `TEL;TYPE=WHATSAPP:${CONTENT[lang].contact.whatsapp}`,
      `URL;TYPE=Telegram:https://t.me/${CONTENT[lang].contact.telegram}`,
      `URL:${CONTENT[lang].contact.website}`,
      photoStr,
      `NOTE:${CONTENT[lang].ui.saveContact}`,
      "END:VCARD"
    ].filter(Boolean).join("\r\n"); 

    const fileName = `${CONTENT[lang].creator.name1}_${CONTENT[lang].creator.name2}.vcf`;
    
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
    
    if (!isAndroid) {
      link.setAttribute('download', fileName);
    }
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    setTimeout(() => window.URL.revokeObjectURL(url), 500);
  };

  return (
    <div className="fixed inset-0 w-full h-full bg-neutral-950 flex flex-col font-sans select-none transition-all duration-500 overflow-hidden justify-center items-center px-4 pt-[max(1rem,env(safe-area-inset-top))] pb-[calc(env(safe-area-inset-bottom,1rem)+4rem)]">
      <style>{globalStyles}</style>

      {/* Интерактивный шлейф */}
      {trail.map(p => (
        <div key={p.id} className="trail-particle" style={{ left: p.x, top: p.y }} />
      ))}

      {/* Фоновое свечение */}
      <div 
        className="fixed top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] hidden sm:block pointer-events-none transition-transform duration-1000 ease-out"
        style={{ transform: `translate(${bgOffset.x}px, ${bgOffset.y}px)` }}
      ></div>
      <div 
        className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-rose-500/10 rounded-full blur-[120px] hidden sm:block pointer-events-none transition-transform duration-1000 ease-out"
        style={{ transform: `translate(${bgOffset.x * 1.5}px, ${bgOffset.y * 1.5}px)` }}
      ></div>

      {/* КОНТЕЙНЕР ВИЗИТКИ */}
      <div className="flex-1 w-full flex items-center justify-center min-h-0 relative z-40">
        <div 
          ref={cardRef}
          className="relative z-10 w-full aspect-[10/16] sm:aspect-[10/15] cursor-pointer group animate-float touch-none mx-auto @container"
          style={{ perspective: '1500px', maxWidth: 'min(26rem, 94vw, 52dvh)' }}
          onClick={handleFlip}
          onMouseMove={handlePointerMove}
          onMouseLeave={handlePointerLeave}
          onTouchMove={handlePointerMove}
          onTouchEnd={handlePointerLeave}
        >
          {/* Искры */}
          {sparks.map(spark => (
            <div
              key={spark.id}
              className="spark-particle"
              style={{
                '--tx': spark.tx,
                '--ty': spark.ty,
                '--wx1': spark.wx1,
                '--wy1': spark.wy1,
                '--wx2': spark.wx2,
                '--wy2': spark.wy2,
                '--wx3': spark.wx3,
                '--wy3': spark.wy3,
                '--wt': spark.wt,
                width: spark.size,
                height: spark.size,
                left: '50%',
                top: '50%',
                marginTop: '-' + (parseFloat(spark.size) / 2) + 'px',
                marginLeft: '-' + (parseFloat(spark.size) / 2) + 'px'
              }}
            />
          ))}

          {/* 3D наклон */}
          <div
            className="w-full h-full card-preserve-3d transition-transform duration-100 ease-out z-10 relative"
            style={{ transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)` }}
          >
            <div 
              className="relative w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.4,0.2,0.2,1)] card-preserve-3d"
              style={{ transform: isFlipped ? 'rotateY(180deg) translateZ(0)' : 'rotateY(0deg) translateZ(0)' }}
            >
              <div 
                className="absolute inset-0 rounded-[2.5rem] pointer-events-none sm:hidden card-backface-hidden" 
                style={{ boxShadow: `0 0 60px ${getGlowColor()}` }} 
              />
              <div 
                className="absolute inset-0 rounded-[2.5rem] pointer-events-none sm:hidden card-backface-hidden" 
                style={{ transform: 'rotateY(180deg)', boxShadow: `0 0 60px ${getGlowColor()}` }} 
              />

              <CreatorCard 
                lang={lang} 
                onOpenIframe={(url) => { setIframeUrl(url); setShowIframeModal(true); }} 
                onOpenGallery={() => setShowGallery(true)} 
              />

              {/* Блики */}
              <div 
                className="absolute inset-0 w-full h-full rounded-[2.5rem] pointer-events-none transition-opacity duration-300 card-backface-hidden"
                style={{
                  background: `
                    radial-gradient(farthest-corner circle at ${glare.x}% ${glare.y}%, rgba(255, 255, 255, 0.8) 10%, rgba(255, 255, 255, 0) 60%),
                    linear-gradient(${glare.x + glare.y}deg, rgba(255,255,255,0) 30%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 70%)
                  `,
                  boxShadow: `
                    inset ${rotate.y}px ${-rotate.x}px 20px rgba(255, 255, 255, 0.4),
                    inset ${-rotate.y * 1.5}px ${rotate.x * 1.5}px 40px rgba(255, 255, 255, 0.15)
                  `,
                  mixBlendMode: 'overlay',
                  opacity: glare.opacity ? Math.max(0.4, glare.opacity) : 0,
                  zIndex: 50,
                }}
              />

              <div 
                className="absolute inset-0 w-full h-full rounded-[2.5rem] pointer-events-none transition-opacity duration-300 card-backface-hidden"
                style={{
                  transform: 'rotateY(180deg) translateZ(0)',
                  background: `
                    radial-gradient(farthest-corner circle at ${100 - glare.x}% ${glare.y}%, rgba(255, 255, 255, 0.8) 10%, rgba(255, 255, 255, 0) 60%),
                    linear-gradient(${100 - glare.x + glare.y}deg, rgba(255,255,255,0) 30%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 70%)
                  `,
                  boxShadow: `
                    inset ${-rotate.y}px ${-rotate.x}px 20px rgba(255, 255, 255, 0.4),
                    inset ${rotate.y * 1.5}px ${rotate.x * 1.5}px 40px rgba(255, 255, 255, 0.15)
                  `,
                  opacity: glare.opacity ? Math.max(0.4, glare.opacity) : 0,
                  mixBlendMode: 'overlay',
                  zIndex: 50,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* === ПАНЕЛЬ С КНОПКАМИ === */}
      <div className="fixed bottom-[max(1.5rem,env(safe-area-inset-bottom))] left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 sm:gap-6 w-max max-w-[95vw]">

        <audio
          ref={audioRef}
          src={CONTENT[lang].creator.audioGreeting}
          preload="auto"
          playsInline
          onPlay={() => setIsAudioPlaying(true)}
          onPause={() => setIsAudioPlaying(false)}
          onEnded={() => setIsAudioPlaying(false)}
          style={{ display: 'none' }}
        />

        {/* КНОПКА ГОЛОСОВОГО ПРИВЕТСТВИЯ */}
        <button
          type="button"
          onClick={toggleGreetingAudio}
          className={`shrink-0 active:scale-90 rounded-full sm:backdrop-blur-md border transition-all duration-300 group touch-manipulation flex items-center justify-center w-10 h-10 ${isAudioPlaying ? 'bg-[#151515]/95 sm:bg-rose-900/40 border-rose-500/50 shadow-[0_0_20px_rgba(225,29,72,0.3)]' : 'bg-[#151515]/95 sm:bg-white/5 border-white/10 text-white/40 hover:text-white/90 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]'}`}
          aria-label="Голосовое приветствие"
        >
          {isAudioPlaying ? (
            <div className="flex items-end justify-center gap-[3px] w-full h-4">
              <div className="audio-bar" style={{ animationDelay: '0.0s' }}></div>
              <div className="audio-bar" style={{ animationDelay: '0.3s', height: '12px' }}></div>
              <div className="audio-bar" style={{ animationDelay: '0.6s', height: '16px' }}></div>
              <div className="audio-bar" style={{ animationDelay: '0.2s', height: '10px' }}></div>
            </div>
          ) : (
            <Play className="w-4 h-4 group-hover:scale-110 transition-transform ml-0.5" />
          )}
        </button>

        {/* ПЕРЕКЛЮЧАТЕЛЬ ЯЗЫКОВ */}
        <div className="shrink-0 relative flex items-center p-1 h-10 rounded-full bg-[#151515]/95 sm:bg-white/5 sm:backdrop-blur-md border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.3)]">
          <div 
            className="absolute top-1 bottom-1 w-[calc(33.333%-2.66px)] rounded-full bg-gradient-to-r from-rose-800 to-rose-600 border border-rose-400/50 shadow-[0_0_15px_rgba(225,29,72,0.5)] transition-all duration-300 ease-out"
            style={{
              left: lang === 'ru' ? '4px' : lang === 'hy' ? 'calc(33.333% + 1.33px)' : 'calc(66.666% - 1.33px)'
            }}
          />
          {[
            { code: 'ru', label: 'RU' },
            { code: 'hy', label: 'HY' },
            { code: 'en', label: 'EN' }
          ].map((item) => (
            <button
              key={item.code}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                if (typeof navigator !== 'undefined' && navigator.vibrate) navigator.vibrate(15);
                setLang(item.code);
              }}
              aria-label={`Язык ${item.label}`}
              className={`relative z-10 px-2.5 h-full flex items-center justify-center text-[11px] font-bold tracking-wider transition-colors duration-200 touch-manipulation min-w-[32px] text-center ${
                lang === item.code ? 'text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]' : 'text-white/40 hover:text-white/80'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* КНОПКА ПОДЕЛИТЬСЯ */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            if (typeof navigator !== 'undefined' && navigator.vibrate) navigator.vibrate(15);
            setShowShare(true);
          }}
          className="shrink-0 active:scale-90 rounded-full bg-[#151515]/95 sm:bg-white/5 sm:backdrop-blur-md border border-white/10 text-white/40 hover:text-white/90 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300 group touch-manipulation flex items-center justify-center w-10 h-10"
          aria-label="Поделиться"
        >
          <QrCode className="w-4 h-4 group-hover:scale-110 transition-transform" />
        </button>

        {/* КНОПКА СОХРАНИТЬ КОНТАКТ */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            if (typeof navigator !== 'undefined' && navigator.vibrate) navigator.vibrate(15);
            handleDownloadVCard();
          }}
          className="shrink-0 active:scale-90 rounded-full bg-[#151515]/95 sm:bg-white/5 sm:backdrop-blur-md border border-white/10 text-white/40 hover:text-white/90 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300 group touch-manipulation flex items-center justify-center w-10 h-10"
          aria-label="Сохранить контакт"
          title="Сохранить в контакты"
        >
          <UserPlus className="w-4 h-4 group-hover:scale-110 transition-transform" />
        </button>

      </div>

      {/* МОДАЛЬНОЕ ОКНО ПОДЕЛИТЬСЯ */}
      {showShare && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#151515]/95 sm:bg-black/40 sm:backdrop-blur-sm transition-opacity animate-in fade-in duration-200" 
          onClick={() => setShowShare(false)}
        >
          <div 
            className="sm:backdrop-blur-3xl rounded-[2.5rem] p-6 sm:p-8 w-full max-w-sm flex flex-col items-center relative shadow-2xl animate-in zoom-in-95 duration-200 border" 
            style={{ backgroundColor: getModalTheme().bg, borderColor: getModalTheme().border }}
            onClick={e => e.stopPropagation()}
          >
            <button 
              onClick={() => setShowShare(false)} 
              className="absolute top-5 right-5 text-white/40 hover:text-white bg-black/20 hover:bg-black/40 rounded-full p-2 transition-colors border border-white/5"
            >
              <X className="w-5 h-5" />
            </button>
            
            <button 
              onClick={() => {
                setShowShare(false);
                setShowPwaPrompt(true);
              }}
              className={`w-12 h-12 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center mb-4 border transition-colors group cursor-pointer active:scale-95 ${getModalTheme().icon.replace('text', 'border').replace('400', '500/30')}`}
              title="Установить как приложение"
            >
              <QrCode className={`w-6 h-6 group-hover:scale-110 transition-transform ${getModalTheme().icon}`} />
            </button>
            
            <h3 className="text-xl font-bold text-white mb-2 tracking-wide">{CONTENT[lang].ui.shareTitle}</h3>
            <p className="text-sm text-white/60 text-center mb-6 leading-relaxed">{CONTENT[lang].ui.shareDesc}</p>
            
            <div className="bg-white p-4 rounded-3xl mb-6 shadow-[0_0_40px_rgba(255,255,255,0.15)] flex items-center justify-center">
              <QRCodeComponent 
                value={typeof window !== 'undefined' ? window.location.href : 'https://appsea.ru/'}
                size={180}
              />
            </div>

            <div className="flex gap-3 w-full">
              <button 
                onClick={handleCopy}
                className="flex-1 bg-black/20 hover:bg-black/40 border border-white/10 text-white font-medium py-3.5 px-4 rounded-2xl flex items-center justify-center gap-2 transition-colors text-sm"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                {copied ? CONTENT[lang].ui.copied : CONTENT[lang].ui.copy}
              </button>
              <button 
                onClick={handleShare}
                className="flex-1 bg-white/10 hover:bg-white/20 border border-white/10 text-white font-bold py-3.5 px-4 rounded-2xl flex items-center justify-center gap-2 transition-colors text-sm"
              >
                <Share2 className="w-4 h-4" />
                {CONTENT[lang].ui.send}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* МОДАЛЬНОЕ ОКНО PWA */}
      {showPwaPrompt && (
        <div 
          className="fixed inset-0 z-[110] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-[#151515]/95 sm:bg-black/60 sm:backdrop-blur-sm transition-opacity animate-in fade-in duration-300"
          onClick={() => setShowPwaPrompt(false)}
        >
          <div 
            className="w-full max-w-sm bg-[#0a0205] sm:rounded-3xl rounded-t-3xl p-6 pb-10 sm:pb-6 flex flex-col items-center relative animate-in slide-in-from-bottom-full sm:zoom-in-95 duration-300 border-t sm:border border-rose-900/30 shadow-[0_-10px_40px_rgba(159,18,57,0.2)]"
            onClick={e => e.stopPropagation()}
          >
            <div className="w-12 h-1.5 bg-white/20 rounded-full mb-6 sm:hidden"></div>
            
            <button 
              onClick={() => setShowPwaPrompt(false)} 
              className="absolute top-5 right-5 text-white/40 hover:text-white bg-black/20 hover:bg-black/40 rounded-full p-2 transition-colors border border-white/5 hidden sm:block"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-16 h-16 bg-gradient-to-br from-rose-900 to-black p-0.5 rounded-2xl shadow-[0_0_20px_rgba(159,18,57,0.4)] mb-5">
               <div className="w-full h-full bg-[#151515]/95 sm:bg-black/80 sm:backdrop-blur-md rounded-[14px] flex items-center justify-center border border-rose-500/20">
                 <Crown className="w-8 h-8 text-rose-400" />
               </div>
            </div>

            <h3 className="text-xl font-bold text-white mb-2 text-center tracking-wide">{CONTENT[lang].ui.installTitle}</h3>
            <p className="text-sm text-white/60 text-center mb-8 leading-relaxed">
              {CONTENT[lang].ui.installDesc}
            </p>

            <div className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col gap-5 mb-8 shadow-inner">
               <div className="flex items-center gap-4">
                 <div className="w-8 h-8 rounded-full bg-rose-900/40 border border-rose-500/30 flex items-center justify-center shrink-0">
                   <Share2 className="w-4 h-4 text-rose-300" />
                 </div>
                 <p className="text-sm text-white/80 leading-snug">
                   {CONTENT[lang].ui.installStep1_1}<b>{CONTENT[lang].ui.installStep1_2}</b><br/>{CONTENT[lang].ui.installStep1_3}
                 </p>
               </div>
               <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
               <div className="flex items-center gap-4">
                 <div className="w-8 h-8 rounded-full bg-rose-900/40 border border-rose-500/30 flex items-center justify-center shrink-0">
                   <PlusSquare className="w-4 h-4 text-rose-300" />
                 </div>
                 <p className="text-sm text-white/80 leading-snug">
                   {CONTENT[lang].ui.installStep2_1}<b className="text-white">{CONTENT[lang].ui.installStep2_2}</b><br/>{CONTENT[lang].ui.installStep2_3}
                 </p>
               </div>
            </div>

            <button 
              onClick={() => setShowPwaPrompt(false)}
              className="w-full bg-gradient-to-r from-[#380e1b] to-black hover:from-[#4a1223] border border-rose-800/50 text-rose-100 font-bold py-4 px-4 rounded-2xl transition-colors shadow-[0_0_20px_rgba(159,18,57,0.3)] active:scale-95"
            >
              {CONTENT[lang].ui.done}
            </button>
          </div>
        </div>
      )}

      {/* НОВАЯ: МОДАЛКА ГАЛЕРЕИ ДИЗАЙНОВ (SUPERAPP КАТАЛОГ) */}
      {showGallery && (
        <DesignGalleryModal 
          onClose={() => setShowGallery(false)} 
          lang={lang} 
          setLang={setLang} 
        />
      )}

    </div>
  );
};

export default App;