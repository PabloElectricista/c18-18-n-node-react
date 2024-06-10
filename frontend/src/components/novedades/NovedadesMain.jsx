import './novedadesMain.css'
/* 
import { notificaciones } from './data'
import axios from "axios";
import { toast } from "react-toastify";
import { useState } from 'react'
import { useEffect } from 'react'
 */
export default function NovedadesMain() {
/* 
  const [ notificaciones, setNotificaciones] = useState([])
  useEffect(()=> {
    axios('/urldenotificaciones')
    .then(({data}) => {
      setNotificaciones(data.notificaciones)
    })
    .catch(error => toast.error(error.message))
  }, [])
   */
  return (
    <div className='novedadesMain-container'>
      <div className="novedadesMain-container1">
        <span className='novedadesMain-heading'>Mensajes</span>
      </div>
      <ul className="novedadesMain-ul">
        {
          notificaciones && notificaciones.length > 0 ?
            notificaciones.map(({ id, subject, isRead, createdAt }) => {
              const color = isRead ? '#000' : 'red'
              return (
                <li className="novedadesMain-li" key={id}>
                  <span
                    className="novedadesMain-text1" style={{ color }}
                  >
                    {subject}
                  </span>
                  <span className='novedadesMain-text1' style={{color}}>
                    {createdAt}
                  </span>
                  <button type="button" className="novedadesMain-button">
                    <svg viewBox="0 0 804.5714285714286 1024" className="novedadesMain-icon">
                      <path d="M292.571 420.571v329.143c0 10.286-8 18.286-18.286 18.286h-36.571c-10.286 0-18.286-8-18.286-18.286v-329.143c0-10.286 8-18.286 18.286-18.286h36.571c10.286 0 18.286 8 18.286 18.286zM438.857 420.571v329.143c0 10.286-8 18.286-18.286 18.286h-36.571c-10.286 0-18.286-8-18.286-18.286v-329.143c0-10.286 8-18.286 18.286-18.286h36.571c10.286 0 18.286 8 18.286 18.286zM585.143 420.571v329.143c0 10.286-8 18.286-18.286 18.286h-36.571c-10.286 0-18.286-8-18.286-18.286v-329.143c0-10.286 8-18.286 18.286-18.286h36.571c10.286 0 18.286 8 18.286 18.286zM658.286 834.286v-541.714h-512v541.714c0 27.429 15.429 43.429 18.286 43.429h475.429c2.857 0 18.286-16 18.286-43.429zM274.286 219.429h256l-27.429-66.857c-1.714-2.286-6.857-5.714-9.714-6.286h-181.143c-3.429 0.571-8 4-9.714 6.286zM804.571 237.714v36.571c0 10.286-8 18.286-18.286 18.286h-54.857v541.714c0 62.857-41.143 116.571-91.429 116.571h-475.429c-50.286 0-91.429-51.429-91.429-114.286v-544h-54.857c-10.286 0-18.286-8-18.286-18.286v-36.571c0-10.286 8-18.286 18.286-18.286h176.571l40-95.429c11.429-28 45.714-50.857 76-50.857h182.857c30.286 0 64.571 22.857 76 50.857l40 95.429h176.571c10.286 0 18.286 8 18.286 18.286z"></path>
                    </svg>
                  </button>
                </li>
              )
            })
            :
            (
              <li className="novedadesMain-li">
                <span className="novedadesMain-text1">Nada ahún</span>
              </li>
            )
        }
      </ul>
    </div>
  )
}
