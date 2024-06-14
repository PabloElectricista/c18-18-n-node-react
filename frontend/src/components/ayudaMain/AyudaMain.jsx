import { useRef } from 'react'
import { useNavigate } from "react-router-dom";
import './ayudaMain.css'

const AyudaMain = () => {
  const navigate = useNavigate()
  const bodyRef1 = useRef(null)
  const bodyRef2 = useRef(null)
  const bodyRef3 = useRef(null)
  const bodyRef4 = useRef(null)
  const bodyRef5 = useRef(null)
  const arrowRef1 = useRef(null)
  const arrowRef2 = useRef(null)
  const arrowRef3 = useRef(null)
  const arrowRef4 = useRef(null)
  const arrowRef5 = useRef(null)

  return (
    <div className="ayuda-main-container">
      <div className="ayuda-main-container1">
        <div className="ayuda-main-drop1">
          <div
            className="ayuda-main-drop1header"
            onClick={() => {
              bodyRef1.current.classList.toggle('ayuda-visible')
              arrowRef1.current.classList.toggle('ayuda-rotate')
            }}>
            <img
              ref={arrowRef1}
              src="/drop_arrow.svg"
              alt="drop arrow"
              className="ayuda-main-droparrow"
            />
            <span className="ayuda-main-text">Drop 1</span>
          </div>
          <div className="ayuda-main-drop1body" ref={bodyRef1}>
            <ul className='ayuda-main-ul'>
              <li>Text</li>
              <li>Text</li>
            </ul>
          </div>
        </div>
        <div className="ayuda-main-drop2">
          <div
            className="ayuda-main-drop2header"
            onClick={() => {
              bodyRef2.current.classList.toggle('ayuda-visible')
              arrowRef2.current.classList.toggle('ayuda-rotate')
            }}>
            <img
              ref={arrowRef2}
              src="/drop_arrow.svg"
              alt="drop arrow"
              className="ayuda-main-droparrow1"
            />
            <span className="ayuda-main-text02">Drop 2</span>
          </div>
          <div className="ayuda-main-drop2body" ref={bodyRef2}>
            <ul className='ayuda-main-ul'>
              <li>Text</li>
              <li>Text</li>
            </ul>
          </div>
        </div>
        <div className="ayuda-main-drop3">
          <div
            className="ayuda-main-drop3header"
            onClick={() => {
              bodyRef3.current.classList.toggle('ayuda-visible')
              arrowRef3.current.classList.toggle('ayuda-rotate')
            }}>
            <img
              ref={arrowRef3}
              src="/drop_arrow.svg"
              alt="drop arrow"
              className="ayuda-main-droparrow2"
            />
            <span className="ayuda-main-text04">Drop 3</span>
          </div>
          <div className="ayuda-main-drop3body" ref={bodyRef3}>
            <ul className='ayuda-main-ul'>
              <li>Text</li>
              <li>Text</li>
              <li>Text</li>
            </ul>
          </div>
        </div>
        <div className="ayuda-main-drop4">
          <div
            className="ayuda-main-drop4header"
            onClick={() => {
              bodyRef4.current.classList.toggle('ayuda-visible')
              arrowRef4.current.classList.toggle('ayuda-rotate')
            }}>
            <img
              ref={arrowRef4}
              src="/drop_arrow.svg"
              alt="drop arrow"
              className="ayuda-main-droparrow3"
            />
            <span className="ayuda-main-text06">Drop 4</span>
          </div>
          <div className="ayuda-main-drop4body" ref={bodyRef4}>
            <ul className='ayuda-main-ul'>
              <li>Text</li>
              <li>Text</li>
              <li>Text</li>
            </ul>
          </div>
        </div>
        <div className="ayuda-main-drop5">
          <div
            className="ayuda-main-drop5header"
            onClick={() => {
              bodyRef5.current.classList.toggle('ayuda-visible')
              arrowRef5.current.classList.toggle('ayuda-rotate')
            }}>
            <img
              ref={arrowRef5}
              src="/drop_arrow.svg"
              alt="navigation1navigationarrowchevrondirectionforwardm6378"
              className="ayuda-main-droparrow4"
            />
            <span className="ayuda-main-text08">Drop 5</span>
          </div>
          <div className="ayuda-main-drop5body" ref={bodyRef5}>
            <ul className='ayuda-main-ul'>
              <li>Text</li>
              <li>Text</li>
            </ul>
          </div>
        </div>
        <div className="ayuda-main-container2">
          <span className="ayuda-main-text12">Tienes otra duda?</span>
          <button type="button" className="ayuda-main-button" onClick={() => navigate('/contact')}>
            <span className="ayuda-main-text13">
              Contáctanos
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default AyudaMain
