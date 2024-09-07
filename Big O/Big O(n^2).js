// problem 1

const boxes = [1, 2, 3, 4, 5];

function forEachArray(array) {
    const mapping =  array.forEach((row1) => {
        array.forEach((row2) => {
            console.log(row1, row2);
        })
    })

    return mapping;
}


// problem 2

const alphas = ['a', 'b', 'c', 'd', 'e'];

function forArray(array) {
   for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
        console.log(array[i], array[j]);
    }
   }
}

forEachArray(boxes);

forArray(alphas);



// Big O of this problem O(n * n) => n * n =  n^2 there for it would be O(n^2)