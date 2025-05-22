const express = require("express");
const app = express();
const PORT = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
const messages = [];
const users = [];

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/login.html');
});

//GET Messages endpoint (shows all messages)
app.get('/messages', (req, res) => {
  res.json(messages);
});
//GET backend instructions endpoint (how to use)
app.get('/backendinstructions', (req, res) => {
  res.sendFile(__dirname + '/public/backendinstructions.html');
});

//POST endpoint for message posting
app.post('/messages', (req, res) => {
  const { title, content, username } = req.body;  
  if (messages.find(u => u.title === title && u.content === content && u.username === username)) {
    return res.send('post already registered!');
  }
    const timestamp = new Date().toISOString(); 


  messages.push({ title, content, username, timestamp });  
  res.redirect('/messages');
});

//POST endpoint for deleting messages
app.post("/delete-message", (req, res) => {
  const { title, username } = req.body;

  if (!title || !username) {
    return res.json({ success: false, error: "Missing title or username." });
  }

  const initialLength = messages.length;
  const filtered = messages.filter(m => !(m.title === title && m.username === username));

  if (filtered.length < initialLength) {
    messages.length = 0;
    messages.push(...filtered);
    console.log("Deleted message(s) with title:", title, "by user:", username);
    return res.json({ success: true });
  } else {
    console.log("No message deleted (not found or not authorized)");
    return res.json({ success: false, error: "You can only delete your own posts." });
  }
});

//GET endpoint for admin panel
app.get('/admin/panel', (req, res) => {
  res.sendFile(__dirname + '/public/admin.html');
});

//POST endpoint for registering new accounts 
app.post('/register', (req, res) => {
  const { username, password } = req.body;
  if (users.find(u => u.username === username)) {
    return res.send('Username already registered')
  }
  const encodedPassword = Buffer.from(password).toString('base64');
  users.push({ username, password: encodedPassword });
  res.send('Account registered');
});

//GET endpoint for all users (displays accounts credentials)
app.get('/users', (req, res) => {
  res.json(users);
});

//POST endpoint for log in
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const encodedPassword = Buffer.from(password).toString('base64');
  if (users.find(u => u.username === username && u.password === encodedPassword)) {
    res.redirect('/board');
  } else {
    res.send('Invalid credentials. <a href="/">Try again</a>');
  }
});

//GET endpoint for board page (main page)
app.get('/board', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

//GET endpoint for profile page
app.get('/profile', (req, res) => {
  res.sendFile(__dirname + '/public/profile.html');
});

//POST endpoint for deleting users
app.post('/delete-user', (req, res) => {
  const { username } = req.body;
  const index = users.findIndex(u => u.username === username);
  
  if (index !== -1) {
    users.splice(index, 1);
    console.log("Deleted user:", username);


    const before = messages.length;
    const filteredMessages = messages.filter(m => m.username !== username);
    messages.length = 0;
    messages.push(...filteredMessages);

    console.log(`Deleted ${before - messages.length} messages by ${username}`);
    res.send('Account deleted successfully.');
  } else {
    res.send('User not found.');
  }
});


app.listen(PORT);
