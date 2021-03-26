import { useRouter } from 'next/router'
import Button from '@material-ui/core/Button'

export default function Back () {
  const router = useRouter()

  return (
    <Button color='default' onClick={() => router.back()}>
      Back
    </Button>
  )
}
