class Person{
    // Constructor
    constructor(name,lastName,age,weight,height,nationality){
        this.nombre = name;
        this.apellido = lastName;
        this.edad = age;
        this.peso = weight;
        this.altura = height;
        this.nacionalidad = nationality;
    }

    // Métodos
    calcIMC(){
        return Math.floor((this.peso / Math.pow(this.altura,2))*10000);
    }
}