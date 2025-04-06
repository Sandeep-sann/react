Customer Query Assistant Chatbot

A responsive AI-powered chatbot built using **React** and **OpenRouter API** that helps answer customer queries in real-time.

## Features

- Uses OpenRouter AI models (e.g., `meta-llama/llama-3.2-3b-instruct:free`)
- Clean and mobile-friendly chat interface
- Styled conversation layout with role-based colors
- Easy API integration and customization

---

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Sandeep-sann/react
cd react
2. Install Dependencies
bash
Copy code
npm install
3. Create Your OpenRouter API Key
Go to https://openrouter.ai/

Sign in and go to API Keys

Generate a new API key

Never share this key publicly or commit it to GitHub

4. Set Up Your API Key Securely
In your project, create a file called:

bash
Copy code
.env
And add:

env
Copy code
REACT_APP_API_KEY=sk-or-your-api-key-here
Update your chatbot.js to use:

js
Copy code
const API_KEY = process.env.REACT_APP_API_KEY;
Important: Add .env to .gitignore:

gitignore
Copy code
.env
Running the App
bash
Copy code
npm start
Open http://localhost:3000 to view it in the browser.

Deployment
You can deploy it on GitHub Pages, Vercel, or Netlify.

To deploy on GitHub Pages:

Add this to package.json:

json
Copy code
"homepage": "https://your-username.github.io/your-repo-name"
Then run:

bash
Copy code
npm run build
npm install --save-dev gh-pages
npm run deploy
License
This project is licensed under the MIT License.

use "npm start"
to run your react app
