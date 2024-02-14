class Month {
  constructor(year, month, theme, description) {
    this.year = year;
    this.month = month;
    this.theme = theme;
    this.description = description;
    this.id = year + month;
    this.htmlElement = "";
  }

  addMonthHtml(targetHTMLElem) {
    const node = document.createElement("section");
    this.htmlElement = node;
    node.classList.add("monthSection");

    const collection = [];
    const month = document.createElement("p");
    month.classList.add("monthText")
    const theme = document.createElement("h2");
    const description = document.createElement("p");
  
    month.appendChild(document.createTextNode(`${this.month} ${this.year}`));
    theme.appendChild(document.createTextNode(this.theme));
    description.appendChild(document.createTextNode(this.description));

    collection.push(month, theme, description);
    collection.forEach((element) => node.appendChild(element));
    return targetHTMLElem.appendChild(node);
  }

  get() {
    return this.htmlElement;
  }
}

class Material {
  constructor(author, titel, link, description, opensource, genre) {
    this.author = author;
    this.titel = titel;
    this.link = link;
    this.description = description;
    this.opensource = opensource;
    this.genre = genre;
  }

  addMaterialHTML(targetHTMLElem) {
    const node = document.createElement("article");
    node.classList.add("monthArticle");
    const collection = [];

    const titel = document.createElement("h3");
    const author = document.createElement("p");
    const description = document.createElement("p");
    const genre = document.createElement("p");
    genre.classList.add("genreText")
    author.classList.add("authorText")
    description.classList.add("descriptionArticle")

    titel.appendChild(document.createTextNode(this.titel));
    author.appendChild(document.createTextNode(this.author));
    description.appendChild(document.createTextNode(this.description));
    genre.appendChild(document.createTextNode(this.genre));

    collection.push(titel, author, description, genre);
    collection.forEach((element) => node.appendChild(element));
    return targetHTMLElem.appendChild(node);
  }
}

const mainHtml = document.getElementById("main");

const data = [
  {
    year: 2024,
    month: "February",
    theme: "Storytelling beyond the article",
    description:
      "To start, I've chosen the theme of storytelling beyond the article. In most of academia the traditional media for storytelling are journal articles and conference presentations. This month I want to have a look at other ways of telling stories, mainly from inside academia with visual storytelling but I've included a long read from outside academia and a poetry collection that intersects science and lyrical art.",
    articles: [
      {
        author: "Madhur Anand",
        titel: "A New Index for Predicting Catastrophes",
        link:
          "https://www.alieward.com/ologies/creativeecology",
        description: 'I heard about the concept of Ecopoetry and Madhur Anand on the podcast Ologies. The episode titled "Theoretical & Creative Ecology (SCIENCE & ECOPOETRY) with Dr. Madhur Anand". I became interested in the idea of poetry using science as driver and metaphor.',
        opensource: false,
        genre: "Ecopoetry",
        id: 1
      },
      {
        author: "Leonardo Ramondetti",
        titel: "Untangling Infrastructure Networks Through Critical Cartographies: Mapping the Port of Trieste, Italy",
        link:
          "https://www.tandfonline.com/doi/full/10.1080/24694452.2023.2289985",
        description: "This sounds cool. Gaining insight into complex infrastructures using critical cartography as visual tool for investigation.",
        opensource: false,
        genre: "Journal Article",
        id: 2
      },
      {
        author: "Neil Cohn",
        titel: "Visual Narrative Structure",
        link:
          "https://onlinelibrary.wiley.com/doi/10.1111/cogs.12016",
        description: "Relating images to the traditional story arc.",
        opensource: true,
        genre: "Journal Article",
        id: 3
      },
      {
        author: "M.-Á. Bernabé-Poveda, I. GołębiowskaIcon, R. Narváez-Benalcázar, M.-F. León-Pazmiño, M.-E. Gonzalez-Campos, A. Çöltekin",
        titel: "Sunshine around the middle Earth: relief inversion less prevalent in satellite images in the near-south of the Equator than on the Equator",
        link:
          "https://www.tandfonline.com/doi/full/10.1080/17538947.2024.2304078",
        description: "An empirical reminder that the visual stories we look at change meaning depending on our point of view.",
        opensource: true,
        genre: "Journal Article",
        id: 4
      },
      {
        author: "Sarah A. Moore, Robert E. Roth, Heather Rosenfeld, Eric Nost, Kristen Vincent, Mohammed Rafi Arefin, Tanya M.A. Buckingham",
        titel: "Undisciplining environmental justice research with visual storytelling",
        link:
          "https://www.sciencedirect.com/science/article/pii/S0016718517300520?via%3Dihub",
        description: "Visual storytelling for environmental justice? Let's go. Inspired by the current events near Ølst in Justland.",
        opensource: false,
        genre: "Journal Article",
        id: 5
      },
      {
        author: "Stephen King",
        titel: "On Writing: A Memoir of the Craft",
        link:
          "https://www.sciencedirect.com/science/article/pii/S0016718517300520?via%3Dihub",
        description: "Stephen King has written quite a few pages. What can he teach about storytelling and can it be transferred to academia?",
        opensource: false,
        genre: "Long read",
        id: 4
      },
      {
        author: "Ursula K. Le Guin",
        titel: "The Carrier Bag Theory of Fiction",
        link:
          "https://www.sciencedirect.com/science/article/pii/S0016718517300520?via%3Dihub",
        description: "From goodreads: before the tool that forces energy outward, we made the tool that brings energy home.' Prior to the preeminence of sticks, swords and the Hero's long, hard, killing tools, our ancestors' greatest invention was the container: the basket of wild oats, the medicine bundle, the net made of your own hair, the home, the shrine, the place that contains whatever is sacred. The recipient, the holder, the story. The bag of stars.",
        opensource: false,
        genre: "Literary criticism",
        id: 4
      }
      
    ]
  },
  
   {
    year: 2024,
    month: "March",
    theme: "The Sublime in nature",
    description:
      "For the second theme, I suggest The Sublime in nature. What exactly is the Sublime and why is it important? Sometimes it seems the less Sublime nature, the swamps and the grasslands, are the ones we need right now, for carbon capture etc. But the nature we talk and care about is the majestic and terrifying - elefants and volcanoes.",
    articles: [
      {
        author: "Amy Donovan",
        titel: "Sublime encounters: Commodifying the experience of the geos",
        link:
          "https://rgs-ibg.onlinelibrary.wiley.com/doi/epdf/10.1002/geo2.67",
        description: "Why do we have such an urge to get close to dangerous things?",
        opensource: true,
        genre: "Academic Journal",
        id: 1
      },
       {
        author: "William Cronon",
        titel: "The Trouble With Wilderness",
        link:
          "https://www.williamcronon.net/writing/Trouble_with_Wilderness_Main.html",
        description: "What IS the trouble with Wilderness?",
        opensource: true,
        genre: "Academic Journal",
        id: 2
      },
      {
        author: "John Wylie",
        titel: "A single day's walking: narrating self and landscape on the South West Coast Path",
        link:
          "https://rgs-ibg.onlinelibrary.wiley.com/doi/full/10.1111/j.1475-5661.2005.00163.x",
        description: "I read this article ones during a course on the history of geographic thought. It confused me and has stayed with since. I want to give it another shot.",
        opensource: false,
        genre: "Academic Journal",
        id: 3
      }
    ]
  }
];

data.forEach((month) => {
  const monthSection = new Month(
    month.year,
    month.month,
    month.theme,
    month.description
  );
  monthSection.addMonthHtml(mainHtml);
  monthSectionHtml = monthSection.get();

  month.articles.forEach((reading) => {
    let material = new Material(
      reading.author,
      reading.titel,
      reading.link,
      reading.description,
      reading.opensource,
      reading.genre
    );
    material.addMaterialHTML(monthSectionHtml);
  });
});
