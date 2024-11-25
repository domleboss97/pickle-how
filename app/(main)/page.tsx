"use client"

import Markdown from "react-markdown"
import remarkGfm from "remark-gfm"

import { Button } from "@/components/ui/button"
import { useChat } from "ai/react"
import { Input } from "@/components/ui/input"
import PickleIcon from "@/components/icons/pickle-icon"

export default function Component() {
  const { messages, input, isLoading, handleInputChange, handleSubmit } =
    useChat()

  const questionIndex = messages.findLastIndex(
    (message) => message.role === "user"
  )
  const question = messages[questionIndex]
  const answer = messages[questionIndex + 1]

  return (
    <div className="flex w-full flex-col items-center">
      <div className="w-full max-w-lg">
        <div className="mt-8 flex justify-center space-x-4">
          <span className="text-4xl">🏓</span>
        </div>
        <h1 className="mb-6 text-center text-2xl font-bold text-green-700">
          Ask a pickleball question
        </h1>

        <form onSubmit={handleSubmit} className="mb-8 space-y-4">
          <Input
            type="text"
            placeholder="Ask a question..."
            value={input}
            onChange={handleInputChange}
            className="border-primary bg-white text-base"
          />
          <Button type="submit" className="w-full text-white">
            Serve it up!
          </Button>
        </form>

        {question && (
          <div className="space-y-4 rounded-lg bg-white p-6 shadow-lg">
            <div className="font-semibold text-green-700">
              {question?.content}
            </div>
            {isLoading && !answer?.content ? (
              <div className="flex items-center justify-center">
                <PickleIcon className="size-12 animate-spin" />
              </div>
            ) : (
              <div className="prose text-gray-700">
                <Markdown remarkPlugins={[remarkGfm]}>
                  {answer?.content ?? ""}
                </Markdown>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
