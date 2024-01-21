import React from "react";
import Card from "./Card";
import Footer from "./Footer";
import bachilleres from "../bachilleres.js";

function App() {
  return (
    <div>
      <h1 className="heading">Bachilleres Externado 1970</h1>
      {bachilleres.map(createCard)}
      <Footer />
    </div>
  );
}

function createCard(contact) {
  return (
    <Card
      key={contact.id}
      number={contact.id}
      img={contact.imgURL}
      name={contact.name}
      tel={contact.phone}
      email={contact.email}
    />
  );
}

export default App;
