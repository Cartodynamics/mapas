var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_Positron_1 = new ol.layer.Tile({
            'title': 'Positron',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_Clustersinviolencia_2 = new ol.format.GeoJSON();
var features_Clustersinviolencia_2 = format_Clustersinviolencia_2.readFeatures(json_Clustersinviolencia_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clustersinviolencia_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clustersinviolencia_2.addFeatures(features_Clustersinviolencia_2);
var lyr_Clustersinviolencia_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Clustersinviolencia_2, 
                style: style_Clustersinviolencia_2,
                popuplayertitle: "Cluster sin violencia",
                interactive: false,
                title: '<img src="styles/legend/Clustersinviolencia_2.png" /> Cluster sin violencia'
            });
var format_Robomotosinviolenciaenenov_3 = new ol.format.GeoJSON();
var features_Robomotosinviolenciaenenov_3 = format_Robomotosinviolenciaenenov_3.readFeatures(json_Robomotosinviolenciaenenov_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Robomotosinviolenciaenenov_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Robomotosinviolenciaenenov_3.addFeatures(features_Robomotosinviolenciaenenov_3);
var lyr_Robomotosinviolenciaenenov_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Robomotosinviolenciaenenov_3, 
                style: style_Robomotosinviolenciaenenov_3,
                popuplayertitle: "Robo moto sin violencia (ene -nov)",
                interactive: true,
                title: '<img src="styles/legend/Robomotosinviolenciaenenov_3.png" /> Robo moto sin violencia (ene -nov)'
            });
var format_Robomotosinviolenciadiciembre_4 = new ol.format.GeoJSON();
var features_Robomotosinviolenciadiciembre_4 = format_Robomotosinviolenciadiciembre_4.readFeatures(json_Robomotosinviolenciadiciembre_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Robomotosinviolenciadiciembre_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Robomotosinviolenciadiciembre_4.addFeatures(features_Robomotosinviolenciadiciembre_4);
var lyr_Robomotosinviolenciadiciembre_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Robomotosinviolenciadiciembre_4, 
                style: style_Robomotosinviolenciadiciembre_4,
                popuplayertitle: "Robo moto sin violencia - (diciembre)",
                interactive: true,
                title: '<img src="styles/legend/Robomotosinviolenciadiciembre_4.png" /> Robo moto sin violencia - (diciembre)'
            });
var format_Roboavehculosinviolenciaenenov_5 = new ol.format.GeoJSON();
var features_Roboavehculosinviolenciaenenov_5 = format_Roboavehculosinviolenciaenenov_5.readFeatures(json_Roboavehculosinviolenciaenenov_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Roboavehculosinviolenciaenenov_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roboavehculosinviolenciaenenov_5.addFeatures(features_Roboavehculosinviolenciaenenov_5);
var lyr_Roboavehculosinviolenciaenenov_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Roboavehculosinviolenciaenenov_5, 
                style: style_Roboavehculosinviolenciaenenov_5,
                popuplayertitle: "Robo a vehículo sin violencia (ene-nov)",
                interactive: true,
                title: '<img src="styles/legend/Roboavehculosinviolenciaenenov_5.png" /> Robo a vehículo sin violencia (ene-nov)'
            });
var format_Roboavehculosinviolenciadiciembre_6 = new ol.format.GeoJSON();
var features_Roboavehculosinviolenciadiciembre_6 = format_Roboavehculosinviolenciadiciembre_6.readFeatures(json_Roboavehculosinviolenciadiciembre_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Roboavehculosinviolenciadiciembre_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roboavehculosinviolenciadiciembre_6.addFeatures(features_Roboavehculosinviolenciadiciembre_6);
var lyr_Roboavehculosinviolenciadiciembre_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Roboavehculosinviolenciadiciembre_6, 
                style: style_Roboavehculosinviolenciadiciembre_6,
                popuplayertitle: "Robo a vehículo sin violencia (diciembre)",
                interactive: true,
                title: '<img src="styles/legend/Roboavehculosinviolenciadiciembre_6.png" /> Robo a vehículo sin violencia (diciembre)'
            });
var format_Clusterconviolencia_7 = new ol.format.GeoJSON();
var features_Clusterconviolencia_7 = format_Clusterconviolencia_7.readFeatures(json_Clusterconviolencia_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clusterconviolencia_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clusterconviolencia_7.addFeatures(features_Clusterconviolencia_7);
var lyr_Clusterconviolencia_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Clusterconviolencia_7, 
                style: style_Clusterconviolencia_7,
                popuplayertitle: "Cluster con violencia",
                interactive: false,
                title: '<img src="styles/legend/Clusterconviolencia_7.png" /> Cluster con violencia'
            });
var format_Roboamotoconviolenciaenenov_8 = new ol.format.GeoJSON();
var features_Roboamotoconviolenciaenenov_8 = format_Roboamotoconviolenciaenenov_8.readFeatures(json_Roboamotoconviolenciaenenov_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Roboamotoconviolenciaenenov_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roboamotoconviolenciaenenov_8.addFeatures(features_Roboamotoconviolenciaenenov_8);
var lyr_Roboamotoconviolenciaenenov_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Roboamotoconviolenciaenenov_8, 
                style: style_Roboamotoconviolenciaenenov_8,
                popuplayertitle: "Robo a moto con violencia (ene-nov)",
                interactive: true,
                title: '<img src="styles/legend/Roboamotoconviolenciaenenov_8.png" /> Robo a moto con violencia (ene-nov)'
            });
var format_Roboamotoconviolenciadiciembre_9 = new ol.format.GeoJSON();
var features_Roboamotoconviolenciadiciembre_9 = format_Roboamotoconviolenciadiciembre_9.readFeatures(json_Roboamotoconviolenciadiciembre_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Roboamotoconviolenciadiciembre_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roboamotoconviolenciadiciembre_9.addFeatures(features_Roboamotoconviolenciadiciembre_9);
var lyr_Roboamotoconviolenciadiciembre_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Roboamotoconviolenciadiciembre_9, 
                style: style_Roboamotoconviolenciadiciembre_9,
                popuplayertitle: "Robo a moto con violencia (diciembre)",
                interactive: true,
                title: '<img src="styles/legend/Roboamotoconviolenciadiciembre_9.png" /> Robo a moto con violencia (diciembre)'
            });
var format_Roboavehiculoconviolenciaenenov_10 = new ol.format.GeoJSON();
var features_Roboavehiculoconviolenciaenenov_10 = format_Roboavehiculoconviolenciaenenov_10.readFeatures(json_Roboavehiculoconviolenciaenenov_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Roboavehiculoconviolenciaenenov_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roboavehiculoconviolenciaenenov_10.addFeatures(features_Roboavehiculoconviolenciaenenov_10);
var lyr_Roboavehiculoconviolenciaenenov_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Roboavehiculoconviolenciaenenov_10, 
                style: style_Roboavehiculoconviolenciaenenov_10,
                popuplayertitle: "Robo a vehiculo con violencia (ene-nov)",
                interactive: true,
                title: '<img src="styles/legend/Roboavehiculoconviolenciaenenov_10.png" /> Robo a vehiculo con violencia (ene-nov)'
            });
var format_Roboavehculoconviolenciadiciembre_11 = new ol.format.GeoJSON();
var features_Roboavehculoconviolenciadiciembre_11 = format_Roboavehculoconviolenciadiciembre_11.readFeatures(json_Roboavehculoconviolenciadiciembre_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Roboavehculoconviolenciadiciembre_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roboavehculoconviolenciadiciembre_11.addFeatures(features_Roboavehculoconviolenciadiciembre_11);
var lyr_Roboavehculoconviolenciadiciembre_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Roboavehculoconviolenciadiciembre_11, 
                style: style_Roboavehculoconviolenciadiciembre_11,
                popuplayertitle: "Robo a vehículo con violencia (diciembre)",
                interactive: true,
                title: '<img src="styles/legend/Roboavehculoconviolenciadiciembre_11.png" /> Robo a vehículo con violencia (diciembre)'
            });
var format_Alcaldas_12 = new ol.format.GeoJSON();
var features_Alcaldas_12 = format_Alcaldas_12.readFeatures(json_Alcaldas_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Alcaldas_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Alcaldas_12.addFeatures(features_Alcaldas_12);
var lyr_Alcaldas_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Alcaldas_12, 
                style: style_Alcaldas_12,
                popuplayertitle: "Alcaldías",
                interactive: false,
                title: '<img src="styles/legend/Alcaldas_12.png" /> Alcaldías'
            });

lyr_GoogleRoad_0.setVisible(false);lyr_Positron_1.setVisible(true);lyr_Clustersinviolencia_2.setVisible(false);lyr_Robomotosinviolenciaenenov_3.setVisible(false);lyr_Robomotosinviolenciadiciembre_4.setVisible(false);lyr_Roboavehculosinviolenciaenenov_5.setVisible(false);lyr_Roboavehculosinviolenciadiciembre_6.setVisible(false);lyr_Clusterconviolencia_7.setVisible(true);lyr_Roboamotoconviolenciaenenov_8.setVisible(true);lyr_Roboamotoconviolenciadiciembre_9.setVisible(true);lyr_Roboavehiculoconviolenciaenenov_10.setVisible(true);lyr_Roboavehculoconviolenciadiciembre_11.setVisible(true);lyr_Alcaldas_12.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_Positron_1,lyr_Clustersinviolencia_2,lyr_Robomotosinviolenciaenenov_3,lyr_Robomotosinviolenciadiciembre_4,lyr_Roboavehculosinviolenciaenenov_5,lyr_Roboavehculosinviolenciadiciembre_6,lyr_Clusterconviolencia_7,lyr_Roboamotoconviolenciaenenov_8,lyr_Roboamotoconviolenciadiciembre_9,lyr_Roboavehiculoconviolenciaenenov_10,lyr_Roboavehculoconviolenciadiciembre_11,lyr_Alcaldas_12];
lyr_Clustersinviolencia_2.set('fieldAliases', {'fid': 'fid', 'AREA': 'AREA', 'COUNT': 'Total carpetas', });
lyr_Robomotosinviolenciaenenov_3.set('fieldAliases', {'idCI': 'idCI', 'fiscalia': 'fiscalia', 'agencia': 'agencia', 'unidad_inv': 'unidad_inv', 'fecha_inic': 'Fecha inicio', 'fecha_hech': 'Fecha hechos', 'delito': 'Delito', 'categoria_': 'categoria_', 'calle_hech': 'calle_hech', 'calle_he_1': 'calle_he_1', 'colonia_he': 'colonia_he', 'alcaldia_h': 'Alcaldía', 'CTHecho': 'CTHecho', 'competenci': 'competenci', 'longitud': 'longitud', 'latitud': 'latitud', });
lyr_Robomotosinviolenciadiciembre_4.set('fieldAliases', {'idCI': 'idCI', 'fiscalia': 'fiscalia', 'agencia': 'agencia', 'unidad_inv': 'unidad_inv', 'fecha_inic': 'Fecha inicio', 'fecha_hech': 'Fecha hechos', 'delito': 'Delito', 'categoria_': 'categoria_', 'calle_hech': 'calle_hech', 'calle_he_1': 'calle_he_1', 'colonia_he': 'colonia_he', 'alcaldia_h': 'Alcaldía', 'CTHecho': 'CTHecho', 'competenci': 'competenci', 'longitud': 'longitud', 'latitud': 'latitud', });
lyr_Roboavehculosinviolenciaenenov_5.set('fieldAliases', {'idCI': 'idCI', 'fiscalia': 'fiscalia', 'agencia': 'agencia', 'unidad_inv': 'unidad_inv', 'fecha_inic': 'Fecha inicio', 'fecha_hech': 'Fecha hechos', 'delito': 'Delito', 'categoria_': 'categoria_', 'calle_hech': 'calle_hech', 'calle_he_1': 'calle_he_1', 'colonia_he': 'colonia_he', 'alcaldia_h': 'Alcaldía', 'CTHecho': 'CTHecho', 'competenci': 'competenci', 'longitud': 'longitud', 'latitud': 'latitud', });
lyr_Roboavehculosinviolenciadiciembre_6.set('fieldAliases', {'idCI': 'idCI', 'fiscalia': 'fiscalia', 'agencia': 'agencia', 'unidad_inv': 'unidad_inv', 'fecha_inic': 'Fecha inicio', 'fecha_hech': 'Feha hechos', 'delito': 'Delito', 'categoria_': 'categoria_', 'calle_hech': 'calle_hech', 'calle_he_1': 'calle_he_1', 'colonia_he': 'colonia_he', 'alcaldia_h': 'Alcaldía', 'CTHecho': 'CTHecho', 'competenci': 'competenci', 'longitud': 'longitud', 'latitud': 'latitud', });
lyr_Clusterconviolencia_7.set('fieldAliases', {'id': 'id', 'CLUSTER_ID': 'CLUSTER_ID', 'area': 'area', 'perimeter': 'perimeter', });
lyr_Roboamotoconviolenciaenenov_8.set('fieldAliases', {'idCI': 'idCI', 'fiscalia': 'fiscalia', 'agencia': 'agencia', 'unidad_inv': 'unidad_inv', 'fecha_inic': 'Fecha inicio', 'fecha_hech': 'Fecha hechos', 'delito': 'Delito', 'categoria_': 'categoria_', 'calle_hech': 'calle_hech', 'calle_he_1': 'calle_he_1', 'colonia_he': 'colonia_he', 'alcaldia_h': 'Alcaldía', 'CTHecho': 'CTHecho', 'competenci': 'competenci', 'longitud': 'longitud', 'latitud': 'latitud', });
lyr_Roboamotoconviolenciadiciembre_9.set('fieldAliases', {'idCI': 'idCI', 'fiscalia': 'fiscalia', 'agencia': 'agencia', 'unidad_inv': 'unidad_inv', 'fecha_inic': 'Fecha inicio', 'fecha_hech': 'Fecha hechos', 'delito': 'Delito', 'categoria_': 'categoria_', 'calle_hech': 'calle_hech', 'calle_he_1': 'calle_he_1', 'colonia_he': 'colonia_he', 'alcaldia_h': 'Alcaldía', 'CTHecho': 'CTHecho', 'competenci': 'competenci', 'longitud': 'longitud', 'latitud': 'latitud', });
lyr_Roboavehiculoconviolenciaenenov_10.set('fieldAliases', {'idCI': 'idCI', 'fiscalia': 'fiscalia', 'agencia': 'agencia', 'unidad_inv': 'unidad_inv', 'fecha_inic': 'Fecha inicio', 'fecha_hech': 'Fecha hechos', 'delito': 'Delito', 'categoria_': 'categoria_', 'calle_hech': 'calle_hech', 'calle_he_1': 'calle_he_1', 'colonia_he': 'colonia_he', 'alcaldia_h': 'Alcaldía', 'CTHecho': 'CTHecho', 'competenci': 'competenci', 'longitud': 'longitud', 'latitud': 'latitud', });
lyr_Roboavehculoconviolenciadiciembre_11.set('fieldAliases', {'idCI': 'idCI', 'fiscalia': 'fiscalia', 'agencia': 'agencia', 'unidad_inv': 'unidad_inv', 'fecha_inic': 'Fecha inicio', 'fecha_hech': 'Fecha hechos', 'delito': 'Delito', 'categoria_': 'categoria_', 'calle_hech': 'calle_hech', 'calle_he_1': 'calle_he_1', 'colonia_he': 'colonia_he', 'alcaldia_h': 'Alcaldía', 'CTHecho': 'CTHecho', 'competenci': 'competenci', 'longitud': 'longitud', 'latitud': 'latitud', });
lyr_Alcaldas_12.set('fieldAliases', {'X_id': 'X_id', 'id': 'id', 'nomgeo': 'nomgeo', 'cve_mun': 'cve_mun', 'cve_ent': 'cve_ent', 'cvegeo': 'cvegeo', 'g_pnt_2': 'g_pnt_2', 'geo_shp': 'geo_shp', 'municip': 'municip', });
lyr_Clustersinviolencia_2.set('fieldImages', {'fid': 'Range', 'AREA': 'Range', 'COUNT': 'Range', });
lyr_Robomotosinviolenciaenenov_3.set('fieldImages', {'idCI': 'TextEdit', 'fiscalia': 'TextEdit', 'agencia': 'TextEdit', 'unidad_inv': 'TextEdit', 'fecha_inic': 'TextEdit', 'fecha_hech': 'TextEdit', 'delito': 'TextEdit', 'categoria_': 'TextEdit', 'calle_hech': 'TextEdit', 'calle_he_1': 'TextEdit', 'colonia_he': 'TextEdit', 'alcaldia_h': 'TextEdit', 'CTHecho': 'TextEdit', 'competenci': 'TextEdit', 'longitud': 'TextEdit', 'latitud': 'TextEdit', });
lyr_Robomotosinviolenciadiciembre_4.set('fieldImages', {'idCI': 'TextEdit', 'fiscalia': 'TextEdit', 'agencia': 'TextEdit', 'unidad_inv': 'TextEdit', 'fecha_inic': 'TextEdit', 'fecha_hech': 'TextEdit', 'delito': 'TextEdit', 'categoria_': 'TextEdit', 'calle_hech': 'TextEdit', 'calle_he_1': 'TextEdit', 'colonia_he': 'TextEdit', 'alcaldia_h': 'TextEdit', 'CTHecho': 'TextEdit', 'competenci': 'TextEdit', 'longitud': 'TextEdit', 'latitud': 'TextEdit', });
lyr_Roboavehculosinviolenciaenenov_5.set('fieldImages', {'idCI': 'TextEdit', 'fiscalia': 'TextEdit', 'agencia': 'TextEdit', 'unidad_inv': 'TextEdit', 'fecha_inic': 'TextEdit', 'fecha_hech': 'TextEdit', 'delito': 'TextEdit', 'categoria_': 'TextEdit', 'calle_hech': 'TextEdit', 'calle_he_1': 'TextEdit', 'colonia_he': 'TextEdit', 'alcaldia_h': 'TextEdit', 'CTHecho': 'TextEdit', 'competenci': 'TextEdit', 'longitud': 'TextEdit', 'latitud': 'TextEdit', });
lyr_Roboavehculosinviolenciadiciembre_6.set('fieldImages', {'idCI': 'TextEdit', 'fiscalia': 'TextEdit', 'agencia': 'TextEdit', 'unidad_inv': 'TextEdit', 'fecha_inic': 'TextEdit', 'fecha_hech': 'TextEdit', 'delito': 'TextEdit', 'categoria_': 'TextEdit', 'calle_hech': 'TextEdit', 'calle_he_1': 'TextEdit', 'colonia_he': 'TextEdit', 'alcaldia_h': 'TextEdit', 'CTHecho': 'TextEdit', 'competenci': 'TextEdit', 'longitud': 'TextEdit', 'latitud': 'TextEdit', });
lyr_Clusterconviolencia_7.set('fieldImages', {'id': 'TextEdit', 'CLUSTER_ID': 'TextEdit', 'area': 'TextEdit', 'perimeter': 'TextEdit', });
lyr_Roboamotoconviolenciaenenov_8.set('fieldImages', {'idCI': 'TextEdit', 'fiscalia': 'TextEdit', 'agencia': 'TextEdit', 'unidad_inv': 'TextEdit', 'fecha_inic': 'TextEdit', 'fecha_hech': 'TextEdit', 'delito': 'TextEdit', 'categoria_': 'TextEdit', 'calle_hech': 'TextEdit', 'calle_he_1': 'TextEdit', 'colonia_he': 'TextEdit', 'alcaldia_h': 'TextEdit', 'CTHecho': 'TextEdit', 'competenci': 'TextEdit', 'longitud': 'TextEdit', 'latitud': 'TextEdit', });
lyr_Roboamotoconviolenciadiciembre_9.set('fieldImages', {'idCI': 'TextEdit', 'fiscalia': 'TextEdit', 'agencia': 'TextEdit', 'unidad_inv': 'TextEdit', 'fecha_inic': 'TextEdit', 'fecha_hech': 'TextEdit', 'delito': 'TextEdit', 'categoria_': 'TextEdit', 'calle_hech': 'TextEdit', 'calle_he_1': 'TextEdit', 'colonia_he': 'TextEdit', 'alcaldia_h': 'TextEdit', 'CTHecho': 'TextEdit', 'competenci': 'TextEdit', 'longitud': 'TextEdit', 'latitud': 'TextEdit', });
lyr_Roboavehiculoconviolenciaenenov_10.set('fieldImages', {'idCI': 'TextEdit', 'fiscalia': 'TextEdit', 'agencia': 'TextEdit', 'unidad_inv': 'TextEdit', 'fecha_inic': 'TextEdit', 'fecha_hech': 'TextEdit', 'delito': 'TextEdit', 'categoria_': 'TextEdit', 'calle_hech': 'TextEdit', 'calle_he_1': 'TextEdit', 'colonia_he': 'TextEdit', 'alcaldia_h': 'TextEdit', 'CTHecho': 'TextEdit', 'competenci': 'TextEdit', 'longitud': 'TextEdit', 'latitud': 'TextEdit', });
lyr_Roboavehculoconviolenciadiciembre_11.set('fieldImages', {'idCI': 'TextEdit', 'fiscalia': 'TextEdit', 'agencia': 'TextEdit', 'unidad_inv': 'TextEdit', 'fecha_inic': 'TextEdit', 'fecha_hech': 'TextEdit', 'delito': 'TextEdit', 'categoria_': 'TextEdit', 'calle_hech': 'TextEdit', 'calle_he_1': 'TextEdit', 'colonia_he': 'TextEdit', 'alcaldia_h': 'TextEdit', 'CTHecho': 'TextEdit', 'competenci': 'TextEdit', 'longitud': 'TextEdit', 'latitud': 'TextEdit', });
lyr_Alcaldas_12.set('fieldImages', {'X_id': 'Range', 'id': 'Range', 'nomgeo': 'TextEdit', 'cve_mun': 'Range', 'cve_ent': 'Range', 'cvegeo': 'Range', 'g_pnt_2': 'TextEdit', 'geo_shp': 'TextEdit', 'municip': 'Range', });
lyr_Clustersinviolencia_2.set('fieldLabels', {'fid': 'no label', 'AREA': 'no label', 'COUNT': 'no label', });
lyr_Robomotosinviolenciaenenov_3.set('fieldLabels', {'idCI': 'inline label - always visible', 'fiscalia': 'hidden field', 'agencia': 'hidden field', 'unidad_inv': 'hidden field', 'fecha_inic': 'inline label - always visible', 'fecha_hech': 'inline label - always visible', 'delito': 'inline label - always visible', 'categoria_': 'hidden field', 'calle_hech': 'hidden field', 'calle_he_1': 'hidden field', 'colonia_he': 'hidden field', 'alcaldia_h': 'inline label - always visible', 'CTHecho': 'hidden field', 'competenci': 'hidden field', 'longitud': 'hidden field', 'latitud': 'hidden field', });
lyr_Robomotosinviolenciadiciembre_4.set('fieldLabels', {'idCI': 'inline label - always visible', 'fiscalia': 'hidden field', 'agencia': 'hidden field', 'unidad_inv': 'hidden field', 'fecha_inic': 'inline label - always visible', 'fecha_hech': 'inline label - always visible', 'delito': 'inline label - always visible', 'categoria_': 'hidden field', 'calle_hech': 'hidden field', 'calle_he_1': 'hidden field', 'colonia_he': 'hidden field', 'alcaldia_h': 'inline label - always visible', 'CTHecho': 'hidden field', 'competenci': 'hidden field', 'longitud': 'hidden field', 'latitud': 'hidden field', });
lyr_Roboavehculosinviolenciaenenov_5.set('fieldLabels', {'idCI': 'inline label - always visible', 'fiscalia': 'hidden field', 'agencia': 'hidden field', 'unidad_inv': 'hidden field', 'fecha_inic': 'inline label - always visible', 'fecha_hech': 'inline label - always visible', 'delito': 'inline label - always visible', 'categoria_': 'hidden field', 'calle_hech': 'hidden field', 'calle_he_1': 'hidden field', 'colonia_he': 'hidden field', 'alcaldia_h': 'inline label - always visible', 'CTHecho': 'hidden field', 'competenci': 'hidden field', 'longitud': 'hidden field', 'latitud': 'hidden field', });
lyr_Roboavehculosinviolenciadiciembre_6.set('fieldLabels', {'idCI': 'inline label - always visible', 'fiscalia': 'hidden field', 'agencia': 'hidden field', 'unidad_inv': 'hidden field', 'fecha_inic': 'inline label - always visible', 'fecha_hech': 'inline label - always visible', 'delito': 'inline label - always visible', 'categoria_': 'hidden field', 'calle_hech': 'hidden field', 'calle_he_1': 'hidden field', 'colonia_he': 'hidden field', 'alcaldia_h': 'inline label - always visible', 'CTHecho': 'hidden field', 'competenci': 'hidden field', 'longitud': 'hidden field', 'latitud': 'hidden field', });
lyr_Clusterconviolencia_7.set('fieldLabels', {'id': 'no label', 'CLUSTER_ID': 'no label', 'area': 'no label', 'perimeter': 'no label', });
lyr_Roboamotoconviolenciaenenov_8.set('fieldLabels', {'idCI': 'inline label - always visible', 'fiscalia': 'hidden field', 'agencia': 'hidden field', 'unidad_inv': 'hidden field', 'fecha_inic': 'inline label - always visible', 'fecha_hech': 'hidden field', 'delito': 'inline label - always visible', 'categoria_': 'hidden field', 'calle_hech': 'hidden field', 'calle_he_1': 'hidden field', 'colonia_he': 'hidden field', 'alcaldia_h': 'inline label - always visible', 'CTHecho': 'hidden field', 'competenci': 'hidden field', 'longitud': 'hidden field', 'latitud': 'hidden field', });
lyr_Roboamotoconviolenciadiciembre_9.set('fieldLabels', {'idCI': 'inline label - always visible', 'fiscalia': 'hidden field', 'agencia': 'hidden field', 'unidad_inv': 'hidden field', 'fecha_inic': 'inline label - always visible', 'fecha_hech': 'inline label - always visible', 'delito': 'inline label - always visible', 'categoria_': 'hidden field', 'calle_hech': 'hidden field', 'calle_he_1': 'hidden field', 'colonia_he': 'hidden field', 'alcaldia_h': 'inline label - always visible', 'CTHecho': 'hidden field', 'competenci': 'hidden field', 'longitud': 'hidden field', 'latitud': 'hidden field', });
lyr_Roboavehiculoconviolenciaenenov_10.set('fieldLabels', {'idCI': 'inline label - always visible', 'fiscalia': 'hidden field', 'agencia': 'hidden field', 'unidad_inv': 'hidden field', 'fecha_inic': 'inline label - always visible', 'fecha_hech': 'inline label - always visible', 'delito': 'hidden field', 'categoria_': 'hidden field', 'calle_hech': 'hidden field', 'calle_he_1': 'hidden field', 'colonia_he': 'hidden field', 'alcaldia_h': 'inline label - always visible', 'CTHecho': 'hidden field', 'competenci': 'hidden field', 'longitud': 'hidden field', 'latitud': 'hidden field', });
lyr_Roboavehculoconviolenciadiciembre_11.set('fieldLabels', {'idCI': 'inline label - always visible', 'fiscalia': 'hidden field', 'agencia': 'hidden field', 'unidad_inv': 'hidden field', 'fecha_inic': 'inline label - always visible', 'fecha_hech': 'hidden field', 'delito': 'inline label - always visible', 'categoria_': 'hidden field', 'calle_hech': 'hidden field', 'calle_he_1': 'hidden field', 'colonia_he': 'hidden field', 'alcaldia_h': 'inline label - always visible', 'CTHecho': 'hidden field', 'competenci': 'hidden field', 'longitud': 'hidden field', 'latitud': 'hidden field', });
lyr_Alcaldas_12.set('fieldLabels', {'X_id': 'no label', 'id': 'no label', 'nomgeo': 'no label', 'cve_mun': 'no label', 'cve_ent': 'no label', 'cvegeo': 'no label', 'g_pnt_2': 'no label', 'geo_shp': 'no label', 'municip': 'no label', });
lyr_Alcaldas_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});