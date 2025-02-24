# StreamNation – Live Streaming Platform  

## Introduction  
**StreamNation** is a **powerful, real-time streaming platform** designed to broadcast both **live and pre-recorded videos** with ease. Built with **Node.js, Angular, Nginx, and RTMP**, it enables **seamless video streaming** through a **public webpage**.  

This project integrates **Ngrok** for secure tunneling and **OBS Studio** for high-quality streaming, making it ideal for **developers exploring streaming technologies, AI-powered video processing, and real-time broadcasting solutions.**  

---

## Key Features  

- 🎥 **Live Video Streaming** – Effortlessly broadcast live content.  
- 📼 **Pre-recorded Video Streaming** – Stream stored videos with ease.  
- 🌐 **Public Webpage Integration** – Share your streams via an accessible URL.  
- 🔒 **Secure Tunneling with Ngrok** – Generate a public address for easy sharing.  
- 🚀 **High-performance Backend with Nginx** – Ensures smooth and scalable streaming.  
- 🎬 **OBS Studio Support** – Enables professional-grade live recording & broadcasting.  

---

## Tech Stack  

- 🟢 **Backend**: Node.js, Nginx  
- 🔷 **Frontend**: Angular  
- 🎥 **Streaming Protocol**: RTMP  
- 🌍 **Tools**: Ngrok, OBS Studio  

---

## Installation Guide (Windows)  

### Prerequisites  
Before setting up the project, install the following:  

1. **MongoDB** – Follow the official [MongoDB Installation Guide](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/).  
   - Install MongoDB as a **Windows service** (step 3b in the guide).  
   - Start or stop the service via the **Windows Services Console**.  

2. **Node.js** – Download and install from [Node.js official site](https://nodejs.org/en/download/).  

3. **Angular** – Install the Angular CLI globally by running:  
   ```sh
   npm install -g @angular/cli
   ```
## Running the Application

1. Install dependencies (Run this in both the client and server folders):
  ```sh
  npm install
  ```
2. Start the Client:
  ```sh
  npm start
  ```
- Open your browser and go to: http://localhost:4200

4. Start the Server:

  ```sh
  npm run dev
  ```

- If MongoDB is running, you should see: "BD Connected"

## Ngrok Setup

1. Create a free account at Ngrok and download the ZIP from Ngrok Download.
2. Extract the ZIP and run ngrok.exe.
3. Authenticate using the command (replace <your_authtoken> with your Ngrok token):
 ```sh
  ngrok config add-authtoken <your_authtoken>
  ```
4. Create tunnels:
- For video streaming:
```sh
ngrok http 80
```
- For the web application:
 ```sh
  ngrok http --host-header=rewrite 4200
  ```

## Nginx Setup
Run nginx.exe as an administrator from the nginx folder.

## OBS Studio Setup
1. Download OBS Studio from OBS Project.
1. Open OBS Studio, navigate to File → Settings → Stream and configure:
- Service: Custom...
- Server: rtmp://localhost/live
- Stream Key: stream?psk=1234

## Adding the Ngrok Link to the Web Application
- Open the file:
 ```sh
  client/src/app/components/directo/directo.component.html
  ```
Replace the iframe src with the Ngrok URL (Forwarding link).

## Contributing
Feel free to fork this repository and submit issues or pull requests. Contributions are always welcome!
