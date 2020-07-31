//lowercase
function lower(str) {
var word = str.toLowerCase();	
return word;
}
console.log(lower("MAKAN"))

//uppercase
function upper(str) {
var word = str.toUpperCase();	
return word;
}
console.log(upper("malam"))

//capitalize
function titleCase(str) {
   var splitStr = str.toLowerCase().split(' ');
   for (var i = 0; i < splitStr.length; i++) {
       // You do not need to check if i is larger than splitStr length, as your for does that for you
       // Assign it back to the array
       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
   }
   // Directly return the joined string
   return splitStr.join(' '); 
}
var res = titleCase("saya ingin makan");
console.log(res);

//reverse
function reverseString(str) {
    return str.split("").reverse().join("");
}
var res = reverseString("kasur");
console.log(res);

//string contain
function strcontains(string) {
var str = "Saya ingin makan sate";
var res = str.includes(string);	
return res;
}
console.log(strcontains("makan"))

console.log(strcontains("rujak"))

var array = ['sate', 'rujak'];
var string = array.toString();
console.log(strcontains(string));

//random string
function random(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}
console.log(random());
console.log(random(6));
console.log(random(32));

//slug
function string_to_slug (str) {
    str = str.replace(/^\s+|\s+$/g, ''); // trim
    str = str.toLowerCase();
  
    // remove accents, swap ñ for n, etc
    var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
    var to   = "aaaaeeeeiiiioooouuuunc------";
    for (var i=0, l=from.length ; i<l ; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
        .replace(/\s+/g, '-') // collapse whitespace and replace by -
        .replace(/-+/g, '-'); // collapse dashes

    return str;
}
const title = 'JavaScript, TypeScript & Dart - Bahasa mana yang akan populer di 2018?'
console.log(string_to_slug(title));

//count character
function countAllCharacters(str) {
  jumlah = str.length;
  return jumlah;
}
console.log(countAllCharacters('lorem ipsum'));

//count word
function countWords(str) {
         str = str.replace(/(^\s*)|(\s*$)/gi,"");
         str = str.replace(/[ ]{2,}/gi," ");
         str = str.replace(/\n /,"\n");
         return str.split(' ').length;
      } 
console.log(countWords('lorem ipsum'));
