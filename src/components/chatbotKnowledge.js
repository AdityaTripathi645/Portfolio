import {
  profile,
  about,
  skills,
  projects,
  experience,
  research,
  achievements,
  community,
  friends,
  contact,
} from "../data.js";

// Every answer the bot can ever give is built directly from data.js —
// the same content rendered on the page. This keeps the bot scoped to
// "things about Aditya" by construction, not just by prompt instruction.

function list(items, labelKey = "name") {
  if (!items) return "";

  if (Array.isArray(items)) {
    return items
      .map((item) => {
        if (typeof item === "string") return item;
        if (item && typeof item === "object") {
          return (
            item[labelKey] ||
            item.title ||
            item.name ||
            item.label ||
            item.value ||
            item.k ||
            item.v ||
            JSON.stringify(item)
          );
        }
        return String(item);
      })
      .join(", ");
  }

  if (typeof items === "object") {
    return Object.values(items)
      .map((value) => (typeof value === "string" ? value : String(value)))
      .join(", ");
  }

  return String(items);
}

const chunks = [
  {
    id: "greeting",
    keywords: ["hi", "hello", "hey", "yo", "sup", "greetings", "start"],
    answer: `Hey! I’m Aditya’s portfolio guide — I can help with his projects, skills, research, experience, and how to reach him.`,
  },
  {
    id: "who",
    keywords: [
      "who is",
      "who are you",
      "about aditya",
      "introduce",
      "tell me about him",
      "tell me about aditya",
      "who",
      "what does he do",
    ],
    answer: `${profile.name} is a ${profile.roles}, based in ${profile.location}. ${about.paragraphs[0]}`,
  },
  {
    id: "about",
    keywords: [
      "about",
      "background",
      "student",
      "bio",
      "focus",
      "believe",
      "philosophy",
      "personality",
    ],
    answer: about.paragraphs.join(" "),
  },
  {
    id: "facts",
    keywords: [
      "studying",
      "study",
      "major",
      "degree",
      "currently",
      "focus area",
      "currently doing",
      "what does he study",
    ],
    answer: about.facts.map((f) => `${f.k}: ${f.v}`).join(". "),
  },
  {
    id: "skills",
    keywords: [
      "skill",
      "tech stack",
      "technology",
      "language",
      "framework",
      "tool",
      "know",
      "stack",
      "tools",
      "programming",
      "languages",
      "frameworks",
      "what can he do",
    ],
    answer: skills
      .map((g) => `${g.title} — ${list(g.items, "name")}`)
      .join(". "),
  },
  {
    id: "projects-all",
    keywords: [
      "project",
      "work",
      "built",
      "shipped",
      "portfolio",
      "made",
      "build",
      "what does he build",
      "show me projects",
    ],
    answer: `${profile.name} has shipped five main projects: ${projects.map((p) => p.title).join(", ")}. Ask me about any one of them for more detail.`,
  },
  ...projects.map((p) => ({
    id: `project-${p.title}`,
    keywords: [p.title.toLowerCase(), ...p.tags.map((t) => t.toLowerCase())],
    answer: `${p.title} (${p.tags.join(", ")}): ${p.desc} — ${p.footLeft}, ${p.footRight}`,
  })),
  {
    id: "experience",
    keywords: [
      "experience",
      "job",
      "intern",
      "internship",
      "codealpha",
      "hackathon",
      "work history",
      "career",
    ],
    answer: experience
      .map((e) => `${e.title} (${e.time}): ${e.desc}`)
      .join(" "),
  },
  {
    id: "research",
    keywords: [
      "research",
      "publication",
      "paper",
      "book chapter",
      "echomesh",
      "radar",
      "published",
      "jptm",
      "research work",
    ],
    answer: research
      .map(
        (r) =>
          `${r.kind} — "${r.title}" (Venue: ${r.meta.map((m) => m.v).join(", ")}). ${r.summary}`,
      )
      .join(" "),
  },
  {
    id: "achievements",
    keywords: ["achievement", "award", "accomplishment", "badge"],
    answer: `A short, honest list: ${list(achievements.cards.map((card) => card.title))}.`,
  },
  {
    id: "community",
    keywords: [
      "community",
      "founder",
      "core team",
      "organize",
      "quiz",
      "events",
    ],
    answer: `${community.paragraphs.join(" ")} ${list(community.list)}.`,
  },
  {
    id: "friends",
    keywords: ["friend", "collaborator", "teammate", "co-author"],
    answer: `${profile.name} has built things alongside a few collaborators: ${friends
      .map((f) => f.what)
      .join("; ")}. Names are placeholders on the site for now.`,
  },
  {
    id: "contact",
    keywords: [
      "contact",
      "email",
      "reach",
      "linkedin",
      "github",
      "hire",
      "collaborate",
      "get in touch",
      "connect",
    ],
    answer: `You can reach ${profile.name} by email at ${profile.email}, on GitHub at ${profile.github}, or LinkedIn at ${profile.linkedin}. There's also a contact form on the site.`,
  },
  {
    id: "resume",
    keywords: ["resume", "cv", "résumé", "download resume"],
    answer: `You can download ${profile.name}'s résumé using the "Download résumé" button in the hero section at the top of the page.`,
  },
  {
    id: "location",
    keywords: [
      "where",
      "location",
      "based",
      "live",
      "from",
      "bengaluru",
      "bangalore",
      "india",
    ],
    answer: `${profile.name} is based in ${profile.location}.`,
  },
];

const OFF_TOPIC_REPLY =
  "I’m tuned to Aditya’s portfolio — his background, projects, skills, research, and how to connect. Try asking about one of those or pick a suggested prompt.";

function normalize(str) {
  return str.toLowerCase().trim();
}

export function answerQuestion(rawQuery) {
  const query = normalize(rawQuery);
  if (!query) {
    return "Ask me something about Aditya — his projects, skills, experience, or how to reach him.";
  }

  let best = null;
  let bestScore = 0;

  for (const chunk of chunks) {
    let score = 0;
    for (const kw of chunk.keywords) {
      if (query.includes(kw)) {
        // longer keyword matches count for more (more specific)
        score += kw.length;
      }
    }
    if (score > bestScore) {
      bestScore = score;
      best = chunk;
    }
  }

  if (best && bestScore > 0) {
    return best.answer;
  }

  return OFF_TOPIC_REPLY;
}

export const suggestedQuestions = [
  "What does Aditya study?",
  "Tell me about EchoMesh",
  "What are his skills?",
  "How can I contact him?",
  "What projects has he built?",
];
