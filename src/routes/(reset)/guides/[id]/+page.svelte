<script>
    export let data
    const guide = data.guide
</script>

<h1>This Guide Lookup is From https://jsonplaceholder.typicode.com/posts/id</h1>
<h3>ID = {guide.id}</h3>
<div class="guide">
    <h2>{guide.title}</h2>
    <p>{guide.body}</p>
</div>
<div class="goback">
    <a href="/guides">Back To All Guides</a>
</div>

<style>
    .guide {
      margin-top: 40px;
      padding: 10px;
      border: 1px dotted rgba(255,255,255,0.2)
    }
    .goback{
        padding: 2rem;
        size: 1.5rem;
    }
</style>