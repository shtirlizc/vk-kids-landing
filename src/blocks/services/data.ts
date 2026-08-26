export enum CategoryId {
  Benefits = "benefits",
  Events = "events",
  Health = "health",
  Pregnancy = "pregnancy",
  Parenting = "parenting",
  Kids = "kids",
}

type ActionType = { label: string };

export interface Card {
  title: string;
  description: string;
  label: string;
  image: string;
  action: ActionType &
    ({ type: "link"; href: string } | { type: "tab"; tabId: CategoryId });
}

export const categories: Record<CategoryId, string> = {
  [CategoryId.Benefits]: "Льготы",
  [CategoryId.Events]: "Мероприятия",
  [CategoryId.Health]: "Здоровье",
  [CategoryId.Pregnancy]: "Беременность",
  [CategoryId.Parenting]: "Родительство",
  [CategoryId.Kids]: "Детям",
};

const benefits: Card[] = [
  {
    title: "ДМС для детей и родственников",
    description: `
        <p>VK полностью оплачивает ДМС для детей сотрудников до 18 лет: профилактика, диагностика и основные медицинские услуги. Для супругов, родителей и совершеннолетних детей можно оформить корпоративный полис по специальной стоимости.</p>
    `,
    label: "ДОСТУП",
    image: "1",
    action: {
      label: "Подробнее — во вкладке «Здоровье»",
      type: "tab",
      tabId: CategoryId.Health,
    },
  },
  {
    title: "Материальная  помощь от компании",
    description: `
      <p>При рождении или усыновлении ребёнка компания выплачивает 50 000 ₽, при смерти супруга, ребёнка или родителя — 100 000 ₽. Сотрудницы на больничном по беременности и родам могут получить единовременную выплату в размере месячной зарплаты.</p>
      <p>Программа доступна штатным сотрудникам. Заявление  и документы можно подать в течение года после события.  Если оба родителя работают в VK, выплату при рождении  получает один из них.</p>
      <p>Деньги поступают на зарплатную карту: при рождении  или утрате — в течение месяца, по беременности и родам —  с ближайшей зарплатой.</p>
    `,
    label: "Программа",
    image: "1",
    action: {
      label: "Подробнее в Интранете",
      type: "link",
      href: "https://home.vk.team/blog/health/materialnaya-pomosch/",
    },
  },
  {
    title: "Aladdin",
    description: `
      <p>На Aladdin доступны товары, сертификаты и услуги для всей семьи: детские покупки, образование, спорт, хобби, медицина, развлечения и совместный досуг.</p>
      <p>Можно выбрать сертификат в детский или книжный магазин, поездку в лагерь, билет на шоу, онлайн-курс, занятия с детьми  или подписку на развивающий сервис.</p>
      <p>Как начать пользоваться платформой, узнайте на странице программы Код заботы.</p>
    `,
    label: "ДОСТУП",
    image: "1",
    action: {
      label: "Перейти на Aladdin",
      type: "link",
      href: "https://vk.aladdin.store/",
    },
  },
  {
    title: "Газпром Бонус",
    description: `
      <p>Бесплатный бизнес-тариф для сотрудников VK: более 180 партнёрских предложений. Подписка активируется автоматически раз в две недели по номеру телефона из вашего профиля  в Интранете.</p>
      <p>Скидки распространяются на продукты, доставку, дом, здоровье, страхование, детские товары, развлечения, обучение,  спорт, путешествия и отдых. Есть и скидки на рестораны, маркетплейсы, транспорт, мобильную связь, подарки и другие услуги,  полезные всей семье.</p>
      <p>Это отдельный тариф, не связанный с банковской подпиской Газпром Бонус «Плюс». Предложение доступно всем  и не привязано к зарплатному проекту Газпромбанка.</p>
    `,
    label: "подписка",
    image: "1",
    action: {
      label: "Перейти на Газпром Бонус",
      type: "link",
      href: "https://gazprombonus.ru/",
    },
  },
  // {
  //   title: "",
  //   description: `
  //   `,
  //   label: "",
  //   image: "",
  //   action: { type: "link", href: "" },
  // },
  // {
  //   title: "",
  //   description: `
  //   `,
  //   label: "",
  //   image: "",
  //   action: { type: "link", href: "" },
  // },
  // {
  //   title: "",
  //   description: `
  //   `,
  //   label: "",
  //   image: "",
  //   action: { type: "link", href: "" },
  // },
  // {
  //   title: "",
  //   description: `
  //   `,
  //   label: "",
  //   image: "",
  //   action: { type: "link", href: "" },
  // },
  // {
  //   title: "",
  //   description: `
  //   `,
  //   label: "",
  //   image: "",
  //   action: { type: "link", href: "" },
  // },
  // {
  //   title: "",
  //   description: `
  //   `,
  //   label: "",
  //   image: "",
  //   action: { type: "link", href: "" },
  // },
  // {
  //   title: "",
  //   description: `
  //   `,
  //   label: "",
  //   image: "",
  //   action: { type: "link", href: "" },
  // },
  // {
  //   title: "",
  //   description: `
  //   `,
  //   label: "",
  //   image: "",
  //   action: { type: "link", href: "" },
  // },
];
const events: Card[] = [
  {
    title: "",
    description: `
    `,
    label: "",
    image: "",
    action: { label: "", type: "link", href: "" },
  },
];
const health: Card[] = [
  {
    title: "",
    description: `
    `,
    label: "",
    image: "",
    action: { label: "", type: "link", href: "" },
  },
];
const pregnancy: Card[] = [
  {
    title: "",
    description: `
    `,
    label: "",
    image: "",
    action: { label: "", type: "link", href: "" },
  },
];
const parenting: Card[] = [
  {
    title: "",
    description: `
    `,
    label: "",
    image: "",
    action: { label: "", type: "link", href: "" },
  },
];
const kids: Card[] = [
  {
    title: "",
    description: `
    `,
    label: "",
    image: "",
    action: { label: "", type: "link", href: "" },
  },
];

export const services: Record<CategoryId, Card[]> = {
  [CategoryId.Benefits]: benefits,
  [CategoryId.Events]: events,
  [CategoryId.Health]: health,
  [CategoryId.Pregnancy]: pregnancy,
  [CategoryId.Parenting]: parenting,
  [CategoryId.Kids]: kids,
};
