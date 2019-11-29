async function fetchUsers(){
    const resp = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await resp.json();
    console.log(data);
}
const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]
const getData = async function(){
    try{   
        const [users, posts, albums] = await Promise.all(urls.map(async url=>{
            const resp = await fetch(url);
            return await resp.json();
        }))
        console.log('users', users)
        console.log('posts', posts)
        console.log('albums', albums)
    }catch(err){
        console.log('oops', err)
    }   
}
const getData2 = async function(){
    const array = urls.map(url=>fetch(url));
    for await(let request of array){
        const data = await request.json();
        console.log(data)
    }
}