document.addEventListener('DOMContentLoaded', () => {
    // Initialize Charts
    const issueChartCanvas = document.getElementById('issueChart');
    const attendanceTrendChartCanvas = document.getElementById('attendanceTrendChart');
  
    if (issueChartCanvas) {
      new Chart(issueChartCanvas, {
        type: 'pie',
        data: {
          labels: ['Resolved', 'Pending'],
          datasets: [{
            data: [3, 2], // Example data
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
  
    if (attendanceTrendChartCanvas) {
      new Chart(attendanceTrendChartCanvas, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'], // Example labels
          datasets: [{
            label: 'Attendance',
            data: [80, 85, 90, 88, 92], // Example data
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
  
    // Log Visit Button
    const logVisitButton = document.querySelector('.log-visit');
    if (logVisitButton) {
      logVisitButton.addEventListener('click', () => {
        alert('Visit logged successfully!');
      });
    }
  
    // Report Issue Form
    const issueForm = document.getElementById('issueForm');
    if (issueForm) {
      issueForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const issue = document.getElementById('issue').value;
        alert('Issue reported successfully!');
        issueForm.reset();
      });
    }
  });





















  // Toggle the dropdown visibility
document.querySelector('.notification-button').addEventListener('click', function() {
    const container = document.querySelector('.notification-container');
    container.classList.toggle('active');
  });
  
  // Mark notifications as read
  document.querySelectorAll('.mark-as-read').forEach(button => {
    button.addEventListener('click', function() {
      const notificationItem = this.closest('.notification-item');
      notificationItem.style.opacity = '0.5'; // Dim the notification
      this.disabled = true; // Disable the button after marking as read
  
      // Update the notification count
      const countElement = document.querySelector('.notification-count');
      let count = parseInt(countElement.textContent);
      if (count > 0) {
        countElement.textContent = count - 1;
      }
    });
  });