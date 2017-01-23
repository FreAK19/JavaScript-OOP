//immitation method that immitate info from object People and make new object
// allAboutPeople
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
function allAboutPeople(profession,expirience,name,age,gender){
	this.base=People;
	this.base(name,age,gender);
	this.profession = profession;
	this.expirience = expirience || "I dont have any expirience";
	this.about = function(){
		document.write("My profession is: "+this.profession+"<br>");
		if (this.expirience = 1)
			document.write("Expirience: "+this.expirience+"year<br>");
		else
			document.write("Expirience: "+this.expirience+"years<br>");
	};
}
human1 = new allAboutPeople("front-ender",9,"Andrew",19,"femail");
human1.who();
human1.about();