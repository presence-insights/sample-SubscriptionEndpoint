# MobileFirst Platform - Presence Insights Eventing With Node.js

## Overview

Once Presence Insights has been fully set up it can be useful to see what data it is collecting. The best way to do this is to set up a subscription in Presence Insights and use that subscription to display all the events, such as a device entering, exiting, or dwelling in a zone, that it collects.

The first step in setting up a subscription is to have an endpoint for that subscription. This guide will show you how to use Node.js as that endpoint and how to have the console display every Presence Insights event.

## Contents

This project contains the following files:

* **app.js** - main source code
* **package.json** - application metadata
* **manifest.yml** - file read by `cf push` for deployment
* **index.html** - basic html for application
* **style.css** - basic css for application

## Running this code

Use the following guide to set up a Node.js app on Bluemix: [Setting up a Node.js app](https://console.ng.bluemix.net/docs/cfapps/starter_app_usage.html)

After this program has been set up on Bluemix follow these steps to finish the setup:

1. Download the Node.js code that Bluemix generated for your new Node.js app
2. Replace the manifest.yml file from this project with the manifest.yml file from Bluemix
3. Open a command prompt and navigate to the folder ony your machine that this code is in
4. Type `cf push` and wait for the setup to complete
5. Type `cf logs <app-name>` where **<app-name>** is the name of your new Node.js app
6. Watch the events register on the command prompt

===

Copyright 2015 IBM Corp.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
