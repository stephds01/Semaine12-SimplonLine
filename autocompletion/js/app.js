/**
 * Created by Stéphanie on 11/02/2016.
 */


    (function () {
        var $dataUser = document.getElementById('dataUser'),
            $results = document.getElementById('results'),

            selectedResult = -1,   //le result selectionné
            previousRequest,       //la précédente requete
            previousValue = $dataUser.value;


        //Effectue la requete et je récup le resultat du php
        function getResults(town) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', './php/script.php?param=' + encodeURIComponent(town), true);

            //console.log(town);
                xhr.addEventListener('readystatechage', function () {
                    if (xhr.readyState == 4 && xhr.status == 200) {
                        displayResults(xhr.responseText);   //la réponse du php
                    } else {
                        console.log('Zut ca ne marche pas !');
                    }
                }, false);
            xhr.send(null);
            return xhr;
        }


        //affiche les résultats
        function displayResults(response) {
            //On cache le container s il y a pas de resultat
            //if($results.length){
            //    $results.style.display = 'block';
            //} else {
            //    $results.style.display = 'none';
            //}
            $results.style.display = response.length ? 'block' : 'none'; // On cache le conteneur si on n'a pas de résultats

            //S il y a une réponse, je modifie
            if(response.length){
                response = response.split('|');
                var responseLen = response.length;
                $results.innerHTML = "";

                for(var i = 0, div; i< responseLen; i++) {
                    div = $results.appendChild(document.createElement('div'));
                    div.innerHTML = response[i];

                    div.addEventListener('click',function(e){
                        chooseResult(e.target);
                    }, false);
                }
            }

        }

        //Choisis un des resultats d'une requete est gère tout ce qui y est attaché
        function chooseResult(result) {
            $dataUser.value = previousValue = result.innerHTML;
            $results.style.display = 'none';
            result.className = '';
            selectedResult = -1; // On remet la sélection à "zéro"
            $dataUser.focus(); // Si le résultat a été choisi par le biais d'un clique alors le focus est perdu, donc on le réattribue


        }

        //Quand il y  un mouvement sur input,déclencher ces actions
        $dataUser.addEventListener('keyup', function(e) {

            var divs = $results.getElementsByTagName('div');

            if(e.keyCode == 38 && selectedResult > -1) {
                divs[selectedResult--].className = '';

                if(selectedResult > -1) {
                    divs[selectedResult].className = 'result_focus';
                }
            }
            else if(e.keyCode == 40 && selectedResult < divs.length - 1) {
                $results.style.display = 'block';
                if(selectedResult > 1) {
                    divs[selectedResult].className = '';
                }
                divs[++selectedResult].className = 'result_focus';
            }
            else if (e.keyCode == 13 && selectedResult > -1) { // Si la touche pressée est "Entrée"

                chooseResult(divs[selectedResult]);

            }
            else if ($dataUser.value != previousValue) { // Si le contenu du champ de recherche a changé

                previousValue = $dataUser.value;

                if (previousRequest && previousRequest.readyState < 4) {
                    previousRequest.abort(); // Si on a toujours une requête en cours, on l'arrête
                }

                previousRequest = getResults(previousValue); // On stocke la nouvelle requête

                selectedResult = -1; // On remet la sélection à "zéro" à chaque caractère écrit

            }

        }, false);

    })();


