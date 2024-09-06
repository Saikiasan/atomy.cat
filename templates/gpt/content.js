// contentData.js

const contentData = {
  form: {
    english: {
      hostNameLabel: "Host Name",
      hostAddrLabel: "Host Address",
      trainerNameLabel: "Trainer Name",
      trainerAddrLabel: "Trainer Address",
      link: "Meeting Link",
      formTitle: "Meeting Templates",
      generateButton: "Submit",
      switchTo: "Switch to Assamese",

      hostNamePlaceholder: "Enter host name",
      hostAddrPlaceholder: "Enter host address",
      trainerNamePlaceholder: "Enter trainer name",
      trainerAddrPlaceholder: "Enter trainer address",

      linkTxt: "Enter Google meet link",
      dateTxt: "Date",
      timeTxt: "Time",
      nightLeader: "Host Name",
      nightPdf: "PDF Reading",
      nightProducts: "Product Discussion",
      nightQnA: "Questions & Answers",
    },
    assamese: {
      hostNameLabel: "আয়োজকৰ নাম",
      hostAddrLabel: "আয়োজকৰ ঠিকনা",
      trainerNameLabel: "প্ৰশিক্ষকৰ নাম",
      trainerAddrLabel: "প্ৰশিক্ষকৰ ঠিকনা",
      link: "মিটিং লিংক",
      formTitle: "মিটিং টেমপ্লেট",
      generateButton: "জৰি কৰক",
      switchTo: "অসমীয়ালৈ সলনি কৰক",

      hostNamePlaceholder: "আয়োজকৰ নাম সন্নিৱিষ্ট কৰক",
      hostAddrPlaceholder: "আয়োজকৰ ঠিকনা সন্নিৱিষ্ট কৰক",
      trainerNamePlaceholder: "প্ৰশিক্ষকৰ নাম সন্নিৱিষ্ট কৰক",
      trainerAddrPlaceholder: "প্ৰশিক্ষকৰ ঠিকনা সন্নিৱিষ্ট কৰক",

      linkTxt: "গুগল মিট লিংক সন্নিৱিষ্ট কৰক",
      dateTxt: "তাৰিখ",
      timeTxt: "সময়",
      nightLeader: "আয়োজকৰ নাম",
      nightPdf: "PDF পঢ়া",
      nightProducts: "প্ৰডাক্ট আলোচনা",
      nightQnA: "প্ৰশ্ন আৰু উত্তৰ",
    },

    hindi: {
      hostNameLabel: "होस्ट का नाम",
      hostAddrLabel: "होस्ट का पता",
      trainerNameLabel: "ट्रेनर का नाम",
      trainerAddrLabel: "ट्रेनर का पता",
      link: "मीटिंग लिंक",
      formTitle: "मीटिंग टेम्पलेट्स",
      generateButton: "जमा करें",
      switchTo: "असमिया में स्विच करें",

      hostNamePlaceholder: "होस्ट का नाम दर्ज करें",
      hostAddrPlaceholder: "होस्ट का पता दर्ज करें",
      trainerNamePlaceholder: "ट्रेनर का नाम दर्ज करें",
      trainerAddrPlaceholder: "ट्रेनर का पता दर्ज करें",

      linkTxt: "गूगल मीट लिंक दर्ज करें",
      dateTxt: "तारीख",
      timeTxt: "समय",
      nightLeader: "नेता का नाम",
      nightPdf: "PDF पढ़ना",
      nightProducts: "उत्पाद चर्चा",
      nightQnA: "प्रश्न और उत्तर",
    },
  },

  content: {
    english: {
      day: `
⭐🌍 *I LOVE ATOMY INDIA* 🌍⭐\n
📝 Education is essential for success.
Learn and grow!✍✍✍
🧭🧭🧭🧭🧭🧭🧭🧭\n
🎯🎯🎯🎯🎯🎯🎯🎯🎯
🙏Hello, I am {host_name} from ({host_address}).
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
Our great active leader {trainer_name} from ({trainer_address}) will discuss these topics with you.\n
🙏Thank you🙏`,

      night: `
🏆🏆🏆🏆🏆🏆🏆
🌹I LOVE ATOMY INDIA🌹
🏆🏆🏆🏆🏆🏆🏆\n
🌹🌹👂🧏🏻🧏‍♂🧏‍♀🌷🌷
🙏Without education, success is impossible. Learn and grow!🙏
🌹🌷🌹🌾💐🌻🌸\n
🗣🎙🙏Hello, Atomy members, I am {person1_name} from ({person1_address}).
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
1. 👉 Discussion on Atomy’s PDF profile, products, and how we can earn from Atomy, led by our great active leader {person2_name} from ({person2_address}).
2. 👉 Detailed discussion on two Atomy products by our great active leader {person3_name} from ({person3_address}).
3. 👉 Answers to questions from all present members by our great active leader {person4_name} from ({person4_address}).
4. 👉 Comments and meeting wrap-up by the training organizer.\n
🎯🎯🎯🎯🎯🎯🎯🎯🎯
Unity is our strength. Let’s come together on the same platform to turn our dreams into reality.
🙏🙏Thank you🙏🙏`,
    },
    assamese: {
      day: `
⭐🌍 *I LOVE ATOMY INDIA* 🌍⭐
📝শিক্ষাৰ অবিহনে সফলতা অসম্ভৱ, গতিকে শিকো আহক ✍✍✍🧭🧭🧭🧭🧭🧭🧭🧭
🎯🎯🎯🎯🎯🎯🎯🎯🎯
🙏🙏🙏নমস্কাৰ, মই {host_name} ({host_address}) সকলোকে আজিৰ দিনৰ প্ৰশিক্ষণলৈ আদৰণি জনাইছো🙏🙏🙏
অনলাইন প্ৰশিক্ষণত উপস্থিত থাকিবলৈ নিমন্ত্ৰণ জনালোঁ 🙏🙏🙏
👇👇👇👇👇👇👇👇
{meeting link}
👆👆👆👆👆👆👆👆
ওপৰৰ লিংকত ক্লিক কৰি মিটিংত প্ৰৱেশ কৰিব পাৰিব
সময় - {time} বজাত
তাৰিখ: {date}\n
আজিৰ প্ৰশিক্ষণৰ আলোচনাৰ বিষয়সমূহ:
1/ ID ভেৰিফিকেশ্বন আৰু ছেটিংছ।
2/ হষ্টিং।
3/ মিটিং লিংক ভাগ-বতৰা।
4/ শপিং প্ৰচেছ।
5/ যোগদান প্ৰক্ৰিয়া।
6/ ফেচবুক পোষ্ট।\n
এই ৬টা কাৰ্যৰ আলোচনা কৰিব আমাৰ সক্ৰিয় লিডাৰ {trainer_name} ({trainer_address}) 🗣🗣🗣🎤🎤🎤📣📣📣  
আপুনি এই ৬টা কাৰ্য শিকিব আৰু বুজিব, অনুগ্ৰহ কৰি কপি আৰু কলম লৈ প্রস্তুত থাকক।\n
🙏ধন্যবাদ🙏`,

      night: `
🏆🏆🏆🏆🏆🏆🏆
🌹I LOVE ATOMY INDIA🌹
🏆🏆🏆🏆🏆🏆🏆
🌹🌹👂🧏🏻🧏‍♂🧏‍♀🌷🌷
🙏শিক্ষাৰ অবিহনে সফলতা অসম্ভৱ, গতিকে শিকো আহক🙏
🌹🌷🌹🌾💐🌻🌸
🗣🎙🙏নমস্কাৰ এটমীয়ান সকল, মই {person1_name} ({person1_address})।
আজিৰ সন্ধিয়াৰ মিটিংলৈ ন পুৰনি সকলো সদস্য সদস্যাক আদৰণি জনাইছোঁ। 🌷👂🧏🏻🧏‍♀🧏‍♂🧏‍♀🌹✒🖊🌹🎤
তলৰ লিঙ্কটো ক্লিক কৰি মিটিংত যোগদান কৰিব  
👇👇👇👇👇
{meeting link}
👆👆👆👆👆
🎯🎯🎯🎯🎯🎯🎯🎯🎯
সময় সন্ধিয়াৰ {time} বজা
*তাৰিখ: {date}\n
আজিৰ আলোচনাৰ বিষয়সমূহ:
1. 👉এটমীৰ পি ডি এফ প্ৰফাইল, প্ৰডাক্ট আৰু এটমীৰ পৰা আমি কেনেকৈ উপাৰ্জন কৰিব পাৰিম, সেই বিষয়ে আলোচনা কৰিব আমাৰ মাজৰ গ্ৰেট এক্টিভ লিডাৰ {person2_name} ({person2_address})
2. 👉এটমীৰ দুটা প্ৰডাক্টৰ বিষয়ে বিতংকৈ আলোচনা কৰিব, আমাৰ মাজৰ গ্ৰেট এক্টিভ লিডাৰ {person3_name} ({person3_address})
3. 👉সভাত উপস্থিত ন পুৰনি সকলো সদস্য সদস্যাৰ প্ৰশ্নৰ উত্তৰ দিব, আমাৰ মাজৰ গ্ৰেট এক্টিভ লিডাৰ {person4_name} ({person4_address})
4. 👉প্ৰশিক্ষণ আয়োজকৰ মন্তব্য আৰু সভা ভংগ।
🎯🎯🎯🎯🎯🎯🎯🎯🎯
একতাই আমাৰ শক্তি,একতাই আমাৰ উন্নতি গতিকে আহক একেখন মঞ্চতে সকলো মিলি একগোট হৈ নিজৰ নিজৰ সপোনবোৰ বাস্তৱত পৰিণত কৰো।
🙏🙏ধন্যবাদ🙏🙏`,
    },
    hindi: {
      day: `
⭐🌍 *I LOVE ATOMY INDIA* 🌍⭐
📝शिक्षा के बिना सफलता असंभव है। इसलिए सीखें और बढ़ें! ✍✍✍🧭🧭🧭🧭🧭🧭🧭🧭
🎯🎯🎯🎯🎯🎯🎯🎯🎯
🙏🙏🙏नमस्कार, मैं {host_name} ({host_address}) सभी को आज की दिन की ट्रेनिंग सेशन में स्वागत करता हूँ🙏🙏🙏
कृपया ऑनलाइन प्रशिक्षण में उपस्थित रहने के लिए निमंत्रण 🙏🙏🙏\n
👇👇👇👇👇👇👇👇
{meeting link}
👆👆👆👆👆👆👆👆\n
लिंक पर क्लिक करके बैठक में शामिल हों।
समय - {time}
तारीख: {date}\n
आज के प्रशिक्षण के विषय:
1/ आईडी सत्यापन और सेटिंग्स।
2/ होस्टिंग।
3/ बैठक लिंक साझा करना।
4/ खरीदारी प्रक्रिया।
5/ शामिल होने की प्रक्रिया।
6/ फेसबुक पोस्ट।\n
इन 6 कार्यों की चर्चा करेंगे हमारे एक ग्रेट एक्टिव लीडर {trainer_name} ({trainer_address})🗣🗣🗣🎤🎤🎤📣📣📣
आप इन 6 कार्यों को सीखेंगे और समझेंगे, कृपया कॉपी और पेन लेकर तैयार रहें ।\n
🙏धन्यवाद🙏`,

      night: `
🏆🏆🏆🏆🏆🏆🏆
🌹I LOVE ATOMY INDIA🌹
🏆🏆🏆🏆🏆🏆🏆
🌹🌹👂🧏🏻🧏‍♂🧏‍♀🌷🌷
🙏शिक्षा के बिना सफलता असंभव है। इसलिए सीखें और बढ़ें!🙏
🌹🌷🌹🌾💐🌻🌸
🗣🎙🙏नमस्कार, एटॉमी सदस्यगण, मैं {person1_name} ({person1_address})।
आज शाम की बैठक में सभी पुराने और नए सदस्यगण का स्वागत करता हूँ।
कृपया समय पर प्रशिक्षण सत्र में उपस्थित रहें। 🌷👂🧏🏻🧏‍♀🧏‍♂🧏‍♀🌹✒🖊🌹🎤
नीचे दिए गए लिंक पर क्लिक करके बैठक में शामिल हों।\n
👇👇👇👇👇
{meeting link}
👆👆👆👆👆\n
🎯🎯🎯🎯🎯🎯🎯🎯🎯
समय: {time}
तारीख: {date}\n
आज की चर्चा के विषय:
1. 👉 एटॉमी की पीडीएफ प्रोफाइल, उत्पाद और एटॉमी से कमाई कैसे करें, पर चर्चा करेंगे हमारे महान सक्रिय नेता {person2_name} ({person2_address})।
2. 👉 एटॉमी के दो उत्पादों पर विस्तृत चर्चा करेंगे हमारे महान सक्रिय नेता {person3_name} ({person3_address})।
3. 👉 बैठक में उपस्थित सभी सदस्यों के प्रश्नों के उत्तर देंगे हमारे महान सक्रिय नेता {person4_name} ({person4_address})।
4. 👉 प्रशिक्षण आयोजक द्वारा टिप्पणियाँ और बैठक का समापन।
🎯🎯🎯🎯🎯🎯🎯🎯🎯
एकता हमारी ताकत है। आइए एक साथ मिलकर अपने सपनों को साकार करें।
🙏🙏धन्यवाद🙏🙏`,
    },
  },
};
