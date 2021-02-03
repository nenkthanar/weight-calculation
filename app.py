from http.server import HTTPServer, BaseHTTPRequestHandler
import os
import logging
import io
import socketserver
import websockets
import threading
from threading import Condition
from threading import Thread

import time
import json
import asyncio
from http.server import BaseHTTPRequestHandler, HTTPServer
from http import server
import thread6

from websocket_server import WebsocketServer
class ws_comm():
    command = ""

def new_client(client, server):
	print("New client connected and was given id %d" % client['id'])

def client_left(client, server):
	print("Client(%d) disconnected" % client['id'])

def message_received(client, server, message):
	if len(message) > 200:
		message = message[:200]+'..'
	ws_comm.command = message
 
PORT=9000
webSock = WebsocketServer(PORT)

def run_websock(webSock):
    webSock.set_fn_new_client(new_client)
    webSock.set_fn_client_left(client_left)
    webSock.set_fn_message_received(message_received)
    webSock.run_forever()

class StaticServer(BaseHTTPRequestHandler):
    def end_headers (self):
        self.send_header('Access-Control-Allow-Origin', '*')
        BaseHTTPRequestHandler.end_headers(self)

    def do_GET(self):
        global webSock
        #root = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'weight-calculation/output/weight-calculation')
        root = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'app/weight-calculation') #for pyinstaller command
        filename = root + ''
        if self.path == '/':
            filename = root + '/index.html' 
        else:
            filename = root + self.path
        self.send_response(200)
        if filename[-4:] == '.css':
            self.send_header('Content-type', 'text/css')
        elif filename[-5:] == '.json':
            self.send_header('Content-type', 'application/javascript')
        elif filename[-3:] == '.js':
            self.send_header('Content-type', 'application/javascript')
        elif filename[-4:] == '.ico':
            self.send_header('Content-type', 'image/x-icon')
        else:
            self.send_header('Content-type', 'text/html')
        self.end_headers()
        with open(filename, 'rb') as fh:
            html = fh.read()
            self.wfile.write(html)

@thread6.threaded()
def run_http(server_class=HTTPServer, handler_class=StaticServer, port=8000):
    server_address = ('0.0.0.0', port)
    httpd = server_class(server_address, handler_class)
    print('Starting http on port {}'.format(port))
    print('Seriver started at http://localhost:8000')
    httpd.serve_forever()

@thread6.threaded()    
def serial_send(server):
    from python_serial import serial_commu 
    try:
        while True:
            val = serial_commu.read()
            if val != "":
                print("Serial read : ",val)    
                server.send_message_to_all(json.dumps({"measure":val}))         
    except  Exception as e:
        pass

import webbrowser

@thread6.threaded()   
def run_chrome():
    url = 'http://localhost:8000'
    chrome_path = 'C:/Program Files/Google/Chrome/Application/chrome.exe %s'
    webbrowser.get(chrome_path).open(url)

try:
    run_chrome()
    run_http()
    serial_send(webSock)
    run_websock(webSock)

except Exception as e:
    pass


