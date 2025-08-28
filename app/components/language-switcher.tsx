"use client"

import { useLanguage } from "../contexts/language-context"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="fixed top-4 right-4 sm:top-8 sm:right-8 z-50">
      <div className="flex items-center gap-1 bg-black/20 backdrop-blur-sm rounded-full p-1 border border-white/10">
        <button
          onClick={() => setLanguage('en')}
          className={`px-3 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
            language === 'en'
              ? 'bg-white text-black shadow-sm'
              : 'text-white/70 hover:text-white hover:bg-white/10'
          }`}
        >
          EN
        </button>
        <button
          onClick={() => setLanguage('cn')}
          className={`px-3 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
            language === 'cn'
              ? 'bg-white text-black shadow-sm'
              : 'text-white/70 hover:text-white hover:bg-white/10'
          }`}
        >
          中
        </button>
      </div>
    </div>
  )
}
