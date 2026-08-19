let elems=document.querySelectorAll(".elem")
let fullElem=document.querySelectorAll(".fullElems")
let Backbutton=document.querySelectorAll(".fullElems .close")

//elem click structiure:user kisi bhi elem pr click krega to usko usi ka section dikhayi dega
function cardClickFunctionality(){
    elems.forEach((e)=>{
    e.addEventListener("click",(elem)=>{
        fullElem[elem.target.id].style.display="block"
    })
})
}
cardClickFunctionality()


//back button working:back button
function BackbuttonFunc(){
    Backbutton.forEach((e)=>{
    e.addEventListener("click",(elem)=>{
    fullElem[elem.target.id].style.display="none"
})
})
}
BackbuttonFunc()


function todo(){
    let allTasks=JSON.parse(localStorage.getItem('allTasks')) || []


//allTasks array me jo bhi data aayega usko ui me render kr dega ye function
function renderTask(){
    let allTask=document.querySelector(".allTask")
let sum=""
allTasks.map((e,idx)=>{
    sum=sum+`<div class="task">
                        <p>${e.title}</p>
                        <details>
                            <summary>details</summary>
                            <p>${e.desc}</p>
                        </details>
                        ${e.imp?`<span>imp</span>`:""}
                        <button id=${idx}>Mark as Completed</button>
                    </div>`
                   
})
allTask.innerHTML=sum
taskCompleteFn()
}
renderTask()



function setArrayDataToStorage(){
    localStorage.setItem('allTasks',JSON.stringify(allTasks))
}


//task form handling:form submit krne pr new data ko array me push kr dega
function formHandle(){
    let submitForm=document.querySelector(".todo-container .addTask form")
let TaskInput=document.querySelector(".todo-container .addTask form #input")
let TaskDetails=document.querySelector(".todo-container .addTask form textarea")
let taskImportant=document.querySelector(".todo-container .addTask form #check")

submitForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    allTasks.push({title:TaskInput.value,desc:TaskDetails.value,imp:taskImportant.checked})
    setArrayDataToStorage()
    TaskInput.value=""
    TaskDetails.value=""
    taskImportant.checked=false
    renderTask()
})
}
formHandle()

//task delete func isko hm yha nhi blki jha pr hm data ko map kr rhe he vha call krege kyoki 
function taskCompleteFn(){
    let TaskCompleteButton=document.querySelectorAll(".task button")
TaskCompleteButton.forEach((e)=>{
        e.addEventListener('click',(el)=>{
            console.log(el.target.id)
            allTasks.splice(el.target.id,1)
            setArrayDataToStorage()
            renderTask()
        })
})
}
}
todo()


























































































