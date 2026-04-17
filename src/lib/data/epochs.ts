export interface Epoch {
  year: string;
  title: string;
  description: string;
}

export const epochs: Epoch[] = [
  {
    year: "1940s",
    title: "Machine Code",
    description: "The dawn of computing where instructions were fed directly to the hardware using binary patterns. Every calculation required painstaking manual configuration."
  },
  {
    year: "1950s",
    title: "Assembly Era",
    description: "A major leap forward, introducing mnemonic symbols to represent machine operations. It made programming more human-readable while still maintaining direct control over hardware."
  },
  {
    year: "1957",
    title: "High-Level Revolution",
    description: "The arrival of Fortran and COBOL. High-level languages designed for scientists and business, abstracting away the hardware to focus on logic and computation."
  },
  {
    year: "1972",
    title: "Structured Programming",
    description: "The birth of the C language. Providing the perfect balance between high-level abstraction and low-level efficiency, it became the foundation of modern operating systems."
  },
  {
    year: "1990s - Present",
    title: "The Modern Era",
    description: "From the rapid development of Python and JavaScript to the memory safety of Rust. We live in an age of diverse, powerful languages that power everything from simple scripts to global-scale infrastructure."
  }
];
