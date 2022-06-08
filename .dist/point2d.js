"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point2d = void 0;
class Point2d {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
    setX(x) {
        this.x = x;
    }
    setY(y) {
        this.y = y;
    }
    setXY(x, y) {
        this.x = x, this.y = y;
    }
    getXY() {
        return [
            this.x,
            this.y
        ];
    }
}
exports.Point2d = Point2d;
