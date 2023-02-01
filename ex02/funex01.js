// 메서드의 4가지 형태
function m1() {

}

function m2() {
    return 2;
}

function m3(a) { // 타입이 없다. 어떤 타입이 들어올 지는 들어오기 전까지는 모른다.
    console.log("앞에 m3");
}

let m4 = function(){}; // 익명함수 만들 수 있음

function m3(b, a, c) { // 개수 오버로딩 안됨
    console.log("뒤에 m3");
}

m3(1, 2);
m3(1, 2, 3);


let m5 = ()=>{};

let m6 = ()=>1;

let m7 = ()=>{ // m6랑 같다
    return 1;
}


function hello(a, b, c = 5) { // 선택적 매개변수
    console.log(a);
    console.log(b);
    console.log(a);
}

hello(1, 2);


// 자바 스크립트는 리턴타입이 있던 없던 function
// 리턴을 하고 싶으면 return 적어주면 된다.

// 자바스크립트 코드는 html코드 밑에 있어야 한다.

// static 변수는 클래스 안에서만 존재한다.

// 자바스크립트는 static영역이 없다 -> 클래스가 없기 때문
// let logo = function run(num) {
//     console.log(sum);
//     console.log(`${num}`);
//     return 10;
// }

// let result = run(1);

// 모든 1급객체는 변수에 담을 수 있다.

// 익명함수 - 함수명을 run으로 정의했지만 변수에 담는 순간 함수명은 변수명으로 바뀐다. 즉, run이라는 이름이 필요가 없어진다. run이름을 지워도 된다

let gogo = function run(num) {
    console.log(sum);
    console.log(`${num}`);
    return 10;
}

function hello(dddd) {
    dddd();
}

hello(gogo); // 가능

let result = run(1);
