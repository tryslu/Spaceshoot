#pragma strict
var playerSpeed : int;
var playerLives: int;
static var playerScore: int;
var bullet: Rigidbody;
var explosion: Transform;
static var count: int;



function Start () {
count=0;
}

function Update () {




/*你先設 count = 0
你嚇到了喔
public var count : int =0;
這設在外面
然後
var tempbullet:Rigidbody;
		tempbullet=Instantiate(bullet,transform.position,transform.rotation);
等一下

if(count>40){
var tempbullet:Rigidbody;
		tempbullet=Instantiate(bullet,transform.position,transform.rotation);
count=0;
}
count++;*/
	//playerMove
	var amtToMove =(playerSpeed * Input.GetAxis("Horizontal"))*Time.deltaTime;
	transform.Translate(Vector3.right * amtToMove);
	var xamtToMove =(playerSpeed * Input.GetAxis("Vertical"))*Time.deltaTime;
	transform.Translate(Vector3.up * xamtToMove);
	//Shoot

	if(Input.GetKeyDown("space") ){
	  var tempbullet:Rigidbody;
		tempbullet=Instantiate(bullet,transform.position,transform.rotation);
		}
	/* if(count>40){
		tempbullet=Instantiate(bullet,transform.position,transform.rotation);}
		count=0;*/
	//}
	//	count++;
	// Treat!!
	if(Input.GetKeyDown("z") ){
	//use tempPos to remb. the position player is!
		var tempPos:Vector3; 
		tempPos=transform.position;
		tempPos.x=-6;
		tempbullet=Instantiate(bullet,tempPos,transform.rotation);
		tempPos.x=-5;
		tempbullet=Instantiate(bullet,tempPos,transform.rotation);
		tempPos.x=-4;
		tempbullet=Instantiate(bullet,tempPos,transform.rotation);
		tempPos.x=-3;
		tempbullet=Instantiate(bullet,tempPos,transform.rotation);
		tempPos.x=-2;
		tempbullet=Instantiate(bullet,tempPos,transform.rotation);
		tempPos.x=-1;
		tempbullet=Instantiate(bullet,tempPos,transform.rotation);
		
		tempPos.x=0;
		tempbullet=Instantiate(bullet,tempPos,transform.rotation);
		tempPos.x=1;
		tempbullet=Instantiate(bullet,tempPos,transform.rotation);	
		
		tempPos.x=2;
		tempbullet=Instantiate(bullet,tempPos,transform.rotation);
		tempPos.x=3;
		tempbullet=Instantiate(bullet,tempPos,transform.rotation);
		
		tempPos.x=4;
		tempbullet=Instantiate(bullet,tempPos,transform.rotation);
		tempPos.x=5;
		tempbullet=Instantiate(bullet,tempPos,transform.rotation);
		
		tempPos.x=6;
		tempbullet=Instantiate(bullet,tempPos,transform.rotation);
		
		}
	/*
	if(playerScore>=1000){
		playerScore=0;
		Application.LoadLevel("win");
	}*/
	//playerLose
	if(playerLives<=0){
		playerScore=0;
		Application.LoadLevel("lose");
	}
	// playMove board
	if(gameObject.transform.position.x>=7){
		gameObject.transform.position.x=-6;
	}else if(gameObject.transform.position.x<=-7){
		gameObject.transform.position.x=6;
	}
	
}


function OnGUI(){
	GUI.Label(Rect(40,10,200,50),"Score: "+playerScore);
	GUI.Label(Rect(40,20,200,50),"Lives: "+playerLives); 
}

function OnTriggerEnter(otherObject: Collider){

if(otherObject.gameObject.tag=="enemy"){
	playerLives--;	
	
	otherObject.gameObject.transform.position.y=11;
	otherObject.gameObject.transform.position.x=Random.Range(-6.5,6.5);

	var tempExplosion:Transform;
		tempExplosion=Instantiate(explosion,transform.position,transform.rotation);
	
	}
if(otherObject.gameObject.tag=="boss"){
	playerLives--;
	Destroy(otherObject.gameObject);
	tempExplosion=Instantiate(explosion,transform.position,transform.rotation);
	//bossScript.shoot=1;
	}
}