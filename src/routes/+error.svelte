<script>
    import { page } from '$app/stores';
    let status = $page.status;
    let pathname = $page.url.pathname;
    let message = $page.error.message;
    import Title from '$lib/title.svelte'
    import '../styles/global.css'
</script>
  
<header>
  <Title title="Root - Ninja Gaming Guides"></Title>
</header>
<main>
  <div class="error">
    <h1>Oops</h1>
    <h3>Error {status} On {pathname}</h3>
    <p>{message}</p>
    <a href="/guides">View all guides</a>
  </div>
  </main>
<footer>
  <p>Copyright 2022 Ninja Gaming Guides</p>
</footer>

<style>
  header {
      display: flex;
      justify-content: center;
  }
  main {
      max-width: 960px;
      margin: 20px auto;
  }
  footer {
      text-align: center;
}
.error {
    text-align: center;
    margin-bottom: 60px;
  }

</style>