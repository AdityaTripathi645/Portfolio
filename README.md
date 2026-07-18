# Aditya Tripathi — Portfolio (React)

A React (Vite) conversion of the original static HTML portfolio, with an added chatbot
that only answers questions about Aditya (using the same content shown on the page).

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build      # production build -> dist/
npm run preview    # preview the production build
```

## Structure

- `src/data.js` — single source of truth for all portfolio content (about, skills,
  projects, experience, research, achievements, community, friends, contact info).
  Both the page sections and the chatbot read from this file, so the bot can never
  say anything that isn't already on the site.
- `src/components/` — one component per section (Hero, About, Skills, Work, Experience,
  Research, Achievements, Community, Friends, Contact) plus `SignalRail` (the scroll
  progress indicator) and `Reveal` (scroll-in animation wrapper).
- `src/components/ChatBot.jsx` + `chatbotKnowledge.js` — the chat widget (bottom-right
  launcher) and its keyword-matching answer engine. It's intentionally scoped to
  Aditya's portfolio content only; off-topic questions get a polite redirect.
- `public/Aditya.jpeg`, `public/Resume.pdf` — static assets referenced by the site.

## Chatbot

The chatbot is a lightweight, fully client-side keyword-matcher — no API key or backend
required. It scores the visitor's question against topic keywords derived from
`data.js` and returns the best-matching chunk of real portfolio content. Anything
unrelated to Aditya gets: *"I can only answer questions about Aditya — his background,
skills, projects, experience, research, and how to contact him."*

If you'd like it to use a real LLM instead (for more natural conversation), you can
swap `answerQuestion()` in `chatbotKnowledge.js` for a call to the Anthropic API,
still restricting the system prompt to only the content in `data.js`.
