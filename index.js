// Initializing server
    const express = require('express');
    const app = express();
    const port = process.env.PORT || 3000;
        app.listen(port, (request, response) => {
            console.log(`Listening to port ${port}`);
        });

// Direct to public
    app.use(express.static('public'));
    app.use(express.json({ limit: '1mb' }));

// Recieveing data from API
    const fetch = require('node-fetch');
    const api_key = 'B8mFyvEVis9PGHQFBBFyvkrn';
        app.get('/externalApi', async (request, response) => {
            const api_url = `http://www.openaustralia.org/api/getRepresentatives?key=${api_key}&output=js`;
            const fetch_response = await fetch(api_url);
            const data = await fetch_response.json();
                response.json(data);
        });