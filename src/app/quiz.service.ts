import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class QuizService {
  score: number = 0;
  username: string;
  questions: any;
  userResult: object;
  submittedAnswers: any;
  quizQuestions: any;

  constructor(private http: HttpClient, private router: Router) {}

  getQuestions() {
    return this.http.get("http://localhost:8000/questions");
  }

  getScores() {
    return this.http.get("http://localhost:8000/scores");
  }

  postScores(username: string, score: number): Observable<any> {
    return this.http.post("http://localhost:8000/scores", { username, score });
  }

  calculateScore(formValue: any, questions: any): any {
    console.log(formValue, questions);
    this.submittedAnswers = formValue;
    this.quizQuestions = questions;

    for (let i = 0; i < questions.length; i++) {
      if (formValue[i] === questions[i].answer) {
        this.score++;
      }
    }
    console.log(this.score);
    this.postScores(formValue.username, this.score).subscribe();
  }

  navigateToResults() {
    this.router.navigate(["results"]);
  }

  navigateToQuiz() {
    this.router.navigate(["quiz"]);
  }

  navigateToScores() {
    this.router.navigate(["scores"]);
  }

  returnCurrentAnswers() {
    return this.submittedAnswers;
  }

  returnQuizQuestions() {
    return this.quizQuestions;
  }

  returnScore() {
    return this.score;
  }
}
