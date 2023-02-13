import "./LandingPage.css";
import bigImage from "../assets/big-image.png";
function LandingPage() {
  return (
    <>
      <div className='lp-title'>
        <h1>Discover Furniture With High Quality Wood</h1>
        <p>
          Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim
          placerat nisi, adipiscing mauris non. Purus parturient viverra nunc,
          tortor sit laoreet. Quam tincidunt aliquam adipiscing tempor.
        </p>
      </div>
      <div className='lp-big-image'>
        <img src={bigImage} alt='' />
        <div className='tp-search'>
          <ion-icon name='search-outline'></ion-icon>
          <input type='text' />
          <button>Search</button>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
