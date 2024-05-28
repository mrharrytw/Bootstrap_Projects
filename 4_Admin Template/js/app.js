
// Start Navbar

// start top navbar
function dropbtn(e) {
    // console.log(e.target.parentElement.nextElementSibling);
    e.target.parentElement.nextElementSibling.classList.toggle("show")
}
// end top navbar

// End Navbar

$(document).ready(function () {

    // Start Navbar
    // start left sidebar
    $(".sidebarlinks").click(function () {
        $('.sidebarlinks').removeClass('currents');
        $(this).addClass('currents');
    });
    // end left sidebar
    // End Navbar
});