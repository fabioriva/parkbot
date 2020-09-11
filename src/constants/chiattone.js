export const APS_ID = 75
export const APS_NAME = 'P.zzo Chiattone'
export const APS_LOCATION = 'Lugano&nbsp;&middot;&nbsp;🇨🇭'
export const CARDS = 38
export const STALLS = 39
export const STALL_STATUS = {
  FREE: 0,
  PAPA: 997, // 65533
  RSVD: 998, // 65534
  LOCK: 999 // 65535
}
export const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL.concat('/chiattone')
export const WEBSOCK_URL = process.env.NEXT_PUBLIC_WEBSOCK_URL.concat('/chiattone')
