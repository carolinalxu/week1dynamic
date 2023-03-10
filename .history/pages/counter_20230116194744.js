import { useEffect, useState } from "react"
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/router'
import counterStyles from '../styles/counter.module.css'

export default function Counter() {
    const [number, setNumber] = useState(0);
    const searchParams = useSearchParams();
    const isUser = searchParams.get('username')
    const router = useRouter();

    useEffect(() => {
        !isUser ? router.push('/') : <></>
    }, [isUser])

    return (
        <>
    <main className={counterStyles.main}>
        <div className={counterStyles.counterIntro}>
            <div>COUNTER PAGE</div>
            <div>Welcome {isUser}</div>
            <div>{number}</div>
        </div>

        <div className={counterStyles.counter}>
            <button className={counterStyles.incrementButton} onClick={() => setNumber(number + 1)} >Increment</button>
            <button className={counterStyles.decrementButton} onClick={() => setNumber(number - 1)} >Decrement</button>

        </div>
    </main>
</>
    )
    }
