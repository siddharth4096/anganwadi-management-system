document.addEventListener('DOMContentLoaded', () => {
    // Attendance Pie Chart
    const attendanceChartCanvas = document.getElementById('attendanceChart');
    if (attendanceChartCanvas) {
      new Chart(attendanceChartCanvas, {
        type: 'pie',
        data: {
          labels: ['Present', 'Absent'],
          datasets: [{
            data: [95, 5], // Example data
            backgroundColor: ['#4CAF50', '#FF5722'],
          }],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'bottom',
            },
          },
        },
      });
    }
  
    // Growth Line Chart
    const growthChartCanvas = document.getElementById('growthChart');
    if (growthChartCanvas) {
      new Chart(growthChartCanvas, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'], // Example labels
          datasets: [{
            label: 'Weight (kg)',
            data: [10, 11, 12, 13, 14], // Example data
            borderColor: '#4CAF50',
            fill: false,
          }],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'bottom',
            },
          },
        },
      });
    }
  
    // Feedback Form Submission
    const feedbackForm = document.getElementById('feedbackForm');
    if (feedbackForm) {
      feedbackForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const feedback = document.getElementById('feedback').value;
        alert('Thank you for your feedback!');
        feedbackForm.reset();
      });
    }
  });






  document.addEventListener('DOMContentLoaded', () => {
    // Toggle notification dropdown
    const notificationButton = document.querySelector('.notification-button');
    const notificationDropdown = document.querySelector('.notification-dropdown');
  
    if (notificationButton && notificationDropdown) {
      notificationButton.addEventListener('click', () => {
        notificationDropdown.classList.toggle('show');
      });
  
      // Close dropdown when clicking outside
      document.addEventListener('click', (event) => {
        if (!notificationButton.contains(event.target)) {
          notificationDropdown.classList.remove('show');
        }
      });
    }
  });