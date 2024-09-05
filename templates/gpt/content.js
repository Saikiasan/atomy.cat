// contentData.js

const contentData = {
  form: {
    english: {
      name: "Your Name",
      address: "Your Address",
      link: "Meeting Link",
      formTitle: "Meeting Templates",
      generateButton: "Submit",
      switchTo: "Switch to Assamese",
      nameTxt: "Enter your name",
      addressTxt: "Enter your address",
      linkTxt: "Enter Google meet link",
      dateTxt: "Date",
      timeTxt: "Time",
    },
    assamese: {
      name: "আপোনাৰ নাম",
      address: "আপোনাৰ ঠিকনা",
      link: "মিটিং লিংক",
      formTitle: "মিটিং টেমপ্লেটসমূহ",
      generateButton: "দাখিল কৰক",
      switchTo: "Switch to English",
      nameTxt: "আপোনাৰ নাম সন্নিবেশ কৰক",
      addressTxt: "আপোনাৰ ঠিকনা সন্নিবেশ কৰক",
      linkTxt: "গুগল মিট লিংক সন্নিবেশ কৰক",
      dateTxt: "তাৰিখ",
      timeTxt: "সময়",
    },
    hindi: {
      name: "आपका नाम",
      address: "आपका पता",
      link: "मीटिंग लिंक",
      formTitle: "मीटिंग टेम्पलेट्स",
      generateButton: "सबमिट करें",
      switchTo: "अंग्रेजी में स्विच करें",
      nameTxt: "अपना नाम दर्ज करें",
      addressTxt: "अपना पता दर्ज करें",
      linkTxt: "गूगल मीट लिंक दर्ज करें",
      dateTxt: "तारीख",
      timeTxt: "समय",
    },
  },
  content: {
    english: {
      day: `
⭐🌍 *I LOVE ATOMY INDIA* 🌍⭐\n
📝 Education is essential for success.
Learn and grow!✍✍✍
🧭🧭🧭🧭🧭🧭🧭🧭
🎯🎯🎯🎯🎯🎯🎯🎯🎯
🙏Hello, I am {name} from ({address}).
Welcome to today’s daytime training session
🙏🙏🙏
Please join us online by clicking the link below.
🙏🙏🙏\n
👇👇👇👇👇👇👇👇
{meeting link}
👆👆👆👆👆👆👆👆
Click the link to join the meeting.
Time: {time}
Date: {date}\n
Today's topics include:
1/ ID verification and Settings.
2/ Hosting.
3/ Meeting Link Sharing.
4/ Shopping Process.
5/ Joining Process.
6/ Facebook Post.\n
Our great active leader {name} from ({address}) will discuss these topics with you.\n
🙏Thank you🙏`,

      night: `
🏆🏆🏆🏆🏆🏆🏆
🌹I LOVE ATOMY INDIA🌹
🏆🏆🏆🏆🏆🏆🏆\n
🌹🌹👂🧏🏻🧏‍♂🧏‍♀🌷🌷
🙏Without education, success is impossible. Learn and grow!🙏
🌹🌷🌹🌾💐🌻🌸\n
🗣🎙🙏Hello, Atomy members, I am {name} from ({address}).
I warmly welcome all old and new members to today’s evening meeting.
Please be present in the training session on time. 🌷👂🧏🏻🧏‍♀🧏‍♂🧏‍♀🌹✒🖊🌹🎤\n
Click the link below to join the meeting.\n
👇👇👇👇👇
{meeting link}
👆👆👆👆👆\n
🎯🎯🎯🎯🎯🎯🎯🎯🎯
Time: {time}
Date: {date}\n
Topics for today’s discussion:
1. 👉 Discussion on Atomy’s PDF profile, products, and how we can earn from Atomy, led by our great active leader {name} from ({address}).
2. 👉 Detailed discussion on two Atomy products by our great active leader {name} from ({address}).
3. 👉 Answers to questions from all present members by our great active leader {name} from ({address}).
4. 👉 Comments and meeting wrap-up by the training organizer.\n
🎯🎯🎯🎯🎯🎯🎯🎯🎯
Unity is our strength. Let’s come together on the same platform to turn our dreams into reality.
🙏🙏Thank you🙏🙏`,
    },
    assamese: {
      day: `⭐🌍 *I LOVE ATOMY INDIA🌍*⭐
        📝শিক্ষাৰ অবিহনে সফলতা অসম্ভৱ, গতিকে শিকো আহক ✍✍✍🧭🧭🧭🧭🧭🧭🧭🧭
        🎯🎯🎯🎯🎯🎯🎯🎯🎯
        🙏🙏🙏নমস্কাৰ, মই {name} ({address}) সকলোকে আজিৰ দিনৰ প্ৰশিক্ষণলৈ আদৰণি জনাইছো🙏🙏🙏
  
        অনলাইন প্ৰশিক্ষণত উপস্থিত থাকিবলৈ নিমন্ত্ৰণ জনালোঁ 🙏🙏🙏
  
        👇👇👇👇👇👇👇👇
        {meeting link}
        👆👆👆👆👆👆👆👆
        ওপৰৰ লিংকত ক্লিক কৰি মিটিংত প্ৰৱেশ কৰিব পাৰিব
        সময় - {time} বজাত
        তাৰিখ: {date}
  
        আজিৰ প্ৰশিক্ষণৰ আলোচনাৰ বিষয়সমূহ:
        1/ ID ভেৰিফিকেশ্বন আৰু ছেটিংছ।
        2/ হষ্টিং।
        3/ মিটিং লিংক ভাগ-বতৰা।
        4/ শপিং প্ৰচেছ।
        5/ যোগদান প্ৰক্ৰিয়া।
        6/ ফেচবুক পোষ্ট।
  
        আমাৰ গ্ৰেট এক্টিভ লিডাৰ {name} ({address}) এই বিষয়বোৰ আলোচনা কৰিব।
  
        🙏ধন্যবাদ🙏`,

      night: `🏆🏆🏆🏆🏆🏆🏆
        🌹I LOVE ATOMY INDIA🌹
        🏆🏆🏆🏆🏆🏆🏆
        🌹🌹👂🧏🏻🧏‍♂🧏‍♀🌷🌷
        🙏শিক্ষাৰ অবিহনে সফলতা অসম্ভৱ, গতিকে শিকো আহক🙏
        🌹🌷🌹🌾💐🌻🌸
        🗣🎙🙏নমস্কাৰ এটমীয়ান সকল মই {name} ({address} )
        আজি সন্ধিয়াৰ মিটিং খনলৈ ন পুৰনি সকলো সদস্য সদস্যাক আদৰণি জনাইছোঁ। 🌷👂🧏🏻🧏‍♀🧏‍♂🧏‍♀🌹✒🖊🌹🎤
  
        তলৰ লিঙ্কটো ক্লিক কৰি মিটিংত যোগদান কৰিব  
        👇👇👇👇👇
        {meeting link}
        👆👆👆👆👆
        🎯🎯🎯🎯🎯🎯🎯🎯🎯
        সময় সন্ধিয়াৰ {time} বজা
        *তাৰিখ: {date}
  
        আজিৰ আলোচনাৰ বিষয়সমূহ:
        1. 👉এটমীৰ পি ডি এফ প্ৰফাইল, প্ৰডাক্ট আৰু এটমীৰ পৰা আমি কেনেকৈ উপাৰ্জন কৰিব পাৰিম, সেই বিষয়ে আলোচনা কৰিব আমাৰ মাজৰ গ্ৰেট এক্টিভ লিডাৰ {name} ({address})
        2. 👉এটমীৰ দুটা প্ৰডাক্টৰ বিষয়ে বিতংকৈ আলোচনা কৰিব, আমাৰ মাজৰ গ্ৰেট এক্টিভ লিডাৰ {name} ({address})
        3. 👉সভাত উপস্থিত ন পুৰনি সকলো সদস্য সদস্যাৰ প্ৰশ্নৰ উত্তৰ দিব, আমাৰ মাজৰ গ্ৰেট এক্টিভ লিডাৰ {name} ({address})
        4. 👉প্ৰশিক্ষণ আয়োজকৰ মন্তব্য আৰু সভা ভংগ।
  
        🎯🎯🎯🎯🎯🎯🎯🎯🎯
        একতাই আমাৰ শক্তি, একতাই আমাৰ উন্নতি। আহক একেখন মঞ্চতে সকলো মিলি একগোট হৈ নিজৰ সপোনবোৰ বাস্তৱত পৰিণত কৰো।
        🙏🙏ধন্যবাদ🙏🙏`,
    },
    hindi: {
      day: `⭐🌍 *I LOVE ATOMY INDIA🌍*⭐
        📝शिक्षा के बिना सफलता असंभव है। इसलिए सीखें और बढ़ें! ✍✍✍🧭🧭🧭🧭🧭🧭🧭🧭
        🎯🎯🎯🎯🎯🎯🎯🎯🎯
        🙏🙏🙏नमस्कार, मैं {name} ({address}) सभी को आज की दिन की ट्रेनिंग सेशन में स्वागत करता हूँ🙏🙏🙏
  
        कृपया ऑनलाइन प्रशिक्षण में उपस्थित रहने के लिए निमंत्रण 🙏🙏🙏
  
        👇👇👇👇👇👇👇👇
        {meeting link}
        👆👆👆👆👆👆👆👆
      लिंक पर क्लिक करके बैठक में शामिल हों।
      समय - {time}
      तारीख: {date}

      आज के प्रशिक्षण के विषय:
      1/ आईडी सत्यापन और सेटिंग्स।
      2/ होस्टिंग।
      3/ बैठक लिंक साझा करना।
      4/ खरीदारी प्रक्रिया।
      5/ शामिल होने की प्रक्रिया।
      6/ फेसबुक पोस्ट।

      हमारे महान सक्रिय नेता {name} ({address}) इन विषयों पर चर्चा करेंगे।

      🙏धन्यवाद🙏`,

      night: `🏆🏆🏆🏆🏆🏆🏆
      🌹I LOVE ATOMY INDIA🌹
      🏆🏆🏆🏆🏆🏆🏆
      🌹🌹👂🧏🏻🧏‍♂🧏‍♀🌷🌷
      🙏शिक्षा के बिना सफलता असंभव है। इसलिए सीखें और बढ़ें!🙏
      🌹🌷🌹🌾💐🌻🌸
      🗣🎙🙏नमस्कार, एटॉमी सदस्यगण, मैं {name} ({address})।
      आज शाम की बैठक में सभी पुराने और नए सदस्यगण का स्वागत करता हूँ।
      कृपया समय पर प्रशिक्षण सत्र में उपस्थित रहें। 🌷👂🧏🏻🧏‍♀🧏‍♂🧏‍♀🌹✒🖊🌹🎤

      नीचे दिए गए लिंक पर क्लिक करके बैठक में शामिल हों।
      👇👇👇👇👇
      {meeting link}
      👆👆👆👆👆
      🎯🎯🎯🎯🎯🎯🎯🎯🎯
      समय: {time}
      तारीख: {date}

      आज की चर्चा के विषय:
      1. 👉 एटॉमी की पीडीएफ प्रोफाइल, उत्पाद और एटॉमी से कमाई कैसे करें, पर चर्चा करेंगे हमारे महान सक्रिय नेता {name} ({address})।
      2. 👉 एटॉमी के दो उत्पादों पर विस्तृत चर्चा करेंगे हमारे महान सक्रिय नेता {name} ({address})।
      3. 👉 बैठक में उपस्थित सभी सदस्यों के प्रश्नों के उत्तर देंगे हमारे महान सक्रिय नेता {name} ({address})।
      4. 👉 प्रशिक्षण आयोजक द्वारा टिप्पणियाँ और बैठक का समापन।

      🎯🎯🎯🎯🎯🎯🎯🎯🎯
      एकता हमारी ताकत है। आइए एक साथ मिलकर अपने सपनों को साकार करें।
      🙏🙏धन्यवाद🙏🙏`,
    },
  },
};
