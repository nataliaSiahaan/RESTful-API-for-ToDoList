const express = require('express'); 
const app = express(); 
const PORT = process.env.PORT || 3000;

const bodyParser = require('body-parser'); 
const dotenv = require('dotenv'); 
const { sequelize } = require('./models'); 

dotenv.config(); 
app.use(bodyParser.json()); 

// Import routes
const userRoutes = require('./routes/user'); 
const todoRoutes = require('./routes/todo'); 

// Gunakan routes
app.use('/api/users', userRoutes); 
app.use('/api/todos', todoRoutes); 
 

app.listen(PORT, async () => { 
    console.log(`Server is running on port ${PORT}`); 
    await sequelize.sync(); 
});
