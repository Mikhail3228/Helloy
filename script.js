$(document).ready(function () {

    $("#headerTitle").hide(300).show(1500);

    showFoodMenu();

});

function fetchData() {
    setTimeout(function () {
        showFoodMenu();
        fetchData();
    }, 3000);
}
function showFoodMenu() {

    $.ajax({
        type: "GET",
        url: "/demo.xml",
        dataType: "xml",

        error: function (e) {
            alert("An error occurred while processing XML file");
            console.log("XML reading Failed: ", e);
        },

        success: function (response) {

            $("#list").children().remove();

            $(response).find("food").each(function () {
                var _name = 'Name: ' + $(this).find('name').text();
                console.log(_name);

                var _price = 'Price: ' + $(this).find('price').text();
                var _calories = 'Calories: ' + $(this).find('calories').text();
                var _description = 'Description: ' + $(this).find('description').text();

                $("#list").append('<li>' + _name + '<ul><li>'+_price+'</li><li>'+_description+'</li><li>'+_calories+'</li></ul></li>');
            });
        }
    });
}