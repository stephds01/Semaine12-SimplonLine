<?php
/**
 * Created by PhpStorm.
 * Name: Stéphanie
 * Date: 11/02/2016
 * Time: 09:34
 */

//header("Content-Type: text/plain");

//Je récupère les donner text de mon fichier
    $script = file_get_contents('../towns.txt');
//    print($script);

//Je transforme les donner text en tableau
    $towns = unserialize($script);
//var_dump($towns);

//Je récupère le nombre total de villes
    $dataTowns = count($towns);
//print_r($dataTowns);


//Je tri les villes par ordre alphabetique
    sort($towns);


//Je crée un tab pour les futurs results

$results = array();

    for($i=0; $i<$dataTowns && count($results); $i++) {
        var_dump($dataTowns);
        if ( stripos($towns[$i], $_GET['param1']) === 0){
            array_push($results, $towns[$i]);
        }
    }
    echo implode('|', $results);

var_dump($results);





