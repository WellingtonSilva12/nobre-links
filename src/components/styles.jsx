import styled from 'styled-components'


export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: center;
  margin-top: 5rem;

  .box-perfil {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 12rem;
    width: 12rem;

    border-radius: 50%;
    background: linear-gradient(315deg, #00ccff, #d400d4);
    margin-bottom: 1.2rem;

    img {
      height: 11rem;
      width: 11rem;

      outline: 3px solid #ecdffe;
      border-radius: 50%;
    }
  }
`

export const Title = styled.h1`
  font-size: 3.2rem;
  color: #311343;
  text-align: center;

  margin-bottom: 0.6rem;
`

export const Subtitle = styled.p`
  color: #311343;
  text-align: center;
  text-transform: uppercase;
  font-size: 1.6rem;

  margin-bottom: 3.6rem;
`

export const Button = styled.button`
  position: relative;
  width: 30rem;

  display: flex;
  justify-content: space-evenly;

  background-color: #aa7fe2;
  border: none;
  border-radius: 0.8rem;
  
  color: #fff;
  font-size: 1.8rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  
  padding: 1rem 4.5rem;
  margin-top: 1.5rem;
  cursor: pointer;
  i {
    position: absolute;
    left: 35px;

    align-items: center;
    justify-content: space-between;
    
    font-size: 2.2rem;
  }
`

export const FooterParagraph = styled.p`
  text-align: center;
  font-size: 1.2rem;
  font-weight: 600;
  color: rgba(0, 8, 47, 0.74);
  margin-top: 10rem;

  a{
    text-decoration: none;
    color: inherit;
    &:hover{
      text-decoration: underline;
    }
  }

`
