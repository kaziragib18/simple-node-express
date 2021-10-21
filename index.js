const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// const handler = (req, res) =>{
//       res.send('Hello Node')
// }

app.get('/', (req, res) => {
      res.send('Started Learning Node')
});

const users = [
      { id: 1, name: 'Kazi', email: 'kazi@123.com', phone: '01949434546' },
      { id: 2, name: 'Sabit', email: 'Sabit@123.com', phone: '01576577788' },
      { id: 3, name: 'Hasan', email: 'Hasan@123.com', phone: '01835345534' },
      { id: 4, name: 'Mainul', email: 'Mainul@123.com', phone: '01749434566' }
]

app.get('/users', (req, res) => {
      const search = req.query.search;
      if (search) {
            const searchResult = users.filter(user => user.name.toLowerCase().includes(search));
            res.send(searchResult);
      }
      else {
            res.send(users)
      }
});

//app.METHOD
app.post('/users', (req, res)=>{
      const newUser = req.body;
      newUser.id = users.length;
      users.push(newUser);

      console.log('hitting the post', req.body);
      // res.send(JSON.stringify(newUser));
      res.json(newUser)
})

//Dynamic api
app.get('/users/:id', (req, res) => {
      const id = req.params.id;
      const user = users[id]
      // console.log(req.params.id);
      res.send(user);
})


app.get('/books', (req, res) => {
      res.send(['romance', 'thriller', 'comedy']);
})

app.get('/books/adventure/Hero', (req, res) => {
      res.send('All the books you need');
})



app.listen(port, () => {
      console.log('listening to port', port);
});