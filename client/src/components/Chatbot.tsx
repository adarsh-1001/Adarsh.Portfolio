import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, X, MessageSquare, Wand2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type Message = {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
};

const INITIAL_MESSAGES: Message[] = [
  {
    id: "welcome",
    text: "Hello! I'm Adarsh Mishra's AI assistant. I'm here to help you learn more about his work and expertise! 🚀",
    isUser: false,
    timestamp: new Date(),
  },
];

// Add continuous animation for the chatbot button
const pulseAnimation = {
  scale: [1, 1.1, 1],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState("");
  const [isBlushing, setIsBlushing] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [isVibrating, setIsVibrating] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
    }
  }, [isOpen]);

  const generateId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: generateId(),
      text: inputValue,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    // Trigger vibration
    setIsVibrating(true);
    setTimeout(() => setIsVibrating(false), 500);

    // Bot is typing...
    setIsTyping(true);

    // Simulate AI response after delay
    setTimeout(() => {
      // AI responses based on input (simplified for demo)
      let botResponse = "I'm sorry, I don't have an answer for that right now.";

      const input = inputValue.toLowerCase();

      if (input.includes("hello") || input.includes("hi")) {
        botResponse = "Hello there! How can I assist you today?";
      } else if (input.includes("help")) {
        botResponse = "I can help with information about Mishra's skills, projects, or how to get in touch with him!";
      } else if (input.includes("contact") || input.includes("email") || input.includes("phone")) {
        botResponse = "You can contact Mishra via email at mishraadarsh1001@gmail.com or by phone at +91-6307737501.";
      } else if (input.includes("hire")) {
        botResponse = "Interested in hiring Mishra? Fantastic! You can navigate to the 'Hire Me' section or send a direct message using the contact form.";
      } else if (input.includes("project")) {
        botResponse = "Mishra has worked on various projects. You can check them out in the Projects section of this portfolio!";
      } else if (input.includes("skills") || input.includes("experience")) {
        botResponse = "Mishra has expertise in web development, mobile apps, and software architecture. Check out the Skills section for more details!";
      } else if (input.includes("thank")) {
        botResponse = "You're welcome! Feel free to ask if you need anything else!";
        setIsBlushing(true);
        setTimeout(() => setIsBlushing(false), 3000);
      }

      const botMessage: Message = {
        id: generateId(),
        text: botResponse,
        isUser: false,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <>
      {/* Floating chat button */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ ...pulseAnimation, opacity: 1 }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-5 right-5 z-50"
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className={`rounded-lg w-14 h-14 p-0 flex items-center justify-center bg-gradient-to-r from-slate-800 to-slate-900 border-2 border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:shadow-[0_0_25px_rgba(59,130,246,0.8)] transition-all duration-300 ${
            isVibrating ? "animate-shake" : ""
          }`}
        >
          {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
        </Button>
      </motion.div>

      {/* Chat dialog */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={`fixed bottom-20 right-5 z-50 w-80 md:w-96 animate-[robot-hover_4s_ease-in-out_infinite]`}
          >
            <Card className="border shadow-xl rounded-2xl overflow-hidden bg-white dark:bg-gray-900">
              {/* Chat header */}
              <div className="bg-gradient-to-r from-slate-800 to-slate-900 p-4 text-white flex items-center justify-between border-b-2 border-blue-500">
                <div className="flex items-center space-x-2">
                  <div className="relative">
                    {/* Robot face */}
                    <div className={`w-12 h-14 bg-gradient-to-b from-slate-800 to-slate-900 flex items-center justify-center border-2 ${isBlushing ? 'border-pink-400' : 'border-blue-400'} rounded-tr-2xl rounded-bl-2xl transform hover:rotate-3 transition-transform duration-300`}>
                      <div className="relative">
                        {/* Robot head with angular design */}
                        <div className="w-10 h-8 bg-gradient-to-b from-slate-700 to-slate-800 flex items-center justify-center shadow-inner border-2 border-blue-400 clip-path-robot">
                          {/* Robot eyes */}
                          <div className="flex space-x-2 mt-0.5">
                            <div className="relative">
                              {/* Left eye outer casing */}
                              <div className="w-2.5 h-2.5 bg-black relative overflow-hidden border border-blue-400">
                                {/* Left eye LED effect */}
                                <div className="absolute inset-0.5 bg-blue-500 animate-pulse opacity-80"></div>
                                {/* Left eye scanner */}
                                <div className={`absolute w-0.5 h-full bg-blue-200 ${isVibrating ? 'animate-[scanner_1s_linear_infinite]' : ''} left-0`}></div>
                              </div>
                            </div>
                            <div className="relative">
                              {/* Right eye outer casing */}
                              <div className="w-2.5 h-2.5 rounded-full bg-blue-600 relative overflow-hidden">
                                {/* Right eye inner "screen" */}
                                <div className="absolute inset-0.5 rounded-full bg-blue-300"></div>
                                {/* Right eye pupil */}
                                <div className={`absolute w-1 h-1 rounded-full bg-blue-900 top-0.5 ${isVibrating ? 'animate-pulse' : ''} ${isBlushing ? 'left-0' : 'left-0.5'}`}></div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Robot blush effect - enhanced */}
                        {isBlushing && (
                          <>
                            <div className="absolute w-2.5 h-1.5 bg-pink-400 rounded-full left-0 top-4 opacity-70"></div>
                            <div className="absolute w-2.5 h-1.5 bg-pink-400 rounded-full right-0 top-4 opacity-70"></div>
                            <div className="absolute w-1.5 h-1 bg-pink-300 rounded-full left-0.5 top-[1.125rem] animate-pulse"></div>
                            <div className="absolute w-1.5 h-1 bg-pink-300 rounded-full right-0.5 top-[1.125rem] animate-pulse"></div>
                          </>
                        )}

                        {/* Robot mouth - LED scanner */}
                        <div className={`w-4 h-1 bg-black border border-blue-400 mx-auto mt-1.5 overflow-hidden`}>
                          <div className={`h-full bg-blue-500 ${isTyping ? 'animate-[typing_1s_steps(4,end)_infinite]' : 'w-full'} opacity-80`}></div>
                        </div>

                        {/* Robot antenna with light */}
                        <div className="absolute -top-2.5 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                          <div className={`w-1.5 h-1.5 rounded-full ${isVibrating ? 'bg-pink-500 animate-pulse' : 'bg-blue-500}`}></div>
                          <div className="w-1 h-2 bg-gray-400"></div>
                        </div>

                        {/* Circuit patterns on head */}
                        <div className="absolute w-1 h-3 border-r border-gray-400 left-1 top-1"></div>
                        <div className="absolute w-1 h-3 border-l border-gray-400 right-1 top-1"></div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium text-sm">AI Assistant</h3>
                    <p className="text-xs text-white/70">Always here to help</p>
                  </div>
                </div>
                <Button 
                  size="icon" 
                  variant="ghost" 
                  className="h-8 w-8 rounded-full text-white hover:bg-white/20"
                  onClick={() => setIsOpen(false)}
                >
                  <X size={18} />
                </Button>
              </div>

              {/* Chat messages */}
              <div className="h-80 overflow-y-auto p-4 flex flex-col space-y-3">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.isUser ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[80%] px-4 py-2 rounded-2xl ${
                        message.isUser
                          ? "bg-blue-600 text-white rounded-tr-none"
                          : "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-tl-none"
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <p className="text-xs mt-1 opacity-70">
                        {message.timestamp.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Typing indicator */}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 dark:bg-gray-800 px-4 py-3 rounded-2xl rounded-tl-none">
                      <div className="flex space-x-1 items-center">
                        <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-500 animate-bounce"></div>
                        <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-500 animate-bounce [animation-delay:0.2s]"></div>
                        <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-500 animate-bounce [animation-delay:0.4s]"></div>
                      </div>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Chat input */}
              <div className="border-t p-3">
                <form onSubmit={handleSubmit} className="flex space-x-2">
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Type a message..."
                    className="flex-1 px-4 py-2 bg-gray-100 dark:bg-gray-800 border-none rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <Button 
                    type="submit" 
                    size="icon"
                    disabled={!inputValue.trim()}
                    className="rounded-full bg-gradient-to-r from-blue-600 to-pink-600 hover:opacity-90"
                  >
                    <Send size={18} />
                  </Button>
                </form>

                {/* Quick suggestions */}
                <div className="mt-2 flex flex-wrap gap-2">
                  <button
                    onClick={() => setInputValue("How can I hire Mishra?")}
                    className="text-xs py-1 px-3 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/60 transition-colors"
                  >
                    Hiring info
                  </button>
                  <button
                    onClick={() => setInputValue("What are your skills?")}
                    className="text-xs py-1 px-3 rounded-full bg-pink-100 dark:bg-pink-900/40 text-pink-700 dark:text-pink-300 hover:bg-pink-200 dark:hover:bg-pink-900/60 transition-colors"
                  >
                    Skills
                  </button>
                  <button
                    onClick={() => setInputValue("How can I contact you?")}
                    className="text-xs py-1 px-3 rounded-full bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300 hover:bg-violet-200 dark:hover:bg-violet-900/60 transition-colors"
                  >
                    Contact
                  </button>
                </div>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;