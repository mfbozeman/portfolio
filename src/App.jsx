import "./styles/App.css";
import headshot from "./assets/headshot.png";
import btd6 from "./assets/btd6_1.png";

function App() {
  return (
    <>
      <nav>
        <div className="content">
          Morgan Bozeman
          <div>
            <a href="#works">Works</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>
      <header className="hero" id="hero">
        <div className="content">
          <img src={headshot} alt="" />
          <h1>Hey, I'm Morgan!</h1>
          <h2>
            I'm a recent graduate in computer science with a passion for
            frontend development, UI/UX design, and all things film.
          </h2>
          <a href="#contact" className="cta">
            Contact Me
          </a>
        </div>
        <span className="chevron"></span>
      </header>
      <section id="works">
        <h2>Works</h2>
        <ul>
          <li>
            <h3>BTD6 Stats Project</h3>
            <img src={btd6} alt="" />
            <p>
              Created a full-stack application to aggregate and display
              behind-the-scenes statistics from the popular video game{" "}
              <em>Bloons Tower Defense 6</em>. Collected statistics by scraping
              from website, populated a database, and built a RESTful API for
              streamlined access. Designed a frontend to display statistics in a
              concise, useful manner while maintaining the fun, playful feeling
              of the game series.
            </p>
            <p>Skills: React, NodeJS, Express, PostgreSQL, HTML/CSS</p>
            <p>
              <a href="https://btd6stats.netlify.app/">View the website here</a>
              , or{" "}
              <a href="https://github.com/mfbozeman/bloons-stats">
                {" "}
                see the code on GitHub
              </a>
              .
            </p>
          </li>
          <li>
            <h3>Example Blog Stack</h3>
            <p>
              A minimalist blog project, illustrating a full stack workflow with
              backend API database containing post data. Implementation of two
              separate frontends: one for readers, one for authors. ... design
              ideas, user functionality,
            </p>
            <p>
              Skills: React.js, Node.js, Express, PostgreSQL, Prisma, HTML/CSS
            </p>
            <p>Screenshots of the project</p>
            <p>
              <a href="">Author frontend</a>, <a href="">backend</a> and{" "}
              <a href="">link to the code on GitHub</a>.
            </p>
          </li>
        </ul>
      </section>
      <section id="about">
        <h2>About Me</h2>
        <img src={headshot} alt="" />
        <p>
          I graduated magna cum laude from the University of Minnesota in 2025,
          where I received a Bachelor of Science in Computer Science and a
          Bachelor of Arts in Studies in Cinema and Media Culture. While
          studying there, I collaborated with the MELT reasearch group,
          constructing an algorithmic debugger for the attribute grammar Silver,
          as well as working as a teaching assistant for a functional
          programming course, instructing students in OCaml. I also directed my
          thesis short film, <em>Scenes from Childhood</em>. I enjoy
          implementing website designs that are simple yet effective. In my free
          time, I love watching and writing about movies, jamming on bass
          guitar, and playing board games.
        </p>
        <a href="/" target="_blank" className="cta">
          View resume
        </a>
      </section>
      <section id="contact">
        <h2>Contact</h2>
        <a href="mailto:morgan.f.bozeman@gmail.com">
          morgan.f.bozeman@gmail.com
        </a>
        <a href="https://linkedin.com/in/morganfbozeman/">LinkedIn</a>
        <a href="https://github.com/mfbozeman">GitHub</a>
      </section>
    </>
  );
}

export default App;
