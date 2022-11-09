//create user class
class User{
    constructor(email, fname, lname){
        this.email = email;
        this.fname = fname;
        this.lname = lname;
    }
}

//user class

class Register{
    static displayUsers(){
        const createdUsers = []
        const users = createdUsers;

        users.forEach((user) => Register.addUserToList(user))
    }
    static addUserToList(user){
        let list = document.querySelector("#user-list")

        let row = document.createElement("tr")
        row.innerHTML = `
        <td class = 'table-fname'> ${user.fname}</td>
         <td class = 'table-lname'> ${user.lname}</td>
         <td class = 'table-email'> ${user.email}</td>
         <td> <a href="#" class="edit"> Edit </a></td>
         <td> <a href="#" class="delete"> Delete </a></td>
         `

        list.appendChild(row)
    }


static clearField(){
    document.querySelector("#fname").value = ''
    document.querySelector("#lname").value = ''
    document.querySelector("#email").value = ''

}

static editUser(el){
    let tableFname = document.querySelector(".table-fname").innerHTML
    let tableLname = document.querySelector(".table-lname").innerHTML
    let tableEmail = document.querySelector(".table-email").innerHTML


if (el.classList.contains('edit')){
    document.querySelector("#fname").value = tableFname;
    document.querySelector("#lname").value = tableLname;
    document.querySelector("#email").value = tableEmail
}
el.parentElement.parentElement.remove()

}
}

document.addEventListener("RegisterContentLoaded", Register.displayUsers())

document.querySelector("form").addEventListener('submit', (submit => {
    submit.preventDefault()

    const fname = document.querySelector("#fname").value
    const lname = document.querySelector("#lname").value
    const email = document.querySelector("#email").value

    if (fname === '' || lname === '' || email === ''){
        alert ("Enter required details")
    }else {
        const user = new User(fname,lname,email)
        Register.addUserToList(user)
        Register.clearField()
    }
}))

let allusers = document.querySelectorAll(".delete")
let newusers = [...allusers]
newusers.filter(item => {
    item.addEventListener('click', (item,i)=>{
        let itemIndex = newusers.indexOf(item)
        if (itemIndex !== -1){
            newusers.splice(itemIndex, 1)
        }
    })
})

document.querySelector("#user-list").addEventListener("click", clicked =>{
    Register.editUser(clicked.target)
})