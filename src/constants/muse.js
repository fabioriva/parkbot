export const APS_ID = 61
export const APS_NAME = 'The Muse'
export const APS_LOCATION = 'Miami&nbsp;&middot;&nbsp;Florida&nbsp;&middot;&nbsp;🇺🇸'
export const CARDS = 208
export const STALLS = 208
export const STALL_STATUS = {
  FREE: 0,
  PAPA: 997, // 65533
  RSVD: 998, // 65534
  LOCK: 999 // 65535
}
export const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL.concat('/muse')
export const WEBSOCK_URL = process.env.NEXT_PUBLIC_WEBSOCK_URL.concat('/muse')
