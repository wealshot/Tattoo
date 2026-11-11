/**
 * =======================================================================
 * БАЗА ДАННЫХ КЛИЕНТОВ (SINGLE CODEBASE ARCHITECTURE)
 * =======================================================================
 * Чтобы добавить нового клиента:
 * 1. Скопируйте любой блок клиента (например 'gleb' или 'angelina').
 * 2. Задайте уникальный slug (например 'ivan').
 * 3. Поменяйте имя, фото, Telegram, акцентный цвет и тарифы.
 * 4. Залейте фото в папки /images и /cases.
 * 
 * Новый сайт мгновенно станет доступен по ссылке:
 * https://ваш-домен.vercel.app/ivan
 * =======================================================================
 */

window.CLIENTS = {
  "gleb": {
    "slug": "gleb",
    "brandTag": "CUSTOM TATTOO ART // МОСКВА",
    "location": "МОСКВА // СТУДИЯ & ВЫЕЗДЫ",
    "name": "ГЛЕБ МАТВЕЙЧУК",
    "firstName": "ГЛЕБ",
    "lastName": "МАТВЕЙЧУК",
    "tagline": "TATTOO ARTIST // GRAPHIC & REALISM",
    "spec": "АВТОРСКИЙ ЧЕРНО-БЕЛЫЙ РЕАЛИЗМ, ГРАФИКА И COVER-UP",
    "heroImage": "/images/gleb-hero.jpg",
    "accentColor": "#FF5500",
    "accentDim": "rgba(255, 85, 0, 0.12)",
    "accentGlow": "rgba(255, 85, 0, 0.40)",
    "telegramUsername": "gleb_tattoo",
    "scarcityBadge": "ЗАПИСЬ НА МЕСЯЦ: СВОБОДНО 2 ОКНА",
    "stats": [
      {
        "label": "ОПЫТ",
        "value": "7 ЛЕТ"
      },
      {
        "label": "РАБОТ",
        "value": "650+"
      },
      {
        "label": "ЗАЖИВЛЕНИЕ",
        "value": "100%"
      }
    ],
    "cases": [
      {
        "id": 1,
        "name": "МАКСИМ",
        "tag": "ЧЕРНО-БЕЛЫЙ РЕАЛИЗМ // ПРЕДПЛЕЧЬЕ",
        "badge": "1 СЕАНС // 4 ЧАСА",
        "afterImage": "/cases/tatu2_after.jpg",
        "beforeImage": "/cases/tatu2_after.jpg",
        "description": "Анатомическая посадка эскиза, бархатные градиенты серого (greywash) и ювелирная детализация шерсти хищника.",
        "initialStats": "ПРЕДПЛЕЧЬЕ // 18 СМ",
        "resultStats": "ЧИСТЫЙ РЕАЛИЗМ"
      },
      {
        "id": 2,
        "name": "СЕРГЕЙ",
        "tag": "ПЕРЕКРЫТИЕ (COVER-UP) СТАРОГО ПАРТАКА",
        "badge": "2 СЕАНСА // БЕЗ ЛАЗЕРА",
        "afterImage": "/cases/tatu1_after.jpg",
        "beforeImage": "/cases/tatu1_after.jpg",
        "description": "Сложное перекрытие старого армейского партака плотной авторской японской графикой и пионами. Полная маскировка без следов старой тату.",
        "initialStats": "СТАРЫЙ ПАРТАК // ПЛЕЧО",
        "resultStats": "ПЛОТНАЯ ЯПОНСКАЯ ГРАФИКА"
      },
      {
        "id": 3,
        "name": "АРТЕМ",
        "tag": "ГРАФИЧЕСКИЙ РУКАВ // ГЕОМЕТРИЯ",
        "badge": "3 СЕАНСА // ПРОЕКТ",
        "afterImage": "/cases/tatu2_before.jpg",
        "beforeImage": "/cases/tatu2_before.jpg",
        "description": "Масштабный проект рукава в технике дотворк и випшейдинг с идеальной симметрией по мышечным линиям руки.",
        "initialStats": "ПОЛНЫЙ РУКАВ // 38 СМ",
        "resultStats": "ГЕОМЕТРИЯ & ДОТВОРК"
      },
      {
        "id": 4,
        "name": "ДЕНИС",
        "tag": "МИКРОРЕАЛИЗМ & ТОНКИЕ ЛИНИИ",
        "badge": "1 СЕАНС // 2.5 ЧАСА",
        "afterImage": "/cases/tatu1_before.jpg",
        "beforeImage": "/cases/tatu1_before.jpg",
        "description": "Тончайшие контуры толщиной в одну иглу (Single Needle), безупречная четкость линий без подплывания пигмента.",
        "initialStats": "КИСТЬ / ЗАПЯСТЬЕ // 10 СМ",
        "resultStats": "ИДЕАЛЬНЫЙ МИКРОРЕАЛИЗМ"
      }
    ],
    "tiers": [
      {
        "id": "tier-session",
        "code": "01",
        "name": "СЕАНС ТАТУИРОВКИ (ДО 4 ЧАСОВ)",
        "badge": "МИНИАТЮРЫ И СРЕДНИЕ РАБОТЫ",
        "price": "15 000 ₽",
        "period": "ЗА СЕАНС",
        "recommendedGoal": null,
        "features": [
          "Индивидуальная разработка эскиза под анатомию тела",
          "Премиальные гипоаллергенные пигменты (Dynamic / World Famous)",
          "Одноразовые стерильные картриджи Kwadron",
          "Профессиональная заживляющая пленка Suprasorb F",
          "Полный инструктаж и личный контроль заживления 24/7"
        ]
      },
      {
        "id": "tier-project",
        "code": "02",
        "name": "БОЛЬШОЙ ПРОЕКТ (РУКАВ / СПИНА)",
        "badge": "СКИДКА 10% НА КУРС СЕАНСОВ",
        "price": "45 000 ₽",
        "period": "ПАКЕТ ИЗ 3-4 СЕАНСОВ",
        "recommendedGoal": "cut",
        "features": [
          "Масштабный проект: рукав, спина, грудь или бедро",
          "3D-примерка и моделирование эскиза на фото твоего тела",
          "Приоритетный выбор дат сеансов в расписании",
          "Бесплатная финальная коррекция после заживления",
          "Премиальный уходовый бокс для идеальной пигментации в подарок"
        ]
      }
    ]
  },
  "angelina": {
    "slug": "angelina",
    "brandTag": "CONSCIOUS MOVEMENT // REHAB",
    "location": "САМАРА // ONLINE",
    "name": "АНГЕЛИНА БАШКИРОВА",
    "firstName": "АНГЕЛИНА",
    "lastName": "БАШКИРОВА",
    "tagline": "BODY & MIND / REHAB & MOBILITY",
    "spec": "ЛЕГКОЕ И ПОДТЯНУТОЕ ТЕЛО БЕЗ БОЛИ И НАСИЛИЯ",
    "heroImage": "/images/angelina-hero.jpg",
    "accentColor": "#00E5A3",
    "accentDim": "rgba(0, 229, 163, 0.12)",
    "accentGlow": "rgba(0, 229, 163, 0.35)",
    "telegramUsername": "bashkirova_fits",
    "scarcityBadge": "НАБОР В ГРУППУ: СВОБОДНО 3 МЕСТА",
    "stats": [
      {
        "label": "СТАЖ",
        "value": "06+"
      },
      {
        "label": "АТЛЕТОВ",
        "value": "250+"
      },
      {
        "label": "БЕЗ БОЛИ",
        "value": "100%"
      }
    ],
    "cases": [
      {
        "id": 1,
        "name": "ИРА",
        "tag": "ВОССТАНОВЛЕНИЕ ПОСЛЕ РОДОВ & ТОНУС",
        "badge": "ТРАНСФОРМАЦИЯ & ФОРМА",
        "beforeImage": "/cases/ira_before.jpg",
        "afterImage": "/cases/ira_after.jpg",
        "description": "Путь от послеродового восстановления (3 мес после родов) до точечной гипертрофии ягодиц и плоского живота без изнурительных диет. Работа через биомеханику движения, МФР и укрепление мышечного корсета.",
        "initialStats": "ПОСЛЕ РОДОВ / ЗАЖИМЫ",
        "resultStats": "ТОНУС ЯГОДИЦ / РЕЛЬЕФ"
      }
    ],
    "tiers": [
      {
        "id": "tier-diag",
        "code": "01",
        "name": "ОНЛАЙН-ДИАГНОСТИКА",
        "badge": "БЫСТРЫЙ СТАРТ",
        "price": "4 000 ₽",
        "period": "РАЗОВО // 45-60 МИН",
        "recommendedGoal": null,
        "features": [
          "Комплексный разбор зажимов, осанки и мобильности суставов",
          "Выявление компенсаций и причин мышечного напряжения",
          "Персональный пошаговый вектор восстановления под твой запрос",
          "Определение ключевых точек входа для безопасного тренинга"
        ]
      },
      {
        "id": "tier-group",
        "code": "02",
        "name": "ФУНДАМЕНТ ДВИЖЕНИЯ",
        "badge": "БАЗОВЫЙ КУРС // 1 МЕСЯЦ",
        "price": "19 000 ₽",
        "period": "В МЕСЯЦ",
        "recommendedGoal": "cut",
        "features": [
          "Миофасциальный релиз (МФР), выстраивание осанки и дыхания",
          "Восстановление базовых функций тела и устранение спазмов",
          "Закрытый чат в Telegram с разбором техники движений",
          "Обучение инструментам минимальной и эффективной заботы о себе"
        ]
      },
      {
        "id": "tier-vip",
        "code": "03",
        "name": "ПЕРСОНАЛЬНОЕ ВЕДЕНИЕ",
        "badge": "МАКСИМАЛЬНЫЙ ФОКУС",
        "price": "70 000 ₽",
        "period": "В МЕСЯЦ",
        "recommendedGoal": "bulk",
        "features": [
          "2 персональные онлайн-тренировки в неделю по 1.5 часа",
          "Ежедневная связь с Ангелиной и адаптация под твой цикл",
          "Глубокая перестройка питания без чувства голода и срывов",
          "Интеграция телесной терапии и психосоматических триггеров"
        ]
      }
    ]
  },
  "alex": {
    "slug": "alex",
    "brandTag": "PERSONAL COACHING",
    "location": "МОСКВА // ONLINE",
    "name": "АЛЕКСЕЙ РОМАНОВ",
    "firstName": "АЛЕКСЕЙ",
    "lastName": "РОМАНОВ",
    "tagline": "PRO ATHLETE / IFBB CHAMPION",
    "spec": "STRENGTH & HYPERTROPHY ARCHITECT",
    "heroImage": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=900&auto=format&fit=crop",
    "accentColor": "#CCFF00",
    "accentDim": "rgba(204, 255, 0, 0.12)",
    "accentGlow": "rgba(204, 255, 0, 0.35)",
    "telegramUsername": "alex_iron_coach",
    "scarcityBadge": "НАБОР НА НОЯБРЬ: ОСТАЛОСЬ 2 МЕСТА",
    "stats": [
      {
        "label": "СТАЖ",
        "value": "08+"
      },
      {
        "label": "АТЛЕТОВ",
        "value": "340+"
      },
      {
        "label": "СБРОШЕНО",
        "value": "1.8T"
      }
    ],
    "cases": [
      {
        "id": 1,
        "name": "ДМИТРИЙ В.",
        "tag": "СУШКА И РЕЛЬЕФ",
        "badge": "-11.2 КГ ЗА 8 НЕДЕЛЬ",
        "beforeImage": "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=600&auto=format&fit=crop",
        "afterImage": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop",
        "description": "Сброс абдоминального жира с удержанием силовых показателей. Прорисовка глубокого рельефа.",
        "initialStats": "89.4 КГ / 24% ЖИРА",
        "resultStats": "78.2 КГ / 11% ЖИРА"
      },
      {
        "id": 2,
        "name": "АРТЕМ К.",
        "tag": "СИЛОВОЙ ПРОРЫВ",
        "badge": "ЖИМ 75 -> 115 КГ",
        "beforeImage": "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600&auto=format&fit=crop",
        "afterImage": "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=600&auto=format&fit=crop",
        "description": "Преодоление 2-летнего застоя. Прогрессия в базовых движениях и набор плотной массы.",
        "initialStats": "72.0 КГ / ЖИМ 75",
        "resultStats": "78.5 КГ / ЖИМ 115"
      }
    ],
    "tiers": [
      {
        "id": "tier-audit",
        "code": "01",
        "name": "ЭКСПРЕСС-АУДИТ",
        "badge": "БАЗОВЫЙ СТАРТ",
        "price": "2 990 ₽",
        "period": "РАЗОВО",
        "recommendedGoal": null,
        "features": [
          "Расчет КБЖУ под физиологию и метаболизм",
          "Анализ текущего дневника питания",
          "Устранение стоп-факторов метаболизма",
          "Протокол базовой нутрицевтики"
        ]
      },
      {
        "id": "tier-pro",
        "code": "02",
        "name": "PRO PERFORMANCE",
        "badge": "ВЫБОР АТЛЕТОВ",
        "price": "9 900 ₽",
        "period": "В МЕСЯЦ",
        "recommendedGoal": "cut",
        "features": [
          "Индивидуальный сплит тренировок в зале/дома",
          "Гибкая система питания без катаболизма",
          "Еженедельный замер формы и калибровка КБЖУ",
          "Прямой чат 24/7 с разбором видео техники",
          "Гарантия прогресса по протоколу"
        ]
      },
      {
        "id": "tier-vip",
        "code": "03",
        "name": "VIP НАСТАВНИЧЕСТВО",
        "badge": "МАКСИМАЛЬНЫЙ РЕЗУЛЬТАТ",
        "price": "18 900 ₽",
        "period": "В МЕСЯЦ",
        "recommendedGoal": "strength",
        "features": [
          "Все опции программы PRO PERFORMANCE",
          "Выход на пиковые силовые показатели",
          "Персональные видеоразборы раз в неделю",
          "Разбор лабораторных анализов и гормонов",
          "Приоритетный доступ к тренеру"
        ]
      }
    ]
  },
  "mike": {
    "slug": "mike",
    "brandTag": "FUNCTIONAL COACHING",
    "location": "ONLINE // WORLDWIDE",
    "name": "МИХАИЛ САМОЙЛОВ",
    "firstName": "МИХАИЛ",
    "lastName": "САМОЙЛОВ",
    "tagline": "BIOHACKING & CONDITIONING",
    "spec": "FUNCTIONAL METABOLIC SYSTEM",
    "heroImage": "https://images.unsplash.com/photo-1549476464-37392f717541?q=80&w=900&auto=format&fit=crop",
    "accentColor": "#0066FF",
    "accentDim": "rgba(0, 102, 255, 0.14)",
    "accentGlow": "rgba(0, 102, 255, 0.40)",
    "telegramUsername": "mike_biohack_fit",
    "scarcityBadge": "ЗАКРЫТЫЙ СПРИНТ: СВОБОДНО 3 СЛОТА",
    "stats": [
      {
        "label": "ОПЫТ",
        "value": "06+"
      },
      {
        "label": "ТРАНСФОРМАЦИЙ",
        "value": "210+"
      },
      {
        "label": "ИНДЕКС HRV",
        "value": "98%"
      }
    ],
    "cases": [
      {
        "id": 1,
        "name": "ИЛЬЯ С.",
        "tag": "БИОХАКИНГ & ТОНУС",
        "badge": "-14.0 КГ / ЭНЕРГИЯ X2",
        "beforeImage": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=600&auto=format&fit=crop",
        "afterImage": "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=600&auto=format&fit=crop",
        "description": "Перестройка офисного сидячего режима на функциональную выносливость и высокий фокус.",
        "initialStats": "94.0 КГ / ДНЕВНАЯ УСТАЛОСТЬ",
        "resultStats": "80.0 КГ / СТАБИЛЬНЫЙ ТОНУС"
      },
      {
        "id": 2,
        "name": "МАКСИМ Д.",
        "tag": "ЧИСТАЯ МАССА",
        "badge": "+5.2 КГ СУХОЙ МАССЫ",
        "beforeImage": "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=600&auto=format&fit=crop",
        "afterImage": "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=600&auto=format&fit=crop",
        "description": "Нормализация метаболизма, усвоения белка и построение атлетичного мышечного корсета.",
        "initialStats": "67.0 КГ / ЭКТОМОРФ",
        "resultStats": "72.2 КГ / АТЛЕТИЧНЫЙ ТОРС"
      }
    ],
    "tiers": [
      {
        "id": "tier-bio-audit",
        "code": "01",
        "name": "БИОХАК-СКРИНИНГ",
        "badge": "ТЕСТ-ДРАЙВ",
        "price": "3 490 ₽",
        "period": "РАЗОВО",
        "recommendedGoal": null,
        "features": [
          "Оценка питания и профиля микроэлементов",
          "Калибровка калоража под циркадные ритмы",
          "Схема добавок для восстановления и сна"
        ]
      },
      {
        "id": "tier-bio-shred",
        "code": "02",
        "name": "METABOLIC RESET 60D",
        "badge": "ТОП ВЫБОР",
        "price": "11 900 ₽",
        "period": "ЗА КУРС",
        "recommendedGoal": "cut",
        "features": [
          "Протокол сушки без потери функциональной массы",
          "Тренировочный план зоны пульса и HIIT",
          "Стратегия питания для постоянного фокуса",
          "Сопровождение в Telegram и мониторинг"
        ]
      },
      {
        "id": "tier-bio-vip",
        "code": "03",
        "name": "ELITE 1-ON-1 СОПРОВОЖДЕНИЕ",
        "badge": "ALL INCLUSIVE",
        "price": "24 900 ₽",
        "period": "В МЕСЯЦ",
        "recommendedGoal": "bulk",
        "features": [
          "Персональный коучинг с Михаилом Самойловым",
          "Ежедневный трекинг HRV, сна и восстановления",
          "Доступ в закрытое сообщество биохакеров",
          "Полная база данных протоколов долголетия"
        ]
      }
    ]
  }
};
