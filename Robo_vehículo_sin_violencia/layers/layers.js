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
var format_TrazaCDMX_1 = new ol.format.GeoJSON();
var features_TrazaCDMX_1 = format_TrazaCDMX_1.readFeatures(json_TrazaCDMX_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TrazaCDMX_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TrazaCDMX_1.addFeatures(features_TrazaCDMX_1);
var lyr_TrazaCDMX_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TrazaCDMX_1, 
                style: style_TrazaCDMX_1,
                interactive: true,
                title: '<img src="styles/legend/TrazaCDMX_1.png" /> Traza CDMX'
            });
var format_Nombresectores_2 = new ol.format.GeoJSON();
var features_Nombresectores_2 = format_Nombresectores_2.readFeatures(json_Nombresectores_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nombresectores_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nombresectores_2.addFeatures(features_Nombresectores_2);
var lyr_Nombresectores_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Nombresectores_2, 
                style: style_Nombresectores_2,
                interactive: true,
                title: '<img src="styles/legend/Nombresectores_2.png" /> Nombre sectores'
            });
var format_Sectores_3 = new ol.format.GeoJSON();
var features_Sectores_3 = format_Sectores_3.readFeatures(json_Sectores_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sectores_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sectores_3.addFeatures(features_Sectores_3);
var lyr_Sectores_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sectores_3, 
                style: style_Sectores_3,
                interactive: true,
                title: '<img src="styles/legend/Sectores_3.png" /> Sectores'
            });
var format_Cluster_robo_sin_violencia2022_4 = new ol.format.GeoJSON();
var features_Cluster_robo_sin_violencia2022_4 = format_Cluster_robo_sin_violencia2022_4.readFeatures(json_Cluster_robo_sin_violencia2022_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cluster_robo_sin_violencia2022_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cluster_robo_sin_violencia2022_4.addFeatures(features_Cluster_robo_sin_violencia2022_4);
var lyr_Cluster_robo_sin_violencia2022_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cluster_robo_sin_violencia2022_4, 
                style: style_Cluster_robo_sin_violencia2022_4,
                interactive: true,
    title: 'Cluster_robo_sin_violencia 2022<br />\
    <img src="styles/legend/Cluster_robo_sin_violencia2022_4_0.png" /> 19 - 31<br />'
        });
var format_VialidadesprimariasCDMX_5 = new ol.format.GeoJSON();
var features_VialidadesprimariasCDMX_5 = format_VialidadesprimariasCDMX_5.readFeatures(json_VialidadesprimariasCDMX_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VialidadesprimariasCDMX_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VialidadesprimariasCDMX_5.addFeatures(features_VialidadesprimariasCDMX_5);
var lyr_VialidadesprimariasCDMX_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VialidadesprimariasCDMX_5, 
                style: style_VialidadesprimariasCDMX_5,
                interactive: true,
                title: '<img src="styles/legend/VialidadesprimariasCDMX_5.png" /> Vialidades primarias CDMX'
            });
var format_Carpetasenero2023_robosinviolencia_6 = new ol.format.GeoJSON();
var features_Carpetasenero2023_robosinviolencia_6 = format_Carpetasenero2023_robosinviolencia_6.readFeatures(json_Carpetasenero2023_robosinviolencia_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Carpetasenero2023_robosinviolencia_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Carpetasenero2023_robosinviolencia_6.addFeatures(features_Carpetasenero2023_robosinviolencia_6);
var lyr_Carpetasenero2023_robosinviolencia_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Carpetasenero2023_robosinviolencia_6, 
                style: style_Carpetasenero2023_robosinviolencia_6,
                interactive: true,
                title: '<img src="styles/legend/Carpetasenero2023_robosinviolencia_6.png" /> Carpetas enero 2023_robo sin violencia'
            });

lyr_Mapabase_0.setVisible(true);lyr_TrazaCDMX_1.setVisible(true);lyr_Nombresectores_2.setVisible(false);lyr_Sectores_3.setVisible(true);lyr_Cluster_robo_sin_violencia2022_4.setVisible(true);lyr_VialidadesprimariasCDMX_5.setVisible(false);lyr_Carpetasenero2023_robosinviolencia_6.setVisible(true);
var layersList = [lyr_Mapabase_0,lyr_TrazaCDMX_1,lyr_Nombresectores_2,lyr_Sectores_3,lyr_Cluster_robo_sin_violencia2022_4,lyr_VialidadesprimariasCDMX_5,lyr_Carpetasenero2023_robosinviolencia_6];
lyr_TrazaCDMX_1.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'NOMGEO': 'NOMGEO', });
lyr_Nombresectores_2.set('fieldAliases', {'gid': 'gid', 'id': 'id', 'delegacion': 'delegacion', 'zona': 'zona', 'cve_zona': 'cve_zona', 'consec_reg': 'consec_reg', 'consec_sec': 'consec_sec', 'nombre_sec': 'nombre_sec', 'ct': 'ct', 'x': 'x', 'y': 'y', 'id_alcaldi': 'id_alcaldi', });
lyr_Sectores_3.set('fieldAliases', {'gid': 'gid', 'id': 'id', 'delegacion': 'delegacion', 'zona': 'zona', 'cve_zona': 'cve_zona', 'consec_reg': 'consec_reg', 'consec_sec': 'consec_sec', 'nombre_sec': 'nombre_sec', 'ct': 'ct', 'x': 'x', 'y': 'y', 'id_alcaldi': 'id_alcaldi', });
lyr_Cluster_robo_sin_violencia2022_4.set('fieldAliases', {'fid': 'fid', 'AREA': 'AREA', 'COUNT': 'COUNT', });
lyr_VialidadesprimariasCDMX_5.set('fieldAliases', {'_id': '_id', 'id': 'id', 'g_pnt_2': 'g_pnt_2', 'geo_shp': 'geo_shp', 'nombre': 'nombre', 'inicia': 'inicia', 'termina': 'termina', 'tipo_vi': 'tipo_vi', 'vel_max': 'vel_max', });
lyr_Carpetasenero2023_robosinviolencia_6.set('fieldAliases', {'Column1': 'Column1', 'id_ap': 'id_ap', 'ap': 'ap', 'ci_formato': 'ci_formato', 'fecha_de_i': 'fecha_de_i', 'hora_de_in': 'hora_de_in', 'ct_inicio_': 'ct_inicio_', 'tipo_impac': 'tipo_impac', 'delito': 'delito', 'modalidad_': 'modalidad_', 'resumen_ap': 'resumen_ap', 'fecha_de_l': 'fecha_de_l', 'hora_de_lo': 'hora_de_lo', 'calle_1_he': 'calle_1_he', 'calle_2_he': 'calle_2_he', 'colonia_he': 'colonia_he', 'delegacion': 'delegacion', 'ct_hechos': 'ct_hechos', 'coord_x': 'coord_x', 'coord_y': 'coord_y', 'competenci': 'competenci', 'delito_ses': 'delito_ses', 'delito_ine': 'delito_ine', 'via_de_con': 'via_de_con', 'fecha_inic': 'fecha_inic', 'fecha_hech': 'fecha_hech', 'delito_fin': 'delito_fin', 'tipo_veh': 'tipo_veh', 'categoria_': 'categoria_', 'modus_arma': 'modus_arma', 'modus_situ': 'modus_situ', 'numero_de_': 'numero_de_', 'id_auto': 'id_auto', 'descmarca': 'descmarca', 'descsubmar': 'descsubmar', 'desccolor': 'desccolor', 'modelo': 'modelo', 'estatus': 'estatus', 'tipovehicu': 'tipovehicu', 'fecha_recu': 'fecha_recu', 'lon': 'lon', 'lat': 'lat', 'field_43': 'field_43', 'field_44': 'field_44', 'field_45': 'field_45', 'field_46': 'field_46', 'field_47': 'field_47', 'field_48': 'field_48', 'field_49': 'field_49', 'field_50': 'field_50', 'field_51': 'field_51', 'field_52': 'field_52', 'field_53': 'field_53', 'field_54': 'field_54', 'field_55': 'field_55', 'field_56': 'field_56', 'field_57': 'field_57', 'field_58': 'field_58', 'field_59': 'field_59', 'field_60': 'field_60', 'field_61': 'field_61', 'field_62': 'field_62', 'field_63': 'field_63', 'field_64': 'field_64', 'field_65': 'field_65', 'field_66': 'field_66', 'field_67': 'field_67', 'field_68': 'field_68', 'field_69': 'field_69', 'field_70': 'field_70', 'field_71': 'field_71', 'field_72': 'field_72', 'field_73': 'field_73', 'field_74': 'field_74', 'field_75': 'field_75', 'field_76': 'field_76', 'field_77': 'field_77', 'field_78': 'field_78', 'field_79': 'field_79', 'field_80': 'field_80', 'field_81': 'field_81', });
lyr_TrazaCDMX_1.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'NOMGEO': 'TextEdit', });
lyr_Nombresectores_2.set('fieldImages', {'gid': 'TextEdit', 'id': 'TextEdit', 'delegacion': 'TextEdit', 'zona': 'TextEdit', 'cve_zona': 'TextEdit', 'consec_reg': 'TextEdit', 'consec_sec': 'TextEdit', 'nombre_sec': 'TextEdit', 'ct': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'id_alcaldi': 'TextEdit', });
lyr_Sectores_3.set('fieldImages', {'gid': 'TextEdit', 'id': 'TextEdit', 'delegacion': 'TextEdit', 'zona': 'TextEdit', 'cve_zona': 'TextEdit', 'consec_reg': 'TextEdit', 'consec_sec': 'TextEdit', 'nombre_sec': 'TextEdit', 'ct': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'id_alcaldi': 'TextEdit', });
lyr_Cluster_robo_sin_violencia2022_4.set('fieldImages', {'fid': 'Range', 'AREA': 'Range', 'COUNT': 'Range', });
lyr_VialidadesprimariasCDMX_5.set('fieldImages', {'_id': 'Range', 'id': 'Range', 'g_pnt_2': 'TextEdit', 'geo_shp': 'TextEdit', 'nombre': 'TextEdit', 'inicia': 'TextEdit', 'termina': 'TextEdit', 'tipo_vi': 'TextEdit', 'vel_max': 'Range', });
lyr_Carpetasenero2023_robosinviolencia_6.set('fieldImages', {'Column1': 'TextEdit', 'id_ap': 'TextEdit', 'ap': 'TextEdit', 'ci_formato': 'TextEdit', 'fecha_de_i': 'TextEdit', 'hora_de_in': 'TextEdit', 'ct_inicio_': 'TextEdit', 'tipo_impac': 'TextEdit', 'delito': 'TextEdit', 'modalidad_': 'TextEdit', 'resumen_ap': 'TextEdit', 'fecha_de_l': 'TextEdit', 'hora_de_lo': 'TextEdit', 'calle_1_he': 'TextEdit', 'calle_2_he': 'TextEdit', 'colonia_he': 'TextEdit', 'delegacion': 'TextEdit', 'ct_hechos': 'TextEdit', 'coord_x': 'TextEdit', 'coord_y': 'TextEdit', 'competenci': 'TextEdit', 'delito_ses': 'TextEdit', 'delito_ine': 'TextEdit', 'via_de_con': 'TextEdit', 'fecha_inic': 'TextEdit', 'fecha_hech': 'TextEdit', 'delito_fin': 'TextEdit', 'tipo_veh': 'TextEdit', 'categoria_': 'TextEdit', 'modus_arma': 'TextEdit', 'modus_situ': 'TextEdit', 'numero_de_': 'Range', 'id_auto': 'TextEdit', 'descmarca': 'TextEdit', 'descsubmar': 'TextEdit', 'desccolor': 'TextEdit', 'modelo': 'TextEdit', 'estatus': 'TextEdit', 'tipovehicu': 'TextEdit', 'fecha_recu': 'TextEdit', 'lon': 'TextEdit', 'lat': 'TextEdit', 'field_43': 'TextEdit', 'field_44': 'TextEdit', 'field_45': 'TextEdit', 'field_46': 'TextEdit', 'field_47': 'TextEdit', 'field_48': 'TextEdit', 'field_49': 'TextEdit', 'field_50': 'TextEdit', 'field_51': 'TextEdit', 'field_52': 'TextEdit', 'field_53': 'TextEdit', 'field_54': 'TextEdit', 'field_55': 'TextEdit', 'field_56': 'TextEdit', 'field_57': 'TextEdit', 'field_58': 'TextEdit', 'field_59': 'TextEdit', 'field_60': 'TextEdit', 'field_61': 'TextEdit', 'field_62': 'TextEdit', 'field_63': 'TextEdit', 'field_64': 'TextEdit', 'field_65': 'TextEdit', 'field_66': 'TextEdit', 'field_67': 'TextEdit', 'field_68': 'TextEdit', 'field_69': 'TextEdit', 'field_70': 'TextEdit', 'field_71': 'TextEdit', 'field_72': 'TextEdit', 'field_73': 'TextEdit', 'field_74': 'TextEdit', 'field_75': 'TextEdit', 'field_76': 'TextEdit', 'field_77': 'TextEdit', 'field_78': 'TextEdit', 'field_79': 'TextEdit', 'field_80': 'TextEdit', 'field_81': 'TextEdit', });
lyr_TrazaCDMX_1.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'NOMGEO': 'no label', });
lyr_Nombresectores_2.set('fieldLabels', {'gid': 'no label', 'id': 'no label', 'delegacion': 'no label', 'zona': 'no label', 'cve_zona': 'no label', 'consec_reg': 'no label', 'consec_sec': 'no label', 'nombre_sec': 'no label', 'ct': 'no label', 'x': 'no label', 'y': 'no label', 'id_alcaldi': 'no label', });
lyr_Sectores_3.set('fieldLabels', {'gid': 'no label', 'id': 'no label', 'delegacion': 'no label', 'zona': 'no label', 'cve_zona': 'no label', 'consec_reg': 'no label', 'consec_sec': 'no label', 'nombre_sec': 'no label', 'ct': 'no label', 'x': 'no label', 'y': 'no label', 'id_alcaldi': 'no label', });
lyr_Cluster_robo_sin_violencia2022_4.set('fieldLabels', {'fid': 'no label', 'AREA': 'no label', 'COUNT': 'no label', });
lyr_VialidadesprimariasCDMX_5.set('fieldLabels', {'_id': 'no label', 'id': 'no label', 'g_pnt_2': 'no label', 'geo_shp': 'no label', 'nombre': 'no label', 'inicia': 'no label', 'termina': 'no label', 'tipo_vi': 'no label', 'vel_max': 'no label', });
lyr_Carpetasenero2023_robosinviolencia_6.set('fieldLabels', {'Column1': 'no label', 'id_ap': 'no label', 'ap': 'no label', 'ci_formato': 'no label', 'fecha_de_i': 'no label', 'hora_de_in': 'no label', 'ct_inicio_': 'no label', 'tipo_impac': 'no label', 'delito': 'no label', 'modalidad_': 'no label', 'resumen_ap': 'no label', 'fecha_de_l': 'no label', 'hora_de_lo': 'no label', 'calle_1_he': 'no label', 'calle_2_he': 'no label', 'colonia_he': 'no label', 'delegacion': 'no label', 'ct_hechos': 'no label', 'coord_x': 'no label', 'coord_y': 'no label', 'competenci': 'no label', 'delito_ses': 'no label', 'delito_ine': 'no label', 'via_de_con': 'no label', 'fecha_inic': 'no label', 'fecha_hech': 'no label', 'delito_fin': 'no label', 'tipo_veh': 'no label', 'categoria_': 'no label', 'modus_arma': 'no label', 'modus_situ': 'no label', 'numero_de_': 'no label', 'id_auto': 'no label', 'descmarca': 'no label', 'descsubmar': 'no label', 'desccolor': 'no label', 'modelo': 'no label', 'estatus': 'no label', 'tipovehicu': 'no label', 'fecha_recu': 'no label', 'lon': 'no label', 'lat': 'no label', 'field_43': 'no label', 'field_44': 'no label', 'field_45': 'no label', 'field_46': 'no label', 'field_47': 'no label', 'field_48': 'no label', 'field_49': 'no label', 'field_50': 'no label', 'field_51': 'no label', 'field_52': 'no label', 'field_53': 'no label', 'field_54': 'no label', 'field_55': 'no label', 'field_56': 'no label', 'field_57': 'no label', 'field_58': 'no label', 'field_59': 'no label', 'field_60': 'no label', 'field_61': 'no label', 'field_62': 'no label', 'field_63': 'no label', 'field_64': 'no label', 'field_65': 'no label', 'field_66': 'no label', 'field_67': 'no label', 'field_68': 'no label', 'field_69': 'no label', 'field_70': 'no label', 'field_71': 'no label', 'field_72': 'no label', 'field_73': 'no label', 'field_74': 'no label', 'field_75': 'no label', 'field_76': 'no label', 'field_77': 'no label', 'field_78': 'no label', 'field_79': 'no label', 'field_80': 'no label', 'field_81': 'no label', });
lyr_Carpetasenero2023_robosinviolencia_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});