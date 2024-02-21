function nice(name){//func nameoffunc (parameter)
    console.log( "the " + name + " is bhadwa")
}
nice("suheel")//called func and parameter is suheel
nice("adnan")//called func and parameter is suheel

function sum(a , b, c=10) {
    // console.log(a+b)//normal func
    return a+b+c;//return value of the func
}
result1 = sum(2,8)//sum is returned  to result varibale
result2 = sum(2,3,5)//here the c is overridden 
console.log("The sum is " ,result1 , result2)

const func =(x)=>{//here the func is a function as well as a variable , the use of this arrow func is to make a func passable to another function.
    console.log("i am an arrow func",x)
}
func(69)
func(20)