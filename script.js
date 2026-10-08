let name = document.querySelector("#name");
let crushName = document.querySelector("#crush-name");
let button = document.querySelector("button");
let love = document.querySelector("#love");
let percent = document.querySelector("#percent");

// Dui naam theke sadharon ekta fixed percentage ber korar function
function getFixedPercentage(name1, name2) {
    // Letter gulo chhoto hater kore ebong Alphabetically sort kore combine kora,
    // jate (NameA + NameB) ebong (NameB + NameA) er output eki ashe.
    let combined = [name1.trim().toLowerCase(), name2.trim().toLowerCase()].sort().join("");
    
    let hash = 0;
    for (let i = 0; i < combined.length; i++) {
        hash += combined.charCodeAt(i);
    }
    
    // Hash key theke 1 theke 100 er modhe ekta fixed value generate hobe
    return (hash % 100) + 1;
}

button.addEventListener("click", () => {
    if (name.value.trim() === "" && crushName.value.trim() === "") {
        love.innerHTML = "Please pass the value in both field";
        love.style.color = "red";
        percent.innerHTML = "";
    } 
    else if (name.value.trim() === "") {
        love.innerHTML = "Please enter any name";
        love.style.color = "red";
        percent.innerHTML = "";
    } 
    else if (crushName.value.trim() === "") {
        love.innerHTML = "Please enter crush name";
        love.style.color = "red";
        percent.innerHTML = "";
    } 
    else {
        // Dui naam er jonno fixed percentage calculate kora
        let fixedPercent = getFixedPercentage(name.value, crushName.value);
        
        love.innerHTML = `${name.value} and ${crushName.value} chance of love`;
        love.style.color = "black";
        percent.innerHTML = fixedPercent + "%";
    }
});