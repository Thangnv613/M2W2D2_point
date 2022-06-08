import { Point2d } from "./point2d";
export class Point3d extends Point2d {
    z: number;
    constructor(x: number, y: number, z: number){
        super(x,y);
        this.z = z;
    }
    getZ(){
        return this.z;
    }
    setZ(z: number) {
        this.z = z;
    }
    getXYZ(): object{
        return [this.x + this.y + this.z];
    }
    setXYZ(x: number, y: number, z: number): void {
         this.x = x, this.y = y, this.z = z
    }
}