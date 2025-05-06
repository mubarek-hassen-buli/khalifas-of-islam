export interface CaliphBiography {
  name: string;
  arabicName: string;
  title: string;
  years: string;
  lifespan: string;
  birthplace: string;
  fullName: string;
  mainImage: string;
  secondaryImage: string;
  background: string;
  personalLife: string;
  leadershipStyle: string;
  achievements: string[];
  challenges: string;
  quotes: string[];
  death: string;
  legacy: string;
  historicalContext: string;
}

export type CaliphBiographiesData = {
  [key: string]: CaliphBiography;
};

export const caliphBiographies: CaliphBiographiesData = {
  "abu-bakr": {
    name: "Abu Bakr As-Siddiq",
    arabicName: "أبو بكر الصديق",
    title: "The Truthful",
    years: "632-634 CE",
    lifespan: "573-634 CE (aged 61)",
    birthplace: "Mecca, Arabia",
    fullName: "Abdullah ibn Abi Quhafah",
    mainImage: "/images/background-img-1.jpg",
    secondaryImage:
      "/images/background-img-2.jpg",
    background:
      "Abu Bakr was born into a wealthy merchant family and was known for his honest business practices. He was among the first converts to Islam and was Prophet Muhammad's closest companion.",
    personalLife:
      "Abu Bakr married four women throughout his life: Qutaylah bint Abd al-Uzza, Umm Ruman, Habibah bint Kharijah, and Asma bint Umais. He had six children: Aisha, Abdullah, Asma, Abdur-Rahman, Umm Kulthum, and Muhammad.",
    leadershipStyle:
      "Known for his gentle yet firm leadership, Abu Bakr maintained the unity of the Muslim community during a critical period following the Prophet's death. He was humble, lived simply despite his authority, and was known for his fairness and wisdom.",
    achievements: [
      "Successfully handled the ridda (apostasy) wars, preserving the unity of the Islamic state",
      "Initiated the compilation of the Quran into a single manuscript",
      "Established the first structured governmental system for the Islamic state",
      "Expanded Islamic territories into Syria and Iraq",
    ],
    challenges:
      "The greatest challenge Abu Bakr faced was the widespread apostasy and rebellion after Prophet Muhammad's death. Multiple tribes refused to pay zakat (charity) and some followed false prophets who emerged.",
    quotes: [
      "If I were to take a close friend other than my Lord, I would have taken Abu Bakr as a friend. (Prophet Muhammad)",
      "O people, if I have been appointed over you, it does not mean I am the best of you.",
    ],
    death:
      "Abu Bakr died of natural causes in 634 CE after falling ill with a fever that lasted for 15 days. Before his death, he appointed Umar ibn Al-Khattab as his successor to ensure a smooth transition of leadership.",
    legacy:
      "Abu Bakr's short but crucial caliphate established the precedent for Islamic governance, preserved the Muslim community's unity, and laid the groundwork for the rapid expansion of Islam that would follow. His compilation of the Quran was one of his most enduring contributions.",
    historicalContext:
      "Abu Bakr's caliphate occurred at a critical juncture when the Islamic community was vulnerable following the Prophet's death. His leadership prevented fragmentation and established the foundation for what would become one of history's most significant empires.",
  },
  umar: {
    name: "Umar ibn Al-Khattab",
    arabicName: "عمر بن الخطاب",
    title: "Al-Farooq (The Distinguisher)",
    years: "634-644 CE",
    lifespan: "584-644 CE (aged 60)",
    birthplace: "Mecca, Arabia",
    fullName: "Umar ibn Al-Khattab Al-Adawi Al-Qurashi",
    mainImage: "/images/background-img-2.jpg",
    secondaryImage:
      "/images/background-img-4.jpg",
    background:
      "Born to a merchant family of the Banu Adi clan, Umar was initially one of Islam's strongest opponents before becoming one of its most ardent supporters. His conversion marked a turning point for the early Muslim community.",
    personalLife:
      "Umar had nine wives throughout his lifetime, though not all simultaneously, and had fourteen children. Among his notable children were Abdullah ibn Umar, a great scholar, and Hafsa, who became one of Prophet Muhammad's wives.",
    leadershipStyle:
      "Umar was known for his strict justice, accessibility to the common people, and innovative administrative approaches. He lived simply despite being the leader of a vast empire and was known to personally inspect the conditions of his subjects.",
    achievements: [
      "Expanded the Islamic territories to include Egypt, Jerusalem, and Persia",
      "Established the Hijri (Islamic) calendar",
      "Created the first diwan (government department) system for administration",
      "Introduced the concept of regular census and welfare benefits for citizens",
    ],
    challenges:
      "Umar faced the challenge of governing an explosively expanding empire with diverse cultures and religions. He had to develop systems of governance, taxation, and justice that could accommodate these complexities.",
    quotes: [
      "O God, make the remaining years of my life good, make my end good, and make the best of my life my end before I meet You.",
      "The best way to defeat your enemy is to make him your friend.",
    ],
    death:
      "Umar was assassinated in 644 CE by Abu Lu'lu'ah Firuz, a Persian slave who harbored resentment against him. He was stabbed multiple times while leading the morning prayer in the mosque.",
    legacy:
      "Umar's decade-long caliphate saw the transformation of the Islamic state from a regional power to an international empire. His administrative innovations, emphasizing justice and public welfare, became foundational for Islamic governance.",
    historicalContext:
      "Umar's caliphate coincided with the weakening of the Byzantine and Sassanid empires, creating an opportunity for the expanding Islamic state. His governance established models that would influence Islamic and world history for centuries.",
  },
  uthman: {
    name: "Uthman ibn Affan",
    arabicName: "عثمان بن عفان",
    title: "Dhun-Nurayn (Possessor of Two Lights)",
    years: "644-656 CE",
    lifespan: "576-656 CE (aged 80)",
    birthplace: "Ta'if, Arabia",
    fullName: "Uthman ibn Affan ibn Abi al-As",
    mainImage: "/images/background-img-3.jpg",
    secondaryImage:
      "/images/background-img-3.jpg",
    background:
      "Born into the wealthy Umayyad clan, Uthman was a successful merchant before embracing Islam. He was known for his modesty and generosity despite his wealth. He earned the title 'Dhun-Nurayn' (Possessor of Two Lights) for marrying two of Prophet Muhammad's daughters, Ruqayyah and Umm Kulthum.",
    personalLife:
      "Uthman's most famous marriages were to Prophet Muhammad's daughters Ruqayyah and, after her death, Umm Kulthum. He had a total of nine children from various marriages. He was known for his exceptional modesty and shyness.",
    leadershipStyle:
      "Uthman's leadership was characterized by generosity, consultation, and reliance on family members for administration. He expanded the empire while focusing on internal consolidation and religious standardization.",
    achievements: [
      "Standardized the text of the Quran, creating an official version distributed throughout the growing empire",
      "Expanded the Prophet's Mosque in Medina",
      "Extended Islamic territories to include parts of modern-day Iran, Afghanistan, and North Africa",
      "Developed the first Islamic naval force",
    ],
    challenges:
      "Uthman's later years were marked by accusations of nepotism and economic inequalities, leading to dissent in various provinces. His reliance on members of his Umayyad clan for governance positions fueled criticism.",
    quotes: [
      "Modesty and faith are linked together, when one of them is removed, the other follows it.",
      "I will not take off a shirt that Allah has put on me.",
    ],
    death:
      "Uthman was killed during a siege of his house by rebels from Egypt and Iraq in 656 CE. Despite having the opportunity to fight back, he refused to shed Muslim blood and was assassinated while reading the Quran.",
    legacy:
      "Uthman's most enduring legacy is the standardization of the Quranic text, which preserved Islam's core scripture in its authentic form. His caliphate also saw significant territorial expansion and naval development.",
    historicalContext:
      "Uthman's rule occurred during a time of rapid expansion and increasing wealth, which brought new challenges to Islamic governance. The social and economic changes during this period contributed to tensions that ultimately led to the first major civil conflict in Islamic history.",
  },
  ali: {
    name: "Ali ibn Abi Talib",
    arabicName: "علي بن أبي طالب",
    title: "Asad Allah (Lion of Allah)",
    years: "656-661 CE",
    lifespan: "601-661 CE (aged 60)",
    birthplace: "Mecca, Arabia",
    fullName: "Ali ibn Abi Talib ibn Abd al-Muttalib",
    mainImage: "/images/background-img-4.jpg",
    secondaryImage: "/images/background-img-1.jpg",
    background:
      "Ali was Prophet Muhammad's cousin and son-in-law, raised in the Prophet's household from a young age. He was the first male child to accept Islam and was known for his extraordinary courage, deep knowledge, and eloquence.",
    personalLife:
      "Ali was married to Fatimah, the daughter of Prophet Muhammad, and they had five children: Hassan, Hussein, Zainab, Umm Kulthum, and Muhsin. After Fatimah's death, Ali married several other women and had a total of 15 children.",
    leadershipStyle:
      "Ali's leadership was marked by strict justice, simplicity, and a deep commitment to Islamic principles. He was known for his accessibility to common people and his unwillingness to compromise on matters of principle.",
    achievements: [
      "Preserved authentic Islamic teachings during a turbulent period",
      "Advanced Islamic jurisprudence through his judgments and teachings",
      "Created a more equitable distribution system for public treasury",
      "Established important precedents in Islamic governance and administration",
    ],
    challenges:
      "Ali's caliphate was marked by civil war, beginning with the Battle of the Camel against forces led by Aisha, the Prophet's widow, and continuing with the protracted conflict with Muawiyah, the governor of Syria.",
    quotes: [
      "The strongest among you is he who subdues himself.",
      "Knowledge is better than wealth because it protects you while you have to guard wealth.",
      "A man's worth depends upon the nobility of his aspirations.",
    ],
    death:
      "Ali was assassinated in 661 CE by Abd al-Rahman ibn Muljam, a Kharijite who sought revenge for Ali's role in the Battle of Nahrawan. He was struck with a poisoned sword while praying in the mosque in Kufa.",
    legacy:
      "Ali's legacy is profound and multifaceted, particularly in Islamic spirituality, justice, and knowledge. He is revered by Sunni Muslims as the fourth rightly guided caliph and by Shia Muslims as the first Imam and rightful successor to Prophet Muhammad.",
    historicalContext:
      "Ali's caliphate occurred during a period of internal strife that reshaped Islamic politics and eventually led to the division between Sunni and Shia Islam. His rule represented the end of the Rashidun caliphate and transition to the Umayyad dynasty.",
  },
};
