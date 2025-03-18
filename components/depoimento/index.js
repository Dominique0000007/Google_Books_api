import react from 'react';
import './depoimento.css';

export default function depoimento( {nome,foto,texto}){
 return(
   <div className="depoimento">
      <img src={foto} alt={foto} />
      <h3>[nome]</h3>
      <p>[texto]</p>
   </div>
 );
}