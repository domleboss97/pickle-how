"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const mockResponses = [
  "Aim for the kitchen! It's not just for cooking in pickleball.",
  "Remember, in pickleball, love is just a score, not a feeling!",
  "Dinking is not what you do in a pool, it's a key pickleball strategy!",
  "The sweet spot in pickleball is like finding the perfect avocado - pure joy!",
  "Paddle up, worries down! That's the pickleball way of life."
]

export default function Component() {
  const [question, setQuestion] = useState("")
  const [qa, setQA] = useState<{ question: string; answer: string } | null>(
    null
  )

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (question.trim()) {
      const randomAnswer =
        mockResponses[Math.floor(Math.random() * mockResponses.length)]
      setQA({ question, answer: randomAnswer })
      setQuestion("")
    }
  }

  return (
    <div className="flex w-full flex-col items-center p-4 sm:p-8">
      <div className="w-full max-w-md">
        <div className="mt-8 flex justify-center space-x-4">
          <span className="text-4xl">🏓</span>
        </div>
        <h1 className="mb-6 text-center text-2xl font-bold text-green-700">
          Ask a pickleball question
        </h1>

        <form onSubmit={handleSubmit} className="mb-8 space-y-4">
          <Input
            type="text"
            placeholder="Ask your pickleball question..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="border-primary bg-white"
          />
          <Button type="submit" className="w-full text-white">
            Serve it up!
          </Button>
        </form>

        {qa && (
          <div className="space-y-4 rounded-lg bg-white p-6 shadow-lg">
            <div className="font-semibold text-green-700">{qa.question}</div>
            <div className="text-gray-700">{qa.answer}</div>
          </div>
        )}
      </div>
    </div>
  )
}
