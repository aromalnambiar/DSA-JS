// problem 1

const boxes = [1, 2, 3, 4, 5];

function forEachArray(array) {

    array.forEach((row) => {
            console.log(row);
    })

    array.forEach((row1) => {
        array.forEach((row2) => {
            console.log(row1, row2);
        })
    })

}

forEachArray(boxes);



// Big O of this problem O(n * n^2) => n * n = 2n^2 there for it would be O(2n^2)