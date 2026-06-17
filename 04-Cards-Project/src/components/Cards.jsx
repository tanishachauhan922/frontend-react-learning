
 import {Bookmark} from 'lucide-react'
function Cards(props) {
    console.log(props.logo);
  return (
    <div className='card'>

  {/* TOP SECTION */}
  <div className='top'>
    <div className='left'>
      <img
        className='logo'
        src={props.logo}
        alt="amazon"
      />

      <div className='company-info'>
        <h3>{props.company}</h3>
        <span className='time'>{props.date} days ago</span>
      </div>
    </div>

    <button className='save-btn'>
      Save <Bookmark size={18} />
    </button>
  </div>

  {/* TITLE SECTION */}
  <div className='title'>
   {props.title}
  </div>

  {/* TAGS */}
  <div className='tags'>
    <button>{props.tag1}</button>
    <button>{props.tag2}</button>
  </div>

  {/* BOTTOM SECTION */}
  <div className='bottom'>
    
    <div className='left-bottom'>
      <p className='salary'>${props.pay}/hr</p>
      <p className='location'>{props.location}</p>
    </div>

    <button className='apply-btn'>
      Apply Now
    </button>

  </div>

</div>
  )
}

export default Cards
