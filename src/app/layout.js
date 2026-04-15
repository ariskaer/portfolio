// src/app/layout.js
import './globals.css'  // ← Эта строка должна быть!

export const metadata = {
  title: "Портфолио | Шведова Арина",
  description: "Frontend разработчик. Проекты, навыки, контакты.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}