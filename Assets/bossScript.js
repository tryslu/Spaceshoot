#pragma strict
var bossSpeed: int;
var enemy : GameObject;

var bullet: Rigidbody;
static var bossLives: int;
static var shoot: int;

function Start () {
	bossLives=40;
	shoot=1;
		Destroy(initialAll.tempenemy);
		Destroy(initialAll.tempenemy2);
}

function Update () {
  //generate BOSS
 if(transform.position.x>5){
 		transform.position.x=4.99;
 		bossSpeed=bossSpeed*(-1);
 	 	}
 if(transform.position.x<-5){
 		transform.position.x=-4.99;
    	bossSpeed=bossSpeed*(-1);
 	}
  //BOSS move
  var amtToMove = bossSpeed * Time.deltaTime;
	 	transform.Translate(Vector3.right*amtToMove);
 
	//boss dead
	if(bossLives<=0){
		Destroy(gameObject);
		playerScript.playerScore=0;
		Application.LoadLevel("win");
	}
 //BOSS shoot
 	if(shoot>0 && bossLives>=20){	
 		shoot--;
		var tempbullet:Rigidbody;
		var pos:Vector3;
		pos=transform.position;
		
		pos.y-=1;
		tempbullet=Instantiate(bullet,pos, Quaternion(0,93.34488,0,0));
		pos.x+=1;
		tempbullet=Instantiate(bullet,pos, Quaternion(0,93.34488,0,0));
		pos.x-=2;
		tempbullet=Instantiate(bullet,pos, Quaternion(0,93.34488,0,0));
		pos.x+=1;}
	else if(shoot>0){
	shoot--;
		var tempPos:Vector3; 
		tempPos=transform.position;
			var i:int;
		for(i=0;i<9;i++){
			tempPos.x=Random.Range(-7,7);
			tempbullet=Instantiate(bullet,tempPos,Quaternion(0,93.34488,0,0));
			}
		}
	
}
function OnGUI(){
	
	GUI.Label(Rect(40,30,200,50),"BossLives"+bossLives);
	

}