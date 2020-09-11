export const APS_ID = 48
export const APS_NAME = 'Trumpeldor'
export const APS_LOCATION = 'Tel Aviv&nbsp;&middot;&nbsp;🇮🇱'
export const CARDS = 39
export const STALLS = 40
export const STALL_STATUS = {
  FREE: 0,
  PAPA: 997, // 65533
  RSVD: 998, // 65534
  LOCK: 100 // 65535
}
export const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL.concat('/trumpeldor')
export const WEBSOCK_URL = process.env.NEXT_PUBLIC_WEBSOCK_URL.concat('/trumpeldor')
