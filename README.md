# viv_stories

Viv's website for stories! Read page turner after page turner of short and amazing stories!!

## Getting Started

This project consists of a React frontend and an Express backend.

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone <repository-url>
   cd viv_stories
   ```

2. **Install Backend Dependencies**:
   ```bash
   cd backend
   npm install
   cd ..
   ```

3. **Install Frontend Dependencies**:
   ```bash
   cd frontend
   npm install
   cd ..
   ```

### Running the Application

To run the site, you need to start both the backend and the frontend servers.

#### 1. Start the Backend Server
From the root directory:
```bash
cd backend
npm start
```
The backend will run at `http://localhost:5001`.

#### 2. Start the Frontend Development Server
Open a new terminal window and from the root directory:
```bash
cd frontend
npm run dev
```
The frontend will run at `http://localhost:5173` (or the port shown in your terminal).

### Project Structure

- `frontend/`: React + Vite application for the user interface.
- `backend/`: Node.js + Express API that serves stories from markdown files.
- `backend/stories/`: Markdown files containing the stories.

## Features

- Dynamic story loading from Markdown files.
- Modern, responsive UI with styled-components.
- Interactive story reader.
