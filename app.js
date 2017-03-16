const http = require('http'),
  express = require('express'),
  app = express(),
  server = http.createServer(app);

app.get('/', (request, response)=>{
  response.send('It Lives!');
});

app.get('/dalek', (request, response)=>{
  response.send('Exterminate!!!');
});
app.get('/cyberman', (request, response)=>{
  response.send('Delete!');
});

app.get("/doctor/", (request, response)=>{
  const doctors = ['William', 'Patrick', 'Jon', 'Tom', 'Peter'];
  response.send(doctors);
});

app.get("/doctor/:num", (request, response)=>{
  const doctors = ['William', 'Patrick', 'Jon', 'Tom', 'Peter'];
  response.send(doctors[request.params.num - 1]);
});


server.listen(3000);

console.log('Listening on %d',server.address().port);
