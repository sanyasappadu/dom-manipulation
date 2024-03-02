// Varialbe
const accordation = document.getElementsByClassName('content-container');
for( i=0; i< accordation.length; i++){
    accordation[i].addEventListener('click', function(){
        this.classList.toggle('active');
    })
}
