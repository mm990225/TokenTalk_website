"use client"

import { XIcon } from "./icons/x-icon"
import { SocialIcon } from "./social-icon"
import { DownloadButtons } from "./download-buttons"
import { LanguageSwitcher } from "./language-switcher"
import { useLanguage } from "../contexts/language-context"

export function WaitlistSignup() {
  const { t } = useLanguage()
  
  return (
    <>
      <div className="fixed top-4 left-4 sm:top-8 sm:left-8 flex items-center gap-2 sm:gap-4 z-50">
        <img
          src="/tokentalk-logo.png"
          alt="TokenTalk Logo"
          className="w-7 h-7 sm:w-11 sm:h-11 rounded-lg object-contain"
          onError={(e) => {
            console.log("[v0] Logo failed to load:", e.currentTarget.src)
          }}
          onLoad={() => {
            console.log("[v0] Logo loaded successfully")
          }}
        />
        <span className="text-white font-medium text-base sm:text-xl">{t('header.title')}</span>
      </div>

      <LanguageSwitcher />

      <div className="relative w-full max-w-xl mx-auto p-4 sm:p-8 flex flex-col justify-between min-h-screen">
        <div className="flex-1 flex flex-col justify-center items-center text-center">
          <div className="overflow-visible py-0 mt-16 sm:mt-24 px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-0 leading-tight fix-text-clip">
              {/* Mobile layout: 两行显示 */}
              <div className="block sm:hidden">
                <div className="animate-blur-in overflow-visible fix-text-clip" style={{
                  background: 'linear-gradient(to bottom right, #e5e7eb, #9ca3af)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  {t('main.redefining')}
                </div>
                <div className="flex items-center justify-center gap-2 mt-1">
                  <span style={{ 
                    color: "#0077FF",
                    WebkitTextFillColor: "#0077FF",
                    background: 'none'
                  }} className="animate-blur-in">
                    {t('main.social')}
                  </span>
                  <span className="text-white animate-blur-in-delayed">🚀</span>
                </div>
              </div>
              
              {/* Desktop layout: 一行显示 */}
              <div className="hidden sm:block whitespace-nowrap">
                <span className="animate-blur-in overflow-visible fix-text-clip" style={{
                  background: 'linear-gradient(to bottom right, #e5e7eb, #9ca3af)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  {t('main.redefining')}{" "}
                  <span style={{ 
                    color: "#0077FF",
                    WebkitTextFillColor: "#0077FF",
                    background: 'none'
                  }}>
                    {t('main.social')}
                  </span>
                </span>
                <span className="text-white animate-blur-in-delayed ml-2">🚀</span>
              </div>
            </h2>
          </div>
          <div className="mt-1.5 px-4">
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-gray-300 animate-blur-in-subtitle">{t('main.subtitle')}</p>
          </div>
          <div className="w-full mt-8">
            <DownloadButtons />
          </div>
        </div>
        <div className="pt-8 flex flex-col items-center gap-4">
          <SocialIcon
            href="https://x.com/TokenTalk_cc"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (formerly Twitter)"
            icon={<XIcon className="w-6 h-6" />}
          />
          <p className="text-gray-400 text-sm">{t('footer.copyright')}</p>
        </div>
      </div>
    </>
  )
}
