import { Component, OnInit } from "@angular/core";
import { QuizService } from "../quiz.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-quiz",
  templateUrl: "./quiz.component.html",
  styleUrls: ["./quiz.component.css"]
})
export class QuizComponent implements OnInit {
  questions: any;

  constructor(private quizService: QuizService) {}

  ngOnInit() {
    this.quizService.getQuestions().subscribe(response => {
      this.questions = response;
    });
  }

  addUser(form: NgForm): any {
    let userScore = this.quizService.calculateScore(
      form.value,
      this.questions,
      form.value.username
    );
    // console.log(userScore);
    this.quizService.postScores(userScore);
  }
}
