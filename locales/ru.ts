export const ru = {
  test: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати ',
  ok: "OK",
  yes: "Да",
  no: "Нет",
  showMore: "Показать еще",
  hide: "Спрятать",
  languageSelect: {
    russian: "Русский",
    english: "Английский",
  },

  errors: {
    noResponse: "Сервер не отвечает",
    requestFailed: "Ошибка при выполнении запроса",
    loginIncorrectData: "Неправильный email или пароль",
    loginFailed: "Ошибка входа",
    loginIncorrectPassword: `Неправильный пароль. Попробуйте ещё раз`,
    regexUsername: "Имя пользователя должно содержать 0-9, a-z, A-Z, . _ -",
    regexFirstname: "Имя должно содержать а-я, А-Я",
    regexLastname: "Фамилия должна содержать а-я, А-Я",
    regexAboutMe: "Поле должно содержать 0-9, a-z, A-Z, . _ -",
    nonemptyUsername: "Введите имя пользователя",
    nonemptyFirstname: "Введите имя",
    nonemptyLastname: "Введите фамилию",
    minUsername: (min: number) =>
      `Длина имени пользователя должна быть не менее ${min} символов`,
    maxUsername: (max: number) =>
      `Максимальная длина имени пользователя не должна превышать  ${max} символов`,
    maxFirstname: (max: number) =>
      `Максимальная длинна имени не должна превышать  ${max} символов`,
    maxLastname: (max: number) =>
      `Максимальная длина фамилии не должна превышать  ${max} символов`,
    regexEmail:
      "Электронная почта должна соответствовать типу example@example.com",
    nonemptyEmail: "Введите адрес электронной почты",
    nonemptyPassword: "Введите пароль",
    nonemptyConfirm: "Повторно введите пароль",
    regexPasswordMustContain:
      "Пароль должен содержать следующие символы 0-9, a-z, A-Z, ! \" # $ % & ' ( ) * + , - . / :" +
      " ; < = > ? @ [ \\ ] ^ _` { | } ~",
    minPassword: (min: number) =>
      `Пароль должен должен быть длиной не менее ${min} символов`,
    maxPassword: "Пароль должен быть не более 20 символов",
    passwordsMustMatch: "Пароли должны совпадать",
    emailNotFound: "Пользователь с такими электронным адресом не существует",
    emailExists: "Пользователь с такой электронной почтой уже существует",
    usernameExists: "Пользователь с таким именем уже существует",
    whereAreYouLive: "Укажите в каком городе вы живете",
    maxLengthPost: "Максимальное количество символов для поста равно 500",
    ban: "Укажите причину блокировки",
  },
  auth: {
    signIn: "Войти",
    emailLabel: "Введите емайл",
    passwordLabel: "Введите пароль",
    signUp: "Войти",
  },
  sidebars: {
    users: "Пользователи",
    statistics: "Статистика",
    payments: "Платежи",
    posts: "Список постов",
  },
  userList: {
    blocked: "Заблокированные",
    notBlocked: "Не заблокированные",
    notSelected: "Не выбрано",
    search: "Поиск",
    userID: "Номер пользователя",
    username: "Имя пользователя",
    profileLink: "Ссылка на профиль",
    dateAdded: "Дата создания",
    banUser: "Заблокировать пользователя",
    all: "Все пользователи",
    areYouBanUser(name: string) {
      return `Вы уверенны, что хотите забанить пользователя <1>${name}?</1>`;
    },
    areYouUnBanUser(name: string) {
      return `Вы уверенны, что хотите разбанить пользователя <1>${name}?</1>`;
    },
  },
  pagination: {
    show: "показать",
    perPage: "на странице",
  },
  components: {
    selectPlaceholder: "Выберете опцию",
  },
  dropdown: {
    delete: "Удалить",
    ban: "Заблокировать",
    more: "Больше информации",
    unBan: "Разбанить",
  },
  banModal: {
    reasonForBan: "Причина блокировки",
    bad: "Плохое поведение",
    advertising: "Размещение рекламы",
    another: "Другая причина",
  },
  deleteModal: {
    deleteUser: "Удалить пользователя",
  },
  user: {
    backToUsersList: "Назад к списку пользователей",
    userID: "Номер пользователя",
    profileCreationDate: "Дата регистрации",
    uploadedPhotos: "Загруженные фотографии",
    payments: "Платежи",
    followers: "Подписчики",
    following: "Читатели",
    dateOfPayment: "Дата платежа",
    endDateOfSubscription: "Дата завершения подписки",
    amount: "Сумма $",
    subscriptionType: "Тип подписки",
    paymentType: "Тип платежа",
  },
  data: {
    lessMinuteAgo: "Меньше минуты назад",
    minute: "минуту",
    minutes: "минуты",
    minuteU: "минуту",
    minuteB: "минуты",
    minut: "минут",
    ago: "назад",
    hour: "час",
    hoursA: "часа",
    hours21: "час",
    hours: "часов",
    day: "день",
    days2: "дня",
    days: "дней",
    more2Weeks: "Более двух недель назад",
  },
  payments: {
    autoupdate: "Автообновление",
    subscription: "Подписка",
    paymentMethod: "Метод платежа",
    stripe: "Страйп",
    payPal: "ПэйПал",
    monthly: "Месячная",
    day: "Дневная",
    weekly: "Недельная",
  },
};

export type LocaleType = typeof ru;
