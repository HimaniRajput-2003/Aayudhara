const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');

// ✅ Load environment variables

dotenv.config({ path: path.resolve(__dirname, '.env') });
console.log("✅ Loaded MONGO_URI:", process.env.MONGO_URI);

const fs = require('fs');
console.log("✅ .env file exists:", fs.existsSync('.env'));
console.log("✅ Loaded MONGO_URI:", process.env.MONGO_URI);

const app = express();
app.use(cors());
app.use(express.json());

// ✅ API routes
const donorRoutes = require('./routes/donorRoutes');
const otpRoutes = require('./routes/otp');
app.use('/api/donor', donorRoutes);
app.use('/api/otp', otpRoutes);

// ✅ Serve React build
app.use(express.static(path.join(__dirname, '../build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

// ✅ MongoDB connection
console.log("MONGO_URI:", process.env.MONGO_URI); // Add this for debug
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log(`🚀 Server running on port ${process.env.PORT || 5000}`);
    });
  })
  .catch(err => console.error('❌ MongoDB connection error:', err));
