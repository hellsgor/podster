export const USER_REG_TYPES = {
  NATURAL_PERSON: {
    VALUE: 'natural_person',
  },
  LEGAL_PERSON: {
    VALUE: 'legal_person',
    CONTROLS_LABELS: {
      'user-name': 'Наименование',
      'user-ogrn': 'ОГРН',
    },
  },
  INDIVIDUAL_ENTREPRENEUR: {
    VALUE: 'individual_entrepreneur',
    CONTROLS_LABELS: {
      'user-name': 'ФИО ИП',
      'user-ogrn': 'ОГРНИП',
    },
  },
};
