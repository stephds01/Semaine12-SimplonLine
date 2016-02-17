/**
 * Created by Stéphanie on 11/02/2016.
 */


    (function () {
        var $dataUser = document.getElementById('dataUser');
        var $results = document.getElementById('results');

        var selectedResult = -1;   //le result selectionné
        var previousRequest;        //la precedente requete
        //var previousValue = searchElement.value;


        function getResults(town) {
            //Effectue la requete et je récup le resultat du php
            var xhr = new XMLHttpRequest();
                xhr.open('GET', './php/script.php?param1=' + encodeURIComponent(town), true);
                //console.log(town);
                xhr.addEventListener('readystatechage', function () {
                    if (xhr.readyState == 4 && xhr.status == 200) {
                        displayResults(xhr.responseText);   ///la réponse du php
                        //console.log($results.innerHTML = xhr.responseText);
                    } else {
                        console.log('Zut ca ne marche pas !');

                    }
                }, false);
            xhr.send(null);
            return xhr;
        }
        //affiche les résultats
        function displayResults(response) {
            if($results.length){
                $results.style.display = 'block';
            } else {
                $results.style.display = 'none';
            }

            if(response.length){
                response = response.split('|');
                var responseLen = response.length;
                $results.innerHTML = "";


                for(var i = 0; i< responseLen; i++) {
                    var div = $results.appendChild(document.createElement('div'));
                        div.innerHTML = response[i];

                        div.addEventListener('click',function(e){
                            chooseResult(e.target);
                        }, false);
                }
            }

        }

        //Choisi un des resultats d'une requete est gère tout ce qui y est attaché
        function chooseResult(result) {
            //$dataUser.innerHTML = result;
            $dataUser.value = result.innerHTML;

        }
        //getResults($dataUser.value), false
        $dataUser.addEventListener('keyup', function(e) {
            var key = e.keyCode;

            getResults($dataUser.value);


        } );


    })();

