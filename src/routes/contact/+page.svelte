<script>
  import Window from "../Window.svelte";
</script>

<div class="form-container">
  <Window>
    <h1>Contact Me</h1>
    <form name="contact" method="POST" data-netlify="true">
      <section class="form-field">
        <label for="name">Name</label>
        <input type="text" name="first-name" id="first-name" required />
      </section>

      <section class="form-field">
        <label for="organization">Organization</label>
        <input type="text" name="organization" id="organization" />
      </section>

      <section class="form-field">
        <label for="email">Email</label>
        <input type="email" name="email" id="email" />
      </section>

      <section class="form-field">
        <label for="message">Message</label>
        <textarea
          name="message"
          id="message"
          placeholder="Type your message!"
          rows="8"
          required
        ></textarea>
      </section>

      <fieldset>
        <legend>Would you like a reply?</legend>

        <div>
          <input
            type="radio"
            id="yes-reply"
            name="reply"
            value="yes-reply"
            checked
          />
          <label for="yes-reply">Yes, please reply!</label>
        </div>

        <div>
          <input type="radio" id="no-reply" name="reply" value="no-reply" />
          <label for="no-reply">No reply needed!</label>
        </div>
      </fieldset>

      <input type="submit" value="Submit" />
    </form>
  </Window>
</div>

<style>
  :root {
    --field-spacing: 1.2rem;
    --label-spacing: calc(var(--field-spacing) / 2);
  }
  form {
    display: flex;
    flex-direction: column;
    gap: var(--field-spacing);
    /* padding-inline: 2rem; */
    /* max-width: 768px; */
  }
  .form-field {
    display: flex;
    flex-direction: column;
    gap: var(--label-spacing);
  }
  .form-field label::after,
  legend::after {
    display: block;
    content: "";
    background-color: var(--accent-color);
    height: 2px;
    width: 5ch;
  }
  .form-field input,
  .form-field textarea {
    color: whitesmoke;
    background-color: black;
  }
  legend::after {
    margin-block-end: 1rem;
  }
  fieldset {
    border: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  input[type="radio"] {
    height: 1.5rem;
    width: 1.5rem;
    margin-inline-start: 2rem;
    accent-color: var(--accent-color);
  }

  input[type="submit"] {
    background-color: black;
  }
</style>
