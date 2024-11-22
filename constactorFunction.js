function Person(name,age){
    this.name=name
    this.age=age
    this.greet= function(){
        console.log(`${this.name} and ${this.age}`);
        
    }
}

const person1=new Person('mueen',20)
const person2=new Person('asli',20)

person1.greet()
person2.greet()