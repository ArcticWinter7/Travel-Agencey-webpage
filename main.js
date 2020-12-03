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

function displayTripModal(divindex) {
    var tripName = document.getElementById('trip-name');
    tripName.innerHTML = document.getElementsByClassName('trip-name')[divindex].innerHTML;
    var tripCost = document.getElementById('trip-cost');
    tripCost.innerHTML = document.getElementsByClassName('trip-cost')[divindex].innerHTML;
    var tripDescription = document.getElementById('trip-description');
    tripDescription.innerHTML = document.getElementsByClassName('trip-description')[divindex].innerHTML;

    var tripActivities = document.getElementById('trip-activities');
    tripActivities.innerHTML = "";
    var tripActivitiesString = document.getElementsByClassName('trip-activities')[divindex].innerHTML;
    var tripActivitiesArray = tripActivitiesString.split('; ');
    tripActivitiesArray.forEach(activity => {
        tripActivities.innerHTML += `<input type="checkbox">\n<label>${activity}</label>\n<br/>\n`;
    });
    var modal = document.getElementById('id01');
    modal.style.display = "block";
}

var modal = document.getElementById('id01');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}