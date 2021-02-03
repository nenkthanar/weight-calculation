from http.server import HTTPServer, BaseHTTPRequestHandler
import os
import logging
import io
import socketserver
import websockets
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
server1 = WebsocketServer(PORT)
server1.set_fn_new_client(new_client)
server1.set_fn_client_left(client_left)
server1.set_fn_message_received(message_received)

    
class StaticServer(BaseHTTPRequestHandler):
    def end_headers (self):
        self.send_header('Access-Control-Allow-Origin', '*')
        BaseHTTPRequestHandler.end_headers(self)

    def do_GET(self):
        global server1
        root = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'weight-cal/dist/weight-cal')
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
        self_test(server1)
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
def self_test(server):
    import Serial.Serial as ser
    try:
        while True:
            #val = ser.read()
            ser.read();
            data = json.dumps({"measure":"25"})
            server.send_message_to_all(data) 
            time.sleep(0.1)
            data = json.dumps({"measure":"35"})
            server.send_message_to_all(data) 
            time.sleep(0.1)

    except  Exception as e:
        print(e.message)
try:

    run_http()
    self_test(server1)
    server1.run_forever()
    
except Exception as e:
    pass

i = 10
