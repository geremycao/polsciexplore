import geopandas
myshpfile = geopandas.read_file('data/vic-july-2021-esri/E_VIC21_region.shp')
myshpfile.to_file('E_VIC21_region.geojson', driver='GeoJSON')