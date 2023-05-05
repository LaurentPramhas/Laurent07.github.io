const quiz = [
	{
	  question: "Was ist das schnellste Auto auf der Welt?",
	  choices: ["Bugatti Chiron Supersport", "Koenigsegg Jesko Absolut", "Rimac Nevera", "McLaren Speedtail"],
	  answer: "Koenigsegg Jesko Absolut"
	},
	{
	  question: "Was ist der teuerste Neuwagen den es gibt?",
	  choices: ["Maybach Exelero", "Bugatti Centodieci", "Pagani Zonda HP Barchetta", "Rolls-Royce Boat Tail"],
	  answer: "Rolls-Royce Boat Tail"
	},
	{
	  question: "Welche Automarke verkaufte 2022 die meisten Autos?",
	  choices: ["VW", "Skoda", "Mercedes", "BMW"],
	  answer: "VW"
	}
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionElement = document.getElementById("question");
  const choicesElement = document.getElementById("choices");
  const submitButton = document.getElementById("submit");
  const resultElement = document.getElementById("result");
  
  function showQuestion() {
	questionElement.textContent = quiz[currentQuestion].question;
  
	choicesElement.innerHTML = "";
	for (let i = 0; i < quiz[currentQuestion].choices.length; i++) {
	  const choice = quiz[currentQuestion].choices[i];
	  const button = document.createElement("button");
	  button.textContent = choice;
	  button.addEventListener("click", function() {
		checkAnswer(choice);
	  });
	  choicesElement.appendChild(button);
	}
  }
  
  function checkAnswer(answer) {
	if (answer === quiz[currentQuestion].answer) {
	  score++;
	}
  
	currentQuestion++;
  
	if (currentQuestion < quiz.length) {
	  showQuestion();
	} else {
	  showResult();
	}
  }
  
  function showResult() {
	resultElement.textContent = `You scored ${score} out of ${quiz.length}.`;
	choicesElement.style.display = "none";
	submitButton.style.display = "none";
  }
  
  showQuestion();
  submitButton.addEventListener("click", function() {
	const selected = document.querySelector("input[type=radio]:checked");
	if (!selected) {
	  return;
	}
  
	checkAnswer(selected.value);
  });
  