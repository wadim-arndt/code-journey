<script lang="ts">
  // Core Journey - Apple-Inspired Editorial Refactor (Pure CSS)
</script>

<svelte:head>
  <title>Code Journey | The History of Programming</title>
  <meta name="description" content="An interactive journey through the history of programming languages." />
</svelte:head>

<div class="editorial-container">
  <!-- CHAPTER 1: HERO -->
  <section class="chapter hero">
    <div class="content-box align-center scale-on-hover">
      <h1 class="hero-title">Code<br/>Journey</h1>
      <p class="hero-subtitle">Exploring the architecture of human thought.</p>
    </div>
    <div class="scroll-hint">Scroll to begin</div>
  </section>

  <!-- CHAPTER 2: MACHINE CODE -->
  <section class="chapter timeline-block tint-machine">
    <div class="sticky-container">
      <div class="content-box align-left scale-on-hover card">
        <div class="meta">1940s</div>
        <h2 class="section-title">Machine Code</h2>
        <p class="section-desc">
          Direct communication with hardware. Binary patterns fed into vacuum tubes, where logic was physically wired and memory was a room-sized machine.
        </p>
      </div>
    </div>
  </section>

  <!-- CHAPTER 3: ASSEMBLY -->
  <section class="chapter timeline-block tint-assembly">
    <div class="sticky-container">
      <div class="content-box align-right scale-on-hover card">
        <div class="meta">1950s</div>
        <h2 class="section-title">Assembly Era</h2>
        <p class="section-desc">
          The first abstraction. Mnemonics replaced binary, allowing humans to read and write instructions while maintaining surgical control over processors.
        </p>
      </div>
    </div>
  </section>

  <!-- CHAPTER 4: FORTRAN/COBOL -->
  <section class="chapter timeline-block tint-highlevel">
    <div class="sticky-container">
      <div class="content-box align-left scale-on-hover card">
        <div class="meta">1957 – 1960s</div>
        <h2 class="section-title">High-Level Revolution</h2>
        <p class="section-desc">
          Codifying science and business logic into languages that resembled mathematical formulas and English sentences.
        </p>
      </div>
    </div>
  </section>

  <!-- CHAPTER 5: C LANGUAGE -->
  <section class="chapter timeline-block tint-c">
    <div class="sticky-container">
      <div class="content-box align-right scale-on-hover card">
        <div class="meta">1972</div>
        <h2 class="section-title">C Language</h2>
        <p class="section-desc">
          The portable foundation. Simple, powerful, and efficient—C bridged the gap between machine precision and high-level productivity.
        </p>
      </div>
    </div>
  </section>

  <!-- CHAPTER 6: MODERN ERA -->
  <section class="chapter timeline-block tint-modern">
    <div class="sticky-container">
      <div class="content-box align-center scale-on-hover card">
        <div class="meta">1990s – Present</div>
        <h2 class="section-title">Modern Era</h2>
        <p class="section-desc">
          The age of ecosystems. From the ubiquity of JavaScript and the simplicity of Python to the memory safety of Rust and Swift.
        </p>
      </div>
    </div>
  </section>
</div>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    background-color: #050505;
    color: #ffffff;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    overflow-x: hidden;
  }

  /* Structural Base */
  .editorial-container {
    width: 100%;
    /* Keep a dark baseline, tints will layer over */
    background: #020202; 
  }

  .chapter {
    position: relative;
    width: 100%;
  }

  /* Specific Layouts */
  .hero {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: radial-gradient(circle at center, rgba(30,30,30,0.6) 0%, #020202 70%);
  }

  /* Enormous breathing room. 150vh forces deep scrolling */
  .timeline-block {
    height: 150vh;
  }

  /* Holds the content in place while you scroll past the large timeline block */
  .sticky-container {
    position: sticky;
    top: 0;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 5vw;
    box-sizing: border-box;
  }

  /* Accent Tints (CSS Background magic) 
     Uses extremely soft radial gradients layered over the dark container */
  .tint-machine   { background: radial-gradient(circle at left center, rgba(16, 28, 48, 0.4) 0%, transparent 60%); }
  .tint-assembly  { background: radial-gradient(circle at right center, rgba(38, 20, 50, 0.4) 0%, transparent 60%); }
  .tint-highlevel { background: radial-gradient(circle at left center, rgba(50, 35, 10, 0.4) 0%, transparent 60%); }
  .tint-c         { background: radial-gradient(circle at right center, rgba(10, 45, 50, 0.4) 0%, transparent 60%); }
  .tint-modern    { background: radial-gradient(circle at center, rgba(50, 50, 50, 0.3) 0%, transparent 70%); }

  /* Content Boxes and Alignment */
  .content-box {
    width: 100%;
    max-width: 800px;
    padding: 2rem;
    transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s ease;
  }

  .align-center {
    margin: 0 auto;
    text-align: center;
  }

  .align-left {
    margin-right: auto;
    text-align: left;
  }

  .align-right {
    margin-left: auto;
    text-align: right;
  }

  /* Cinematic Hover State (Pure CSS) */
  .scale-on-hover {
    transform: scale(0.98);
    opacity: 0.85;
  }

  .scale-on-hover:hover {
    transform: scale(1);
    opacity: 1;
  }

  /* Typography Scale */
  .hero-title {
    font-size: clamp(4rem, 15vw, 10rem);
    font-weight: 800;
    line-height: 0.9;
    letter-spacing: -0.05em;
    margin: 0;
    background: linear-gradient(135deg, #ffffff 0%, #777777 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .hero-subtitle {
    font-size: clamp(1rem, 2vw, 1.5rem);
    font-weight: 300;
    color: #888;
    margin-top: 2rem;
    letter-spacing: 0.05em;
  }

  .meta {
    font-size: 0.75rem;
    font-weight: 700;
    color: rgba(255, 255, 255, 0.3);
    letter-spacing: 0.3em;
    text-transform: uppercase;
    margin-bottom: 1.5rem;
  }

  .section-title {
    font-size: clamp(2.5rem, 6vw, 5rem);
    font-weight: 700;
    margin: 0 0 1rem 0;
    line-height: 1.1;
    letter-spacing: -0.03em;
  }

  .section-desc {
    font-size: clamp(1.1rem, 2vw, 1.6rem);
    line-height: 1.6;
    font-weight: 300;
    color: #aaaaaa;
    max-width: 600px;
    margin: 0;
    opacity: 0.9;
  }

  /* For align-right, we want the description to wrap correctly */
  .align-right .section-desc {
    margin-left: auto;
  }

  /* Scroll prompt */
  .scroll-hint {
    position: absolute;
    bottom: 3rem;
    left: 50%;
    transform: translateX(-50%);
    font-size: 0.75rem;
    color: #444;
    text-transform: uppercase;
    letter-spacing: 0.3em;
    animation: fadePulse 3s infinite ease-in-out;
  }

  @keyframes fadePulse {
    0% { opacity: 0.2; }
    50% { opacity: 0.8; }
    100% { opacity: 0.2; }
  }

  /* Mobile Tweaks */
  @media (max-width: 768px) {
    .sticky-container {
      padding: 0 2rem;
    }
    
    /* Revert alignment to center on very small screens for readability */
    .align-left, .align-right {
      text-align: left;
      margin: 0 auto;
    }
    
    .align-right .section-desc {
      margin-left: 0;
    }
    
    .tint-machine, .tint-assembly, .tint-highlevel, .tint-c {
      background: radial-gradient(circle at center, rgba(50, 50, 50, 0.2) 0%, transparent 60%);
    }
  }
</style>
