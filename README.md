Kloudspot Dashboard Assignment

## Project Overview
This is a **dashboard web application** built with **React (Vite)** for displaying crowd statistics, occupancy, and demographics. It includes authentication, protected routes, API integration, and a responsive UI with charts and tables.

## Live Deployment
- **Vercel URL:** [https://kloudspot-dashboard-phi.vercel.app](https://kloudspot-dashboard-phi.vercel.app)

## GitHub Repository
- **Repository:** [https://github.com/MahakJadhwani/kloudspot-dashboard](https://github.com/MahakJadhwani/kloudspot-dashboard)

## Tech Stack
- **Frontend:** React (Vite)  
- **Routing:** React Router DOM  
- **Styling:** Tailwind CSS  
- **Charts:** Recharts  
- **API Calls:** Axios  
- **Build Tool:** Vite  

## Features
1. **Authentication**
   - Login page with validation
   - API integration
   - Protected routes
2. **Dashboard**
   - Stats cards (occupancy, demographics)
   - Charts using Recharts
   - API integration with loader & error handling
3. **Crowd Entries**
   - Table view with pagination
   - API integration with loader & error messages
4. **Final Build**
   - Production-ready Vite build
   - Deployment on Vercel
   - Client-side routing fully functional

##  Project Structure

src/
├── components/
│ ├── Button.jsx
│ ├── Loader.jsx
│ ├── ErrorMessage.jsx
│ └── ProtectedRoute.jsx
├── pages/
│ ├── Login.jsx
│ ├── Dashboard.jsx
│ └── CrowdEntries.jsx
├── services/
│ ├── authService.js
│ ├── dashboardService.js
│ └── crowdEntriesService.js
├── App.jsx
├── main.jsx
└── index.css

## Setup & Run Locally

1. Clone the repo:
git clone https://github.com/MahakJadhwani/kloudspot-dashboard.git
cd kloudspot-dashboard
Install dependencies:
npm install
Run in development mode:
npm run dev
Build for production:
npm run build
Production-ready files are in the dist folder.

Notes
React Router client-side routing is configured with vercel.json for proper refresh handling.
Loader and error components are reused across API calls.
The project is fully responsive and tested for basic CRUD and API functionality.

Submission Links
GitHub: https://github.com/MahakJadhwani/kloudspot-dashboard
Live Vercel App: https://kloudspot-dashboard-phi.vercel.app
