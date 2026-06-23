import Leftcontent from './Leftcontent'
import Rightcontent from './Rightcontent'

function Content() {
  return (
   <div className='bg-yellow-50 mx-10 rounded-2xl p-12'>
      <div className='flex gap-16'>
        <div className='flex-1'>
          <Leftcontent />
        </div>

        <div className='flex-1 overflow-x-auto'>
          <Rightcontent />
        </div>
      </div>
   </div>
  )
}

export default Content