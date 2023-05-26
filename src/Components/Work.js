import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Crea tu cuenta",
      text: "¿Ofreces o demandas suministros?",
    },
    {
      image: ChooseMeals,
      title: "Subcribete",
      text: "Para estar al tanto de encuentros empresariales",
    },
    {
      image: DeliveryMeals,
      title: "Transporte de insumos",
      text: "Para dar mas seguridad tus transacciones, opcionalmente contamos con descuento en transportes ",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <h1 className="primary-heading">Como operamos</h1>
        
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
