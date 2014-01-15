AlgoScript
==========
AlgoScript is a programming environment for javascript.
It has first been designed for educational purposes. Nevertheless, it implements several features that makes it useful for middle level javascript programmers too.

Test it [here](https://dl.dropboxusercontent.com/u/1961350/AlgoScript-dropbox-int.html "AlgoScript Programming tool") or [here](https://dl.dropboxusercontent.com/u/1961350/AlgoScript-dropbox-full.html "AlgoScript Programming tool") for its french version !

# Basic features
## Editor with automatic indentation and syntax highligting
The editor makes use of Code Mirror and JSBeautify allowing a nice and powerfull edition of javascript sources

## Text and graphical input/output
Several functions allowing to manage simple "console-like" text intputs/outputs. Highlevel functions for drawing on a canvas.

## Debugging tools
The environment implementes an automatic trace inspector.

## Local filesystem for storing sources
The HTML5 local filesystem is used to store several source and data files. Tools for browsing the filesystem and to add external files to this local filesystem are available.

## Sound management
Highlevel functions allow to deal with sounds (edition of wav files, sound synthesis,...).

## Standalone applications creation
One of the most interesting feature of the environment consists in the construction of universal standalone applcation in one click.

# Advanced features
## Dropbox synchronization
The local filesystem can be automaticaly synchronized by using a Dropbox(TM) datastore (require to have a free Dropbox account). Export of all the local filesystem as regular files in a dedicated Dropbox folder. By enabling this functionality, the local filesystem is always synchronized, whatever the computer/smartphone/tablet is used.

## Utilization of external libraries
Many powerfull javascript libraries are available accross the internet (for managing webgl 3D, data visualization, OpenStreetMap managment,....). AlgoScript integrates a simple mechanism allowing the use of these external libraries, allowing to design some very powerfull applications.

## Answer Set Programming
Thanks to the javascript compiled versions of clasp provided by Alan Smith (via Emscripten), an ASP grounder and solver is now available. Examples on how Javascript/ASP can be used to solve both n-queens and Sudoku problems in ASP and pretty-print their solutions using javascript. Notice that the trick used to combine compiled softwares and javascript opens many pedagogic perspectives. 

