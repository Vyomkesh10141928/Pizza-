var menu_list_array = [
    "Chicken Tandoori Pizza",
    "Veg Supreme Pizza",
    "Paneer Tikka Pizza",
    "Deluxe Veggie Pizza"
]

function getmenu() {
    var htmldata;
    htmldata = "<ol class='menulist'>";
    menu_list_array.sort();
    for (var i = 0; i < menu_list_array.length; i++) {
htmldata=htmldata+'<li>' + menu_list_array[i] + '</li>'
    }
    htmldata=htmldata+'</ol>'
    document.getElementById("display_menu").innerHTML=htmldata;
}
function add_item(){
    
}