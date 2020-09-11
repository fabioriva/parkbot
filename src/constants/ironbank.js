export const APS_ID = 17
export const APS_NAME = 'Iron Bank'
export const APS_LOCATION = 'Auckland&nbsp;&middot;&nbsp;🇳🇿'
export const CARDS = 113
export const STALLS = 114
export const STALL_STATUS = {
  FREE: 0,
  PAPA: 997, // 65533
  RSVD: 998, // 65534
  LOCK: 999 // 65535
}
export const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL.concat('/ironbank')
export const WEBSOCK_URL = process.env.NEXT_PUBLIC_WEBSOCK_URL.concat('/ironbank')