import React, { useState, useEffect, useRef } from 'react';
import { 
  Globe, Star, UserCircle2, Diamond, Crown,
  QrCode, Share2, Copy, X, Check,
  Rocket, Code2, Play, PlusSquare, UserPlus, Gift
} from 'lucide-react';

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
      websiteLink: 'https://nice-app.ru',
      actionText: 'ЗАКАЗАТЬ СВОЙ DIGITAL-МИР',
      actionLink: 'https://t.me/elenlime',
    },
    leadMagnet: {
      title: 'SECRET OFFER',
      description: 'Скидка 15% на разработку любого тарифа: NANO, PRO или ULTRA. Нажмите кнопку, чтобы перейти в Telegram и забрать скидку.',
      buttonText: 'ЗАБРАТЬ ПРОМОКОД',
      promoCode: 'ELEN-TECH-15%',
      link: 'https://t.me/elenlime?text=Елена, привет! У меня есть промокод ELEN-TECH-15%. Хочу обсудить создание цифровой визитки.',
    },
    contact: {
      phone: '+79995051277',
      email: 'limetut@gmail.com',
      company: 'Premium Web',
      title: 'Digital Creator & Developer'
    },
    views: {
      profile: {
        title: 'Моя философия',
        desc: 'Я создаю не просто сайты, а премиальные digital-миры. Ваша цифровая визитка — это статус, который продает ваши услуги еще до того, как вы заговорите. Уникальные анимации, PWA-приложения и 100% WOW-эффект.'
      },
      nano: {
        title: 'Nano визитка',
        desc: 'Элегантный старт для вашего бренда. Идеально выверенная база, стильные анимации, адаптивность и мгновенная загрузка. Один платеж — и она ваша навсегда.'
      },
      pro: {
        title: 'Архитектура Pro',
        desc: 'Premium-шаблон из моей базы с полной адаптацией под вас. Мини-апп в TG/VK + веб-версия (PWA). Поддомен в подарок и запуск «под ключ» всего за 3-5 дней.'
      },
      ultra: {
        title: 'Эксклюзив Ultra',
        desc: 'Уникальный цифровой код вашего бизнеса. Разработка индивидуальной структуры, сложнейшие 3D-сцены, эффекты стекла и частиц. Решение для тех, кто не терпит компромиссов.'
      },
      tech: {
        title: 'Под капотом',
        desc: 'Каждая визитка — это шедевр кода. Работает без VPN, устанавливается на экран телефона как приложение, не требует абонентской платы. Легко делиться через QR или ссылку.'
      },
      reviewsTitle: 'Отзывы',
      reviews: [
        { name: 'Виктория', date: '21.03.2026', text: '"Забыла про конструкторы как про страшный сон. Очень плавно, стильно, вайб передается на 100%"' },
        { name: 'Алексей', date: '20.03.2026', text: '"Дизайн просто космос. Клиенты теперь не хотят уходить из моей мини-апп. Конверсия выросла вдвое!"' },
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
      audioGreeting: '/greeting.mp3', // 🔊 Ссылка на ваш аудиофайл
      badge: 'DESIGN & CODE',
      name1: 'ELENA',
      name2: 'SOTNIKOVA',
      role: 'Premium Web',
      status: 'Digital Creator',
      quote1: 'Not just a business card,',
      quote2: 'but your main digital asset...',
      websiteText: 'Learn more...',
      websiteLink: 'https://nice-app.ru',
      actionText: 'ORDER YOUR DIGITAL WORLD',
      actionLink: 'https://t.me/elenlime',
    },
    leadMagnet: {
      title: 'SECRET OFFER',
      description: '15% discount on any tariff: NANO, PRO, or ULTRA. Click the button to go to Telegram and claim your discount.',
      buttonText: 'CLAIM PROMO CODE',
      promoCode: 'ELEN-TECH-15%',
      link: 'https://t.me/elenlime?text=Hi Elena! I have the promo code ELEN-TECH-15%. I want to discuss creating a digital business card.',
    },
    contact: {
      phone: '+79995051277',
      email: 'limetut@gmail.com',
      company: 'Premium Web',
      title: 'Digital Creator & Developer'
    },
    views: {
      profile: {
        title: 'My Philosophy',
        desc: 'I create not just websites, but premium digital worlds. Your digital business card is a status that sells your services before you even speak. Unique animations, PWA apps, and a 100% WOW effect.'
      },
      nano: {
        title: 'Nano Card',
        desc: 'An elegant start for your brand. A perfectly balanced base, stylish animations, responsive design, and instant loading. One payment — and it\'s yours forever.'
      },
      pro: {
        title: 'Architecture Pro',
        desc: 'A premium template from my base fully adapted for you. TG/VK mini-app + web version (PWA). A free subdomain and a turnkey launch in just 3-5 days.'
      },
      ultra: {
        title: 'Exclusive Ultra',
        desc: 'The unique digital code of your business. Custom structure development, complex 3D scenes, glass and particle effects. A solution for those who accept no compromises.'
      },
      tech: {
        title: 'Under the Hood',
        desc: 'Every business card is a masterpiece of code. Works without VPN, installs on your phone screen as an app, requires no subscription fee. Easy to share via QR or link.'
      },
      reviewsTitle: 'Reviews',
      reviews: [
        { name: 'Victoria', date: '21.03.2026', text: '"Forgot about website builders like a bad dream. Very smooth, stylish, the vibe is conveyed 100%"' },
        { name: 'Alexey', date: '20.03.2026', text: '"The design is just cosmic. Clients now don\'t want to leave my mini-app. Conversions have doubled!"' },
        { name: 'Maria', date: '01.04.2026', text: '"Elena is a master of her craft. Everything is thought out to the smallest detail: from visuals to animations."' }
      ]
    },
    ui: {
      shareTitle: 'Share Contact',
      shareDesc: 'Let them scan the QR code or send the link directly.',
      shareText: 'Hi! Here is my digital business card:',
      copy: 'Copy',
      copied: 'Copied!',
      send: 'Send',
      installTitle: 'Install App',
      installDesc: 'Add the business card to your Home Screen for one-click access without a browser.',
      installStep1_1: 'Tap the ',
      installStep1_2: 'Share',
      installStep1_3: ' button in your browser menu (usually at the bottom).',
      installStep2_1: 'Select ',
      installStep2_2: '"Add to Home Screen"',
      installStep2_3: ' from the list.',
      done: 'Done',
      saveContact: 'Saved from digital business card'
    }
  },

  // 📊 АНАЛИТИКА (Общая для всех языков)
  analytics: {
    yandexMetricaId: '108395630', 
  }
};

// --- Глобальные стили для сложных анимаций (вставляем прямо в компонент) ---
const globalStyles = `
  :root {
    --card-h: calc(min(22rem, 50vh) * 1.6);
  }
  @media (min-width: 640px) {
    :root {
      --card-h: calc(min(22rem, 50vh) * 1.5);
    }
  }
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
const HACKER_CHARS = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";

const BurnRevealImage = ({ src, className, style, imgClassName = "", burnColor = "wine", startBurn = true }) => {
  // Цветовые темы огня (c1 - пепел/край, c2 - основной огонь, c3 - яркая вспышка)
  const themes = {
    default: { c1: 'rgba(220, 38, 38, 0.9)', c2: 'rgba(250, 150, 0, 1)', c3: 'rgba(255, 220, 50, 0.8)' },
    wine: { c1: 'rgba(88, 11, 37, 0.9)', c2: 'rgba(159, 18, 57, 1)', c3: 'rgba(225, 29, 72, 0.8)' } // Босс (Елена)
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
// ШАБЛОНЫ ВИЗИТОК (4 направления)
// ==========================================

// 0. БОСС / СОЗДАТЕЛЬ (Елена Сотникова)
const CreatorCard = ({ lang }) => {
  const [view, setView] = useState('profile');
  const [isNameRevealed, setIsNameRevealed] = useState(false);
  const [hackerName1, setHackerName1] = useState(() => CONTENT[lang].creator.name1.replace(/./g, () => HACKER_CHARS[Math.floor(Math.random() * HACKER_CHARS.length)]));
  const [hackerName2, setHackerName2] = useState(() => CONTENT[lang].creator.name2.replace(/./g, () => HACKER_CHARS[Math.floor(Math.random() * HACKER_CHARS.length)]));

  useEffect(() => {
    let iteration = 0;
    const target1 = CONTENT[lang].creator.name1;
    const target2 = CONTENT[lang].creator.name2;
    const maxLen = Math.max(target1.length, target2.length);

    setIsNameRevealed(false);

    // Рассчитываем шаги так, чтобы эффект длился ровно 1 секунду (1000 мс)
    const intervalMs = 40;
    const totalSteps = 1000 / intervalMs; 
    const step = maxLen / totalSteps;

    const interval = setInterval(() => {
      setHackerName1(target1.split("").map((letter, index) => {
        if (index < iteration) return target1[index];
        return HACKER_CHARS[Math.floor(Math.random() * HACKER_CHARS.length)];
      }).join(""));

      setHackerName2(target2.split("").map((letter, index) => {
        if (index < iteration) return target2[index];
        return HACKER_CHARS[Math.floor(Math.random() * HACKER_CHARS.length)];
      }).join(""));

      if (iteration >= maxLen) {
        clearInterval(interval);
        setIsNameRevealed(true);
      }
      iteration += step; // Идеально выверенная скорость для 1 секунды
    }, intervalMs);

    return () => clearInterval(interval);
  }, [lang]);

  const handlePromoClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Сразу перекидываем в Telegram с готовым текстом
    window.location.href = CONTENT[lang].leadMagnet.link;
  };

  return (
    <>
      {/* ЛИЦЕВАЯ СТОРОНА */}
      <div className="absolute inset-0 w-full h-full card-backface-hidden rounded-[2.5rem] shadow-[0_20px_50px_rgba(159,18,57,0.4)] overflow-hidden bg-[#0a0103] text-white flex flex-col p-6 group-hover:shadow-[0_20px_80px_rgba(159,18,57,0.6)] transition-shadow duration-700">
        
        {/* === КРАСИВЫЙ ПРЕМИАЛЬНЫЙ ГРАДИЕНТ (Виден 1 секунду до проявления фото) === */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#380e1b] via-[#0f0206] to-[#1f030e]"></div>
        <div className="absolute -inset-1/2 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-900/30 via-transparent to-transparent animate-pulse" style={{ animationDuration: '3s' }}></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-rose-500/25 via-transparent to-transparent mix-blend-screen"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-rose-900/40 via-transparent to-transparent"></div>

        {/* ТЕМНЫЙ ПОЛУПРОЗРАЧНЫЙ ГРАДИЕНТ (Лежит под фото, как ты и просила) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black from-0% via-black/80 via-[15%] to-transparent to-[30%] pointer-events-none z-0 rounded-[2.5rem]"></div>

        {/* ЗАМЕНА СТАТИЧНОГО ФОНА НА СГОРАЮЩИЙ (Винный огонь) ПОВЕРХ ВСЕХ СЛОЕВ */}
        <BurnRevealImage src={CONTENT[lang].creator.bgImage} className="grayscale-[0.2]" burnColor="wine" startBurn={isNameRevealed} />

        <div className="relative z-10 flex flex-col h-full justify-between">
          <div className="flex justify-between items-start">
            <div className="bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-rose-900/50 flex items-center gap-2">
              <Crown className="w-4 h-4 text-rose-400" />
              <span className="text-xs font-serif tracking-widest uppercase text-rose-200/90">{CONTENT[lang].creator.badge}</span>
            </div>
            <Code2 className="w-8 h-8 text-rose-300/60 drop-shadow-[0_0_10px_rgba(159,18,57,0.5)]" />
          </div>

          <div className="text-center pb-2">
            <h2 className="text-3xl sm:text-4xl leading-tight font-serif font-light mb-2 uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-rose-100 via-white to-rose-200 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              {hackerName1}
              <br />
              {hackerName2}
            </h2>
            <div className="flex flex-col items-center gap-3 mt-3">
              <p className="font-serif text-[11px] text-rose-100/70 italic tracking-wider max-w-[80%] mx-auto">
                "{CONTENT[lang].creator.quote1} {CONTENT[lang].creator.quote2}"
              </p>
              <div className="flex items-center gap-1.5 bg-black/50 px-3 py-1.5 rounded-full border border-rose-900/50 mt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse shadow-[0_0_8px_rgba(225,29,72,0.8)]"></span>
                <span className="text-[9px] font-bold uppercase tracking-widest text-rose-200">{CONTENT[lang].creator.status}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ОБРАТНАЯ СТОРОНА (GlassOS / Vertical Left Dock) */}
      <div className="absolute inset-0 w-full h-full card-backface-hidden rounded-[2.5rem] shadow-[0_20px_50px_rgba(159,18,57,0.4)] overflow-hidden bg-[#0a0205] flex flex-row p-4 gap-4 text-white border border-rose-900/40" style={{ transform: 'rotateY(180deg)' }}>
        
        {/* ФОН (Медленные орбиты и Аура) */}
        <div className="absolute -top-[20%] -left-[20%] w-[160%] aspect-square rounded-full border border-rose-500/10 border-dashed pointer-events-none" style={{ animation: 'esoteric-slow-drift-1 90s linear infinite', transformOrigin: '45% 55%' }}></div>
        <div className="absolute -bottom-[30%] -right-[30%] w-[140%] aspect-square rounded-full border-[1.5px] border-rose-900/20 pointer-events-none" style={{ animation: 'esoteric-slow-drift-2 100s linear infinite', transformOrigin: '55% 45%' }}></div>
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] aspect-square rounded-full bg-rose-900/20 blur-[50px] pointer-events-none"></div>

        {/* === ЛЕВАЯ ПАНЕЛЬ (DOCK) === */}
        <div 
          className="relative z-50 flex flex-col items-center justify-between bg-[#0a0205]/80 backdrop-blur-xl py-4 px-2 rounded-[2rem] border border-rose-900/50 shadow-[0_10px_40px_rgba(159,18,57,0.3)] w-[3.5rem] shrink-0 no-tilt cursor-default"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Световой шар */}
          <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-rose-500/30 rounded-full blur-[6px] shadow-[0_0_15px_rgba(225,29,72,0.5)] pointer-events-none z-0" style={{ animation: 'scan-vertical 4s ease-in-out infinite' }}></div>

          <div className="flex flex-col gap-2.5 w-full items-center relative z-10">
            {[
              { id: 'profile', icon: UserCircle2 },
              { id: 'nano', icon: Diamond },
              { id: 'pro', icon: Rocket },
              { id: 'ultra', icon: Crown },
              { id: 'tech', icon: Code2 },
              { id: 'lead', icon: Gift },
            ].map((item) => (
              <button 
                key={item.id}
                onClick={() => setView(item.id)}
                className={`relative p-2.5 rounded-full transition-all duration-300 flex items-center justify-center w-full ${view === item.id ? 'bg-gradient-to-br from-rose-700 to-rose-400 text-white shadow-[0_0_15px_rgba(225,29,72,0.5)] scale-110' : 'text-rose-400/60 hover:text-rose-200 hover:bg-rose-900/40'}`}
              >
                <item.icon className="w-4 h-4" />
              </button>
            ))}
          </div>
          
          <div className="w-full flex flex-col items-center gap-2 relative z-10 mt-1">
            <div className="w-5 h-[1px] bg-rose-900/60"></div>
            <button 
              onClick={() => setView('reviews')}
              className={`p-2.5 w-full rounded-full transition-all duration-300 flex items-center justify-center ${view === 'reviews' ? 'bg-rose-600 text-white shadow-[0_0_15px_rgba(225,29,72,0.6)] scale-110' : 'text-rose-400/60 hover:text-rose-200 hover:bg-rose-900/40'}`}
            >
              <Star className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* === ПРАВАЯ ЧАСТЬ (КОНТЕНТ) === */}
        <div className="relative z-10 flex-1 flex flex-col h-full overflow-hidden">
          <div className="relative flex-1 w-full overflow-hidden">

            {/* 1. ФИЛОСОФИЯ */}
            <div className={`absolute inset-0 flex flex-col justify-center transition-all duration-500 ease-in-out ${view === 'profile' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'}`}>
              <div className="w-10 h-10 rounded-full bg-rose-900/30 border border-rose-500/30 flex items-center justify-center mb-3 shadow-[0_0_15px_rgba(159,18,57,0.2)]">
                <UserCircle2 className="w-5 h-5 text-rose-300" />
              </div>
              <h3 className="text-xl font-serif font-light text-rose-100 tracking-wider mb-2">{CONTENT[lang].views.profile.title}</h3>
              <p className="font-serif text-[11px] text-rose-100/80 leading-relaxed bg-black/40 backdrop-blur-sm p-3.5 rounded-2xl border border-rose-900/50 shadow-inner">
                {CONTENT[lang].views.profile.desc}
              </p>
              <a href={CONTENT[lang].creator.websiteLink} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="no-tilt mt-3 bg-gradient-to-r from-rose-950 to-black border border-rose-800/50 hover:border-rose-600/50 text-rose-200 text-[10px] uppercase tracking-[0.2em] py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-[0_0_15px_rgba(0,0,0,0.5)] w-fit mx-auto group">
                 <Globe className="w-3.5 h-3.5 text-rose-400 group-hover:animate-pulse" />
                 {CONTENT[lang].creator.websiteText}
              </a>
            </div>

            {/* 2. ТАРИФ NANO */}
            <div className={`absolute inset-0 flex flex-col justify-center transition-all duration-500 ease-in-out ${view === 'nano' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'}`}>
              <div className="w-10 h-10 rounded-full bg-rose-900/30 border border-rose-500/30 flex items-center justify-center mb-3 shadow-[0_0_15px_rgba(159,18,57,0.2)]">
                <Diamond className="w-5 h-5 text-rose-300" />
              </div>
              <div className="flex items-end gap-2 mb-2">
                <h3 className="text-xl font-serif font-light text-rose-100 tracking-wider">{CONTENT[lang].views.nano.title}</h3>
              </div>
              <p className="font-serif text-[11px] text-rose-100/80 leading-relaxed bg-black/40 backdrop-blur-sm p-3.5 rounded-2xl border border-rose-900/50 shadow-inner">
                {CONTENT[lang].views.nano.desc}
              </p>
            </div>

            {/* 3. ТАРИФ PRO */}
            <div className={`absolute inset-0 flex flex-col justify-center transition-all duration-500 ease-in-out ${view === 'pro' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'}`}>
              <div className="w-10 h-10 rounded-full bg-rose-900/30 border border-rose-500/30 flex items-center justify-center mb-3 shadow-[0_0_15px_rgba(159,18,57,0.2)]">
                <Rocket className="w-5 h-5 text-rose-300" />
              </div>
              <div className="flex flex-col mb-2">
                <h3 className="text-xl font-serif font-light text-rose-100 tracking-wider">{CONTENT[lang].views.pro.title}</h3>
              </div>
              <p className="font-serif text-[11px] text-rose-100/80 leading-relaxed bg-black/40 backdrop-blur-sm p-3.5 rounded-2xl border border-rose-900/50 shadow-inner">
                {CONTENT[lang].views.pro.desc}
              </p>
            </div>

            {/* 4. ТАРИФ ULTRA */}
            <div className={`absolute inset-0 flex flex-col justify-center transition-all duration-500 ease-in-out ${view === 'ultra' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'}`}>
              <div className="w-10 h-10 rounded-full bg-rose-900/30 border border-rose-500/30 flex items-center justify-center mb-3 shadow-[0_0_15px_rgba(159,18,57,0.2)]">
                <Crown className="w-5 h-5 text-rose-300" />
              </div>
              <div className="flex flex-col mb-2">
                <h3 className="text-[1.15rem] whitespace-nowrap font-serif font-light text-rose-100 tracking-wider">{CONTENT[lang].views.ultra.title}</h3>
              </div>
              <p className="font-serif text-[11px] text-rose-100/80 leading-relaxed bg-black/40 backdrop-blur-sm p-3.5 rounded-2xl border border-rose-900/50 shadow-inner">
                {CONTENT[lang].views.ultra.desc}
              </p>
            </div>

            {/* 5. ТЕХНОЛОГИИ */}
            <div className={`absolute inset-0 flex flex-col justify-center transition-all duration-500 ease-in-out ${view === 'tech' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'}`}>
              <div className="w-10 h-10 rounded-full bg-rose-900/30 border border-rose-500/30 flex items-center justify-center mb-3 shadow-[0_0_15px_rgba(159,18,57,0.2)]">
                <Code2 className="w-5 h-5 text-rose-300" />
              </div>
              <h3 className="text-xl font-serif font-light text-rose-100 tracking-wider mb-2">{CONTENT[lang].views.tech.title}</h3>
              <p className="font-serif text-[11px] text-rose-100/80 leading-relaxed bg-black/40 backdrop-blur-sm p-3.5 rounded-2xl border border-rose-900/50 shadow-inner">
                {CONTENT[lang].views.tech.desc}
              </p>
            </div>

            {/* 6. ЛИД-МАГНИТ (SECRET OFFER) */}
            <div className={`absolute inset-0 flex flex-col justify-center transition-all duration-500 ease-in-out ${view === 'lead' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'}`}>
              <div className="w-10 h-10 rounded-full bg-rose-900/30 border border-rose-500/30 flex items-center justify-center mb-3 shadow-[0_0_15px_rgba(159,18,57,0.2)]">
                <Gift className="w-5 h-5 text-rose-300 animate-bounce" />
              </div>
              <h3 className="text-xl font-serif font-light text-rose-100 tracking-wider mb-2">{CONTENT[lang].leadMagnet.title}</h3>
              <p className="font-serif text-[11px] text-rose-100/80 leading-relaxed bg-black/40 backdrop-blur-sm p-3.5 rounded-2xl border border-rose-900/50 shadow-inner mb-4">
                {CONTENT[lang].leadMagnet.description}
              </p>
              <button 
                onClick={handlePromoClick} 
                className="no-tilt w-full bg-gradient-to-r from-rose-700 to-rose-500 hover:from-rose-600 hover:to-rose-400 text-white text-[10px] font-bold uppercase tracking-widest py-3.5 rounded-xl flex items-center justify-center transition-all shadow-[0_0_20px_rgba(225,29,72,0.3)] border border-rose-500/50 group"
              >
                <Crown className="w-3.5 h-3.5 mr-2 text-rose-200 group-hover:scale-110 transition-transform" />
                {CONTENT[lang].leadMagnet.buttonText}
              </button>
            </div>

            {/* 7. ОТЗЫВЫ */}
            <div className={`absolute inset-0 flex flex-col pt-2 transition-all duration-500 ease-in-out ${view === 'reviews' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'}`}>
              <div className="flex items-center gap-3 mb-3 shrink-0">
                <div className="w-8 h-8 rounded-full bg-rose-900/30 border border-rose-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(159,18,57,0.2)]">
                  <Star className="w-4 h-4 text-rose-300" />
                </div>
                <h3 className="text-lg font-serif font-light text-rose-100 tracking-wider">{CONTENT[lang].views.reviewsTitle}</h3>
              </div>
              
              <div className="flex-1 overflow-y-auto hide-scrollbar flex flex-col gap-2.5 pb-10 pr-1 mask-image-bottom">
                
                {/* Отзыв 1: Виктория */}
                <div className="bg-black/40 backdrop-blur-sm p-3 rounded-2xl border border-rose-900/50 shadow-inner relative shrink-0">
                  <div className="flex justify-between items-center mb-1.5 px-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-rose-200/90 font-medium">{CONTENT[lang].views.reviews[0].name}</span>
                      {CONTENT[lang].views.reviews[0].date && <span className="text-[8px] text-rose-500/60">{CONTENT[lang].views.reviews[0].date}</span>}
                    </div>
                    <div className="flex gap-0.5">
                      <Star className="w-2.5 h-2.5 fill-rose-400 text-rose-400" />
                      <Star className="w-2.5 h-2.5 fill-rose-400 text-rose-400" />
                      <Star className="w-2.5 h-2.5 fill-rose-400 text-rose-400" />
                      <Star className="w-2.5 h-2.5 fill-rose-400 text-rose-400" />
                      <Star className="w-2.5 h-2.5 fill-rose-400 text-rose-400" />
                    </div>
                  </div>
                  <p className="font-serif text-[10px] text-rose-100/80 leading-relaxed italic px-1">
                    {CONTENT[lang].views.reviews[0].text}
                  </p>
                </div>

                {/* Отзыв 2: Алексей */}
                <div className="bg-black/40 backdrop-blur-sm p-3 rounded-2xl border border-rose-900/50 shadow-inner relative shrink-0">
                  <div className="flex justify-between items-center mb-1.5 px-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-rose-200/90 font-medium">{CONTENT[lang].views.reviews[1].name}</span>
                      {CONTENT[lang].views.reviews[1].date && <span className="text-[8px] text-rose-500/60">{CONTENT[lang].views.reviews[1].date}</span>}
                    </div>
                    <div className="flex gap-0.5">
                      <Star className="w-2.5 h-2.5 fill-rose-400 text-rose-400" />
                      <Star className="w-2.5 h-2.5 fill-rose-400 text-rose-400" />
                      <Star className="w-2.5 h-2.5 fill-rose-400 text-rose-400" />
                      <Star className="w-2.5 h-2.5 fill-rose-400 text-rose-400" />
                      <Star className="w-2.5 h-2.5 fill-rose-400 text-rose-400" />
                    </div>
                  </div>
                  <p className="font-serif text-[10px] text-rose-100/80 leading-relaxed italic px-1">
                    {CONTENT[lang].views.reviews[1].text}
                  </p>
                </div>

                {/* Отзыв 3: Мария */}
                <div className="bg-black/40 backdrop-blur-sm p-3 rounded-2xl border border-rose-900/50 shadow-inner relative shrink-0">
                  <div className="flex justify-between items-center mb-1.5 px-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-rose-200/90 font-medium">{CONTENT[lang].views.reviews[2].name}</span>
                      {CONTENT[lang].views.reviews[2].date && <span className="text-[8px] text-rose-500/60">{CONTENT[lang].views.reviews[2].date}</span>}
                    </div>
                    <div className="flex gap-0.5">
                      <Star className="w-2.5 h-2.5 fill-rose-400 text-rose-400" />
                      <Star className="w-2.5 h-2.5 fill-rose-400 text-rose-400" />
                      <Star className="w-2.5 h-2.5 fill-rose-400 text-rose-400" />
                      <Star className="w-2.5 h-2.5 fill-rose-400 text-rose-400" />
                      <Star className="w-2.5 h-2.5 fill-rose-400 text-rose-400" />
                    </div>
                  </div>
                  <p className="font-serif text-[10px] text-rose-100/80 leading-relaxed italic px-1">
                    {CONTENT[lang].views.reviews[2].text}
                  </p>
                </div>

              </div>
            </div>

          </div>

          {/* Кнопка записи (Главная кнопка) */}
          <div 
            className="mt-3 w-full no-tilt cursor-default relative z-20 flex flex-col gap-2"
            onClick={(e) => e.stopPropagation()}
          >
            <a href={CONTENT[lang].creator.actionLink} className="w-full bg-gradient-to-r from-[#380e1b] to-black backdrop-blur-md text-rose-100 font-serif text-[10px] uppercase tracking-[0.15em] py-4 rounded-2xl flex items-center justify-center gap-2 hover:from-[#4a1223] transition-all shadow-[0_0_25px_rgba(159,18,57,0.3)] border border-rose-800/50 group active:scale-95">
              <Crown className="w-4 h-4 text-rose-400 group-hover:scale-110 transition-transform" />
              {CONTENT[lang].creator.actionText} →
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

// ==========================================
// ОСНОВНОЙ КОМПОНЕНТ ПРИЛОЖЕНИЯ
// ==========================================

const App = () => {
  const [lang, setLang] = useState('ru'); // Состояние текущего языка
  const [isFlipped, setIsFlipped] = useState(false);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const [sparks, setSparks] = useState([]);
  const [bgOffset, setBgOffset] = useState({ x: 0, y: 0 });
  const [showShare, setShowShare] = useState(false); // Состояние для модального окна
  const [showPwaPrompt, setShowPwaPrompt] = useState(false); // Состояние для iOS плашки PWA
  const [copied, setCopied] = useState(false);       // Состояние для копирования ссылки
  const [isAudioPlaying, setIsAudioPlaying] = useState(false); // Состояние аудио
  const [trail, setTrail] = useState([]); // Состояние для искристого шлейфа
  const cardRef = useRef(null);
  const audioCtxRef = useRef(null); // Реф для аудио контекста (чтобы звук не пропадал)
  const audioRef = useRef(null); // Надежный реф для HTML5 аудио
  const isFlippingRef = useRef(false); // Реф для блокировки наклона во время переворота

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
      
      // Пробуем штатно запустить звук
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(err => {
          console.warn("Safari blocked play, applying fallback:", err);
          // СПАСИТЕЛЬНЫЙ ФОЛБЭК ДЛЯ iOS: 
          // Если Safari заартачился (из-за чего не было ни звука, ни эквалайзера),
          // мы жестко пинаем плеер и заставляем его играть.
          audio.load();
          audio.play().catch(e => console.error("Fatal audio error:", e));
        });
      }
    } else {
      audio.pause();
    }
  };

  // Глобальный параллакс фона (Живые сферы)
  useEffect(() => {
    const handleGlobalMove = (e) => {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      
      // Вычисляем смещение от центра экрана (максимум 80px)
      const x = (clientX / window.innerWidth - 0.5) * 80;
      const y = (clientY / window.innerHeight - 0.5) * 80;
      
      // Инвертируем (-x, -y), чтобы фон плыл в противоположную от курсора сторону
      setBgOffset({ x: -x, y: -y });
    };

    window.addEventListener('mousemove', handleGlobalMove);
    window.addEventListener('touchmove', handleGlobalMove);

    return () => {
      window.removeEventListener('mousemove', handleGlobalMove);
      window.removeEventListener('touchmove', handleGlobalMove);
    };
  }, []);

  // Динамическая генерация PWA manifest.json (чтобы работала установка на экран)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const manifest = {
        name: `${CONTENT[lang].creator.name1} ${CONTENT[lang].creator.name2} | ${CONTENT[lang].creator.role}`,
        short_name: "Визитка",
        start_url: window.location.pathname,
        display: "standalone",
        background_color: "#0a0a0a",
        theme_color: "#9f1239",
        icons: [{
          src: CONTENT[lang].creator.avatar || "https://api.qrserver.com/v1/create-qr-code/?size=192x192&data=PWA",
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

  // Магнитный 3D наклон за курсором/пальцем
  const handlePointerMove = (e) => {
    // Блокируем наклон, если карточка прямо сейчас переворачивается
    if (isFlippingRef.current || !cardRef.current) return;
    
    // Исключение для интерактивных зон (чтобы удобно было читать и нажимать)
    if (e.target.closest('.no-tilt')) {
      setRotate({ x: 0, y: 0 });
      setGlare(prev => ({ ...prev, opacity: 0 }));
      return;
    }
    
    const rect = cardRef.current.getBoundingClientRect();
    
    // Поддержка как мыши, так и тач-событий
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;

    const x = clientX - rect.left;
    const y = clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Максимальный угол наклона увеличен с 15 до 25 градусов для большей подвижности
    const rotateX = ((y - centerY) / centerY) * -25;
    const rotateY = ((x - centerX) / centerX) * 25;
    
    // Вычисляем позицию блика (в процентах)
    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;
    
    setRotate({ x: rotateX, y: rotateY });
    setGlare({ x: glareX, y: glareY, opacity: 1 });
  };

  // Сброс наклона, когда курсор уходит
  const handlePointerLeave = () => {
    if (isFlippingRef.current) return;
    setRotate({ x: 0, y: 0 });
    setGlare(prev => ({ ...prev, opacity: 0 }));
  };

  const playFlipSound = () => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      
      // Создаем контекст только один раз, чтобы браузер его не блокировал со временем
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioContext();
      }
      
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume(); // Возобновляем, если браузер усыпил контекст
      }

      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();

      osc.connect(gainNode);
      gainNode.connect(ctx.destination);

      // Создаем мягкий звук "взмаха" или "карточки"
      osc.type = 'sine';
      osc.frequency.setValueAtTime(300, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(40, ctx.currentTime + 0.15);

      gainNode.gain.setValueAtTime(0, ctx.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.1, ctx.currentTime + 0.05);
      gainNode.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.15);

      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.15);
    } catch (e) {
      // Игнорируем ошибки (если автоплей заблокирован браузером)
    }
  };

  const handleFlip = () => {
    // Звук переворота (саунд-дизайн)
    playFlipSound();
    
    // Блокируем магнитный наклон и выравниваем карточку ровно при перевороте
    isFlippingRef.current = true;
    setRotate({ x: 0, y: 0 });
    setGlare(prev => ({ ...prev, opacity: 0 }));
    
    // Разблокируем наклон после завершения анимации переворота
    setTimeout(() => { isFlippingRef.current = false; }, 700);

    if (!isFlipped) {
      // Взрыв более яркой и крупной белой пыльцы
      const newSparks = Array.from({ length: 35 }).map((_, i) => {
        // Распределяем искры по кругу
        const angle = (Math.PI * 2 * i) / 35 + (Math.random() * 0.5);
        const distance = 80 + Math.random() * 100; // Мягкий стартовый разлет
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
          wt: (20 + Math.random() * 20) + 's', // Время полета от 20 до 40 секунд!
          size: Math.random() * 2.5 + 1.5 + 'px', // Сделали крупнее (от 1.5px до 4px)
        };
      });
      setSparks(newSparks);
    } else {
      // Очищаем искры при возврате на лицевую сторону
      setSparks([]);
    }

    // Вибрация (Haptic feedback) при поддержке устройством для премиум-ощущений
    if (typeof navigator !== 'undefined' && navigator.vibrate) {
      // Двойной мягкий импульс при перевороте карточки
      navigator.vibrate([30, 30, 40]); 
    }
    setIsFlipped(!isFlipped);
  };

  // Функция для получения цвета мобильного свечения в зависимости от шаблона
  const getGlowColor = () => {
    return 'rgba(159,18,57,0.6)'; // Босс (Винный)
  };

  // Получение индивидуальной темы для воздушного модального окна
  const getModalTheme = () => {
    return { bg: 'rgba(159,18,57,0.15)', border: 'rgba(159,18,57,0.3)', icon: 'text-rose-400' }; // Босс
  };

  // Функции для шаринга
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
      handleCopy(); // Фолбек для десктопов без поддержки Web Share API
    }
  };

  // Функция для конвертации картинки в Base64 для vCard
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

  // Функция скачивания vCard (контакта)
  const handleDownloadVCard = async () => {
    // Конвертируем картинку bg-creator.jpg в Base64
    let photoBase64 = null;
    const photoUrl = '/bg-creator.jpg'; // Строго используем этот файл по твоему запросу
    
    try {
      photoBase64 = await getBase64Image(photoUrl);
    } catch (e) {
      console.error("Ошибка загрузки фото для vCard", e);
    }

    // Формируем vCard стандарта 3.0
    const vcard = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      `FN:${CONTENT[lang].creator.name1} ${CONTENT[lang].creator.name2}`,
      `N:${CONTENT[lang].creator.name2};${CONTENT[lang].creator.name1};;;`,
      `ORG:${CONTENT[lang].contact.company}`,
      `TITLE:${CONTENT[lang].contact.title}`,
      `TEL;TYPE=CELL:${CONTENT[lang].contact.phone}`,
      `EMAIL;TYPE=WORK:${CONTENT[lang].contact.email}`,
      `URL:${CONTENT[lang].creator.websiteLink}`,
      photoBase64 ? `PHOTO;ENCODING=b;TYPE=JPEG:${photoBase64}` : "",
      `NOTE:${CONTENT[lang].ui.saveContact}`,
      "END:VCARD"
    ].filter(Boolean).join("\n"); 

    const fileName = `${CONTENT[lang].creator.name1}_${CONTENT[lang].creator.name2}.vcf`;
    
    // Определяем среду
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    const isAndroid = /Android/.test(navigator.userAgent);

    // === ПРЯМОЕ ОТКРЫТИЕ КОНТАКТА В ОС ===
    
    if (isIOS) {
      // На iOS (Safari, Chrome, Telegram) data URI мгновенно вызывает нативное окно контакта
      window.location.href = 'data:text/vcard;charset=utf-8,' + encodeURIComponent(vcard);
      return;
    }

    // Для Android и ПК используем Blob
    const blob = new Blob([vcard], { type: 'text/x-vcard;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    
    // КЛЮЧЕВОЙ ХАК ДЛЯ ANDROID:
    // Мы НАМЕРЕННО не ставим атрибут download для Android.
    // Браузер не сможет "прочитать" ссылку как страницу и передаст 
    // этот файл напрямую в операционную систему, которая сразу откроет Контакты!
    // Для обычных компьютеров (ПК) оставляем классическое скачивание.
    if (!isAndroid) {
      link.setAttribute('download', fileName);
    }
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    setTimeout(() => window.URL.revokeObjectURL(url), 500);
  };

  return (
    <div className="fixed inset-0 w-full h-full bg-neutral-950 flex flex-col font-sans select-none transition-all duration-500 overflow-hidden justify-center items-center p-4 sm:p-8">
      {/* Вставляем глобальные стили */}
      <style>{globalStyles}</style>

      {/* Интерактивный шлейф из пыльцы */}
      {trail.map(p => (
        <div
          key={p.id}
          className="trail-particle"
          style={{ left: p.x, top: p.y }}
        />
      ))}

      {/* Фоновое свечение приложения (Живые сферы) */}
      <div 
        className="fixed top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none transition-transform duration-1000 ease-out"
        style={{ transform: `translate(${bgOffset.x}px, ${bgOffset.y}px)` }}
      ></div>
      <div 
        className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-rose-500/10 rounded-full blur-[120px] pointer-events-none transition-transform duration-1000 ease-out"
        style={{ transform: `translate(${bgOffset.x * 1.5}px, ${bgOffset.y * 1.5}px)` }}
      ></div>

      {/* КОНТЕЙНЕР ВИЗИТКИ (3D Сцена с ограничением высоты для мобилок) */}
      <div 
        className="w-full flex justify-center relative z-40 items-center"
      >
        <div 
          ref={cardRef}
          className="relative z-10 w-full aspect-[1/1.6] sm:aspect-[1/1.5] cursor-pointer group animate-float touch-none"
          style={{ perspective: '1500px', maxWidth: 'min(22rem, 85vw, 55vh)' }}
          onClick={handleFlip}
          onMouseMove={handlePointerMove}
          onMouseLeave={handlePointerLeave}
          onTouchMove={handlePointerMove}
          onTouchEnd={handlePointerLeave}
        >
          {/* Искры (Magic Dust) */}
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

          {/* Обертка для магнитного 3D наклона (следит за мышью/пальцем) */}
          <div
            className="w-full h-full card-preserve-3d transition-transform duration-100 ease-out z-10 relative"
            style={{ transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)` }}
          >
            {/* Сама визитка с анимацией вращения (переворот на 180) */}
            <div 
              className="relative w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.4,0.2,0.2,1)] card-preserve-3d"
              style={{ transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
            >
              {/* Дополнительное мощное свечение для мобилок */}
              <div 
                className="absolute inset-0 rounded-[2.5rem] pointer-events-none sm:hidden card-backface-hidden" 
                style={{ boxShadow: `0 0 60px ${getGlowColor()}` }} 
              />
              <div 
                className="absolute inset-0 rounded-[2.5rem] pointer-events-none sm:hidden card-backface-hidden" 
                style={{ transform: 'rotateY(180deg)', boxShadow: `0 0 60px ${getGlowColor()}` }} 
              />

              {/* ПЕРЕДАЕМ ВЫБРАННЫЙ ЯЗЫК В КАРТОЧКУ */}
              <CreatorCard lang={lang} />

              {/* === ЭФФЕКТЫ СВЕЧЕНИЯ И БЛИКОВ (ЖИДКОЕ СТЕКЛО) === */}

              {/* Лицевая сторона: Жидкое стекло (Liquid Glass) */}
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

              {/* Обратная сторона: Жидкое стекло (Liquid Glass) */}
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

      {/* === ПАНЕЛЬ С КНОПКАМИ (Центрированная внизу, на десктопе опущена ниже) === */}
      <div className="fixed bottom-10 sm:bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-6">

        {/* СКРЫТЫЙ HTML5 АУДИО ПЛЕЕР (Самый надежный метод для всех устройств) */}
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
          className={`active:scale-90 rounded-full backdrop-blur-md border transition-all duration-300 group touch-manipulation flex items-center justify-center w-10 h-10 ${isAudioPlaying ? 'bg-rose-900/40 border-rose-500/50 shadow-[0_0_20px_rgba(225,29,72,0.3)]' : 'bg-white/5 border-white/10 text-white/40 hover:text-white/90 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]'}`}
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

        {/* НОВАЯ КНОПКА: СМЕНА ЯЗЫКА (RU/EN) */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            if (typeof navigator !== 'undefined' && navigator.vibrate) navigator.vibrate(15);
            setLang(prev => prev === 'ru' ? 'en' : 'ru'); // Переключатель
          }}
          className="active:scale-90 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white/40 hover:text-white/90 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300 group touch-manipulation flex items-center justify-center w-10 h-10"
          aria-label="Сменить язык"
        >
          <span className="font-bold text-[11px] tracking-wider transition-transform group-hover:scale-110">
            {lang === 'ru' ? 'EN' : 'RU'}
          </span>
        </button>

        {/* КНОПКА ПОДЕЛИТЬСЯ */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            if (typeof navigator !== 'undefined' && navigator.vibrate) navigator.vibrate(15);
            setShowShare(true);
          }}
          className="active:scale-90 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white/40 hover:text-white/90 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300 group touch-manipulation flex items-center justify-center w-10 h-10"
          aria-label="Поделиться"
        >
          <QrCode className="w-4 h-4 group-hover:scale-110 transition-transform" />
        </button>

        {/* КНОПКА СОХРАНИТЬ КОНТАКТ (vCard) */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            if (typeof navigator !== 'undefined' && navigator.vibrate) navigator.vibrate(15);
            handleDownloadVCard();
          }}
          className="active:scale-90 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white/40 hover:text-white/90 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300 group touch-manipulation flex items-center justify-center w-10 h-10"
          aria-label="Сохранить контакт"
          title="Сохранить в контакты"
        >
          <UserPlus className="w-4 h-4 group-hover:scale-110 transition-transform" />
        </button>

      </div>

      {/* МОДАЛЬНОЕ ОКНО ПОДЕЛИТЬСЯ (Индивидуальное, Воздушное) */}
      {showShare && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm transition-opacity animate-in fade-in duration-200" 
          onClick={() => setShowShare(false)}
        >
          <div 
            className="backdrop-blur-3xl rounded-[2.5rem] p-6 sm:p-8 w-full max-w-sm flex flex-col items-center relative shadow-2xl animate-in zoom-in-95 duration-200 border" 
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
            
            {/* Динамический QR код */}
            <div className="bg-white p-4 rounded-3xl mb-6 shadow-[0_0_40px_rgba(255,255,255,0.15)] flex items-center justify-center">
              <img 
                src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&margin=0&data=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : CONTENT[lang].creator.websiteLink)}`} 
                alt="QR Code" 
                className="w-[180px] h-[180px] object-contain rounded-lg"
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
                className={`flex-1 bg-white/10 hover:bg-white/20 border border-white/10 text-white font-bold py-3.5 px-4 rounded-2xl flex items-center justify-center gap-2 transition-colors text-sm`}
              >
                <Share2 className="w-4 h-4" />
                {CONTENT[lang].ui.send}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* МОДАЛЬНОЕ ОКНО PWA (Установка на экран 'Домой' в стиле iOS) */}
      {showPwaPrompt && (
        <div 
          className="fixed inset-0 z-[110] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-300"
          onClick={() => setShowPwaPrompt(false)}
        >
          <div 
            className="w-full max-w-sm bg-[#0a0205] sm:rounded-3xl rounded-t-3xl p-6 pb-10 sm:pb-6 flex flex-col items-center relative animate-in slide-in-from-bottom-full sm:zoom-in-95 duration-300 border-t sm:border border-rose-900/30 shadow-[0_-10px_40px_rgba(159,18,57,0.2)]"
            onClick={e => e.stopPropagation()}
          >
            {/* iOS стиль: полоска-ручка сверху */}
            <div className="w-12 h-1.5 bg-white/20 rounded-full mb-6 sm:hidden"></div>
            
            <button 
              onClick={() => setShowPwaPrompt(false)} 
              className="absolute top-5 right-5 text-white/40 hover:text-white bg-black/20 hover:bg-black/40 rounded-full p-2 transition-colors border border-white/5 hidden sm:block"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-16 h-16 bg-gradient-to-br from-rose-900 to-black p-0.5 rounded-2xl shadow-[0_0_20px_rgba(159,18,57,0.4)] mb-5">
               <div className="w-full h-full bg-black/80 backdrop-blur-md rounded-[14px] flex items-center justify-center border border-rose-500/20">
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

    </div>
  );
};

export default App;