require('dotenv').config();
const mockData = require('./mock_data.json');
const Job = require('./models/Job');
const connectDB = require('./db/connect');

const start = async (req, res) => {
    console.log('Function start');
    try {
        await connectDB(process.env.MONGO_URI);
        console.log('Connected to database');
        const input = await Job.create(mockData);
        console.log(`Done, added ${input.length} values to database`);
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

start();