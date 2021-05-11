class Bird {
  /*  legs = 2;
    wings = 2; */

  constructor(width, el) {
    this.width = width;

    this.el = el;
  }

  scrollSideway = function (distance) {
    document.getElementById("background").style.backgroundPosition = `0 ${
      distance / 10
    }px 0`;
  };

  fly = function () {};
  showyourself = function () {
    const newBird = document.createElement("img");
    this.birdId = "bird";
    newBird.id = "bird" + Math.random() * 10;
    newBird.src = "img/bird.png";
    newBird.width = this.width;

    this.el.appendChild(newBird);
  };
}

class Background {
  constructor(el) {
    this.el = el;
  }

  init = function () {
    const bg = document.createElement("div");
    bg.id = "background";
    bg.setAttribute("style", "z-index: -1");
    bg.style.top = "0";
    bg.style.left = "0";
    bg.style.backgroundImage = "url(img/bg.png)";
    bg.style.backgroundRepeatY = "no-repeat";
    bg.style.position = "fixed";
    bg.style.width = "100%";
    bg.style.height = "100%";

    this.el.appendChild(bg);
  };
}

const background = new Background(document.body);
background.init();

document.addEventListener("scroll", (e) => {
  console.log(window.pageYOffset);
  background.scrollSideway(window.pageYOffset);
});

class Peacock extends Bird {
  name = "Peacock";
  spreadTail = function () {
    console.log("Lokk at my tail");
  };
}

const bird1 = new Bird(Math.random() * 501, document.body);
/* const bird2 = new Bird(3, 5); here we changed the logic in cinstructor*/

const peacock1 = new Peacock();
const peacock2 = new Peacock();

/* const bird1 = {
  legs: 2,
  wings: 2,
  fly: function () {
    console.log("flap flap");
    return "I can fly";
  },
};
const bird2 = {
  legs: 2,
  wings: 2,
  fly: function () {
    console.log("flap flap");
    return "I can fly";
  },
};*/

const numberofbirds = 50;
const numberofpeacock = 50;

let birds = [];
for (let i = 0; i < numberofbirds; i++) {
  birds[i] = new Bird(Math.random() * 500, document.body);
  birds[i].showyourself();
}

for (let i = 0; i < numberofbirds + numberofpeacock; i++) {
  birds[i] = new Peacock();
}

bird1.showyourself();
/* bird2.showyourself(); */
console.log(`My bird has ${birds[50].legs} legs`);
console.log(`My bird has ${birds[50].wings} wings`);
console.log(`My bird can ${birds[50].fly()} `);
