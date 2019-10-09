var customMapFormat = {
    name: 'Angband.online ASCII',
    extension: 'txt',

    write: function(map, fileName) {
		var layer = map.layerAt(0);
		var asciiMap = 'feat:grass:tree:0\n\n';
		var asciiMask = '';

		var horizontalBorder = function (prefix) { return prefix + ':' + new Array(layer.width + 3).join('#'); };
		var mapDictionary = { '-1': ' ' };
		var maskDictionary = { '-1': ' ' };

		if (layer.isTileLayer) {
			asciiMap += horizontalBorder('map');
			asciiMask = horizontalBorder('mask');

			for (y = 0; y < layer.height; ++y) {
				var mapRow = '';
				var maskRow = '';
				for (x = 0; x < layer.width; ++x) {
					var tile, mapChar, maskChar, tileId;
					tileId = layer.cellAt(x, y).tileId;

					if (!!mapDictionary[tileId]) {
						mapChar = mapDictionary[tileId];
						maskChar = maskDictionary[tileId];
					} else {
						tile = tileId != -1 ? layer.tileAt(x, y) : null;
						mapChar = tile ? tile.property('map') || ' ' : ' ';
						maskChar = tile ? tile.property('mask') || tile.property('map') || ' ' : ' ';
						mapDictionary[tileId] = mapChar;
						maskDictionary[tileId] = maskChar;
					}

					mapRow += mapChar;
					maskRow += maskChar;
				}
				asciiMap += '\nmap:#' + mapRow + '#';
				asciiMask += '\nmask:#' + maskRow + '#';
			}
			asciiMap += '\n' + horizontalBorder('map');
			asciiMask += '\n' + horizontalBorder('mask');
		}

		asciiMap += '\n\n';
		asciiMap += asciiMask;

		tiled.log('Done!');

        return asciiMap;
    },
};

tiled.registerMapFormat('Angband.online', customMapFormat);
