# AngularJS v1.6.1 Class Files

This is the code for Speeding Planet's AngularJS class (currently version 1.6.1)

## Prerequisites

Node.js and npm are essential to Angular development.

<a href="https://docs.npmjs.com/getting-started/installing-node" target="_blank" title="Installing Node.js and updating npm">
Get it now</a> if it's not already installed on your machine.

**Verify that you are running at least node `v4.x.x` and npm `3.x.x`** by running `node -v` and `npm -v` in a terminal/console window. Older versions produce errors.

## Setup

Clone or download the repository Then follow the directions appropriate to your operating system

### Windows setup

Open a command prompt
Change directory to your cloned/downloaded repository

```shell
npm install
bin\set-path
start npm start
```

Calling `start npm start` will open the web server in a separate window.

### MacOS setup

Open a terminal window
Change director to your cloned/downloaded repository

```shell
npm install
cd bin
source set-path
npm start > server.log 2>&1 &
```

Calling `npm start > server.log 2>&1 &` will run the server in the background. You can bring it back to the foreground with `fg` or list it with `jobs`.

## Verification

Open a browser and navigate to **http://localhost:8000/** and you should see a running server with a directory listing. Navigate to **http://localhost:8000/banking** and you should see the Banking application's Transactions Search page.
