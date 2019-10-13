
# TiledToAngbandExport
startup.js script for [bjorn/tiled](https://github.com/bjorn/tiled) map editor with export for [Tangaria](http://tangaria.com/) project running on [PWMAngband](http://powerwyrm.monsite-orange.fr/page-56e3134c5ebab.html) base.
Read the manual to know where you should place the script: https://doc.mapeditor.org/en/latest/reference/scripting/#script-extensions

Important:
- You should use the latest development snapshot rather than stable version of Tiled (on the moment it is written stable was 1.2.4 and the working version with API support is 2019.10.08)
- Script takes ASCII symbol from custom 'map' field for map section of the export, and from 'mask' field for the mask section. Returns empty space if both fields are empty.
