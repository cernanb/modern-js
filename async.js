// console.log("hello");

// setTimeout(() => {
//   console.log("this is the middle");
// }, 0);

// console.log("this is the end");

// function getGithubProfile() {
//   console.log("first");
//   fetch("https://api.github.com/users/cernanb")
//     .then((res) => res.json())
//     .then((data) => console.log("second", data));

//   console.log("third");
// }

async function getGithubProfile() {
  console.log("first");

  const res = await fetch("https://api.github.com/users/cernanb");
  const data = await res.json();

  console.log("second", data);

  console.log("third");
}

getGithubProfile();
