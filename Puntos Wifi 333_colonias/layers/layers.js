var wms_layers = [];


        var lyr_MapaBase_0 = new ol.layer.Tile({
            'title': 'Mapa Base',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'http://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_Alcaldas_1 = new ol.format.GeoJSON();
var features_Alcaldas_1 = format_Alcaldas_1.readFeatures(json_Alcaldas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Alcaldas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Alcaldas_1.addFeatures(features_Alcaldas_1);
var lyr_Alcaldas_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Alcaldas_1, 
                style: style_Alcaldas_1,
                interactive: true,
                title: '<img src="styles/legend/Alcaldas_1.png" /> Alcaldías'
            });
var format_Colonias333_2 = new ol.format.GeoJSON();
var features_Colonias333_2 = format_Colonias333_2.readFeatures(json_Colonias333_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Colonias333_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Colonias333_2.addFeatures(features_Colonias333_2);
var lyr_Colonias333_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Colonias333_2, 
                style: style_Colonias333_2,
                interactive: true,
                title: '<img src="styles/legend/Colonias333_2.png" /> Colonias (333)'
            });
var format_PuntosWifi_3 = new ol.format.GeoJSON();
var features_PuntosWifi_3 = format_PuntosWifi_3.readFeatures(json_PuntosWifi_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PuntosWifi_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PuntosWifi_3.addFeatures(features_PuntosWifi_3);
var lyr_PuntosWifi_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PuntosWifi_3, 
                style: style_PuntosWifi_3,
                interactive: true,
                title: '<img src="styles/legend/PuntosWifi_3.png" /> Puntos Wifi'
            });

lyr_MapaBase_0.setVisible(true);lyr_Alcaldas_1.setVisible(true);lyr_Colonias333_2.setVisible(true);lyr_PuntosWifi_3.setVisible(true);
var layersList = [lyr_MapaBase_0,lyr_Alcaldas_1,lyr_Colonias333_2,lyr_PuntosWifi_3];
lyr_Alcaldas_1.set('fieldAliases', {'X_id': 'X_id', 'id': 'id', 'nomgeo': 'nomgeo', 'cve_mun': 'cve_mun', 'cve_ent': 'cve_ent', 'cvegeo': 'cvegeo', 'g_pnt_2': 'g_pnt_2', 'geo_shp': 'geo_shp', 'municip': 'municip', });
lyr_Colonias333_2.set('fieldAliases', {'ENT': 'ENT', 'CVEDT': 'CVEDT', 'NOMDT': 'NOMDT', 'DTTOLOC': 'DTTOLOC', 'CVEUT': 'CVEUT', 'NOMUT': 'NOMUT', 'POB2010': 'POB2010', 'ID': 'ID', 'Fecha': 'Fecha', 'Clave Colo': 'Clave Colo', 'Alcaldia': 'Alcaldia', 'Nombre': 'Nombre', 'colonia333': 'colonia333', });
lyr_PuntosWifi_3.set('fieldAliases', {'ID': 'ID', 'Estado': 'Estado', 'Alcald�a': 'Alcald�a', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Puntos_de_': 'Puntos_de_', 'Programa': 'Programa', 'field_8': 'field_8', 'field_9': 'field_9', 'field_10': 'field_10', 'ENT': 'ENT', 'CVEDT': 'CVEDT', 'NOMDT': 'NOMDT', 'DTTOLOC': 'DTTOLOC', 'CVEUT': 'CVEUT', 'NOMUT': 'NOMUT', 'POB2010': 'POB2010', 'ID_2': 'ID_2', 'Fecha': 'Fecha', 'Clave Colo': 'Clave Colo', 'Alcaldia': 'Alcaldia', 'Nombre': 'Nombre', 'colonia333': 'colonia333', });
lyr_Alcaldas_1.set('fieldImages', {'X_id': 'Range', 'id': 'Range', 'nomgeo': 'TextEdit', 'cve_mun': 'Range', 'cve_ent': 'Range', 'cvegeo': 'Range', 'g_pnt_2': 'TextEdit', 'geo_shp': 'TextEdit', 'municip': 'Range', });
lyr_Colonias333_2.set('fieldImages', {'ENT': 'TextEdit', 'CVEDT': 'TextEdit', 'NOMDT': 'TextEdit', 'DTTOLOC': 'TextEdit', 'CVEUT': 'TextEdit', 'NOMUT': 'TextEdit', 'POB2010': 'TextEdit', 'ID': 'Range', 'Fecha': 'DateTime', 'Clave Colo': 'TextEdit', 'Alcaldia': 'TextEdit', 'Nombre': 'TextEdit', 'colonia333': 'TextEdit', });
lyr_PuntosWifi_3.set('fieldImages', {'ID': 'TextEdit', 'Estado': 'TextEdit', 'Alcald�a': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'Puntos_de_': 'TextEdit', 'Programa': 'TextEdit', 'field_8': 'TextEdit', 'field_9': 'TextEdit', 'field_10': 'TextEdit', 'ENT': 'TextEdit', 'CVEDT': 'TextEdit', 'NOMDT': 'TextEdit', 'DTTOLOC': 'TextEdit', 'CVEUT': 'TextEdit', 'NOMUT': 'TextEdit', 'POB2010': 'TextEdit', 'ID_2': 'Range', 'Fecha': 'DateTime', 'Clave Colo': 'TextEdit', 'Alcaldia': 'TextEdit', 'Nombre': 'TextEdit', 'colonia333': 'TextEdit', });
lyr_Alcaldas_1.set('fieldLabels', {'X_id': 'no label', 'id': 'no label', 'nomgeo': 'no label', 'cve_mun': 'no label', 'cve_ent': 'no label', 'cvegeo': 'no label', 'g_pnt_2': 'no label', 'geo_shp': 'no label', 'municip': 'no label', });
lyr_Colonias333_2.set('fieldLabels', {'ENT': 'no label', 'CVEDT': 'no label', 'NOMDT': 'no label', 'DTTOLOC': 'no label', 'CVEUT': 'no label', 'NOMUT': 'no label', 'POB2010': 'no label', 'ID': 'no label', 'Fecha': 'no label', 'Clave Colo': 'no label', 'Alcaldia': 'no label', 'Nombre': 'no label', 'colonia333': 'no label', });
lyr_PuntosWifi_3.set('fieldLabels', {'ID': 'no label', 'Estado': 'no label', 'Alcald�a': 'no label', 'Latitud': 'no label', 'Longitud': 'no label', 'Puntos_de_': 'no label', 'Programa': 'no label', 'field_8': 'no label', 'field_9': 'no label', 'field_10': 'no label', 'ENT': 'no label', 'CVEDT': 'no label', 'NOMDT': 'no label', 'DTTOLOC': 'no label', 'CVEUT': 'no label', 'NOMUT': 'no label', 'POB2010': 'no label', 'ID_2': 'no label', 'Fecha': 'no label', 'Clave Colo': 'no label', 'Alcaldia': 'no label', 'Nombre': 'no label', 'colonia333': 'no label', });
lyr_PuntosWifi_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});