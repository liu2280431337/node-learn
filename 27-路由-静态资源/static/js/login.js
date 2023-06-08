var ologin = document.querySelector('#login')
var ologinpost = document.querySelector('#loginpost')
var username = document.querySelector('#username')
var password = document.querySelector('#password')

ologin.onclick = () => {
    // console.log(username.value, password.value)
    // get
    fetch(`/api/login?username=${username.value}&password=${password.value}`)
        .then(res => res.text())
        .then(res => {
            console.log(res)
        })
}
ologinpost.onclick = () => {
    // console.log(username.value, password.value)
    // post
    fetch(`/api/loginpost`, {
        method: 'POST',
        body: JSON.stringify({
            username: username.value,
            password: password.value
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.text()).then(res => {
        console.log(res)
    })
}