# Project objective: Use the PIR sensor to detect whether there's movement or not
#
# Hardware and connections used:
#   PIR VCC to 3.3 V
#   PIR GND to GND
#   PIR D Pin to GPIO Pin 16
#
# Programmer: Adrian Josele G. Quional

import RPi.GPIO as GPIO
from time import sleep

# Usar numeracin BCM (GPIO16 = pin fsico 36)
GPIO.setmode(GPIO.BCM)

PIR_PIN = 22
GPIO.setup(PIR_PIN, GPIO.IN)

try:
    while True:
        if GPIO.input(PIR_PIN) == 1:
            print(f"PIR value: 1     Status: Motion detected!")
        else:
            print(f"PIR value: 0     Status: Waiting for movement...")
        sleep(1)

except KeyboardInterrupt:
    print("\nPrograma detenido.")

finally:
    GPIO.cleanup()  # Libera los pines al salir
