// 1)--створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// const mass = [[5,15,7,90,44,'Irina','Stepan','Petro','Valya','Igor',5,false,'Tanya',77,true]]
// console.log(mass)

// -- 2)Створити пустий масив. Наповнити його будь-якими значеннями звертаючись
//  до конкретного індексу. Вивести в консоль

// const mass1 = []
// mass1[0]=1
// mass1[1]=true
// mass1[2]='Vasiliy'
// mass1[3]=567
// mass1[4]='eror'

// console.log(mass1)

// 3) За допомогою циклу for і document.write() вивести 10 блоків div c 
// довільним текстом всередині

// for (let i=0;i<10;i++){
    
//     document.write('<div>hello</div>')
// }

// 4) За допомогою циклу for і document.write() вивести 10 блоків div c
//  довільним текстом і індексом всередині

// for (let i=0;i<10;i++){    
//          document.write([i]+'<div>hello</div>')
//     }

// -5) За допомогою циклу while вивести в документ 20 блоків
//  h1 c довільним текстом всередині

// let i=0

// while (i<10){
//     document.write('<h1>hello</h1>')
//     i++
// }

// -6) За допомогою циклу while вивести в документ 20 блоків h1 c 
// довільним текстом і індексом всередині.

// let i=0

//  while (i<10){
//  document.write([i],'<h1>hello</h1>')
//  i++
//  }

// 7)- Створити масив з 10 числових елементів. Вивести в консоль всі 
// його елементи в циклі.

// let mass2= [3,66,987,-432,44,1,567,1111,87,44]

// for (let i=0;i<mass2.length;i++){
//     console.log(mass2[i])
// }

// - 8)Створити масив з 10 строкрових елементів. Вивести
//  в консоль всі його елементи в циклі.

// let mass3= ['Ira','hello','how','are','you','how','old','are','you','bye']

// for (let i=0;i<mass3.length;i++){
//     console.log(mass3[i])
//  }

// - 9) Створити масив з 10 елементів будь-якого типу. Вивести в консоль
//  всі його елементи в циклі.


// let mass4= ['Ira',5,'false',328,true,'you','Tanya',32,'you',true]

// for (let i=0;i<mass4.length;i++){
//     console.log(mass4[i])
//  }

// 10) Створити масив з 10 елементів числового, стірчкового і булевого типу.
//  За допомогою if та typeof вивести тільки булеві елементи

// let mass5= ['Ira',5,false,328,true,'you','Tanya',32,'you',true]

// for (let i=0;i<mass5.length;i++){
//    if (typeof mass5[i]=== 'boolean'){
//          console.log(mass5[i])}
//          else{
//          }
//         }

// 11) Створити масив з 10 елементів числового, стірчкового і булевого типу.
//  За допомогою if та typeof вивести тільки числові елементи

// let mass6= ['Ira',5,false,328,true,'you','Tanya',32,'you',true]

// for (let i=0;i<mass6.length;i++){
//        if (typeof mass6[i]=== 'number'){
//              console.log(mass6[i])}
//              else{
//              }
//             }

// 12) Створити масив з 10 елементів числового, стрічкового і булевого типу. 
// За допомогою if та typeof вивести тільки рядкові елементи

// let mass7= ['Ira',5,false,328,true,'you','Tanya',32,'you',true]

// for (let i=0;i<mass7.length;i++){
//            if (typeof mass7[i]=== 'string'){
//                  console.log(mass7[i])}
//                  else{
//                  }
//                 }

// 13) Створити порожній масив. Наповнити його 10 елементами 
// (різними за типами) через звернення до конкретних індексів.
//  Вивести в консоль всі його елементи в циклі

//  const mass8 = []
//  mass8[0]=1
//  mass8[1]=true
//  mass8[2]='Vasiliy'
//  mass8[3]=567
//  mass8[4]='eror'

//  for (let i=0;i<mass8.length;i++){
//      console.log(mass8[i])}

// 14) Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний
//  номер кроку через console.log та document.write

// let mass7= ['Ira',5,false,328,true,'you','Tanya',32,'you',true]
// for (let i=0;i<mass7.length;i=i+1){
// console.log(i)
// document.write(i)}

// 15) Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний 
// номер кроку через console.log та document.write

// for (let i=0;i<100;i=i+1){
//      console.log(i)
//     document.write(i)}

// 16) Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний 
// номер кроку через console.log та document.write

// for (let i=0;i<100;i=i+2){
       
//         document.write(i)
//         console.log(i)}

// 17) Створити цикл for на 100 ітерацій. Вивести тільки парні кроки.
//  через console.log + document.write

// for (let i=0;i<100;i++){
//     if (i%2==0){     

//         document.write(i)
//         console.log(i)}}
     
// 18) Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. 
// через console.log + document.write

// for (let i=0;i<100;i++){
//         if (i%2==1){     
    
//             document.write(i)
//             console.log(i)}}

// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
// let watch = 59
// let sec =0
// let min =0

// for (let i=0;i<watch;i++){
//     console.log('min',min++)
//     for (let i=0;i<watch;i++){
//         console.log('sec',sec++)
// }
// sec=0
// }


// - Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати 
// всі букви в слово.
// let abc = [ 'a', 'b', 'c']
// let str =''
// for (let i=0;i<abc.length;i++){
//     str=str+abc[i]
// }
// console.log(str)

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

// let abc = [ 'a', 'b', 'c']
// let i=0
// let str =''
// while(i<abc.length){
//     str=str+abc[i]
//     i++
// }
// console.log(str)

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

// let abc = [ 'a', 'b', 'c']
// let str =''
// for(const string of abc){
//     str=str+string 
// }
// console.log(str)

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for in зібрати всі букви в слово.

// let abc = [ 'a', 'b', 'c']
// let str =''
// for(const string in abc){
//     str=str+abc[string]
// }
// console.log(str)

// join
// let abc = [ 'a', 'b', 'c']
// console.log(abc.join('')) 