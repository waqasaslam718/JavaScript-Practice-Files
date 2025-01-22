let str="Waqas";
console.log(str);
console.log(str.length);
console.log(str.charAt(4));
console.log(str.charCodeAt(4));
console.log(str.concat(" Aslam"));  
console.log(str.slice(1,3));
console.log(str.includes("a"));
console.log(str.replace("a","b"));
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.indexOf("a"));
console.log(str.lastIndexOf("s"));
let str1="Awais";
let str2="Aslam";
 console.log(str1.localeCompare(str2));
 const  str3="Waqas is a QA . Waqas";
 console.log(str3.replaceAll("Waqas","Awais"));
 console.log(str3.repeat(2));
 console.log(str3.substring(6 ,12));
 console.log(str3.slice(-29));
 let subString = str3.split(" ");
 console.log(subString); // QA
 console.log(subString.join(" ")); //