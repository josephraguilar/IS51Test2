import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ToastService } from '../toast/toast.service';
import { Test } from './test.model';



@Component({
  selector: 'app-test-score',
  templateUrl: './test-score.component.html',
  styleUrls: ['./test-score.component.css']
})
export class TestScoreComponent implements OnInit {

  tests: Array<Test> = [];

  constructor(
    private http: Http,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastService: ToastService
  ) { }

  async ngOnInit() {
    // const savedTests = await this.getItemsFromLocalStorage('tests');
    // if (savedTests && savedTests.length > 0) {
    //   this.tests = savedTests;
    // } else {
    //   this.tests = await this.loadItemsFromFile();
    console.log(this.loadItemsFromFile())
    // }
    
  }

  async loadItemsFromFile() {
    const data = await this.http.get('assets/tests.json').toPromise();
    return data;
  }

  addTest() {
    this.tests.unshift(new Test({}));
  }

  deleteTest(index: number) {
    this.tests.splice(index, 1);
    this.saveItemsToLocalStorage(this.tests)
  }

  saveItemsToLocalStorage(test: Array<Test>) {
    const savedTests = localStorage.setItem('tests', JSON.stringify(this.tests));
    return savedTests;
  }

  async getItemsFromLocalStorage(key: string) {
    const savedTests = JSON.parse(localStorage.getItem(key));
      return savedTests;
  }

}
