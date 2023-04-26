class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("").attribute("placeholder","Enter your Name");
    this.input2 = createInput("").attribute("placeholder","Enter Correct Option No.");
    this.button = createButton('Submit');
    this.button2 = createButton('Reset');
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    //this.button2.hide();
    this.input2.hide();
  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);

    this.question.html("Question:- What starts and ends with the letter ‘L’, which means to have differnt situations?" );
    this.question.position(70,70);

    this.option1.html("1: Label " );
    this.option1.position(150, 100);

    this.option2.html("2: Lible" );
    this.option2.position(150, 120);

    this.option3.html("3: Level " );
    this.option3.position(150, 140);

    this.option4.html("4: Legal" );
    this.option4.position(150, 160);

    this.input1.position(150, 230);
    this.input2.position(350, 230);
    this.button.position(290, 300);
    this.button2.position(375,300)

    this.button.mousePressed(()=>{
      this.title.hide();
      this.input1.hide();
      this.input2.hide();
      this.button.hide();
      contestant.name = this.input1.value();
      contestant.answer = this.input2.value();
      contestantCount+=1;
      contestant.index = contestantCount;
      contestant.update();
      contestant.updateCount(contestantCount);
    });

    this.button2.mousePressed(()=>{
      contestant.updateCount(0)
      quiz.update(0)
      var ref = database.ref("contestants")
      ref.remove()
    })
  }
}
