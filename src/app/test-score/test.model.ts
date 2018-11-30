interface ITest {
  id?: number;
  testName?: string;
  pointsPossible?: number;
  pointsReceived?: number;
  percentage?: number;
  grade?: string;
}

export class Test {

    public id?: number;
    public testName?: string;
    public pointsPossible?: number;
    public pointsReceived?: number;
    public percentage?: number;
    public grade?: string;

    constructor(test: ITest) {
        Object.assign(this, test)
    }


}