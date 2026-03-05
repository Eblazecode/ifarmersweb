import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Newsletter: React.FC = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: 'Subscribed!',
        description: 'Thank you for subscribing to our newsletter.',
      });
      setEmail('');
    }, 1000);
  };

  return (
    <section className="py-16 bg-[#8B4513]">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <Mail className="h-12 w-12 text-white mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-white mb-4">
          Stay Updated with Agricultural Insights
        </h2>
        <p className="text-gray-200 mb-8">
          Subscribe to our newsletter for the latest farming tips, industry news, and exclusive offers.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            className="flex-1 px-6 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7CB342]"
          />
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center justify-center bg-[#2D5016] hover:bg-[#7CB342] text-white font-semibold px-8 py-4 rounded-lg transition-colors disabled:opacity-50"
          >
            {loading ? 'Subscribing...' : <><Send className="mr-2 h-5 w-5" /> Subscribe</>}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
