// Function to apply background colors based on job status
const highlightJobs = () => {
    const jobCards = document.querySelectorAll(".job-card-container");

    jobCards.forEach((jobCard) => {
        const textContent = jobCard.textContent || ""; // Get the text content of the job card

        // Apply background color based on keywords in the job card
        if (textContent.includes("Applied")) {
            jobCard.style.backgroundColor = "#E57373"; // Applied: Red
        } else if (textContent.includes("Saved")) {
            jobCard.style.backgroundColor = "#81C784"; // Saved: Green
        } else if (textContent.includes("Viewed")) {
            jobCard.style.backgroundColor = "#2196F3"; // Viewed: Blue
        }
    });
};

highlightJobs();

const observer = new MutationObserver(() => {
    highlightJobs(); // Re-run the function whenever the DOM changes
});

observer.observe(document.body, {
    childList: true,
    subtree: true, // Include changes in all nested elements
});
