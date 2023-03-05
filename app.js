var skip= confirm("do you wanat to skip the welcoming alert ?");

let myArr =[];
var userName ;
var gender;
var age;

function getName(){
    //debugger;
    userName = prompt("Please enter your name !");
    if(userName == ''){
        return 'invalid';
    }else{
        return userName;
    }
}
function getAge(){
    //debugger;
    age =prompt("Enter your age ");
    if(age <=0 ){
        alert ("you age should not be less or equal than 0");
       getAge();
    }else{
        return age;
    }

}

function getGender(name){
    //debugger;
    gender =prompt("what is your gender (Male/ Female)");
    if( gender == "male" || gender =="Male"){
        alert ("Welcome to my page  Mr " +userName );
    }else if (gender =="female" || gender =="female"){
        alert("Welcome to my page Ms " +userName)
    }else{
        alert("Welcome to my page " +userName)
    }
}
function justQuestions(){
    //debugger;
    var questionOne=prompt("did you like My website ?");
    if (questionOne ==""){
             questionOne ="invlidString!";
    }{
        myArr[0]=questionOne;
    }

    var questionTwo=prompt("did you finish your tasks today ?");
    if (questionTwo ==""){
                 questionTwo ="invlidString!";
                 
             }{
                myArr[1]=questionTwo;

             }
    var questionThree=prompt("did you know how to program ?");
    if (questionThree ==""){
                questionThree ="invlidString!";
     }{
        myArr[2]=questionThree;
     }
     return myArr;
}

function printArray(Arr){
    for(let i =0;i<Arr.length;i++){
        console.log(Arr[i]);
    }
}
function welcomeMessage(){
    //debugger;
    if (skip ==false){
        getName();
        getAge();
        getGender(userName);
        justQuestions();
        printArray(myArr);
    }
}{
    console.log("Client skip the welcoming alert!!");
}
welcomeMessage();






