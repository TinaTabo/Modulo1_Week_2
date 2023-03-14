//-- Clases
class Person{
    //-- Constructor
    constructor(name,lastName,weight,height,nationality,yearOfBirth,hobbies=[]){
        //-- Atributos
        this.name = name;
        this.lastName = lastName;
        this.weight = weight;
        this.height = height;
        this.nationality = nationality;
        this.yearOfBirth = yearOfBirth;
        this.hobbies = hobbies;
    }

    //-- Métodos
    calcIMC(){
        let imc = (this.weight / Math.pow(this.height,2))*10000;
        return Number(imc.toFixed(2));
    }

    calcAge(){
        let date = new Date();
        return date.getFullYear() - this.yearOfBirth;
    }

    printAll(){
        for (const attribute in this) {
            console.log(`${attribute}-${this[attribute]}`);
        }
    }

    printHobbies(){
        console.log(`Estos son los hobbies de ${this.name}:`);
        for (const hobbie in this.hobbies) {
            console.log(this.hobbies[hobbie]);
        }
    }
}


//-- Pruebas
let hobbies = ["comer","videojuegos","leer","kdramas"];
let persona = new Person('Olivia','Fernandez',75,165,'Española',1998,hobbies);

let imc = persona.calcIMC();
console.log(`IMC = ${imc}`);

let edad = persona.calcAge();
console.log(`${persona.name} tiene ${edad} años.`);

persona.printAll();

persona.printHobbies();