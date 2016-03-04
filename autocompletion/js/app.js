/**
 * Created by Stéphanie on 01/03/2016.
 */


var dataUser = document.getElementById('dataUser');
var results = document.getElementById('results');
var selectResult = -1;


function requestAjax() {

    var xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var tab = xhr.responseText.split('|');
            results.innerHTML = "";
            if (tab == 0) {
                results.innerHTML = "Oups, il n'y pas de ville !";
            } else {

                for (var i = 0; i < tab.length; i++) {
                    var div = document.createElement('div');

                    div.innerHTML = tab[i];
                    div.addEventListener('click', selectTown, false);
                    results.appendChild(div);


                }
            }

        } else {
            console.log('erreur Etat : ' + xhr.readyState + 'erreur status : ' + xhr.status);
        }
    }, false);
    xhr.open('GET', 'php/script.php?param=' + encodeURIComponent(dataUser.value));
    xhr.send();
}


function selectTown() {
    dataUser.value = this.innerHTML;
    results.innerHTML = "";
}


function fleche(e) {


    var divs = results.getElementsByTagName('div');

    if (e.keyCode == 40) {

        if (selectResult > -1) {
            divs[selectResult].className = '';
        }

        if (selectResult == divs.length - 1) {
            selectResult = -1;
        }
        selectResult++;
        divs[selectResult].className = 'red';

    }else if (e.keyCode == 38) {

        if (selectResult > -1) {
            divs[selectResult].className = '';
        }

        if (selectResult == divs.length - 1) {
            selectResult = -1;
        }
        selectResult--;
        divs[selectResult].className = 'red';

    } else if (e.keyCode == 13) {

        dataUser.value = divs[selectResult].innerHTML;
        results.innerHTML = "";

    } else {
        requestAjax();

    }


}

dataUser.addEventListener('keyup', fleche, false);

