import { redirect } from '@sveltejs/kit';
export async function load({ fetch, params }) {
    const id = params.id
    // console.log("Begin Load",id);
    // await new Promise(resolve => setTimeout(resolve,2000));
    // console.log("End Load",id);
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`
    const res = await fetch(url);
    const guide = await res.json();
    if (res.ok) {
        return {
            status: res.status,
            guide: guide
        }
    } else {
        throw redirect(301, '/guides');
    }

  }