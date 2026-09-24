export const brand = {
  name: "DAMU TRAJECTORY",
  kazakh: "Даму траекториясы",
  author: "ALIKHAN LESKHAN",
  taglineKk: "Сенің жолың дайын емес. Оны өзің құрасың.",
  taglineEn: "Your path isn’t ready-made. You build it.",
  taglineRu: "Твой путь не готов заранее. Ты строишь его сам.",
};

export type Lang = "kk" | "ru" | "en";

export const pullKeys = [
  "UNDERSTAND",
  "CREATE",
  "EXPLORE",
  "BUILD",
  "EXPRESS",
  "SOLVE",
] as const;

export const developKeys = [
  "KNOWLEDGE",
  "CONFIDENCE",
  "CREATIVITY",
  "COMMUNICATION",
  "TECHNICAL SKILLS",
  "LEADERSHIP",
] as const;

export const tryKeys = [
  "START SOMETHING",
  "LEARN SOMETHING",
  "MEET PEOPLE",
  "JOIN A TEAM",
  "MAKE A PROJECT",
  "EXPLORE A NEW FIELD",
] as const;

export const endingKeys = [
  "DISCOVERY",
  "NEW IDEA",
  "BUILD",
  "MOMENTUM",
  "CONNECTION",
  "DIRECTION",
] as const;

export const labels: Record<
  Lang,
  {
    pull: Record<(typeof pullKeys)[number], string>;
    develop: Record<(typeof developKeys)[number], string>;
    try: Record<(typeof tryKeys)[number], string>;
    ending: Record<(typeof endingKeys)[number], string>;
    title: Record<(typeof pullKeys)[number], string>;
  }
> = {
  kk: {
    pull: {
      UNDERSTAND: "ТҮСІНУ",
      CREATE: "ЖАСАУ",
      EXPLORE: "ЗЕРТТЕУ",
      BUILD: "ҚҰРУ",
      EXPRESS: "БІЛДІРУ",
      SOLVE: "ШЕШУ",
    },
    develop: {
      KNOWLEDGE: "БІЛІМ",
      CONFIDENCE: "СЕНІМ",
      CREATIVITY: "ШЫҒАРМАШЫЛЫҚ",
      COMMUNICATION: "ҚАРЫМ-ҚАТЫНАС",
      "TECHNICAL SKILLS": "ТЕХНИКАЛЫҚ ДАҒДЫ",
      LEADERSHIP: "КӨШБАСШЫЛЫҚ",
    },
    try: {
      "START SOMETHING": "БІР НӘРСЕНІ БАСТАУ",
      "LEARN SOMETHING": "БІР НӘРСЕНІ ҮЙРЕНУ",
      "MEET PEOPLE": "АДАМДАРМЕН ТАНЫСУ",
      "JOIN A TEAM": "КОМАНДАҒА ҚОСЫЛУ",
      "MAKE A PROJECT": "ЖОБА ЖАСАУ",
      "EXPLORE A NEW FIELD": "ЖАҢА САЛАНЫ АШУ",
    },
    ending: {
      DISCOVERY: "АШЫЛЫМ",
      "NEW IDEA": "ЖАҢА ИДЕЯ",
      BUILD: "ҚҰРЫЛЫМ",
      MOMENTUM: "ҚОЗҒАЛЫС",
      CONNECTION: "БАЙЛАНЫС",
      DIRECTION: "БАҒЫТ",
    },
    title: {
      UNDERSTAND: "ҚЫЗЫҚҚАН АҚЫЛ",
      CREATE: "ЖАСАУШЫ ЖОЛЫ",
      EXPLORE: "АШЫҚ КЕҢІСТІК",
      BUILD: "ҚҰРУШЫ СЫЗЫҒЫ",
      EXPRESS: "ДАУЫС СЫЗЫҒЫ",
      SOLVE: "МӘСЕЛЕ СЫЗЫҒЫ",
    },
  },
  ru: {
    pull: {
      UNDERSTAND: "ПОНЯТЬ",
      CREATE: "СОЗДАВАТЬ",
      EXPLORE: "ИССЛЕДОВАТЬ",
      BUILD: "СТРОИТЬ",
      EXPRESS: "ВЫРАЖАТЬ",
      SOLVE: "РЕШАТЬ",
    },
    develop: {
      KNOWLEDGE: "ЗНАНИЯ",
      CONFIDENCE: "УВЕРЕННОСТЬ",
      CREATIVITY: "КРЕАТИВ",
      COMMUNICATION: "ОБЩЕНИЕ",
      "TECHNICAL SKILLS": "ТЕХНАВЫКИ",
      LEADERSHIP: "ЛИДЕРСТВО",
    },
    try: {
      "START SOMETHING": "НАЧАТЬ ДЕЛО",
      "LEARN SOMETHING": "НАУЧИТЬСЯ",
      "MEET PEOPLE": "ПОЗНАКОМИТЬСЯ",
      "JOIN A TEAM": "ВОЙТИ В КОМАНДУ",
      "MAKE A PROJECT": "СДЕЛАТЬ ПРОЕКТ",
      "EXPLORE A NEW FIELD": "НОВАЯ СФЕРА",
    },
    ending: {
      DISCOVERY: "ОТКРЫТИЕ",
      "NEW IDEA": "НОВАЯ ИДЕЯ",
      BUILD: "СБОРКА",
      MOMENTUM: "РАЗГОН",
      CONNECTION: "СВЯЗЬ",
      DIRECTION: "НАПРАВЛЕНИЕ",
    },
    title: {
      UNDERSTAND: "ЛЮБОПЫТНЫЙ УМ",
      CREATE: "ПУТЬ МАСТЕРА",
      EXPLORE: "ОТКРЫТОЕ ПОЛЕ",
      BUILD: "ЛИНИЯ СТРОИТЕЛЯ",
      EXPRESS: "ЛИНИЯ ГОЛОСА",
      SOLVE: "ЛИНИЯ ЗАДАЧ",
    },
  },
  en: {
    pull: {
      UNDERSTAND: "UNDERSTAND",
      CREATE: "CREATE",
      EXPLORE: "EXPLORE",
      BUILD: "BUILD",
      EXPRESS: "EXPRESS",
      SOLVE: "SOLVE",
    },
    develop: {
      KNOWLEDGE: "KNOWLEDGE",
      CONFIDENCE: "CONFIDENCE",
      CREATIVITY: "CREATIVITY",
      COMMUNICATION: "COMMUNICATION",
      "TECHNICAL SKILLS": "TECHNICAL SKILLS",
      LEADERSHIP: "LEADERSHIP",
    },
    try: {
      "START SOMETHING": "START SOMETHING",
      "LEARN SOMETHING": "LEARN SOMETHING",
      "MEET PEOPLE": "MEET PEOPLE",
      "JOIN A TEAM": "JOIN A TEAM",
      "MAKE A PROJECT": "MAKE A PROJECT",
      "EXPLORE A NEW FIELD": "EXPLORE A NEW FIELD",
    },
    ending: {
      DISCOVERY: "DISCOVERY",
      "NEW IDEA": "NEW IDEA",
      BUILD: "BUILD",
      MOMENTUM: "MOMENTUM",
      CONNECTION: "CONNECTION",
      DIRECTION: "DIRECTION",
    },
    title: {
      UNDERSTAND: "CURIOUS MIND",
      CREATE: "MAKER PATH",
      EXPLORE: "OPEN FIELD",
      BUILD: "BUILDER LINE",
      EXPRESS: "VOICE LINE",
      SOLVE: "PROBLEM LINE",
    },
  },
};

export const firstSteps = [
  "БІР НӘРСЕНІ ҮЙРЕНУ",
  "БІР СҰРАҚ ҚОЮ",
  "ЖАҢАНЫ СЫНАП КӨРУ",
  "БІРЕумен СӨЙЛЕСУ",
  "КОМАНДАҒА ҚОСЫЛУ",
  "БІР НӘРСЕ ЖАСАУ",
  "ИДЕЯМЕН БӨЛІСУ",
  "ЗЕРТТЕУ",
];

export const stepEchoes = [
  "ЖАҚСЫ БАСТАУ.",
  "БҰЛ ДА ЕСЕПТЕЛЕДІ.",
  "ӘР ЖОЛ КІШКЕНТАЙДАН БАСТАЛАДЫ.",
  "БҮГІНГЕ ОСЫ ЖЕТКІЛІКТІ.",
];

export const constellationLabels = [
  "ҒЫЛЫМ",
  "ДЕБАТ",
  "ӨНЕР",
  "СПОРТ",
  "ТЕХНОЛОГИЯ",
  "МЕДИА",
  "ЗЕРТТЕУ",
  "КӨШБАСШЫЛЫҚ",
  "БИЗНЕС",
  "ТІЛДЕР",
  "ДИЗАЙН",
  "ҚАУЫМ",
];

export const sampleTrajectories = [
  "Физика → код → алғашқы жоба.",
  "Дебат → MUN → көпшілік алдында сөйлеу.",
  "Сурет → дизайн → анимация.",
  "Спорт → тәртіп → көшбасшылық.",
  "Ғарышқа қызығу → зерттеу клубы.",
  "Сабақтағы бір сұрақ → кішкентай тәжірибе.",
  "Бір әңгіме → команда.",
  "Сәтсіз әрекет → жақсырақ екінші әрекет.",
];

export function pathIdFromChoices(a: string, b: string, c: string) {
  const raw = `${a}|${b}|${c}`;
  let h = 2166136261;
  for (let i = 0; i < raw.length; i++) {
    h ^= raw.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  const n = Math.abs(h) % 9000;
  return `DT-${String(n + 1000).padStart(4, "0")}`;
}

export function endingFromChoices(a: string, c: string) {
  const i = (a.length + c.length) % endingKeys.length;
  return endingKeys[i];
}

export const storyCopy: Record<
  Lang,
  { yours: string; start: string; scan: string; langName: string }
> = {
  kk: {
    yours: "СЕНІҢ ТРАЕКТОРИЯҢ",
    start: "Жолың осы жерден басталады.",
    scan: "ДАМУ ТРАЕКТОРИЯСЫ",
    langName: "Қазақша",
  },
  ru: {
    yours: "ТВОЯ ТРАЕКТОРИЯ",
    start: "Путь начинается здесь.",
    scan: "DAMU TRAJECTORY",
    langName: "Русский",
  },
  en: {
    yours: "YOUR TRAJECTORY",
    start: "Your trajectory starts here.",
    scan: "DAMU TRAJECTORY",
    langName: "English",
  },
};
