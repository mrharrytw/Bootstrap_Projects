// Start Right Navbar
const getsitesettings = document.getElementById('sitesettings');

getsitesettings.addEventListener('click', function () {
    document.body.classList.toggle('show-nav')
});
// End Right Navbar

// Start Navbar

// start Top navbar
function dropbtn(e) {
    // console.log(e.target);
    // console.log(e.target.parentElement.nextElementSibling);
    e.target.parentElement.nextElementSibling.classList.toggle("show")
}
// end top navbar

// End Navbar

$(document).ready(function () {

    // Start Navbar

    // start right Navbar
    // $(".sitesettings").click(function () {
    //     $('body').toggleClass('show-nav')
    // });
    // end right Navbar

    // start left sidebar
    $(".sidebarlinks").click(function () {
        $('.sidebarlinks').removeClass('currents');
        $(this).addClass('currents');
    });
    // end left sidebar

    // End Navbar

    // Start  Chart

    // Start Gauge Area Chart
    // User Chart
    var gaugeurs = new JustGage({
        id: "gaugeusers", // the id of the html element
        value: 50,
        min: 0,
        max: 100,
        decimals: 2,
        gaugeWidthScale: 0.6
    });
    // update the value randomly
    setInterval(() => {
        gaugeurs.refresh(Math.random() * 100);
    }, 5000)

    // Customers Chart
    var gaugecus = new JustGage({
        id: "gaugecustomers", // the id of the html element
        value: 50,
        min: 0,
        max: 100,
        decimals: 2,
        gaugeWidthScale: 0.6
    });
    // update the value randomly
    setInterval(() => {
        gaugecus.refresh(Math.random() * 100);
    }, 5000)

    // Employees Chart
    var gaugeemps = new JustGage({
        id: "gaugeemployees", // the id of the html element
        value: 50,
        min: 0,
        max: 100,
        decimals: 2,
        gaugeWidthScale: 0.6
    });
    // update the value randomly
    setInterval(() => {
        gaugeemps.refresh(Math.random() * 100);
    }, 5000)

    // Investers Chart
    var gaugeinvs = new JustGage({
        id: "gaugeinvesters", // the id of the html element
        value: 50,
        min: 0,
        max: 100,
        decimals: 2,
        gaugeWidthScale: 0.6
    });
    // update the value randomly
    setInterval(() => {
        gaugeinvs.refresh(Math.random() * 100);
    }, 5000)

    // End Gauge Area Chart

    // Start Revenue Sources Chart
    const ctx = document.getElementById('myChart');

    new Chart(ctx, {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [12, 19, 3],
                borderWidth: 1
            }]
        },
        options: {}
    });
    // End Revenue Sources chart

    // Start Earning Overview Chart
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        var data = google.visualization.arrayToDataTable([
            ['Year', 'Sales', 'Expenses'],
            ['2004', 1000, 400],
            ['2005', 1170, 460],
            ['2006', 660, 1120],
            ['2007', 1030, 540]
        ]);

        var options = {
            title: 'Sales Performance',
            curveType: 'function',
            legend: { position: 'bottom' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data, options);
    }
    // End Earning Overview chart

    // End  Chart

    // Start Footer
    const getyear = document.getElementById("getyear");
    const getfullyear = new Date().getFullYear();
    getyear.textContent = getfullyear;
    // End Footer
});



