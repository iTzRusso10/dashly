import { ArrowUpRight, LogIn, ShieldCheck } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export function DemoLoginForm() {
  const [loginFeedback, setLoginFeedback] = useState<string | null>(null)
  const loginFeedbackTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    return () => {
      if (loginFeedbackTimer.current) {
        clearTimeout(loginFeedbackTimer.current)
      }
    }
  }, [])

  const handleDemoLogin = () => {
    if (loginFeedbackTimer.current) {
      clearTimeout(loginFeedbackTimer.current)
    }
    setLoginFeedback('Accesso demo attivo per i prossimi 15 minuti.')
    loginFeedbackTimer.current = setTimeout(() => {
      setLoginFeedback(null)
    }, 4200)
  }

  return (
    <article
      id="login"
      className="flex flex-col gap-4 rounded-[32px] p-6 text-sm shadow-xl shadow-black/10 dashly-panel-contrast"
    >
      <div className="flex items-center gap-3">
        <LogIn className="h-10 w-10 rounded-2xl bg-white/10 p-2" />
        <div>
          <p className="text-lg font-semibold">Login demo (fake)</p>
          <p className="dashly-muted text-sm">
            Testa il flusso senza toccare i dati reali.
          </p>
        </div>
      </div>
      <form className="mt-2 space-y-4">
        <label className="block space-y-2 text-sm font-medium">
          Email
          <input
            type="email"
            defaultValue="demo@dashly.com"
            className="dashly-input w-full text-base"
          />
        </label>
        <label className="block space-y-2 text-sm font-medium">
          Password
          <input
            type="password"
            defaultValue="Vendite2025!"
            className="dashly-input w-full text-base"
          />
        </label>
        <button
          type="button"
          onClick={handleDemoLogin}
          className="dashly-primary-btn inline-flex w-full items-center justify-center gap-2 px-5 py-3 text-sm font-semibold"
        >
          Simula accesso
          <ArrowUpRight className="h-4 w-4" />
        </button>
      </form>
      {loginFeedback && (
        <p className="dashly-feedback mt-2 text-xs">{loginFeedback}</p>
      )}
      <div className="dashly-muted mt-4 flex flex-wrap items-center gap-3 text-xs">
        <ShieldCheck
          className="h-4 w-4"
          style={{ color: 'var(--dash-positive)' }}
        />
        Accesso cifrato • reset automatico dopo ogni sessione demo.
      </div>
    </article>
  )
}

