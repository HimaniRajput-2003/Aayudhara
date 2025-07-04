const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

// ✅ Load environment variables
dotenv.config({ path: path.resolve(__dirname, '.env') });
console.log("✅ .env file exists:", fs.existsSync('.env'));
console.log("✅ Loaded MONGO_URI:", process.env.MONGO_URI);

// ✅ Initialize Express app
const app = express();
app.use(cors());
app.use(express.json());

// ✅ Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('✅ MongoDB connected');
})
.catch(err => {
  console.error('❌ MongoDB connection error:', err);
  process.exit(1);
});

// ✅ Define API routes
const donorRoutes = require('./backend/routes/donorRoutes');
const otpRoutes = require('./backend/routes/otp');
app.use('/api/donor', donorRoutes);
app.use('/api/otp', otpRoutes);

// ✅ Serve React build (ensure build/ folder is in root)
const buildPath = path.join(__dirname, 'build');
if (fs.existsSync(buildPath)) {
  app.use(express.static(buildPath));

  app.get('*', (req, res) => {
    res.sendFile(path.join(buildPath, 'index.html'));
  });
} else {
  console.warn("⚠️ React build folder not found. Did you run 'npm run build'?");
}

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
