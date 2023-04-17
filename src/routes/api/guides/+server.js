
const guides = [
    { id: 1, title: 'lesson 15 static api title 1' },
    { id: 2, title: 'lesson 15 static api title 2' },
    { id: 3, title: 'lesson 15 static api title 3' },
    { id: 4, title: 'lesson 15 static api title 4' },
    { id: 5, title: 'lesson 15 static api title 5' },
  ]
// reference: https://www.youtube.com/watch?v=qlmDj7q2x0c

export const GET = () => {
  return new Response(JSON.stringify(guides), {status: 200});
};