const express = require('express');
const path=require('path');
const app = express();

const PORT = process.env.PORT|| 3000;

app.use(express.static(path.join(__dirname, 'public')));  //important, core logic

app.listen(PORT,()=>
{
     console.log(`Static file server running at http://localhost:${PORT}`);
});