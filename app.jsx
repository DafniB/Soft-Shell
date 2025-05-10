import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaUpload,
  FaMoneyBillWave,
  FaCheckCircle,
  FaShieldAlt,
  FaUsers,
  FaClock,
  FaStar,
  FaRobot,
  FaPaperPlane
} from "react-icons/fa";

const sampleQuestions = [
  "How do I sell my license?",
  "What types of licenses are accepted?",
  "How long does it take to get paid?",
];

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! I’m SoftBot. Ask me anything about selling your licenses." },
  ]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const sendMessage = () => {
    if (!chatInput.trim()) return;
    const newMessages = [...messages, { sender: "user", text: chatInput }];
    let response = "Sorry, I don’t have an answer for that yet.";

    if (chatInput.toLowerCase().includes("sell my license")) {
      response = "Just click the 'Sell My Licenses' button and follow the steps!";
    } else if (chatInput.toLowerCase().includes("types of licenses")) {
      response = "We accept software and enterprise suite licenses.";
    } else if (chatInput.toLowerCase().includes("get paid")) {
      response = "Payments are usually processed within 2–3 business days.";
    }

    setMessages([...newMessages, { sender: "bot", text: response }]);
    setChatInput("");
  };

  return (
    <div className={darkMode ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"}>
      <header className="p-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">SoftSell</h1>
        <button
          onClick={toggleDarkMode}
          className="px-4 py-2 border rounded text-sm"
        >
          Toggle {darkMode ? "Light" : "Dark"} Mode
        </button>
      </header>

      {/* Hero Section */}
      <section className="text-center p-10">
        <h2 className="text-4xl font-bold mb-2">Turn Unused Software Into Cash</h2>
        <p className="text-lg mb-6">Sell your old licenses in three easy steps.</p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">Sell My Licenses</button>
      </section>

      {/* How It Works */}
      <section className="p-10 bg-gray-100 dark:bg-gray-800">
        <h3 className="text-2xl font-semibold mb-6 text-center">How It Works</h3>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div>
            <FaUpload className="mx-auto text-4xl mb-2" />
            <p>Upload Your License</p>
          </div>
          <div>
            <FaCheckCircle className="mx-auto text-4xl mb-2" />
            <p>Get a Valuation</p>
          </div>
          <div>
            <FaMoneyBillWave className="mx-auto text-4xl mb-2" />
            <p>Get Paid Fast</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="p-10">
        <h3 className="text-2xl font-semibold mb-6 text-center">Why Choose Us</h3>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div>
            <FaShieldAlt className="mx-auto text-3xl mb-2" />
            <p>Secure Process</p>
          </div>
          <div>
            <FaClock className="mx-auto text-3xl mb-2" />
            <p>Quick Turnaround</p>
          </div>
          <div>
            <FaUsers className="mx-auto text-3xl mb-2" />
            <p>Trusted by Users</p>
          </div>
          <div>
            <FaStar className="mx-auto text-3xl mb-2" />
            <p>Top Rated Support</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="p-10 bg-gray-100 dark:bg-gray-800">
        <h3 className="text-2xl font-semibold mb-6 text-center">What Our Customers Say</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-4 border rounded dark:border-gray-700">
            <p>“SoftSell helped us get value from unused tools. Super easy process!”</p>
            <p className="mt-2 font-semibold">— Alex Johnson, IT Manager, TechCorp</p>
          </div>
          <div className="p-4 border rounded dark:border-gray-700">
            <p>“Fast payments and great support. Highly recommend.”</p>
            <p className="mt-2 font-semibold">— Priya Mehra, CTO, CloudNova</p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="p-10">
        <h3 className="text-2xl font-semibold mb-6 text-center">Get in Touch</h3>
        <form className="max-w-xl mx-auto grid gap-4">
          <input type="text" placeholder="Name" className="p-2 border rounded" required />
          <input type="email" placeholder="Email" className="p-2 border rounded" required />
          <input type="text" placeholder="Company" className="p-2 border rounded" required />
          <select className="p-2 border rounded" required>
            <option value="">Select License Type</option>
            <option value="software">Software</option>
            <option value="enterprise">Enterprise Suite</option>
          </select>
          <textarea placeholder="Message" className="p-2 border rounded" rows="4" required />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Submit</button>
        </form>
      </section>

      {/* AI Chat Widget */}
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setChatOpen(!chatOpen)}
          className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700"
        >
          <FaRobot />
        </button>

        {chatOpen && (
          <div className="w-80 h-96 bg-white dark:bg-gray-900 text-black dark:text-white border rounded shadow-lg p-4 mt-2 flex flex-col">
            <div className="flex-1 overflow-y-auto space-y-2">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`p-2 rounded ${msg.sender === "bot" ? "bg-gray-200 dark:bg-gray-700" : "bg-blue-100 dark:bg-blue-800"}`}
                >
                  {msg.text}
                </div>
              ))}
            </div>
            <div className="flex gap-2 mt-2">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Type a question..."
                className="flex-1 p-2 border rounded dark:bg-gray-800"
              />
              <button onClick={sendMessage} className="bg-blue-600 text-white p-2 rounded">
                <FaPaperPlane />
              </button>
            </div>
          </div>
        )}
      </div>

      <footer className="p-4 text-center text-sm text-gray-600 dark:text-gray-400">
        © 2025 SoftSell. All rights reserved.
      </footer>
    </div>
  );
}
