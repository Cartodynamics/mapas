var wms_layers = [];

var format_Pocousosemana09_0 = new ol.format.GeoJSON();
var features_Pocousosemana09_0 = format_Pocousosemana09_0.readFeatures(json_Pocousosemana09_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pocousosemana09_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pocousosemana09_0.addFeatures(features_Pocousosemana09_0);
var lyr_Pocousosemana09_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pocousosemana09_0, 
                style: style_Pocousosemana09_0,
                interactive: true,
                title: '<img src="styles/legend/Pocousosemana09_0.png" /> Poco uso — semana09'
            });
var format_Usomediosemana09_1 = new ol.format.GeoJSON();
var features_Usomediosemana09_1 = format_Usomediosemana09_1.readFeatures(json_Usomediosemana09_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Usomediosemana09_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Usomediosemana09_1.addFeatures(features_Usomediosemana09_1);
var lyr_Usomediosemana09_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Usomediosemana09_1, 
                style: style_Usomediosemana09_1,
                interactive: true,
                title: '<img src="styles/legend/Usomediosemana09_1.png" /> Uso medio — semana09'
            });
var format_Saturadossemana09_2 = new ol.format.GeoJSON();
var features_Saturadossemana09_2 = format_Saturadossemana09_2.readFeatures(json_Saturadossemana09_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Saturadossemana09_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Saturadossemana09_2.addFeatures(features_Saturadossemana09_2);
var lyr_Saturadossemana09_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Saturadossemana09_2, 
                style: style_Saturadossemana09_2,
                interactive: true,
                title: '<img src="styles/legend/Saturadossemana09_2.png" /> Saturados — semana09'
            });

        var lyr_Mapabase_3 = new ol.layer.Tile({
            'title': 'Mapa base',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'http://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_Lmitealcaldas_4 = new ol.format.GeoJSON();
var features_Lmitealcaldas_4 = format_Lmitealcaldas_4.readFeatures(json_Lmitealcaldas_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lmitealcaldas_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lmitealcaldas_4.addFeatures(features_Lmitealcaldas_4);
var lyr_Lmitealcaldas_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lmitealcaldas_4, 
                style: style_Lmitealcaldas_4,
                interactive: false,
                title: '<img src="styles/legend/Lmitealcaldas_4.png" /> Límite alcaldías'
            });
var group_UsodelWiFi = new ol.layer.Group({
                                layers: [lyr_Pocousosemana09_0,lyr_Usomediosemana09_1,lyr_Saturadossemana09_2,],
                                title: "Uso del WiFi"});

lyr_Pocousosemana09_0.setVisible(true);lyr_Usomediosemana09_1.setVisible(true);lyr_Saturadossemana09_2.setVisible(true);lyr_Mapabase_3.setVisible(true);lyr_Lmitealcaldas_4.setVisible(true);
var layersList = [group_UsodelWiFi,lyr_Mapabase_3,lyr_Lmitealcaldas_4];
lyr_Pocousosemana09_0.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Estado': 'Estado', 'Colonia': 'Colonia', 'Alcald�a': 'Alcald�a', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Puntos_de_': 'Puntos_de_', 'Programa': 'Programa', 'Escuelas': 'Escuelas', 'MAC': 'MAC', 'A�o de i': 'A�o de i', 'Proveedor': 'Proveedor', 'Proveedo_1': 'Proveedo_1', 'diarios': 'diarios', 'Usuarios_S': 'Usuarios_S', 'Conexiones': 'Conexiones', 'Tiempo': 'Tiempo', 'Clasificac': 'Clasificac', });
lyr_Usomediosemana09_1.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Estado': 'Estado', 'Colonia': 'Colonia', 'Alcald�a': 'Alcald�a', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Puntos_de_': 'Puntos_de_', 'Programa': 'Programa', 'Escuelas': 'Escuelas', 'MAC': 'MAC', 'A�o de i': 'A�o de i', 'Proveedor': 'Proveedor', 'Proveedo_1': 'Proveedo_1', 'diarios': 'diarios', 'Usuarios_S': 'Usuarios_S', 'Conexiones': 'Conexiones', 'Tiempo': 'Tiempo', 'Clasificac': 'Clasificac', });
lyr_Saturadossemana09_2.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Estado': 'Estado', 'Colonia': 'Colonia', 'Alcald�a': 'Alcald�a', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Puntos_de_': 'Puntos_de_', 'Programa': 'Programa', 'Escuelas': 'Escuelas', 'MAC': 'MAC', 'A�o de i': 'A�o de i', 'Proveedor': 'Proveedor', 'Proveedo_1': 'Proveedo_1', 'diarios': 'diarios', 'Usuarios_S': 'Usuarios_S', 'Conexiones': 'Conexiones', 'Tiempo': 'Tiempo', 'Clasificac': 'Clasificac', });
lyr_Lmitealcaldas_4.set('fieldAliases', {'nomgeo': 'nomgeo', 'cve_mun': 'cve_mun', 'g_pnt_2': 'g_pnt_2', 'geo_shp': 'geo_shp', 'frecuencia': 'frecuencia', });
lyr_Pocousosemana09_0.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'Estado': 'TextEdit', 'Colonia': 'TextEdit', 'Alcald�a': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'Puntos_de_': 'TextEdit', 'Programa': 'TextEdit', 'Escuelas': 'TextEdit', 'MAC': 'TextEdit', 'A�o de i': 'TextEdit', 'Proveedor': 'TextEdit', 'Proveedo_1': 'TextEdit', 'diarios': 'TextEdit', 'Usuarios_S': 'TextEdit', 'Conexiones': 'TextEdit', 'Tiempo': 'TextEdit', 'Clasificac': 'TextEdit', });
lyr_Usomediosemana09_1.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'Estado': 'TextEdit', 'Colonia': 'TextEdit', 'Alcald�a': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'Puntos_de_': 'TextEdit', 'Programa': 'TextEdit', 'Escuelas': 'TextEdit', 'MAC': 'TextEdit', 'A�o de i': 'TextEdit', 'Proveedor': 'TextEdit', 'Proveedo_1': 'TextEdit', 'diarios': 'TextEdit', 'Usuarios_S': 'TextEdit', 'Conexiones': 'TextEdit', 'Tiempo': 'TextEdit', 'Clasificac': 'TextEdit', });
lyr_Saturadossemana09_2.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'Estado': 'TextEdit', 'Colonia': 'TextEdit', 'Alcald�a': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'Puntos_de_': 'TextEdit', 'Programa': 'TextEdit', 'Escuelas': 'TextEdit', 'MAC': 'TextEdit', 'A�o de i': 'TextEdit', 'Proveedor': 'TextEdit', 'Proveedo_1': 'TextEdit', 'diarios': 'TextEdit', 'Usuarios_S': 'TextEdit', 'Conexiones': 'TextEdit', 'Tiempo': 'TextEdit', 'Clasificac': 'TextEdit', });
lyr_Lmitealcaldas_4.set('fieldImages', {'nomgeo': 'TextEdit', 'cve_mun': 'Range', 'g_pnt_2': 'TextEdit', 'geo_shp': 'TextEdit', 'frecuencia': 'TextEdit', });
lyr_Pocousosemana09_0.set('fieldLabels', {});
lyr_Usomediosemana09_1.set('fieldLabels', {});
lyr_Saturadossemana09_2.set('fieldLabels', {});
lyr_Lmitealcaldas_4.set('fieldLabels', {'nomgeo': 'no label', 'cve_mun': 'no label', 'g_pnt_2': 'no label', 'geo_shp': 'no label', 'frecuencia': 'no label', });
lyr_Lmitealcaldas_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});