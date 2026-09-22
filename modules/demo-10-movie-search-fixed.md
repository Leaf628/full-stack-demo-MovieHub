Dot env file

1. Create .env file in project root direct 

movie-hub/
├── node_modules/
├── public/
├── src/
│   ├── components/
│   ├── App.tsx
│   └── main.tsx
├── .env          <-- Create this file
├── .gitignore
├── package.json
└── vite.config.ts

2. Inside file 

VITE_TMDB_API_KEY=your_actual_tmdb_api_key

3. Restart vite server
	cmd: npm run dev

4. Remember to add .env file to .gitignore so that it doesn't end up on gitHub.