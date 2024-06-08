const express = require('express');
const cors = require('cors');
const connectDB = require('./database');
const Student = require('./datamodel'); 

const app = express();
connectDB();

app.use(express.json());
app.use(cors());

app.get('/readfromserver', async (req, res) => {
    try {
        const allStudents = await Student.find({});
        res.json(allStudents);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Error fetching data from the database');
    }
});


app.post('/writetodatabase', async (req, res) => {
  try {
    const { name, reg } = req.body;
    const newStudent = new Student({ 
      name, 
      reg, 
    });
    await newStudent.save();
    res.json({ message: 'Data saved successfully ' });
  } catch (error) {
    console.error( error.message);
    res.status(500).send('Server error while saving data ');
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});