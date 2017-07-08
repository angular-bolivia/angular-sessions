
import { University } from "app/class/university";
import { IPerson } from "app/interface/iperson";

export class IvoRojas implements IPerson{
    height: number;
    public name: string;
    private Age: number;
    public university: University;

    getHeight() {
        throw new Error("Method not implemented.");
    }
}
