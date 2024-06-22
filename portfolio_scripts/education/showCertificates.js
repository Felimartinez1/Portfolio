// showCertificates.js

document.addEventListener("DOMContentLoaded", function() {
  const educationData = [
    {
      title: "Statistics Course",
      imageUrl: "Images/Statistics.png"
    },
    {
      title: "Data Science Professional Certificate",
      imageUrl: "Images/DataScienceProfesional.png"
    },
    {
      title: "Data Visualization with Tableau Specialization",
      imageUrl: "Images/viz.png"
    },
    {
      title: "Machine Learning Specialization",
      imageUrl: "Images/MachineLearning2.png"
    },
    {
      title: "Deep Learning Specialization",
      imageUrl: "Images/deeplearningspecialization.png"
    },
    {
      title: "Practical Data Science on AWS Cloud Specialization",
      imageUrl: "Images/AWS.png"
    },
  ];

  // Obtén el elemento de la línea de tiempo
  const educationTimeline = document.getElementById("education-timeline");

  if (educationTimeline) {
    // Función para crear un punto interactivo sin el año
    function createInteractivePoint(education) {
      const interactivePoint = document.createElement("div");
      interactivePoint.className = "timeline-point";
      interactivePoint.innerHTML = `
        <div class="point-content">
          <img src="${education.imageUrl}" alt="${education.title}" class="certificate-image">
        </div>
        <div class="point-title">${education.title}</div>
      `;

      // Agregar evento de hover para mostrar la imagen y la línea vertical
      interactivePoint.addEventListener("mouseover", () => {
        interactivePoint.classList.add("active");
      });

      interactivePoint.addEventListener("mouseout", () => {
        interactivePoint.classList.remove("active");
      });

      return interactivePoint;
    }

    // Genera y agrega los puntos interactivos a la línea de tiempo
    educationData.forEach((education) => {
      educationTimeline.appendChild(createInteractivePoint(education));
    });
  } else {
    console.error("Element with ID 'education-timeline' not found.");
  }
});
