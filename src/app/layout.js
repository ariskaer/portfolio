import './globals.css'  // ← Эта строка должна быть вверху!

export const metadata = {
  title: "Портфолио | Шведова Арина - Frontend Разработчик",
  description: "Персональное портфолио frontend разработчика.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}