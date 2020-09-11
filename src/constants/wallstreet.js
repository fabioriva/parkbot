export const APS_ID = 82
export const APS_NAME = 'Wall Street, 600'
export const APS_LOCATION = 'Seattle&nbsp;&middot;&nbsp;🇺🇸'
export const CARDS = 266
export const STALLS = 276
export const STALL_STATUS = {
  FREE: 0,
  PAPA: 997, // 65533
  RSVD: 998, // 65534
  LOCK: 999 // 65535
}
export const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL.concat('/wallstreet')
export const WEBSOCK_URL = process.env.NEXT_PUBLIC_WEBSOCK_URL.concat('/wallstreet')
