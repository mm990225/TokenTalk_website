"use client"

import type React from "react"
import { useLanguage } from "../contexts/language-context"

interface DownloadButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  disabled?: boolean
}

function DownloadButton({ children, href, onClick, disabled = false }: DownloadButtonProps) {
  const baseClasses =
    "flex items-center justify-center gap-2 sm:gap-3 font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-full min-w-[120px] sm:min-w-[160px] shadow-lg transition-all duration-200 backdrop-blur-sm border text-sm sm:text-base"
  const enabledClasses =
    "bg-black/80 hover:bg-black/90 border-gray-600 text-white hover:shadow-xl transform hover:scale-105"
  const disabledClasses = "bg-white/10 border-white/20 text-gray-300 cursor-not-allowed"

  const buttonContent = (
    <button
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={`${baseClasses} ${disabled ? disabledClasses : enabledClasses}`}
    >
      {children}
    </button>
  )

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {buttonContent}
      </a>
    )
  }

  return buttonContent
}

export function DownloadButtons() {
  const { t } = useLanguage()
  
  return (
    <div className="flex flex-row gap-4 w-full justify-center flex-wrap">
      <DownloadButton disabled={true}>
        <img
          src="/appstore-icon.png"
          alt="App Store"
          className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
          onError={(e) => {
            console.log("[v0] App Store icon failed to load:", e.currentTarget.src)
            e.currentTarget.style.display = "none"
          }}
          onLoad={() => {
            console.log("[v0] App Store icon loaded successfully")
          }}
        />
        <span>{t('download.appstore')}</span>
      </DownloadButton>

      <DownloadButton disabled={true}>
        <img
          src="/googleplay-icon.png"
          alt="Google Play"
          className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
          onError={(e) => {
            console.log("[v0] Google Play icon failed to load:", e.currentTarget.src)
            e.currentTarget.style.display = "none"
          }}
          onLoad={() => {
            console.log("[v0] Google Play icon loaded successfully")
          }}
        />
        <span>{t('download.googleplay')}</span>
      </DownloadButton>

      <DownloadButton disabled={false} href="https://data.tokentalk.cc/DOWNLOAD/android/tokentalk.apk">
        <img
          src="/android-icon.png"
          alt="Android APK"
          className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
          onError={(e) => {
            console.log("[v0] Android icon failed to load:", e.currentTarget.src)
            e.currentTarget.style.display = "none"
          }}
          onLoad={() => {
            console.log("[v0] Android icon loaded successfully")
          }}
        />
        <span>{t('download.android')}</span>
      </DownloadButton>
    </div>
  )
}
