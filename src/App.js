import "./App.css";
import Ecom from "./Ecom";

function App() {
  const items = {
    formal: [
      {
        img: "formal2.jpeg",
        p: "AvocadoG suit",
        price: "",
      },
      {
        img: "formal4.jpeg",
        p: "Double breast suit",
        price: "",
      },
      {
        img: "formal3.jpeg",
        p: "Ask about this",
        price: "",
      },
      {
        img: "formal1.jpeg",
        p: "Ask about this",
        price: "",
      },
    ],
    allformal: [
      {
        img: "formal5.jpeg",
        p: "GreyD suit",
        price: "",
      },
      {
        img: "formal6.jpeg",
        p: "3 in 1 BLK suit",
        price: "",
      },
    ],
    bags: [
      {
        img: "bag6.jpeg",
        p: "Ask about this",
        price: "R400.00",
      },
      {
        img: "bag1.jpeg",
        p: "Ask about this",
        price: "R400.00",
      },
      {
        img: "bag2.jpeg",
        p: "Ask about this",
        price: "",
      },
      {
        img: "bag3.jpeg",
        p: "Ask about this",
        price: "",
      },
      {
        img: "bag4.jpeg",
        p: "Ask about this",
        price: "",
      },
      {
        img: "bag5.jpeg",
        p: "Ask about this",
        price: "",
      },
    ],
    women: [
      {
        img: "woman1.jpeg",
        p: "Zevity rainbow blue coat",
        price: "",
      },
      {
        img: "woman2.jpeg",
        p: "Ask about this",
        price: "",
      },
      {
        img: "woman3.jpeg",
        p: "Zevity rainbow green coat",
        price: "",
      },
      {
        img: "woman4.jpeg",
        p: "Ask about this",
        price: "",
      },
      {
        img: "woman5.jpeg",
        p: "Yello dust",
        price: "",
      },
      {
        img: "woman6.jpeg",
        p: "Vigro Diva",
        price: "$440.40",
      },
      {
        img: "woman7.jpeg",
        p: "Kp slim dress",
        price: "$440.40",
      },
      {
        img: "woman8.jpeg",
        p: "Side Rainbow",
        price: "",
      },
    ],
    allwomen: [
      {
        img: "woman9.jpeg",
        p: "bum-but",
        price: "",
      },
      {
        img: "woman0.jpeg",
        p: "Vintage boss Dress",
        price: "",
      },
      {
        img: "woman11.jpeg",
        p: "long veva",
        price: "R450.00",
      },
      {
        img: "woman12.jpeg",
        p: "CK dress",
        price: "",
      },
      {
        img: "woman13.jpeg",
        p: "Ask about this",
        price: "R380.00",
      },
      {
        img: "woman14.jpeg",
        p: "Ask about this",
        price: "",
      },
      {
        img: "woman15.jpeg",
        p: "Black and White T-Shirt dress",
        price: "R380.00",
      },
      {
        img: "woman16.jpeg",
        p: "Ask about this",
        price: "R400.00",
      },
      {
        img: "woman17.jpeg",
        p: "Ask about this",
        price: "R380.00",
      },
      {
        img: "woman18.jpeg",
        p: "Ask about this",
        price: "R380.00",
      },
      {
        img: "woman19.jpeg",
        p: "Ask about this",
        price: "R370.00",
      },
      {
        img: "woman20.jpeg",
        p: "Ask about this",
        price: "R380.00",
      },
      {
        img: "woman21.jpeg",
        p: "One hand dress",
        price: "R380.00",
      },
      {
        img: "woman22.jpeg",
        p: "Lemon tree",
        price: "R390.00",
      },
    ],
    kidz: [
      {
        img: "kid1.jpeg",
        p: "Ask about this",
        price: "",
      },
      {
        img: "kid2.jpeg",
        p: "Ask about this",
        price: "",
      },
      {
        img: "kid3.jpeg",
        p: "Baby crawl cushion",
        price: "R400.00",
      },
      {
        img: "kid4.jpeg",
        p: "Ask about this",
        price: "",
      },
    ],
    shoes: [
      {
        img: "shoes1.jpeg",
        p: "Ask about this",
        price: "",
      },
      {
        img: "shoes2.jpeg",
        p: "Ask about this",
        price: "",
      },
      {
        img: "shoes3.jpeg",
        p: "Ask about this",
        price: "",
      },
      {
        img: "shoes4.jpeg",
        p: "Ask about this",
        price: "",
      },
      {
        img: "shoes5.jpeg",
        p: "Ask about this",
        price: "",
      },
      {
        img: "shoes6.jpeg",
        p: "Ask about this",
        price: "",
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
