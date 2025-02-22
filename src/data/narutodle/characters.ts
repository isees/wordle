const characters = [
  {
    playerId: 0,
    playerName: "Minato Namikaze",
    gender: "Male",
    affiliations: [
      "Konoha"
    ],
    kekkeiGenkais: [
      {
        name: "None"
      }
    ],
    kekkeiGenkaiTypes: [
      "None"
    ],
    ninjaRank: "Kage",
    age: 24,
    debut: 239,
    classifications: [
      "Jinchūriki",
      "Sage"
    ],
    species: null,
    natureTypes: [
      "Fire",
      "Wind",
      "Lightning"
    ],
    status: "Deceased",
    occupation: "Hokage",
    alias: null,
    jutsusTypes: [
      "Ninjutsu"
    ],
  },
  {
    playerId: 1,
    playerName: "Itachi Uchiha",
    gender: "Male",
    affiliations: [
      "Konoha",
      "Akatsuki"
    ],
    kekkeiGenkais: [
      {
        name: "Sharingan", type: "Dôjutsu"
      },
      {
        name: "Mangekyō Sharingan", type: "Dôjutsu"
      },
    ],
    kekkeiGenkaiTypes: [
      "Dôjutsu"
    ],
    ninjaRank: "Anbu",
    age: 21,
    debut: 139,
    classifications: [
      "Missing-nin"
    ],
    species: null,
    natureTypes: [
      "Fire",
      "Wind",
      "Water"
    ],
    status: "Deceased",
    occupation: "Anbu Captain",
    alias: null,
    jutsusTypes: [
      "Ninjutsu",
      "Genjutsu",
      "Taijutsu"
    ],
  },
  {
    playerId: 2,
    playerName: "Naruto Uzumaki",
    gender: "Male",
    affiliations: [
      "Konoha"
    ],
    kekkeiGenkais: [
      {
        name: "Lava Release", type: "Nature Transformation"
      },
      {
        name: "Magnet Release", type: "Nature Transformation"
      },
      {
        name: "Boil Release", type: "Nature Transformation"
      },
    ],
    kekkeiGenkaiTypes: [
      "Nature Transformation"
    ],
    ninjaRank: "Genin",
    age: 17,
    debut: 1,
    classifications: [
      "Jinchūriki",
      "Sage"
    ],
    species: null,
    natureTypes: [
      "Wind",
      "Lightning",
      "Earth",
      "Water",
      "Fire"
    ],
    status: "Alive",
    occupation: "Hokage",
    alias: "Hokage",
    jutsusTypes: [
      "Ninjutsu",
      "Taijutsu"
    ],
  },
  {
    playerId: 3,
    playerName: "Kakashi Hatake",
    gender: "Male",
    affiliations: [
      "Konoha"
    ],
    kekkeiGenkais: [
      {
        name: "Sharingan", type: "Dôjutsu"
      },
      {
        name: "Mangekyō Sharingan", type: "Dôjutsu"
      },
    ],
    kekkeiGenkaiTypes: [
      "Dôjutsu"
    ],
    ninjaRank: "Jōnin",
    age: 31,
    debut: 3,
    classifications: [
      "None"
    ],
    species: null,
    natureTypes: [
      "Lightning",
      "Earth",
      "Water",
      "Fire",
      "Wind"
    ],
    status: "Alive",
    occupation: "Anbu Captain",
    alias: "Hokage",
    jutsusTypes: [
      "Ninjutsu",
      "Genjutsu",
      "Taijutsu"
    ],
  },
  {
    playerId: 4,
    playerName: "Sakura Haruno",
    gender: "Female",
    affiliations: [
      "Konoha"
    ],
    kekkeiGenkais: [
      {
        name: "None"
      }
    ],
    kekkeiGenkaiTypes: [
      "None"
    ],
    ninjaRank: "Chūnin",
    age: 17,
    debut: 3,
    classifications: [
      "Medical-nin"
    ],
    species: null,
    natureTypes: [
      "Earth",
      "Water",
      "Fire"
    ],
    status: "Alive",
    occupation: "Director of Konoha Children Mental Health Clinic",
    alias: null,
    jutsusTypes: [
      "Ninjutsu",
      "Taijutsu"
    ],
  },
  {
    playerId: 5,
    playerName: "Shisui Uchiha",
    gender: "Male",
    affiliations: [
      "Konoha"
    ],
    kekkeiGenkais: [
      {
        name: "Sharingan", type: "Dôjutsu"
      },
      {
        name: "Mangekyō Sharingan", type: "Dôjutsu"
      },
    ],
    kekkeiGenkaiTypes: [
      "Dôjutsu"
    ],
    ninjaRank: "Anbu",
    age: null,
    debut: 459,
    classifications: [
      "None"
    ],
    species: null,
    natureTypes: [
      "Fire",
      "Wind",
      "Lightning"
    ],
    status: "Deceased",
    occupation: "None",
    alias: null,
    jutsusTypes: [
      "Ninjutsu",
      "Genjutsu",
      "Taijutsu"
    ],
  },
  {
    playerId: 6,
    playerName: "Sakumo Hatake",
    gender: "Male",
    affiliations: [
      "Konoha"
    ],
    kekkeiGenkais: [
      {
        name: "None"
      }
    ],
    kekkeiGenkaiTypes: [
      "None"
    ],
    ninjaRank: "Jōnin",
    age: null,
    debut: 425,
    classifications: [
      "None"
    ],
    species: null,
    natureTypes: [
      "None"
    ],
    status: "Deceased",
    occupation: "None",
    alias: null,
    jutsusTypes: [
      "Ninjutsu"
    ],
  },
  {
    playerId: 7,
    playerName: "Madara Uchiha",
    gender: "Male",
    affiliations: [
      "Konoha",
      "Akatsuki"
    ],
    kekkeiGenkais: [
      {
        name: "Sharingan", type: "Dôjutsu"
      },
      {
        name: "Eternal Mangekyō Sharingan", type: "Dôjutsu"
      },
      {
        name: "Rinnegan", type: "Dôjutsu"
      },
      {
        name: "Wood Release", type: "Nature Transformation"
      },
      {
        name: "Storm Release", type: "Nature Transformation"
      },
    ],
    kekkeiGenkaiTypes: [
      "Dôjutsu",
      "Nature Transformation"
    ],
    ninjaRank: "None",
    age: null,
    debut: 370,
    classifications: [
      "Jinchūriki",
      "Missing-nin",
      "Sage"
    ],
    species: null,
    natureTypes: [
      "Fire",
      "Wind",
      "Lightning",
      "Earth",
      "Water"
    ],
    status: "Deceased",
    occupation: "Co-founder of Konohagakure",
    alias: null,
    jutsusTypes: [
      "Ninjutsu",
      "Genjutsu",
      "Taijutsu"
    ],
  },
  {
    playerId: 8,
    playerName: "Obito Uchiha",
    gender: "Male",
    affiliations: [
      "Konoha",
      "Akatsuki",
      "Kiri"
    ],
    kekkeiGenkais: [
      {
        name: "Sharingan", type: "Dôjutsu"
      },
      {
        name: "Mangekyō Sharingan", type: "Dôjutsu"
      },
      {
        name: "Rinnegan", type: "Dôjutsu"
      },
      {
        name: "Wood Release", type: "Nature Transformation"
      },
    ],
    kekkeiGenkaiTypes: [
      "Dôjutsu",
      "Nature Transformation"
    ],
    ninjaRank: "Chūnin",
    age: 31,
    debut: 239,
    classifications: [
      "Jinchūriki",
      "Missing-nin"
    ],
    species: null,
    natureTypes: [
      "Fire",
      "Wind",
      "Lightning",
      "Earth",
      "Water"
    ],
    status: "Deceased",
    occupation: "Leader of Akatsuki",
    alias: null,
    jutsusTypes: [
      "Ninjutsu",
      "Genjutsu",
      "Taijutsu"
    ],
  },
  {
    playerId: 9,
    playerName: "Hinata Hyuga",
    gender: "Female",
    affiliations: [
      "Konoha"
    ],
    kekkeiGenkais: [
      {
        name: "Byakugan", type: "Dôjutsu"
      }
    ],
    kekkeiGenkaiTypes: [
      "Dôjutsu"
    ],
    ninjaRank: "Chūnin",
    age: 16,
    debut: 34,
    classifications: [
      "None"
    ],
    species: null,
    natureTypes: [
      "Fire",
      "Lightning"
    ],
    status: "Alive",
    occupation: "Heiress of the Hyūga Clan",
    alias: null,
    jutsusTypes: [
      "Taijutsu",
      "Ninjutsu"
    ],
  },
  {
    playerId: 10,
    playerName: "Jiraiya",
    gender: "Male",
    affiliations: [
      "Konoha"
    ],
    kekkeiGenkais: [
      {
        name: "None"
      }
    ],
    kekkeiGenkaiTypes: [
      "None"
    ],
    ninjaRank: "Jōnin",
    age: 54,
    debut: 90,
    classifications: [
      "Sage"
    ],
    species: null,
    natureTypes: [
      "Fire",
      "Wind",
      "Earth",
      "Water"
    ],
    status: "Deceased",
    occupation: "Writer",
    alias: null,
    jutsusTypes: [
      "Ninjutsu"
    ],
  },
  {
    playerId: 11,
    playerName: "Sasuke Uchiha",
    gender: "Male",
    affiliations: [
      "Konoha",
      "Oto",
      "Akatsuki"
    ],
    kekkeiGenkais: [
      {
        name: "Sharingan", type: "Dôjutsu"
      },
      {
        name: "Eternal Mangekyō Sharingan", type: "Dôjutsu"
      },
      {
        name: "Rinnegan", type: "Dôjutsu"
      },
    ],
    kekkeiGenkaiTypes: [
      "Dôjutsu"
    ],
    ninjaRank: "Genin",
    age: 17,
    debut: 3,
    classifications: [
      "Missing-nin"
    ],
    species: null,
    natureTypes: [
      "Lightning",
      "Fire",
      "Wind",
      "Earth",
      "Water"
    ],
    status: "Alive",
    occupation: "Head of the Uchiha Clan",
    alias: null,
    jutsusTypes: [
      "Ninjutsu",
      "Genjutsu",
      "Taijutsu"
    ],
  },
  {
    playerId: 12,
    playerName: "Shikamaru Nara",
    gender: "Male",
    affiliations: [
      "Konoha"
    ],
    kekkeiGenkais: [
      {
        name: "None"
      }
    ],
    kekkeiGenkaiTypes: [
      "None"
    ],
    ninjaRank: "Chūnin",
    age: 17,
    debut: 34,
    classifications: [
      "None"
    ],
    species: null,
    natureTypes: [
      "Fire",
      "Earth"
    ],
    status: "Alive",
    occupation: "Hokage's Chief Aide",
    alias: null,
    jutsusTypes: [
      "Ninjutsu"
    ],
  },
  {
    playerId: 13,
    playerName: "Neji Hyuga",
    gender: "Male",
    affiliations: [
      "Konoha"
    ],
    kekkeiGenkais: [
      {
        name: "Byakugan", type: "Dôjutsu"
      }
    ],
    kekkeiGenkaiTypes: [
      "Dôjutsu"
    ],
    ninjaRank: "Jōnin",
    age: 18,
    debut: 36,
    classifications: [
      "None"
    ],
    species: null,
    natureTypes: [
      "Fire",
      "Earth",
      "Water"
    ],
    status: "Deceased",
    occupation: "None",
    alias: null,
    jutsusTypes: [
      "Ninjutsu",
      "Taijutsu"
    ],
  },
  {
    playerId: 14,
    playerName: "Tobirama Senju",
    gender: "Male",
    affiliations: [
      "Konoha"
    ],
    kekkeiGenkais: [
      {
        name: "None"
      }
    ],
    kekkeiGenkaiTypes: [
      "None"
    ],
    ninjaRank: "Kage",
    age: null,
    debut: 118,
    classifications: [
      "None"
    ],
    species: null,
    natureTypes: [
      "Water",
      "Fire",
      "Wind",
      "Lightning",
      "Earth"
    ],
    status: "Deceased",
    occupation: "Hokage",
    alias: null,
    jutsusTypes: [
      "Ninjutsu",
      "Genjutsu",
      "Taijutsu"
    ],
  },
  {
    playerId: 15,
    playerName: "Hashirama Senju",
    gender: "Male",
    affiliations: [
      "Konoha"
    ],
    kekkeiGenkais: [
      {
        name: "Wood Release", type: "Nature Transformation"
      },
    ],
    kekkeiGenkaiTypes: [
      "Nature Transformation"
    ],
    ninjaRank: "Kage",
    age: null,
    debut: 118,
    classifications: [
      "Sage"
    ],
    species: null,
    natureTypes: [
      "Earth",
      "Water",
      "Fire",
      "Wind",
      "Lightning"
    ],
    status: "Deceased",
    occupation: "Head of the Senju clan",
    alias: "Hokage",
    jutsusTypes: [
      "Ninjutsu",
      "Genjutsu",
      "Taijutsu"
    ],
  },
  {
    playerId: 16,
    playerName: "Deidara",
    gender: "Male",
    affiliations: [
      "Iwa",
      "Akatsuki"
    ],
    kekkeiGenkais: [
      {
        name: "Explosion Release", type: "Nature Transformation"
      },
    ],
    kekkeiGenkaiTypes: [
      "Nature Transformation"
    ],
    ninjaRank: "None",
    age: 19,
    debut: 247,
    classifications: [
      "Missing-nin",
      "Mercenary Ninja"
    ],
    species: null,
    natureTypes: [
      "Earth",
      "Lightning"
    ],
    status: "Deceased",
    occupation: "Terrorist Bomber",
    alias: null,
    jutsusTypes: [
      "Ninjutsu"
    ],
  },
  {
    playerId: 17,
    playerName: "Gaara",
    gender: "Male",
    affiliations: [
      "Suna"
    ],
    kekkeiGenkais: [
      {
        name: "Magnet Release", type: "Nature Transformation"
      },
    ],
    kekkeiGenkaiTypes: [
      "Nature Transformation"
    ],
    ninjaRank: "Kage",
    age: 17,
    debut: 35,
    classifications: [
      "Jinchūriki"
    ],
    species: null,
    natureTypes: [
      "Wind",
      "Earth",
      "Lightning"
    ],
    status: "Alive",
    occupation: "Kazekage",
    alias: "Kazekage",
    jutsusTypes: [
      "Ninjutsu",
      "Taijutsu"
    ],
  },
  {
    playerId: 18,
    playerName: "Sasori",
    gender: "Male",
    affiliations: [
      "Suna",
      "Akatsuki"
    ],
    kekkeiGenkais: [
      {
        name: "None"
      }
    ],
    kekkeiGenkaiTypes: [
      "None"
    ],
    ninjaRank: "None",
    age: 35,
    debut: 247,
    classifications: [
      "Missing-nin"
    ],
    species: null,
    natureTypes: [
      "None"
    ],
    status: "Deceased",
    occupation: "None",
    alias: null,
    jutsusTypes: [
      "Ninjutsu"
    ],
  },
  {
    playerId: 19,
    playerName: "Might Guy",
    gender: "Male",
    affiliations: [
      "Konoha"
    ],
    kekkeiGenkais: [
      {
        name: "None"
      }
    ],
    kekkeiGenkaiTypes: [
      "None"
    ],
    ninjaRank: "Jōnin",
    age: 31,
    debut: 38,
    classifications: [
      "None"
    ],
    species: null,
    natureTypes: [
      "Fire",
      "Lightning"
    ],
    status: "Alive",
    occupation: "Academy Teacher",
    alias: null,
    jutsusTypes: [
      "Ninjutsu",
      "Taijutsu"
    ],
  },
  {
    playerId: 20,
    playerName: "Hidan",
    gender: "Male",
    affiliations: [
      "Yu",
      "Akatsuki"
    ],
    kekkeiGenkais: [
      {
        name: "None"
      }
    ],
    kekkeiGenkaiTypes: [
      "None"
    ],
    ninjaRank: "None",
    age: 22,
    debut: 312,
    classifications: [
      "Missing-nin"
    ],
    species: null,
    natureTypes: [
      "None"
    ],
    status: "Alive",
    occupation: "None",
    alias: null,
    jutsusTypes: [
      "Ninjutsu"
    ],
  },
  {
    playerId: 21,
    playerName: "Rock Lee",
    gender: "Male",
    affiliations: [
      "Konoha"
    ],
    kekkeiGenkais: [
      {
        name: "None"
      }
    ],
    kekkeiGenkaiTypes: [
      "None"
    ],
    ninjaRank: "Chūnin",
    age: 17,
    debut: 36,
    classifications: [
      "None"
    ],
    species: null,
    natureTypes: [
      "None"
    ],
    status: "Alive",
    occupation: "Chūnin Exams Proctor",
    alias: null,
    jutsusTypes: [
      "Taijutsu"
    ],
  },
  {
    playerId: 22,
    playerName: "Kushina Uzumaki",
    gender: "Female",
    affiliations: [
      "Uzushio",
      "Konoha"
    ],
    kekkeiGenkais: [
      {
        name: "None"
      }
    ],
    kekkeiGenkaiTypes: [
      "None"
    ],
    ninjaRank: "None",
    age: 24,
    debut: 382,
    classifications: [
      "Jinchūriki"
    ],
    species: null,
    natureTypes: [
      "Wind",
      "Water"
    ],
    status: "Deceased",
    occupation: "None",
    alias: null,
    jutsusTypes: [
      "Ninjutsu"
    ],
  },
  {
    playerId: 23,
    playerName: "Orochimaru",
    gender: "Male",
    affiliations: [
      "Konoha",
      "Akatsuki",
      "Oto"
    ],
    kekkeiGenkais: [
      {
        name: "Jūgo's Clan's Kekkei Genkai", type: "Body Enhancement"
      },
      {
        name: "Sakon and Ukon's Kekkei Genkai",
        type: "Body Enhancement",
      },
      {
        name: "Shikotsumyaku", type: "Body Enhancement"
      },
      {
        name: "Wood Release", type: "Nature Transformation"
      },
    ],
    kekkeiGenkaiTypes: [
      "Body Enhancement",
      "Nature Transformation"
    ],
    ninjaRank: "Anbu",
    age: 54,
    debut: 45,
    classifications: [
      "Missing-nin"
    ],
    species: null,
    natureTypes: [
      "Wind",
      "Lightning",
      "Earth",
      "Water",
      "Fire"
    ],
    status: "Alive",
    occupation: "Founder and Leader of Otogakure",
    alias: null,
    jutsusTypes: [
      "Ninjutsu",
      "Taijutsu"
    ],
  },
  {
    playerId: 24,
    playerName: "Kurama",
    gender: "Other",
    affiliations: [
      "Konoha"
    ],
    kekkeiGenkais: [
      {
        name: "None"
      }
    ],
    kekkeiGenkaiTypes: [
      "None"
    ],
    ninjaRank: "None",
    age: null,
    debut: 1,
    classifications: [
      "Tailed Beast",
      "Sage"
    ],
    species: "Kitsune",
    natureTypes: [
      "Fire",
      "Wind"
    ],
    status: "Alive",
    occupation: "None",
    alias: null,
    jutsusTypes: [
      "Ninjutsu"
    ],
  },
  {
    playerId: 25,
    playerName: "Zabuza Momochi",
    gender: "Male",
    affiliations: [
      "Kiri"
    ],
    kekkeiGenkais: [
      {
        name: "None"
      }
    ],
    kekkeiGenkaiTypes: [
      "None"
    ],
    ninjaRank: "Anbu",
    age: 26,
    debut: 10,
    classifications: [
      "Missing-nin",
      "Mercenary Ninja"
    ],
    species: null,
    natureTypes: [
      "Water"
    ],
    status: "Deceased",
    occupation: "None",
    alias: null,
    jutsusTypes: [
      "Ninjutsu",
      "Taijutsu"
    ],
  },
  {
    playerId: 26,
    playerName: "Nagato",
    gender: "Male",
    affiliations: [
      "Ame",
      "Akatsuki"
    ],
    kekkeiGenkais: [
      {
        name: "Rinnegan", type: "Dôjutsu"
      }
    ],
    kekkeiGenkaiTypes: [
      "Dôjutsu"
    ],
    ninjaRank: "None",
    age: 35,
    debut: 372,
    classifications: [
      "None"
    ],
    species: null,
    natureTypes: [
      "Fire",
      "Wind",
      "Lightning",
      "Earth",
      "Water"
    ],
    status: "Deceased",
    occupation: "Akatsuki Leader",
    alias: null,
    jutsusTypes: [
      "Ninjutsu"
    ],
  },
  {
    playerId: 27,
    playerName: "Kaguya Otsutsuki",
    gender: "Female",
    affiliations: [
      "None"
    ],
    kekkeiGenkais: [
      {
        name: "Byakugan", type: "Dôjutsu"
      },
      {
        name: "Rinne Sharingan", type: "Dôjutsu"
      },
    ],
    kekkeiGenkaiTypes: [
      "Dôjutsu"
    ],
    ninjaRank: "None",
    age: null,
    debut: 679,
    classifications: [
      "None"
    ],
    species: "Celestial Being",
    natureTypes: [
      "Fire",
      "Wind",
      "Lightning",
      "Earth",
      "Water"
    ],
    status: "Alive",
    occupation: "Princess",
    alias: null,
    jutsusTypes: [
      "Ninjutsu"
    ],
  },
  {
    playerId: 28,
    playerName: "Iruka Umino",
    gender: "Male",
    affiliations: [
      "Konoha"
    ],
    kekkeiGenkais: [
      {
        name: "None"
      }
    ],
    kekkeiGenkaiTypes: [
      "None"
    ],
    ninjaRank: "Chūnin",
    age: 27,
    debut: 1,
    classifications: [
      "None"
    ],
    species: null,
    natureTypes: [
      "Fire",
      "Water"
    ],
    status: "Alive",
    occupation: "Academy Teacher",
    alias: null,
    jutsusTypes: [
      "Ninjutsu",
      "Genjutsu"
    ],
  },
  {
    playerId: 29,
    playerName: "Fugaku Uchiha",
    gender: "Male",
    affiliations: [
      "Konoha"
    ],
    kekkeiGenkais: [
      {
        name: "Sharingan", type: "Dôjutsu"
      },
      {
        name: "Mangekyō Sharingan", type: "Dôjutsu"
      },
    ],
    kekkeiGenkaiTypes: [
      "Dôjutsu"
    ],
    ninjaRank: "Jōnin",
    age: 40,
    debut: 145,
    classifications: [
      "None"
    ],
    species: null,
    natureTypes: [
      "Fire"
    ],
    status: "Deceased",
    occupation: "Head of the Uchiha Clan",
    alias: null,
    jutsusTypes: [
      "Ninjutsu",
      "Genjutsu"
    ],
  },
  {
    playerId: 30,
    playerName: "Tsunade",
    gender: "Female",
    affiliations: [
      "Konoha"
    ],
    kekkeiGenkais: [
      {
        name: "None"
      }
    ],
    kekkeiGenkaiTypes: [
      "None"
    ],
    ninjaRank: "Kage",
    age: 55,
    debut: 139,
    classifications: [
      "Medical-nin"
    ],
    species: null,
    natureTypes: [
      "Lightning",
      "Earth",
      "Water",
      "Fire"
    ],
    status: "Alive",
    occupation: "Hokage",
    alias: null,
    jutsusTypes: [
      "Ninjutsu",
      "Genjutsu",
      "Taijutsu"
    ],
  },
  {
    playerId: 31,
    playerName: "Haku",
    gender: "Male",
    affiliations: [
      "Kiri"
    ],
    kekkeiGenkais: [
      {
        name: "Ice Release", type: "Nature Transformation"
      },
    ],
    kekkeiGenkaiTypes: [
      "Nature Transformation"
    ],
    ninjaRank: "None",
    age: 15,
    debut: 15,
    classifications: [
      "Mercenary Ninja"
    ],
    species: null,
    natureTypes: [
      "Wind",
      "Water"
    ],
    status: "Deceased",
    occupation: "None",
    alias: null,
    jutsusTypes: [
      "Ninjutsu",
      "Taijutsu"
    ],
  },
  {
    playerId: 32,
    playerName: "Tenten",
    gender: "Female",
    affiliations: [
      "Konoha"
    ],
    kekkeiGenkais: [
      {
        name: "None"
      }
    ],
    kekkeiGenkaiTypes: [
      "None"
    ],
    ninjaRank: "Chūnin",
    age: 18,
    debut: 36,
    classifications: [
      "None"
    ],
    species: null,
    natureTypes: [
      "None"
    ],
    status: "Alive",
    occupation: "Weapon Seller",
    alias: null,
    jutsusTypes: [
      "Ninjutsu",
      "Taijutsu"
    ],
  },
  {
    playerId: 33,
    playerName: "Mito Uzumaki",
    gender: "Female",
    affiliations: [
      "Uzushio",
      "Konoha"
    ],
    kekkeiGenkais: [
      {
        name: "None"
      }
    ],
    kekkeiGenkaiTypes: [
      "None"
    ],
    ninjaRank: "None",
    age: null,
    debut: 500,
    classifications: [
      "Jinchūriki"
    ],
    species: null,
    natureTypes: [
      "None"
    ],
    status: "Deceased",
    occupation: "None",
    alias: null,
    jutsusTypes: [
      "Ninjutsu"
    ],
  },
  {
    playerId: 34,
    playerName: "Yamato",
    gender: "Male",
    affiliations: [
      "Konoha"
    ],
    kekkeiGenkais: [
      {
        name: "Wood Release", type: "Nature Transformation"
      },
    ],
    kekkeiGenkaiTypes: [
      "Nature Transformation"
    ],
    ninjaRank: "Anbu",
    age: 27,
    debut: 284,
    classifications: [
      "None"
    ],
    species: null,
    natureTypes: [
      "Earth",
      "Water"
    ],
    status: "Alive",
    occupation: "None",
    alias: null,
    jutsusTypes: [
      "Ninjutsu",
      "Taijutsu"
    ],
  },
  {
    playerId: 35,
    playerName: "Kisame Hoshigaki",
    gender: "Male",
    affiliations: [
      "Kiri",
      "Akatsuki"
    ],
    kekkeiGenkais: [
      {
        name: "None"
      }
    ],
    kekkeiGenkaiTypes: [
      "None"
    ],
    ninjaRank: "None",
    age: 33,
    debut: 139,
    classifications: [
      "Missing-nin"
    ],
    species: null,
    natureTypes: [
      "Water",
      "Fire",
      "Wind",
      "Earth"
    ],
    status: "Deceased",
    occupation: "None",
    alias: null,
    jutsusTypes: [
      "Ninjutsu",
      "Taijutsu"
    ],
  },
  {
    playerId: 36,
    playerName: "Teuchi",
    gender: "Male",
    affiliations: [
      "Konoha"
    ],
    kekkeiGenkais: [
      {
        name: "None"
      }
    ],
    kekkeiGenkaiTypes: [
      "None"
    ],
    ninjaRank: "None",
    age: 47,
    debut: 1,
    classifications: [
      "None"
    ],
    species: null,
    natureTypes: [
      "None"
    ],
    status: "Alive",
    occupation: "Ramen chef",
    alias: null,
    jutsusTypes: [
      "None"
    ],
  },
  {
    playerId: 37,
    playerName: "Konan",
    gender: "Female",
    affiliations: [
      "Ame",
      "Akatsuki"
    ],
    kekkeiGenkais: [
      {
        name: "None"
      }
    ],
    kekkeiGenkaiTypes: [
      "None"
    ],
    ninjaRank: "None",
    age: 35,
    debut: 363,
    classifications: [
      "None"
    ],
    species: null,
    natureTypes: [
      "Wind",
      "Earth",
      "Water"
    ],
    status: "Deceased",
    occupation: "Village Head",
    alias: null,
    jutsusTypes: [
      "Ninjutsu"
    ],
  },
  {
    playerId: 38,
    playerName: "Temari",
    gender: "Female",
    affiliations: [
      "Suna"
    ],
    kekkeiGenkais: [
      {
        name: "None"
      }
    ],
    kekkeiGenkaiTypes: [
      "None"
    ],
    ninjaRank: "Jōnin",
    age: 20,
    debut: 34,
    classifications: [
      "None"
    ],
    species: null,
    natureTypes: [
      "Wind"
    ],
    status: "Alive",
    occupation: "Ambassador",
    alias: null,
    jutsusTypes: [
      "Ninjutsu",
      "Taijutsu"
    ],
  },
  {
    playerId: 39,
    playerName: "Sai",
    gender: "Male",
    affiliations: [
      "Konoha"
    ],
    kekkeiGenkais: [
      {
        name: "None"
      }
    ],
    kekkeiGenkaiTypes: [
      "None"
    ],
    ninjaRank: "Anbu",
    age: 17,
    debut: 281,
    classifications: [
      "None"
    ],
    species: null,
    natureTypes: [
      "Earth",
      "Water",
      "Fire"
    ],
    status: "Alive",
    occupation: "Chūnin Exams Proctor",
    alias: null,
    jutsusTypes: [
      "Ninjutsu",
      "Taijutsu"
    ],
  },
  {
    playerId: 40,
    playerName: "Killer B",
    gender: "Male",
    affiliations: [
      "Kumo"
    ],
    kekkeiGenkais: [
      {
        name: "None"
      }
    ],
    kekkeiGenkaiTypes: [
      "None"
    ],
    ninjaRank: "None",
    age: 36,
    debut: 408,
    classifications: [
      "Jinchūriki"
    ],
    species: null,
    natureTypes: [
      "Lightning",
      "Water",
      "Fire"
    ],
    status: "Alive",
    occupation: "Guardian of Kumogakure",
    alias: null,
    jutsusTypes: [
      "Ninjutsu",
      "Taijutsu"
    ],
  },
  {
    playerId: 41,
    playerName: "Indra Otsutsuki",
    gender: "Male",
    affiliations: [
      "None"
    ],
    kekkeiGenkais: [
      {
        name: "Sharingan", type: "Dôjutsu"
      },
      {
        name: "Mangekyō Sharingan", type: "Dôjutsu"
      },
    ],
    kekkeiGenkaiTypes: [
      "Dôjutsu"
    ],
    ninjaRank: "None",
    age: null,
    debut: 462,
    classifications: [
      "None"
    ],
    species: "Celestial Being-Human hybrid",
    natureTypes: [
      "Fire",
      "Lightning"
    ],
    status: "Deceased",
    occupation: "None",
    alias: null,
    jutsusTypes: [
      "Ninjutsu",
      "Genjutsu",
      "Taijutsu"
    ],
  },
  {
    playerId: 42,
    playerName: "Hiruzen Sarutobi",
    gender: "Male",
    affiliations: [
      "Konoha"
    ],
    kekkeiGenkais: [
      {
        name: "None"
      }
    ],
    kekkeiGenkaiTypes: [
      "None"
    ],
    ninjaRank: "Kage",
    age: 69,
    debut: 1,
    classifications: [
      "None"
    ],
    species: null,
    natureTypes: [
      "Fire",
      "Wind",
      "Lightning",
      "Earth",
      "Water"
    ],
    status: "Deceased",
    occupation: "Hokage",
    alias: null,
    jutsusTypes: [
      "Ninjutsu"
    ],
  },
  {
    playerId: 43,
    playerName: "Izuna Uchiha",
    gender: "Male",
    affiliations: [
      "None"
    ],
    kekkeiGenkais: [
      {
        name: "Sharingan", type: "Dôjutsu"
      },
      {
        name: "Mangekyō Sharingan", type: "Dôjutsu"
      },
    ],
    kekkeiGenkaiTypes: [
      "Dôjutsu"
    ],
    ninjaRank: "None",
    age: 24,
    debut: 386,
    classifications: [
      "None"
    ],
    species: null,
    natureTypes: [
      "Fire"
    ],
    status: "Deceased",
    occupation: "None",
    alias: null,
    jutsusTypes: [
      "Ninjutsu",
      "Genjutsu"
    ],
  },
  {
    playerId: 44,
    playerName: "Rin Nohara",
    gender: "Female",
    affiliations: [
      "Konoha"
    ],
    kekkeiGenkais: [
      {
        name: "None"
      }
    ],
    kekkeiGenkaiTypes: [
      "None"
    ],
    ninjaRank: "Chūnin",
    age: null,
    debut: 239,
    classifications: [
      "Medical-nin",
      "Jinchūriki"
    ],
    species: null,
    natureTypes: [
      "Fire",
      "Water"
    ],
    status: "Deceased",
    occupation: "None",
    alias: null,
    jutsusTypes: [
      "Ninjutsu"
    ],
  },
  {
    playerId: 45,
    playerName: "Kiba Inuzuka",
    gender: "Male",
    affiliations: [
      "Konoha"
    ],
    kekkeiGenkais: [
      {
        name: "None"
      }
    ],
    kekkeiGenkaiTypes: [
      "None"
    ],
    ninjaRank: "Chūnin",
    age: 17,
    debut: 34,
    classifications: [
      "None"
    ],
    species: null,
    natureTypes: [
      "Earth"
    ],
    status: "Alive",
    occupation: "Dog Breeder",
    alias: null,
    jutsusTypes: [
      "Ninjutsu",
      "Taijutsu"
    ],
  },
  {
    playerId: 46,
    playerName: "Kimimaro",
    gender: "Male",
    affiliations: [
      "Oto"
    ],
    kekkeiGenkais: [
      {
        name: "Shikotsumyaku", type: "Body Enhancement"
      }
    ],
    kekkeiGenkaiTypes: [
      "Body Enhancement"
    ],
    ninjaRank: "None",
    age: 15,
    debut: 199,
    classifications: [
      "None"
    ],
    species: null,
    natureTypes: [
      "None"
    ],
    status: "Deceased",
    occupation: "None",
    alias: null,
    jutsusTypes: [
      "Ninjutsu",
      "Taijutsu"
    ],
  },
  {
    playerId: 47,
    playerName: "Kakuzu",
    gender: "Male",
    affiliations: [
      "Taki",
      "Akatsuki"
    ],
    kekkeiGenkais: [
      {
        name: "None"
      }
    ],
    kekkeiGenkaiTypes: [
      "None"
    ],
    ninjaRank: "None",
    age: 91,
    debut: 312,
    classifications: [
      "Missing-nin"
    ],
    species: null,
    natureTypes: [
      "Earth",
      "Water",
      "Fire",
      "Wind",
      "Lightning"
    ],
    status: "Deceased",
    occupation: "Akatsuki Treasurer",
    alias: null,
    jutsusTypes: [
      "Ninjutsu",
      "Taijutsu"
    ],
  },
  {
    playerId: 48,
    playerName: "Might Duy",
    gender: "Male",
    affiliations: [
      "Konoha"
    ],
    kekkeiGenkais: [
      {
        name: "None"
      }
    ],
    kekkeiGenkaiTypes: [
      "None"
    ],
    ninjaRank: "Genin",
    age: 35,
    debut: 668,
    classifications: [
      "None"
    ],
    species: null,
    natureTypes: [
      "None"
    ],
    status: "Deceased",
    occupation: "None",
    alias: null,
    jutsusTypes: [
      "Taijutsu"
    ],
  },
  {
    playerId: 49,
    playerName: "Ino Yamanaka",
    gender: "Female",
    affiliations: [
      "Konoha"
    ],
    kekkeiGenkais: [
      {
        name: "None"
      }
    ],
    kekkeiGenkaiTypes: [
      "None"
    ],
    ninjaRank: "Chūnin",
    age: 17,
    debut: 34,
    classifications: [
      "Medical-nin"
    ],
    species: null,
    natureTypes: [
      "Earth",
      "Water",
      "Fire"
    ],
    status: "Alive",
    occupation: "Florist",
    alias: null,
    jutsusTypes: [
      "Ninjutsu"
    ],
  },
  {
    playerId: 50,
    playerName: "Kankuro",
    gender: "Male",
    affiliations: [
      "Suna"
    ],
    kekkeiGenkais: [
      {
        name: "None"
      }
    ],
    kekkeiGenkaiTypes: [
      "None"
    ],
    ninjaRank: "Jōnin",
    age: 19,
    debut: 34,
    classifications: [
      "None"
    ],
    species: null,
    natureTypes: [
      "Wind",
      "Lightning",
      "Earth",
      "Water"
    ],
    status: "Alive",
    occupation: "Fifth Kazekage's Bodyguard",
    alias: null,
    jutsusTypes: [
      "Ninjutsu"
    ],
  },
  {
    playerId: 51,
    playerName: "Kabuto Yakushi",
    gender: "Male",
    affiliations: [
      "Konoha",
      "Oto",
      "Akatsuki"
    ],
    kekkeiGenkais: [
      {
        name: "Jūgo's Clan's Kekkei Genkai", type: "Body Enhancement"
      },
      {
        name: "Sakon and Ukon's Kekkei Genkai",
        type: "Body Enhancement",
      },
      {
        name: "Shikotsumyaku", type: "Body Enhancement"
      },
    ],
    kekkeiGenkaiTypes: [
      "Body Enhancement"
    ],
    ninjaRank: "Genin",
    age: 24,
    debut: 39,
    classifications: [
      "Medical-nin",
      "Missing-nin",
      "Sage"
    ],
    species: null,
    natureTypes: [
      "Earth",
      "Water",
      "Wind"
    ],
    status: "Alive",
    occupation: "Orochimaru's spy and right-hand man",
    alias: null,
    jutsusTypes: [
      "Ninjutsu",
      "Genjutsu"
    ],
  },
  {
    playerId: 52,
    playerName: "Mei Terumi",
    gender: "Female",
    affiliations: [
      "Kiri"
    ],
    kekkeiGenkais: [
      {
        name: "Lava Release", type: "Nature Transformation"
      },
      {
        name: "Boil Release", type: "Nature Transformation"
      },
    ],
    kekkeiGenkaiTypes: [
      "Nature Transformation"
    ],
    ninjaRank: "Kage",
    age: 31,
    debut: 454,
    classifications: [
      "None"
    ],
    species: null,
    natureTypes: [
      "Water",
      "Fire",
      "Lightning",
      "Earth"
    ],
    status: "Alive",
    occupation: "Mizukage",
    alias: null,
    jutsusTypes: [
      "Ninjutsu",
      "Taijutsu"
    ],
  },
  {
    playerId: 53,
    playerName: "Shino Aburame",
    gender: "Male",
    affiliations: [
      "Konoha"
    ],
    kekkeiGenkais: [
      {
        name: "None"
      }
    ],
    kekkeiGenkaiTypes: [
      "None"
    ],
    ninjaRank: "Chūnin",
    age: 17,
    debut: 34,
    classifications: [
      "None"
    ],
    species: null,
    natureTypes: [
      "Earth",
      "Fire"
    ],
    status: "Alive",
    occupation: "Academy Teacher",
    alias: null,
    jutsusTypes: [
      "Ninjutsu",
      "Taijutsu"
    ],
  },
  {
    playerId: 54,
    playerName: "Suigetsu Hozuki",
    gender: "Male",
    affiliations: [
      "Kiri",
      "Oto",
      "Akatsuki"
    ],
    kekkeiGenkais: [
      {
        name: "None"
      }
    ],
    kekkeiGenkaiTypes: [
      "None"
    ],
    ninjaRank: "None",
    age: 17,
    debut: 346,
    classifications: [
      "None"
    ],
    species: null,
    natureTypes: [
      "Water",
      "Wind"
    ],
    status: "Alive",
    occupation: "None",
    alias: null,
    jutsusTypes: [
      "Ninjutsu",
      "Taijutsu"
    ],
  },
  {
    playerId: 55,
    playerName: "Genma Shiranui",
    gender: "Male",
    affiliations: [
      "Konoha"
    ],
    kekkeiGenkais: [
      {
        name: "None"
      }
    ],
    kekkeiGenkaiTypes: [
      "None"
    ],
    ninjaRank: "Jōnin",
    age: 33,
    debut: 34,
    classifications: [
      "None"
    ],
    species: null,
    natureTypes: [
      "None"
    ],
    status: "Alive",
    occupation: "Chūnin Exams Proctor",
    alias: null,
    jutsusTypes: [
      "Ninjutsu"
    ],
  },
  {
    playerId: 56,
    playerName: "Hagoromo Otsutsuki",
    gender: "Male",
    affiliations: [
      "None"
    ],
    kekkeiGenkais: [
      {
        name: "Sharingan", type: "Dôjutsu"
      },
      {
        name: "Rinnegan", type: "Dôjutsu"
      },
    ],
    kekkeiGenkaiTypes: [
      "Dôjutsu"
    ],
    ninjaRank: "None",
    age: null,
    debut: 572,
    classifications: [
      "Jinchūriki",
      "Sage"
    ],
    species: "Celestial Being-Human hybrid",
    natureTypes: [
      "Fire",
      "Wind",
      "Lightning",
      "Earth",
      "Water"
    ],
    status: "Deceased",
    occupation: "Priest",
    alias: null,
    jutsusTypes: [
      "Ninjutsu"
    ],
  },
  {
    playerId: 57,
    playerName: "Asuma Sarutobi",
    gender: "Male",
    affiliations: [
      "Konoha"
    ],
    kekkeiGenkais: [
      {
        name: "None"
      }
    ],
    kekkeiGenkaiTypes: [
      "None"
    ],
    ninjaRank: "Jōnin",
    age: 31,
    debut: 34,
    classifications: [
      "None"
    ],
    species: null,
    natureTypes: [
      "Wind",
      "Fire"
    ],
    status: "Deceased",
    occupation: "None",
    alias: null,
    jutsusTypes: [
      "Ninjutsu",
      "Taijutsu"
    ],
  },
  {
    playerId: 58,
    playerName: "Tayuya",
    gender: "Female",
    affiliations: [
      "Oto"
    ],
    kekkeiGenkais: [
      {
        name: "None"
      }
    ],
    kekkeiGenkaiTypes: [
      "None"
    ],
    ninjaRank: "None",
    age: 14,
    debut: 115,
    classifications: [
      "None"
    ],
    species: null,
    natureTypes: [
      "None"
    ],
    status: "Deceased",
    occupation: "None",
    alias: null,
    jutsusTypes: [
      "Ninjutsu",
      "Genjutsu",
      "Taijutsu"
    ],
  },
  {
    playerId: 59,
    playerName: "Konohamaru Sarutobi",
    gender: "Male",
    affiliations: [
      "Konoha"
    ],
    kekkeiGenkais: [
      {
        name: "None"
      }
    ],
    kekkeiGenkaiTypes: [
      "None"
    ],
    ninjaRank: "Genin",
    age: 12,
    debut: 2,
    classifications: [
      "None"
    ],
    species: null,
    natureTypes: [
      "Fire",
      "Wind",
      "Lightning"
    ],
    status: "Alive",
    occupation: "Aspiring Hokage",
    alias: null,
    jutsusTypes: [
      "Ninjutsu",
      "Taijutsu"
    ],
  },
  {
    playerId: 60,
    playerName: "Akamaru",
    gender: "Male",
    affiliations: [
      "Konoha"
    ],
    kekkeiGenkais: [
      {
        name: "None"
      }
    ],
    kekkeiGenkaiTypes: [
      "None"
    ],
    ninjaRank: "None",
    age: 8,
    debut: 39,
    classifications: [
      "None"
    ],
    species: "Ninken",
    natureTypes: [
      "None"
    ],
    status: "Alive",
    occupation: "None",
    alias: null,
    jutsusTypes: [
      "None"
    ],
  },
  {
    playerId: 61,
    playerName: "Karin",
    gender: "Female",
    affiliations: [
      "Kusa",
      "Oto",
      "Akatsuki"
    ],
    kekkeiGenkais: [
      {
        name: "None"
      }
    ],
    kekkeiGenkaiTypes: [
      "None"
    ],
    ninjaRank: "Genin",
    age: 17,
    debut: 347,
    classifications: [
      "None"
    ],
    species: null,
    natureTypes: [
      "Earth",
      "Water"
    ],
    status: "Alive",
    occupation: "None",
    alias: null,
    jutsusTypes: [
      "Ninjutsu"
    ],
  },
  {
    playerId: 62,
    playerName: "Danzo Shimura",
    gender: "Male",
    affiliations: [
      "Konoha"
    ],
    kekkeiGenkais: [
      {
        name: "Sharingan", type: "Dôjutsu"
      },
      {
        name: "Mangekyō Sharingan", type: "Dôjutsu"
      },
      {
        name: "Wood Release", type: "Nature Transformation"
      },
    ],
    kekkeiGenkaiTypes: [
      "Dôjutsu",
      "Nature Transformation"
    ],
    ninjaRank: "None",
    age: 73,
    debut: 281,
    classifications: [
      "None"
    ],
    species: null,
    natureTypes: [
      "Wind",
      "Earth",
      "Water",
      "Fire"
    ],
    status: "Deceased",
    occupation: "Leader of Root",
    alias: null,
    jutsusTypes: [
      "Ninjutsu",
      "Genjutsu",
      "Taijutsu"
    ],
  },
  {
    playerId: 63,
    playerName: "Hayate Gekko",
    gender: "Male",
    affiliations: [
      "Konoha"
    ],
    kekkeiGenkais: [
      {
        name: "None"
      }
    ],
    kekkeiGenkaiTypes: [
      "None"
    ],
    ninjaRank: "Jōnin",
    age: 23,
    debut: 65,
    classifications: [
      "None"
    ],
    species: null,
    natureTypes: [
      "None"
    ],
    status: "Deceased",
    occupation: "Chūnin Exams Proctor",
    alias: null,
    jutsusTypes: [
      "Ninjutsu",
      "Genjutsu",
      "Taijutsu"
    ],
  },
  {
    playerId: 64,
    playerName: "Asura Otsutsuki",
    gender: "Male",
    affiliations: [
      "None"
    ],
    kekkeiGenkais: [
      {
        name: "Wood Release", type: "Nature Transformation"
      },
    ],
    kekkeiGenkaiTypes: [
      "Nature Transformation"
    ],
    ninjaRank: "None",
    age: null,
    debut: 462,
    classifications: [
      "Sage"
    ],
    species: "Celestial Being-Human hybrid",
    natureTypes: [
      "Wind",
      "Lightning",
      "Earth",
      "Water",
      "Fire"
    ],
    status: "Deceased",
    occupation: "None",
    alias: null,
    jutsusTypes: [
      "Ninjutsu",
      "Taijutsu"
    ],
  },
  {
    playerId: 65,
    playerName: "Utakata",
    gender: "Male",
    affiliations: [
      "Kiri"
    ],
    kekkeiGenkais: [
      {
        name: "None"
      }
    ],
    kekkeiGenkaiTypes: [
      "None"
    ],
    ninjaRank: "None",
    age: 26,
    debut: 515,
    classifications: [
      "Jinchūriki",
      "Missing-nin"
    ],
    species: null,
    natureTypes: [
      "Water"
    ],
    status: "Deceased",
    occupation: "None",
    alias: null,
    jutsusTypes: [
      "Ninjutsu"
    ],
  },
  {
    playerId: 66,
    playerName: "Yagura Karatachi",
    gender: "Male",
    affiliations: [
      "Kiri"
    ],
    kekkeiGenkais: [
      {
        name: "None"
      }
    ],
    kekkeiGenkaiTypes: [
      "None"
    ],
    ninjaRank: "Kage",
    age: null,
    debut: 458,
    classifications: [
      "Jinchūriki"
    ],
    species: null,
    natureTypes: [
      "Water",
      "Wind"
    ],
    status: "Deceased",
    occupation: "Mizukage",
    alias: null,
    jutsusTypes: [
      "Ninjutsu"
    ],
  },
  {
    playerId: 67,
    playerName: "Samui",
    gender: "Female",
    affiliations: [
      "Kumo"
    ],
    kekkeiGenkais: [
      {
        name: "None"
      }
    ],
    kekkeiGenkaiTypes: [
      "None"
    ],
    ninjaRank: "Jōnin",
    age: 29,
    debut: 417,
    classifications: [
      "None"
    ],
    species: null,
    natureTypes: [
      "None"
    ],
    status: "Alive",
    occupation: "None",
    alias: null,
    jutsusTypes: [
      "None"
    ],
  },
  {
    playerId: 68,
    playerName: "Black Zetsu",
    gender: "Other",
    affiliations: [
      "Akatsuki"
    ],
    kekkeiGenkais: [
      {
        name: "Wood Release", type: "Nature Transformation"
      },
      {
        name: "Rinnegan", type: "Dôjutsu"
      },
      {
        name: "Sharingan", type: "Dôjutsu"
      },
      {
        name: "Mangekyō Sharingan", type: "Dôjutsu"
      },
    ],
    kekkeiGenkaiTypes: [
      "Nature Transformation",
      "Dôjutsu"
    ],
    ninjaRank: "None",
    age: null,
    debut: 234,
    classifications: [
      "Jinchūriki"
    ],
    species: "Artificial Human",
    natureTypes: [
      "Earth",
      "Water",
      "Fire",
      "Wind",
      "Lightning"
    ],
    status: "Alive",
    occupation: "Akatsuki spy",
    alias: null,
    jutsusTypes: [
      "Ninjutsu"
    ],
  },
  {
    playerId: 69,
    playerName: "Darui",
    gender: "Male",
    affiliations: [
      "Kumo"
    ],
    kekkeiGenkais: [
      {
        name: "Storm Release", type: "Nature Transformation"
      },
    ],
    kekkeiGenkaiTypes: [
      "Nature Transformation"
    ],
    ninjaRank: "Jōnin",
    age: 26,
    debut: 454,
    classifications: [
      "None"
    ],
    species: null,
    natureTypes: [
      "Lightning",
      "Water",
      "Wind"
    ],
    status: "Alive",
    occupation: "First Division Commander of the Allied Shinobi Forces",
    alias: "Raikage",
    jutsusTypes: [
      "Ninjutsu",
      "Taijutsu"
    ],
  },
  {
    playerId: 70,
    playerName: "Yahiko",
    gender: "Male",
    affiliations: [
      "Ame",
      "Akatsuki"
    ],
    kekkeiGenkais: [
      {
        name: "None"
      }
    ],
    kekkeiGenkaiTypes: [
      "None"
    ],
    ninjaRank: "None",
    age: 15,
    debut: 372,
    classifications: [
      "None"
    ],
    species: null,
    natureTypes: [
      "Water",
      "Fire",
      "Wind"
    ],
    status: "Deceased",
    occupation: "Founder and leader of Akatsuki",
    alias: null,
    jutsusTypes: [
      "Ninjutsu"
    ],
  },
  {
    playerId: 71,
    playerName: "Shikaku Nara",
    gender: "Male",
    affiliations: [
      "Konoha"
    ],
    kekkeiGenkais: [
      {
        name: "None"
      }
    ],
    kekkeiGenkaiTypes: [
      "None"
    ],
    ninjaRank: "Jōnin",
    age: 42,
    debut: 137,
    classifications: [
      "None"
    ],
    species: null,
    natureTypes: [
      "None"
    ],
    status: "Deceased",
    occupation: "Head of the Nara Clan",
    alias: null,
    jutsusTypes: [
      "Ninjutsu"
    ],
  },
  {
    playerId: 72,
    playerName: "Gamabunta",
    gender: "Male",
    affiliations: [
      "Konoha"
    ],
    kekkeiGenkais: [
      {
        name: "None"
      }
    ],
    kekkeiGenkaiTypes: [
      "None"
    ],
    ninjaRank: "None",
    age: null,
    debut: 94,
    classifications: [
      "Summon"
    ],
    species: "Toad",
    natureTypes: [
      "Water"
    ],
    status: "Alive",
    occupation: "None",
    alias: null,
    jutsusTypes: [
      "Ninjutsu"
    ],
  },
  {
    playerId: 73,
    playerName: "Ten-Tails",
    gender: "Other",
    affiliations: [
      "None"
    ],
    kekkeiGenkais: [
      {
        name: "Wood Release", type: "Nature Transformation"
      },
    ],
    kekkeiGenkaiTypes: [
      "Nature Transformation"
    ],
    ninjaRank: "None",
    age: null,
    debut: 467,
    classifications: [
      "Tailed Beast"
    ],
    species: null,
    natureTypes: [
      "Fire",
      "Wind",
      "Lightning",
      "Earth",
      "Water"
    ],
    status: "Alive",
    occupation: "None",
    alias: null,
    jutsusTypes: [
      "Ninjutsu"
    ],
  },
  {
    playerId: 74,
    playerName: "Chiyo",
    gender: "Female",
    affiliations: [
      "Suna"
    ],
    kekkeiGenkais: [
      {
        name: "None"
      }
    ],
    kekkeiGenkaiTypes: [
      "None"
    ],
    ninjaRank: "None",
    age: 73,
    debut: 252,
    classifications: [
      "Medical-nin"
    ],
    species: null,
    natureTypes: [
      "None"
    ],
    status: "Deceased",
    occupation: "Counsellor",
    alias: null,
    jutsusTypes: [
      "Ninjutsu",
      "Taijutsu"
    ],
  },
  {
    playerId: 75,
    playerName: "Mikoto Uchiha",
    gender: "Female",
    affiliations: [
      "Konoha"
    ],
    kekkeiGenkais: [
      {
        name: "None"
      }
    ],
    kekkeiGenkaiTypes: [
      "None"
    ],
    ninjaRank: "Jōnin",
    age: 35,
    debut: 145,
    classifications: [
      "None"
    ],
    species: null,
    natureTypes: [
      "None"
    ],
    status: "Deceased",
    occupation: "Housewife",
    alias: null,
    jutsusTypes: [
      "Ninjutsu"
    ],
  },
  {
    playerId: 76,
    playerName: "Shizune",
    gender: "Female",
    affiliations: [
      "Konoha"
    ],
    kekkeiGenkais: [
      {
        name: "None"
      }
    ],
    kekkeiGenkaiTypes: [
      "None"
    ],
    ninjaRank: "Jōnin",
    age: 31,
    debut: 148,
    classifications: [
      "Medical-nin"
    ],
    species: null,
    natureTypes: [
      "None"
    ],
    status: "Alive",
    occupation: "Hokage's Assistant",
    alias: null,
    jutsusTypes: [
      "Ninjutsu"
    ],
  },
  {
    playerId: 77,
    playerName: "Choji Akimichi",
    gender: "Male",
    affiliations: [
      "Konoha"
    ],
    kekkeiGenkais: [
      {
        name: "None"
      }
    ],
    kekkeiGenkaiTypes: [
      "None"
    ],
    ninjaRank: "Chūnin",
    age: 17,
    debut: 34,
    classifications: [
      "None"
    ],
    species: null,
    natureTypes: [
      "Earth",
      "Fire"
    ],
    status: "Alive",
    occupation: "None",
    alias: null,
    jutsusTypes: [
      "Ninjutsu",
      "Taijutsu"
    ],
  },
  {
    playerId: 78,
    playerName: "Hanzo",
    gender: "Male",
    affiliations: [
      "Ame"
    ],
    kekkeiGenkais: [
      {
        name: "None"
      }
    ],
    kekkeiGenkaiTypes: [
      "None"
    ],
    ninjaRank: "None",
    age: null,
    debut: 369,
    classifications: [
      "None"
    ],
    species: null,
    natureTypes: [
      "Fire"
    ],
    status: "Deceased",
    occupation: "Village Head",
    alias: null,
    jutsusTypes: [
      "Ninjutsu"
    ],
  },
  {
    playerId: 79,
    playerName: "Pakkun",
    gender: "Male",
    affiliations: [
      "Konoha"
    ],
    kekkeiGenkais: [
      {
        name: "None"
      }
    ],
    kekkeiGenkaiTypes: [
      "None"
    ],
    ninjaRank: "None",
    age: null,
    debut: 29,
    classifications: [
      "Summon"
    ],
    species: "Ninken",
    natureTypes: [
      "None"
    ],
    status: "Alive",
    occupation: "None",
    alias: null,
    jutsusTypes: [
      "None"
    ],
  },
  {
    playerId: 80,
    playerName: "Omoi",
    gender: "Male",
    affiliations: [
      "Kumo"
    ],
    kekkeiGenkais: [
      {
        name: "None"
      }
    ],
    kekkeiGenkaiTypes: [
      "None"
    ],
    ninjaRank: "Chūnin",
    age: 16,
    debut: 417,
    classifications: [
      "None"
    ],
    species: null,
    natureTypes: [
      "Lightning"
    ],
    status: "Alive",
    occupation: "Fifth Raikage's Bodyguard",
    alias: null,
    jutsusTypes: [
      "Ninjutsu"
    ],
  },
  {
    playerId: 81,
    playerName: "Gamatatsu",
    gender: "Male",
    affiliations: [
      "Konoha"
    ],
    kekkeiGenkais: [
      {
        name: "None"
      }
    ],
    kekkeiGenkaiTypes: [
      "None"
    ],
    ninjaRank: "None",
    age: null,
    debut: 166,
    classifications: [
      "Summon"
    ],
    species: "Toad",
    natureTypes: [
      "Water"
    ],
    status: "Alive",
    occupation: "None",
    alias: null,
    jutsusTypes: [
      "None"
    ],
  },
  {
    playerId: 82,
    playerName: "Chojuro",
    gender: "Male",
    affiliations: [
      "Kiri"
    ],
    kekkeiGenkais: [
      {
        name: "None"
      }
    ],
    kekkeiGenkaiTypes: [
      "None"
    ],
    ninjaRank: "Jōnin",
    age: 19,
    debut: 454,
    classifications: [
      "None"
    ],
    species: null,
    natureTypes: [
      "Water"
    ],
    status: "Alive",
    occupation: "Mizukage",
    alias: null,
    jutsusTypes: [
      "Ninjutsu"
    ],
  },
  {
    playerId: 83,
    playerName: "Gengetsu Hozuki",
    gender: "Male",
    affiliations: [
      "Kiri"
    ],
    kekkeiGenkais: [
      {
        name: "None"
      }
    ],
    kekkeiGenkaiTypes: [
      "None"
    ],
    ninjaRank: "Kage",
    age: null,
    debut: 525,
    classifications: [
      "None"
    ],
    species: null,
    natureTypes: [
      "Water",
      "Fire",
      "Lightning",
      "Earth"
    ],
    status: "Deceased",
    occupation: "Mizukage",
    alias: null,
    jutsusTypes: [
      "Ninjutsu",
      "Genjutsu",
      "Taijutsu"
    ],
  },
  {
    playerId: 84,
    playerName: "Yugito Nii",
    gender: "Female",
    affiliations: [
      "Kumo"
    ],
    kekkeiGenkais: [
      {
        name: "None"
      }
    ],
    kekkeiGenkaiTypes: [
      "None"
    ],
    ninjaRank: "Jōnin",
    age: 29,
    debut: 312,
    classifications: [
      "Jinchūriki"
    ],
    species: null,
    natureTypes: [
      "Fire"
    ],
    status: "Deceased",
    occupation: "None",
    alias: null,
    jutsusTypes: [
      "Ninjutsu",
      "Taijutsu"
    ],
  },
  {
    playerId: 85,
    playerName: "Mu",
    gender: "Male",
    affiliations: [
      "Iwa"
    ],
    kekkeiGenkais: [
      {
        name: "Dust Release", type: "Nature Transformation"
      },
    ],
    kekkeiGenkaiTypes: [
      "Nature Transformation"
    ],
    ninjaRank: "Kage",
    age: null,
    debut: 515,
    classifications: [
      "None"
    ],
    species: null,
    natureTypes: [
      "Earth",
      "Water",
      "Fire",
      "Wind",
      "Lightning"
    ],
    status: "Deceased",
    occupation: "Tsuchikage",
    alias: null,
    jutsusTypes: [
      "Ninjutsu"
    ],
  },
  {
    playerId: 86,
    playerName: "Karui",
    gender: "Female",
    affiliations: [
      "Kumo"
    ],
    kekkeiGenkais: [
      {
        name: "None"
      }
    ],
    kekkeiGenkaiTypes: [
      "None"
    ],
    ninjaRank: "Chūnin",
    age: 17,
    debut: 417,
    classifications: [
      "None"
    ],
    species: null,
    natureTypes: [
      "Lightning"
    ],
    status: "Alive",
    occupation: "None",
    alias: null,
    jutsusTypes: [
      "None"
    ],
  },
  {
    playerId: 87,
    playerName: "Baki",
    gender: "Male",
    affiliations: [
      "Suna"
    ],
    kekkeiGenkais: [
      {
        name: "None"
      }
    ],
    kekkeiGenkaiTypes: [
      "None"
    ],
    ninjaRank: "Jōnin",
    age: 34,
    debut: 65,
    classifications: [
      "None"
    ],
    species: null,
    natureTypes: [
      "Wind"
    ],
    status: "Alive",
    occupation: "Senior",
    alias: null,
    jutsusTypes: [
      "Ninjutsu",
      "Taijutsu"
    ],
  },
  {
    playerId: 88,
    playerName: "Homura Mitokado",
    gender: "Male",
    affiliations: [
      "Konoha"
    ],
    kekkeiGenkais: [
      {
        name: "None"
      }
    ],
    kekkeiGenkaiTypes: [
      "None"
    ],
    ninjaRank: "None",
    age: 73,
    debut: 93,
    classifications: [
      "None"
    ],
    species: null,
    natureTypes: [
      "None"
    ],
    status: "Alive",
    occupation: "Councillor",
    alias: null,
    jutsusTypes: [
      "None"
    ],
  },
  {
    playerId: 89,
    playerName: "Ebisu",
    gender: "Male",
    affiliations: [
      "Konoha"
    ],
    kekkeiGenkais: [
      {
        name: "None"
      }
    ],
    kekkeiGenkaiTypes: [
      "None"
    ],
    ninjaRank: "Jōnin",
    age: 33,
    debut: 2,
    classifications: [
      "None"
    ],
    species: null,
    natureTypes: [
      "Fire"
    ],
    status: "Alive",
    occupation: "Personal Trainer",
    alias: null,
    jutsusTypes: [
      "Ninjutsu",
      "Taijutsu"
    ],
  },
  {
    playerId: 90,
    playerName: "Shima",
    gender: "Female",
    affiliations: [
      "Konoha"
    ],
    kekkeiGenkais: [
      {
        name: "None"
      }
    ],
    kekkeiGenkaiTypes: [
      "None"
    ],
    ninjaRank: "None",
    age: null,
    debut: 375,
    classifications: [
      "Sage",
      "Summon"
    ],
    species: "Toad",
    natureTypes: [
      "Fire",
      "Wind"
    ],
    status: "Alive",
    occupation: "Toad Elder",
    alias: null,
    jutsusTypes: [
      "Ninjutsu",
      "Genjutsu"
    ],
  },
  {
    playerId: 91,
    playerName: "Hiashi Hyuga",
    gender: "Male",
    affiliations: [
      "Konoha"
    ],
    kekkeiGenkais: [
      {
        name: "Byakugan", type: "Dôjutsu"
      }
    ],
    kekkeiGenkaiTypes: [
      "Dôjutsu"
    ],
    ninjaRank: "Jōnin",
    age: 46,
    debut: 78,
    classifications: [
      "None"
    ],
    species: null,
    natureTypes: [
      "None"
    ],
    status: "Alive",
    occupation: "Head of the Hyūga Clan",
    alias: null,
    jutsusTypes: [
      "Taijutsu"
    ],
  },
  {
    playerId: 92,
    playerName: "Katsuyu",
    gender: "Other",
    affiliations: [
      "Konoha"
    ],
    kekkeiGenkais: [
      {
        name: "None"
      }
    ],
    kekkeiGenkaiTypes: [
      "None"
    ],
    ninjaRank: "None",
    age: null,
    debut: 169,
    classifications: [
      "Summon"
    ],
    species: "Slug",
    natureTypes: [
      "None"
    ],
    status: "Alive",
    occupation: "None",
    alias: null,
    jutsusTypes: [
      "None"
    ],
  },
  {
    playerId: 93,
    playerName: "Gamakichi",
    gender: "Male",
    affiliations: [
      "Konoha"
    ],
    kekkeiGenkais: [
      {
        name: "None"
      }
    ],
    kekkeiGenkaiTypes: [
      "None"
    ],
    ninjaRank: "None",
    age: null,
    debut: 131,
    classifications: [
      "Sage",
      "Summon"
    ],
    species: "Toad",
    natureTypes: [
      "Water",
      "Fire"
    ],
    status: "Alive",
    occupation: "None",
    alias: null,
    jutsusTypes: [
      "Ninjutsu"
    ],
  },
  {
    playerId: 94,
    playerName: "Gyuki",
    gender: "Other",
    affiliations: [
      "Kumo"
    ],
    kekkeiGenkais: [
      {
        name: "None"
      }
    ],
    kekkeiGenkaiTypes: [
      "None"
    ],
    ninjaRank: "None",
    age: null,
    debut: 413,
    classifications: [
      "Tailed Beast"
    ],
    species: "Ushi-oni",
    natureTypes: [
      "None"
    ],
    status: "Alive",
    occupation: "None",
    alias: null,
    jutsusTypes: [
      "Ninjutsu"
    ],
  },
  {
    playerId: 95,
    playerName: "Choza Akimichi",
    gender: "Male",
    affiliations: [
      "Konoha"
    ],
    kekkeiGenkais: [
      {
        name: "None"
      }
    ],
    kekkeiGenkaiTypes: [
      "None"
    ],
    ninjaRank: "Jōnin",
    age: 42,
    debut: 137,
    classifications: [
      "None"
    ],
    species: null,
    natureTypes: [
      "None"
    ],
    status: "Alive",
    occupation: "Head of the Akimichi Clan",
    alias: null,
    jutsusTypes: [
      "Ninjutsu",
      "Taijutsu"
    ],
  },
  {
    playerId: 96,
    playerName: "Fukasaku",
    gender: "Male",
    affiliations: [
      "Konoha"
    ],
    kekkeiGenkais: [
      {
        name: "None"
      }
    ],
    kekkeiGenkaiTypes: [
      "None"
    ],
    ninjaRank: "None",
    age: null,
    debut: 375,
    classifications: [
      "Sage",
      "Summon"
    ],
    species: "Toad",
    natureTypes: [
      "Wind",
      "Water"
    ],
    status: "Alive",
    occupation: "Toad Elder",
    alias: null,
    jutsusTypes: [
      "Ninjutsu",
      "Genjutsu"
    ],
  },
  {
    playerId: 97,
    playerName: "Ao",
    gender: "Male",
    affiliations: [
      "Kiri"
    ],
    kekkeiGenkais: [
      {
        name: "Byakugan", type: "Dôjutsu"
      }
    ],
    kekkeiGenkaiTypes: [
      "Dôjutsu"
    ],
    ninjaRank: "Jōnin",
    age: 46,
    debut: 454,
    classifications: [
      "None"
    ],
    species: null,
    natureTypes: [
      "Water"
    ],
    status: "Deceased",
    occupation: "Fifth Mizukage's Bodyguard",
    alias: null,
    jutsusTypes: [
      "Ninjutsu",
      "Genjutsu",
      "Taijutsu"
    ],
  },
  {
    playerId: 98,
    playerName: "Koharu Utatane",
    gender: "Female",
    affiliations: [
      "Konoha"
    ],
    kekkeiGenkais: [
      {
        name: "None"
      }
    ],
    kekkeiGenkaiTypes: [
      "None"
    ],
    ninjaRank: "None",
    age: 73,
    debut: 93,
    classifications: [
      "None"
    ],
    species: null,
    natureTypes: [
      "None"
    ],
    status: "Alive",
    occupation: "Councillor",
    alias: null,
    jutsusTypes: [
      "None"
    ],
  },
  {
    playerId: 99,
    playerName: "Mifune",
    gender: "Male",
    affiliations: [
      "Land of Iron"
    ],
    kekkeiGenkais: [
      {
        name: "None"
      }
    ],
    kekkeiGenkaiTypes: [
      "None"
    ],
    ninjaRank: "None",
    age: 65,
    debut: 456,
    classifications: [
      "None"
    ],
    species: null,
    natureTypes: [
      "None"
    ],
    status: "Alive",
    occupation: "General",
    alias: null,
    jutsusTypes: [
      "None"
    ],
  },
  {
    playerId: 100,
    playerName: "Kurenai Yuhi",
    gender: "Female",
    affiliations: [
      "Konoha"
    ],
    kekkeiGenkais: [
      {
        name: "None"
      }
    ],
    kekkeiGenkaiTypes: [
      "None"
    ],
    ninjaRank: "Jōnin",
    age: 32,
    debut: 34,
    classifications: [
      "None"
    ],
    species: null,
    natureTypes: [
      "None"
    ],
    status: "Alive",
    occupation: "None",
    alias: null,
    jutsusTypes: [
      "Genjutsu"
    ],
  },
  {
    playerId: 101,
    playerName: "Inoichi Yamanaka",
    gender: "Male",
    affiliations: [
      "Konoha"
    ],
    kekkeiGenkais: [
      {
        name: "None"
      }
    ],
    kekkeiGenkaiTypes: [
      "None"
    ],
    ninjaRank: "Jōnin",
    age: 42,
    debut: 137,
    classifications: [
      "None"
    ],
    species: null,
    natureTypes: [
      "Water"
    ],
    status: "Deceased",
    occupation: "Head of the Yamanaka Clan",
    alias: null,
    jutsusTypes: [
      "Ninjutsu"
    ],
  },
  {
    playerId: 102,
    playerName: "Jugo",
    gender: "Male",
    affiliations: [
      "Oto",
      "Akatsuki"
    ],
    kekkeiGenkais: [
      {
        name: "Jūgo's Clan's Kekkei Genkai", type: "Body Enhancement"
      },
    ],
    kekkeiGenkaiTypes: [
      "Body Enhancement"
    ],
    ninjaRank: "None",
    age: 19,
    debut: 348,
    classifications: [
      "Sage"
    ],
    species: null,
    natureTypes: [
      "Wind",
      "Earth",
      "Water"
    ],
    status: "Alive",
    occupation: "None",
    alias: null,
    jutsusTypes: [
      "None"
    ],
  },
  {
    playerId: 103,
    playerName: "A (Fourth Raikage)",
    gender: "Male",
    affiliations: [
      "Kumo"
    ],
    kekkeiGenkais: [
      {
        name: "None"
      }
    ],
    kekkeiGenkaiTypes: [
      "None"
    ],
    ninjaRank: "Kage",
    age: 47,
    debut: 416,
    classifications: [
      "None"
    ],
    species: null,
    natureTypes: [
      "Lightning",
      "Earth",
      "Water"
    ],
    status: "Alive",
    occupation: "Raikage",
    alias: "Raikage",
    jutsusTypes: [
      "Ninjutsu",
      "Taijutsu"
    ],
  },
  {
    playerId: 104,
    playerName: "Onoki",
    gender: "Male",
    affiliations: [
      "Iwa"
    ],
    kekkeiGenkais: [
      {
        name: "Lava Release", type: "Nature Transformation"
      },
    ],
    kekkeiGenkaiTypes: [
      "Nature Transformation"
    ],
    ninjaRank: "Kage",
    age: 79,
    debut: 454,
    classifications: [
      "None"
    ],
    species: null,
    natureTypes: [
      "Earth",
      "Fire",
      "Wind",
      "Lightning"
    ],
    status: "Alive",
    occupation: "Tsuchikage",
    alias: null,
    jutsusTypes: [
      "Ninjutsu"
    ],
  },
]