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
var format_Sectores_2 = new ol.format.GeoJSON();
var features_Sectores_2 = format_Sectores_2.readFeatures(json_Sectores_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sectores_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sectores_2.addFeatures(features_Sectores_2);
var lyr_Sectores_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sectores_2, 
                style: style_Sectores_2,
                interactive: false,
                title: '<img src="styles/legend/Sectores_2.png" /> Sectores'
            });
var format_Clustercarpetasmotocicleta2022_3 = new ol.format.GeoJSON();
var features_Clustercarpetasmotocicleta2022_3 = format_Clustercarpetasmotocicleta2022_3.readFeatures(json_Clustercarpetasmotocicleta2022_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clustercarpetasmotocicleta2022_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clustercarpetasmotocicleta2022_3.addFeatures(features_Clustercarpetasmotocicleta2022_3);
var lyr_Clustercarpetasmotocicleta2022_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Clustercarpetasmotocicleta2022_3, 
                style: style_Clustercarpetasmotocicleta2022_3,
                interactive: true,
    title: 'Cluster carpetas-motocicleta 2022<br />\
    <img src="styles/legend/Clustercarpetasmotocicleta2022_3_0.png" /> 8 - 9<br />\
    <img src="styles/legend/Clustercarpetasmotocicleta2022_3_1.png" /> 9 - 12<br />\
    <img src="styles/legend/Clustercarpetasmotocicleta2022_3_2.png" /> 12 - 17<br />\
    <img src="styles/legend/Clustercarpetasmotocicleta2022_3_3.png" /> 17 - 21<br />'
        });
var format_MotocicletaCarpetas2023_4 = new ol.format.GeoJSON();
var features_MotocicletaCarpetas2023_4 = format_MotocicletaCarpetas2023_4.readFeatures(json_MotocicletaCarpetas2023_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MotocicletaCarpetas2023_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MotocicletaCarpetas2023_4.addFeatures(features_MotocicletaCarpetas2023_4);
var lyr_MotocicletaCarpetas2023_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MotocicletaCarpetas2023_4, 
                style: style_MotocicletaCarpetas2023_4,
                interactive: true,
                title: '<img src="styles/legend/MotocicletaCarpetas2023_4.png" /> Motocicleta-Carpetas 2023'
            });
var format_Clustercarpetasautomvil2022_5 = new ol.format.GeoJSON();
var features_Clustercarpetasautomvil2022_5 = format_Clustercarpetasautomvil2022_5.readFeatures(json_Clustercarpetasautomvil2022_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clustercarpetasautomvil2022_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clustercarpetasautomvil2022_5.addFeatures(features_Clustercarpetasautomvil2022_5);
var lyr_Clustercarpetasautomvil2022_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Clustercarpetasautomvil2022_5, 
                style: style_Clustercarpetasautomvil2022_5,
                interactive: true,
    title: 'Cluster carpetas-automóvil 2022<br />\
    <img src="styles/legend/Clustercarpetasautomvil2022_5_0.png" /> 26 - 26<br />\
    <img src="styles/legend/Clustercarpetasautomvil2022_5_1.png" /> 26 - 30<br />\
    <img src="styles/legend/Clustercarpetasautomvil2022_5_2.png" /> 30 - 33<br />\
    <img src="styles/legend/Clustercarpetasautomvil2022_5_3.png" /> 33 - 35<br />'
        });
var format_AutomvilCarpetas2023_6 = new ol.format.GeoJSON();
var features_AutomvilCarpetas2023_6 = format_AutomvilCarpetas2023_6.readFeatures(json_AutomvilCarpetas2023_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AutomvilCarpetas2023_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AutomvilCarpetas2023_6.addFeatures(features_AutomvilCarpetas2023_6);
var lyr_AutomvilCarpetas2023_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AutomvilCarpetas2023_6, 
                style: style_AutomvilCarpetas2023_6,
                interactive: true,
                title: '<img src="styles/legend/AutomvilCarpetas2023_6.png" /> Automóvil-Carpetas 2023'
            });

lyr_Mapabase_0.setVisible(true);lyr_Lmitealcaldas_1.setVisible(true);lyr_Sectores_2.setVisible(true);lyr_Clustercarpetasmotocicleta2022_3.setVisible(false);lyr_MotocicletaCarpetas2023_4.setVisible(false);lyr_Clustercarpetasautomvil2022_5.setVisible(true);lyr_AutomvilCarpetas2023_6.setVisible(true);
var layersList = [lyr_Mapabase_0,lyr_Lmitealcaldas_1,lyr_Sectores_2,lyr_Clustercarpetasmotocicleta2022_3,lyr_MotocicletaCarpetas2023_4,lyr_Clustercarpetasautomvil2022_5,lyr_AutomvilCarpetas2023_6];
lyr_Lmitealcaldas_1.set('fieldAliases', {'nomgeo': 'nomgeo', 'cve_mun': 'cve_mun', 'g_pnt_2': 'g_pnt_2', 'geo_shp': 'geo_shp', 'frecuencia': 'frecuencia', });
lyr_Sectores_2.set('fieldAliases', {'gid': 'gid', 'id': 'id', 'delegacion': 'delegacion', 'zona': 'zona', 'cve_zona': 'cve_zona', 'consec_reg': 'consec_reg', 'consec_sec': 'consec_sec', 'nombre_sec': 'nombre_sec', 'ct': 'ct', 'x': 'x', 'y': 'y', 'id_alcaldi': 'id_alcaldi', });
lyr_Clustercarpetasmotocicleta2022_3.set('fieldAliases', {'fid': 'fid', 'AREA': 'AREA', 'COUNT': 'COUNT', });
lyr_MotocicletaCarpetas2023_4.set('fieldAliases', {'fid': 'fid', 'field_1': 'field_1', 'id_ap': 'id_ap', 'ap': 'ap', 'ci_formato_siap_fsiap': 'ci_formato_siap_fsiap', 'fecha_de_inicio': 'fecha_de_inicio', 'hora_de_inicio': 'hora_de_inicio', 'ct_inicio_ap': 'ct_inicio_ap', 'tipo_impacto': 'tipo_impacto', 'delito': 'delito', 'modalidad_delito': 'modalidad_delito', 'resumen_ap': 'resumen_ap', 'fecha_de_los_hechos': 'fecha_de_los_hechos', 'hora_de_los_hechos': 'hora_de_los_hechos', 'calle_1_hechos': 'calle_1_hechos', 'calle_2_hechos': 'calle_2_hechos', 'colonia_hechos': 'colonia_hechos', 'delegacion_hechos': 'delegacion_hechos', 'ct_hechos': 'ct_hechos', 'coord_x': 'coord_x', 'coord_y': 'coord_y', 'competencia': 'competencia', 'delito_sesnsp': 'delito_sesnsp', 'delito_inegi': 'delito_inegi', 'via_de_conocimiento': 'via_de_conocimiento', 'fecha_inicio': 'fecha_inicio', 'fecha_hechos': 'fecha_hechos', 'delito_final': 'delito_final', 'tipo_veh': 'tipo_veh', 'categoria_veh': 'categoria_veh', 'modus_arma': 'modus_arma', 'modus_situacion': 'modus_situacion', 'numero_de_imputados': 'numero_de_imputados', 'id_auto': 'id_auto', 'descmarca': 'descmarca', 'descsubmarca': 'descsubmarca', 'desccolor': 'desccolor', 'modelo': 'modelo', 'estatus': 'estatus', 'tipovehiculo': 'tipovehiculo', 'fecha_recuperacion': 'fecha_recuperacion', 'nombre': 'nombre', 'fecha_nueva': 'fecha_nueva', });
lyr_Clustercarpetasautomvil2022_5.set('fieldAliases', {'fid': 'fid', 'AREA': 'AREA', 'COUNT': 'COUNT', });
lyr_AutomvilCarpetas2023_6.set('fieldAliases', {'fid': 'fid', 'field_1': 'field_1', 'id_ap': 'id_ap', 'ap': 'ap', 'ci_formato_siap_fsiap': 'ci_formato_siap_fsiap', 'fecha_de_inicio': 'fecha_de_inicio', 'hora_de_inicio': 'hora_de_inicio', 'ct_inicio_ap': 'ct_inicio_ap', 'tipo_impacto': 'tipo_impacto', 'delito': 'delito', 'modalidad_delito': 'modalidad_delito', 'resumen_ap': 'resumen_ap', 'fecha_de_los_hechos': 'fecha_de_los_hechos', 'hora_de_los_hechos': 'hora_de_los_hechos', 'calle_1_hechos': 'calle_1_hechos', 'calle_2_hechos': 'calle_2_hechos', 'colonia_hechos': 'colonia_hechos', 'delegacion_hechos': 'delegacion_hechos', 'ct_hechos': 'ct_hechos', 'coord_x': 'coord_x', 'coord_y': 'coord_y', 'competencia': 'competencia', 'delito_sesnsp': 'delito_sesnsp', 'delito_inegi': 'delito_inegi', 'via_de_conocimiento': 'via_de_conocimiento', 'fecha_inicio': 'fecha_inicio', 'fecha_hechos': 'fecha_hechos', 'delito_final': 'delito_final', 'tipo_veh': 'tipo_veh', 'categoria_veh': 'categoria_veh', 'modus_arma': 'modus_arma', 'modus_situacion': 'modus_situacion', 'numero_de_imputados': 'numero_de_imputados', 'id_auto': 'id_auto', 'descmarca': 'descmarca', 'descsubmarca': 'descsubmarca', 'desccolor': 'desccolor', 'modelo': 'modelo', 'estatus': 'estatus', 'tipovehiculo': 'tipovehiculo', 'fecha_recuperacion': 'fecha_recuperacion', 'nombre': 'nombre', 'fecha_nueva': 'fecha_nueva', });
lyr_Lmitealcaldas_1.set('fieldImages', {'nomgeo': 'TextEdit', 'cve_mun': 'Range', 'g_pnt_2': 'TextEdit', 'geo_shp': 'TextEdit', 'frecuencia': 'TextEdit', });
lyr_Sectores_2.set('fieldImages', {'gid': 'TextEdit', 'id': 'TextEdit', 'delegacion': 'TextEdit', 'zona': 'TextEdit', 'cve_zona': 'TextEdit', 'consec_reg': 'TextEdit', 'consec_sec': 'TextEdit', 'nombre_sec': 'TextEdit', 'ct': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'id_alcaldi': 'TextEdit', });
lyr_Clustercarpetasmotocicleta2022_3.set('fieldImages', {'fid': 'Range', 'AREA': 'Range', 'COUNT': 'Range', });
lyr_MotocicletaCarpetas2023_4.set('fieldImages', {'fid': 'TextEdit', 'field_1': 'Range', 'id_ap': 'Range', 'ap': 'TextEdit', 'ci_formato_siap_fsiap': 'TextEdit', 'fecha_de_inicio': 'DateTime', 'hora_de_inicio': 'DateTime', 'ct_inicio_ap': 'TextEdit', 'tipo_impacto': 'TextEdit', 'delito': 'TextEdit', 'modalidad_delito': 'TextEdit', 'resumen_ap': 'TextEdit', 'fecha_de_los_hechos': 'DateTime', 'hora_de_los_hechos': 'DateTime', 'calle_1_hechos': 'TextEdit', 'calle_2_hechos': 'TextEdit', 'colonia_hechos': 'TextEdit', 'delegacion_hechos': 'TextEdit', 'ct_hechos': 'TextEdit', 'coord_x': 'TextEdit', 'coord_y': 'TextEdit', 'competencia': 'TextEdit', 'delito_sesnsp': 'TextEdit', 'delito_inegi': 'TextEdit', 'via_de_conocimiento': 'TextEdit', 'fecha_inicio': 'DateTime', 'fecha_hechos': 'DateTime', 'delito_final': 'TextEdit', 'tipo_veh': 'TextEdit', 'categoria_veh': 'TextEdit', 'modus_arma': 'TextEdit', 'modus_situacion': 'TextEdit', 'numero_de_imputados': 'TextEdit', 'id_auto': 'TextEdit', 'descmarca': 'TextEdit', 'descsubmarca': 'TextEdit', 'desccolor': 'TextEdit', 'modelo': 'TextEdit', 'estatus': 'TextEdit', 'tipovehiculo': 'TextEdit', 'fecha_recuperacion': 'TextEdit', 'nombre': 'TextEdit', 'fecha_nueva': 'DateTime', });
lyr_Clustercarpetasautomvil2022_5.set('fieldImages', {'fid': 'Range', 'AREA': 'Range', 'COUNT': 'Range', });
lyr_AutomvilCarpetas2023_6.set('fieldImages', {'fid': 'TextEdit', 'field_1': 'Range', 'id_ap': 'Range', 'ap': 'TextEdit', 'ci_formato_siap_fsiap': 'TextEdit', 'fecha_de_inicio': 'DateTime', 'hora_de_inicio': 'DateTime', 'ct_inicio_ap': 'TextEdit', 'tipo_impacto': 'TextEdit', 'delito': 'TextEdit', 'modalidad_delito': 'TextEdit', 'resumen_ap': 'TextEdit', 'fecha_de_los_hechos': 'DateTime', 'hora_de_los_hechos': 'DateTime', 'calle_1_hechos': 'TextEdit', 'calle_2_hechos': 'TextEdit', 'colonia_hechos': 'TextEdit', 'delegacion_hechos': 'TextEdit', 'ct_hechos': 'TextEdit', 'coord_x': 'TextEdit', 'coord_y': 'TextEdit', 'competencia': 'TextEdit', 'delito_sesnsp': 'TextEdit', 'delito_inegi': 'TextEdit', 'via_de_conocimiento': 'TextEdit', 'fecha_inicio': 'DateTime', 'fecha_hechos': 'DateTime', 'delito_final': 'TextEdit', 'tipo_veh': 'TextEdit', 'categoria_veh': 'TextEdit', 'modus_arma': 'TextEdit', 'modus_situacion': 'TextEdit', 'numero_de_imputados': 'TextEdit', 'id_auto': 'TextEdit', 'descmarca': 'TextEdit', 'descsubmarca': 'TextEdit', 'desccolor': 'TextEdit', 'modelo': 'TextEdit', 'estatus': 'TextEdit', 'tipovehiculo': 'TextEdit', 'fecha_recuperacion': 'TextEdit', 'nombre': 'TextEdit', 'fecha_nueva': 'DateTime', });
lyr_Lmitealcaldas_1.set('fieldLabels', {'nomgeo': 'no label', 'cve_mun': 'no label', 'g_pnt_2': 'no label', 'geo_shp': 'no label', 'frecuencia': 'no label', });
lyr_Sectores_2.set('fieldLabels', {'gid': 'no label', 'id': 'no label', 'delegacion': 'no label', 'zona': 'no label', 'cve_zona': 'no label', 'consec_reg': 'no label', 'consec_sec': 'no label', 'nombre_sec': 'no label', 'ct': 'no label', 'x': 'no label', 'y': 'no label', 'id_alcaldi': 'no label', });
lyr_Clustercarpetasmotocicleta2022_3.set('fieldLabels', {'fid': 'no label', 'AREA': 'no label', 'COUNT': 'no label', });
lyr_MotocicletaCarpetas2023_4.set('fieldLabels', {'fid': 'no label', 'field_1': 'no label', 'id_ap': 'no label', 'ap': 'no label', 'ci_formato_siap_fsiap': 'no label', 'fecha_de_inicio': 'no label', 'hora_de_inicio': 'no label', 'ct_inicio_ap': 'no label', 'tipo_impacto': 'no label', 'delito': 'no label', 'modalidad_delito': 'no label', 'resumen_ap': 'no label', 'fecha_de_los_hechos': 'no label', 'hora_de_los_hechos': 'no label', 'calle_1_hechos': 'no label', 'calle_2_hechos': 'no label', 'colonia_hechos': 'no label', 'delegacion_hechos': 'no label', 'ct_hechos': 'no label', 'coord_x': 'no label', 'coord_y': 'no label', 'competencia': 'no label', 'delito_sesnsp': 'no label', 'delito_inegi': 'no label', 'via_de_conocimiento': 'no label', 'fecha_inicio': 'no label', 'fecha_hechos': 'no label', 'delito_final': 'no label', 'tipo_veh': 'no label', 'categoria_veh': 'no label', 'modus_arma': 'no label', 'modus_situacion': 'no label', 'numero_de_imputados': 'no label', 'id_auto': 'no label', 'descmarca': 'no label', 'descsubmarca': 'no label', 'desccolor': 'no label', 'modelo': 'no label', 'estatus': 'no label', 'tipovehiculo': 'no label', 'fecha_recuperacion': 'no label', 'nombre': 'no label', 'fecha_nueva': 'no label', });
lyr_Clustercarpetasautomvil2022_5.set('fieldLabels', {'fid': 'no label', 'AREA': 'no label', 'COUNT': 'no label', });
lyr_AutomvilCarpetas2023_6.set('fieldLabels', {'fid': 'no label', 'field_1': 'no label', 'id_ap': 'no label', 'ap': 'no label', 'ci_formato_siap_fsiap': 'no label', 'fecha_de_inicio': 'no label', 'hora_de_inicio': 'no label', 'ct_inicio_ap': 'no label', 'tipo_impacto': 'no label', 'delito': 'no label', 'modalidad_delito': 'no label', 'resumen_ap': 'no label', 'fecha_de_los_hechos': 'no label', 'hora_de_los_hechos': 'no label', 'calle_1_hechos': 'no label', 'calle_2_hechos': 'no label', 'colonia_hechos': 'no label', 'delegacion_hechos': 'no label', 'ct_hechos': 'no label', 'coord_x': 'no label', 'coord_y': 'no label', 'competencia': 'no label', 'delito_sesnsp': 'no label', 'delito_inegi': 'no label', 'via_de_conocimiento': 'no label', 'fecha_inicio': 'no label', 'fecha_hechos': 'no label', 'delito_final': 'no label', 'tipo_veh': 'no label', 'categoria_veh': 'no label', 'modus_arma': 'no label', 'modus_situacion': 'no label', 'numero_de_imputados': 'no label', 'id_auto': 'no label', 'descmarca': 'no label', 'descsubmarca': 'no label', 'desccolor': 'no label', 'modelo': 'no label', 'estatus': 'no label', 'tipovehiculo': 'no label', 'fecha_recuperacion': 'no label', 'nombre': 'no label', 'fecha_nueva': 'no label', });
lyr_AutomvilCarpetas2023_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});