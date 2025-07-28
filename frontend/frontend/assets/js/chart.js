// Pie Chart for Attendance
const attendanceChart = new Chart(document.getElementById('attendanceChart'), {
    type: 'pie',
    data: {
      labels: ['Present', 'Absent'],
      datasets: [{
        data: [95, 25], // Example data
        backgroundColor: ['#4CAF50', '#FF5722'],
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom',
        },
      },
    },
  });
  
  // Pie Chart for Ration Distribution
  const rationChart = new Chart(document.getElementById('rationChart'), {
    type: 'pie',
    data: {
      labels: ['Distributed', 'Remaining'],
      datasets: [{
        data: [85, 15], // Example data
        backgroundColor: ['#4CAF50', '#FFC107'],
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom',
        },
      },
    },
  });