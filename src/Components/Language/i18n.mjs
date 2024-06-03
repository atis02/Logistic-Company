import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      aboutCompany: "About us",
      services: "Our services",
      contacts: "Contacts",
      read: "Read More",
      nameCompany: " “Jebel Al Uhood” ",
      company: "Our company",
      desc: "Dreaming of a home makeover? We`re here to make it a reality! We offer a comprehensive range of services to transform your space, from the ground up (or walls in!). Our team of skilled professionals is dedicated to providing exceptional service and craftsmanship, ensuring a smooth and stress-free experience for you.",
      hideDesc:
        "Why Choose Us?<1/>One-Stop Shop: We handle all your renovation needs, saving you time and hassle.<1/>Experienced Professionals: Our team is highly skilled and dedicated to quality workmanship.<1/>Seamless Experience: We ensure clear communication and a smooth project flow.<1/>Competitive Rates: We offer fair pricing that reflects our expertise.",
      aboutText:
        "We handle every aspect of your home improvement project, from the ground up (or the walls!). Whether you need new plumbing, stunning tile, or a complete overhaul of your electrical and climate control systems, our team of experienced professionals is always ready to provide exceptional service and workmanship",
      servicesText1: "Plumbing & Sanitary Installation:",
      servicesText2:
        "Our skilled plumbers handle everything from installing new fixtures to tackling leaks and repairs, ensuring your plumbing system functions flawlessly.",
      servicesText3: "Floor & Wall Tiling Works: ",
      servicesText4:
        "Elevate your space with our expert floor and wall tiling services. We offer a wide variety of tiles to create a beautiful and durable foundation for any room.",
      servicesText5:
        "Electromechanical Equipment Installation and Maintenance:",
      servicesText6:
        "Keep your home`s systems running smoothly with our qualified technicians. We handle everything from generators and pumps to complex electromechanical equipment.",
      servicesText7: "Wallpaper Fixing Works: ",
      servicesText8:
        "Add a touch of personality and style to your walls with our professional wallpaper fixing services. We offer a vast selection of wallpapers to match your unique aesthetic.",
      servicesText9:
        "Air-Conditioning, Ventilations & Air Filtration Systems Installation & Maintenance:",
      servicesText10:
        " Enjoy year-round comfort and clean air with our comprehensive AC, ventilation, and air filtration system services.",
      servicesText11:
        "Electrical Fittings & Fixtures Repairing & Maintenance: ",
      servicesText12:
        "Our electricians ensure the safety and functionality of your electrical system by handling repairs and maintenance for all your electrical fittings and fixtures.",
      location:
        "King Maryam Mohammed Ahmed Al Otaiba. Deira.<1/>Al Baraha. 024.F Office No.1",
    },
  },
  ru: {
    translation: {
      aboutCompany: "О компании",
      services: "Услуги компании",
      contacts: "Контакты",
      read: "Читать",
      company: "Компания",
      desc: "Мечтаете о преображении дома? Мы здесь, чтобы воплотить это в жизнь! Мы предлагаем широкий спектр услуг по преобразованию вашего пространства с нуля (или стен!). Наша команда опытных профессионалов стремится предоставить исключительный сервис и мастерство, гарантируя вам приятный отдых без стресса.",

      hideDesc:
        "Почему выбрали нас?<1/>Единый центр обслуживания: мы решаем все ваши задачи по ремонту, экономя ваше время и нервы.<1/>Опытные специалисты: Наша команда имеет высокую квалификацию и стремится к качеству изготовления.<1/>Бесперебойный опыт: мы обеспечиваем четкую коммуникацию и бесперебойную работу проекта.<1/>Конкурентоспособные цены: мы предлагаем справедливые цены, соответствующие нашему опыту.",
      aboutText:
        "Мы занимаемся каждым аспектом вашего проекта по благоустройству дома, с нуля (или стен!). Если вам нужна новая сантехника, потрясающая плитка или полный ремонт ваших электрических систем и систем климат-контроля, наша команда опытных профессионалов всегда готова предоставить исключительный сервис и мастерство.",
      servicesText1: "Сантехнические и сантехнические работы:",
      servicesText2:
        "Наши опытные сантехники справятся со всем: от установки новой сантехники до устранения протечек и ремонта, гарантируя безупречную работу вашей сантехнической системы.",
      servicesText3: "Работы по укладке напольной и настенной плитки:",
      servicesText4:
        "Увеличьте свое пространство с помощью наших профессиональных услуг по укладке напольной и настенной плитки. Мы предлагаем широкий выбор плитки для создания красивой и прочной основы для любого помещения.",
      servicesText5: "Монтаж и обслуживание электромеханического оборудования:",
      servicesText6:
        "Обеспечьте бесперебойную работу систем вашего дома с помощью наших квалифицированных специалистов. Мы занимаемся всем: от генераторов и насосов до сложного электромеханического оборудования.",
      servicesText7: "Работы по ремонту обоев:",
      servicesText8:
        "Добавьте индивидуальности и стиля своим стенам с помощью наших профессиональных услуг по наклейке обоев. Мы предлагаем широкий выбор обоев, которые подчеркнут вашу уникальную эстетику.",
      servicesText9:
        "Монтаж и обслуживание систем кондиционирования, вентиляции и фильтрации воздуха:",
      servicesText10:
        "Наслаждайтесь комфортом и чистым воздухом круглый год благодаря нашим комплексным услугам по системам кондиционирования, вентиляции и фильтрации воздуха.",
      servicesText11: "Ремонт и обслуживание электрооборудования:",
      servicesText12:
        "Наши электрики обеспечивают безопасность и функциональность вашей электрической системы, выполняя ремонт и техническое обслуживание всей вашей электрической арматуры и приспособлений.",
      location:
        "Королева Марьям Мохаммед Ахмед Аль Отайба. Дейра.<1/>Аль Бараха. 024.Ф Офис №1",
    },
  },
  de: {
    translation: {
      aboutCompany: "Über uns",
      services: "Unsere Dienstleistungen",
      contacts: "Kontakte",
      read: "Mehr lesen",
      nameCompany: " “Jebel Al Uhood” ",
      company: "Unser Unternehmen",
      desc: "Träumen Sie von einer Renovierung Ihres Hauses? Wir sind hier, um es Wirklichkeit werden zu lassen! Wir bieten eine umfassende Palette an Dienstleistungen, um Ihren Raum vom Grund auf (oder von den Wänden hinein!) zu verwandeln. Unser Team aus qualifizierten Fachleuten ist bestrebt, außergewöhnlichen Service und handwerkliches Können zu bieten und Ihnen ein reibungsloses und stressfreies Erlebnis zu gewährleisten.",
      hideDesc:
        "Warum uns wählen?<1/>One-Stop-Shop: Wir kümmern uns um alle Ihre Renovierungsbedürfnisse und sparen Ihnen Zeit und Ärger.<1/>Erfahrene Fachleute: Unser Team ist hochqualifiziert und engagiert sich für hochwertige Verarbeitung.<1/>Nahtlose Erfahrung: Wir sorgen für klare Kommunikation und einen reibungslosen Projektablauf.<1/>Wettbewerbsfähige Preise: Wir bieten faire Preise, die unser Fachwissen widerspiegeln.",
      aboutText:
        "Wir kümmern uns um jeden Aspekt Ihres Heimwerkerprojekts, vom Grund auf (oder den Wänden!). Ganz gleich, ob Sie neue Sanitäranlagen, atemberaubende Fliesen oder eine komplette Überholung Ihrer Elektro- und Klimatisierungssysteme benötigen, unser Team aus erfahrenen Fachleuten ist immer bereit, außergewöhnlichen Service und handwerkliche Qualität zu bieten",
      servicesText1: "Sanitär- und Sanitärinstallation:",
      servicesText2:
        "Unsere erfahrenen Klempner kümmern sich um alles, von der Installation neuer Armaturen bis hin zur Behebung von Lecks und Reparaturen, und sorgen dafür, dass Ihr Sanitärsystem einwandfrei funktioniert.",
      servicesText3: "Boden- und Wandfliesenarbeiten:",
      servicesText4:
        "Werten Sie Ihren Raum mit unseren fachmännischen Boden- und Wandfliesenarbeiten auf. Wir bieten eine große Auswahl an Fliesen, um für jeden Raum eine schöne und dauerhafte Grundlage zu schaffen.",
      servicesText5: "Installation und Wartung elektromechanischer Geräte:",
      servicesText6:
        "Sorgen Sie mit unseren qualifizierten Technikern dafür, dass die Systeme Ihres Zuhauses reibungslos funktionieren. Wir kümmern uns um alles, von Generatoren und Pumpen bis hin zu komplexen elektromechanischen Geräten.",
      servicesText7: "Tapetenreparaturarbeiten:",
      servicesText8:
        "Verleihen Sie Ihren Wänden mit unserem professionellen Tapetenklebeservice einen Hauch von Persönlichkeit und Stil. Wir bieten eine große Auswahl an Tapeten, die zu Ihrer einzigartigen Ästhetik passen.",
      servicesText9:
        "Installation und Wartung von Klimaanlagen, Lüftungs- und Luftfiltersystemen:",
      servicesText10:
        "Genießen Sie das ganze Jahr über Komfort und saubere Luft mit unseren umfassenden Dienstleistungen für Klimaanlagen, Belüftung und Luftfiltersysteme.",
      servicesText11:
        "Reparatur und Wartung von elektrischen Armaturen und Vorrichtungen:",
      servicesText12:
        "Unsere Elektriker sorgen für die Sicherheit und Funktionalität Ihrer elektrischen Anlage, indem sie Reparaturen und Wartung aller Ihrer elektrischen Anlagen und Vorrichtungen durchführen.",
      location:
        "König Maryam Mohammed Ahmed Al Otaiba. Deira.<1/>Al Baraha. 024.F Büro Nr.1",
    },
  },
  chinese: {
    translation: {
      aboutCompany: "关于我们",
      services: "我们的服务",
      contacts: "联系方式",
      read: "阅读更多",
      nameCompany: " “Jebel Al Uhood” ",
      company: "我们公司",
      desc: "梦想改造家居？我们来这里是为了让它成为现实！我们提供全面的服务，从头开始（或墙壁！）改造您的空间。我们技术精湛的专业团队致力于提供卓越的服务和工艺，确保为您提供顺畅、无压力的体验。",
      hideDesc:
        "为什么选择我们？<1/>一站式服务：我们满足您所有的装修需求，为您节省时间和麻烦。<1/>经验丰富的专业人士：我们的团队技术精湛，致力于高品质工艺。<1/>无缝体验：我们确保清晰的沟通和顺畅的项目流程。<1/>有竞争力的价格：我们提供反映我们专业知识的公平价格。",
      servicesText1: "管道和卫生安装：",
      servicesText2:
        "我们熟练的管道工负责处理从安装新固定装置到解决泄漏和维修的所有事宜，确保您的管道系统完美运行。",
      servicesText3: "地板和墙壁瓷砖工程：",
      servicesText4:
        "通过我们专业的地板和墙面瓷砖服务提升您的空间。我们提供各种瓷砖，为任何房间打造美观耐用的地基。",
      servicesText5: "机电设备安装与维护：",
      servicesText6:
        "我们合格的技术人员让您的家庭系统保持平稳运行。我们处理从发电机和泵到复杂机电设备的一切。",
      servicesText7: "壁纸修复工程：",
      servicesText8:
        "通过我们专业的壁纸固定服务，为您的墙壁增添一抹个性和风格。我们提供多种壁纸供您选择，以满足您独特的审美。",
      servicesText9: "空调、通风和空气过滤系统安装和维护：",
      servicesText10:
        "通过我们全面的空调、通风和空气过滤系统服务，享受全年舒适和清洁的空气。",
      servicesText11: "电气配件和固定装置维修和保养：",
      servicesText12:
        "我们的电工通过对您所有的电气配件和固定装置进行维修和维护，确保您的电气系统的安全和功能。",
      aboutText:
        "我们从头开始（或墙壁！）处理您家居装修项目的各个方面。无论您需要新的管道、漂亮的瓷砖，还是对电气和气候控制系统进行彻底检修，我们经验丰富的专业团队随时准备提供卓越的服务和工艺",
      location:
        "玛丽亚姆·穆罕默德·艾哈迈德·奥泰巴国王。德伊拉。<1/>阿尔·巴拉哈。 024.F 1号办公室",
    },
  },
  arabic: {
    translation: {
      aboutCompany: "معلومات عنا",
      services: "خدماتنا",
      contacts: "جهات الاتصال",
      read: "اقرأ أكثر",
      nameCompany: " “Jebel Al Uhood” ",
      company: "شركتنا",
      desc: "هل تحلم بتجديد المنزل؟ نحن هنا لنجعل الأمر حقيقة! نحن نقدم مجموعة شاملة من الخدمات لتحويل المساحة الخاصة بك، من الألف إلى الياء (أو الجدران!). فريقنا من المهنيين المهرة مكرس لتقديم خدمة استثنائية وحرفية، مما يضمن لك تجربة سلسة وخالية من التوتر.",
      hideDesc:
        "لماذا أخترتنا؟<1/> متجر شامل: نحن نتعامل مع جميع احتياجات التجديد الخاصة بك، مما يوفر لك الوقت والمتاعب.<1/>        المهنيين ذوي الخبرة: يتمتع فريقنا بمهارات عالية ومكرس لجودة العمل.<1/> تجربة سلسة: نحن نضمن التواصل الواضح والتدفق السلس للمشروع.<1/> أسعار تنافسية: نحن نقدم أسعارًا عادلة تعكس خبرتنا.",
      servicesText1: "السباكة والتمديدات الصحية:",
      servicesText2:
        "يتعامل السباكون المهرة لدينا مع كل شيء بدءًا من تركيب التركيبات الجديدة وحتى معالجة التسريبات والإصلاحات، مما يضمن أن نظام السباكة الخاص بك يعمل بشكل لا تشوبه شائبة.",
      servicesText3: "أعمال تبليط الأرضيات والجدران:",
      servicesText4:
        "ارفع مساحتك من خلال خدماتنا المتخصصة في بلاط الأرضيات والجدران. نحن نقدم مجموعة واسعة من البلاط لإنشاء أساس جميل ودائم لأي غرفة.",
      servicesText5: "تركيب وصيانة المعدات الكهروميكانيكية:",
      servicesText6:
        "حافظ على تشغيل أنظمة منزلك بسلاسة مع الفنيين المؤهلين لدينا. نحن نتعامل مع كل شيء بدءًا من المولدات والمضخات وحتى المعدات الكهروميكانيكية المعقدة.",
      servicesText7: "أعمال تثبيت ورق الحائط:",
      servicesText8:
        "أضف لمسة من الشخصية والأناقة إلى جدرانك من خلال خدمات تثبيت ورق الحائط الاحترافية لدينا. نحن نقدم مجموعة واسعة من الخلفيات لتتناسب مع جماليتك الفريدة.",
      servicesText9: "تركيب وصيانة أنظمة تكييف الهواء والتهوية وتنقية الهواء:",
      servicesText10:
        "استمتع بالراحة والهواء النظيف على مدار العام مع خدماتنا الشاملة لنظام التكييف والتهوية وتنقية الهواء.",
      servicesText11: "إصلاح وصيانة التركيبات الكهربائية:",
      servicesText12:
        "يضمن كهربائيونا سلامة وأداء النظام الكهربائي الخاص بك عن طريق التعامل مع الإصلاحات والصيانة لجميع التركيبات والتجهيزات الكهربائية الخاصة بك.",
      aboutText:
        "نحن نتعامل مع كل جانب من جوانب مشروع تحسين منزلك، من الألف إلى الياء (أو الجدران!). سواء كنت بحاجة إلى سباكة جديدة، أو بلاط مذهل، أو إصلاح شامل لأنظمة التحكم الكهربائية والمناخية لديك، فإن فريقنا من المحترفين ذوي الخبرة على استعداد دائمًا لتقديم خدمة وحرفية استثنائية",
      location:
        "الملك مريم محمد أحمد العتيبة. ديرة.<1/> البراحة. 024.F مكتب رقم 1",
    },
  },
};
i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "en",
  lng: localStorage.getItem("lng"),
  interpolation: {
    escapeValue: false,
  },
  initImmediate: false,
});
export default i18n;
