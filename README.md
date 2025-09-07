
# TimeWarp Studio 🕰️✨

![TimeWarp Studio Banner](public/logo_timewarp.png)

**Travel through history, one photo at a time. TimeWarp Studio is a revolutionary web application that transforms any modern photo into authentic, photorealistic versions from different historical eras, fantasy realms, and sci-fi futures.**

[![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![Gemini API](https://img.shields.io/badge/Gemini_API-2.5_Flash-4285F4?style=for-the-badge&logo=google-cloud)](https://ai.google.dev/)
[![VEO API](https://img.shields.io/badge/VEO_API-2.0-F8AB00?style=for-the-badge&logo=google)](https://deepmind.google/technologies/veo/)
[![PWA](https://img.shields.io/badge/PWA-Ready-5A0FC8?style=for-the-badge&logo=pwa)](https://web.dev/progressive-web-apps/)

---

## 🌟 Key Features

TimeWarp Studio is more than a simple filter app; it's a portal to impossible worlds, powered by Google's state-of-the-art generative AI.

*   **AI-Powered Transformations**: Utilizes the **Gemini 2.5 Flash Image Preview** model to perform complex, context-aware image-to-image transformations, preserving the user's likeness while authentically adapting style, clothing, and environment.
*   **Living Portraits**: Leverages the powerful **VEO 2.0** model to animate the generated portraits, creating subtle, lifelike movements like blinks and smiles, bringing your historical self to life.
*   **Diverse Eras & Universes**: Journey to a wide range of meticulously prompted destinations, categorized for easy exploration:
    *   **Historical Eras**: From Pharaonic Egypt and the Roman Empire to the Roaring Twenties.
    *   **Fantasy Realms**: Become an elegant elf in an enchanted forest.
    *   **Futuristic & Sci-Fi**: Explore a neon-drenched Cyberpunk metropolis or the far reaches of space.
*   **Magic Edit**: Refine your transformations with in-app "Magic Edits." Simply type a prompt like "add a viking helmet" or "change hair to red" to modify the image on the fly.
*   **Artistic Style Customization**: Before each transformation, choose an artistic modifier (e.g., Oil Painting, Cinematic, Charcoal Drawing) to guide the final aesthetic.
*   **Interactive Before/After Slider**: A dynamic slider allows for a satisfying and clear comparison between the original and transformed image.
*   **Rich Historical Context**: Each result is presented alongside cards detailing key events, cultural facts, and clothing styles of the chosen era, making the experience both fun and educational.
*   **Progressive Web App (PWA)**: Installable on any device for a native-app feel, with offline caching for core assets.
*   **Multilingual Support**: Fully available in English and French.
*   **Usage Analytics**: Integrated with Google Analytics to track user engagement and feature popularity in a production environment.

---

## 🛠️ Tech Stack

*   **Frontend**: React 19, TypeScript, Tailwind CSS
*   **AI & Machine Learning**:
    *   **Google Gemini API**:
        *   `gemini-2.5-flash-image-preview` for image generation and editing.
    *   **Google VEO API**:
        *   `veo-2.0-generate-001` for video generation (Living Portraits).
*   **Analytics**: Google Analytics 4 (GA4)
*   **Offline Support**: Service Workers for PWA capabilities.

---

## 🚀 Getting Started

Follow these instructions to get a local copy of TimeWarp Studio up and running for development and testing purposes.

### Prerequisites

*   Node.js (v18 or later)
*   npm, yarn, or pnpm
*   A **Google Gemini API Key**. You can get one from [Google AI Studio](https://makersuite.google.com/app/apikey).

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/timewarp-studio.git
    cd timewarp-studio
    ```

2.  **Install dependencies:**
    ```sh
    npm install
    ```

3.  **Set up environment variables:**
    Create a file named `.env` in the root of the project and add your API keys. This file is ignored by Git.

    ```env
    # Your Google Gemini API Key
    API_KEY=YOUR_GEMINI_API_KEY_HERE

    # (Optional) Your Google Analytics 4 Measurement ID
    GA_MEASUREMENT_ID=G-XXXXXXXXXX
    ```

4.  **Run the development server:**
    This command will start the application on a local development server (usually `http://localhost:3000`).
    ```sh
    npm run dev
    ```
    *Note: The project must be configured with a build tool like Vite or similar to properly inject environment variables.*

---

## ⚙️ Project Structure

The codebase is organized to be clean, scalable, and maintainable.

```
/
├── public/                # Static assets (logo, manifest.json)
├── src/
│   ├── components/        # Reusable React components (Header, Uploader, etc.)
│   ├── services/          # Modules for external APIs (geminiService, analyticsService)
│   ├── utils/             # Helper functions (imageUtils, logger)
│   ├── App.tsx            # Main application component and state management
│   ├── constants.ts       # Core data like the ERAS array
│   ├── index.tsx          # Application entry point
│   ├── translations.ts    # Language strings for EN/FR
│   └── types.ts           # TypeScript type definitions
├── index.html             # Main HTML entry point
├── service-worker.js      # PWA service worker logic
└── README.md              # You are here!
```

---

## 📈 Logging & Analytics

*   **Client-Side Logging**: For development and debugging, detailed logs are available in the browser console. To enable them in a production build, append the `?debug=true` query parameter to the URL. This prevents cluttering the console for regular users.
*   **Usage Analytics**: When a `GA_MEASUREMENT_ID` is provided, the application sends anonymized usage data to Google Analytics. This tracks key events like image uploads, transformation successes/failures, and feature usage (Magic Edit, Living Portraits) to provide insights into user behavior.

---

## ☁️ Deployment

The application is built as a static site and can be deployed on any modern hosting platform. It is particularly well-suited for services like **Google Cloud Run**, Vercel, or Netlify, which can handle serverless functions and global CDN distribution effortlessly.

---

## 🔮 Future Enhancements

*   **User Accounts**: Allow users to create accounts to save their transformation history.
*   **Expanded Era Library**: Continuously add new and exciting historical, fantasy, and sci-fi eras.
*   **Advanced "Living Portrait" Controls**: Give users options to influence the animation (e.g., "surprised look," "knowing wink").
*   **Enhanced Social Sharing**: Create custom-formatted images for sharing on social media platforms that include a before-and-after view.

---

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for details.
