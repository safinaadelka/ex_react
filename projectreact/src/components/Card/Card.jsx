import "././Card.css";
import Heart from "/public/card/heart.png";
import Bag from "/public/card/black_bag.png";
import Button from "../../components/Button/Button";
import Foto from "/public/card/card_foto.jpg";
import { Link, useParams } from "react-router-dom";
import React, { useState } from "react";
import { catalog } from "../../data";
import Modal from "react-modal";
import Modalka from "../Modalka/Modalka";

export default function Card({ id, name, price, count, addCard }) {
  const product = catalog.find((product) => product.id === parseInt(id));

  const [modalIsOpen, setModalIsopen] = useState(false);

  function showModal() {
    setModalIsopen(true);
  }

  function closeModal() {
    setModalIsopen(false);
  }

  return (
    <div className="card">
      <img src={Foto} alt="Product" className="foto" />

      <h3 className="name">{name}</h3>
      <div className="card_actions">
        <h2 className="price">{price} ₽</h2>
        <p className="ostatok">{count} шт</p>
        <div className="actions">
          <button className="like">
            <img src={Heart} alt="" className="like_img" />
          </button>
          <button className="bag">
            <img src={Bag} alt="" className="bag_icon" />
          </button>
          <br />
        </div>
      </div>

      {product.count == 0 ? (
        <>
          <button onClick={showModal}>
            <Button title="Заказать" />
          </button>
          <Modal className="modal-okno" isOpen={modalIsOpen}>
            <div>
              <Modalka setModalIsopen={setModalIsopen} />
              <button className="close-btn" onClick={closeModal}>
                <Button title="Закрыть" />
              </button>
            </div>
          </Modal>
        </>
      ) : (
        <>
          <button onClick={addCard}>В корзину
      
          </button>
          <Link to={`${id}`}>
            <Button title="Подробнее" />
          </Link>
        </>
      )}
    </div>
  );
}
