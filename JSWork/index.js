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

// console.log("hello")
// let parent=document.getElementsByClassName("parent");
// console.log(parent);
// parent[0].innerText="Data has changed";

 console.log("hello")
 let parent=document.getElementsByClassName("parent");
  console.log(parent);
  parent[0].innerHTML="<h2>Data has changed</h2>";
