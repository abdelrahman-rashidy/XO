var frName;
var ndName;
var clicks = 0 ;
function starting()
{
	frName = document.getElementById("fr-name").value;
	ndName = document.getElementById("nd-name").value;
	if((frName == "X" && ndName == "O") || (ndName == "X" && frName == "O"))
	{
		var names = document.getElementsByName("userName[]");
		for (var i = 0 ; i < names.length ; i++)
		 	names[i].disabled=true;

		var dos = document.getElementsByName("b[]");
		for(var i = 0 ; i < dos.length ;i++ )
		{
			dos[i].value = (i+1);
	 		dos[i].disabled=false;
		}
	}
	else
	{
		alert("your names have some mistake");
	}
}
function XO(x) 
{
	x.disabled = true;
	if (clicks%2 == '0')
		x.value = frName;
	else
		x.value = ndName;

	if(win() == true)
	{
		alert("Player " + ((clicks%2)+1) + " Win!");
		starting();
	}

	if(Tie() == true)
	{
		alert("Game Over");
		starting();

	}

	clicks++;

 }
 function win()
 {
    var dos = document.getElementsByName("b[]");
	for(var i = 0 ; i < dos.length ;i+=3 )
	{
		// ---
		if(dos[i].value == dos[i+1].value && dos[i+1].value == dos[i+2].value)
			return true;
	}
	for (var i = 0 ; i < 3 ; i++){
		// |||
		if(dos[i].value == dos[i+3].value && dos[i+3].value == dos[i+6].value)
			return true;
	}

	if (dos[0].value == dos[4].value && dos[4].value == dos[8].value)
		return	true;

	if (dos[2].value == dos[4].value && dos[4].value == dos[6].value)
		return  true;

	return false;
}

 function Tie()
 {
    var dos = document.getElementsByName("b[]");
	for(var i = 0 ; i < dos.length ;i++ )
	{
		if(dos[i].value != 'X' || dos[i].value != 'O')
			return false;
	}

	return true;
}
