"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageFilled,
  CloseOutlined,
  SendOutlined,
  RobotOutlined,
} from "@ant-design/icons";

// In a real app, you would make an API call to an AI service.
// Here, we simulate it with a delay and pre-programmed responses.
const getAIResponse = (message) => {
  const lowerCaseMessage = message.toLowerCase();
  if (
    lowerCaseMessage.includes("workout") ||
    lowerCaseMessage.includes("exercise")
  ) {
    return "Great question! For a balanced routine, I suggest a full-body workout. Try 3 sets of squats, push-ups, and planks. Would you like a more detailed plan?";
  }
  if (
    lowerCaseMessage.includes("diet") ||
    lowerCaseMessage.includes("nutrition")
  ) {
    return "Nutrition is key! A good start is to focus on whole foods. Eat plenty of vegetables, lean protein, and complex carbs. Avoid sugary drinks. Do you have any dietary restrictions?";
  }
  if (
    lowerCaseMessage.includes("membership") ||
    lowerCaseMessage.includes("plan")
  ) {
    return "Our Pro Plan at $49/mo is the most popular! It includes unlimited classes and personalized nutrition plans. You can view all options on our 'Join Now' page.";
  }
  if (lowerCaseMessage.includes("hello") || lowerCaseMessage.includes("hi")) {
    return "Hello there! How can I help you with your fitness journey today?";
  }
  return "I'm here to help with fitness and nutrition questions. Could you please rephrase that? You can ask me about workouts, diet plans, or membership options.";
};

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm your AI Fitness Coach. Ask me for workout ideas, diet tips, or anything about our platform!",
      sender: "ai",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const chatEndRef = useRef(null);

  useEffect(() => {
    // Auto-scroll to the latest message
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSendMessage = (text) => {
    if (!text.trim()) return;

    const userMessage = { id: Date.now(), text, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    // Simulate AI thinking and responding
    setTimeout(() => {
      const aiResponseText = getAIResponse(text);
      const aiMessage = {
        id: Date.now() + 1,
        text: aiResponseText,
        sender: "ai",
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSendMessage(inputValue);
  };

  const suggestionChips = [
    "Suggest a workout",
    "Help with my diet",
    "Tell me about memberships",
  ];

  return (
    <>
      {/* Chat Trigger Icon */}
      <motion.button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 w-16 h-16 bg-[#E6533C] rounded-full text-white flex items-center justify-center shadow-lg z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageFilled className="text-2xl" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-24 right-6 w-[calc(100vw-48px)] max-w-sm h-[60vh] max-h-[600px] bg-gray-800 rounded-2xl shadow-2xl flex flex-col border border-gray-700 z-50"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-gray-900 rounded-t-2xl">
              <div className="flex items-center">
                <RobotOutlined className="text-2xl text-[#E6533C] mr-3" />
                <h3 className="font-bold text-lg">AI Fitness Coach</h3>
              </div>
              <button
                onClick={toggleChat}
                className="text-gray-400 hover:text-white"
              >
                <CloseOutlined />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 p-4 overflow-y-auto">
              <div className="space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${
                      msg.sender === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-xs md:max-w-md px-4 py-2 rounded-2xl ${
                        msg.sender === "user"
                          ? "bg-blue-600 text-white rounded-br-none"
                          : "bg-gray-700 text-gray-200 rounded-bl-none"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="px-4 py-2 rounded-2xl bg-gray-700 text-gray-200 rounded-bl-none">
                      <div className="flex items-center space-x-1">
                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse [animation-delay:-0.3s]"></span>
                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse [animation-delay:-0.15s]"></span>
                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></span>
                      </div>
                    </div>
                  </div>
                )}
                {/* A reference div to scroll to */}
                <div ref={chatEndRef} />
              </div>
            </div>

            {/* Suggestion Chips */}
            {messages.length <= 1 && (
              <div className="p-4 border-t border-gray-700 flex flex-wrap gap-2">
                {suggestionChips.map((chip) => (
                  <button
                    key={chip}
                    onClick={() => handleSendMessage(chip)}
                    className="px-3 py-1 bg-gray-700 text-sm rounded-full hover:bg-gray-600 transition-colors"
                  >
                    {chip}
                  </button>
                ))}
              </div>
            )}

            {/* Input Form */}
            <form
              onSubmit={handleSubmit}
              className="p-4 border-t border-gray-700 flex items-center"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask a question..."
                className="flex-1 bg-gray-700 text-white rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#E6533C]"
                disabled={isLoading}
              />
              <button
                type="submit"
                className="ml-3 p-3 bg-[#E6533C] rounded-lg text-white disabled:bg-gray-600"
                disabled={isLoading || !inputValue.trim()}
              >
                <SendOutlined />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatbot;
