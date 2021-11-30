
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;
var ball;
var block1,block2;
var rotator1,rotator2,rotator3;
var plane;
var particle1,particle2,particle3,particle4,particle5


function setup() {
	createCanvas(400,400);


		engine = Engine.create();
		world = engine.world;

		var plane_option ={

			isStatic: true
		}

	//Crie os Corpos aqui.

			plane = Bodies.rectangle(200,395,400,20,plane_option);
			World.add(world,plane);

			block1 = Bodies.rectangle(100,100,100);
			World.add(world,block1);

			block2 = Bodies.rectangle(300,100,100);
			World.add(world,block2);




			var rotator1_option ={

				isStatic: true
			}

			rotator1 = Bodies.rectangle(250,200,150,120,rotator1_option);
			World(world,rotator1);


			var rotator2_option ={

				isStatic: true
			}

			rotator2 = Bodies.rectangle(250,200,150,120,rotator2_option);
			World(world,rotator2);


			var rotator3_option ={

				isStatic: true
			}

			rotator3 = Bodies.rectangle(250,200,150,120,rotator3_option);
			World(world,rotator3);



			Matter.Body.rotate(rotator1,angle1);
			push();
			translate(rotator1.position.x,rotator1.position.y);
			rotate(angle1);
			rect(0,0,150,20);
			pop();
			angle1 += 0.2;

			Matter.Body.rotate(rotator2,angle2);
			push();
			translate(rotator2.position.x,rotator2.position.y);
			rotate(angle2);
			rect(0,0,150,20);
			pop();
			angle2 += 0.3;

			Matter.Body.rotate(rotator3,angle3);
			push();
			translate(rotator3.position.x,rotator3.position.y);
			rotate(angle3);
			rect(0,0,150,20);
			pop();
			angle3 += 0.4;



			var particle1_option ={
				restitution:0.4,
				friction:0.02

			}

			particle1 = Bodies.circle(220,10,10,particle1_option);
			World.add(world,particle1);

			var particle2_option ={
				restitution:0.4,
				friction:0.02

			}

			particle2 = Bodies.circle(220,10,10,particle2_option);
			World.add(world,particle2);


			var particle3_option ={
				restitution:0.4,
				friction:0.02

			}

			particle3 = Bodies.circle(220,10,10,particle3_option);
			World.add(world,particle3);


			var particle4_option ={
				restitution:0.4,
				friction:0.02

			}

			particle4 = Bodies.circle(220,10,10,particle4_option);
			World.add(world,particle4);


			var particle5_option ={
				restitution:0.4,
				friction:0.02

			}

			particle5 = Bodies.circle(220,10,10,particle5_option);
			World.add(world,particle5);




	Engine.run(Engine);
  
}


function draw() {
background("yellow");
Engine.update(engine)
  
	

	fill("red")
	rectMode(CENTER);
	rect(block1.position.x,block1.position.y,100);

	fill("red")
	rectMode(CENTER);
	rect(block2.position.x,block2.position.y,100);

	fill("red")
  	rectMode(CENTER);
  	rect(plane.position.x,plane.position.y,400,20);

	

	ellipeseMode(CENTER);
	ellipse(particle1.postion.x,particle1.position.y,10);

	ellipeseMode(CENTER);
	ellipse(particle2.postion.x,particle2.position.y,10);

	ellipeseMode(CENTER);
	ellipse(particle3.postion.x,particle3.position.y,10);

	ellipeseMode(CENTER);
	ellipse(particle4.postion.x,particle4.position.y,10);

	ellipeseMode(CENTER);
	ellipse(particle5.postion.x,particle5.position.y,10);

  
  
  
 
}



