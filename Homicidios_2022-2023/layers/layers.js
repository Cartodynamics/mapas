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
var lyr_Mapadecalor_homicidios2022_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Mapa de calor_homicidios2022",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Mapadecalor_homicidios2022_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-11061324.586361, 2160585.055633, -11013982.730350, 2224848.006907]
                            })
                        });
var format_Carpetas2022_2 = new ol.format.GeoJSON();
var features_Carpetas2022_2 = format_Carpetas2022_2.readFeatures(json_Carpetas2022_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Carpetas2022_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Carpetas2022_2.addFeatures(features_Carpetas2022_2);
var lyr_Carpetas2022_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Carpetas2022_2, 
                style: style_Carpetas2022_2,
                interactive: true,
                title: '<img src="styles/legend/Carpetas2022_2.png" /> Carpetas 2022'
            });
var lyr_Mapadecalor_homicidios2023_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "Mapa de calor_homicidios 2023",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Mapadecalor_homicidios2023_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-11061326.388823, 2160594.398806, -11013984.562489, 2224836.028031]
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
var format_Sectores_5 = new ol.format.GeoJSON();
var features_Sectores_5 = format_Sectores_5.readFeatures(json_Sectores_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sectores_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sectores_5.addFeatures(features_Sectores_5);
var lyr_Sectores_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sectores_5, 
                style: style_Sectores_5,
                interactive: false,
                title: '<img src="styles/legend/Sectores_5.png" /> Sectores'
            });
var format_Carpetas2023_6 = new ol.format.GeoJSON();
var features_Carpetas2023_6 = format_Carpetas2023_6.readFeatures(json_Carpetas2023_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Carpetas2023_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Carpetas2023_6.addFeatures(features_Carpetas2023_6);
var lyr_Carpetas2023_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Carpetas2023_6, 
                style: style_Carpetas2023_6,
                interactive: true,
                title: '<img src="styles/legend/Carpetas2023_6.png" /> Carpetas 2023'
            });

lyr_Mapabase_0.setVisible(true);lyr_Mapadecalor_homicidios2022_1.setVisible(false);lyr_Carpetas2022_2.setVisible(false);lyr_Mapadecalor_homicidios2023_3.setVisible(true);lyr_Lmitealcaldas_4.setVisible(true);lyr_Sectores_5.setVisible(true);lyr_Carpetas2023_6.setVisible(true);
var layersList = [lyr_Mapabase_0,lyr_Mapadecalor_homicidios2022_1,lyr_Carpetas2022_2,lyr_Mapadecalor_homicidios2023_3,lyr_Lmitealcaldas_4,lyr_Sectores_5,lyr_Carpetas2023_6];
lyr_Carpetas2022_2.set('fieldAliases', {'id_ci': 'id_ci', 'carpeta_in': 'carpeta_in', 'fecha_inic': 'fecha_inic', 'hora_inici': 'hora_inici', 'fecha_hech': 'fecha_hech', 'hora_hecho': 'hora_hecho', 'exordio': 'exordio', 'categoria_': 'categoria_', 'delito': 'delito', 'id_delito_': 'id_delito_', 'lugar_comi': 'lugar_comi', 'total_vict': 'total_vict', 'fiscalia_i': 'fiscalia_i', 'agencia_in': 'agencia_in', 'unidad_inv': 'unidad_inv', 'alcaldia_h': 'alcaldia_h', 'ct_hechos': 'ct_hechos', 'colonia_he': 'colonia_he', 'calle': 'calle', 'calle1': 'calle1', 'year_numbe': 'year_numbe', 'week_numbe': 'week_numbe', 'day_number': 'day_number', 'carpeta__1': 'carpeta__1', 'fiscalia': 'fiscalia', 'agencia': 'agencia', 'geox': 'geox', 'geoy': 'geoy', 'lat': 'lat', 'lon': 'lon', 'point': 'point', 'geo_alcald': 'geo_alcald', 'geo_coloni': 'geo_coloni', 'geo_coordi': 'geo_coordi', 'geo_sector': 'geo_sector', 'geo_cuadra': 'geo_cuadra', 'fecha_actu': 'fecha_actu', });
lyr_Lmitealcaldas_4.set('fieldAliases', {'X_id': 'X_id', 'id': 'id', 'nomgeo': 'nomgeo', 'cve_mun': 'cve_mun', 'cve_ent': 'cve_ent', 'cvegeo': 'cvegeo', 'g_pnt_2': 'g_pnt_2', 'geo_shp': 'geo_shp', 'municip': 'municip', });
lyr_Sectores_5.set('fieldAliases', {'gid': 'gid', 'id': 'id', 'delegacion': 'delegacion', 'zona': 'zona', 'cve_zona': 'cve_zona', 'consec_reg': 'consec_reg', 'consec_sec': 'consec_sec', 'nombre_sec': 'nombre_sec', 'ct': 'ct', 'x': 'x', 'y': 'y', 'id_alcaldi': 'id_alcaldi', });
lyr_Carpetas2023_6.set('fieldAliases', {'id_ci': 'id_ci', 'carpeta_in': 'carpeta_in', 'fecha_inic': 'fecha_inic', 'hora_inici': 'hora_inici', 'fecha_hech': 'fecha_hech', 'hora_hecho': 'hora_hecho', 'exordio': 'exordio', 'categoria_': 'categoria_', 'delito': 'delito', 'id_delito_': 'id_delito_', 'lugar_comi': 'lugar_comi', 'total_vict': 'total_vict', 'fiscalia_i': 'fiscalia_i', 'agencia_in': 'agencia_in', 'unidad_inv': 'unidad_inv', 'alcaldia_h': 'alcaldia_h', 'ct_hechos': 'ct_hechos', 'colonia_he': 'colonia_he', 'calle': 'calle', 'calle1': 'calle1', 'year_numbe': 'year_numbe', 'week_numbe': 'week_numbe', 'day_number': 'day_number', 'carpeta__1': 'carpeta__1', 'fiscalia': 'fiscalia', 'agencia': 'agencia', 'geox': 'geox', 'geoy': 'geoy', 'lat': 'lat', 'lon': 'lon', 'point': 'point', 'geo_alcald': 'geo_alcald', 'geo_coloni': 'geo_coloni', 'geo_coordi': 'geo_coordi', 'geo_sector': 'geo_sector', 'geo_cuadra': 'geo_cuadra', 'fecha_actu': 'fecha_actu', });
lyr_Carpetas2022_2.set('fieldImages', {'id_ci': 'TextEdit', 'carpeta_in': 'TextEdit', 'fecha_inic': 'DateTime', 'hora_inici': 'TextEdit', 'fecha_hech': 'DateTime', 'hora_hecho': 'TextEdit', 'exordio': 'TextEdit', 'categoria_': 'TextEdit', 'delito': 'TextEdit', 'id_delito_': 'Range', 'lugar_comi': 'TextEdit', 'total_vict': 'TextEdit', 'fiscalia_i': 'TextEdit', 'agencia_in': 'TextEdit', 'unidad_inv': 'TextEdit', 'alcaldia_h': 'TextEdit', 'ct_hechos': 'TextEdit', 'colonia_he': 'TextEdit', 'calle': 'TextEdit', 'calle1': 'TextEdit', 'year_numbe': 'TextEdit', 'week_numbe': 'TextEdit', 'day_number': 'TextEdit', 'carpeta__1': 'TextEdit', 'fiscalia': 'TextEdit', 'agencia': 'TextEdit', 'geox': 'TextEdit', 'geoy': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', 'point': 'TextEdit', 'geo_alcald': 'TextEdit', 'geo_coloni': 'TextEdit', 'geo_coordi': 'TextEdit', 'geo_sector': 'TextEdit', 'geo_cuadra': 'TextEdit', 'fecha_actu': 'DateTime', });
lyr_Lmitealcaldas_4.set('fieldImages', {'X_id': 'Range', 'id': 'Range', 'nomgeo': 'TextEdit', 'cve_mun': 'Range', 'cve_ent': 'Range', 'cvegeo': 'Range', 'g_pnt_2': 'TextEdit', 'geo_shp': 'TextEdit', 'municip': 'Range', });
lyr_Sectores_5.set('fieldImages', {'gid': 'TextEdit', 'id': 'TextEdit', 'delegacion': 'TextEdit', 'zona': 'TextEdit', 'cve_zona': 'TextEdit', 'consec_reg': 'TextEdit', 'consec_sec': 'TextEdit', 'nombre_sec': 'TextEdit', 'ct': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'id_alcaldi': 'TextEdit', });
lyr_Carpetas2023_6.set('fieldImages', {'id_ci': 'TextEdit', 'carpeta_in': 'TextEdit', 'fecha_inic': 'DateTime', 'hora_inici': 'TextEdit', 'fecha_hech': 'DateTime', 'hora_hecho': 'TextEdit', 'exordio': 'TextEdit', 'categoria_': 'TextEdit', 'delito': 'TextEdit', 'id_delito_': 'Range', 'lugar_comi': 'TextEdit', 'total_vict': 'TextEdit', 'fiscalia_i': 'TextEdit', 'agencia_in': 'TextEdit', 'unidad_inv': 'TextEdit', 'alcaldia_h': 'TextEdit', 'ct_hechos': 'TextEdit', 'colonia_he': 'TextEdit', 'calle': 'TextEdit', 'calle1': 'TextEdit', 'year_numbe': 'TextEdit', 'week_numbe': 'TextEdit', 'day_number': 'TextEdit', 'carpeta__1': 'TextEdit', 'fiscalia': 'TextEdit', 'agencia': 'TextEdit', 'geox': 'TextEdit', 'geoy': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', 'point': 'TextEdit', 'geo_alcald': 'TextEdit', 'geo_coloni': 'TextEdit', 'geo_coordi': 'TextEdit', 'geo_sector': 'TextEdit', 'geo_cuadra': 'TextEdit', 'fecha_actu': 'DateTime', });
lyr_Carpetas2022_2.set('fieldLabels', {'id_ci': 'no label', 'carpeta_in': 'no label', 'fecha_inic': 'no label', 'hora_inici': 'no label', 'fecha_hech': 'no label', 'hora_hecho': 'no label', 'exordio': 'no label', 'categoria_': 'no label', 'delito': 'no label', 'id_delito_': 'no label', 'lugar_comi': 'no label', 'total_vict': 'no label', 'fiscalia_i': 'no label', 'agencia_in': 'no label', 'unidad_inv': 'no label', 'alcaldia_h': 'no label', 'ct_hechos': 'no label', 'colonia_he': 'no label', 'calle': 'no label', 'calle1': 'no label', 'year_numbe': 'no label', 'week_numbe': 'no label', 'day_number': 'no label', 'carpeta__1': 'no label', 'fiscalia': 'no label', 'agencia': 'no label', 'geox': 'no label', 'geoy': 'no label', 'lat': 'no label', 'lon': 'no label', 'point': 'no label', 'geo_alcald': 'no label', 'geo_coloni': 'no label', 'geo_coordi': 'no label', 'geo_sector': 'no label', 'geo_cuadra': 'no label', 'fecha_actu': 'no label', });
lyr_Lmitealcaldas_4.set('fieldLabels', {'X_id': 'no label', 'id': 'no label', 'nomgeo': 'no label', 'cve_mun': 'no label', 'cve_ent': 'no label', 'cvegeo': 'no label', 'g_pnt_2': 'no label', 'geo_shp': 'no label', 'municip': 'no label', });
lyr_Sectores_5.set('fieldLabels', {'gid': 'no label', 'id': 'no label', 'delegacion': 'no label', 'zona': 'no label', 'cve_zona': 'no label', 'consec_reg': 'no label', 'consec_sec': 'no label', 'nombre_sec': 'no label', 'ct': 'no label', 'x': 'no label', 'y': 'no label', 'id_alcaldi': 'no label', });
lyr_Carpetas2023_6.set('fieldLabels', {'id_ci': 'no label', 'carpeta_in': 'no label', 'fecha_inic': 'no label', 'hora_inici': 'no label', 'fecha_hech': 'no label', 'hora_hecho': 'no label', 'exordio': 'no label', 'categoria_': 'no label', 'delito': 'no label', 'id_delito_': 'no label', 'lugar_comi': 'no label', 'total_vict': 'no label', 'fiscalia_i': 'no label', 'agencia_in': 'no label', 'unidad_inv': 'no label', 'alcaldia_h': 'no label', 'ct_hechos': 'no label', 'colonia_he': 'no label', 'calle': 'no label', 'calle1': 'no label', 'year_numbe': 'no label', 'week_numbe': 'no label', 'day_number': 'no label', 'carpeta__1': 'no label', 'fiscalia': 'no label', 'agencia': 'no label', 'geox': 'no label', 'geoy': 'no label', 'lat': 'no label', 'lon': 'no label', 'point': 'no label', 'geo_alcald': 'no label', 'geo_coloni': 'no label', 'geo_coordi': 'no label', 'geo_sector': 'no label', 'geo_cuadra': 'no label', 'fecha_actu': 'no label', });
lyr_Carpetas2023_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});