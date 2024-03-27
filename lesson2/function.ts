//fuction
//Arguments:defalt
//return:
// const sum:(a:number,b:number) =>number =(a,b)=>{
//     return a + b;
// } reduce ,mapp ...
const sum = (...a:number[]): number =>{
    return a.reduce((acc,value)=>acc + value);
} 

console.log(sum(10,20,30,100))