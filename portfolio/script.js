// script.js

function showAll() {
    setImagesOpacity('Show All');
    updateSelection('Show All');
}

function showCategory(selectedCategory) {
    setImagesOpacity(selectedCategory);
    updateSelection(selectedCategory);
}

function setImagesOpacity(selectedCategory) {
    var images = document.querySelectorAll('.image');
    images.forEach(function (img) {
        var imgCategories = img.getAttribute('data-category').split(' ');
        img.style.opacity = (selectedCategory === 'Show All' || imgCategories.includes(selectedCategory)) ? 1 : 0.1;
    });
}

function updateSelection(selectedCategory) {
    var options = document.querySelectorAll('.selection.option');
    options.forEach(function (option) {
        option.style.textDecoration = (option.innerText === selectedCategory) ? 'underline' : 'none';
    });
}

var video = document.getElementById('bgvid');
video.playbackRate = 0.7; // Adjust the value as needed (e.g., 0.5 for half speed)

document.addEventListener('DOMContentLoaded', function () {
    var images = document.querySelectorAll('.image');

    images.forEach(function (image) {
        // Add event listener for hover effect
        image.addEventListener('mouseover', function () {
            var overlay = image.querySelector('.overlay');
            overlay.style.opacity = 1;
        });

        // Add event listener for mouseout (to hide overlay when not hovered)
        image.addEventListener('mouseout', function () {
            var overlay = image.querySelector('.overlay');
            overlay.style.opacity = 0;
        });

        // Add click event listener to open link in a new tab
        var link = image.getAttribute('data-link');
        var anchor = image.querySelector('a');
        if (link && anchor) {
            anchor.addEventListener('click', function (event) {
                event.preventDefault(); // Prevent the default behavior of the anchor
                window.open(link, '_blank');
            });
        }
    });
});


