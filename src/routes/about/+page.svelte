<script>
  import Window from "../Window.svelte";
</script>

<article class="about">
  <div class="window-container">
    <Window>
      <div class="content">
        <h1 class="about__heading">I’m Eric.</h1>

        <section class="about__intro">
          <p class="about__text">
            I’m a web developer, UI/UX designer, game developer and general
            purpose programmer from New Jersey. In 2021 I went back to school
            for an IT certificate, but after one semester I realized that I was
            passionate about programming, and I love the human-centered design
            processes of UI/UX and game development. I have a diverse set of
            skills and I consider myself a language-agnostic programmer. You can
            see some of my projects from the past two years in my portfolio, and
            I’m excited to get started on some more.
          </p>
          <p class="about__text">
            I’m open to job opportunities where I can contribute to real
            projects, gain industry experience and learn from other developers.
            I’m also open to freelance work and less formal collaboration like
            hackathons, game jams and independent creative projects. If you’re
            looking for a developer for any of these and think I might be a good
            fit, don’t hesitate to contact me.
          </p>
        </section>
      </div>

      <!-- <img src="" alt="My face" class="about-image" /> -->
    </Window>
  </div>
</article>

<style>
  .content {
    max-width: 90ch;
  }
  .about {
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }
  /* .window-container {
    max-width: 768px;
  } */

  .about__intro {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  .about__text {
    line-height: 1.5;
    font-size: 1.1rem;
  }
</style>
