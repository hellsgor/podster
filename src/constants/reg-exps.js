export const REG_EXPS = {
  INN: {
    legal_person: /^[0-9]{10}$/,
    other: /^[0-9]{12}$/,
  },
  EMAIL: /[a-z0-9]+@[a-z0-9]+\.[a-z0-9]+/i,
  PASSWORD: /^(?=.*[0-9])(?=.*[A-Z])\w{8,30}$/m,
};