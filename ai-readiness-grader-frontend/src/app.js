import React, { useState } from 'react';

// Lucide React for icons (example: copy icon)
const CopyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copy">
    <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
  </svg>
);

// Helper function to generate a random score for demonstration
const getRandomScore = (min = 60, max = 99) => Math.floor(Math.random() * (max - min + 1)) + min;

// Hardcoded service catalog JSON data (corrected)
const serviceCatalog = {
  "service_catalog": {
    "foundational_services": {
      "category_name": "Foundational Services (The Essentials)",
      "description": "These are the core services every small business needs for a robust online presence. They are designed for quick wins and establishing a solid digital foundation.",
      "services": [
        {
          "service_id": "service_01_gbp_optimization",
          "service_name": "Google Business Profile (GBP) Optimization",
          "benefits": [
            "Top priority for local search and AI Overviews.",
            "Increases visibility in local search results.",
            "Builds trust and credibility with potential customers."
          ],
          "deliverables": [
            "Claiming and verifying GBP.",
            "Optimizing business information (NAP, hours, etc.).",
            "Writing a compelling business description.",
            "Correct business categorization.",
            "Uploading high-quality photos and videos.",
            "Setting up and managing Q&A sections.",
            "Creating and posting updates and offers."
          ]
        },
        {
          "service_id": "service_02_google_review_campaign",
          "service_name": "Google Review Campaign & Management",
          "benefits": [
            "Generates quick wins with an influx of positive reviews.",
            "Filters negative reviews before they go public.",
            "Supports all other marketing efforts by building social proof.",
            "Establishes a source of monthly recurring revenue (MRR) through ongoing management."
          ],
          "deliverables": [
            "Initial review campaign to generate positive reviews.",
            "Installation of a review funnel to filter feedback.",
            "Ongoing review monitoring and management."
          ]
        }
      ]
    },
    "content_authority_services": {
      "category_name": "Content & Authority Building (The 'New SEO')",
      "description": "Services focused on building credibility, E-E-A-T, and high-quality content to thrive in an AI-driven search landscape.",
      "services": [
        {
          "service_id": "service_06_website_audit",
          "service_name": "Website Audit & Technical SEO",
          "benefits": [
            "Identifies and fixes technical issues hindering performance.",
            "Improves website crawlability and indexability.",
            "Helps AI understand the website's content for better summaries and citations."
          ],
          "deliverables": [
            "Comprehensive technical audit (page speed, mobile-friendliness).",
            "Fixing on-page SEO issues (meta descriptions, title tags).",
            "Implementing schema markup."
          ]
        },
        {
          "service_id": "service_07_content_creation",
          "service_name": "Strategic Content Creation",
          "benefits": [
            "Develops authoritative, E-E-A-T-friendly content.",
            "Addresses customer pain points and conversational queries.",
            "Positions the business as an industry leader."
          ],
          "deliverables": [
            "In-depth keyword and topic research.",
            "Content calendar creation.",
            "Writing blog posts, articles, and landing pages.",
            "Optimizing existing content for quality and relevance."
          ]
        },
        {
          "service_id": "service_08_link_building_pr",
          "service_name": "Link Building & Digital PR",
          "benefits": [
            "Builds authority through external validation.",
            "Increases domain authority and search rankings.",
            "Generates press mentions and brand visibility."
          ],
          "deliverables": [
            "Backlink acquisition strategy.",
            "Outreach to journalists and bloggers.",
            "Creation of link-worthy content."
          ]
        },
        {
          "service_id": "service_09_reputation_management",
          "service_name": "Review and Reputation Management",
          "benefits": [
            "A key trust signal for customers and AI.",
            "Protects brand reputation by proactively managing feedback.",
            "Increases customer trust and loyalty."
          ],
          "deliverables": [
            "Setting up systems to encourage reviews.",
            "Monitoring and responding to all reviews.",
            "Crisis management plan for negative feedback."
          ]
        }
      ]
    },
    "traffic_conversion_services": {
      "category_name": "Traffic & Conversion Services (Driving Results)",
      "description": "Services designed to increase online visibility and turn visitors into paying customers.",
      "services": [
        {
          "service_id": "service_10_ppc_management",
          "service_name": "Paid Search (PPC) Management",
          "benefits": [
            "Provides an immediate boost in website traffic.",
            "Highly targeted campaigns to reach specific customers.",
            "Optimized for maximum ROI and lower cost-per-click."
          ],
          "deliverables": [
            "Google Ads and Bing Ads campaign management.",
            "Keyword research and ad copy creation.",
            "Campaign optimization and transparent reporting."
          ]
        },
        {
          "service_id": "service_11_social_media_ads",
          "service_name": "Social Media Marketing & Advertising",
          "benefits": [
            "Builds an active community and brand presence.",
            "Drives traffic from social platforms.",
            "Allows for highly targeted advertising campaigns."
          ],
          "deliverables": [
            "Social media profile creation and management.",
            "Content strategy for social media.",
            "Targeted paid ad campaigns."
          ]
        },
        {
          "service_id": "service_12_cro",
          "service_name": "Conversion Rate Optimization (CRO)",
          "benefits": [
            "Makes the existing website more effective.",
            "Turns more visitors into customers without increasing traffic.",
            "Provides data-driven insights on user behavior."
          ],
          "deliverables": [
            "User behavior analysis.",
            "A/B testing of headlines, CTAs, and layouts.",
            "Optimization of forms and checkout processes."
          ]
        }
      ]
    },
    "specialized_services": {
      "category_name": "Specialized & Consulting Services (Premium Offerings)",
      "description": "Higher-value services for businesses ready to invest in advanced, data-driven strategies.",
      "services": [
        {
          "service_id": "service_13_custom_strategy",
          "service_name": "Customized Digital Marketing Strategy",
          "benefits": [
            "A complete, data-driven roadmap for business growth.",
            "Provides a competitive advantage through deep analysis.",
            "Includes measurable KPIs to track success."
          ],
          "deliverables": [
            "Full audit and competitive analysis.",
            "Detailed plan of action.",
            "Identification of measurable key performance indicators (KPIs)."
          ]
        },
        {
          "service_id": "service_14_email_marketing",
          "service_name": "Email Marketing Strategy & Management",
          "benefits": [
            "Builds a direct line of communication with customers.",
            "Nurtures leads and encourages repeat business.",
            "High ROI channel for targeted promotions."
          ],
          "deliverables": [
            "Email marketing platform setup.",
            "Lead magnet creation.",
            "Designing and writing email newsletters and automated campaigns."
          ]
        },
        {
          "service_id": "service_15_ai_readiness",
          "service_name": "AI Readiness & Training",
          "benefits": [
            "Helps the business adapt to the new search landscape.",
            "Positions the business to be cited by AI Overviews.",
            "Empowers business owners with knowledge of AI tools."
          ],
          "deliverables": [
            "Content strategy for 'AI-friendly' content.",
            "Training on using AI tools for marketing.",
            "Consulting on leveraging AI-powered local search."
          ]
        },
        {
          "service_id": "service_03_database_reactivation",
          "service_name": "Database Reactivation Campaign",
          "benefits": [
            "Generates immediate results within days.",
            "Requires no ad spend, leveraging existing customer data.",
            "Creates quick wins that impress new clients.",
            "Can produce thousands in revenue in the first week."
          ],
          "deliverables": [
            "Strategy for reaching out to past customers/leads.",
            "Creation of a special re-engagement offer.",
            "Execution of the campaign across chosen channels (e.g., email, SMS)."
          ]
        },
        {
          "service_id": "service_04_conversational_ai",
          "service_name": "Conversational AI Integration",
          "benefits": [
            "Handles customer inquiries 24/7.",
            "Functions as an employee that never sleeps or takes time off.",
            "Maintains customer engagement to prevent them from contacting competitors.",
            "Automatically books appointments."
          ],
          "deliverables": [
            "Integration of an AI chatbot on the website or social media.",
            "Configuration of common questions and responses.",
            "Automated appointment booking setup.",
            "Testing and optimization of the AI."
          ]
        },
        {
          "service_id": "service_05_local_seo_citations",
          "service_name": "Local SEO & Citation Building",
          "benefits": [
            "Enhances visibility in local search beyond just GBP.",
            "Builds authority through consistent NAP information.",
            "Improves local search rankings and customer trust."
          ],
          "deliverables": [
            "Listing on key directories (Yelp, Yellow Pages, etc.).",
            "Ensuring NAP consistency across all platforms.",
            "Review monitoring and management.",
            "Local backlink and partnership building."
          ]
        }
      ]
    }
  }
};

// Function to find a service by ID
const getServiceById = (id) => {
  for (const categoryKey in serviceCatalog.service_catalog) {
    const category = serviceCatalog.service_catalog[categoryKey];
    const service = category.services.find(s => s.service_id === id);
    if (service) {
      return service;
    }
  }
  return null;
};

// New data for mock issues/impacts/actions for each category
const mockAnalysisData = {
  gmb: {
    issues: [
      "Incomplete Service and Product Listings: Your Google Business Profile (GBP) currently lacks a comprehensive list of all the services you offer. This means potential customers searching for specific services may not find your business.",
      "Minimal Photo and Video Content: Your GBP has a few photos, but it is not taking full advantage of the power of visual content. High-quality visuals significantly boost engagement and trust.",
      "Lack of Regular Google Posts: Your GBP does not appear to be using this free feature to share updates, offers, or new content. Consistent posting signals activity to Google and potential customers.",
      "No Responses to Reviews: While you have many positive reviews, there are no public responses to them. Engaging with reviews is crucial for building community trust and showing customer appreciation.",
      "Inconsistent NAP Information: Discrepancies in your business's Name, Address, or Phone number across online directories can confuse search engines and deter customers."
    ],
    impacts: [
      "Reduced Local Search Visibility: Google's algorithm uses GBP completeness to determine local ranking. Missing information means you're less likely to appear in the coveted 'Local 3-Pack' for relevant searches.",
      "Lower Click-Through and Call Rates: A less optimized or active GBP appears less credible than competitors' profiles, leading to fewer direct inquiries and website visits.",
      "Lost Leads: Competitors actively leveraging all GBP features gain a significant advantage, potentially diverting customers who would otherwise find your business."
    ],
    actions: [
      "Add All Relevant Service Categories: Update your GBP with a comprehensive list of specific services, using keywords customers use. Utilize the 'Services' section for detailed descriptions.",
      "Upload High-Quality Visual Content: Build a robust photo gallery including team photos, before-and-after project shots, and branded images. Aim for 10-15 new photos monthly.",
      "Implement a Google Posts Strategy: Create a consistent schedule for 'What's New,' 'Offer,' 'Event,' or informational posts to keep your profile dynamic and engaging.",
      "Engage with All Reviews: Respond professionally and promptly to all new reviews, both positive and negative, to foster trust and demonstrate excellent customer service."
    ]
  },
  aiReadiness: {
    issues: [
      "Limited Structured Data Implementation: Your website is missing key Schema.org markups that help AI search engines understand your content's context and relationships.",
      "Content Not Optimized for Conversational Queries: Your content isn't consistently structured to directly answer common user questions, making it less 'AI-friendly' for generative AI models.",
      "Lack of E-E-A-T Signals: Insufficient author bios, citations, or external validation for Expertise, Experience, Authority, and Trustworthiness, which are critical for AI trust.",
      "Suboptimal Mobile Experience: Page speed and responsiveness on mobile devices could hinder AI crawling and negatively impact user experience, a factor AI prioritizes."
    ],
    impacts: [
      "Reduced AI Overview Inclusion: Your content is less likely to be summarized, cited, or featured prominently by AI search features like Google's AI Overviews.",
      "Lower Semantic Relevance: AI models may struggle to fully grasp the nuanced context and depth of your content, impacting its visibility for complex, conversational queries.",
      "Missed Opportunities for Rich Results: Lack of structured data prevents your site from appearing in valuable rich snippets, knowledge panels, or direct answers in search results.",
      "Decreased User Engagement: AI prioritizes user experience; slow-loading or non-responsive sites are less favored, potentially leading to higher bounce rates from AI-driven referrals."
    ],
    actions: [
      "Implement Comprehensive Schema Markup: Add relevant Schema.org types (e.g., LocalBusiness, Service, FAQPage, Article) to your pages to provide explicit, machine-readable context to AI.",
      "Restructure Content for Direct Answers: Organize content with clear headings, dedicated FAQ sections, and concise bullet points that directly answer user queries, making it easily digestible for AI summarization.",
      "Enhance E-E-A-T Signals: Add detailed author information, cite credible sources, and actively seek mentions from authoritative sites to build trust and expertise signals for AI algorithms.",
      "Optimize Mobile Performance: Improve page loading speed and ensure full responsiveness across all devices, as AI prioritizes fast, accessible, and user-friendly websites."
    ]
  },
  seo: {
    issues: [
      "Suboptimal On-Page SEO: Missing or poorly optimized title tags, meta descriptions, and heading structures across key pages, hindering organic ranking potential.",
      "Insufficient Keyword Integration: Your content doesn't consistently target relevant keywords or semantic variations that your audience is actively searching for.",
      "Low Domain Authority: Limited high-quality backlinks from authoritative external websites, impacting your site's overall credibility and search engine trust.",
      "Page Speed Issues: Slow loading times impacting both user experience and how effectively search engine crawlers can process and index your site."
    ],
    impacts: [
      "Lower Organic Rankings: Your website may not rank highly for important keywords, significantly reducing visibility in traditional search results.",
      "Reduced Organic Traffic: Fewer visitors from search engines due to lower rankings, limiting potential customer reach and lead generation.",
      "Poor User Experience: Slow pages lead to higher bounce rates and less engagement, signaling negative quality to search engines and impacting conversions.",
      "Difficulty for Crawlers: Technical issues like broken links or improper robots.txt settings can prevent search engines from fully indexing your site, meaning valuable content might be missed."
    ],
    actions: [
      "Conduct a Thorough On-Page SEO Audit: Optimize all meta tags, headings (H1s, H2s, etc.), and content for target keywords to improve relevance and search engine understanding.",
      "Develop a Comprehensive Content Strategy: Create new, high-quality, and relevant content that addresses user intent and targets both short-tail and long-tail keywords.",
      "Implement a Strategic Link Building Campaign: Actively seek high-quality, relevant backlinks from reputable sources to boost your domain authority and search engine trust.",
      "Address Technical SEO Issues: Improve page speed, ensure mobile-friendliness, fix any crawlability/indexability problems, and implement proper redirects."
    ]
  },
  competitor: { // This section is for the client's *own* competitive standing analysis
    issues: [
      "Lack of Identified Top Competitors: There's no clear, data-driven understanding of your main online competitors and how they perform in search, leading to missed strategic opportunities.",
      "Missed Keyword Opportunities: Key competitors are ranking for valuable keywords and phrases that your website is not currently targeting, allowing them to capture relevant traffic.",
      "Superior Competitor Backlink Profiles: Your key competitors have more authoritative or diverse backlink profiles, giving them a significant advantage in domain authority and search ranking.",
      "Stronger Competitor Content Strategy: Competitors are consistently publishing higher quality, more comprehensive, or more relevant content that ranks well, attracting your target audience."
    ],
    impacts: [
      "Loss of Market Share: Without knowing competitor strategies and performance, your business may be losing potential customers to rivals with stronger online presences and more effective tactics.",
      "Inefficient Marketing Spend: Marketing efforts might be misdirected or less impactful if not informed by what's actively working for your competitors in the shared market.",
      "Stagnant Growth: Failure to adapt to evolving competitor tactics and market trends can lead to plateaued or declining online performance and missed growth opportunities.",
      "Missed Innovation: Not analyzing competitors means missing out on new strategies, content formats, or digital features they are successfully implementing, putting your business at a disadvantage."
    ],
    actions: [
      "Identify Top Online Competitors: Conduct thorough research to pinpoint direct and indirect online competitors who are actively vying for your target audience.",
      "Perform Keyword Gap Analysis: Discover valuable keywords your competitors rank for but you don't, and strategically integrate them into your content and SEO strategy.",
      "Analyze Competitor Backlink Profiles: Identify high-quality backlinks pointing to your competitors and develop a targeted strategy to acquire similar authoritative links.",
      "Review Competitor Content Strategies: Understand what content types, topics, and formats perform well for competitors and use these insights to inform and elevate your own content plan."
    ]
  }
};

// Function to get random items from an array
const getRandomItems = (arr, count) => {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

// Mock competitor data with individual scores and websites
const mockCompetitors = [
  { name: "City Plumbing Pros", website: "cityplumbingpros.com", gmb: getRandomScore(70, 95), ai: getRandomScore(65, 90), seo: getRandomScore(70, 95) },
  { name: "Reliable Pipes Co.", website: "reliablepipes.net", gmb: getRandomScore(60, 85), ai: getRandomScore(55, 80), seo: getRandomScore(60, 85) },
  { name: "Apex Plumbing Solutions", website: "apexplumbingsolutions.com", gmb: getRandomScore(75, 99), ai: getRandomScore(70, 95), seo: getRandomScore(75, 99) },
  { name: "HydroFlow Services", website: "hydroflowservices.org", gmb: getRandomScore(50, 75), ai: getRandomScore(45, 70), seo: getRandomScore(50, 75) },
  { name: "Precision Plumbers", website: "precisionplumbers.co", gmb: getRandomScore(80, 99), ai: getRandomScore(75, 99), seo: getRandomScore(80, 99) },
  { name: "Drain Master Experts", website: "drainmasterexperts.biz", gmb: getRandomScore(65, 90), ai: getRandomScore(60, 85), seo: getRandomScore(65, 90) },
  { name: "Local Leak Fixers", website: "localleakfixers.com", gmb: getRandomScore(55, 80), ai: getRandomScore(50, 75), seo: getRandomScore(55, 80) }
];

function App() {
  const [url, setUrl] = useState('');
  const [location, setLocation] = useState('');
  const [niche, setNiche] = useState('');
  const [report, setReport] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  const analyzeWebsite = async () => {
    setError('');
    setIsCopied(false);
    if (!url) {
      setError('Please enter a website URL.');
      return;
    }
    if (!location) {
      setError('Please enter a location for competitor analysis.');
      return;
    }
    if (!niche) {
      setError('Please enter a niche (e.g., "plumbing") for competitor analysis.');
      return;
    }

    setIsLoading(true);

    // --- Normalize URL: Add https:// if not present ---
    let formattedUrl = url.trim();
    if (!formattedUrl.startsWith('http://') && !formattedUrl.startsWith('https://')) {
      formattedUrl = `https://${formattedUrl}`;
    }
    // Update the state with the formatted URL
    setUrl(formattedUrl);

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    // --- Mock Data Generation for Client's Website ---
    const gmbScore = getRandomScore();
    const aiReadinessScore = getRandomScore();
    const seoScore = getRandomScore();
    const competitorScore = getRandomScore(); // This is the client's own competitor analysis score
    const combinedScore = Math.floor((gmbScore + aiReadinessScore + seoScore + competitorScore) / 4);

    // Generate mock competitor data with calculated overall scores
    const numCompetitors = Math.floor(Math.random() * 3) + 3; // 3 to 5 competitors
    const selectedCompetitors = getRandomItems(mockCompetitors, numCompetitors).map(comp => ({
      ...comp,
      overallScore: Math.floor((comp.gmb + comp.ai + comp.seo) / 3)
    }));
    // Sort competitors by overall score descending
    selectedCompetitors.sort((a, b) => b.overallScore - a.overallScore);


    // Generate detailed mock analysis for each section
    const gmbIssues = getRandomItems(mockAnalysisData.gmb.issues, 2);
    const gmbImpacts = getRandomItems(mockAnalysisData.gmb.impacts, 2);
    const gmbActions = getRandomItems(mockAnalysisData.gmb.actions, 2);

    const aiIssues = getRandomItems(mockAnalysisData.aiReadiness.issues, 2);
    const aiImpacts = getRandomItems(mockAnalysisData.aiReadiness.impacts, 2);
    const aiActions = getRandomItems(mockAnalysisData.aiReadiness.actions, 2);

    const seoIssues = getRandomItems(mockAnalysisData.seo.issues, 2);
    const seoImpacts = getRandomItems(mockAnalysisData.seo.impacts, 2);
    const seoActions = getRandomItems(mockAnalysisData.seo.actions, 2);

    const clientCompetitorIssues = getRandomItems(mockAnalysisData.competitor.issues, 2);
    const clientCompetitorImpacts = getRandomItems(mockAnalysisData.competitor.impacts, 2);
    const clientCompetitorActions = getRandomItems(mockAnalysisData.competitor.actions, 2);


    let solutionsHtml = `
<h2 className="text-xl font-bold text-gray-800 mb-2">HOW 8FORTY CAN HELP YOUR BUSINESS GROW</h2>
<p className="text-gray-700 mb-4">Based on this analysis, here are some recommended next steps and how 8forty's product offerings can help you improve your digital presence:</p>
`;

    // Hardcoded service recommendations
    const hardcodedServices = {
        gbp: {
            name: "Google Business Profile (GBP) Optimization",
            benefits: "Top priority for local search and AI Overviews, increases visibility in local search results, builds trust and credibility with potential customers."
        },
        ai: {
            name: "AI Readiness & Training",
            benefits: "Helps the business adapt to the new search landscape, positions the business to be cited by AI Overviews, empowers business owners with knowledge of AI tools."
        },
        seo: {
            name: "Website Audit & Technical SEO",
            benefits: "Identifies and fixes technical issues hindering performance, improves website crawlability and indexability, helps AI understand the website's content for better summaries and citations."
        },
        customStrategy: {
            name: "Customized Digital Marketing Strategy",
            benefits: "A complete, data-driven roadmap for business growth, provides a competitive advantage through deep analysis, includes measurable KPIs to track success."
        },
        cro: {
            name: "Conversion Rate Optimization (CRO)",
            benefits: "Makes the existing website more effective, turns more visitors into customers without increasing traffic, provides data-driven insights on user behavior."
        },
        ppc: {
            name: "Paid Search (PPC) Management",
            benefits: "Provides an immediate boost in website traffic, highly targeted campaigns to reach specific customers, optimized for maximum ROI and lower cost-per-click."
        }
    };


    // GMB Health Recommendations
    if (gmbScore < 80) { // Example threshold for suggesting improvements
      solutionsHtml += `
<h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">1. Enhance Google My Business (GMB) & Local Presence</h3>
<p className="text-gray-700"><strong>Issue:</strong> A GMB score of ${gmbScore}% indicates significant opportunities to boost your local search visibility and profile completeness.</p>
<p className="text-gray-700"><strong>Recommended 8forty Services:</strong></p>
<ul className="list-disc list-inside ml-4 text-gray-700">
    <li><strong>${hardcodedServices.gbp.name}:</strong> ${hardcodedServices.gbp.benefits}</li>
    <li><strong>Google Review Campaign & Management:</strong> Generates quick wins with an influx of positive reviews, filters negative reviews before they go public, supports all other marketing efforts by building social proof.</li>
    <li><strong>Local SEO & Citation Building:</strong> Enhances visibility in local search beyond just GBP, builds authority through consistent NAP information, improves local search rankings and customer trust.</li>
</ul>`;
    }

    // AI Search Readiness Recommendations
    if (aiReadinessScore < 80) {
      solutionsHtml += `
<h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">2. Boost AI Search Readiness & Content Authority</h3>
<p className="text-gray-700"><strong>Issue:</strong> With an AI Readiness score of ${aiReadinessScore}% indicates a strong opportunity to optimize your content and technical structure for AI-powered search algorithms.</p>
<p className="text-gray-700"><strong>Recommended 8forty Services:</strong></p>
<ul className="list-disc list-inside ml-4 text-gray-700">
    <li><strong>${hardcodedServices.ai.name}:</strong> ${hardcodedServices.ai.benefits}</li>
    <li><strong>Strategic Content Creation:</strong> Develops authoritative, E-E-A-T-friendly content, addresses customer pain points and conversational queries, positions the business as an industry leader.</li>
    <li><strong>Conversational AI Integration:</strong> Handles customer inquiries 24/7, functions as an employee that never sleeps or takes time off, automatically books appointments.</li>
</ul>`;
    }

    // SEO Optimization Recommendations
    if (seoScore < 80) {
      solutionsHtml += `
<h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">3. Comprehensive SEO Overhaul & Authority Building</h3>
<p className="text-gray-700"><strong>Issue:</strong> An SEO score of ${seoScore}% indicates foundational SEO elements, on-page optimization, and off-page strategies can be significantly improved for better organic rankings.</p>
<p className="text-gray-700"><strong>Recommended 8forty Services:</strong></p>
<ul className="list-disc list-inside ml-4 text-gray-700">
    <li><strong>${hardcodedServices.seo.name}:</strong> ${hardcodedServices.seo.benefits}</li>
    <li><strong>Strategic Content Creation:</strong> Develops authoritative, E-E-A-T-friendly content, addresses customer pain points and conversational queries, positions the business as an industry leader.</li>
    <li><strong>Link Building & Digital PR:</strong> Builds authority through external validation, increases domain authority and search rankings, generates press mentions and brand visibility.</li>
</ul>`;
    }

    // Client's Competitor Analysis Recommendations
    if (competitorScore < 80) {
      solutionsHtml += `
<h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">4. Strategic Competitor Analysis & Market Positioning</h3>
<p className="text-gray-700"><strong>Issue:</strong> A Competitor Analysis score of ${competitorScore}% indicates a need to better understand your competitive landscape and identify growth opportunities.</p>
<p className="text-gray-700"><strong>Recommended 8forty Services:</strong></p>
<ul className="list-disc list-inside ml-4 text-gray-700">
    <li><strong>${hardcodedServices.customStrategy.name}:</strong> ${hardcodedServices.customStrategy.benefits}</li>
    <li><strong>Paid Search (PPC) Management:</strong> Provides an immediate boost in website traffic, highly targeted campaigns to reach specific customers, optimized for maximum ROI and lower cost-per-click.</li>
    <li><strong>Strategic Content Creation:</strong> Develops authoritative, E-E-A-T-friendly content, addresses customer pain points and conversational queries, positions the business as an industry leader.</li>
</ul>`;
    }

    // General/Overall Recommendations (if scores are generally good or for continuous improvement)
    if (gmbScore >= 80 && aiReadinessScore >= 80 && seoScore >= 80 && competitorScore >= 80) {
      solutionsHtml += `
<h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">5. Maintain & Advance Your Digital Presence</h3>
<p className="text-gray-700"><strong>Issue:</strong> Your website shows strong performance across GMB, AI readiness, SEO, and competitive positioning. Continuous monitoring and advanced strategies can help maintain this lead.</p>
<p className="text-gray-700"><strong>Recommended 8forty Services:</strong></p>
<ul className="list-disc list-inside ml-4 text-gray-700">
    <li><strong>${hardcodedServices.customStrategy.name}:</strong> ${hardcodedServices.customStrategy.benefits}</li>
    <li><strong>${hardcodedServices.cro.name}:</strong> ${hardcodedServices.cro.benefits}</li>
    <li><strong>${hardcodedServices.ppc.name}:</strong> ${hardcodedServices.ppc.benefits}</li>
</ul>
`;
    }

    // Consolidate all issues, impacts, and actions
    const allIssues = [
      ...gmbIssues.map(issue => `GMB: ${issue}`),
      ...aiIssues.map(issue => `AI Search Readiness: ${issue}`),
      ...seoIssues.map(issue => `SEO: ${issue}`),
      ...clientCompetitorIssues.map(issue => `Competitor Analysis: ${issue}`)
    ];

    const allImpacts = [
      ...gmbImpacts.map(impact => `GMB: ${impact}`),
      ...aiImpacts.map(impact => `AI Search Readiness: ${impact}`),
      ...seoImpacts.map(impact => `SEO: ${impact}`),
      ...clientCompetitorImpacts.map(impact => `Competitor Analysis: ${impact}`)
    ];

    const allActions = [
      ...gmbActions.map(action => `GMB: ${action}`),
      ...aiActions.map(action => `AI Search Readiness: ${action}`),
      ...seoActions.map(action => `SEO: ${action}`),
      ...clientCompetitorActions.map(action => `Competitor Analysis: ${action}`)
    ];


    const generatedReportHtml = `
<div className="font-sans text-gray-900 leading-relaxed p-6">
  <h1 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">Website Analysis Report for ${formattedUrl}</h1>
  <p className="text-center text-gray-700 text-sm mb-1">Prepared for: Your Client's Business Name</p>
  <p className="text-center text-gray-700 text-sm mb-1">Date: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
  <p className="text-center text-gray-700 text-sm mb-8">Prepared by: 8forty</p>

  <h2 className="text-xl font-bold text-gray-800 mb-4">EXECUTIVE SUMMARY</h2>
  <p className="text-gray-700 mb-8">This report provides a comprehensive analysis of your digital presence, focusing on Google My Business (GMB) health, AI search readiness, and overall SEO optimization. We also include a comparative analysis against key competitors in your niche and location. Our findings highlight areas for improvement and actionable strategies to enhance your online visibility, attract more customers and drive business growth.</p>

  <h2 className="text-xl font-bold text-gray-800 mb-4">SITE OVERVIEW</h2>
  <p className="text-gray-700 mb-2">Overall Score: <strong>${combinedScore}%</strong></p>
  <p className="text-gray-700 mb-4">Your website's overall digital health score is <strong>${combinedScore}%</strong>. This score reflects a combined assessment of your Google My Business profile, readiness for AI-driven search, and traditional SEO performance. A higher score indicates a stronger online presence and greater potential for attracting and converting customers.</p>

  <ul className="list-disc list-inside ml-4 text-gray-700 mb-8">
    <li>Google My Business (GMB) Health: ${gmbScore}%</li>
    <li>AI Search Readiness: ${aiReadinessScore}%</li>
    <li>SEO Optimization: ${seoScore}%</li>
    <li>Competitor Analysis: ${competitorScore}%</li>
  </ul>

  <h2 className="text-xl font-bold text-gray-800 mb-4">KEY ISSUES IDENTIFIED</h2>
  <p className="text-gray-700 mb-4">Based on our detailed analysis, here are the primary areas requiring attention across your digital presence:</p>
  <ul className="list-disc list-inside ml-4 text-gray-700 mb-8">
    ${allIssues.map(issue => `<li>${issue}</li>`).join('\n    ')}
  </ul>

  <h2 className="text-xl font-bold text-gray-800 mb-4">IMPACT ANALYSIS</h2>
  <p className="text-gray-700 mb-4">These identified issues have direct implications for your online performance and business growth:</p>
  <ul className="list-disc list-inside ml-4 text-gray-700 mb-8">
    ${allImpacts.map(impact => `<li>${impact}</li>`).join('\n    ')}
  </ul>

  <h2 className="text-xl font-bold text-gray-800 mb-4">ACTION PLAN</h2>
  <p className="text-gray-700 mb-4">To address the identified issues and improve your digital standing, we recommend the following strategic actions:</p>
  <ul className="list-disc list-inside ml-4 text-gray-700 mb-8">
    ${allActions.map(action => `<li>${action}</li>`).join('\n    ')}
  </ul>

  <h2 className="text-xl font-bold text-gray-800 mb-4">COMPETITOR ANALYSIS</h2>
  <p className="text-gray-700 mb-4">Your Business's Competitor Analysis Score: ${competitorScore}%</p>
  <p className="text-gray-700 mb-2">Top Competitors in ${niche} in ${location}:</p>

  <div className="overflow-x-auto mb-8">
    <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-sm">
      <thead>
        <tr className="bg-gray-100 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
          <th className="py-3 px-4 border-b border-gray-300 rounded-tl-lg">Competitor Name</th>
          <th className="py-3 px-4 border-b border-gray-300">Website</th>
          <th className="py-3 px-4 border-b border-gray-300">GMB Score</th>
          <th className="py-3 px-4 border-b border-gray-300">AI Score</th>
          <th className="py-3 px-4 border-b border-gray-300">SEO Score</th>
          <th className="py-3 px-4 border-b border-gray-300 rounded-tr-lg">Overall Score</th>
        </tr>
      </thead>
      <tbody>
        ${selectedCompetitors.map(comp => `
        <tr className="hover:bg-gray-50 text-gray-700 text-sm">
          <td className="py-2 px-4 border-b border-gray-200">${comp.name}</td>
          <td className="py-2 px-4 border-b border-gray-200"><a href="https://${comp.website}" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">${comp.website}</a></td>
          <td className="py-2 px-4 border-b border-gray-200">${comp.gmb}%</td>
          <td className="py-2 px-4 border-b border-gray-200">${comp.ai}%</td>
          <td className="py-2 px-4 border-b border-gray-200">${comp.seo}%</td>
          <td className="py-2 px-4 border-b border-gray-200">${comp.overallScore}%</td>
        </tr>
        `).join('')}
      </tbody>
    </table>
  </div>

  ${solutionsHtml}

  <p className="text-gray-600 text-xs mt-8"><strong>DISCLAIMER:</strong> This report provides a high-level overview based on simulated data. For a detailed, in-depth analysis and personalized strategy, please contact 8forty directly.</p>
</div>
    `;

    setReport(generatedReportHtml); // Set the HTML string as the report
    setIsLoading(false);
  };

  const copyReportToClipboard = () => {
    if (report) {
      // Create a temporary div to hold the HTML content
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = report; // Assign the HTML string
      document.body.appendChild(tempDiv);

      // Select the content of the temporary div
      const range = document.createRange();
      range.selectNodeContents(tempDiv);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);

      // Execute the copy command
      try {
        document.execCommand('copy');
        setIsCopied(true);
      } catch (err) {
        console.error('Failed to copy rich text: ', err);
        // Fallback for environments where execCommand fails or doesn't support rich text
        alert('Failed to copy formatted report. Please copy manually from the display below.');
      }

      // Clean up: remove the temporary div and clear selection
      document.body.removeChild(tempDiv);
      selection.removeAllRanges();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8 flex items-center justify-center font-sans">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg p-6 sm:p-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 text-center text-blue-800">
          8forty Website Analysis Tool 🚀
        </h1>

        <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="website-url" className="block text-lg font-medium text-gray-700 mb-2">
              Customer Website URL:
            </label>
            <input
              type="url"
              id="website-url"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-base transition duration-150 ease-in-out"
              placeholder="e.g., example.com"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  analyzeWebsite();
                }
              }}
            />
            {error && !url && <p className="mt-2 text-sm text-red-600">{error}</p>}
          </div>
          <div>
            <label htmlFor="location" className="block text-lg font-medium text-gray-700 mb-2">
              Location (for Competitor Analysis):
            </label>
            <input
              type="text"
              id="location"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-base transition duration-150 ease-in-out"
              placeholder="e.g., Madison, WI"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  analyzeWebsite();
                }
              }}
            />
            {error && !location && <p className="mt-2 text-sm text-red-600">{error}</p>}
          </div>
          <div className="md:col-span-2">
            <label htmlFor="niche" className="block text-lg font-medium text-gray-700 mb-2">
              Niche (for Competitor Analysis):
            </label>
            <input
              type="text"
              id="niche"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-base transition duration-150 ease-in-out"
              placeholder="e.g., Plumbing, Restaurant, Boutique"
              value={niche}
              onChange={(e) => setNiche(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  analyzeWebsite();
                }
              }}
            />
            {error && !niche && <p className="mt-2 text-sm text-red-600">{error}</p>}
          </div>
        </div>

        <button
          onClick={analyzeWebsite}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md shadow-lg transition duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isLoading}
        >
          {isLoading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Analyzing...
            </span>
          ) : (
            'Generate Report'
          )}
        </button>

        {report && (
          <div className="mt-8 bg-gray-50 p-6 rounded-lg shadow-inner border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center justify-between">
              Analysis Report
              <button
                onClick={copyReportToClipboard}
                className="ml-4 p-2 bg-green-500 hover:bg-green-600 text-white rounded-md flex items-center text-sm transition duration-150 ease-in-out transform hover:scale-105"
              >
                <CopyIcon className="w-4 h-4 mr-2" />
                {isCopied ? 'Copied!' : 'Copy to Clipboard'}
              </button>
            </h2>
            {/* Render HTML content directly using dangerouslySetInnerHTML */}
            <div className="prose max-w-none text-gray-800 leading-relaxed" dangerouslySetInnerHTML={{ __html: report }}>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
