let n1 = 1; // 정수
let d1 = 1.5; // 실수
let b1 = true; // 불리언
let c1 = "가"; // 문자
let arr = [1, 2, "가"]; // let arr = []; 배열 선언
let user = {  // 오브젝트
    id: 1,
    username:"ssar",
    email:"ssar@nate.com",
    hobby:["농구", "축구"],
    account:{
        id:1122,
        password:8087,
        balance:50000
    }
};

console.log(`n1값은 ${n1} 입니다.`); // 백틱을 쓰면 사이에 변수를 바인딩 할 수 있다
console.log(`d1값은 ${d1} 입니다.`);
console.log(`b1값은 ${b1} 입니다.`);
console.log(`c1값은 ${c1} 입니다.`);
console.log(`arr[0]값은 ${arr[0]} 입니다.`);
console.log(`arr[1]값은 ${arr[1]} 입니다.`);
console.log(`arr[2]값은 ${arr[2]} 입니다.`);
console.log(`user.id값은 ${user.id} 입니다.`);
console.log(`user.username값은 ${user.username} 입니다.`);
console.log(`user.email값은 ${user.email} 입니다.`);
console.log(`user.hobby[0]값은 ${user.hobby[0]} 입니다.`);
console.log(`user.hobby[1]값은 ${user.hobby[1]} 입니다.`);
console.log(`user.account.id값은 ${user.account.id} 입니다.`);
console.log(`user.account.password값은 ${user.account.password} 입니다.`);
console.log(`user.account.balance값은 ${user.account.balance} 입니다.`);