
var multiplications = function(i,j,k){
    return i*j*k;
}

var additions = function(i,j,k){
    return i+j+k;
}

var divisions = function(i,j,k){
    return i/j*k;
}

exports.mul = multiplications;
exports.add = additions;
exports.divide = divisions;

