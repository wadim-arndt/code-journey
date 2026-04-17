export interface Epoch {
  era: string;
  year: string;
  title: string;
  poetic: string;
  narrative: string;
}

export const epochs: Epoch[] = [
  {
    era: "Origins of Computation",
    year: "1840s - 1930s",
    title: "Theoretical Dreams",
    poetic: "A loom that weaves algebraic patterns instead of flowers and leaves.",
    narrative: "Before electricity coursed through logic gates, computation existed only in theory. Visionaries like Ada Lovelace imagined thinking machines, drafting world's first algorithms on paper. It was an era of profound mathematical thought, laying the invisible groundwork for the centuries to follow."
  },
  {
    era: "Machine Era",
    year: "1940s",
    title: "The Iron Foundations",
    poetic: "Binary logic wired by human hands in the glow of vacuum tubes.",
    narrative: "The dawn of physical computing. ENIAC and its peers demanded instructions be fed directly to the hardware via patched wires and punch cards. Programs were written in pure binary logic—extreme complexity, prone to brutal failures, but utterly magnificent in their mechanical prowess."
  },
  {
    era: "Assembly Era",
    year: "1950s",
    title: "The First Abstraction",
    poetic: "Mnemonics bridging the gap between human mind and electrical spark.",
    narrative: "A profound leap in translation. Assembly languages introduced commands like LOAD, ADD, and STORE. While still heavily tethered to specific processors, this thin layer of abstraction allowed humans to construct instructions faster, setting the stage for readable code."
  },
  {
    era: "High-Level Revolution",
    year: "1957 - 1960s",
    title: "Humanizing Logic",
    poetic: "Languages reflecting the needs of science and the rhythms of commerce.",
    narrative: "Programming shattered its hardware chains with languages like Fortran, COBOL, and LISP. Code evolved to solve specific human problems: scientific computation, business accounting, and early artificial intelligence. It was the moment logic was given a recognizable voice."
  },
  {
    era: "Structured Programming",
    year: "1970s",
    title: "Order and Architecture",
    poetic: "Creating portable truths to conquer the chaos of sprawling logic.",
    narrative: "With the birth of C and Unix at Bell Labs, portability and structure redefined the industry. Developers could build robust, efficient architectures that didn't demand constant reinvention across different machines. The modern operating system found its soul."
  },
  {
    era: "Object-Oriented Era",
    year: "1980s - 1990s",
    title: "Modeling the World",
    poetic: "A universe of encapsulated objects, exchanging messages in harmony.",
    narrative: "As codebases expanded to monolithic proportions, procedural logic wasn't enough. Languages like C++ and later Java introduced object-oriented paradigms. Engineers began modeling complex systems as interconnected, modular concepts—a mirror to the physical world."
  },
  {
    era: "Internet Era",
    year: "1990s - 2000s",
    title: "The Global Web",
    poetic: "Scripts igniting a connected, hyperlinked reality.",
    narrative: "The browser became the new canvas. With the rapid introduction of JavaScript and backend engines like PHP, the static internet erupted into an interactive explosion. Suddenly, programming wasn't just for mainframes; it mediated the global exchange of information."
  },
  {
    era: "Modern Era",
    year: "2010s - Present",
    title: "The Age of Ecosystems",
    poetic: "Ruthless efficiency wrapped in an embrace of safety and scale.",
    narrative: "Today's landscape focuses on developer experience and unyielding performance. Python dominates data, JavaScript rules the interfaces, while Go and Rust cement the cloud with speed and absolute memory safety. Code is more powerful, yet more approachable than ever."
  },
  {
    era: "AI Future Era",
    year: "Tomorrow",
    title: "The Final Abstraction",
    poetic: "Code writing code. The abstraction of logic itself.",
    narrative: "We are stepping beyond traditional syntax. With AI-assisted programming and natural language models generating functional architecture on-demand, the line between human intention and machine execution is blurring. We are moving from writing code, to conducting it."
  }
];
