import { Component, OnInit } from "@angular/core";
import { QuizService } from "../quiz.service";
import { format } from "url";

@Component({
  selector: "app-scores",
  templateUrl: "./scores.component.html",
  styleUrls: ["./scores.component.css"]
})
export class ScoresComponent implements OnInit {
  scores: any;

  constructor(private quizService: QuizService) {}

  ngOnInit() {
    this.quizService.getScores().subscribe(response => {
      this.scores = response;
    });
  }

  goToQuiz() {
    this.quizService.navigateToQuiz();
  }

  resetUserScore() {
    this.quizService.resetScore();
  }
}
