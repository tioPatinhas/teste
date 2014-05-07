starCoord(cenX, cenY, rad, fill, points) {
    // cenX, cenY and rad must be provided!!

    // fill must be a number between 0 and 1
    fill = (!isNum(fill) || fill > 1 || fill < 0) ? .5 : fill;

    // points must be an integer greater than 2
    points = (isNum(points) || Math.round(points) > 3) ? 5 : Math.round(points);

    var coords = []; // array to be returned

    return coords;
}