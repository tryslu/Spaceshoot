#pragma strict
var bulletSpeed: int;
function Start () {

}

function Update () {
var amtToMove = bulletSpeed * Time.deltaTime;
transform.Translate(Vector3.down *amtToMove);

if(transform.position.y<=-6){
	
	bossScript.shoot=1;
	Destroy(gameObject);
 }
}


