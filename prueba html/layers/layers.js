var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'http://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_alcaldias_cdmx_1 = new ol.format.GeoJSON();
var features_alcaldias_cdmx_1 = format_alcaldias_cdmx_1.readFeatures(json_alcaldias_cdmx_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_alcaldias_cdmx_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_alcaldias_cdmx_1.addFeatures(features_alcaldias_cdmx_1);
var lyr_alcaldias_cdmx_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_alcaldias_cdmx_1, 
                style: style_alcaldias_cdmx_1,
                interactive: true,
                title: '<img src="styles/legend/alcaldias_cdmx_1.png" /> alcaldias_cdmx'
            });
var format_violencia2022_2km_2 = new ol.format.GeoJSON();
var features_violencia2022_2km_2 = format_violencia2022_2km_2.readFeatures(json_violencia2022_2km_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_violencia2022_2km_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_violencia2022_2km_2.addFeatures(features_violencia2022_2km_2);
var lyr_violencia2022_2km_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_violencia2022_2km_2, 
                style: style_violencia2022_2km_2,
                interactive: true,
    title: 'violencia2022_2km<br />\
    <img src="styles/legend/violencia2022_2km_2_0.png" /> 0 - 21<br />\
    <img src="styles/legend/violencia2022_2km_2_1.png" /> 21 - 65<br />\
    <img src="styles/legend/violencia2022_2km_2_2.png" /> 65 - 117<br />\
    <img src="styles/legend/violencia2022_2km_2_3.png" /> 117 - 190<br />\
    <img src="styles/legend/violencia2022_2km_2_4.png" /> 190 - 330<br />'
        });
var format_Econmica_3 = new ol.format.GeoJSON();
var features_Econmica_3 = format_Econmica_3.readFeatures(json_Econmica_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Econmica_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Econmica_3.addFeatures(features_Econmica_3);
var lyr_Econmica_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Econmica_3, 
                style: style_Econmica_3,
                interactive: true,
                title: '<img src="styles/legend/Econmica_3.png" /> Económica'
            });

lyr_Positron_0.setVisible(true);lyr_alcaldias_cdmx_1.setVisible(true);lyr_violencia2022_2km_2.setVisible(true);lyr_Econmica_3.setVisible(true);
var layersList = [lyr_Positron_0,lyr_alcaldias_cdmx_1,lyr_violencia2022_2km_2,lyr_Econmica_3];
lyr_alcaldias_cdmx_1.set('fieldAliases', {'X_id': 'X_id', 'id': 'id', 'nomgeo': 'nomgeo', 'cve_mun': 'cve_mun', 'cve_ent': 'cve_ent', 'cvegeo': 'cvegeo', 'g_pnt_2': 'g_pnt_2', 'geo_shp': 'geo_shp', 'municip': 'municip', });
lyr_violencia2022_2km_2.set('fieldAliases', {'id': 'id', 'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'NUMPOINTS': 'NUMPOINTS', });
lyr_Econmica_3.set('fieldAliases', {'field_1': 'field_1', 'Unnamed: 0': 'Unnamed: 0', 'id_ci': 'id_ci', 'carpeta_investigacion': 'carpeta_investigacion', 'fechainicio': 'fechainicio', 'hora_inicio': 'hora_inicio', 'fechahechos': 'fechahechos', 'hora_hechos': 'hora_hechos', 'exordio': 'exordio', 'categoria_delito': 'categoria_delito', 'delito': 'delito', 'id_delito_general': 'id_delito_general', 'lugar_comision': 'lugar_comision', 'total_victimas': 'total_victimas', 'fiscalia_inicio': 'fiscalia_inicio', 'agencia_inicio': 'agencia_inicio', 'unidad_investigacion': 'unidad_investigacion', 'alcaldiahechos': 'alcaldiahechos', 'ct_hechos': 'ct_hechos', 'colonia_hechos': 'colonia_hechos', 'calle': 'calle', 'calle1': 'calle1', 'year_number': 'year_number', 'week_number': 'week_number', 'day_number': 'day_number', 'carpeta_investiga': 'carpeta_investiga', 'fiscalia': 'fiscalia', 'agencia': 'agencia', 'geox': 'geox', 'geoy': 'geoy', 'lat': 'lat', 'lon': 'lon', 'point': 'point', 'geo_alcaldia': 'geo_alcaldia', 'geo_colonia': 'geo_colonia', 'geo_coordinacion': 'geo_coordinacion', 'geo_sector': 'geo_sector', 'geo_cuadrante_marzo': 'geo_cuadrante_marzo', 'fecha_actualizacion': 'fecha_actualizacion', 'solicitud_limpia': 'solicitud_limpia', 'Mujer_vic': 'Mujer_vic', 'Hombre_vic': 'Hombre_vic', 'Verbal': 'Verbal', 'Física': 'Física', 'Pareja': 'Pareja', 'ex': 'ex', 'familiar': 'familiar', 'pareja de familiar': 'pareja de familiar', 'rojo': 'rojo', 'naranja': 'naranja', 'amarillo': 'amarillo', 'azul': 'azul', 'semaforo': 'semaforo', 'semaforo_adip': 'semaforo_adip', 'Sexo_victima': 'Sexo_victima', 'Atacante': 'Atacante', 'fecha': 'fecha', 'viol_eco': 'viol_eco', 'viol_fisica': 'viol_fisica', 'viol_psic': 'viol_psic', 'viol_sexual': 'viol_sexual', 'viol_otro': 'viol_otro', });
lyr_alcaldias_cdmx_1.set('fieldImages', {'X_id': 'Range', 'id': 'Range', 'nomgeo': 'TextEdit', 'cve_mun': 'Range', 'cve_ent': 'Range', 'cvegeo': 'Range', 'g_pnt_2': 'TextEdit', 'geo_shp': 'TextEdit', 'municip': 'Range', });
lyr_violencia2022_2km_2.set('fieldImages', {'id': 'TextEdit', 'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'NUMPOINTS': 'TextEdit', });
lyr_Econmica_3.set('fieldImages', {'field_1': 'Range', 'Unnamed: 0': 'Range', 'id_ci': 'Range', 'carpeta_investigacion': 'TextEdit', 'fechainicio': 'TextEdit', 'hora_inicio': 'DateTime', 'fechahechos': 'TextEdit', 'hora_hechos': 'Range', 'exordio': 'TextEdit', 'categoria_delito': 'TextEdit', 'delito': 'TextEdit', 'id_delito_general': 'TextEdit', 'lugar_comision': 'TextEdit', 'total_victimas': 'TextEdit', 'fiscalia_inicio': 'TextEdit', 'agencia_inicio': 'TextEdit', 'unidad_investigacion': 'TextEdit', 'alcaldiahechos': 'TextEdit', 'ct_hechos': 'TextEdit', 'colonia_hechos': 'TextEdit', 'calle': 'TextEdit', 'calle1': 'TextEdit', 'year_number': 'Range', 'week_number': 'Range', 'day_number': 'Range', 'carpeta_investiga': 'TextEdit', 'fiscalia': 'TextEdit', 'agencia': 'TextEdit', 'geox': 'TextEdit', 'geoy': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', 'point': 'TextEdit', 'geo_alcaldia': 'Range', 'geo_colonia': 'Range', 'geo_coordinacion': 'TextEdit', 'geo_sector': 'TextEdit', 'geo_cuadrante_marzo': 'TextEdit', 'fecha_actualizacion': 'TextEdit', 'solicitud_limpia': 'TextEdit', 'Mujer_vic': 'CheckBox', 'Hombre_vic': 'CheckBox', 'Verbal': 'CheckBox', 'Física': 'CheckBox', 'Pareja': 'CheckBox', 'ex': 'CheckBox', 'familiar': 'CheckBox', 'pareja de familiar': 'CheckBox', 'rojo': 'CheckBox', 'naranja': 'CheckBox', 'amarillo': 'CheckBox', 'azul': 'CheckBox', 'semaforo': 'TextEdit', 'semaforo_adip': 'TextEdit', 'Sexo_victima': 'TextEdit', 'Atacante': 'TextEdit', 'fecha': 'TextEdit', 'viol_eco': 'CheckBox', 'viol_fisica': 'CheckBox', 'viol_psic': 'CheckBox', 'viol_sexual': 'CheckBox', 'viol_otro': 'CheckBox', });
lyr_alcaldias_cdmx_1.set('fieldLabels', {'X_id': 'no label', 'id': 'no label', 'nomgeo': 'no label', 'cve_mun': 'no label', 'cve_ent': 'no label', 'cvegeo': 'no label', 'g_pnt_2': 'no label', 'geo_shp': 'no label', 'municip': 'no label', });
lyr_violencia2022_2km_2.set('fieldLabels', {'id': 'no label', 'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', 'NUMPOINTS': 'no label', });
lyr_Econmica_3.set('fieldLabels', {'field_1': 'no label', 'Unnamed: 0': 'no label', 'id_ci': 'no label', 'carpeta_investigacion': 'no label', 'fechainicio': 'no label', 'hora_inicio': 'no label', 'fechahechos': 'no label', 'hora_hechos': 'no label', 'exordio': 'no label', 'categoria_delito': 'no label', 'delito': 'no label', 'id_delito_general': 'no label', 'lugar_comision': 'no label', 'total_victimas': 'no label', 'fiscalia_inicio': 'no label', 'agencia_inicio': 'no label', 'unidad_investigacion': 'no label', 'alcaldiahechos': 'no label', 'ct_hechos': 'no label', 'colonia_hechos': 'no label', 'calle': 'no label', 'calle1': 'no label', 'year_number': 'no label', 'week_number': 'no label', 'day_number': 'no label', 'carpeta_investiga': 'no label', 'fiscalia': 'no label', 'agencia': 'no label', 'geox': 'no label', 'geoy': 'no label', 'lat': 'no label', 'lon': 'no label', 'point': 'no label', 'geo_alcaldia': 'no label', 'geo_colonia': 'no label', 'geo_coordinacion': 'no label', 'geo_sector': 'no label', 'geo_cuadrante_marzo': 'no label', 'fecha_actualizacion': 'no label', 'solicitud_limpia': 'no label', 'Mujer_vic': 'no label', 'Hombre_vic': 'no label', 'Verbal': 'no label', 'Física': 'no label', 'Pareja': 'no label', 'ex': 'no label', 'familiar': 'no label', 'pareja de familiar': 'no label', 'rojo': 'no label', 'naranja': 'no label', 'amarillo': 'no label', 'azul': 'no label', 'semaforo': 'no label', 'semaforo_adip': 'no label', 'Sexo_victima': 'no label', 'Atacante': 'no label', 'fecha': 'no label', 'viol_eco': 'no label', 'viol_fisica': 'no label', 'viol_psic': 'no label', 'viol_sexual': 'no label', 'viol_otro': 'no label', });
lyr_Econmica_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});