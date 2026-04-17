<script lang="ts">
  import { epochs } from '$lib/data/epochs';

  // JS has been completely removed to solve scroll stuttering.
  // The layout now relies 100% on CSS rendering pipelines.
</script>

<svelte:head>
  <title>Code Journey | Cinematic History</title>
  <meta name="description" content="A cinematic narrative exploring the profound evolution of programming languages." />
</svelte:head>

<!-- Global wrapper that natively calculates the smooth scroll gradient -->
<div class="narrative-wrapper">
  <main>
    <!-- INTRODUCTION: HERO -->
    <section class="chapter hero">
      <div class="content-box align-center">
        <!-- Replaced hover scale with continuous shimmer animation and fixed line height -->
        <h1 class="hero-title">Code<br/>Journey</h1>
        <p class="hero-subtitle">The profound evolution of processing thought.</p>
      </div>
      <div class="scroll-hint">Scroll down to begin</div>
    </section>

    <!-- NARRATIVE CHAPTERS -->
    {#each epochs as epoch, i}
      <section class="chapter timeline-block">
        <div class="sticky-container">
          <div class="content-box card" class:align-left={i % 2 === 0} class:align-right={i % 2 !== 0}>
            
            <div class="epoch-header">
              <span class="meta-tag">{epoch.year}</span>
              <span class="meta-divider">·</span>
              <span class="meta-era">{epoch.era}</span>
            </div>

            <h2 class="section-title">{epoch.title}</h2>
            <p class="poetic-text">"{epoch.poetic}"</p>
            <p class="section-desc">{epoch.narrative}</p>
            
          </div>
        </div>
      </section>
    {/each}
  </main>
</div>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    /* Soft sky blue base fallback */
    background-color: #e0f2fe; 
    /* Changed globally to dark text for the airy palette */
    color: #0f172a;
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
    overflow-x: hidden;
  }

  .narrative-wrapper {
    width: 100%;
    /* Pure CSS performance fix: massive linear gradient mapping the 9 sections */
    /* Hero: #e0f2fe (sky) 
       Origins: #cffafe (cyan)
       Machine: #f3e8ff (lavender)
       Assembly: #ccfbf1 (teal)
       High Level: #fef3c7 (warm white)
       Structured: #e0e7ff (indigo)
       OO Era: #fce7f3 (pink)
       Internet: #a5f3fc (bright cyan)
       Modern: #dbeafe (periwinkle)
       Future: #ffffff (white) */
    background: linear-gradient(
      to bottom,
      #e0f2fe 0%,
      #cffafe 10%,
      #f3e8ff 20%,
      #ccfbf1 30%,
      #fef3c7 40%,
      #e0e7ff 50%,
      #fce7f3 60%,
      #a5f3fc 70%,
      #dbeafe 80%,
      #ffffff 90%,
      #ffffff 100%
    );
  }

  .chapter {
    position: relative;
    width: 100%;
  }

  /* Cinematic Hero */
  .hero {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .hero-title {
    font-size: clamp(4rem, 15vw, 12rem);
    font-weight: 900;
    /* Fixed line height spacing */
    line-height: 1.0;
    letter-spacing: -0.06em;
    margin: 0;
    padding-bottom: 0.2em; /* Stop descenders from clipping */

    /* Subtlest continuous animated shimmer flow */
    background: linear-gradient(90deg, #1e293b, #6366f1, #38bdf8, #1e293b);
    background-size: 300% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: textShimmer 6s linear infinite;
  }

  @keyframes textShimmer {
    0% { background-position: 0% center; }
    100% { background-position: -300% center; }
  }

  .hero-subtitle {
    font-size: clamp(1.2rem, 2vw, 1.8rem);
    font-weight: 300;
    color: #475569;
    margin-top: 1rem;
    letter-spacing: 0.05em;
  }

  .scroll-hint {
    position: absolute;
    bottom: 3rem;
    left: 50%;
    transform: translateX(-50%);
    font-size: 0.75rem;
    color: #64748b;
    text-transform: uppercase;
    letter-spacing: 0.4em;
    animation: fadePulse 3s infinite ease-in-out;
  }

  /* Deep Narrative Block */
  .timeline-block {
    height: 150vh; /* Huge spacing forces scrolling and slows pacing */
  }

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

  .content-box {
    width: 100%;
    max-width: 800px;
    padding: 2.5rem;
    /* Removed all hover-scale transitions to improve rendering stability */
  }

  /* Structural alignments */
  .align-center { margin: 0 auto; text-align: center; }
  .align-left { margin-right: auto; text-align: left; padding-left: 8vw; }
  .align-right { margin-left: auto; text-align: right; padding-right: 8vw; }

  /* Narrative Typography Rules */
  .epoch-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2rem;
    justify-content: flex-start;
  }
  .align-right .epoch-header { justify-content: flex-end; }

  .meta-tag, .meta-era {
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 0.25em;
    text-transform: uppercase;
  }

  .meta-tag { color: #64748b; opacity: 0.8; }
  .meta-era { color: #334155; }
  .meta-divider { color: #94a3b8; font-size: 1.5rem; line-height: 0.5; }

  .section-title {
    font-size: clamp(3rem, 7vw, 6rem);
    font-weight: 700;
    margin: 0 0 1.5rem 0;
    line-height: 1.05;
    letter-spacing: -0.04em;
    color: #0f172a;
  }

  .poetic-text {
    font-size: clamp(1.2rem, 2.5vw, 2rem);
    font-family: Georgia, serif;
    font-style: italic;
    color: #475569;
    line-height: 1.4;
    margin: 0 0 2rem 0;
    opacity: 0.9;
  }

  .section-desc {
    font-size: clamp(1.1rem, 2vw, 1.4rem);
    line-height: 1.7;
    font-weight: 400;
    color: #334155;
    max-width: 650px;
    margin: 0;
  }
  .align-right .section-desc { margin-left: auto; }

  @keyframes fadePulse {
    0% { opacity: 0.2; }
    50% { opacity: 1; }
    100% { opacity: 0.2; }
  }

  @media (max-width: 768px) {
    .sticky-container { padding: 0 1.5rem; }
    .align-left, .align-right { text-align: left; margin: 0 auto; padding: 0; }
    .align-right .section-desc { margin-left: 0; }
    .align-right .epoch-header { justify-content: flex-start; }
    .content-box { padding: 1.5rem 0; }
  }
</style>
