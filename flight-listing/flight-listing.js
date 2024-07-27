function flightDetails (obj, new_color ) {
    console.log(obj);
    let parrentElement = obj.closest(".flight-list-card");
    let childBottomElement = parrentElement.querySelector('.flight-list-card-bottom')
    if (childBottomElement.classList.contains("d-none")) {
        childBottomElement.classList.remove("d-none");
    } else {
        childBottomElement.classList.add("d-none")
    }

}