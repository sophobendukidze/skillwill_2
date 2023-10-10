// დავალება 1

const arr = [
    {
        name: 'Temo',
        age: 25
    },
    {
        name: 'Lasha',
        age: 21
    },
    {
        name: 'Ana',
        age: 28
    }
];


function getOnldestUser(arr){
    let minUser = arr[0];
    for(let i = 1; i < arr.length; i++){
        if( arr[i].age < minUser.age ) {
            minUser = arr[i];
        }
    }

    return minUser.name;
}

console.log(getOnldestUser(arr));



//დავალება 2

const user = {
    name: 'Nino',
    age: 26,
    birthDay: '25.22.1997'
}

function copyObject(obj){
    return {
        ...obj
    };
}



const user2 = copyObject(user);
user2.age = 92;

console.log(user, user2);


//დავალება 3


function randomGame(){

    let a = 0;
    let b = 0;

    while(a == 0 && b==0){
        const randA = Math.floor(Math.random() * 6) + 1;
        console.log("a გააგორა " + randA);
        if(randA == 3 & b == 0){
            a++;
        }
        const randB = Math.floor(Math.random() * 6) + 1;
        console.log('b გააგორა ' + randB);
        if(randB == 3 & a == 0){
            b++;
        }
    }
    if(a > 0){
        console.log('გამარჯვებულია a');
    }else if(b>0){
        console.log('გამარჯვებულია b');
    }else{
        console.log('ჯერ არ გვყავს გამარჯვებული');
    }
    
}

randomGame();