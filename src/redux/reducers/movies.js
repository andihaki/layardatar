import { FETCH_MOVIES } from "../actionTypes";

import { API } from "../../constants";

const initialState = {
  movies: [
    {
      vote_count: 1,
      id: 568709,
      video: false,
      vote_average: 8.5,
      title: "Preman Pensiun",
      popularity: 76.322,
      poster_path: "/7xfWyoz4SF5LHZ713eMtC2aZ0lT.jpg",
      original_language: "id",
      original_title: "Preman Pensiun",
      genre_ids: [35, 18],
      backdrop_path: "/rrznEEdi4OVPsrqbEgmCE7nzjPs.jpg",
      adult: false,
      overview: "",
      release_date: "2019-01-17"
    },
    {
      vote_count: 5,
      id: 516716,
      video: false,
      vote_average: 8.2,
      title: "Milly & Mamet",
      popularity: 14.173,
      poster_path: "/m94vmFQi2bXmTZS1ry5sJ5y4RNS.jpg",
      original_language: "id",
      original_title: "Milly & Mamet",
      genre_ids: [18, 10749, 35],
      backdrop_path: "/swRvr9iQ7qfmq5Xls4CKhzaERo3.jpg",
      adult: false,
      overview:
        "Milly and Mamet are busy taking care of their baby. One day, Mamet met Alexandra, a close friend at college, who now had investors to finance the restaurant ideas they had once wanted together.",
      release_date: "2018-12-20"
    },
    {
      vote_count: 0,
      id: 573096,
      video: false,
      vote_average: 0,
      title: "Terimakasih Cinta",
      popularity: 8.681,
      poster_path: "/zfJcOyLNGXnn3dJlub8qOU4eRov.jpg",
      original_language: "id",
      original_title: "Terimakasih Cinta",
      genre_ids: [18],
      backdrop_path: null,
      adult: false,
      overview:
        "Eva just enters high school when she meets Ryan, because both belong to a group of student who have a disease during the School Orientation Period. Ryan thinks that Eva is just pretending to be sick like him. An incident makes Ryan take Eva to the hospital and has to be treated. Lupus is the doctor's diagnosis of Eva's disease after a series of tests. Sugiarti and Badarudin, Eva's parents, hesitate to tell Eva about her illness. Her roommate, Dewi, a patient with pancreatic cancer, makes a beautiful friendship. Eva continues to wait for Ryan who does not come again because he is banned by his parents. Dewi also always awaits the presence of her brother, Nanan, who always comes at night when Dewi falls asleep, Nanan is unable to see Dewi suffer. Dewi is devastated when Dewi leaves and Ryan ends their relationship. The same feeling of loss makes Eva and Nanan close.",
      release_date: "2019-01-17"
    },
    {
      vote_count: 1,
      id: 573106,
      video: false,
      vote_average: 5.5,
      title: "Mata Batin 2",
      popularity: 8.576,
      poster_path: "/lW8Rf0Sma0qu8DziaDgYRLtXstq.jpg",
      original_language: "id",
      original_title: "Mata Batin 2",
      genre_ids: [],
      backdrop_path: "/uTbPhjKXiWjRAqmQ5SnX7TKZk7K.jpg",
      adult: false,
      overview:
        "After her sister died, Alia decides to start a new life by living in an orphanage owned by Mrs Laksmi and Mr Fadli as well as doing social work there. But Alia feels something wrong with the orphanage. Moreover, Nadia, one of the orphanage who apparently also has an inner eyes like Alia, can hears mysterious voices asking for help from all over the walls of the house. Alia and Nadia open a mysterious locked room. Since then disasters begin. It turns out that Alia and Nadia had made a big mistake and releases Darmah, a vengeful spirit that was deliberately locked in the room. Together with Mrs Windu, the paranormal and mentor of her inner eyes, Alia must confront Darmah and save the orphanage.",
      release_date: "2019-01-17"
    },
    {
      vote_count: 4,
      id: 566100,
      video: false,
      vote_average: 8.5,
      title: "Keluarga Cemara",
      popularity: 6.96,
      poster_path: "/3gRuRrnVg0YF3SA5IS2ejC5OBFh.jpg",
      original_language: "id",
      original_title: "Keluarga Cemara",
      genre_ids: [10751, 18],
      backdrop_path: "/fFA4uuNaEzk2omaxRRZg30azy2P.jpg",
      adult: false,
      overview:
        "Tells about Abah and Emak who have to face problems. Then their two children, Euis and Ara must face the new situation that befell their family. Euis who had to change schools and adapt to her new friends, and Abah who had to change jobs. A simple family story full of warmth and affection.",
      release_date: "2019-01-03"
    },
    {
      vote_count: 0,
      id: 535736,
      video: false,
      vote_average: 0,
      title: "DreadOut",
      popularity: 6.092,
      poster_path: "/cakRX3ujz1BchB4PKi1TZGqJh60.jpg",
      original_language: "id",
      original_title: "DreadOut",
      genre_ids: [27, 53],
      backdrop_path: "/crNBh2zIipjITjV0QqUeSQjKnxZ.jpg",
      adult: false,
      overview:
        "Based on a terrifying local survival horror video game, a group of students enter an abandoned building for popularity but end up discovering a mystic portal to the land of the dead.",
      release_date: "2019-01-03"
    },
    {
      vote_count: 0,
      id: 572088,
      video: false,
      vote_average: 0,
      title: "Perjanjian Dengan Iblis",
      popularity: 4.751,
      poster_path: "/v1tiTnHfsbERg7DQOUSGLDZv2n2.jpg",
      original_language: "id",
      original_title: "Perjanjian Dengan Iblis",
      genre_ids: [27],
      backdrop_path: "/1JDse6D2nifkyehj2OAvmnVldJR.jpg",
      adult: false,
      overview:
        "Annisa married Bara, a widower with a daughter named Lara. Bara takes a picnic to the island that is still rarely visited by tourists, Bengalor Island, so that his wife and child could get familiar with each other. The island of Bengalor turns out to be a mystery. Annisa is surprised by the appearance of a scary child. Lara also sees a figure similar to her biological mother who is dead. Bara doesn't believe the story of Annisa and Lara. This scary and tense atmosphere actually bring Lara closer to Annisa. Both are determined to protect each other.",
      release_date: "2019-01-10"
    },
    {
      vote_count: 1,
      id: 570118,
      video: false,
      vote_average: 6.5,
      title: "Asal Kau Bahagia",
      popularity: 4.333,
      poster_path: "/sqpYna7fbk9LaXtxc4KuNwsGBXV.jpg",
      original_language: "id",
      original_title: "Asal Kau Bahagia",
      genre_ids: [10749, 18],
      backdrop_path: "/4ZgGTp0XLAPfGc0uub2TTpZgvl3.jpg",
      adult: false,
      overview:
        "A love story of Aliando and Aurora. Ali gets a severe accident and has to lie in a coma. Although his body lays helpless and has to race between life and death, Ali's soul lives like a normal human. Aurora is one of the reasons Ali struggles to get well soon. Ali does not want his beloved girlfriend to be always sad because of his condition. Over time Ali realizes that something he has never known. A big secret that has been covered up. The big secret associated with their love story.",
      release_date: "2018-12-27"
    },
    {
      vote_count: 0,
      id: 572083,
      video: false,
      vote_average: 0,
      title: "After Met You",
      popularity: 4.288,
      poster_path: "/8Ml1eEKGuBDCjumYpRJuZJNx8de.jpg",
      original_language: "id",
      original_title: "After Met You",
      genre_ids: [10749, 18],
      backdrop_path: "/tAhqeEEFazXFG6CNGgTEP0sKq3K.jpg",
      adult: false,
      overview:
        "Ari, the coolest and most handsome guy at his school, is challenged by his friends, The Daks, to find a girlfriend who is definitely not interested in him. Ara, an introverted and smart girl in school, is Ari's target. It turns out that Ara is the daughter of Ari’s producer as a DJ. Ari is shocked because all of Ara's views about him. This make him question himself. Azka, Ari's old friend, then moves to Ari’s school and close to Ara. Ari, who tries to hide his inner wounds because of his family's condition, also has to try to win Ara's heart. The truth about the betting is finally revealed.",
      release_date: "2019-01-10"
    },
    {
      vote_count: 0,
      id: 572092,
      video: false,
      vote_average: 0,
      title: "Lagi-Lagi Ateng",
      popularity: 4.278,
      poster_path: "/310AoB3CiwnK0l68lDsJP0w4ZUY.jpg",
      original_language: "id",
      original_title: "Lagi-Lagi Ateng",
      genre_ids: [35],
      backdrop_path: "/tH9uLdR11nnw61iARYeSixqW3f9.jpg",
      adult: false,
      overview:
        "The story of Ateng and his twin Agung who have been separated for a long time. Ateng and Iskak, his friend, go to Jakarta for the first time. Unexpectedly, Ateng meets Agung who has the same body and face as himself. Iskak and Agung's personal assistant, Cemplon are also surprised. It is revealed the fact that they are twin brothers who were separated. Ateng and Agung later realize that their parents were still complete even though they were divorced. So the idea arises to exchange places to meet with parents they have never met. The plan is made to reunite the family.",
      release_date: "2019-01-10"
    },
    {
      vote_count: 0,
      id: 568754,
      video: false,
      vote_average: 0,
      title: "Silam",
      popularity: 3.151,
      poster_path: "/fR5RvZBuUzWiJRSaCDf9TKd8Paj.jpg",
      original_language: "en",
      original_title: "Silam",
      genre_ids: [27],
      backdrop_path: "/g8j2EBBzo7zLVMUrC28inGmLkUA.jpg",
      adult: false,
      overview:
        "Baskara, he always experienced bad treatment at school and at home, by his own biological mother Fina. Because he could not stand it, he decided to run away to the house of Om Anton who was his father's twin brother.",
      release_date: "2018-12-13"
    },
    {
      vote_count: 0,
      id: 551027,
      video: false,
      vote_average: 0,
      title: "Ave Maryam",
      popularity: 3.139,
      poster_path: "/hZ0NazmHhlnJ0NJutskW1HHEsg4.jpg",
      original_language: "id",
      original_title: "Ave Maryam",
      genre_ids: [18],
      backdrop_path: null,
      adult: false,
      overview:
        "Sister Maryam spends her days taking care of the residents in a home for elderly nuns. Maryam finds herself forced to make a choice between staying true to her vow or abandoning everything for the pursuit of personal happiness.",
      release_date: "2018-12-28"
    },
    {
      vote_count: 1,
      id: 566097,
      video: false,
      vote_average: 7.5,
      title: "Sesuai Aplikasi",
      popularity: 1.312,
      poster_path: "/tkvxOY9kAvFBIbzb3UNdV3UqioE.jpg",
      original_language: "id",
      original_title: "Sesuai Aplikasi",
      genre_ids: [35],
      backdrop_path: null,
      adult: false,
      overview:
        "Two online motorcycle taxi drivers, Pras and Duras, were forced by Sakti the great thief to take back his stolen diamond which was accidentally carried by the dangdut diva Sofiyah.",
      release_date: "2018-12-06"
    },
    {
      vote_count: 0,
      id: 551024,
      video: false,
      vote_average: 0,
      title: "27 Steps of May",
      popularity: 0.665,
      poster_path: "/r2JkrIlFtydNLIkZS7X10EXoSt.jpg",
      original_language: "id",
      original_title: "27 Steps of May",
      genre_ids: [18],
      backdrop_path: null,
      adult: false,
      overview:
        "Eight years ago, 14 year old May was raped by a group of men. May’s father is devastated, blaming himself for not being able to keep his daughter safe. Traumatized significantly by this incident, May with draws completely from life.",
      release_date: "2018-12-20"
    },
    {
      vote_count: 1,
      id: 567983,
      video: false,
      vote_average: 7.5,
      title: "After.11",
      popularity: 0.6,
      poster_path: "/uYu0SNghO0viqZYs0Lem2n1lczq.jpg",
      original_language: "id",
      original_title: "After.11",
      genre_ids: [28],
      backdrop_path: null,
      adult: false,
      overview:
        "After.11 stars Dian Sastrowardoyo (villainess from The Night Comes for Us) as Agent D, a secret agent whose latest situation finds her held captive and forced to choose between her mission, and her family.",
      release_date: "2018-12-12"
    },
    {
      vote_count: 0,
      id: 571042,
      video: false,
      vote_average: 0,
      title: "Elegi Melodi",
      popularity: 0.6,
      poster_path: "/v1BUGs66ga9btyV4DCQPpmIVuu8.jpg",
      original_language: "id",
      original_title: "Elegi Melodi",
      genre_ids: [18],
      backdrop_path: null,
      adult: false,
      overview: "Add the plot.",
      release_date: "2018-12-13"
    },
    {
      vote_count: 0,
      id: 566578,
      video: false,
      vote_average: 0,
      title: "Tusuk Jelangkung",
      popularity: 0.6,
      poster_path: "/aUijN2lUOZe3zRyJlN9B6f9at4y.jpg",
      original_language: "id",
      original_title: "Tusuk Jelangkung",
      genre_ids: [27],
      backdrop_path: "/8QJqlHVvrHY2dbMu5yaaE7wa3KZ.jpg",
      adult: false,
      overview:
        'Taman Lubang Buaya, which is famous because of its creepiness has been choosen for the next vlogging location. Out of the plan, Sisi dissapeared after "Calling" an evil spirit for being famous on social media. Can Sisi finally espace?',
      release_date: "2018-12-06"
    }
  ]
};

const fetchMovies = (state, action) => {
  return fetch(API)
    .then(response => response.json())
    .then(data => data.results);
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIES:
      return fetchMovies(state, action);
    default:
      return state;
  }
}
