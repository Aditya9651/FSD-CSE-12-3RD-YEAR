const root = document.getElementById("container");
const button = document.getElementById("btn");
const h2 = document.createElement("h2");
root.appendChild(h2);
function buildresume() {
    const loader = document.createElement("p");
    loader.innerHTML = "Loading...";
    root.appendChild(loader);
    h2.innerHTML = "Please wait...";
    setTimeout(function () {
        try {
            h2.innerHTML = "Building...";
            // Main box
            const mainBox = document.createElement("div");
            mainBox.style.border = "2px solid black";
            mainBox.style.width = "600px";
            mainBox.style.margin = "auto";
            mainBox.style.textAlign = "center";
            // Image
            const img = document.createElement("img");
            img.src = "https://imgs.search.brave.com/M1Gyi7l30L9ZgDC-xXKrBtuvdythTTcfWoWvaH7XWRo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvc21p/bGluZy1yYW5kb20t/cGVyc29uLWdyYXBo/aWMtcG5nLWNvdTM2/LWN6NGhoM2x4MGN1/MjZrNzEuanBn";
            img.setAttribute("height", "100");
            img.setAttribute("width", "100");
            // Name
            const name = document.createElement("h1");
            name.innerHTML = "ADITYA KUMAR";
            // Top section
            const top = document.createElement("div");
            top.style.display = "flex";
            top.style.alignItems = "center";
            top.style.justifyContent = "center";
            top.style.gap = "30px";
            top.style.padding = "20px";
            top.appendChild(img);
            top.appendChild(name);
            mainBox.appendChild(top);
            // Table
            const table = document.createElement("table");
            table.setAttribute("border", "1");
            table.setAttribute("width", "90%");
            table.setAttribute("align", "center");
            table.setAttribute("cellpadding", "15");
            // Heading row
            const row1 = document.createElement("tr");
            const th1 = document.createElement("th");
            th1.innerHTML = "DETAILS";
            const th2 = document.createElement("th");
            th2.innerHTML = "INFORMATION";
            row1.appendChild(th1);
            row1.appendChild(th2);
            table.appendChild(row1);
            // Qualification
            const row2 = document.createElement("tr");
            const td21 = document.createElement("td");
            td21.innerHTML = "<b>Qualification</b>";
            const td22 = document.createElement("td");
            td22.innerHTML = "B.Tech";
            row2.appendChild(td21);
            row2.appendChild(td22);
            table.appendChild(row2);
            // Stream
            const row3= document.createElement("tr");
            const td31 = document.createElement("td");
            td31.innerHTML = "<b>Stream</b>";
            const td32 = document.createElement("td");
            td32.innerHTML = "Computer Science and Engineering";
            row3.appendChild(td31);
            row3.appendChild(td32);
            table.appendChild(row3);
            // Development Skills
            const row4 = document.createElement("tr");
            const td41 = document.createElement("td");
            td41.innerHTML = "<b>Development Skills</b>";
            const td42 = document.createElement("td");
            td42.innerHTML = "HTML<br>CSS<br>JavaScript<br>Java<br>C++";
            row4.appendChild(td41);
            row4.appendChild(td42);
            table.appendChild(row4);
            // Add table to main box
            mainBox.appendChild(table);
            // Add main box to page
            root.appendChild(mainBox);
            h2.innerHTML = "Resume Built Successfully";
        } 
        catch (error) {
            console.log(error);
            h2.innerHTML = "Error loading data";
        } 
        finally {
            loader.remove();
        }
    }, 3000); // 3000 milliseconds = 3 seconds
}
button.addEventListener("click", buildresume);