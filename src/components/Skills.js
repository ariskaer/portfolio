// src/components/Skills.js
'use client';

import { useEffect, useState } from 'react';
import { portfolioData } from '../data/portfolio';

export default function Skills() {
  const { skills } = portfolioData;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('skills');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="skills">
      <div className="container">
        <h2>Навыки</h2>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          {skills.map((skill, index) => (
            <div key={index} style={{ marginBottom: '28px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <span style={{ fontWeight: 500, color: 'var(--text-primary)', fontSize: '0.95rem' }}>{skill.name}</span>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress"
                  style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Инструменты — без эмодзи */}
        <div style={{ 
          marginTop: '50px', 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '10px', 
          justifyContent: 'center' 
        }}>
          {['Figma', 'VS Code', 'Git', 'npm', 'Responsive Design', 'SEO', 'Webpack', 'Vite'].map((tool, i) => (
            <span key={i} style={{ 
              padding: '10px 20px', 
              background: 'var(--card-bg)', 
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-full)',
              color: 'var(--text-secondary)',
              fontSize: '0.85rem',
              transition: '0.3s'
            }}
            onMouseOver={(e) => {
              e.target.style.borderColor = 'var(--accent-color)';
              e.target.style.color = 'var(--text-primary)';
            }}
            onMouseOut={(e) => {
              e.target.style.borderColor = 'var(--border-color)';
              e.target.style.color = 'var(--text-secondary)';
            }}
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}