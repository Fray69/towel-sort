module.exports = function towelSort (matrix) {
 if ((typeof matrix) == 'undefined') { return [];} 
    else if (matrix.length == 0) { return [];}
    else {
        return matrix.reduce(function(item_0, item_1, pozic) {
            if (pozic % 2 == 0) {
                return item_0.concat(item_1);}
              else {
                return item_0.concat(item_1.reverse());}
        }, []); 
    }
}
