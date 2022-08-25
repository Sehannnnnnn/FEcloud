import React, {useRef} from 'react'
import styled, { keyframes } from 'styled-components'
import PlaneImg from './assets//photo-1543797414-a0c3ad076f7c-removebg.png'
import SkyImg from './assets//pexels-pixabay-531972.jpg'
import SideImg from './assets//side.png'
import Timer from './Timer';
type Props = {}

function PlaneView({}: Props) {
  return (
    <div>
      <SkyBackground>
          <PlaneWindow src={PlaneImg}>
          </PlaneWindow>
          <Container>
            <Timer></Timer>
          </Container>
      </SkyBackground>
    </div>
  )
}

export default PlaneView
//보다 나은 방법을 고안해봐야함 'sky background는 window 넓이에 맞추어 이동
const skyMovement = keyframes`
  0% {
    background-position : 0px 0px;
  }
  100% {
    background-position : -2700px 0px;
  }
`

const PlaneWindow = styled.img`
    height : 100vh;
    z-index: 3;
`

const SkyBackground = styled.div`
    display : flex;
    height: 100vh;
    z-index: 3;
    background-size : cover;
    background-image : url(${SkyImg});
    animation : ${skyMovement} 120s 1s infinite linear alternate;
`

const Container = styled.div`
    width: 100%;
    background-size : cover;
    z-index : 3;
    background-image: url(${SideImg})
`