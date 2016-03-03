<?php

//Je récupère les donner text de mon fichier
    $script = file_get_contents('../towns.txt');

//Je transforme les donner text en tableau
    $towns = unserialize($script);

//Je crée un tab pour les futurs results
$results = array();


    foreach($towns as $town) {
        if ( stripos($town, $_GET['param']) === 0){

            array_push($results, $town);
        }
    }
    echo implode('|', $results);

