const notesContainer = document.querySelector(".NotesContainer")
const noteTitle = document.querySelector(".NoteTitleInput")
const noteContent = document.querySelector(".NoteContentInput")
const noteSubmitBtn = document.querySelector(".NoteSubmitBtn")
const noteForm = document.querySelector(".NoteForm")
var notes = []
function display() {
    notesContainer.innerHTML = '';
    notes = JSON.parse(localStorage.getItem("Notes")) || [];
    const saveNote= document.createElement("h1")
    saveNote.textContent = "Saved Notes"
    notesContainer.append(saveNote)
    notes.forEach((note, index) => {
        const title = document.createElement("h2")
        title.textContent = note.title;

        const content = document.createElement('h3')
        content.textContent = note.content;

        const deletebtn = document.createElement("button")
        deletebtn.textContent = "Delete"
        deletebtn.onclick = () => {
            notes.splice(index, 1);
            localStorage.setItem("Notes", JSON.stringify(notes))
            display()
        }
        notesContainer.append(title)
        notesContainer.append(content)
        notesContainer.append(deletebtn)
    })
    if (notes.length >= 3) {
        const deleteallbtn = document.createElement("button")
        deleteallbtn.textContent = "Delete All Notes"
        notesContainer.append(deleteallbtn)
        deleteallbtn.onclick = () => {
            localStorage.removeItem("Notes")
            deleteallbtn.remove()
            display()
        }
    }

}

noteForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const title = noteTitle.value
    const content = noteContent.value
    notes.push({ title, content })
    localStorage.setItem("Notes", JSON.stringify(notes))
    noteForm.reset()
    display()
})

display()