exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('characters').del()
    .then(function () {
      // Inserts seed entries
      return knex('characters').insert([
        { id: 1,
          name: 'Astos',
          gender: 'Male',
          race: 'Dark Elf',
          job: 'King',
          origin: 'Final Fantasy 01',
          description: 'Astos (アストス Asutosu) is the evil king of the Dark Elves in the original Final Fantasy. He is fought as a boss in the Western Keep where he is found disguised as a king. In Final Fantasy I & II: Dawn of Souls and future remakes, Astos appears in the Whisperwind Cove. There is a room with flame-like spirits which must be calmed so they can go rest in peace. One of those souls is Astos, seeking revenge and attacking the party when he encounters them. After his soul is destroyed, he curses the Warriors of Light before fading away.',
          picture: 'https://vignette.wikia.nocookie.net/finalfantasy/images/b/ba/Astos_PSP.png/revision/latest?cb=20121014151155'
        },
        {
          id: 2,
          name: 'Bikke',
          gender: 'Male',
          race: 'Human',
          job: 'Pirate',
          origin: 'Final Fantasy 01',
          description: "Bikke's (海賊ビッケ Kaizoku Bikke) NES appearance is quite simplistic due to console limitations: black eye patch over his left eye, black captain's hat with crossed blue swords, and cyan vest, pants, and shoes. In the remakes which were on consoles with greater color depth his appearance was improved upon: he dons a black eye patch over his left eye, a black captain's hat with gold outlines, crossed yellow blades and green buttons on its front. His looks completes purple cloak with gold outlines, purple pants, and red jacket and boots.",
          picture: 'https://vignette.wikia.nocookie.net/finalfantasy/images/2/23/FFD_Bikke.png/revision/latest?cb=20150713054947'
        },
        {
          id: 3,
          name: 'Black Mage',
          gender: 'N/A',
          race: 'Human',
          job: 'Black Mage/Black Wizard',
          origin: 'Final Fantasy 01',
          description: 'A specialist in Black Magic, but is physically frail. Becomes the Black Wizard who can cast Flare (NUKE in the original North American localization), one of the two damaging spells that retain full effectiveness against the final boss (the White Wizard can cast Holy, but it is less powerful).',
          picture: 'https://vignette.wikia.nocookie.net/finalfantasy/images/7/7a/Blackmagesffix.jpg/revision/latest/scale-to-width-down/350?cb=20111127191319'
        },
        {
          id: 4,
          name: 'Chaos',
          gender: 'Male',
          race: 'N/A',
          job: 'N/A',
          origin: 'Final Fantasy 01',
          description: 'Chaos (カオス Kaosu) is the antagonist and the final boss of the original Final Fantasy. He is a demonic monster who maintains a time loop. He is the quintessential Final Fantasy antagonist and final boss, many future villains pay homage to him. The elements of chaos and harmony, often represented by darkness and light, have become a recurring theme in the series.',
          picture: 'https://mooglestorage.blob.core.windows.net/images/Character-94fa010f-c5cf-4a77-0f6d-08d6afcab3e21.png'
        },
        {
          id: 5,
          name: 'Garland',
          gender: 'Male',
          race: 'Human',
          job: 'Knight',
          origin: 'Final Fantasy 01',
          description: 'Garland (ガーランド Gārando) is the main antagonist in Final Fantasy. A former knight of Cornelia who has fallen from grace, the Warriors of Light fight him near the beginning of the game. Although he is dispatched, it is discovered Garland has enacted a plan to create a time loop, allowing him to exist forever and eventually become the god Chaos.',
          picture: 'https://mooglestorage.blob.core.windows.net/images/Character-f13ded97-0fc8-405c-d7da-08d7024456621.png'
        },
        {
          id: 6,
          name: 'Lich',
          gender: 'N/A',
          race: 'Lich',
          job: 'Lich',
          origin: 'Final Fantasy 01',
          description: 'Lich (リッチ Ritchi) is the Fiend of Earth from the original Final Fantasy. He appears at the bottom of the Cavern of Earth. He is undead with the appearance of a skeleton.',
          picture: 'https://mooglestorage.blob.core.windows.net/images/Character-54be7ad8-8594-4bcd-0f70-08d6afcab3e21.png'
        },
        {
          id: 7,
          name: 'Monk',
          gender: 'Male',
          race: 'Human',
          job: 'Monk/Master',
          origin: 'Final Fantasy 01',
          description: 'A martial arts expert who is best left fighting empty-handed, but may also wield nunchaku, and the most basic of staves. Does tremendous damage in combat, but cannot wear heavy armor. He will become the Master. In the original Famicom/NES version a high level, barehanded Master, who is unencumbered by armor, can do more damage in a single attack than any other character type; a party of four Masters can defeat the final boss in less than two full rounds. Though a rather weak class in the beginning, the player never has to buy much equipment for him, thus saving gil.',
          picture: 'https://mooglestorage.blob.core.windows.net/images/Character-bf6944f7-70b4-4b5e-0f71-08d6afcab3e21.png'
        },
        {
          id: 8,
          name: 'Red Mage',
          gender: 'N/A',
          race: 'Human',
          job: 'Red Mage/Red Wizard',
          origin: 'Final Fantasy 01',
          description: 'A jack-of-all-trades, able to use most but not all of White and Black Magic, and fights similar to, but not quite as good as, the Fighter. Becomes the Red Wizard.',
          picture: 'https://mooglestorage.blob.core.windows.net/images/Character-06c99611-d95d-49ff-0f72-08d6afcab3e21.png'
        },
        {
          id: 9,
          name: 'Thief',
          gender: 'N/A',
          race: 'Human',
          job: 'Thief/Ninja',
          origin: 'Final Fantasy 01',
          description: 'A high evasion/accuracy finesse fighter with limited weapon and armor selection, but greater agility and luck (ability to escape from combat). The ability to flee is bugged in versions before the Origins release. The Thief will be upgraded to the Ninja class who can use almost every weapon and most armor, and can use many Black Magic spells.',
          picture: 'https://mooglestorage.blob.core.windows.net/images/Character-6ff168f0-1b85-4d99-0f73-08d6afcab3e21.png'
        },
        {
          id: 10,
          name: 'Vampire',
          gender: 'Male',
          race: 'Vampire',
          job: 'Vampire',
          origin: 'Final Fantasy 01',
          description: "Vampire (バンパイア Banpaia) is a boss from the original Final Fantasy, fought on the third floor of the Cavern of Earth. When the Light Warriors arrive to Melmond, they find the earth rotting and the people suffering. As the Vampire had attacked the town earlier and destroyed the church, the townsfolk believed he was also responsible for the earth rotting. The Light Warriors travel to the Cavern of Earth to confront him. After defeating him they find out the land in Melmond keeps rotting, and thus they go to the Sage's cave, where they find out the Vampire was working for one of the Four Fiends, the Lich. Other Vampires are fought as random encounter in numerous areas of the game. They can be fought in the Mirage Tower in groups, and they can be fought alongside other enemies in parts of the Chaos Shrine. In the Final Fantasy I & II: Dawn of Souls and future releases the Vampire of Melmond can be found and battled again in the room of spirits in the Whisperwind Cove.",
          picture: 'https://mooglestorage.blob.core.windows.net/images/Character-e8dd36fc-f604-45fc-0f74-08d6afcab3e21.png'
        },
        {
          id: 11,
          name: 'Warrior of Light',
          gender: 'Male',
          race: 'Human',
          job: 'Warrior/Knight',
          origin: 'Final Fantasy 01',
          description: 'A specialist in heavy weapons and armor who can withstand punishment. Will become the Knight, able to use the most powerful weapons and some White Magic spells.',
          picture: 'https://mooglestorage.blob.core.windows.net/images/Character-34e1c6b7-9788-4ecc-0f75-08d6afcab3e21.png'
        },
        {
          id: 12,
          name: 'White Mage',
          gender: 'Female',
          race: 'Human',
          job: 'White Mage/White Wizard',
          origin: 'Final Fantasy 01',
          description: 'A specialist in White Magic. Not a good fighter, but can use hammers for physical attacks and focuses on supporting the team with healing and enhancing spells. Will be upgraded into a White Wizard, which allows the character to use the most powerful White Magic spells.',
          picture: 'https://mooglestorage.blob.core.windows.net/images/Character-7f77cd1d-102f-4989-0f76-08d6afcab3e21.png'
        },
        {
          id: 13,
          name: 'Borghen',
          gender: 'Male',
          race: 'Human',
          job: 'General',
          origin: 'Final Fantasy 02',
          description: 'Borghen (ボーゲン Bōgen), also known as Borgan, is the tertiary antagonist of Final Fantasy II. He was once a noble man who became an evil general. Borghen is a coward, yet ambitious and sadistic. He prefers to stay in the sidelines letting others do the dirty work for him.',
          picture: 'https://mooglestorage.blob.core.windows.net/images/Character-c88c25e2-8712-41a3-0f77-08d6afcab3e21.jpg'
        },
        {
          id: 14,
          name: 'Cid',
          gender: 'Male',
          race: 'Human',
          job: 'Engineer',
          origin: 'Final Fantasy 02',
          description: "Cid (シド Shido) is a character from Final Fantasy II. He is the first character from the series to bear this name (Cid of the Lufaine was only introduced in the Dawn of Souls remake of the original Final Fantasy), starting a tradition to name a character Cid in every subsequent Final Fantasy game.\r\n\r\nOriginally, Cid served as a white knight of Fynn, but gave up that life for his airship. Cid has set a transport business at the town of Poft with his airship, using the money charged for the flights to maintain it. During Firion and his allies' quest to destroy the Dreadnought, Cid tells Firion that airships are powered by Sunfire, and that a lack of control of it would cause any engine to explode. After Firion and his friends obtain the Sunfire at Kashuan, Cid and Princess Hilda attempt to meet them there, but Cid's airship is captured by the Dreadnought itself. The rebels succeed in infiltrating the Dreadnought and rescuing both Cid and Princess Hilda and destroy the warship.\r\n\r\nLater, Cid is fatally injured during the onslaught of the Emperor's Cyclone, and is taken to Paul's home in Fynn. After the Cyclone is destroyed, he summons Firion to his bedside and gives him the airship, which Firion uses to enter Palamecia Castle to stop Leon.\r\n\r\nHowever, Cid's soul travels to Machanon with other people who have perished fighting the Empire. Cid joins the fallen white knights of Fynn to aid the perished civilians escape the monster-filled Raqia caverns and set up a small town beyond the passage inside. When Minwu, Scott, Ricard and Josef leave Raqia, they arrive at Machanon as well, and meet Cid, who also offers them advice on their quest.",
          picture: 'https://mooglestorage.blob.core.windows.net/images/Character-a477d01e-a627-4f82-0f78-08d6afcab3e21.jpg'
        },
        {
          id: 15,
          name: 'Elina',
          gender: 'Female',
          race: 'Human',
          job: 'N/A',
          origin: 'Final Fantasy 02',
          description: "Elina (エリナ Erina), also known as Elena, is a minor non-playable character in Final Fantasy II. A widow living in Castle Deist, her husband Phillip (フィリップ Firippu) was a Dragoon who was killed when the Palamecian Empire raided Deist. She has a son, Kain, and is a friend of Ricard.\r\n\r\nAfter Ricard's death, if Firion visits her again and asks about the Dragoons, she takes her child and flees Deist, but not before thanking Firion for saving the last Wyvern egg and for letting her see Ricard again, and gives him the Excalibur.\r\n\r\nElina and her son Kain play a vital role in the defeat of the deceased Emperor's light-half. They, alongside Nelly, Prince Gordon, and Princess Hilda, appear before the deceased warriors, including her husband, and warn them that the Light Emperor is just as evil as the Emperor the surviving Wild Rose Rebels are fighting (his dark-half).",
          picture: 'https://jackfperryjr.github.io/moogleapi-images/ff-unknown-sample.png'
        },
        {
          id: 16,
          name: 'Firion',
          gender: 'Male',
          race: 'Human',
          job: 'Red Mage',
          origin: 'Final Fantasy 02',
          description: "Firion (フリオニール Furionīru, ''Frioniel''' in the Japanese version) is the main protagonist of Final Fantasy II, and as such, the leader of the player's party. He is the adopted brother of Maria and Leon and he is the best friend of Guy. Firion is the first main character in the series with a default name and a narrative driven storyline, unlike the playable characters of the original Final Fantasy.",
          picture: 'https://mooglestorage.blob.core.windows.net/images/Character-1ec90c7b-e092-4445-0f7a-08d6afcab3e21.jpg'
        },
        {
          id: 17,
          name: 'Gordon',
          gender: 'Male',
          race: 'Human',
          job: 'Warrior Mage',
          origin: 'Final Fantasy 02',
          description: 'Gordon (ゴードン Gōdon) is a temporary playable character from Final Fantasy II. He and his older brother Scott are the princes of Kashuan, allies of the Kingdom of Fynn, and both are in love with Princess Hilda.',
          picture: 'https://mooglestorage.blob.core.windows.net/images/Character-e56bb527-691c-4bd0-0f7b-08d6afcab3e21.jpg'
        },
        {
          id: 18,
          name: 'Guy',
          gender: 'Male',
          race: 'Human',
          job: 'Warrior',
          origin: 'Final Fantasy 02',
          description: "Guy (ガイ Gai), also known as Gus, is a main character, and one of Firion's two permanent allies in Final Fantasy II, the other being Maria.",
          picture: 'https://mooglestorage.blob.core.windows.net/images/Character-625214a7-2b3e-43d5-0f7c-08d6afcab3e21.jpg'
        },
        {
          id: 19,
          name: 'Hilda',
          gender: 'Female',
          race: 'Human',
          job: 'Princess/Queen',
          origin: 'Final Fantasy 02',
          description: 'Princess Hilda (ヒルダ Hiruda), later known as Queen Hilda, is a non-player character from Final Fantasy II. She is the daughter of the King of Fynn and the leader of the Wild Rose Rebellion, to which the main characters belong.',
          picture: 'https://mooglestorage.blob.core.windows.net/images/Character-207bf7dd-24fb-47f7-0f7d-08d6afcab3e21.jpg'
        },
        {
          id: 20,
          name: 'Josef',
          gender: 'Male',
          race: 'Human',
          job: 'Monk',
          origin: 'Final Fantasy 02',
          description: 'Josef (ヨーゼフ Yōzefu) is a playable character from Final Fantasy II. He joins the party soon after they arrive at Salamand.',
          picture: 'https://mooglestorage.blob.core.windows.net/images/Character-5a7fa811-f0b3-49b0-0f7e-08d6afcab3e21.jpg'
        },
        {
          id: 21,
          name: 'Leila',
          gender: 'Female',
          race: 'Human',
          job: 'Thief',
          origin: 'Final Fantasy 02',
          description: "Leila (レイラ Reira, ''Reila'' in the Japanese version) is one of Firion's allies in Final Fantasy II. She is encountered as a pirate captain, hired by Firion to transport the heroes across the seas to the ruined kingdom of Deist.",
          picture: 'https://mooglestorage.blob.core.windows.net/images/Character-e4f18fca-c22c-4c4a-0f7f-08d6afcab3e21.jpg'
        },
        {
          id: 22,
          name: 'Leon',
          gender: 'Male',
          race: 'Human',
          job: 'Dark Knight',
          origin: 'Final Fantasy 02',
          description: "Leon (レオンハルト Reonharuto, ''Leonhard'' in the Japanese version), also known as Leonhart, is one of the playable characters in Final Fantasy II. He is an ally but he also serves as the secondary antagonist throughout the game as the Emperor's Dark Knight.",
          picture: 'https://mooglestorage.blob.core.windows.net/images/Character-0fd5448e-1f8b-4300-0f80-08d6afcab3e21.jpg'
        },
        {
          id: 23,
          name: 'Maria',
          gender: 'Female',
          race: 'Human',
          job: 'Black Mage',
          origin: 'Final Fantasy 02',
          description: "Maria (マリア) is the main deuteragonist of Final Fantasy II. She is one of Firion's permanent allies, and Leon's sister, but the two are separated at the beginning of the game.",
          picture: 'https://mooglestorage.blob.core.windows.net/images/Character-d260bfeb-dde4-4ae7-0f81-08d6afcab3e21.jpg'
        },
        {
          id: 24,
          name: 'Mateus',
          gender: 'Male',
          race: 'Human',
          job: 'Emperor',
          origin: 'Final Fantasy 02',
          description: "The Emperor of Palamecia(パラメキア皇帝 Paramekia Kōtei) is the main antagonist of Final Fantasy II. He is the ruler of the Palamecian Empire and aims to conquer the world through demonic forces. Though known simply as the Emperor in Final Fantasy II, he is named Mateus (マティウス Matiusu) in the Japan-exclusive novelization: Final Fantasy II Nightmare's Labyrinth by Kenji Terada. His name, Mateus, is referred to in Dissidia Final Fantasy with his best weapon, Mateus's Malice. He is known as Empire in the Dark Shadow Over Palakia translation.",
          picture: 'https://mooglestorage.blob.core.windows.net/images/Character-15bd0f64-6958-444d-0f82-08d6afcab3e21.jpg'
        },
        {
          id: 25,
          name: 'Minwu',
          gender: 'Male',
          race: 'Human',
          job: 'White Mage',
          origin: 'Final Fantasy 02',
          description: "Minwu (ミンウ Min'u, ''Ming-Wu'' in the Japanese version), known as Mindu in the Final Fantasy Origins version, and called Minh in the Neo Demiforce fan translation, is one of the temporarily playable characters from Final Fantasy II, as well as the protagonist of Soul of Rebirth. A White Wizard from Mysidia, he works as Fynn's Royal Mage, and after Fynn's takeover by the Palamecian Empire, he becomes Princess Hilda's right-hand man who will do anything to help the Wild Rose Rebellion. Minwu is alluded to in several other installments, always as a great mage of lore.",
          picture: 'https://mooglestorage.blob.core.windows.net/images/Character-fcf10479-2912-49b8-0f83-08d6afcab3e21.jpg'
        },
        {
          id: 26,
          name: 'Nelly',
          gender: 'Female',
          race: 'Human',
          job: 'N/A',
          origin: 'Final Fantasy 02',
          description: 'Nelly (ネリー Nerī), also known as Nellie and Molly in the PlayStation version, is a non-playable character in Final Fantasy II. She is the loving and supportive daughter of Josef.',
          picture: 'https://jackfperryjr.github.io/moogleapi-images/ff-unknown-sample.png'
        },
        {
          id: 27,
          name: 'Paul',
          gender: 'Male',
          race: 'Human',
          job: 'Thief',
          origin: 'Final Fantasy 02',
          description: 'Paul (ポール Pōru?), also known as Pavel, is a thief loyal to Fynn from Final Fantasy II. Better at working alone than with others, he is encountered many times, where he helps the party.',
          picture: 'https://mooglestorage.blob.core.windows.net/images/Character-0da265a8-994c-4a6b-0f85-08d6afcab3e21.jpg'
        },
        {
          id: 28,
          name: 'Ricard',
          gender: 'Male',
          race: 'Human',
          job: 'Dragoon',
          origin: 'Final Fantasy 02',
          description: "Ricard Highwind (リチャード・ハイウインド Richādo Haiuindo, ''Richard'' in the Japanese version), also known as Gareth in the Final Fantasy Origins translation, and Edward in the Dark Shadow Over Palakia translation, is a character from Final Fantasy II. He is the last surviving Dragoon from Deist. He is the first Dragoon Knight in the series.",
          picture: 'https://mooglestorage.blob.core.windows.net/images/Character-a1955047-de66-436c-0f86-08d6afcab3e21.jpg'
        },
        {
          id: 29,
          name: 'Scott',
          gender: 'Male',
          race: 'Human',
          job: 'Prince',
          origin: 'Final Fantasy 02',
          description: 'Scott (スコット Sukotto) is a character from Final Fantasy II. He is a prince of Kashuan and the elder brother of Gordon. He first appeared as a minor character, but in the Soul of Rebirth quest he plays a larger role as a party member.',
          picture: 'https://mooglestorage.blob.core.windows.net/images/Character-5b75118c-a88a-49f9-0f87-08d6afcab3e21.png'
        },
        {
          id: 30,
          name: 'Tobul',
          gender: 'Male',
          race: 'Human',
          job: 'Blacksmith',
          origin: 'Final Fantasy 02',
          description: 'Tobul (トブール Tobūru) is a non-playable character in Final Fantasy II. He is the resident smith of Altair.\r\n\r\n',
          picture: 'https://jackfperryjr.github.io/moogleapi-images/ff-unknown-sample.png'
        },
        {
          id: 31,
          name: 'Alus Restor',
          gender: 'Male',
          race: 'Human',
          job: 'Prince',
          origin: 'Final Fantasy 03',
          description: 'Prince Alus Restor (アルス・レストー Arusu Resutō), also known as Allus, is the young crown prince of Saronia in Final Fantasy III. He is met in southwestern Saronia. An outspoken prince, he is shy and has recently fallen on hard times. In the 3D remake version for Nintendo DS and mobile platforms, Arc takes a liking towards him as both of them were belittled in the past, despite the age difference.',
          picture: 'https://mooglestorage.blob.core.windows.net/images/Character-c567bbb3-3475-4145-0f89-08d6afcab3e21.jpg'
        },
        {
          id: 32,
          name: 'Arc',
          gender: 'Male',
          race: 'Human',
          job: 'Black Mage',
          origin: 'Final Fantasy 03',
          description: "Arc (アルクゥ Arukū) is a playable character in the 3D remake release of Final Fantasy III. He is one of the Warriors of Light, and is first encountered in Ur. He is the shortest party member with brown hair and freckles. His Freelancer outfit consists of a yellow shirt covered by a long green coat, a white mantle, and a yellow scarf. He wears fingerless gloves, fitted black pants, and brown knee-high boots. His theme color is green, shown in his Job armors, while his scarf is visible when robe-clad. Arc's silver belt buckle is used to distinguish his Job outfits from his allies.",
          picture: 'https://mooglestorage.blob.core.windows.net/images/Character-7e8aedb0-b771-4441-0f8a-08d6afcab3e21.jpg'
        },
        {
          id: 33,
          name: 'Aria Benett',
          gender: 'Female',
          race: 'Human',
          job: 'White Mage',
          origin: 'Final Fantasy 03',
          description: 'Aria Benett (エリア・ベネット Eria Benetto), also known as Elia, is a guest character from Final Fantasy III. She temporarily joins the party at the Wrecked Ship to restore the Water Crystal. She is also the first character in the series to have her own personal theme. Aria is a young girl with long blonde hair with a small braid in the back tied with a blue ribbon and the rest tied in a ponytail and blue eyes. She wears a long, plain, white halter-dress.',
          picture: 'https://mooglestorage.blob.core.windows.net/images/Character-a05803af-5624-4a54-0f8b-08d6afcab3e21.jpg'
        },
        {
          id: 34,
          name: 'Cid Haze',
          gender: 'Male',
          race: 'Human',
          job: 'Engineer',
          origin: 'Final Fantasy 03',
          description: "Cid Haze (シド・ヘイズ Shido Heizu) is a character in Final Fantasy III. He is an eccentric looking old man with a large beard, and wide brimmed wizard's hat with goggles on it. He is met in Kazus. In the 3D remakes, Cid can help out the party in battle, either with a one-hit hammer attack or a casting of Fire. As with all ally characters, he attacks at random intervals, and his hammer attack hits a random target. ",
          picture: 'https://mooglestorage.blob.core.windows.net/images/Character-bda3ed09-d834-4eda-0f8c-08d6afcab3e21.jpg'
        },
        {
          id: 35,
          name: 'Cloud of Darkness',
          gender: 'Female',
          race: 'N/A',
          job: 'N/A',
          origin: 'Final Fantasy 03',
          description: "The Cloud of Darkness (暗闇の雲 Kurayami no Kumo, lit. The Dark Cloud) is the primary antagonist and final boss of Final Fantasy III. Although it is the final boss, it does not appear until the very end. Its goal is to cause a flood of darkness to reduce the world to nothingness. In Final Fantasy III, the Cloud of Darkness appears as a green-skinned female humanoid emerging from a portal of darkness at its waist. It has a red heart-shaped mark on its forehead, and several mouthed tentacles around it. In Yoshitaka Amano's concept art of it and in Dissidia Final Fantasy, the Cloud of Darkness takes the form of a shapely woman wearing a red and black cape with the rest of its body covered in red and black markings. It has the red heart-shaped mark on its forehead, and has long silver hair. It has only two tentacles, emerging from its waist. The Cloud of Darkness is the tallest non-giant character in the Dissidia series. Though the Cloud of Darkness universally takes on a feminine form, it is officially considered a genderless being that merely chooses to appear as such. The Cloud of Darkness refers to itself in the plural, using \"We\" instead of \"I\". Dissidia Final Fantasy explains this as its two tentacles having minds of their own, and the humanoid body speaking for the three of them.",
          picture: 'https://mooglestorage.blob.core.windows.net/images/Character-c2709e11-1b97-4730-0f8d-08d6afcab3e21.jpg'
        },
        {
          id: 36,
          name: 'Desch',
          gender: 'Male',
          race: 'Human',
          job: 'Warrior',
          origin: 'Final Fantasy 03',
          description: "Desch (デッシュ Desshu), also known as Desh, is a character from Final Fantasy III. A man suffering from amnesia, he is a capable warrior, and a bit of a womanizer despite being in a relationship with Salina. He is first met at Dragon's Peak. In the 3D remake version, he befriends Refia during his time traveling with the party. Desch is a slender youth with teal hair and purple eyes in his 3D render and in his Amano sketchwork. He is depicted in a purple bodysuit with a single pauldron over his left shoulder. In his NES appearance, his field sprite is a palette swap of a Warrior, while his menu sprite depicts a green bodysuit and blond hair.",
          picture: 'https://mooglestorage.blob.core.windows.net/images/Character-d53ae108-2143-4ab3-0f8e-08d6afcab3e21.jpg'
        },
        {
          id: 37,
          name: 'Djinn',
          gender: 'Male',
          race: 'Human',
          job: 'N/A',
          origin: 'Final Fantasy 03',
          description: "Djinn (ジン Jin), also known as Jinn, is a minor antagonist in Final Fantasy III and an early boss. Djinn is the first boss the player will face with all four playable characters in the 3D version. The NES version has the player start with all four characters. Djinn placed the village of Kazus and Castle Sasune under a curse which turned its residents into ghosts. The only way to remove the curse is for the Djinn to be sealed in the Mythril Ring, which Princess Sara sets out to do. Djinn is resistant to the ring's effect, and it takes the Warriors of the Light to weaken him enough to be banished. Djinn primarily uses strong melee attacks with his scimitar and Fire magic. The Djinn generally can do around 30 damage with his scimitar and 20 when Fire is cast on all characters. He is weak against Water and Ice spells and items; players should use Blizzard, s, and/or Antarctic Winds, but regular attacks will also suffice.",
          picture: 'https://mooglestorage.blob.core.windows.net/images/Character-af919584-ff96-4e70-0f8f-08d6afcab3e21.jpg'
        },
        {
          id: 38,
          name: 'Doga',
          gender: 'Male',
          race: 'Human',
          job: 'Wizard',
          origin: 'Final Fantasy 03',
          description: "Doga (ドーガ Dōga), or Dorga is a supporting character from Final Fantasy III, who temporarily joins the party after being met at Doga's Manor. He is a powerful wizard who has lived for many years. Doga supports the party at several points of the game in his state as a mortal and even after his own death.",
          picture: 'https://mooglestorage.blob.core.windows.net/images/Character-95b93476-330a-46fd-0f90-08d6afcab3e21.jpg'
        },
        {
          id: 39,
          name: 'Goldor',
          gender: 'Male',
          race: 'Human',
          job: 'N/A',
          origin: 'Final Fantasy 03',
          description: "Goldor (ゴールドル Gōrudoru) is a minor antagonist in Final Fantasy III. He owns a giant, gold-encrusted manor to the south of Amur.\r\n\r\nGoldor lives in his manor, where everything is pure gold. Within it is a crystal, of which Goldor is very protective. When the four Warriors of the Light appeared on the Surface World after cleansing the Water Crystal, Goldor was afraid the Warriors might take his crystal away, and so chained their ship with a giant gold chain.\r\n\r\nThe Warriors of the Light then traveled to Goldor Manor, but not before acquiring the Levigrass Shoes used to cross the deadly bottomless bog in front of the golden estate. Inside the labyrinthine mansion, they confronted many gold monsters until they came face to face with Goldor. By defeating him, they obtained the key that would be used to unshackle their ship.\r\n\r\nGoldor's crystal is his most valued of possessions, but in reality, it is made of gold like everything else and is not the crystal of Earth as the Warriors of the Light suspect.",
          picture: 'https://mooglestorage.blob.core.windows.net/images/Character-546faf28-baf4-4c97-0f91-08d6afcab3e21.jpg'
        },
        {
          id: 40,
          name: 'Gutsco',
          gender: 'Male',
          race: 'Human',
          job: 'Thief',
          origin: 'Final Fantasy 03',
          description: "Gutsco the Rogue (とうぞくグツコ Tōzoku Gutsuko, lit. Bandit Gutsco), also known as Guzco, is a minor antagonist and a boss from Final Fantasy III. Gutsco appears in the Subterranean Lake and has stolen one of the dwarves' Horns of Ice. After he is defeated once, he follows the party as a shadow to the Dwarven Hollows until they near both Horns, where he promptly steals both of them. The party pursues Gutsco with encouragement from the dwarves, but Gutsco escapes. He runs to the Molten Cave, where he heads to obtain the power of the Fire Crystal now that he is protected from the cave's hostile magma thanks to the Horns of Ice. The Warriors of the Light find him at the crystal room in the depths of the cave, and fight him in his state of empowerment granted by the Fire Crystal where he takes the form of the Salamander.",
          picture: 'https://mooglestorage.blob.core.windows.net/images/Character-4a3b1cad-a5e7-46fe-0f92-08d6afcab3e21.jpg'
        },
        {
          id: 41,
          name: 'Hein',
          gender: 'Male',
          race: 'Human',
          job: 'Sorcerer',
          origin: 'Final Fantasy 03',
          description: "Hein (まどうし ハイン Madoushi Hain, lit. Sorcerer Hein), also known as Hyne, is a minor antagonist in Final Fantasy III.\r\n\r\nHein had gained the trust of the king of Castle Argus, which governed a large region of the Floating Continent, and became the castle's wizard. In reality, he is one of several monsters sent by Xande to cause chaos on the Floating Continent, and his true form is that of a skeletal being. He casts a spell over the Elder Tree, causing it to float over the desert south of Castle Argus, and christens it Castle Hein.\r\n\r\nHein bewitches the castle's inhabitants and imprisons them in his new fortress, where he terrorizes the neighboring town of Tokkul. Luneth and his friends are captured during a raid and are brought to the living castle. They overcome the guards and monsters and ascend the decaying tree to face Hein, who shows no remorse for his actions. The Warriors of Light defeat the crazed mage, and the Elder Tree returns to its true form. Before replanting itself in the forest from whence it came, the tree restores the royal family and guards of Argus to their rightful place at the throne. ",
          picture: 'https://mooglestorage.blob.core.windows.net/images/Character-a5f10aa1-62cf-465e-0f93-08d6afcab3e21.jpg'
        },
        {
          id: 42,
          name: 'Ingus',
          gender: 'Male',
          race: 'Human',
          job: 'Red Mage',
          origin: 'Final Fantasy 03',
          description: "Ingus is one of the main characters of Final Fantasy III since the 3D remake. Though he has no set job class, he is portrayed as a Red Mage in the opening FMV. He is first met at Castle Sasune. He has short blonde hair and blue eyes. His Freelancer outfit is heavy armor and chain mail on his arms and legs, over which he wears a white shirt with puffed sleeves and a wide collar, and a red gambeson over that. Ingus's theme color is red, shown in his Job armors. The white belt, gambeson pattern, collar, or green pendant are used to distinguish his Job outfits from his allies'. In the opening FMV, he is depicted as a Red Mage, probably as a reference to the fact that Red Mages are considered to be the elite warriors of Sasune.",
          picture: 'https://mooglestorage.blob.core.windows.net/images/Character-2c8cb3b8-e565-47e7-0f94-08d6afcab3e21.jpg'
        },
        {
          id: 43,
          name: 'Luneth',
          gender: 'Male',
          race: 'Human',
          job: 'Warrior',
          origin: 'Final Fantasy 03',
          description: "Luneth (ルーネス Rūnesu) is one of the main characters in the 3D remake of Final Fantasy III, and is the first to become available. He is one of the Warriors of Light. He has long silver hair and violet eyes, and in his Freelancer outfit wears a light purple turtleneck covered by a dark violet sweatshirt and a sienna vest. He wears brown gloves, long light gray pants, black knee-high boots, and carries a light brown fanny pack. His theme color is purple, shown in his Job armor, while his turtleneck collar is visible while robe-clad. The three buckles on his vest are used to distinguish his Job outfits from his allies'.",
          picture: 'https://mooglestorage.blob.core.windows.net/images/Character-6601da6d-a8cf-4c97-0f95-08d6afcab3e21.jpg'
        },
        {
          id: 44,
          name: 'Noah',
          gender: 'Male',
          race: 'Human',
          job: 'Magus/Sage',
          origin: 'Final Fantasy 03',
          description: "Noah (ノア Noa) was a famous Sage from Final Fantasy III. He lived on the Dalg continent, and was famous throughout the world, with modern-day mages in Replito continuing to revere him long after his death. Noah had three disciples: Xande, Doga and Unei. He trained and gave each of them a gift: mortality to Xande, vast knowledge of magic to Doga, and absolute control of the dream world to Unei. His fate after this is unknown, but an Evoker in Replito mentions his demise offhand. Noah was responsible for the sealing of Leviathan and Bahamut on the Floating Continent, it is also stated that he was able to summon them both. He could not only use both white and black magic, but he could also use summoning magic. The Magus is referenced several times through items and abilities: Noah's Lute is an item used in the game to awaken Unei from her sleep, and the song used by Bards in the game is called \"Lute of Noah\".",
          picture: 'https://jackfperryjr.github.io/moogleapi-images/ff-unknown-sample.png'
        },
        {
          id: 45,
          name: 'Refia',
          gender: 'Female',
          race: 'Human',
          job: 'White Mage',
          origin: 'Final Fantasy 03',
          description: "Refia (レフィア Refia) is a playable character from the 3D remake of Final Fantasy III. She is a Warrior of Light, and is first encountered at Cid's airship. She has red hair and red eyes. Her Freelancer outfit is a white long-sleeved blouse with a blue vest, black leggings, and thigh-high boots. Refia's theme color is blue, shown in her job armor. Although most of her outfits are the same as the others characters, a few, like Summoner, are feminized. Her cross-shaped brooch is used to distinguish her job outfits among the party. Refia sports various hairstyles among ranging from braids to ponytails to pigtails. In the opening FMV, she is depicted as a White Mage.",
          picture: 'https://mooglestorage.blob.core.windows.net/images/Character-61959483-4175-4388-0f97-08d6afcab3e21.jpg'
        },
        {
          id: 46,
          name: 'Sara Altney',
          gender: 'Female',
          race: 'Human',
          job: 'Princess',
          origin: 'Final Fantasy 03',
          description: "Lady Sara Altney (サラ・アルテニー Sara Arutenī) is the princess of Sasune from Final Fantasy III, and the player's first extra party member. She is met and recruited in the Sealed Cave. In the 3D releases, she has feelings toward Ingus. Sara joins the party after they travel into the Sealed Cave to find her, assuming that the Djinn had kidnapped the princess for her Mythril Ring. However, Sara left of her own volition to break his curse. Her first attempt to seal the Djinn with the Mythril Ring fails, so the party must weaken him in battle before it works. After the Djinn is killed, she throws her ring into the spring in the castle basement, dispelling the curse and remaining in Castle Sasune while the party continues with their adventure. The 3D remake adds a Mognet sidequest. Sara writes to Ingus throughout the game, and her final letter is a request to fix her broken pendant, which leads the party to meet the Legendary Smith. Whenever the party meets Sara, she shows interest in Ingus. While he has sworn to protect her, he returns the interest. When Doga asks Sara to help break the Curse of the five wyrms, she joins him once she finds out Ingus is in trouble. After breaking the curse, she stays behind with the others while the party enters the World of Darkness. When the Cloud of Darkness is defeated, Sara decides to stay with Ingus for a while, before returning to the castle.",
          picture: 'https://mooglestorage.blob.core.windows.net/images/Character-a0de9e5c-04fa-4ed6-0f98-08d6afcab3e21.jpg'
        },
        {
          id: 47,
          name: 'Unei',
          gender: 'Female',
          race: 'Human',
          job: 'Magus',
          origin: 'Final Fantasy 03',
          description: 'Unei (ウネ Une), also romanized as Unne, is a supporting character from Final Fantasy III. She can aid the party by using Holy or Haste at the start of battle.',
          picture: 'https://mooglestorage.blob.core.windows.net/images/Character-46d1638b-f4b7-4ad6-0f99-08d6afcab3e21.jpg'
        },
        {
          id: 48,
          name: 'Xande',
          gender: 'Male',
          race: 'Human',
          job: 'Wizard',
          origin: 'Final Fantasy 03',
          description: "Xande (ザンデ Zande) is the main antagonist of Final Fantasy III. He is a powerful wizard and student of the Great Magus Noah. When his master gives him the gift of mortality, the thought of dying sends Xande over the edge. Although he is mentioned several times in the course of the game, he appears in person only once, when the Warriors of Light battle him. Xande has white hair and dark blue skin with bright yellow eyes. He appears with great muscle mass shown by his exposed upper body, he wears a white cape (blue in the NES version), orange pants, an orange and blue sash wrapped around his waist with what appears to be a cat-shaped buckle at the top-center of it, and brown boots. Master Xande was originally one of Great Magus Noah's students, along with Master Doga and Master Unei. Both Master Doga and Master Unei were given great magical powers. Master Xande was given a much stranger gift, the gift of mortality. Master Xande was driven mad by the thought of dying. In a blind rage, Master Xande sought to disrupt the balance of light and darkness, by draining the crystals of their power. By doing so, the world would be flooded in darkness, and time would freeze. Thus, he would no longer have to fear death.",
          picture: 'https://mooglestorage.blob.core.windows.net/images/Character-b186af3f-9a39-4054-0f9a-08d6afcab3e21.jpg'
        },
        {
          id: 49,
          name: 'Baigan',
          gender: 'Male',
          race: 'Human',
          job: 'Captain',
          origin: 'Final Fantasy 04',
          description: 'Baigan (ベイガン Beigan) is a character in Final Fantasy IV and Final Fantasy IV: The After Years. He is the Captain of the Guards in Baron, and he loyally serves the king.',
          picture: 'https://mooglestorage.blob.core.windows.net/images/Character-cadf3fff-da4b-47cb-0f9b-08d6afcab3e21.jpg'
        },
        {
          id: 50,
          name: 'Barbariccia',
          gender: 'Female',
          race: 'N/A',
          job: 'Archfiend',
          origin: 'Final Fantasy 04',
          description: 'Barbariccia (バルバリシア Barubarishia), also known as Valvalis or Valvalecia, is a recurring character in the Final Fantasy universe. First appearing as a minor antagonist, she is a fiend associated with the element of Wind. She has the signature ability of shielding herself by whipping her hair to form a protective whirlwind around her, and the recurring ability Maelstrom.',
          picture: 'https://mooglestorage.blob.core.windows.net/images/Character-bbf1fad2-b3b3-42e2-0f9c-08d6afcab3e21.jpg'
        },
        {
          id: 51,
          name: 'Cagnazzo',
          gender: 'Male',
          race: 'N/A',
          job: 'Archfiend',
          origin: 'Final Fantasy 04',
          description: 'Cagnazzo (カイナッツォ Kainattso) is a recurring character in the Final Fantasy series. First appearing as a minor antagonist, he is a fiend associated with the element of Water. He takes the appearance of a large demonic turtle-like creature. He is a demonic sentient monster, and part of the Archfiends.',
          picture: 'https://mooglestorage.blob.core.windows.net/images/Character-0e93d2ed-17e7-40dd-0f9d-08d6afcab3e21.jpg'
        },
        {
          id: 52,
          name: 'Cecil Harvey',
          gender: 'Male',
          race: 'Half-Lunarian',
          job: 'Dark Knight/Paladin',
          origin: 'Final Fantasy 04',
          description: 'Cecil Harvey (セシル・ハーヴィSeshiru Havi) is the main protagonist of Final Fantasy IV, who also appears in the sequel Final Fantasy IV: The After Years, and the interquel Final Fantasy IV -Interlude- that bridges the gap between the two games. Cecil is one of the few characters in the series to change his job during the game, starting out as a Dark Knight, but after a trial and the battle with the first of the Four Elemental Archfiends, transforms into a Paladin.',
          picture: 'https://mooglestorage.blob.core.windows.net/images/Character-c111db78-8c94-4a89-5351-08d6afc3b4ff1.jpg'
        },
        {
          id: 53,
          name: 'Cid Pollendina',
          gender: 'Male',
          race: 'Human',
          job: 'Engineer',
          origin: 'Final Fantasy 04',
          description: 'Cid Pollendina (シド・ポレンディーナ Shido Porendīna) is a playable character in Final Fantasy IV and its sequel, Final Fantasy IV: The After Years. He is a master engineer who designs the airships that make up the Red Wings in Baron. He is an old acquaintance of Cecil Harvey and is adventurous and fun-loving.',
          picture: 'https://mooglestorage.blob.core.windows.net/images/Character-73ef8ae4-b425-447d-0f9e-08d6afcab3e21.jpg'
        },
        {
          id: 54,
          name: 'Edge Geraldine',
          gender: 'Male',
          race: 'Human',
          job: 'Ninja',
          origin: 'Final Fantasy 04',
          description: "Edge (エドワード・'エッジ'・ジェラルダイン Edowādo ''Ejji'' Jerarudain), real name Edward Geraldine, is a player character in Final Fantasy IV and its sequel, Final Fantasy IV: The After Years. Various sources offer conflicting information on Edge's name. The gallery in Final Fantasy IV: The Complete Collection lists Edge's artwork as 'Edge (Edward) Geraldine', while other sources, including collector cards included with the game, give his name as Edward Geraldine with Edge as an alias or nickname. He is the prince of Eblan and a skilled ninja. He is brash and has an inflated ego, and frequently flirts with women. He is kind with a strong sense of right and wrong, and defends his kingdom no matter the price.",
          picture: 'https://mooglestorage.blob.core.windows.net/images/Character-2ba719a3-f7c9-45bc-0f9f-08d6afcab3e21.jpg'
        },
        {
          id: 55,
          name: 'Edward Chris von Muir',
          gender: 'Enter character gender',
          race: 'Human',
          job: 'Bard',
          origin: 'Final Fantasy 04',
          description: "Edward Chris von Muir (ギルバート・クリス・フォン・ミューア Girubāto Kurisu fon Myūa, ''Gilbart Chris von Muir'' in the Japanese version), is a playable character from Final Fantasy IV and its sequel, Final Fantasy IV: The After Years. He is the crown prince of Damcyan, and in line to become the seventh king. Although he is required to be educated in politics, Edward shows greater interest in music and often leaves the kingdom disguised as a bard to travel the land with his harp.",
          picture: 'https://mooglestorage.blob.core.windows.net/images/Character-429708e2-ba96-4ff6-0fa0-08d6afcab3e21.jpg'
        },
        {
          id: 56,
          name: 'Fusoya',
          gender: 'Male',
          race: 'Lunarian',
          job: 'Sorcerer',
          origin: 'Final Fantasy 04',
          description: "Fusoya (フースーヤ Fūsūya, ''Fusuya'' in the Japanese version and ''FuSoYa'' in earlier versions), is the final playable character in Final Fantasy IV who also appears in Final Fantasy IV: The After Years. He is a Lunarian from the Red Moon, and it is his job to watch over the Lunarians' sleep. He is the oldest of the main characters and reveals significant plot details during the short time he is with the party.",
          picture: 'https://mooglestorage.blob.core.windows.net/images/Character-24aeb6ea-38a5-4fb8-0fa1-08d6afcab3e21.jpg'
        },
        {
          id: 57,
          name: 'Golbez',
          gender: 'Male',
          race: 'Half-Lunarian',
          job: 'Sorcerer',
          origin: 'Final Fantasy 04',
          description: "Golbez (ゴルベーザ Gorubēza), real name Theodor (セオドール, Seodōru), and called Man in Black (黒衣の男, Kokui no Otoko) before his identity is revealed in The After Years, is a non-player character in Final Fantasy IV and a playable character in Final Fantasy IV: The After Years. In Final Fantasy IV, he is an antagonist, a powerful sorcerer who pursues the Crystals. In The After Years, Golbez returns as a playable character.\r\n\r\nGolbez is Cecil's older brother.",
          picture: 'https://mooglestorage.blob.core.windows.net/images/Character-5a93b9e0-c3b5-4395-0fa2-08d6afcab3e21.jpg'
        },
        {
          id: 58,
          name: 'Kain Highwind',
          gender: 'Male',
          race: 'Human',
          job: 'Dragoon',
          origin: 'Final Fantasy 04',
          description: "Kain Highwind (カイン・ハイウィンド Kain Haiwindo, ''Cain Highwind'' in the Japanese version) is a playable character in Final Fantasy IV and Final Fantasy IV: The After Years. He is a Dragoon from the kingdom of Baron, Cecil Harvey's childhood friend and adoptive older brother. He has feelings for Cecil's beloved Rosa Joanna Farrell, but he hides them so they do not hinder his relationship with either of the two: Rosa in turn has feelings for Cecil.",
          picture: 'https://mooglestorage.blob.core.windows.net/images/Character-74c36726-5b13-4e01-0fa3-08d6afcab3e21.jpg'
        },
        {
          id: 59,
          name: 'Lugae',
          gender: 'Male',
          race: 'Human',
          job: 'Scientist',
          origin: 'Final Fantasy 04',
          description: 'Dr. Lugae (ルゲイエ (Rugeie) is a character in Final Fantasy IV. He is a servant of Golbez, and does experiments for him and the Archfiends. He works in the Tower of Babil. His prized creation was a robot named Barnabas.',
          picture: 'https://mooglestorage.blob.core.windows.net/images/Character-567978d3-215f-41ae-0fa4-08d6afcab3e21.jpg'
        },
        {
          id: 60,
          name: 'Palom',
          gender: 'Male',
          race: 'Human',
          job: 'Black Mage',
          origin: 'Final Fantasy 04',
          description: 'Palom (パロム Paromu) is a playable character in Final Fantasy IV and its sequel, Final Fantasy IV: The After Years. He is a Black Mage from Mysidia who trains together with his twin sister, Porom.',
          picture: 'https://mooglestorage.blob.core.windows.net/images/Character-aba3d016-98f6-4338-0fa5-08d6afcab3e21.jpg'
        },
        {
          id: 61,
          name: 'Porom',
          gender: 'Female',
          race: 'Human',
          job: 'White Mage',
          origin: 'Final Fantasy 04',
          description: 'Porom (ポロム Poromu) is a playable character in Final Fantasy IV and its sequel, Final Fantasy IV: The After Years. She is a White Mage from Mysidia who trains together with her twin brother, Palom.',
          picture: 'https://mooglestorage.blob.core.windows.net/images/Character-d9f02604-bf3e-4ac7-0fa6-08d6afcab3e21.jpg'
        },
        {
          id: 62,
          name: 'Rosa Joanna Farrell',
          gender: 'Female',
          race: 'Human',
          job: 'Whtie Mage',
          origin: 'Final Fantasy 04',
          description: "Rosa Joanna Farrell (ローザ・ファレル Rōza Fareru) is a playable character in Final Fantasy IV and its sequel, Final Fantasy IV: The After Years. She hails from Baron, and is a skilled Archer and White Mage. Rosa is Cecil's childhood friend, and harbors romantic feelings for him. Though Cecil is reluctant to let her follow him into danger at first, she stays by his side.",
          picture: 'https://mooglestorage.blob.core.windows.net/images/Character-93125b50-6667-40f8-0fa7-08d6afcab3e21.jpg'
        },
        {
          id: 63,
          name: 'Rubicante',
          gender: 'Male',
          race: 'N/A',
          job: 'Archfiend',
          origin: 'Final Fantasy 04',
          description: 'Rubicante (ルビカンテ Rubikante) also known as Rubicant, is a recurring character in the Final Fantasy universe. First appearing in Final Fantasy IV as a minor antagonist, he is one of the four archfiends associated with the elements; in this case, fire. Despite his role as an antagonist, he has a strong sense of honor and fair play, unlike the other archfiends.',
          picture: 'https://mooglestorage.blob.core.windows.net/images/Character-a598f68c-1008-4e90-0fa8-08d6afcab3e21.jpg'
        },
        {
          id: 64,
          name: 'Rydia',
          gender: 'Female',
          race: 'Human',
          job: 'Summoner',
          origin: 'Final Fantasy 04',
          description: 'Rydia (ミストのリディア Misuto no Ridia), sometimes referred to as Rydia of Mist, is a playable character in Final Fantasy IV and its sequel, Final Fantasy IV: The After Years. She is a Summoner from the village of Mist, and is one of the most prominent characters in the game.',
          picture: 'https://mooglestorage.blob.core.windows.net/images/Character-c4b5b35a-663b-45e3-0fa9-08d6afcab3e21.jpg'
        },
        {
          id: 65,
          name: 'Scarmiglione',
          gender: 'Male',
          race: 'N/A',
          job: 'Archfiend',
          origin: 'Final Fantasy 04',
          description: 'Scarmiglione (スカルミリョーネ Sukarumiryōne), also known as Milon, is a recurring character in the Final Fantasy universe. First appearing as a minor antagonist, he is a fiend associated with the element of Earth and the undead.',
          picture: 'https://mooglestorage.blob.core.windows.net/images/Character-61b8cc5a-dff9-4151-0faa-08d6afcab3e21.jpg'
        },
        {
          id: 66,
          name: 'Tellah',
          gender: 'Male',
          race: 'Human',
          job: 'Sage',
          origin: 'Final Fantasy 04',
          description: "Tellah (テラ Tera, ''Tella'' in the Japanese version) is a playable character in Final Fantasy IV. He is the Great Sage of Mysidia, and a master of both White and Black Magic, but due to his old age, he can only remember a few of his spells. He has a short temper, and will not hesitate to spring into action when something happens to someone or something he is close to.",
          picture: 'https://mooglestorage.blob.core.windows.net/images/Character-78d700c5-b6fc-451e-0fab-08d6afcab3e21.jpg'
        },
        {
          id: 67,
          name: 'Yang Fang Leiden',
          gender: 'Male',
          race: 'Human',
          job: 'Monk',
          origin: 'Final Fantasy 04',
          description: 'Yang Fang Leiden (ヤン・ファン・ライデン Yan Fan Raiden) is a playable character in Final Fantasy IV and its sequel, Final Fantasy IV: The After Years. He is a Monk from the kingdom of Fabul, and is among the highest ranked and most respected of their number. Despite this, he is a humble man, and so does not bask in his glory, but rather tries his best to be respectful. Yang is generally well disciplined, but has trouble with sleeping in, requiring the intervention of his wife and her trusty frying pan to wake him up.',
          picture: 'https://mooglestorage.blob.core.windows.net/images/Character-7420bbe1-5c95-4a3d-0fac-08d6afcab3e21.jpg'
        },
        {
          id: 68,
          name: 'Zemus',
          gender: 'Male',
          race: 'Lunarian',
          job: 'Sorcerer',
          origin: 'Final Fantasy 04',
          description: 'Zemus (ゼムス Zemusu) is the main antagonist of Final Fantasy IV. He is a Lunarian who wants his brethren to come out of their long slumber and populate the Earth. He has formidable mind-control powers that he uses to manipulate various individuals, especially those with Lunarian blood.',
          picture: 'https://mooglestorage.blob.core.windows.net/images/Character-dbfc453d-dcfd-4961-0fad-08d6afcab3e21.jpg'
        },
        {
          id: 69,
          name: 'Zeromus',
          gender: 'Male',
          race: 'Lunarian',
          job: "Zemus' spirit",
          origin: 'Final Fantasy 04',
          description: "Zeromus (ゼロムス Zeromusu) is the final boss of Final Fantasy IV and the spirit and hatred of Zemus incarnate. Zeromus appears with three battle scripts, with only the third being possible to defeat. The party faces him in the Moon. After Fusoya and Golbez defeat Zemus, Zeromus emerges from his corpse, proclaiming itself as Zemus's hatred. Fusoya and Golbez's attacks have no effect on Zeromus, and when Golbez tries to use the Crystal, the creature proclaims evil hearts cannot wield it, and attacks both with Meteor. Everyone left at Mysidia prays for Cecil. Their prayers revive him and his party, and Golbez hands over the Crystal and beckons Cecil to use it. He does so, and Zeromus's invincibility disappears, revealing its true form.",
          picture: 'https://mooglestorage.blob.core.windows.net/images/Character-10f42fe1-80fb-4b61-0fae-08d6afcab3e21.jpg'
        },
        {
          id: 70,
          name: 'Alexander Tycoon',
          gender: 'Male',
          race: 'Human',
          job: 'King',
          origin: 'Final Fantasy 05',
          description: 'Alexander Highwind Tycoon (アレクサンダー・ハイウィンド・タイクーン Arekusandā Haiwindo Taikūn) is a character from Final Fantasy V. He is the king of Tycoon and the father of Lenna and Sarisa. His speech is credited to King in the Anthology release, and King Tycoon in the Advance and later releases.',
          picture: 'https://mooglestorage.blob.core.windows.net/images/Character-8d48a2cb-b714-48a5-0faf-08d6afcab3e21.jpg'
        },
        {
          id: 71,
          name: 'Bartz Klauser',
          gender: 'Male',
          race: 'Human',
          job: 'Wanderer',
          origin: 'Final Fantasy 05',
          description: 'Bartz Klauser (バッツ・クラウザー Battsu Kurauzā), known as Batz in Final Fantasy: Legend of the Crystals, and Butz in Japan, is the main protagonist of Final Fantasy V. His mother died when he was young, and his father died three years ago, but on advice from his father, Bartz decided to explore the world.\r\n\r\nBefore the player names him, Bartz is known as ?, or ??? in the Advance version.',
          picture: 'https://mooglestorage.blob.core.windows.net/images/Character-6f61cba7-1ab3-4231-0fb0-08d6afcab3e21.jpg'
        },
        {
          id: 72,
          name: 'Cid Previa',
          gender: 'Male',
          race: 'Human',
          job: 'Engineer',
          origin: 'Final Fantasy 05',
          description: "Professor Cid Previa (シド・プリヴィア Shido Purivia) is a non-playable character in Final Fantasy V. Cid is an elderly inventor and scholar from Karnak who researches the Crystals. Together with his grandson, Mid, who researches at the Library of the Ancients, Cid is one of the foremost inventors in Bartz's World.\r\n\r\nMeeting Cid in the iOS version earns the player the \"Scientific Genius\" achievement.",
          picture: 'https://mooglestorage.blob.core.windows.net/images/Character-0f552d03-d681-4908-0fb1-08d6afcab3e21.jpg'
        },
        {
          id: 73,
          name: 'Dorgann Klauser',
          gender: 'Male',
          race: 'Human',
          job: 'Traveler',
          origin: 'Final Fantasy 05',
          description: "Dorgann Klauser (ドルガン・クラウザー Dorugan Kurauzā), also known as Drogan Klauser, is a character from Final Fantasy V. He is Bartz Klauser's father.",
          picture: 'https://mooglestorage.blob.core.windows.net/images/Character-ef000a65-466e-4419-0fb2-08d6afcab3e21.jpg'
        },
        {
          id: 74,
          name: 'Enuo',
          gender: 'Male',
          race: 'N/A',
          job: 'Wizard',
          origin: 'Final Fantasy 05',
          description: "Enuo (エヌオー (Enuō) is an unseen character in Final Fantasy V, who appears as a non-playable character and superboss in Final Fantasy V Advance, the Android, iOS and Steam releases. The staff Enuo wields is called Enuo's Scourge, and has appeared as a weapon related to Exdeath since Dissidia Final Fantasy.\r\n\r\nAs he did not appear in the original version, Tetsuya Nomura, who was responsible for monster designs for Final Fantasy V, was brought back to design Enuo's appearance for the Advance edition.",
          picture: 'https://mooglestorage.blob.core.windows.net/images/Character-3523a64f-4dbd-434e-0fb3-08d6afcab3e21.png'
        },
        {
          id: 75,
          name: 'Exdeath',
          gender: 'Male',
          race: 'Tree',
          job: 'Warlock',
          origin: 'Final Fantasy 05',
          description: 'Exdeath (エクスデス Ekusudesu), also known as X-Death, ExDeath, Exodus, or Exodes in Final Fantasy: Legend of the Crystals, is the main antagonist of Final Fantasy V. According to Ghido, despite his knightly appearance, Exdeath was once, and still is to an extent, a tree from the Great Forest of Moore.',
          picture: 'https://mooglestorage.blob.core.windows.net/images/Character-5268dfd9-491e-478a-0fb4-08d6afcab3e21.jpg'
        },
        {
          id: 76,
          name: 'Faris Scherwiz',
          gender: 'Female',
          race: 'Human',
          job: 'Pirate Captain',
          origin: 'Final Fantasy 05',
          description: 'Faris Scherwiz (ファリス・シェルヴィッツ Farisu Sheruvittsu), real name Sarisa Scherwil Tycoon (サリサ・シュヴィール・タイクーン Sarisa Shuvīru Taikūn), is a player character in Final Fantasy V. Faris is a pirate captain who travels with a pirate ship and its crew, accompanied by a sea-dragon named Syldra. The party first encounters Faris when they try to steal the pirate ship, which leads to their adventures as the Warriors of Light.',
          picture: 'https://mooglestorage.blob.core.windows.net/images/Character-7af40a6a-13f7-4980-0fb5-08d6afcab3e21.jpg'
        },
        {
          id: 77,
          name: 'Galuf Halm Baldesion',
          gender: 'Male',
          race: 'Human',
          job: 'Warrior',
          origin: 'Final Fantasy 05',
          description: "Galuf Halm Baldesion (ガラフ・ハルム・バルデシオン Garafu Harumu Barudeshion), also known as Galuf Doe, is a playable character in Final Fantasy V. He is the king of Castle of Bal and one of the four Warriors of Dawn.\r\n\r\nGaluf's full name is never spoken in the game, but the Final Fantasy 20th Anniversary Ultimania identifies him as Galuf Halm Baldesion. He is named Galuf Doe in the Final Fantasy V Advance manual, because Doe is a placeholder name. This may be because Galuf initially suffers from amnesia and doesn't recall his full name, as well as to conceal spoilers about his identity.",
          picture: 'https://mooglestorage.blob.core.windows.net/images/Character-f922435c-caa0-44ef-0fb6-08d6afcab3e21.jpg'
        },
        {
          id: 78,
          name: 'Gilgamesh',
          gender: 'Male',
          race: 'Human',
          job: 'Sword Collector',
          origin: 'Final Fantasy 05',
          description: "Gilgamesh (ギルガメッシュ, Girugamesshu) is a recurring character in the Final Fantasy series. Initially introduced as a antagonist, he has made a number of appearances in remakes and later titles. To date, Gilgamesh has had more appearances in any Final Fantasy media than any other character, and may be the only character to appear in more than one game in the main series (see below). Gilgamesh began a tradition of an incompetent, comical, yet persistent recurring boss for the player to face.\r\n\r\nGilgamesh's role has varied greatly from ally, to enemy, to summon, but for most of his appearances he is a traveling sword collector who battles with a variety of rare and powerful weapons. In most, if not all, of his appearances, Gilgamesh is searching for the legendary sword, Excalibur, but often ends up with the imitation known as Excalipoor. Another of Gilgamesh's trademarks is Genji equipment, which can be stolen from or dropped by him.\r\n\r\nOriginally voiced in Japan by Daisuke Gōri for the Japanese release of Final Fantasy XII before his death on January 17th, 2010, Gilgamesh's voice is provided by Kazuya Nakai as of Dissidia 012 Final Fantasy, by Riki Kitazawa in Final Fantasy XIV, by Kazuya Nakai once more in World of Final Fantasy, and by Kazuhiko Inoue in Final Fantasy XV. In the English versions, Gilgamesh is voiced by John DiMaggio in Final Fantasy XII, Keith Szarabajka in Dissidia 012 Final Fantasy and Final Fantasy Type-0 HD, Kurt Wilson in Final Fantasy XIV and Tom Taylorson in Final Fantasy XV.",
          picture: 'https://mooglestorage.blob.core.windows.net/images/Character-2d9dc629-34c6-438a-0fb7-08d6afcab3e21.jpg'
        },
        {
          id: 79,
          name: 'Helicarnassus',
          gender: 'Female',
          race: 'Demon',
          job: 'N/A',
          origin: 'Final Fantasy 05',
          description: 'Halicarnassus (ハリカルナッソス Harikarunassosu), also known as Halicarnaso, Halikarnassos, Halycanos, or Harikalnasson, is a boss and one of the Demons of the Rift in Final Fantasy V. She is the self-proclaimed master of illusions and master of Dimension Castle. She poses as a helpless damsel captured by Catastrophe. After the heroes defeat the monster, Halicarnassus gives Bartz the kiss of death and scurries off. Later, she approaches the heroes once more and reveals her true form.',
          picture: 'https://mooglestorage.blob.core.windows.net/images/Character-76d23c91-337f-453e-0fb8-08d6afcab3e21.jpg'
        },
        {
          id: 80,
          name: 'Kelger Vlondett',
          gender: 'Male',
          race: 'Lupine',
          job: 'Warrior',
          origin: 'Final Fantasy 05',
          description: 'Kelger Vlondett (ケルガー・ヴロンデット Kerugā Vurondetto), originally romanized as Kelgar, and known as Kelga in the Anthology translation is a non-player character in Final Fantasy V. Kelger is a Warrior of Dawn.\r\n\r\nKelger is an anthropomorphic lupine, appearing closely to a typical depiction of a werewolf. In his official artwork and portrait by Yoshitaka Amano, his fur is in shades of grey, but his in-game sprite depicts him as having fur in a light shade of brown. He wears a gold headpiece with a protruding horn behind his ears. He wears a full-body armor and a yellow cape.',
          picture: 'https://mooglestorage.blob.core.windows.net/images/Character-ee5bc78d-a9fc-4cde-0fb9-08d6afcab3e21.jpg'
        },
        {
          id: 81,
          name: 'Krile Mayer Baldesion',
          gender: 'Female',
          race: 'Human',
          job: 'Princess',
          origin: 'Final Fantasy 05',
          description: 'Krile Mayer Baldesion (クルル・マイア・バルデシオン Kururu Maia Barudeshion), also known Kururu, is a protagonist from Final Fantasy V. She is the granddaughter of Galuf Halm Baldesion and the princess of Bal Castle. She can talk to moogles and chocobos as well as tame and befriend wind drakes. She keeps a pet moogle in her room and a wind drake on her balcony. When she first appears, she is known as Girl.',
          picture: 'https://mooglestorage.blob.core.windows.net/images/Character-e7a2cb03-b86d-4b4d-0fba-08d6afcab3e21.jpg'
        },
        {
          id: 82,
          name: 'Lenna Tycoon',
          gender: 'Female',
          race: 'Human',
          job: 'Princess/Queen',
          origin: 'Final Fantasy 05',
          description: "Lenna Charlotte Tycoon (レナ・シャルロット・タイクーン Rena Sharurotto Taikūn), also known as Reina, is a playable character in Final Fantasy V. Lenna is the daughter of King Tycoon and heir to the throne of Tycoon. She would gladly put herself at risk for the sake of others, and can be impulsive. She loves dragons and puts herself in danger to save the life of a wind drake while she is a Warrior of Light.\r\n\r\nLenna's direct descendant is Queen Lenna in Final Fantasy: Legend of the Crystals.",
          picture: 'https://mooglestorage.blob.core.windows.net/images/Character-5aa92206-61c7-4419-0fbb-08d6afcab3e21.jpg'
        },
        {
          id: 83,
          name: 'Magissa',
          gender: 'Female',
          race: 'Human',
          job: 'Hunter',
          origin: 'Final Fantasy 05',
          description: 'Magissa (マギサ Magisa) is a boss in Final Fantasy V. A hunter, she travels around with her husband Forza, looking for things that will give a good bounty. Seeing Princess Lenna, she attacks, hoping to take the princess in along with her Wind Drake.',
          picture: 'https://mooglestorage.blob.core.windows.net/images/Character-6f41a503-7291-4201-0fbc-08d6afcab3e21.jpg'
        },
        {
          id: 84,
          name: 'Mid Previa',
          gender: 'Male',
          race: 'Human',
          job: 'Engineer',
          origin: 'Final Fantasy 05',
          description: 'Mid Previa (ミド・プリヴィア Mido Purivia) is the grandson of Cid Previa in Final Fantasy V. Cid raised him after his father died in an experiment three years prior to the events of the game. He looks up to Cid, who taught him to never quit, and became as interested in science as Cid himself.',
          picture: 'https://mooglestorage.blob.core.windows.net/images/Character-ec54611c-f7df-429b-0fbd-08d6afcab3e21.jpg'
        },
        {
          id: 85,
          name: 'Xezat Surgate',
          gender: 'Male',
          race: 'Human',
          job: 'Warrior',
          origin: 'Final Fantasy 05',
          description: 'Xezat Matias Surgate (ゼザ・マティアス・サーゲイト Zeza Matiasu Sāgeito), originally romanized as Zezae, and known as Zeza in the Anthology and unofficial RPGe translations, is a non-player character in Final Fantasy V. Xezat is one of the four Warriors of Dawn.\r\n\r\nXezat has blond hair. He also sports a beard and a mustache. In his official Yoshitaka Amano artwork, he wears a blue and white full body armor and has his sword sheathed by his left leg. His helmet features two horns. In his field sprite, his armor and helmet is mostly of the light shade of green.',
          picture: 'https://mooglestorage.blob.core.windows.net/images/Character-c8219a45-b43f-4dc8-0fbe-08d6afcab3e21.jpg'
        },
        {
          id: 86,
          name: 'Banon',
          gender: 'Male',
          race: 'Human',
          job: 'Leader',
          origin: 'Final Fantasy 06',
          description: "Banon (バナン Banan, lit. Bannan) is a temporary playable character in Final Fantasy VI. He is the leader of the Returners, a secret resistance movement formed against the Gestahlian Empire.\r\n\r\nYoshitaka Amano's artwork shows Banon with a mass of shaggy brown hair and a beard, wearing green clothing and a layered cape that is brown, green, and orange from outside to inside. He wears black pauldrons, red bracers, and a wide belt with a zebra-striped sash underneath. His boots are dark brown. His in-game sprite simplifies this look as well as recoloring his trousers red and his boots green.",
          picture: 'https://mooglestorage.blob.core.windows.net/images/Character-61841a89-7b3a-4aba-0fbf-08d6afcab3e21.jpg'
        },
        {
          id: 87,
          name: 'Celes Chere',
          gender: 'Female',
          race: 'Human',
          job: 'Rune Knight',
          origin: 'Final Fantasy 06',
          description: "General Celes Chere (セリス・シェール Serisu Shēru), also spelled as Celes Chère, is a playable character in Final Fantasy VI. A genetically enhanced Magitek Knight initially serving as a general of the Gestahlian Empire, she becomes disillusioned with the empire and turns her back on them to join the Returners. Celes is Locke Cole's love interest, and works as a foil to Terra Branford, their character development and abilities paralleling each other.",
          picture: 'https://mooglestorage.blob.core.windows.net/images/Character-05b10cd6-5488-42d2-0fc0-08d6afcab3e21.png'
        },
        {
          id: 88,
          name: 'Cid Del Norte Marquez',
          gender: 'Male',
          race: 'Human',
          job: 'Engineer',
          origin: 'Final Fantasy 06',
          description: "Cid Del Norte Marquez (シド・デル・ノルテ・マルケズ Shido Deru Norute Marukezu) is a non-player character from Final Fantasy VI. He is the chief genetic engineer of the Gestahlian Empire who invented the Magitek process. Born in the fifth year of the nation of Vector, Cid is a member of the Marquez bloodline of patriotic scientists of the northern state of which became Vector in the war of fifty years before the game's beginning. His Japanese surname is alternately spelled as Del Norte Marguez or Marguz. Aside from working in the Magitek Research Facility, Cid cultivated a veritable collection of exotic flowers in a greenhouse, his favorite being roses. As Celes Chere grew, she would help him in the greenhouse, where Cid named his favorite flower after her and eventually gave it to her to adorn her quarters.",
          picture: 'https://mooglestorage.blob.core.windows.net/images/Character-4ac06ef1-dfdc-4bd5-0fc1-08d6afcab3e21.png'
        },
        {
          id: 89,
          name: 'Cyan Garamonde',
          gender: 'Male',
          race: 'Human',
          job: 'Swordsman',
          origin: 'Final Fantasy 06',
          description: "Cyan Garamonde (カイエン・ガラモンド Kaien Garamondo, ''Cayenne Garamonde'' in the Japanese version) is a playable character in Final Fantasy VI. He is a Samurai and one of the finest and most noble soldiers of the kingdom of Doma. He is husband to Elayne, and father to Owain.",
          picture: 'https://mooglestorage.blob.core.windows.net/images/Character-5f273bc6-3cd0-4808-0fc2-08d6afcab3e21.png'
        },
        {
          id: 90,
          name: 'Dadaluma',
          gender: 'Male',
          race: 'Human',
          job: 'N/A',
          origin: 'Final Fantasy 06',
          description: 'Dadaluma (ダダルマー Dadarumā) is a boss in Final Fantasy VI. He appears in Zozo, guarding the door to the room leading to Terra and the esper Ramuh. He says the opposite of what he truly means, attacking the party when he promised to let them pass.',
          picture: 'https://mooglestorage.blob.core.windows.net/images/Character-67250106-7251-4c07-0fc3-08d6afcab3e21.jpg'
        },
        {
          id: 91,
          name: 'Edgar Roni Figaro',
          gender: 'Male',
          race: 'Human',
          job: 'Machinist',
          origin: 'Final Fantasy 06',
          description: 'Edgar Roni Figaro (エドガー・ロニ・フィガロ Edogā Roni Figaro) is a playable character in Final Fantasy VI. He is the king of Figaro Castle and the older twin brother of Sabin Rene Figaro. He is a master engineer, which leads him to create odd and unusual weapons, mostly as a hobby. Edgar often redecorates his room and is flirtatious with women. Before his name is introduced, his dialogue is credited to King.',
          picture: 'https://mooglestorage.blob.core.windows.net/images/Character-e9b25625-c521-4728-0fc4-08d6afcab3e21.png'
        },
        {
          id: 92,
          name: 'Gau',
          gender: 'Male',
          race: 'Human',
          job: 'Feral youth',
          origin: 'Final Fantasy 06',
          description: "Gau (ガウ) is a playable character in Final Fantasy VI. He is a feral child who grew up on the Veldt. Gau has the unique skill to leap into formations of monsters and learn their attack patterns. Gau is one of the few party members with no personal story tied to the central plot, and doesn't appear to have a reason to join the party beyond his attachment to Sabin and Cyan.",
          picture: 'https://mooglestorage.blob.core.windows.net/images/Character-a0bc9416-a1bf-489a-0fc5-08d6afcab3e21.png'
        },
        {
          id: 93,
          name: 'Gestahl',
          gender: 'Male',
          race: 'Human',
          job: 'Emperor',
          origin: 'Final Fantasy 06',
          description: "Emperor Gestahl (ガストラ Gasutora, Gastra) is the dictator of the Gestahlian Empire in Final Fantasy VI, and at first appears to be the game's primary antagonist.",
          picture: 'https://mooglestorage.blob.core.windows.net/images/Character-98151ee3-4b4a-44d8-0fc6-08d6afcab3e21.png'
        },
        {
          id: 94,
          name: 'Gogo',
          gender: 'N/A',
          race: 'N/A',
          job: 'Mime',
          origin: 'Final Fantasy 06',
          description: 'Gogo (ゴゴ) is a playable character in Final Fantasy VI. They are an optional character, only found in the World of Ruin, and is a skilled mime.',
          picture: 'https://mooglestorage.blob.core.windows.net/images/Character-f53ab5a0-e456-43df-0fc7-08d6afcab3e21.png'
        },
        {
          id: 95,
          name: 'Kefka Palazzo',
          gender: 'Male',
          race: 'Human',
          job: 'General',
          origin: 'Final Fantasy 06',
          description: "Kefka Palazzo (ケフカ·パラッツォ Kefuka Parattso, Cefca Palazzo in ther Japanese version) is the main antagonist of Final Fantasy VI. The prototype to the Magitek Knights, Kefka acts as Emperor Gestahl's court mage carrying out his orders, but behind his back schemes for his own ends. While previous antagonists in the Final Fantasy series were distant, cold, ruthless, and bent on their goals, Kefka is loud, short-tempered, maniacal, and destructive. His popularity among Final Fantasy fans, at least outside Japan, as an antagonist is rivaled only by Sephiroth from Final Fantasy VII. Kefka is known for his many one-liners, his final almighty appearance (which has become something of a tradition in the series), as well as his sociopathic hatred of everything in existence. Kefka's defining character trait is his laughter, a high-pitched whooping cackle. In large part because of his dark humor and jester attire, Kefka was also given the nickname ''the psycho clown'' by fans, with this eventually becoming official with his CollectaCard description in Theatrhythm Final Fantasy.",
          picture: 'https://mooglestorage.blob.core.windows.net/images/Character-13fd842f-9b8b-44f0-0fc8-08d6afcab3e21.jpg'
        },
        {
          id: 96,
          name: 'Leo Cristophe',
          gender: 'Male',
          race: 'Human',
          job: 'General',
          origin: 'Final Fantasy 06',
          description: "Leo Cristophe (レオ・クリストフ Reo Kurisutofu) is a temporary playable character in Final Fantasy VI. He is a noble and honorable man who fights for what he believes in. General Leo is the finest swordsman in the Gestahlian Empire, and one of Emperor Gestahl's most trusted men. He prefers negotiation over combat, in contrast to Kefka Palazzo.",
          picture: 'https://mooglestorage.blob.core.windows.net/images/Character-4d963f47-23b1-4121-0fc9-08d6afcab3e21.jpg'
        },
        {
          id: 97,
          name: 'Locke Cole',
          gender: 'Male',
          race: 'Human',
          job: 'Adventurer',
          origin: 'Final Fantasy 06',
          description: "Locke Cole (ロック・コール Rokku Kōru, also romanized as ''Lock Cole'') is a playable character from Final Fantasy VI. He is a thief, but prefers to be called a treasure hunter. Locke is introduced as a contact, spy, and saboteur for the Returners, the resistance group to the Gestahlian Empire.",
          picture: 'https://mooglestorage.blob.core.windows.net/images/Character-cbf63507-96e2-440a-0fca-08d6afcab3e21.png'
        },
        {
          id: 98,
          name: 'Maduin',
          gender: 'Male',
          race: 'Esper',
          job: 'Esper',
          origin: 'Final Fantasy 06',
          description: "Maduin (マディン Madin, lit. Mael Duin) is Terra's father, an esper, and temporary playable character in Final Fantasy VI. He is the guardian of the Esper World, overseeing the gateway between the esper realm and the realm of humans. The party acquires his magicite to learn spells from.\r\n\r\nMaduin is a humanoid esper with long sea-greenish-gray hair on his field sprite, though on his summon sprite it's grayish-violet. Both field and summon sprites depict him with his hair tied up in a ponytail, and tufts of fur the same color as his hair on his shoulders. He has a muscular figure, with his summon sprite depicts him with a grayish-tangelo skin tone, and his field sprite with light gamboge skin. His summon sprite shows him with clawed fingers and digigrade legs with long talons on his toes. Maduin wears a dark vermilion loincloth with an amber sash in his summon sprite, and wears a pendant he gives to Madeline when they meet. On his field sprite his eyes are moderate indigo. His summon sprite resembles that of the Gigas from Final Fantasy V, and may be a heavily modified Gigas sprite.",
          picture: 'https://mooglestorage.blob.core.windows.net/images/Character-72f2fad3-8860-4754-0fcb-08d6afcab3e21.png'
        },
        {
          id: 99,
          name: 'Mog',
          gender: 'Male',
          race: 'Moogle',
          job: 'Dancer/Geomancer',
          origin: 'Final Fantasy 06',
          description: "Mog (モグ Mogu) is a playable character in Final Fantasy VI. A moogle Dancer/Geomancer, he also acts as one of the game's tutorial presenters with Kappa the Imp, and is the character used to select a playable party during the scenario the team splits up. He lives deep in the Narshe Mines. Mog is fondly remembered as the first playable moogle in the Final Fantasy series, as well as the first moogle to speak human language, a discovery that shocks the party when he thanks them for saving him.",
          picture: 'https://mooglestorage.blob.core.windows.net/images/Character-6b546ebc-3593-4bd0-0fcc-08d6afcab3e21.png'
        },
        {
          id: 100,
          name: 'Relm Arrowny',
          gender: 'Female',
          race: 'Human',
          job: 'Pictomancer',
          origin: 'Final Fantasy 06',
          description: "Relm Arrowny (リルム・アローニィ Rirumu Arōnii) is a playable character in Final Fantasy VI. She is a talented artist, and she can make her paintings come alive with magic. Scenes with Relm and Interceptor upon the party's first meeting further imply that she is Shadow's daughter, supporting flashbacks during Shadow's dream sequences. A relic special to Relm, the Memento Ring, directly references her departed mother – Shadow is the only other character capable of equipping this item.",
          picture: 'https://mooglestorage.blob.core.windows.net/images/Character-664d47d5-53f5-4ece-0fcd-08d6afcab3e21.png'
        }
      ])
    })
}
