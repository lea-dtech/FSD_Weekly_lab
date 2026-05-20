const courseContainer = document.getElementById("courseContainer");
const searchInput = document.getElementById("searchInput");
const themeBtn = document.getElementById("themeBtn");

let courses = [];

// FETCH API USING async/await
async function fetchCourses() {
    const response = await fetch("data.json");
    const data = await response.json();

    courses = data.slice(0, 10);
    displayCourses(courses);
}

// DISPLAY COURSES
function displayCourses(courseList) {
    courseContainer.innerHTML = "";

    courseList.forEach(course => {
        const card = document.createElement("div");

        card.className = "course-card bg-white shadow-lg rounded-xl p-5";
        card.setAttribute("draggable", true);

        card.innerHTML = `
            <h2 class="text-xl font-bold text-blue-600">
            ${course.title}
            </h2>
            <p class="mt-2 text-gray-600">
            Category: ${course.category}
            </p>
        `;
        addDragEvents(card);
        courseContainer.appendChild(card);
    });
}

// SEARCH FILTER
searchInput.addEventListener("input", () => {
    const searchText = searchInput.value.toLowerCase();

    const filteredCourses = courses.filter(course =>
        course.title.toLowerCase().includes(searchText)
    );
    displayCourses(filteredCourses);
});

// THEME SWITCHING
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        themeBtn.innerText = "White"
    } else {
        localStorage.setItem("theme", "light");
        themeBtn.innerText = "Dark"
    }
});

// LOAD SAVED THEME
window.addEventListener("load", () => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        themeBtn.innerText = "White"
    }
});

// DRAG AND DROP
let draggedCard = null;

function addDragEvents(card) {
    card.addEventListener("dragstart", () => {
        draggedCard = card;
        card.classList.add("dragging");
    });

    card.addEventListener("dragend", () => {
        card.classList.remove("dragging");
    });

    card.addEventListener("dragover", e => {
        e.preventDefault();
    });

    card.addEventListener("drop", () => {
        if (draggedCard !== card) {
            const allCards = [...courseContainer.children];

            const draggedIndex = allCards.indexOf(draggedCard);
            const targetIndex = allCards.indexOf(card);

            if (draggedIndex < targetIndex) {
            courseContainer.insertBefore(draggedCard, card.nextSibling);
            } else {
            courseContainer.insertBefore(draggedCard, card);
            }
        }
    });
}

// SERVICE WORKER REGISTRATION
if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
    navigator.serviceWorker.register("service-worker.js")
        .then(() => console.log("Service Worker Registered"))
        .catch(err => console.log(err));
    });
}
fetchCourses();