function flattenArray(arr) {
    let i = 0;
    while (i < arr.length) {
            if(Array.isArray(arr[i])) {
                let val = arr[i];
                arr.splice(i, 1);
                for(let n = 0; n < val.length; n++) {
                    arr.splice(i, 0, val[n]);
                    i++;
                }
            } else {
                i++;
            }
    }
    return arr;
}
let test = [1, 2, [3, 4], 5, 6, [7, 8, 9], [10, 11, 12], [13, 24, 15, 16], 17];
console.log(test);
console.log(flattenArray(test));