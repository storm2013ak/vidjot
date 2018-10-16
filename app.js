const express = require('express');

const app = express();

const port = 5000;

// Index Route
app.get('/', (req,res) => {
  res.send('INDEX');
});

// About Route
app.get('/about', (req,res) => {
  res.send('<h1 style="text-align: center; color: pink;">MALIKA KAKASHKA</h1><img style="text-align: center" src="https://scontent.fatl1-2.fna.fbcdn.net/v/t1.0-1/p160x160/23561511_1954106998140015_1801442717087177042_n.jpg?_nc_cat=104&oh=638c987a8b5a736599e3b2d7fbf5dcc6&oe=5C5618B2">');
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
