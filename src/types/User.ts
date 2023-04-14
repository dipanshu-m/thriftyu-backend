export interface User {
  name: String;
  email: String;
  password: String;
  transactions: Array<payment>;
}

export interface payment {
  userID: String;
  from: String;
  type: String;
  category: String;
}
