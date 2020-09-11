export const APS_ID = 68
export const APS_NAME = 'Langone Medical Center'
export const APS_LOCATION = 'New York&nbsp;&middot;&nbsp;🇺🇸'
export const CARDS = 119
export const STALLS = 121
export const STALL_STATUS = {
  FREE: 0,
  PAPA: 997, // 65533
  RSVD: 998, // 65534
  LOCK: 999 // 65535
}
export const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL.concat('/nyu')
export const WEBSOCK_URL = process.env.NEXT_PUBLIC_WEBSOCK_URL.concat('/nyu')