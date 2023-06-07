const APS_ = [
  { ns: "alumim", name: "Alumim, Tel Aviv, 🇮🇱" },
  { ns: "18017K", name: "18017K, Bangkok, 🇹🇭" },
  { ns: "bmc", name: "BMC, Mumbai, 🇮🇳" },
  { ns: "chandan", name: "Chandan Society, Mumbai, 🇮🇳" },
  { ns: "chiattone", name: "P.zzo Chiattone, Lugano, 🇨🇭" },
  { ns: "donini", name: "P.zzo Donini, Lugano, 🇨🇭" },
  { ns: "hdante", name: "Hotel Dante, Lugano, 🇨🇭" },
  { ns: "ironbank", name: "Iron Bank, Auckland, 🇳🇿" },
  { ns: "jhn", name: "Jameson House (North), Vancouver, 🇨🇦" },
  { ns: "jhs", name: "Jameson House (South), Vancouver, 🇨🇦" },
  { ns: "kg", name: "Kaveri Gold, Mumbai, 🇮🇳" },
  { ns: "knl", name: "Kamla Nagar (Left), New Delhi, 🇮🇳" },
  { ns: "knr", name: "Kamla Nagar (Right), New Delhi, 🇮🇳" },
  { ns: "mesacon", name: "Mesacon Jewel, Mumbai, 🇮🇳" },
  { ns: "muse", name: "The Muse, Miami, 🇺🇸" },
  { ns: "nhidcl", name: "NHIDCL, New Delhi, 🇮🇳" },
  { ns: "nyu", name: "Langone Medical Center, NY, 🇺🇸" },
  { ns: "parshvnath", name: "Parshvnath, New Delhi, 🇮🇳" },
  { ns: "qihe1", name: "Qihe School (Block 1), 🇨🇳" },
  { ns: "qihe2", name: "Qihe School (Block 2), 🇨🇳" },
  { ns: "smoritz", name: "Chiesa Carmen, Saint Moritz, 🇨🇭" },
  { ns: "teenmurty", name: "Teen Murty, Mumbai, 🇮🇳" },
  { ns: "trumpeldor", name: "Trumpeldor, Tel Aviv, 🇮🇱" },
  { ns: "vl", name: "Vaibhab Lakshmi, Mumbai, 🇮🇳" },
  { ns: "wallstreet", name: "Spire, Seattle, 🇺🇸" },
  { ns: "washingtonblvd", name: "Washington Blvd 8888, LA, 🇺🇸" },
  { ns: "xian", name: "Xian, 🇨🇳" },
];

export const aps_ = (aps) => APS_.find((a) => aps === a.ns);

/**
 * Old
 
const APS = [
  'bmc',
  'chandan',
  'ironbank',
  'nhidcl',
  'trumpeldor',
  'vl',
  'wallstreet',
  'washingtonblvd'
]

export const aps = aps => APS.indexOf(aps)

export const apsPaths = async (locales, args) => {
  return APS.flatMap(aps =>
    locales.map(locale => ({ params: { aps, ...args }, locale }))
  )
}

*/
