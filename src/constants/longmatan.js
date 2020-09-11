export const APS_ID = 77
export const APS_NAME = 'Longmatan'
export const APS_LOCATION = 'Luzhou&nbsp;&middot;&nbsp;🇨🇳'
export const CARDS = 500
export const STALLS = 320
export const STALL_STATUS = {
  FREE: 0,
  PAPA: 997, // 65533
  RSVD: 998, // 65534
  LOCK: 999 // 65535
}
export const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL.concat('/longmatan')
export const WEBSOCK_URL = process.env.NEXT_PUBLIC_WEBSOCK_URL.concat('/longmatan')
