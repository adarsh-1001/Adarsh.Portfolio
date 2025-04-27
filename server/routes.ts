import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

type ContactMessage = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, subject, message } = req.body as ContactMessage;
      
      // Validate required fields
      if (!name || !email || !subject || !message) {
        return res.status(400).json({ message: "All fields are required" });
      }
      
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ message: "Invalid email format" });
      }
      
      // Store the contact message
      const contactMessage = await storage.saveContactMessage({
        name,
        email,
        subject,
        message,
        createdAt: new Date()
      });
      
      // In a real application, you might want to send an email here
      
      return res.status(200).json({ 
        message: "Message received successfully",
        id: contactMessage.id
      });
    } catch (error) {
      console.error("Error handling contact form submission:", error);
      return res.status(500).json({ message: "Failed to process your message" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
