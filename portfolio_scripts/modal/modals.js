document.addEventListener("DOMContentLoaded", function() {
    // Get modal elements
    const analyticsModal = document.getElementById("analyticsVideoModal");
    // REMOVED: const ecommerceModal = document.getElementById("ecommerceModal");
    const messiModal = document.getElementById("messiVideoModal");
    const phonemixModal = document.getElementById("phonemixModal");
    const apartmentsCABAModal = document.getElementById("apartmentsCABAModal");
    const personalFinanceModal = document.getElementById("personalFinanceModal");

    // Get all close buttons
    const closeButtons = document.getElementsByClassName("close");

    // --- Get trigger elements ---

    // Analytics (if it exists)
    const analyticsButton = document.getElementById("analyticsButton");
    if (analyticsButton) {
        analyticsButton.addEventListener("click", function(event) {
            event.preventDefault();
            analyticsModal.style.display = "block";
            document.body.style.overflow = "hidden";
        });
    }

    // REMOVED: E-commerce trigger logic

    // Messi
    const messiProject = document.getElementById("messiProject");
    if (messiProject) {
        messiProject.addEventListener("click", function(event) {
            event.preventDefault();
            messiModal.classList.add("show");
            document.body.style.overflow = "hidden";
        });
    }
    
    // Phonemix
    const phonemixProject = document.getElementById("phonemixProject");
    if (phonemixProject) {
        phonemixProject.addEventListener("click", function(event) {
            event.preventDefault();
            phonemixModal.classList.add("show");
            document.body.style.overflow = "hidden";
        });
    }

    // Apartments CABA
    const apartmentsCABAProject = document.getElementById("apartmentsCABAProject");
    if (apartmentsCABAProject) {
        apartmentsCABAProject.addEventListener("click", function(event) {
            event.preventDefault();
            apartmentsCABAModal.classList.add("show");
            document.body.style.overflow = "hidden";
        });
    }

    // Personal Finance listeners
    const personalFinanceProject = document.getElementById("personalFinanceProject");
    const personalFinanceDashboardButton = document.getElementById("personalFinanceDashboardButton"); 

    function openPersonalFinanceModal(event) {
        event.preventDefault();
        if (personalFinanceModal) {
            personalFinanceModal.classList.add("show");
            document.body.style.overflow = "hidden";
        }
    }

    if (personalFinanceProject) {
        personalFinanceProject.addEventListener("click", openPersonalFinanceModal);
    }
    if (personalFinanceDashboardButton) {
        personalFinanceDashboardButton.addEventListener("click", openPersonalFinanceModal);
    }

    // Function to close any active modal
    function closeModal() {
        if (analyticsModal) {
            analyticsModal.style.display = "none";
        }
        // REMOVED: ecommerceModal check
        if (messiModal) {
            messiModal.classList.remove("show");
        }
        if (phonemixModal) {
            phonemixModal.classList.remove("show");
        }
        if (apartmentsCABAModal) {
            apartmentsCABAModal.classList.remove("show");
        }
        if (personalFinanceModal) {
            personalFinanceModal.classList.remove("show");
        }

        document.body.style.overflow = "auto";
        
        const iframes = document.querySelectorAll("iframe");
        iframes.forEach(function(iframe) {
            iframe.src = iframe.src;
        });
    }

    // Attach close event to all close buttons
    for (let i = 0; i < closeButtons.length; i++) {
        closeButtons[i].addEventListener("click", closeModal);
    }

    // Close modal when clicking outside of it
    window.onclick = function(event) {
        // REMOVED: ecommerceModal check from the condition
        if (event.target == analyticsModal || event.target == messiModal || event.target == phonemixModal || event.target == apartmentsCABAModal || event.target == personalFinanceModal) {
            closeModal();
        }
    };
});