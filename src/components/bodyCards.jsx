import Img1 from '../assets/images/Image Placeholder.png'
import Img2 from '../assets/images/Image Placeholder (1).png'
import Img3 from '../assets/images/Image Placeholder (1).svg'

function Card() {
  return (
    <>
      <section className="bpark">
        <div className="park">
          <img src={Img1} alt="Akagera National Park" />
          <h3>Akagera National Park</h3>
          <p>
            Visitors to Akagera National Park can take part in a range of
            activities, including game drives, boat safaris, bird watching, and
            nature walks.
          </p>
          <button>Learn More</button>
        </div>

        <div className="park">
          <img src={Img2} alt="Bisoke Hike" />
          <h3>Bisoke Hike</h3>
          <p>
            The Bisoke hike is a popular mountain trek in Rwanda, located in the
            Volcanoes National Park. It is one of the most challenging hikes in
            the park.
          </p>
          <button>Learn More</button>
        </div>

        <div className="park">
          <img src={Img3} alt="Lake Kivu trip" />
          <h3>Lake Kivu trip</h3>
          <p>A trip to Lake Kivu can be a truly unique and memorable experience.</p>
          <button>Learn More</button>
        </div>
      </section>
    </>
  )
}

export default Card