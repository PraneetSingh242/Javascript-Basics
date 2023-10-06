const accountId = 122553
let accountEmail = "praneetsingh242@gmail.com"
var accountPassword ="12345"
accountCity="Jaipur" //This is a way to declare variable but it's not advisable.
// accountId = 2 //not allowed
//  Scope {} This Curly Braces is scope

let accountState;

accountEmail = "praneetsingh2121@gmail.com"
accountPassword = "23445353"
console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);


/*Variables declared by let are only available inside the block where they're defined. Variables declared by var are available throughout the function in which they're declared.
Prefer not to use var because of issue in block scope and functional scope.
Const is another keyword to declare a variable when you do not want to change the value of that variable for the whole program.
*/
