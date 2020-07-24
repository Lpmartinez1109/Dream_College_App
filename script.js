var searchInput = document.querySelector("#search");
var nameDiv =document.querySelector("#name");
var searchBtn = document.querySelector("#search-btn");
var recentSearch = document.querySelector("last-search");


function nameDisplay(type, message){
    nameDiv.textContent = message;
    nameDiv.setAttribute("class", type)
};

searchBtn.addEventListener("click", function(event){
    event.preventDefault();
    var user ={
        collegeName: searchInput.value.trim(),
    };
    console.log(user)

    if(user.searchInput === ""){
        nameDisplay("error", "Search field cannot be blank")
    }else{
        nameDisplay("success", "Search Completed")
    }


    localStorage.setItem("user", JSON.stringify(user));

    var lastCollege = JSON.parse(localStorage.getItem("user"));
    recentSearch.textContent = lastCollege.collegeName

})
