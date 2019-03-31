function createCharts()
{
	var ctx = document.getElementById("waterChart").getContext('2d');
	var waterChart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
			datasets: [{
				label: 'Left in Liter',
				data: [500, 480, 455, 410, 380, 355, 315],
				backgroundColor: [
					'rgba(0, 0, 255, 0.2)',
					'rgba(0, 0, 255, 0.2)',
					'rgba(0, 0, 255, 0.2)',
					'rgba(0, 0, 255, 0.2)',
					'rgba(0, 0, 255, 0.2)',
					'rgba(0, 0, 255, 0.2)'
				],
				borderColor: [
					'rgba(0,0,0,1)',
					'rgba(0,0,0,1)',
					'rgba(0,0,0,1)',
					'rgba(0,0,0,1)',
					'rgba(0,0,0,1)',
					'rgba(0,0,0,1)'
				],
				borderWidth: 1
			}]
		},
		options: {
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero:true
					}
				}]
			}
		}
	});

	var ctx2 = document.getElementById("distanceChart").getContext('2d');
	var distanceChart = new Chart(ctx2, {
		type: 'bar',
		data: {
			labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
			datasets: [{
				label: 'Distance in KM',
				data: [480000, 420000, 580000, 620000, 470000, 500000, 490000],
				backgroundColor: [
					'rgba(255, 206, 86, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(255, 206, 86, 0.2)'
				],
				borderColor: [
					'rgba(0,0,0,1)',
					'rgba(0,0,0,1)',
					'rgba(0,0,0,1)',
					'rgba(0,0,0,1)',
					'rgba(0,0,0,1)',
					'rgba(0,0,0,1)',
					'rgba(0,0,0,1)'
				],
				borderWidth: 1
			}]
		},
		options: {
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero:true
					}
				}]
			}
		}
	});

	var ctx3 = document.getElementById("tempChart").getContext('2d');
	var tempChart = new Chart(ctx3, {
		type: 'bar',
		data: {
			labels: ["7AM", "8AM", "9AM", "10AM", "11AM", "12AM"],
			datasets: [{
				label: 'Temperature below 0 in degrees celcius',
				data: [183, 185, 191, 199, 205, 234],
				backgroundColor: [
					'rgba(54, 162, 235, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(54, 162, 235, 0.2)'
				],
				borderColor: [
					'rgba(0,0,0,1)',
					'rgba(0,0,0,1)',
					'rgba(0,0,0,1)',
					'rgba(0,0,0,1)',
					'rgba(0,0,0,1)',
					'rgba(0,0,0,1)'
				],
				borderWidth: 1
			}]
		},
		options: {
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero:true
					}
				}]
			}
		}
	});

	var ctx5 = document.getElementById("powerChart").getContext('2d');
	var powerChart = new Chart(ctx5, {
		type: 'line',
		data: {
			labels: ["18:15", "18:16", "18:17", "18:18", "18:19", "18:20"],
			datasets: [{
				label: 'Engine power in %',
				data: [50, 75, 90, 70, 40, 80],
				backgroundColor: [
					'rgba(255, 0, 0, 0.2)',
					'rgba(255, 0, 0, 0.2)',
					'rgba(255, 0, 0, 0.2)',
					'rgba(255, 0, 0, 0.2)',
					'rgba(255, 0, 0, 0.2)',
					'rgba(255, 0, 0, 0.2)'
				],
				borderColor: [
					'rgba(0,0,0,1)',
					'rgba(0,0,0,1)',
					'rgba(0,0,0,1)',
					'rgba(0,0,0,1)',
					'rgba(0,0,0,1)',
					'rgba(0,0,0,1)'
				],
				borderWidth: 1
			}]
		},
		options: {
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero:true
					}
				}]
			}
		}
	});
}

var ctx4;
var al;
var start;
var cw;
var ch;
var diff;
var sim;

function createSim()
{
	ctx4 = document.getElementById('circularLoader').getContext('2d');
	al = 0;
	start = 4.72;
	cw = ctx4.canvas.width;
	ch = ctx4.canvas.height; 
	sim = setInterval(progressSim, 15);
}


function progressSim(){
	diff = ((al / 100) * Math.PI*2*10).toFixed(2);
	ctx4.clearRect(0, 0, cw, ch);
	ctx4.lineWidth = 17;
	ctx4.fillStyle = '#4285f4';
	ctx4.strokeStyle = "#4285f4";
	ctx4.textAlign = "center";
	ctx4.font="28px monospace";
	ctx4.fillText(al+'%', cw*.52, ch*.5+5, cw+12);
	ctx4.beginPath();
	ctx4.arc(100, 100, 75, start, diff/10+start, false);
	ctx4.stroke();
	if(al >= 80){
		clearTimeout(sim);
	}
	al++;
}