//_____FAT ARROWS_____
//notice that this is a sorts of shorthand, and it even gets shorter
//The function keyword is specifically 
hello = ()=>{
    console.log("Hello there");
}

hello();

dance = () => console.log("Am dancing");

dance();

//____CONST KEYWORD____
//NOTE that the PI variable cannot be reassigned a value.
//Also the const keyword works like the let keyword where now within a block its value is unique
//In an object case, the variable used cannot be reassigned though properties can be added and changed
//Also on declaration it is a must to initialize the variable immediately
const PI = 3.142
var x = 24;
{
    const x = 5;
    console.log(x)
}
console.log(x)

//____DESRUCTURING___
//Note that the participants are taken to exist as variables on the right and primitives on the right
let a, b;
[a, b, ...c] = ["this is a", "this is b", "mem_c", "mem_d", "meme_e"];
console.log(a);
console.log(b);
console.log(c);

//({g,h,i} = {"red","yello","green"})


