var wms_layers = [];


        var lyr_Mapabase_0 = new ol.layer.Tile({
            'title': 'Mapa base',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'http://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_Lmitealcaldas_1 = new ol.format.GeoJSON();
var features_Lmitealcaldas_1 = format_Lmitealcaldas_1.readFeatures(json_Lmitealcaldas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lmitealcaldas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lmitealcaldas_1.addFeatures(features_Lmitealcaldas_1);
var lyr_Lmitealcaldas_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lmitealcaldas_1, 
                style: style_Lmitealcaldas_1,
                interactive: false,
                title: '<img src="styles/legend/Lmitealcaldas_1.png" /> Límite alcaldías'
            });
var format_SitiosWifiporColonia_2 = new ol.format.GeoJSON();
var features_SitiosWifiporColonia_2 = format_SitiosWifiporColonia_2.readFeatures(json_SitiosWifiporColonia_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SitiosWifiporColonia_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SitiosWifiporColonia_2.addFeatures(features_SitiosWifiporColonia_2);
var lyr_SitiosWifiporColonia_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SitiosWifiporColonia_2, 
                style: style_SitiosWifiporColonia_2,
                interactive: true,
                title: '<img src="styles/legend/SitiosWifiporColonia_2.png" /> Sitios Wifi por Colonia'
            });
var format_SitiosWifi_3 = new ol.format.GeoJSON();
var features_SitiosWifi_3 = format_SitiosWifi_3.readFeatures(json_SitiosWifi_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SitiosWifi_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SitiosWifi_3.addFeatures(features_SitiosWifi_3);
var lyr_SitiosWifi_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SitiosWifi_3, 
                style: style_SitiosWifi_3,
                interactive: true,
                title: '<img src="styles/legend/SitiosWifi_3.png" /> Sitios Wifi'
            });

lyr_Mapabase_0.setVisible(true);lyr_Lmitealcaldas_1.setVisible(true);lyr_SitiosWifiporColonia_2.setVisible(true);lyr_SitiosWifi_3.setVisible(true);
var layersList = [lyr_Mapabase_0,lyr_Lmitealcaldas_1,lyr_SitiosWifiporColonia_2,lyr_SitiosWifi_3];
lyr_Lmitealcaldas_1.set('fieldAliases', {'X_id': 'X_id', 'id': 'id', 'nomgeo': 'nomgeo', 'cve_mun': 'cve_mun', 'cve_ent': 'cve_ent', 'cvegeo': 'cvegeo', 'g_pnt_2': 'g_pnt_2', 'geo_shp': 'geo_shp', 'municip': 'municip', 'Mujeco': 'Mujeco', });
lyr_SitiosWifiporColonia_2.set('fieldAliases', {'ENT': 'ENT', 'CVEDT': 'CVEDT', 'NOMDT': 'NOMDT', 'DTTOLOC': 'DTTOLOC', 'CVEUT': 'CVEUT', 'NOMUT': 'NOMUT', 'POB2010': 'POB2010', 'ID': 'ID', 'Puntos Wif': 'Puntos Wif', 'Centros de': 'Centros de', 'ColoniasSi': 'ColoniasSi', 'EscuelasPr': 'EscuelasPr', 'EscuelasSe': 'EscuelasSe', 'IEMS': 'IEMS', 'Metrobus': 'Metrobus', 'MiBarrio': 'MiBarrio', 'Pilares': 'Pilares', 'Postes C5': 'Postes C5', 'Sitios_Pub': 'Sitios_Pub', 'UnidadesHa': 'UnidadesHa', 'Universida': 'Universida', 'Utopias': 'Utopias', 'Cablebus': 'Cablebus', 'AICM': 'AICM', });
lyr_SitiosWifi_3.set('fieldAliases', {'ID': 'ID', 'Estado': 'Estado', 'Alcald�a': 'Alcald�a', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Puntos_de_': 'Puntos_de_', 'Programa': 'Programa', 'field_8': 'field_8', 'field_9': 'field_9', 'field_10': 'field_10', });
lyr_Lmitealcaldas_1.set('fieldImages', {'X_id': 'Range', 'id': 'Range', 'nomgeo': 'TextEdit', 'cve_mun': 'Range', 'cve_ent': 'Range', 'cvegeo': 'Range', 'g_pnt_2': 'TextEdit', 'geo_shp': 'TextEdit', 'municip': 'Range', 'Mujeco': 'TextEdit', });
lyr_SitiosWifiporColonia_2.set('fieldImages', {'ENT': 'TextEdit', 'CVEDT': 'TextEdit', 'NOMDT': 'TextEdit', 'DTTOLOC': 'TextEdit', 'CVEUT': 'TextEdit', 'NOMUT': 'TextEdit', 'POB2010': 'TextEdit', 'ID': 'Range', 'Puntos Wif': 'TextEdit', 'Centros de': 'TextEdit', 'ColoniasSi': 'TextEdit', 'EscuelasPr': 'TextEdit', 'EscuelasSe': 'TextEdit', 'IEMS': 'TextEdit', 'Metrobus': 'TextEdit', 'MiBarrio': 'TextEdit', 'Pilares': 'TextEdit', 'Postes C5': 'TextEdit', 'Sitios_Pub': 'TextEdit', 'UnidadesHa': 'TextEdit', 'Universida': 'TextEdit', 'Utopias': 'TextEdit', 'Cablebus': 'TextEdit', 'AICM': 'TextEdit', });
lyr_SitiosWifi_3.set('fieldImages', {'ID': 'TextEdit', 'Estado': 'TextEdit', 'Alcald�a': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'Puntos_de_': 'TextEdit', 'Programa': 'TextEdit', 'field_8': 'TextEdit', 'field_9': 'TextEdit', 'field_10': 'TextEdit', });
lyr_Lmitealcaldas_1.set('fieldLabels', {'X_id': 'no label', 'id': 'no label', 'nomgeo': 'no label', 'cve_mun': 'no label', 'cve_ent': 'no label', 'cvegeo': 'no label', 'g_pnt_2': 'no label', 'geo_shp': 'no label', 'municip': 'no label', 'Mujeco': 'no label', });
lyr_SitiosWifiporColonia_2.set('fieldLabels', {'ENT': 'no label', 'CVEDT': 'no label', 'NOMDT': 'no label', 'DTTOLOC': 'no label', 'CVEUT': 'no label', 'NOMUT': 'no label', 'POB2010': 'no label', 'ID': 'no label', 'Puntos Wif': 'no label', 'Centros de': 'no label', 'ColoniasSi': 'no label', 'EscuelasPr': 'no label', 'EscuelasSe': 'no label', 'IEMS': 'no label', 'Metrobus': 'no label', 'MiBarrio': 'no label', 'Pilares': 'no label', 'Postes C5': 'no label', 'Sitios_Pub': 'no label', 'UnidadesHa': 'no label', 'Universida': 'no label', 'Utopias': 'no label', 'Cablebus': 'no label', 'AICM': 'no label', });
lyr_SitiosWifi_3.set('fieldLabels', {'ID': 'no label', 'Estado': 'no label', 'Alcald�a': 'no label', 'Latitud': 'no label', 'Longitud': 'no label', 'Puntos_de_': 'no label', 'Programa': 'no label', 'field_8': 'no label', 'field_9': 'no label', 'field_10': 'no label', });
lyr_SitiosWifi_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});