let startPosition = Math.floor(Math.random() * 5);
let loc1 = startPosition;
let loc2 = loc1 + 1;
let loc3 = loc2 + 1;
let choice;
let hits = 0;
let tries = 0;
let gameStatus = false;
let stats;
let a = 0;
let b = 0;
let c = 0;

while (gameStatus == false) {
	choice = prompt("В 7 ячейках по горизонтали (0-6) расположен 3-ёх палубный корабль врага. Твоя задача потопить его за меньшее кол-во попыток. (введи число 0-6)");
	if (choice >= 0 && choice <= 6 ) {
		if (a == 1 && choice == loc1 ) {
			alert("Сюда уже стреляли, выбери другое значение");
			continue;
		} else if (b == 1 && choice == loc2 ) {
			alert("Сюда уже стреляли, выбери другое значение");
			continue;
		} else if (c == 1 && choice == loc3 ) {
			alert("Сюда уже стреляли, выбери другое значение");
			continue;
		}
		if (choice == loc1 || choice == loc2 || choice == loc3) {
			if (choice == loc1 && a == 0) {
				alert("Есть попадание"); 
				a = 1;
				tries = tries + 1;
			} 
			if (choice == loc2 && b == 0) {
				alert("Есть попадание");
				b = 1;
				tries = tries + 1;
			} 
			if (choice == loc3 && c == 0) {
				alert("Есть попадание");
				c = 1;
				tries = tries + 1;
			} 
			if (a == 1 && b == 1) {
				if (c == 1) {
					gameStatus = true;
					alert("Корабль потоплен");
					stats = "Ты справился за " + tries + " попыток. Твоя точность равна " + (3 / tries);
					alert(stats);
				}
			} 
		}  else {
			alert("Мимо");
			tries = tries + 1;
		}
	} else {
		alert("Введи число в диапазоне 0-6");
	}
}