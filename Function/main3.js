function count_Function() {
	document.getElementById("Counting").innerHTML = Count();
	function Count() {
		var Starting_point = 9;
		function Plus_one() {Starting_point += 1;}
		Plus_one ();
		return Starting_point;
	}
}
