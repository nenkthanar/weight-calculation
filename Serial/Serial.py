import serial
import time
import json

class connect():
    port = 'COM9'
    ser = serial.Serial(port,115200,timeout=2)

def send_comm(data):
    try:
        serComm = json.dumps({"comm":data})
        sd = bytes(serComm,'utf-8')
        connect.ser.write(sd)
        print("Command send : ",sd)
    except Exception as e:
        #print('Serial side: ',e)
        pass

def read():
    try:
        line = connect.ser.readline().decode('utf-8').rstrip()
        #input_serial = json.loads(line)
        return line
    except Exception as e:
        pass

def check_port():
    port_list = []
    from serial.tools import list_ports
    ports = list_ports.comports()  # Outputs list of available serial ports
    for port in ports :
        port_list.append(port.name)

    return port_list
