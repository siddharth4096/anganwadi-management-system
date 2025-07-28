// register.js
document.getElementById('registration-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const fullname = document.getElementById('fullname').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
  
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
  
    // Send registration data to the server (you can use fetch or axios)
    console.log("Registration Data:", { fullname, username, email, password });
    alert("Registration successful!");
  });



































  // register.js or login.js
document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('video');
    const canvas = document.getElementById('canvas');
    const captureButton = document.getElementById('capture-button');

    // Load face-api.js models from CDN
    async function loadModels() {
        await faceapi.nets.tinyFaceDetector.loadFromUri('https://cdn.jsdelivr.net/npm/face-api.js/weights');
        await faceapi.nets.faceLandmark68Net.loadFromUri('https://cdn.jsdelivr.net/npm/face-api.js/weights');
        await faceapi.nets.faceRecognitionNet.loadFromUri('https://cdn.jsdelivr.net/npm/face-api.js/weights');
        console.log('Models loaded successfully');
    }

    // Start the camera
    async function startCamera() {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: {} });
            video.srcObject = stream;
            console.log('Camera started successfully');
        } catch (error) {
            console.error('Error accessing the camera:', error);
            alert('Unable to access the camera. Please ensure you have granted permission.');
        }
    }

    // Capture and process the image
    captureButton.addEventListener('click', async () => {
        const displaySize = { width: video.width, height: video.height };
        canvas.width = displaySize.width;
        canvas.height = displaySize.height;

        // Detect faces
        const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
            .withFaceLandmarks()
            .withFaceDescriptors();

        if (detections.length > 0) {
            console.log('Face detected:', detections);
            alert('Face captured successfully!');
            // You can now send the captured face data to the server for registration/login
        } else {
            alert('No face detected. Please try again.');
        }
    });

    // Initialize the camera and models
    async function initialize() {
        await loadModels();
        await startCamera();
    }

    initialize();
});