const Arr = []
// %DebugPrint(Arr)

// continuous , Holey

// SMI(small Integer)
// Packed Element
// Double (float, string, function)


const arr = [1, 2, 3, 4, 5]
// PACKED_SMI_ELEMENTS

arr.push(6.0)
// PACKED_DOUBLE_ELEMENTS

arr.push('a')
// PACKED_ELEMENTS

// once downgraded the array can't be revert back to more optimized version


arr[10] = 11
// HOLEY_ELEMENTS

console.log(arr)
console.log(arr.length)
console.log(arr[9])


// how array finds a value at any index

// bound check
// hasOwnProperty()
// hasOwnProperty(arr.hasOwnProperty,9)
// hasOwnProperty(Objct.arr.hasOwnProperty,9)

// hasOwnProperty --> one of the most expensive check in js

// holes are very expensive



// SMI > DOUBLE > PACKED
// H_SMI > H_DOUBLE > H_PACKED

const arr2 = new Array(3)
// just 3 holes, HOLES_SMI_ELEMENTS
arr2[0] = 2
arr2[1] = 1
arr2[2] = 4
// once holey --> forever holey
