export async function load({ fetch }) {
    //const url = 'https://jsonplaceholder.typicode.com/posts'
    const url = '/api/guides'
    const res = await fetch(url);
    const guides = await res.json();
    return {
        guides: guides
    };
  }