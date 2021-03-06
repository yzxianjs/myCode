//1 - var不不支持封闭作用域

var a = 100;
{
  let b = 99;
  console.log(a);
}
// let和{}配合可以声明产生一个作用域
//let支持块级作用域,块级作用域声明的变量只会在当前的作用域有效
for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log("i = ", i);
  }, 500);
}
//let解决全局的作用域污染
//2 - let不可以重复声明
let b = 100;
// let b = 200;//SyntaxError: Identifier 'b' has already been declared
console.log(b);

//3 - let域解释 不可以变量提升
// console.log(d);//d is not defined
let ds = 100;

//4 - 暂存死区
{
  // console.log(a);//不会去外面查找a变量,只会在当前查找变量a
  let a = 100;
  console.log(a);
}

// 5 -  const声明的常量不可以被修改(修改引用的空间)
const users = "魔鬼";
// const users = "神仙";
console.log(user);//xianjs
