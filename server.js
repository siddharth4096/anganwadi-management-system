const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const rationRoutes = require('./routes/rationRoutes');
const reportRoutes = require('./routes/reportRoutes');

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/ration', rationRoutes);
app.use('/api/report', reportRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
















