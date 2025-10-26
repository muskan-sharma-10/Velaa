'use client';
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex gap-40">
          {/* Left Sidebar */}
          <div className="w-32 flex-shrink-0">
            <div className="sticky top-20 space-y-4 pt-5">
              <button className="block w-full text-left text-[13px] text-gray-900 font-normal">
                Contacts
              </button>
              <button className="block w-full text-left text-[13px] text-gray-400 hover:text-gray-600">
                Send a message
              </button>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1 max-w-xl space-y-16">
            {/* Contacts Section */}
            <div className="pt-4">
              <h2 className="text-[13px] font-medium mb-12 text-gray-900 border-b border-gray-200 pb-4">
                Contacts
              </h2>

              <div className="space-y-10">
                {/* Call us */}
                <div className="space-y-2">
                  <p className="text-[13px] text-gray-500">Call us</p>
                  <p className="text-[13px] text-black font-normal">+12 378 987 562</p>
                </div>

                {/* Chat on Whatsapp */}
                <div className="space-y-2">
                  <p className="text-[13px] text-gray-500">Chat on Whatsapp</p>
                  <div className="flex items-center justify-between">
                    <p className="text-[13px] text-black font-normal">+12 378 987 562</p>
                    <button className="flex items-center gap-2 text-[13px] text-black border border-black rounded-full px-4 py-2 hover:bg-black hover:text-white transition-colors">
                      Chat
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                {/* Send an email */}
                <div className="space-y-2">
                  <p className="text-[13px] text-gray-500">Send an email</p>
                  <p className="text-[13px] text-black font-normal">hello@velaa.az</p>
                </div>
              </div>
            </div>

            {/* Send a Message Section */}
            <div className="pt-4">
              <h2 className="text-[13px] font-medium mb-8 text-gray-900">
                Send a Message
              </h2>

              <div className="space-y-4">
                {/* Name and Surname */}
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="text-[13px] px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 transition-colors"
                  />
                  <input
                    type="text"
                    name="surname"
                    placeholder="Surname"
                    value={formData.surname}
                    onChange={handleChange}
                    className="text-[13px] px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 transition-colors"
                  />
                </div>

                {/* Email */}
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full text-[13px] px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 transition-colors"
                />

                {/* Phone Number */}
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full text-[13px] px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 transition-colors"
                />

                {/* Subject Dropdown */}
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full text-[13px] px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 transition-colors text-gray-500"
                >
                  <option value="">I need help about...</option>
                  <option value="product">Product Inquiry</option>
                  <option value="order">Order Status</option>
                  <option value="return">Returns & Refunds</option>
                  <option value="other">Other</option>
                </select>

                {/* Message */}
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full text-[13px] px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 transition-colors resize-none"
                />

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  className="w-full bg-black text-white text-[13px] font-medium py-3 rounded-full hover:bg-gray-800 transition-colors"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}