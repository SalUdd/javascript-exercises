const fibonacci = function(n) {
    n = +n;
    if (n === 0) return 0;
    if (n === 1) return 1;
    if (n < 0) return "OOPS";

    let prev = 0, current = 1, next;

    for (let i = 2; i <= n; i++) {
        next = prev + current;
        prev = current;
        current = next;
      }
    
      return current;
};

// Do not edit below this line
module.exports = fibonacci;
