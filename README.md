# LinkedIn Job Highlighter

**LinkedIn Job Highlighter** is a Chrome extension designed to improve your job-hunting experience on LinkedIn. It highlights job cards based on their statuses, making it easier to keep track of which jobs you've viewed, saved, or applied to.

---

## 🚀 Features
- **🔴 Applied Jobs:** Highlights jobs you've applied to with a red background.
- **🟢 Saved Jobs:** Highlights saved jobs with a green background.
- **🔵 Viewed Jobs:** Highlights viewed jobs with a blue background.
- Automatically updates as you scroll through LinkedIn's dynamic job listings.
- Lightweight and easy to use!

---

## 🛠️ Installation

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/your-username/linkedin-job-highlighter.git
   ```
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer mode** in the top-right corner.
4. Click **Load unpacked** and select the folder where this repository is located.
5. You're all set! Open LinkedIn and see the magic. ✨

---

## ✨ How It Works

1. The script runs on LinkedIn job listing pages (`https://www.linkedin.com/jobs/`).
2. It scans job cards for specific keywords like `Applied`, `Saved`, or `Viewed`.
3. Based on the status:
   - **Applied jobs** are highlighted in **red**.
   - **Saved jobs** are highlighted in **green**.
   - **Viewed jobs** are highlighted in **blue**.
4. A `MutationObserver` ensures the script handles dynamically loaded content as you scroll.

---

## 🖼️ Screenshots

<img width="217" alt="Screenshot 2025-01-16 160238" src="https://github.com/user-attachments/assets/2b6ec26f-1427-4583-814a-ffe736530c72" />

*Applied (Red), Saved (Green), and Viewed (Blue) job highlights.*
