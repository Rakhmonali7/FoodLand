const recipeContainer = document.querySelector(".recipe");
const timeout = function(s) {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};
// https://forkify-api.herokuapp.com/v2
///////////////////////////////////////
const user1 = {
    username: "thecode",
    followers: 0
};
const user2 = user1;
user2.followers = 3;
console.log(user1);
console.log(user2);

//# sourceMappingURL=index.62406edb.js.map
