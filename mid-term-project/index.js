let currentState = "start";

let gameData = {
  start: {
    text: "start your odyssey in a world of dreams & reality",
    choices: ["Start"],
    consequences: ["start1"],
    image: "https://neurosciencenews.com/files/2023/09/aphantasia-mental-imagry-neurosciences.jpg",
  },
  start1: {
    text: "In a world where dreams and reality converge, which path will you tread?",
    choices: ["Wander through the Dreamweaver's Forest", "Venture into the Abyss of Shadows"],
    consequences: ["dreamweaverForest", "abyssOfShadows"],
    image: "https://images.saatchiart.com/saatchi/459248/art/3570419/2640305-JXLMPYPG-7.jpg",
},
dreamweaverForest: {
    text: "You enter the enchanting Dreamweaver's Forest. What do you encounter?",
    choices: ["The Enchanted Glade", "The Whispering Trees"],
    consequences: ["enchantedGlade", "whisperingTrees"],
    image: "https://storage.googleapis.com/pod_public/1300/192086.jpg",
},
abyssOfShadows: {
    text: "You delve into the Abyss of Shadows. What secrets will you unearth?",
    choices: ["The Cave of Echoes", "The Labyrinth of Night"],
    consequences: ["caveOfEchoes", "labyrinthOfNight"],
    image: "https://static.vecteezy.com/system/resources/previews/030/692/539/large_2x/shadowy-depths-high-quality-ultra-hd-8k-hdr-free-photo.jpg",
},
enchantedGlade: {
    text: "You find the Enchanted Glade. What magical event unfolds?",
    choices: ["Awaken the Forest Guardian", "Discover the Hidden Enclave"],
    consequences: ["awakenGuardian", "findEnclave"],
    image: "https://i1.sndcdn.com/artworks-ytVKhhvo1DSJYSCP-yU9WMg-t500x500.jpg",
},
whisperingTrees: {
    text: "You listen to the Whispering Trees. What wisdom do they share?",
    choices: ["Learn the Language of Nature", "Uncover the Tree of Eternity"],
    consequences: ["learnNatureLanguage", "findTreeOfEternity"],
    image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0ebbf0f2-7561-4659-a320-7c4052812057/dfyqzp2-b5d755b3-f498-44df-9504-3f69ad86ee19.png/v1/fill/w_1920,h_1080,q_80,strp/whispering_tree_4k__animated_free_on_steam__by_tw1nzer_dfyqzp2-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MCIsInBhdGgiOiJcL2ZcLzBlYmJmMGYyLTc1NjEtNDY1OS1hMzIwLTdjNDA1MjgxMjA1N1wvZGZ5cXpwMi1iNWQ3NTViMy1mNDk4LTQ0ZGYtOTUwNC0zZjY5YWQ4NmVlMTkucG5nIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.GaliobkVlmJFGCP9tL8NpnWNvZqvKw039SHTAE7P8wM",
},
caveOfEchoes: {
    text: "You explore the Cave of Echoes. What discovery awaits?",
    choices: ["Echoes of the Past", "Glimpse of Future Realms"],
    consequences: ["echoesPast", "glimpseFuture"],
    image: "https://img.freepik.com/premium-photo/mystical-cave-with-glowing-pool-water-ancient-rock-formations_947865-8241.jpg",
},
labyrinthOfNight: {
    text: "You navigate the Labyrinth of Night. What do you uncover?",
    choices: ["Path to the Starlit Chamber", "Key to the Shadow Realm"],
    consequences: ["starlitChamber", "shadowRealmKey"],
    image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/49bb5373-3f86-4cc8-b341-1ed3a9ae07e0/dg5igo7-dc051141-adac-42e6-83ba-cf1bfae440fe.png/v1/fill/w_1920,h_1760,q_80,strp/the_abyssal_labyrinth_by_vestesta_dg5igo7-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTc2MCIsInBhdGgiOiJcL2ZcLzQ5YmI1MzczLTNmODYtNGNjOC1iMzQxLTFlZDNhOWFlMDdlMFwvZGc1aWdvNy1kYzA1MTE0MS1hZGFjLTQyZTYtODNiYS1jZjFiZmFlNDQwZmUucG5nIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.PyD39Om3dj6G4ONljAJ-_N4KHKGh6kzFriY-WDffi2s",
},
awakenGuardian: {
    text: "You awaken the Forest Guardian, bringing harmony to the land. Congratulations!",
    choices: ["Ending 1"],
    image: "https://steamuserimages-a.akamaihd.net/ugc/957467519340074910/DEAF9C363BD7369CA3F103EED10883937342220A/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true",
},
findEnclave: {
    text: "You discover the Hidden Enclave, a haven of ancient beings. Congratulations!",
    choices: ["Ending 2"],
    image: "https://cdna.artstation.com/p/assets/images/images/053/534/240/4k/dimitris-tzilivakis-final-1.jpg?1662451738",
},
learnNatureLanguage: {
    text: "You master the Language of Nature, understanding all living things. Congratulations!",
    choices: ["Ending 3"],
    image: "https://cdn.openart.ai/stable_diffusion/8fdb58670bd46d5938fa0686378fdbd8cf2e8e76_2000x2000.webp",
},
findTreeOfEternity: {
    text: "You find the Tree of Eternity, gaining ageless wisdom. Congratulations!",
    choices: ["Ending 4"],
    image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/11089b8d-ccc1-4571-b2c9-0f5af1b5fe8c/dglmp5a-a179080b-410d-49fa-a4c5-b2032b17a57b.jpg/v1/fill/w_1920,h_1921,q_75,strp/chronicles_of_the_eternal_tree_by_123just4u_dglmp5a-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzExMDg5YjhkLWNjYzEtNDU3MS1iMmM5LTBmNWFmMWI1ZmU4Y1wvZGdsbXA1YS1hMTc5MDgwYi00MTBkLTQ5ZmEtYTRjNS1iMjAzMmIxN2E1N2IuanBnIiwiaGVpZ2h0IjoiPD0xOTIxIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiXC93bVwvMTEwODliOGQtY2NjMS00NTcxLWIyYzktMGY1YWYxYjVmZThjXC8xMjNqdXN0NHUtNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.yp3krgIkpSAS6qZB8_AuxxlXovopiPjVZomci4pzG64",
},
echoesPast: {
    text: "You hear the Echoes of the Past, learning from history. Congratulations!",
    choices: ["Ending 5"],
    image: "https://i.pinimg.com/originals/76/54/c8/7654c8d590805caf9edca011a78e08ac.png",
},
glimpseFuture: {
    text: "You catch a Glimpse of Future Realms, foreseeing potential paths. Congratulations!",
    choices: ["Ending 6"],
    image: "https://socialdraft.com/cdn/shop/products/556b84d16af61022fbda239a4ee6ea4f.png?v=1679836981",
},
starlitChamber: {
    text: "You reach the Starlit Chamber, bathed in cosmic energy. Congratulations!",
    choices: ["Ending 7"],
    image: "https://i0.wp.com/kyberscorner.com/wp-content/uploads/2021/08/Chamber-of-Starlight-Lost-Sector.jpg?fit=1280%2C720&ssl=1",
},
shadowRealmKey: {
    text: "You obtain the Key to the Shadow Realm, unlocking hidden powers. Congratulations!",
    choices: ["Ending 8"],
    image: "https://cdn.pixabay.com/photo/2023/10/23/06/13/skeleton-key-8335424_960_720.jpg",
},


};

function startGame() {
  currentState = "start";
  updatePage();
}

function updatePage() {
  let stage = gameData[currentState];
  document.getElementById("story-text").innerText = stage.text;

  let choicesList = document.getElementById("choices");
  choicesList.innerHTML = "";
  for (let i = 0; i < stage.choices.length; i++) {
    let choice = document.createElement("button");
    choice.innerText = stage.choices[i];
    choice.addEventListener("click", function () {
      currentState = stage.consequences[i];
      updatePage();
    });
    choicesList.appendChild(choice);
  }

  document.getElementById("story-image").src = stage.image;
}

startGame();