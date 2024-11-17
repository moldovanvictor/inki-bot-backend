import { logger, task } from "@trigger.dev/sdk/v3";
import OpenAI from "openai";

export const responseGeneratorTask = task({
    id: "response-generator",
    maxDuration: 300,
    run: async (payload: any, { ctx }) => {
        logger.log("Starting response generation", { payload, ctx });

        const openai = new OpenAI({
            apiKey: process.env.OPENAI_SECRET_KEY,
        });

        const validContext = payload.context ?
            payload.context.filter(msg => msg && msg.role && msg.content) :
            null;

        const completion = await openai.chat.completions.create({
            model: "gpt-4",
            messages: [
                {
                    role: "system",
                    content: "You are an internal assistant for INKI Tech Company, you will help employees do their job. You will be provided with the messages history, and a current message, please respond to the current message, but keep the context of previous messages."
                },
                ...(validContext === null ? [{
                    role: "user",
                    content: payload.message
                }] : validContext)
            ]
        });

        logger.log("Response generated successfully", {
            message: completion.choices[0].message.content
        });

        return {
            message: completion.choices[0].message.content,
        };
    },
});

