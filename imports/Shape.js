class Shape {
   
    getSquareArea(w, h) {
      return w * h
    }

    getCircleArea(r) {
      return 3.142 * (r * r)
    }
    
}

module.exports = Shape;