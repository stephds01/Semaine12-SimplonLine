/**
 * Created by Stéphanie on 04/03/2016.
 */

(function () {
    var addTodo = document.getElementById('addTodo');
    var todo = document.getElementById('todo');
    var results = document.getElementById('results');
    var checkAll = document.getElementById('checkAll');
    var deleteCheck = document.getElementById('deleteCheck');


    var tour = 0;

    var res = results.getElementsByTagName('label');
    var check = results.getElementsByTagName('label');
    if(res && check ){
        var p = document.createElement('p');
        p.id="notTod";
        p.className='notTodo';
        var notTodo = document.createTextNode('Aucune Todo pour le moment !');
        results.appendChild(p);
        p.appendChild(notTodo);

    }


    function addTodolist() {
        var notTod = document.getElementById('notTod');
        p.remove(notTod);

        if(todo.value) {
            var check = document.createElement('input');
            check.setAttribute('type', 'checkbox');
            check.setAttribute('value', 'checkbox');
            check.setAttribute('name', 'checkbox');
            check.id = 'checkbox' + tour++;

            var label = document.createElement('label');
            label.className = 'label';
            label.style.display = 'inline-block';

            label.innerHTML = todo.value;
            label.appendChild(check);
            results.appendChild(label);

            todo.value = "";
        } else {
            alert("Vous n'avez pas saisie votre todo");
        }


    }

    function checkedAll() {

        var tabInput = results.getElementsByTagName('input');
        var inputLength = tabInput.length;
        console.log(inputLength);

        for (var i = 0; i < inputLength; i++) {
            if (inputLength) {
                tabInput[i].setAttribute('checked', 'checked');
            }
        }

    }

    function delectedCheck() {
        var check = results.getElementsByTagName('input');
        for (var i = 0; i < check.length; i++) {
            if (check[i].checked == true) {
                results.innerHTML = "";
            }
        }
        var p = document.createElement('p');
        p.id="notTod";
        p.className='notTodo';
        var notTodo = document.createTextNode('Aucune Todo pour le moment !');
        results.appendChild(p);
        p.appendChild(notTodo);



    }

    function addEnter(e) {
        //console.log(e);
        if(e.keyCode == 13){
            console.log('ok,' + e.keyCode);
            addTodolist();
        }

    }


    todo.addEventListener('keyup', addEnter, false);
    addTodo.addEventListener('click', addTodolist, false);
    deleteCheck.addEventListener('click', delectedCheck, false);
    checkAll.addEventListener('click', checkedAll, false);

})();
