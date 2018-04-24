function divisors(integer) {
    var arr = [];
    for (var i = 2; i < integer; i++) { if (integer % i === 0) arr.push(i); }
    return (arr.length === 0) ? integer + ' is prime' : arr;
};