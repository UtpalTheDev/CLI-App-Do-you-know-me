var readlineSync= require('readline-sync');
var score=0;
function qs(question,answer){
 
  var currentans= readlineSync.question(question) //input from question
  if(currentans.toLowerCase()==answer)  // answer comparision
  {
    console.log("right");
    score++;                           //increment score for right answer
  }
  else{
    console.log("wrong");
  }
  console.log("score is",score);
  console.log("-------------------");
}
var array=[                           //array of objects
  {question:"where do i live?\n a.Bangalore, b.Westbengal, c.Both\n",
   answer:"c"
  },
  {
    question:"My favourite superhero would be?\n a. Superman, b. Batman\n",
    answer:"b"
  },
  {
   question:"Where do i work?\n a.Some company, b.Nowhere\n",
    answer:"b"
  },
  {
    question:"what suits on me?\n a.Customersupport Job, b.Software Developer Job\n",
    answer:"b"
  },
  {
    question:"What attracts me more?\n a.Pancake, b.Projects, c.Tea\n",
    answer:"b"
  }
   
]
var username=readlineSync.question("what is your name?\n");
console.log("welcome",username,"to this quiz");
console.log("lets start\n");
console.log("----------------------");

for(var i=0;i<array.length;i++){
  qs(array[i].question,array[i].answer); // access objects through array
}
console.log("total score",score);
console.log("thanks for participation");
var scoreboard=[
  {
    name:"vikash" ,
    score:"0"

  }
] 
for(var k=0; k<scoreboard.length;k++){
  console.log("scoreboard ",scoreboard[k].name,scoreboard[k].score);
}
