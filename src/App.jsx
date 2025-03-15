import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import translations from "./assets/translate.json";
import Card from "./components/Card";

const App = () => {
  const [state, setState] = useState([
    {
      id: "1",
      txt: translations.boy,
      cardimg: "boy",
      current: false,
    },

    {
      id: "3",
      txt: translations.cock,
      cardimg: "cock",
      current: false,
    },

    {
      id: "5",
      txt: translations.dress,
      cardimg: "dress",
      current: false,
    },
    {
      id: "10",
      txt: translations.home,
      cardimg: "home",
      current: false,
    },
    {
      id: "6",
      txt: translations.dress,
      cardimg: "dress",
      current: false,
    },
    {
      id: "7",
      txt: translations.duck,
      cardimg: "duck",
      current: false,
    },

    {
      id: "8",
      txt: translations.fish,
      cardimg: "fish",
      current: false,
    },
    {
      id: "9",
      txt: translations.fish,
      cardimg: "fish",
      current: false,
    },
    {
      id: "4",
      txt: translations.cock,
      cardimg: "cock",
      current: false,
    },
    {
      id: "2",
      txt: translations.boy,
      cardimg: "boy",
      current: false,
    },
    {
      id: "11",
      txt: translations.home,
      cardimg: "home",
      current: false,
    },
    {
      id: "12",
      txt: translations.duck,
      cardimg: "duck",
      current: false,
    },
  ]);

  const [selectedCards, setSelectedCards] = useState([]);

  const shuffleArray = (arr) => {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  useEffect(() => {
    setState((prevState) => shuffleArray(prevState));
  }, []);

  const checkMatch = ([card1, card2]) => {
    if (card1.cardimg === card2.cardimg) {
      setSelectedCards([]);
    } else {
      setState((prevState) =>
        prevState.map((elem) =>
          elem.id === card1.id || elem.id === card2.id
            ? { ...elem, current: false }
            : elem
        )
      );
      setSelectedCards([]);
    }
  };

  const handleFlip = (id) => {
    if (selectedCards.length === 2) return;

    setState((prevState) =>
      prevState.map((elem) =>
        elem.id === id ? { ...elem, current: true } : elem
      )
    );

    setSelectedCards((prevSelected) => {
      const foundCard = state.find((elem) => elem.id === id);

      const newSelectedCards = [...prevSelected, foundCard];

      if (newSelectedCards.length === 2) {
        setTimeout(() => checkMatch(newSelectedCards), 1000);
      }

      return newSelectedCards;
    });
  };

  return (
    <div className="shellBody">
      <div className="cards_container">
        {state.map((_data, _index) => {
          const arr = [0, 2, 5, 7, 8, 10];
          const backimg = arr.includes(_index) ? "egg1" : "egg2";
          console.log(backimg);
          return (
            <Card
              id={_data.id}
              src={`/images/${_data.cardimg}.png`}
              key={_index}
              text={_data.txt}
              backimgsrc={`/images/${backimg}.jpg`}
              onClick={() => handleFlip(_data.id)}
              flipped={_data.current}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
