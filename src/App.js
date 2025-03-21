import Director from "./components/Director";
import Promo from "./components/Promo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="wrap_h def_block_style df aic jcsb">
            <div className='logo'>
              <span className="ml24">Ш.Ш.А.Б</span>
            </div>
            <div className="nav df"> 
              <a href="#" className="nav_block nav_block_chosen">Главная</a>
              <a href="#" className="nav_block">Тренеры</a>
              <a href="#" className="nav_block">Учащимся</a>
              <a href="#" className="nav_block">Филиалы</a>
              <a href="#" className="nav_block">Контакты</a>
            </div>
            <p className="pl12">+7 933 951 16 57</p>
          </div>
        </header>
        <Promo/>
        <Director/>
        
        <section className="df aic pb24">
            <div className="wrap">
                <div className='def_block_style'>
                    <div>
                        <h2>Услуги</h2>
                        <div className="services_table df fdc">
                          <div className="row">
                            <div>Название</div>
                            <div>Стоимость</div>
                            <div>Описание</div>
                          </div>
                          <div className="row">
                            <div>Разовое посещение <br/>
                            (первое бесплатно)</div>
                            <div>900</div>
                            <div className="df fdc">
                              <div>Обучение в подходящей группе</div>
                              <div>Длительность занятия - 60 минут</div>
                              <div>Подходит для общего развития</div>
                            </div>
                            <div>Перейти</div>
                          </div>
                          <div className="row">
                            <div>4 урока</div>
                            <div>3000</div>
                            <div className="df fdc">
                              <div>Занятие раз в неделю</div>
                              <div>Длительность занятия - 60 минут</div>
                              <div>Подходит для общего развития</div>
                            </div>
                            <div>Перейти</div>
                          </div>
                          <div className="row">
                            <div>8 уроков</div>
                            <div>5200</div>
                            <div className="df fdc">
                              <div>Занятия 2 раза в неделю</div>
                              <div>Для углубленного изучения</div>
                              <div>Более ускоренное развитие</div>
                            </div>
                            <div>Перейти</div>
                          </div>
                          <div className="row">
                            <div>Индивидуальный урок</div>
                            <div>1500</div>
                            <div className="df fdc">
                              <div>Регулярная связь с тренером</div>
                              <div>Индивидуальная программа обучения</div>
                              <div>Персональный подход преподавателя</div>
                            </div>
                            <div>Перейти</div>
                          </div>
                          <div className="row">
                            <div>8 индивидуальных уроков</div>
                            <div>10800</div>
                            <div className="df fdc">
                              <div>Регулярная связь с тренером</div>
                              <div>Индивидуальная программа обучения 2 раза в неделю</div>
                              <div>Занятие оффлайн 60-120 минут</div>
                            </div>
                            <div>Перейти</div>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    
    </div>
  );
}

export default App;
