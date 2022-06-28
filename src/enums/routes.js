export default [
  { title: 'Главная', value: 'Dashboard', icon: 'mdi-home-city', route: 'Dashboard' },
  { title: 'Профиль', value: 'Profile', icon: 'mdi-account', route: 'Profile' },
  { title: 'Клиенты', value: 'Clients', icon: 'mdi-account-group', route: 'Clients' },
  { title: 'Агенты', value: 'Partners', icon: 'mdi-account-tie', route: 'Partners' },
  { title: 'Финансы', value: 'Finance', icon: 'mdi-credit-card', route: 'Finance' },
  {
    title: 'Помощь',
    value: 'Support',
    icon: 'mdi-frequently-asked-questions',
    route: 'Support',
    subRouters: [
      { title: 'Чат', value: 'Finance', icon: 'mdi-credit-card', route: 'Finance' },
      { title: 'Информация', value: 'Finance', icon: 'mdi-credit-card', route: 'Finance' },
    ],
  },
  { title: 'Выход', value: 'Auth', icon: 'mdi-exit-to-app', route: 'Auth' },
]
