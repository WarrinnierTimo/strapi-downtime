# **Firebase Scheduled Function with Alerts**

This repository contains a Firebase Cloud Function that periodically checks the health status of a Strapi API and sends an alert via email if the API is down.

---

## **Features**
- Scheduled health checks every 5 minutes using Firebase Scheduler.
- Logs health check responses.
- Sends alerts via email when the Strapi API is down.

---

## **Project Structure**
```bash
.
├── functions/
│   ├── index.js           # Main Firebase function entry point
│   ├── alert.js           # Alert function to send email notifications
│   ├── package.json       # Node.js dependencies
│   ├── .eslintrc.json     # ESLint configuration (optional)
│   ├── firebase.json      # Firebase project configuration
│   └── .gitignore         # Files to ignore in version control
└── .github/
    └── workflows/
        └── firebase-deploy.yml # GitHub Actions workflow for CI/CD
```
## **Setup Instructions**
1. Clone the repo
```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name/functions
```

2. Install dependencies
```bash
Code kopiëren
npm install
```

3. Deploy the functions to Firebase
Ensure you have the Firebase CLI installed and configured:

```bash
Code kopiëren
firebase deploy --only functions
```
