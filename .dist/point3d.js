"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point3d = void 0;
const point2d_1 = require("./point2d");
class Point3d extends point2d_1.Point2d {
    constructor(x, y, z) {
        super(x, y);
        this.z = z;
    }
    getZ() {
        return this.z;
    }
    setZ(z) {
        this.z = z;
    }
    getXYZ() {
        return [this.x + this.y + this.z];
    }
    setXYZ(x, y, z) {
        this.x = x, this.y = y, this.z = z;
    }
}
exports.Point3d = Point3d;
