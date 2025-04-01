
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, Book, ScrollText, Quote } from 'lucide-react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { useToast } from '@/components/ui/use-toast';

// Expert data
const experts = [
  {
    name: "Al-Tabari",
    fullName: "Abu Ja'far Muhammad ibn Jarir al-Tabari",
    arabicName: "أبو جعفر محمد بن جرير الطبري",
    title: "Islamic Scholar & Historian",
    specialty: "Islamic History",
    era: "839-923 CE",
    birthPlace: "Amol, Tabaristan (modern-day Iran)",
    deathPlace: "Baghdad, Abbasid Caliphate (modern-day Iraq)",
    age: "84",
    background: "Al-Tabari was born to a wealthy family and showed exceptional intelligence from a young age. He began studying the Quran at seven and by age eight had become a prayer leader. He traveled extensively throughout the Islamic world to seek knowledge, studying in centers of learning such as Basra, Kufa, and Egypt before settling in Baghdad.",
    description: "One of the most prominent and influential scholars in Islamic historiography. His monumental work 'History of the Prophets and Kings' provides invaluable insights into early Islamic history, including detailed accounts of the Rashidun Caliphs.",
    contributions: [
      "Authored comprehensive historical chronicles",
      "Recorded detailed accounts of the Four Caliphs",
      "Combined historical narration with hadith methodology",
      "Preserved early Islamic tradition through rigorous documentation"
    ],
    majorWorks: [
      {
        title: "Tarikh al-Rusul wa al-Muluk (History of the Prophets and Kings)",
        arabicTitle: "تاريخ الرسل والملوك",
        description: "A monumental historical chronicle that begins with creation and covers Islamic history up to 915 CE, with particularly valuable accounts of the early caliphate period."
      },
      {
        title: "Tafsir al-Tabari (The Commentary of al-Tabari)",
        arabicTitle: "تفسير الطبري",
        description: "A comprehensive Quranic exegesis that is renowned for its detailed linguistic analysis and collection of interpretations from earlier scholars."
      },
      {
        title: "Tahdhib al-Athar",
        arabicTitle: "تهذيب الآثار",
        description: "A collection and analysis of hadith, focusing on legal matters and authentication methodology."
      }
    ],
    methodologies: "Al-Tabari's historical methodology combined rigorous isnad (chain of narration) analysis with critical assessment of historical accounts. He often presented multiple narratives of the same event, allowing readers to evaluate different perspectives.",
    legacies: "Al-Tabari's works form the foundation of Islamic historiography. His attention to detail, comprehensive approach, and commitment to authenticating sources established standards that influenced generations of historians. His accounts of the Rashidun Caliphs remain primary source material for understanding this crucial period.",
    quote: "History is not merely the recording of facts, but the preservation of meaning behind those facts. In understanding our past, we illuminate the path for our future.",
    influence: "His influence extends beyond the Islamic world, as his historical works were translated and studied by Western scholars, providing vital information about early Islamic civilization and governance.",
    image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    coverImage: "https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    slug: "al-tabari"
  },
  {
    name: "Ibn Kathir",
    fullName: "Ismail ibn Kathir ad-Dimashqi",
    arabicName: "إسماعيل بن عمر بن كثير",
    title: "Islamic Scholar & Historian",
    specialty: "Quranic Exegesis & History",
    era: "1300-1373 CE",
    birthPlace: "Bosra, Mamluk Sultanate (modern-day Syria)",
    deathPlace: "Damascus, Mamluk Sultanate (modern-day Syria)",
    age: "73",
    background: "Ibn Kathir was born in Bosra and moved to Damascus at a young age following his father's death. He studied under prominent scholars including Ibn Taymiyyah, who greatly influenced his methodology and approach to Islamic sciences.",
    description: "A highly influential scholar known for his exceptional works in Quranic interpretation and historical documentation. His 'Al-Bidaya wa'l-Nihaya' (The Beginning and The End) contains valuable historical accounts of the Rashidun Caliphs.",
    contributions: [
      "Wrote seminal works on Islamic history",
      "Developed methodical approach to historical verification",
      "Compiled authentic narrations about the Caliphs",
      "Bridged theological understanding with historical events"
    ],
    majorWorks: [
      {
        title: "Al-Bidaya wa'l-Nihaya (The Beginning and The End)",
        arabicTitle: "البداية والنهاية",
        description: "A comprehensive historical work covering from creation to Ibn Kathir's own time, with detailed focus on Islamic history and the lives of the Caliphs."
      },
      {
        title: "Tafsir Ibn Kathir",
        arabicTitle: "تفسير ابن كثير",
        description: "One of the most respected Quranic commentaries, known for its reliance on hadith and avoidance of unsupported interpretations."
      },
      {
        title: "Al-Sira al-Nabawiyya (Biography of the Prophet)",
        arabicTitle: "السيرة النبوية",
        description: "A detailed biographical account of Prophet Muhammad ﷺ, extracted from his larger historical work."
      }
    ],
    methodologies: "Ibn Kathir emphasized the importance of authentic narrations and scriptural evidence. His historical methodology involved careful verification of sources and preference for reports supported by strong chains of narration.",
    legacies: "Ibn Kathir's works remain highly influential in Islamic scholarship to this day. His approach to history and Quranic interpretation, with its emphasis on authentication and clear explanation, continues to shape modern Islamic education and research.",
    quote: "The strongest foundation of knowledge is that which is built upon authentic narration and sound reasoning, for truth stands clear from error.",
    influence: "His historical accounts of the Rashidun Caliphs provide invaluable insights into their governance, character, and contributions to Islamic civilization. His work continues to be translated into numerous languages and studied globally.",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    coverImage: "https://images.unsplash.com/photo-1586158291800-2665f07bba79?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    slug: "ibn-kathir"
  },
  {
    name: "Muhammad ibn Sa'd",
    fullName: "Muhammad ibn Sa'd ibn Mani' al-Baghdadi",
    arabicName: "محمد بن سعد",
    title: "Islamic Biographer & Scholar",
    specialty: "Biographical Documentation",
    era: "784-845 CE",
    birthPlace: "Basra, Abbasid Caliphate (modern-day Iraq)",
    deathPlace: "Baghdad, Abbasid Caliphate (modern-day Iraq)",
    age: "61",
    background: "Muhammad ibn Sa'd began his scholarly journey in Basra before moving to Baghdad, the center of learning in the Abbasid Caliphate. He became a devoted student of al-Waqidi, one of the foremost scholars of his time, and served as his secretary for years, gaining invaluable experience in documentation and historical research.",
    description: "A pioneering figure in Islamic biographical literature and a student of the renowned scholar al-Waqidi. His magnum opus 'Kitab al-Tabaqat al-Kabir' (The Book of Major Classes) offers detailed biographies of the Prophet Muhammad ﷺ, his companions, and the early caliphs.",
    contributions: [
      "Created comprehensive biographical records",
      "Developed the tabaqat (generational) method of documentation",
      "Preserved personal details about the Caliphs",
      "Established standards for Islamic biographical writing"
    ],
    majorWorks: [
      {
        title: "Kitab al-Tabaqat al-Kabir (The Book of Major Classes)",
        arabicTitle: "كتاب الطبقات الكبير",
        description: "A monumental biographical encyclopedia organizing Islamic figures by generation, with detailed accounts of their lives, characteristics, and contributions."
      },
      {
        title: "Al-Tabaqat al-Sughra (The Minor Classes)",
        arabicTitle: "الطبقات الصغرى",
        description: "A condensed version of his larger work, focusing on key figures in early Islamic history."
      }
    ],
    methodologies: "Ibn Sa'd pioneered the tabaqat (generational classes) method of organizing biographical information, which became a standard approach in Islamic historiography. He meticulously documented physical descriptions, personal habits, and character traits alongside historical achievements.",
    legacies: "Ibn Sa'd's work preserved crucial details about early Islamic figures that would have otherwise been lost. His comprehensive biographical approach influenced the development of historical documentation in Islamic scholarship and provided an invaluable resource for understanding the lives of the Rashidun Caliphs.",
    quote: "The true measure of a person lies not only in their great deeds but in the small details of their character and daily conduct.",
    influence: "His detailed accounts of the Rashidun Caliphs provide intimate insights into their personal lives, administrative decisions, and leadership styles, offering a more complete picture than purely event-based historical records.",
    image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    coverImage: "https://images.unsplash.com/photo-1465321897912-c692b37a09a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    slug: "muhammad-ibn-sad"
  }
];

const ExpertBiography = () => {
  const { slug } = useParams<{ slug: string }>();
  const [expert, setExpert] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('biography');
  const { toast } = useToast();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Find the expert based on the slug
    const selectedExpert = experts.find(e => e.slug === slug);
    
    if (selectedExpert) {
      setExpert(selectedExpert);
      setLoading(false);
    } else {
      toast({
        title: "Scholar not found",
        description: "We couldn't find information for this scholar.",
        variant: "destructive"
      });
      setLoading(false);
    }
  }, [slug, toast]);
  
  if (loading) {
    return (
      <div className="min-h-screen bg-islamic-black flex items-center justify-center">
        <div className="text-gold-light text-xl animate-pulse">Loading scholar profile...</div>
      </div>
    );
  }
  
  if (!expert) {
    return (
      <div className="min-h-screen bg-islamic-black">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl text-white mb-4">Scholar Not Found</h1>
          <Link to="/" className="text-gold-light hover:underline">Return to Home</Link>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-islamic-black perspective">
      <Navbar />
      
      {/* Hero Section with Cover Image */}
      <div className="relative h-80 md:h-96 overflow-hidden">
        <div className="absolute inset-0 bg-black/70 z-10"></div>
        <img 
          src={expert.coverImage} 
          alt={expert.name} 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-islamic-black to-transparent z-20"></div>
        
        <div className="container mx-auto px-4 relative z-30 h-full flex flex-col justify-end pb-8">
          <Link to="/#experts" className="text-gold-light hover:text-gold mb-4 inline-flex items-center transition-colors w-fit">
            <ChevronLeft size={18} />
            <span>Back to Scholars</span>
          </Link>
          
          <div className="transform-3d" style={{ transform: 'translateZ(20px)' }}>
            <div className="mb-2 opacity-80">
              <h2 className="text-gold-light font-arabic text-3xl md:text-4xl">{expert.arabicName}</h2>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold font-cinzel text-white mb-2">{expert.name}</h1>
            <p className="text-xl text-gold-light/90">{expert.title} • {expert.era}</p>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-islamic-charcoal border border-gold/10 rounded-xl p-6 mb-6 transform-3d" style={{ transform: 'translateZ(10px)' }}>
              <div className="flex flex-col items-center mb-6">
                <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-gold/30 mb-4">
                  <img 
                    src={expert.image} 
                    alt={expert.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-cinzel font-semibold text-center gold-gradient mb-1">{expert.fullName}</h3>
                <p className="text-gold-light/80 text-sm mb-1">{expert.specialty}</p>
                <p className="text-white/50 text-xs">{expert.birthPlace} • {expert.era}</p>
              </div>
              
              <div className="space-y-4 border-t border-gold/10 pt-4">
                <div>
                  <h4 className="text-gold-light text-sm font-semibold mb-1">Era</h4>
                  <p className="text-white/80 text-sm">{expert.era}</p>
                </div>
                <div>
                  <h4 className="text-gold-light text-sm font-semibold mb-1">Place of Birth</h4>
                  <p className="text-white/80 text-sm">{expert.birthPlace}</p>
                </div>
                <div>
                  <h4 className="text-gold-light text-sm font-semibold mb-1">Place of Death</h4>
                  <p className="text-white/80 text-sm">{expert.deathPlace}</p>
                </div>
                <div>
                  <h4 className="text-gold-light text-sm font-semibold mb-1">Age</h4>
                  <p className="text-white/80 text-sm">{expert.age} years</p>
                </div>
              </div>
            </div>
            
            {/* Navigation */}
            <div className="bg-islamic-charcoal border border-gold/10 rounded-xl overflow-hidden transform-3d" style={{ transform: 'translateZ(10px)' }}>
              <button 
                onClick={() => setActiveSection('biography')}
                className={`w-full py-3 px-4 text-left flex items-center transition-colors ${activeSection === 'biography' ? 'bg-gold/20 text-gold-light' : 'hover:bg-gold/10 text-white/80'}`}
              >
                <Book size={18} className="mr-2" />
                <span>Biography</span>
              </button>
              <button 
                onClick={() => setActiveSection('works')}
                className={`w-full py-3 px-4 text-left flex items-center transition-colors ${activeSection === 'works' ? 'bg-gold/20 text-gold-light' : 'hover:bg-gold/10 text-white/80'}`}
              >
                <ScrollText size={18} className="mr-2" />
                <span>Major Works</span>
              </button>
              <button 
                onClick={() => setActiveSection('legacy')}
                className={`w-full py-3 px-4 text-left flex items-center transition-colors ${activeSection === 'legacy' ? 'bg-gold/20 text-gold-light' : 'hover:bg-gold/10 text-white/80'}`}
              >
                <Quote size={18} className="mr-2" />
                <span>Legacy & Influence</span>
              </button>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-islamic-charcoal border border-gold/10 rounded-xl p-6 md:p-8 transform-3d" style={{ transform: 'translateZ(15px)' }}>
              {activeSection === 'biography' && (
                <div className="space-y-6 animate-fade-in">
                  <h2 className="text-2xl md:text-3xl font-bold font-cinzel gold-gradient mb-6">Biography</h2>
                  
                  <div>
                    <h3 className="text-xl font-cinzel text-white mb-3">Background</h3>
                    <p className="text-white/80 leading-relaxed">{expert.background}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-cinzel text-white mb-3">Scholarly Life</h3>
                    <p className="text-white/80 leading-relaxed">{expert.description}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-cinzel text-white mb-3">Key Contributions</h3>
                    <ul className="space-y-2">
                      {expert.contributions.map((contribution: string, idx: number) => (
                        <li key={idx} className="text-white/80 flex items-start">
                          <span className="text-gold-light mr-2">•</span>
                          <span>{contribution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-cinzel text-white mb-3">Methodology</h3>
                    <p className="text-white/80 leading-relaxed">{expert.methodologies}</p>
                  </div>
                  
                  <div className="p-6 border border-gold/20 rounded-lg bg-islamic-black/50 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-gold-light w-full h-full">
                        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                        <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                      </svg>
                    </div>
                    <blockquote className="text-gold-light/90 italic text-lg relative z-10">
                      "{expert.quote}"
                    </blockquote>
                  </div>
                </div>
              )}
              
              {activeSection === 'works' && (
                <div className="space-y-6 animate-fade-in">
                  <h2 className="text-2xl md:text-3xl font-bold font-cinzel gold-gradient mb-6">Major Works</h2>
                  
                  <div className="space-y-8">
                    {expert.majorWorks.map((work: any, idx: number) => (
                      <div key={idx} className="border border-gold/10 rounded-lg p-6 bg-islamic-blue/5 hover:bg-islamic-blue/10 transition-colors">
                        <div className="mb-2 opacity-90">
                          <h4 className="text-gold-light font-arabic text-xl">{work.arabicTitle}</h4>
                        </div>
                        <h3 className="text-xl font-cinzel text-white mb-2">{work.title}</h3>
                        <p className="text-white/80">{work.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {activeSection === 'legacy' && (
                <div className="space-y-6 animate-fade-in">
                  <h2 className="text-2xl md:text-3xl font-bold font-cinzel gold-gradient mb-6">Legacy & Influence</h2>
                  
                  <div>
                    <h3 className="text-xl font-cinzel text-white mb-3">Historical Impact</h3>
                    <p className="text-white/80 leading-relaxed">{expert.legacies}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-cinzel text-white mb-3">Influence on Caliphal Studies</h3>
                    <p className="text-white/80 leading-relaxed">{expert.influence}</p>
                  </div>
                  
                  <div className="p-6 border border-gold/20 rounded-lg bg-gradient-to-br from-islamic-blue/30 to-transparent">
                    <h3 className="text-xl font-cinzel text-gold-light mb-3">Enduring Relevance</h3>
                    <p className="text-white/80 leading-relaxed">
                      The works of {expert.name} continue to be studied in Islamic educational institutions worldwide. His methodical approach to documenting the lives and achievements of the Rashidun Caliphs provides an invaluable window into this formative period of Islamic history and governance.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ExpertBiography;
