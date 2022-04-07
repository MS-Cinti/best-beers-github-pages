const htmlBody = `
    <section id="homePage">
        <video autoplay muted loop id="homeVideo">
            <source src="./imagesAndVideos/homePage.mp4" type="video/mp4">			
        </video>
        <nav>
            <ul>
                <li><a href="#homePage">Home</a></li>
                <li><a href="#beersPage">Our beers</a></li>
                <li><a href="">Our bars</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </nav>
        <h1>Welcome!</h1>
        <p>If you love beers, you are in the best place!<br> Choose a handcrafted specialty beer from below and enjoy!</p>
    </section>
    <section id="beersPageSection">
        <div id="beersPage"></div>
    </section>
`
fetch ("data.json")
.then(response => response.json())
.then(data => {
    for (const beer of data.cards) {
    document.getElementById('beersPage').insertAdjacentHTML("beforeend", `
    <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img src="./imagesAndVideos/${beer.labelImg}" alt="" style="width:100%;height:100%;object-fit:cover">
            </div>
            <div class="flip-card-back">
                <img src="./imagesAndVideos/${beer.img}.jpg" alt="" style="width:100%;height:100%;object-fit:contain">
                <h1>${beer.title}</h1> 
                <p>${beer.sub}</p> 
                <p>${beer.text}</p>
            </div>
        </div>
    </div>
`
    )}
})

function loadEvent() {

    const rootElement = document.getElementById("root");
    rootElement.insertAdjacentHTML("beforeend", htmlBody);
}

window.addEventListener("load", loadEvent);