export const SettingsOptions = [
  {
    icon: 'account_circle',
    navName: 'Profile Details',
    route: 'profile-details',
  },
  {
    icon: 'lock',
    navName: 'login & security',
    route: 'login-security',
  },
  {
    icon: 'monetization_on',
    navName: 'Payment Options',
    route: 'payment-options',
  },
  {
    icon: 'notification_important',
    navName: 'notifications',
    route: 'notifications',
  },
  {
    icon: 'devices',
    navName: 'Device Options',
    route: 'device-options',
  },
  // {
  //   icon: 'settings_applications',
  //   navName: 'Other Settings',
  //   route: 'device-options',
  // },
];

export const paymentInfo = [
  {
    card: 'visa',
    fullInfo: 'ending in 0003',
    expires: '03/2020',
    status: 'default',
  },
  {
    card: 'maestro',
    fullInfo: 'ending in 1234',
    expires: '08/2021',
    status: 'none',
  },
  {
    card: 'mastercard',
    fullInfo: 'ending in 3342',
    expires: '05/2025',
    status: 'none',
  },
  {
    card: 'skrill',
    fullInfo: 'ending in 3436',
    expires: '11/2020',
    status: 'none',
  },
  {
    card: 'american-express',
    fullInfo: 'ending in 2212',
    expires: '05/2022',
    status: 'none',
  },
];
