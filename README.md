
# TiledToAngbandExport
Export script for [bjorn/tiled](https://github.com/bjorn/tiled) map editor with export for [Tangaria](http://tangaria.com/) project running on [PWMAngband](http://powerwyrm.monsite-orange.fr/page-56e3134c5ebab.html) base.
Read the manual to know where you should place the script: https://doc.mapeditor.org/en/latest/reference/scripting/#script-extensions

Important:
- Works with Tiled 1.3.x
- Script takes ASCII symbol from custom 'map' field for map section of the export, and from 'mask' field for the mask section. Returns empty space if both fields are empty.
