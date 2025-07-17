let arr1 = [1, 2, 3, 4];
let arr2 = [2, 2, 3, 5];

function Intersection(arr1, arr2) {
    let map = {};
    let result = [];

    for (let i = 0; i < arr2.length; i++) {
        map[arr2[i]] = 1;
    }

    for (let i = 0; i < arr1.length; i++) {
        if (map[arr1[i]] === 1) {
            result.push(arr1[i]);   
        }
    }

    return result;
}

let result = Intersection(arr1, arr2);
console.log(result);
