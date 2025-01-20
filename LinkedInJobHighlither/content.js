// Function to apply background colors based on job status
const highlightJobs = () => {
    const jobCards = document.querySelectorAll(".job-card-container");

    jobCards.forEach((jobCard) => {
        const statusElement = jobCard.querySelector(
            ".job-card-container__footer-item.job-card-container__footer-job-state");

        if (statusElement) {
            const statusText = statusElement.textContent.trim(); // Get the status text and trim extra spaces

            // Apply background color based on the job status
            if (statusText === "Applied") {
                jobCard.style.backgroundColor = "#E57373"; // Applied: Red
            } else if (statusText === "Saved") {
                jobCard.style.backgroundColor = "#81C784"; // Saved: Green
            } else if (statusText === "Viewed") {
                jobCard.style.backgroundColor = "#2196F3"; // Viewed: Blue
            }
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
