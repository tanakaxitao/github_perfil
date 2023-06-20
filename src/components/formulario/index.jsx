import { useState, useEffect } from "react";

const Formulario = () => {
  let [MateriaA, setMateriaA] = useState(0);
  let [MateriaB, setMateriaB] = useState(0);
  let [MateriaC, setMateriaC] = useState(0);
  let [nome, setNome] = useState("");

  const alteraNome = (evento) => {
    return evento.target.value;
  };

  useEffect(() => {
    return () => {
      console.log("o componente finalizou");
    };
  }, []);

  const renderizaResultado = () => {
    const soma = MateriaA + MateriaB + MateriaC;
    const media = soma / 3;

    if (media >= 7) {
      return `parabéns, ${nome} sua média foi ${media.toFixed(
        2
      )}, e você foi aprovado`;
    } else {
      return ` olá, ${nome} sua média foi ${media.toFixed(
        2
      )}, e você foi reprovado`;
    }
  };

  return (
    <form>
      {[1, 2, 3, 4, 5].map((item) => (
        <li key={item}>{item}</li>
      ))}
      <input
        type="text"
        placeholder="seu nome"
        onChange={(alteraNome) => setNome(alteraNome.target.value)}
      />
      <input
        type="number"
        placeholder="Nota máteria A"
        onChange={(evento) => setMateriaA(parseInt(evento.target.value))}
      />
      <input
        type="number"
        placeholder="Nota máteria B"
        onChange={(evento) => setMateriaB(parseInt(evento.target.value))}
      />
      <input
        type="number"
        placeholder="Nota máteria C"
        onChange={(evento) => setMateriaC(parseInt(evento.target.value))}
      />
      {renderizaResultado()}
    </form>
  );
};

export default Formulario;
