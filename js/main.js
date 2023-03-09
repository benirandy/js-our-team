
// creare un array con nome,ruolo e foto.
const teamMembers = [
  {
    name: "Wayne Barnett",
    role: "Founder & Ceo",
    photo: ""
  },
  {
    name: "Angela Caroll",
    role: "Chief Director",
    photo: ""
  },
  {
    name: "Walter Gordon",
    role: "Office manager",
    photo: ""
  },

  {
    name: "Angela Lopez",
    role: "Social Medi Manager",
    photo: ""
  },

  {
    name: "Scott Estrada",
    role: "Developer",
    photo: ""
  },


  {
    name: "Barbara Ramos",
    role: "Grafic Designer",
    photo: ""
  }
];

for (let member of teamMembers) {
  console.log(`${member.name} - ${member.role}: ${member.photo}`);
}

for (let member of teamMembers) {
  const $memberCard = $ ("<div>")
    .addClass("member-card")
    .append($("<h2>").text(member.name))
    .append($("<p>").text(member.role))
    .append($("<img>").attr("src", member.photo));

  $("body").append($memberCard);
}



for (let member of teamMembers) {
  const img = new Image();
  img.src = member.photo;

  const $memberCard = $("<div>")
    .addClass("member-card")
    .append($("<h2>").text(member.name))
    .append($("<p>").text(member.role))
    .append(img);

  $("body").append($memberCard);
}


