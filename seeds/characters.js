exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('characters').del()
    .then(function () {
      // Inserts seed entries
      return knex('characters').insert([
        { id: 1,
          name: 'Astos',
          age: '??',
          gender: 'Male',
          race: 'Dark Elf',
          job: 'King',
          height: '??',
          weight: '??',
          origin: 'Final Fantasy 01',
          description: 'Astos (アストス Asutosu) is the evil king of the Dark Elves in the original Final Fantasy. He is fought as a boss in the Western Keep where he is found disguised as a king. In Final Fantasy I & II: Dawn of Souls and future remakes, Astos appears in the Whisperwind Cove. There is a room with flame-like spirits which must be calmed so they can go rest in peace. One of those souls is Astos, seeking revenge and attacking the party when he encounters them. After his soul is destroyed, he curses the Warriors of Light before fading away.',
          picture: 'https://vignette.wikia.nocookie.net/finalfantasy/images/b/ba/Astos_PSP.png/revision/latest?cb=20121014151155'
        },
        {
          id: 2,
          name: 'Bikke',
          age: '??',
          gender: 'Male',
          race: 'Human',
          job: 'Pirate',
          height: '??',
          weight: '??',
          origin: 'Final Fantasy 01',
          description: "Bikke's (海賊ビッケ Kaizoku Bikke) NES appearance is quite simplistic due to console limitations: black eye patch over his left eye, black captain's hat with crossed blue swords, and cyan vest, pants, and shoes. In the remakes which were on consoles with greater color depth his appearance was improved upon: he dons a black eye patch over his left eye, a black captain's hat with gold outlines, crossed yellow blades and green buttons on its front. His looks completes purple cloak with gold outlines, purple pants, and red jacket and boots.",
          picture: 'https://vignette.wikia.nocookie.net/finalfantasy/images/2/23/FFD_Bikke.png/revision/latest?cb=20150713054947'
        },
        {
          id: 3,
          name: 'Black Mage',
          age: '??',
          gender: '??',
          race: 'Human',
          job: 'Black Mage/Black Wizard',
          height: '??',
          weight: '??',
          origin: 'Final Fantasy 01',
          description: 'A specialist in Black Magic, but is physically frail. Becomes the Black Wizard who can cast Flare (NUKE in the original North American localization), one of the two damaging spells that retain full effectiveness against the final boss (the White Wizard can cast Holy, but it is less powerful).',
          picture: 'https://vignette.wikia.nocookie.net/finalfantasy/images/7/7a/Blackmagesffix.jpg/revision/latest/scale-to-width-down/350?cb=20111127191319'
        }
      ])
    })
}
