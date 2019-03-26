function controleer (tafel) {
	let goed = 0;
	let fout = 0;
  for (i = 1; i <= 10; i++) {
    let som = document.getElementById("som" + i)
    if (som.value == i * tafel) {
      som.style.background = "green"
	  goed++
	  
    } else {
      som.style.background = "red"
	  fout++
    }
  }
  document.getElementById("result").innerHTML = ("Je hebt " + goed + " antwoord(en) goed & " + fout + " antwoord(en) fout <br>" )
  if (goed > 5){
	  document.getElementById("result").innerHTML += ("Goed gedaan!");
  }
  else{
	   document.getElementById("result").innerHTML += ("Blijf verder oefenen! <br><br>");
	   document.getElementById('result').innerHTML += '<a href="oefenblad.html" id="button" role="button">Ga naar oefenbladen</a>'
  }
}
	