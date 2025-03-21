import React from 'react'

const Promo = () => {
  return (
    <section className="mih100vh df aic">
        <div className="wrap">
            <div className='def_block_style df jcsb'>
                <div>
                    <h1>Прокачай свой мозг!</h1>
                    <h2>Шахматная школа в Петербурге</h2>
                    <div className="df aic"><img className="pr6" width={15} style={{opacity: .6}} src="/geo.svg" alt="" /> Метро Комендантский проспект</div>
                    <div className="df aic"><img className="pr6" width={15} style={{opacity: .6}} src="/geo.svg" alt="" /> Галактика Млечный путь</div>
                </div>
                <div><img className='brr12' width={600} src="/img.jpg" alt="" /> </div>
            </div>
        </div>
    </section>
  )
}

export default Promo