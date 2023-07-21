import {appIcons} from '../assets';

const plans = [
  {
    id: 0,
    planType: 'Basic',
    planPrice: '10',
    paymentPeriod: '1 Month',
    watchlist: '5 item',
    planChange: 'No',
    selcted: false,
  },
  {
    id: 1,
    planType: 'Standard',
    planPrice: '20',
    paymentPeriod: '3 Month',
    watchlist: '10 item',
    planChange: 'Yes',
    selected: true,
  },
  {
    id: 2,
    planType: 'Premium',
    planPrice: '30',
    paymentPeriod: '6 Month',
    watchlist: '15 item',
    planChange: 'No',
    selcted: false,
  },
];

const financialPlan = [
  {
    id: 0,
    header: 'Annual: FY 2021',
    selected: '',
    expanded: false,
    options: [
      {
        id: 0,
        value: 'FY 2021',
      },
      {
        id: 1,
        value: 'FY 2021',
      },
      {
        id: 2,
        value: 'FY 2021',
      },
      {
        id: 3,
        value: 'FY 2021',
      },
    ],
  },
  {
    id: 1,
    header: 'Quaterly: 2021 Q4',
    selected: '',
    expanded: true,
    options: [
      {
        id: 0,
        value: '2021  Q4',
      },
      {
        id: 1,
        value: '2021  Q3',
      },
      {
        id: 2,
        value: '2021  Q2',
      },
      {
        id: 3,
        value: '2021  Q1',
      },
    ],
  },
];

const ratioDetails = [
  {
    id: 0,
    name: 'BTU',
    value: +14.5,
    percent: +96.73,
  },
  {
    id: 1,
    name: 'UEC',
    value: +0.24,
    percent: +5.42,
  },
];

const timeFilters = [
  {
    id: 0,
    value: '5 minutes',
    selected: true,
  },
  {
    id: 1,
    value: '1 day',
    selected: false,
  },
  {
    id: 2,
    value: '5 days',
    selected: false,
  },
  {
    id: 3,
    value: '1 month',
    selected: false,
  },
  {
    id: 4,
    value: '3 months',
    selected: false,
  },
  {
    id: 5,
    value: '52 weeks',
    selected: false,
  },
];

const marketValues = [
  {
    id: 0,
    image: appIcons.smart,
    title: 'SMFL',
    description: 'Smart for Life',
    preValuePer: +73.1,
    preValue: 1.61,
  },
  {
    id: 1,
    image: appIcons.smart,
    title: 'ALZN',
    description: 'Alzamend Ngrok',
    preValuePer: +26.13,
    preValue: 1.4,
  },
  {
    id: 2,
    image: appIcons.smart,
    title: 'ENSV',
    description: 'Enservco',
    preValuePer: +17.99,
    preValue: 4.0,
  },
  {
    id: 3,
    image: appIcons.smart,
    title: 'SPCB',
    description: 'Supercom',
    preValuePer: +15.99,
    preValue: 0.8021,
  },
  {
    id: 4,
    image: appIcons.smart,
    title: 'WNW',
    description: 'Meiwu Technology',
    preValuePer: +15.99,
    preValue: 0.8031,
  },
];

const watchlist = [
  {
    id: 0,
    icon: appIcons.apple,
    name: 'GJI',
    company: 'DOW JONES',
    percent: +73.1,
    value: 1.61,
    points: '34,345.56',
  },
  {
    id: 1,
    icon: appIcons.google,
    name: 'IXIC',
    company: 'NASDAQ',
    percent: -26.13,
    value: -1.4,
    points: '13,865.65',
  },
  {
    id: 2,
    icon: appIcons.apple,
    name: 'APPL',
    company: 'Apple Inc',
    value: +26.13,
    percent: 1.4,
    points: '172.42',
  },
  {
    id: 3,
    icon: appIcons.google,
    name: 'GOOG',
    company: 'Alphabet Inc',
    value: -26.13,
    percent: -1.4,
    points: '2,703.65',
  },
];

export {plans, financialPlan, ratioDetails, timeFilters, marketValues,watchlist};
