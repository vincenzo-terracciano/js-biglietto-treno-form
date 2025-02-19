/* select the elemnts */
const nameEl = document.getElementById("name");
const ageEl = document.querySelector(".age");
const distanceEl = document.getElementById("distance");
const buttonEl = document.querySelector(".btn")

/* select card elements */
const ticketName = document.querySelector(".card .username");
const ticketOffer = document.querySelector(".card .offer");
const ticketCarriage = document.querySelector(".card .number-carriage");
const ticketPrice = document.querySelector(".card .price-ticket")


buttonEl.addEventListener("click", function(e){
    e.preventDefault();
    console.log(nameEl.value, ageEl.value, distanceEl.value);

    const priceKm = 0.21;
    const price = distanceEl.value * priceKm;
    console.log(price);
    
    let ticket;
    if(ageEl.value == "Underage") {
        ticket = Number((price * 0.8).toFixed(2))
    } else if(ageEl.value == "Over 65") {
        ticket = Number((price * 0.6).toFixed(2))
    } else {
        ticket = Number(price.toFixed(2));
    }
    console.log(ticket);

    ticketName.innerHTML = nameEl.value;
    ticketOffer.innerHTML = ageEl.value + " " + "offer";
    ticketPrice.innerHTML = ticket + "€";
    ticketCarriage.innerHTML = "Carriage number :" + " " + (Math.floor(Math.random() * 10) + 1);
})



