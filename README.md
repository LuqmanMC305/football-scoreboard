# ⚽ Football Live Scoreboard

A lightweight, customisable **live football scoreboard for OBS** built
with web technologies.

The project aims to provide a dynamic scoreboard overlay that can
retrieve live match information from an external football API. Matches
can eventually be selected through a control interface without changing
the source code manually.

## ✨ Planned Features

-   ⚽ Live football scores
-   🔎 Search and select matches dynamically
-   🏟️ Team names and badges
-   ⏱️ Live match status and time
-   🎥 OBS Browser Source support
-   🎨 Customisable scoreboard designs
-   🔐 Server-side API key handling
-   🔄 Automatic score updates
-   🧩 External football API integration

## 🛠️ Tech Stack

### Frontend

-   Vite
-   TypeScript
-   HTML/CSS
-   Alpine.js
-   Tailwind CSS

### Backend

-   Node.js
-   TypeScript
-   Express

The backend acts as an intermediary between the frontend and the
external football data provider. This keeps API credentials out of the
browser and isolates provider-specific logic from the scoreboard UI.

## 🏗️ Architecture

``` text
External Football API
        ↓
Node.js Backend
        ↓
Normalised Match Data
        ↓
Frontend
        ↓
OBS Browser Source
```

## 📁 Project Structure

``` text
football-scoreboard/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── api/
│   │   ├── control/
│   │   ├── overlay/
│   │   └── types/
│   ├── index.html
│   ├── package.json
│   └── tsconfig.json
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── providers/
│   │   ├── models/
│   │   └── server.ts
│   ├── package.json
│   └── tsconfig.json
│
├── .gitignore
└── README.md
```

> The structure may change as the project develops.

## 🚧 Project Status

This project is currently under development. The initial focus is on
establishing the backend, defining a stable match-data model, and
integrating an external football API before developing the full OBS
overlay.

## 🎯 Goal

The goal is to create a reusable scoreboard where a streamer can:

``` text
Search for a match
        ↓
Select the fixture
        ↓
Retrieve live data automatically
        ↓
Display the scoreboard in OBS
```

This avoids having to modify the scoreboard source code for every match.

## 📄 Licence

Licence information will be added as the project develops.
