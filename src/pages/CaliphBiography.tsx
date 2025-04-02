import React, { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft, Calendar, Users, BookOpen, Award, Heart, Skull } from 'lucide-react';

// Biography data for each caliph
const caliphBiographies = {
  'abu-bakr': {
    name: "Abu Bakr As-Siddiq",
    arabicName: "أبو بكر الصديق",
    title: "The Truthful",
    years: "632-634 CE",
    lifespan: "573-634 CE (aged 61)",
    birthplace: "Mecca, Arabia",
    fullName: "Abdullah ibn Abi Quhafah",
    mainImage: "https://images.unsplash.com/photo-1542127306-0c407ede5d28?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1605218873203-323dd4626c10?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    background: "Abu Bakr was born into a wealthy merchant family and was known for his honest business practices. He was among the first converts to Islam and was Prophet Muhammad's closest companion.",
    personalLife: "Abu Bakr married four women throughout his life: Qutaylah bint Abd al-Uzza, Umm Ruman, Habibah bint Kharijah, and Asma bint Umais. He had six children: Aisha, Abdullah, Asma, Abdur-Rahman, Umm Kulthum, and Muhammad.",
    leadershipStyle: "Known for his gentle yet firm leadership, Abu Bakr maintained the unity of the Muslim community during a critical period following the Prophet's death. He was humble, lived simply despite his authority, and was known for his fairness and wisdom.",
    achievements: [
      "Successfully handled the ridda (apostasy) wars, preserving the unity of the Islamic state",
      "Initiated the compilation of the Quran into a single manuscript",
      "Established the first structured governmental system for the Islamic state",
      "Expanded Islamic territories into Syria and Iraq"
    ],
    challenges: "The greatest challenge Abu Bakr faced was the widespread apostasy and rebellion after Prophet Muhammad's death. Multiple tribes refused to pay zakat (charity) and some followed false prophets who emerged.",
    quotes: [
      "If I were to take a close friend other than my Lord, I would have taken Abu Bakr as a friend. (Prophet Muhammad)",
      "O people, if I have been appointed over you, it does not mean I am the best of you."
    ],
    death: "Abu Bakr died of natural causes in 634 CE after falling ill with a fever that lasted for 15 days. Before his death, he appointed Umar ibn Al-Khattab as his successor to ensure a smooth transition of leadership.",
    legacy: "Abu Bakr's short but crucial caliphate established the precedent for Islamic governance, preserved the Muslim community's unity, and laid the groundwork for the rapid expansion of Islam that would follow. His compilation of the Quran was one of his most enduring contributions.",
    historicalContext: "Abu Bakr's caliphate occurred at a critical juncture when the Islamic community was vulnerable following the Prophet's death. His leadership prevented fragmentation and established the foundation for what would become one of history's most significant empires."
  },
  'umar': {
    name: "Umar ibn Al-Khattab",
    arabicName: "عمر بن الخطاب",
    title: "Al-Farooq (The Distinguisher)",
    years: "634-644 CE",
    lifespan: "584-644 CE (aged 60)",
    birthplace: "Mecca, Arabia",
    fullName: "Umar ibn Al-Khattab Al-Adawi Al-Qurashi",
    mainImage: "https://images.unsplash.com/photo-1519828158127-4e8dee9e5639?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1601991087252-ed907f653e3a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    background: "Born to a merchant family of the Banu Adi clan, Umar was initially one of Islam's strongest opponents before becoming one of its most ardent supporters. His conversion marked a turning point for the early Muslim community.",
    personalLife: "Umar had nine wives throughout his lifetime, though not all simultaneously, and had fourteen children. Among his notable children were Abdullah ibn Umar, a great scholar, and Hafsa, who became one of Prophet Muhammad's wives.",
    leadershipStyle: "Umar was known for his strict justice, accessibility to the common people, and innovative administrative approaches. He lived simply despite being the leader of a vast empire and was known to personally inspect the conditions of his subjects.",
    achievements: [
      "Expanded the Islamic territories to include Egypt, Jerusalem, and Persia",
      "Established the Hijri (Islamic) calendar",
      "Created the first diwan (government department) system for administration",
      "Introduced the concept of regular census and welfare benefits for citizens"
    ],
    challenges: "Umar faced the challenge of governing an explosively expanding empire with diverse cultures and religions. He had to develop systems of governance, taxation, and justice that could accommodate these complexities.",
    quotes: [
      "O God, make the remaining years of my life good, make my end good, and make the best of my life my end before I meet You.",
      "The best way to defeat your enemy is to make him your friend."
    ],
    death: "Umar was assassinated in 644 CE by Abu Lu'lu'ah Firuz, a Persian slave who harbored resentment against him. He was stabbed multiple times while leading the morning prayer in the mosque.",
    legacy: "Umar's decade-long caliphate saw the transformation of the Islamic state from a regional power to an international empire. His administrative innovations, emphasizing justice and public welfare, became foundational for Islamic governance.",
    historicalContext: "Umar's caliphate coincided with the weakening of the Byzantine and Sassanid empires, creating an opportunity for the expanding Islamic state. His governance established models that would influence Islamic and world history for centuries."
  },
  'uthman': {
    name: "Uthman ibn Affan",
    arabicName: "عثمان بن عفان",
    title: "Dhun-Nurayn (Possessor of Two Lights)",
    years: "644-656 CE",
    lifespan: "576-656 CE (aged 80)",
    birthplace: "Ta'if, Arabia",
    fullName: "Uthman ibn Affan ibn Abi al-As",
    mainImage: "https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1605540436563-5bca919ae766?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    background: "Born into the wealthy Umayyad clan, Uthman was a successful merchant before embracing Islam. He was known for his modesty and generosity despite his wealth. He earned the title 'Dhun-Nurayn' (Possessor of Two Lights) for marrying two of Prophet Muhammad's daughters, Ruqayyah and Umm Kulthum.",
    personalLife: "Uthman's most famous marriages were to Prophet Muhammad's daughters Ruqayyah and, after her death, Umm Kulthum. He had a total of nine children from various marriages. He was known for his exceptional modesty and shyness.",
    leadershipStyle: "Uthman's leadership was characterized by generosity, consultation, and reliance on family members for administration. He expanded the empire while focusing on internal consolidation and religious standardization.",
    achievements: [
      "Standardized the text of the Quran, creating an official version distributed throughout the growing empire",
      "Expanded the Prophet's Mosque in Medina",
      "Extended Islamic territories to include parts of modern-day Iran, Afghanistan, and North Africa",
      "Developed the first Islamic naval force"
    ],
    challenges: "Uthman's later years were marked by accusations of nepotism and economic inequalities, leading to dissent in various provinces. His reliance on members of his Umayyad clan for governance positions fueled criticism.",
    quotes: [
      "Modesty and faith are linked together, when one of them is removed, the other follows it.",
      "I will not take off a shirt that Allah has put on me."
    ],
    death: "Uthman was killed during a siege of his house by rebels from Egypt and Iraq in 656 CE. Despite having the opportunity to fight back, he refused to shed Muslim blood and was assassinated while reading the Quran.",
    legacy: "Uthman's most enduring legacy is the standardization of the Quranic text, which preserved Islam's core scripture in its authentic form. His caliphate also saw significant territorial expansion and naval development.",
    historicalContext: "Uthman's rule occurred during a time of rapid expansion and increasing wealth, which brought new challenges to Islamic governance. The social and economic changes during this period contributed to tensions that ultimately led to the first major civil conflict in Islamic history."
  },
  'ali': {
    name: "Ali ibn Abi Talib",
    arabicName: "علي بن أبي طالب",
    title: "Asad Allah (Lion of Allah)",
    years: "656-661 CE",
    lifespan: "601-661 CE (aged 60)",
    birthplace: "Mecca, Arabia",
    fullName: "Ali ibn Abi Talib ibn Abd al-Muttalib",
    mainImage: "https://images.unsplash.com/photo-1564769610726-59cead6a6f8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1519692933481-e162a57d6721?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    background: "Ali was Prophet Muhammad's cousin and son-in-law, raised in the Prophet's household from a young age. He was the first male child to accept Islam and was known for his extraordinary courage, deep knowledge, and eloquence.",
    personalLife: "Ali was married to Fatimah, the daughter of Prophet Muhammad, and they had five children: Hassan, Hussein, Zainab, Umm Kulthum, and Muhsin. After Fatimah's death, Ali married several other women and had a total of 15 children.",
    leadershipStyle: "Ali's leadership was marked by strict justice, simplicity, and a deep commitment to Islamic principles. He was known for his accessibility to common people and his unwillingness to compromise on matters of principle.",
    achievements: [
      "Preserved authentic Islamic teachings during a turbulent period",
      "Advanced Islamic jurisprudence through his judgments and teachings",
      "Created a more equitable distribution system for public treasury",
      "Established important precedents in Islamic governance and administration"
    ],
    challenges: "Ali's caliphate was marked by civil war, beginning with the Battle of the Camel against forces led by Aisha, the Prophet's widow, and continuing with the protracted conflict with Muawiyah, the governor of Syria.",
    quotes: [
      "The strongest among you is he who subdues himself.",
      "Knowledge is better than wealth because it protects you while you have to guard wealth.",
      "A man's worth depends upon the nobility of his aspirations."
    ],
    death: "Ali was assassinated in 661 CE by Abd al-Rahman ibn Muljam, a Kharijite who sought revenge for Ali's role in the Battle of Nahrawan. He was struck with a poisoned sword while praying in the mosque in Kufa.",
    legacy: "Ali's legacy is profound and multifaceted, particularly in Islamic spirituality, justice, and knowledge. He is revered by Sunni Muslims as the fourth rightly guided caliph and by Shia Muslims as the first Imam and rightful successor to Prophet Muhammad.",
    historicalContext: "Ali's caliphate occurred during a period of internal strife that reshaped Islamic politics and eventually led to the division between Sunni and Shia Islam. His rule represented the end of the Rashidun caliphate and transition to the Umayyad dynasty."
  }
};

const CaliphBiography = () => {
  const { slug } = useParams<{ slug: string }>();
  const bioRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);
  
  if (!slug || !caliphBiographies[slug as keyof typeof caliphBiographies]) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-islamic-black">
        <div className="text-center p-8">
          <h1 className="text-3xl font-bold text-gold mb-4">Caliph Not Found</h1>
          <p className="text-white/70 mb-6">The biography you're looking for doesn't exist.</p>
          <Link to="/" className="px-5 py-2 rounded-md bg-gold text-islamic-black font-medium">
            Return Home
          </Link>
        </div>
      </div>
    );
  }
  
  const caliph = caliphBiographies[slug as keyof typeof caliphBiographies];
  
  return (
    <div className="bg-islamic-black min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div 
        className="relative h-[60vh] overflow-hidden"
        style={{
          background: `linear-gradient(to bottom, rgba(9, 18, 31, 0.7), rgba(9, 18, 31, 0.95)), url(${caliph.mainImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-islamic-black/30"></div>
        
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-10 -left-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-1/2 -right-10 w-80 h-80 bg-gold/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container mx-auto px-6 h-full flex flex-col justify-center relative z-10">
          <Link to="/#caliphs" className="flex items-center text-gold hover:text-gold-light mb-6 transition-colors w-fit">
            <ArrowLeft size={16} className="mr-2" />
            <span>Back to Caliphs</span>
          </Link>
          
          <div className="mb-6 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-arabic text-gold-light mb-2 opacity-80">{caliph.arabicName}</h2>
          </div>
          
          <h1 
            className="text-4xl md:text-6xl font-bold font-cinzel text-white mb-3 transform-3d animate-fade-in"
            style={{ 
              transform: 'translateZ(50px)',
              textShadow: '0 5px 20px rgba(0,0,0,0.5), 0 0 30px rgba(212,175,55,0.3)'
            }}
          >
            {caliph.name}
          </h1>
          
          <div className="flex items-center space-x-3 mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <span className="text-lg md:text-xl font-cinzel text-gold-light">{caliph.title}</span>
            <span className="w-1 h-1 rounded-full bg-gold/50"></span>
            <span className="text-white/60">{caliph.years}</span>
          </div>
          
          <p className="max-w-2xl text-white/80 text-lg animate-fade-in" style={{ animationDelay: '0.3s' }}>
            {caliph.background}
          </p>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-islamic-black to-transparent"></div>
      </div>
      
      {/* Biography Content */}
      <div className="container mx-auto px-6 py-16 relative" ref={bioRef}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            {/* Key Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-islamic-charcoal p-6 rounded-xl border border-gold/10 animate-fade-in transform-3d" style={{ animationDelay: '0.4s', transform: 'translateZ(20px)' }}>
                <div className="flex items-center mb-4">
                  <Calendar className="text-gold mr-3" size={20} />
                  <h3 className="text-lg font-semibold text-white">Life Span</h3>
                </div>
                <p className="text-white/70">{caliph.lifespan}</p>
                <p className="text-white/70 mt-2">Born in {caliph.birthplace}</p>
              </div>
              
              <div className="bg-islamic-charcoal p-6 rounded-xl border border-gold/10 animate-fade-in transform-3d" style={{ animationDelay: '0.5s', transform: 'translateZ(20px)' }}>
                <div className="flex items-center mb-4">
                  <BookOpen className="text-gold mr-3" size={20} />
                  <h3 className="text-lg font-semibold text-white">Full Name</h3>
                </div>
                <p className="text-white/70">{caliph.fullName}</p>
              </div>
            </div>
            
            {/* Personal Life */}
            <div className="bg-islamic-charcoal p-8 rounded-xl border border-gold/10 animate-fade-in transform-3d" style={{ animationDelay: '0.6s', transform: 'translateZ(10px)' }}>
              <div className="flex items-center mb-6">
                <Heart className="text-gold mr-3" size={24} />
                <h2 className="text-2xl font-semibold font-cinzel text-white">Personal Life</h2>
              </div>
              
              <p className="text-white/80 leading-relaxed">{caliph.personalLife}</p>
            </div>
            
            {/* Leadership */}
            <div className="bg-islamic-charcoal p-8 rounded-xl border border-gold/10 animate-fade-in transform-3d" style={{ animationDelay: '0.7s', transform: 'translateZ(10px)' }}>
              <div className="flex items-center mb-6">
                <Award className="text-gold mr-3" size={24} />
                <h2 className="text-2xl font-semibold font-cinzel text-white">Leadership Style</h2>
              </div>
              
              <p className="text-white/80 leading-relaxed mb-6">{caliph.leadershipStyle}</p>
              
              <h3 className="text-xl font-semibold text-gold-light mb-4">Notable Achievements</h3>
              <ul className="space-y-3">
                {caliph.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold mt-2 mr-3"></span>
                    <span className="text-white/70">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Challenges */}
            <div className="bg-islamic-charcoal p-8 rounded-xl border border-gold/10 animate-fade-in transform-3d" style={{ animationDelay: '0.8s', transform: 'translateZ(10px)' }}>
              <h2 className="text-2xl font-semibold font-cinzel text-white mb-4">Challenges Faced</h2>
              <p className="text-white/80 leading-relaxed">{caliph.challenges}</p>
            </div>
            
            {/* Death and Legacy */}
            <div className="bg-islamic-charcoal p-8 rounded-xl border border-gold/10 animate-fade-in transform-3d" style={{ animationDelay: '0.9s', transform: 'translateZ(10px)' }}>
              <div className="flex items-center mb-6">
                <Skull className="text-gold mr-3" size={24} />
                <h2 className="text-2xl font-semibold font-cinzel text-white">Death & Legacy</h2>
              </div>
              
              <h3 className="text-xl font-semibold text-gold-light mb-3">Death</h3>
              <p className="text-white/80 leading-relaxed mb-6">{caliph.death}</p>
              
              <h3 className="text-xl font-semibold text-gold-light mb-3">Enduring Legacy</h3>
              <p className="text-white/80 leading-relaxed">{caliph.legacy}</p>
            </div>
            
            {/* Historical Context */}
            <div className="bg-islamic-charcoal p-8 rounded-xl border border-gold/10 animate-fade-in transform-3d" style={{ animationDelay: '1s', transform: 'translateZ(10px)' }}>
              <h2 className="text-2xl font-semibold font-cinzel text-white mb-4">Historical Context</h2>
              <p className="text-white/80 leading-relaxed">{caliph.historicalContext}</p>
            </div>
          </div>
          
          <div className="space-y-8 order-first lg:order-last">
            {/* Sidebar Image */}
            <div className="relative animate-fade-in transform-3d" style={{ animationDelay: '0.5s', transform: 'translateZ(30px)' }}>
              <div className="absolute -inset-1 bg-gradient-to-r from-gold-light via-gold to-gold-dark rounded-xl blur-sm opacity-30"></div>
              <div className="relative h-80 rounded-xl overflow-hidden">
                <img src={caliph.secondaryImage} alt={caliph.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-islamic-black/80 to-transparent"></div>
              </div>
            </div>
            
            {/* Notable Quotes */}
            <div className="bg-islamic-charcoal p-6 rounded-xl border border-gold/10 animate-fade-in transform-3d" style={{ animationDelay: '0.6s', transform: 'translateZ(20px)' }}>
              <h3 className="text-xl font-semibold font-cinzel text-white mb-4">Notable Quotes</h3>
              <div className="space-y-4">
                {caliph.quotes.map((quote, index) => (
                  <div key={index} className="border-l-2 border-gold pl-4 py-1">
                    <p className="text-white/80 italic">{quote}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Side Navigation */}
            <div className="bg-islamic-charcoal p-6 rounded-xl border border-gold/10 hidden lg:block sticky top-24 animate-fade-in transform-3d" style={{ animationDelay: '0.7s', transform: 'translateZ(20px)' }}>
              <h3 className="text-xl font-semibold font-cinzel text-white mb-4">View Other Caliphs</h3>
              <ul className="space-y-3">
                {Object.entries(caliphBiographies).map(([bioSlug, bio]) => (
                  <li key={bioSlug} className={bioSlug === slug ? 'text-gold' : 'text-white/60'}>
                    <Link to={`/caliph/${bioSlug}`} className="hover:text-gold transition-colors">
                      {bio.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CaliphBiography;
