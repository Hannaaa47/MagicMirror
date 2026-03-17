# **Magic Mirror**

# Contenido
bla
bla 
bla


# Fase 1: Que funcione
## Distribucion de linux
Antes de este proyecto habia trabajado con Raspbian OS de 64 bits Debian 12 bookworm, y el raspberry funcionaba muy lento por lo que decidimos buscar otras opciones.
La primera opción era DietPi, lo probe en una maquina virtual en mi computadora y me di cuenta que no era compatible con algunas librerias que ocupa el Magic Mirror.
Por lo que la opción final fue ultilizar Raspberry Pi OS en su version de 32 bits.

Para usarlo lo primero que hice es instalar Raspberry pi imager
Seleccione el modelo de mi raspberry, el sistema operativo, el microsd de almacenamiento, nombre del dispositivo, zona horaria, nombre de usuario, contraseña, red, ME PERMITIO ACTIVAR EL SSH, confirme mis elecciones y empezo a escribir.
//insertar imagen

Puse la microsd en el raspberry y espere a que iniciara y terminara con las ultimas configuraciones
Configure el internet
Por ultimo habilite el vnc para poder controlarlo desde la laptop
//insertar imagen

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

creo que voy a tener que volver al raspberry pi os de 64 bits 






corro el setup script 
`sudo bash nodesource_setup.sh`

installo node.js
`apt install -y nodejs`

compruebo la instalacion
`node -v`

El siguiente paso es ver si esta instalado **git**
para ver si esta instalado solo escribo
`git`

si no sale nada, es que no esta instalado, entonces lo instalo con
`sudo apt install git  -y`

El paso 3 seria **clonar el repositorio del magic mirror**
`git clone https://github.com/MagicMirrorOrg/MagicMirror.git`

> Written with [StackEdit](https://stackedit.io/).