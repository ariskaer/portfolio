// src/components/About.js
import { portfolioData } from '../data/portfolio';

export default function About() {
  const { about, location, age } = portfolioData.personal;

  return (
    <section id="about">
      <div className="container">
        <h2>Обо мне</h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: '60px', 
          alignItems: 'center',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          <div>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.9, marginBottom: '32px' }}>
              {about}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div className="info-card">
                <h4 style={{ color: 'var(--text-primary)', marginBottom: '8px', fontWeight: 600 }}>Возраст</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{age} лет</p>
              </div>
              <div className="info-card">
                <h4 style={{ color: 'var(--text-primary)', marginBottom: '8px', fontWeight: 600 }}>Город</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{location}</p>
              </div>
            </div>
          </div>
          <div style={{ 
            padding: '32px', 
            background: 'var(--card-bg)', 
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-color)'
          }}>
            <h3 style={{ marginBottom: '24px', color: 'var(--text-primary)', fontWeight: 600, fontSize: '1.1rem' }}>
              Цель
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <li style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                • Стажировка в IT-компании
              </li>
              <li style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                • Проектная работа
              </li>
              <li style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                • Участие в интересных проектах
              </li>
              <li style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                • Профессиональное развитие
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}