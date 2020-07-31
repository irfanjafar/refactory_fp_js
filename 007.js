var str = `Aku ingin begini
Aku ingin begitu
Ingin ini itu banyak sekali

Semua semua semua
Dapat dikabulkan
Dapat dikabulkan
Dengan kantong ajaib

Aku ingin terbang bebas
Di angkasa
Hei… baling baling bambu

La... la... la...
Aku sayang sekali
Doraemon

La... la... la...
Aku sayang sekali`;

var aku = str.match(/aku/gi);
console.log(`aku = ${aku.length}`);

var ingin = str.match(/ingin/gi);
console.log(`ingin = ${ingin.length}`);

var dapat = str.match(/dapat/gi);
console.log(`dapat = ${dapat.length}`);