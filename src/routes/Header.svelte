<script>
  import logo from "$lib/images/logo.svg";
  function menuReset() {
    document.querySelector("#hamburger-menu").checked = false;
  }
</script>

<header>
  <!-- <article class="logo">
    <a href="/"><img src={logo} alt="My logo" /></a>
    <h1>Eric Brown</h1>
  </article> -->

  <button class="menu-button">
    <label for="hamburger-menu" class="hamburger-menu-input-text"> Menu </label>
    <label for="hamburger-menu" class="hamburger-menu-input">
      <!-- <img class="nav-open-input" src="{logo}" alt="" /> -->
      <div class="nav-open-input2"></div>
      <div class="nav-open-input2"></div>
      <div class="hamburger-menu-panel"></div>
      <!-- <p class="nav-close-input">X</p> -->
      <input
        type="checkbox"
        name="hamburger-menu"
        id="hamburger-menu"
        unchecked
      />
    </label>
  </button>

  <nav>
    <ul>
      <li>
        <a on:click={menuReset} href="/">Home</a>
      </li>
      <li>
        <a on:click={menuReset} href="/about">About</a>
      </li>
      <li>
        <a on:click={menuReset} href="/portfolio">Portfolio</a>
      </li>
      <li>
        <a on:click={menuReset} href="/resume">Resume</a>
      </li>
      <li>
        <a on:click={menuReset} href="/contact">Contact</a>
      </li>
    </ul>
  </nav>
</header>

<style>
  /* Variables */
  :global(:root) {
    --header-block-padding: 12px;
    --header-max-height: 4rem;
  }
  :root {
    --link-font-size: clamp(1.5rem, 0.231vw + 0.94rem, 2rem);
    --stage-1-time: 500ms;
    --stage-2-time: 250ms;
    --stage-2-delay: var(--stage-1-time);
  }

  /* Page Header */
  header {
    position: fixed;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    /* max-height: fit-content; */
    max-height: var(--header-max-height);
    max-width: 100vw;
    padding-inline: 15px;
    padding-block: var(--header-block-padding);
  }

  nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 767px) {
    nav {
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      margin-inline: auto;
      height: 100%;
      /* width: 100%; */
      /* max-width: fit-content; */
      background: var(--panel-background-color);
      /* padding: 2em; */
      text-align: center;
    }

    nav ul {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      list-style-type: none;
    }

    nav ul li {
      font-size: 1.5rem;
    }
    /* Hamburger Menu for mobile nav*/
    #hamburger-menu {
      display: none;
    }

    nav {
      transition:
        opacity var(--stage-2-time) var(--stage-2-delay),
        transform var(--stage-2-time);
      transform: scale(0%) translateY(0vh);
      opacity: 0;
    }

    header:has(#hamburger-menu:checked) nav {
      transition:
        opacity var(--stage-1-time),
        transform var(--stage-1-time);
      transform: scale(100%);
      opacity: 1;
    }

    .menu-button {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      background: none;
      border: none;
      border-radius: 15px;
    }

    .hamburger-menu-input,
    .hamburger-menu-input-text {
      z-index: 2;
    }
    .hamburger-menu-input {
      position: relative;
      min-width: 40px;
      min-height: 40px;
    }
    .hamburger-menu-input-text {
      color: var(--first-level-text-color);
      font-size: 1.2rem;
      justify-self: end;
    }

    /* Menu Label Before Arrow */
    .hamburger-menu-input-text:before {
      content: "=>";
      height: 100%;
      opacity: 0;
      transition: opacity var(--stage-1-time) ease-in;
    }

    header:has(#hamburger-menu:checked)
      .menu-button
      .hamburger-menu-input-text:before {
      content: "=>";
      opacity: 1;
      transition: opacity calc(var(--stage-1-time) * 0.5) ease-in;
    }

    /* Create hamburger icon */
    .hamburger-menu-input div,
    .hamburger-menu-input div:before,
    .hamburger-menu-input div:after {
      position: absolute;
      display: block;
      content: "";
      height: 6px;
      width: 30px;
      border-radius: 3px;
      background-color: var(--accent-color);
    }
    label div {
      left: 0;
      right: 0;
      bottom: 17px;
      margin-inline: auto;
    }
    label div:before {
      top: -10px;
    }

    label div:after {
      top: 10px;
    }
    .hamburger-menu-panel {
      position: relative;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: -1;
      opacity: 0;
      background-color: #999;
    }

    /* Initial states */
    .hamburger-menu-input div {
      transition: transform var(--stage-2-time) var(--stage-2-delay) ease-in;
      transform: rotateZ(0deg);
    }

    .hamburger-menu-input div:first-child,
    .hamburger-menu-input div:first-child:before,
    .hamburger-menu-input div:first-child:after {
      background-color: var(--accent-color);
      z-index: 1;
    }

    /* Initial State/Form hamburger icon */
    /* Unform X */
    header:not(:has(#hamburger-menu:checked)) label div:nth-child(odd) {
      transition: transform var(--stage-1-time) ease-in;
      transform: rotateZ(0deg);
    }
    header:not(:has(#hamburger-menu:checked)) label div:nth-child(even) {
      transition: transform var(--stage-1-time) ease-in;
      transform: rotateZ(0deg);
    }

    /* Enter before and after elements */
    header:not(:has(#hamburger-menu:checked)) label div:nth-child(even):before {
      transition:
        opacity var(--stage-2-time) var(--stage-2-delay) ease-in-out,
        transform var(--stage-2-time) var(--stage-2-delay) ease-in-out;
      transform: translateX(0px);
      opacity: 1;
    }
    header:not(:has(#hamburger-menu:checked)) label div:nth-child(even):after {
      transition:
        opacity var(--stage-2-time) var(--stage-2-delay) ease-in-out,
        transform var(--stage-2-time) var(--stage-2-delay) ease-in-out;
      transform: translateX(0px);
      opacity: 1;
    }

    header:not(:has(#hamburger-menu:checked)) label div:first-child:before {
      transition:
        opacity var(--stage-2-time) var(--stage-2-delay) ease-in-out,
        transform var(--stage-2-time) var(--stage-2-delay) ease-in-out;
      transform: translateX(0px);
      opacity: 1;
    }
    header:not(:has(#hamburger-menu:checked)) label div:first-child:after {
      transition:
        opacity var(--stage-2-time) var(--stage-2-delay) ease-in-out,
        transform var(--stage-2-time) var(--stage-2-delay) ease-in-out;
      transform: translateX(0px);
      opacity: 1;
    }

    /* Exit before and after elements */
    header:has(#hamburger-menu:checked) label div:nth-child(even):before {
      transition:
        opacity var(--stage-1-time) ease-in-out,
        transform var(--stage-1-time) ease-in-out;
      transform: translateX(-20px);
      opacity: 0;
    }
    header:has(#hamburger-menu:checked) label div:nth-child(even):after {
      transition:
        opacity var(--stage-1-time) ease-in-out,
        transform var(--stage-1-time) ease-in-out;
      transform: translateX(-20px);
      opacity: 0;
    }

    header:has(#hamburger-menu:checked) label div:first-child:before {
      transition:
        opacity var(--stage-1-time) ease-in-out,
        transform var(--stage-1-time) ease-in-out;
      transform: translateX(20px);
      opacity: 0;
    }
    header:has(#hamburger-menu:checked) label div:first-child:after {
      transition:
        opacity var(--stage-1-time) ease-in-out,
        transform var(--stage-1-time) ease-in-out;
      transform: translateX(20px);
      opacity: 0;
    }

    /* Form X on checked */
    header:has(#hamburger-menu:checked) label div:nth-child(odd) {
      transition: transform var(--stage-2-time) var(--stage-2-delay) ease-in;
      transform: rotateZ(45deg);
    }
    header:has(#hamburger-menu:checked) label div:nth-child(even) {
      transition: transform var(--stage-2-time) var(--stage-2-delay) ease-in;
      transform: rotateZ(135deg);
    }
  }
  nav ul li a {
    font-size: var(--link-font-size);
  }

  @media (max-width: 767px) {
    header {
      z-index: 9000;
    }
    :global(header:has(#hamburger-menu:checked) ~ *) {
      transition: opacity var(--stage-1-time) ease-in-out;
      opacity: 0;
      overflow: hidden;
    }

    :global(header ~ *) {
      transition: opacity var(--stage-1-time) ease-in-out;
      opacity: 1;
    }
  }
  @media (min-width: 768px) {
    header {
      max-height: unset;
      position: unset;
    }
    .menu-button {
      display: none;
    }

    nav ul {
      list-style: none;
      display: flex;
      gap: 1rem;
    }
  }
</style>
