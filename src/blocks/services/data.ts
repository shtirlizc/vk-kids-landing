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
    image: "2",
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
      <p>Как начать пользоваться платформой, узнайте на странице программы <a href="https://home.vk.team/kod-zaboty/#how-it-works:~:text=на%C2%A0VK%20Знакомства-,Гибкие%20льготы,-%2B15%25%20для%C2%A0участников" target="_blank">Код заботы.</a></p>
    `,
    label: "ДОСТУП",
    image: "3",
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
      <p>Это отдельный тариф, не связанный с банковской подпиской Газпром Бонус «Плюс». Предложение доступно всем и не привязано к <a href="https://home.vk.team/pages/page/gazprombank" target="_blank">зарплатному проекту Газпромбанка.</a></p>
    `,
    label: "подписка",
    image: "4",
    action: {
      label: "Перейти на Газпром Бонус",
      type: "link",
      href: "https://gazprombonus.ru/",
    },
  },
  {
    title: "BestBenefits",
    description: `
      <p>Скидки и специальные предложения от партнёров для сотрудников VK. В каталоге регулярно появляются новинки, эксклюзивы для команды и премиальные варианты. Предложения действуют до марта 2027 года.</p>
      <p>Сервис поможет найти выгодные варианты для семьи, повседневных покупок, отдыха, обучения, здоровья и развлечений.</p>
      <p>
        <strong>Как подключить</strong>
        <br />
        Зарегистрируйтесь <a href="https://bestbenefits.ru/register" target="_blank">на сайте</a> или в приложении по корпоративной почте и подтвердите вход кодом из письма.
      </p>
    `,
    label: "ДОСТУП",
    image: "5",
    action: {
      label: "Перейти на BestBenefits",
      type: "link",
      href: "https://bestbenefits.ru/",
    },
  },
  {
    title: "",
    description: `
    `,
    label: "",
    image: "",
    action: { type: "link", href: "" },
  },
  {
    title: "Синхронизация",
    description: `
      <p>Корпоративная подписка на образовательную платформу с материалами о культуре и мышлении. На курсы вне подписки действует скидка 20% по промокоду VKSYNCHRO.</p>
      <p>Советуем присмотреться к разделу «Психология»: в нём собраны курсы о самопознании, эмоциональной устойчивости, общении  и построении здоровых отношений. Они помогут лучше понимать себя, партнёра и ребёнка, справляться со стрессом и бережнее относиться друг к другу.</p>
    `,
    label: "подписка",
    image: "1",
    action: {
      label: "Перейти на Синхронизацию",
      type: "link",
      href: "https://app.synchronize.ru/corporate/2/session/new",
    },
  },
  {
    title: "",
    description: `
    `,
    label: "",
    image: "",
    action: { type: "link", href: "" },
  },
  {
    title: "",
    description: `
    `,
    label: "",
    image: "",
    action: { type: "link", href: "" },
  },
  {
    title: "",
    description: `
    `,
    label: "",
    image: "",
    action: { type: "link", href: "" },
  },
  {
    title: "",
    description: `
    `,
    label: "",
    image: "",
    action: { type: "link", href: "" },
  },
  {
    title: "",
    description: `
    `,
    label: "",
    image: "",
    action: { type: "link", href: "" },
  },
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
