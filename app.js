// NZTC Enterprise Platform Application Data and Logic
const enterpriseData = {
  userProfile: {
    name: "Faizan Abbas",
    title: "Head of Something",
    company: "FaiziTech",
    plan: "Enterprise",
    planPrice: "£299/user/month",
    features: "All features unlocked",
    aiQueries: "Unlimited",
    expertHours: "5 hours remaining this month",
    apiCalls: "Unlimited"
  },

  dashboardMetrics: {
    currentEmissions: "2.5M tonnes CO2/year",
    targetReduction: "65% by 2030",
    progressToTarget: "28%",
    activeTechnologies: 12,
    roadmapsInProgress: 3,
    teamMembers: 15,
    monthlySpend: "£4,485",
    roiAchieved: "£12.3M saved this year"
  },

  aiInsights: [
    {
      type: "recommendation",
      title: "Accelerate CCUS Implementation",
      description: "Based on recent regulatory changes and competitor moves, implementing CCUS 18 months earlier could capture £45M in additional tax incentives",
      confidence: "87%",
      impact: "High"
    },
    {
      type: "risk_alert",
      title: "Supply Chain Constraint Risk",
      description: "Floating wind components showing 6-month delays industry-wide. Consider early procurement or alternative suppliers",
      confidence: "92%",
      impact: "Medium"
    },
    {
      type: "opportunity",
      title: "Strategic Partnership Potential",
      description: "Shell's CCS investment creates opportunity for shared infrastructure, reducing your costs by estimated £120M",
      confidence: "74%",
      impact: "High"
    }
  ],

  competitiveIntelligence: [
    {
      competitor: "Shell",
      recentMove: "£2B investment in North Sea CCS project",
      timeline: "2 days ago",
      impact: "High",
      implications: "Increased competition for CCS sites, potential partnerships"
    },
    {
      competitor: "Equinor",
      recentMove: "Floating wind tender won in Scotland",
      timeline: "1 week ago",
      impact: "Medium",
      implications: "Supply chain constraints possible, technology validation"
    },
    {
      competitor: "BP",
      recentMove: "Hydrogen hub announcement for Teesside",
      timeline: "2 weeks ago",
      impact: "Medium",
      implications: "Market positioning shift, infrastructure development"
    }
  ],

  technologyLibrary: [
    {
      id: 1,
      name: "Advanced Leak Detection",
      category: "Monitoring",
      trl: 8,
      emissionsImpact: "15% reduction",
      cost: "£25M",
      risk: "Low",
      timeline: "Short-term",
      description: "AI-powered methane leak detection and repair systems with satellite monitoring",
      confidence: 89,
      roi: "1.8 years"
    },
    {
      id: 2,
      name: "Platform Electrification",
      category: "Energy Efficiency",
      trl: 9,
      emissionsImpact: "22% reduction",
      cost: "£180M",
      risk: "Medium",
      timeline: "Short-term",
      description: "Replace fossil fuel-powered equipment with electric alternatives using offshore wind",
      confidence: 95,
      roi: "2.1 years"
    },
    {
      id: 3,
      name: "Carbon Capture & Storage",
      category: "CCUS",
      trl: 8,
      emissionsImpact: "35% reduction",
      cost: "£450M",
      risk: "Medium",
      timeline: "Medium-term",
      description: "Industrial-scale CO2 capture with underground storage in depleted oil fields",
      confidence: 87,
      roi: "3.2 years"
    },
    {
      id: 4,
      name: "Floating Wind Integration",
      category: "Renewable",
      trl: 7,
      emissionsImpact: "28% reduction",
      cost: "£320M",
      risk: "High",
      timeline: "Medium-term",
      description: "Floating wind turbines to power offshore operations with grid connection",
      confidence: 72,
      roi: "4.5 years"
    },
    {
      id: 5,
      name: "Green Hydrogen Production",
      category: "Alternative Energy",
      trl: 6,
      emissionsImpact: "40% reduction",
      cost: "£600M",
      risk: "High",
      timeline: "Long-term",
      description: "Electrolysis-based hydrogen production using renewable energy for heating and transport",
      confidence: 65,
      roi: "5.2 years"
    },
    {
      id: 6,
      name: "Digital Twin Optimization",
      category: "Digital",
      trl: 8,
      emissionsImpact: "12% reduction",
      cost: "£45M",
      risk: "Low",
      timeline: "Short-term",
      description: "Real-time digital replica for predictive maintenance and operational optimization",
      confidence: 91,
      roi: "1.5 years"
    },
    {
      id: 7,
      name: "Waste Heat Recovery",
      category: "Energy Efficiency",
      trl: 9,
      emissionsImpact: "8% reduction",
      cost: "£35M",
      risk: "Low",
      timeline: "Short-term",
      description: "Capture and reuse waste heat from operations for additional power generation",
      confidence: 94,
      roi: "2.3 years"
    },
    {
      id: 8,
      name: "Subsea Processing",
      category: "Process Optimization",
      trl: 7,
      emissionsImpact: "18% reduction",
      cost: "£280M",
      risk: "Medium",
      timeline: "Medium-term",
      description: "Move processing equipment to seabed to reduce platform emissions and costs",
      confidence: 78,
      roi: "3.8 years"
    }
  ],

  activeWorkflows: [
    {
      name: "CCS Technology Selection",
      stage: "Stakeholder Review",
      participants: ["Sarah Johnson", "Mike Chen", "Emma Wilson", "David Roberts"],
      deadline: "2025-10-15",
      comments: 12,
      decisions: 3
    },
    {
      name: "Hydrogen Strategy Approval",
      stage: "Executive Sign-off",
      participants: ["Sarah Johnson", "CEO", "CTO", "CFO"],
      deadline: "2025-10-30",
      comments: 8,
      decisions: 1
    }
  ]
};

// ---------- scenario color map & helper ----------
const scenarioKeys = ['base','conservative','aggressive','crisis'];

const scenarioColors = {
  base:        { border: '#1FB8CD', bg: 'rgba(31,184,205,0.08)' },
  conservative:{ border: '#FFC185', bg: 'rgba(255,193,133,0.08)' },
  aggressive:  { border: '#B4413C', bg: 'rgba(180,65,60,0.08)' },
  crisis:      { border: '#6b6b6b', bg: 'rgba(107,107,107,0.06)' }
};

/**
 * Convert hex color (#rrggbb or #rgb) to rgba(...) string with alpha.
 */
function hexToRgba(hex, alpha=1) {
  if (!hex) return `rgba(0,0,0,${alpha})`;
  // Remove #
  hex = hex.replace('#','');
  if (hex.length === 3) {
    hex = hex.split('').map(c => c + c).join('');
  }
  const num = parseInt(hex, 16);
  const r = (num >> 16) & 255;
  const g = (num >> 8) & 255;
  const b = num & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}


// === Scenario baseline time series (thousands tonnes CO2e) ===
enterpriseData.scenarios = {
  base:     [2500, 2100, 1700, 1400, 1200, 1100, 875],
  conservative: [2500, 2300, 2000, 1750, 1550, 1400, 1250],
  aggressive:   [2500, 1900, 1400, 1000, 750, 600, 500],
  crisis:       [2500, 2450, 2400, 2350, 2300, 2280, 2250] // crisis -> much worse
};

enterpriseData.technologyLibrary = enterpriseData.technologyLibrary.map(tech => {
  // copy existing to avoid losing fields
  const copy = Object.assign({}, tech);
  // default empty deps
  copy.dependencies = copy.dependencies || [];
  return copy;
});

const exampleDeps = {
  1: [],               // Leak detection - foundational
  2: [6],              // Electrification benefits from Digital Twin (planning / integration)
  3: [6, 8],           // CCS needs Digital Twin + Subsea/Processing integration
  4: [6, 8],           // Floating wind needs Digital Twin + Subsea readiness
  5: [2, 4],           // Green H2 needs electrification and renewables
  6: [],               // Digital Twin - enabler
  7: [6],              // Waste heat recovery needs digital twin for optimization
  8: [6]               // Subsea processing depends on Digital Twin for controls & design
};

enterpriseData.technologyLibrary.forEach(t => {
  if (!t.dependencies || t.dependencies.length === 0) {
    t.dependencies = exampleDeps[t.id] ? exampleDeps[t.id].slice() : [];
  }
});

// Global application state
let currentSection = 'dashboard';
let charts = {};
let roadmapTechnologies = {
  'short-term': [],
  'medium-term': [],
  'long-term': []
};
let currentScenario = 'base';
let draggedTech = null;

let placedTechnologies = {
  'short-term': [],
  'medium-term': [],
  'long-term': []
};

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
  console.log('NZTC Enterprise Platform initializing...');
  
  setTimeout(() => {
    initializeNavigation();
    initializeRoadmap();
    populateAIInsights();
    populateCompetitorFeed();
    populateWorkflows();
    populateAIRecommendations();
    populateTechnologyLibrary();
    initializeCharts();
    initializeDragAndDrop();
    initializeAIAssistant();
    initializeScenarioControls();
    if (currentSection === 'dashboard') {
      createEmissionsChart();
    }

    initializeTabs();

    console.log('Enterprise platform ready');
  }, 100);
});

// Navigation system
function initializeNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const sectionId = this.getAttribute('data-section');
      showSection(sectionId);
      
      // Update active nav link
      navLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });
}

// ---------- Tab system for Analytics ----------
function initializeTabs() {
  const tabButtons = document.querySelectorAll('.analytics-tabs .tab-btn');
  const tabContents = document.querySelectorAll('.analytics-content .tab-content');
 
  function showTab(tabName) {
    tabContents.forEach(tc => tc.classList.remove('active'));
    const target = document.getElementById(tabName);
    if (target) target.classList.add('active');
 
    // Lazy-create charts when tab first opened
    if (tabName === 'overview') {
      if (!charts.roiChart) createROIChart();
      if (!charts.maturityChart) createMaturityChart();
    } else if (tabName === 'performance') {
      if (!charts.performanceChart) createPerformanceChart();
      if (!charts.budgetChart) createBudgetChart();
    } else if (tabName === 'predictive') {
      if (!charts.predictiveChart) createPredictiveChart();
    } else if (tabName === 'reports') {
      if (!charts.reportsChart) createReportsChart();
      createReportCards();
    }
  }
 
  tabButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const tab = btn.getAttribute('data-tab');
      // set active class on buttons
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      showTab(tab);
    });
  });
 
  // ensure the initial active tab is created
  const initial = document.querySelector('.analytics-tabs .tab-btn.active');
  if (initial) showTab(initial.getAttribute('data-tab') || 'overview');
}
 
// ---------- Additional chart creators (simple, robust placeholders) ----------
function createPerformanceChart() {
  const ctx = document.getElementById('performanceChart');
  if (!ctx) return;
  charts.performanceChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Q1 2025','Q2 2025','Q3 2025','Q4 2025','Q1 2026','Q2 2026'],
      datasets: [{
        label: 'Implementation Progress (%)',
        data: [12, 20, 31, 44, 58, 72],
        borderColor: '#1FB8CD',
        backgroundColor: 'rgba(31,184,205,0.08)',
        fill: true,
        tension: 0.3
      }]
    },
    options: { responsive: true, maintainAspectRatio: false }
  });
}
 
function createBudgetChart() {
  const ctx = document.getElementById('budgetChart');
  if (!ctx) return;
  charts.budgetChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Short', 'Medium', 'Long'],
      datasets: [{
        label: 'Planned (£M)',
        data: [205, 770, 600],
        backgroundColor: ['#1FB8CD','#FFC185','#B4413C']
      },{
        label: 'Actual (£M)',
        data: [190, 680, 520],
        backgroundColor: ['rgba(31,184,205,0.4)','rgba(255,193,133,0.4)','rgba(180,65,60,0.4)']
      }]
    },
    options: { responsive: true, maintainAspectRatio: false }
  });
}
 
function createPredictiveChart() {
  const ctx = document.getElementById('predictiveChart');
  if (!ctx) return;
  charts.predictiveChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['2025','2026','2027','2028','2029','2030'],
      datasets: [{
        label: 'Projected Emissions (kT CO₂e)',
        data: [2100, 1750, 1400, 1250, 1100, 950],
        borderColor: '#B4413C',
        fill: false,
        tension: 0.3
      }]
    },
    options: { responsive: true, maintainAspectRatio: false }
  });
}
 
function createReportsChart() {
  const ctx = document.getElementById('reportsChart');
  if (!ctx) return;
  charts.reportsChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Roadmaps','Assessments','Workflows','Market Intel'],
      datasets: [{
        data: [35, 25, 20, 20],
        backgroundColor: ['#1FB8CD','#FFC185','#1F9E89','#B4413C']
      }]
    },
    options: { responsive: true, maintainAspectRatio: false }
  });
}

window.charts = window.charts || {};
 
// Call this when the 'reports' tab is shown (initializeTabs() will call it lazily)
function createReportCards() {
  const container = document.getElementById('reportsAccordion');
  if (!container || container.dataset.inited) return;
  container.dataset.inited = '1';
 
  const reports = [
    { id: 'roi', title: 'ROI Report', subtitle: 'Return on Investment analysis and highlights' },
    { id: 'performance', title: 'Performance Summary', subtitle: 'Key progress and bottlenecks' },
    { id: 'predictive', title: 'Predictive Insights', subtitle: 'Forecasts and risk indicators' }
  ];
 
  reports.forEach(r => {
    const card = document.createElement('div');
    card.className = 'report-card';
    card.innerHTML = `
<div class="report-header" data-report="${r.id}">
<div style="display:flex; align-items:center;">
<div>
<p class="report-title">${r.title}</p>
<p class="report-meta">${r.subtitle}</p>
</div>
</div>
<button class="report-toggle" aria-expanded="false">+</button>
</div>
<div class="report-body" id="report-body-${r.id}">
<div class="report-body-inner">
<div class="report-text" id="report-text-${r.id}">Loading report...</div>
<div style="position:relative;" class="report-chart-wrap">
<canvas id="report-chart-${r.id}" class="report-chart"></canvas>
</div>
<div class="reports-cta">
<button class="small-btn" data-action="download" data-report="${r.id}">Download PDF</button>
<button class="small-btn" data-action="regenerate" data-report="${r.id}">Regenerate</button>
<button class="small-btn" data-action="expand" data-report="${r.id}">Open full view</button>
</div>
</div>
</div>
    `;
    container.appendChild(card);
 
    // header click toggles
    const header = card.querySelector('.report-header');
    const toggleBtn = card.querySelector('.report-toggle');
    const body = card.querySelector('.report-body');
 
    header.addEventListener('click', () => {
      const expanded = toggleBtn.getAttribute('aria-expanded') === 'true';
      if (expanded) {
        // collapse
        toggleBtn.textContent = '+';
        toggleBtn.setAttribute('aria-expanded', 'false');
        body.style.maxHeight = '0';
        body.style.padding = '0 8px';
      } else {
        // expand
        toggleBtn.textContent = '−';
        toggleBtn.setAttribute('aria-expanded', 'true');
        // set a large maxHeight to allow smooth open; will be trimmed if content grows
        body.style.maxHeight = body.scrollHeight + 20 + 'px';
        body.style.padding = '8px';
        // lazy-populate contents only once
        if (!body.dataset.loaded) {
          body.dataset.loaded = '1';
          generateDummyReport(r.id);
        }
      }
    });
 
    // small action buttons
    card.querySelectorAll('.small-btn').forEach(btn => {
      btn.addEventListener('click', (ev) => {
        ev.stopPropagation();
        const action = btn.getAttribute('data-action');
        const rid = btn.getAttribute('data-report');
        if (action === 'download') {
          alert(`(placeholder) Downloading PDF for ${rid}...`);
        } else if (action === 'regenerate') {
          // re-generate dummy content (simulate AI regen)
          generateDummyReport(rid, { regen: true });
        } else if (action === 'expand') {
          // open full view — placeholder
          alert(`(placeholder) Open full ${rid} report (future: full PDF / AI page).`);
        }
      });
    });
  });
}
 
// Create / populate dummy report content + draw a small chart
function generateDummyReport(reportId, opts = {}) {
  const textEl = document.getElementById(`report-text-${reportId}`);
  const canvasId = `report-chart-${reportId}`;
  if (!textEl) return;
 
  // Dummy AI-like summary text per report
  const summaries = {
    roi: `Summary (ROI): The current investment shows positive trends driven by early cost savings and process automation. Projected 3-year ROI is ~18–22%. Recommendations: prioritize pilot scaling, monitor integration costs, and revisit vendor contracts.`,
    performance: `Summary (Performance): Implementation progress is steady; two modules are delayed by dependency issues. Action items: reallocate two engineers to backlog items and refine sprint scope to clear the critical path.`,
    predictive: `Summary (Predictive): Forecast models show a likely 12% reduction in emissions under current measures; additional optimizations could further reduce emissions by 6–9%. Risk: data quality gaps for Q4 may reduce confidence intervals.`
  };
 
  // populate text (if regen, prepend an indicator)
  const regenPrefix = opts.regen ? 'Regenerated summary — ' : '';
  textEl.textContent = regenPrefix + (summaries[reportId] || 'No summary available.');
 
  // draw a small chart to visually represent something for this report
  const ctx = document.getElementById(canvasId);
  if (!ctx) return;
 
  // If a chart already exists for this report, update it
  if (charts[`report_${reportId}_chart`]) {
    try {
      charts[`report_${reportId}_chart`].data.datasets[0].data = getDummySeriesForReport(reportId);
      charts[`report_${reportId}_chart`].update();
      return;
    } catch (e) {
      console.warn('Failed to update existing chart', e);
    }
  }
 
  // Create a small compact chart
  charts[`report_${reportId}_chart`] = new Chart(ctx, {
    type: reportId === 'performance' ? 'bar' : 'line',
    data: {
      labels: ['Jan','Feb','Mar','Apr','May','Jun'],
      datasets: [{
        label: reportId === 'roi' ? 'Projected ROI (%)' : (reportId === 'performance' ? 'Throughput' : 'Projection'),
        data: getDummySeriesForReport(reportId),
        fill: reportId !== 'performance',
        tension: 0.3
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: { display: true, ticks: { maxRotation: 0 } },
        y: { display: true, beginAtZero: true }
      }
    }
  });
}
 
// helper: small dummy numeric series per report
function getDummySeriesForReport(reportId) {
  if (reportId === 'roi') return [1.2, 2.5, 4.1, 7.6, 11.8, 18.0];
  if (reportId === 'performance') return [40, 55, 60, 70, 85, 92];
  if (reportId === 'predictive') return [2100, 1950, 1800, 1600, 1450, 1300];
  return [10,20,30,40,50,60];
}

function showSection(sectionId) {
  // Hide all sections
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    section.classList.remove('active');
  });
  
  // Show target section
  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.classList.add('active');
    currentSection = sectionId;
    
    // Initialize section-specific content
    setTimeout(() => {
      if (sectionId === 'dashboard' && !charts.emissionsChart) {
        createEmissionsChart();
      }
      if (sectionId === 'analytics') {
        if (!charts.roiChart) createROIChart();
        if (!charts.maturityChart) createMaturityChart();
      }
      if (sectionId === 'scenarios' && !charts.scenarioChart) {
        createScenarioChart();
      }
    }, 100);
  }
}

// Populate AI Insights
function populateAIInsights() {
  const container = document.getElementById('aiInsights');
  if (!container) return;
  container.innerHTML = '';
  enterpriseData.aiInsights.forEach(insight => {
    const insightEl = document.createElement('div');
    insightEl.className = 'insight-item';
    const iconMap = {
      'recommendation': '💡',
      'risk_alert': '⚠️',
      'opportunity': '🚀'
    };
    const iconName = iconMap[insight.type] || 'info';
    insightEl.innerHTML = `
<div class="insight-title"><i data-feather="${iconName}"></i> ${insight.title}</div>
<div class="insight-description">${insight.description}</div>
<div class="insight-confidence">Confidence: ${insight.confidence} | Impact: ${insight.impact}</div>
    `;
    container.appendChild(insightEl);
  });
 
  // Render feather icons in case new elements were added
  if (window.feather) feather.replace();
}

// Populate Competitor Feed
function populateCompetitorFeed() {
  const container = document.getElementById('competitorFeed');
  if (!container) return;
  
  container.innerHTML = '';
  enterpriseData.competitiveIntelligence.forEach(item => {
    const feedItem = document.createElement('div');
    feedItem.className = 'feed-item';
    
    const initials = item.competitor.substring(0, 2);
    
    feedItem.innerHTML = `
      <div class="feed-icon">${initials}</div>
      <div class="feed-content">
        <div class="feed-header">
          <div class="feed-company">${item.competitor}</div>
          <div class="feed-time">${item.timeline}</div>
        </div>
        <div class="feed-description">${item.recentMove}</div>
        <div class="feed-impact ${item.impact.toLowerCase()}">Impact: ${item.impact}</div>
      </div>
    `;
    
    container.appendChild(feedItem);
  });
}

// Populate Active Workflows
function populateWorkflows() {
  const container = document.getElementById('activeWorkflows');
  if (!container) return;
  
  container.innerHTML = '';
  enterpriseData.activeWorkflows.forEach(workflow => {
    const workflowEl = document.createElement('div');
    workflowEl.className = 'workflow-item';
    
    workflowEl.innerHTML = `
      <div class="workflow-title">${workflow.name}</div>
      <div class="workflow-stage">${workflow.stage}</div>
      <div class="workflow-participants">${workflow.participants.length} participants • ${workflow.comments} comments</div>
    `;
    
    container.appendChild(workflowEl);
  });
}

// Populate AI Recommendations
function populateAIRecommendations() {
  const container = document.getElementById('aiRecommendations');
  if (!container) return;
  
  const recommendations = [
    {
      title: "Accelerate Electrification",
      description: "Market conditions favor early electrification implementation. 18% cost savings available through Q4 2025 incentives.",
      confidence: "92%",
      impact: "High"
    },
    {
      title: "CCS Partnership Opportunity",
      description: "Shell's recent investment creates potential for shared infrastructure. Estimated £120M cost reduction.",
      confidence: "74%",
      impact: "High"
    },
    {
      title: "Digital Twin Integration",
      description: "Low-risk, high-impact technology ready for immediate deployment. Quick ROI of 1.5 years.",
      confidence: "91%",
      impact: "Medium"
    }
  ];
  
  container.innerHTML = '';
  recommendations.forEach(rec => {
    const recEl = document.createElement('div');
    recEl.className = 'recommendation-card';
    
    recEl.innerHTML = `
      <div class="recommendation-title">${rec.title}</div>
      <div class="recommendation-description">${rec.description}</div>
      <div class="recommendation-meta">
        <div class="recommendation-confidence">${rec.confidence}</div>
        <div class="recommendation-impact">${rec.impact} Impact</div>
      </div>
    `;
    
    container.appendChild(recEl);
  });
}

// Populate Technology Library
function populateTechnologyLibrary() {
  const container = document.getElementById('techLibrary');
  if (!container) return;
  
  renderTechnologyLibrary(enterpriseData.technologyLibrary);
}

function renderTechnologyLibrary(technologies) {
  const container = document.getElementById('techLibrary');
  if (!container) return;
 
  container.innerHTML = '';
  technologies.forEach(tech => {
    const draggable = true; // library cards should be draggable
    const techCard = document.createElement('div');
    techCard.className = 'tech-card';
    if (draggable) {
      techCard.setAttribute('draggable', 'true');
      techCard.dataset.techId = tech.id;
    }
 
    techCard.innerHTML = `
<div class="tech-card__header">
<h4 class="tech-card__title">${tech.name}</h4>
<span class="tech-card__trl">TRL ${tech.trl}</span>
</div>
<div class="tech-card__category">${tech.category}</div>
<div class="tech-card__description">${tech.description}</div>
<div class="tech-card__metrics">
<div class="tech-metric">
<span class="tech-metric__label">Impact</span>
<span class="tech-metric__value">${tech.emissionsImpact}</span>
</div>
<div class="tech-metric">
<span class="tech-metric__label">Cost</span>
<span class="tech-metric__value">${tech.cost}</span>
</div>
<div class="tech-metric">
<span class="tech-metric__label">ROI</span>
<span class="tech-metric__value">${tech.roi}</span>
</div>
<div class="tech-metric">
<span class="tech-metric__label">Risk</span>
<span class="tech-metric__value">${tech.risk}</span>
</div>
</div>
    `;
 
    // allow keyboard focus & accessible label
    techCard.tabIndex = 0;
    techCard.setAttribute('role', 'button');
    techCard.setAttribute('aria-label', `${tech.name}, ${tech.category}, TRL ${tech.trl}`);
 
    container.appendChild(techCard);
  });
}

// Charts initialization
function initializeCharts() {
  // Charts will be created when sections are accessed
}

function createEmissionsChart() {
  const ctx = document.getElementById('emissionsChart');
  if (!ctx) return;
  
  charts.emissionsChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['2024', '2025', '2026', '2027', '2028', '2029', '2030'],
      datasets: [{
        label: 'Current Trajectory',
        data: [2500, 2400, 2300, 2200, 2000, 1800, 1600],
        borderColor: '#1FB8CD',
        backgroundColor: 'rgba(31, 184, 205, 0.1)',
        fill: true,
        tension: 0.4
      }, {
        label: 'AI-Optimized Path',
        data: [2500, 2100, 1700, 1400, 1200, 1100, 875],
        borderColor: '#B4413C',
        backgroundColor: 'rgba(180, 65, 60, 0.1)',
        fill: true,
        borderDash: [5, 5],
        tension: 0.4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top',
        },
        tooltip: {
          callbacks: {
            afterLabel: function(context) {
              const reduction = ((2500 - context.parsed.y) / 2500 * 100).toFixed(0);
              return `${reduction}% reduction from baseline`;
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: false,
          title: {
            display: true,
            text: 'Emissions (thousands tonnes CO₂e)'
          }
        }
      }
    }
  });
}

function createROIChart() {
  const ctx = document.getElementById('roiChart');
  if (!ctx) return;
  
  charts.roiChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'],
      datasets: [{
        label: 'Cumulative ROI (£M)',
        data: [-200, -120, 85, 280, 485],
        backgroundColor: ['#B4413C', '#B4413C', '#1FB8CD', '#1FB8CD', '#1FB8CD'],
        borderColor: ['#944454', '#944454', '#5D878F', '#5D878F', '#5D878F'],
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              const value = context.parsed.y;
              return value > 0 ? `+£${value}M profit` : `£${Math.abs(value)}M investment`;
            }
          }
        }
      },
      scales: {
        y: {
          title: {
            display: true,
            text: 'ROI (£M)'
          },
          grid: {
            color: function(context) {
              if (context.tick.value === 0) {
                return '#666';
              }
              return '#e5e5e5';
            }
          }
        }
      }
    }
  });
}

function createMaturityChart() {
  const ctx = document.getElementById('maturityChart');
  if (!ctx) return;
  
  const techData = enterpriseData.technologyLibrary.map(tech => ({
    x: tech.trl,
    y: tech.confidence,
    label: tech.name
  }));
  
  charts.maturityChart = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: ['Waste Heat (TRL 9)', 'Electrification (TRL 9)', 'Leak Detection (TRL 8)', 'Digital Twin (TRL 8)', 'Carbon Capture (TRL 8)', 'Subsea (TRL 7)', 'Floating Wind (TRL 7)', 'Green H2 (TRL 6)'],
      datasets: [{
        label: 'Technology Readiness Level',
        data: [9, 9, 8, 8, 8, 7, 7, 6],
        backgroundColor: 'rgba(31, 184, 205, 0.2)',
        borderColor: '#1FB8CD',
        pointBackgroundColor: '#1FB8CD'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: 'Technology Maturity Assessment'
        }
      },
      scales: {
        r: {
          min: 0,
          max: 10,
          ticks: {
            stepSize: 1
          }
        }
      }
    }
  });
}

function createScenarioChart() {
  const ctx = document.getElementById('scenarioChart');
  if (!ctx) return;

  charts.scenarioChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['2024', '2025', '2026', '2027', '2028', '2029', '2030'],
      datasets: [
        {
          label: 'Base Case',
          data: enterpriseData.scenarios.base.slice(),
          borderColor: '#1FB8CD',
          backgroundColor: 'rgba(31, 184, 205, 0.08)',
          fill: false
        },
        {
          label: 'Conservative',
          data: enterpriseData.scenarios.conservative.slice(),
          borderColor: '#FFC185',
          backgroundColor: 'rgba(255, 193, 133, 0.08)',
          fill: false
        },
        {
          label: 'Aggressive',
          data: enterpriseData.scenarios.aggressive.slice(),
          borderColor: '#B4413C',
          backgroundColor: 'rgba(180, 65, 60, 0.08)',
          fill: false
        },
        {
          label: 'Crisis Response',
          data: enterpriseData.scenarios.crisis.slice(),
          borderColor: '#6b6b6b',
          backgroundColor: 'rgba(107,107,107,0.06)',
          fill: false,
          borderDash: [6,4]
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top'
        }
      },
      scales: {
        y: {
          beginAtZero: false,
          title: {
            display: true,
            text: 'Emissions (thousands tonnes CO₂e)'
          }
        }
      }
    }
  });
}


// Drag and Drop functionality
function initializeDragAndDrop() {

  // Reset any globals

  draggedTech = null;
 
  // handle dragstart consistently from the nearest .tech-card

  document.addEventListener('dragstart', function(e) {

    const card = e.target.closest && e.target.closest('.tech-card');

    if (!card) return;
 
    const techId = card.dataset && card.dataset.techId;

    if (!techId) return;
 
    // prefer storing id in dataTransfer

    try {

      e.dataTransfer.setData('text/plain', String(techId));

    } catch (err) {

      // ignore - fallback to global var

    }
 
    draggedTech = enterpriseData.technologyLibrary.find(t => String(t.id) === String(techId));

    card.classList.add('dragging');

    e.dataTransfer.effectAllowed = 'move';

  });
 
  document.addEventListener('dragend', function(e) {

    const card = e.target.closest && e.target.closest('.tech-card');

    if (card) card.classList.remove('dragging');

    // keep draggedTech until drop handler clears it

  });
 
  // Make dropzones accept drops

  const dropzones = document.querySelectorAll('.phase-dropzone');

  dropzones.forEach(zone => {

    zone.addEventListener('dragover', function(e) {

      e.preventDefault();

      this.classList.add('drag-over');

      e.dataTransfer.dropEffect = 'move';

    });
 
    zone.addEventListener('dragleave', function(e) {

      if (!this.contains(e.relatedTarget)) {

        this.classList.remove('drag-over');

      }

    });
 
    zone.addEventListener('drop', function(e) {

      e.preventDefault();

      this.classList.remove('drag-over');
 
      // Prefer explicit dataTransfer id, fallback to global draggedTech

      let idFromDT = null;

      try { idFromDT = e.dataTransfer.getData('text/plain') || null; } catch (err) { idFromDT = null; }
 
      let tech = null;

      if (idFromDT) {

        tech = enterpriseData.technologyLibrary.find(t => String(t.id) === String(idFromDT));

      }

      if (!tech && draggedTech) tech = draggedTech;
 
      if (!tech) {

        // nothing to place

        console.warn('Drop received but no tech identified');

        draggedTech = null;

        return;

      }
 
      // Determine target phase robustly

      const targetPhase = getPhaseFromZoneElement(this);

      if (!targetPhase) {

        console.warn('Drop target phase could not be determined for:', this);

        draggedTech = null;

        return;

      }
 
      // Finally add/move the tech into the target phase

      addTechnologyToRoadmap(tech, targetPhase, this);
 
      // clear transient drag state

      draggedTech = null;

    });

  });

}
 

function addTechnologyToRoadmap(tech, phase, dropzone) {
  if (!tech) return;
  const validPhase = phase || getPhaseFromZoneElement(dropzone);
  if (!validPhase) {
    console.warn('Unknown target phase for drop', dropzone, phase);
    return;
  }
 
  // Remove tech from any other phase first (ensures single-location invariant)
  Object.keys(placedTechnologies).forEach(p => {
    placedTechnologies[p] = (placedTechnologies[p] || []).filter(t => String(t.id) !== String(tech.id));
  });
 
  // Add to target phase (if not already there)
  if (!placedTechnologies[validPhase]) placedTechnologies[validPhase] = [];
  if (!placedTechnologies[validPhase].find(t => String(t.id) === String(tech.id))) {
    placedTechnologies[validPhase].push(tech);
  }
 
  // Keep roadmapTechnologies in sync (if used)
  if (!roadmapTechnologies[validPhase]) roadmapTechnologies[validPhase] = [];
  if (!roadmapTechnologies[validPhase].find(t => String(t.id) === String(tech.id))) {
    roadmapTechnologies[validPhase].push(tech);
  }
 
  // Re-render using the improved UI
  renderPlacedTechnologies();
 
  // small visual feedback: briefly flash the dropzone
  if (dropzone && dropzone.classList) {
    dropzone.classList.add('just-dropped');
    setTimeout(() => dropzone.classList.remove('just-dropped'), 420);
  }
 
  updatePhaseMetrics();
}

function updatePhaseMetrics() {
  // This would calculate updated costs and impacts based on dropped technologies
  console.log('Updating phase metrics based on roadmap changes');
}

// AI Assistant functionality
function initializeAIAssistant() {
  const aiInput = document.getElementById('aiInput');
  if (aiInput) {
    aiInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        sendAIMessage();
      }
    });
  }
}

function askAI(query) {
  const input = document.getElementById('aiInput');
  if (input) {
    input.value = query;
    sendAIMessage();
  }
}

function sendAIMessage() {
  const input = document.getElementById('aiInput');
  if (!input || !input.value.trim()) return;
  
  const message = input.value.trim();
  addMessageToChat('user', message);
  
  // Show typing indicator
  setTimeout(() => {
    const response = generateEnterpriseAIResponse(message);
    addMessageToChat('assistant', response);
  }, 1500);
  
  input.value = '';
}

function addMessageToChat(sender, message) {
  const messagesContainer = document.getElementById('aiMessages');
  if (!messagesContainer) return;
  
  const messageDiv = document.createElement('div');
  messageDiv.className = `ai-message ${sender}`;
  
  const avatar = sender === 'user' ? 'FA' : 'AI';
  
  messageDiv.innerHTML = `
    <div class="message-avatar">${avatar}</div>
    <div class="message-content">
      <p>${message}</p>
    </div>
  `;
  
  messagesContainer.appendChild(messageDiv);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function generateEnterpriseAIResponse(query) {
  const lowerQuery = query.toLowerCase();
  
  const responses = {
    'technology roadmap optimization': `Based on your current portfolio and market conditions, I recommend prioritizing Platform Electrification first (95% confidence, 2.1 year ROI), followed by Digital Twin implementation (91% confidence, 1.5 year ROI). This sequence maximizes early wins while building foundation for larger investments like CCS. The current regulatory environment offers 23% additional incentives for electrification through Q2 2025.`,
    
    'competitive analysis ccs': `Shell's £2B North Sea CCS investment creates both challenges and opportunities. Their Acorn project in Scotland will compete for the same geological storage sites you're targeting. However, their infrastructure investment opens partnership possibilities that could reduce your costs by £120M. Equinor's Northern Lights project is also relevant - they're 18 months ahead but targeting different storage formations. I recommend engaging Shell for potential shared infrastructure discussions within the next 60 days.`,
    
    'hydrogen market trends': `The green hydrogen market is experiencing rapid evolution. Current analysis shows: 1) Electrolyzer costs dropping 15% annually, 2) UK government announcing £2B additional funding for offshore hydrogen, 3) Industrial demand exceeding supply by 2027. For North Sea operations, I recommend starting with blue hydrogen transition (using existing gas infrastructure) while building green capabilities. The ROI crossover point is projected for Q3 2026.`,
    
    'offshore platform': `For offshore platform optimization, your 4 platforms offer significant opportunities. Based on your operational profile (150M boe/year), prioritize: 1) Electrification of Platform A and B (closest to shore, easiest grid connection), 2) Advanced leak detection across all platforms (immediate 15% reduction), 3) Digital twin for predictive maintenance. Total investment: £230M with 2.8 year payback. I can model specific scenarios for each platform.`,
    
    'carbon capture': `Your operational profile is ideal for CCS implementation. With 2.5M tonnes annual emissions, industrial-scale capture could handle 35% reduction. Key considerations: 1) Aker Carbon Capture technology best fits your gas composition, 2) Store-2 storage site 45km from Platform C offers optimal logistics, 3) Current carbon price trends support 3.2 year ROI. Shell's recent investment may create shared transport opportunities reducing your costs by 18%.`
  };
  
  // Find best matching response
  for (const [key, response] of Object.entries(responses)) {
    if (lowerQuery.includes(key) || key.split(' ').some(word => lowerQuery.includes(word))) {
      return response;
    }
  }
  
  // Default enterprise response
  return `Based on your enterprise profile and current market conditions, I can provide detailed analysis on this topic. Your North Sea operations present unique opportunities given the current regulatory environment and technology maturity levels. Would you like me to focus on specific technologies (CCUS, hydrogen, electrification), competitive positioning, or regulatory/financial optimization? I have access to your complete operational data and real-time market intelligence.`;
}

// Scenario controls
function initializeScenarioControls() {
  const scenarioBtns = document.querySelectorAll('.scenario-btn');
  scenarioBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      scenarioBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      currentScenario = this.dataset.scenario;
      updateScenarioDisplay();
    });
  });
  
  // Initialize sliders
  const sliders = document.querySelectorAll('.slider');
  sliders.forEach(slider => {
    // set initial display
    const valueDisplay = slider.parentElement.querySelector('.slider-value');
    if (valueDisplay) {
      const unit = slider.id === 'carbonPrice' ? '£' : '%';
      valueDisplay.textContent = `${unit}${slider.value}`;
    }
    slider.addEventListener('input', function() {
      const valueDisplay = this.parentElement.querySelector('.slider-value');
      if (valueDisplay) {
        const unit = this.id === 'carbonPrice' ? '£' : '%';
        valueDisplay.textContent = `${unit}${this.value}`;
      }
      updateScenarioMetrics();
    });
  });

  // When regulatory select changes
  const regSelect = document.getElementById('regulatory');
  if (regSelect) {
    regSelect.addEventListener('change', () => updateScenarioMetrics());
  }
}

function updateScenarioDisplay() {
  console.log(`Switching to ${currentScenario} scenario`);
  updateScenarioMetrics();    // recomputes dataset values
  highlightScenario(currentScenario); // visual emphasise
}


function updateScenarioMetrics() {
  // Read UI parameters
  const carbonPrice = Number(document.getElementById('carbonPrice')?.value || 85);
  const costReduction = Number(document.getElementById('costReduction')?.value || 12);
  const regulatory = document.getElementById('regulatory')?.value || 'medium';

  // Logging for dev
  console.log(`Updating metrics for carbon price: £${carbonPrice}, cost reduction: ${costReduction}%, regulatory: ${regulatory}, active scenario: ${currentScenario}`);

  // Apply to chart data & metrics
  applyScenarioParameters({ carbonPrice, costReduction, regulatory, scenario: currentScenario });

  // Update values in the "Key Metrics" panel easily (simple example)
  const investmentEl = document.querySelector('#scenarios .metric-current') || null;
  // Instead of touching many DOM nodes, update the displayed "metric-current" placeholders if present:
  const metrics = calculateScenarioSummary(currentScenario, carbonPrice, costReduction, regulatory);
  // Update the small metric elements (fallback: use existing static HTML)
  // Locate the scenario-metrics block and update the three "metric-current" spans
  const metricCurrents = document.querySelectorAll('#scenarios .metric-current');
  if (metricCurrents && metricCurrents.length >= 3) {
    metricCurrents[0].textContent = `£${(metrics.totalInvestment / 1e9).toFixed(2)}B`;
    metricCurrents[1].textContent = `${metrics.emissionsReduction}%`;
    metricCurrents[2].textContent = `${metrics.payback.toFixed(1)} years`;
  }

  // Refresh chart
  if (charts.scenarioChart) charts.scenarioChart.update();
}

/**
 * Emphasise the selected scenario while keeping all scenario lines visible.
 * - selected === 'base' => show all equally
 * - otherwise => make selected line bold & vivid, de-emphasise others (lower alpha)
 */
function highlightScenario(selected) {
  if (!charts.scenarioChart) return;

  const datasets = charts.scenarioChart.data.datasets;
  // Ensure dataset ordering matches scenarioKeys (base, conservative, aggressive, crisis)
  datasets.forEach((ds, idx) => {
    const key = scenarioKeys[idx] || `unknown${idx}`;

    // Default background (keep same)
    ds.backgroundColor = scenarioColors[key] ? scenarioColors[key].bg : ds.backgroundColor;

    if (selected === 'base') {
      // base: equal emphasis
      ds.borderColor = scenarioColors[key] ? scenarioColors[key].border : ds.borderColor;
      ds.borderWidth = 2;
      ds.pointRadius = 2;
      ds.borderDash = (key === 'crisis') ? [6,4] : [];
    } else {
      // non-base selected: emphasise selected, lightly emphasise base, fade the rest
      if (key === selected) {
        ds.borderColor = scenarioColors[key] ? scenarioColors[key].border : ds.borderColor;
        ds.borderWidth = 3;
        ds.pointRadius = 3;
        ds.borderDash = (key === 'crisis') ? [6,4] : [];
      } else if (key === 'base') {
        // keep base visible but slightly subdued compared to selected
        ds.borderColor = hexToRgba(scenarioColors.base.border, 0.9);
        ds.borderWidth = 2;
        ds.pointRadius = 2;
        ds.borderDash = [];
      } else {
        // other non-selected scenarios -> fade
        const baseColor = scenarioColors[key] ? scenarioColors[key].border : '#999';
        ds.borderColor = hexToRgba(baseColor, 0.18); // very faint
        ds.borderWidth = 1;
        ds.pointRadius = 0;
        ds.borderDash = (key === 'crisis') ? [6,4] : [];
      }
    }
    // keep dataset visible always (don't hide)
    ds.hidden = false;
  });

  charts.scenarioChart.update();
}


function applyScenarioParameters({ carbonPrice, costReduction, regulatory, scenario }) {
  if (!charts.scenarioChart) return;

  // Create multipliers based on parameters (simple but useful)
  // Higher carbon price -> greater incentive to reduce emissions (slightly lower emissions)
  const carbonFactor = 1 - Math.max(-0.05, Math.min(0.12, (carbonPrice - 85) / 900)); // range roughly -5%..+12%
  // Cost reductions accelerate deployment -> additional emission reductions over time
  const costFactorBase = 1 - (costReduction / 100) * 0.35; // scaled effect
  // Regulatory multiplier
  let regulatoryFactor = 1.0;
  if (regulatory === 'low') regulatoryFactor = 1.02;
  if (regulatory === 'medium') regulatoryFactor = 1.0;
  if (regulatory === 'high') regulatoryFactor = 0.95;

  // Apply to each dataset by deriving from baseline scenario arrays
  const labelsCount = charts.scenarioChart.data.labels.length;

  ['base','conservative','aggressive','crisis'].forEach((key, idx) => {
    const baseSeries = enterpriseData.scenarios[key].slice();
    // For each year point, apply progressive improvement from cost factor
    const adjusted = baseSeries.map((val, i) => {
      const yearProgress = (i / Math.max(1, labelsCount - 1)); // 0..1 across timeline
      const dynamicCostEffect = 1 - (costReduction / 100) * 0.5 * yearProgress;
      // Combine factors
      const result = Math.round(val * carbonFactor * dynamicCostEffect * regulatoryFactor);
      return Math.max(0, result);
    });
    charts.scenarioChart.data.datasets[idx].data = adjusted;
  });
}

function calculateScenarioSummary(scenarioKey, carbonPrice, costReduction, regulatory) {
  // Very simple approximations for UI summary (replace with real model later)
  const series = enterpriseData.scenarios[scenarioKey] || enterpriseData.scenarios.base;
  const last = series[series.length - 1];
  const first = series[0];
  const reductionPercent = Math.round(((first - last) / first) * 100);

  // Simple investment heuristic (notional): higher reduction -> higher investment
  const totalInvestment = 1.57e9 * (1 + ((65 - reductionPercent) / 100) * 0.3); // base ~1.57B
  const payback = Math.max(1.5, 4.2 - (reductionPercent - 50) / 10); // rough

  return {
    totalInvestment,
    emissionsReduction: reductionPercent,
    payback
  };
}


function showTab(tabId) {
  const tabContents = document.querySelectorAll('.tab-content');
  tabContents.forEach(content => {
    content.classList.remove('active');
  });
  
  const targetTab = document.getElementById(tabId);
  if (targetTab) {
    targetTab.classList.add('active');
  }
}

function getPhaseFromZoneElement(zoneEl) {
  if (!zoneEl) return null;
 
  // 1) Prefer explicit data attribute on the zone: <div class="phase-dropzone" data-phase="short-term">
  const ds = zoneEl.dataset && zoneEl.dataset.phase;
  if (ds) return ds;
 
  // 2) Try common id patterns (normalize to 'short-term' | 'medium-term' | 'long-term')
  const id = zoneEl.id || '';
  if (!id) return null;
  const normalized = id.toLowerCase();
 
  // common canonical names
  const mapCandidates = [
    {pattern: /short/, key: 'short-term'},
    {pattern: /medium/, key: 'medium-term'},
    {pattern: /long/, key: 'long-term'}
  ];
 
  for (const cand of mapCandidates) {
    if (cand.pattern.test(normalized)) return cand.key;
  }
 
  // 3) fallback to checking parent nodes for a phase hint (rare)
  let parent = zoneEl.parentElement;
  while (parent) {
    if (parent.dataset && parent.dataset.phase) return parent.dataset.phase;
    parent = parent.parentElement;
  }
 
  return null;
}

function renderPlacedTechnologies() {
  const dropzones = document.querySelectorAll('.phase-dropzone');
  if (!dropzones || dropzones.length === 0) return;
 
  dropzones.forEach(zone => {
    // Clean zone content (but keep zone header if any — assume zone only contains tech cards)
    zone.innerHTML = '';
 
    const phase = zone.id.replace('Zone', '').replace(/([A-Z])/g, '-$1').toLowerCase();
    const items = placedTechnologies[phase] || [];
 
    items.forEach(tech => {
      const techCard = document.createElement('div');
      techCard.className = 'tech-card placed';
      techCard.setAttribute('draggable', 'true');
      techCard.dataset.techId = tech.id;
 
      techCard.innerHTML = `
<div class="tech-card__header">
<h4 class="tech-card__title">${tech.name}</h4>
<span class="tech-card__trl">TRL ${tech.trl}</span>
</div>
<div class="tech-card__category">${tech.category}</div>
<div class="tech-card__description">${tech.description}</div>
<div class="tech-card__metrics">
<div class="tech-metric">
<span class="tech-metric__label">Impact</span>
<span class="tech-metric__value">${tech.emissionsImpact}</span>
</div>
<div class="tech-metric">
<span class="tech-metric__label">Cost</span>
<span class="tech-metric__value">${tech.cost}</span>
</div>
<div class="tech-metric">
<span class="tech-metric__label">ROI</span>
<span class="tech-metric__value">${tech.roi}</span>
</div>
<div class="tech-metric">
<span class="tech-metric__label">Risk</span>
<span class="tech-metric__value">${tech.risk}</span>
</div>
</div>
      `;
 
      // remove button
      const removeBtn = document.createElement('button');
      removeBtn.className = 'tech-card__remove';
      removeBtn.title = 'Remove';
      removeBtn.innerText = '✕';
      removeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        removeTechnology(tech.id);
      });
 
      techCard.appendChild(removeBtn);
      zone.appendChild(techCard);
    });
  });
}function renderPlacedTechnologies() {
  const dropzones = document.querySelectorAll('.phase-dropzone');
  if (!dropzones || dropzones.length === 0) return;
 
  dropzones.forEach(zone => {
    // Clean zone content (but keep zone header if any — assume zone only contains tech cards)
    zone.innerHTML = '';
 
    const phase = zone.id.replace('Zone', '').replace(/([A-Z])/g, '-$1').toLowerCase();
    const items = placedTechnologies[phase] || [];
 
    items.forEach(tech => {
      const techCard = document.createElement('div');
      techCard.className = 'tech-card placed';
      techCard.setAttribute('draggable', 'true');
      techCard.dataset.techId = tech.id;
 
      techCard.innerHTML = `
<div class="tech-card__header">
<h4 class="tech-card__title">${tech.name}</h4>
<span class="tech-card__trl">TRL ${tech.trl}</span>
</div>
<div class="tech-card__category">${tech.category}</div>
<div class="tech-card__description">${tech.description}</div>
<div class="tech-card__metrics">
<div class="tech-metric">
<span class="tech-metric__label">Impact</span>
<span class="tech-metric__value">${tech.emissionsImpact}</span>
</div>
<div class="tech-metric">
<span class="tech-metric__label">Cost</span>
<span class="tech-metric__value">${tech.cost}</span>
</div>
<div class="tech-metric">
<span class="tech-metric__label">ROI</span>
<span class="tech-metric__value">${tech.roi}</span>
</div>
<div class="tech-metric">
<span class="tech-metric__label">Risk</span>
<span class="tech-metric__value">${tech.risk}</span>
</div>
</div>
      `;
 
      // remove button
      const removeBtn = document.createElement('button');
      removeBtn.className = 'tech-card__remove';
      removeBtn.title = 'Remove';
      removeBtn.innerText = '✕';
      removeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        removeTechnology(tech.id);
      });
 
      techCard.appendChild(removeBtn);
      zone.appendChild(techCard);
    });
  });
}

// Enterprise Action Functions
function optimizeTrajectory() {
  alert('🤖 AI Optimization in progress...\n\nAnalyzing 847 technology combinations across 12 parameters.\n\nOptimal sequence identified:\n1. Accelerate electrification by 6 months\n2. Delay floating wind by 12 months\n3. Integrate digital twin with CCS planning\n\nProjected savings: £45M\nEmissions improvement: +8%');
}

function runPredictiveAnalysis() {
  alert('📊 Running Predictive Analysis...\n\nMonte Carlo simulation with 10,000 iterations:\n\n• 87% probability of meeting 2030 targets\n• Cost overrun risk: 23%\n• Technology risk: Medium\n• Regulatory risk: High\n\nRecommendation: Establish regulatory contingency fund');
}

function runGapAnalysis() {
  setTimeout(() => {
    alert('✅ Gap Analysis Complete\n\nCritical findings:\n• Methane monitoring capability gap\n• Offshore hydrogen infrastructure missing\n• Carbon accounting system needs upgrade\n\nRecommended priority technologies identified and ranked by impact/feasibility score.');
  }, 100);
}

function generateTechMatching() {
  setTimeout(() => {
    alert('🎯 AI Technology Matching Complete\n\nTop 3 matches for your operational profile:\n\n1. Platform Electrification (95% match)\n2. Advanced Leak Detection (92% match) \n3. Digital Twin Integration (89% match)\n\nDetailed technology specs and vendor recommendations have been generated.');
  }, 100);
}

function aiOptimizeRoadmap() {
  // Clear existing placements
  placedTechnologies = {
    'short-term': [],
    'medium-term': [],
    'long-term': []
  };
  // Optimal technology placement based on timeline and risk
  const shortTerm = [1, 6, 7]; // Leak Detection, Digital Twin, Waste Heat
  const mediumTerm = [2, 3, 8]; // Platform Electrification, Carbon Capture, Subsea
  const longTerm = [4, 5]; // Floating Wind, Green Hydrogen
  // Place technologies with animation
  setTimeout(() => {
    shortTerm.forEach(id => {
      const tech = enterpriseData.technologyLibrary.find(t => t.id === id);
      if (tech) placedTechnologies['short-term'].push(tech);
    });
    renderPlacedTechnologies();
    updatePhaseMetrics();
  }, 200);
  setTimeout(() => {
    mediumTerm.forEach(id => {
      const tech = enterpriseData.technologyLibrary.find(t => t.id === id);
      if (tech) placedTechnologies['medium-term'].push(tech);
    });
    renderPlacedTechnologies();
    updatePhaseMetrics();
  }, 600);
  setTimeout(() => {
    longTerm.forEach(id => {
      const tech = enterpriseData.technologyLibrary.find(t => t.id === id);
      if (tech) placedTechnologies['long-term'].push(tech);
    });
    renderPlacedTechnologies();
    updatePhaseMetrics();
  }, 1000);
}

function validateRoadmap() {
  // Build list of placed techs (flatten placedTechnologies)
  const placed = [];
  Object.keys(placedTechnologies).forEach(phase => {
    (placedTechnologies[phase] || []).forEach(t => {
      // clone with phase metadata
      placed.push(Object.assign({}, t, { placedPhase: phase }));
    });
  });
 
  // Build quick lookup by id for placed
  const placedById = {};
  placed.forEach(t => placedById[String(t.id)] = t);
 
  // For validation we need both: placed techs and their declared dependencies
  // Build full graph nodes including dependencies (even if not placed) to detect cycles
  // We'll build graph based on enterpriseData.technologyLibrary (all known techs)
  const allRelevantTechs = enterpriseData.technologyLibrary.slice(); // all known techs
 
  const graphObj = buildDependencyGraph(allRelevantTechs);
 
  // Topological sort & cycle detection on the full dependency graph (for known techs)
  const topo = topoSort(graphObj);
 
  const issues = { missingPrereqs: [], phaseProblems: [], cycles: [] };
 
  if (topo.hasCycle) {
    issues.cycles = topo.cycleNodes; // node ids that are part of cycles
  }
 
  // Check missing prereqs and phase ordering for placed technologies
  placed.forEach(t => {
    (t.dependencies || []).forEach(depId => {
      const depIdStr = String(depId);
      const depPlaced = placedById[depIdStr];
      if (!depPlaced) {
        // missing prerequisite (not placed in any phase)
        const existing = issues.missingPrereqs.find(e => String(e.techId) === String(t.id));
        if (!existing) issues.missingPrereqs.push({ techId: String(t.id), missing: [depIdStr] });
        else existing.missing.push(depIdStr);
      } else {
        // check phase ordering: prereq should be same or earlier phase than the dependent
        const techPhaseRank = phaseRank(t.placedPhase);
        const prereqPhaseRank = phaseRank(depPlaced.placedPhase);
        if (prereqPhaseRank > techPhaseRank) {
          issues.phaseProblems.push({
            techId: String(t.id),
            prereqId: depIdStr,
            techPhase: t.placedPhase,
            prereqPhase: depPlaced.placedPhase
          });
        }
      }
    });
  });
 
  // Mark UI badges for problems
  markDependencyIssues(issues);
 
  // Compute recommended ordering for placed technologies (topo order but restricted to placed items)
  // Get topo.order filtered for placed ids (if no cycle)
  let recommendedOrder = [];
  if (!topo.hasCycle) {
    const placedIds = new Set(placed.map(t => String(t.id)));
    recommendedOrder = topo.order.filter(id => placedIds.has(String(id)));
  } else {
    // If cycle exists, attempt a partial topo using only placed nodes (Kahn on induced subgraph)
    // Build induced graph for placed nodes
    const inducedGraph = { graph: {}, nodes: new Set() };
    placed.forEach(t => {
      inducedGraph.graph[String(t.id)] = [];
      inducedGraph.nodes.add(String(t.id));
    });
    placed.forEach(t => {
      (t.dependencies || []).forEach(dep => {
        if (String(dep) in inducedGraph.graph) {
          // edge dep -> t
          inducedGraph.graph[String(dep)].push(String(t.id));
        }
      });
    });
    const partialTopo = topoSort(inducedGraph);
    recommendedOrder = partialTopo.order;
  }
 
  // Build textual report
  const lines = [];
  lines.push('Roadmap Dependency Validation Report');
  lines.push('------------------------------------');
  if (issues.cycles && issues.cycles.length) {
    lines.push(`Dependency cycles detected among: ${issues.cycles.join(', ')}`);
    lines.push('Please inspect and break the cycles by removing one or more prerequisites.');
  } else {
    lines.push('No cycles detected.');
  }
 
  if (issues.missingPrereqs.length) {
    lines.push('');
    lines.push('Missing prerequisites:');
    issues.missingPrereqs.forEach(entry => {
      const tech = enterpriseData.technologyLibrary.find(x => String(x.id) === String(entry.techId));
      const names = (entry.missing || []).map(id => {
        const t = enterpriseData.technologyLibrary.find(x => String(x.id) === String(id));
        return t ? `${t.name} (id ${id})` : `id ${id}`;
      }).join(', ');
      lines.push(`• ${tech ? tech.name : `id ${entry.techId}`} is missing: ${names}`);
    });
  } else {
    lines.push('No missing prerequisites for placed technologies.');
  }
 
  if (issues.phaseProblems.length) {
    lines.push('');
    lines.push('Phase ordering issues (prereq placed in later phase):');
    issues.phaseProblems.forEach(p => {
      const tech = enterpriseData.technologyLibrary.find(x => String(x.id) === String(p.techId));
      const prereq = enterpriseData.technologyLibrary.find(x => String(x.id) === String(p.prereqId));
      lines.push(`• ${tech ? tech.name : p.techId} (in ${p.techPhase}) depends on ${prereq ? prereq.name : p.prereqId} (in ${p.prereqPhase})`);
    });
  } else {
    lines.push('No phase ordering issues found.');
  }
 
  lines.push('');
  lines.push('Recommended execution order for placed technologies (by id):');
  lines.push(recommendedOrder.length ? recommendedOrder.join(' -> ') : '(none)');
 
  // Show the report (simple alert for now)
  showDependencyReport(lines.join('\n'), issues, recommendedOrder);
 
  // return issues object if caller wants to handle programmatically
  return { issues, recommendedOrder, rawTopo: topo };
}

function createNewScenario() {
  alert('📋 New Scenario Creator\n\nScenario Name: [Custom Scenario]\n\nSelect parameters to modify:\n• Carbon pricing trajectory\n• Technology cost evolution\n• Regulatory stringency\n• Market demand patterns\n\nWould you like to start with a template or build from scratch?');
}

function compareScenarios() {
  alert('📊 Multi-Scenario Comparison\n\nComparing 4 scenarios across key metrics:\n\nBase Case: £1.57B, 65% reduction\nConservative: £1.42B, 58% reduction\nAggressive: £1.89B, 78% reduction\nCrisis Response: £1.23B, 45% reduction\n\nRecommendation: Base case offers optimal risk/return balance');
}

function runMonteCarloAnalysis() {
  setTimeout(() => {
    alert('🎲 Monte Carlo Analysis Complete\n\n10,000 simulation runs:\n\nCost Range: £1.2B - £2.1B (90% confidence)\nEmissions Reduction: 52% - 74%\nSuccess Probability: 87%\n\nKey Risk Factors:\n• Regulatory delays (34% impact)\n• Technology maturity (28% impact)\n• Market conditions (21% impact)');
  }, 100);
}

function bookConsultation(expertId) {
  const expertNames = {
    'dr-thompson': 'Dr. Richard Thompson',
    'anna-martinez': 'Anna Martinez'
  };
  
  alert(`📅 Booking consultation with ${expertNames[expertId]}\n\nAvailable slots this week:\n• Tomorrow 2:00 PM (1 hour)\n• Friday 10:00 AM (2 hours)\n• Friday 3:00 PM (1 hour)\n\nPreferred session length and topics?\nRemaining allocation: 5 hours this month`);
}




// Search and filter functionality
document.addEventListener('DOMContentLoaded', function() {
  const techSearch = document.getElementById('techSearch');
  const techFilter = document.getElementById('techFilter');
  
  if (techSearch) {
    techSearch.addEventListener('input', function() {
      filterTechnologies();
    });
  }
  
  if (techFilter) {
    techFilter.addEventListener('change', function() {
      filterTechnologies();
    });
  }
});

function filterTechnologies() {
  const searchTerm = document.getElementById('techSearch')?.value.toLowerCase() || '';
  const categoryFilter = document.getElementById('techFilter')?.value || '';
  
  let filteredTechs = enterpriseData.technologyLibrary;
  
  if (searchTerm) {
    filteredTechs = filteredTechs.filter(tech => 
      tech.name.toLowerCase().includes(searchTerm) ||
      tech.description.toLowerCase().includes(searchTerm)
    );
  }
  
  if (categoryFilter) {
    filteredTechs = filteredTechs.filter(tech => 
      tech.category === categoryFilter
    );
  }
  
  renderTechnologyLibrary(filteredTechs);
}

// Roadmap System
function initializeRoadmap() {

  const aiOptimizeBtn = document.getElementById('ai-optimize');

  const clearRoadmapBtn = document.getElementById('clear-roadmap');
 
  if (aiOptimizeBtn) aiOptimizeBtn.addEventListener('click', aiOptimizeRoadmap);

  if (clearRoadmapBtn) clearRoadmapBtn.addEventListener('click', clearRoadmap);
 
  // Create a "Clear all" button in the roadmap toolbar if it doesn't exist

  const roadmapToolbar = document.getElementById('roadmapToolbar') || document.querySelector('.roadmap-toolbar');

  if (roadmapToolbar && !document.getElementById('clear-all-placed')) {

    const btn = document.createElement('button');

    btn.id = 'clear-all-placed';

    btn.className = 'btn btn--danger';

    btn.innerText = 'Clear all placed';

    btn.style.marginLeft = '8px';

    btn.addEventListener('click', () => {

      // clear placed technologies and re-render both roadmap and tech library

      placedTechnologies = { 'short-term': [], 'medium-term': [], 'long-term': [] };

      renderPlacedTechnologies();

      updatePhaseMetrics();

    });

    roadmapToolbar.appendChild(btn);

  }
 
  // Initialize drag and drop (again, safe to call)

  setTimeout(initializeDragAndDrop, 100);

}
 

function aiOptimizeRoadmap() {
  // Clear existing placements
  placedTechnologies = {
    'short-term': [],
    'medium-term': [],
    'long-term': []
  };
  
  // Optimal technology placement based on timeline and risk
  const shortTerm = [1, 6, 7]; // Leak Detection, Digital Twin, Waste Heat
  const mediumTerm = [2, 3, 8]; // Platform Electrification, Carbon Capture, Subsea
  const longTerm = [4, 5]; // Floating Wind, Green Hydrogen
  
  // Place technologies with animation
  setTimeout(() => {
    shortTerm.forEach(id => {
      const tech = enterpriseData.technologyLibrary.find(t => t.id === id);
      if (tech) placedTechnologies['short-term'].push(tech);
    });
    renderPlacedTechnologies();
    updatePhaseMetrics();
  }, 200);
  
  setTimeout(() => {
    mediumTerm.forEach(id => {
      const tech = enterpriseData.technologyLibrary.find(t => t.id === id);
      if (tech) placedTechnologies['medium-term'].push(tech);
    });
    renderPlacedTechnologies();
    updatePhaseMetrics();
  }, 600);
  
  setTimeout(() => {
    longTerm.forEach(id => {
      const tech = enterpriseData.technologyLibrary.find(t => t.id === id);
      if (tech) placedTechnologies['long-term'].push(tech);
    });
    renderPlacedTechnologies();
    updatePhaseMetrics();
  }, 1000);
}

function clearRoadmap() {
  placedTechnologies = {
    'short-term': [],
    'medium-term': [],
    'long-term': []
  };
  renderPlacedTechnologies();
  updatePhaseMetrics();
}

function removeTechnology(techId) {
  let removed = false;

  Object.keys(placedTechnologies).forEach(phase => {

    const beforeLen = placedTechnologies[phase].length;

    placedTechnologies[phase] = placedTechnologies[phase].filter(t => String(t.id) !== String(techId));

    if (placedTechnologies[phase].length !== beforeLen) removed = true;

  });
 
  // Also remove from roadmapTechnologies if you use that structure

  Object.keys(roadmapTechnologies).forEach(phase => {

    roadmapTechnologies[phase] = (roadmapTechnologies[phase] || []).filter(t => String(t.id) !== String(techId));

  });
 
  if (removed) {

    renderPlacedTechnologies();

    updatePhaseMetrics();

  }

}

function buildDependencyGraph(techList) {
  // techList: array of tech objects to include in graph (typically all placed techs)
  const graph = {};        // nodeId -> list of dependent nodeIds (edges node -> neighbors)
  const nodes = new Set();
 
  techList.forEach(t => {
    nodes.add(String(t.id));
    graph[String(t.id)] = (graph[String(t.id)] || []).slice(); // ensure present
  });
 
  // Add edges from prereq -> tech (prereq must come before tech)
  techList.forEach(t => {
    const tid = String(t.id);
    (t.dependencies || []).forEach(depId => {
      const dep = String(depId);
      // if dep is in the graph (only concerned with declared prerequisites that are relevant),
      // still add the node even if the dep isn't placed — we'll detect missing prereqs separately.
      if (!graph[dep]) graph[dep] = [];
      graph[dep].push(tid);
      nodes.add(dep);
    });
  });
 
  return { graph, nodes };
}

function topoSort(graphObj) {
  const graph = graphObj.graph;
  const nodes = Array.from(new Set(Object.keys(graph)));
  // compute indegree
  const indegree = {};
  nodes.forEach(n => indegree[n] = 0);
  for (const u of nodes) {
    (graph[u] || []).forEach(v => {
      indegree[v] = (indegree[v] || 0) + 1;
    });
  }
  // queue of nodes with indegree 0
  const queue = nodes.filter(n => indegree[n] === 0);
  const order = [];
 
  while (queue.length) {
    const n = queue.shift();
    order.push(n);
    (graph[n] || []).forEach(m => {
      indegree[m] = indegree[m] - 1;
      if (indegree[m] === 0) queue.push(m);
    });
  }
 
  const hasCycle = order.length !== nodes.length;
  const cycleNodes = hasCycle ? nodes.filter(n => !order.includes(n)) : [];
 
  return { order, hasCycle, cycleNodes };
}

function phaseRank(phaseKey) {
  // 'short-term' -> 0, 'medium-term' -> 1, 'long-term' -> 2
  if (!phaseKey) return 99;
  const map = { 'short-term': 0, 'shortterm': 0, 'short': 0, 'medium-term': 1, 'mediumterm': 1, 'medium': 1, 'long-term': 2, 'longterm': 2, 'long': 2 };
  return map[String(phaseKey).toLowerCase()] ?? 99;
}

function markDependencyIssues(issues) {
  // issues: { missingPrereqs: [{techId, missing: [ids]}], phaseProblems: [{techId, prereqId, techPhase, prereqPhase}], cycles: [...] }
  // clear existing badges
  document.querySelectorAll('.tech-card .tech-card__badge, .tech-card.dependency-warning').forEach(el => {
    // remove badge node or dependency-warning class
    const parent = el.closest && el.closest('.tech-card');
    if (parent) parent.classList.remove('dependency-warning');
    if (el.parentNode) el.parentNode.removeChild(el);
  });
 
  // helper to attach badge
  function attachBadgeToTech(techId, text, title) {
    const selector = `.tech-card[data-tech-id="${techId}"]`;
    const node = document.querySelector(selector);
    if (!node) return;
    node.classList.add('dependency-warning');
    // avoid multiple badges: remove existing
    const existing = node.querySelector('.tech-card__badge');
    if (existing) existing.remove();
    const badge = document.createElement('span');
    badge.className = 'tech-card__badge';
    badge.title = title || text;
    badge.innerText = text;
    node.appendChild(badge);
  }
 
  // missing prereqs
  (issues.missingPrereqs || []).forEach(entry => {
    attachBadgeToTech(entry.techId, 'Missing prereq', `Missing prerequisites: ${entry.missing.join(', ')}`);
  });
 
  // phase problems
  (issues.phaseProblems || []).forEach(entry => {
    attachBadgeToTech(entry.techId, 'Phase issue', `Prereq ${entry.prereqId} is in ${entry.prereqPhase} but ${entry.techId} is in ${entry.techPhase}`);
  });
 
  // cycles -> mark all nodes in cycle
  (issues.cycles || []).forEach(nodeId => {
    attachBadgeToTech(nodeId, 'Cycle', 'Dependency cycle detected');
  });
}

/* ---------- User-facing report function (can be replaced with modal) ---------- */
function showDependencyReport(text, issues, recommendedOrder) {
  // For now keep simple: alert + console
  alert(text);
  console.log('Dependency validation result:', { text, issues, recommendedOrder });
 
  // Optionally, auto-reorder placed technologies to the recommended order within each phase:
  // (NOT enabling automatic reordering by default — but provide helper function below)
}
 
/* ---------- Optional helper: applyRecommendedOrderToPhase
   If you want to reorder placed technologies within a phase based on the recommended global order.
   This function is conservative: it only reorders the items inside each phase to match relative
   order from recommendedOrder while preserving items not in recommendedOrder at the end.
*/
/**
* Improved applyRecommendedOrderToPhases
* - recommendedOrder: array of ids in topo order (global)
* - This will reorder placedTechnologies within each phase based on the relative
*   order of ids in recommendedOrder. Items not present in recommendedOrder remain
*   at the end in their existing relative order.
*/
function applyRecommendedOrderToPhases(recommendedOrder) {
  if (!Array.isArray(recommendedOrder) || recommendedOrder.length === 0) {
    console.warn('applyRecommendedOrderToPhases: no recommended order provided');
    showToast('No recommended order available', 1400);
    return;
  }
 
  // build a quick lookup map: id -> position (lower = earlier)
  const orderIndex = {};
  recommendedOrder.forEach((id, idx) => orderIndex[String(id)] = idx);
 
  // For debugging: capture snapshot of before state
  const beforeSnapshot = {};
  Object.keys(placedTechnologies).forEach(phase => {
    beforeSnapshot[phase] = (placedTechnologies[phase] || []).map(t => String(t.id));
  });
  console.log('applyRecommendedOrderToPhases - before', JSON.parse(JSON.stringify(beforeSnapshot)));
 
  // Reorder each phase deterministically using orderIndex.
  Object.keys(placedTechnologies).forEach(phase => {
    placedTechnologies[phase] = (placedTechnologies[phase] || []).slice(); // clone
 
    placedTechnologies[phase].sort((a, b) => {
      const ia = orderIndex.hasOwnProperty(String(a.id)) ? orderIndex[String(a.id)] : Number.POSITIVE_INFINITY;
      const ib = orderIndex.hasOwnProperty(String(b.id)) ? orderIndex[String(b.id)] : Number.POSITIVE_INFINITY;
      // If both are outside recommended order, preserve original relative order by falling back to index in 'before' snapshot
      if (ia === ib) {
        // stable fallback: preserve current order by comparing their index in the existing array
        const arr = beforeSnapshot[phase] || [];
        const ia0 = arr.indexOf(String(a.id));
        const ib0 = arr.indexOf(String(b.id));
        return ia0 - ib0;
      }
      return ia - ib;
    });
  });
 
  // For debugging: snapshot after
  const afterSnapshot = {};
  Object.keys(placedTechnologies).forEach(phase => {
    afterSnapshot[phase] = (placedTechnologies[phase] || []).map(t => String(t.id));
  });
  console.log('applyRecommendedOrderToPhases - after', JSON.parse(JSON.stringify(afterSnapshot)));
 
  // re-render and animate: add a class to each dropzone to visually show reflow
  renderPlacedTechnologies();
 
  // briefly add a 'reflow' class to each phase zone so user sees movement
  const zones = document.querySelectorAll('.phase-dropzone');
  zones.forEach(z => {
    z.classList.add('reflowing');
    setTimeout(() => z.classList.remove('reflowing'), 450);
  });
 
  updatePhaseMetrics();
  showToast('Applied recommended order', 1400);
}

// Create modal markup (if not already present)
function ensureDependencyModalExists() {
  if (document.getElementById('depReportModal')) return;
 
  const modal = document.createElement('div');
  modal.id = 'depReportModal';
  modal.className = 'dep-modal';
  modal.innerHTML = `
<div class="dep-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="depReportTitle">
<header class="dep-modal__header">
<h3 id="depReportTitle">Dependency Validation</h3>
<button class="dep-modal__close" id="depReportClose" aria-label="Close">✕</button>
</header>
<main class="dep-modal__body">
<div id="depReportSummary" class="dep-modal__summary"></div>
<div id="depReportDetails" class="dep-modal__details"></div>
<div id="depReportOrder" class="dep-modal__order"></div>
</main>
<footer class="dep-modal__footer">
<button id="applyRecommendedBtn" class="btn btn--primary">Apply recommended order</button>
<button id="autoPlaceMissingBtn" class="btn btn--secondary">Auto-place missing prerequisites</button>
<button id="depIgnoreBtn" class="btn">Close</button>
</footer>
</div>
  `;
  document.body.appendChild(modal);
 
  // Wire close
  document.getElementById('depReportClose').addEventListener('click', () => closeDepModal());
  document.getElementById('depIgnoreBtn').addEventListener('click', () => closeDepModal());
}
 
// Open modal and populate with validator output
function showDependencyReportModal(text, issues, recommendedOrder) {
  ensureDependencyModalExists();
  const modal = document.getElementById('depReportModal');
  modal.classList.add('open');
 
  // Populate summary
  const summaryEl = document.getElementById('depReportSummary');
  summaryEl.innerHTML = `<pre class="dep-summary-pre">${escapeHtml(text)}</pre>`;
 
  // Populate details (structured)
  const detailsEl = document.getElementById('depReportDetails');
  detailsEl.innerHTML = ''; // clear
 
  // Missing prerequisites
  if (issues.missingPrereqs && issues.missingPrereqs.length) {
    const box = document.createElement('div');
    box.className = 'dep-box dep-box--missing';
    box.innerHTML = `<h4>Missing prerequisites</h4>`;
    issues.missingPrereqs.forEach(entry => {
      const tech = enterpriseData.technologyLibrary.find(x => String(x.id) === String(entry.techId));
      const names = (entry.missing || []).map(id => {
        const t = enterpriseData.technologyLibrary.find(x => String(x.id) === String(id));
        return t ? `${t.name} (id ${id})` : `id ${id}`;
      }).join(', ');
      const row = document.createElement('div');
      row.className = 'dep-row';
      row.innerHTML = `<strong>${tech ? tech.name : 'id ' + entry.techId}</strong> — missing: ${names}`;
      box.appendChild(row);
    });
    detailsEl.appendChild(box);
  }
 
  // Phase problems
  if (issues.phaseProblems && issues.phaseProblems.length) {
    const box = document.createElement('div');
    box.className = 'dep-box dep-box--phase';
    box.innerHTML = `<h4>Phase ordering issues</h4>`;
    issues.phaseProblems.forEach(p => {
      const tech = enterpriseData.technologyLibrary.find(x => String(x.id) === String(p.techId));
      const prereq = enterpriseData.technologyLibrary.find(x => String(x.id) === String(p.prereqId));
      const row = document.createElement('div');
      row.className = 'dep-row';
      row.innerHTML = `<strong>${tech ? tech.name : p.techId}</strong> (in ${p.techPhase}) depends on <em>${prereq ? prereq.name : p.prereqId}</em> (in ${p.prereqPhase})`;
      box.appendChild(row);
    });
    detailsEl.appendChild(box);
  }
 
  // Cycles
  if (issues.cycles && issues.cycles.length) {
    const box = document.createElement('div');
    box.className = 'dep-box dep-box--cycle';
    box.innerHTML = `<h4>Cycles detected</h4>`;
    const ul = document.createElement('ul');
    issues.cycles.forEach(nodeId => {
      const t = enterpriseData.technologyLibrary.find(x => String(x.id) === String(nodeId));
      const li = document.createElement('li');
      li.innerText = t ? `${t.name} (id ${nodeId})` : `id ${nodeId}`;
      ul.appendChild(li);
    });
    box.appendChild(ul);
    detailsEl.appendChild(box);
  }
 
  // Recommended order
  const orderEl = document.getElementById('depReportOrder');
  orderEl.innerHTML = `<h4>Recommended execution order</h4><div class="dep-order-list">${recommendedOrder.length ? recommendedOrder.map(id => {
    const t = enterpriseData.technologyLibrary.find(x => String(x.id) === String(id));
    return `<span class="dep-order-item" data-id="${id}">${t ? t.name : id}</span>`;
  }).join(' → ') : '(none)'}</div>`;
 
  // Wire buttons
  document.getElementById('applyRecommendedBtn').onclick = function() {
    applyRecommendedOrderToPhases(recommendedOrder);
    // revalidate to update badges
    const res = validateRoadmap();
    // close
    closeDepModal();
    // show a quick confirmation
    showToast('Applied recommended order');
  };
 
  document.getElementById('autoPlaceMissingBtn').onclick = function() {
    autoPlaceMissingPrereqs(issues);
    // after placement, revalidate and re-render
    const res = validateRoadmap();
    showToast('Auto-placed missing prerequisites');
  };
}
 
// Close modal
function closeDepModal() {
  const modal = document.getElementById('depReportModal');
  if (modal) modal.classList.remove('open');
}
 
// tiny helper to escape html in pre blocks
function escapeHtml(unsafe) {
  return unsafe.replace(/[&<"']/g, function(m) {
    return ({ '&': '&amp;', '<': '&lt;', '"': '&quot;', "'": '&#039;' })[m];
  });
}
 
// Toast helper (small transient message)
function showToast(msg, timeout = 1800) {
  let t = document.getElementById('depToast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'depToast';
    t.className = 'dep-toast';
    document.body.appendChild(t);
  }
  t.innerText = msg;
  t.classList.add('visible');
  setTimeout(() => t.classList.remove('visible'), timeout);
}
 
/* ===== Auto-place missing prerequisites implementation =====
   - For each missing prereq id, attempt to place it in:
     1) the earliest phase of its dependent (one phase earlier if available)
     2) fallback to 'short-term'
   - If the prereq is unknown in enterpriseData, skip.
*/
function autoPlaceMissingPrereqs(issues) {
  if (!issues || !issues.missingPrereqs || !issues.missingPrereqs.length) {
    showToast('No missing prerequisites found', 1200);
    return;
  }
 
  // Build map for phase order
  const phases = ['short-term', 'medium-term', 'long-term'];
  const phaseIndex = p => phases.indexOf(p);
 
  // For each missing entry, place each missing prerequisite
  issues.missingPrereqs.forEach(entry => {
    const dependentId = String(entry.techId);
    const dependentPlaced = (() => {
      for (const p of Object.keys(placedTechnologies)) {
        const found = (placedTechnologies[p] || []).find(t => String(t.id) === dependentId);
        if (found) return { tech: found, phase: p };
      }
      return null;
    })();
 
    (entry.missing || []).forEach(mId => {
      const missingId = String(mId);
      const missingTech = enterpriseData.technologyLibrary.find(x => String(x.id) === missingId);
      if (!missingTech) return;
 
      // if it's already placed (race), skip
      let alreadyPlaced = false;
      Object.keys(placedTechnologies).forEach(p => {
        if ((placedTechnologies[p] || []).find(t => String(t.id) === missingId)) alreadyPlaced = true;
      });
      if (alreadyPlaced) return;
 
      // pick a target phase: prefer one earlier than dependent if dependent placed
      let targetPhase = 'short-term';
      if (dependentPlaced) {
        const dIdx = phaseIndex(dependentPlaced.phase);
        const preferIdx = Math.max(0, dIdx - 1);
        targetPhase = phases[preferIdx] || 'short-term';
      }
 
      // finally add technology to roadmap (this will dedupe/remove duplicates)
      addTechnologyToRoadmap(missingTech, targetPhase, document.querySelector(`[data-phase="${targetPhase}"]`) || document.querySelector(`#${targetPhase}Zone`) || null);
    });
  });
 
  // Re-render and metrics update are handled by addTechnologyToRoadmap
}
 
/* ===== Replace the old showDependencyReport to open modal instead of alert ===== */
function showDependencyReport(text, issues, recommendedOrder) {
  // open modal with structured data
  showDependencyReportModal(text, issues, recommendedOrder);
 
  // also log to console as before
  console.log('Dependency validation result (modal):', { text, issues, recommendedOrder });
}

// Assessment Wizard State
let currentWizardStep = 1;
let assessmentData = {};

// Initialize assessment wizard
function initializeAssessmentWizard() {
  updateWizardButtons();
}

// Navigate to next step
function nextStep() {
  const currentStep = document.querySelector(`.wizard-step[data-step="${currentWizardStep}"]`);
  
  // Validate current step
  if (!validateStep(currentWizardStep)) {
    alert('Please fill in all required fields before proceeding.');
    return;
  }
  
  // Save current step data
  saveStepData(currentWizardStep);
  
  // Move to next step
  if (currentWizardStep < 5) {
    currentStep.classList.remove('active');
    
    // Update progress
    const progressStep = document.querySelector(`.progress-step[data-step="${currentWizardStep}"]`);
    progressStep.classList.add('completed');
    progressStep.classList.remove('active');
    
    currentWizardStep++;
    
    const nextStep = document.querySelector(`.wizard-step[data-step="${currentWizardStep}"]`);
    nextStep.classList.add('active');
    
    const nextProgressStep = document.querySelector(`.progress-step[data-step="${currentWizardStep}"]`);
    nextProgressStep.classList.add('active');
    
    updateWizardButtons();
    
    // Scroll to top of wizard
    document.querySelector('.assessment-wizard').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// Navigate to previous step
function previousStep() {
  if (currentWizardStep > 1) {
    const currentStep = document.querySelector(`.wizard-step[data-step="${currentWizardStep}"]`);
    currentStep.classList.remove('active');
    
    const progressStep = document.querySelector(`.progress-step[data-step="${currentWizardStep}"]`);
    progressStep.classList.remove('active');
    
    currentWizardStep--;
    
    const prevStep = document.querySelector(`.wizard-step[data-step="${currentWizardStep}"]`);
    prevStep.classList.add('active');
    
    const prevProgressStep = document.querySelector(`.progress-step[data-step="${currentWizardStep}"]`);
    prevProgressStep.classList.add('active');
    prevProgressStep.classList.remove('completed');
    
    updateWizardButtons();
    
    // Scroll to top of wizard
    document.querySelector('.assessment-wizard').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// Update wizard navigation buttons
function updateWizardButtons() {
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const submitBtn = document.getElementById('submitBtn');
  
  if (currentWizardStep === 1) {
    prevBtn.style.display = 'none';
  } else {
    prevBtn.style.display = 'inline-block';
  }
  
  if (currentWizardStep === 5) {
    nextBtn.style.display = 'none';
    submitBtn.style.display = 'inline-block';
  } else {
    nextBtn.style.display = 'inline-block';
    submitBtn.style.display = 'none';
  }
}

// Validate current step
function validateStep(step) {
  let isValid = true;
  
  switch(step) {
    case 1:
      // Company info - require company name and sector
      const companyName = document.getElementById('companyName').value.trim();
      const sector = document.getElementById('industrySector').value;
      isValid = companyName !== '' && sector !== '';
      break;
    case 2:
      // Operations - require facility count
      const facilityCount = document.getElementById('facilityCount').value;
      isValid = facilityCount !== '' && facilityCount > 0;
      break;
    case 3:
      // Emissions - require total emissions
      const totalEmissions = document.getElementById('totalEmissions').value;
      isValid = totalEmissions !== '' && totalEmissions > 0;
      break;
    case 4:
      // Technologies - require budget selection
      const budget = document.getElementById('decarbBudget').value;
      isValid = budget !== '';
      break;
    case 5:
      // Goals - require target year
      const targetYear = document.getElementById('targetYear').value;
      isValid = targetYear !== '';
      break;
  }
  
  return isValid;
}

// Save step data
function saveStepData(step) {
  switch(step) {
    case 1:
      assessmentData.companyName = document.getElementById('companyName').value;
      assessmentData.industrySector = document.getElementById('industrySector').value;
      assessmentData.primaryLocation = document.getElementById('primaryLocation').value;
      assessmentData.employeeCount = document.getElementById('employeeCount').value;
      assessmentData.annualRevenue = document.getElementById('annualRevenue').value;
      break;
    case 2:
      assessmentData.facilityCount = document.getElementById('facilityCount').value;
      assessmentData.facilityTypes = getCheckedValues('input[type="checkbox"][value^="offshore-"], input[type="checkbox"][value^="processing-"], input[type="checkbox"][value^="refinery"], input[type="checkbox"][value^="manufacturing"], input[type="checkbox"][value^="warehouse"], input[type="checkbox"][value^="office"]');
      assessmentData.productionVolume = document.getElementById('productionVolume').value;
      assessmentData.energyConsumption = document.getElementById('energyConsumption').value;
      assessmentData.energySources = getCheckedValues('input[type="checkbox"][value^="natural-"], input[type="checkbox"][value^="diesel"], input[type="checkbox"][value^="grid-"], input[type="checkbox"][value^="coal"], input[type="checkbox"][value^="renewable"]');
      break;
    case 3:
      assessmentData.totalEmissions = document.getElementById('totalEmissions').value;
      assessmentData.scope1 = document.getElementById('scope1').value;
      assessmentData.scope2 = document.getElementById('scope2').value;
      assessmentData.scope3 = document.getElementById('scope3').value;
      assessmentData.emissionSources = getCheckedValues('input[type="checkbox"][value="combustion"], input[type="checkbox"][value="flaring"], input[type="checkbox"][value="venting"], input[type="checkbox"][value="fugitive"], input[type="checkbox"][value="process"], input[type="checkbox"][value="purchased-power"]');
      assessmentData.emissionsMeasurement = document.getElementById('emissionsMeasurement').value;
      break;
    case 4:
      assessmentData.currentTechnologies = getCheckedValues('input[type="checkbox"][value="led-lighting"], input[type="checkbox"][value="vfd"], input[type="checkbox"][value="waste-heat"], input[type="checkbox"][value="solar"], input[type="checkbox"][value="wind"], input[type="checkbox"][value="ccs-pilot"], input[type="checkbox"][value="leak-detection"], input[type="checkbox"][value="electrification"]');
      assessmentData.decarbBudget = document.getElementById('decarbBudget').value;
      assessmentData.technologiesOfInterest = getCheckedValues('input[type="checkbox"][value="ccus"], input[type="checkbox"][value="hydrogen"], input[type="checkbox"][value="electrification"], input[type="checkbox"][value="floating-wind"], input[type="checkbox"][value="energy-efficiency"], input[type="checkbox"][value="digital-twin"], input[type="checkbox"][value="methane-monitoring"], input[type="checkbox"][value="subsea"]');
      break;
    case 5:
      assessmentData.targetYear = document.getElementById('targetYear').value;
      assessmentData.interimTarget = document.getElementById('interimTarget').value;
      assessmentData.constraints = getCheckedValues('input[type="checkbox"][value="budget"], input[type="checkbox"][value="technology-maturity"], input[type="checkbox"][value="regulatory"], input[type="checkbox"][value="infrastructure"], input[type="checkbox"][value="supply-chain"], input[type="checkbox"][value="operational"]');
      assessmentData.objectives = getCheckedValues('input[type="checkbox"][value="cost-reduction"], input[type="checkbox"][value="regulatory-compliance"], input[type="checkbox"][value="reputation"], input[type="checkbox"][value="operational-efficiency"], input[type="checkbox"][value="innovation"]');
      assessmentData.additionalComments = document.getElementById('additionalComments').value;
      break;
  }
  
  console.log('Assessment data saved:', assessmentData);
}

// Helper to get checked checkbox values
function getCheckedValues(selector) {
  const checkboxes = document.querySelectorAll(selector);
  const values = [];
  checkboxes.forEach(cb => {
    if (cb.checked) values.push(cb.value);
  });
  return values;
}

// Submit assessment
function submitAssessment() {
  // Save final step
  saveStepData(5);
  
  // Mark last step as completed
  const lastProgressStep = document.querySelector(`.progress-step[data-step="5"]`);
  lastProgressStep.classList.add('completed');
  
  // Hide current step
  const currentStep = document.querySelector(`.wizard-step[data-step="5"]`);
  currentStep.classList.remove('active');
  
  // Process and show results
  processAssessmentResults();
  
  // Show results view
  const resultsView = document.querySelector(`.wizard-step[data-step="results"]`);
  resultsView.style.display = 'block';
  
  // Hide navigation buttons
  document.querySelector('.wizard-navigation').style.display = 'none';
  
  // Scroll to top
  document.querySelector('.assessment-wizard').scrollIntoView({ behavior: 'smooth', block: 'start' });
  
  // Send data to backend (placeholder)
  console.log('Submitting assessment data:', assessmentData);
  // In production: fetch('/api/assessment', { method: 'POST', body: JSON.stringify(assessmentData) })
}

// Process assessment and generate recommendations
function processAssessmentResults() {
  // Generate profile summary
  const profileSummary = document.getElementById('profileSummary');
  profileSummary.innerHTML = `
    <p><strong>Company:</strong> ${assessmentData.companyName}</p>
    <p><strong>Sector:</strong> ${formatValue(assessmentData.industrySector)}</p>
    <p><strong>Facilities:</strong> ${assessmentData.facilityCount}</p>
    <p><strong>Annual Emissions:</strong> ${Number(assessmentData.totalEmissions).toLocaleString()} tonnes CO₂</p>
    <p><strong>Target Year:</strong> ${assessmentData.targetYear}</p>
    <p><strong>Budget Range:</strong> ${formatValue(assessmentData.decarbBudget)}</p>
  `;
  
  // Generate recommended technologies based on inputs
  const recommendedTechs = document.getElementById('recommendedTechs');
  const recommendations = generateTechnologyRecommendations(assessmentData);
  recommendedTechs.innerHTML = recommendations.map(tech => `
    <div class="tech-item">
      <strong>${tech.name}</strong><br>
      <small>Match: ${tech.matchScore}% | Impact: ${tech.impact}</small>
    </div>
  `).join('');
  
  // Generate priority actions
  const priorityActions = document.getElementById('priorityActions');
  const actions = generatePriorityActions(assessmentData);
  priorityActions.innerHTML = actions.map(action => `
    <div class="action-item">
      <strong>${action.title}</strong><br>
      <small>${action.description}</small>
    </div>
  `).join('');
}

// Generate technology recommendations based on assessment
function generateTechnologyRecommendations(data) {
  const recommendations = [];
  
  // Logic to match technologies based on user inputs
  if (data.technologiesOfInterest.includes('ccus')) {
    recommendations.push({
      name: 'Carbon Capture & Storage',
      matchScore: 92,
      impact: 'High'
    });
  }
  
  if (data.technologiesOfInterest.includes('electrification')) {
    recommendations.push({
      name: 'Platform Electrification',
      matchScore: 88,
      impact: 'High'
    });
  }
  
  if (data.technologiesOfInterest.includes('digital-twin')) {
    recommendations.push({
      name: 'Digital Twin Optimization',
      matchScore: 85,
      impact: 'Medium'
    });
  }
  
  if (data.emissionSources.includes('fugitive') || data.technologiesOfInterest.includes('methane-monitoring')) {
    recommendations.push({
      name: 'Advanced Leak Detection',
      matchScore: 90,
      impact: 'High'
    });
  }
  
  if (data.technologiesOfInterest.includes('energy-efficiency')) {
    recommendations.push({
      name: 'Waste Heat Recovery',
      matchScore: 82,
      impact: 'Medium'
    });
  }
  
  if (data.technologiesOfInterest.includes('floating-wind')) {
    recommendations.push({
      name: 'Floating Wind Integration',
      matchScore: 78,
      impact: 'High'
    });
  }
  
  // Sort by match score
  recommendations.sort((a, b) => b.matchScore - a.matchScore);
  
  // Return top 5
  return recommendations.slice(0, 5);
}

// Generate priority actions
function generatePriorityActions(data) {
  const actions = [];
  
  // Analyze emissions measurement
  if (data.emissionsMeasurement === 'no' || data.emissionsMeasurement === 'estimated') {
    actions.push({
      title: 'Establish Emissions Monitoring',
      description: 'Set up continuous monitoring systems for accurate baseline measurement'
    });
  }
  
  // Check for quick wins
  if (!data.currentTechnologies.includes('led-lighting')) {
    actions.push({
      title: 'LED Lighting Upgrade',
      description: 'Low-cost, immediate impact retrofit opportunity'
    });
  }
  
  // Budget-appropriate actions
  if (data.decarbBudget === '10m-50m' || data.decarbBudget === '50m-100m') {
    actions.push({
      title: 'Electrification Pilot Project',
      description: 'Start with one platform to demonstrate ROI and build capabilities'
    });
  }
  
  // Target year urgency
  if (data.targetYear === '2030' || data.targetYear === '2035') {
    actions.push({
      title: 'Accelerate Technology Deployment',
      description: 'Your target requires immediate action on high-impact technologies'
    });
  }
  
  // Constraint-based recommendations
  if (data.constraints.includes('budget')) {
    actions.push({
      title: 'Explore Financing Options',
      description: 'Investigate green bonds, tax incentives, and partnership opportunities'
    });
  }
  
  return actions.slice(0, 5);
}

// Format values for display
function formatValue(value) {
  if (!value) return 'Not specified';
  return value.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
}

// Restart assessment
function restartAssessment() {
  // Reset state
  currentWizardStep = 1;
  assessmentData = {};
  
  // Hide results
  const resultsView = document.querySelector(`.wizard-step[data-step="results"]`);
  resultsView.style.display = 'none';
  
  // Show first step
  const firstStep = document.querySelector(`.wizard-step[data-step="1"]`);
  firstStep.classList.add('active');
  
  // Reset progress indicators
  document.querySelectorAll('.progress-step').forEach((step, index) => {
    step.classList.remove('active', 'completed');
    if (index === 0) step.classList.add('active');
  });
  
  // Clear form inputs
  document.querySelectorAll('.wizard-step input, .wizard-step select, .wizard-step textarea').forEach(input => {
    if (input.type === 'checkbox') {
      input.checked = false;
    } else {
      input.value = '';
    }
  });
  
  // Show navigation
  document.querySelector('.wizard-navigation').style.display = 'flex';
  updateWizardButtons();
  
  // Scroll to top
  document.querySelector('.assessment-wizard').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Go to roadmap section with assessment data
function goToRoadmap() {
  // Store assessment data for use in roadmap
  localStorage.setItem('assessmentData', JSON.stringify(assessmentData));
  
  // Navigate to roadmap section
  showSection('roadmap');
  
  // Update active nav
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  document.querySelector('.nav-link[data-section="roadmap"]').classList.add('active');
  
  // Pre-populate roadmap with recommended technologies
  setTimeout(() => {
    populateRoadmapFromAssessment();
  }, 500);
}

// Download assessment report
function downloadAssessment() {
  // Generate PDF or export data (placeholder)
  const reportData = JSON.stringify(assessmentData, null, 2);
  const blob = new Blob([reportData], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `assessment-${assessmentData.companyName}-${Date.now()}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  
  alert('Assessment report downloaded! In production, this would generate a comprehensive PDF report.');
}

// Populate roadmap based on assessment recommendations
function populateRoadmapFromAssessment() {
  const storedData = localStorage.getItem('assessmentData');
  if (!storedData) return;
  
  const data = JSON.parse(storedData);
  const recommendations = generateTechnologyRecommendations(data);
  
  // Clear existing roadmap
  placedTechnologies = {
    'short-term': [],
    'medium-term': [],
    'long-term': []
  };
  
  // Map recommendations to technologies and place them
  recommendations.forEach(rec => {
    const tech = enterpriseData.technologyLibrary.find(t => 
      t.name.toLowerCase().includes(rec.name.toLowerCase()) ||
      rec.name.toLowerCase().includes(t.name.toLowerCase())
    );
    
    if (tech) {
      // Place based on timeline and TRL
      let phase = 'medium-term';
      if (tech.trl >= 8) phase = 'short-term';
      if (tech.trl <= 6) phase = 'long-term';
      
      placedTechnologies[phase].push(tech);
    }
  });
  
  renderPlacedTechnologies();
  updatePhaseMetrics();
  
  alert('Roadmap pre-populated with recommended technologies based on your assessment!');
}

// Make functions available globally
window.showSection = showSection;
window.askAI = askAI;
window.sendAIMessage = sendAIMessage;
window.optimizeTrajectory = optimizeTrajectory;
window.runPredictiveAnalysis = runPredictiveAnalysis;
window.runGapAnalysis = runGapAnalysis;
window.generateTechMatching = generateTechMatching;
window.aiOptimizeRoadmap = aiOptimizeRoadmap;
window.initializeRoadmap = initializeRoadmap;
window.validateRoadmap = validateRoadmap;
window.createNewScenario = createNewScenario;
window.compareScenarios = compareScenarios;
window.runMonteCarloAnalysis = runMonteCarloAnalysis;
window.bookConsultation = bookConsultation;

console.log('NZTC Enterprise Platform loaded successfully');