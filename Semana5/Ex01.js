const num = [4, 6, 7, 8, 9, 10, 2, 4, 5, 6, 3, 9];
const impares = [];

num.forEach(element => {
    if(element % 2 != 0){
        impares.push(element * 2);
    }
});

impares.forEach((ele) => {
    console.log(ele);
});