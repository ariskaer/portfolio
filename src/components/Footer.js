// src/components/Footer.js
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="container">
        <p style={{ color: 'var(--text-secondary)' }}>
          © {year} Шведова Арина
        </p>
      </div>
    </footer>
  );
}