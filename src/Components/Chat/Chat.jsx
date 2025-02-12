import React from "react";
import { MessageCircle } from "lucide-react";

const WhatsAppChat = () => {
  const phoneNumber = "9354796405"; // Replace with your WhatsApp number
  const message = "Hello! I need some assistance."; // Default message

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg flex items-center space-x-2 transition duration-300"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="hidden md:inline font-medium">Chat with us</span>
      </a>
    </div>
  );
};

export default WhatsAppChat;
