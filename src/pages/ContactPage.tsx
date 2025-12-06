import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, PhoneCall } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactPage: React.FC = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [callback, setCallback] = useState({ name: '', phone: '', time: '' });
  const [loading, setLoading] = useState(false);
  const [callbackLoading, setCallbackLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: 'Message Sent!', description: 'We will get back to you within 24 hours.' });
      setForm({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 1500);
  };

  const handleCallback = (e: React.FormEvent) => {
    e.preventDefault();
    setCallbackLoading(true);
    setTimeout(() => {
      setCallbackLoading(false);
      toast({ title: 'Callback Requested!', description: 'Our team will call you at your preferred time.' });
      setCallback({ name: '', phone: '', time: '' });
    }, 1500);
  };

  return (
    <div>
      <section className="bg-gradient-to-r from-[#2D5016] to-[#1a3009] py-20">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-200">Get in touch with our team</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-[#2D5016] mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input name="name" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} placeholder="Your Name *" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7CB342]" />
                  <input name="email" type="email" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} placeholder="Email Address *" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7CB342]" />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <input name="phone" value={form.phone} onChange={(e) => setForm({...form, phone: e.target.value})} placeholder="Phone Number" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7CB342]" />
                  <select name="subject" value={form.subject} onChange={(e) => setForm({...form, subject: e.target.value})} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7CB342]">
                    <option value="">Select Subject *</option>
                    <option value="fertilizer">Fertilizer Blending</option>
                    <option value="input">Input Supply</option>
                    <option value="project">Project Management</option>
                    <option value="software">Software Demo</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <textarea name="message" value={form.message} onChange={(e) => setForm({...form, message: e.target.value})} placeholder="Your Message *" required rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7CB342]" />
                <button type="submit" disabled={loading} className="inline-flex items-center bg-[#2D5016] hover:bg-[#7CB342] text-white font-semibold px-8 py-4 rounded-lg transition-colors disabled:opacity-50">
                  {loading ? 'Sending...' : <><Send className="mr-2 h-5 w-5" /> Send Message</>}
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-[#2D5016] mb-4">Contact Information</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3"><Phone className="h-5 w-5 text-[#7CB342] mt-1" /><div><p className="font-medium">Phone</p><p className="text-gray-600">+234 904 605 0154
                  </p></div></li>
                  <li className="flex items-start space-x-3"><Mail className="h-5 w-5 text-[#7CB342] mt-1" /><div><p className="font-medium">Email</p><p className="text-gray-600">info@ifarmerslimited.com</p></div></li>
                  <li className="flex items-start space-x-3"><MapPin className="h-5 w-5 text-[#7CB342] mt-1" /><div><p className="font-medium">Address</p><p className="text-gray-600">Central Business District, Abuja</p></div></li>
                  <li className="flex items-start space-x-3"><Clock className="h-5 w-5 text-[#7CB342] mt-1" /><div><p className="font-medium">Hours</p><p className="text-gray-600">Mon-Fri: 8am - 6pm</p></div></li>
                </ul>
              </div>

              <a href="https://wa.me/254700123456" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-4 rounded-lg transition-colors w-full">
                <MessageCircle className="h-5 w-5" /><span>Chat on WhatsApp</span>
              </a>

              <div className="bg-[#F5F5DC] p-6 rounded-xl">
                <h4 className="font-bold text-[#2D5016] mb-4 flex items-center"><PhoneCall className="h-5 w-5 mr-2" /> Request a Callback</h4>
                <form onSubmit={handleCallback} className="space-y-4">
                  <input value={callback.name} onChange={(e) => setCallback({...callback, name: e.target.value})} placeholder="Your Name" required className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm" />
                  <input value={callback.phone} onChange={(e) => setCallback({...callback, phone: e.target.value})} placeholder="Phone Number" required className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm" />
                  <select value={callback.time} onChange={(e) => setCallback({...callback, time: e.target.value})} required className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm">
                    <option value="">Preferred Time</option>
                    <option value="morning">Morning (8am-12pm)</option>
                    <option value="afternoon">Afternoon (12pm-5pm)</option>
                  </select>
                  <button type="submit" disabled={callbackLoading} className="w-full bg-[#8B4513] hover:bg-[#6d3610] text-white font-medium py-2 rounded-lg text-sm">{callbackLoading ? 'Requesting...' : 'Request Callback'}</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default ContactPage;