var customMapFormat = {
    name: 'Andgband.online ASCII',
    extension: 'txt',

    toString: function(map, fileName) {
		var layer = map.layerAt(0);
		var horizontalBorder = 'D:' + new Array(layer.width + 3).join('#');
		var asciiMap = '';
		var dictionary = { '-1': ' ' };

		if (layer.isTileLayer) {
			asciiMap = horizontalBorder;
			for (y = 0; y < layer.height; ++y) {
				var row = '';
				for (x = 0; x < layer.width; ++x) {
					var tile, character, tileId;
					tileId = layer.cellAt(x, y).tileId;

					if (!!dictionary[tileId]) {
						character = dictionary[tileId];
					} else {
						tile = tileId != -1 ? layer.tileAt(x, y) : null;
						character = tile ? tile.type || tile.property('name') || ' ' : ' ';
						dictionary[tileId] = character;
					}

					row += character;
				}
				asciiMap += '\nD:#' + row + '#';
			}
			asciiMap += '\n' + horizontalBorder;
		}

		tiled.log('Done!');
        return asciiMap;
    },
}

tiled.registerMapFormat('Andgband.online', customMapFormat);
