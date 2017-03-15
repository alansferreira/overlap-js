function isOverlapRect(rect, obstacle) {
    // overlapping indicators, indicate which part of the reference object (Rectangle1) overlap one obstacle.
    var ret = {
        isOverlapRight: (rect.x + rect.w >= obstacle.x && rect.x <= obstacle.x),
        isOverlapLeft: (rect.x <= obstacle.x + obstacle.w && rect.x >= obstacle.x),
        isOverlapBottom: (rect.y + rect.h > obstacle.y && rect.y <= obstacle.y),
        isOverlapTop: (rect.y <= obstacle.y + obstacle.h && rect.y >= obstacle.y)
    }; 
    ret.isOverlaped = (ret.isOverlapLeft || ret.isOverlapRight || ret.isOverlapTop || ret.isOverlapBottom);

    
    var x = Math.max(rect.x, obstacle.x);
    var num1 = Math.min(rect.r, obstacle.r);
    var y = Math.max(rect.y, obstacle.y);
    var num2 = Math.min(rect.b, obstacle.b);

    ret.overlapedArea = null;
    if (num1 >= x && num2 >= y)
        ret.overlapedArea = {x:x, y:y, w:num1 - x, h:num2 - y};

    return ret;
    //( 
    //    (rect.x <= obstacle.x + obstacle.w && rect.x + rect.w >= obstacle.x) &&
    //    (rect.y <= obstacle.y + obstacle.h && rect.y + rect.h >= obstacle.y)
    //)
};
function isOverlapXRect(rect, obstacle) {
    // overlapping indicators, indicate which part of the reference object (Rectangle1) overlap one obstacle.
    var ret = {
        isOverlapRight: (rect.x + rect.w >= obstacle.x && rect.x <= obstacle.x),
        isOverlapLeft: (rect.x <= obstacle.x + obstacle.w && rect.x >= obstacle.x)
    }; 
    ret.isOverlaped = (ret.isOverlapLeft || ret.isOverlapRight);
    return ret;
};
function isOverlapYRect(rect, obstacle) {
    var ret = {
        isOverlapBottom: (rect.y + rect.h >= obstacle.y && rect.y <= obstacle.y),
        isOverlapTop: (rect.y <= obstacle.y + obstacle.h && rect.y >= obstacle.y)
    }; 
    ret.isOverlaped = (ret.isOverlapTop || ret.isOverlapBottom);
    return ret;
};

/**
 * 
 * @param {{x: Number, y: Number, w: Number, h: Number}} rect the object reference with rect properties 
 * @param {[{x: Number, y: Number, w: Number, h: Number}]} rect_obstacles the array objects with rect properties 
 * @returns {[{obstacle: Object, overlap: {Object}}]}
 */  
function getOverlaps(rect, rect_obstacles) {
    try {
        var overlaps = [];

        for (var o = 0; o < rect_obstacles.length; o++) {
            var obstacle = rect_obstacles[o];

            var overlap = isOverlapRect(rect, obstacle);
            if (overlap.isOverlaped) {
                overlaps.push({
                    obstacle: obstacle, 
                    overlap: overlap
                });
            }
        }

        return overlaps;

    } catch (e) {
        console.log(e);
    }
};
