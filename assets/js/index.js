// ------------------- LV 1 LOOP ---------------------
// for (var i = 0; i < 5; i++) {
//   star = ""
//   for (var j = 0; j <= i; j++) {
//     star += "*"
//   }
//   console.log(star)
// }

// ---------- LV 1
// for (var i = 0; i < 5; i++) {
//   star = ""
//   for (var j = 4; j >= i; j--) {
//     star += "*"
//   }
//   console.log(star)
// }

// // ------------- LV 2
// let number = 5
// for (var i = 0; i < number ; i++) {
//   star = ""
//   for (var j = number ; j > i; j--) 
//   {
//     star += "k"
//   }
//   for (var k = 0; k <= i*2 ; k++) 
//   {
//     star+="*"
//   }
//   console.log(star)
// }

// ---------------- LV 3
// let number = 5
// for (var i = 0; i < number; i++) {
//   star = ""
//   for (var j = 0; j <= i; j++) {
//     star += " "
//   }
//   for (var k = 0; k <= 2; k++) {
//     star += "*"
//   }
//   star += number-i
//   console.log(star)
// }

// ---------------- LV 4

// let number = 9
// for (var i = number; i > 0; i--) {
//   star = ""
//   for (var j = number; j >= i; j--) {
//     star += " "
//   }
//   for (var k = 1; k < i * 2; k++) {
//     star += "*"
//   }
//   console.log(star)
// }

// ----------------- LV 5
var length = 5
for (var i = length - 1; i >= 0; i--) {
	var text = ''
	for (var j = 0; j <= i + 2; j++) {
		if (j >= 2) {
			text = text + (i + 2)
		} else {
			text = text + i
		}
	}

	console.log(text)
}
