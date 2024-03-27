// Generics: Là một cách viết code, cho phép hàm, class, interface làm việc với nhiều kiểu dữ liệu động
// Có phép ràng buộc kiểu dữ liệu với nhau

// function identity<T>(name: T): T {
//     return name
// }

// identity("tuva")
// identity(30)
// identity({})

// const wd18333Map = function  (array: number[], callback?: (item: number) => number): number[] {
//     let newArray: number[] = []
//     for (let item of array) {
//         // console.log(item);
//         // type guard
//         if (callback) {
//             const newItem = callback(item)
//             // console.log(newItem);
//             newArray.push(newItem)
//         }
//     }

//     return newArray
// }

// console.log(wd18333Map([1,2,4], a => a + 1));


// ["A", "B", "C", "D"].map(item => item + "alphabet")



console.log(["Duy","vinh","hạnh","bắc","hòa"].sort());
console.log([4,12,50,30].sort((a, b) => a-b));

const wd18333Sort = function<T>(arr: T[], comparator: (a: T, b: T) => number): T[] {
    if (!Array.isArray(arr)) {
        throw new Error('Input must be an array');
    }

    if (typeof comparator !== 'function') {
        throw new Error('Comparator must be a function');
    }

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (comparator(arr[j], arr[j + 1]) > 0) {
                // Nếu comparator trả về giá trị dương, hoán đổi vị trí
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }

    return arr;
};

// Sử dụng hàm wd18333Sort với một mảng số nguyên và một hàm so sánh tùy chỉnh
const numbers: number[] = [3, 1, 5, 2, 4];
const customComparator = function(a: number, b: number): number {
    return a - b; // Sắp xếp tăng dần
};

console.log(wd18333Sort(["Duy","bắc","hòa","vinh","hạnh"], (a, b) => a.length-b.length )); // Kết quả: [1, 2, 3, 4, 5]
