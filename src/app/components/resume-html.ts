/**
 * Christopher Kenreigh Resume HTML
 * This file contains the HTML resume that opens in a new tab
 */

export const resumeHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Christopher Kenreigh – Director of UI/UX</title>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;700&family=DM+Serif+Display&display=swap" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --blue: #2563c7;
      --dark: #111111;
      --mid: #444444;
      --light: #666666;
      --rule: #dddddd;
      --bg: #ffffff;
      --sidebar-bg: #f7f8fa;
    }

    body {
      font-family: 'DM Sans', sans-serif;
      font-size: 10.5pt;
      color: var(--dark);
      background: #e8e8e8;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      padding: 32px 16px;
      min-height: 100vh;
    }

    .page {
      background: var(--bg);
      width: 850px;
      max-width: 100%;
      box-shadow: 0 4px 40px rgba(0,0,0,0.18);
      display: grid;
      grid-template-rows: auto 1fr;
    }

    /* ── HEADER ── */
    header {
      padding: 28px 36px 18px;
      border-bottom: 2px solid var(--rule);
    }
    header h1 {
      font-family: 'DM Serif Display', serif;
      font-size: clamp(20pt, 5vw, 30pt);
      font-weight: 400;
      color: var(--dark);
      letter-spacing: -0.5px;
      line-height: 1.1;
    }
    header .title-line {
      font-size: clamp(9pt, 2.5vw, 11pt);
      font-weight: 700;
      color: var(--blue);
      margin: 3px 0 8px;
      letter-spacing: 0.2px;
    }
    header .contact {
      font-size: 9.5pt;
      color: var(--mid);
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      align-items: center;
    }
    header .contact a {
      color: var(--blue);
      text-decoration: none;
      font-weight: 500;
    }
    header .contact span { color: var(--rule); }

    /* ── BODY LAYOUT ── */
    .body {
      display: grid;
      grid-template-columns: 1fr 240px;
    }

    /* ── LEFT (Experience) ── */
    .main {
      padding: 24px 36px 32px;
      border-right: 1px solid var(--rule);
    }

    .section-title {
      font-family: 'DM Serif Display', serif;
      font-size: 14pt;
      font-weight: 400;
      color: var(--dark);
      border-bottom: 1.5px solid var(--dark);
      padding-bottom: 4px;
      margin-bottom: 14px;
    }

    .job { margin-bottom: 20px; }

    .job-title {
      font-size: 10.5pt;
      font-weight: 700;
      color: var(--dark);
    }
    .job-company {
      font-size: 10pt;
      font-weight: 500;
      color: var(--blue);
      text-decoration: none;
    }
    .job-company:hover { text-decoration: underline; }

    .job-meta {
      font-size: 8.5pt;
      color: var(--light);
      margin: 2px 0 6px;
      display: flex;
      align-items: center;
      gap: 6px;
      flex-wrap: wrap;
    }
    .job-meta .material-symbols-outlined {
      color: #00A000;
      font-size: 16px;
      vertical-align: middle;
    }

    .job ul {
      list-style: disc;
      padding-left: 16px;
    }
    .job ul li {
      font-size: 9.5pt;
      color: var(--mid);
      line-height: 1.5;
      margin-bottom: 3px;
    }

    /* ── RIGHT (Sidebar) ── */
    .sidebar {
      background: var(--sidebar-bg);
      padding: 24px 22px 32px;
    }

    .sidebar-section { margin-bottom: 22px; }

    .sidebar .section-title {
      font-size: 12pt;
      border-bottom-color: var(--mid);
    }

    .summary-quote {
      font-size: 9.5pt;
      font-style: italic;
      color: var(--mid);
      line-height: 1.6;
      margin-bottom: 10px;
    }

    .summary-bullets {
      list-style: disc;
      padding-left: 14px;
    }
    .summary-bullets li {
      font-size: 8.8pt;
      color: var(--mid);
      line-height: 1.55;
      margin-bottom: 3px;
    }

    .tag-list {
      display: flex;
      flex-wrap: wrap;
      gap: 5px;
      margin-top: 6px;
    }
    .tag {
      font-size: 8pt;
      font-weight: 500;
      color: var(--blue);
      background: rgba(37,99,199,0.08);
      border-radius: 3px;
      padding: 2px 7px;
    }

    .dot-list {
      list-style: disc;
      padding-left: 14px;
    }
    .dot-list li {
      font-size: 9pt;
      color: var(--mid);
      line-height: 1.6;
    }

    /* Education */
    .edu-degree {
      font-size: 9.5pt;
      font-weight: 700;
      color: var(--dark);
    }
    .edu-school {
      font-size: 9pt;
      color: var(--blue);
      font-weight: 500;
    }
    .edu-meta {
      font-size: 8.5pt;
      color: var(--light);
      margin-top: 4px;
      display: flex;
      align-items: center;
      gap: 5px;
      flex-wrap: wrap;
    }
    .edu-meta .material-symbols-outlined {
      color: #00A000;
      font-size: 15px;
      vertical-align: middle;
    }

    .share-link {
      display: block;
      text-align: right;
      font-size: 8.5pt;
      color: var(--blue);
      text-decoration: none;
      font-style: italic;
      margin-top: 16px;
    }
    .share-link:hover { text-decoration: underline; }

    /* ── MOBILE RESPONSIVE ── */
    @media (max-width: 680px) {
      body {
        padding: 0;
        background: var(--bg);
        align-items: stretch;
      }

      .page {
        width: 100%;
        box-shadow: none;
        border-radius: 0;
      }

      header {
        padding: 20px 18px 14px;
      }

      header h1 {
        font-size: 22pt;
      }

      header .title-line {
        font-size: 9pt;
      }

      header .contact {
        font-size: 9pt;
        gap: 6px;
        row-gap: 4px;
      }

      .body {
        grid-template-columns: 1fr;
        grid-template-rows: auto auto;
      }

      .main {
        padding: 18px 18px 24px;
        border-right: none;
        border-bottom: 1px solid var(--rule);
        order: 2;
      }

      .sidebar {
        padding: 18px 18px 20px;
        order: 1;
        border-bottom: 2px solid var(--rule);
      }

      .section-title {
        font-size: 13pt;
      }

      .sidebar .section-title {
        font-size: 11pt;
      }

      .job ul li {
        font-size: 9pt;
      }

      .job-meta {
        font-size: 8pt;
        gap: 4px;
      }

      .summary-quote {
        font-size: 9pt;
      }

      .tag {
        font-size: 7.5pt;
      }
    }

    @media (min-width: 681px) and (max-width: 900px) {
      body {
        padding: 16px 8px;
      }

      .page {
        width: 100%;
      }

      header {
        padding: 22px 24px 14px;
      }

      .main {
        padding: 20px 24px 28px;
      }

      .sidebar {
        padding: 20px 16px 28px;
      }

      .body {
        grid-template-columns: 1fr 200px;
      }
    }

    @media print {
      body { background: white; padding: 0; }
      .page { box-shadow: none; width: 100%; }
    }
  </style>
</head>
<body>
<div class="page">

  <!-- HEADER -->
  <header>
    <h1>Christopher Kenreigh</h1>
    <div class="title-line">Director of UI/UX | Connected Home &amp; IoT Experiences | Design Systems Architecture | Multi-Platform Product Design | Team Leadership</div>
    <div class="contact">
      <span style="color: #212121; font-weight:700">480-206-2145</span>
      <span>|</span>
      <a href="mailto:c.kenreigh@gmail.com" style="font-weight:800;">c.kenreigh@gmail.com</a>
      <span>|</span>
      <a href="https://www.linkedin.com/in/kenreigh/" target="_blank">LinkedIn</a>
      <span>|</span>
      <a href="https://www.uxapex.com/portfolioa8" target="_blank">Portfolio</a>
    </div>
  </header>

  <!-- BODY -->
  <div class="body">

    <!-- MAIN EXPERIENCE -->
    <main class="main">
      <h2 class="section-title">Experience</h2>

      <div class="job">
        <div class="job-title">Director of Product Design (Principal UX Lead)</div>
        <a class="job-company" href="https://www.plexusworldwide.com" target="_blank">Plexus Worldwide</a>
        <div class="job-meta">
          <span class="material-symbols-outlined">calendar_month</span>
          05/2024 – Present
          <span class="material-symbols-outlined">location_on</span>
          Phoenix, AZ | Office
        </div>
        <ul>
          <li>Directed team of 5 UX &amp; content designers across 3-region consumer digital ecosystem — end-to-end ownership from user research and journey mapping through prototyping, A/B testing, and post-conversion optimization</li>
          <li>Led multi-platform digital modernization leveraging behavioral analytics and Power BI; redesigned mobile-first PDPs, PLPs, cart &amp; checkout — cutting abandonment 43% and reversing operating margin from –17% to +2%</li>
          <li>Facilitated cross-functional design workshops; validated high-fidelity interactive prototypes with Product, Engineering, and Marketing to drive complex interaction decisions through usability testing</li>
          <li>Architected unified Figma design system consolidating 6 tools — 60–90% org reuse, 50% faster delivery, $370K annual designer labor savings; implemented directly in CMS for multi-platform consistency</li>
          <li>Championed AI-assisted design operations: LLM-driven prototyping and agentic workflows increased sprint velocity 35%; established team standards for AI-augmented UX practice</li>
        </ul>
      </div>

      <div class="job">
        <div class="job-title">Senior Product Designer</div>
        <a class="job-company" href="https://www.freeportmcmoran.com" target="_blank">Freeport-McMoRan</a>
        <div class="job-meta">
          <span class="material-symbols-outlined">calendar_month</span>
          08/2022 – 10/2023
          <span class="material-symbols-outlined">location_on</span>
          Phoenix, AZ | Hybrid
        </div>
        <ul>
          <li>Led end-to-end UI/UX for connected industrial digital tools — responsive web and mobile interfaces improving operational efficiency 30% while meeting regulatory compliance standards</li>
          <li>Facilitated 10+ discovery and alignment workshops; translated hardware-adjacent user needs into product requirements across cross-functional engineering teams</li>
          <li>Presented product roadmaps and Agile design strategies to C-suite; secured approval for 5 major product releases across web, iOS, and Android</li>
          <li>Built scalable MUI React design system with design token architecture — adopted across web, iOS, and Android; documentation enabled engineering to build without friction</li>
        </ul>
      </div>

      <div class="job">
        <div class="job-title">Senior Product Designer</div>
        <a class="job-company" href="https://www.opentechalliance.com" target="_blank">OpenTech Alliance</a>
        <div class="job-meta">
          <span class="material-symbols-outlined">calendar_month</span>
          05/2021 – 08/2022
          <span class="material-symbols-outlined">location_on</span>
          Phoenix, AZ | Hybrid
        </div>
        <ul>
          <li>Evangelized human-centered design to C-suite, securing budget for 3 UX initiatives and elevating org-wide UX maturity</li>
          <li>Redesigned hardware-integrated Point of Sale kiosk UI — usability testing and interaction design boosted task completion 75%</li>
          <li>Designed WCAG-compliant and legally compliant user data capture processes, reducing regulatory risk 100%</li>
          <li>Enhanced multi-platform consumer journeys through behavioral analytics and data-driven UX improvements, increasing e-commerce fulfillment 25%</li>
        </ul>
      </div>

      <div class="job">
        <div class="job-title">UX Design Lead</div>
        <a class="job-company" href="https://www.siemens.com" target="_blank">Siemens</a>
        <div class="job-meta">
          <span class="material-symbols-outlined">calendar_month</span>
          07/2020 – 05/2021
          <span class="material-symbols-outlined">location_on</span>
          Phoenix, AZ | Remote
        </div>
        <ul>
          <li>Led cross-functional design strategy to unify design systems across 4 simultaneous connected-technology product initiatives in a regulated hardware-software environment</li>
          <li>Produced design documentation and component guidelines reducing internal handoff friction 50%, enabling engineering teams to build without designer mediation</li>
          <li>Managed project planning and stakeholder alignment, securing approval for 2 high-impact UX-led initiatives</li>
          <li>Designed hardware-integrated UI layouts combining 3D spatial and AutoCAD-referenced interaction patterns for complex industrial interfaces</li>
        </ul>
      </div>

      <div class="job">
        <div class="job-title">Senior UX Designer</div>
        <a class="job-company" href="https://www.glynlyon.com" target="_blank">Glynlyon Inc</a>
        <div class="job-meta">
          <span class="material-symbols-outlined">calendar_month</span>
          02/2014 – 04/2019
          <span class="material-symbols-outlined">location_on</span>
          Phoenix, AZ | Office
        </div>
        <ul>
          <li>Designed WCAG and ADA-compliant inclusive experiences across multi-platform digital products; deep iOS and Android platform guideline expertise</li>
          <li>Drove data-informed product design through user research, behavioral insights, and usability testing — roadmapping UI features increasing ease of use 65%</li>
          <li>Communicated complex interaction concepts to engineering and product partners to ensure technical feasibility across multiple platforms</li>
          <li>Led cross-functional teams through human-centered Design Thinking workshops to align user needs with product strategy</li>
        </ul>
      </div>
    </main>

    <!-- SIDEBAR -->
    <aside class="sidebar">

      <div class="sidebar-section">
        <h2 class="section-title">Summary</h2>
        <p class="summary-quote" style="color: #212121; font-weight:700">"Director-level UI/UX leader — from strategy, user research, and interaction design to coded, high-fidelity prototypes — defining connected experiences across IoT, mobile, and consumer digital ecosystems that simplify life and drive measurable outcomes."</p>
        <ul class="summary-bullets">
          <li>12+ years leading end-to-end UI/UX for consumer technology and multi-platform digital products</li>
          <li>Design system architect — 60–90% org adoption across web, iOS, and Android</li>
          <li>Connects user research, journey mapping, and behavioral analytics to product roadmap decisions</li>
          <li>Leads and grows multi-disciplinary UX teams; builds design culture and ops infrastructure</li>
          <li>AI-augmented design practitioner — LLM workflows, agentic prototyping, smart home UX</li>
          <li>WCAG/ADA compliance expert; accessibility-first design across connected product ecosystems</li>
        </ul>
      </div>

      <div class="sidebar-section">
        <h2 class="section-title">Key Achievements</h2>
        <ul class="dot-list">
          <li>43% checkout abandonment reduction — multi-platform UX redesign</li>
          <li>–17% to +2% margin reversal via AI persona platform</li>
          <li>Design system: 60–90% reuse, $370K annual savings</li>
          <li>10+ C-suite approvals for major product initiatives</li>
          <li>35% sprint velocity lift via AI-assisted design ops</li>
          <li>100% regulatory compliance on consumer-facing flows</li>
        </ul>
      </div>

      <div class="sidebar-section">
        <h2 class="section-title">Skills</h2>
        <div class="tag-list">
          <span class="tag">UI/UX Strategy</span>
          <span class="tag">Connected Home UX</span>
          <span class="tag">IoT Interaction Design</span>
          <span class="tag">Design Systems</span>
          <span class="tag">Figma</span>
          <span class="tag">Design Tokens</span>
          <span class="tag">Component Architecture</span>
          <span class="tag">Coded Prototypes</span>
          <span class="tag">User Research</span>
          <span class="tag">A/B Testing</span>
          <span class="tag">Usability Testing</span>
          <span class="tag">WCAG Compliance</span>
          <span class="tag">iOS &amp; Android</span>
          <span class="tag">MUI React</span>
          <span class="tag">Google MD3</span>
          <span class="tag">Team Leadership</span>
          <span class="tag">Design Ops</span>
          <span class="tag">Agile / Scrum</span>
        </div>
      </div>

      <div class="sidebar-section">
        <h2 class="section-title">AI &amp; Emerging Tech</h2>
        <div class="tag-list">
          <span class="tag">LLM-Based Workflows</span>
          <span class="tag">Agentic AI</span>
          <span class="tag">AI-Assisted Prototyping</span>
          <span class="tag">RAG Systems</span>
          <span class="tag">Multimodal AI</span>
          <span class="tag">Smart Home UX</span>
          <span class="tag">IoT Patterns</span>
        </div>
      </div>

      <div class="sidebar-section">
        <h2 class="section-title">Education</h2>
        <div class="edu-degree">Bachelor of Art</div>
        <div class="edu-school">The Art Institute of Phoenix</div>
        <div class="edu-meta">
          <span class="material-symbols-outlined">calendar_month</span>
          09/2002 – 09/2005
          <span class="material-symbols-outlined">location_on</span>
          Phoenix, AZ
        </div>
      </div>

    </aside>
  </div><!-- /body -->
</div><!-- /page -->
</body>
</html>`;

/**
 * Opens the resume HTML in a new browser tab using Blob URL
 */
export function openResumeInNewTab(): void {
  // Create a Blob from the HTML string
  const blob = new Blob([resumeHTML], { type: 'text/html' });
  
  // Generate a blob URL
  const blobURL = URL.createObjectURL(blob);
  
  // Open in new tab
  const newWindow = window.open(blobURL, '_blank');
  
  // Clean up the blob URL after a delay to ensure the page loads
  if (newWindow) {
    setTimeout(() => {
      URL.revokeObjectURL(blobURL);
    }, 1000);
  }
}
