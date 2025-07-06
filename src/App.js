import React, { useState } from 'react'; 
import Header from './Header';
import './style.css';

function App() {
  const [showEmail, setShowEmail] = useState(false);
  const [copied, setCopied] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (src) => {
    setSelectedImage(process.env.PUBLIC_URL + src);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="App">
      <div className="stars"></div>
      <Header />
      
      {/* SECCIÓN PROYECTOS */}
      <section id="projects" className="section">
        <h2>Proyectos</h2>
        <div className="projects-container">
          <div className="project-card">
            <a href='https://lourdesmiranda.github.io/black-books/' className="project-button" Target="_blank">
           <h3>Black Book🔗</h3>
           </a>
            <p><b><u>Proyecto personal</u></b> enfocado en el diseño de una interfaz web oscura y misteriosa para amantes de la lectura y el cine.</p> 
            <p><b><u>Objetivo:</u></b> Desarrollar una estructura visual clara y atractiva, con diseño responsive, con el fin de practicar maquetación web con HTML, CSS, JavaScript y React.</p>
            
            <div className="project-images-container">
              <div className="project-image-item">
                <img 
                  src={process.env.PUBLIC_URL + "/images/wareframe_fisico.jpeg"} 
                  alt="Wireframes físico" 
                  onClick={() => openImage("/images/wareframe_fisico.jpeg")}
                  className="clickable-image"
                />
                <div className="image-description">
                  <h4>Wireframe Físico ✏️</h4>
                  <p>Un esquema hecho a mano sobre papel cuadriculado con el objetivo de estructurar los bloques principales de contenido del proyecto.</p>
                </div>
              </div>
              
              <div className="project-image-item">
                <img 
                  src={process.env.PUBLIC_URL + "/images/wareframe_digital.png"} 
                  alt="Wireframes digital" 
                  onClick={() => openImage("/images/wareframe_digital.png")}
                  className="clickable-image"
                />
                <div className="image-description">
                  <h4>Wireframe Digital 💻</h4>
                  <p>Traslado de Wireframe físico a digital para dar lugar a un layout a través de Figma.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      {/* SECCIÓN HABILIDADES */}
      <section id="skills" className="section">
        <h2>Habilidades</h2>
        <div className="skills-scroll">
          {[
            { name: 'HTML', logo: '/images/html_logo.png', level: 95 },
            { name: 'CSS', logo: '/images/css_logo.png', level: 85 },
            { name: 'JavaScript', logo: '/images/javascript_logo.png', level: 40 },
            { name: 'TypeScript', logo: '/images/logo_typescript.png', level: 0 },
            { name: 'React', logo: '/images/logo_react.png', level: 45 },
            { name: 'GitHub', logo: '/images/logo_github.png', level: 40 },
            { name: 'Git', logo: '/images/git_logo.png', level: 45 },
            { name: 'WordPress', logo: '/images/wordpress_logo.jpg', level: 50 },
            { name: 'Salesforce', logo: '/images/salesforce_logo.png', level: 60 }
          ].map((skill) => (
            <div key={skill.name} className="skill-item">
              <div className="skill-icon-container">
                <img 
                  src={process.env.PUBLIC_URL + skill.logo} 
                  alt={skill.name} 
                  className="skill-icon"
                />
              </div>
              <div className="skill-name">{skill.name}</div>
              <div className="skill-progress-container">
                <div className="skill-progress-label">
                  <span>Nivel</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="skill-progress">
                  <div 
                    className={`skill-progress-bar skill-${skill.name.toLowerCase().replace('.', '')}`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECCIÓN SOBRE MÍ */}
      <section id="about" className="section">
        <h2>Sobre mí</h2>
        <div className="about-grid">
          <div className="about-box">
            <h3>Experiencia Laboral</h3>
            <div className="education-container">
              {[
                { 
                  title: 'E-commerce / Front-end', 
                  logo: '/images/iskaypet_logo.png', 
                  year: '2022-Actualidad',
                  institution: 'Iskaypet',
                  description: 'Programación y maquetación de Landing page, Home, y categorías de las campañas'
                },
                { 
                  title: 'Advertiser Management', 
                  logo: '/images/awin_logo.jpg', 
                  year: '2021-2022',
                  institution: 'Awin',
                  description: 'Programación de herramientas de interfaz de usuario'
                },
                { 
                  title: 'Especialista en SEO', 
                  logo: '/images/global_logo.jpg', 
                  year: '2021',
                  institution: 'Global Commerce Media',
                  description: 'Investigación para formar estructuras de redacción con Wordpress'
                }
              ].map((experience, index) => (
                <div key={index} className="education-item experience-item">
                  <div className="education-icon-container">
                    <img 
                      src={process.env.PUBLIC_URL + experience.logo} 
                      alt={experience.title} 
                      className="education-icon"
                    />
                  </div>
                  <div className="education-details">
                    <h4>{experience.title}</h4>
                    <p className="education-institution">{experience.institution}</p>
                    <div className="education-year">{experience.year}</div>
                    <p className="education-description">{experience.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="about-box">
            <h3>Formación Académica</h3>
            <div className="education-container">
              {[
                { 
                  title: 'Máster en Marketing Digital y Comercio Electrónico', 
                  logo: '/images/eae_logo.png', 
                  year: '2020-2022',
                  institution: 'EAE Business School'
                },
                { 
                  title: 'Inteligencia artificial generativa', 
                  logo: '/images/linkeding_logo.jpg', 
                  year: '2024',
                  institution: 'LinkedIn'
                },
                { 
                  title: 'Aprende Javascript, HTML5 y CSS3', 
                  logo: '/images/udemylogo.png', 
                  year: '2025',
                  institution: 'Udemy'
                },
                { 
                  title: 'CSS / HTML', 
                  logo: '/images/mimo_logo.png', 
                  year: '2025',
                  institution: 'MIMO'
                }
              ].map((education, index) => (
                <div key={index} className="education-item">
                  <div className="education-icon-container">
                    <img 
                      src={process.env.PUBLIC_URL + education.logo} 
                      alt={education.title} 
                      className="education-icon"
                    />
                  </div>
                  <div className="education-details">
                    <h4>{education.title}</h4>
                    <p className="education-institution">{education.institution}</p>
                    <div className="education-year">{education.year}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN CONTACTO */}
      <section id="contact" className="section">
        <h2>Contacto</h2>
        <div className="contact-container">
          <div className="email-section">
            <button 
              className="email-button"
              onClick={() => setShowEmail(!showEmail)}
            >
              {showEmail ? 'Ocultar Email' : 'Mostrar Email'}
            </button>
            {showEmail && (
              <div className="email-display">
                lourdescoronela@gmail.com
                <button 
                  className="copy-button"
                  onClick={() => {
                    navigator.clipboard.writeText('lourdescoronela@gmail.com');
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000);
                  }}
                >
                  {copied ? '✓ Copiado!' : 'Copiar'}
                </button>
              </div>
            )}
          </div>

          <div className="social-links">
            <a href="https://www.linkedin.com/in/lourdes-miranda-024326123/" target="_blank" rel="noopener noreferrer">
              <img src={process.env.PUBLIC_URL + "/images/linkeding_logo.jpg"} alt="LinkedIn" className="social-icon" />
            </a>
            <a href="https://github.com/LourdesMiranda" target="_blank" rel="noopener noreferrer">
              <img src={process.env.PUBLIC_URL + "/images/logo_github.png"} alt="GitHub" className="social-icon" />
            </a>
            <a href="https://drive.google.com/file/d/1DMo5S-2wF08vs5Tw_jOQ36V_FjLmkn9O/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <img src={process.env.PUBLIC_URL + "/images/cv_logo.png"} alt="CV" className="social-icon" />
            </a>
          </div>
        </div>
      </section>

  {/* MODAL DE IMAGEN AMPLIADA */}
  {selectedImage && (
  <div className="image-modal" onClick={closeImage}>
    <div className="modal-content">
      <button className="close-button" onClick={closeImage} aria-label="Cerrar imagen">
        &times;
      </button>
      <img 
        src={selectedImage} 
        alt={selectedImage.includes("wareframe_fisico") ? "Wireframes físico" : "Wireframes digital"} 
        className="modal-image"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: 'auto',
          height: 'auto'
        }}
      />
    </div>
  </div>
)}
    </div>
  );
}

export default App;
