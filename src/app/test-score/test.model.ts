interface ITest {
  id?: number;
  testName: string;
  pointsPossible: number;
  pointsReceived: number;
  percentage: number;
  grade: string;
}

export class Test {

    public id?: number;
    public testName?: string;
    public pointsPossible?: number;
    public pointsRecieved?: number;
    public percentage?: string;
    public grade?: string;

    constructor(contact: ITest) {
        Object.assign(this, contact)
    }


}