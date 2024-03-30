<script>
import logo from '$lib/images/logo.svg'
</script>

<header>
    <article>
        <!-- Logo -->
        <a href="/"><img src="{logo}" alt="My logo"/></a>
        <h1>Eric Brown</h1>
      </article>

      <div class="menu-container">
      <label for="hamburger-menu">
        Menu
      </label>
      <label for="hamburger-menu" class="hamburger-menu-input">

        <!-- <img class="nav-open-input" src="{logo}" alt="" /> -->
        <div class="nav-open-input2">
        </div>
        <div class="nav-open-input2">
        </div>
        <div class="hamburger-menu-panel"></div>
        <!-- <p class="nav-close-input">X</p> -->
        <input
        type="checkbox"
        name="hamburger-menu"
        id="hamburger-menu"
        unchecked
      />
      </label>
        
      </div>


    <nav>
        <ul>
            <li >
                <a href="/">Home</a>
            </li>
            <li >
                <a href="/about">About</a>
            </li>
            <li >
                <a href="/portfolio">Portfolio</a>
            </li>
            <li >
                <a href="/resume">Resume</a>
            </li>
            <li >
                <a href="/contact">Contact</a>
            </li>
        </ul>
    </nav>
</header>

    <style>
/* Page Header */
header article {
display: flex;
align-items: center;

} 
header {
  /* position: relative; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: rgb(0, 0, 0, 0.1); */
  padding-inline: 10px;
  padding-block: 10px;
  border-block-end: 1px solid var(--accent-color);
}
nav {
  background: rgb(0,0,0,.5);
  /* display:none; */
  position: absolute;
  top: 70px;
  right: 0px;
  /* top: -100px; */
  grid-row: 2;
  grid-column: span 2;
  text-align: center;
  padding: 20px;
}

nav ul {
  /* display: none; */
  flex-direction: column;
  gap: 10px;
}

nav ul li {
    font-size: 1.3rem;
}

a img {
  min-width: 50px;
}

header:has(#hamburger-menu:checked) nav {
  /* display: flex; */
}

header:has(#hamburger-menu:checked) nav ul {
  /* display: flex; */
}

/* Hamburger Menu for mobile nav*/
#hamburger-menu {
    display: none;
}

:root{
  --stage-1-time: 500ms;
  --stage-2-time: 250ms;
  --stage-2-delay: var(--stage-1-time);
}

nav{
  transition: opacity var(--stage-2-time) var(--stage-2-delay),transform var(--stage-2-time);
  transform: translateX(100%);
  opacity: 0;
}

header:has(#hamburger-menu:checked) nav{
  transition: opacity var(--stage-1-time),transform var(--stage-1-time);
  transform:translateX(0%);
  opacity: 1;
}
.menu-container{
  display: flex;
  align-items: center;
  gap: .5rem;
}

label:has(div){
position: relative;
  min-width: 40px;
  min-height: 40px;
}
label:not(:has(div)){
  justify-self: end;
}
label div, label div:before,label div:after{
  position: absolute;  
  display: block;
  content: '';
  height: 6px; 
  width: 30px;
  border-radius: 3px; 
  background-color: var(--accent-color);
}
label div{
  left: 0;
  right: 0;
 bottom: 17px;
  margin-inline: auto;
}
label div:before{
  top: -10px;
}

label div:after{
  top: 10px;
}
.hamburger-menu-panel{
  position: relative;
  top: 0;
  left: 0;
  right:0;
  bottom: 0;
  z-index: -1;
  opacity: 0;
}
/* Initial states */
label div{
  transition: transform var(--stage-2-time) var(--stage-2-delay) ease-in;
  transform: rotateZ(0deg);
}

label div:first-child, label div:first-child:before, label div:first-child:after{
  background-color: black;
  z-index: 1;
}

/* Initial State/Form hamburger icon */
/* Unform X */
header:not(:has(#hamburger-menu:checked)) label div:nth-child(odd){
  transition: transform var(--stage-1-time) ease-in;
  transform: rotateZ(0deg);
}
header:not(:has(#hamburger-menu:checked)) label div:nth-child(even){
  transition: transform var(--stage-1-time) ease-in;
  transform: rotateZ(0deg);
}

/* Enter before and after elements */
header:not(:has(#hamburger-menu:checked)) label div:nth-child(even):before{
  transition: opacity var(--stage-2-time) var(--stage-2-delay) ease-in-out, transform  var(--stage-2-time) var(--stage-2-delay) ease-in-out;
  transform:translateX(0px);
  opacity: 1;
}
header:not(:has(#hamburger-menu:checked)) label div:nth-child(even):after{
  transition: opacity var(--stage-2-time) var(--stage-2-delay) ease-in-out, transform  var(--stage-2-time) var(--stage-2-delay) ease-in-out;
  transform:translateX(0px);
  opacity: 1;
}

header:not(:has(#hamburger-menu:checked)) label div:first-child:before{
  transition: opacity var(--stage-2-time) var(--stage-2-delay) ease-in-out, transform  var(--stage-2-time) var(--stage-2-delay) ease-in-out;
  transform:translateX(0px);
  opacity: 1;
}
header:not(:has(#hamburger-menu:checked)) label div:first-child:after{
  transition: opacity var(--stage-2-time) var(--stage-2-delay) ease-in-out, transform  var(--stage-2-time) var(--stage-2-delay) ease-in-out;
  transform:translateX(0px);
  opacity: 1;
}

/* Exit before and after elements */
header:has(#hamburger-menu:checked) label div:nth-child(even):before{
  transition: opacity var(--stage-1-time) ease-in-out, transform  var(--stage-1-time) ease-in-out;
  transform:translateX(-20px);
  opacity: 0;
}
header:has(#hamburger-menu:checked) label div:nth-child(even):after{
  transition: opacity var(--stage-1-time) ease-in-out, transform  var(--stage-1-time) ease-in-out;
  transform:translateX(-20px);
  opacity: 0;
}

header:has(#hamburger-menu:checked) label div:first-child:before{
  transition: opacity var(--stage-1-time) ease-in-out, transform  var(--stage-1-time) ease-in-out;
  transform:translateX(20px);
  opacity: 0;
}
header:has(#hamburger-menu:checked) label div:first-child:after{
  transition: opacity var(--stage-1-time) ease-in-out, transform  var(--stage-1-time) ease-in-out;
  transform:translateX(20px);
  opacity: 0;
}

/* Form X on checked */
header:has(#hamburger-menu:checked) label div:nth-child(odd){
  transition: transform var(--stage-2-time) var(--stage-2-delay) ease-in;
  transform: rotateZ(45deg);
}
header:has(#hamburger-menu:checked) label div:nth-child(even){
  transition: transform var(--stage-2-time) var(--stage-2-delay) ease-in;
  transform: rotateZ(135deg);
}

@media (min-width: 768px) {
    .hamburger-menu-input {
        display: none;
    }

    nav {
        position: unset;
        grid-row: 1;
        grid-column: 2;
    }

    nav ul {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
    }
}
</style>
