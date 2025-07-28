document.addEventListener('DOMContentLoaded', () => {
  // Initialize Charts
  const attendanceChartCanvas = document.getElementById('workerAttendanceChart');
  const rationChartCanvas = document.getElementById('workerRationChart');

  if (attendanceChartCanvas) {
    new Chart(attendanceChartCanvas, {
      type: 'pie',
      data: {
        labels: ['Present', 'Absent'],
        datasets: [{
          data: [95, 25], // Example data
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

  if (rationChartCanvas) {
    new Chart(rationChartCanvas, {
      type: 'pie',
      data: {
        labels: ['Distributed', 'Remaining'],
        datasets: [{
          data: [85, 15], // Example data
          backgroundColor: ['#4CAF50', '#FFC107'],
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

  // Mark Attendance Button
  const markAttendanceButton = document.querySelector('.mark-attendance');
  if (markAttendanceButton) {
    markAttendanceButton.addEventListener('click', () => {
      alert('Attendance marked successfully!');
    });
  }

  // Distribute Ration Button
  const distributeRationButton = document.querySelector('.distribute-ration');
  if (distributeRationButton) {
    distributeRationButton.addEventListener('click', () => {
      alert('Ration distributed successfully!');
    });
  }

  // Supervisor Reporting Form
  const reportForm = document.getElementById('reportForm');
  if (reportForm) {
    reportForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const report = document.getElementById('report').value;
      alert('Report submitted successfully!');
      reportForm.reset();
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

  // Mark as read functionality
  const markAsReadButtons = document.querySelectorAll('.mark-as-read');
  markAsReadButtons.forEach(button => {
    button.addEventListener('click', () => {
      const notificationItem = button.closest('.notification-item');
      notificationItem.style.opacity = '0.6'; // Fade out the notification
      button.disabled = true; // Disable the button after clicking

      // Update notification count
      const notificationCount = document.querySelector('.notification-count');
      if (notificationCount) {
        const count = parseInt(notificationCount.textContent);
        if (count > 0) {
          notificationCount.textContent = count - 1;
        }
      }
    });
  });
});