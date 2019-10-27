function firstFunction(){
    // .innerHTML use to change the script of line that have match id 
    document.getElementById("demo").innerHTML = "My First JavaScript";
   
}

function secondFunction(){
    document.write(22+5)
    console.log('Clicked')
}

function fullInfo(){
    var person = {
        name:"QuocAnh", 
        age:"20", 
        job:"Coder",
        fullInfo: function(){
            return "Name"+this.name + " Age"+this.age + " Job"+this.job;
        }
    };
    var info1 = "Name: " + person.name + 
                "\nAge: " + person.age +
                "\nJob: " + person.job
    var info2 = person.fullInfo
    document.getElementById("info").innerHTML = info1;
}
function thirdFunction(){erer
    /* Function type */
    var length = 16; //number
    var lastName = 'Truong' // String
    var info = {name: 'Quoc Anh', age:'18'} // Object

    /* Booleans*/
    var x = 5; 
    var y = 4; 
    (x > y)         //Returns true
    (x = y)         //Returns false

    /* Array*/
    var product = ["Coke", "7UP", "Fanta"];

    /* Object */
    var person = {
        name:"QuocAnh", 
        age:"20", 
        job:"Coder",
        fullInfo: function(){
            return "Name"+this.name + " Age"+this.age + " Job"+this.job;
        }
    };
    // to access object's properties
    person.name;
    // or   
    person['name'];

    /* typeof Operator --> return type of value*/
    typeof "QuocAnh"    //Returns String

    var person = null;
    typeof person       //Returns Object


}

/* 
    Writing into HTML element: 'innerHTML
    Writing into HTML output: 'document.write()'(should be use for testing)
    Writing into a alert box using: 'window.alert()'
    Writing into the browser console: 'console.log()' (always use for debugging)
*/

/*
    JS statement are composed of:
    VALUE, OPERATOR, EXPRESSION, KEYWORD, COMMENT

    List of keywords that should be remembered
        - debugger: STOP THE EXECUTION AND CALL THE DEBUGGING FUNCTION
        - function: DECLARE THE FUNCTION
        - var: DECLARE THE VARIABLE
*/ 


/**
 * String method 
 *  - str.length --> return length of string   
 *  - str.indexOf  --> return position of string in list
 *  - str.lastIndexOf() --> return the last position of string in list
 *  - str.search() 
 *  - str.replace()
 *  - str.toUpperCase() 
 *  - str.toLowerCase()
 *  - str.splice(index1, index2, ...): to remove element in list
 * 
 * Extracting String Parts
 *  -   slice (start, end)
 *  -   substring(start, end)
 *  -   substr (start, length)
 * 
 ****** If param is negative, the position count from the end
 */

 function tryTrim(){
     if(!String.prototype.trim){
         String.prototype.trim = function(){
             return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');

         };
     }
    //  var str = "            Hello World!!!!         ";
    //  alert(str.trim());
 }

/** 
 * valueOf() is used to convert Number object to primative value
 * 
 * CONVERT VARIABLE TO NUMBER:
 *  -   Number()
 *  -   parseInt()  
 *  -   parseFloat()
*/

var points = [40,100,1,5,25,10]
document.getElementById("sample9").innerHTML = points.sort(function(a, b){return b - a});