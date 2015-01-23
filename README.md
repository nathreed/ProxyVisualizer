# ProxyVisualizer
A little project using WebSockets to send URLs from squid3 proxy log to a browser using node.js as the server.

#Prerequisites
All you need is an installation of squid3 proxy with the log file at /var/log/squid3/access.log  

#Installation
1. Change the variable `wsUri` in `index.html` to the IP of the machine you will be running the node server on.  
1. Copy `index.html` to a folder in your web server folder
2. Change the variable `serverIP` in logReader.py to the same IP you used in step 1.
3. Copy the `logReader.py`, the `server.js`, and the `start.sh` to a folder on the machine you will be running the server on.

#Usage
1. Run the start.sh
2. Enter your password for `sudo` when prompted (this is for reading the squid access log)
3. Navigate to the URL where you placed the `index.html` in any browser that supports HTML5/WebSockets.
4. Set a device or several to use the ip of the machine you are running the server on as HTTP proxy on port 3128
5. Watch the page update as you visit different URLs.
