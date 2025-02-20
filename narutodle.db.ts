const db = [
  {
    championId: 0,
    championName: "Minato Namikaze",
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
    championId: 1,
    championName: "Itachi Uchiha",
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
    championId: 2,
    championName: "Naruto Uzumaki",
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
    championId: 3,
    championName: "Kakashi Hatake",
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
    championId: 4,
    championName: "Sakura Haruno",
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
    championId: 5,
    championName: "Shisui Uchiha",
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
    championId: 6,
    championName: "Sakumo Hatake",
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
    championId: 7,
    championName: "Madara Uchiha",
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
    championId: 8,
    championName: "Obito Uchiha",
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
    championId: 9,
    championName: "Hinata Hyuga",
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
    championId: 10,
    championName: "Jiraiya",
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
    championId: 11,
    championName: "Sasuke Uchiha",
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
    championId: 12,
    championName: "Shikamaru Nara",
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
    championId: 13,
    championName: "Neji Hyuga",
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
    championId: 14,
    championName: "Tobirama Senju",
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
    championId: 15,
    championName: "Hashirama Senju",
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
    championId: 16,
    championName: "Deidara",
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
    championId: 17,
    championName: "Gaara",
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
    championId: 18,
    championName: "Sasori",
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
    championId: 19,
    championName: "Might Guy",
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
    championId: 20,
    championName: "Hidan",
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
    championId: 21,
    championName: "Rock Lee",
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
    championId: 22,
    championName: "Kushina Uzumaki",
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
    championId: 23,
    championName: "Orochimaru",
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
    championId: 24,
    championName: "Kurama",
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
    championId: 25,
    championName: "Zabuza Momochi",
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
    championId: 26,
    championName: "Nagato",
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
    championId: 27,
    championName: "Kaguya Otsutsuki",
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
    championId: 28,
    championName: "Iruka Umino",
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
    championId: 29,
    championName: "Fugaku Uchiha",
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
    championId: 30,
    championName: "Tsunade",
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
    championId: 31,
    championName: "Haku",
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
    championId: 32,
    championName: "Tenten",
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
    championId: 33,
    championName: "Mito Uzumaki",
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
    championId: 34,
    championName: "Yamato",
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
    championId: 35,
    championName: "Kisame Hoshigaki",
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
    championId: 36,
    championName: "Teuchi",
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
    championId: 37,
    championName: "Konan",
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
    championId: 38,
    championName: "Temari",
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
    championId: 39,
    championName: "Sai",
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
    championId: 40,
    championName: "Killer B",
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
    championId: 41,
    championName: "Indra Otsutsuki",
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
    championId: 42,
    championName: "Hiruzen Sarutobi",
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
    championId: 43,
    championName: "Izuna Uchiha",
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
    championId: 44,
    championName: "Rin Nohara",
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
    championId: 45,
    championName: "Kiba Inuzuka",
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
    championId: 46,
    championName: "Kimimaro",
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
    championId: 47,
    championName: "Kakuzu",
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
    championId: 48,
    championName: "Might Duy",
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
    championId: 49,
    championName: "Ino Yamanaka",
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
    championId: 50,
    championName: "Kankuro",
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
    championId: 51,
    championName: "Kabuto Yakushi",
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
    championId: 52,
    championName: "Mei Terumi",
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
    championId: 53,
    championName: "Shino Aburame",
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
    championId: 54,
    championName: "Suigetsu Hozuki",
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
    championId: 55,
    championName: "Genma Shiranui",
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
    championId: 56,
    championName: "Hagoromo Otsutsuki",
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
    championId: 57,
    championName: "Asuma Sarutobi",
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
    championId: 58,
    championName: "Tayuya",
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
    championId: 59,
    championName: "Konohamaru Sarutobi",
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
    championId: 60,
    championName: "Akamaru",
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
    championId: 61,
    championName: "Karin",
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
    championId: 62,
    championName: "Danzo Shimura",
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
    championId: 63,
    championName: "Hayate Gekko",
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
    championId: 64,
    championName: "Asura Otsutsuki",
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
    championId: 65,
    championName: "Utakata",
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
    championId: 66,
    championName: "Yagura Karatachi",
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
    championId: 67,
    championName: "Samui",
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
    championId: 68,
    championName: "Black Zetsu",
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
    championId: 69,
    championName: "Darui",
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
    championId: 70,
    championName: "Yahiko",
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
    championId: 71,
    championName: "Shikaku Nara",
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
    championId: 72,
    championName: "Gamabunta",
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
    championId: 73,
    championName: "Ten-Tails",
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
    championId: 74,
    championName: "Chiyo",
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
    championId: 75,
    championName: "Mikoto Uchiha",
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
    championId: 76,
    championName: "Shizune",
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
    championId: 77,
    championName: "Choji Akimichi",
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
    championId: 78,
    championName: "Hanzo",
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
    championId: 79,
    championName: "Pakkun",
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
    championId: 80,
    championName: "Omoi",
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
    championId: 81,
    championName: "Gamatatsu",
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
    championId: 82,
    championName: "Chojuro",
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
    championId: 83,
    championName: "Gengetsu Hozuki",
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
    championId: 84,
    championName: "Yugito Nii",
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
    championId: 85,
    championName: "Mu",
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
    championId: 86,
    championName: "Karui",
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
    championId: 87,
    championName: "Baki",
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
    championId: 88,
    championName: "Homura Mitokado",
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
    championId: 89,
    championName: "Ebisu",
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
    championId: 90,
    championName: "Shima",
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
    championId: 91,
    championName: "Hiashi Hyuga",
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
    championId: 92,
    championName: "Katsuyu",
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
    championId: 93,
    championName: "Gamakichi",
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
    championId: 94,
    championName: "Gyuki",
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
    championId: 95,
    championName: "Choza Akimichi",
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
    championId: 96,
    championName: "Fukasaku",
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
    championId: 97,
    championName: "Ao",
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
    championId: 98,
    championName: "Koharu Utatane",
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
    championId: 99,
    championName: "Mifune",
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
    championId: 100,
    championName: "Kurenai Yuhi",
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
    championId: 101,
    championName: "Inoichi Yamanaka",
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
    championId: 102,
    championName: "Jugo",
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
    championId: 103,
    championName: "A (Fourth Raikage)",
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
    championId: 104,
    championName: "Onoki",
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