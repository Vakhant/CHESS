import React from 'react'

const Promo = () => {
  return (
    <section className="mih100vh df aic">
        <div className="wrap">
            <div className='def_block_style df jcsb'>
                <div>
                    <h1>Прокачай свой мозг!</h1>
                    <h2>Шахматная школа в Петербурге</h2>
                    <div className="df aic"><img className="pr6" width={15} style={{opacity: .6}} src={`${process.env.PUBLIC_URL}/geo.svg`} alt="" /> Ул. Туристская, д. 23, корп. 5</div>
                    <div className="df aic"><img className="pr6" width={15} style={{opacity: .6}} src={`${process.env.PUBLIC_URL}/geo.svg`} alt="" /> Ленинский просп., д. 71, корп. 2</div>
                    <div className="df aic"><img className="pr6" width={15} style={{opacity: .6}} src={`${process.env.PUBLIC_URL}/geo.svg`} alt="" /> Ул. Савушкина 141</div>
                </div>
                <div><img className='brr12' width={600} src={`${process.env.PUBLIC_URL}/img.jpg`} alt="" /> </div>
            </div>
        </div>
    </section>
  )
}

export default Promo