// src/data/portfolio.js
export const portfolioData = {
  personal: {
    name: "Шведова Арина",
    age: 20,
    role: "Студент | Frontend Разработчик",
    about: "Привет! Я создаю цифровые миры с помощью кода. Моя страсть — превращать идеи в работающие веб-приложения. Постоянно учусь новому и не боюсь сложных задач. Готова создать что-то потрясающее для вашего проекта!",
    location: "Санкт-Петербург, Россия",
    available: "Открыта к предложениям",
    photo: "/portfolio/my-photo.jpg",
    resume: "/portfolio/resume.pdf",
    experience: 2
  },
  skills: [
    { name: "HTML", level: 90, category: "frontend" },
    { name: "CSS", level: 85, category: "frontend" },
    { name: "JavaScript", level: 80, category: "frontend" },
    { name: "React", level: 75, category: "frontend" },
    { name: "Next.js", level: 70, category: "frontend" },
    { name: "Git", level: 75, category: "tools" },
    { name: "Figma", level: 65, category: "tools" },
    { name: "VS Code", level: 85, category: "tools" }
  ],
  projects: [
    {
      id: 1,
      title: "Кафейня",
      description: "Веб-сайт для кофейни с адаптивным дизайном, меню и формой заказа.",
      tech: ["HTML", "CSS", "JavaScript"],
      category: "frontend",
      // 🔗 Замените на реальные ссылки, когда задеплоите проект:
      linkDemo: "https://ariskaer.github.io/coffee-shop/",
      linkCode: "https://github.com/ariskaer/coffee-shop",
      image: "/portfolio/coffee.jpg"
    },
    {
      id: 2,
      title: "Достопримечательности города",
      description: "Веб-приложение для оптимизации маршрутов по Санкт-Петербургу.",
      tech: ["React", "API", "CSS"],
      category: "fullstack",
      linkDemo: "#",
      linkCode: "#",
      image: "/portfolio/project2.jpg"
    }
  ],
  contacts: {
    email: "shvedova.arinashvedova@yandex.ru",
    phone: "+7 (918) 300-70-49",
    telegram: "https://t.me/ari7sha",  // ✅ Исправлено
    instagram: "https://instagram.com/afteari",
    github: "https://github.com/ariskaer",
    vk: "https://vk.com/id123456789",  // 🔗 Замените на ваш реальный ID
    formspreeId: "mbdpaojk"  // ✅ Ваш Formspree ID
  },
  socials: [
    { name: "GitHub", url: "https://github.com/ariskaer", icon: "💻" },
    
  
    { name: "Instagram", url: "https://instagram.com/afteari", icon: "📸" }
  ]
};