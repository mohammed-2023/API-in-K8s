const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('   ---Welcome---\n My name is Mohammed Alsaawi  ');
});

const port = process.env.PORT || 5050;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
