<script>
import logo from '$lib/images/logo.svg'
</script>

<header>
    <article>
        <!-- Logo -->
        <img src="{logo}" alt="My logo"/>
        <h1>Eric Brown</h1>
    </article>
    <label for="hamburger-menu" class="hamburger-menu-input">
        <img class="nav-open-input" src="{logo}" alt="" />
        <p class="nav-close-input">X</p>
        <input
            type="checkbox"
            name="hamburger-menu"
            id="hamburger-menu"
            unchecked
            />
    </label>

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
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    /* background-color: rgb(0, 0, 0, 0.1); */
    padding-inline: 10px;
    padding-block: 10px;
    border-block-end: 1px solid var(--accent-color);
}

nav {
    position: absolute;
    top: -100px;
    grid-row: 2;
    grid-column: span 2;
    text-align: center;
    padding: 20px;
}

nav ul {
    display: none;
    flex-direction: column;
    gap: 10px;
}

nav ul li {
    font-size: 1.3rem;
}

article img {
    max-width: 50px;
}

/* Hamburger Menu for mobile nav*/
#hamburger-menu {
    display: none;
}

.hamburger-menu-input {
    justify-self: right;
}

.nav-open-input {
    width: 40px;
}

.nav-close-input {
    display: none;
    width: 40px;
    text-align: center;
    font-size: 30px;
    font-weight: bold;
}

header:has(#hamburger-menu:checked) nav {
    position: unset;
}

header:has(#hamburger-menu:checked) nav ul {
    display: flex;
}

header:has(#hamburger-menu:checked) .hamburger-menu-input .nav-close-input {
    display: block;
}

header:has(#hamburger-menu:checked) .hamburger-menu-input .nav-open-input {
    display: None;
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
