// Load face-api.js models
Promise.all([
    faceapi.nets.tinyFaceDetector.loadFromUri('https://cdn.jsdelivr.net/gh/justadudewhohacks/face-api.js/weights'),
    faceapi.nets.faceLandmark68Net.loadFromUri('https://cdn.jsdelivr.net/gh/justadudewhohacks/face-api.js/weights'),
    faceapi.nets.faceRecognitionNet.loadFromUri('https://cdn.jsdelivr.net/gh/justadudewhohacks/face-api.js/weights'),
    // faceapi.nets.faceExpressionNet.loadFromUri('/models')
  ]).then(() => {
    console.log('Models loaded successfully');
    startVideo(); // Start the video stream after models are loaded
  })
  .catch((err) => {
    console.error('Error loading models:', err);
  });
  
  
  // Start video stream
  function startVideo() {
    navigator.mediaDevices.getUserMedia({ video: {} })
      .then(stream => {
        const video = document.getElementById('video');
        video.srcObject = stream;
      })
      .catch(err => 
        console.error('Error accessing camera:', err));
        // console.error(err));
  }
  
  // Sample user database (for demonstration purposes)
  const users = [
    {
      name: 'Worker A',
      role: 'worker',
      descriptor: null, // Face descriptor will be added after registration
    },
    {
      name: 'Supervisor X',
      role: 'supervisor',
      descriptor: null, // Face descriptor will be added after registration
    },
    {
      name: 'Admin',
      role: 'admin',
      descriptor: null, // Face descriptor will be added after registration
    },
  ];
  
  // Capture and login
  document.getElementById('capture-button').addEventListener('click', async () => {
    const video = document.getElementById('video');
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
  
    // Draw video frame on canvas
    context.drawImage(video, 0, 0, 300, 225);
  
    // Perform face detection and recognition
    const detections = await faceapi.detectSingleFace(canvas, new faceapi.TinyFaceDetectorOptions())
      .withFaceLandmarks()
      .withFaceDescriptor();
  
    if (detections) {
      const capturedDescriptor = detections.descriptor;
  
      // Compare captured face with registered users
      let matchedUser = null;
      for (const user of users) {
        if (user.descriptor) {
          const distance = faceapi.euclideanDistance(capturedDescriptor, user.descriptor);
          if (distance < 0.6) { // Threshold for face matching
            matchedUser = user;
            break;
          }
        }
      }
  
      if (matchedUser) {
        alert(`Welcome, ${matchedUser.name}! Redirecting to your dashboard...`);
        // Redirect based on role
        switch (matchedUser.role) {
          case 'worker':
            window.location.href = 'worker-dashboard.html';
            break;
          case 'supervisor':
            window.location.href = 'supervisor-dashboard.html';
            break;
          case 'admin':
            window.location.href = 'children-dashboard.html';
            break;
          default:
            alert('Role not recognized.');
        }
      } else {
        alert('No matching user found. Please try again.');
      }
    } else {
      alert('No face detected. Please try again.');
    }
  });
  
  // Add hover effects to login methods
  document.querySelectorAll('.login-method').forEach(method => {
    method.addEventListener('mouseenter', () => {
      method.style.transform = 'translateY(-5px)';
      method.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
    });
  
    method.addEventListener('mouseleave', () => {
      method.style.transform = 'translateY(0)';
      method.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    });
  });













  document.getElementById('username-password-form').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    try {
      const response = await fetch('http://localhost:5000/api/auth/login-username-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
  
      if (data.user) {
        alert(`Welcome, ${data.user.name}! Redirecting to your dashboard...`);
        // Redirect based on role
        switch (data.user.role) {
          case 'worker':
            window.location.href = 'worker-dashboard.html';
            break;
          case 'children':
            window.location.href = 'children-dashboard.html';
            break;
          case 'admin':
            window.location.href = 'supervisor-dashboard.html';
            break;
          default:
            alert('Role not recognized.');
        }
      } else {
        alert('Login failed. Please try again.');
      }
    } catch (err) {
      console.error('Error during login:', err);
      alert('Login failed. Please try again.');
    }
  });