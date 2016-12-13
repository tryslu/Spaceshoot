#pragma strict
var enemySpeed: int;
function Start () {

}

function Update () {
	var amtToMove = enemySpeed * Time.deltaTime;
 	transform.Translate(Vector3.down*amtToMove);
 if(transform.position.y<=-5){
 	transform.position.y =11;
 	//enemySpeed+=1;
 	transform.position.x=Random.Range(-6.5,6.5);
 	
 	}
}
