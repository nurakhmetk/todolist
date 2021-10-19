document.querySelector('#button').onclick = function () {
    if (document.querySelector('.todo__input').value.length == 0) {
        alert('Please Enter a Task');
    } else {
        document.getElementById("ul-list").innerHTML += 
        `
        <li class="task">${document.getElementById("input").value}
            <button class="delete">
                <i class="far fa-trash-alt"></i>
            </button>
        </li>
        `;

        var current_tasks = document.querySelectorAll(".delete");

        for(var i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function() {
                this.parentNode.remove();
            }
        }

        var tasks = document.querySelector("ul");

        tasks.addEventListener("click", function(event) {
            if(event.target.tagName === "LI") {
                event.target.classList.toggle('completed');
            }
        }, false
        
        );

        document.getElementById("input").value = "";
    }
}
