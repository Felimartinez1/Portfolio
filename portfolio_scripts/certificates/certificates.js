// Certifications grid + certificate viewer.
// Multi-course programs first, then single courses from newest to oldest.
// Heights are tuned per wordmark so they read at the same visual size
const issuerLogos = {
  deeplearningai: { src: "Images/logos/deeplearningai.webp", height: 19 },
  stanford: { src: "Images/logos/stanford.svg", height: 18 },
  ibm: { src: "Images/logos/ibm.svg", height: 20 },
  aws: { src: "Images/logos/aws.svg", height: 26 },
  duke: { src: "Images/logos/duke.svg", height: 28 },
  ucdavis: { src: "Images/logos/ucdavis.svg", height: 15 }
};

const certificatesData = [
  {
    title: "Deep Learning Specialization",
    logos: ["deeplearningai"],
    issuer: "DeepLearning.AI",
    date: "May 2023",
    type: "Specialization · 5 courses",
    program: true,
    image: "Images/certificates/deeplearningai-deep-learning.webp",
    verify: "https://coursera.org/verify/specialization/LNXDFYKP3EK9"
  },
  {
    title: "Machine Learning Specialization",
    logos: ["deeplearningai", "stanford"],
    issuer: "DeepLearning.AI & Stanford University",
    date: "Nov 2023",
    type: "Specialization · 3 courses",
    program: true,
    image: "Images/certificates/deeplearningai-machine-learning.webp",
    verify: "https://coursera.org/verify/specialization/WUKDY75T7H2B"
  },
  {
    title: "IBM Data Science Professional Certificate",
    logos: ["ibm"],
    issuer: "IBM",
    date: "Mar 2023",
    type: "Professional Certificate · 10 courses",
    program: true,
    image: "Images/certificates/ibm-data-science.webp",
    verify: "https://coursera.org/verify/professional-cert/CBRKNBMG2EW8"
  },
  {
    title: "Machine Learning in Production",
    logos: ["deeplearningai"],
    issuer: "DeepLearning.AI",
    date: "Dec 2025",
    type: "Course",
    image: "Images/certificates/deeplearningai-ml-in-production.webp",
    verify: "https://coursera.org/verify/KCC4T49I0UZS"
  },
  {
    title: "Containerized Applications on AWS",
    logos: ["aws"],
    issuer: "Amazon Web Services",
    date: "May 2025",
    type: "Course",
    image: "Images/certificates/aws-containerized-applications.webp",
    verify: "https://coursera.org/verify/C9DJK0MQQV35"
  },
  {
    title: "Rust for Large Language Model Operations (LLMOps)",
    logos: ["duke"],
    issuer: "Duke University",
    date: "Sep 2024",
    type: "Course",
    image: "Images/certificates/duke-rust-llmops.webp",
    verify: "https://coursera.org/verify/XEV0IQASMHUG"
  },
  {
    title: "Build, Train, and Deploy ML Pipelines using BERT",
    logos: ["deeplearningai", "aws"],
    issuer: "DeepLearning.AI & Amazon Web Services",
    date: "Jun 2023",
    type: "Course",
    image: "Images/certificates/deeplearningai-aws-bert-pipelines.webp",
    verify: "https://coursera.org/verify/QK3UDFE3R2R8"
  },
  {
    title: "Creating Dashboards and Storytelling with Tableau",
    logos: ["ucdavis"],
    issuer: "University of California, Davis",
    date: "Jul 2023",
    type: "Course",
    image: "Images/certificates/ucdavis-tableau-dashboards.webp",
    verify: "https://coursera.org/verify/NNA3P9MWGQZ8"
  },
  {
    title: "Introduction to Statistics",
    logos: ["stanford"],
    issuer: "Stanford University",
    date: "Oct 2022",
    type: "Course",
    image: "Images/certificates/stanford-intro-statistics.webp",
    verify: "https://coursera.org/verify/G88X2KALQKDW"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("certificates-grid");
  const modal = document.getElementById("certificateModal");
  if (!grid) return;

  grid.innerHTML = certificatesData.map((cert, index) => `
    <div class="col-sm-6 col-lg-4 reveal" style="--reveal-delay: ${(index % 3) * 0.08}s">
      <article class="cert-card${cert.program ? " is-program" : ""}">
        <div class="cert-logos">
          ${cert.logos.map(key => `<span class="cert-logo"><img src="${issuerLogos[key].src}" alt="" style="height: ${issuerLogos[key].height}px" loading="lazy"></span>`).join("")}
        </div>
        <h3 class="cert-title">${cert.title}</h3>
        <p class="cert-issuer">${cert.issuer} · ${cert.date}</p>
        <span class="tag cert-type">${cert.type}</span>
        <div class="cert-actions">
          <button type="button" class="pill-link" data-cert="${index}">
            <i class="fa-regular fa-eye" aria-hidden="true"></i> View
          </button>
          <a class="pill-link" href="${cert.verify}" target="_blank" rel="noopener">
            Verify <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
          </a>
        </div>
      </article>
    </div>
  `).join("");

  document.querySelectorAll('[data-stat="certifications"]').forEach((el) => {
    el.textContent = certificatesData.length;
  });

  if (!modal) return;
  const image = modal.querySelector("img");
  const title = modal.querySelector("h3");
  const meta = modal.querySelector(".cert-box-caption p");
  const verify = modal.querySelector(".cert-box-caption a");

  grid.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-cert]");
    if (!trigger) return;
    const cert = certificatesData[Number(trigger.dataset.cert)];
    image.src = cert.image;
    image.alt = `${cert.title} certificate`;
    title.textContent = cert.title;
    meta.textContent = `${cert.issuer} · ${cert.date}`;
    verify.href = cert.verify;
    Modal.open(modal, trigger);
  });
});
