<script lang="ts">
  import { epochs } from '$lib/data/epochs';

  // Svelte 5 state to track which cinematic section is currently in viewport focus
  let activeIndex = $state(-1);

  // Svelte 5 equivalent of onMount. 
  // Native IntersectionObserver guarantees high performance without scroll listeners.
  $effect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Find the index of the intersecting element
            const index = Number(entry.target.getAttribute('data-index'));
            activeIndex = index;
          }
        });
      },
      {
        // 40% of the item must be visible to trigger a focus change
        threshold: 0.4, 
      }
    );

    // Observe all components marked for the narrative
    const elements = document.querySelectorAll('.narrative-section');
    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  });
</script>

<svelte:head>
  <title>Code Journey | Cinematic History</title>
  <meta name="description" content="A cinematic narrative exploring the profound evolution of programming languages." />
</svelte:head>

<!-- Global wrapper providing the smooth light color gradient -->
<div class="narrative-wrapper">
  
  <!-- TIMELINE INDICATOR (Vertical Sidebar) -->
  <aside class="timeline-indicator">
    <div class="timeline-line"></div>
    <div class="timeline-dots">
      <!-- Hero Dot -->
      <div 
        class="dot {activeIndex === -1 ? 'active' : ''}" 
        aria-label="Start"
      >
        <span class="dot-label">Start</span>
      </div>
      <!-- Epoch Dots -->
      {#each epochs as epoch, i}
        <div 
          class="dot {activeIndex === i ? 'active' : ''}" 
          aria-label={epoch.era}
        >
          <span class="dot-label">{epoch.year}</span>
        </div>
      {/each}
    </div>
  </aside>

  <main>
    <!-- INTRODUCTION: HERO -->
    <section class="chapter hero narrative-section" data-index="-1">
      <div class="content-box align-center {activeIndex === -1 ? 'is-active' : 'is-inactive'}">
        <h1 class="hero-title">Code<br/>Journey</h1>
        <p class="hero-subtitle">The profound evolution of processing thought.</p>
      </div>
      <div class="scroll-hint {activeIndex === -1 ? 'visible' : 'hidden'}">Scroll down to begin</div>
    </section>

    <!-- NARRATIVE CHAPTERS -->
    {#each epochs as epoch, i}
      <section class="chapter timeline-block narrative-section" data-index={i}>
        <div class="sticky-container">
          
          <!-- Cinematic Focus Box -->
          <div 
            class="content-box card {activeIndex === i ? 'is-active' : 'is-inactive'} {i % 2 === 0 ? 'align-left' : 'align-right'}"
          >
            <div class="epoch-header">
              <span class="meta-tag">{epoch.year}</span>
              <span class="meta-divider">·</span>
              <span class="meta-era">{epoch.era}</span>
            </div>

            <h2 class="section-title">{epoch.title}</h2>
            <p class="poetic-text">"{epoch.poetic}"</p>
            <p class="section-desc">{epoch.narrative}</p>

            <!-- CODE WINDOW: VISUAL EVOLUTION -->
            <div class="code-window">
              <div class="code-header">
                <span class="dot-red"></span>
                <span class="dot-amber"></span>
                <span class="dot-green"></span>
              </div>
              <pre class="code-content">
                {#each epoch.codeSnippet as line}
                  <code>{line}</code>
                {/each}
              </pre>
            </div>

            <!-- THE WOW MOMENT: ... -->

          </div>
        </div>
      </section>
    {/each}

    <!-- FINAL OUTRO SECTION -->
    <section class="chapter outro narrative-section" data-index={epochs.length}>
      <div class="content-box align-center {activeIndex === epochs.length ? 'is-active' : 'is-inactive'}">
        <blockquote class="outro-quote">
          "There are only two kinds of languages: the ones people complain about and the ones nobody uses."
          <footer class="outro-author">— Bjarne Stroustrup</footer>
        </blockquote>
      </div>
    </section>

    <!-- EXTRA BOTTOM SPACING -->
    <div class="final-spacer"></div>
  </main>
</div>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    background-color: #e0f2fe; 
    color: #0f172a;
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
    overflow-x: hidden;
  }

  .narrative-wrapper {
    width: 100%;
    position: relative;
    /* Massive linear gradient fixing the background transition jitter natively */
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

  /* ---------------------------------
     TIMELINE INDICATOR (SIDEBAR)
  --------------------------------- */
  .timeline-indicator {
    position: fixed;
    right: 2rem;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    padding: 1rem 0;
    z-index: 50;
  }

  .timeline-line {
    position: absolute;
    right: 3px;
    top: 5px;
    bottom: 5px;
    width: 2px;
    background: rgba(15, 23, 42, 0.1);
    border-radius: 2px;
    z-index: 1;
  }

  .timeline-dots {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    position: relative;
    z-index: 2;
  }

  .dot {
    width: 8px;
    height: 8px;
    background: #94a3b8;
    border-radius: 50%;
    position: relative;
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    cursor: default;
  }

  .dot.active {
    background: #2563eb;
    transform: scale(1.8);
    box-shadow: 0 0 10px rgba(37, 99, 235, 0.4);
  }

  .dot-label {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(4px);
    padding: 0.2rem 0.5rem;
    border-radius: 4px;
    font-size: 0.65rem;
    font-weight: 700;
    color: #0f172a;
    letter-spacing: 0.1em;
    opacity: 0;
    pointer-events: none;
    transition: all 0.4s ease;
  }

  .dot.active .dot-label {
    opacity: 1;
    transform: translateY(-50%) translateX(-5px);
  }

  @media (max-width: 1024px) {
    .timeline-indicator { display: none; }
  }


  /* ---------------------------------
     LAYOUT AND STRUCTURAL BLOCKS
  --------------------------------- */
  .chapter {
    position: relative;
    width: 100%;
  }

  .hero {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .timeline-block {
    height: 180vh; 
    margin-bottom: 20vh;
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

  /* ---------------------------------
     CINEMATIC FOCUS STYLES
  --------------------------------- */
  .content-box {
    width: 100%;
    max-width: 800px;
    padding: 2.5rem;
    /* The core cinematic transition for blurring / focusing elements */
    transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1), 
                opacity 1.2s ease, 
                filter 1.2s ease;
    will-change: transform, opacity, filter;
    margin: 0 auto;
  }

  .align-center {
    text-align: center;
  }

  .is-active {
    opacity: 1;
    transform: scale(1) translateY(0);
    filter: blur(0px);
  }

  .is-inactive {
    opacity: 0.25;
    transform: scale(0.96) translateY(20px);
    filter: blur(5px);
  }

  .align-right { margin-left: auto; text-align: right; padding-right: 12vw; }
  
  /* ---------------------------------
     CODE WINDOW (VISUAL EVOLUTION)
  --------------------------------- */
  .code-window {
    margin-top: 3rem;
    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .code-window:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(37, 99, 235, 0.1);
    border-color: rgba(37, 99, 235, 0.3);
  }

  .code-header {
    background: rgba(0, 0, 0, 0.03);
    padding: 0.8rem 1.2rem;
    display: flex;
    gap: 6px;
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  }

  .code-header span {
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }

  .dot-red { background: #ff5f56; }
  .dot-amber { background: #ffbd2e; }
  .dot-green { background: #27c93f; }

  .code-content {
    margin: 0;
    padding: 1.5rem;
    font-family: 'JetBrains Mono', 'Fira Code', 'Courier New', monospace;
    font-size: 0.9rem;
    line-height: 1.6;
    color: #334155;
    background: transparent;
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }

  .code-content code {
    display: block;
    white-space: pre;
  }




  /* ---------------------------------
     TYPOGRAPHY
  --------------------------------- */
  .hero-title {
    font-size: clamp(4rem, 15vw, 12rem);
    font-weight: 900;
    line-height: 1.0;
    letter-spacing: -0.06em;
    margin: 0;
    padding-bottom: 0.2em;
    background: linear-gradient(90deg, #1e293b, #6366f1, #38bdf8, #1e293b);
    background-size: 300% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: textShimmer 6s linear infinite;
    text-align: center;
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
    transition: opacity 0.5s ease;
  }
  .scroll-hint.hidden { opacity: 0; }
  .scroll-hint.visible { animation: fadePulse 3s infinite ease-in-out; }

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

  .outro {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: transparent;
  }

  .outro-quote {
    font-size: clamp(1.5rem, 3vw, 2.8rem);
    font-family: Georgia, serif;
    font-style: italic;
    color: #475569;
    line-height: 1.5;
    max-width: 900px;
    margin: 0 auto;
    border: none;
    padding: 0;
  }

  .outro-author {
    font-size: 1.1rem;
    font-weight: 700;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    color: #64748b;
    margin-top: 2rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .final-spacer {
    height: 40vh;
  }

  @media (max-width: 768px) {
    .sticky-container { padding: 0 1.5rem; }
    .align-left, .align-right { text-align: left; margin: 0 auto; padding: 0; }
    .align-right .section-desc { margin-left: 0; }
    .align-right .epoch-header { justify-content: flex-start; }
    .content-box { padding: 1.5rem 0; }
    .outro-quote { font-size: 1.5rem; padding: 0 1rem; }
  }
</style>
