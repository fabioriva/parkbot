import { useEffect } from 'react'
import Router from 'next/router'
import useSWR from 'swr'

const fetcher = url =>
  global
    .fetch(url)
    .then(r => r.json())
    .then(data => {
      return { user: data?.user || null }
    })

const hasAps = aps => {
  const [apsFromUrl] = Router.pathname.substring(1).split('/')
  return aps === apsFromUrl
}

const hasRole = (user, roles) =>
  roles.some(role =>
    user.roles !== undefined ? user.roles.includes(role) : false
  )

export function useUser ({ redirectTo, redirectIfFound, roles } = {}) {
  const { data, error } = useSWR('/api/profile', fetcher)
  const user = data?.user
  const finished = Boolean(data)
  const hasUser = Boolean(user)

  useEffect(() => {
    if (!redirectTo || !finished) return

    if (
      // If redirectTo is set, redirect if the user was not found.
      (redirectTo && !redirectIfFound && !hasUser) ||
      // If redirectIfFound is also set, redirect if the user was found
      (redirectIfFound && hasUser) ||
      // If redirect is set, redirect if pathname aps is not user aps
      (redirectTo && !hasAps(user.aps)) ||
      // If redirect is set, redirect if page role is not user role
      (redirectTo && !hasRole(user, roles))
    ) {
      Router.push(redirectTo)
    }
  }, [redirectTo, redirectIfFound, finished, hasUser])

  return error ? null : user
}
