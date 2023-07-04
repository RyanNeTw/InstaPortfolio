import { StoreContext } from "../../store/Store"
import { useContext } from "react"
import AlertSvg from '../../assets/Alerte'

function RateLimitAlert() {

    const {rate} = useContext(StoreContext)

    if (rate?.rate?.remaining >= rate?.rate?.limit/10) {
        return (
            <>
                <div className="absolute top-5 left-5 flex flex-row gap-2 items-center">
                    <AlertSvg />
                    <div className="alert hidden">
                        <div className="triangleCode -rotate-90"></div>
                        <span className="pl-4 pr-4 pt-2 pb-2 rounded bg-yellow-400">You{"'"}re approaching your usage limit</span>
                    </div>
                </div>
            </>
        )
    }
}

export default RateLimitAlert