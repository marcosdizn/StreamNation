***************Instalación (Windows) ******************

Autor: marcosdizn

**MongoDB**
Seguir los pasos del manual de instalación (en el paso 3b instalar MongoDB como un servicio Windows):
https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/

Para iniciar o detener el servicio MongoDB, click derecho => (iniciar o detener), desde la consola de servicios de Windows.


**Node.js**
Descargar el Windows Installer desde https://nodejs.org/en/download/

**Angular**
Desde un terminal windows ejecutar el siguiente comando: npm install -g @angular/cli

**Lanzar la aplicación web**
Ejecutar el siguiente comando solo la primera vez para instalar todas las dependencias Angular del proyecto, 2 veces (una dentro de la carpeta cliente y otra en servidor): npm install

Ejecutar el cliente: dentro de cliente haremos npm start, después abrimos un navegador en http://localhost:4200
Ejecutar el servidor: abrir otro terminal dentro de servidor, ejecutar el comando: npm run dev, si Mongo está iniciado debería mostrarse el mensaje BD Conectada.

** NGROK**
Crear una cuenta gratuita en https://ngrok.com/ y descargar el zip desde https://ngrok.com/download
Descomprimir el zip con el ejecutable ngrok.exe

En la web de Ngrok, en el panel de control de nuestra cuenta, debemos ir al apartado getting started -> your authtoken, y copiar el siguiente comando para ejecutar en la ruta donde está el ngrok.exe (este comando no funciona en PowerShell, solo funciona a través de la terminal clásica de Windows):

ngrok config add-authtoken <your_authtoken>
Para establecer el tunel del streaming de video: ngrok http 80
Para la página web: ngrok http --host-header=rewrite 4200

**NGINX** 
Dentro de la carpeta nginx, ejecutar ngnix.exe como administrador

**OBS**
Descargar desde https://obsproject.com/es/download
Vamos a Archivo->Ajustes->Emisión y marcamos en Servicio: Personalizado..., en Servidor: rtmp://localhost/live y en Clave de retransmisión: stream?psk=1234

**Insertar el enlace de Ngrok en nuestra aplicación web**
Ir a cliente/src/app/components/directo y pegar la URL que empieza por https generada por ngrok (donde pone Forwarding), en el archivo directo.component.html, pegar la url en el atributo src del tag iframe del fichero html.
