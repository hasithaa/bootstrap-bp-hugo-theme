document.addEventListener('DOMContentLoaded', function () {
    var folderTreeListItems = document.querySelectorAll('.folder-tree li');

    folderTreeListItems.forEach(function (listItem) {
        listItem.addEventListener('click', function (evt) {
            evt.stopPropagation();
            listItem.classList.toggle('expanded');
        });
    });
});

function openCode(evt, codeName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(codeName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();