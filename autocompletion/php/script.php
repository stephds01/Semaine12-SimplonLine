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
//print_r($towns);


//Je crée un tab pour les futurs results
$results = array('lol');
var_dump($results);

echo 'lol';

    for($i=0; $i<$dataTowns && count($results); $i++) {
        if ( stripos($towns[$i], $_GET['param1=']) === 0){

            array_push($results, $towns[$i]);
            sort($results);
        }
    }
    echo implode('|', $results);

var_dump($results);




