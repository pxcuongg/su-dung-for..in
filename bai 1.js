function run(object) {
    let arr = [];
    let i = 0;
    for (let key in object) {
        arr[i] = `Thuộc tính ${key} có giá trị ${object[key]}`;
        i++;
    }
    return arr;

}
