import React from 'react'
import useAuth from '@/hooks/zustand/(private)/useAuth'
import createCheckoutSession from '@/service/stripe/createCheckoutSession'

export default function SubscriptionButton() {
  const [loading, setLoading] = React.useState(false)
  const auth = useAuth((s) => s.auth)

  const handleSubscribe = async () => {
    setLoading(true)
    await createCheckoutSession({ stripeCustomerId: auth.get('stripeCustomerId') })
      .then((res) => {
        window.location.href = res.url
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <>
      {loading ? (
        <button className='w-full bg-primary text-background font-bold shadow-xl text-xl p-4 pl-10 pr-10 rounded-full active:scale-90'>
          Processando...
        </button>
      ) : (
        <button onClick={handleSubscribe} className='w-full bg-primary text-background font-bold shadow-xl text-xl p-4 pl-10 pr-10 rounded-full active:scale-90'>
          Assinar
        </button>
      )}
    </>
  )
}
