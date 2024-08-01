function flightDetails (obj, new_color ) {
    console.log(obj);
    let parrentElement = obj.closest(".flight-list");
    let childBottomElement = parrentElement.querySelector('.flight-card-btm')
    if (childBottomElement.classList.contains("d-none")) {
        childBottomElement.classList.remove("d-none");
    } else {
        childBottomElement.classList.add("d-none")
    }

}