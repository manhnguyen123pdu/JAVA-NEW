/* ==========================
        LESSON DATA
========================== */
const lessons = [
    { buoi: 1, title: "Development Environment & Programming Mindset", link: "lessons/buoi1.html" },
    { buoi: 2, title: "Variables, Data Types & Operators", link: "lessons/buoi2.html" },
    { buoi: 3, title: "Control Flow", link: "lessons/buoi3.html" },
    { buoi: 4, title: "Loops", link: "lessons/buoi4.html" },
    { buoi: 5, title: "Java Strings", link: "lessons/buoi5.html" },
    { buoi: 6, title: "Methods & One-Dimensional Arrays", link: "lessons/buoi6.html" },
    { buoi: 7, title: "Array Algorithms", link: "lessons/buoi7.html" },
    { buoi: 8, title: "Review & Mini Challenge", link: "lessons/buoi8.html" },
    { buoi: 9, title: "Classes, Objects & Constructors", link: "lessons/buoi9.html" },
    { buoi: 10, title: "Encapsulation & Static Members", link: "lessons/buoi10.html" },
    { buoi: 11, title: "Inheritance", link: "lessons/buoi11.html" },
    { buoi: 12, title: "Polymorphism", link: "lessons/buoi12.html" },
    { buoi: 13, title: "Abstract Classes & Interfaces", link: "lessons/buoi13.html" },
    { buoi: 14, title: "OOP Practice", link: "lessons/buoi14.html" },
    { buoi: 15, title: "ArrayList & LinkedList", link: "lessons/buoi15.html" },
    { buoi: 16, title: "HashMap & HashSet", link: "lessons/buoi16.html" },
    { buoi: 17, title: "Comparable & Comparator", link: "lessons/buoi17.html" },
    { buoi: 18, title: "Date & Time API", link: "lessons/buoi18.html" },
    { buoi: 19, title: "Practice", link: "lessons/buoi19.html" },
    { buoi: 20, title: "Exception Handling (try/catch/finally)", link: "lessons/buoi20.html" },
    { buoi: 21, title: "Stream API", link: "lessons/buoi21.html" },
    { buoi: 22, title: "Collections & Exception Lab", link: "lessons/buoi22.html" },
    { buoi: 23, title: "File I/O", link: "lessons/buoi23.html" },
    { buoi: 24, title: "CSV & Java NIO", link: "lessons/buoi24.html" },
    { buoi: 25, title: "File I/O Lab - Data Persistence", link: "lessons/buoi25.html" },
    { buoi: 26, title: "Java Swing Basics", link: "lessons/buoi26.html" },
    { buoi: 27, title: "Event Handling", link: "lessons/buoi27.html" },
    { buoi: 28, title: "JTable - Displaying Data", link: "lessons/buoi28.html" },
    { buoi: 29, title: "SQL Fundamentals for Java", link: "lessons/buoi29.html" },
    { buoi: 30, title: "Database Relationships", link: "lessons/buoi30.html" },
    { buoi: 31, title: " JDBC Basics", link: "lessons/buoi31.html" },
    { buoi: 32, title: "JDBC Advanced", link: "lessons/buoi32.html" },
    { buoi: 33, title: "Database CRUD with DAO & Service Layer", link: "lessons/buoi33.html" },
    { buoi: 34, title: "Advanced CRUD with DAO & Service Layer", link: "lessons/buoi34.html" }
];
/* ==========================
        DOM
========================== */

const lessonList = document.querySelector("#lessonList");
const search = document.querySelector("#search");


/* ==========================
        INIT
========================== */

renderLessons(lessons);


/* ==========================
    ICON + COLOR
========================== */

function getLessonInfo(title) {

    title = title.toLowerCase();

    if (title.includes("development"))
        return { icon: "fa-laptop-code", color: "#4F46E5" };

    if (title.includes("variable"))
        return { icon: "fa-database", color: "#0EA5E9" };

    if (title.includes("control"))
        return { icon: "fa-code-branch", color: "#F97316" };

    if (title.includes("loop"))
        return { icon: "fa-rotate", color: "#10B981" };

    if (title.includes("string"))
        return { icon: "fa-font", color: "#EC4899" };

    if (title.includes("method"))
        return { icon: "fa-gears", color: "#8B5CF6" };

    if (title.includes("algorithm"))
        return { icon: "fa-table-cells", color: "#F59E0B" };

    if (title.includes("review"))
        return { icon: "fa-graduation-cap", color: "#14B8A6" };

    if (title.includes("class"))
        return { icon: "fa-cube", color: "#3B82F6" };

    if (title.includes("encapsulation"))
        return { icon: "fa-lock", color: "#DC2626" };

    if (title.includes("inheritance"))
        return { icon: "fa-sitemap", color: "#2563EB" };

    if (title.includes("polymorphism"))
        return { icon: "fa-shapes", color: "#9333EA" };

    if (title.includes("abstract"))
        return { icon: "fa-layer-group", color: "#0891B2" };

    if (title.includes("oop"))
        return { icon: "fa-object-group", color: "#7C3AED" };

    if (title.includes("arraylist"))
        return { icon: "fa-list", color: "#16A34A" };

    if (title.includes("hashmap"))
        return { icon: "fa-diagram-project", color: "#F43F5E" };

    if (title.includes("comparable"))
        return { icon: "fa-arrow-down-a-z", color: "#0F766E" };

    if (title.includes("date"))
        return { icon: "fa-calendar-days", color: "#E11D48" };

    if (title.includes("exception"))
        return { icon: "fa-triangle-exclamation", color: "#DC2626" };

    if (title.includes("stream"))
        return { icon: "fa-water", color: "#0284C7" };

    if (title.includes("collection"))
        return { icon: "fa-boxes-stacked", color: "#7C2D12" };

    if (title.includes("file"))
        return { icon: "fa-file-lines", color: "#475569" };

    if (title.includes("csv"))
        return { icon: "fa-file-csv", color: "#059669" };

    if (title.includes("nio"))
        return { icon: "fa-folder-open", color: "#EA580C" };

    if (title.includes("swing"))
        return { icon: "fa-desktop", color: "#2563EB" };

    if (title.includes("event"))
        return { icon: "fa-hand-pointer", color: "#7C3AED" };

    if (title.includes("jtable"))
        return { icon: "fa-table", color: "#0284C7" };

    if (title.includes("sql"))
        return { icon: "fa-database", color: "#2563EB" };

    if (title.includes("relationship"))
        return { icon: "fa-diagram-project", color: "#4F46E5" };

    if (title.includes("jdbc"))
        return { icon: "fa-plug", color: "#16A34A" };

    if (title.includes("crud"))
        return { icon: "fa-pen-to-square", color: "#DC2626" };

    return {
        icon: "fa-code",
        color: "#3B82F6"
    };

}


/* ==========================
        RENDER
========================== */

function renderLessons(data) {

    lessonList.innerHTML = "";

    data.forEach(item => {

        const info = getLessonInfo(item.title);


        const time = (120)

        lessonList.innerHTML += `

        <div class="lesson-card">

            <div class="lesson-header">
                Lesson ${item.buoi}
            </div>

            <div class="lesson-body">

                <div
                    class="lesson-icon"
                    style="background:${info.color}20;color:${info.color};">

                    <i class="fa-solid ${info.icon}"></i>

                </div>

                <h3>${item.title}</h3>

                <div class="lesson-info">

                    <span>
                        <i class="fa-regular fa-clock"></i>
                        ${time} mins
                    </span>

                   
                </div>

                <a href="${item.link}" class="lesson-btn">

                    <i class="fa-solid fa-play"></i>

                    Start Lesson

                </a>

            </div>

        </div>

        `;
    });

}


/* ==========================
        SEARCH
========================== */

search?.addEventListener("keyup", function () {

    const keyword = this.value.trim().toLowerCase();

    const result = lessons.filter(item =>

        item.title.toLowerCase().includes(keyword) ||
        item.buoi.toString().includes(keyword)

    );

    renderLessons(result);

});

const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const closeBtn2 = document.getElementById("closeBtn2");
const modalOverlay = document.getElementById("modalOverlay");

// Mở popup
openBtn.addEventListener("click", function () {
    modalOverlay.classList.add("active");
});

// Đóng popup bằng nút X
closeBtn.addEventListener("click", function () {
    modalOverlay.classList.remove("active");
});

// Đóng popup bằng nút Đóng
closeBtn2.addEventListener("click", function () {
    modalOverlay.classList.remove("active");
});

// Click ra ngoài khung popup thì đóng
modalOverlay.addEventListener("click", function (event) {
    if (event.target === modalOverlay) {
        modalOverlay.classList.remove("active");
    }
});

// Nhấn ESC để đóng
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        modalOverlay.classList.remove("active");
    }
});