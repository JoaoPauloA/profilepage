const width_threshold = 480;

function drawLineChart() {
  if ($("#lineChart").length) {
    ctxLine = document.getElementById("lineChart").getContext("2d");
    optionsLine = {
      scales: {
        yAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "Hits"
            }
          }
        ]
      }
    };

    // Set aspect ratio based on window width
    optionsLine.maintainAspectRatio =
      $(window).width() < width_threshold ? false : true;

 

    lineChart = new Chart(ctxLine, configLine);
  }
}

function drawBarChart() {
  if ($("#barChart").length) {
    // ctxBar = document.getElementById("barChart").getContext("2d");

    // optionsBar = {
    //   responsive: true,
    //   scales: {
    //     yAxes: [
    //       {
    //         ticks: {
    //           beginAtZero: true
    //         },
    //         scaleLabel: {
    //           display: true,
    //           labelString: "Hits"
    //         }
    //       }
    //     ]
    //   }
    // };

    // optionsBar.maintainAspectRatio = $(window).width() < width_threshold ? false : true;

    // configBar = {
    //   type: "bar",
    //   data: {
    //     labels: ["Java", "Python", "JS", "C", "GO"],
    //     datasets: [
    //       {
    //         label: "",
    //         data: [75, 75, 57, 70, 40],
    //         backgroundColor: [
    //           "rgba(255, 99, 132, 0.2)",
    //           "rgba(54, 162, 235, 0.2)",
    //           "rgba(255, 206, 86, 0.2)",
    //           "rgba(75, 192, 192, 0.2)",
    //           "rgba(153, 102, 255, 0.2)",
    //           "rgba(255, 159, 64, 0.2)"
    //         ],
    //         borderColor: [
    //           "rgba(255,99,132,1)",
    //           "rgba(54, 162, 235, 1)",
    //           "rgba(255, 206, 86, 1)",
    //           "rgba(75, 192, 192, 1)",
    //           "rgba(153, 102, 255, 1)",
    //           "rgba(255, 159, 64, 1)"
    //         ],
    //         borderWidth: 1
    //       }
    //     ]
    //   },
    //   options: optionsBar
    // };

    barChart = new Chart(document.getElementById("barChart"), {
      type: 'bar',
      data: {
        labels: ["Java", "Python", "JS", "C", "Go"],
        datasets: [
          {
            label: "%",
            backgroundColor: ["#b07219", "#3e95cd","#f1e05a","#978484","#00ADD8"],
            data: [75, 70, 64, 70, 45]
          }
        ]
      },
      options: {
        legend: { display: false },
        title: {
          display: true,
          text: 'Programming Languages'
        }
      }
  });
  }
}

function drawPieChart() {
  if ($("#pieChart").length) {
    ctxPie = document.getElementById("pieChart").getContext("2d");
    optionsPie = {
      responsive: true,
      maintainAspectRatio: false
    };

    configPie = {
      type: "pie",
      data: {
        datasets: [
          {
            data: [4600, 5400],
            backgroundColor: [
              window.chartColors.purple,
              window.chartColors.green
            ],
            label: "Storage"
          }
        ],
        labels: ["Used: 4,600 GB", "Available: 5,400 GB"]
      },
      options: optionsPie
    };

    // pieChart = new Chart(ctxPie, configPie);
  }
}

function updateChartOptions() {
  if ($(window).width() < width_threshold) {
    if (optionsLine) {
      optionsLine.maintainAspectRatio = false;
    }
    if (optionsBar) {
      optionsBar.maintainAspectRatio = false;
    }
  } else {
    if (optionsLine) {
      optionsLine.maintainAspectRatio = true;
    }
    if (optionsBar) {
      optionsBar.maintainAspectRatio = true;
    }
  }
}

function updateLineChart() {
  if (lineChart) {
    lineChart.options = optionsLine;
    lineChart.update();
  }
}

function updateBarChart() {
  if (barChart) {
    barChart.options = optionsBar;
    barChart.update();
  }
}

function reloadPage() {
  setTimeout(function() {
    window.location.reload();
  }); // Reload the page so that charts will display correctly
}
