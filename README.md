
# TiledToAngbandExport
startup.js script for [bjorn/tiled](https://github.com/bjorn/tiled) map editor with export for [Angband.online](http://angband.online) project running on [PWMAngband](http://powerwyrm.monsite-orange.fr/page-56e3134c5ebab.html) base.
Read the manual to know where you should place the script: https://doc.mapeditor.org/en/latest/reference/scripting/#startup-script

Important: 
- You should use the latest development snapshot rather than stable version of Tiled (on the moment it is written stable was 1.2.2 and the workig version with API support is 2019.02.10)
- The tileset should be open in the program so the script could read the additional tile fields
- Script tries to find ASCII symbol in type field, than in custom 'name' field then just uses ' ' (space)
