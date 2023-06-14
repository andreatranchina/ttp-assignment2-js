//1- forEach()
function myEach(myArray, callbackFunction){
    for (let i=0; i<myArray.length; i++){
        //call callback function on every element of the array
        callbackFunction(myArray[i]);
    }
}


//2- map()
function myMap(myArray, callbackFunction){
    let newArray = [];

    for (let i=0; i<myArray.length; i++){
        //call callback function on every element and add returned element to
        //the new array
        newArray.push(callbackFunction(myArray[i]));
    }
    return newArray;
}

//3 - filter()
function myFilter(myArray, callbackFunction){
    let newArray = [];
    
    for (let i=0; i< myArray.length; i++){
        //call callback function on every element
        //if the function returns true on that element, add element to new array
        if(callbackFunction(myArray[i])){
            newArray.push(myArray[i]);
        }
    }
    return newArray;
}

//4- some()
function mySome(myArray, callbackFunction){
    for (let i=0; i< myArray.length; i++){
        if (callbackFunction(myArray[i])){
            return true;
        }
    }
    return false;
}

//5 - every()
function myEvery(myArray, callbackFunction){
    for (let i=0; i<myArray.length; i++){
        if (!callbackFunction(myArray[i])){
            return false;
        }
    }
    return true;
}

//6- reduce()
function myReduce(myArray, callbackFunction, accumulator, initialAccumulator){
    accumulator = initialAccumulator
    for (let element of myArray){
        callbackFunction(element, accumulator);
    }
    return accumulator;
}

//7 - includes() 
function myIncludes(myArray, targetValue){
    for (let i=0; i< myArray.length; i++){
        if (myArray[i] === targetValue){
            return true;
        }
    }
    return false;
}


//8 - indexOf()
function myIndexOf(myArray, targetValue){
    for (let i=0; i< myArray.length; i++){
        if (myArray[i] === targetValue){
            return i;
        }
    }
    return -1;
}

//if want to provide starting index
function myIndexOf2(myArray, targetValue, startingIndex){
    for (let i = startingIndex; i < myArray.length; i++){
        if(myArray[i] === targetValue){
            return i;
        }
    }
    return -1;
}

//9 - push()
function myPush (myArray, ...elements){
    let arraySize = myArray.length;
    for(let i=0; i< elements.length; i++){
        myArray[arraySize + i] = elements[i];
    }
    return arraySize;
}
//check
let numbers = [];
myPush(numbers, 3, 4, 5);
console.log(numbers); //prints [3, 4, 5]

let states = [];
myPush(states, "New York", "New Jersey", "Florida");
console.log(states);

//10 - lastIndexOf()
function myLastIndexOf(myArray, targetValue){
    for (let i = myArray.length-1; i >=0; i--){
        if (myArray[i] === targetValue){
            return i;
        }
    }
    return -1;
}

//11 - Object.keys()
function grabKeys (myObject){
    let keys = [];
    for (const key in myObject){
        keys.push(key);
    }
    return keys;
}

let person = {
    firstName: "John",
    lastName: "Doe"
}
//check
console.log(grabKeys(person));

//12- Object.values()
function grabValues (myObject){
    let values = [];
    for (const key in myObject){
        values.push(myObject[key]);
    }
    return values;
}
//check
console.log(grabValues(person));
person.middleName = "Avery";
console.log(person);


//MISC exercises
//1 - sum of a range
console.log();
function myRange (num1, num2){
    let numArray = [];
    for (let i=num1; i<=num2; i++){
        numArray.push(i);
    }
    return numArray;
}

function mySum (numArray){
    let sum = 0;
    for (const num of numArray){
        sum += num;
    }
    return sum;
}

let myArray = myRange(2, 6);
console.log(myArray);
console.log(mySum(myArray));

//2- reversing an array
console.log();
function reverseArrayInPlace(myArray){
    let temp;
    for (let i=0, j=myArray.length-1; i < j; i++, j--){
        temp = myArray[i];
        myArray[i] = myArray[j];
        myArray[j] = temp;
    }
    return myArray;
}

function reverseArray(myArray){
    let newArray = [];
    while(myArray.length !== 0){
    newArray.push(myArray.pop());
    }
}

let ascendingArray = [1, 2, 3, 4, 5];

let descendingArray = reverseArrayInPlace(ascendingArray);
console.log(descendingArray);

//3 A list



//4 deepComparison()

function deepEqual(obj1, obj2){
    if (obj1 === obj2){
        return true;
    }
    else if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 == null || obj2 == null){
        return false; //note need to check for null because typeof null returns 'object'
    }
    else {
        const obj1keys = Object.keys(obj1);
        const obj2keys = Object.keys(obj2);

        if (obj1keys.length !== obj2keys.length){
            return false;
        }
        else {
            for (const key in obj1){
                if (!obj2.includes(key)){
                    return false;
                }
                else if (obj1[key] !== obj2[key]){
                    return false;
                }
            }
        }
    }
    return true;
}

//5 moveZeros()
console.log();
function moveZeros(myArray){
    let newArray = [];
    let zeroCount = 0;
    for (let num of myArray){
        if (num !== 0){
            newArray.push(num);
        } else {
            zeroCount++;
        }
    }
    for (let i=0; i< zeroCount; i++){
        newArray.push(0);
    }
    return newArray;
}

let oldArray = [3, 5, 0, 7, 1, 0, 5];
let movedZerosArray = moveZeros(oldArray);
console.log(movedZerosArray);









