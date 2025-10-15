// Application Logic

// ============================================================================
// CONFIGURATION & DATA
// ============================================================================

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
    currentEmissions: "2.5M tonnes CO₂/year",
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
      roi: "1.8 years",
      dependencies: []
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
      roi: "2.1 years",
      dependencies: [6]
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
      roi: "3.2 years",
      dependencies: [6, 8]
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
      roi: "4.5 years",
      dependencies: [6, 8]
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
      roi: "5.2 years",
      dependencies: [2, 4]
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
      roi: "1.5 years",
      dependencies: []
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
      roi: "2.3 years",
      dependencies: [6]
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
      roi: "3.8 years",
      dependencies: [6]
    }
  ],

  scenarios: {
    base: [2500, 2100, 1700, 1400, 1200, 1100, 875],
    conservative: [2500, 2300, 2000, 1750, 1550, 1400, 1250],
    aggressive: [2500, 1900, 1400, 1000, 750, 600, 500],
    crisis: [2500, 2450, 2400, 2350, 2300, 2280, 2250]
  },

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

// ============================================================================
// STATE MANAGEMENT
// ============================================================================

const state = {
  currentSection: 'dashboard',
  currentScenario: 'base',
  currentWizardStep: 1,
  draggedTech: null,
  placedTechnologies: {
    'short-term': [],
    'medium-term': [],
    'long-term': []
  },
  assessmentData: {},
  charts: {}
};

// ============================================================================
// CONSTANTS
// ============================================================================

const SCENARIO_KEYS = ['base', 'conservative', 'aggressive', 'crisis'];
const PHASES = ['short-term', 'medium-term', 'long-term'];

const SCENARIO_COLORS = {
  base: { border: '#1FB8CD', bg: 'rgba(31,184,205,0.08)' },
  conservative: { border: '#FFC185', bg: 'rgba(255,193,133,0.08)' },
  aggressive: { border: '#B4413C', bg: 'rgba(180,65,60,0.08)' },
  crisis: { border: '#6b6b6b', bg: 'rgba(107,107,107,0.06)' }
};

// ============================================================================
// INITIALISATION
// ============================================================================

document.addEventListener('DOMContentLoaded', function() {
  console.log('NZTC Enterprise Platform initializing...');
  
  setTimeout(() => {
    initialiseNavigation();
    initialiseRoadmap();
    initialiseDragAndDrop();
    initialiseAIAssistant();
    initialiseScenarioControls();
    initialiseTabs();
    initialiseSearchFilters();
    
    populateAIInsights();
    populateCompetitorFeed();
    populateWorkflows();
    populateAIRecommendations();
    populateTechnologyLibrary();
    
    if (state.currentSection === 'dashboard') {
      createEmissionsChart();
    }
    
    console.log('Enterprise platform ready');
  }, 100);
});

// ============================================================================
// NAVIGATION
// ============================================================================

function initialiseNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const sectionId = this.getAttribute('data-section');
      showSection(sectionId);
      
      navLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });
}

function showSection(sectionId) {
  document.querySelectorAll('.section').forEach(section => {
    section.classList.remove('active');
  });
  
  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.classList.add('active');
    state.currentSection = sectionId;
    
    setTimeout(() => {
      if (sectionId === 'dashboard' && !state.charts.emissionsChart) {
        createEmissionsChart();
      }
      if (sectionId === 'analytics') {
        if (!state.charts.roiChart) createROIChart();
        if (!state.charts.maturityChart) createMaturityChart();
      }
      if (sectionId === 'scenarios' && !state.charts.scenarioChart) {
        createScenarioChart();
      }
    }, 100);
  }
}

// ============================================================================
// TAB SYSTEM (ANALYTICS)
// ============================================================================

function initialiseTabs() {
  const tabButtons = document.querySelectorAll('.analytics-tabs .tab-btn');
  const tabContents = document.querySelectorAll('.analytics-content .tab-content');
  
  function showTab(tabName) {
    tabContents.forEach(tc => tc.classList.remove('active'));
    const target = document.getElementById(tabName);
    if (target) target.classList.add('active');
    
    // Lazy-create charts
    const chartCreators = {
      overview: () => {
        if (!state.charts.roiChart) createROIChart();
        if (!state.charts.maturityChart) createMaturityChart();
      },
      performance: () => {
        if (!state.charts.performanceChart) createPerformanceChart();
        if (!state.charts.budgetChart) createBudgetChart();
      },
      predictive: () => {
        if (!state.charts.predictiveChart) createPredictiveChart();
      },
      reports: () => {
        if (!state.charts.reportsChart) createReportsChart();
        createReportCards();
      }
    };
    
    if (chartCreators[tabName]) chartCreators[tabName]();
  }
  
  tabButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const tab = btn.getAttribute('data-tab');
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      showTab(tab);
    });
  });
  
  const initial = document.querySelector('.analytics-tabs .tab-btn.active');
  if (initial) showTab(initial.getAttribute('data-tab') || 'overview');
}

// ============================================================================
// POPULATION FUNCTIONS
// ============================================================================

function populateAIInsights() {
  const container = document.getElementById('aiInsights');
  if (!container) return;
  
  const iconMap = {
    'recommendation': '💡',
    'risk_alert': '⚠️',
    'opportunity': '🚀'
  };
  
  container.innerHTML = enterpriseData.aiInsights.map(insight => `
    <div class="insight-item">
      <div class="insight-title"><i data-feather="${iconMap[insight.type] || 'info'}"></i> ${insight.title}</div>
      <div class="insight-description">${insight.description}</div>
      <div class="insight-confidence">Confidence: ${insight.confidence} | Impact: ${insight.impact}</div>
    </div>
  `).join('');
  
  if (window.feather) feather.replace();
}

function populateCompetitorFeed() {
  const container = document.getElementById('competitorFeed');
  if (!container) return;
  
  container.innerHTML = enterpriseData.competitiveIntelligence.map(item => `
    <div class="feed-item">
      <div class="feed-icon">${item.competitor.substring(0, 2)}</div>
      <div class="feed-content">
        <div class="feed-header">
          <div class="feed-company">${item.competitor}</div>
          <div class="feed-time">${item.timeline}</div>
        </div>
        <div class="feed-description">${item.recentMove}</div>
        <div class="feed-impact ${item.impact.toLowerCase()}">Impact: ${item.impact}</div>
      </div>
    </div>
  `).join('');
}

function populateWorkflows() {
  const container = document.getElementById('activeWorkflows');
  if (!container) return;
  
  container.innerHTML = enterpriseData.activeWorkflows.map(workflow => `
    <div class="workflow-item">
      <div class="workflow-title">${workflow.name}</div>
      <div class="workflow-stage">${workflow.stage}</div>
      <div class="workflow-participants">${workflow.participants.length} participants • ${workflow.comments} comments</div>
    </div>
  `).join('');
}

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
  
  container.innerHTML = recommendations.map(rec => `
    <div class="recommendation-card">
      <div class="recommendation-title">${rec.title}</div>
      <div class="recommendation-description">${rec.description}</div>
      <div class="recommendation-meta">
        <div class="recommendation-confidence">${rec.confidence}</div>
        <div class="recommendation-impact">${rec.impact} Impact</div>
      </div>
    </div>
  `).join('');
}

function populateTechnologyLibrary() {
  renderTechnologyLibrary(enterpriseData.technologyLibrary);
}

function renderTechnologyLibrary(technologies) {
  const container = document.getElementById('techLibrary');
  if (!container) return;
  
  container.innerHTML = technologies.map(tech => `
    <div class="tech-card" draggable="true" data-tech-id="${tech.id}" tabindex="0" role="button" 
         aria-label="${tech.name}, ${tech.category}, TRL ${tech.trl}">
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
    </div>
  `).join('');
}

// ============================================================================
// CHARTS
// ============================================================================

function createEmissionsChart() {
  const ctx = document.getElementById('emissionsChart');
  if (!ctx) return;
  
  state.charts.emissionsChart = new Chart(ctx, {
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
        legend: { position: 'top' },
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
          title: { display: true, text: 'Emissions (thousands tonnes CO₂e)' }
        }
      }
    }
  });
}

function createROIChart() {
  const ctx = document.getElementById('roiChart');
  if (!ctx) return;
  
  state.charts.roiChart = new Chart(ctx, {
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
        legend: { display: false },
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
          title: { display: true, text: 'ROI (£M)' },
          grid: {
            color: function(context) {
              return context.tick.value === 0 ? '#666' : '#e5e5e5';
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
  
  state.charts.maturityChart = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: ['Waste Heat (TRL 9)', 'Electrification (TRL 9)', 'Leak Detection (TRL 8)', 
               'Digital Twin (TRL 8)', 'Carbon Capture (TRL 8)', 'Subsea (TRL 7)', 
               'Floating Wind (TRL 7)', 'Green H2 (TRL 6)'],
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
      plugins: { title: { display: true, text: 'Technology Maturity Assessment' } },
      scales: {
        r: {
          min: 0,
          max: 10,
          ticks: { stepSize: 1 }
        }
      }
    }
  });
}

function createScenarioChart() {
  const ctx = document.getElementById('scenarioChart');
  if (!ctx) return;

  state.charts.scenarioChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['2024', '2025', '2026', '2027', '2028', '2029', '2030'],
      datasets: SCENARIO_KEYS.map((key, idx) => ({
        label: key.charAt(0).toUpperCase() + key.slice(1).replace('-', ' '),
        data: enterpriseData.scenarios[key].slice(),
        borderColor: SCENARIO_COLORS[key].border,
        backgroundColor: SCENARIO_COLORS[key].bg,
        fill: false,
        borderDash: key === 'crisis' ? [6, 4] : []
      }))
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { position: 'top' } },
      scales: {
        y: {
          beginAtZero: false,
          title: { display: true, text: 'Emissions (thousands tonnes CO₂e)' }
        }
      }
    }
  });
}

function createPerformanceChart() {
  const ctx = document.getElementById('performanceChart');
  if (!ctx) return;
  
  state.charts.performanceChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Q1 2025', 'Q2 2025', 'Q3 2025', 'Q4 2025', 'Q1 2026', 'Q2 2026'],
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
  
  state.charts.budgetChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Short', 'Medium', 'Long'],
      datasets: [{
        label: 'Planned (£M)',
        data: [205, 770, 600],
        backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C']
      }, {
        label: 'Actual (£M)',
        data: [190, 680, 520],
        backgroundColor: ['rgba(31,184,205,0.4)', 'rgba(255,193,133,0.4)', 'rgba(180,65,60,0.4)']
      }]
    },
    options: { responsive: true, maintainAspectRatio: false }
  });
}

function createPredictiveChart() {
  const ctx = document.getElementById('predictiveChart');
  if (!ctx) return;
  
  state.charts.predictiveChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['2025', '2026', '2027', '2028', '2029', '2030'],
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
  
  state.charts.reportsChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Roadmaps', 'Assessments', 'Workflows', 'Market Intel'],
      datasets: [{
        data: [35, 25, 20, 20],
        backgroundColor: ['#1FB8CD', '#FFC185', '#1F9E89', '#B4413C']
      }]
    },
    options: { responsive: true, maintainAspectRatio: false }
  });
}

// ============================================================================
// REPORTS
// ============================================================================

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
    
    const header = card.querySelector('.report-header');
    const toggleBtn = card.querySelector('.report-toggle');
    const body = card.querySelector('.report-body');
    
    header.addEventListener('click', () => {
      const expanded = toggleBtn.getAttribute('aria-expanded') === 'true';
      if (expanded) {
        toggleBtn.textContent = '+';
        toggleBtn.setAttribute('aria-expanded', 'false');
        body.style.maxHeight = '0';
        body.style.padding = '0 8px';
      } else {
        toggleBtn.textContent = '−';
        toggleBtn.setAttribute('aria-expanded', 'true');
        body.style.maxHeight = body.scrollHeight + 20 + 'px';
        body.style.padding = '8px';
        if (!body.dataset.loaded) {
          body.dataset.loaded = '1';
          generateDummyReport(r.id);
        }
      }
    });
    
    card.querySelectorAll('.small-btn').forEach(btn => {
      btn.addEventListener('click', (ev) => {
        ev.stopPropagation();
        const action = btn.getAttribute('data-action');
        const rid = btn.getAttribute('data-report');
        if (action === 'download') {
          alert(`(placeholder) Downloading PDF for ${rid}...`);
        } else if (action === 'regenerate') {
          generateDummyReport(rid, { regen: true });
        } else if (action === 'expand') {
          alert(`(placeholder) Open full ${rid} report (future: full PDF / AI page).`);
        }
      });
    });
  });
}

function generateDummyReport(reportId, opts = {}) {
  const textEl = document.getElementById(`report-text-${reportId}`);
  const canvasId = `report-chart-${reportId}`;
  if (!textEl) return;
  
  const summaries = {
    roi: `Summary (ROI): The current investment shows positive trends driven by early cost savings and process automation. Projected 3-year ROI is ~18–22%. Recommendations: prioritize pilot scaling, monitor integration costs, and revisit vendor contracts.`,
    performance: `Summary (Performance): Implementation progress is steady; two modules are delayed by dependency issues. Action items: reallocate two engineers to backlog items and refine sprint scope to clear the critical path.`,
    predictive: `Summary (Predictive): Forecast models show a likely 12% reduction in emissions under current measures; additional optimizations could further reduce emissions by 6–9%. Risk: data quality gaps for Q4 may reduce confidence intervals.`
  };
  
  const regenPrefix = opts.regen ? 'Regenerated summary – ' : '';
  textEl.textContent = regenPrefix + (summaries[reportId] || 'No summary available.');
  
  const ctx = document.getElementById(canvasId);
  if (!ctx) return;
  
  if (state.charts[`report_${reportId}_chart`]) {
    try {
      state.charts[`report_${reportId}_chart`].data.datasets[0].data = getDummySeriesForReport(reportId);
      state.charts[`report_${reportId}_chart`].update();
      return;
    } catch (e) {
      console.warn('Failed to update existing chart', e);
    }
  }
  
  state.charts[`report_${reportId}_chart`] = new Chart(ctx, {
    type: reportId === 'performance' ? 'bar' : 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
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

function getDummySeriesForReport(reportId) {
  const seriesMap = {
    roi: [1.2, 2.5, 4.1, 7.6, 11.8, 18.0],
    performance: [40, 55, 60, 70, 85, 92],
    predictive: [2100, 1950, 1800, 1600, 1450, 1300]
  };
  return seriesMap[reportId] || [10, 20, 30, 40, 50, 60];
}

// ============================================================================
// DRAG AND DROP
// ============================================================================

function initialiseDragAndDrop() {
  state.draggedTech = null;
  
  document.addEventListener('dragstart', function(e) {
    const card = e.target.closest('.tech-card');
    if (!card) return;
    
    const techId = card.dataset.techId;
    if (!techId) return;
    
    try {
      e.dataTransfer.setData('text/plain', String(techId));
    } catch (err) {
      // Fallback handled below
    }
    
    state.draggedTech = enterpriseData.technologyLibrary.find(t => String(t.id) === String(techId));
    card.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
  });
  
  document.addEventListener('dragend', function(e) {
    const card = e.target.closest('.tech-card');
    if (card) card.classList.remove('dragging');
  });
  
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
      
      let idFromDT = null;
      try { 
        idFromDT = e.dataTransfer.getData('text/plain') || null; 
      } catch (err) { 
        idFromDT = null; 
      }
      
      let tech = null;
      if (idFromDT) {
        tech = enterpriseData.technologyLibrary.find(t => String(t.id) === String(idFromDT));
      }
      if (!tech && state.draggedTech) tech = state.draggedTech;
      
      if (!tech) {
        console.warn('Drop received but no tech identified');
        state.draggedTech = null;
        return;
      }
      
      const targetPhase = getPhaseFromZoneElement(this);
      if (!targetPhase) {
        console.warn('Drop target phase could not be determined');
        state.draggedTech = null;
        return;
      }
      
      addTechnologyToRoadmap(tech, targetPhase, this);
      state.draggedTech = null;
    });
  });
}

function getPhaseFromZoneElement(zoneEl) {
  if (!zoneEl) return null;
  
  const ds = zoneEl.dataset && zoneEl.dataset.phase;
  if (ds) return ds;
  
  const id = zoneEl.id || '';
  if (!id) return null;
  const normalized = id.toLowerCase();
  
  const mapCandidates = [
    { pattern: /short/, key: 'short-term' },
    { pattern: /medium/, key: 'medium-term' },
    { pattern: /long/, key: 'long-term' }
  ];
  
  for (const cand of mapCandidates) {
    if (cand.pattern.test(normalized)) return cand.key;
  }
  
  let parent = zoneEl.parentElement;
  while (parent) {
    if (parent.dataset && parent.dataset.phase) return parent.dataset.phase;
    parent = parent.parentElement;
  }
  
  return null;
}

function addTechnologyToRoadmap(tech, phase, dropzone) {
  if (!tech) return;
  const validPhase = phase || getPhaseFromZoneElement(dropzone);
  if (!validPhase) {
    console.warn('Unknown target phase for drop', dropzone, phase);
    return;
  }
  
  // Remove tech from any other phase
  Object.keys(state.placedTechnologies).forEach(p => {
    state.placedTechnologies[p] = (state.placedTechnologies[p] || []).filter(t => String(t.id) !== String(tech.id));
  });
  
  // Add to target phase
  if (!state.placedTechnologies[validPhase]) state.placedTechnologies[validPhase] = [];
  if (!state.placedTechnologies[validPhase].find(t => String(t.id) === String(tech.id))) {
    state.placedTechnologies[validPhase].push(tech);
  }
  
  renderPlacedTechnologies();
  
  if (dropzone && dropzone.classList) {
    dropzone.classList.add('just-dropped');
    setTimeout(() => dropzone.classList.remove('just-dropped'), 420);
  }
  
  updatePhaseMetrics();
}

function renderPlacedTechnologies() {
  const dropzones = document.querySelectorAll('.phase-dropzone');
  if (!dropzones || dropzones.length === 0) return;
  
  dropzones.forEach(zone => {
    zone.innerHTML = '';
    
    const phase = zone.id.replace('Zone', '').replace(/([A-Z])/g, '-$1').toLowerCase();
    const items = state.placedTechnologies[phase] || [];
    
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

function removeTechnology(techId) {
  let removed = false;
  
  Object.keys(state.placedTechnologies).forEach(phase => {
    const beforeLen = state.placedTechnologies[phase].length;
    state.placedTechnologies[phase] = state.placedTechnologies[phase].filter(t => String(t.id) !== String(techId));
    if (state.placedTechnologies[phase].length !== beforeLen) removed = true;
  });
  
  if (removed) {
    renderPlacedTechnologies();
    updatePhaseMetrics();
  }
}

function updatePhaseMetrics() {
  console.log('Updating phase metrics based on roadmap changes');
}

// ============================================================================
// ROADMAP FUNCTIONS
// ============================================================================

function initialiseRoadmap() {
  setTimeout(initialiseDragAndDrop, 100);
}

function aiOptimizeRoadmap() {
  state.placedTechnologies = {
    'short-term': [],
    'medium-term': [],
    'long-term': []
  };
  
  const phases = {
    'short-term': [1, 6, 7],
    'medium-term': [2, 3, 8],
    'long-term': [4, 5]
  };
  
  Object.entries(phases).forEach(([phase, ids], index) => {
    setTimeout(() => {
      ids.forEach(id => {
        const tech = enterpriseData.technologyLibrary.find(t => t.id === id);
        if (tech) state.placedTechnologies[phase].push(tech);
      });
      renderPlacedTechnologies();
      updatePhaseMetrics();
    }, 200 + (index * 400));
  });
}

function clearRoadmap() {
  state.placedTechnologies = {
    'short-term': [],
    'medium-term': [],
    'long-term': []
  };
  renderPlacedTechnologies();
  updatePhaseMetrics();
}

// ============================================================================
// DEPENDENCY VALIDATION
// ============================================================================

function validateRoadmap() {
  const placed = [];
  Object.keys(state.placedTechnologies).forEach(phase => {
    (state.placedTechnologies[phase] || []).forEach(t => {
      placed.push(Object.assign({}, t, { placedPhase: phase }));
    });
  });
  
  const placedById = {};
  placed.forEach(t => placedById[String(t.id)] = t);
  
  const graphObj = buildDependencyGraph(enterpriseData.technologyLibrary);
  const topo = topoSort(graphObj);
  
  const issues = { missingPrereqs: [], phaseProblems: [], cycles: [] };
  
  if (topo.hasCycle) {
    issues.cycles = topo.cycleNodes;
  }
  
  placed.forEach(t => {
    (t.dependencies || []).forEach(depId => {
      const depIdStr = String(depId);
      const depPlaced = placedById[depIdStr];
      if (!depPlaced) {
        const existing = issues.missingPrereqs.find(e => String(e.techId) === String(t.id));
        if (!existing) issues.missingPrereqs.push({ techId: String(t.id), missing: [depIdStr] });
        else existing.missing.push(depIdStr);
      } else {
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
  
  markDependencyIssues(issues);
  
  let recommendedOrder = [];
  if (!topo.hasCycle) {
    const placedIds = new Set(placed.map(t => String(t.id)));
    recommendedOrder = topo.order.filter(id => placedIds.has(String(id)));
  } else {
    const inducedGraph = { graph: {}, nodes: new Set() };
    placed.forEach(t => {
      inducedGraph.graph[String(t.id)] = [];
      inducedGraph.nodes.add(String(t.id));
    });
    placed.forEach(t => {
      (t.dependencies || []).forEach(dep => {
        if (String(dep) in inducedGraph.graph) {
          inducedGraph.graph[String(dep)].push(String(t.id));
        }
      });
    });
    const partialTopo = topoSort(inducedGraph);
    recommendedOrder = partialTopo.order;
  }
  
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
  
  showDependencyReportModal(lines.join('\n'), issues, recommendedOrder);
  
  return { issues, recommendedOrder, rawTopo: topo };
}

function buildDependencyGraph(techList) {
  const graph = {};
  const nodes = new Set();
  
  techList.forEach(t => {
    nodes.add(String(t.id));
    graph[String(t.id)] = (graph[String(t.id)] || []).slice();
  });
  
  techList.forEach(t => {
    const tid = String(t.id);
    (t.dependencies || []).forEach(depId => {
      const dep = String(depId);
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
  const indegree = {};
  nodes.forEach(n => indegree[n] = 0);
  
  for (const u of nodes) {
    (graph[u] || []).forEach(v => {
      indegree[v] = (indegree[v] || 0) + 1;
    });
  }
  
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
  if (!phaseKey) return 99;
  const map = { 
    'short-term': 0, 'shortterm': 0, 'short': 0, 
    'medium-term': 1, 'mediumterm': 1, 'medium': 1, 
    'long-term': 2, 'longterm': 2, 'long': 2 
  };
  return map[String(phaseKey).toLowerCase()] ?? 99;
}

function markDependencyIssues(issues) {
  document.querySelectorAll('.tech-card .tech-card__badge, .tech-card.dependency-warning').forEach(el => {
    const parent = el.closest('.tech-card');
    if (parent) parent.classList.remove('dependency-warning');
    if (el.parentNode) el.parentNode.removeChild(el);
  });
  
  function attachBadgeToTech(techId, text, title) {
    const selector = `.tech-card[data-tech-id="${techId}"]`;
    const node = document.querySelector(selector);
    if (!node) return;
    node.classList.add('dependency-warning');
    const existing = node.querySelector('.tech-card__badge');
    if (existing) existing.remove();
    const badge = document.createElement('span');
    badge.className = 'tech-card__badge';
    badge.title = title || text;
    badge.innerText = text;
    node.appendChild(badge);
  }
  
  (issues.missingPrereqs || []).forEach(entry => {
    attachBadgeToTech(entry.techId, 'Missing prereq', `Missing prerequisites: ${entry.missing.join(', ')}`);
  });
  
  (issues.phaseProblems || []).forEach(entry => {
    attachBadgeToTech(entry.techId, 'Phase issue', `Prereq ${entry.prereqId} is in ${entry.prereqPhase} but ${entry.techId} is in ${entry.techPhase}`);
  });
  
  (issues.cycles || []).forEach(nodeId => {
    attachBadgeToTech(nodeId, 'Cycle', 'Dependency cycle detected');
  });
}

function showDependencyReportModal(text, issues, recommendedOrder) {
  ensureDependencyModalExists();
  const modal = document.getElementById('depReportModal');
  modal.classList.add('open');
  
  const summaryEl = document.getElementById('depReportSummary');
  summaryEl.innerHTML = `<pre class="dep-summary-pre">${escapeHtml(text)}</pre>`;
  
  const detailsEl = document.getElementById('depReportDetails');
  detailsEl.innerHTML = '';
  
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
      row.innerHTML = `<strong>${tech ? tech.name : 'id ' + entry.techId}</strong> – missing: ${names}`;
      box.appendChild(row);
    });
    detailsEl.appendChild(box);
  }
  
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
  
  const orderEl = document.getElementById('depReportOrder');
  orderEl.innerHTML = `<h4>Recommended execution order</h4><div class="dep-order-list">${recommendedOrder.length ? recommendedOrder.map(id => {
    const t = enterpriseData.technologyLibrary.find(x => String(x.id) === String(id));
    return `<span class="dep-order-item" data-id="${id}">${t ? t.name : id}</span>`;
  }).join(' → ') : '(none)'}</div>`;
  
  document.getElementById('applyRecommendedBtn').onclick = function() {
    applyRecommendedOrderToPhases(recommendedOrder);
    validateRoadmap();
    closeDepModal();
    showToast('Applied recommended order');
  };
  
  document.getElementById('autoPlaceMissingBtn').onclick = function() {
    autoPlaceMissingPrereqs(issues);
    validateRoadmap();
    showToast('Auto-placed missing prerequisites');
  };
}

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
  
  document.getElementById('depReportClose').addEventListener('click', () => closeDepModal());
  document.getElementById('depIgnoreBtn').addEventListener('click', () => closeDepModal());
}

function closeDepModal() {
  const modal = document.getElementById('depReportModal');
  if (modal) modal.classList.remove('open');
}

function escapeHtml(unsafe) {
  return unsafe.replace(/[&<"']/g, function(m) {
    return ({ '&': '&amp;', '<': '&lt;', '"': '&quot;', "'": '&#039;' })[m];
  });
}

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

function applyRecommendedOrderToPhases(recommendedOrder) {
  if (!Array.isArray(recommendedOrder) || recommendedOrder.length === 0) {
    console.warn('applyRecommendedOrderToPhases: no recommended order provided');
    showToast('No recommended order available', 1400);
    return;
  }
  
  const orderIndex = {};
  recommendedOrder.forEach((id, idx) => orderIndex[String(id)] = idx);
  
  const beforeSnapshot = {};
  Object.keys(state.placedTechnologies).forEach(phase => {
    beforeSnapshot[phase] = (state.placedTechnologies[phase] || []).map(t => String(t.id));
  });
  
  Object.keys(state.placedTechnologies).forEach(phase => {
    state.placedTechnologies[phase] = (state.placedTechnologies[phase] || []).slice();
    
    state.placedTechnologies[phase].sort((a, b) => {
      const ia = orderIndex.hasOwnProperty(String(a.id)) ? orderIndex[String(a.id)] : Number.POSITIVE_INFINITY;
      const ib = orderIndex.hasOwnProperty(String(b.id)) ? orderIndex[String(b.id)] : Number.POSITIVE_INFINITY;
      if (ia === ib) {
        const arr = beforeSnapshot[phase] || [];
        const ia0 = arr.indexOf(String(a.id));
        const ib0 = arr.indexOf(String(b.id));
        return ia0 - ib0;
      }
      return ia - ib;
    });
  });
  
  renderPlacedTechnologies();
  
  const zones = document.querySelectorAll('.phase-dropzone');
  zones.forEach(z => {
    z.classList.add('reflowing');
    setTimeout(() => z.classList.remove('reflowing'), 450);
  });
  
  updatePhaseMetrics();
}

function autoPlaceMissingPrereqs(issues) {
  if (!issues || !issues.missingPrereqs || !issues.missingPrereqs.length) {
    showToast('No missing prerequisites found', 1200);
    return;
  }
  
  const phaseIndex = p => PHASES.indexOf(p);
  
  issues.missingPrereqs.forEach(entry => {
    const dependentId = String(entry.techId);
    const dependentPlaced = (() => {
      for (const p of Object.keys(state.placedTechnologies)) {
        const found = (state.placedTechnologies[p] || []).find(t => String(t.id) === dependentId);
        if (found) return { tech: found, phase: p };
      }
      return null;
    })();
    
    (entry.missing || []).forEach(mId => {
      const missingId = String(mId);
      const missingTech = enterpriseData.technologyLibrary.find(x => String(x.id) === missingId);
      if (!missingTech) return;
      
      let alreadyPlaced = false;
      Object.keys(state.placedTechnologies).forEach(p => {
        if ((state.placedTechnologies[p] || []).find(t => String(t.id) === missingId)) alreadyPlaced = true;
      });
      if (alreadyPlaced) return;
      
      let targetPhase = 'short-term';
      if (dependentPlaced) {
        const dIdx = phaseIndex(dependentPlaced.phase);
        const preferIdx = Math.max(0, dIdx - 1);
        targetPhase = PHASES[preferIdx] || 'short-term';
      }
      
      addTechnologyToRoadmap(missingTech, targetPhase, document.querySelector(`[data-phase="${targetPhase}"]`) || document.querySelector(`#${targetPhase}Zone`) || null);
    });
  });
}

// ============================================================================
// SCENARIO CONTROLS
// ============================================================================

function initialiseScenarioControls() {
  const scenarioBtns = document.querySelectorAll('.scenario-btn');
  scenarioBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      scenarioBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      state.currentScenario = this.dataset.scenario;
      updateScenarioDisplay();
    });
  });
  
  const sliders = document.querySelectorAll('.slider');
  sliders.forEach(slider => {
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
  
  const regSelect = document.getElementById('regulatory');
  if (regSelect) {
    regSelect.addEventListener('change', () => updateScenarioMetrics());
  }
}

function updateScenarioDisplay() {
  console.log(`Switching to ${state.currentScenario} scenario`);
  updateScenarioMetrics();
  highlightScenario(state.currentScenario);
}

function updateScenarioMetrics() {
  const carbonPrice = Number(document.getElementById('carbonPrice')?.value || 85);
  const costReduction = Number(document.getElementById('costReduction')?.value || 12);
  const regulatory = document.getElementById('regulatory')?.value || 'medium';
  
  console.log(`Updating metrics for carbon price: £${carbonPrice}, cost reduction: ${costReduction}%, regulatory: ${regulatory}, active scenario: ${state.currentScenario}`);
  
  applyScenarioParameters({ carbonPrice, costReduction, regulatory, scenario: state.currentScenario });
  
  const metrics = calculateScenarioSummary(state.currentScenario, carbonPrice, costReduction, regulatory);
  const metricCurrents = document.querySelectorAll('#scenarios .metric-current');
  if (metricCurrents && metricCurrents.length >= 3) {
    metricCurrents[0].textContent = `£${(metrics.totalInvestment / 1e9).toFixed(2)}B`;
    metricCurrents[1].textContent = `${metrics.emissionsReduction}%`;
    metricCurrents[2].textContent = `${metrics.payback.toFixed(1)} years`;
  }
  
  if (state.charts.scenarioChart) state.charts.scenarioChart.update();
}

function highlightScenario(selected) {
  if (!state.charts.scenarioChart) return;
  
  const datasets = state.charts.scenarioChart.data.datasets;
  datasets.forEach((ds, idx) => {
    const key = SCENARIO_KEYS[idx] || `unknown${idx}`;
    
    ds.backgroundColor = SCENARIO_COLORS[key] ? SCENARIO_COLORS[key].bg : ds.backgroundColor;
    
    if (selected === 'base') {
      ds.borderColor = SCENARIO_COLORS[key] ? SCENARIO_COLORS[key].border : ds.borderColor;
      ds.borderWidth = 2;
      ds.pointRadius = 2;
      ds.borderDash = (key === 'crisis') ? [6, 4] : [];
    } else {
      if (key === selected) {
        ds.borderColor = SCENARIO_COLORS[key] ? SCENARIO_COLORS[key].border : ds.borderColor;
        ds.borderWidth = 3;
        ds.pointRadius = 3;
        ds.borderDash = (key === 'crisis') ? [6, 4] : [];
      } else if (key === 'base') {
        ds.borderColor = hexToRgba(SCENARIO_COLORS.base.border, 0.9);
        ds.borderWidth = 2;
        ds.pointRadius = 2;
        ds.borderDash = [];
      } else {
        const baseColor = SCENARIO_COLORS[key] ? SCENARIO_COLORS[key].border : '#999';
        ds.borderColor = hexToRgba(baseColor, 0.18);
        ds.borderWidth = 1;
        ds.pointRadius = 0;
        ds.borderDash = (key === 'crisis') ? [6, 4] : [];
      }
    }
    ds.hidden = false;
  });
  
  state.charts.scenarioChart.update();
}

function applyScenarioParameters({ carbonPrice, costReduction, regulatory, scenario }) {
  if (!state.charts.scenarioChart) return;
  
  const carbonFactor = 1 - Math.max(-0.05, Math.min(0.12, (carbonPrice - 85) / 900));
  const costFactorBase = 1 - (costReduction / 100) * 0.35;
  
  let regulatoryFactor = 1.0;
  if (regulatory === 'low') regulatoryFactor = 1.02;
  if (regulatory === 'high') regulatoryFactor = 0.95;
  
  const labelsCount = state.charts.scenarioChart.data.labels.length;
  
  SCENARIO_KEYS.forEach((key, idx) => {
    const baseSeries = enterpriseData.scenarios[key].slice();
    const adjusted = baseSeries.map((val, i) => {
      const yearProgress = (i / Math.max(1, labelsCount - 1));
      const dynamicCostEffect = 1 - (costReduction / 100) * 0.5 * yearProgress;
      const result = Math.round(val * carbonFactor * dynamicCostEffect * regulatoryFactor);
      return Math.max(0, result);
    });
    state.charts.scenarioChart.data.datasets[idx].data = adjusted;
  });
}

function calculateScenarioSummary(scenarioKey, carbonPrice, costReduction, regulatory) {
  const series = enterpriseData.scenarios[scenarioKey] || enterpriseData.scenarios.base;
  const last = series[series.length - 1];
  const first = series[0];
  const reductionPercent = Math.round(((first - last) / first) * 100);
  
  const totalInvestment = 1.57e9 * (1 + ((65 - reductionPercent) / 100) * 0.3);
  const payback = Math.max(1.5, 4.2 - (reductionPercent - 50) / 10);
  
  return {
    totalInvestment,
    emissionsReduction: reductionPercent,
    payback
  };
}

function hexToRgba(hex, alpha = 1) {
  if (!hex) return `rgba(0,0,0,${alpha})`;
  hex = hex.replace('#', '');
  if (hex.length === 3) {
    hex = hex.split('').map(c => c + c).join('');
  }
  const num = parseInt(hex, 16);
  const r = (num >> 16) & 255;
  const g = (num >> 8) & 255;
  const b = num & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

// ============================================================================
// AI ASSISTANT
// ============================================================================

function initialiseAIAssistant() {
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
  
  for (const [key, response] of Object.entries(responses)) {
    if (lowerQuery.includes(key) || key.split(' ').some(word => lowerQuery.includes(word))) {
      return response;
    }
  }
  
  return `Based on your enterprise profile and current market conditions, I can provide detailed analysis on this topic. Your North Sea operations present unique opportunities given the current regulatory environment and technology maturity levels. Would you like me to focus on specific technologies (CCUS, hydrogen, electrification), competitive positioning, or regulatory/financial optimization? I have access to your complete operational data and real-time market intelligence.`;
}

// ============================================================================
// SEARCH AND FILTER
// ============================================================================

function initialiseSearchFilters() {
  const techSearch = document.getElementById('techSearch');
  const techFilter = document.getElementById('techFilter');
  
  if (techSearch) {
    techSearch.addEventListener('input', filterTechnologies);
  }
  
  if (techFilter) {
    techFilter.addEventListener('change', filterTechnologies);
  }
}

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
    filteredTechs = filteredTechs.filter(tech => tech.category === categoryFilter);
  }
  
  renderTechnologyLibrary(filteredTechs);
}

// ============================================================================
// ASSESSMENT WIZARD
// ============================================================================

function nextStep() {
  const currentStep = document.querySelector(`.wizard-step[data-step="${state.currentWizardStep}"]`);
  
  if (!validateStep(state.currentWizardStep)) {
    alert('Please fill in all required fields before proceeding.');
    return;
  }
  
  saveStepData(state.currentWizardStep);
  
  if (state.currentWizardStep < 5) {
    currentStep.classList.remove('active');
    
    const progressStep = document.querySelector(`.progress-step[data-step="${state.currentWizardStep}"]`);
    progressStep.classList.add('completed');
    progressStep.classList.remove('active');
    
    state.currentWizardStep++;
    
    const nextStep = document.querySelector(`.wizard-step[data-step="${state.currentWizardStep}"]`);
    nextStep.classList.add('active');
    
    const nextProgressStep = document.querySelector(`.progress-step[data-step="${state.currentWizardStep}"]`);
    nextProgressStep.classList.add('active');
    
    updateWizardButtons();
    document.querySelector('.assessment-wizard').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function previousStep() {
  if (state.currentWizardStep > 1) {
    const currentStep = document.querySelector(`.wizard-step[data-step="${state.currentWizardStep}"]`);
    currentStep.classList.remove('active');
    
    const progressStep = document.querySelector(`.progress-step[data-step="${state.currentWizardStep}"]`);
    progressStep.classList.remove('active');
    
    state.currentWizardStep--;
    
    const prevStep = document.querySelector(`.wizard-step[data-step="${state.currentWizardStep}"]`);
    prevStep.classList.add('active');
    
    const prevProgressStep = document.querySelector(`.progress-step[data-step="${state.currentWizardStep}"]`);
    prevProgressStep.classList.add('active');
    prevProgressStep.classList.remove('completed');
    
    updateWizardButtons();
    document.querySelector('.assessment-wizard').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function updateWizardButtons() {
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const submitBtn = document.getElementById('submitBtn');
  
  prevBtn.style.display = state.currentWizardStep === 1 ? 'none' : 'inline-block';
  
  if (state.currentWizardStep === 5) {
    nextBtn.style.display = 'none';
    submitBtn.style.display = 'inline-block';
  } else {
    nextBtn.style.display = 'inline-block';
    submitBtn.style.display = 'none';
  }
}

function validateStep(step) {
  const validators = {
    1: () => {
      const companyName = document.getElementById('companyName').value.trim();
      const sector = document.getElementById('industrySector').value;
      return companyName !== '' && sector !== '';
    },
    2: () => {
      const facilityCount = document.getElementById('facilityCount').value;
      return facilityCount !== '' && facilityCount > 0;
    },
    3: () => {
      const totalEmissions = document.getElementById('totalEmissions').value;
      return totalEmissions !== '' && totalEmissions > 0;
    },
    4: () => {
      const budget = document.getElementById('decarbBudget').value;
      return budget !== '';
    },
    5: () => {
      const targetYear = document.getElementById('targetYear').value;
      return targetYear !== '';
    }
  };
  
  return validators[step] ? validators[step]() : true;
}

function saveStepData(step) {
  const getCheckedValues = (selector) => {
    const checkboxes = document.querySelectorAll(selector);
    const values = [];
    checkboxes.forEach(cb => {
      if (cb.checked) values.push(cb.value);
    });
    return values;
  };
  
  const stepData = {
    1: () => {
      state.assessmentData.companyName = document.getElementById('companyName').value;
      state.assessmentData.industrySector = document.getElementById('industrySector').value;
      state.assessmentData.primaryLocation = document.getElementById('primaryLocation').value;
      state.assessmentData.employeeCount = document.getElementById('employeeCount').value;
      state.assessmentData.annualRevenue = document.getElementById('annualRevenue').value;
    },
    2: () => {
      state.assessmentData.facilityCount = document.getElementById('facilityCount').value;
      state.assessmentData.facilityTypes = getCheckedValues('input[type="checkbox"][value^="offshore-"], input[type="checkbox"][value^="processing-"], input[type="checkbox"][value^="refinery"], input[type="checkbox"][value^="manufacturing"], input[type="checkbox"][value^="warehouse"], input[type="checkbox"][value^="office"]');
      state.assessmentData.productionVolume = document.getElementById('productionVolume').value;
      state.assessmentData.energyConsumption = document.getElementById('energyConsumption').value;
      state.assessmentData.energySources = getCheckedValues('input[type="checkbox"][value^="natural-"], input[type="checkbox"][value^="diesel"], input[type="checkbox"][value^="grid-"], input[type="checkbox"][value^="coal"], input[type="checkbox"][value^="renewable"]');
    },
    3: () => {
      state.assessmentData.totalEmissions = document.getElementById('totalEmissions').value;
      state.assessmentData.scope1 = document.getElementById('scope1').value;
      state.assessmentData.scope2 = document.getElementById('scope2').value;
      state.assessmentData.scope3 = document.getElementById('scope3').value;
      state.assessmentData.emissionSources = getCheckedValues('input[type="checkbox"][value="combustion"], input[type="checkbox"][value="flaring"], input[type="checkbox"][value="venting"], input[type="checkbox"][value="fugitive"], input[type="checkbox"][value="process"], input[type="checkbox"][value="purchased-power"]');
      state.assessmentData.emissionsMeasurement = document.getElementById('emissionsMeasurement').value;
    },
    4: () => {
      state.assessmentData.currentTechnologies = getCheckedValues('input[type="checkbox"][value="led-lighting"], input[type="checkbox"][value="vfd"], input[type="checkbox"][value="waste-heat"], input[type="checkbox"][value="solar"], input[type="checkbox"][value="wind"], input[type="checkbox"][value="ccs-pilot"], input[type="checkbox"][value="leak-detection"], input[type="checkbox"][value="electrification"]');
      state.assessmentData.decarbBudget = document.getElementById('decarbBudget').value;
      state.assessmentData.technologiesOfInterest = getCheckedValues('input[type="checkbox"][value="ccus"], input[type="checkbox"][value="hydrogen"], input[type="checkbox"][value="electrification"], input[type="checkbox"][value="floating-wind"], input[type="checkbox"][value="energy-efficiency"], input[type="checkbox"][value="digital-twin"], input[type="checkbox"][value="methane-monitoring"], input[type="checkbox"][value="subsea"]');
    },
    5: () => {
      state.assessmentData.targetYear = document.getElementById('targetYear').value;
      state.assessmentData.interimTarget = document.getElementById('interimTarget').value;
      state.assessmentData.constraints = getCheckedValues('input[type="checkbox"][value="budget"], input[type="checkbox"][value="technology-maturity"], input[type="checkbox"][value="regulatory"], input[type="checkbox"][value="infrastructure"], input[type="checkbox"][value="supply-chain"], input[type="checkbox"][value="operational"]');
      state.assessmentData.objectives = getCheckedValues('input[type="checkbox"][value="cost-reduction"], input[type="checkbox"][value="regulatory-compliance"], input[type="checkbox"][value="reputation"], input[type="checkbox"][value="operational-efficiency"], input[type="checkbox"][value="innovation"]');
      state.assessmentData.additionalComments = document.getElementById('additionalComments').value;
    }
  };
  
  if (stepData[step]) stepData[step]();
  console.log('Assessment data saved:', state.assessmentData);
}

function submitAssessment() {
  saveStepData(5);
  
  const lastProgressStep = document.querySelector(`.progress-step[data-step="5"]`);
  lastProgressStep.classList.add('completed');
  
  const currentStep = document.querySelector(`.wizard-step[data-step="5"]`);
  currentStep.classList.remove('active');
  
  processAssessmentResults();
  
  const resultsView = document.querySelector(`.wizard-step[data-step="results"]`);
  resultsView.style.display = 'block';
  
  document.querySelector('.wizard-navigation').style.display = 'none';
  document.querySelector('.assessment-wizard').scrollIntoView({ behavior: 'smooth', block: 'start' });
  
  console.log('Submitting assessment data:', state.assessmentData);
}

function processAssessmentResults() {
  const formatValue = (value) => {
    if (!value) return 'Not specified';
    return value.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  };
  
  const profileSummary = document.getElementById('profileSummary');
  profileSummary.innerHTML = `
    <p><strong>Company:</strong> ${state.assessmentData.companyName}</p>
    <p><strong>Sector:</strong> ${formatValue(state.assessmentData.industrySector)}</p>
    <p><strong>Facilities:</strong> ${state.assessmentData.facilityCount}</p>
    <p><strong>Annual Emissions:</strong> ${Number(state.assessmentData.totalEmissions).toLocaleString()} tonnes CO₂</p>
    <p><strong>Target Year:</strong> ${state.assessmentData.targetYear}</p>
    <p><strong>Budget Range:</strong> ${formatValue(state.assessmentData.decarbBudget)}</p>
  `;
  
  const recommendedTechs = document.getElementById('recommendedTechs');
  const recommendations = generateTechnologyRecommendations(state.assessmentData);
  recommendedTechs.innerHTML = recommendations.map(tech => `
    <div class="tech-item">
      <strong>${tech.name}</strong><br>
      <small>Match: ${tech.matchScore}% | Impact: ${tech.impact}</small>
    </div>
  `).join('');
  
  const priorityActions = document.getElementById('priorityActions');
  const actions = generatePriorityActions(state.assessmentData);
  priorityActions.innerHTML = actions.map(action => `
    <div class="action-item">
      <strong>${action.title}</strong><br>
      <small>${action.description}</small>
    </div>
  `).join('');
}

function generateTechnologyRecommendations(data) {
  const recommendations = [];
  
  const techMap = {
    'ccus': { name: 'Carbon Capture & Storage', matchScore: 92, impact: 'High' },
    'electrification': { name: 'Platform Electrification', matchScore: 88, impact: 'High' },
    'digital-twin': { name: 'Digital Twin Optimization', matchScore: 85, impact: 'Medium' },
    'methane-monitoring': { name: 'Advanced Leak Detection', matchScore: 90, impact: 'High' },
    'energy-efficiency': { name: 'Waste Heat Recovery', matchScore: 82, impact: 'Medium' },
    'floating-wind': { name: 'Floating Wind Integration', matchScore: 78, impact: 'High' }
  };
  
  (data.technologiesOfInterest || []).forEach(tech => {
    if (techMap[tech]) recommendations.push(techMap[tech]);
  });
  
  if ((data.emissionSources || []).includes('fugitive')) {
    if (!recommendations.find(r => r.name === 'Advanced Leak Detection')) {
      recommendations.push(techMap['methane-monitoring']);
    }
  }
  
  recommendations.sort((a, b) => b.matchScore - a.matchScore);
  return recommendations.slice(0, 5);
}

function generatePriorityActions(data) {
  const actions = [];
  
  if (data.emissionsMeasurement === 'no' || data.emissionsMeasurement === 'estimated') {
    actions.push({
      title: 'Establish Emissions Monitoring',
      description: 'Set up continuous monitoring systems for accurate baseline measurement'
    });
  }
  
  if (!(data.currentTechnologies || []).includes('led-lighting')) {
    actions.push({
      title: 'LED Lighting Upgrade',
      description: 'Low-cost, immediate impact retrofit opportunity'
    });
  }
  
  if (data.decarbBudget === '10m-50m' || data.decarbBudget === '50m-100m') {
    actions.push({
      title: 'Electrification Pilot Project',
      description: 'Start with one platform to demonstrate ROI and build capabilities'
    });
  }
  
  if (data.targetYear === '2030' || data.targetYear === '2035') {
    actions.push({
      title: 'Accelerate Technology Deployment',
      description: 'Your target requires immediate action on high-impact technologies'
    });
  }
  
  if ((data.constraints || []).includes('budget')) {
    actions.push({
      title: 'Explore Financing Options',
      description: 'Investigate green bonds, tax incentives, and partnership opportunities'
    });
  }
  
  return actions.slice(0, 5);
}

function restartAssessment() {
  state.currentWizardStep = 1;
  state.assessmentData = {};
  
  const resultsView = document.querySelector(`.wizard-step[data-step="results"]`);
  resultsView.style.display = 'none';
  
  const firstStep = document.querySelector(`.wizard-step[data-step="1"]`);
  firstStep.classList.add('active');
  
  document.querySelectorAll('.progress-step').forEach((step, index) => {
    step.classList.remove('active', 'completed');
    if (index === 0) step.classList.add('active');
  });
  
  document.querySelectorAll('.wizard-step input, .wizard-step select, .wizard-step textarea').forEach(input => {
    if (input.type === 'checkbox') {
      input.checked = false;
    } else {
      input.value = '';
    }
  });
  
  document.querySelector('.wizard-navigation').style.display = 'flex';
  updateWizardButtons();
  document.querySelector('.assessment-wizard').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function goToRoadmap() {
  localStorage.setItem('assessmentData', JSON.stringify(state.assessmentData));
  
  showSection('roadmap');
  
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  document.querySelector('.nav-link[data-section="roadmap"]').classList.add('active');
  
  setTimeout(() => {
    populateRoadmapFromAssessment();
  }, 500);
}

function downloadAssessment() {
  const reportData = JSON.stringify(state.assessmentData, null, 2);
  const blob = new Blob([reportData], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `assessment-${state.assessmentData.companyName}-${Date.now()}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  
  alert('Assessment report downloaded! In production, this would generate a comprehensive PDF report.');
}

function populateRoadmapFromAssessment() {
  const storedData = localStorage.getItem('assessmentData');
  if (!storedData) return;
  
  const data = JSON.parse(storedData);
  const recommendations = generateTechnologyRecommendations(data);
  
  state.placedTechnologies = {
    'short-term': [],
    'medium-term': [],
    'long-term': []
  };
  
  recommendations.forEach(rec => {
    const tech = enterpriseData.technologyLibrary.find(t => 
      t.name.toLowerCase().includes(rec.name.toLowerCase()) ||
      rec.name.toLowerCase().includes(t.name.toLowerCase())
    );
    
    if (tech) {
      let phase = 'medium-term';
      if (tech.trl >= 8) phase = 'short-term';
      if (tech.trl <= 6) phase = 'long-term';
      
      state.placedTechnologies[phase].push(tech);
    }
  });
  
  renderPlacedTechnologies();
  updatePhaseMetrics();
  
  alert('Roadmap pre-populated with recommended technologies based on your assessment!');
}

// ============================================================================
// ACTION FUNCTIONS (BUTTONS)
// ============================================================================

function optimizeTrajectory() {
  alert('🤖 AI Optimization in progress...\n\nAnalyzing 847 technology combinations across 12 parameters.\n\nOptimal sequence identified:\n1. Accelerate electrification by 6 months\n2. Delay floating wind by 12 months\n3. Integrate digital twin with CCS planning\n\nProjected savings: £45M\nEmissions improvement: +8%');
}

function runPredictiveAnalysis() {
  alert('📊 Running Predictive Analysis...\n\nMonte Carlo simulation with 10,000 iterations:\n\n• 87% probability of meeting 2030 targets\n• Cost overrun risk: 23%\n• Technology risk: Medium\n• Regulatory risk: High\n\nRecommendation: Establish regulatory contingency fund');
}

function createNewScenario() {
  alert('📋 New Scenario Creator\n\nScenario Name: [Custom Scenario]\n\nSelect parameters to modify:\n• Carbon pricing trajectory\n• Technology cost evolution\n• Regulatory stringency\n• Market demand patterns\n\nWould you like to start with a template or build from scratch?');
}

function compareScenarios() {
  alert('📊 Multi-Scenario Comparison\n\nComparing 4 scenarios across key metrics:\n\nBase Case: £1.57B, 65% reduction\nConservative: £1.42B, 58% reduction\nAggressive: £1.89B, 78% reduction\nCrisis Response: £1.23B, 45% reduction\n\nRecommendation: Base case offers optimal risk/return balance');
}

function runMonteCarloAnalysis() {
  alert('🎲 Monte Carlo Analysis Complete\n\n10,000 simulation runs:\n\nCost Range: £1.2B - £2.1B (90% confidence)\nEmissions Reduction: 52% - 74%\nSuccess Probability: 87%\n\nKey Risk Factors:\n• Regulatory delays (34% impact)\n• Technology maturity (28% impact)\n• Market conditions (21% impact)');
}

function bookConsultation(expertId) {
  const expertNames = {
    'dr-thompson': 'Dr. Richard Thompson',
    'anna-martinez': 'Anna Martinez'
  };
  
  alert(`📅 Booking consultation with ${expertNames[expertId]}\n\nAvailable slots this week:\n• Tomorrow 2:00 PM (1 hour)\n• Friday 10:00 AM (2 hours)\n• Friday 3:00 PM (1 hour)\n\nPreferred session length and topics?\nRemaining allocation: 5 hours this month`);
}

// ============================================================================
// GLOBAL EXPORTS
// ============================================================================

// Make functions available globally for onclick handlers
window.showSection = showSection;
window.askAI = askAI;
window.sendAIMessage = sendAIMessage;
window.optimizeTrajectory = optimizeTrajectory;
window.runPredictiveAnalysis = runPredictiveAnalysis;
window.aiOptimizeRoadmap = aiOptimizeRoadmap;
window.validateRoadmap = validateRoadmap;
window.clearRoadmap = clearRoadmap;
window.createNewScenario = createNewScenario;
window.compareScenarios = compareScenarios;
window.runMonteCarloAnalysis = runMonteCarloAnalysis;
window.bookConsultation = bookConsultation;
window.nextStep = nextStep;
window.previousStep = previousStep;
window.submitAssessment = submitAssessment;
window.restartAssessment = restartAssessment;
window.goToRoadmap = goToRoadmap;
window.downloadAssessment = downloadAssessment;
window.charts = state.charts;

console.log('NZTC Enterprise Platform loaded successfully');