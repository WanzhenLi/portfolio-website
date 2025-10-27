import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { images } from '../../constants/images';

// Specify the projects data
const projectsData = {
  "pic-to-merch-web-app": {
  title: "PicToMerch: AI-Powered Photo Restyle Web App",
  imageUrl: images.projects.pictomercHero,
  techStack: ["React", "Next.js", "Node.js", "Typescript", "Vercel", "Supabase", "OpenAI API", "LoRA"],
  content: [
    `<h2>Project Overview</h2>
    <p>PicToMerch is a web app that turns a user’s photo into merch-ready art in one click. Users upload a photo, pick a style and aspect ratio, and get a stylized image or a clean transparent background. It runs at <a href="https://eventpage.pictomerch.com" target="_blank" rel="noopener">eventpage.pictomerch.com</a>, built with React and Next.js, and deployed on Vercel.</p>`,

    `<h2>What it does</h2>
    <ul>
      <li>Switch between “For People” and “For Pets” with 23+ style prompts (Watercolor, Ghibli, Renaissance, Flat Vector, Webtoon, etc.).</li>
      <li>Select “Original (transparent background)” to remove the background and return a clean PNG.</li>
      <li>Preview frames (Frameless, Black, Oak, Walnut) and confirm to save.</li>
      <li>Admin page to review and download confirmed results.</li>
    </ul>`,

    `<h2>How it works end-to-end</h2>
    <h3>Frontend</h3>
    <p>Next.js App Router + React. The UI guides users through upload → choose style/ratio → result → confirm, with visible progress for runs up to ~90s.</p>
    <h3>Image pipeline</h3>
    <ul>
      <li>Automatic compression for images &gt; 2MB to 1920×1920 at ~85% quality to reduce latency and cost.</li>
      <li>Style edits use OpenAI’s <code>gpt-image-1</code> edit API. Prompts are tuned to preserve face features, pose, and color consistency, and match aspect ratio (1:1 or 2:3).</li>
      <li>Background removal uses PicWish API to output a clean transparent PNG.</li>
      <li>Outputs are saved to Supabase Storage and return public URLs; confirmed items are stored in PostgreSQL via Prisma.</li>
    </ul>
    <h3>Reliability</h3>
    <ul>
      <li>Resilient retries for HTTP 429 using exponential backoff plus <code>Retry-After</code>, achieving ~99% job success during peak hours.</li>
      <li>Generation route runs on Node.js runtime with extended timeout for heavy images.</li>
    </ul>
    <h3>Deployment and storage</h3>
    <p>Deployed on Vercel. Supabase buckets: <code>original-images</code> (raw uploads) and <code>images</code> (generated results), both public for direct upload and delivery. Admin access protected via session cookie and middleware.</p>`,

    `<h2>Engineering highlights</h2>
    <ul>
      <li>Multi-model backend: OpenAI for style edits; PicWish for background removal; Sharp for server-side image normalization.</li>
      <li>Prompt engineering across 23+ styles to balance likeness, cleanliness, and consistency; aspect ratio prompts to guide composition.</li>
      <li>Async workflow and optimizations: compression and parallel jobs reduced average generation time by ~25% and API cost by ~30%.</li>
      <li>UX: steady progress feedback so users know the system is working during longer runs.</li>
      <li>Analytics: PostgreSQL-backed dashboard over 500+ generations to A/B test prompts; improved confirm/save rate by ~15%.</li>
    </ul>`,

    `<h2>Impact and results</h2>
    <ul>
      <li>200+ beta users with &gt;92% satisfaction.</li>
      <li>Stable under rate limits due to backoff and <code>Retry-After</code> support.</li>
      <li>Simple flow from upload to confirm and save, with merch-ready outputs.</li>
    </ul>`,

    `<h2>Tech stack</h2>
    <ul>
      <li>Frontend: React, Next.js (App Router), Tailwind CSS, Framer Motion</li>
      <li>Backend/APIs: Next.js API routes (Node runtime), OpenAI Images Edit (<code>gpt-image-1</code>), PicWish</li>
      <li>Storage &amp; DB: Supabase Storage, PostgreSQL with Prisma</li>
      <li>Infra &amp; Tools: Vercel, Sharp for server-side processing</li>
    </ul>`
  ]
},
  "foxconn-longhua-forecasting": {
    title: "Foxconn Longhua: Daily P&L Forecasting and Product Mix Insights",
    imageUrl: images.projects.foxconnPL,
    techStack: ["Python", "pandas", "statsmodels", "Prophet", "Nixtla TimeGPT", "SQL"],
    content: [
      `<h2>Role and Stack</h2>
      <p><strong>Role:</strong> Data modeler/analyst <br />
      <strong>Stack:</strong> Python (pandas, statsmodels, Prophet), Nixtla TimeGPT, SQL, Excel, JarviX BI<br />
      <strong>Focus:</strong> EDA, cost/profit drivers, time-series forecasting, product-level unit economics.</p>`,

      `<h2>Project Overview</h2>
      <p>This project began with a simple question from operations leadership at Foxconn’s Longhua site: Are we making more money over time, and which product lines are driving (or dragging) profitability?<br/>
      I built an end-to-end analysis that cleans and integrates daily operational data, explains cost and profit drivers, and forecasts daily profit for the next 30 days. The output includes trend diagnostics, weekly seasonality, and concrete recommendations by department and product line.</p>`,

      `<h2>Data & Method</h2>
      <h3>Data sources</h3>
      <ul>
        <li>Daily revenue, cost, and profit (11 months)</li>
        <li>Monthly labor cost by department</li>
        <li>Product-level inbound/finish counts by model and month for Sharp and Logitech (logi)</li>
      </ul>
      <h3>Key preprocessing</h3>
      <ul>
        <li>Standardized product naming across 2023–2024 orders</li>
        <li>Reconciled missing/irregular values (e.g., April logi cost gap)</li>
        <li>Built a proportional allocation method to estimate model-level monthly labor cost and profit from plant totals: compute each model’s share of orders per month, multiply by monthly totals, aggregate across months, then divide by orders for per-order unit economics.</li>
      </ul>`,

      `<h2>Forecasting setup</h2>
      <p><strong>Models:</strong> Prophet, SARIMA, Holt-Winters; zero-shot baseline with Nixtla TimeGPT.<br/>
      <strong>Steps:</strong> time-series decomposition → fit/forecast → compare trajectory and weekly patterns → synthesize narrative for decisions.</p>`,

      `<h2>What I Found (Highlights)</h2>
      <ol>
        <li><strong>Top-line trend is positive.</strong> Revenue trend +4,837.53/day; cost +3,771.52/day; profit +1,066.04/day. Growth is healthy and cost growth is controlled.</li>
        <li><strong>Biggest profit lever is consumables.</strong> Consumable cost (especially on logi) has the strongest negative relationship with profit—larger than regular headcount. Prioritize consumable cost control for fastest lift.</li>
        <li><strong>Departmental labor patterns.</strong> Regular shifts dominate labor cost; overtime concentrates on weekends. Assembly/Packaging bears largest absolute cost; SMT shows highest importance during regular attendance → target SMT for cost discipline. Warehouse/Logistics and QA carry most overtime.</li>
        <li><strong>Product-level dynamics.</strong> Sharp: SX3 grows fastest and is most important to cost/profit. Logi: LT6 shows the clearest revenue rebound and best profitability after September; others trend similarly in cost.</li>
        <li><strong>Unit economics (per order).</strong> Labor cost per order — highest OE4 ≈ 42.72; next KAG ≈ 28.07; lowest SX3 ≈ 15.55. Profit per order — highest SX3 ≈ 32.46; next KDD ≈ 25.25; OG6 ≈ 20.64. Loss-makers: OE6 (≈ –36.30), plus J3P, SXI, SX1, KAG.</li>
      </ol>`,

      `<h2>Forecasting: Next 30 Days</h2>
      <ul>
        <li><strong>Prophet:</strong> Gentle uptrend pre-Aug, strong rise post-Aug; weekly seasonality peaks on Wednesday, then Monday; declines toward Sunday.</li>
        <li><strong>SARIMA:</strong> Confirms 7-day cycle and dip around October (holiday effect); forecast follows cyclical rise.</li>
        <li><strong>Holt-Winters:</strong> Sensitive to very low values around January; produces conservative downward pull as approaching next January.</li>
        <li><strong>TimeGPT:</strong> Zero-shot baseline capturing weekly oscillation with mild upward drift; useful external check.</li>
      </ul>
      <p><strong>Why multiple models?</strong> Different models encode different priors. Prophet and SARIMA agree on sustained weekly-cycle growth; Holt-Winters offers a conservative angle; TimeGPT provides an external baseline. Triangulation reduces model risk and strengthens the narrative.</p>`,

      `<h2>2024 Monthly Profit Projection</h2>
      <p>I combined 2024 monthly order volumes by model with 2023 per-order model profit from the unit-economics step. After cleaning near-duplicate model names (e.g., KDD-大礼包 → KDD), the projection shows: peak in January; decline Feb–Apr; rebound in May; dip in June; small rebound in July; gentle decline from August onward. Planning implication: push orders in April and post-June where the projection softens.</p>`,

      `<h2>Recommendations</h2>
      <ul>
        <li>Attack consumable cost first (especially on logi).</li>
        <li>Target SMT for cost discipline during regular shifts.</li>
        <li>Scale winners (SX3; KDD/OG6; LT6) and fix/exit laggards (OE6; J3P/SXI/SX1/KAG if economics don’t improve).</li>
        <li>Schedule with weekly seasonality: protect Wednesdays and Mondays; tighten weekends.</li>
        <li>Sales focus by calendar: double down in April and post-June where projected profit dips.</li>
      </ul>`,

      `<h2>What This Shows About My Skills</h2>
      <ul>
        <li><strong>Analytical rigor:</strong> Built defensible unit economics from plant-level aggregates and order shares—useful, not over-promised precision.</li>
        <li><strong>Modeling judgment:</strong> Triangulated Prophet/SARIMA/Holt-Winters with a TimeGPT baseline.</li>
        <li><strong>Business translation:</strong> Turned statistics into actions—what to optimize, what to scale, and when to push sales.</li>
        <li><strong>Communication:</strong> Summarized results for non-technical stakeholders with scenario-based recommendations.</li>
      </ul>`
    ]
  },
  "findocs-rag-system": {
    title: "Building a Financial Document Q&A System with RAG",
    imageUrl: images.projects.findocsRag,
    techStack: ["LangChain", "LangGraph", "ChromaDB", "Streamlit", "Python"],
    content: [
        `<h2>Project Overview</h2>
        <p>Over the past few months, I developed <strong>FinDocs RAG</strong> (available at <a href="https://www.findocs.online" target="_blank">www.findocs.online</a>), an intelligent Q&A system designed specifically for financial documents. The goal was simple but challenging: help investors and analysts quickly extract information from dense financial reports—earnings statements, CFO commentaries, analyst notes—without manually reading through hundreds of pages.</p>
        <p>The system uses Retrieval-Augmented Generation (RAG) to answer questions based on uploaded documents, and it always cites its sources. This is crucial in finance where accuracy and traceability are non-negotiable. You can't just have an AI making things up when millions of dollars might be at stake.</p>`,

        `<h2>Why This Project Matters</h2>
        <p>Anyone who's worked with financial documents knows the pain points. A typical earnings report can be 50+ pages of dense text and tables. If you're researching multiple companies, you might need to cross-reference dozens of documents. Traditional keyword search fails because you often need semantic understanding—"What was the revenue growth?" requires the system to understand financial concepts, not just match the word "revenue."</p>
        <p>Large Language Models (LLMs) like GPT-4 are great at understanding natural language, but they have two problems for this use case:</p>
        <ol>
            <li>They don't know about your specific documents</li>
            <li>They sometimes "hallucinate" (make up facts that sound plausible but are wrong)</li>
        </ol>
        <p>RAG solves both issues by retrieving relevant document chunks first, then generating answers strictly based on those chunks. But building a reliable RAG system—especially for finance—requires careful engineering around retrieval quality, answer reliability, and evaluation.</p>`,

        `<h2>Technical Architecture: A Multi-Stage Pipeline</h2>
        <h3>1. Document Processing & Indexing</h3>
        <p>The first challenge was handling multiple document formats. Financial data comes in PDFs, Excel spreadsheets, Word documents, and more. I built a multi-format document loader that handles all of these:</p>
        <pre><code># Supports: PDF, DOCX, CSV, XLSX, TXT, MD, and source code files
documents = loader.load_multiple_documents(file_paths)</code></pre>
        <p>Once loaded, documents are chunked using a tiktoken-aware splitter (chunk size: 1000 tokens, overlap: 100) to ensure semantic coherence. Each chunk is embedded using OpenAI's embedding model and stored in ChromaDB, a vector database that enables fast semantic search.</p>
        <p>The system uses session-based isolation—each user gets their own ChromaDB collection, so documents don't leak between users. When you upload new files, the system intelligently updates the index by computing file hashes and only re-indexing what's changed.</p>`,

        `<h3>2. The RAG Workflow: Orchestrated by LangGraph</h3>
        <p>This is where things get interesting. A naive RAG implementation would just retrieve documents and generate answers, but that leads to poor quality. Instead, I built a multi-stage workflow using <strong>LangGraph</strong>, which orchestrates the entire pipeline as a state machine:</p>
        <p><strong>Stage 1: Retrieve Documents</strong></p>
        <pre><code>documents = retriever.invoke(question)  # Semantic search in ChromaDB</code></pre>
        <p><strong>Stage 2: Grade Documents</strong></p>
        <p>Not all retrieved documents are actually relevant. This stage uses an LLM to evaluate each document:</p>
        <ul>
            <li>Does it contain information to answer the question?</li>
            <li>Is the information sufficient and complete?</li>
            <li>What's the relevance score (0.0-1.0)?</li>
        </ul>
        <p>Documents that fail this quality gate are filtered out. This dramatically reduces hallucinations because the generation step only sees high-quality, relevant context.</p>
        <p><strong>Stage 3: Generate Answer with Citations</strong></p>
        <p>Here's where the magic happens. The system formats retrieved documents with numbered markers [1], [2], [3]... and instructs the LLM to cite sources when making claims:</p>
        <pre><code>[1] NVDA-Q4FY25-CFO-Commentary.pdf | page 2 | chunk 5
Q4 FY25 revenue was $39,331 million, up 8% sequentially...

[2] NVDA-Q4FY25-CFO-Commentary.pdf | page 3 | chunk 7
Data Center revenue reached $34,658 million...</code></pre>
        <p>The prompt explicitly requires: "When you cite information, you MUST include its number in square brackets immediately after the cited information."</p>
        <p>So the final answer looks like:</p>
        <blockquote>
            <p>"NVIDIA's Q4 FY25 revenue was $39,331 million[1], driven primarily by Data Center segment growth to $34,658 million[2]."</p>
        </blockquote>
        <p>Users can click on [1] or [2] to see exactly which document chunk that came from. This transparency builds trust—you can verify every claim.</p>
        <p><strong>Stage 4: Check Hallucinations</strong></p>
        <p>As a final safety check, the system evaluates:</p>
        <ul>
            <li><strong>Document relevance:</strong> Is the answer actually grounded in the provided documents?</li>
            <li><strong>Question relevance:</strong> Does the answer actually address what was asked?</li>
        </ul>
        <p>These checks generate scores that are displayed to users, giving transparency into answer quality.</p>`,

        `<h3>3. The Evaluation Framework</h3>
        <p>One of the unique aspects of this project is the built-in evaluation system. I created a test dataset with ground-truth questions and answers based on real financial documents (NVIDIA earnings and JPMorgan Chase reports).</p>
        <p>The system computes two key metrics:</p>
        <p><strong>Normalized Exact Match (Soft EM):</strong> Does the model's answer contain the expected information? This isn't just string matching—it normalizes for units ("39,331 million" vs "39.331 billion"), punctuation, and uses regex patterns to handle variations.</p>
        <p><strong>Hit@1 (Document-Level):</strong> Did the system retrieve the correct source document? This measures retrieval accuracy independent of answer quality.</p>
        <p>Example test case:</p>
        <pre><code>{
  "question": "What is the Q4 FY25 revenue of NVDA?",
  "expected_answers": ["39,331 million", "39.331 billion", "$39,331 million"],
  "expected_docs": ["NVDA-Q4FY25-CFO-Commentary.pdf"],
  "keywords": ["39,331", "39.331", "million", "billion"]
}</code></pre>
        <p>Users can run the evaluation directly in the UI to see how the system performs across the test set. During development, this was invaluable for systematically improving retrieval and answer quality.</p>`,

        `<h2>The User Experience: Streamlit Interface</h2>
        <p>I chose Streamlit for the UI because it lets you build interactive data apps quickly. The interface is clean and focused:</p>
        <ol>
            <li><strong>Upload Section:</strong> Drag and drop multiple financial documents</li>
            <li><strong>Query Section:</strong> Ask questions in natural language</li>
            <li><strong>Results Panel:</strong> Shows the answer with inline [n] citations</li>
            <li><strong>Sources Panel:</strong> Expandable section showing the full text of cited chunks</li>
            <li><strong>Metrics Panel:</strong> Displays document relevance scores and evaluation details</li>
        </ol>
        <p>The evaluation view is particularly cool—you can see per-case results with ✅/❌ indicators, compare expected vs actual answers, and drill into why certain test cases passed or failed.</p>`,

        `<h2>Technical Challenges & Solutions</h2>
        <h3>Challenge 1: ChromaDB Session Management</h3>
        <p>Early on, I ran into issues with document persistence. Different users' documents would sometimes mix, or old documents would persist when they shouldn't.</p>
        <p><strong>Solution:</strong> Implemented session-scoped collections using Streamlit's session IDs. Each user gets a unique collection name like <code>rag-chroma-abc123</code>. On startup, the app clears the user's collection to start fresh, but doesn't affect other users.</p>
        
        <h3>Challenge 2: Preventing Answer Hallucinations</h3>
        <p>Initial tests showed the model would sometimes cite documents incorrectly or make claims not supported by the sources.</p>
        <p><strong>Solution:</strong> Three-layered approach:</p>
        <ol>
            <li>Document grading (filter irrelevant chunks before generation)</li>
            <li>Strict citation requirements in the prompt (with examples)</li>
            <li>Post-generation relevance checking</li>
        </ol>
        <p>This reduced hallucination rates significantly in my test set.</p>
        
        <h3>Challenge 3: Evaluation Metric Design</h3>
        <p>Standard exact match is too strict for financial Q&A. "39331 million" and "$39.331 billion" should both be correct.</p>
        <p><strong>Solution:</strong> Built a normalized matching system that:</p>
        <ul>
            <li>Strips punctuation and normalizes whitespace</li>
            <li>Converts units ("billions" → "b", "millions" → "m")</li>
            <li>Uses substring matching and regex patterns</li>
            <li>Falls back to keyword presence for partial credit</li>
        </ul>
        
        <h3>Challenge 4: Handling Different Document Formats</h3>
        <p>PDFs are straightforward, but Excel spreadsheets and Word docs have complex structures.</p>
        <p><strong>Solution:</strong> Created a unified <code>MultiFormatDocumentLoader</code> that routes to format-specific loaders and normalizes metadata. Each chunk tracks its original filename, page number (if applicable), and chunk ID for proper citation.</p>`,

        `<h2>Results & Learnings</h2>
        <p>The system achieves solid performance on my test set:</p>
        <ul>
            <li><strong>Normalized EM:</strong> ~70-80% (varies by test set)</li>
            <li><strong>Hit@1:</strong> ~80-90% (usually retrieves the right document)</li>
        </ul>
        <p>More importantly, it's actually useful. In manual testing with real financial documents, the citation system works reliably, and users can quickly verify answers against sources.</p>
        <p><strong>Key learnings:</strong></p>
        <ol>
            <li><strong>Quality gates matter more than you think:</strong> The document grading step was initially an afterthought but became critical for answer quality.</li>
            <li><strong>Evaluation drives improvement:</strong> Having quantitative metrics let me iterate systematically instead of guessing.</li>
            <li><strong>LangGraph is powerful for complex workflows:</strong> The state machine approach makes it easy to add new steps, modify routing logic, and handle errors gracefully.</li>
            <li><strong>Citations build trust:</strong> Users are much more confident when they can verify claims. This is essential for production applications.</li>
        </ol>`,

        `<h2>Future Improvements</h2>
        <p>If I continue developing this, I'd focus on:</p>
        <ol>
            <li><strong>Better chunk retrieval:</strong> Experiment with hybrid search (semantic + keyword), reranking, or query expansion</li>
            <li><strong>Table handling:</strong> Current system doesn't handle tables optimally—structured data extraction could help</li>
            <li><strong>Multi-document reasoning:</strong> Right now each answer is based on retrieved chunks; true multi-document synthesis would be more powerful</li>
            <li><strong>Fine-tuning for finance:</strong> A domain-specific model might improve accuracy for financial terminology</li>
            <li><strong>Caching:</strong> OpenAI API calls add up; caching embeddings and common queries would reduce costs</li>
        </ol>`,

        `<h2>Conclusion</h2>
        <p>Building FinDocs RAG taught me that production-ready RAG systems require much more than just "retrieve + generate." The careful engineering around document quality, citation systems, evaluation frameworks, and user experience makes the difference between a demo and a tool that people actually trust.</p>
        <p>The code is structured to be maintainable and extensible—each component (document loading, chunking, retrieval, generation, evaluation) is modular. I'm proud of how it turned out, and it's been a great portfolio piece to showcase both my technical skills and my ability to solve real-world problems in the finance domain.</p>
        <p>If you're interested in trying it out, visit <a href="https://www.findocs.online" target="_blank">www.findocs.online</a> or check out the code structure—the multi-stage LangGraph workflow in particular shows some interesting patterns for building reliable LLM applications.</p>`,

        `<h2>Tech Stack Summary</h2>
        <ul>
            <li><strong>Backend:</strong> Python, LangChain, LangGraph</li>
            <li><strong>LLMs:</strong> OpenAI GPT-4 (embeddings + chat)</li>
            <li><strong>Vector DB:</strong> ChromaDB</li>
            <li><strong>Frontend:</strong> Streamlit</li>
            <li><strong>Document Processing:</strong> PyPDF2, python-docx, openpyxl, pandas</li>
            <li><strong>Evaluation:</strong> Custom framework with normalized matching</li>
        </ul>`
    ]
},
  "my-portfolio-website": {
    title: "My Portfolio Website — A React project I Built to Showcase My Work",
    imageUrl: images.projects.portfolioWebsite,
    techStack: ["React", "Node.js", "Tailwind CSS", "LitElement", "Framer Motion"],
    content: [
      `<h2>Project Overview</h2>
      <p>I built this portfolio website from the ground up to demonstrate my frontend skills. It is a single-page application using React and client-side routing, with smooth in-page navigation, responsive layout, and a reusable component system. My focus was clean structure, accessibility, and maintainability.</p>`,

      `<h2>What you see at a glance</h2>
      <ul>
        <li>A modern hero section with subtle animations and social links.</li>
        <li>Clear sections for About, Skills, Education, Experience, and Projects.</li>
        <li>A Projects grid that routes to dedicated detail pages via readable slugs.</li>
        <li>A responsive header with smooth scrolling and an accessible mobile menu.</li>
      </ul>`,

      `<h2>Tech stack and key libraries</h2>
      <ul>
        <li>React 18 + React Router for SPA routing</li>
        <li>Tailwind CSS for utility-first styling, plus CSS Modules where needed</li>
        <li>Headless UI and Heroicons for accessible navigation and icons</li>
        <li>Framer Motion for purposeful micro-animations</li>
      </ul>`,

      `<h2>Architecture and routing</h2>
      <p>The app defines routes for the home page and dynamic project detail pages (e.g., <code>/projects/:slug</code>). The home route composes major sections: Hero, About, Skills, Education, Experience, and Projects. This keeps navigation fast and makes it easy to add new projects by extending data and content.</p>`,

      `<h2>Component-driven UI and reusability</h2>
      <p>I built reusable components for buttons, nav items, section titles, social links, and cards. The header uses Headless UI’s <code>Dialog</code> for a11y-friendly mobile navigation and adjusts appearance on scroll. The hero section mixes Tailwind utilities with a CSS Module for precise control, and Framer Motion supplies subtle entrance transitions.</p>`,

      `<h2>Detail pages with rich content</h2>
      <p>Each project has a dedicated page with a title, tech tags, hero image, and structured sections (overview, architecture, stack, highlights). Typography and spacing are scoped so long-form content reads well and stays consistent with the site’s design.</p>`,

      `<h2>Navigation and UX polish</h2>
      <ul>
        <li>Smooth in-page scrolling for section anchors like <code>#about</code> and <code>#projects</code>.</li>
        <li>If users are on a detail page, navigation smartly routes home before scrolling.</li>
        <li>The mobile menu is focus-trapped and predictable, improving accessibility.</li>
      </ul>`,

      `<h2>Styling approach</h2>
      <p>Tailwind provides consistent spacing, color, and typography tokens for speed and coherence. When a component needs special treatment (for example, the hero image mask), I add a small CSS Module. This hybrid approach balances iteration speed with fine-grained control.</p>`,

      `<h2>Data and assets</h2>
      <p>Static assets (logos, icons, images) live in an organized <code>assets</code> directory and are referenced through a central <code>images</code> constant. Project cards are driven by simple data with <code>slug</code> identifiers, so adding or reordering items doesn’t require layout changes.</p>`,

      `<h2>Why this project matters</h2>
      <p>This site demonstrates how I build production-quality frontends: component reuse, clear routing, accessible mobile behavior, and responsible animation. I aim for code that teams can maintain and evolve easily.</p>`,

      `<h2>What I learned</h2>
      <ul>
        <li>Reliable patterns for routing between sectioned landing pages and dynamic detail pages.</li>
        <li>A hybrid styling strategy (Tailwind + CSS Modules) that avoids global conflicts while staying productive.</li>
        <li>How to design accessible mobile navigation with Headless UI and smooth anchor scrolling.</li>
      </ul>`
    ]
  }
};

// HTML Rendering Function
const createMarkup = (html) => {
  return { __html: html };
};

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projectsData[slug];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <main className="min-h-screen">
        <div className="section-container pt-28">
          <h1 className="text-3xl font-bold text-center">Project not found</h1>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section with Full-width Background */}
      <div className="w-full bg-gradient-to-b from-secondary-light/30 to-transparent">
        <div className="section-container pt-28 pb-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>
            
            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.techStack.map((tech, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 rounded-full text-sm font-medium"
                  style={{ backgroundColor: 'rgba(41, 25, 83, 0.1)', color: 'var(--tw-color-primary)' }}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Project Image */}
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={project.imageUrl} 
                alt={project.title}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Content Section with Styled Elements */}
      <div className="section-container py-16">
        <div className="max-w-4xl mx-auto">
          <style>
            {`
              .project-content h2 {
                font-size: 1.875rem;
                font-weight: 700;
                margin-bottom: 1.5rem;
                margin-top: 0;
                color: var(--tw-color-primary);
              }
              
              .project-content p {
                font-size: 1.125rem;
                line-height: 1.75;
                margin-bottom: 2rem;
                color: var(--tw-color-secondary);
              }
              
              .project-content ul {
                list-style-type: none;
                padding-left: 0;
                margin-bottom: 2rem;
              }
              
              .project-content li {
                display: flex;
                align-items: flex-start;
                margin-bottom: 0.75rem;
                color: var(--tw-color-secondary);
              }
              
              .project-content li:before {
                content: "•";
                color: var(--tw-color-accent);
                margin-right: 0.75rem;
                margin-top: 0.25rem;
              }
              
              .project-content iframe {
                width: 100%;
                border-radius: 0.5rem;
                margin-bottom: 2rem;
              }
              
              .project-content section {
                margin-bottom: 3rem;
              }
              
              .project-content a {
                color: var(--tw-color-accent);
                text-decoration: none;
                transition: color 0.2s;
              }
              
              .project-content a:hover {
                color: var(--tw-color-accent-light);
              }
            `}
          </style>
          
          <div className="project-content prose prose-lg max-w-none">
            {project.content.map((section, index) => (
              <div 
                key={index}
                dangerouslySetInnerHTML={createMarkup(section)}
                className="mb-12 last:mb-0"
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
} 