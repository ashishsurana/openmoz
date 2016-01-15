# Welcome to OpneMoz's Website Repository


**Contribution and helping other build new things is what an Open Source is.**

Read the instructions below if you want to contribute to OpenMoz website.Our website is created by an open source community of developers like you. Welcome!

We welcome new contributors to dive in and improve our webite. It's a great, hands-on way to learn how things work.Start by setting up evironment.

## How to setup environment ?

After cloning OpneMoz repository to your local machines follow this steps:

1.Move to openmoz directory

2.Install NPM by typing
   * $ sudo apt-get update
   * $ sudo apt-get install nodejs
   * $ sudo apt-get install npm

3.Now install install npm dependencies
   * $ npm init
   
4.This time install express-generator
   * $ npm install -g express-generator

you are done with setting up environment

**Always create your own branch and don't commit anyhting to master branch before creating PR!**

## Structure of directory
    openmoz
	.
	+-- bin
	|   +-- www
	+-- node_modules
	|   +-- .bin
	|   +-- body-parser
	|   +-- cookie-parser
	|   +-- debug
	|   +-- ejs
	|   +-- express
	|   +-- express-generator
	|   +-- morgan
	|   +-- static-favicon
	+-- public
	|   +-- Images
	|   |   +-- blogs 
	|   |   +-- events
	|   |   +-- misc
	|   |   +-- speakers
	|   +-- javascript
	|   |   +-- script.js
	|   +-- stylesheets
	|   |   +-- style.css
	+-- routes
	|   +-- index.js
	+-- views
	|   +-- partials
	|   |   +-- content 
	|   |   |   +-- bloglist.ejs
	|   |   |   +-- blogscollection.ejs
	|   |   |   +-- eventgallery.ejs
	|   |   |   +-- eventslist.ejs
	|   |   |   +-- getbusy.ejs
	|   |   |   +-- nextmeeting.ejs
	|   |   |   +-- socialmedia.ejs
	|   |   |   +-- whoarewe.ejs
	|   |   |   +-- whoshouldjoin.ejs 
	|   |   +-- template
	|   |   |   +-- footer.ejs
	|   |   |   +-- head.ejs
	|   |   |   +-- header.ejs
	|   |   |   +-- jsdefaults.ejs
	|   +-- blogs.ejs
	|   +-- error.ejs
	|   +-- events.ejs
	|   +-- index.ejs
	+-- app.js
	+-- data.json
	+-- package.json
	+-- Procfile
	+-- README.md


Have a some idea that you want to in our website or make something even better? Feel free to dive in and make changes. 

## Aftermath of making changes

After you have made your changes, check on local machine if site is working properly or not.
If you have made changes to json file always validate the json file at [jason validator](https://jsonformatter.curiousconcept.com) before commiting changes or crearing PR! 

## Discuss with Us

Want help? Need to think out loud? 

[Talk to us on Slack](mailto:openmoz@tutanota.com?subject=AddMe) or [email us](mailto:openmoz@tutanota.com).
