import WarningIcon from '../../../assets/warning-icon.svg'
import './no-gifs.scss'

export const NoGifs = () => {
  return (
    <div className='no-gifs no-gifs__wrapper'>
        <div className="no-gifs no-gifs__grid">
            <img src={WarningIcon} className='no-gifs no-gifs__grid--img' alt="" />
            <h3 className='no-gifs no-gifs__grid--text'>No posee gifs</h3>
        </div>
    </div>
  )
}
