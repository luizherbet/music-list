import { useState } from 'react';
import data from './data';
import './index.css';

function Accodian() {
  const [selecionado, setSelecionado] = useState(null);

  function mostreSelecionado(id) {
    setSelecionado(id === selecionado ? null : id);
  }

  return (
    <div className="content">
      {data.length > 0
        ? data.map(dataItem => (
            <div className="item" key={dataItem.id}>
              <div
                className="titulo"
                onClick={() => mostreSelecionado(dataItem.id)}
              >
                <span>{dataItem.title}</span>
                {selecionado === dataItem.id ? (
                  <span className="plus">-</span>
                ) : (
                  <span className="plus">+</span>
                )}
              </div>
              <div>
                {selecionado === dataItem.id ? (
                  <div className="music">{dataItem.music}</div>
                ) : null}
              </div>
            </div>
          ))
        : null}
    </div>
  );
}

export default Accodian;
