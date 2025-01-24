const gitHub_Api = "https://randomuser.me/api/....";

let user = fetch(gitHub_Api);
console.log(user);

user.then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
})


