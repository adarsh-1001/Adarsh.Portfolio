import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      // Parse and validate the request body using zod schema
      const contactData = insertContactMessageSchema.safeParse({
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message
      });
      
      // If validation fails, return error
      if (!contactData.success) {
        return res.status(400).json({ 
          message: "Validation failed", 
          errors: contactData.error.format() 
        });
      }
      
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(contactData.data.email)) {
        return res.status(400).json({ message: "Invalid email format" });
      }
      
      // Store the contact message
      const contactMessage = await storage.createContactMessage(contactData.data);
      
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
  
  // Get contact messages (this would typically be protected in a real app)
  app.get("/api/contact", async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      return res.status(200).json(messages);
    } catch (error) {
      console.error("Error fetching contact messages:", error);
      return res.status(500).json({ message: "Failed to fetch messages" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
