"use strict";

function cs142MakeMultiFilter(originalArray) {
    let currentArray = [...originalArray]
    function arrayFilter (filterCriteria, callback) {
        if(typeof filterCriteria !== 'function') {
            return currentArray
        }
        
        for (let i = 0; i < currentArray.length; i++) {
            if (!filterCriteria(currentArray[i])) {
                currentArray.splice(i, 1);
            }
        }

        if (typeof callback === 'function') {
            callback.call(originalArray, currentArray)
        }

        return arrayFilter
    }
    return arrayFilter
}