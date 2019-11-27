import { resolve } from "dns"
const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve('Stuff Worked');
  } else {
    reject('Broken');
  }
})

promise
  .then(result => result + '!')
  .then(result2 => {
    throw Error
    console.log(result2)
  })
  .catch(() => console.log('There is error'))

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'Hello 100');
})

const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'Hello 1000');
})

const promise4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'Hello 3000');
})

Promise.all([promise2, promise3, promise4])
  .then(valuesMudit => {
    console.log(valuesMudit);
  })


// #1) Create a promise that resolves in 4 seconds and returns "success" string
const promise = new Promise((resolve, reject) => {
  setTimeout(resolve, 4000, 'success');
})

promise
  .then(value => {
    return value;
  })


// #2) Run the above promise and make it console.log "success"

const promise = new Promise((resolve, reject) => {
  setTimeout(resolve, 4000, 'success');
})

promise
  .then(value => {
    console.log(value);
  })


// #3) Read about Promise.resolve() and Promise.reject(). How can you make
// the above promise shorter with Promise.resolve() and console loggin "success"

const promise = Promise.resolve(
  setTimeout(() => {
    console.log('Success');
  }, 4000)
);

// #4) Catch this error and console log 'Ooops something went wrong'
Promise.reject('failed')
  .catch(console.log('Ooops something went wrong'))

// #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a catch block as well.
const urls = [
  'https://swapi.co/api/people/1',
  'https://swapi.co/api/people/2',
  'https://swapi.co/api/people/3',
  'https://swapi.co/api/people/4'
]

Promise.all(urls.map(url =>
  fetch(url).then(resp => resp.json())
  ))
  .then(array => {
    console.log(array[0])
    console.log(array[1])
    console.log(array[2])
  })
  .catch(error => console.log('There is an error', error));

  const urls = [
    'https://swapi.co/api/people/1',
    'https://swapi.co/api/people/2',
    'https://swapi.co/api/people/3',
    'https://swapi.co/api/people/4'
  ]
  
  const getData = async function() {
    const [users, posts, albums] = await Promise.all(urls.map(url =>
      fetch(url).then(resp => resp.json())
      ))
      console.log('users', users);
      console.log('posts', posts);
      console.log('albums', albums);
  } 


// #6) Change one of your urls above to make it incorrect and fail the promise
// does your catch block handle it?

async function getUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  console.log(data);
}