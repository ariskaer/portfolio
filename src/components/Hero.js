// src/components/Hero.js
'use client';

import { portfolioData } from '../data/portfolio';

export default function Hero() {
  const { name, age, role, about, location, available, photo, resume, experience } = portfolioData.personal;

  return (
    <section style={{ 
      minHeight: '90vh', 
      display: 'flex', 
      alignItems: 'center',
      borderBottom: 'none',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container" style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr', 
        gap: '80px', 
        alignItems: 'center',
        position: 'relative',
        zIndex: 1
      }}>
        <div className="fade-in">
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', marginBottom: '16px', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '2px' }}>
            Frontend Developer
          </p>
          <h1 style={{ 
            fontSize: '3.5rem', 
            marginBottom: '20px',
            lineHeight: 1.1,
            color: 'var(--text-primary)',
            fontWeight: 600,
            letterSpacing: '-1px'
          }}>
            {name}
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '32px', lineHeight: 1.8 }}>
            {about}
          </p>
          
          <div style={{ display: 'flex', gap: '12px', marginBottom: '40px', flexWrap: 'wrap' }}>
            <a href="#projects" className="btn">Проекты</a>
            <a href="#contacts" className="btn btn-secondary">Связаться</a>
            {resume && (
              <a href={resume} download className="btn btn-secondary">Резюме</a>
            )}
          </div>

          <div style={{ 
            display: 'flex', 
            gap: '48px', 
            padding: '24px', 
            background: 'var(--card-bg)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-color)',
            maxWidth: '450px'
          }}>
            <div>
              <span className="experience-counter">{experience}+</span>
              <span className="experience-label">года опыта</span>
            </div>
            <div>
              <span className="experience-counter">10+</span>
              <span className="experience-label">проектов</span>
            </div>
          </div>
        </div>

        <div className="fade-in float" style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{
            width: '380px',
            height: '380px',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            border: '1px solid var(--border-color)',
            position: 'relative'
          }}>
            <img 
              src={photo} 
              alt={name}
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover' 
              }}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .container {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          h1 {
            font-size: 2.5rem !important;
          }
          .float {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}