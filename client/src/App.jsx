// Ces listes contiennent les textes et les chiffres affichés dans le portfolio.
const projectStats = [
  { label: '', value: '', meta: '' },
  { label: '', value: '', meta: '' },
  { label: '', value: '', meta: '' },
];

const focusItems = [
  'Bac général',
];
const skillItems = [
  'Video game type FPS',
  'Video game type Tower Defense',
  'Video game type Metroidvania',
];

function App() {
  return (
    <main className="portfolio" id="portfolio-screen">
      <div className="portfolio-grain" aria-hidden="true" />

      <header className="portfolio-header">
        <a className="wordmark" href="#accueil" aria-label="Portfolio, accueil">
          <span className="wordmark-text">PORTFOLIO</span>
          <span className="wordmark-cursor">_</span>
        </a>

        <nav aria-label="Navigation principale">
          <a href="#accueil">Accueil</a>
          <a href="#apropos">À propos</a>
          <a href="#projets">Projets</a>
          <a href="#savoir-faire">Compétences</a>
          <a href="#contact">Contact</a>
        </nav>

        <p className="header-status">
          <span className="status-light" /> SIGNAL ACTIF
        </p>
      </header>

      {/* Première partie : présentation et aperçu visuel du portfolio. */}
      <section className="portfolio-hero" id="accueil" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">
            <span>PORTFOLIO</span> / ÉTUDIANT EN DÉVELOPPEMENT WEB
          </p>
          <h1 id="hero-title">
            WEB
            <br />
            <span>DEVELOPER.</span>
          </h1>
          <p className="hero-description">
            Étudiant en développement web, je m'intéresse à la conception d'interfaces interactives et à leur réalisation technique.
          </p>

          <div className="hero-actions">
            <a className="play-link" href="#projets">
              <span aria-hidden="true">↓</span> VOIR LE PROJET
            </a>
            <a className="text-link" href="#apropos">
              MON PROFIL <span aria-hidden="true">↘</span>
            </a>
          </div>

          <p className="hero-footnote">
            CRÉATION WEB <span>·</span> INTERFACES <span>·</span> INTERACTIVITÉ
          </p>
        </div>

        <div className="hero-screen" role="img" aria-label="Aperçu d'une interface web immersive inspirée d'un écran de surveillance">
          <div className="screen-topline">
            <span>DEV STUDY / 001</span>
            <span className="rec">
              <i /> GIF
            </span>
          </div>
          <div className="screen-image hero-main-image" />
          <div className="screen-crosshair" aria-hidden="true" />
          <div className="screen-bottomline">
            <span>STUDY WEB</span>
            <span>HTML / CSS / JS</span>
          </div>
          <span className="screen-index">WEB_01</span>
        </div>

        <div className="hero-stats" aria-label="Caractéristiques du projet">
          {projectStats.map((item) => (
            <div key={item.label}>
              <span>{item.label}</span>
              <strong>
                {item.value} <small>{item.meta}</small>
              </strong>
            </div>
          ))}
        </div>
      </section>

      {/* Les centres d'intérêt sont générés depuis la liste focusItems. */}
      <section className="about-section" id="apropos" aria-labelledby="about-title">
        <div className="section-heading">
          <p className="eyebrow">01 / PROFIL</p>
          <h2 id="about-title">À propos</h2>
        </div>

        <div className="about-copy">
          <p className="project-lead">Formation et centres d'intérêt</p>
          <p>Je m'intéresse particulièrement au développement web, aux jeux vidéo et aux design rendu des sites.</p>
          <p>Ce portfolio présente mes centres d'intérêt et les compétences que je développe à travers des projets pratiques.</p>
          <p>
            <a className="text-link" href="https://www.canva.com/design/DAHA0oyPxTs/0GTE-r7LsEntfiOx3qkS5Q/edit" target="_blank" rel="noreferrer">
              CONSULTER MON CV <span aria-hidden="true">↗</span>
            </a>
          </p>
        </div>

        <div className="profile-brief" aria-label="Centres d'intérêt">
          {focusItems.map((focus, index) => (
            <div key={focus}>
              <span>{`Diplome_0${index + 1}`}</span>
              <strong>{focus}</strong>
            </div>
          ))}
          {skillItems.map((skill, index) => (
            <div key={skill}>
              <span>{`Centre d'intérêt_0${index + 1}`}</span>
              <strong>{skill}</strong>
            </div>
          ))}
        </div>
      </section>

      {/* Cette partie présente le projet et renvoie vers son dépôt GitHub. */}
      <section className="work-section" id="projets" aria-labelledby="work-title">
        <div className="section-heading work-heading">
          <div>
            <p className="eyebrow">02 / PROJET</p>
            <h2 id="work-title">Projet réalisé</h2>
          </div>
          <span className="capture-count">DÉVELOPPEMENT WEB INTERACTIF</span>
        </div>

        <article className="work-feature">
          <a className="work-visual" href="https://github.com/lgdark200-netizen/rjv" target="_blank" rel="noreferrer" aria-label="Voir le dépôt GitHub du projet One Night at Greddy's">
            <span className="work-visual-label">Recherche <i /> rép</span>
            <span className="work-visual-index">001</span>
          </a>

          <div className="work-copy">
            <p className="eyebrow">PROJET WEB <span>·</span> REACT & NODE.JS</p>
            <h3>
              Repérage
              <br />
              de Jeux Vidéo
            </h3>
            <p>
              Ce projet propose une sorte de gestion de pour différent type de jeu vidéo comme l'envie d'y jouer, de l'avoir tester, qu'il soit encore en cours ou encore de l'avoir fini. Il est réalisé avec React et Node.js.
            </p>
            <ul className="work-tags" aria-label="Technologies du projet">
              <li>REACT</li>
              <li>NODE.JS</li>
              <li>CSS</li>
            </ul>
            <a className="work-link" href="https://github.com/lgdark200-netizen/rjv" target="_blank" rel="noreferrer">
              CONSULTER LE DÉPÔT GITHUB <span aria-hidden="true">↗</span>
            </a>
          </div>
        </article>

      </section>

      <section className="skills-section" id="savoir-faire" aria-labelledby="skills-title">
        <div className="section-heading">
          <p className="eyebrow">03 / COMPÉTENCES</p>
          <h2 id="skills-title">Compétences mobilisées</h2>
        </div>

        <div className="skills-grid">
          <article className="skill-item">
            <span className="skill-number">01</span>
            <h3>Développement web</h3>
            <p>Ce portfolio représente une partie de mes compétances dans le développement web. Ainsi que mon projet GitHub.</p>
            <span className="skill-tools">React / Node.js</span>
          </article>
          <article className="skill-item">
            <span className="skill-number">02</span>
            <h3>Développement interactif</h3>
            <p>Utilisation de composants et d'événements pour rendre les pages interactives.</p>
            <span className="skill-tools">REACT / NODE.JS</span>
          </article>
          <article className="skill-item">
            <span className="skill-number">03</span>
            <h3>Intégration visuelle</h3>
            <p>Création d'une identité visuelle cohérente grâce à la typographie et aux textures.</p>
            <span className="skill-tools">LAYOUT / MOTION / ATMOSPHÈRE</span>
          </article>
        </div>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <div className="section-heading">
          <p className="eyebrow">04 / CONTACT</p>
          <h2 id="contact-title">Me contacter</h2>
        </div>

        <div className="contact-grid">
          <a className="contact-item" href="https://mail.google.com/mail/?view=cm&fs=1&to=maelbrams%40gmail.com" target="_blank" rel="noreferrer">
            <span className="contact-label">E-mail</span>
            <strong>maelbrams@gmail.com</strong>
            <span className="contact-action">ENVOYER UN MESSAGE ↗</span>
          </a>
          <a className="contact-item" href="https://discord.com/users/869604872964669541" target="_blank" rel="noreferrer">
            <span className="contact-label">Discord</span>
            <strong>Voir mon profil</strong>
            <span className="contact-action">PROFIL DISCORD ↗</span>
          </a>
          <a className="contact-item" href="https://www.linkedin.com/in/maël-brams-715b6a434/" target="_blank" rel="noreferrer">
            <span className="contact-label">LinkedIn</span>
            <strong>Voir mon profil</strong>
            <span className="contact-action">PROFIL LINKEDIN ↗</span>
          </a>
          <a className="contact-item" href="https://github.com/lgdark200-netizen" target="_blank" rel="noreferrer">
            <span className="contact-label">GitHub</span>
            <strong>lgdark200-netizen</strong>
            <span className="contact-action">PROFIL GITHUB ↗</span>
          </a>
        </div>
      </section>

      <footer className="portfolio-footer">
        <a className="wordmark" href="#accueil" aria-label="Portfolio, retour en haut">
          <span className="wordmark-text">PORTFOLIO</span>
          <span className="wordmark-cursor">_</span>
        </a>
        <p>
          PORTFOLIO <span>—</span> CRÉATION NUMÉRIQUE
        </p>
        <a href="#accueil">RETOUR EN HAUT ↑</a>
      </footer>
    </main>
  );
}

export default App;
