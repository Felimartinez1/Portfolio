const experienceData = [
  {
    id: 1,
    role: "Data Scientist",
    company: "Independent Consultant",
    location: "Remote",
    date: "June, 2023 - October, 2025",
    description: "Built web scrapers for the Bovada baseball betting platform and New Haven real estate data, where I preprocessed the extracted data and built dashboards to help inform betting strategies and property market analysis. <br> Also implemented an AI-powered intelligent chatbot fully integrated into Odoo ERP.",
    skills: ["Python", "SQL", "Odoo", "Web Scraping", "Power BI", "Tableau", "Docker", "GIT", "NLP", "Embeddings", "APIs"],
    year: "2023",
    link: null
  },
  {
    id: 2,
    role: "Data Scientist",
    company: "Dream Junk Studios",
    location: "United States",
    date: "November, 2023 - September, 2024",
    description: "Designed and deployed intelligent systems fully managed in AWS. <br> Voice cloning for a virtual academy professor. <br> Real-time translation agents for in-game communication. <br> Probabilistic models to generate dynamic game characters.",
    skills: ["Python", "AWS", "SQL", "Pytorch", "Tensorflow", "Bert", "Bark", "GIT", "Docker", "NLP", "Embeddings", "Grafana", "Excel", "MLOps", "APIs"],
    year: "2023",
    link: "https://www.linkedin.com/company/dream-junk-studios/posts/?feedView=all"
  },
  {
    id: 3,
    role: "Data Scientist & ML Engineer",
    company: "CUX",
    location: "Argentina",
    date: "October, 2024 - November, 2025",
    description: "Initiated and implemented predictive models to analyze user emotions, topics, and sentiment, uncovering actionable psychological behavioral patterns. <br> Driving the transformation from static Excel reports to interactive dashboards, enabling real-time insights and informed decision-making. <br> Designed and developed the complete ETL pipeline and AWS infrastructure powering the dashboards, ensuring automated, real-time data updates and system reliability.",
    skills: ["Python", "AWS", "SQL", "NoSQL", "Azure", "Power BI", "Docker", "Embeddings", "GIT", "Cloudflare", "Excel", "Operaciones", "Salesforce", "NLP", "MLOps", "APIs"],
    year: "2024",
    link: "https://cux.ai/"
  },
  {
    id: 4,
    role: "Personal Project",
    company: "InteliProp",
    location: "Argentina",
    date: "March, 2025 - Present",
    description: "Creation of AI-powered platform for Real Estate that combines CRM, automation, analytics, and AI models to optimize property management, dashboards, chatbots, and property valuation. <br> Designed and implemented the MLOps workflow to keep the property valuation model automatically retrained and updated every month, ensuring consistent performance and data freshness.",
    skills: ["Python", "SQL", "Web Scraping", "Computer Vision", "MLOps", "AWS", "GCP", "Docker", "Power BI", "Pytorch", "Tensorflow", "APIs"],
    year: "2025",
    link: "https://inteliprop.com"
  },
  {
    id: 5,
    role: "Senior Data Scientist",
    company: "Solvo Global",
    location: "Spain",
    date: "November, 2025 - December, 2025",
    client: "Eleva AI",
    description: "Designed and deployed a comprehensive observability stack using Grafana, Loki, Tempo, and Mimir, enabling real-time monitoring and minimizing system downtime. <br> Engineered scalable TypeScript API endpoints and backend services on GCP, ensuring seamless data integration and high-performance delivery. <br> Database administration and implemented synthetic data seeding pipelines, ensuring data integrity across the platform.",
    skills: ["Python", "SQL", "Grafana", "Loki", "Tempo", "Mimir", "DevOps", "MLOps", "Nest JS", "Prisma", "GCP", "Docker", "APIs"],
    year: "2025",
    link: "https://solvoglobal.com"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  console.log("Timeline script executing...");
  const timelineContainer = document.getElementById("timeline-nodes");
  const detailContainer = document.getElementById("timeline-details"); // This might be null now, which is fine

  if (!timelineContainer) {
    console.error("Timeline container not found!");
    return;
  }

  // Render nodes
  experienceData.forEach((item, index) => {
    const node = document.createElement("div");
    node.classList.add("timeline-node");
    node.setAttribute("data-id", item.id);

    // Position nodes evenly
    // We can use flexbox space-between in CSS, so we just append them.

    const yearLabel = document.createElement("span");
    yearLabel.classList.add("timeline-year-label");
    yearLabel.textContent = item.year;

    const companyLabel = document.createElement("span");
    companyLabel.classList.add("timeline-company-label");
    companyLabel.textContent = item.company;

    node.appendChild(yearLabel);
    node.appendChild(companyLabel); // Add company name below the dot

    // Event listener for nodes
    node.addEventListener("click", () => {
      setActiveNode(item.id);
      openModal(item.id);
    });

    timelineContainer.appendChild(node);
  });

  // Set initial active node (last one) - Visual only, don't open modal
  const lastId = experienceData[experienceData.length - 1].id;
  document.querySelectorAll(".timeline-node").forEach(node => {
    if (parseInt(node.getAttribute("data-id")) === lastId) {
      node.classList.add("active");
    }
  });

  function setActiveNode(id) {
    // Update nodes visual state
    document.querySelectorAll(".timeline-node").forEach(node => {
      node.classList.remove("active");
      if (parseInt(node.getAttribute("data-id")) === id) {
        node.classList.add("active");
      }
    });
  }

  // Modal Logic
  const modal = document.getElementById("timelineModal");
  const modalBody = document.getElementById("timeline-modal-body");
  const closeBtn = document.querySelector(".timeline-close");

  function openModal(id) {
    const data = experienceData.find(item => item.id === id);
    if (!data) return;

    renderModalContent(data);
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // Prevent background scrolling
  }

  function renderModalContent(data) {
    let skillsHtml = data.skills.map(skill => `<span class="skill-badge">${skill}</span>`).join(" ");

    // Logic for company link
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

  // Close Modal Logic
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

  // Removed old renderDetails function
});
