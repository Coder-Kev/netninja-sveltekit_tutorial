<script>
    /** @type {import('./$types').PageData} */
    export let data
    const guides = data.guides
</script>

<h1>This Guide List Comes from a static API call</h1>
<h3>Video:  SvelteKit Crash Course Tutorial #15 - API Routes</h3>
<div class="guides">
    <ul>
        
        {#each guides as guide}
            <li>
                TITLE: <a data-sveltekit-preload-data="hover" href="/guides/{guide.id}">{guide.title}</a>
            </li>
        {/each}
    </ul>
</div>

<style>
    .guides {
      margin-top: 20px;
    }
    ul {
      list-style-type: none;
      padding: 0;
    }
    a {
      display: inline-block;
      margin-top: 10px;
      padding: 10px;
      border: 1px dotted rgba(255,255,255,0.2);
    }
  </style>