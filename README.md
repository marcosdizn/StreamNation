# 🎬 StreamNation – Live Streaming Platform  

## Introduction  
**StreamNation** is a **simple real-time streaming platform** designed to facilitate **live and pre-recorded video broadcasting**. Built with **Node.js, Angular, Nginx, and RTMP**, it provides a straightforward way to stream content via a **public webpage**.  

This project integrates **Ngrok** for secure tunneling and **OBS Studio** for easy streaming, making it a useful tool for **developers exploring streaming technologies**.  

---

## ✨ Key Features  

- 🎥 **Live Video Streaming** – Broadcast live content easily.  
- 📼 **Pre-recorded Video Playback** – Stream stored videos seamlessly.  
- 🌐 **Public Webpage Integration** – Share your streams via a URL.  
- 🔒 **Secure Tunneling with Ngrok** – Generate public addresses for remote access.  
- 🚀 **Backend with Nginx** – Ensures stable performance.  
- 🎬 **OBS Studio Support** – Enables smooth live streaming.  
- 📡 **RTMP Protocol** – Standard technology for video streaming.  

---

## 🛠️ Tech Stack

- 🟢 **Backend**: Node.js, Nginx  
- 🔷 **Frontend**: Angular  
- 🎥 **Streaming Protocol**: RTMP  
- 🌍 **Tools**: Ngrok, OBS Studio  

---

## ⚙️ Installation Guide (Windows)  

### 🔧 Prerequisites  
Before setting up the project, install the following dependencies:  

1. **MongoDB** – Follow the official [MongoDB Installation Guide](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/).  
   - Install MongoDB as a **Windows service**.  
   - Start or stop the service via the **Windows Services Console**.  

2. **Node.js** – Download and install from [Node.js official site](https://nodejs.org/en/download/).  

3. **Angular CLI** – Install globally by running:  
   ```sh
   npm install -g @angular/cli
   ```

---

## 🚀 Running the Application

1. Install dependencies (Run in both the client and server folders):
  ```sh
  npm install
  ```
2. Start the Client:
  ```sh
  npm start
  ```
- Open your browser and visit: **http://localhost:4200**

3. Start the Server:
  ```sh
  npm run dev
  ```
- If MongoDB is running correctly, you should see: **"DB Connected"**  

---

## 🌍 Ngrok Setup

1. Create a free account at [Ngrok](https://ngrok.com/) and download the ZIP file.  
2. Extract the ZIP and run `ngrok.exe`.  
3. Authenticate using your token (replace `<your_authtoken>` with your Ngrok token):  
 ```sh
  ngrok config add-authtoken <your_authtoken>
  ```
4. Create tunnels:  
- **For video streaming:**  
```sh
ngrok http 80
```
- **For the web application:**  
```sh
ngrok http --host-header=rewrite 4200
```

---

## 🔥 Nginx Setup
Run `nginx.exe` as an administrator from the Nginx installation folder.

---

## 🎬 OBS Studio Setup
1. Download **OBS Studio** from [OBS Project](https://obsproject.com/).  
2. Open OBS Studio, navigate to **File → Settings → Stream** and configure:  
   - **Service**: Custom...  
   - **Server**: `rtmp://localhost/live`  
   - **Stream Key**: `stream?psk=1234`  

---

## 🔗 Adding the Ngrok Link to the Web Application
- Open the file:  
 ```sh
  client/src/app/components/directo/directo.component.html
  ```
- Replace the `iframe` `src` with the **Ngrok Forwarding link**.

---

## 🤝 Contributing
Interested in improving the project? Contributions are welcome!  
- Fork this repository 🔀  
- Submit issues 🐛  
- Open pull requests 📥  

Let's build a better streaming platform together! 🎥
