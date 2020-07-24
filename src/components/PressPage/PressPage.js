import React from 'react'
import Press from './../Press/Press'
import './PressPage.css'


export default function PressPage() {
    return(
    <>
        <h1>Press</h1>
        <ul className="press-list">
            <li>
                <Press title={`"Nastasha B. Discusses Latest Single 'Specially'" - things you haught to know`} link={<iframe class="hidden-iframe" width="100%" height="100%" title="iframe1" name="htmlComp-iframe-1" scrolling="auto" src="https://www.thingsyouhautetoknow.com/blog/8/29/19/NastashaB"></iframe>} />
            </li>
            <li>
                <Press title={`“Nastasha B | ‘Specially’, NY R&B On The Rise” – Rap Fiesta`} link={<iframe class="hidden-iframe" width="100%" height="100%" title="iframe2" name="htmlComp-iframe-2" scrolling="auto" src="https://rapfiesta.com/2019/08/14/nastasha-b-specially-ny-rb-on-the-rise/"></iframe>} />
            </li>
        </ul>
    </>
    )
}