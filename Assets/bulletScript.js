﻿#pragma strict
var bulletSpeed: int;


var explosion: Transform;


function Start () {

}

function Update () {
var amtToMove = bulletSpeed * Time.deltaTime;
transform.Translate(Vector3.up *amtToMove);

if(transform.position.y>=8){
	Destroy(gameObject);
}
}


function OnTriggerEnter(otherObject: Collider){

if(otherObject.gameObject.tag=="enemy"){
	playerScript.playerScore+=100;	
	
	otherObject.gameObject.transform.position.y=7;
	
	otherObject.gameObject.transform.position.x=Random.Range(-6.5,6.5);
	var tempExplosion:Transform;
	tempExplosion=Instantiate(explosion,transform.position,transform.rotation);
	
	Destroy(gameObject);
}
else if(otherObject.gameObject.tag=="boss")
{	
	bossScript.bossLives--;
	tempExplosion=Instantiate(explosion,transform.position,transform.rotation);
	Destroy(gameObject);
	
	
}
	
}