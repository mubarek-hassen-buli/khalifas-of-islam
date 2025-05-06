export interface ExpertWork {
  title: string;
  arabicTitle: string;
  description: string;
}

export interface Expert {
  name: string;
  fullName: string;
  arabicName: string;
  title: string;
  specialty: string;
  era: string;
  birthPlace: string;
  deathPlace: string;
  age: string;
  background: string;
  description: string;
  contributions: string[];
  majorWorks: ExpertWork[];
  methodologies: string;
  legacies: string;
  quote: string;
  influence: string;
  image: string;
  coverImage: string;
  slug: string;
}

export const experts: Expert[] = [
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
    background:
      "Al-Tabari was born to a wealthy family and showed exceptional intelligence from a young age. He began studying the Quran at seven and by age eight had become a prayer leader. He traveled extensively throughout the Islamic world to seek knowledge, studying in centers of learning such as Basra, Kufa, and Egypt before settling in Baghdad.",
    description:
      "One of the most prominent and influential scholars in Islamic historiography. His monumental work 'History of the Prophets and Kings' provides invaluable insights into early Islamic history, including detailed accounts of the Rashidun Caliphs.",
    contributions: [
      "Authored comprehensive historical chronicles",
      "Recorded detailed accounts of the Four Caliphs",
      "Combined historical narration with hadith methodology",
      "Preserved early Islamic tradition through rigorous documentation",
    ],
    majorWorks: [
      {
        title:
          "Tarikh al-Rusul wa al-Muluk (History of the Prophets and Kings)",
        arabicTitle: "تاريخ الرسل والملوك",
        description:
          "A monumental historical chronicle that begins with creation and covers Islamic history up to 915 CE, with particularly valuable accounts of the early caliphate period.",
      },
      {
        title: "Tafsir al-Tabari (The Commentary of al-Tabari)",
        arabicTitle: "تفسير الطبري",
        description:
          "A comprehensive Quranic exegesis that is renowned for its detailed linguistic analysis and collection of interpretations from earlier scholars.",
      },
      {
        title: "Tahdhib al-Athar",
        arabicTitle: "تهذيب الآثار",
        description:
          "A collection and analysis of hadith, focusing on legal matters and authentication methodology.",
      },
    ],
    methodologies:
      "Al-Tabari's historical methodology combined rigorous isnad (chain of narration) analysis with critical assessment of historical accounts. He often presented multiple narratives of the same event, allowing readers to evaluate different perspectives.",
    legacies:
      "Al-Tabari's works form the foundation of Islamic historiography. His attention to detail, comprehensive approach, and commitment to authenticating sources established standards that influenced generations of historians. His accounts of the Rashidun Caliphs remain primary source material for understanding this crucial period.",
    quote:
      "History is not merely the recording of facts, but the preservation of meaning behind those facts. In understanding our past, we illuminate the path for our future.",
    influence:
      "His influence extends beyond the Islamic world, as his historical works were translated and studied by Western scholars, providing vital information about early Islamic civilization and governance.",
    image: "/images/expert-1.jpg",
    coverImage: "/images/expert-img-1.jpg",
    slug: "al-tabari",
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
    background:
      "Ibn Kathir was born in Bosra and moved to Damascus at a young age following his father's death. He studied under prominent scholars including Ibn Taymiyyah, who greatly influenced his methodology and approach to Islamic sciences.",
    description:
      "A highly influential scholar known for his exceptional works in Quranic interpretation and historical documentation. His 'Al-Bidaya wa'l-Nihaya' (The Beginning and The End) contains valuable historical accounts of the Rashidun Caliphs.",
    contributions: [
      "Wrote seminal works on Islamic history",
      "Developed methodical approach to historical verification",
      "Compiled authentic narrations about the Caliphs",
      "Bridged theological understanding with historical events",
    ],
    majorWorks: [
      {
        title: "Al-Bidaya wa'l-Nihaya (The Beginning and The End)",
        arabicTitle: "البداية والنهاية",
        description:
          "A comprehensive historical work covering from creation to Ibn Kathir's own time, with detailed focus on Islamic history and the lives of the Caliphs.",
      },
      {
        title: "Tafsir Ibn Kathir",
        arabicTitle: "تفسير ابن كثير",
        description:
          "One of the most respected Quranic commentaries, known for its reliance on hadith and avoidance of unsupported interpretations.",
      },
      {
        title: "Al-Sira al-Nabawiyya (Biography of the Prophet)",
        arabicTitle: "السيرة النبوية",
        description:
          "A detailed biographical account of Prophet Muhammad ﷺ, extracted from his larger historical work.",
      },
    ],
    methodologies:
      "Ibn Kathir emphasized the importance of authentic narrations and scriptural evidence. His historical methodology involved careful verification of sources and preference for reports supported by strong chains of narration.",
    legacies:
      "Ibn Kathir's works remain highly influential in Islamic scholarship to this day. His approach to history and Quranic interpretation, with its emphasis on authentication and clear explanation, continues to shape modern Islamic education and research.",
    quote:
      "The strongest foundation of knowledge is that which is built upon authentic narration and sound reasoning, for truth stands clear from error.",
    influence:
      "His historical accounts of the Rashidun Caliphs provide invaluable insights into their governance, character, and contributions to Islamic civilization. His work continues to be translated into numerous languages and studied globally.",
    image: "/images/expert-2.jpg",
    coverImage: "/images/expert-img-2.jpg",
    slug: "ibn-kathir",
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
    background:
      "Muhammad ibn Sa'd began his scholarly journey in Basra before moving to Baghdad, the center of learning in the Abbasid Caliphate. He became a devoted student of al-Waqidi, one of the foremost scholars of his time, and served as his secretary for years, gaining invaluable experience in documentation and historical research.",
    description:
      "A pioneering figure in Islamic biographical literature and a student of the renowned scholar al-Waqidi. His magnum opus 'Kitab al-Tabaqat al-Kabir' (The Book of Major Classes) offers detailed biographies of the Prophet Muhammad ﷺ, his companions, and the early caliphs.",
    contributions: [
      "Created comprehensive biographical records",
      "Developed the tabaqat (generational) method of documentation",
      "Preserved personal details about the Caliphs",
      "Established standards for Islamic biographical writing",
    ],
    majorWorks: [
      {
        title: "Kitab al-Tabaqat al-Kabir (The Book of Major Classes)",
        arabicTitle: "كتاب الطبقات الكبير",
        description:
          "A monumental biographical encyclopedia organizing Islamic figures by generation, with detailed accounts of their lives, characteristics, and contributions.",
      },
      {
        title: "Al-Tabaqat al-Sughra (The Minor Classes)",
        arabicTitle: "الطبقات الصغرى",
        description:
          "A condensed version of his larger work, focusing on key figures in early Islamic history.",
      },
    ],
    methodologies:
      "Ibn Sa'd pioneered the tabaqat (generational classes) method of organizing biographical information, which became a standard approach in Islamic historiography. He meticulously documented physical descriptions, personal habits, and character traits alongside historical achievements.",
    legacies:
      "Ibn Sa'd's work preserved crucial details about early Islamic figures that would have otherwise been lost. His comprehensive biographical approach influenced the development of historical documentation in Islamic scholarship and provided an invaluable resource for understanding the lives of the Rashidun Caliphs.",
    quote:
      "The true measure of a person lies not only in their great deeds but in the small details of their character and daily conduct.",
    influence:
      "His detailed accounts of the Rashidun Caliphs provide intimate insights into their personal lives, administrative decisions, and leadership styles, offering a more complete picture than purely event-based historical records.",
    image: "/images/expert-3.jpg",
    coverImage: "/images/expert-img-1.jpg",
    slug: "muhammad-ibn-sad",
  },
];
