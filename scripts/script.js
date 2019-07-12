const flexStart = document.querySelector('[ data-flex-start ]');
const flexStartDiv = document.querySelector('[ data-flex-start-div ]');

flexStart.addEventListener('click', () => {
    console.log('clickyclick')
    flexStartDiv.classList.toggle('hidden')
});