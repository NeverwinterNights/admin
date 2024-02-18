import { LocaleType } from "./ru";

export const en: LocaleType = {
  test: "Lorem Ipsum is simply dummy text of the printing",
  ok: "OK",
  yes: "Yes",
  no: "No",
  showMore: "Show more",
  hide: "Hide",
  languageSelect: {
    russian: "Russian",
    english: "English",
  },

  errors: {
    noResponse: "Server does not response",
    requestFailed: "Request Failed",
    loginIncorrectData: "The email or password are incorrect. Try again please",
    loginFailed: "Login Failed",
    loginIncorrectPassword: `The password is incorrect. Try again please`,
    regexUsername: "Username must contain  0-9, a-z, A-Z, . _ -",
    regexFirstname: "Firstname must contain a-z, A-Z",
    regexLastname: "Lastname must contain a-z, A-Z",
    regexAboutMe: "Field must contain 0-9, a-z, A-Z, . _ -",
    nonemptyUsername: "Enter your Username",
    nonemptyFirstname: "Enter your name",
    nonemptyLastname: "Enter your last name",
    // minUsername: 'Username must be at least 6 characters',
    minUsername: (min: number) => `Username must be at least ${min} characters`,
    maxUsername: (max: number) => `Maximum number of characters  ${max}`,
    maxFirstname: (max: number) =>
      `The maximum length of the name must not exceed ${max} characters`,
    maxLastname: (max: number) =>
      `The maximum length of the last name must not exceed ${max} characters`,
    regexEmail: "The email must match the format example@example.com",
    nonemptyEmail: "Enter your email",
    nonemptyPassword: "Enter your password",
    nonemptyConfirm: "Confirm your password",
    regexPasswordMustContain:
      "Password must contain 0-9, a-z, A-Z, ! \" # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \\ ] ^" +
      " _` { | } ~",
    minPassword: (min: number) => `Password must be at least ${min} characters`,
    maxPassword: "Maximum number of characters 20",
    passwordsMustMatch: "The passwords must match",
    emailNotFound: "UserComponent with this email doesn't exist",
    emailExists: "UserComponent with this email is already registered",
    usernameExists: "UserComponent with this username is already registered",
    whereAreYouLive: "Please indicate which city you live in",
    maxLengthPost: "Max number of characters 500",
  },
  auth: {
    signIn: "Sign In",
    emailLabel: "Email",
    passwordLabel: "Password",
    signUp: "",
  },
  sidebars: {
    users: "Users",
    statistics: "Statistics",
    payments: "Payments list",
    posts: "Posts list",
  },
  userList: {
    blocked: "Blocked",
    notBlocked: "Not Blocked",
    notSelected: "Not selected",
    search: "Search",
    userID: "UserComponent ID",
    username: "Username",
    profileLink: "Profile link",
    dateAdded: "Date added",
    banUser: "Ban user",
    all: "All users",
    areYouBanUser(name: string) {
      return `Are you sure to ban this user, <1>${name}?</1>`;
    },
  },
  pagination: {
    show: "show",
    perPage: "per page",
  },
  dropdown: {
    delete: "Delete UserComponent",
    ban: "Ban in the system",
    more: "More Information",
  },
  components: {
    selectPlaceholder: "Select Box",
  },
  banModal: {
    reasonForBan: "Reason for ban",
    bad: "Bad behavior",
    advertising: "Advertising placement",
    another: "Another reason",
  },
  deleteModal: {
    deleteUser: "Delete user",
  },
  user: {
    backToUsersList: "Back to Users List",
  },
};
