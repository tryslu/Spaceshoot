#pragma strict

function Start () {

}

function Update () {

}

function OnGUI(){
	var instructionText="Instructions\nPress ← and → to move\nPress Spacebar to fire\nIf you got 1000 Score there will be a boss inside!";
	
	GUI.Label(Rect(40,10,300,200),instructionText);
	
	if(GUI.Button(Rect(40,80,200,100),"Start Game")){
		Application.LoadLevel("level1");
	}
	
}