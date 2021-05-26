import { useEffect } from 'react'
import Router from 'next/router'
import useSWR from 'swr'

// const hasAps = (aps, userAps) => {
//   const [apsFromUrl] = Router.pathname.substring(1).split('/')
//   console.log(aps, apsFromUrl)
//   return aps === apsFromUrl
// }

const hasRole = (user, roles) =>
  roles.some(role =>
    user.roles !== undefined ? user.roles.includes(role) : false
  )

export default function useUser ({
  aps,
  redirectTo = false,
  redirectIfFound = false,
  roles = []
} = {}) {
  const { data: user, mutate } = useSWR('/api/user')
  const hasUser = Boolean(user)

  useEffect(() => {
    // if no redirect needed, just return (example: already on /dashboard)
    // if user data not yet there (fetch in progress, logged in or not) then don't do anything yet
    if (!redirectTo || !user) return

    if (
      // If redirectTo is set, redirect if the user was not found.
      (redirectTo && !redirectIfFound && !hasUser) ||
      // If redirectIfFound is also set, redirect if the user was found
      (redirectIfFound && hasUser) ||
      // If redirect is set, redirect if pathname aps is not user aps
      // (redirectTo && aps !== user.aps) ||
      // If redirect is set, redirect if page role is not user role
      (redirectTo && !hasRole(user, roles))
    ) {
      Router.push(redirectTo)
    }
  }, [user, redirectIfFound, redirectTo])

  return { user, mutate }
}
