const shifumiButtons = document.getElementsByClassName("shifumi");
let playerPoints = 0;
let botPoints = 0;
let game = true;

for (let i=0;i<shifumiButtons.length;i++) {
	shifumiButtons[i].addEventListener("click", function () {
		const player = shifumiButtons[i].id;
		const bot = shifumiButtons[Math.floor(Math.random()*3)].id;
		
		let result = "";
		
		if (game) {
			if (player === bot) {
				result = "DRAW";
			} else if ((player === "rock" && bot === "scissors") || (player === "paper" && bot === "rock") || (player === "scissors" && bot === "paper")) {
				result = "WINNED";
			} else {
				result = "LOST";
			}
			
			if (result === "WINNED") playerPoints++;
			else if (result === "LOST") botPoints++;
			document.getElementById("result_block").innerHTML = "<p>(You) " + player[0].toUpperCase() + player.slice(1) + " VS " + bot[0].toUpperCase() + bot.slice(1) + " (Bot)</p><p id=\"result\"> You " + result + "</p>";
			document.getElementById("points_block").innerHTML = "<p>(You) <span id=\"score\">" + playerPoints + " - " + botPoints + "</span> (Bot)</p>";
			
			if (playerPoints === 10) {
				document.getElementById("end_block").innerHTML = "<h4>WIN</h4></br><button id=\"reset\" onclick=\"javascript:location.reload();\">Reset</button>";
				game = false;
			} else if (botPoints === 10) {
				document.getElementById("end_block").innerHTML = "<h4>LOSE</h4></br><button id=\"reset\" onclick=\"javascript:location.reload();\">Reset</button>";
				game = false;
			}
		}
	});
}