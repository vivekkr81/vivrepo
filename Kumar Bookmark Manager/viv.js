const addbookmarkbtn = document.querySelector(".addbookmarkbtn");
const bookmarkinputname = document.querySelector(".bookmarkinputname");
const bookmarkinputurl = document.querySelector('.bookmarkinputurl');
const Bookmarkscontainer = document.querySelector(".Bookmarkscontainer");
const bookmarkform = document.querySelector(".bookmarkform");
const deleteallbtn = document.createElement("button");
var bookmarks = []
function display() {
  bookmarks = JSON.parse(localStorage.getItem("Bookmarks")) || [];  //fetch data from localstorage 
  Bookmarkscontainer.innerHTML = ''

   //create elements for each element of array
  bookmarks.forEach((obj, index) => {                             
    const anchor = document.createElement("a")
    const li = document.createElement("li")

    //delete button to delete the left side bookmark
    const deletebtn = document.createElement("button")
    deletebtn.onclick = () => {
      bookmarks.splice(index, 1)
      localStorage.setItem("Bookmarks", JSON.stringify(bookmarks));
      display()
    }
    deletebtn.textContent = "Delete"          
    anchor.href = obj.bookmarkurl;
    anchor.target = "_blank"                 
    anchor.textContent = obj.bookmarkname;
    li.append(anchor)
    li.append(deletebtn)
    Bookmarkscontainer.append(li)
  })
  
  //delete button to delete all bookmarks at once
  if (bookmarks.length >= 1) {
    deleteallbtn.textContent = "Delete All Bookmarks";    
    Bookmarkscontainer.after(deleteallbtn)
    deleteallbtn.addEventListener("click", () => {
      localStorage.removeItem("Bookmarks");
      deleteallbtn.remove()
      display();
    })

  }
}

bookmarkform.addEventListener("submit", (e) => {
  e.preventDefault()
  const bookmarkname = bookmarkinputname.value;
  let bookmarkurl = bookmarkinputurl.value;
  if (!bookmarkurl.startsWith("http://" || !bookmarkurl.startsWith("https://"))) {
    bookmarkurl = "https://" + bookmarkurl;
  }
  bookmarks.push({ bookmarkname, bookmarkurl })
  localStorage.setItem("Bookmarks", JSON.stringify(bookmarks))
   bookmarkform.reset()
  display()
})

display()

