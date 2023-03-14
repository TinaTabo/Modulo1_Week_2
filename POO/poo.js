//-- Clases
class Person{
    //-- Constructor
    constructor(name,lastName,age,weight,height,nationality,yearOfBirth){
        //-- Atributos
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.weight = weight;
        this.height = height;
        this.nationality = nationality;
        this.yearOfBirth = yearOfBirth;
    }

    //-- Métodos
    calcIMC(){
        return Math.floor((this.weight / Math.pow(this.height,2))*10000);
    }

    calcAge(){
        let date = new Date();
        return date.getFullYear() - this.yearOfBirth;
    }
}


