import mongoose from "mongoose";
import Contact from "../backend/Models/Contact.js";
import cors from "cors";

const connectDB = async () => {
  if (mongoose.connections[0].readyState) return;
  await mongoose.connect(process.env.MONGO_URI);
};

const handler = async (req, res) => {
  await connectDB();

  // Enable CORS
  cors()(req, res, async () => {
    if (req.method === "GET") {
      const contacts = await Contact.find().sort({ name: 1 });
      return res.status(200).json(contacts);
    }

    if (req.method === "POST") {
      const { name, email, phone, message } = req.body;
      if (!name || !email || !phone) {
        return res.status(400).json({ error: "Missing fields" });
      }

      const contact = await Contact.create({ name, email, phone, message });
      return res.status(201).json(contact);
    }

    if (req.method === "DELETE") {
      const { id } = req.query;
      await Contact.findByIdAndDelete(id);
      return res.status(200).json({ message: "Deleted" });
    }

    return res.status(405).json({ error: "Method not allowed" });
  });
};

export default handler;
