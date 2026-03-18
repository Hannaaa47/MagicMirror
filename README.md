
# **Magic Mirror**

  

# Contenido

bla

bla

bla

  
  

# Fase 1: Que funcione

## Distribucion de linux

Antes de este proyecto habia trabajado con Raspbian OS de 64 bits Debian 12 bookworm, y el raspberry funcionaba lento por lo que decidimos buscar otras opciones.
Buscamos otras alternativas:

 - La primera opción era DietPi, lo probe en una maquina virtual en mi computadora y me di cuenta que no era compatible con la biblioteca Electron.
  - Probe Raspberry Pi OS de 32 bits pero igual era incompatible con una biblioteca de node.js.
 Asi que para no complicarnos la vida usaremos Rasperry Pi OS de 64 bits.

Para usarlo lo primero que hice es instalar Raspberry pi imager

Seleccione el modelo de mi raspberry, el sistema operativo, el microsd de almacenamiento, nombre del dispositivo, zona horaria, nombre de usuario, contraseña, red, ME PERMITIO ACTIVAR EL SSH, confirme mis elecciones y empezo a escribir.

![Raspberry pi Imager](img/RaspberryPiImager.png)
  

Puse la microsd en el raspberry y espere a que iniciara y terminara con las ultimas configuraciones

Configure el internet

Por ultimo habilite el vnc para poder controlarlo desde la laptop

![RealVNC](img/RealVNC.png)
  

Instale el RealVNC Vierwer en la laptop y con la direccion ip del raspberry me conecte

  

Busco actualizaciones

`sudo apt update`

`sudo apt upgrade -y`

  

## Descargar Magic Mirror

Para esto voy a seguir los pasos que dice la pagina oficial https://docs.magicmirror.builders/getting-started/installation.html

  

Dice que el primer paso es **descargar e instalar node.js**

Para eso sigo las instrucciones del repo de github de node.js

https://github.com/nodesource/distributions/blob/master/DEV_README.md#installation-instructions

  

para ver si curl esta instalado hago

`curl --version`

si esta instalado

  

Este comando *descarga un script que luego se usa para instalar Node.js (v22) desde el repositorio oficial de NodeSource.

`curl -fsSL https://deb.nodesource.com/setup_22.x -o nodesource_setup.sh`

  

me voy a matar dice que node.js no es compatible con 32 bits

![fail](img/Fail1.png)

creo que voy a tener que volver al raspberry pi os de 64 bits

  
  

corro el setup script

`sudo bash nodesource_setup.sh`

  

installo node.js

`sudo apt install -y nodejs`

  

compruebo la instalacion

`node -v`

  

El siguiente paso es ver si esta instalado **git**

para ver si esta instalado solo escribo

`git`

si esta instalado 

  

El paso 3 seria **clonar el repositorio del magic mirror**

`git clone https://github.com/MagicMirrorOrg/MagicMirror.git`

Entro al repositorio 
`cd MagicMirror`

instalo la aplicacion
`node --run install-mm`

![node instalado](img/NodejsInstalado.png)

inicio la aplicacion 
`node --run start`

![node run](img/Noderun.png)

salieron muchos errores no se si eso esta bien, a lo mejor tiene que ver con que se me fue el internet a media descarga nose

corro eso para que se instale todo al 100

![por si acaso](img/npmInstall.png)

lo voy a correr a ver si esta todo bien 
lo intento correr con 
`node --run start`

pero me da un error

![no config file](img/NoConfigFile.png)

creo que me salte este paso jeje
copio el archivo de configuracion
`cp config/config.js.sample config/config.js`

ahora si lo corro 
`node --run start`

y ya funciono lestgoooo

![funciono](img/Funciono.png)


# Fase 2: Configuración, modulos y sensores
## Configurar
**Configurar modulos existentes**

**Cambiar orientación de pantalla**

**Autostart**

## Agregar modulos
**Spotify**

## Sensores 
**Proximidad**
https://github.com/paviro/MMM-PIR-Sensor
https://wokwi.com/projects/359631459962659841
Circuito 
Script
Modulo

**Humedad y temperatura**
https://github.com/ryck/MMM-DHT-Sensor
https://wokwi.com/projects/357620843461800961
Cicuito 
Script 
Modulo

# Ensamblaje
Como cortamos la madera y asi 
gran tuto https://michaelteeuw.nl/series/MagicMirror

# Fase 3: Pagina web


IDEAS 
# Fase X: Espejo de shrek
https://youtu.be/TWfRdWaov9s?si=9I-1MyFQDMZEY0m9
https://courses.media.mit.edu/2016spring/mass65/2016/05/14/the-magic-mirror/

# Fase X: Camara 
Para poder interactuar con el espejo 

# Fase X: IoT



  

> Written with [StackEdit](https://stackedit.io/).