var wms_layers = [];

var format_Universidades_0 = new ol.format.GeoJSON();
var features_Universidades_0 = format_Universidades_0.readFeatures(json_Universidades_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Universidades_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Universidades_0.addFeatures(features_Universidades_0);
var lyr_Universidades_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Universidades_0, 
                style: style_Universidades_0,
                interactive: true,
                title: '<img src="styles/legend/Universidades_0.png" /> Universidades'
            });
var format_PostesC5_1 = new ol.format.GeoJSON();
var features_PostesC5_1 = format_PostesC5_1.readFeatures(json_PostesC5_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PostesC5_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostesC5_1.addFeatures(features_PostesC5_1);
var lyr_PostesC5_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PostesC5_1, 
                style: style_PostesC5_1,
                interactive: true,
                title: '<img src="styles/legend/PostesC5_1.png" /> Postes C5'
            });
var format_Colonias_sinWifi_2 = new ol.format.GeoJSON();
var features_Colonias_sinWifi_2 = format_Colonias_sinWifi_2.readFeatures(json_Colonias_sinWifi_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Colonias_sinWifi_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Colonias_sinWifi_2.addFeatures(features_Colonias_sinWifi_2);
var lyr_Colonias_sinWifi_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Colonias_sinWifi_2, 
                style: style_Colonias_sinWifi_2,
                interactive: true,
                title: '<img src="styles/legend/Colonias_sinWifi_2.png" /> Colonias_sinWifi'
            });
var format_Sitiospblicos_3 = new ol.format.GeoJSON();
var features_Sitiospblicos_3 = format_Sitiospblicos_3.readFeatures(json_Sitiospblicos_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sitiospblicos_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sitiospblicos_3.addFeatures(features_Sitiospblicos_3);
var lyr_Sitiospblicos_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sitiospblicos_3, 
                style: style_Sitiospblicos_3,
                interactive: true,
                title: '<img src="styles/legend/Sitiospblicos_3.png" /> Sitios públicos'
            });
var format_MiBarrio_4 = new ol.format.GeoJSON();
var features_MiBarrio_4 = format_MiBarrio_4.readFeatures(json_MiBarrio_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MiBarrio_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MiBarrio_4.addFeatures(features_MiBarrio_4);
var lyr_MiBarrio_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MiBarrio_4, 
                style: style_MiBarrio_4,
                interactive: true,
                title: '<img src="styles/legend/MiBarrio_4.png" /> Mi Barrio'
            });
var format_Unidadeshabitacionales_5 = new ol.format.GeoJSON();
var features_Unidadeshabitacionales_5 = format_Unidadeshabitacionales_5.readFeatures(json_Unidadeshabitacionales_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Unidadeshabitacionales_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Unidadeshabitacionales_5.addFeatures(features_Unidadeshabitacionales_5);
var lyr_Unidadeshabitacionales_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Unidadeshabitacionales_5, 
                style: style_Unidadeshabitacionales_5,
                interactive: true,
                title: '<img src="styles/legend/Unidadeshabitacionales_5.png" /> Unidades habitacionales'
            });
var format_EscuelasSecundarias_6 = new ol.format.GeoJSON();
var features_EscuelasSecundarias_6 = format_EscuelasSecundarias_6.readFeatures(json_EscuelasSecundarias_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EscuelasSecundarias_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EscuelasSecundarias_6.addFeatures(features_EscuelasSecundarias_6);
var lyr_EscuelasSecundarias_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EscuelasSecundarias_6, 
                style: style_EscuelasSecundarias_6,
                interactive: true,
                title: '<img src="styles/legend/EscuelasSecundarias_6.png" /> Escuelas Secundarias'
            });
var format_EscuelasPrimarias_7 = new ol.format.GeoJSON();
var features_EscuelasPrimarias_7 = format_EscuelasPrimarias_7.readFeatures(json_EscuelasPrimarias_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EscuelasPrimarias_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EscuelasPrimarias_7.addFeatures(features_EscuelasPrimarias_7);
var lyr_EscuelasPrimarias_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EscuelasPrimarias_7, 
                style: style_EscuelasPrimarias_7,
                interactive: true,
                title: '<img src="styles/legend/EscuelasPrimarias_7.png" /> Escuelas Primarias'
            });
var format_Pilares_8 = new ol.format.GeoJSON();
var features_Pilares_8 = format_Pilares_8.readFeatures(json_Pilares_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pilares_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pilares_8.addFeatures(features_Pilares_8);
var lyr_Pilares_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pilares_8, 
                style: style_Pilares_8,
                interactive: true,
                title: '<img src="styles/legend/Pilares_8.png" /> Pilares'
            });
var format_IEMS_9 = new ol.format.GeoJSON();
var features_IEMS_9 = format_IEMS_9.readFeatures(json_IEMS_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IEMS_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IEMS_9.addFeatures(features_IEMS_9);
var lyr_IEMS_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IEMS_9, 
                style: style_IEMS_9,
                interactive: true,
                title: '<img src="styles/legend/IEMS_9.png" /> IEMS'
            });
var format_CentrosdeSalud_10 = new ol.format.GeoJSON();
var features_CentrosdeSalud_10 = format_CentrosdeSalud_10.readFeatures(json_CentrosdeSalud_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CentrosdeSalud_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CentrosdeSalud_10.addFeatures(features_CentrosdeSalud_10);
var lyr_CentrosdeSalud_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CentrosdeSalud_10, 
                style: style_CentrosdeSalud_10,
                interactive: true,
                title: '<img src="styles/legend/CentrosdeSalud_10.png" /> Centros de Salud'
            });
var format_Metrobs_11 = new ol.format.GeoJSON();
var features_Metrobs_11 = format_Metrobs_11.readFeatures(json_Metrobs_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Metrobs_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Metrobs_11.addFeatures(features_Metrobs_11);
var lyr_Metrobs_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Metrobs_11, 
                style: style_Metrobs_11,
                interactive: true,
                title: '<img src="styles/legend/Metrobs_11.png" /> Metrobús'
            });
var format_Utopas_12 = new ol.format.GeoJSON();
var features_Utopas_12 = format_Utopas_12.readFeatures(json_Utopas_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Utopas_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Utopas_12.addFeatures(features_Utopas_12);
var lyr_Utopas_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Utopas_12, 
                style: style_Utopas_12,
                interactive: true,
                title: '<img src="styles/legend/Utopas_12.png" /> Utopías'
            });

        var lyr_Mapabase_13 = new ol.layer.Tile({
            'title': 'Mapa base',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'http://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_Lmitealcaldas_14 = new ol.format.GeoJSON();
var features_Lmitealcaldas_14 = format_Lmitealcaldas_14.readFeatures(json_Lmitealcaldas_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lmitealcaldas_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lmitealcaldas_14.addFeatures(features_Lmitealcaldas_14);
var lyr_Lmitealcaldas_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lmitealcaldas_14, 
                style: style_Lmitealcaldas_14,
                interactive: false,
                title: '<img src="styles/legend/Lmitealcaldas_14.png" /> Límite alcaldías'
            });
var group_Programa = new ol.layer.Group({
                                layers: [lyr_Universidades_0,lyr_PostesC5_1,lyr_Colonias_sinWifi_2,lyr_Sitiospblicos_3,lyr_MiBarrio_4,lyr_Unidadeshabitacionales_5,lyr_EscuelasSecundarias_6,lyr_EscuelasPrimarias_7,lyr_Pilares_8,lyr_IEMS_9,lyr_CentrosdeSalud_10,lyr_Metrobs_11,lyr_Utopas_12,],
                                title: "Programa"});

lyr_Universidades_0.setVisible(true);lyr_PostesC5_1.setVisible(true);lyr_Colonias_sinWifi_2.setVisible(true);lyr_Sitiospblicos_3.setVisible(true);lyr_MiBarrio_4.setVisible(true);lyr_Unidadeshabitacionales_5.setVisible(true);lyr_EscuelasSecundarias_6.setVisible(true);lyr_EscuelasPrimarias_7.setVisible(true);lyr_Pilares_8.setVisible(true);lyr_IEMS_9.setVisible(true);lyr_CentrosdeSalud_10.setVisible(true);lyr_Metrobs_11.setVisible(true);lyr_Utopas_12.setVisible(true);lyr_Mapabase_13.setVisible(true);lyr_Lmitealcaldas_14.setVisible(true);
var layersList = [group_Programa,lyr_Mapabase_13,lyr_Lmitealcaldas_14];
lyr_Universidades_0.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Estado': 'Estado', 'Colonia': 'Colonia', 'Alcald�a': 'Alcald�a', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Puntos_de_acceso': 'Puntos_de_acceso', 'Programa': 'Programa', 'Escuelas': 'Escuelas', 'MAC': 'MAC', 'A�o de inauguraci�n': 'A�o de inauguraci�n', 'Proveedor de Equipamiento': 'Proveedor de Equipamiento', 'Proveedor de Telecomunicaciones': 'Proveedor de Telecomunicaciones', 'diarios': 'diarios', 'Usuarios_Semanal': 'Usuarios_Semanal', 'Conexiones': 'Conexiones', 'Tiempo': 'Tiempo', 'Clasificaci�n': 'Clasificaci�n', });
lyr_PostesC5_1.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Estado': 'Estado', 'Colonia': 'Colonia', 'Alcald�a': 'Alcald�a', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Puntos_de_acceso': 'Puntos_de_acceso', 'Programa': 'Programa', 'Escuelas': 'Escuelas', 'MAC': 'MAC', 'A�o de inauguraci�n': 'A�o de inauguraci�n', 'Proveedor de Equipamiento': 'Proveedor de Equipamiento', 'Proveedor de Telecomunicaciones': 'Proveedor de Telecomunicaciones', 'diarios': 'diarios', 'Usuarios_Semanal': 'Usuarios_Semanal', 'Conexiones': 'Conexiones', 'Tiempo': 'Tiempo', 'Clasificaci�n': 'Clasificaci�n', });
lyr_Colonias_sinWifi_2.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Estado': 'Estado', 'Colonia': 'Colonia', 'Alcald�a': 'Alcald�a', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Puntos_de_acceso': 'Puntos_de_acceso', 'Programa': 'Programa', 'Escuelas': 'Escuelas', 'MAC': 'MAC', 'A�o de inauguraci�n': 'A�o de inauguraci�n', 'Proveedor de Equipamiento': 'Proveedor de Equipamiento', 'Proveedor de Telecomunicaciones': 'Proveedor de Telecomunicaciones', 'diarios': 'diarios', 'Usuarios_Semanal': 'Usuarios_Semanal', 'Conexiones': 'Conexiones', 'Tiempo': 'Tiempo', 'Clasificaci�n': 'Clasificaci�n', });
lyr_Sitiospblicos_3.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Estado': 'Estado', 'Colonia': 'Colonia', 'Alcald�a': 'Alcald�a', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Puntos_de_acceso': 'Puntos_de_acceso', 'Programa': 'Programa', 'Escuelas': 'Escuelas', 'MAC': 'MAC', 'A�o de inauguraci�n': 'A�o de inauguraci�n', 'Proveedor de Equipamiento': 'Proveedor de Equipamiento', 'Proveedor de Telecomunicaciones': 'Proveedor de Telecomunicaciones', 'diarios': 'diarios', 'Usuarios_Semanal': 'Usuarios_Semanal', 'Conexiones': 'Conexiones', 'Tiempo': 'Tiempo', 'Clasificaci�n': 'Clasificaci�n', });
lyr_MiBarrio_4.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Estado': 'Estado', 'Colonia': 'Colonia', 'Alcald�a': 'Alcald�a', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Puntos_de_acceso': 'Puntos_de_acceso', 'Programa': 'Programa', 'Escuelas': 'Escuelas', 'MAC': 'MAC', 'A�o de inauguraci�n': 'A�o de inauguraci�n', 'Proveedor de Equipamiento': 'Proveedor de Equipamiento', 'Proveedor de Telecomunicaciones': 'Proveedor de Telecomunicaciones', 'diarios': 'diarios', 'Usuarios_Semanal': 'Usuarios_Semanal', 'Conexiones': 'Conexiones', 'Tiempo': 'Tiempo', 'Clasificaci�n': 'Clasificaci�n', });
lyr_Unidadeshabitacionales_5.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Estado': 'Estado', 'Colonia': 'Colonia', 'Alcald�a': 'Alcald�a', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Puntos_de_acceso': 'Puntos_de_acceso', 'Programa': 'Programa', 'Escuelas': 'Escuelas', 'MAC': 'MAC', 'A�o de inauguraci�n': 'A�o de inauguraci�n', 'Proveedor de Equipamiento': 'Proveedor de Equipamiento', 'Proveedor de Telecomunicaciones': 'Proveedor de Telecomunicaciones', 'diarios': 'diarios', 'Usuarios_Semanal': 'Usuarios_Semanal', 'Conexiones': 'Conexiones', 'Tiempo': 'Tiempo', 'Clasificaci�n': 'Clasificaci�n', });
lyr_EscuelasSecundarias_6.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Estado': 'Estado', 'Colonia': 'Colonia', 'Alcald�a': 'Alcald�a', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Puntos_de_acceso': 'Puntos_de_acceso', 'Programa': 'Programa', 'Escuelas': 'Escuelas', 'MAC': 'MAC', 'A�o de inauguraci�n': 'A�o de inauguraci�n', 'Proveedor de Equipamiento': 'Proveedor de Equipamiento', 'Proveedor de Telecomunicaciones': 'Proveedor de Telecomunicaciones', 'diarios': 'diarios', 'Usuarios_Semanal': 'Usuarios_Semanal', 'Conexiones': 'Conexiones', 'Tiempo': 'Tiempo', 'Clasificaci�n': 'Clasificaci�n', });
lyr_EscuelasPrimarias_7.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Estado': 'Estado', 'Colonia': 'Colonia', 'Alcald�a': 'Alcald�a', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Puntos_de_acceso': 'Puntos_de_acceso', 'Programa': 'Programa', 'Escuelas': 'Escuelas', 'MAC': 'MAC', 'A�o de inauguraci�n': 'A�o de inauguraci�n', 'Proveedor de Equipamiento': 'Proveedor de Equipamiento', 'Proveedor de Telecomunicaciones': 'Proveedor de Telecomunicaciones', 'diarios': 'diarios', 'Usuarios_Semanal': 'Usuarios_Semanal', 'Conexiones': 'Conexiones', 'Tiempo': 'Tiempo', 'Clasificaci�n': 'Clasificaci�n', });
lyr_Pilares_8.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Estado': 'Estado', 'Colonia': 'Colonia', 'Alcald�a': 'Alcald�a', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Puntos_de_acceso': 'Puntos_de_acceso', 'Programa': 'Programa', 'Escuelas': 'Escuelas', 'MAC': 'MAC', 'A�o de inauguraci�n': 'A�o de inauguraci�n', 'Proveedor de Equipamiento': 'Proveedor de Equipamiento', 'Proveedor de Telecomunicaciones': 'Proveedor de Telecomunicaciones', 'diarios': 'diarios', 'Usuarios_Semanal': 'Usuarios_Semanal', 'Conexiones': 'Conexiones', 'Tiempo': 'Tiempo', 'Clasificaci�n': 'Clasificaci�n', });
lyr_IEMS_9.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Estado': 'Estado', 'Colonia': 'Colonia', 'Alcald�a': 'Alcald�a', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Puntos_de_acceso': 'Puntos_de_acceso', 'Programa': 'Programa', 'Escuelas': 'Escuelas', 'MAC': 'MAC', 'A�o de inauguraci�n': 'A�o de inauguraci�n', 'Proveedor de Equipamiento': 'Proveedor de Equipamiento', 'Proveedor de Telecomunicaciones': 'Proveedor de Telecomunicaciones', 'diarios': 'diarios', 'Usuarios_Semanal': 'Usuarios_Semanal', 'Conexiones': 'Conexiones', 'Tiempo': 'Tiempo', 'Clasificaci�n': 'Clasificaci�n', });
lyr_CentrosdeSalud_10.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Estado': 'Estado', 'Colonia': 'Colonia', 'Alcald�a': 'Alcald�a', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Puntos_de_acceso': 'Puntos_de_acceso', 'Programa': 'Programa', 'Escuelas': 'Escuelas', 'MAC': 'MAC', 'A�o de inauguraci�n': 'A�o de inauguraci�n', 'Proveedor de Equipamiento': 'Proveedor de Equipamiento', 'Proveedor de Telecomunicaciones': 'Proveedor de Telecomunicaciones', 'diarios': 'diarios', 'Usuarios_Semanal': 'Usuarios_Semanal', 'Conexiones': 'Conexiones', 'Tiempo': 'Tiempo', 'Clasificaci�n': 'Clasificaci�n', });
lyr_Metrobs_11.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Estado': 'Estado', 'Colonia': 'Colonia', 'Alcald�a': 'Alcald�a', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Puntos_de_acceso': 'Puntos_de_acceso', 'Programa': 'Programa', 'Escuelas': 'Escuelas', 'MAC': 'MAC', 'A�o de inauguraci�n': 'A�o de inauguraci�n', 'Proveedor de Equipamiento': 'Proveedor de Equipamiento', 'Proveedor de Telecomunicaciones': 'Proveedor de Telecomunicaciones', 'diarios': 'diarios', 'Usuarios_Semanal': 'Usuarios_Semanal', 'Conexiones': 'Conexiones', 'Tiempo': 'Tiempo', 'Clasificaci�n': 'Clasificaci�n', });
lyr_Utopas_12.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Estado': 'Estado', 'Colonia': 'Colonia', 'Alcald�a': 'Alcald�a', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Puntos_de_acceso': 'Puntos_de_acceso', 'Programa': 'Programa', 'Escuelas': 'Escuelas', 'MAC': 'MAC', 'A�o de inauguraci�n': 'A�o de inauguraci�n', 'Proveedor de Equipamiento': 'Proveedor de Equipamiento', 'Proveedor de Telecomunicaciones': 'Proveedor de Telecomunicaciones', 'diarios': 'diarios', 'Usuarios_Semanal': 'Usuarios_Semanal', 'Conexiones': 'Conexiones', 'Tiempo': 'Tiempo', 'Clasificaci�n': 'Clasificaci�n', });
lyr_Lmitealcaldas_14.set('fieldAliases', {'nomgeo': 'nomgeo', 'cve_mun': 'cve_mun', 'g_pnt_2': 'g_pnt_2', 'geo_shp': 'geo_shp', 'frecuencia': 'frecuencia', });
lyr_Universidades_0.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'Estado': 'TextEdit', 'Colonia': 'TextEdit', 'Alcald�a': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'Puntos_de_acceso': 'Range', 'Programa': 'TextEdit', 'Escuelas': 'Range', 'MAC': 'TextEdit', 'A�o de inauguraci�n': 'TextEdit', 'Proveedor de Equipamiento': 'TextEdit', 'Proveedor de Telecomunicaciones': 'TextEdit', 'diarios': 'TextEdit', 'Usuarios_Semanal': 'TextEdit', 'Conexiones': 'TextEdit', 'Tiempo': 'TextEdit', 'Clasificaci�n': 'TextEdit', });
lyr_PostesC5_1.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'Estado': 'TextEdit', 'Colonia': 'TextEdit', 'Alcald�a': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'Puntos_de_acceso': 'Range', 'Programa': 'TextEdit', 'Escuelas': 'Range', 'MAC': 'TextEdit', 'A�o de inauguraci�n': 'TextEdit', 'Proveedor de Equipamiento': 'TextEdit', 'Proveedor de Telecomunicaciones': 'TextEdit', 'diarios': 'TextEdit', 'Usuarios_Semanal': 'TextEdit', 'Conexiones': 'TextEdit', 'Tiempo': 'TextEdit', 'Clasificaci�n': 'TextEdit', });
lyr_Colonias_sinWifi_2.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'Estado': 'TextEdit', 'Colonia': 'TextEdit', 'Alcald�a': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'Puntos_de_acceso': 'Range', 'Programa': 'TextEdit', 'Escuelas': 'Range', 'MAC': 'TextEdit', 'A�o de inauguraci�n': 'TextEdit', 'Proveedor de Equipamiento': 'TextEdit', 'Proveedor de Telecomunicaciones': 'TextEdit', 'diarios': 'TextEdit', 'Usuarios_Semanal': 'TextEdit', 'Conexiones': 'TextEdit', 'Tiempo': 'TextEdit', 'Clasificaci�n': 'TextEdit', });
lyr_Sitiospblicos_3.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'Estado': 'TextEdit', 'Colonia': 'TextEdit', 'Alcald�a': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'Puntos_de_acceso': 'Range', 'Programa': 'TextEdit', 'Escuelas': 'Range', 'MAC': 'TextEdit', 'A�o de inauguraci�n': 'TextEdit', 'Proveedor de Equipamiento': 'TextEdit', 'Proveedor de Telecomunicaciones': 'TextEdit', 'diarios': 'TextEdit', 'Usuarios_Semanal': 'TextEdit', 'Conexiones': 'TextEdit', 'Tiempo': 'TextEdit', 'Clasificaci�n': 'TextEdit', });
lyr_MiBarrio_4.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'Estado': 'TextEdit', 'Colonia': 'TextEdit', 'Alcald�a': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'Puntos_de_acceso': 'Range', 'Programa': 'TextEdit', 'Escuelas': 'Range', 'MAC': 'TextEdit', 'A�o de inauguraci�n': 'TextEdit', 'Proveedor de Equipamiento': 'TextEdit', 'Proveedor de Telecomunicaciones': 'TextEdit', 'diarios': 'TextEdit', 'Usuarios_Semanal': 'TextEdit', 'Conexiones': 'TextEdit', 'Tiempo': 'TextEdit', 'Clasificaci�n': 'TextEdit', });
lyr_Unidadeshabitacionales_5.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'Estado': 'TextEdit', 'Colonia': 'TextEdit', 'Alcald�a': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'Puntos_de_acceso': 'Range', 'Programa': 'TextEdit', 'Escuelas': 'Range', 'MAC': 'TextEdit', 'A�o de inauguraci�n': 'TextEdit', 'Proveedor de Equipamiento': 'TextEdit', 'Proveedor de Telecomunicaciones': 'TextEdit', 'diarios': 'TextEdit', 'Usuarios_Semanal': 'TextEdit', 'Conexiones': 'TextEdit', 'Tiempo': 'TextEdit', 'Clasificaci�n': 'TextEdit', });
lyr_EscuelasSecundarias_6.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'Estado': 'TextEdit', 'Colonia': 'TextEdit', 'Alcald�a': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'Puntos_de_acceso': 'Range', 'Programa': 'TextEdit', 'Escuelas': 'Range', 'MAC': 'TextEdit', 'A�o de inauguraci�n': 'TextEdit', 'Proveedor de Equipamiento': 'TextEdit', 'Proveedor de Telecomunicaciones': 'TextEdit', 'diarios': 'TextEdit', 'Usuarios_Semanal': 'TextEdit', 'Conexiones': 'TextEdit', 'Tiempo': 'TextEdit', 'Clasificaci�n': 'TextEdit', });
lyr_EscuelasPrimarias_7.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'Estado': 'TextEdit', 'Colonia': 'TextEdit', 'Alcald�a': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'Puntos_de_acceso': 'Range', 'Programa': 'TextEdit', 'Escuelas': 'Range', 'MAC': 'TextEdit', 'A�o de inauguraci�n': 'TextEdit', 'Proveedor de Equipamiento': 'TextEdit', 'Proveedor de Telecomunicaciones': 'TextEdit', 'diarios': 'TextEdit', 'Usuarios_Semanal': 'TextEdit', 'Conexiones': 'TextEdit', 'Tiempo': 'TextEdit', 'Clasificaci�n': 'TextEdit', });
lyr_Pilares_8.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'Estado': 'TextEdit', 'Colonia': 'TextEdit', 'Alcald�a': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'Puntos_de_acceso': 'Range', 'Programa': 'TextEdit', 'Escuelas': 'Range', 'MAC': 'TextEdit', 'A�o de inauguraci�n': 'TextEdit', 'Proveedor de Equipamiento': 'TextEdit', 'Proveedor de Telecomunicaciones': 'TextEdit', 'diarios': 'TextEdit', 'Usuarios_Semanal': 'TextEdit', 'Conexiones': 'TextEdit', 'Tiempo': 'TextEdit', 'Clasificaci�n': 'TextEdit', });
lyr_IEMS_9.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'Estado': 'TextEdit', 'Colonia': 'TextEdit', 'Alcald�a': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'Puntos_de_acceso': 'Range', 'Programa': 'TextEdit', 'Escuelas': 'Range', 'MAC': 'TextEdit', 'A�o de inauguraci�n': 'TextEdit', 'Proveedor de Equipamiento': 'TextEdit', 'Proveedor de Telecomunicaciones': 'TextEdit', 'diarios': 'TextEdit', 'Usuarios_Semanal': 'TextEdit', 'Conexiones': 'TextEdit', 'Tiempo': 'TextEdit', 'Clasificaci�n': 'TextEdit', });
lyr_CentrosdeSalud_10.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'Estado': 'TextEdit', 'Colonia': 'TextEdit', 'Alcald�a': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'Puntos_de_acceso': 'Range', 'Programa': 'TextEdit', 'Escuelas': 'Range', 'MAC': 'TextEdit', 'A�o de inauguraci�n': 'TextEdit', 'Proveedor de Equipamiento': 'TextEdit', 'Proveedor de Telecomunicaciones': 'TextEdit', 'diarios': 'TextEdit', 'Usuarios_Semanal': 'TextEdit', 'Conexiones': 'TextEdit', 'Tiempo': 'TextEdit', 'Clasificaci�n': 'TextEdit', });
lyr_Metrobs_11.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'Estado': 'TextEdit', 'Colonia': 'TextEdit', 'Alcald�a': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'Puntos_de_acceso': 'Range', 'Programa': 'TextEdit', 'Escuelas': 'Range', 'MAC': 'TextEdit', 'A�o de inauguraci�n': 'TextEdit', 'Proveedor de Equipamiento': 'TextEdit', 'Proveedor de Telecomunicaciones': 'TextEdit', 'diarios': 'TextEdit', 'Usuarios_Semanal': 'TextEdit', 'Conexiones': 'TextEdit', 'Tiempo': 'TextEdit', 'Clasificaci�n': 'TextEdit', });
lyr_Utopas_12.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'Estado': 'TextEdit', 'Colonia': 'TextEdit', 'Alcald�a': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'Puntos_de_acceso': 'Range', 'Programa': 'TextEdit', 'Escuelas': 'Range', 'MAC': 'TextEdit', 'A�o de inauguraci�n': 'TextEdit', 'Proveedor de Equipamiento': 'TextEdit', 'Proveedor de Telecomunicaciones': 'TextEdit', 'diarios': 'TextEdit', 'Usuarios_Semanal': 'TextEdit', 'Conexiones': 'TextEdit', 'Tiempo': 'TextEdit', 'Clasificaci�n': 'TextEdit', });
lyr_Lmitealcaldas_14.set('fieldImages', {'nomgeo': 'TextEdit', 'cve_mun': 'Range', 'g_pnt_2': 'TextEdit', 'geo_shp': 'TextEdit', 'frecuencia': 'TextEdit', });
lyr_Universidades_0.set('fieldLabels', {});
lyr_PostesC5_1.set('fieldLabels', {});
lyr_Colonias_sinWifi_2.set('fieldLabels', {});
lyr_Sitiospblicos_3.set('fieldLabels', {});
lyr_MiBarrio_4.set('fieldLabels', {});
lyr_Unidadeshabitacionales_5.set('fieldLabels', {});
lyr_EscuelasSecundarias_6.set('fieldLabels', {});
lyr_EscuelasPrimarias_7.set('fieldLabels', {});
lyr_Pilares_8.set('fieldLabels', {});
lyr_IEMS_9.set('fieldLabels', {});
lyr_CentrosdeSalud_10.set('fieldLabels', {});
lyr_Metrobs_11.set('fieldLabels', {});
lyr_Utopas_12.set('fieldLabels', {});
lyr_Lmitealcaldas_14.set('fieldLabels', {'nomgeo': 'no label', 'cve_mun': 'no label', 'g_pnt_2': 'no label', 'geo_shp': 'no label', 'frecuencia': 'no label', });
lyr_Lmitealcaldas_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});