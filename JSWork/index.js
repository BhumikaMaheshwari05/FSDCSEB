// console.log("Welcome to JS");
// const a=12;
// console.log(a);
// if(a>10)
// {
//     let b=23;
//     a=40;
//     console.log("a inside condition:"+a);
// }
// console.log("b outside condition:"+b);

//  let a=12;
// let b="12";
// // console.log(typeof a);
// // let today=Date();
// // console.log(today);
// if(a===b)
// {
//     console.log("welcome");
// }
// else{
//     console.log("hello");
// }

// let myname="bhumika";
// let college="ABES EC";
// let result=`Hi,my name is ${myname}`
// console.log(result)

// // let key="sname";
// const Student=[{
//    sname:"Amit",
//    course:"Btech",
//    college:"ABES EC"

// },
// {
//     sname:"Ram",
//     course:"Mtech",
//     college:"ABES EC"
// }
// ]
// // console.log("Name:"+Student.sname+" course:"+Student.course)
// // const {sname}=Student;
// // console.log(sname);
// // Student[key]="Rahul";
// // console.log(Student);
// console.log(Student[1].college,Student[1].sname);

//function
// function greeting(msg="Welcome"){
//     console.log("Good Morning "+msg);
// }
// greeting("Greetings");

// function sum(a,b)
// {
//     return a+b;
// }
// let data=sum(12,13);
// console.log(data);

// function cCompiler(){
//     return "CCompiler Selected";
// }
// function javaCompiler(){
//     return "javaCompiler Selected";
// }
// function selectLanguage(clbk){
//     console.log("you have :"+clbk());
// }


// selectLanguage(javaCompiler);
// function selectLanguage(language){
//     let data;
//     if(language=="c"){
//         function cCompiler(){
//             return "CCompiler Selected";
//         }
//         data=cCompiler();
//     }
    
//     if(language=="java"){
//         function javaCompiler(){
//             return "javaCompiler Selected";
//         }
//         data=javaCompiler();
//     }
//     return data;
// }
// let data=selectLanguage("c");
// console.log(data);

//  console.log("hello")
// let parent=document.getElementsByClassName("parent");
// console.log(parent);
// parent[0].innerText="Data has changed";

//  console.log("hello")
//  let parent=document.getElementsByClassName("parent");
//  console.log(parent);
// //  parent[0].innerHTML="<h2 style=color:Red>Data has changed</h2>";
// const h1=document.createElement("h1");
// console.log(h1);
// h1.innerText="ABES Engineering College";
// console.log(h1);
// h1.style.backgroundColor="cyan"
// h1.style.color="red";
// h1.style.padding="20px";
// h1.style.margin="10px"
// parent[0].appendChild(h1);

// const img=document.createElement("img");
// img.src="./flower.webp";
// console.log(img);
// parent[0].appendChild(img);
// img.setAttribute("height","300");
// img.setAttribute("width","300")
// parent[0].appendChild(img);
// parent[0].removeChild(img)

// function getData(){
//     console.log("Hi,inside getdata function");
//     parent[0].innerHTML="<h2 style=color:red>Hello,EventHandled</h2>";
// }

// const button=document.getElementsByClassName("btn");
// console.log(button);
// button[0].addEventListener("click",getData);

// const promise=new Promise((resolve,reject)=>
// {
//           let a=12;
//           if(a>10){
//             resolve("Accepted");
//           }
//           else{
//             reject("Not Accepted");
//           }
// })

// promise.then((msg)=>
// {
//     console.log(msg);
// })
// .catch((error)=>
//     {console.log(error);

//  })
// .finally(()=>console.log("ALL resourses have closed"));

// const promise2= new Promise((resolve,reject)=>
// {
//     resolve({name:"Bhumika",Stack:"Mern Stack"});
// })
// promise2.then((data)=>{
//     console.log("Hi,"+data.name);
// })
// .catch(x=>{
//     console.log(x);
// })

const response=fetch("https://dummyjson.com/products");
response.then((data)=>{
    console.log(data);
    data.json().then((res)=>
    {
        console.log(res);
    })
})