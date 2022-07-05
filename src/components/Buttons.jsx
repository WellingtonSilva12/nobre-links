import React from 'react'
import { Button } from './styles'

const Buttons = () => {
  return (
    <div>
      <Button>
        <a href="https://api.whatsapp.com/send/?phone=5586981015990&text&type=phone_number&app_absent=0" target='blank'><i class="bx bxl-whatsapp" ></i> atendimento</a>
      </Button>
      <Button>
        <a href="https://shopee.com.br" target='blank'><i class="bx bx-cart-alt"></i> shopee br</a>
      </Button>
      <Button>
        <a href="https://www.instagram.com/nobrestamp/" target='blank'><i class="bx bxs-book"></i> catálogo</a>
      </Button>
      <Button>
        <a href="https://www.instagram.com/nobrestamp/" target='blank'><i class='bx bxs-location-plus' ></i> localização</a>
      </Button>
    </div>
  )
}

export default Buttons
