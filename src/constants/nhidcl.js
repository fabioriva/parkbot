
export const APS_ID = 68
export const APS_NAME = 'NHIDCL'
export const APS_LOCATION = 'New Delhi&nbsp;&middot;&nbsp;🇮🇳'
export const CARDS = 110
export const STALLS = 112
export const STALL_STATUS = {
  FREE: 0,
  PAPA: 997, // 65533
  RSVD: 998, // 65534
  LOCK: 999 // 65535
}
export const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL.concat('/nhidcl')
export const WEBSOCK_URL = process.env.NEXT_PUBLIC_WEBSOCK_URL.concat('/nhidcl')