class Material {
  constructor(author, titel, link, comments, opensource, genre) {
    this.author = author;
    this.titel = titel;
    this.link = link;
    this.comments = comments;
    this.opensource = opensource;
    this.genre = genre;
  }
  
  addMaterialHTML(targetHTMLElem) {
    const node = document.createElement("article");
    const collection = [];
    
    const titel = document.createElement("h2");
    const author = document.createElement("p");
    const genre = document.createElement("p");

    const titelTextnode = titel.appendChild(document.createTextNode(this.titel));
    const authorTextnode = author.appendChild(document.createTextNode(this.author));
    const genreTextnode = genre.appendChild(document.createTextNode(this.genre));
        
    collection.push(titel, author, genre);
    collection.forEach(element => node.appendChild(element))
    return targetHTMLElem.appendChild(node);
  }
}

const month = document.getElementById("readings")
const reading = new Material("a", "b", "c", "d", "e", "f")
const data = [{"author" : "Madhur, Anand",
               "titel" : "A New Index for Predicting Catastrophes",
               "link" : "https://www.amazon.com/-/de/dp/B00N6PERJQ/ref=sr_1_3?qid=1707737963&refinements=p_27%3AMadhur+Anand&s=digital-text&sr=1-3&text=Madhur+Anand",
               "comments" : "Hello",
               "opensource" : false,
               "genre" : "Ecopoetics",
               "id" : 1
              },
              {"author" : "Amy Donovan",
               "titel" : "Sublime encounters: Commodifying the experience of the geos",
               "link" : "https://rgs-ibg.onlinelibrary.wiley.com/doi/epdf/10.1002/geo2.67",
               "comments" : "hello world",
               "opensource" : true,
               "genre" : "Academic Journal",
               "id" : 2
              }
             ]

data.forEach(reading => {
  let material = new Material(reading.author,
                              reading.titel,
                              reading.link,
                              reading.comments,
                              reading.opensource,
                              reading.genre)
  material.addMaterialHTML(month)  
})
