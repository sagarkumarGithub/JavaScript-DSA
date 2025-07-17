// Union of two unsorted arrays in JS

function union(arr1, arr2) {
    let s = new Set(arr1);

    for (let i = 0; i < arr2.length; i++) {
        s.add(arr2[i]);
    }

    return Array.from(s);
}

let arr1 = [1, 2, 2, 3, 4, 4];
let arr2 = [2, 3, 5, 6];

let result = union(arr1, arr2);
console.log(result);
