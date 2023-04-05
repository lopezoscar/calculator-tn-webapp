import { useEffect } from 'react'
import { useAuth } from 'src/hooks/use-auth'
import { useRouter } from 'next/navigation'
const Logout = () => {
  const auth = useAuth()
  const router = useRouter()

  useEffect(() => {
    auth.signOut()
    router.push('/auth/login')
  }, [])
}

export default Logout
