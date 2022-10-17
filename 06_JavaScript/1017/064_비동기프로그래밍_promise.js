/*
new Promise((resolve, reject) => {
        //code
    })
    .then(result => result)
    .then(result => result)
    .catch(err => err)
    .finally(result => result)
*/

// - pending(대기상태) - resolve(해결) - fulfilled(성공)
// - pending(대기상태) - reject(거부) - rejected(실패)

// 중요!

// resolve
let p = new Promise(function(resolve, reject){
    // 비동기적으로 실행될 code 작성
    resolve('hello world')
}).then(메시지 => {
    alert(메시지)
    return 메시지.split(' ')[0]
}).then(메시지 => {
    alert(메시지)
    return 메시지[0]
}).then(메시지 => {
    alert(메시지)
    return 메시지
})

// reject
let p = new Promise(function(resolve, reject ) {
        // 비동기적으로 실행될 code 작성
        reject('hello world')
    }).then(메시지 => {
        alert(메시지)
        return 메시지.split(' ')[0]
    }).then(메시지 => {
        alert(메시지)
        return 메시지[0]
    }).then(메시지 => {
        alert(메시지)
        return 메시지
    }).catch(메시지 => {
        alert('catch 실행!!')
    })

// resolve인데 중간에 error가 던져졌을 때
let p = new Promise(function(resolve, reject){
    // 비동기적으로 실행될 code 작성
    resolve('hello world')
}).then(메시지 => {
    alert(메시지)
    return 메시지.split(' ')[0]
}).then(메시지 => {
    alert(메시지)
    throw Error('Error 발생! 경고경고!')
    return 메시지[0]
}).then(메시지 => {
    alert(메시지)
    return 메시지
}).catch(메시지 => {
    console.log(메시지)
    alert('catch 실행!!')
})
    
    
// 예제를 위한 예제, 이런식으로 처리 X
let p = new Promise(function(resolve, reject){
    // 비동기적으로 실행될 code 작성
    resolve('hello world')
}).then(메시지 => {
    alert(메시지)
    return 메시지.split(' ')[0]
}).then(메시지 => {
    alert(메시지)
    throw Error('Error 발생! 경고경고!')
    return 메시지[0]
}).then(메시지 => {
    alert(메시지)
    return 메시지
}).catch(메시지 => {
    console.log(메시지)
    alert('catch 실행!!')
}).then(메시지=>{
    alert('catch 이후에 then')
    throw Error('Error 발생! 경고경고!')
}).catch(메시지 => {
    console.log(메시지)
    alert('catch 이후에 then 이후에 catch 실행!!')
})

console.log(p)

// 일부러 시간이 좀 걸리게 작업해봅니다
// 처리시간 동안은 pending 상태였다가 fulfilled로 변경된다
let p = new Promise(function(resolve, reject) {
    setTimeout(()=>resolve('끝났다!'), 5000)
})

console.log('hello world');
console.log(p);

// 5초 후에
console.log(p);


// 실행하지 말기! 무한 pending 상태에 빠진다
// let p = new Promise(function(resolve, reject) {
    console.log('hello world')
}).then(d => console.log(d))


// finally
let p = new Promise(function(resolve, reject){
    // 비동기적으로 실행될 code 작성
    resolve('hello world')
}).then(메시지 => {
    alert(메시지)
    return 메시지.split(' ')[0]
}).then(메시지 => {
    alert(메시지)
    throw Error('Error 발생! 경고경고!')
    return 메시지[0]
}).then(메시지 => {
    alert(메시지)
    return 메시지
}).catch(메시지 => {
    console.log(메시지)
    alert('catch 실행!!')
}).finally(메시지 => {
    alert('catch 이후에 then - finally') // but 관습적으로 마지막에 쓰는 것이지 뒤에 이어붙이는 것이 안되는 것은 아니다
    throw Error('Error 발생! 경고경고!')
}).then(메시지=>{
    alert('catch 이후에 then') 
    throw Error('Error 발생! 경고경고!')
}).catch(메시지 => {
    console.log(메시지)
    alert('catch 이후에 then 이후에 catch 실행!!')
})

// 우리가 뒤에서 배울 async나 fetch도 Promise를?!
let test = async function() {
    return 'hello world'
}

test // 출력
test() // promise {<fulfilled>: 'hello world'}

let data = fecth('http://test.api.weniv.co.kr/mall')
data // 출력

fetch('http://test.api.weniv.co.kr/mall')
    .then(메시지 => {
        console.log(메시지)
        return 메시지   
    })
    .then(메시지 => {
        console.log(메시지.json())
    })

    