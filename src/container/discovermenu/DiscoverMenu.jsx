import DiscoverCard from "../../components/DiscoverCard/DiscoverCard";
import "./discovermenu.css";
import momo from "../../assets/momo.svg";
import steak from "../../assets/steak.svg";
import { useEffect, useState } from "react";
import DiscoverContainer from "../../components/DiscoverCard/DiscoverContainer";

export default function DiscoverMenu() {
  const [selectedItem, setSelectedItem] = useState(1);

  useEffect(() => {
    console.log(selectedItem);
  }, [selectedItem]);

  const handleSelect = item => {
    console.log(item);
    setSelectedItem(item);
  };

  const discoverMenu = [
    {
      id: 1,
      name: "Momo",
      image: momo,
    },
    {
      id: 2,
      name: "Steak",
      image: steak,
    },
    {
      id: 3,
      name: "Momo",
      image: momo,
    },
    {
      id: 4,
      name: "Momo",
      image: momo,
    },
    {
      id: 5,
      name: "Steak",
      image: steak,
    },
  ];

  return (
    <>
      <div className='discover-container'>
        <div className='discover-title d-flex flex-column mt-5 mb-5'>
          <h1>Discover Menu</h1>
          <button className='w-50'></button>
        </div>

        <div className='discover-icons'>
          <div className='discover-card'>
            {discoverMenu.map(item => (
              <DiscoverCard
                key={item.id}
                id={item.id}
                Logo={item.image}
                title={item.name}
                selectedItem={selectedItem}
                onClick={() => handleSelect(item.id)}
              />
            ))}
          </div>
        </div>
      </div>

      {selectedItem
        ? discoverMenu.map(item =>
            item.id === selectedItem ? (
              <div
                className='d-flex flex-column align-items-center'
                key={item.id}
              >
                <DiscoverContainer title={item.name} />
              </div>
            ) : null
          )
        : null}
    </>
  );
}
