// DO NOT MODIFY
var genericNumberArray = [1, 2, 3, 4, 5];
var colors = ['Blue', 'Red', 'Yellow', 'Charlie'];
var scrambledWords = ['win', 'the', 'for', 'burritos'];
var phoneNumber = [9, 0, 3, 5, 7, 6, 8];
var orderQueue = [{ takeOut: 'Ice Cream' }, { takeOut: 'Medium Salad'}, { takeOut: 'Burger'}];
var mixedNums = [5, 81, 40, 4, 805, 10, 76, 21, 3, 2, 7, 1, 7];
var mixedWords = ['Dont', 'You', 'Forget', 'About', 'Me'];
var fruitCollection = ['Apple', 'Scissors', 'Pug', 'Lady Bug', 'Banana', 'Pear'];
var gemBox = ['Ruby', 'Diamond', 'Diamond', 'Emerald', 'Moonstone', 'Pizza', 'Sneaker', 'Sapphire', 'Baby', 'Jeans', 'Soda Can', 'Boat'];
var upToTen = [1, 2, 9, 10];
var brownOnly = ['brown', 'brownish', 'ad8fy7iuhj23nrsf', 9813, {}, undefined,  'brown'];
var orderedValues = [4, 5, 6, 7, 8, 9, 10];
var friends = ['Todd', 'Jacoby', 'Miko', 'Joseph', 'Kevin', 'Todd C.'];
var monthNames = ['Jan', 'Feb', 'Mar', 'Apr'];
var bulkNumbers = [5, 5, 6, 6, 9, 9, 2, 2, 2, 5, 2];

// do your work below!
var nameArray = [];
nameArray.push('Bryce', 'Saito');
console.log(nameArray);

var tenArray = genericNumberArray.push(6, 7, 8, 9, 10);
console.log(tenArray);

var popResult = colors.pop();
console.log(colors);

var unscrambledWords = scrambledWords.reverse();
var revPhoneNumber = phoneNumber.reverse();
console.log(unscrambledWords, revPhoneNumber);

var nextOrder = orderQueue.shift();
console.log (orderQueue, nextOrder);

var sortedNums = mixedNums.sort();
var sortedWords = mixedWords.sort();
console.log(sortedNums, sortedWords);

var notFruit = fruitCollection.splice(1, 3);
gemBox.splice(5,2);
gemBox.splice(6,4);
console.log(notFruit, fruitCollection, gemBox);


upToTen.splice(2, 0, 3, 4, 5, 6, 7, 8);
console.log(upToTen);

brownOnly.splice(1, 5, 'brown', 'brown', 'brown');
console.log(brownOnly);

var orderedValuesNewLength = orderedValues.unshift(1, 2, 3);
console.log(orderedValuesNewLength);

var randomThingsArray = genericNumberArray.concat(colors);
var updatedOrders = orderQueue.concat({ takeOut: 'Ramen'}, {takeOut: 'Karaage Chicken'});
console.log(randomThingsArray, updatedOrders);

var sentence = scrambledWords.join(' ');
var myFruits = fruitCollection.join(' + ');
console.log(sentence, myFruits);

var favoriteFriends = friends.slice(1,3);
var owesMoney = friends.slice(3);
console.log(favoriteFriends, owesMoney);

var monthNameString = monthNames.toString();
console.log(monthNameString);

var favoriteColor = colors.indexOf('Red');
var favoriteEvenNumber = mixedNums.indexOf(76);
console.log(favoriteColor, favoriteEvenNumber);

var lastNine = bulkNumbers.lastIndexOf(9);
var lastFive = bulkNumbers.lastIndexOf(5);
console.log(lastNine, lastFive);