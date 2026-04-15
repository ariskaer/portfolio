// src/components/Header.js
'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header style={{ 
      padding: '24px 0', 
      borderBottom: '1px solid var(--border-color)', 
      position: 'sticky', 
      top: 0, 
      backgroundColor: 'var(--bg-primary)',
      backdropFilter: 'blur(10px)',
      zIndex: 1000,
      transition: 'background-color 0.6s ease, border-color 0.6s ease'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Логотип */}
        <Link href="/" style={{ 
          fontSize: '1.5rem', 
          fontWeight: 600, 
          color: 'var(--text-primary)',
          letterSpacing: '-0.5px'
        }}>
          AS.
        </Link>
        
        {/* Десктоп меню — справа */}
        <nav className="desktop-nav">
          <ul style={{ display: 'flex', gap: '32px' }}>
            <li><Link href="#about" style={{ fontWeight: 500, color: 'var(--text-secondary)' }}>Обо мне</Link></li>
            <li><Link href="#skills" style={{ fontWeight: 500, color: 'var(--text-secondary)' }}>Навыки</Link></li>
            <li><Link href="#projects" style={{ fontWeight: 500, color: 'var(--text-secondary)' }}>Проекты</Link></li>
            <li><Link href="#contacts" style={{ fontWeight: 500, color: 'var(--text-secondary)' }}>Контакты</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}