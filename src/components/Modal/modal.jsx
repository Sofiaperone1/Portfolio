import React, { useState } from 'react';
import Modal from 'react-modal';

import "./modal.css"

Modal.setAppElement('#root');

const ModalGaleria = ({img2, img3, img4, img}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const abrirModal = () => {
    setModalIsOpen(true);
  };

  const cerrarModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <a className="verMas" href="#" style={{backgroundColor:"#c86420"}} onClick={abrirModal}>See more pictures</a>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={cerrarModal}
        contentLabel="Galería de Fotos"
      >
       
        <img src={img} alt="Imagen 0" />
        <img src={img2} alt="Imagen 1" />
        <img src={img3} alt="Imagen 2" />
        <img src={img4} alt="Imagen 3" />
        {/* Agrega más imágenes aquí */}
        <button style={{backgroundColor:"red", marginTop:"1%", border:"transparent", padding:"0.8%", color:"white"}} onClick={cerrarModal}>Cerrar</button>
      </Modal>
    </div>
  );
};



export default ModalGaleria;