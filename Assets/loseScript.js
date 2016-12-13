#pragma strict

function Start () {

}

function Update () {

}
function OnGUI(){
	var instructionText="Game Over!!!!!!!!!";
	
	GUI.Label(Rect(40,10,300,200),instructionText);
	
	if(GUI.Button(Rect(40,60,100,50),"Continue")){
		Application.LoadLevel("level1");
	}
	
}