function doSearch() {
    var input = document.getElementById("mySearch");
    const container = document.getElementById("popupcontainer");
    const popUpdivs = container.getElementsByClassName("pop_up_div");
    let popupheader;
    let filter = input.value.toUpperCase();
    for (i = 0; i < popUpdivs.length; i++) {
        popupheader = popUpdivs[i].getElementsByTagName("h1")[0];
        if (popupheader.innerHTML.toUpperCase().indexOf(filter) > -1) {
            popUpdivs[i].style.display = "";
        } else {
            popUpdivs[i].style.display = "none";
        }
      }
};