const experienceData = [
  {
    id: 1,
    role: "Data Scientist",
    company: "Independent Consultant",
    location: "Remote",
    date: "June, 2023 - October, 2025",
    startDate: "2023-06",
    endDate: "2025-10",
    description: "Built web scrapers for the Bovada baseball betting platform and New Haven real estate data, where I preprocessed the extracted data and built dashboards to help inform betting strategies and property market analysis. <br> Also implemented an AI-powered intelligent chatbot fully integrated into Odoo ERP.",
    skills: ["Python", "SQL", "Odoo", "Web Scraping", "Power BI", "Tableau", "Docker", "GIT", "NLP", "Embeddings", "APIs"],
    link: null
  },
  {
    id: 2,
    role: "Data Scientist",
    company: "Dream Junk Studios",
    location: "United States",
    date: "November, 2023 - September, 2024",
    startDate: "2023-11",
    endDate: "2024-09",
    description: "Designed and deployed intelligent systems fully managed in AWS. <br> Voice cloning for a virtual academy professor. <br> Real-time translation agents for in-game communication. <br> Probabilistic models to generate dynamic game characters.",
    skills: ["Python", "AWS", "SQL", "Pytorch", "Tensorflow", "Bert", "Bark", "GIT", "Docker", "NLP", "Embeddings", "Grafana", "Excel", "MLOps", "APIs"],
    link: "https://www.linkedin.com/company/dream-junk-studios/posts/?feedView=all"
  },
  {
    id: 3,
    role: "Data Scientist & ML Engineer",
    company: "CUX",
    location: "Argentina",
    date: "October, 2024 - November, 2025",
    startDate: "2024-10",
    endDate: "2025-11",
    description: "Initiated and implemented predictive models to analyze user emotions, topics, and sentiment, uncovering actionable psychological behavioral patterns. <br> Driving the transformation from static Excel reports to interactive dashboards, enabling real-time insights and informed decision-making. <br> Designed and developed the complete ETL pipeline and AWS infrastructure powering the dashboards, ensuring automated, real-time data updates and system reliability.",
    skills: ["Python", "AWS", "SQL", "NoSQL", "Azure", "Power BI", "Docker", "Embeddings", "GIT", "Cloudflare", "Excel", "Operaciones", "Salesforce", "NLP", "MLOps", "APIs"],
    link: "https://cux.ai/"
  },
  {
    id: 4,
    role: "Data Scientist & ML Engineer (Short-term Project)",
    company: "Solvo Global",
    location: "Spain",
    date: "November, 2025 - January, 2026",
    startDate: "2025-11",
    endDate: "2026-01",
    client: "Eleva AI",
    description: "Short-term project. Designed and deployed a comprehensive observability stack using Grafana, Loki, Tempo, and Mimir, enabling real-time monitoring and minimizing system downtime. <br> Engineered scalable TypeScript API endpoints and backend services on GCP, ensuring seamless data integration and high-performance delivery. <br> Database administration and implemented synthetic data seeding pipelines, ensuring data integrity across the platform.",
    skills: ["Python", "SQL", "Grafana", "Loki", "Tempo", "Mimir", "DevOps", "MLOps", "Nest JS", "Prisma", "GCP", "Docker", "APIs"],
    link: "https://solvoglobal.com"
  },
  {
    id: 5,
    role: "Data Scientist",
    company: "Tekne",
    location: "Argentina",
    date: "February, 2026 - March, 2026",
    startDate: "2026-02",
    endDate: "2026-03",
    description: "Built an AI chatbot that processes invoices via OCR, stores structured data in a database, and syncs it with a management system, reducing manual data entry. <br> Developed an automated ETL bot for a financial services company, moving cleaned data to Snowflake from APEX to enable scalable analytics and centralized reporting. <br> Designed Power BI dashboards for financial performance and risk tracking, improving KPI visibility and data-driven decision-making.",
    skills: ["Python", "Airflow", "Snowflake", "LLM", "LangChain", "SQL", "AWS", "Azure", "GCP", "Power BI", "Docker"],
    link: "https://teknedatalabs.com/"
  },
  {
    id: 6,
    role: "Data & AI Engineer",
    company: "Lebane",
    location: "Argentina",
    date: "March, 2026 - Present",
    startDate: "2026-03",
    endDate: "present",
    description: "",
    skills: [],
    link: "https://www.lebane.app/"
  }
];

// Get current date as "YYYY-MM" for "present" entries
function getCurrentDate() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
}

// Resolve endDate: if "present", use current date
function resolveEndDate(endDate) {
  return endDate === "present" ? getCurrentDate() : endDate;
}

// Richer color palette with accent highlights
const barColors = [
  { solid: "#4a9e8e", gradient: "linear-gradient(90deg, #4a9e8e, #69b3a2, #82c4b5)", glow: "rgba(105, 179, 162, 0.35)" },
  { solid: "#0d3f5e", gradient: "linear-gradient(90deg, #0d3f5e, #1a6b9a, #3a8dbe)", glow: "rgba(26, 107, 154, 0.35)" },
  { solid: "#4a7a49", gradient: "linear-gradient(90deg, #4a7a49, #6dae6d, #8ec78e)", glow: "rgba(109, 174, 109, 0.35)" },
  { solid: "#6a4da0", gradient: "linear-gradient(90deg, #6a4da0, #8b6ec0, #a98fd6)", glow: "rgba(138, 110, 192, 0.35)" },
  { solid: "#c0693a", gradient: "linear-gradient(90deg, #c0693a, #e0874e, #f0a06a)", glow: "rgba(224, 135, 78, 0.35)" },
  { solid: "#b03a5b", gradient: "linear-gradient(90deg, #b03a5b, #d44e72, #e8728f)", glow: "rgba(212, 78, 114, 0.35)" }
];

// Format duration as "X yr Y mo" or "Y mo" (months are inclusive, +1)
function formatDuration(startDate, endDate) {
  const months = monthDiff(startDate, endDate) + 1; // inclusive
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  if (years === 0) {
    return `${remainingMonths} mo`;
  } else if (remainingMonths === 0) {
    return years === 1 ? `${years} yr` : `${years} yrs`;
  } else {
    const yrLabel = years === 1 ? "yr" : "yrs";
    return `${years} ${yrLabel} ${remainingMonths} mo`;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const ganttContainer = document.getElementById("gantt-chart");
  if (!ganttContainer) {
    console.error("Gantt chart container not found!");
    return;
  }

  // Calculate global time range (resolve 'present' to current date)
  const allDates = experienceData.flatMap(d => [d.startDate, resolveEndDate(d.endDate)]);
  const minDate = allDates.reduce((a, b) => a < b ? a : b);
  const maxDate = allDates.reduce((a, b) => a > b ? a : b);

  // Pad to Jan of start year and Dec of end year for balanced axis
  const startYear = parseInt(minDate.split("-")[0]);
  const endYear = parseInt(maxDate.split("-")[0]);
  const globalStart = startYear + "-01";
  const globalEnd = endYear + "-12";
  const totalMonths = monthDiff(globalStart, globalEnd);

  // Build the Gantt
  const ganttWrapper = document.createElement("div");
  ganttWrapper.classList.add("gantt-wrapper");

  // Year grid lines (vertical)
  const gridContainer = document.createElement("div");
  gridContainer.classList.add("gantt-grid-lines");
  for (let y = startYear; y <= endYear + 1; y++) {
    const offset = monthDiff(globalStart, y + "-01");
    if (offset >= 0 && offset <= totalMonths) {
      const line = document.createElement("div");
      line.classList.add("gantt-grid-line");
      line.style.left = (offset / totalMonths) * 100 + "%";
      gridContainer.appendChild(line);
    }
  }

  // Rows area (contains grid + rows)
  const rowsArea = document.createElement("div");
  rowsArea.classList.add("gantt-rows-area");
  rowsArea.appendChild(gridContainer);

  // Rows (newest to oldest by reversing a copy of the array)
  [...experienceData].reverse().forEach((item, index) => {
    const row = document.createElement("div");
    row.classList.add("gantt-row");
    row.style.animationDelay = (index * 0.1) + "s";

    // Label (left side)
    const label = document.createElement("div");
    label.classList.add("gantt-label");
    
    // Assign custom color variables for highlight interactions
    const colors = barColors[index % barColors.length];
    row.style.setProperty("--bar-color", colors.solid);

    const companyName = document.createElement("span");
    companyName.classList.add("gantt-company");
    companyName.textContent = item.company;

    const roleName = document.createElement("span");
    roleName.classList.add("gantt-role");
    roleName.textContent = item.role;

    label.appendChild(companyName);
    label.appendChild(roleName);

    // Bar track (right side)
    const track = document.createElement("div");
    track.classList.add("gantt-track");

    // Bar
    const bar = document.createElement("div");
    bar.classList.add("gantt-bar");
    bar.style.animationDelay = (index * 0.12 + 0.2) + "s";

    const resolvedEnd = resolveEndDate(item.endDate);
    const startOffset = monthDiff(globalStart, item.startDate);
    const duration = monthDiff(item.startDate, resolvedEnd) + 1; // inclusive months
    const leftPercent = (startOffset / totalMonths) * 100;
    const widthPercent = (duration / totalMonths) * 100;

    bar.style.left = leftPercent + "%";
    bar.style.width = Math.max(widthPercent, 5) + "%";

    bar.style.background = colors.gradient;
    bar.style.setProperty("--bar-glow", colors.glow);

    // Duration text inside bar
    const barDuration = document.createElement("span");
    barDuration.classList.add("gantt-bar-text");
    barDuration.textContent = formatDuration(item.startDate, resolvedEnd);
    bar.appendChild(barDuration);

    // Click handler
    bar.addEventListener("click", () => {
      openModal(item.id);
    });

    // Tooltip
    bar.setAttribute("title", `${item.company} · ${item.date}`);

    track.appendChild(bar);

    row.appendChild(label);
    row.appendChild(track);
    rowsArea.appendChild(row);
  });

  ganttWrapper.appendChild(rowsArea);

  // Time axis
  const axis = document.createElement("div");
  axis.classList.add("gantt-axis");

  // Axis label spacer (same width as labels)
  const axisSpacer = document.createElement("div");
  axisSpacer.classList.add("gantt-label", "gantt-axis-spacer");
  axis.appendChild(axisSpacer);

  const axisTrack = document.createElement("div");
  axisTrack.classList.add("gantt-axis-track");

  // Generate year markers
  const axisStartYear = parseInt(globalStart.split("-")[0]);
  const axisEndYear = parseInt(globalEnd.split("-")[0]);

  for (let y = axisStartYear; y <= axisEndYear + 1; y++) {
    const yearDate = y + "-01";
    const offset = monthDiff(globalStart, yearDate);
    if (offset >= 0 && offset <= totalMonths) {
      const marker = document.createElement("div");
      marker.classList.add("gantt-year-marker");
      marker.style.left = (offset / totalMonths) * 100 + "%";
      marker.textContent = y;
      axisTrack.appendChild(marker);
    }
  }

  axis.appendChild(axisTrack);
  ganttWrapper.appendChild(axis);

  ganttContainer.appendChild(ganttWrapper);

  // Modal Logic (keep existing)
  const modal = document.getElementById("timelineModal");
  const modalBody = document.getElementById("timeline-modal-body");
  const closeBtn = document.querySelector(".timeline-close");

  function openModal(id) {
    const data = experienceData.find(item => item.id === id);
    if (!data) return;
    renderModalContent(data);
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
  }

  function renderModalContent(data) {
    let skillsHtml = data.skills.map(skill => `<span class="skill-badge">${skill}</span>`).join(" ");

    let companyHtml = data.company;
    if (data.link) {
      companyHtml = `<a href="${data.link}" target="_blank" style="color: inherit; text-decoration: none;">${data.company}</a>`;
    }

    modalBody.innerHTML = `
        <div class="detail-header">
            <h3>${data.role} @ <span class="text-primary">${companyHtml}</span></h3>
            <span class="detail-date"><i class="fas fa-calendar-alt"></i> ${data.date}</span>
            <span class="detail-location"><i class="fas fa-map-marker-alt"></i> ${data.location}</span>
        </div>
        ${data.client ? `<p class="detail-client"><strong>Client:</strong> ${data.client}</p>` : ""}
        <div class="detail-body">
            <p>${data.description}</p>
        </div>
        <div class="detail-skills">
            ${skillsHtml}
        </div>
    `;
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    });
  }

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    }
  });
});

// Helper: months between two "YYYY-MM" strings
function monthDiff(a, b) {
  const [y1, m1] = a.split("-").map(Number);
  const [y2, m2] = b.split("-").map(Number);
  return (y2 - y1) * 12 + (m2 - m1);
}
