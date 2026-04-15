// src/components/Contacts.js
'use client';

import { useState } from 'react';
import { portfolioData } from '../data/portfolio';

export default function Contacts() {
  const { email, phone, telegram, instagram, github, vk, formspreeId } = portfolioData.contacts;
  const [formStatus, setFormStatus] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');

    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', company: '', message: '' });
        setTimeout(() => setFormStatus(''), 5000);
      } else {
        setFormStatus('error');
        setTimeout(() => setFormStatus(''), 5000);
      }
    } catch (error) {
      setFormStatus('error');
      setTimeout(() => setFormStatus(''), 5000);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contacts" style={{ borderBottom: 'none', position: 'relative' }}>
      {/* Декоративные элементы фона */}
      <div className="bg-orb bg-orb-1"></div>
      <div className="bg-orb bg-orb-2"></div>
      
      <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <h2>Контакты</h2>
        <p style={{ 
          marginBottom: '55px', 
          fontSize: '1.1rem', 
          color: 'var(--text-secondary)', 
          maxWidth: '650px', 
          margin: '0 auto 55px',
          lineHeight: 1.9 
        }}>
          Открыта к сотрудничеству и интересным проектам. 
          Выберите удобный способ связи или отправьте заявку:
        </p>
        
        {/* Кнопки быстрой связи */}
        <div style={{ 
          display: 'flex', 
          gap: '14px', 
          justifyContent: 'center', 
          flexWrap: 'wrap', 
          marginBottom: '45px' 
        }}>
          <a href={`tel:${phone.replace(/\s|\(|\)|-/g, '')}`} className="btn">
            {phone}
          </a>
          <a href={telegram} target="_blank" rel="noopener noreferrer" className="btn">
            Telegram
          </a>
          <a href={`mailto:${email}`} className="btn">
            Email
          </a>
        </div>

        {/* Социальные сети */}
        <div style={{ 
          marginBottom: '70px', 
          display: 'flex', 
          gap: '14px', 
          justifyContent: 'center', 
          flexWrap: 'wrap' 
        }}>
          {portfolioData.socials.map((social, i) => (
            <a 
              key={i}
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-btn"
            >
              {social.name}
            </a>
          ))}
        </div>

        {/* Форма заявки — эстетичная карточка */}
        <div className="form-card" style={{ 
          maxWidth: '680px', 
          margin: '0 auto', 
          padding: '55px 50px',
          position: 'relative'
        }}>
          {/* Декоративные элементы */}
          <div className="form-decoration form-decoration-1"></div>
          <div className="form-decoration form-decoration-2"></div>
          
          <h3 className="form-title" style={{ 
            marginBottom: '40px', 
            fontSize: '1.5rem', 
            color: 'var(--text-primary)', 
            fontWeight: 600,
            position: 'relative',
            zIndex: 1,
            letterSpacing: '-0.3px'
          }}>
            Отправить заявку
          </h3>
          
          <form onSubmit={handleSubmit} className="contact-form" style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '18px',
            position: 'relative',
            zIndex: 1
          }}>
            <div className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Ваше имя"
                value={formData.name}
                onChange={handleChange}
                required
                autoComplete="name"
              />
            </div>
            
            <div className="input-group">
              <input
                type="email"
                name="email"
                placeholder="Email для связи"
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="email"
              />
            </div>

            <div className="input-group">
              <input
                type="text"
                name="company"
                placeholder="Компания (необязательно)"
                value={formData.company}
                onChange={handleChange}
                autoComplete="organization"
              />
            </div>
            
            <div className="input-group">
              <textarea
                name="message"
                placeholder="Опишите проект или вакансию"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            
            <button 
              type="submit" 
              disabled={formStatus === 'submitting'}
              style={{ 
                cursor: formStatus === 'submitting' ? 'not-allowed' : 'pointer',
                marginTop: '10px'
              }}
            >
              {formStatus === 'submitting' ? '⏳ Отправка...' : '📤 Отправить заявку'}
            </button>
          </form>

          {formStatus === 'success' && (
            <div className="form-status success">
              <span>✓</span> Заявка отправлена. Свяжусь в ближайшее время.
            </div>
          )}
          {formStatus === 'error' && (
            <div className="form-status error">
              <span>!</span> Ошибка отправки. Напишите напрямую в Telegram.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}