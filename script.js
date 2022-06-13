
const container = document.querySelector(".container");
const count = document.querySelector(".count");
const amount = document.querySelector(".amount");
const movies = document.getElementById("movies");
const seats = document.querySelectorAll(".seat:not(.reserved)")
const btnSell = document.getElementById("sell");


getSelectToLS()
getReservedToLS()
calculateTotal()

container.addEventListener('click', function (event) {
        if (event.target.classList.contains('seat') && !event.target.classList.contains('reserved')) {
                event.target.classList.toggle('selected')
        }

        calculateTotal()
});


movies.addEventListener("change", function (event) {
        getSelectToLS()
        getReservedToLS()
        calculateTotal()
})

function calculateTotal() {
        const selectedSeats = container.querySelectorAll('.seat.selected');

        const selectedSeatArr = [];
        const seatsArr = [];

        selectedSeats.forEach(function (seat) {
                selectedSeatArr.push(seat);
        })
        seats.forEach(function (seat) {
                seatsArr.push(seat)
        });

        let selectedSeatIndexs = selectedSeatArr.map(function (seat) {
                return seatsArr.indexOf(seat)
        })
        let selectedCount = selectedSeats.length;
        count.innerHTML = selectedCount;
        amount.innerHTML = selectedCount * movies.value;


        saveSelectToLS(selectedSeatIndexs);        
}

function saveSelectToLS(indexs) {
        if (movies.selectedIndex == 1) {
                localStorage.setItem("movieSelect" + movies.selectedIndex, JSON.stringify(indexs))
        }
        if (movies.selectedIndex == 2) {
                localStorage.setItem("movieSelect" + movies.selectedIndex, JSON.stringify(indexs))
        }
        if (movies.selectedIndex == 3) {
                localStorage.setItem("movieSelect" + movies.selectedIndex, JSON.stringify(indexs))
        }
}

function getSelectToLS() {
        if (movies.selectedIndex == 1) {   
                seats.forEach(function (seat) {
                        seat.classList.remove("selected")
                })           
                const selectedSeats = JSON.parse(localStorage.getItem("movieSelect" + movies.selectedIndex))
                if (selectedSeats != null && selectedSeats.length > 0) {
                        seats.forEach(function (seat, index) {
                                if (selectedSeats.indexOf(index) > -1) {
                                        seat.classList.add("selected")
                                }
                        })
                }
                return selectedSeats;
        }
        if (movies.selectedIndex == 2) {
                seats.forEach(function (seat) {
                        seat.classList.remove("selected")
                })  
                const selectedSeats = JSON.parse(localStorage.getItem("movieSelect" + movies.selectedIndex))
                if (selectedSeats != null && selectedSeats.length > 0) {
                        seats.forEach(function (seat, index) {
                                if (selectedSeats.indexOf(index) > -1) {
                                        seat.classList.add("selected")
                                }
                        })
                }
                return selectedSeats;
        }
        if (movies.selectedIndex == 3) {
                seats.forEach(function (seat) {
                        seat.classList.remove("selected")
                })  
                const selectedSeats = JSON.parse(localStorage.getItem("movieSelect" + movies.selectedIndex))
                if (selectedSeats != null && selectedSeats.length > 0) {
                        seats.forEach(function (seat, index) {
                                if (selectedSeats.indexOf(index) > -1) {
                                        seat.classList.add("selected")                                
                                }
                        })
                }
                return selectedSeats;
        }
        
}

function saveReservedToLS(indexs) {
        if (movies.selectedIndex == 1) {
                localStorage.setItem("movieReserved" + movies.selectedIndex, JSON.stringify(indexs))
        }
        if (movies.selectedIndex == 2) {
                localStorage.setItem("movieReserved" + movies.selectedIndex, JSON.stringify(indexs))
        }
        if (movies.selectedIndex == 3) {
                localStorage.setItem("movieReserved" + movies.selectedIndex, JSON.stringify(indexs))
        }
}
function getReservedToLS() {
        if (movies.selectedIndex == 1) {   
                seats.forEach(function (seat) {
                        seat.classList.remove("reserved")
                })           
                const selectedSeats = JSON.parse(localStorage.getItem("movieReserved" + movies.selectedIndex))
                if (selectedSeats != null && selectedSeats.length > 0) {
                        seats.forEach(function (seat, index) {
                                if (selectedSeats.indexOf(index) > -1) {
                                        seat.classList.add("reserved")
                                }
                        })
                }
                return selectedSeats;
        }
        if (movies.selectedIndex == 2) {
                seats.forEach(function (seat) {
                        seat.classList.remove("reserved")
                })  
                const selectedSeats = JSON.parse(localStorage.getItem("movieReserved" + movies.selectedIndex))
                if (selectedSeats != null && selectedSeats.length > 0) {
                        seats.forEach(function (seat, index) {
                                if (selectedSeats.indexOf(index) > -1) {
                                        seat.classList.add("reserved")
                                }
                        })
                }
                return selectedSeats;
        }
        if (movies.selectedIndex == 3) {
                seats.forEach(function (seat) {
                        seat.classList.remove("reserved")
                })  
                const selectedSeats = JSON.parse(localStorage.getItem("movieReserved" + movies.selectedIndex))
                if (selectedSeats != null && selectedSeats.length > 0) {
                        seats.forEach(function (seat, index) {
                                if (selectedSeats.indexOf(index) > -1) {
                                        seat.classList.add("reserved")                                
                                }
                        })
                }
                return selectedSeats;
        }
        
}

btnSell.addEventListener("click", function () {
        const selectedSeats =  getSelectToLS();

        if (selectedSeats !=0  && selectedSeats.length > 0 ) {
                seats.forEach( function (seat, index) {
                        if(selectedSeats.indexOf(index) >-1){
                                seat.classList.add("reserved")
                                seat.classList.remove("selected")
                        }
                })
        }
        const reservedSeats = container.querySelectorAll('.seat.reserved');

        const reservedSeatArr = [];
        const seatsArr = [];

        reservedSeats.forEach(function (seat) {
                reservedSeatArr.push(seat);
        })
        seats.forEach(function (seat) {
                seatsArr.push(seat)
        });

        let reservedSeatIndexs = reservedSeatArr.map(function (seat) {
                return seatsArr.indexOf(seat)
        })

        saveReservedToLS(reservedSeatIndexs)  
}) 