function double(array) {
    return array.map(x => x * 2);
}
//kata 1
function filter_list(list) {
    return list.filter(x => typeof x !== 'string');
}
//kata 2
function find_average(array) {
    let total = array.reduce((x, y) => {
        return x + y;
    })

    return total / array.length;
}
//kata3