// problem 1

const boxes = [1, 2, 3, 4, 5];

function mapArray(array) {
    console.log("start");
    const mapping =  array.forEach((row1) => {
        array.forEach((row2) => {
            console.log(row1, row2);
        })
    })

    return mapping;
}

mapArray(boxes);