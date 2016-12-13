#pragma strict

function Start () {

}

function Update () {

}

function OnGUI(){
	var instructionText="Victory!!!!!!!!!";
	
	GUI.Label(Rect(40,20,300,200),instructionText);
	
	if(GUI.Button(Rect(40,60,100,50),"Press to Menu")){
		Application.LoadLevel("Menu");
	}
	
}