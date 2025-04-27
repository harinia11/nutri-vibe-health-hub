import React, { useState } from 'react';
import Chatbot from '../components/Chatbot';
import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NutritionTips = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  
  const languages = {
    en: {
      label: 'English',
      pageTitle: 'Nutrition Tips',
      chatbotTitle: 'Ask Our Nutrition Assistant',
      chatbotDescription: 'Have questions about nutrition or healthy eating? Our chatbot can help you with personalized recommendations.'
    },
    hi: {
      label: 'हिंदी',
      pageTitle: 'पोषण युक्तियाँ',
      chatbotTitle: 'हमारे पोषण सहायक से पूछें',
      chatbotDescription: 'पोषण या स्वस्थ भोजन के बारे में प्रश्न हैं? हमारा चैटबॉट आपको व्यक्तिगत सिफारिशों के साथ मदद कर सकता है।'
    },
    ta: {
      label: 'தமிழ்',
      pageTitle: 'ஊட்டச்சத்து குறிப்புகள்',
      chatbotTitle: 'எங்கள் ஊட்டச்சத்து உதவியாளரை கேளுங்கள்',
      chatbotDescription: 'ஊட்டச்சத்து அல்லது ஆரோக்கியமான உணவு பற்றிய கேள்விகள் உள்ளதா? எங்கள் சாட்போட் தனிப்பயனாக்கப்பட்ட பரிந்துரைகளுடன் உங்களுக்கு உதவ முடியும்.'
    }
  };
  
  const tips = [
    {
      title: {
        en: "Eat a Rainbow of Fruits and Vegetables",
        hi: "फलों और सब्जियों का इंद्रधनुष खाएं",
        ta: "பழங்கள் மற்றும் காய்கறிகளின் வானவில்லை சாப்பிடுங்கள்"
      },
      description: {
        en: "Different colored fruits and vegetables contain different nutrients. Try to include a variety of colors in your diet to ensure you get a wide range of vitamins and minerals.",
        hi: "विभिन्न रंगों के फल और सब्जियों में विभिन्न पोषक तत्व होते हैं। अपने आहार में विभिन्न रंगों को शामिल करने का प्रयास करें ताकि आप विटामिन और खनिजों की एक विस्तृत श्रृंखला प्राप्त कर सकें।",
        ta: "வெவ்வேறு வண்ண பழங்கள் மற்றும் காய்கறிகளில் வெவ்வேறு சத்துக்கள் உள்ளன. நீங்கள் வைட்டமின்கள் மற்றும் தாதுக்களின் பரந்த அளவிலான வரம்பைப் பெற உங்கள் உணவில் பல்வேறு வண்ணங்களைச் சேர்க்க முயற்சிக்கவும்."
      },
      icon: "🌈"
    },
    {
      title: {
        en: "Stay Hydrated",
        hi: "हाइड्रेटेड रहें",
        ta: "நீரேற்றம் பெற்றிருங்கள்"
      },
      description: {
        en: "Water is essential for many bodily functions. Aim to drink at least 8 glasses of water per day, and more if you're active or in hot weather.",
        hi: "पानी कई शारीरिक कार्यों के लिए आवश्यक है। प्रति दिन कम से कम 8 गिलास पानी पीने का लक्ष्य रखें, और यदि आप सक्रिय हैं या गर्म मौसम में हैं तो अधिक पिएं।",
        ta: "உடல் செயல்பாடுகளுக்கு நீர் அவசியம். ஒரு நாளைக்கு குறைந்தபட்சம் 8 கிளாஸ் தண்ணீர் குடிக்க முயற்சிக்கவும், நீங்கள் சுறுசுறுப்பாக இருந்தால் அல்லது வெப்பமான வானிலையில் இருந்தால் அதிகமாக குடிக்கவும்."
      },
      icon: "💧"
    },
    {
      title: {
        en: "Limit Processed Foods",
        hi: "प्रसंस्कृत खाद्य पदार्थों को सीमित करें",
        ta: "பதப்படுத்தப்பட்ட உணவுகளை கட்டுப்படுத்துங்கள்"
      },
      description: {
        en: "Processed foods often contain added sugars, unhealthy fats, and sodium. Focus on whole foods as much as possible.",
        hi: "प्रसंस्कृत खाद्य पदार्थों में अक्सर अतिरिक्त चीनी, अस्वास्थ्यकर वसा और सोडियम होता है। जितना हो सके पूरे खाद्य पदार्थों पर ध्यान केंद्रित करें।",
        ta: "பதப்படுத்தப்பட்ட உணவுகளில் பெரும்பாலும் சர்க்கரை, ஆரோக்கியமற்ற கொழுப்புகள் மற்றும் சோடியம் சேர்க்கப்பட்டிருக்கும். முடிந்தவரை முழு உணவுகளில் கவனம் செலுத்துங்கள்."
      },
      icon: "🍔"
    },
    {
      title: {
        en: "Mindful Eating",
        hi: "सचेत खाना",
        ta: "கவனமான உணவு"
      },
      description: {
        en: "Pay attention to what and when you eat. Avoid distractions like TV or phones during meals and listen to your body's hunger and fullness cues.",
        hi: "आप क्या और कब खाते हैं, इस पर ध्यान दें। भोजन के दौरान टीवी या फोन जैसे विकर्षणों से बचें और अपने शरीर की भूख और पूर्णता के संकेतों को सुनें।",
        ta: "நீங்கள் என்ன சாப்பிடுகிறீர்கள் மற்றும் எப்போது சாப்பிடுகிறீர்கள் என்பதில் கவனம் செலுத்துங்கள். உணவின் போது டிவி அல்லது தொலைபேசிகள் போன்ற திசைதிருப்பல்களைத் தவிர்த்து, உங்கள் உடலின் பசி மற்றும் நிறைவு குறிப்புகளைக் கேளுங்கள்."
      },
      icon: "🧠"
    },
    {
      title: {
        en: "Balance Your Macronutrients",
        hi: "अपने मैक्रोन्यूट्रिएंट्स को संतुलित करें",
        ta: "உங்கள் மேக்ரோநியூட்ரியன்ட்களை சமநிலைப்படுத்துங்கள்"
      },
      description: {
        en: "Include a healthy balance of proteins, carbohydrates, and fats in your diet. Each plays an important role in overall health.",
        hi: "अपने आहार में प्रोटीन, कार्बोहाइड्रेट और वसा का स्वस्थ संतुलन शामिल करें। प्रत्येक समग्र स्वास्थ्य में महत्वपूर्ण भूमिका निभाता है।",
        ta: "உங்கள் உணவில் புரதங்கள், கார்போஹைட்ரேட்டுகள் மற்றும் கொழுப்புகளின் ஆரோக்கியமான சமநிலையைச் சேர்க்கவும். ஒவ்வொன்றும் ஒட்டுமொத்த ஆரோக்கியத்தில் முக்கிய பங்கு வகிக்கிறது."
      },
      icon: "⚖️"
    },
    {
      title: {
        en: "Plan Your Meals",
        hi: "अपने भोजन की योजना बनाएं",
        ta: "உங்கள் உணவுகளை திட்டமிடுங்கள்"
      },
      description: {
        en: "Planning meals in advance can help you make healthier choices and avoid impulsive, less nutritious options.",
        hi: "अग्रिम में भोजन की योजना बनाना आपको स्वस्थ विकल्प चुनने और आवेगपूर्ण, कम पौष्टिक विकल्पों से बचने में मदद कर सकता है।",
        ta: "முன்கூட்டியே உணவுகளைத் திட்டமிடுவது நீங்கள் ஆரோக்கியமான தேர்வுகளைச் செய்ய உதவும் மற்றும் உந்துதல், குறைவான ஊட்டச்சத்துள்ள விருப்பங்களைத் தவிர்க்கலாம்."
      },
      icon: "📝"
    }
  ];

  const handleLanguageChange = () => {
    const languageKeys = Object.keys(languages);
    const currentIndex = languageKeys.indexOf(currentLanguage);
    const nextIndex = (currentIndex + 1) % languageKeys.length;
    setCurrentLanguage(languageKeys[nextIndex]);
  };

  return (
    <div className="container page-container">
      <div className="flex justify-between items-center mb-6">
        <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>{languages[currentLanguage].pageTitle}</h1>
        <Button variant="outline" onClick={handleLanguageChange} className="flex items-center gap-2">
          <Globe size={16} />
          {languages[currentLanguage].label}
        </Button>
      </div>
      
      <div className="grid" style={{ marginBottom: '40px' }}>
        {tips.map((tip, index) => (
          <div key={index} className="card">
            <div className="icon" style={{ fontSize: '3rem', marginBottom: '15px' }}>{tip.icon}</div>
            <h3 style={{ marginBottom: '15px' }}>{tip.title[currentLanguage]}</h3>
            <p>{tip.description[currentLanguage]}</p>
          </div>
        ))}
      </div>
      
      <style>
        {`
          .chatbot-input {
            color: #000000 !important;
            background-color: #ffffff !important;
          }
        `}
      </style>
      
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>
        {languages[currentLanguage].chatbotTitle}
      </h2>
      <p style={{ textAlign: 'center', marginBottom: '30px' }}>
        {languages[currentLanguage].chatbotDescription}
      </p>
      
      <Chatbot currentLanguage={currentLanguage} />
    </div>
  );
};

export default NutritionTips;
