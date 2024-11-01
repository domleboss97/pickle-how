import Anthropic from "@anthropic-ai/sdk"

import { env } from "@/env/server"
import { AnthropicStream, StreamingTextResponse } from "ai"
import { z } from "zod"
import { systemPrompt } from "@/lib/pickle/system-message"
import rules from "@/lib/pickle/rules.md"
import { PromptCachingBetaMessageParam } from "@anthropic-ai/sdk/resources/beta/prompt-caching/messages.mjs"

// Allow streaming responses up to 30 seconds
export const maxDuration = 30

const messageSchema = z.object({
  role: z.enum(["user", "assistant", "system"]),
  content: z.string()
})

const bodySchema = z.object({
  messages: z.array(messageSchema)
})

export async function POST(req: Request) {
  const { messages: inputMessages } = bodySchema.parse(await req.json())

  const userQuestion = inputMessages.findLast(
    (message) => message.role === "user"
  )

  if (!userQuestion) {
    return new Response("No user question found", { status: 400 })
  }

  const messages: PromptCachingBetaMessageParam[] = [
    { role: "user", content: userQuestion.content }
  ]

  const client = new Anthropic({
    apiKey: env.ANTHROPIC_API_KEY
  })

  const result = await client.beta.promptCaching.messages.create({
    system: [
      { type: "text", text: systemPrompt },
      {
        type: "text",
        text: rules,
        cache_control: { type: "ephemeral" }
      }
    ],
    messages,
    model: "claude-3-5-sonnet-20240620",
    max_tokens: 1_000,
    stream: true
  })

  // @ts-expect-error - does not expect the prompt caching beta types, but it works
  return new StreamingTextResponse(AnthropicStream(result))
}
