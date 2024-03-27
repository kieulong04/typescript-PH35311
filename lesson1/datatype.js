// Datatype trong javascript
// Primitive type
// Number, string, boolean, null, undefined, symbol
// Non-primitive
// Object, Array, Function
// const user3: User = {
//     name: "PhucLQ",
//     age: 21,
//     gender: true
// }
// Array
// const array1: string[] = ["A", "B", "C", "D"]
// const array2: Array<number> = [1, 2, 3, 4, 5]
// Enum
// user3.role = 1 //ADMIN
var ROLES;
(function (ROLES) {
    ROLES[ROLES["USER"] = 10] = "USER";
    ROLES[ROLES["ADMIN"] = 11] = "ADMIN";
    ROLES[ROLES["SUPERADMIN"] = 12] = "SUPERADMIN";
    ROLES[ROLES["SALE"] = 13] = "SALE";
})(ROLES || (ROLES = {}));
var use = {
    name: "long",
    age: 21,
    gender: true,
    role: ROLES.SUPERADMIN
};
console.log(use);
