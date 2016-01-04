//Extra-Feature available: Shuffle card, more questions
//Fixed: error caused by counter lasting forever in 'next' button, CSS
//YJP

var flashcards = [
	{
		"question": "THIS IS AN EXAMPLE QUESTION. Press 'Flip' to see answer.",
		"answer": "Good Job! Now go onto the next card by clicking 'Next'."
	},
	{
		"question": "What is a multi-dimensional array?",
		"answer": "It's an array within an array."
	},
	{
		"question": "How do you access nested array elements?",
		"answer": "array[index x][index y]... Index y is the index of the nested array."
	},
	{
		"question": "True or False, a non-zero number is considered true.",
		"answer": "True"
	},
	{
		"question": "True or False, an empty string is also considered true.",
		"answer": "False"
	},
	{
		"question": "What is the difference between the operators '==' and '==='?",
		"answer": "'===' also checks the types of expressions. So '1'== 1 is true, but '1' === 1 is false."
	},
	{
		"question": "Using console, how do you start a timer?",
		"answer": "Use console.time(timerName)"
	},
	{
		"question": "How many ways are there to declare functions?",
		"answer": "Two. You can have it defined immediately or set it to a variable."
	},
	{
		"question": "When do you use a while loop?",
		"answer": "You use it when you don't know how often you'll loop."
	},
	{
		"question": "What is a class?",
		"answer": "It's like a cookie cutter for objects. It can be thought as a template to create objects with similar qualities."
	},
	{
		"question": "Is string.indexOf() case sensitive?",
		"answer": "Yes."
	},
	{
		"question": "Should you use global variables?",
		"answer": "Only if you want to see the world burn."
	},
	{
		"question": "Does a scripting language need a compiler?",
		"answer": "No. A scripting language is interpreted into computer language without any compilers."
	},
	{
		"question": "What is the difference between a run-time error and a syntax error?",
		"answer": "A run-time error happens when you use incorrect commands in your code. Syntax errors are caused when you have misspelled or use unrecognized texts."
	},
	{
		"question": "What is a cookie?",
		"answer": "A cookie is an object that contains client's status information. The server can access cookies."
	}
 ];

var CardManager = function(){
 	
 	this.currentCard = 0;

 	this.init = function(){
 		cardManager.showQuestionAnswer(cardManager.currentCard);
 		$('#flashcard-answer').hide();

 		$("#next-card").click(function(){
 			cardManager.nextCard();
 			cardManager.showQuestionAnswer(cardManager.currentCard);
 		});

 		$("#previous-card").click(function(){
 			cardManager.prevCard();
 			cardManager.showQuestionAnswer(cardManager.currentCard);
 		});

 		$("#flip-card").click(function(){
 			cardManager.flipCard();
 			cardManager.showQuestionAnswer(cardManager.currentCard);
 		});

 		$("#random-card").click(function(){
 			cardManager.randomCard();
 			cardManager.showQuestionAnswer(cardManager.currentCard);
 		});
	};

	this.showQuestionAnswer = function(index){
		var card = flashcards[index];
		$("#flashcard-question").html("Question: "+card.question);
		$("#flashcard-answer").html("Answer: "+card.answer);
	};

	this.nextCard = function(){
		if(this.currentCard < flashcards.length - 1){
			this.currentCard++;
			$('#flashcard-answer').hide();
		} else if(this.currentCard == flashcards.length - 1){
			alert("Congratulations! You have seen all of the cards!");
		}
		return this.currentCard;
	 };
	
	this.prevCard = function(){
		if(this.currentCard > 0){
			this.currentCard--;
			$('#flashcard-answer').hide();
		} else {
			alert("This is the first card. Click OK to continue.");
		}
		return this.currentCard;
	};

	this.flipCard = function(){
		$("#flashcard-answer").toggle();
		return this.currentCard;
	};

	this.randomCard = function(){
		var indexArray = this.currentCard;
		this.currentCard = Math.floor((Math.random() * (flashcards.length - 1)) + 1);
		$('#flashcard-answer').hide();
		return indexArray;
	};
		
}

var cardManager = new CardManager();

cardManager.init();