# SlimMom

## Overview

This is a frontend application built using Vite, a fast and modern build tool. The project uses React for the user interface and includes basic setup for development and production environments.

## Features

- Fast development setup with Vite
- React framework
- Optimized production build
- Hot Module Replacement (HMR) during development

## Installation

1. Clone the repository:
   git clone repository_url
   cd project_folder
2. Install dependencies: npm install
3. Ensure you have Node.js installed (version 16 or higher):
   node -v

## Configuration

1. Create a .env file in the root directory and add the necessary environment variables for your project: VITE_API_URL=your_api_url
2. You can configure other settings like API keys or port numbers inside this file.

## Project Stucture

- /public: Contains static public assets like image and fonts, served directly by the browser
- /src: Main source folder housing all frontend logic and structure
- /src/api: Manages base API configuration and integration with the backend, typically using RTK Query
- /src/assets: Holds design assets such as images, icons or static styles shared across the app
- /src/components: Contains reusable UI components used throughout the application
- /src/features: Contains feature-specific logic such as slices and API calls, grouped by domain
- /src/middlewares: Contains custom Redux middlewares for intercepting actions or adding side effects
- /src/pages: Holds top-level components mapped to routes, each representing a distinct view or screen
- /src/store: Centralized global state configuration and reducer management for the app
- /src/styles: Global CSS or styling helpers shared across multiple components or pages
- /src/utils: General-purpose utility functions and helpers used throughout the codebase
- /src/App.jsx: Defines the application's routing structure and top-level layout, rendering the correct views based on the URL
- /src/main.jsx: Application entry point that renders the app into the DOM and wraps it with global providers

## Technologies User

- Vite
- React
- Material UI
- ESLint for code linting

## Scripts

- npm run dev: Start the development server with hot module replacement
- npm run build: Create a production build of the app
- npm run preview: Preview the production build locally
- npm run deploy: Deploy the application to the specified environment
- npm run lint: Run a linter to check for code style issues

## License

This project is licensed under the MIT License.
