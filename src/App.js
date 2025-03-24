import Director from "./components/Director";
import Promo from "./components/Promo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="wrap_h def_block_style df aic jcsb">
            <div className='logo'>
              <span className="ml24">ШШАБ</span>
            </div>
            <div className="nav df"> 
              <a href="#" className="nav_block nav_block_chosen">Главная</a>
              <a href="#" className="nav_block">Тренеры</a>
              <a href="#" className="nav_block">Учащимся</a>
              <a href="#" className="nav_block">Филиалы</a>
              <a href="#" className="nav_block">Контакты</a>
            </div>
            <a href="tel:+79117830745" className="pl12">+7 (911) 783-07-45</a>
          </div>
        </header>
        <Promo/>
        <Director/>
        
        <section className="df aic pb24">
            <div className="wrap">
                <div className='def_block_style'>
                    <div>
                        <h2>Стоимость занятий</h2>

                        <div className="services_table df fdc">
                          <div className="row h_row">
                            <div>Групповые тренировки</div>
                            <div>60 минут</div>
                            <div>90 минут</div>
                          </div>
                          <div className="row">
                            <div>Пробное занятие</div>
                            <div>500</div>
                            <div>500</div>
                          </div>
                          <div className="row">
                            <div>Разовое посещение</div>
                            <div>1300</div>
                            <div>1500</div>
                          </div>
                          <div className="row">
                            <div>Абоненмент на 4 занятия</div>
                            <div>4000</div>
                            <div>5000</div>
                          </div>
                          <div className="row">
                            <div>Абоненмент на 8 занятий</div>
                            <div>6800</div>
                            <div>8000</div>
                          </div>
                          <div className="row row2">
                            <div>Срок действия</div>
                            <div>1 месяц*</div>
                          </div>
                          <div className="row row2">
                            <div>Семейный клуб*</div>
                            <div>1000</div>
                          </div>
                          
                          <div className="row h_row">
                            <div>Индивидуальные тренировки</div>
                            <div>30 минут</div>
                            <div>60 минут</div>
                          </div>
                          <div className="row">
                            <div>Разовое посещение</div>
                            <div>1500</div>
                            <div>2000</div>
                          </div>
                          <div className="row">
                            <div>Семейный клуб*</div>
                            <div>5400</div>
                            <div>7200</div>
                          </div>
                        </div>
                        <p className="fz14 mt24">*Абонемент действует 1 месяц с момента первого занятия<br/>
                        В случае пропуска более 1 недели по болезни, при наличии справки, абонемент заморжаивается на время болезни<br/>
                        Скидка 10% при покупке абонемента в день пробного занятия<br/>
                        Скидка 10% при покупке 2х абонементов<br/>
                        Скидки не суммируются<br/>
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section className="df aic pb24">
            <div className="wrap">
                <div className='def_block_style df jcsb'>
                    <div>
                        <h2>Отзывы</h2>
                    </div>
                </div>
            </div>
        </section>

        <section className="df aic pb24">
            <div className="wrap">
                <div className='def_block_style df jcsb'>
                    <div>
                        <h2>О нас</h2>
                    </div>
                </div>
            </div>
        </section>
    
      <footer className="footer">
        <div className="wrap">
          <div className="def_block_style mb24 df jcsb">
            <div className='logo'>
              <span className="ml24">ШШАБ</span>
            </div>
            <div className="df aic">
              <a className="df" href="https://t.me/+79117830745"><img className="ml12" width={35} src={`${process.env.PUBLIC_URL}/ico_tg.svg`} alt="" /></a>
              <a className="df" href="https://wa.me/+79117830745"><img className="ml12" width={35} src={`${process.env.PUBLIC_URL}/ico_wa.svg`} alt="" /></a>
              <a className="df" href="https://vk.com/ab_chess"><img className="ml12" width={33} src={`${process.env.PUBLIC_URL}/ico_vk.svg`} alt="" /></a>
              <a className="df" href="viber://chat?number=+79117830745"><img className="ml12" width={35} src={`${process.env.PUBLIC_URL}/ico_vb.svg`} alt="" /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
