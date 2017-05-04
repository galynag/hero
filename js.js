// var a= {};
// a['name']='Alex';
// console.log(a['name']);
// console.log(a.name);
//
// var b={
//   'name':'Nata',
//   'sex' : 'female',
//   'dogName' : 'Monica',
//   'year' : 1930
// };
//
// b.mas = [3,5,8,7,1,5,7];
// b.assoc = {'height':180, 'massa':67};
//
// for (var k in b) {
//   document.getElementsByTagName('body')[0].innerHTML += k+' '+'</br>';
// }
//
// b.func= function() {
//   alert(2017-this.year);
// }
// b.func();
// // вызов функции...нашего свойства масива
//
// console.log(b);
// console.log(b.mas[5]);
//
// var m = {
//   'moneyUa':19000,
//   'kursRUB':0.46,
//   'kursDOL':26.95,
//   'konvertUaRub': function() {
//     alert(this.moneyUa/this.kursRUB)
//   },
//   'konvertUaDol': function() {
//     alert(this.moneyUa/this.kursDOL)
//   }
// }
// m.konvertUaRub();
// m.konvertUaDol();

hero = {
  'name':'zavtraMan',
  'xp' : 10,
  'img' : 'http://php.spb.ru/ms/zavtramen.jpg',
  'damage' : [2,3,7],
  'hit': function (a) {
    if (a==1) return 0;
    if (a==2 || a==3) return this.damage[0];
    if (a==4 || a==5) return this.damage[1];
    if (a==6) return this.damage[2];
  }
}

hero2 = {
  'name':'MiMiMi',
  'xp' : 20,
  'img' : 'http://posmotre.li/images/thumb/f/f5/Hello_kitty_superhero.jpg/240px-Hello_kitty_superhero.jpg',
  'damage' : [1,5,9],
  'hit': function (a) {
    if (a==1) return 0;
    if (a==2 || a==3) return this.damage[0];
    if (a==4 || a==5) return this.damage[1];
    if (a==6) return this.damage[2];
  }
}

function kubik() {
  var rand = 0.5 + Math.random() * 6
    rand = Math.round(rand);
    return rand;
}


init()  // начальный вывод

function init() {
  document.querySelector('.hero h2').innerHTML=hero.name;
  document.querySelector('.hero .xp').innerHTML=hero.xp;
  document.querySelector('.hero img').src=hero.img;
}
init2()
function init2() {
  document.querySelector('.hero2 h2').innerHTML=hero2.name;
  document.querySelector('.hero2 .xp').innerHTML=hero2.xp;
  document.querySelector('.hero2 img').src=hero2.img;
}
console.log(hero.hit(5));


// var xpHero1=document.querySelector('.hero .xp').value;
// var xpHero2=document.querySelector('.hero2 .xp').value;
var h1=document.querySelector('#h1udar');
var h2=document.querySelector('#h2udar');

h1.onclick = hit1;
function hit1() {
  var kub=kubik();
  console.log(kub);
  hero2.xp=hero2.xp-hero.hit(kub);
  if (hero2.xp<0 || hero2.xp==0) {
      alert('Победил Герой1');
      location.reload();
  } else {
  document.querySelector('.hero2 .xp').innerHTML=hero2.xp;
  h1.onclick=null;
  h1.style.opacity=0.3;
  h2.onclick=hit2;}
  h2.style.opacity=1;
}

h2.onclick = hit2;
function hit2() {
  var kub=kubik();
  console.log(kub);
  hero.xp=hero.xp-hero2.hit(kub);
  if (hero.xp<0 || hero.xp==0) {
      alert('Победил Герой2');
      location.reload();
  } else {
  document.querySelector('.hero .xp').innerHTML=hero.xp;
  h2.onclick=null;
  h2.style.opacity=0.3;
  h1.onclick=hit1;
  h1.style.opacity=1;
}
}
