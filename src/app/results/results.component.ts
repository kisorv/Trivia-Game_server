import { Component, OnInit } from "@angular/core";
import { QuizService } from "../quiz.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-results",
  templateUrl: "./results.component.html",
  styleUrls: ["./results.component.css"]
})
export class ResultsComponent implements OnInit {
  submittedAnswers: any;
  questions: any;
  score: number = 0;
  disabled: boolean = true;

  constructor(private quizService: QuizService) {}

  ngOnInit() {
    this.questions = this.quizService.returnQuizQuestions();
    this.submittedAnswers = this.quizService.returnCurrentAnswers();
    this.score = this.quizService.returnScore();
    if (!this.questions) {
      this.quizService.navigateToQuiz();
    }
  }

  goToScores() {
    this.quizService.navigateToScores();
  }

  resetUserScore() {
    this.quizService.resetScore();
  }
}
