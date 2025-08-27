"use client"

import { XIcon } from "./icons/x-icon"
import { SocialIcon } from "./social-icon"
import { DownloadButtons } from "./download-buttons"

export function WaitlistSignup() {
  return (
    <>
      <div className="fixed top-8 left-8 flex items-center gap-4 z-50">
        <img
          src="/tokentalk-logo.png"
          alt="TokenTalk Logo"
          className="w-12 h-12 rounded-lg object-contain"
          onError={(e) => {
            console.log("[v0] Logo failed to load:", e.currentTarget.src)
          }}
          onLoad={() => {
            console.log("[v0] Logo loaded successfully")
          }}
        />
        <span className="text-white font-medium text-2xl">TokenTalk</span>
      </div>

      <div className="relative w-full max-w-xl mx-auto p-8 flex flex-col justify-between min-h-screen">
        <div className="flex-1 flex flex-col justify-center items-center text-center">
          <div className="overflow-visible py-0 mt-24">
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-0 whitespace-nowrap fix-text-clip">
              <span className="inline-block animate-blur-in overflow-visible fix-text-clip" style={{
                background: 'linear-gradient(to bottom right, #e5e7eb, #9ca3af)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Redefining Web3{" "}
                <span style={{ 
                  color: "#0077FF",
                  WebkitTextFillColor: "#0077FF",
                  background: 'none'
                }}>
                  Social
                </span>
              </span>
              <span className="text-white animate-blur-in-delayed ml-2">🚀</span>
            </h2>
          </div>
          <div className="mt-1.5">
            <p className="text-lg sm:text-xl mb-8 text-gray-300 animate-blur-in-subtitle">Social + Wallet, Endless Possibilities</p>
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
          <p className="text-gray-400 text-sm">© 2025 TokenTalk</p>
        </div>
      </div>
    </>
  )
}
