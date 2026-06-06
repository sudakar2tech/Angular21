let arr = [1, 2, 2, 3, 4, 3, 5, 4, 6, 5];

const removeDups = (arr: number[]): number[] => {
    return [...new Set(arr)];
}
console.log(removeDups(arr));

let arr1 = [1, 2, 2, 3, 4, 3, 5, 4, 6, 5];

const removeDups1 = (arr1: number[]) : number[] => {
    let unique: number[] = [];
    arr1.forEach(element => {
        if (!unique.includes(element)) {
            unique.push(element);
        }
    });
    return unique;
}
console.log(removeDups1(arr1));
 
