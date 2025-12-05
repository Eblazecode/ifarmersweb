import React, { useState } from 'react';
import { Search, Calendar, User, BookOpen, FileText, Video, Lightbulb } from 'lucide-react';

const categories = ['All', 'Blog', 'Guides', 'Tutorials', 'Case Studies'];

const articles = [
  { id: 1, category: 'Blog', title: 'Understanding Soil pH and Its Impact on Crop Yield', excerpt: 'Learn how soil pH affects nutrient availability and what you can do to optimize it.', date: 'Nov 28, 2025', author: 'Dr. James Mwangi', image: 'https://d64gsuwffb70l.cloudfront.net/692e6b896dea5f3608504ed6_1764650353095_7f7b72e2.webp' },
  { id: 2, category: 'Guides', title: 'Complete Guide to NPK Fertilizer Ratios', excerpt: 'Everything you need to know about nitrogen, phosphorus, and potassium for your crops.', date: 'Nov 25, 2025', author: 'Sarah Odhiambo', image: 'https://d64gsuwffb70l.cloudfront.net/692e6b896dea5f3608504ed6_1764649956214_0a045282.webp' },
  { id: 3, category: 'Tutorials', title: 'How to Use Our Farm Management Software', excerpt: 'Step-by-step tutorial on getting started with iFarmers digital tools.', date: 'Nov 22, 2025', author: 'Michael Kiprop', image: 'https://d64gsuwffb70l.cloudfront.net/692e6b896dea5f3608504ed6_1764649957169_eb6b50d3.webp' },
  { id: 4, category: 'Case Studies', title: 'How Nakuru Farmers Increased Yield by 45%', excerpt: 'A success story of implementing precision agriculture techniques.', date: 'Nov 20, 2025', author: 'Grace Wambui', image: 'https://d64gsuwffb70l.cloudfront.net/692e6b896dea5f3608504ed6_1764650355026_643b61e3.webp' },
  { id: 5, category: 'Blog', title: 'Climate-Smart Agriculture Practices', excerpt: 'Adapting farming practices to changing climate conditions.', date: 'Nov 18, 2025', author: 'Dr. James Mwangi', image: 'https://d64gsuwffb70l.cloudfront.net/692e6b896dea5f3608504ed6_1764650356931_7fb3775c.webp' },
  { id: 6, category: 'Guides', title: 'Pest Management Best Practices', excerpt: 'Integrated pest management strategies for sustainable farming.', date: 'Nov 15, 2025', author: 'Sarah Odhiambo', image: 'https://d64gsuwffb70l.cloudfront.net/692e6b896dea5f3608504ed6_1764650358831_00d305e6.webp' },
  { id: 7, category: 'Tutorials', title: 'Drip Irrigation Setup Guide', excerpt: 'How to install and maintain efficient drip irrigation systems.', date: 'Nov 12, 2025', author: 'Michael Kiprop', image: 'https://d64gsuwffb70l.cloudfront.net/692e6b896dea5f3608504ed6_1764649933376_4b50541b.webp' },
  { id: 8, category: 'Case Studies', title: 'Transforming Smallholder Farms in Kisumu', excerpt: 'How our project management approach helped 500 farmers.', date: 'Nov 10, 2025', author: 'Grace Wambui', image: 'https://d64gsuwffb70l.cloudfront.net/692e6b896dea5f3608504ed6_1764649935341_b87aeae1.webp' },
];

const KnowledgePage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = articles.filter(a => 
    (activeCategory === 'All' || a.category === activeCategory) &&
    (a.title.toLowerCase().includes(searchTerm.toLowerCase()) || a.excerpt.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const getIcon = (cat: string) => {
    switch(cat) {
      case 'Blog': return <BookOpen className="h-4 w-4" />;
      case 'Guides': return <FileText className="h-4 w-4" />;
      case 'Tutorials': return <Video className="h-4 w-4" />;
      default: return <Lightbulb className="h-4 w-4" />;
    }
  };

  return (
    <div>
      <section className="bg-gradient-to-r from-[#2D5016] to-[#1a3009] py-20">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Knowledge Center</h1>
          <p className="text-xl text-gray-200 mb-8">Resources to help you grow</p>
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input type="text" placeholder="Search articles..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#7CB342]" />
          </div>
        </div>
      </section>

      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setActiveCategory(cat)} className={`px-6 py-2 rounded-full font-medium transition-all ${activeCategory === cat ? 'bg-[#7CB342] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>{cat}</button>
          ))}
        </div>
      </section>

      <section className="py-16 bg-[#F5F5DC]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((article) => (
              <article key={article.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow group cursor-pointer">
                <div className="h-40 overflow-hidden">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <div className="flex items-center space-x-2 text-[#7CB342] text-sm mb-2">{getIcon(article.category)}<span>{article.category}</span></div>
                  <h3 className="text-md font-bold text-[#2D5016] mb-2 line-clamp-2">{article.title}</h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{article.excerpt}</p>
                  <div className="flex items-center text-xs text-gray-500">
                    <Calendar className="h-3 w-3 mr-1" />{article.date}
                  </div>
                </div>
              </article>
            ))}
          </div>
          {filtered.length === 0 && <p className="text-center text-gray-500 py-12">No articles found.</p>}
        </div>
      </section>
    </div>
  );
};

export default KnowledgePage;