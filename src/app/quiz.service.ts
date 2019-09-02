import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class QuizService {
  score: number = 0;
  username: string;
  questions: any;
  userResult: object;

  constructor(private http: HttpClient, private router: Router) {}

  getQuestions() {
    return this.http.get("http://localhost:8000/questions");
  }

  getScores() {
    return this.http.get("http://localhost:8000/scores");
  }

  postScores(newUser: object) {
    return this.http
      .post("http://localhost:8000/scores", newUser)
      .subscribe(response => {
        this.userResult = response;
      });
  }

  calculateScore(formValue: object, questions: any, username: string): any {
    this.username = username;

    for (let i = 0; i < questions.length; i++) {
      if (formValue[i] === questions[i].answer) {
        this.score++;
      }
    }
    this.router.navigate(["results"]);
    return (this.userResult = {
      username: this.username,
      score: this.score
    });
  }
}
