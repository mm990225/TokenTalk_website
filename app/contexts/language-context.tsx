"use client"

import React, { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'en' | 'cn'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Header
    'header.title': 'TokenTalk',
    
    // Main content
    'main.redefining': 'Redefining Web3',
    'main.social': 'Social',
    'main.subtitle': 'Social + Wallet, Endless Possibilities',
    
    // Download buttons
    'download.title': 'Download Now',
    'download.appstore': 'App Store',
    'download.googleplay': 'Google Play',
    'download.android': 'Android APK',
    
    // Footer
    'footer.copyright': '© 2025 TokenTalk',
    'footer.social': 'Follow us on X',
    
    // Language switcher
    'lang.english': 'EN',
    'lang.chinese': 'CN'
  },
  cn: {
    // Header
    'header.title': 'TokenTalk',
    
    // Main content
    'main.redefining': '重新定义Web3',
    'main.social': '社交',
    'main.subtitle': '社交 + 钱包，无限可能',
    
    // Download buttons
    'download.title': '立即下载',
    'download.appstore': 'App Store',
    'download.googleplay': 'Google Play',
    'download.android': 'Android APK',
    
    // Footer
    'footer.copyright': '© 2025 TokenTalk',
    'footer.social': '在X上关注我们',
    
    // Language switcher
    'lang.english': '英文',
    'lang.chinese': '中文'
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
