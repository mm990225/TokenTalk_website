"use client"

import { useState, useEffect } from "react"
import { useActionState } from "react"
import { joinWaitlist } from "../actions/waitlist"
import { Loader2 } from "lucide-react"

interface WaitlistFormProps {
  onSuccess: (count: number) => void
}

function showToast(message: string, type: "success" | "error" = "success") {
  const toast = document.createElement("div")
  toast.className = `fixed top-4 right-4 z-50 p-4 rounded-xl shadow-lg transition-all duration-300 ${
    type === "success" ? "bg-green-600 text-white" : "bg-red-600 text-white"
  }`
  toast.textContent = message
  document.body.appendChild(toast)

  setTimeout(() => {
    toast.style.opacity = "0"
    setTimeout(() => document.body.removeChild(toast), 300)
  }, 5000)
}

export function WaitlistForm({ onSuccess }: WaitlistFormProps) {
  const [state, formAction, isPending] = useActionState(joinWaitlist, null)
  const [email, setEmail] = useState("")

  useEffect(() => {
    if (state?.success) {
      showToast(state.message, "success")
      if (state.count) {
        onSuccess(state.count)
      }
      setEmail("")
    } else if (state?.success === false) {
      showToast(state.message, "error")
    }
  }, [state, onSuccess])

  const handleSubmit = async (formData: FormData) => {
    await formAction(formData)
  }

  return (
    <form action={handleSubmit} className="w-full space-y-4 mb-8">
      <div className="flex overflow-hidden rounded-xl bg-white/5 p-1 ring-1 ring-white/20 focus-within:ring-2 focus-within:ring-blue-500">
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-describedby="email-error"
          className="w-full border-0 bg-transparent text-white placeholder:text-gray-400 focus:ring-0 focus:border-transparent focus-visible:border-transparent focus:outline-none active:ring-0 active:outline-none focus-visible:ring-0 focus-visible:outline-none active:border-transparent focus-visible:ring-offset-0 px-3 py-2"
        />
        <button
          type="submit"
          disabled={isPending}
          className="bg-black hover:bg-gray-800 text-white font-semibold px-4 rounded-xl transition-all duration-300 ease-in-out focus:outline-none w-[120px] disabled:opacity-50 flex items-center justify-center"
        >
          {isPending ? <Loader2 className="h-5 w-5 animate-spin" /> : "Get Notified"}
        </button>
      </div>
    </form>
  )
}
