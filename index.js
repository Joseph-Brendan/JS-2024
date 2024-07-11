const postTextarea = document.getElementById("post")
const nameInputField = document.getElementById("username")
const form = document.getElementById("form")
const container = document.getElementById("posts-container")

let arrayOfUserPostObjects = []

// Collect Data From the form, structure and keep it in an array
form.addEventListener("submit", function(event){
    event.preventDefault()

    let postFromForm = postTextarea.value 
    let nameFromForm = nameInputField.value

    const userPostRecord = {
        postFromUser : postFromForm,
        nameOfUser : nameFromForm
    }
    arrayOfUserPostObjects.push(userPostRecord)
    form.reset()
    printToTheUI()
})


// Collect Data From Array And Print it on the UI
function printToTheUI(){
    container.innerHTML = ` `
    arrayOfUserPostObjects.forEach(function(item){
        let userPOST = item.postFromUser
        let userNAME = item.nameOfUser

        let postElement = document.createElement('h3')
        postElement.textContent = userPOST

        let nameElement = document.createElement("p")
        nameElement.textContent = userNAME

        container.append(postElement, nameElement)
    })
}