const addBox = document.querySelector(".add-box"),
popupBox = document.querySelector(".popup-box"),
closeIcon = popupBox.querySelector("header i"),
titleTag = popupBox.querySelector("input"),
descTag = popupBox.querySelector("textarea"),
addBtn = popupBox.querySelector("button");

const months = ["January", "February", "March", "April", "May", "June", "July",
"August", "September", "October", "November", "December"];
// getting localStorage notes if exist and parsing them
// to js object else passing an empty array to notes
const notes = JSON.parse(localStorage.getItem("notes") || "[]")

addBox.addEventListener("click", function(){
    popupBox.classList.add("show");
});
closeIcon.addEventListener("click", function(){
    popupBox.classList.remove("show");
});
addBtn.addEventListener("click", e => {
    e.preventDefault();
    let noteTitle = titleTag.value,
    noteDesc = descTag.value;
    if (noteTitle || noteDesc) {
        // getting month, day and year from the current date
        let dateObj = new Date(),
        month = months[dateObj.getMonth()],
        day = dateObj.getDate(),
        year = dateObj.getFullYear();
        let noteInfo = {
            title: noteTitle,
            description: noteDesc,
            date: `${month} ${day}, ${year}`
        };
        notes.push(noteInfo); // adding new note to notes
        // saving notes to localStorage
        localStorage.setItem("notes", JSON.stringify(notes));
        closeIcon.click();
    }
});