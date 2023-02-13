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
                interactive: true,
                title: '<img src="styles/legend/Lmitealcaldas_1.png" /> Límite alcaldías'
            });
var format_Clusterdedelitoscometidosportaxistas_2 = new ol.format.GeoJSON();
var features_Clusterdedelitoscometidosportaxistas_2 = format_Clusterdedelitoscometidosportaxistas_2.readFeatures(json_Clusterdedelitoscometidosportaxistas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clusterdedelitoscometidosportaxistas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clusterdedelitoscometidosportaxistas_2.addFeatures(features_Clusterdedelitoscometidosportaxistas_2);
var lyr_Clusterdedelitoscometidosportaxistas_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Clusterdedelitoscometidosportaxistas_2, 
                style: style_Clusterdedelitoscometidosportaxistas_2,
                interactive: true,
    title: 'Cluster de delitos cometidos por taxistas<br />\
    <img src="styles/legend/Clusterdedelitoscometidosportaxistas_2_0.png" /> 5<br />\
    <img src="styles/legend/Clusterdedelitoscometidosportaxistas_2_1.png" /> 6<br />\
    <img src="styles/legend/Clusterdedelitoscometidosportaxistas_2_2.png" /> 15<br />'
        });
var format_Terminaldepasajeros_3 = new ol.format.GeoJSON();
var features_Terminaldepasajeros_3 = format_Terminaldepasajeros_3.readFeatures(json_Terminaldepasajeros_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Terminaldepasajeros_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Terminaldepasajeros_3.addFeatures(features_Terminaldepasajeros_3);
var lyr_Terminaldepasajeros_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Terminaldepasajeros_3, 
                style: style_Terminaldepasajeros_3,
                interactive: true,
                title: '<img src="styles/legend/Terminaldepasajeros_3.png" /> Terminal de pasajeros'
            });
var format_Delitoscometidosportaxistas_4 = new ol.format.GeoJSON();
var features_Delitoscometidosportaxistas_4 = format_Delitoscometidosportaxistas_4.readFeatures(json_Delitoscometidosportaxistas_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Delitoscometidosportaxistas_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Delitoscometidosportaxistas_4.addFeatures(features_Delitoscometidosportaxistas_4);
var lyr_Delitoscometidosportaxistas_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Delitoscometidosportaxistas_4, 
                style: style_Delitoscometidosportaxistas_4,
                interactive: true,
    title: 'Delitos cometidos por taxistas<br />\
    <img src="styles/legend/Delitoscometidosportaxistas_4_0.png" /> Abuso sexual<br />\
    <img src="styles/legend/Delitoscometidosportaxistas_4_1.png" /> Violación<br />\
    <img src="styles/legend/Delitoscometidosportaxistas_4_2.png" /> Privación de la libertad personal<br />\
    <img src="styles/legend/Delitoscometidosportaxistas_4_3.png" /> Robo a bordo de taxi sin violencia<br />\
    <img src="styles/legend/Delitoscometidosportaxistas_4_4.png" /> Robo a pasajero a bordo de taxi<br />'
        });

lyr_Mapabase_0.setVisible(true);lyr_Lmitealcaldas_1.setVisible(true);lyr_Clusterdedelitoscometidosportaxistas_2.setVisible(true);lyr_Terminaldepasajeros_3.setVisible(true);lyr_Delitoscometidosportaxistas_4.setVisible(true);
var layersList = [lyr_Mapabase_0,lyr_Lmitealcaldas_1,lyr_Clusterdedelitoscometidosportaxistas_2,lyr_Terminaldepasajeros_3,lyr_Delitoscometidosportaxistas_4];
lyr_Lmitealcaldas_1.set('fieldAliases', {'X_id': 'X_id', 'id': 'id', 'nomgeo': 'nomgeo', 'cve_mun': 'cve_mun', 'cve_ent': 'cve_ent', 'cvegeo': 'cvegeo', 'g_pnt_2': 'g_pnt_2', 'geo_shp': 'geo_shp', 'municip': 'municip', });
lyr_Clusterdedelitoscometidosportaxistas_2.set('fieldAliases', {'fid': 'fid', 'AREA': 'AREA', 'COUNT': 'COUNT', });
lyr_Terminaldepasajeros_3.set('fieldAliases', {'id': 'id', 'Edificio': 'Edificio', });
lyr_Delitoscometidosportaxistas_4.set('fieldAliases', {'id_ci': 'id_ci', 'carpeta_investigacion': 'carpeta_investigacion', 'fecha_inicio': 'fecha_inicio', 'hora_inicio': 'hora_inicio', 'fecha_hechos': 'fecha_hechos', 'hora_hechos': 'hora_hechos', 'exordio': 'exordio', 'categoria_delito': 'categoria_delito', 'delito': 'delito', 'id_delito_general': 'id_delito_general', 'lugar_comision': 'lugar_comision', 'total_victimas': 'total_victimas', 'fiscalia_inicio': 'fiscalia_inicio', 'agencia_inicio': 'agencia_inicio', 'unidad_investigacion': 'unidad_investigacion', 'alcaldia_hechos': 'alcaldia_hechos', 'ct_hechos': 'ct_hechos', 'colonia_hechos': 'colonia_hechos', 'calle': 'calle', 'calle1': 'calle1', 'year_number': 'year_number', 'week_number': 'week_number', 'day_number': 'day_number', 'carpeta_investiga': 'carpeta_investiga', 'fiscalia': 'fiscalia', 'agencia': 'agencia', 'geox': 'geox', 'geoy': 'geoy', 'lat': 'lat', 'lon': 'lon', 'point': 'point', 'geo_alcaldia': 'geo_alcaldia', 'geo_colonia': 'geo_colonia', 'geo_coordinacion': 'geo_coordinacion', 'geo_sector': 'geo_sector', 'geo_cuadrante_marzo': 'geo_cuadrante_marzo', 'fecha_actualizacion': 'fecha_actualizacion', 'cve_delito': 'cve_delito', 'fecha': 'fecha', 'agresor_taxi': 'agresor_taxi', });
lyr_Lmitealcaldas_1.set('fieldImages', {'X_id': 'Range', 'id': 'Range', 'nomgeo': 'TextEdit', 'cve_mun': 'Range', 'cve_ent': 'Range', 'cvegeo': 'Range', 'g_pnt_2': 'TextEdit', 'geo_shp': 'TextEdit', 'municip': 'Range', });
lyr_Clusterdedelitoscometidosportaxistas_2.set('fieldImages', {'fid': 'Range', 'AREA': 'Range', 'COUNT': 'Range', });
lyr_Terminaldepasajeros_3.set('fieldImages', {'id': 'TextEdit', 'Edificio': 'TextEdit', });
lyr_Delitoscometidosportaxistas_4.set('fieldImages', {'id_ci': 'Range', 'carpeta_investigacion': 'TextEdit', 'fecha_inicio': 'TextEdit', 'hora_inicio': 'DateTime', 'fecha_hechos': 'TextEdit', 'hora_hechos': 'DateTime', 'exordio': 'TextEdit', 'categoria_delito': 'TextEdit', 'delito': 'TextEdit', 'id_delito_general': 'TextEdit', 'lugar_comision': 'TextEdit', 'total_victimas': 'TextEdit', 'fiscalia_inicio': 'TextEdit', 'agencia_inicio': 'TextEdit', 'unidad_investigacion': 'TextEdit', 'alcaldia_hechos': 'TextEdit', 'ct_hechos': 'TextEdit', 'colonia_hechos': 'TextEdit', 'calle': 'TextEdit', 'calle1': 'TextEdit', 'year_number': 'Range', 'week_number': 'Range', 'day_number': 'Range', 'carpeta_investiga': 'TextEdit', 'fiscalia': 'TextEdit', 'agencia': 'TextEdit', 'geox': 'TextEdit', 'geoy': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', 'point': 'TextEdit', 'geo_alcaldia': 'Range', 'geo_colonia': 'Range', 'geo_coordinacion': 'TextEdit', 'geo_sector': 'TextEdit', 'geo_cuadrante_marzo': 'TextEdit', 'fecha_actualizacion': 'TextEdit', 'cve_delito': 'TextEdit', 'fecha': 'TextEdit', 'agresor_taxi': 'CheckBox', });
lyr_Lmitealcaldas_1.set('fieldLabels', {'X_id': 'no label', 'id': 'no label', 'nomgeo': 'no label', 'cve_mun': 'no label', 'cve_ent': 'no label', 'cvegeo': 'no label', 'g_pnt_2': 'no label', 'geo_shp': 'no label', 'municip': 'no label', });
lyr_Clusterdedelitoscometidosportaxistas_2.set('fieldLabels', {'fid': 'no label', 'AREA': 'no label', 'COUNT': 'no label', });
lyr_Terminaldepasajeros_3.set('fieldLabels', {'id': 'no label', 'Edificio': 'no label', });
lyr_Delitoscometidosportaxistas_4.set('fieldLabels', {'id_ci': 'no label', 'carpeta_investigacion': 'no label', 'fecha_inicio': 'no label', 'hora_inicio': 'no label', 'fecha_hechos': 'no label', 'hora_hechos': 'no label', 'exordio': 'no label', 'categoria_delito': 'no label', 'delito': 'no label', 'id_delito_general': 'no label', 'lugar_comision': 'no label', 'total_victimas': 'no label', 'fiscalia_inicio': 'no label', 'agencia_inicio': 'no label', 'unidad_investigacion': 'no label', 'alcaldia_hechos': 'no label', 'ct_hechos': 'no label', 'colonia_hechos': 'no label', 'calle': 'no label', 'calle1': 'no label', 'year_number': 'no label', 'week_number': 'no label', 'day_number': 'no label', 'carpeta_investiga': 'no label', 'fiscalia': 'no label', 'agencia': 'no label', 'geox': 'no label', 'geoy': 'no label', 'lat': 'no label', 'lon': 'no label', 'point': 'no label', 'geo_alcaldia': 'no label', 'geo_colonia': 'no label', 'geo_coordinacion': 'no label', 'geo_sector': 'no label', 'geo_cuadrante_marzo': 'no label', 'fecha_actualizacion': 'no label', 'cve_delito': 'no label', 'fecha': 'no label', 'agresor_taxi': 'no label', });
lyr_Delitoscometidosportaxistas_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});