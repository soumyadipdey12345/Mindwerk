import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from './ui/button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission - show success message
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get in <span className="text-red-600">Touch</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Ready to transform your business? Let's discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
            
            {isSubmitted ? (
              <div className="bg-green-500/20 border border-green-500 rounded-lg p-6 text-center">
                <p className="text-green-400 text-lg font-medium">
                  ✓ Thank you! We'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-red-600 transition-colors text-white placeholder-white/40"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-red-600 transition-colors text-white placeholder-white/40"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-red-600 transition-colors text-white placeholder-white/40"
                    placeholder="+91 9830429608"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-red-600 transition-colors text-white placeholder-white/40 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors"
                >
                  Send Message
                  <Send size={18} />
                </Button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="text-white/70 mb-8">
                We're here to help and answer any question you might have. We look forward to hearing from you.
              </p>
            </div>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-red-600/50 transition-colors">
                <div className="bg-red-600/20 p-3 rounded-lg">
                  <Mail className="text-red-600" size={24} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <a href="mailto:nilanjan@mindwerk.in" className="text-white/70 hover:text-red-600 transition-colors">
                    nilanjan@mindwerk.in
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-red-600/50 transition-colors">
                <div className="bg-red-600/20 p-3 rounded-lg">
                  <Phone className="text-red-600" size={24} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Phone</h4>
                  <a href="tel:+919830429608" className="text-white/70 hover:text-red-600 transition-colors">
                    +91 9830429608
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-red-600/50 transition-colors">
                <div className="bg-red-600/20 p-3 rounded-lg">
                  <MapPin className="text-red-600" size={24} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Location</h4>
                  <p className="text-white/70">
                    Calcutta, India
                  </p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-red-600/10 border border-red-600/30 rounded-xl p-6">
              <h4 className="font-semibold mb-3">Business Hours</h4>
              <div className="text-center py-4">
                <div className="text-3xl font-bold text-red-600 mb-2">24 × 7</div>
                <p className="text-white/70 text-sm">Available Around the Clock</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
