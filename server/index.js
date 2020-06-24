const PORT = process.env.PORT || 4000;
const app = require('./app');


app.listen(PORT, () => {
  console.log(`Environment: ${process.env.NODE_ENV} || 🌎 Listening on http://localhost:${PORT}`);
});
