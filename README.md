AlgoScript
==========
AlgoScript is a programming environment for javascript.
It has first been designed for educational purposes. Nevertheless, it implements several features that makes it useful for middle level javascript programmers too.

Test it [here](https://dl.dropboxusercontent.com/u/1961350/AlgoScript-dropbox-int.html?lang=en&dropbox=off "AlgoScript Programming tool") or [here](https://dl.dropboxusercontent.com/u/1961350/AlgoScript-dropbox-int.html&dropbox=off "AlgoScript Programming tool") for its french version !

# Basic features
## Editor with automatic indentation and syntax highligting
The editor makes use of Code Mirror and JSBeautify allowing a nice and powerfull edition of javascript sources

## Text and graphical input/output
Several functions allowing to manage simple "console-like" text intputs/outputs. Highlevel functions for drawing on a canvas.

## Debugging tools
The environment implements an automatic trace inspector.

## Local filesystem for storing sources
The HTML5 local filesystem is used to store several source and data files. Tools for browsing the filesystem and to add external files to this local filesystem are available.

## Audio management
Highlevel functions allow to deal with sounds (edition of wav files, sound synthesis,...).

## Standalone applications creation
One of the most interesting feature of the environment consists in the construction of universal standalone applcation in one click. These apps are universal in a sense that they works for both Mobile devices and desktop computers.

# Advanced features
## Dropbox synchronization
The local filesystem can be automaticaly synchronized by using a Dropbox(TM) datastore (require to have a free Dropbox account). Export of all the local filesystem as regular files in a dedicated Dropbox folder. By enabling this functionality, the local filesystem is always synchronized, whatever the computer/smartphone/tablet is used. By default, it is asked whether the local filesystem should be synchronized or not. The choice can be forced by adding dropbox=on or dropbox=off to the url of the interface. 
Test the synchronized version [here](https://dl.dropboxusercontent.com/u/1961350/AlgoScript-dropbox-int.html?lang=en&dropbox=on "AlgoScript Programming tool")

## Utilization of external libraries
Many powerfull javascript libraries are available accross the internet (for managing webgl 3D, data visualization, OpenStreetMap managment, jQuery....). AlgoScript integrates a simple mechanism allowing the use of these external libraries, thus opening the road to design some very powerfull applications. Several examples are provided in this repository.

## Answer Set Programming
Thanks to the javascript compiled versions of clasp provided by Adam Smith (via Emscripten), an ASP grounder and solver is now available. Examples on how Javascript/ASP can be used to solve both n-queens ([test it](https://dl.dropboxusercontent.com/u/1961350/AlgoScript-dropbox-int.html?load=Play_with_clasp_nqueens.js&dropbox=off&lang=en))and Sudoku ([test it](https://dl.dropboxusercontent.com/u/1961350/AlgoScript-dropbox-int.html?load=Play_with_clasp_sudoku.js&dropbox=off&lang=en))problems in ASP and pretty-print their solutions using javascript are provided. Notice that the trick used to combine compiled softwares and javascript opens many pedagogic perspectives. 

