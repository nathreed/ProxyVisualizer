#!/bin/bash

#Get the node server running
screen -dmS WebSocketServer
screen -p 0 -S WebSocketServer -X eval 'stuff "node server.js"\015'
#Get the screen ready for the user to enter their password with sudo
screen -dmS LogReader
screen -p 0 -S LogReader -X eval 'stuff "sudo python logReader.py"\015'
screen -r LogReader
