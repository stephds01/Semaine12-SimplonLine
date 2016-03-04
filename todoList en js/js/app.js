/**
 * Created by Stéphanie on 04/03/2016.
 */

(function() {
    var addTodo = document.getElementById('addTodo');
    var todo = document.getElementById('todo');
    var results = document.getElementById('results');
    var checkAll = document.getElementById('checkAll');
    var deleteCheck = document.getElementById('deleteCheck');


    var tour = 0;

        function addTodolist() {

            var check = document.createElement('input');
            check.setAttribute('type', 'checkbox');
            check.setAttribute('value', 'checkbox');
            check.setAttribute('name', 'checkbox');
            check.setAttribute('id', 'checkbox' + tour++);

            var label = document.createElement('label');
                label.className='label';
            //var labelText = document.createTextNode(todo.value);
            label.style.display = 'block';

            label.innerHTML = todo.value;
            label.appendChild(check);
            results.appendChild(label);
        }

    function checkedAll() {

        var tabInput = results.getElementsByTagName('input');
        var inputLength = tabInput.length;

            if(inputLength) {
                for(var i = 0; i< inputLength; i++) {
                    tabInput[i].setAttribute('checked', 'checked');
                }
            }

    }

    function delectedCheck() {
        var label = results.getElementsByClassName('label');
        console.log(label);
        var tabInput = results.getElementsByTagName('input');
        var inputLength = tabInput.length;

            for(var i = 0; i< inputLength; i++) {
                if(tabInput[i] == tabInput[i].checked) {
                    tabInput[i].style.diplay='none';
                }
            }


    }



    deleteCheck.addEventListener('click', delectedCheck, false);
    addTodo.addEventListener('click', addTodolist, false);
    checkAll.addEventListener('click', checkedAll, false);
})();
