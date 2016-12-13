#pragma strict
var enemy:GameObject;
var player:GameObject;
var boss:GameObject;
static var tempenemy; 
static var tempenemy2; 
static var flag:int;
function Start () {
	//generate a enemy;
	var i:int;
	var k:int;
	flag=0;
	i=Random.Range(-6.5,6.5);
	k=Random.Range(-3.5,3.5);
	tempenemy=Instantiate(enemy,Vector3(i,11,0),transform.rotation);
	tempenemy2=Instantiate(enemy,Vector3(k,11,0),transform.rotation);
	//generate a player
	Instantiate(player,Vector3(0,-5.5,0),transform.rotation);
	//generate a Boss;

	
}

function Update () {

	if(playerScript.playerScore>=5000 && flag==0){
		flag=1;
		Instantiate(boss,Vector3(1,6.5,0), Quaternion(150,0,0,0));
	}
}