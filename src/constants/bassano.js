export const APS_ID = 66
export const APS_NAME = 'Stallo S. Giovanni'
export const APS_LOCATION = 'Bassano Del Grappa&nbsp;&middot;&nbsp;🇮🇹'
export const CARDS = 149
export const STALLS = 149
export const STALL_STATUS = {
  FREE: 0,
  PAPA: 997, // 65533
  RSVD: 998, // 65534
  LOCK: 999 // 65535
}
export const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL.concat('/bassano')
export const WEBSOCK_URL = process.env.NEXT_PUBLIC_WEBSOCK_URL.concat('/bassano')
