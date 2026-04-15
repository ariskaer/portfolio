// src/components/Projects.js
'use client';

import { useState } from 'react';
import { portfolioData } from '../data/portfolio';

export default function Projects() {
  const { projects } = portfolioData;
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const categories = ['all', ...new Set(projects.map(p => p.category))];

  return (
    <section id="projects">
      <div className="container">
        <h2>Проекты</h2>
        
        <div className="project-filter">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat === 'all' ? 'Все' : cat === 'frontend' ? 'Frontend' : 'Fullstack'}
            </button>
          ))}
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '32px' 
        }}>
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="project-card"
              style={{ 
                border: '1px solid var(--border-color)', 
                padding: '0',
                borderRadius: 'var(--radius-lg)', 
                backgroundColor: 'var(--card-bg)',
                overflow: 'hidden'
              }}
            >
              <div style={{ 
                width: '100%', 
                height: '220px', 
                backgroundColor: 'var(--bg-secondary)', 
                overflow: 'hidden',
                position: 'relative'
              }}>
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="project-image"
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover'
                    }}
                  />
                ) : (
                  <div style={{ 
                    width: '100%', 
                    height: '100%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    color: 'var(--text-secondary)'
                  }}>
                    Проект
                  </div>
                )}
              </div>
              
              <div style={{ padding: '28px' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', color: 'var(--text-primary)', fontWeight: 600 }}>
                  {project.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '20px', fontSize: '0.95rem', lineHeight: 1.7 }}>
                  {project.description}
                </p>
                <div style={{ marginBottom: '24px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  {project.tech.join(' · ')}
                </div>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <a 
                    href={project.linkDemo} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn" 
                    style={{ fontSize: '0.85rem', padding: '10px 20px' }}
                  >
                    Демо
                  </a>
                  <a 
                    href={project.linkCode} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-secondary" 
                    style={{ fontSize: '0.85rem', padding: '10px 20px' }}
                  >
                    Код
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}