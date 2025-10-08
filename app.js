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

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
  console.log('NZTC Enterprise Platform initializing...');
  
  setTimeout(() => {
    initializeNavigation();
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
    const techCard = document.createElement('div');
    techCard.className = 'tech-card';
    techCard.draggable = true;
    techCard.dataset.techId = tech.id;
    
    techCard.innerHTML = `
      <h4>${tech.name}</h4>
      <div class="tech-meta">
        <span class="tech-badge">${tech.category}</span>
        <span class="tech-badge">TRL ${tech.trl}</span>
        <span class="tech-badge">${tech.confidence}%</span>
      </div>
      <p class="tech-description">${tech.description}</p>
    `;
    
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
    type: 'scatter',
    data: {
      datasets: [{
        label: 'Current Technologies',
        data: techData,
        backgroundColor: '#1FB8CD',
        borderColor: '#5D878F',
        pointRadius: 8,
        pointHoverRadius: 12
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          title: {
            display: true,
            text: 'Technology Readiness Level (TRL)'
          },
          min: 1,
          max: 10
        },
        y: {
          title: {
            display: true,
            text: 'AI Confidence Score (%)'
          },
          min: 0,
          max: 100
        }
      },
      plugins: {
        tooltip: {
          callbacks: {
            label: function(context) {
              const point = context.parsed;
              return `${context.dataset.data[context.dataIndex].label}: TRL ${point.x}, ${point.y}% confidence`;
            }
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
  document.addEventListener('dragstart', function(e) {
    if (e.target.classList.contains('tech-card')) {
      draggedTech = enterpriseData.technologyLibrary.find(t => t.id == e.target.dataset.techId);
      e.target.classList.add('dragging');
      e.dataTransfer.effectAllowed = 'move';
    }
  });
  
  document.addEventListener('dragend', function(e) {
    if (e.target.classList.contains('tech-card')) {
      e.target.classList.remove('dragging');
      draggedTech = null;
    }
  });
  
  const dropzones = document.querySelectorAll('.phase-dropzone');
  dropzones.forEach(zone => {
    zone.addEventListener('dragover', function(e) {
      e.preventDefault();
      this.classList.add('drag-over');
    });
    
    zone.addEventListener('dragleave', function(e) {
      if (!this.contains(e.relatedTarget)) {
        this.classList.remove('drag-over');
      }
    });
    
    zone.addEventListener('drop', function(e) {
      e.preventDefault();
      this.classList.remove('drag-over');
      
      if (draggedTech) {
        const phase = this.id.replace('Zone', '').replace(/([A-Z])/g, '-$1').toLowerCase();
        addTechnologyToRoadmap(draggedTech, phase, this);
      }
    });
  });
}

function addTechnologyToRoadmap(tech, phase, dropzone) {
  // Check if already added
  if (roadmapTechnologies[phase] && roadmapTechnologies[phase].find(t => t.id === tech.id)) {
    return;
  }
  
  if (!roadmapTechnologies[phase]) {
    roadmapTechnologies[phase] = [];
  }
  
  roadmapTechnologies[phase].push(tech);
  
  const techElement = document.createElement('div');
  techElement.className = 'dropped-tech';
  techElement.innerHTML = `
    <strong>${tech.name}</strong>
    <small>${tech.category} • ${tech.emissionsImpact} • ${tech.confidence}% confidence</small>
  `;
  
  dropzone.appendChild(techElement);
  
  // Update phase metrics
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
  }, 2000);
}

function generateTechMatching() {
  setTimeout(() => {
    alert('🎯 AI Technology Matching Complete\n\nTop 3 matches for your operational profile:\n\n1. Platform Electrification (95% match)\n2. Advanced Leak Detection (92% match) \n3. Digital Twin Integration (89% match)\n\nDetailed technology specs and vendor recommendations have been generated.');
  }, 1500);
}

function aiOptimizeRoadmap() {
  alert('🧠 AI Roadmap Optimization\n\nAnalyzing dependencies, resource constraints, and market timing...\n\nOptimized sequence:\n• Move Digital Twin to Phase 1 (enables other tech)\n• Parallel electrification and leak detection\n• Optimize CCS timing for max subsidies\n\nProjected improvement: +12% efficiency, -£67M costs');
}

function validateRoadmap() {
  alert('✅ Roadmap Validation Complete\n\nDependency Analysis:\n• 3 critical path conflicts resolved\n• Resource leveling optimized\n• Risk mitigation strategies updated\n\nOverall roadmap feasibility: 87%\nRecommended adjustments: 4');
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
  }, 3000);
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

// Make functions available globally
window.showSection = showSection;
window.askAI = askAI;
window.sendAIMessage = sendAIMessage;
window.optimizeTrajectory = optimizeTrajectory;
window.runPredictiveAnalysis = runPredictiveAnalysis;
window.runGapAnalysis = runGapAnalysis;
window.generateTechMatching = generateTechMatching;
window.aiOptimizeRoadmap = aiOptimizeRoadmap;
window.validateRoadmap = validateRoadmap;
window.createNewScenario = createNewScenario;
window.compareScenarios = compareScenarios;
window.runMonteCarloAnalysis = runMonteCarloAnalysis;
window.bookConsultation = bookConsultation;

console.log('NZTC Enterprise Platform loaded successfully');