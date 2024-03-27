//1. Union type 
const result: String | null = "succsess"
const result1:String |number | boolean | {status: String, code: number} = true ;
//2. type alias 
type Result = String |number | boolean | {status: String, code: number};
const result3:Result = 200;
//3. Intersecion tyoe
type numberString = Result & {data:{}}
const result4:numberString = {
    status:"ok",
    code:2,
    data:{}
}

//type 
type car = {
    brand:String,
    name:String,
    year:number,
    engine:String,
    move():{coordinatorX:number, coordinateY:number}
}

interface Icar  {
    brand:String,
    name:String,
    year:number,
    engine:String,
}
interface Icar  {
    move():{coordinatorX:number, coordinateY:number}
}