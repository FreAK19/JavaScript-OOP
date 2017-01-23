//Create the constructor method that create new method who() that show 
//main info about People object
function People(name,age,gender){
	this.name = name;
	this.age = age;
	this.gender =gender;
	this.who = function who(){
		document.write("Hello, my name is "+this.name+"<br>");
		document.write("My age is "+this.age+"<br>");
		document.write("Gender: "+this.gender+"<br>");
		}
}
human1 = new People("Andrew",19,"femail");
human1.who();
