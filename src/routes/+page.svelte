<article>
  <h2>
    <span>Hi,</span>
    <span>I'm Eric Brown</span>
  </h2>
  <p>
    I’m a recent graduate of Raritan Valley Community College and an aspiring
    software developer, UI designer and game developer. I love bringing creative
    projects to life with code.
  </p>
  <div>
    <p>Photo</p>
  </div>
  <button>
    <a href="/about"><span>More about me</span></a>
  </button>
</article>

<style>

  article {
    display: grid;
    gap: 1rem;
  }

  h2{
    grid-column: span 2;
  }

  h2 > *{
    display: block;
  }
  article > p{
    grid-column: 1 / span 2;
  }
  button{
    grid-column: span 2;
    justify-self: center;
  }
  button{
    border: none;
    border-radius: none;
    height: fit-content;
    width: fit-content;
    background: none;
  }
  article div{
    grid-column: span 2;
    grid-row: 2;
    background-color: black;
    height: 300px;
    width: 250px;
    justify-self: center;
  }
  article div p{
    color: var(--placeholder-text);
  }
  button a span{
    display: block;
  }

  button a {
    border: 4px outset black;
    background: green;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    height: 90px;
    width: 90px;
    padding: 1rem;
    text-decoration: none;
  }

  button:hover a {
    transition: transform 100ms ease-in;
    transform: scale(1.1, 1.1);
  }

  a:active {
    border: 4px inset black;
  }
  @media (min-width: 768px){
    article div{
      grid-column: 2/span 1;
      grid-row: unset;
    }
    article p{
      grid-row: 2;
      grid-column: 1 / span 1;
    }
  }
</style>