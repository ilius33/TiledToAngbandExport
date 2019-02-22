var customMapFormat = {
    name: 'Andgband.online ASCII',
    extension: 'txt',

    toString: function(map, fileName) {
		var tileset;

		tiled.openAssets.forEach(function(asset) {
			tileset = asset.isTileset ? asset : null;
		});

		if (!tileset) {
			tiled.alert('Tileset was not found! Please open tileset file.');
			return '';
		}

		var layer = map.layerAt(0);
		var horysintalBorder = 'D:' + new Array(layer.width + 3).join('#');
		var asciiMap = horysintalBorder;

		if (layer.isTileLayer) {
			for (y = 0; y < layer.height; ++y) {
				var row = '';
				for (x = 0; x < layer.width; ++x) {
					var tile = tileset.tile(layer.cellAt(x, y).tileId);
					row += tile ? tile.type || tile.property('name') || ' ' : ' ';
				}
				asciiMap += '\nD:#' + row + '#';
			}
		}
        return asciiMap + '\n' + horysintalBorder;
    },
}

tiled.registerMapFormat('Andgband.online', customMapFormat)
