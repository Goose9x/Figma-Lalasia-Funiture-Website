import "./LandingPage.scss";
import bigImage from "../assets/big-image.png";
import Card from "react-bootstrap/Card";
import Benefit1 from "../assets/Benefit1.png";
import Benefit2 from "../assets/Benefit2.png";
import Benefit3 from "../assets/Benefit3.png";
const benefitData = [
  {
    logoPreview: Benefit1,
    title: "Many Choices",
    content:
      "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.",
  },
  {
    logoPreview: Benefit2,
    title: "Fast and On Time",
    content:
      "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.",
  },
  {
    logoPreview: Benefit3,
    title: "Affordable Price",
    content:
      "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.",
  },
];
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
      <div className='lp-benefil-title'>
        <b>Benefits</b>
      </div>
      <div className='lp-benefit'>
        <h1>Benefits when using our services</h1>
        <p>
          Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim
          placerat nisi, adipiscing mauris non purus parturient.
        </p>
      </div>
      <div className='lp-benefit-cards'>
        {/* Có thể đưa 1 BenefitCard component vào đây */}
        {benefitData.map((e) => (
          <Card className='lp-benefit-item'>
            <Card.Img variant='top' src={e.logoPreview} />
            <Card.Body>
              <Card.Title>
                <b>{e.title}</b>
              </Card.Title>
              <Card.Text>
                <p>{e.content}</p>
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
      <div className='lp-popular-product'>
        <div className='lp-popular-product-describle'>
          <span>Product</span>
          <b>Our popular product</b>
          <p>
            Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
            dignissim placerat nisi, adipiscing mauris non purus parturient.
          </p>
        </div>
        <div className="lp-popular-product-item">
            
        </div>
      </div>
    </>
  );
}

export default LandingPage;
