const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

// ✅ Load environment variables
dotenv.config({ path: path.resolve(__dirname, '.env') });

if (!process.env.MONGO_URI) {
  console.error("❌ MONGO_URI not found in environment variables.");
  process.exit(1);
}

console.log("✅ .env loaded. Connecting to MongoDB...");

// ✅ Initialize Express app
const app = express();
app.use(cors());
app.use(express.json());

// ✅ Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB connected');
  })
  .catch(err => {
    console.error('❌ MongoDB connection error:', err.message);
    process.exit(1);
  });

// ✅ Define API routes
const donorRoutes = require('./routes/donorRoutes');
const otpRoutes = require('./routes/otp');
app.use('/api/donor', donorRoutes);
app.use('/api/otp', otpRoutes);

// ✅ Optional: Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// ✅ Serve React build (build/ folder is one level up)
const buildPath = path.join(__dirname, '..', 'build');
if (fs.existsSync(buildPath)) {
  app.use(express.static(buildPath));

  app.get('*', (req, res) => {
    res.sendFile(path.join(buildPath, 'index.html'));
  });
} else {
  console.warn("⚠️ React build folder not found at ../build. Did you run 'npm run build'?");
}

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
