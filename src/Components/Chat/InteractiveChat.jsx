import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { motion } from "framer-motion";

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "1234567890";
  const message = "Hello! I need some assistance.";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen ? (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg flex items-center space-x-2 transition duration-300"
          onClick={() => setIsOpen(true)}
        >
          <MessageCircle className="w-6 h-6" />
        </motion.button>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          className="bg-white shadow-lg rounded-xl p-4 w-64"
        >
          <div className="flex justify-between items-center border-b pb-2 mb-2">
            <h4 className="text-lg font-semibold">Chat with Us</h4>
            <button
              className="text-gray-500 hover:text-red-500"
              onClick={() => setIsOpen(false)}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <p className="text-gray-700">How can we assist you today?</p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg block text-center transition"
          >
            Start Chat
          </a>
        </motion.div>
      )}
    </div>
  );
};

export default WhatsAppChat;
