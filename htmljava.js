document.getElementById('option1').innerHTML = 'Optie 1';
document.getElementById('level_title').innerHTML = 'French Tic Tac Toto';

var HasKey = false;

// jquery variant
//$('#option1').html('Dit is keuze 1');

function Homepage() {
	console.log("Homepage()");

	var hp = document.getElementById('homepage');
	hp.innerHTML = 'Home';
	hp.onClick = 'javascript:Homepage();';
	{
		alert("You are now going Home :(")
	}

	document.getElementById('level_title').innerHTML = '';
	document.getElementById('level_image').src = 'img/Black-background-texture-wallpaper-HD.jpg';
    document.getElementById('info').innerHTML = 'Tic Tac Toe is a two-player game where the first player to connect a line of pieces from one side or corner of the board to the other wins. With perfect play, the game can not be won.';
}

function Level1() {
	console.log("Level1()");

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Level 1';
	opt1.setAttribute("onClick", "javascript:Level1();");
	{
        alert("You are about to enter level 1!");
    }

	document.getElementById('level_title').innerHTML = 'Level 1';
	document.getElementById('level_image').src = 'img/level1.jpg';
	document.getElementById('music').src = 'music/Stronger.mp3';
    document.getElementById('info').innerHTML = 'Hi, this is Tic Tac Toto. The game is designed in a matter that you will never win unless you are God. Also, you are not allowed to skip to Level 2 until you win, lose or tie the game. Do not forget to enjoy the music. Yes, I know I have great taste in music. GOOD LUCK MATE!';
}

function Level2() {
	console.log("Level2()");

	var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'Level 2';
	opt2.setAttribute("onClick", "javascript:Level2();");
	{
		alert("You are about to enter level 2!");
	}

	document.getElementById('level_title').innerHTML = 'Level 2';
	document.getElementById('level_image').src = 'img/level2.jpg';
	document.getElementById('music').src = 'music/Freedom (Ft. Kendrick Lamar).mp3';
	document.getElementById('info').innerHTML = 'Hi, this is Tic Tac Toto. The game is designed in a matter that you will never win unless you are God. Also, you are not allowed to skip to Level 2 until you win, lose or tie the game. Do not forget to enjoy the music. Yes, I know I have great taste in music. GOOD LUCK MATE!';
}

function Level3() {
	console.log("Level3()");

	var opt3 = document.getElementById('option3');
	opt3.innerHTML = 'Level 3';
	opt3.onClick = 'javascript:Level3();';
	{
		alert("You are about to enter level 3");
	}

	document.getElementById('level_title').innerHTML = 'Level 3';
	document.getElementById('level_image').src = 'img/level3.jpg';
	document.getElementById('music').src = 'music/Dead Presidents II.mp3';
	document.getElementById('info').innerHTML = 'Hi, this is Tic Tac Toto. The game is designed in a matter that you will never win unless you are God. Also, you are not allowed to skip to Level 2 until you win, lose or tie the game. Do not forget to enjoy the music. Yes, I know I have great taste in music. GOOD LUCK MATE!';
} 

function Level4() {
	console.log("Level4()");

	var opt4 = document.getElementById('option4');
	opt4.innerHTML = 'Level 4';
	opt4.onClick = 'javascript:Level4();';
	{
		alert("You are about to enter level 4");
	}

	document.getElementById('level_title').innerHTML = 'Level 4';
	document.getElementById('level_image').src = 'img/level4.jpg';
	document.getElementById('music').src = 'music/No Role Modelz.mp3';
	document.getElementById('info').innerHTML = 'Hi, this is Tic Tac Toto. The game is designed in a matter that you will never win unless you are God. Also, you are not allowed to skip to Level 2 until you win, lose or tie the game. Do not forget to enjoy the music. Yes, I know I have great taste in music. GOOD LUCK MATE!';
}

function Level5() {
	console.log("Level5()");

	var opt5 = document.getElementById('option5');
	opt5.innerHTML = 'Level 5';
	opt5.onClick = 'javascript:Level5();';
	{
		alert("You are about to enter level 5");
	}

	document.getElementById('level_title').innerHTML = 'Level 5';
	document.getElementById('level_image').src = 'img/level5.jpg';
	document.getElementById('music').src = 'music/Wolves.mp3';
	document.getElementById('info').innerHTML = 'Hi, this is Tic Tac Toto. The game is designed in a matter that you will never win unless you are God. Also, you are not allowed to skip to Level 2 until you win, lose or tie the game. Do not forget to enjoy the music. Yes, I know I have great taste in music. GOOD LUCK MATE!';
}

function Level6() {
	console.log("Level6()");

	var opt6 = document.getElementById('option6');
	opt6.innerHTML = 'Level 6';
	opt6.onClick = 'javascript:Level6();';
	{
		alert("You are about to enter level 6");
	}

	document.getElementById('level_title').innerHTML = 'Level 6';
	document.getElementById('level_image').src = 'img/level6.jpg';
	document.getElementById('music').src = 'music/Hate Me Now.mp3';
	document.getElementById('info').innerHTML = 'Hi, this is Tic Tac Toto. The game is designed in a matter that you will never win unless you are God. Also, you are not allowed to skip to Level 2 until you win, lose or tie the game. Do not forget to enjoy the music. Yes, I know I have great taste in music. GOOD LUCK MATE!';
}

function Level7() {
	console.log("Level7()");

	var opt7 = document.getElementById('option7');
	opt7.innerHTML = 'Level 7';
	opt7.onClick = 'javascript:Level7();';
	{
		alert("You are about to enter level 7");
	}

	document.getElementById('level_title').innerHTML = 'Level 7';
	document.getElementById('level_image').src = 'img/level7.jpg';
	document.getElementById('music').src = 'music/Devils.mp3';
	document.getElementById('info').innerHTML = 'Hi, this is Tic Tac Toto. The game is designed in a matter that you will never win unless you are God. Also, you are not allowed to skip to Level 2 until you win, lose or tie the game. Do not forget to enjoy the music. Yes, I know I have great taste in music. GOOD LUCK MATE!';
}

function Level8() {
	console.log("Level8()");

	var opt8 = document.getElementById('option8');
	opt8.innerHTML = 'Level 8';
	opt8.onClick = 'javascript:Level8();';
	{
		alert("You are about to enter level 8");
	}

	document.getElementById('level_title').innerHTML = 'Level 8';
	document.getElementById('level_image').src = 'img/level8.jpg';
	document.getElementById('music').src = 'music/Bitch, Dont Kill My Vibe.mp3';
	document.getElementById('info').innerHTML = 'Hi, this is Tic Tac Toto. The game is designed in a matter that you will never win unless you are God. Also, you are not allowed to skip to Level 2 until you win, lose or tie the game. Do not forget to enjoy the music. Yes, I know I have great taste in music. GOOD LUCK MATE!';
}

function Level9() {
	console.log("Level9()");

	var opt9 = document.getElementById('option9');
	opt9.innerHTML = 'Level 9';
	opt9.onClick = 'javascript:Level9();';
	{
		alert("You are about to enter level 9");
	}

	document.getElementById('level_title').innerHTML = 'Level 9';
	document.getElementById('level_image').src = 'img/level9.jpg';
	document.getElementById('music').src = 'music/Alright.mp3';
	document.getElementById('info').innerHTML = 'Hi, this is Tic Tac Toto. The game is designed in a matter that you will never win unless you are God. Also, you are not allowed to skip to Level 2 until you win, lose or tie the game. Do not forget to enjoy the music. Yes, I know I have great taste in music. GOOD LUCK MATE!';
}

function Level10() {
	console.log("Level10()");

	var opt10 = document.getElementById('option10');
	opt10.innerHTML = 'Level 10';
	opt10.onClick = 'javascript:Level10();';
	{
		alert("You are about to enter level 10");
	}

	document.getElementById('level_title').innerHTML = 'Level 10';
	document.getElementById('level_image').src = 'img/level10.jpg';
	document.getElementById('music').src = 'music/Ultralight Beam.mp3';
	document.getElementById('info').innerHTML = 'Hi, this is Tic Tac Toto. The game is designed in a matter that you will never win unless you are God. Also, you are not allowed to skip to Level 2 until you win, lose or tie the game. Do not forget to enjoy the music. Yes, I know I have great taste in music. GOOD LUCK MATE!';
}

var sqr1
var sqr2
var sqr3
var sqr4
var sqr5
var sqr6
var sqr7
var sqr8
var sqr9
var sqr1T = 0
var sqr2T = 0
var sqr3T = 0
var sqr4T = 0
var sqr5T = 0
var sqr6T = 0
var sqr7T = 0
var sqr8T = 0
var sqr9T = 0
var moveCount = 0
var turn = 0
var mode = 1

function vari()
{
sqr1 = document.tic.sqr1.value
sqr2 = document.tic.sqr2.value
sqr3 = document.tic.sqr3.value
sqr4 = document.tic.sqr4.value
sqr5 = document.tic.sqr5.value
sqr6 = document.tic.sqr6.value
sqr7 = document.tic.sqr7.value
sqr8 = document.tic.sqr8.value
sqr9 = document.tic.sqr9.value
}
function check()
{
if(sqr1 == " X " && sqr2 == " X " && sqr3 == " X ")
{
alert("You Win! Go to next level.")
reset()
} 
else if(sqr4 == " X " && sqr5 == " X " && sqr6 == " X ")
{
alert("You Win! Go to next level.")
reset()
} 
else if(sqr7 == " X " && sqr8 == " X " && sqr9 == " X ")
{
alert("You Win! Go to next level.")
reset()
}
else if(sqr1 == " X " && sqr5 == " X " && sqr9 == " X ")
{
alert("You Win! Go to next level.")
reset()
}
else if(sqr1 == " X " && sqr4 == " X " && sqr7 == " X ")
{
alert("You Win! Go to next level.")
reset()
}
else if(sqr2 == " X " && sqr5 == " X " && sqr8 == " X ")
{
alert("You Win! Go to next level.")
reset()
}
else if(sqr3 == " X " && sqr6 == " X " && sqr9 == " X ")
{
alert("You Win! Go to next level.")
reset()
}
else if(sqr1 == " X " && sqr5 == " X " && sqr9 == " X ")
{
alert("You Win! Go to next level.")
reset()
}
else if(sqr3 == " X " && sqr5 == " X " && sqr7 == " X ")
{
alert("You Win! Go to next level.")
reset()
}
else
{
winCheck()
check2()
drawCheck()  
} 
}

function check2()
{
vari()
drawCheck()
if(sqr1 == " O " && sqr2 == " O " && sqr3 == " O ")
{
alert("You Lose! Try again.")
reset()
} 
else if(sqr4 == " O " && sqr5 == " O " && sqr6 == " O ")
{
alert("You Lose! Try again.")
reset()
} 
else if(sqr7 == " O " && sqr8 == " O " && sqr9 == " O ")
{
alert("You Lose! Try again.")
reset()
}
else if(sqr1 == " O " && sqr5 == " O " && sqr9 == " O ")
{
alert("You Lose! Try again.")
reset()
}
else if(sqr1 == " O " && sqr4 == " O " && sqr7 == " O ")
{
alert("You Lose! Try again.")
reset()
}
else if(sqr2 == " O " && sqr5 == " O " && sqr8 == " O ")
{
alert("You Lose! Try again.")
reset()
}
else if(sqr3 == " O " && sqr6 == " O " && sqr9 == " O ")
{
alert("You Lose! Try again.")
reset()
}
else if(sqr1 == " O " && sqr5 == " O " && sqr9 == " O ")
{
alert("You Lose! Try again.")
reset()
}
else if(sqr3 == " O " && sqr5 == " O " && sqr7 == " O ")
{
alert("You Lose! Try again.")
reset()
}
}

function player1Check()
{
if(sqr1 == " X " && sqr2 == " X " && sqr3 == " X ")
{
alert("Player 1 wins!")
reset()
} 
else if(sqr4 == " X " && sqr5 == " X " && sqr6 == " X ")
{
alert("Player 1 wins!")
reset()
} 
else if(sqr7 == " X " && sqr8 == " X " && sqr9 == " X ")
{
alert("Player 1 wins!")
reset()
}
else if(sqr1 == " X " && sqr5 == " X " && sqr9 == " X ")
{
alert("Player 1 wins!")
reset()
}
else if(sqr1 == " X " && sqr4 == " X " && sqr7 == " X ")
{
alert("Player 1 wins!")
reset()
}
else if(sqr2 == " X " && sqr5 == " X " && sqr8 == " X ")
{
alert("Player 1 wins!")
reset()
}
else if(sqr3 == " X " && sqr6 == " X " && sqr9 == " X ")
{
alert("Player 1 wins!")
reset()
}
else if(sqr1 == " X " && sqr5 == " X " && sqr9 == " X ")
{
alert("Player 1 wins!")
reset()
}
else if(sqr3 == " X " && sqr5 == " X " && sqr7 == " X ")
{
alert("Player 1 wins!")
reset()
}
else
{
player2Check()
drawCheck()  
} 
}

function player2Check()
{
vari()
drawCheck()
if(sqr1 == " O " && sqr2 == " O " && sqr3 == " O ")
{
alert("Player 2 wins!")
reset()
} 
else if(sqr4 == " O " && sqr5 == " O " && sqr6 == " O ")
{
alert("Player 2 wins!")
reset()
} 
else if(sqr7 == " O " && sqr8 == " O " && sqr9 == " O ")
{
alert("Player 2 wins!")
reset()
}
else if(sqr1 == " O " && sqr5 == " O " && sqr9 == " O ")
{
alert("Player 2 wins!")
reset()
}
else if(sqr1 == " O " && sqr4 == " O " && sqr7 == " O ")
{
alert("Player 2 wins!")
reset()
}
else if(sqr2 == " O " && sqr5 == " O " && sqr8 == " O ")
{
alert("Player 2 wins!")
reset()
}
else if(sqr3 == " O " && sqr6 == " O " && sqr9 == " O ")
{
alert("Player 2 wins!")
reset()
}
else if(sqr1 == " O " && sqr5 == " O " && sqr9 == " O ")
{
alert("Player 2 wins!")
reset()
}
else if(sqr3 == " O " && sqr5 == " O " && sqr7 == " O ")
{
alert("Player 2 wins!")
reset()
}
}

function drawCheck()
{
vari()
moveCount = sqr1T + sqr2T + sqr3T + sqr4T + sqr5T + sqr6T + sqr7T + sqr8T + sqr9T 
if(moveCount == 9)
{
reset()
alert("Draw. Go to next level.") 
}
}

function winCheck()
{
check2()
if(sqr1 == " O " && sqr2 == " O " && sqr3T == 0 && turn == 1)
{
document.tic.sqr3.value = " O "
sqr3T = 1;
turn = 0;
}
else if(sqr2 == " O " && sqr3 == " O " && sqr1T == 0 && turn == 1)
{
document.tic.sqr1.value = " O "
sqr1T = 1;
turn = 0;
}
else if(sqr4 == " O " && sqr5 == " O " && sqr6T == 0 && turn == 1)
{
document.tic.sqr6.value = " O "
sqr6T = 1;
turn = 0;
}
else if(sqr5 == " O " && sqr6 == " O " && sqr4T == 0 && turn == 1)
{
document.tic.sqr4.value = " O "
sqr4T = 1;
turn = 0;
}
else if(sqr7 == " O " && sqr8 == " O " && sqr9T == 0 && turn == 1)
{
document.tic.sqr9.value = " O "
sqr9T = 1;
turn = 0;
}
else if(sqr8 == " O " && sqr9 == " O " && sqr7T == 0 && turn == 1)
{
document.tic.sqr7.value = " O "
sqr7T = 1;
turn = 0;
}
else if(sqr1 == " O " && sqr5 == " O " && sqr9T == 0 && turn == 1)
{
document.tic.sqr9.value = " O "
sqr9T = 1;
turn = 0;
}
else if(sqr5 == " O " && sqr9 == " O " && sqr1T == 0 && turn == 1)
{
document.tic.sqr1.value = " O "
sqr1T = 1;
turn = 0;
}
else if(sqr3 == " O " && sqr5 == " O " && sqr7T == 0 && turn == 1)
{
document.tic.sqr7.value = " O "
sqr7T = 1;
turn = 0;
}
else if(sqr7 == " O " && sqr5 == " O " && sqr3T == 0 && turn == 1)
{
document.tic.sqr3.value = " O "
sqr3T = 1;
turn = 0;
}
else if(sqr1 == " O " && sqr3 == " O " && sqr2T == 0 && turn == 1)
{
document.tic.sqr2.value = " O "
sqr2T = 1;
turn = 0;
}
else if(sqr4 == " O " && sqr6 == " O " && sqr5T == 0 && turn == 1)
{
document.tic.sqr5.value = " O "
sqr5T = 1;
turn = 0;
}
else if(sqr7 == " O " && sqr9 == " O " && sqr8T == 0 && turn == 1)
{
document.tic.sqr8.value = " O "
sqr8T = 1;
turn = 0;
}
else if(sqr1 == " O " && sqr7 == " O " && sqr4T == 0 && turn == 1)
{
document.tic.sqr4.value = " O "
sqr4T = 1;
turn = 0;
}
else if(sqr2 == " O " && sqr8 == " O " && sqr5T == 0 && turn == 1)
{
document.tic.sqr5.value = " O "
sqr5T = 1;
turn = 0;
}
else if(sqr3 == " O " && sqr9 == " O " && sqr6T == 0 && turn == 1)
{
document.tic.sqr6.value = " O "
sqr6T = 1;
turn = 0;
}
else if(sqr1 == " O " && sqr5 == " O " && sqr9T == 0 && turn == 1)
{
document.tic.sqr9.value = " O "
sqr9T = 1;
turn = 0;
}
else if(sqr4 == " O " && sqr7 == " O " && sqr1T == 0 && turn == 1)
{
document.tic.sqr1.value = " O "
sqr1T = 1;
turn = 0;
}
else if(sqr5 == " O " && sqr8 == " O " && sqr2T == 0 && turn == 1)
{
document.tic.sqr2.value = " O "
sqr2T = 1;
turn = 0;
}
else if(sqr6 == " O " && sqr9 == " O " && sqr3T == 0 && turn == 1)
{
document.tic.sqr3.value = " O "
sqr3T = 1;
turn = 0;
}
else if(sqr1 == " O " && sqr4 == " O " && sqr7T == 0 && turn == 1)
{
document.tic.sqr7.value = " O "
sqr7T = 1;
turn = 0;
}
else if(sqr2 == " O " && sqr5 == " O " && sqr8T == 0 && turn == 1)
{
document.tic.sqr8.value = " O "
sqr8T = 1;
turn = 0;
}
else if(sqr3 == " O " && sqr6 == " O " && sqr9T == 0 && turn == 1)
{
document.tic.sqr9.value = " O "
sqr9T = 1;
turn = 0;
}
else if(sqr1 == " O " && sqr9 == " O " && sqr5T == 0 && turn == 1)
{
document.tic.sqr5.value = " O "
sqr5T = 1;
turn = 0;
}
else if(sqr3 == " O " && sqr7 == " O " && sqr5T == 0 && turn == 1)
{
document.tic.sqr5.value = " O "
sqr5T = 1;
turn = 0;
}
else
{
computer()
}
check2()
}
function computer()
{
check2()
if(sqr1 == " X " && sqr2 == " X " && sqr3T == 0 && turn == 1)
{
document.tic.sqr3.value = " O "
sqr3T = 1;
turn = 0;
}
else if(sqr2 == " X " && sqr3 == " X " && sqr1T == 0 && turn == 1)
{
document.tic.sqr1.value = " O "
sqr1T = 1;
turn = 0;
}
else if(sqr4 == " X " && sqr5 == " X " && sqr6T == 0 && turn == 1)
{
document.tic.sqr6.value = " O "
sqr6T = 1;
turn = 0;
}
else if(sqr5 == " X " && sqr6 == " X " && sqr4T == 0 && turn == 1)
{
document.tic.sqr4.value = " O "
sqr4T = 1;
turn = 0;
}
else if(sqr7 == " X " && sqr8 == " X " && sqr9T == 0 && turn == 1)
{
document.tic.sqr9.value = " O "
sqr9T = 1;
turn = 0;
}
else if(sqr8 == " X " && sqr9 == " X " && sqr7T == 0 && turn == 1)
{
document.tic.sqr7.value = " O "
sqr7T = 1;
turn = 0;
}
else if(sqr1 == " X " && sqr5 == " X " && sqr9T == 0 && turn == 1)
{
document.tic.sqr9.value = " O "
sqr9T = 1;
turn = 0;
}
else if(sqr5 == " X " && sqr9 == " X " && sqr1T == 0 && turn == 1)
{
document.tic.sqr1.value = " O "
sqr1T = 1;
turn = 0;
}
else if(sqr3 == " X " && sqr5 == " X " && sqr7T == 0 && turn == 1)
{
document.tic.sqr7.value = " O "
sqr7T = 1;
turn = 0;
}
else if(sqr7 == " X " && sqr5 == " X " && sqr3T == 0 && turn == 1)
{
document.tic.sqr3.value = " O "
sqr3T = 1;
turn = 0;
}
else if(sqr1 == " X " && sqr3 == " X " && sqr2T == 0 && turn == 1)
{
document.tic.sqr2.value = " O "
sqr2T = 1;
turn = 0;
}
else if(sqr4 == " X " && sqr6 == " X " && sqr5T == 0 && turn == 1)
{
document.tic.sqr5.value = " O "
sqr5T = 1;
turn = 0;
}
else if(sqr7 == " X " && sqr9 == " X " && sqr8T == 0 && turn == 1)
{
document.tic.sqr8.value = " O "
sqr8T = 1;
turn = 0;
}
else if(sqr1 == " X " && sqr7 == " X " && sqr4T == 0 && turn == 1)
{
document.tic.sqr4.value = " O "
sqr4T = 1;
turn = 0;
}
else if(sqr2 == " X " && sqr8 == " X " && sqr5T == 0 && turn == 1)
{
document.tic.sqr5.value = " O "
sqr5T = 1;
turn = 0;
}
else if(sqr3 == " X " && sqr9 == " X " && sqr6T == 0 && turn == 1)
{
document.tic.sqr6.value = " O "
sqr6T = 1;
turn = 0;
}
else if(sqr1 == " X " && sqr5 == " X " && sqr9T == 0 && turn == 1)
{
document.tic.sqr9.value = " O "
sqr9T = 1;
turn = 0;
}
else if(sqr4 == " X " && sqr7 == " X " && sqr1T == 0 && turn == 1)
{
document.tic.sqr1.value = " O "
sqr1T = 1;
turn = 0;
}
else if(sqr5 == " X " && sqr8 == " X " && sqr2T == 0 && turn == 1)
{
document.tic.sqr2.value = " O "
sqr2T = 1;
turn = 0;
}
else if(sqr6 == " X " && sqr9 == " X " && sqr3T == 0 && turn == 1)
{
document.tic.sqr3.value = " O "
sqr3T = 1;
turn = 0;
}
else if(sqr1 == " X " && sqr4 == " X " && sqr7T == 0 && turn == 1)
{
document.tic.sqr7.value = " O "
sqr7T = 1;
turn = 0;
}
else if(sqr2 == " X " && sqr5 == " X " && sqr8T == 0 && turn == 1)
{
document.tic.sqr8.value = " O "
sqr8T = 1;
turn = 0;
}
else if(sqr3 == " X " && sqr6 == " X " && sqr9T == 0 && turn == 1)
{
document.tic.sqr9.value = " O "
sqr9T = 1;
turn = 0;
}
else if(sqr1 == " X " && sqr9 == " X " && sqr5T == 0 && turn == 1)
{
document.tic.sqr5.value = " O "
sqr5T = 1;
turn = 0;
}
else if(sqr3 == " X " && sqr7 == " X " && sqr5T == 0 && turn == 1)
{
document.tic.sqr5.value = " O "
sqr5T = 1;
turn = 0;
}
else
{
AI()
}
check2()
}

function AI()
{
vari()
if(document.tic.sqr5.value == "     " && turn == 1)
{
document.tic.sqr5.value = " O "
turn = 0
sqr5T = 1
}
else if(document.tic.sqr1.value == "     " && turn == 1)
{
document.tic.sqr1.value = " O "
turn = 0
sqr1T = 1
}
else if(document.tic.sqr9.value == "     " && turn == 1)
{
document.tic.sqr9.value = " O "
turn = 0
sqr9T = 1
}
else if(document.tic.sqr6.value == "     " && turn == 1)
{
document.tic.sqr6.value = " O "
turn = 0
sqr6T = 1
}
else if(document.tic.sqr2.value == "     " && turn == 1)
{
document.tic.sqr2.value = " O "
turn = 0
sqr2T = 1
}
else if(document.tic.sqr8.value == "     " && turn == 1)
{
document.tic.sqr8.value = " O "
turn = 0
sqr8T = 1
}
else if(document.tic.sqr3.value == "     " && turn == 1)
{
document.tic.sqr3.value = " O "
turn = 0
sqr3T = 1
}
else if(document.tic.sqr7.value == "     " && turn == 1)
{
document.tic.sqr7.value = " O "
turn = 0
sqr7T = 1
}
else if(document.tic.sqr4.value == "     " && turn == 1)
{
document.tic.sqr4.value = " O "
turn = 0
sqr4T = 1
}
check2()
}

function reset()
{
document.tic.sqr1.value = "     "
document.tic.sqr2.value = "     "
document.tic.sqr3.value = "     "
document.tic.sqr4.value = "     "
document.tic.sqr5.value = "     "
document.tic.sqr6.value = "     "
document.tic.sqr7.value = "     "
document.tic.sqr8.value = "     "
document.tic.sqr9.value = "     "
sqr1T = 0
sqr2T = 0
sqr3T = 0
sqr4T = 0
sqr5T = 0
sqr6T = 0
sqr7T = 0
sqr8T = 0
sqr9T = 0
vari()
turn = 0
moveCount = 0
}

function resetter()
{
reset()
}