// Single source of truth for portfolio content.
// The page components AND the chatbot both read from here,
// so the bot can never say anything that isn't already on the site.

export const profile = {
  name: "Aditya Tripathi",
  initials: "AT",
  location: "Noida → the internet",
  roles: "AI Engineer · Full Stack Developer · Researcher · Community Builder",
  tagline:
    "Building intelligent systems, scalable applications, and technology-driven solutions that solve real-world problems.",
  email: "aditya.tripathi.tech@gmail.com",
  github: "https://github.com/AdityaTripathi645",
  linkedin: "https://www.linkedin.com/in/adityatripathi007/",
  orcid: "https://orcid.org/0009-0005-0618-5573",
  nature: "nature.com/…",
  overleaf: "overleaf.com/read/…",
  community: "echo-engineers.vercel.app",
};

export const about = {
  heading: "Still a student. Already building.",
  paragraphs: [
    "I'm a Data Science student who got more interested in shipping things than in just studying them. Most of what I know about AI, backend systems, and the web, I picked up by breaking something anytime and figuring out why.",
    "I'd rather build a working prototype that helps ten real people than polish a slide deck that helps no one. That bias shows up in the projects below — an off-grid mesh radio, a radar built from a servo motor, tools that try to make legal help and blood donation less painful to access.",
    "Outside of my own projects, I spend a lot of time in hackathons, research, and technical communities — partly because that's where the interesting problems show up first, and partly because I like being around people who are stubborn about making things work.",
  ],
  facts: [
    { k: "Focus", v: "AI, backend systems, applied research" },
    { k: "Studying", v: "Data Science" },
    { k: "Also into", v: "Accessibility-first engineering" },
    { k: "Currently", v: "AI Intern @ CodeAlpha" },
    { k: "Usually found at", v: "a hackathon or a whiteboard" },
    {
      k: "Believes",
      v: "tech should solve real problems, not just look good in a demo",
    },
  ],
};

export const skills = [
  {
    title: "Primary stack",
    items: [
      { name: "Python", years: "2+ yrs", primary: true },
      { name: "React", years: "1+ yrs", primary: true },
      { name: "Node.js", years: "1+ yrs", primary: true },
      { name: "Java", years: "2+ yrs", primary: false },
    ],
  },
  {
    title: "AI & data",
    items: [
      { name: "Machine learning", years: "1+ yrs", primary: true },
      { name: "Prompt engineering", years: "1+ yrs", primary: true },
      { name: "AI agents", years: "1+ yrs", primary: true },
      { name: "Data analysis", years: "1+ yrs", primary: false },
    ],
  },
  {
    title: "Web & product",
    items: [
      { name: "REST APIs", years: "1+ yrs", primary: true },
      { name: "Express.js", years: "1+ yrs", primary: false },
      { name: "MongoDB", years: "6+ mos", primary: false },
      { name: "Figma", years: "6+ mos", primary: false },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "VS Code", years: "2+ yrs", primary: false },
      { name: "Git & GitHub", years: "2+ yrs", primary: true },
      { name: "Linux", years: "1+ yrs", primary: false },
      { name: "ChatGPT / Cursor", years: "1+ yrs", primary: false },
    ],
  },
];

export const projects = [
  {
    title: "EchoMesh",
    image: "/projects/echomesh.png",
    cats: ["hardware"],
    tags: ["Hardware", "LoRa"],
    desc: "A decentralized off-grid communication system designed to keep messages moving when infrastructure fails.",
    footLeft: "Emergency comms",
    footRight: "Research-led",
    problem:
      "Cell networks and internet access can fail during emergencies or in remote areas.",
    solution:
      "A mesh network of relay nodes that routes messages without relying on central infrastructure.",
    technologies: ["ESP32", "LoRa", "Arduino", "Python"],
    features: [
      "Offline message relay",
      "Low-power mesh nodes",
      "Field-ready hardware setup",
    ],
    status: "Prototype / research",
    repo: "https://github.com/AdityaTripathi645",
    demo: "#",
    contributors: [
      { name: "Aman Chaudhary", link: "https://amanchaudharyy.vercel.app/" },
      { name: "Dr. DeenaNath Gupta", link: "https://deenanathgupta.in" },
    ],
    research: "https://orcid.org/0009-0005-0618-5573",
    metrics: [
      { label: "Development time", value: "3 weeks" },
      { label: "Hardware", value: "ESP32 + LoRa" },
      { label: "Research output", value: "Book chapter" },
      { label: "Impact", value: "Remote comms" },
    ],
    architecture: ["Sensor node", "Mesh relay", "Coordinator / gateway"],
    gallery: ["Hardware photo", "Field deployment", "Circuit sketch"],
    future: ["Stronger routing", "Longer range testing"],
  },
  {
    title: "AI Legal Assistant",
    image: "/projects/ai-legal-assistant.jpg",
    cats: ["ai", "web"],
    tags: ["AI", "Web"],
    desc: "A hackathon-built tool that makes legal guidance easier to understand through plain-language answers.",
    footLeft: "Hackathon build",
    footRight: "NLP · guidance",
    problem:
      "Legal information is hard to read and often inaccessible to people who need help quickly.",
    solution:
      "An AI-guided assistant that translates dense legal language into simpler guidance.",
    technologies: ["React", "Node.js", "OpenAI", "Express"],
    features: [
      "Plain-language responses",
      "Context-aware prompts",
      "Fast prototype workflow",
    ],
    status: "Prototype",
    repo: "https://github.com/AdityaTripathi645",
    demo: "#",
    contributors: [],
    research: "#",
    metrics: [
      { label: "Development time", value: "24 hours" },
      { label: "Stack", value: "React + Node" },
      { label: "Outcome", value: "Hackathon demo" },
      { label: "Impact", value: "Accessibility" },
    ],
    architecture: ["Frontend", "Backend API", "LLM response layer"],
    gallery: ["Desktop UI", "Mobile UI", "Workflow diagram"],
    future: ["Richer context memory", "Safer legal framing"],
  },
  {
    title: "Blood Donation Finder",
    image: "/projects/blood.jpg",
    cats: ["web"],
    tags: ["Web"],
    desc: "A community-centered platform meant to reduce the time between a blood request and a nearby donor response.",
    footLeft: "Community-driven",
    footRight: "Full stack",
    problem:
      "Blood requests often move slowly because the right local help is hard to find quickly.",
    solution:
      "A responsive platform for locating nearby donors and accelerating urgent coordination.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    features: [
      "Emergency search flow",
      "Donor matching",
      "Map-based discovery",
    ],
    status: "In progress",
    repo: "https://github.com/AdityaTripathi645",
    demo: "#",
    contributors: [
      { name: "Akshit Jha", link: "https://akshitjha.vercel.app" },
    ],
    research: "#",
    metrics: [
      { label: "Development time", value: "Ongoing" },
      { label: "Stack", value: "React + Node" },
      { label: "Core feature", value: "Proximity search" },
      { label: "Impact", value: "Urgent access" },
    ],
    architecture: ["Frontend", "API layer", "Database + search"],
    gallery: ["Desktop UI", "Search flow", "Mobile UI"],
    future: ["Verification flow", "Realtime matching"],
  },
  {
    title: "AI Agent on Aptos",
    image: "/projects/ai-agent-aptos.jpg",
    cats: ["ai", "blockchain"],
    tags: ["AI", "Blockchain"],
    desc: "An AI agent experiment exploring how autonomous systems can interact with blockchain state in a more meaningful way.",
    footLeft: "Agent infra",
    footRight: "Aptos ecosystem",
    problem:
      "Many AI systems still operate as wrappers around simple prompts instead of reasoning over real state.",
    solution:
      "A smaller agent architecture that connects language models to on-chain context and action paths.",
    technologies: ["Python", "Aptos", "LangChain", "APIs"],
    features: ["State-aware prompts", "On-chain context", "Agent workflow"],
    status: "Research / prototype",
    repo: "https://github.com/AdityaTripathi645",
    demo: "#",
    contributors: [],
    research: "#",
    metrics: [
      { label: "Development time", value: "Ongoing" },
      { label: "Stack", value: "Python + APIs" },
      { label: "Focus", value: "Agent reasoning" },
      { label: "Impact", value: "Autonomous workflows" },
    ],
    architecture: ["Prompt layer", "Tool router", "Aptos interface"],
    gallery: ["Architecture sketch", "Agent flow", "Prompt logic"],
    future: ["Better tooling", "More secure execution"],
  },
  {
    title: "Object Recognition Device",
    image: "/projects/object-recognition.jpg",
    cats: ["hardware", "ai"],
    tags: ["Hardware", "AI"],
    desc: "A compact sensing device that recognizes nearby objects and reports useful context in real time.",
    footLeft: "Computer vision",
    footRight: "Embedded",
    problem:
      "Accessible sensing tools often remain too complex or too expensive for lightweight use cases.",
    solution:
      "A small device that combines sensing hardware with straightforward object recognition logic.",
    technologies: ["Arduino", "Ultrasonic", "Python", "Processing"],
    features: ["Distance estimation", "Object detection", "Live visualization"],
    status: "Prototype",
    repo: "https://github.com/AdityaTripathi645",
    demo: "#",
    contributors: [],
    research: "#",
    metrics: [
      { label: "Development time", value: "2 weeks" },
      { label: "Hardware", value: "Arduino + sensor" },
      { label: "Output", value: "Live plots" },
      { label: "Impact", value: "Accessible sensing" },
    ],
    architecture: ["Sensor input", "Processing unit", "Visual output"],
    gallery: ["Hardware build", "Circuit view", "Demo output"],
    future: ["Camera module", "Smarter detection"],
  },
];

export const experience = [
  {
    time: "2024 — Present",
    title: "B.Tech in Data Science — MUIT, Noida",
    organization: "MUIT",
    role: "Student",
    duration: "2024 — Present",
    responsibilities: [
      "Building a strong academic foundation",
      "Working on applied AI and full-stack projects",
      "Advancing research-led product ideas",
    ],
    technologies: ["Python", "React", "Research", "AI systems"],
    achievements: [
      "Research-oriented project work",
      "Hackathon participation",
      "Community building",
    ],
    outcome:
      "A stronger base for research, product work, and technical collaboration.",
  },
  {
    time: "june,2026 — Present",
    title: "AI Intern — CodeAlpha",
    organization: "CodeAlpha",
    role: "Artificial Intelligence Intern",
    duration: "June 2026 — Present",
    responsibilities: [
      "Working on applied AI tasks",
      "Shipping practical solutions",
      "Improving implementation quality",
    ],
    technologies: ["Python", "AI workflows", "Prototyping"],
    achievements: ["Hands-on AI implementation", "Practical product exposure"],
    outcome: "More experience turning ideas into working systems.",
  },
  {
    time: "2025 — Present",
    title: "Hackathons, research, and community projects",
    organization: "Independent",
    role: "Builder / contributor",
    duration: "Recurring",
    responsibilities: [
      "Building under deadline pressure",
      "Pitching ideas",
      "Contributing to student communities",
    ],
    technologies: ["React", "Node.js", "Hardware", "AI"],
    achievements: [
      "Multiple prototypes",
      "Community coordination",
      "Research interest",
    ],
    outcome: "A consistent habit of building and learning quickly.",
  },
  {
    time: "Now",
    title: "Building AI-led products and research-driven experiences",
    organization: "Independent",
    role: "Researcher / engineer",
    duration: "Current focus",
    responsibilities: [
      "Shipping more polished products",
      "Documenting work clearly",
      "Growing toward stronger opportunities",
    ],
    technologies: ["AI", "Full stack", "Research", "Product thinking"],
    achievements: ["Richer project documentation", "More polished builds"],
    outcome: "Moving from experimentation toward stronger evidence-based work.",
  },
];

export const research = [
  {
    kind: "Book Chapter",
    title:
      "EchoMesh: A Decentralized Off-Grid LoRa Mesh Communication System for Emergency and Remote Connectivity",
    meta: [
      { k: "Venue", v: "JPTM" },
      { k: "Editor-in-Chief", v: "DeenaNath Gupta" },
    ],
    status: "Accepted / in publication workflow",
    doi: "TBA",
    pdf: "Available on request",
    citation:
      "Tripathi, A., et al. (2025). EchoMesh: A Decentralized Off-Grid LoRa Mesh Communication System for Emergency and Remote Connectivity.",
    bibtex: "@article{tripathi2025echomesh, title={EchoMesh...}}",
    abstract:
      "This work explores a decentralized communication architecture that does not depend on cell towers or internet infrastructure. The system uses relay nodes to maintain connectivity in emergency and remote contexts.",
    keywords: [
      "LoRa",
      "Mesh networking",
      "Emergency communication",
      "Off-grid systems",
    ],
    areas: ["Embedded systems", "Communication networks", "Applied research"],
    summary:
      "A communication network that doesn't need cell towers or the internet — nodes pass messages to each other directly, so it keeps working when everything else goes down.",
  },
  {
    kind: "Conference Paper",
    title:
      "Arduino-Based Radar System for Object Detection and Distance-Time Graph Representation",
    meta: [
      {
        k: "Venue",
        v: "National Conference on AI in Entrepreneurship and Academics",
      },
      { k: "Co-organized by", v: "GPT & MUIT" },
    ],
    status: "Presented / documented",
    doi: "TBA",
    pdf: "Available on request",
    citation:
      "Tripathi, A. (2025). Arduino-Based Radar System for Object Detection and Distance-Time Graph Representation.",
    bibtex:
      "@inproceedings{tripathi2025radar, title={Arduino-Based Radar System...}}",
    abstract:
      "The paper describes a low-cost radar system built around an Arduino Uno, an ultrasonic sensor, and a servo motor. It visualizes distance-time data through a Processing GUI in real time.",
    keywords: ["Radar", "Arduino", "Embedded systems", "Visualization"],
    areas: ["Hardware", "Signal processing", "Interactive systems"],
    summary:
      "An Arduino Uno, an ultrasonic sensor, and a servo motor team up to build a mini radar — it sweeps 0°–180°, measures distance from 1–100 cm, and streams live distance-time and polar plots to a Processing GUI in real time.",
  },
];

export const achievements = {
  intro:
    "Focused on research-backed builds, hands-on hackathons, and projects that solve real problems.",
  stats: [
    { value: "15+", label: "Projects built" },
    { value: "4", label: "Research-led efforts" },
    { value: "3", label: "Live deployments" },
    { value: "20+", label: "Technologies used" },
  ],
  cards: [
    {
      title: "Research contributions",
      detail:
        "Built and documented research-oriented systems around resilient communication and embedded sensing.",
    },
    {
      title: "Hackathon builds",
      detail:
        "Created practical prototypes under short timelines for accessibility, emergency response, and AI-assisted tools.",
    },
    {
      title: "Community leadership",
      detail:
        "Organized events, connected student builders, and helped cultivate a more active technical community.",
    },
    {
      title: "Current milestones",
      detail:
        "Continuing to grow through stronger product builds, clearer documentation, and more research output.",
    },
  ],
};

export const community = {
  paragraphs: [
    "I'm a founding / core team member of a growing student-led tech community — the kind that started as a group chat and turned into something people actually show up for.",
    "Most of my time there goes into organizing online quizzes and events, and quietly connecting students and developers across colleges who'd otherwise never run into each other.",
  ],
  events: ["Online quizzes", "Campus tech events", "Community meetups"],
  communities: [
    "Student builder circles",
    "Hackathon networks",
    "Research peers",
  ],
  workshops: [
    "Intro sessions",
    "Build-with-others workshops",
    "Research discussions",
  ],
  talks: ["Technical talks", "Project walkthroughs", "Community updates"],
  sessions: ["Live problem-solving sessions", "Student developer circles"],
  collaborations: [
    "Cross-college collaborations",
    "Peer projects",
    "Mentoring circles",
  ],
  list: [
    "Founding / core team member of a growing technical community",
    "Organized online quizzes and events for student developers",
    "Building a cross-college network of students and developers",
    "Focused on connection over competition — the network is the point",
  ],
};

export const certificates = [
  {
    type: "Achievement",
    title: "Brewing Codes 4.0 Hackathon 2026",
    image: "/certificates/brewing-codes-4.jpg",
    description:
      "Participated in the Brewing Codes 4.0 Hackathon 2026 organized by Maharishi University of Information Technology. Worked as a member of Team Echo Engineers, where we designed and developed an innovative solution under strict time constraints. Out of 70+ participating teams, we successfully cleared the initial evaluation round and finished among the Top 5 finalist teams, demonstrating strong technical execution, teamwork, and problem-solving.",
    issuedDate: "27–28 March 2026",
    place: "Maharishi School of Engineering & Technology (MUIT), Noida",
  },
  {
    type: "Recognition",
    title: "ISRO IIRS — Geodata Processing using Python and Machine Learning",
    image: "/certificates/isro-iirs.jpg",
    description:
      "Successfully completed the ISRO – Indian Institute of Remote Sensing (IIRS) online course on Geodata Processing using Python and Machine Learning. The program introduced practical applications of Python, machine learning, and geospatial data analysis for remote sensing and Earth observation, strengthening my understanding of AI-driven geospatial technologies",
    issuedDate: "09 February 2026 – 20 February 2026 (9 Hours)",
    place:
      "Indian Institute of Remote Sensing (IIRS), ISRO, Department of Space, Government of India",
  },
];

export const writing = [
  {
    title: "Building a mesh communication system when the internet disappears",
    excerpt:
      "A short note on how EchoMesh turns simple hardware and networking ideas into something useful in emergencies and remote areas.",
    meta: "Research · 2 min read",
    date: "May 2025",
    tags: ["Research", "Hardware", "Systems"],
    cover: "E",
  },
  {
    title: "Why hackathons still matter for student builders",
    excerpt:
      "Reflections on how fast feedback loops, constraints, and shared energy make hackathons a surprisingly effective place to learn.",
    meta: "Community · 3 min read",
    date: "Apr 2025",
    tags: ["Community", "Build", "Learning"],
    cover: "H",
  },
];

export const githubStats = {
  repos: "20+",
  contributions: "100+",
  calendar: "Active across recent months",
  languages: ["Python", "JavaScript", "Java"],
  pinned: ["EchoMesh", "Blood Donation Finder", "AI Agent on Aptos"],
};

export const now = {
  building: ["AI-led product ideas", "More polished full-stack builds"],
  learning: ["LangGraph workflows", "System design", "Research writing"],
  researching: ["Reliable mesh systems", "Applied AI", "Human-centered tools"],
  reading: [
    "Designing Data-Intensive Applications",
    "Hands-On Machine Learning",
  ],
  lookingFor: [
    "AI internship opportunities",
    "Research collaborations",
    "Practical product work",
  ],
};

export const tools = [
  "VS Code",
  "Git",
  "GitHub",
  "Figma",
  "React",
  "Node.js",
  "Python",
  "Java",
  "Linux",
  "ChatGPT",
  "Cursor",
];

// export const friends = [
//   { name: "Aman Chaudhary", what: "Hackathon teammate — EchoMesh" },
//   { name: "Dr. DeenaNath Gupta", what: "Co-author — EchoMesh paper" },
//   { name: "Aryan Gupta", what: "Community core teammate" },
//   { name: "Akshit Jha", what: "Collaborator, blood donation platform" },
// ];
export const friends = [
  {
    name: "Aman Chaudhary",
    what: "Hackathon teammate — EchoMesh",
    link: "https://amanchaudharyy.vercel.app/",
  },
  {
    name: "Dr. DeenaNath Gupta",
    what: "Co-author — EchoMesh paper",
    link: "https://deenanathgupta.in",
  },
  {
    name: "Aryan Gupta",
    what: "Community core teammate",
    link: "https://aryangupta.vercel.app",
  },
  {
    name: "Akshit Jha",
    what: "Collaborator, blood donation platform",
    link: "https://akshitjha.vercel.app",
  },
];
export const contact = {
  connect: [
    {
      label: "GitHub",
      value: profile.github,
      href: "https://github.com/AdityaTripathi645",
    },
    {
      label: "LinkedIn",
      value: profile.linkedin,
      href: "https://www.linkedin.com/in/adityatripathi007/",
    },
  ],
  research: [
    {
      label: "ORCID",
      value: profile.orcid,
      href: "https://orcid.org/0009-0005-0618-5573",
    },
    {
      label: "Community",
      value: profile.community,
      href: "https://echo-engineers.vercel.app/",
    },
    { label: "Overleaf", value: profile.overleaf, href: "#" },
  ],
  availability:
    "Open for research conversations, internships, and practical collaborations.",
  location: "Noida, India",
  formAction: "https://formspree.io/f/mlgyyleb",
};

export const navSections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "research", label: "Research" },
  // { id: "now", label: "Now" },
  { id: "certificates", label: "Certificates" },
  { id: "achievements", label: "Achievements" },
  { id: "community", label: "Community" },
  // { id: "friends", label: "Friends" },
  // { id: "github", label: "GitHub" },
  // { id: "writing", label: "Writing" },
  { id: "contact", label: "Contact" },
];
