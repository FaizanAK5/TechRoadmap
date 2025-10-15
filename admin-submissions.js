// Admin Submissions Dashboard JavaScript
// Integrates with existing NZTC Platform

// Dummy data for demonstration (will be replaced with real API calls)
const submissionsData = [
    {
        id: 1,
        company: "BP Energy",
        contact: { name: "John Mitchell", email: "j.mitchell@bp.com", phone: "+44 20 7496 4000" },
        sector: "Oil & Gas",
        submittedDate: "2025-10-12",
        submittedBy: "John Mitchell",
        facilityCount: 8,
        emissions: 3200000,
        targetYear: 2030,
        budget: "£500M-£1B",
        keyChallenge: "High emissions from offshore platforms",
        challenges: ["Offshore platform emissions", "Aging infrastructure", "Regulatory compliance"],
        currentTech: ["Basic monitoring", "Manual reporting"],
        aiRecommendations: [
            { tech: "Carbon Capture & Storage", confidence: 92, impact: "35% reduction" },
            { tech: "Platform Electrification", confidence: 88, impact: "22% reduction" },
            { tech: "Advanced Leak Detection", confidence: 95, impact: "15% reduction" }
        ],
        status: "new",
        notes: "High-priority client, interested in CCS partnership",
        submissionCount: 2
    },
    {
        id: 2,
        company: "Shell UK",
        contact: { name: "Sarah Thompson", email: "sarah.thompson@shell.com", phone: "+44 20 7934 1234" },
        sector: "Oil & Gas",
        submittedDate: "2025-10-10",
        submittedBy: "Sarah Thompson",
        facilityCount: 12,
        emissions: 4500000,
        targetYear: 2028,
        budget: "£1B+",
        keyChallenge: "Transitioning to renewable energy sources",
        challenges: ["Energy transition complexity", "Supply chain dependencies", "Technology integration"],
        currentTech: ["Wind energy pilot", "Digital twins", "Carbon monitoring"],
        aiRecommendations: [
            { tech: "Floating Wind Integration", confidence: 85, impact: "28% reduction" },
            { tech: "Green Hydrogen Production", confidence: 78, impact: "40% reduction" },
            { tech: "Digital Twin Optimization", confidence: 93, impact: "12% reduction" }
        ],
        status: "reviewed",
        notes: "Followed up on Oct 11. Interested in hydrogen roadmap.",
        submissionCount: 3
    },
    {
        id: 3,
        company: "ExxonMobil Europe",
        contact: { name: "Michael Zhang", email: "m.zhang@exxonmobil.com", phone: "+32 2 555 4321" },
        sector: "Oil & Gas",
        submittedDate: "2025-10-08",
        submittedBy: "Michael Zhang",
        facilityCount: 6,
        emissions: 2800000,
        targetYear: 2032,
        budget: "£250M-£500M",
        keyChallenge: "Cost-effective emissions reduction",
        challenges: ["Budget constraints", "Multiple facility types", "ROI concerns"],
        currentTech: ["Energy efficiency measures", "Waste heat recovery"],
        aiRecommendations: [
            { tech: "Waste Heat Recovery", confidence: 94, impact: "8% reduction" },
            { tech: "Advanced Leak Detection", confidence: 91, impact: "15% reduction" },
            { tech: "Subsea Processing", confidence: 76, impact: "18% reduction" }
        ],
        status: "followed-up",
        notes: "Sent detailed proposal on Oct 9. Awaiting decision.",
        submissionCount: 1
    },
    {
        id: 4,
        company: "TotalEnergies",
        contact: { name: "Marie Dubois", email: "marie.dubois@totalenergies.com", phone: "+33 1 4744 4546" },
        sector: "Energy",
        submittedDate: "2025-10-07",
        submittedBy: "Marie Dubois",
        facilityCount: 15,
        emissions: 5200000,
        targetYear: 2030,
        budget: "£1B+",
        keyChallenge: "Integrating renewable energy at scale",
        challenges: ["Large-scale integration", "Grid stability", "Storage solutions"],
        currentTech: ["Solar farms", "Battery storage", "Smart grid"],
        aiRecommendations: [
            { tech: "Floating Wind Integration", confidence: 89, impact: "28% reduction" },
            { tech: "Carbon Capture & Storage", confidence: 87, impact: "35% reduction" },
            { tech: "Green Hydrogen Production", confidence: 82, impact: "40% reduction" }
        ],
        status: "reviewed",
        notes: "Interested in offshore wind collaboration",
        submissionCount: 2
    },
    {
        id: 5,
        company: "Equinor",
        contact: { name: "Lars Andersen", email: "lars.andersen@equinor.com", phone: "+47 51 99 0000" },
        sector: "Oil & Gas",
        submittedDate: "2025-10-05",
        submittedBy: "Lars Andersen",
        facilityCount: 10,
        emissions: 3800000,
        targetYear: 2029,
        budget: "£500M-£1B",
        keyChallenge: "Offshore wind integration with existing infrastructure",
        challenges: ["Platform electrification", "Wind power variability", "Infrastructure costs"],
        currentTech: ["Offshore wind pilot", "Platform monitoring", "Energy storage"],
        aiRecommendations: [
            { tech: "Platform Electrification", confidence: 96, impact: "22% reduction" },
            { tech: "Floating Wind Integration", confidence: 91, impact: "28% reduction" },
            { tech: "Digital Twin Optimization", confidence: 90, impact: "12% reduction" }
        ],
        status: "followed-up",
        notes: "Active engagement. Scheduled consultation for Oct 20.",
        submissionCount: 4
    },
    {
        id: 6,
        company: "Ineos Chemicals",
        contact: { name: "David Williams", email: "d.williams@ineos.com", phone: "+44 1442 235 000" },
        sector: "Chemicals",
        submittedDate: "2025-10-04",
        submittedBy: "David Williams",
        facilityCount: 5,
        emissions: 1200000,
        targetYear: 2031,
        budget: "£100M-£250M",
        keyChallenge: "Process emissions from chemical manufacturing",
        challenges: ["Process heat requirements", "Chemical reaction emissions", "Energy intensive operations"],
        currentTech: ["Basic CCS study", "Energy monitoring"],
        aiRecommendations: [
            { tech: "Carbon Capture & Storage", confidence: 88, impact: "35% reduction" },
            { tech: "Waste Heat Recovery", confidence: 92, impact: "8% reduction" },
            { tech: "Green Hydrogen Production", confidence: 75, impact: "40% reduction" }
        ],
        status: "new",
        notes: "First submission. Needs initial consultation call.",
        submissionCount: 1
    },
    {
        id: 7,
        company: "ArcelorMittal",
        contact: { name: "Sophie Martin", email: "sophie.martin@arcelormittal.com", phone: "+352 4792 1" },
        sector: "Manufacturing",
        submittedDate: "2025-10-02",
        submittedBy: "Sophie Martin",
        facilityCount: 7,
        emissions: 6800000,
        targetYear: 2035,
        budget: "£1B+",
        keyChallenge: "High-temperature industrial processes",
        challenges: ["Steel production emissions", "High energy demand", "Technology availability"],
        currentTech: ["Electric arc furnaces", "Scrap recycling"],
        aiRecommendations: [
            { tech: "Green Hydrogen Production", confidence: 80, impact: "40% reduction" },
            { tech: "Carbon Capture & Storage", confidence: 86, impact: "35% reduction" },
            { tech: "Waste Heat Recovery", confidence: 90, impact: "8% reduction" }
        ],
        status: "reviewed",
        notes: "Exploring hydrogen-based steel production",
        submissionCount: 2
    },
    {
        id: 8,
        company: "National Grid",
        contact: { name: "Emma Wilson", email: "emma.wilson@nationalgrid.com", phone: "+44 1926 653 000" },
        sector: "Energy",
        submittedDate: "2025-09-30",
        submittedBy: "Emma Wilson",
        facilityCount: 20,
        emissions: 2100000,
        targetYear: 2028,
        budget: "£500M-£1B",
        keyChallenge: "Grid modernization for renewable integration",
        challenges: ["Grid flexibility", "Energy storage", "Demand response"],
        currentTech: ["Smart meters", "Grid analytics", "Battery storage pilots"],
        aiRecommendations: [
            { tech: "Digital Twin Optimization", confidence: 94, impact: "12% reduction" },
            { tech: "Floating Wind Integration", confidence: 83, impact: "28% reduction" },
            { tech: "Advanced Leak Detection", confidence: 88, impact: "15% reduction" }
        ],
        status: "followed-up",
        notes: "Regular client. Quarterly strategy review scheduled.",
        submissionCount: 6
    },
    {
        id: 9,
        company: "Drax Group",
        contact: { name: "Robert Taylor", email: "r.taylor@drax.com", phone: "+44 1757 618 381" },
        sector: "Energy",
        submittedDate: "2025-09-28",
        submittedBy: "Robert Taylor",
        facilityCount: 4,
        emissions: 890000,
        targetYear: 2027,
        budget: "£250M-£500M",
        keyChallenge: "Biomass plant efficiency and CCS integration",
        challenges: ["BECCS implementation", "Fuel supply chain", "Storage infrastructure"],
        currentTech: ["Biomass generation", "Carbon monitoring"],
        aiRecommendations: [
            { tech: "Carbon Capture & Storage", confidence: 95, impact: "35% reduction" },
            { tech: "Digital Twin Optimization", confidence: 89, impact: "12% reduction" },
            { tech: "Waste Heat Recovery", confidence: 91, impact: "8% reduction" }
        ],
        status: "reviewed",
        notes: "BECCS pilot project in planning phase",
        submissionCount: 3
    },
    {
        id: 10,
        company: "Rolls-Royce",
        contact: { name: "James Anderson", email: "james.anderson@rolls-royce.com", phone: "+44 20 7222 9020" },
        sector: "Manufacturing",
        submittedDate: "2025-09-25",
        submittedBy: "James Anderson",
        facilityCount: 9,
        emissions: 1650000,
        targetYear: 2030,
        budget: "£500M-£1B",
        keyChallenge: "Manufacturing emissions and supply chain",
        challenges: ["Aerospace manufacturing", "Supply chain emissions", "Testing facilities"],
        currentTech: ["Hybrid-electric propulsion R&D", "Energy efficiency programs"],
        aiRecommendations: [
            { tech: "Platform Electrification", confidence: 87, impact: "22% reduction" },
            { tech: "Green Hydrogen Production", confidence: 79, impact: "40% reduction" },
            { tech: "Digital Twin Optimization", confidence: 92, impact: "12% reduction" }
        ],
        status: "new",
        notes: "Interested in hydrogen aviation technologies",
        submissionCount: 1
    }
];

// Global state
let currentPage = 1;
let itemsPerPage = 10;
let filteredData = [...submissionsData];
let currentSort = { column: null, ascending: true };

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    console.log('Admin Submissions Dashboard initializing...');
    updateStats();
    renderTable();
    updatePagination();
});

// Update statistics
function updateStats() {
    document.getElementById('totalSubmissions').textContent = submissionsData.length;

    const uniqueCompanies = new Set(submissionsData.map(s => s.company)).size;
    document.getElementById('uniqueCompanies').textContent = uniqueCompanies;

    const totalEmissions = submissionsData.reduce((sum, s) => sum + s.emissions, 0);
    document.getElementById('totalEmissions').textContent = (totalEmissions / 1000000).toFixed(1) + 'M';
}

// Render table
function renderTable() {
    const tbody = document.getElementById('submissionsTableBody');
    tbody.innerHTML = '';

    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const pageData = filteredData.slice(start, end);

    if (pageData.length === 0) {
        tbody.innerHTML = '<tr><td colspan="8" style="text-align: center; padding: 40px; color: var(--color-text-secondary);">No submissions found</td></tr>';
        return;
    }

    pageData.forEach(submission => {
        const row = document.createElement('tr');
        row.classList.add('submission-row');
        row.setAttribute('data-id', submission.id);

        const statusClass = `status-badge status-${submission.status}`;
        const topRecommendation = submission.aiRecommendations[0];

        row.innerHTML = `
            <td>
                <div class="company-cell">
                    <div class="company-avatar">${submission.company.charAt(0)}</div>
                    <div class="company-info">
                        <a href="company-profile.html?id=${submission.id}" class="company-name">${submission.company}</a>
                        <div class="company-meta">${submission.contact.name}</div>
                    </div>
                </div>
            </td>
            <td>
                <span class="sector-badge">${submission.sector}</span>
            </td>
            <td>
                <div class="date-cell">
                    <div>${formatDate(submission.submittedDate)}</div>
                    <div class="date-meta">${getTimeAgo(submission.submittedDate)}</div>
                </div>
            </td>
            <td>
                <div class="challenge-cell" title="${submission.keyChallenge}">
                    ${truncateText(submission.keyChallenge, 40)}
                </div>
            </td>
            <td>
                <div class="emissions-cell">
                    <strong>${formatNumber(submission.emissions)}</strong>
                    <div class="emissions-meta">${submission.facilityCount} facilities</div>
                </div>
            </td>
            <td>
                <div class="recommendation-cell">
                    <div class="rec-tech">${topRecommendation.tech}</div>
                    <div class="rec-meta">
                        <span class="confidence-badge">${topRecommendation.confidence}% confident</span>
                        ${topRecommendation.impact}
                    </div>
                </div>
            </td>
            <td>
                <span class="${statusClass}">${formatStatus(submission.status)}</span>
            </td>
            <td>
                <div class="action-buttons">
                    <button class="btn-icon" onclick="viewSubmission(${submission.id})" title="View Details">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                    </button>
                    <button class="btn-icon" onclick="contactCompany(${submission.id})" title="Contact">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                    </button>
                </div>
            </td>
        `;

        tbody.appendChild(row);
    });

    updatePagination();
}

// View submission details in modal
function viewSubmission(id) {
    const submission = submissionsData.find(s => s.id === id);
    if (!submission) return;

    document.getElementById('modalCompanyName').textContent = submission.company + ' - Submission Details';

    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = `
        <div class="modal-grid">
            <div class="modal-section">
                <h3>Company Information</h3>
                <div class="info-grid">
                    <div class="info-item">
                        <label>Company Name</label>
                        <div class="info-value">${submission.company}</div>
                    </div>
                    <div class="info-item">
                        <label>Sector</label>
                        <div class="info-value"><span class="sector-badge">${submission.sector}</span></div>
                    </div>
                    <div class="info-item">
                        <label>Facilities</label>
                        <div class="info-value">${submission.facilityCount} locations</div>
                    </div>
                    <div class="info-item">
                        <label>Annual Emissions</label>
                        <div class="info-value">${formatNumber(submission.emissions)} tonnes CO₂</div>
                    </div>
                    <div class="info-item">
                        <label>Target Year</label>
                        <div class="info-value">${submission.targetYear}</div>
                    </div>
                    <div class="info-item">
                        <label>Budget Range</label>
                        <div class="info-value">${submission.budget}</div>
                    </div>
                </div>
            </div>

            <div class="modal-section">
                <h3>Contact Information</h3>
                <div class="contact-card">
                    <div class="contact-avatar">${submission.contact.name.split(' ').map(n => n[0]).join('')}</div>
                    <div class="contact-details">
                        <div class="contact-name">${submission.contact.name}</div>
                        <div class="contact-item">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                            <a href="mailto:${submission.contact.email}">${submission.contact.email}</a>
                        </div>
                        <div class="contact-item">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                            </svg>
                            <a href="tel:${submission.contact.phone}">${submission.contact.phone}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal-section">
            <h3>Challenges & Requirements</h3>
            <div class="challenge-detail">
                <strong>Primary Challenge:</strong>
                <p>${submission.keyChallenge}</p>
            </div>
            <div class="challenges-list">
                ${submission.challenges.map(c => `<span class="challenge-tag">${c}</span>`).join('')}
            </div>
        </div>

        <div class="modal-section">
            <h3>Current Technologies</h3>
            <div class="tech-tags">
                ${submission.currentTech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
            </div>
        </div>

        <div class="modal-section">
            <h3>AI Recommendations</h3>
            <div class="recommendations-list">
                ${submission.aiRecommendations.map(rec => `
                    <div class="recommendation-card">
                        <div class="rec-header">
                            <div class="rec-name">${rec.tech}</div>
                            <div class="rec-badges">
                                <span class="confidence-badge">${rec.confidence}% confidence</span>
                                <span class="impact-badge">${rec.impact}</span>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="modal-section">
            <h3>Submission History</h3>
            <div class="submission-history">
                <div class="history-item">
                    <div class="history-icon">📝</div>
                    <div class="history-content">
                        <div class="history-title">Assessment Submitted</div>
                        <div class="history-meta">${formatDate(submission.submittedDate)} by ${submission.submittedBy}</div>
                    </div>
                </div>
                <div class="history-item">
                    <div class="history-icon">👁️</div>
                    <div class="history-content">
                        <div class="history-title">Status: ${formatStatus(submission.status)}</div>
                        <div class="history-meta">Total submissions from this company: ${submission.submissionCount}</div>
                    </div>
                </div>
                ${submission.notes ? `
                    <div class="history-item">
                        <div class="history-icon">💬</div>
                        <div class="history-content">
                            <div class="history-title">Internal Notes</div>
                            <div class="history-meta">${submission.notes}</div>
                        </div>
                    </div>
                ` : ''}
            </div>
        </div>

        <div class="modal-actions">
            <button class="btn btn--secondary" onclick="closeModal()">Close</button>
            <button class="btn btn--secondary" onclick="contactCompany(${submission.id})">Send Email</button>
            <button class="btn btn--primary" onclick="window.location.href='company-profile.html?id=${submission.id}'">View Full Profile</button>
        </div>
    `;

    document.getElementById('submissionModal').style.display = 'flex';
}

// Close modal
function closeModal() {
    document.getElementById('submissionModal').style.display = 'none';
}

// Contact company
function contactCompany(id) {
    const submission = submissionsData.find(s => s.id === id);
    if (!submission) return;

    const subject = encodeURIComponent(`Re: Your NZTC Assessment Submission`);
    const body = encodeURIComponent(`Dear ${submission.contact.name},\n\nThank you for submitting your assessment on the NZTC Platform...`);
    window.location.href = `mailto:${submission.contact.email}?subject=${subject}&body=${body}`;
}

// Filter submissions
function filterSubmissions() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const sectorFilter = document.getElementById('sectorFilter').value;
    const timeFilter = document.getElementById('timeFilter').value;
    const statusFilter = document.getElementById('statusFilter').value;

    filteredData = submissionsData.filter(submission => {
        // Search filter
        const matchesSearch = searchTerm === '' || 
            submission.company.toLowerCase().includes(searchTerm) ||
            submission.sector.toLowerCase().includes(searchTerm) ||
            submission.contact.name.toLowerCase().includes(searchTerm) ||
            submission.contact.email.toLowerCase().includes(searchTerm);

        // Sector filter
        const matchesSector = sectorFilter === '' || submission.sector === sectorFilter;

        // Status filter
        const matchesStatus = statusFilter === 'all' || submission.status === statusFilter;

        // Time filter
        let matchesTime = true;
        if (timeFilter !== 'all') {
            const submittedDate = new Date(submission.submittedDate);
            const now = new Date();
            const daysDiff = Math.floor((now - submittedDate) / (1000 * 60 * 60 * 24));

            if (timeFilter === 'week') matchesTime = daysDiff <= 7;
            else if (timeFilter === 'month') matchesTime = daysDiff <= 30;
            else if (timeFilter === 'quarter') matchesTime = daysDiff <= 90;
        }

        return matchesSearch && matchesSector && matchesStatus && matchesTime;
    });

    currentPage = 1;
    renderTable();
}

// Sort table
function sortTable(column) {
    if (currentSort.column === column) {
        currentSort.ascending = !currentSort.ascending;
    } else {
        currentSort.column = column;
        currentSort.ascending = true;
    }

    filteredData.sort((a, b) => {
        let aVal, bVal;

        switch(column) {
            case 'company':
                aVal = a.company;
                bVal = b.company;
                break;
            case 'sector':
                aVal = a.sector;
                bVal = b.sector;
                break;
            case 'submitted':
                aVal = new Date(a.submittedDate);
                bVal = new Date(b.submittedDate);
                break;
            case 'emissions':
                aVal = a.emissions;
                bVal = b.emissions;
                break;
            default:
                return 0;
        }

        if (aVal < bVal) return currentSort.ascending ? -1 : 1;
        if (aVal > bVal) return currentSort.ascending ? 1 : -1;
        return 0;
    });

    renderTable();
}

// Pagination
function updatePagination() {
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const start = (currentPage - 1) * itemsPerPage + 1;
    const end = Math.min(currentPage * itemsPerPage, filteredData.length);

    document.getElementById('showingStart').textContent = start;
    document.getElementById('showingEnd').textContent = end;
    document.getElementById('totalResults').textContent = filteredData.length;

    // Update buttons
    document.getElementById('prevBtn').disabled = currentPage === 1;
    document.getElementById('nextBtn').disabled = currentPage === totalPages;

    // Update page numbers
    const paginationNumbers = document.getElementById('paginationNumbers');
    paginationNumbers.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
        if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
            const pageBtn = document.createElement('button');
            pageBtn.className = 'pagination-number' + (i === currentPage ? ' active' : '');
            pageBtn.textContent = i;
            pageBtn.onclick = () => goToPage(i);
            paginationNumbers.appendChild(pageBtn);
        } else if (i === currentPage - 2 || i === currentPage + 2) {
            const dots = document.createElement('span');
            dots.className = 'pagination-dots';
            dots.textContent = '...';
            paginationNumbers.appendChild(dots);
        }
    }
}

function nextPage() {
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        renderTable();
    }
}

function previousPage() {
    if (currentPage > 1) {
        currentPage--;
        renderTable();
    }
}

function goToPage(page) {
    currentPage = page;
    renderTable();
}

// Export submissions
function exportSubmissions() {
    let csv = 'Company,Sector,Submitted By,Submission Date,Emissions (tCO2),Facilities,Target Year,Budget,Status,Key Challenge\n';

    filteredData.forEach(s => {
        csv += `"${s.company}","${s.sector}","${s.submittedBy}","${s.submittedDate}",${s.emissions},${s.facilityCount},${s.targetYear},"${s.budget}","${s.status}","${s.keyChallenge}"\n`;
    });

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'nztc-submissions-' + new Date().toISOString().split('T')[0] + '.csv';
    a.click();
}

// Refresh submissions
function refreshSubmissions() {
    // In production, this would fetch fresh data from API
    console.log('Refreshing submissions...');
    renderTable();
    alert('Submissions refreshed successfully');
}

// Utility functions
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}

function getTimeAgo(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const daysDiff = Math.floor((now - date) / (1000 * 60 * 60 * 24));

    if (daysDiff === 0) return 'Today';
    if (daysDiff === 1) return 'Yesterday';
    if (daysDiff < 7) return `${daysDiff} days ago`;
    if (daysDiff < 30) return `${Math.floor(daysDiff / 7)} weeks ago`;
    return `${Math.floor(daysDiff / 30)} months ago`;
}

function formatNumber(num) {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(0) + 'K';
    return num.toString();
}

function formatStatus(status) {
    return status.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

function truncateText(text, maxLength) {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('submissionModal');
    if (event.target === modal) {
        closeModal();
    }
}
