// Author: Michiel Dausy
const figure = document.getElementById('thumbnails');
const images = figure.querySelectorAll('img');
const firstImage = document.getElementById('fullImage');

images.forEach(function (image) {
    image.addEventListener('click', function () {
        const dataID = image.getAttribute('data-id');
        firstImage.setAttribute('src', 'assets/student3/foto'.concat(dataID, '.jpg'));
        console.log(firstImage.getAttribute('src'));
        images.forEach(function (photo) {
            photo.classList.remove('border');
        });
        image.classList.add('border');
    });
});

$('.carousel-item', '.show-neighbors')
    .each(function () {
        let next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));
    })
    .each(function () {
        let prev = $(this).prev();
        if (!prev.length) {
            prev = $(this).siblings(':last');
        }
        prev.children(':nth-last-child(2)').clone().prependTo($(this));
    });
