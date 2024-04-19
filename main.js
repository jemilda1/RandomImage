var but=document.getElementById("but");
var randomImage=document.getElementById("randomImage");
var randomHeading=document.getElementById("randomHeading");
function getRandomImage(){
var imageUrl=["src/Mahabalipuram.webp","src/placestovisitinindiablog.jpg","src/PTV-India-OG-Final (1).webp","src/tourist-places-in-shillong.jpg","src/unnamed.png"];
var randomIndex=Math.floor(Math.random()*imageUrl.length);
return imageUrl[randomIndex];
}
function generateRandomImage(){
var randomImagePath=getRandomImage();  
pic.innerHTML="<img id='randomImage' src='"+randomImagePath+"' alt='RandomImage'>";

}
