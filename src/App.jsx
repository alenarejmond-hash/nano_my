import React, { useState, useEffect, useRef } from 'react';
import { 
  Globe, Star, UserCircle2, Diamond, Crown,
  QrCode, Share2, Copy, X, Check,
  Rocket, Code2
} from 'lucide-react';

// ==========================================
// ⚙️ НАСТРОЙКИ КОНТЕНТА (МЕНЯТЬ ТЕКСТ, ФОТО И ССЫЛКИ ТОЛЬКО ЗДЕСЬ!)
// ==========================================
const CONTENT = {
  creator: {
    bgImage: '/bg-creator.jpg',
    avatar: '/avatar-creator.jpg', 
    badge: 'DESIGN & CODE',
    name1: 'ELENA',
    name2: 'SOTNIKOVA',
    role: 'Premium Web',
    status: 'Digital Creator',
    quote1: 'Не просто визитка,',
    quote2: 'а ваш главный цифровой актив...',
    websiteText: 'Смотреть Портфолио',
    websiteLink: 'https://nice-app.ru',
    actionText: 'ЗАКАЗАТЬ СВОЙ DIGITAL-МИР',
    actionLink: 'https://t.me/elenlime'
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
  body {
    background-color: #0a0a0a;
    overscroll-behavior: none;
    overflow-x: hidden;
  }
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .hide-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
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
`;

// ==========================================
// 🪄 КОМПОНЕНТ ЭФФЕКТА СГОРАНИЯ (УМНАЯ ЦВЕТОВАЯ ПОДСТРОЙКА)
// ==========================================
const BurnRevealImage = ({ src, className, style, imgClassName = "", burnColor = "wine" }) => {
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
        className={`absolute inset-0 bg-cover bg-center smooth-mask-wipe rounded-[2.5rem] ${imgClassName}`}
        style={{ backgroundImage: `url(${src})` }}
      />
      {/* 2. Эффект линии огня и тлеющего края с кастомными цветами */}
      <div 
        className="absolute inset-0 burn-fire-edge rounded-[2.5rem]" 
        style={{
          '--burn-c1': t.c1,
          '--burn-c2': t.c2,
          '--burn-c3': t.c3,
        }}
      />
    </div>
  );
};


// ==========================================
// ШАБЛОНЫ ВИЗИТОК (4 направления)
// ==========================================

// 0. БОСС / СОЗДАТЕЛЬ (Елена Сотникова)
const CreatorCard = () => {
  const [view, setView] = useState('profile');

  return (
    <>
      {/* ЛИЦЕВАЯ СТОРОНА */}
      <div className="absolute inset-0 w-full h-full card-backface-hidden rounded-[2.5rem] shadow-[0_20px_50px_rgba(159,18,57,0.4)] overflow-hidden bg-black text-white flex flex-col p-6 group-hover:shadow-[0_20px_80px_rgba(159,18,57,0.6)] transition-shadow duration-700">
        {/* Глубокий темный градиент с оттенками марсала/сливы */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#1a050f] via-black to-[#2a0a18] opacity-90 mix-blend-screen"></div>
        
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-rose-900/20 via-transparent to-transparent"></div>

        {/* ТЕМНЫЙ ПОЛУПРОЗРАЧНЫЙ ГРАДИЕНТ (Лежит под фото, как ты и просила) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black from-0% via-black/80 via-[15%] to-transparent to-[30%] pointer-events-none z-0 rounded-[2.5rem]"></div>

        {/* ЗАМЕНА СТАТИЧНОГО ФОНА НА СГОРАЮЩИЙ (Винный огонь) ПОВЕРХ ВСЕХ СЛОЕВ */}
        <BurnRevealImage src={CONTENT.creator.bgImage} className="grayscale-[0.2]" burnColor="wine" />

        <div className="relative z-10 flex flex-col h-full justify-between">
          <div className="flex justify-between items-start">
            <div className="bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-rose-900/50 flex items-center gap-2">
              <Crown className="w-4 h-4 text-rose-400" />
              <span className="text-xs font-serif tracking-widest uppercase text-rose-200/90">{CONTENT.creator.badge}</span>
            </div>
            <Code2 className="w-8 h-8 text-rose-300/60 drop-shadow-[0_0_10px_rgba(159,18,57,0.5)]" />
          </div>

          <div className="text-center pb-2">
            <h2 className="text-3xl sm:text-4xl leading-tight font-serif font-light mb-2 uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-rose-100 via-white to-rose-200 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              {CONTENT.creator.name1}
              <br />
              {CONTENT.creator.name2}
            </h2>
            <div className="flex flex-col items-center gap-3 mt-3">
              <p className="font-serif text-[11px] text-rose-100/70 italic tracking-wider max-w-[80%] mx-auto">
                "{CONTENT.creator.quote1} {CONTENT.creator.quote2}"
              </p>
              <div className="flex items-center gap-1.5 bg-black/50 px-3 py-1.5 rounded-full border border-rose-900/50 mt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse shadow-[0_0_8px_rgba(225,29,72,0.8)]"></span>
                <span className="text-[9px] font-bold uppercase tracking-widest text-rose-200">{CONTENT.creator.status}</span>
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
              <h3 className="text-xl font-serif font-light text-rose-100 tracking-wider mb-2">Моя философия</h3>
              <p className="font-serif text-[11px] text-rose-100/80 leading-relaxed bg-black/40 backdrop-blur-sm p-3.5 rounded-2xl border border-rose-900/50 shadow-inner">
                Я создаю не просто сайты, а премиальные digital-миры. Ваша цифровая визитка — это статус, который продает ваши услуги еще до того, как вы заговорите. Уникальные анимации, PWA-приложения и 100% WOW-эффект.
              </p>
              <a href={CONTENT.creator.websiteLink} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="no-tilt mt-3 bg-gradient-to-r from-rose-950 to-black border border-rose-800/50 hover:border-rose-600/50 text-rose-200 text-[10px] uppercase tracking-[0.2em] py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-[0_0_15px_rgba(0,0,0,0.5)] w-fit mx-auto group">
                 <Globe className="w-3.5 h-3.5 text-rose-400 group-hover:animate-pulse" />
                 {CONTENT.creator.websiteText}
              </a>
            </div>

            {/* 2. ТАРИФ NANO */}
            <div className={`absolute inset-0 flex flex-col justify-center transition-all duration-500 ease-in-out ${view === 'nano' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'}`}>
              <div className="w-10 h-10 rounded-full bg-rose-900/30 border border-rose-500/30 flex items-center justify-center mb-3 shadow-[0_0_15px_rgba(159,18,57,0.2)]">
                <Diamond className="w-5 h-5 text-rose-300" />
              </div>
              <div className="flex items-end gap-2 mb-2">
                <h3 className="text-xl font-serif font-light text-rose-100 tracking-wider">Тариф Nano</h3>
                <span className="text-rose-400 font-serif text-sm font-bold bg-rose-950/50 px-2 py-0.5 rounded-md border border-rose-900/50 mb-0.5">1 990 ₽</span>
              </div>
              <p className="font-serif text-[11px] text-rose-100/80 leading-relaxed bg-black/40 backdrop-blur-sm p-3.5 rounded-2xl border border-rose-900/50 shadow-inner">
                Элегантный старт для вашего бренда. Идеально выверенная база, стильные анимации, адаптивность и мгновенная загрузка. Один платеж — и она ваша навсегда.
              </p>
            </div>

            {/* 3. ТАРИФ PRO */}
            <div className={`absolute inset-0 flex flex-col justify-center transition-all duration-500 ease-in-out ${view === 'pro' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'}`}>
              <div className="w-10 h-10 rounded-full bg-rose-900/30 border border-rose-500/30 flex items-center justify-center mb-3 shadow-[0_0_15px_rgba(159,18,57,0.2)]">
                <Rocket className="w-5 h-5 text-rose-300" />
              </div>
              <div className="flex flex-col mb-2">
                <h3 className="text-xl font-serif font-light text-rose-100 tracking-wider">Архитектура Pro</h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-rose-400 font-serif text-sm font-bold bg-rose-950/50 px-2 py-0.5 rounded-md border border-rose-900/50">7 000 ₽</span>
                  <span className="text-rose-500/50 text-[10px] line-through">10 000 ₽</span>
                </div>
              </div>
              <p className="font-serif text-[11px] text-rose-100/80 leading-relaxed bg-black/40 backdrop-blur-sm p-3.5 rounded-2xl border border-rose-900/50 shadow-inner">
                Premium-шаблон из моей базы с полной адаптацией под вас. Мини-апп в TG/VK + веб-версия (PWA). Поддомен в подарок и запуск «под ключ» всего за 3-5 дней.
              </p>
            </div>

            {/* 4. ТАРИФ ULTRA */}
            <div className={`absolute inset-0 flex flex-col justify-center transition-all duration-500 ease-in-out ${view === 'ultra' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'}`}>
              <div className="w-10 h-10 rounded-full bg-rose-900/30 border border-rose-500/30 flex items-center justify-center mb-3 shadow-[0_0_15px_rgba(159,18,57,0.2)]">
                <Crown className="w-5 h-5 text-rose-300" />
              </div>
              <div className="flex flex-col mb-2">
                <h3 className="text-[1.15rem] whitespace-nowrap font-serif font-light text-rose-100 tracking-wider">Эксклюзив Ultra</h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-rose-400 font-serif text-sm font-bold bg-rose-950/50 px-2 py-0.5 rounded-md border border-rose-900/50">от 8 000 ₽</span>
                  <span className="text-rose-500/50 text-[10px] line-through">15 000 ₽</span>
                </div>
              </div>
              <p className="font-serif text-[11px] text-rose-100/80 leading-relaxed bg-black/40 backdrop-blur-sm p-3.5 rounded-2xl border border-rose-900/50 shadow-inner">
                Уникальный цифровой код вашего бизнеса. Разработка индивидуальной структуры, сложнейшие 3D-сцены, эффекты стекла и частиц. Решение для тех, кто не терпит компромиссов.
              </p>
            </div>

            {/* 5. ТЕХНОЛОГИИ */}
            <div className={`absolute inset-0 flex flex-col justify-center transition-all duration-500 ease-in-out ${view === 'tech' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'}`}>
              <div className="w-10 h-10 rounded-full bg-rose-900/30 border border-rose-500/30 flex items-center justify-center mb-3 shadow-[0_0_15px_rgba(159,18,57,0.2)]">
                <Code2 className="w-5 h-5 text-rose-300" />
              </div>
              <h3 className="text-xl font-serif font-light text-rose-100 tracking-wider mb-2">Под капотом</h3>
              <p className="font-serif text-[11px] text-rose-100/80 leading-relaxed bg-black/40 backdrop-blur-sm p-3.5 rounded-2xl border border-rose-900/50 shadow-inner">
                Каждая визитка — это шедевр кода. Работает без VPN, устанавливается на экран телефона как приложение, не требует абонентской платы. Легко делиться через QR или ссылку.
              </p>
            </div>

            {/* 6. ОТЗЫВЫ */}
            <div className={`absolute inset-0 flex flex-col pt-2 transition-all duration-500 ease-in-out ${view === 'reviews' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'}`}>
              <div className="flex items-center gap-3 mb-3 shrink-0">
                <div className="w-8 h-8 rounded-full bg-rose-900/30 border border-rose-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(159,18,57,0.2)]">
                  <Star className="w-4 h-4 text-rose-300" />
                </div>
                <h3 className="text-lg font-serif font-light text-rose-100 tracking-wider">Отзывы</h3>
              </div>
              
              <div className="flex-1 overflow-y-auto hide-scrollbar flex flex-col gap-2.5 pb-10 pr-1 mask-image-bottom">
                
                {/* Отзыв 1: Виктория */}
                <div className="bg-black/40 backdrop-blur-sm p-3 rounded-2xl border border-rose-900/50 shadow-inner relative shrink-0">
                  <div className="flex justify-between items-center mb-1.5 px-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-rose-200/90 font-medium">Виктория</span>
                      <span className="text-[8px] text-rose-500/60">21.03.2026</span>
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
                    "Забыла про конструкторы как про страшный сон. Очень плавно, стильно, вайб передается на 100%"
                  </p>
                </div>

                {/* Отзыв 2: Алексей */}
                <div className="bg-black/40 backdrop-blur-sm p-3 rounded-2xl border border-rose-900/50 shadow-inner relative shrink-0">
                  <div className="flex justify-between items-center mb-1.5 px-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-rose-200/90 font-medium">Алексей</span>
                      <span className="text-[8px] text-rose-500/60">20.03.2026</span>
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
                    "Дизайн просто космос. Клиенты теперь не хотят уходить из моей мини-апп. Конверсия выросла вдвое!"
                  </p>
                </div>

                {/* Отзыв 3: Мария */}
                <div className="bg-black/40 backdrop-blur-sm p-3 rounded-2xl border border-rose-900/50 shadow-inner relative shrink-0">
                  <div className="flex justify-between items-center mb-1.5 px-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-rose-200/90 font-medium">Мария</span>
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
                    "Елена — мастер своего дела. Все продумано до мелочей: от визуала до анимаций."
                  </p>
                </div>

              </div>
            </div>

          </div>

          {/* Кнопка записи (Главная кнопка) */}
          <div 
            className="mt-3 w-full no-tilt cursor-default relative z-20"
            onClick={(e) => e.stopPropagation()}
          >
            <a href={CONTENT.creator.actionLink} className="w-full bg-gradient-to-r from-[#380e1b] to-black backdrop-blur-md text-rose-100 font-serif text-[10px] uppercase tracking-[0.15em] py-4 rounded-2xl flex items-center justify-center gap-2 hover:from-[#4a1223] transition-all shadow-[0_0_25px_rgba(159,18,57,0.3)] border border-rose-800/50 group active:scale-95">
              <Crown className="w-4 h-4 text-rose-400 group-hover:scale-110 transition-transform" />
              {CONTENT.creator.actionText} →
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
  const [isFlipped, setIsFlipped] = useState(false);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const [sparks, setSparks] = useState([]);
  const [bgOffset, setBgOffset] = useState({ x: 0, y: 0 });
  const [showShare, setShowShare] = useState(false); // Состояние для модального окна
  const [copied, setCopied] = useState(false);       // Состояние для копирования ссылки
  const cardRef = useRef(null);
  const audioCtxRef = useRef(null); // Реф для аудио контекста (чтобы звук не пропадал)
  const isFlippingRef = useRef(false); // Реф для блокировки наклона во время переворота

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
          title: 'Моя цифровая визитка',
          text: 'Привет! Вот моя визитка с контактами:',
          url: window.location.href,
        });
      } catch (err) {
        console.log('Шаринг отменен');
      }
    } else {
      handleCopy(); // Фолбек для десктопов без поддержки Web Share API
    }
  };

  return (
    <div className="min-h-[100dvh] bg-neutral-950 flex flex-col font-sans select-none transition-all duration-500 relative overflow-hidden justify-center items-center p-4 sm:p-8">
      {/* Вставляем глобальные стили */}
      <style>{globalStyles}</style>

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
        className="w-full flex justify-center relative z-40 items-center mt-12 sm:mt-16"
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

              <CreatorCard />

              {/* === ЭФФЕКТЫ СВЕЧЕНИЯ И БЛИКОВ === */}

              {/* Лицевая сторона: Мягкий, обволакивающий свет */}
              <div 
                className="absolute inset-0 w-full h-full rounded-[2.5rem] pointer-events-none transition-opacity duration-300 card-backface-hidden"
                style={{
                  background: `radial-gradient(farthest-corner circle at ${glare.x}% ${glare.y}%, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0) 80%)`,
                  mixBlendMode: 'overlay',
                  opacity: glare.opacity,
                  zIndex: 50,
                }}
              />

              {/* Бегающий блик (Обратная сторона) */}
              <div 
                className="absolute inset-0 w-full h-full rounded-[2.5rem] pointer-events-none transition-opacity duration-300 card-backface-hidden"
                style={{
                  transform: 'rotateY(180deg) translateZ(0)',
                  background: `radial-gradient(farthest-corner circle at ${100 - glare.x}% ${glare.y}%, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0) 80%)`,
                  opacity: glare.opacity,
                  mixBlendMode: 'overlay',
                  zIndex: 50,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* КНОПКА ПОДЕЛИТЬСЯ (Уменьшена на мобилках, чтобы не залезать на визитку) */}
      <button
        onClick={() => {
          if (typeof navigator !== 'undefined' && navigator.vibrate) navigator.vibrate(15);
          setShowShare(true);
        }}
        className="fixed bottom-10 right-6 sm:bottom-12 sm:right-12 z-50 p-2.5 sm:p-3.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white/40 hover:text-white/90 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300 group touch-manipulation"
        aria-label="Поделиться"
      >
        <QrCode className="w-4 h-4 sm:w-5 sm:h-5 sm:group-hover:scale-110 transition-transform" />
      </button>

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
            
            <div className={`w-12 h-12 rounded-full bg-black/20 flex items-center justify-center mb-4 border ${getModalTheme().icon.replace('text', 'border').replace('400', '500/30')}`}>
              <QrCode className={`w-6 h-6 ${getModalTheme().icon}`} />
            </div>
            
            <h3 className="text-xl font-bold text-white mb-2 tracking-wide">Поделиться визиткой</h3>
            <p className="text-sm text-white/60 text-center mb-6 leading-relaxed">Дайте отсканировать QR-код или отправьте ссылку напрямую.</p>
            
            {/* Динамический QR код (Белый непрозрачный фон для сканера) */}
            <div className="bg-white p-4 rounded-3xl mb-6 shadow-[0_0_40px_rgba(255,255,255,0.15)] flex items-center justify-center">
              <img 
                src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&margin=0&data=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : 'https://nice-app.ru')}`} 
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
                {copied ? 'Скопировано!' : 'Копировать'}
              </button>
              <button 
                onClick={handleShare}
                className={`flex-1 bg-white/10 hover:bg-white/20 border border-white/10 text-white font-bold py-3.5 px-4 rounded-2xl flex items-center justify-center gap-2 transition-colors text-sm`}
              >
                <Share2 className="w-4 h-4" />
                Отправить
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;