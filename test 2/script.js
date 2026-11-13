//start with the given array
let  shoppingList = ["bread","milk","sugar","rice"];

console.log(shoppingList);
console.log("First item: " + shoppingList[0]);
console.log("Last item: " + shoppingList[shoppingList.length - 1]);
//adding cooking oil to the end of the array
shoppingList.push("cooking oil");
console.log("Shopping List with Cooking Oil: " + shoppingList);
shoppingList.shift(); //removing the first item from the array
console.log("Shopping List after removing first item: " + shoppingList);
//change sugar to tea leaves
let sugarIndex = shoppingList.indexOf("sugar");
if (sugarIndex !== -1) {
    shoppingList[sugarIndex] = "tea leaves";
}
console.log("Total number of items: " + shoppingList.length);