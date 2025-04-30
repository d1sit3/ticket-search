import Pobeda from '../img/image 4.svg'

export const fetchFlight = () =>{
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve(
            {
                id: 1,
                from: 'SVO',
                to: 'LED',
                company: {Pobeda},
                price: 12680,
                currency: 'RUB',
                timeStart: '12:00',
                timeEnd: '16:30',
                duration: '4 ч 30 мин',
                connectionAmount: 1
            },
        )
        }, 1000)
    })
}