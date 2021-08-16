# Remarkable add-on for Firefox

This project is a copy of official reMarkable extension for Chrome but converted for Firefox.

This is an experimental work but it does the job at this time.

## How to use

* Get the [latest release](https://github.com/ajira86/remarkable-firefox/releases/download/1.2.0.1/read_on_remarkable-1.2.0.1-fx.xpi)
* Get [Remarkable one-time code](https://my.remarkable.com/device/connect/remarkable)
* Enjoy sharing your pages to your device

# Contributing

## Setup from source

* Create a zip of the project content
* Go to "Manage Your Extensions"
* Choose "Debug Add-ons" in menu
* Click on "Load Temporary Add-on" to load the zip file
* To get a Remarkable one-time code go to [https://my.remarkable.com/device/connect/remarkable](https://my.remarkable.com/device/connect/remarkable)
* Enjoy sharing your pages to your device

## Update the extension from the original

* Copy the original extension folder from Chrome
* Check manifest diff (applications node as to be added)

## TODO

* [ ] Fix manifest file warnings
* [ ] Publish on mozilla website
* [ ] Fix plugin dropdown size 
* [ ] Fix printing method for PDF format

### v1.2.0.1

* [x] Display preferences in a new tab to keep correct presentation

### v1.2.0

* [x] Fix unverified addon error on standard installation
