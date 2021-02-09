import "./App.css";
import Ecom from "./Ecom";

function App() {
  const items = {
    formal: [
      {
        img: "formal2.png",
        p: "Suit - Suit Coat Designer Formal",
        price: "$400.40",
      },
      {
        img: "formal5.png",
        p: "Suit - Suit Coat Designer Formal",
        price: "$400.40",
      },
      {
        img: "formal3.png",
        p: "Suit - Suit Coat Designer Formal",
        price: "$400.40",
      },
      {
        img: "formal4.png",
        p: "Suit - Suit Coat Designer Formal",
        price: "$400.40",
      },
    ],
    allformal: [
      {
        img: "formal3.png",
        p: "Suit - Suit Coat Designer Formal",
        price: "$400.40",
      },
      {
        img: "formal4.png",
        p: "Suit - Suit Coat Designer Formal",
        price: "$400.40",
      },
      {
        img: "formal2.png",
        p: "Suit - Suit Coat Designer Formal",
        price: "$400.40",
      },
      {
        img: "formal2.png",
        p: "Suit - Suit Coat Designer Formal",
        price: "$400.40",
      },
    ],
    allmen: [
      {
        img: "formal2.png",
        p: "Suit - Suit Coat Designer Formal",
        price: "$400.40",
      },
      {
        img: "formal3.png",
        p: "Suit - Suit Coat Designer Formal",
        price: "$400.40",
      },
      {
        img: "formal4.png",
        p: "Suit - Suit Coat Designer Formal",
        price: "$400.40",
      },
      {
        img: "formal2.png",
        p: "Suit - Suit Coat Designer Formal",
        price: "$400.40",
      },
    ],
    women: [
      {
        img: "dress1.png",
        p: "Suit - Suit Coat Designer Formal",
        price: "$400.40",
      },
      {
        img: "dress2.png",
        p: "Suit - Suit Coat Designer Formal",
        price: "$400.40",
      },
      {
        img: "dress3.png",
        p: "Suit - Suit Coat Designer Formal",
        price: "$400.40",
      },
      {
        img: "formal4.png",
        p: "Suit - Suit Coat Designer Formal",
        price: "$400.40",
      },
    ],
    allwomen: [
      {
        img: "formal2.png",
        p: "Suit - Suit Coat Designer Formal",
        price: "$400.40",
      },
      {
        img: "formal3.png",
        p: "Suit - Suit Coat Designer Formal",
        price: "$400.40",
      },
      {
        img: "formal4.png",
        p: "Suit - Suit Coat Designer Formal",
        price: "$400.40",
      },
      {
        img: "formal2.png",
        p: "Suit - Suit Coat Designer Formal",
        price: "$400.40",
      },
    ],
    kidz: [
      {
        img: "formal2.png",
        p: "Suit - Suit Coat Designer Formal",
        price: "$400.40",
      },
      {
        img: "formal5.png",
        p: "Suit - Suit Coat Designer Formal",
        price: "$400.40",
      },
      {
        img: "formal3.png",
        p: "Suit - Suit Coat Designer Formal",
        price: "$400.40",
      },
      {
        img: "formal4.png",
        p: "Suit - Suit Coat Designer Formal",
        price: "$400.40",
      },
    ],
    allkidz: [
      {
        img: "formal2.png",
        p: "Suit - Suit Coat Designer Formal",
        price: "$400.40",
      },
      {
        img: "formal3.png",
        p: "Suit - Suit Coat Designer Formal",
        price: "$400.40",
      },
      {
        img: "formal4.png",
        p: "Suit - Suit Coat Designer Formal",
        price: "$400.40",
      },
      {
        img: "formal2.png",
        p: "Suit - Suit Coat Designer Formal",
        price: "$400.40",
      },
    ],
  };
  return (
    <div className="App">
      <Ecom items={items} />
    </div>
  );
}

export default App;
