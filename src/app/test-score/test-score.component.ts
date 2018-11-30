import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ToastService } from '../toast/toast.service';
import { Test } from './test.model';

export interface ITest {
  id?: number;
  testName: string;
  pointsPossible: number;
  pointsReceived: number;
  percentage: number;
  grade: string;
}

@Component({
  selector: 'app-test-score',
  templateUrl: './test-score.component.html',
  styleUrls: ['./test-score.component.css']
})
export class TestScoreComponent implements OnInit {

  tests: Array<ITest> = [];
  constructor(
    private http: Http,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastService: ToastService
  ) { }

  async ngOnInit() {
    const savedTests = await this.getItemsFromLocalStorage('tests');
    this.tests = savedTests;
  }

  addTest(test: ITest) {
    this.tests.unshift(test)
  }

  deleteTest(index: number) {
    this.tests.splice(index, 1);
    this.saveItemsToLocalStorage(this.tests)
  }

  // saveTest(test: any) {
    // this.tests
    // this.sortById(this.tests);
  // } 

  saveItemsToLocalStorage(test: Array<Test>) {
    const savedTests = localStorage.setItem('tests', JSON.stringify(this.tests));
    return savedTests;
  }

  async getItemsFromLocalStorage(key: string) {
    const savedTests = JSON.parse(localStorage.getItem(key));
    if (savedTests.length > 0) {
      return savedTests;
    } else {
      null
    }
  }

}
