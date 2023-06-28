import React, { useEffect, useState } from "react";
import CardData from "../common/CardData";

function MyCards({ cards, searchCards, PageNo }) {
  const [mycards, setmycards] = useState([]);
  const [filterData, setfilterData] = useState([]);

  const [ownerId, setownerId] = useState(2);

  const getFilteredCards = (cards) => {
    const filteredCards = cards.filter((val) => {
      console.log(val.owner_id === ownerId);
      return val.owner_id === ownerId;
    });
    setmycards(filteredCards);
    filteredData();
  };

  const filteredData = () => {
    console.log(mycards, "mycardsmycards");
    const filteredCards = mycards
      .filter((val) =>
        val.name.toLowerCase().includes(searchCards.toLowerCase())
      )
      .slice(0 + PageNo, PageNo + 10);

    setfilterData(filteredCards);
  };

  useEffect(() => {
    getFilteredCards(cards);
  }, [cards, searchCards, PageNo]);

  useEffect(() => {
    console.log(cards, "cards2");
  }, []);
  return (
    <div>
      <CardData mycards={filterData} />
    </div>
  );
}

export default MyCards;
