const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

const token = 'MTIyNjk1NDA2NTg4NDIxNzQ0Ng.Gnuu99.crdi3LzJOWn4_MtsTRcUGvPFQbNY15F_VA_Fj8';
const channelId = '1226955647199739955';

const apiURL = `https://discord.com/api/v9/channels/${channelId}/messages`;

app.get('/api/messages', async (req, res) => {
  try {
    const response = await axios.get(apiURL, {
      headers: {
        'Authorization': `Bot ${token}`,
        'Content-Type': 'application/json'
      }
    });

    res.json(response.data);
  } catch (error) {
    console.error("Discord API'den veri alınamadı: " + error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Sunucu ${port} numaralı portta çalışıyor`);
});