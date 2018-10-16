const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

// Handlebars Middleware
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

const port = 5000;

// Index Route
app.get('/', (req,res) => {
  const title = 'Hey Man';
  res.render('index', {
    title:title
  });
});

// About Route
app.get('/about', (req,res) => {
  res.render('about');
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
