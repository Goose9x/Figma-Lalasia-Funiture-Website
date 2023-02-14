import "./LandingPage.scss";
import bigImage from "../assets/big-image.png";
import Card from "react-bootstrap/Card";
import Benefit1 from "../assets/Benefit1.png";
import Benefit2 from "../assets/Benefit2.png";
import Benefit3 from "../assets/Benefit3.png";
import product1 from "../assets/products/product1.png";
import product2 from "../assets/products/product2.png";
import product3 from "../assets/products/product3.png";
import product4 from "../assets/products/product4.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        borderRadius: "20px",
        right: "110px",
        top: "120px",
        zIndex: "2",
        opacity: "1",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        borderRadius: "20px",
        left: "110px",
        top: "120px",
        zIndex: "2",
        opacity: "1",
      }}
      onClick={onClick}
    />
  );
}
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
const productData = [
  {
    picture: product1,
    category: "Chair",
    title: "White Aesthetic Chair",
    describle: "Combination of wood and wool",
    price: "$63.47",
  },
  {
    picture: product2,
    category: "Bookshelf",
    title: "Wooden Bookshelf",
    describle: "Combination of wood and wool",
    price: "$62.23",
  },
  {
    picture: product3,
    category: "Lamp",
    title: "Bardono Smart Lamp",
    describle: "Easy to use with bluetooth connection",
    price: "$62.23",
  },
  {
    picture: product4,
    category: "Sofa",
    title: "Sofa Empuk Banget",
    describle: "Using kapuk randu material",
    price: "$58.39",
  },
  {
    picture: product1,
    category: "Chair",
    title: "White Aesthetic Chair",
    describle: "Combination of wood and wool",
    price: "$63.47",
  },
  {
    picture: product2,
    category: "Bookshelf",
    title: "Wooden Bookshelf",
    describle: "Combination of wood and wool",
    price: "$62.23",
  },
  {
    picture: product3,
    category: "Lamp",
    title: "Bardono Smart Lamp",
    describle: "Easy to use with bluetooth connection",
    price: "$62.23",
  },
  {
    picture: product4,
    category: "Sofa",
    title: "Sofa Empuk Banget",
    describle: "Using kapuk randu material",
    price: "$58.39",
  },
];
function LandingPage() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "100px",
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
    ],
  };
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
      </div>
      <div className='lp-popular-product-item'>
        <div className='lp-popular-product-slider'>
          <Slider {...settings}>
            {/* Có thể đưa 1 ProductItem component vào đây */}
            {productData.map((e) => (
              <Card
                className='lp-popular-product-card'
                style={{ width: "18rem" }}
              >
                <img src={e.picture} alt='' />
                <p>{e.category}</p>
                <Card.Body>
                  <b>{e.title}</b>
                  <p>{e.describle}</p>
                  <b>{e.price}</b>
                </Card.Body>
              </Card>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
