import style from './Navegacion.module.css';
function Navegacion() {
  return (
    <div className={style.Navegacion}>
      <div
        onClick={() => {
          if (A !== style.Mid) {
            B === style.Mid && setB(A);
            C === style.Mid && setC(A);
            setA(style.Mid);
          }
        }}
        className={A}
      >
        <Poligon sides={8} bg={'#fa0'}>
          Atención
        </Poligon>
      </div>
      <div
        onClick={() => {
          if (B !== style.Mid) {
            A === style.Mid && setA(B);
            C === style.Mid && setC(B);
            setB(style.Mid);
          }
        }}
        className={B}
      >
        <Poligon sides={8} bg={'#fa0'}>
          Blog
        </Poligon>
      </div>
      <div
        onClick={() => {
          if (C !== style.Mid) {
            A === style.Mid && setA(C);
            B === style.Mid && setB(C);
            setC(style.Mid);
          }
        }}
        className={C}
      >
        <Poligon sides={8} bg={'#fa0'}>
          Cuenta
        </Poligon>
      </div>
    </div>
  );
}
export default Navegacion;
