//one way to define the javascript Object
var prasad={
    firstName:"Prasad",
    lastName:"Thakur",
    Profession:"Software Developer",
    isMarried:true,
    family:['Sadashiv','Snehal','Trupti','Saumya','Aruna','Aana','Shubham','Shardul']
};

//One way to access the javascript Object's properties
console.log(prasad.firstName+' is a '+prasad.Profession);

//one way to mutate Object
prasad.Profession="Java Developer";
console.log(prasad);

//another way to define Object
var trupti=new Object();
trupti.firstName="Trupti";
trupti.lastName="Thakur";
console.log(trupti);

//another way to mutate the object
trupti['lastName']="Desai";
console.log(trupti);

//another way to access the object property
console.log('My name is: '+trupti['firstName']+' '+trupti['lastName']);

//defining function expression inside the object
var saumya={firstName:"Saumya",
lastName:"Thakur",
birthYear:2009,
prefession:"Student",
ageCalculation: function(){//Function Expression
    this.age=2019-this.birthYear
}
};
saumya.ageCalculation();//Calling the function
console.log(saumya);//Logging it in console