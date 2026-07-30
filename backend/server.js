import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Convert import.meta.url to __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env from the root directory
dotenv.config({ path: path.join(__dirname, '../.env') });

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: process.env.FRONTEND_URL || 'http://localhost:5173' }));
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('✅ Connected to MongoDB via root .env'))
    .catch((err) => console.error('❌ MongoDB Connection Error:', err));

// Mongoose Schema & Model for Queries
const querySchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    company: { type: String },
    message: { type: String, required: true },
    status: { type: String, default: 'New' }, // New, Read, Replied, Resolved
    createdAt: { type: Date, default: Date.now }
});

const Query = mongoose.model('Query', querySchema);

// API Route: Admin Login
app.post('/api/admin/login', (req, res) => {
    const { email, password } = req.body;
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@thewebgenixx.in';
    const adminPassword = process.env.ADMIN_PASSWORD || 'webgenixx@admin';

    if (email === adminEmail && password === adminPassword) {
        // In a real app, generate and return a JWT token here
        res.status(200).json({ success: true, message: 'Login successful', token: 'fake-jwt-token-123' });
    } else {
        res.status(401).json({ success: false, message: 'Invalid email or password' });
    }
});

// API Route: Submit a new query (Used by Get Started form)
app.post('/api/queries', async (req, res) => {
    try {
        const newQuery = new Query(req.body);
        const savedQuery = await newQuery.save();
        res.status(201).json({ success: true, data: savedQuery });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
});

// API Route: Get all queries (Used by Admin Dashboard)
app.get('/api/queries', async (req, res) => {
    try {
        const queries = await Query.find().sort({ createdAt: -1 });
        res.status(200).json({ success: true, data: queries });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// API Route: Update query status 
app.patch('/api/queries/:id', async (req, res) => {
    try {
        const { status } = req.body;
        const query = await Query.findByIdAndUpdate(req.params.id, { status }, { new: true });
        res.status(200).json({ success: true, data: query });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Backend Server running on http://localhost:${PORT}`);
});
