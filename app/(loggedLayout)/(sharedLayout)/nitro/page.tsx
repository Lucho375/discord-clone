import NavButton from '@/app/ui/navigationbutton'
import { BsFillEmojiSmileUpsideDownFill } from 'react-icons/bs'
function Nitro() {
  return (
    <NavButton
      id="md"
      className={['rounded-md', 'text-orange-500']}
      title="PRUEBA"
      tooltipMessage="Nuevo grupo de MD"
      tooltipPosition="left"
      tooltipIcon={<BsFillEmojiSmileUpsideDownFill />}
    />
  )
}

export default Nitro
