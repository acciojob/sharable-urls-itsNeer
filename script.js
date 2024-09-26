// your code here
 document.getElementById("button").onclick = function() {
            const name = document.getElementById("name").value;
            const year = document.getElementById("year").value;
            const baseUrl = "https://localhost:8080/";
            const queryString = `?name=${encodeURIComponent(name)}&year=${encodeURIComponent(year)}`;
            const fullUrl = baseUrl + queryString;

            document.getElementById("url").innerText = fullUrl;
        };