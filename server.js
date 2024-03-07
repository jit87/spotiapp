const express = require('express');
const corsAnywhere = require('cors-anywhere');

const PORT = process.env.PORT || 3000;

const app = express();
app.use(corsAnywhere());

app.listen(PORT, () => {
  console.log(`CORS Anywhere server listening on port ${PORT}`);
});
