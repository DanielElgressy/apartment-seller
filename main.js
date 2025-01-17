
$("button").on("click", function () {
    let address = $("#addr-input").val()
    let minPrice = $("#min-p-input").val()
    let maxPrice = $("#max-p-input").val()
    let minRooms = $("#min-r-input").val()
    let maxRooms = $("#max-r-input").val()
    let immediate = $("#immed-y")

    let relevantApts = findRelevantApts(address, minPrice, maxPrice, minRooms, maxRooms, immediate)
    renderApts(relevantApts)
})

const renderApts = function (apartments) {
    $("#results").empty()
    console.log(apartments) 
    const source = $("#apt-template").html();
    const template = Handlebars.compile(source);
    HandlebarsIntl.registerWith(Handlebars)
    let someHTML = template({apartments});
    $("#results").append(someHTML);
}

    
renderApts(apartments) //renders apartments when page loads



