import React from 'react';
import Button from './Button';
import hoursData from "../JSON/hours.json";


const OpenHours = () => {

  const week = hoursData.Week;

  return (
    <section className='hours-section' >
      <h2>Nos horaires d'ouvertures</h2>
      <table>
        <tbody>
          {week.map((day, i) => {

            if (day.open) {
              if (day.evening && day.morning) {
                return (
                  <>
                    <tr>
                      <td rowSpan="2"> {day.title} </td>
                      <td> {day.morning} </td>
                    </tr>
                    <tr>
                      <td>{day.evening}</td>
                    </tr>
                  </>
                )
              }
              else if (!day.morning) {
                return (
                  <>
                    <tr>
                      <td rowSpan="2"> {day.title} </td>
                      <td rowSpan="2"> {day.evening} </td>
                    </tr>
                    <tr></tr>
                  </>
                )
              }
              return (
                <>
                  <tr>
                    <td rowSpan="2"> {day.title} </td>
                    <td rowSpan="2"> {day.morning} </td>
                  </tr>
                  <tr></tr>
                </>
              )
            }
            return (
              <>
                <tr>
                  <td rowSpan="2"> {day.title} </td>
                  <td rowSpan="2"> Fermé </td>
                </tr>
                <tr></tr>
              </>
            )
          })}
        </tbody>
      </table>
      <a href='tel:+33609050603'> <Button label="Nous appeler" /> </a>
    </section >
  )
}

export default OpenHours;