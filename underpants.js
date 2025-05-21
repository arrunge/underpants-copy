// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/
//use dot notation to add key = indentity 
_.identity = function(value){
    //return value unchanged
    return value;
};

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/
//I: any value
//O: return string - of the type of input value
_.typeOf = function(value){
    //determine if object - to clarify before using typeof
    //check for array
    if (Array.isArray(value)){
        return "array";
    } else if (value === null){
        //check for null
        return "null";
    } else if (value instanceof Date){
        //check for date
        return "date";
    } else {
        //return object and any other type
        return typeof(value);
    }
};

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/
//I: function takes in an array and number parameters
//O: return the array items upto num ---> _.first(["a", "b", "c"], 2) -> ["a", "b"]
//C: if array is not array - return []; if no num or not number return first element of array
//E: if num is greater than array.length - return array

_.first = function(array, number){
    //outputARray
    let outputArray = [];
    //check if array was given
    if(!array || (Array.isArray(array) === false)){
        //return []
        outputArray = [];
    }
    //check if number was given or if it was not a number - if not return first element of array
    else if(!number || (typeof number !== 'number')){
        outputArray = array[0];
    }
    //if number larger than array.length - return whole array
    else if(number > array.length){
        outputArray = array;
    } else {
    //iterate through array to return items up to number
    for(let index = 0; index < number; index++){
        outputArray.push(array[index]);
    }
    }
    //return outputArray
    return outputArray;
};

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/
//I: function takes in an array and number parameters
//O: return the array items upto num going backward in array ---> _.last(["a", "b", "c"], 2) -> ["b", "c"]
//C: if array is not array - return []; if no num or not number return first element of array
//E: if num is greater than array.length - return array
_.last = function(array, number){
     //outputARray
     let outputArray = [];
     //check if array was given
     if(!array || (Array.isArray(array) === false)){
         //return []
         outputArray = [];
     }
     //check if number was given or if it was not a number - if not return last element of array
     else if(!number || (typeof number !== 'number')){
         outputArray = array[array.length - 1];
     }
     //if number larger than array.length - return whole array
     else if(number > array.length){
         outputArray = array;
     } else {
     //iterate through array backward to return items up to number
     //start at end of array - count down (subtract 1 extra for zero index)
     for(let index = array.length - 1; index > (array.length - (number + 1)); index--){
        //add to outputArray - in reverse order 
        outputArray.unshift(array[index]);
     }
     }
     //return outputArray
     return outputArray;
};

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/
//I: function takes in an array and value parameters
//O: return the index og first occurance of instance of value ---> _.indexOf(["a","b","c"], "c") -> 2; -1 if not in array
//C: dont use .index()
//E: stop after first oocurance
_.indexOf = function (array, value){
    //determine if array - if true - checks array for value
    if(Array.isArray(array)){
    //iterate through array to find value
    for(let index = 0; index < array.length; index++){
        if(array[index] === value){
            return index;
        } 
    }
} 
    //returns -1 if array is not an array or not in array
    return -1;

};

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/
//I: function takes in an array and value parameters
//O: return true if array contains value; otherwise false ---> contains([1,"two", 3.14], "two") -> true
//C: must use ternary opeartor
//E:
_.contains = function (array, value){
    //counter to determine if value is in array
    let counterArray = [];
    //iterate through array
    for(let index = 0; index < array.length; index++){
        //check if value is in array index - add to counter if match
        if(array[index] === value){
            counterArray.push(array[index]);
        }
    }
    //ternary operator - for return
    return (counterArray.length === 0) ? false : true;
    
};

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/
//I: function takes in an collection and function
//O: return func if collection is array - call function for each element - func(element, index, collection) and each value if object
//O: - object return - the property's value, it's key, <collection>
//E:
_.each = function (collection, func){
    //check if collection is array or object
    //is array path
    //outputArray
    
    if (Array.isArray(collection)){
        //iterate through array
        let outputArray = [];
        for (let index = 0; index < collection.length; index++){
            outputArray = func(collection[index], index, collection);
        }
        return outputArray;

    } else {
        let outputObject = {};
        //is object path
        //iterate through collection - object
        for (let key in collection){
            outputObject[key] = func(collection[key], key, collection);
        }
        return outputObject;
    }
};

/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/
//I: function takes in an array
//O: returns new array with all elements from <array> with dups removed
//C:use _.index() function created above
//E:
_.unique = function (array){
    //outputArray
    let outputArray = [];
    let indexArray = [];
    //iterate through input array
    for(let index = 0; index < array.length; index++){
        //matches array to track duplicates - this value is reset for each array[index]
        let matchesArray = [];
        //iterate through outputArray to determine if a match exist
        for (let j = 0; j < outputArray.length; j++){
            //checks if value from array is in outputArray(iterating through the outputArray)
            if(array[index] === outputArray[j]){
                //if it value matches - adds 1 to matches - matches is used to determine if array[index] should be added as unique value
                matchesArray.push(1);
            }
        }
        //if the array[index] doesnt match - matches will be length of zero - add value to outputArray
        if (matchesArray.length === 0){
            //use indexOf function to determine index of value from array
            indexArray = _.indexOf(array, array[index]);
            //add the array[index] to the outputArray - unique value
            outputArray.push(array[indexArray]);
        }
    
    }
    return outputArray;
};

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/
//I: array and function
//O: returns new array of elements for which calling input function is true
//E: what if function doesnt return true or false?
_.filter = function(array, func){
    //create output array
    let outputArray = [];
    //iterate over input array 
    for(let index = 0; index < array.length; index++){
        //determine if each element passed into input func returns as true
        if(func(array[index], index, array)){
            //using truthy - in case call back function does not return -true or false
            //push item into outputArray if true
            outputArray.push(array[index]);
        }
    }    
    //return outputArray
    return outputArray;

};

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/
//I: array and function
//O: returns new array of elements for which calling input function is false
//E: 
_.reject = function (array, func){
    //outputArray 
    let outputArray = [];
    //iterate over input array
    for (let index = 0; index < array.length; index++){
       //determine if each element passed into input func returns as false or falsey
       if(!func(array[index], index, array)) {
        //add to outputArray if false
        outputArray.push(array[index]);
       }
    }
    //return outputArray - false values
    return outputArray;
};

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
//I: array and function
//O: returns one array made up of 2 arrays of elements for which calling input function is 
// truthy[zero index] and one for values that return falsy[index 1]
//E: 
_.partition = function(array, func){
    //output array
    let outputArray = [[], []];
    //iterate over input array
    for (let index = 0; index < array.length; index++){
        //determine if each element passed into input func returns as false or falsey
        if(func(array[index], index, array)) {
         //add to outputArray if truthy
         outputArray[0].push(array[index]);
        } else {
            //if falsy - adds to outputArray[1[]
            outputArray[1].push(array[index]);
        }
}
    //return outputArray
    return outputArray;
}
/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/
//I: inputs a collection (array or object) and callback function
//O: return new array containing results of invoking the callback on each item in collection
//E: needs to work for array or object 

_.map = function(collection, func){
    //create outputArray
    let outputArray = [];
    //determine if collection is an array
    if(Array.isArray(collection)){
        //use loop to access each item
        for(let index = 0; index < collection.length; index++){
            //invoke callback function on collection index and push to outputArray
            outputArray.push(func(collection[index], index, collection));  
        }
    } else{//else it's an object
        //use for in loop to iterate through object
        for(let key in collection){
            //invoke callback function on object and push to outputArray
                outputArray.push(func(collection[key], key, collection));
            };
        }
    //return outputArray
    return outputArray;
    
}
/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/
//I: inputs array of object and property
//O: return array of values for given property
//C:use _.map()
//E:
_.pluck = function (array, property){
    //use _.map 
       return( _.map(array, function(object){
            return object[property];
          }));
}

/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/
//I: collection and function
//O: return true if all elements passed in function are true - otherwise return false
//O: if func not provided - return true if all values are truthy in  collection

_.every = function (collection, func){
    //determine if collection is array
    if(Array.isArray(collection)){
        //determine if callback func is provided
        if (!func){
            //iterate through array to determine if value is truthy
            for (let index = 0; index < collection.length; index++){
                //if falsy - return false
                if (!collection[index]){
                    return false;
                }
            }
            //all values are truthy
            return true;
        } else {
            //else if callback is provided
            //iterate through array to determine func value is truthy
            for (let index = 0; index < collection.length; index++){
                if (!func(collection[index], index, collection)){
                    //a value is false - return false
                    return false;
                }
            }
            //all values are truthy
            return true;
        }   
    
    } else {
        //else collection is an object
        //determine if callback func not provided
        if(!func){
            //iterate through collection
            for(let key in collection){
                //if falsy
                if (!collection[key]){
                    return false;
                } 
            }
            //all values are truthy
            return true;
            //if callback is provided
        } else{
            for(let key in collection){
                //if one value is falsy - return false
                if(!(func(collection[key], key, collection))){
                    return false;
                }
            }
            //all values are truthy
            return true;
        }

    }
}

/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/
//I: collection and function
//O: return true if one value is true - otherwise return false
//O: if func not provided - return true if one value are truthy in  collection

_.some = function (collection, func){
    //determine if collection is array
    if(Array.isArray(collection)){
        //determine if callback func is provided
        if (!func){
            //iterate through array to determine if value is truthy/falsy
            for (let index = 0; index < collection.length; index++){
                //if truthy - return true
                if (collection[index]){
                    return true;
                }
            }
            //all values are falsey
            return false;
        } else {
            //else if callback is provided
            //iterate through array to determine func value is truthy
            for (let index = 0; index < collection.length; index++){
                if (func(collection[index], index, collection)){
                    //one value is true -return true
                    return true;
                }
            }
            //all values are falsy
            return false;
        }   
    
    } else {
        //else collection is an object
        //determine if callback func not provided
        if(!func){
            //iterate through collection
            for(let key in collection){
                //if one is truthy
                if (collection[key]){
                    return true;
                } 
            }
            //all values are falsy
            return false;
            //if callback is provided
        } else{
            for(let key in collection){
                //if one value is true - return true
                if(func(collection[key], key, collection)){
                    return true;
                }
            }
            //all values are false
            return false;
        }

    }
}
/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/
//I: array, function, and seed
//O: call function on each element in array and return final value of call func

_.reduce = function (array, func, seed){
    //output vars for seed and no seed given
    let outputNoSeed = array[0];
    //var for seed given    
    let outputValue = seed;
    //determine no seed given - array[0] becomes seed value
    if(seed === undefined){
        //iterate through array - start at index at 1 array[0] takes place of seed
        for (let index = 1; index < array.length; index ++){
            //call func and store in outputNoSeed
            outputNoSeed = func(outputNoSeed, array[index], index);
        }
        return outputNoSeed;
    } //seed is given 
    else{
        //iterate through array
        for (let index = 0; index < array.length; index++){
            //call func and store to outputValue
            outputValue = func(outputValue, array[index], index);
        }
        return outputValue;
    }

};

/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/
//I: input target(object) and any number of object
//O: return updated target object- all properties from input object copied into target
_.extend = function (target, ...object){
    return Object.assign(target, ...object);
}


//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}