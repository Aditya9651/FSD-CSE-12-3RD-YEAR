const root = document.getElementById("container");
const button = document.getElementById("btn");
const h2 = document.createElement("h2");
root.appendChild(h2);
function buildresume() {
    const loader = document.createElement("p");
    loader.innerHTML = "Loading...";
    root.appendChild(loader);

    try {
        h2.innerHTML ="building ...";
        const img = document.createElement("img");
        img.src="https://imgs.search.brave.com/ZGD88qUmqiSBhNSzOSgwCi84R3HHtIGR8msCo4ei5uI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTgz/ODA5NTI0L3Bob3Rv/L2FsYmVydGEtd2ls/ZGVybmVzcy1uZWFy/LWJhbmZmLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1oaUkz/aWI5aWJEeEFncUVa/RUgwOUVPM0pPdzk0/djV4aDZoemN1WEdo/Ty1NPQ"
        img.setAttribute("height", 200);
        img.setAttribute("width", 200);
        root.appendChild(img);
        root.appendChild(h2);
    }
    catch (error) {
        console.log(error);
        h2.innerHTML = "Error loading data";
    }
    finally {
        root.removeChild(loader);
    }
}
button.addEventListener("click", buildresume);