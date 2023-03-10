import React from 'react';
import Button from './Button';

const OpenHours = () => {
  return (
    <section className='hours-section'>
      <h2>Nos horaires d'ouvertures</h2>
      <table>
        <tbody>
          <tr>
            <td rowSpan="2">Lundi</td>
            <td>12h00 - 14h00</td>
          </tr>
          <tr>
            <td>19h00 - 22h00</td>
          </tr>

          <tr>
            <td rowSpan="2">Mardi</td>
            <td>12h00 - 14h00</td>
          </tr>
          <tr>
            <td>19h00 - 22h00</td>
          </tr>

          <tr>
            <td rowSpan="2">Mercredi</td>
            <td rowSpan="2">Fermé</td>
          </tr>
          <tr>
            <td></td>
          </tr>

          <tr>
            <td rowSpan="2">Jeudi</td>
            <td>12h00 - 14h00</td>
          </tr>
          <tr>
            <td>19h00 - 22h00</td>
          </tr>

          <tr>
            <td rowSpan="2">Vendredi</td>
            <td>19h00 - 22h00</td>
          </tr>
          <tr>
            <td></td>
          </tr>

          <tr>
            <td rowSpan="2">Samedi</td>
            <td>12h00 - 14h00</td>
          </tr>
          <tr>
            <td></td>
          </tr>
          <tr>
            <td rowSpan="2">Dimanche</td>
            <td>12h00 - 14h00</td>
          </tr>
          <tr>
            <td>19h00 - 22h00</td>
          </tr>
        </tbody>
      </table>
      <a href='tel:+33609050603'> <Button label="Nous appeler" /> </a>
    </section >
  )
}

export default OpenHours
