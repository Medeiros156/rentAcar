function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-content">
            <ul className="footer-content__1">
              <li>
                Renta<span>Car</span>
              </li>
              <li>
                Informações ao consumidor: RentacarS/A - CNPJ nº 15.630.48x/0001-55

                Sede: Avenida Bernardo Joao, n° 311 - Cachoeirinha - CEP: 20.120-000 - Belo Horizonte - MG

                Central de Reservas e Assistência a Clientes 24h: 0800 129 2031

                E-mail: centraldereservas@rentacar.com
              </li>
              <li>
                <a href="tel:123456789">
                  <i className="fa-solid fa-phone"></i> &nbsp; (12) 1456-2789
                </a>
              </li>

              <li>
                <a
                  href="mailto: 
                carrental@gmail.com"
                >
                  <i className="fa-solid fa-envelope"></i>
                  &nbsp; carrental@gmail.com
                </a>
              </li>


            </ul>

            <ul className="footer-content__2">
              <li>Empresa</li>
              <li>
                <a href="#home">Rio de Janeiro</a>
              </li>
              <li>
                <a href="#home">Carreira</a>
              </li>
              <li>
                <a href="#home">Frota</a>
              </li>
              <li>
                <a href="#home">Blog</a>
              </li>
              <li>
                <a href="#home">Nossos Valores</a>
              </li>
            </ul>

            <ul className="footer-content__2">
              <li>Horario de funcionamento</li>
              <li>Seg - Sex: 9:00AM - 9:00PM</li>
              <li>Sab: 9:00AM - 19:00PM</li>
              <li>Dom: Fechado</li>
            </ul>

            <ul className="footer-content__2">
              <li>Inscreva-se</li>
              <li>
                <p>Se inscreva na nossa Newsletter para receber os melhores cupons.</p>
              </li>
              <li>
                <input type="email" placeholder="Enter Email Address"></input>
              </li>
              <li>
                <button className="submit-email">Enviar</button>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
