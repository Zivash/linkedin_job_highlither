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

## 📂 File Structure

```
linkedin-job-highlighter/
├── manifest.json         # Chrome Extension configuration
├── scripts/
│   └── content.js        # Main script that highlights jobs
├── images/
│   ├── icon-16.png       # 16x16 icon
│   ├── icon-32.png       # 32x32 icon
│   ├── icon-48.png       # 48x48 icon
│   └── icon-128.png      # 128x128 icon
└── README.md             # This file
```

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

![Example 1](https://via.placeholder.com/600x400)  
*Applied (Red), Saved (Green), and Viewed (Blue) job highlights.*
