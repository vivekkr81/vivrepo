const addbookmarkbtn = document.querySelector(".addbookmarkbtn");
const bookmarkinputname = document.querySelector(".bookmarkinputname")
const bookmarkinputurl = document.querySelector('.bookmarkinputurl')
const Bookmarkscontainer = document.querySelector(".Bookmarkscontainer")
const bookmarks = JSON.parse(localStorage.getItem("Bookmarks")) || [];
const bookmarkform = document.querySelector(".bookmarkform")
console.log(bookmarks)
function display() {
  Bookmarkscontainer.innerHTML = ''
  bookmarks.forEach((obj, index) => {
    const anchor = document.createElement("a")
    const li = document.createElement("li")
    const deletebtn = document.createElement("button")
    deletebtn.onclick = ()=>{
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
}

bookmarkform.addEventListener("submit", (e) => {
   e.preventDefault()
  const bookmarkname = bookmarkinputname.value;
  let bookmarkurl = bookmarkinputurl.value;
  if (!bookmarkurl.startsWith("http://" || !bookmarkurl.startsWith("https://"))) {
    bookmarkurl = "https://" + bookmarkurl;
  }
  bookmarks.push({bookmarkname, bookmarkurl})
  localStorage.setItem("Bookmarks", JSON.stringify(bookmarks))
   
  display()
})

display()