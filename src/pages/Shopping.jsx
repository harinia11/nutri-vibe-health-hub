
import React from 'react';
import FoodCard from '../components/FoodCard';

const Shopping = () => {
  const categories = {
    "Fruits": {
      image: "https://th.bing.com/th/id/OIP.22XOhxYrd_Pu__NkrGadMgHaEo?rs=1&pid=ImgDetMain",
      foods: [
        { name: "Banana", image: "https://st3.depositphotos.com/1022209/15093/i/450/depositphotos_150937864-stock-photo-banana-bunch-on-wooden-background.jpg", benefits: "Provides energy and potassium.", price: "40/kg" },
        { name: "Strawberry", image: "https://thumbs.dreamstime.com/b/fresh-strawberry-white-background-40742985.jpg", benefits: "Rich in vitamin C and antioxidants.", price: "120/box" },
        { name: "Cranberries", image: "https://purensoselect.in/cdn/shop/products/cranberry-fragrance-oil-136.webp?v=1676381451", benefits: "Helps in preventing urinary tract infections.", price: "90/100g" },
        { name: "Berries", image: "https://static.vecteezy.com/system/resources/previews/030/683/380/large_2x/blueberries-high-quality-4k-hdr-free-photo.jpg", benefits: "Boosts brain health and reduces inflammation.", price: "160/box" },
        { name: "Cherries", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx8VKszRABdour6OsfVn4vbWXHWvCISHdJD8AyfnKb3fZYYhPTzx-5nwg0nZ2LOlCpWYI&usqp=CAU", benefits: "Rich in antioxidants and helps in sleep.", price: "180/kg" },
        { name: "Avocado", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgoE8Y6_N5eRYRVFP5DDhIaeFP9g_XyxqujKS2g70sVuoZ8QzddY67SjRZ3ZMId78xFYw&usqp=CAU", benefits: "Loaded with healthy fats and fiber.", price: "150/piece" },
        { name: "Apples", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAK4RG700WypbXThxlar8JjZNXV9NdlSxr0EnYADUZHbh8Q4Da0a-H3zcQf_kz0g8rBHE&usqp=CAU", benefits: "Supports heart health and digestion.", price: "120/kg" },
        { name: "Prunes", image: "https://c4.wallpaperflare.com/wallpaper/794/128/834/fruit-plum-prunes-plum-wallpaper-preview.jpg", benefits: "Good for digestion and bone health.", price: "100/250g" },
        { name: "Blueberries", image: "https://d2jx2rerrg6sh3.cloudfront.net/image-handler/picture/2020/4/shutterstock_321102602_(1).jpg", benefits: "Rich in antioxidants.", price: "160/box" },
        { name: "Oranges", image: "https://ipcdn.freshop.com/resize?url=https://images.freshop.com/00845857020029/0074d27574ad69a02b9e0728b5dfcf09_large.png&width=512&type=webp&quality=90", benefits: "High in vitamin C and boosts immunity.", price: "70/kg" },
        { name: "Pomegranate", image: "https://images.healthshots.com/healthshots/en/uploads/2021/09/27184641/pomegranate.jpg", benefits: "Improves blood flow and lowers blood pressure.", price: "100/kg" }
      ]
    },
    "Vegetables & Seafoods": {
      image: "https://thumbs.dreamstime.com/b/mediterranean-diet-fish-meat-vegetables-128886104.jpg",
      foods: [
        { name: "Spinach", image: "https://5.imimg.com/data5/VX/FU/MY-30125612/palak-leaves-500x500.jpg", benefits: "Rich in iron and vitamins.", price: "30/bunch" },
        { name: "Salmon", image: "https://c1.wallpaperflare.com/preview/579/815/788/close-up-fish-healthy-salmon.jpg", benefits: "Great source of omega-3 fatty acids.", price: "800/kg" },
        { name: "Ginger", image: "https://media.istockphoto.com/id/162711007/photo/fresh-ginger-whole-and-chopped-on-rustic-wood-surface.jpg?s=612x612&w=0&k=20&c=DRfdLfPE7VM6yDR4sldD5uytjjH_ZJ2cBTFDgXlmSZE=", benefits: "Reduces inflammation and nausea.", price: "80/kg" },
        { name: "Cabbage", image: "https://media.istockphoto.com/id/641503708/photo/isolated-fresh-green-cabbage-on-white-background.jpg?s=612x612&w=0&k=20&c=rLdn-cN2QdmelpdEvlEKYKgewDHctMzv_c6aBBUIUz8=", benefits: "Supports digestion and heart health.", price: "35/kg" },
        { name: "Quinoa", image: "https://media.istockphoto.com/id/478769254/photo/red-black-and-white-quinoa-seeds.jpg?s=612x612&w=0&k=20&c=giffVRhjTuWeKPNt7gbaTnQRpaTpEvjuUPMV8vXDcUQ=", benefits: "High in protein and gluten-free.", price: "250/kg" },
        { name: "Beets", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTWmDLTTo3PQ2ldBGt1lxzCwBwzEt4Rb2t0kN4BgBq-izV7RAT3rG_2ffBzds47qbM-ls&usqp=CAU", benefits: "Improves blood flow and stamina.", price: "40/kg" },
        { name: "Garlic", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyFC0mkn6V_tGYhxPYpoMmaGaLmh-36lnNvjUFtrA4_cjeLoKZ3mv7gdsXCys_6wV7fT0&usqp=CAU", benefits: "Boosts immunity and heart health.", price: "150/kg" },
        { name: "Tomatoes", image: "https://media.istockphoto.com/id/847335116/photo/tomatoes-on-the-vine.jpg?s=612x612&w=0&k=20&c=XspM2ySvUfqjnt7HL5qKyn0tyRb5qLsf1GAP6-3xQsw=", benefits: "Rich in lycopene and supports skin health.", price: "25/kg" },
        { name: "Lemon", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTU5u7x_IBNXcwWxpXPbPLRv_7RD66cndelloC3f_27mvMXvzuYRhpwytH4XRQnURtxt4&usqp=CAU", benefits: "Detoxifies and boosts vitamin C.", price: "60/kg" },
        { name: "Lentils", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFerhihzxS6pc_Ut3Ogsd2907tIqcQp9sBAP7osu-iSgturQmHdMpImZcp3I0JKTA60R8&usqp=CAU", benefits: "Rich in protein and iron.", price: "100/kg" },
        { name: "Sweet Potatoes", image: "https://media.istockphoto.com/id/1271633999/photo/purple-sweet-potatoes.jpg?s=612x612&w=0&k=20&c=O88wPGXyHmp5C2ex0zhWWAhnWBcpCY8wTag5pkMuHf8=", benefits: "Good source of beta-carotene and fiber.", price: "60/kg" },
        { name: "Carrots", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkCnvquTPZRSmJJTbVmlnSYOUm5BqZ0gURhBBNUQBHcQ-pRvaTqlTPBePPG5QhrhoMQ4o&usqp=CAU", benefits: "Supports eye health.", price: "30/kg" },
        { name: "Cucumber", image: "https://media.istockphoto.com/id/91516166/photo/cucumber-slices-on-a-white-background.jpg?s=612x612&w=0&k=20&c=n4R8_HB2qEmTgOU3xlINv1Am2Z_Mt4CuJiITPta58vw=", benefits: "Hydrating and anti-inflammatory.", price: "25/kg" }
      ]
    },
   "Grains & Cereals": {
      image: "https://images.contentstack.io/v3/assets/blt8a393bb3b76c0ede/blt6f4f408e6ff24f9c/65bc67cba0c878967e593a2a/Whole-grains-and-heart-health.jpg?",
      foods: [
        { name: "Whole Grains", price: "80/kg", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQURSsMI36A8JNbyUJbCS6Zf2RNZSOl8yQdEM0dPUcbT_qj31-Mjoy4SS-EcWNW_MzO46Q&usqp=CAU", benefits: "Improves digestion and heart health." },
        { name: "Nuts", price: "550/kg", image: "https://thumbs.dreamstime.com/b/nuts-mix-wooden-plate-65085866.jpg", benefits: "Great for brain and heart health." },
        { name: "Green Tea Powder", price: "300/100g", image: "https://media.istockphoto.com/id/942938140/photo/matcha-organic-green-matcha-tea-ceremony-matcha-powder-cooking-with-matcha-recipe.jpg?s=612x612&w=0&k=20&c=GwxX1kYzm0Gh77WTn-QEvmcPHxW6zSks5j69-vTkdIg=", benefits: "Rich in antioxidants and boosts metabolism." },
        { name: "Walnuts", price: "700/kg", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS99I8P-fSo4e1t5dk2CUfsAmqgj2bdnxo7RnX50nEdkCJPmMwVzjkt9LkVKb0tIxS450Q&usqp=CAU", benefits: "Improves memory and brain function." },
        { name: "Oats", price: "120/kg", image: "https://t3.ftcdn.net/jpg/01/27/18/72/360_F_127187211_Lj3BnpJX5pGJO4ElrUMhWoZO9imT1XcC.jpg", benefits: "Reduces cholesterol and supports digestion." },
        { name: "Turmeric", price: "200/kg", image: "https://t3.ftcdn.net/jpg/01/82/27/42/360_F_182274289_RvpPTYZmC3n98ZXuH85d31XBfyEhk6b1.jpg", benefits: "Anti-inflammatory and boosts immunity." },
        { name: "Flaxseeds", price: "150/kg", image: "https://media.istockphoto.com/id/931479712/photo/flax-seed-in-a-jute-bag.jpg?s=612x612&w=0&k=20&c=qeezBhndCzroCRkWjKQJdv4nfBmc4HCyQvjDFSc3Z3M=", benefits: "Rich in fiber and omega-3 fatty acids." },
        { name: "Chia Seeds", price: "350/kg", image: "https://st4.depositphotos.com/7893620/30646/i/450/depositphotos_306464444-stock-photo-chia-seeds-glass-jar-dark.jpg", benefits: "Boosts energy and supports digestion." },
        { name: "Brazil Nuts", price: "900/kg", image: "https://media.istockphoto.com/id/528439451/photo/portion-of-brazil-nuts.jpg?s=612x612&w=0&k=20&c=2hfXaY942Pqsu2X84rrpX4lNllnsxwvGZ9ujA85PLhQ=", benefits: "Rich in selenium for thyroid health." },
        { name: "Almonds", price: "650/kg", image: "https://t4.ftcdn.net/jpg/01/19/49/81/360_F_119498169_S5gkbK2KZkTpMXizvpwWjBIz8cp9pzD7.jpg", benefits: "Good for skin and brain health." },
        { name: "Soybeans", price: "80/kg", image: "https://img.freepik.com/free-photo/soybean-sauce-soybean-wooden-floor-soy-sauce-food-nutrition-concept_1150-26321.jpg?semt=ais_hybrid&w=740", benefits: "High in protein and supports bone health." },
        { name: "Cinnamon", price: "220/kg", image: "https://images.pexels.com/photos/301669/pexels-photo-301669.jpeg?cs=srgb&dl=pexels-pixabay-301669.jpg&fm=jpg", benefits: "Helps regulate blood sugar." },
        { name: "Seaweed", price: "450/100g", image: "https://media.istockphoto.com/id/465140316/photo/seaweed-salad.jpg?s=612x612&w=0&k=20&c=4YDcxkhxOAQMA25UClR5dWeH5Z9cewfJYP0EXv0KJWs=", benefits: "Rich in iodine and antioxidants." },
        { name: "Celery Seeds", price: "180/kg", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGaIfdtnNaIuQa1tFWnjEzprwshHa-V_XmXd-HDQoEZoLBI75xc8uXiA4vjDU1_pHbmlU&usqp=CAU", benefits: "Helps reduce blood pressure." }
      ]
    },
    "Dairy Products": {
      image: "https://th.bing.com/th/id/R.05263a62922403d9739861dd1b022c3a?rik=0yI5fsO0axlo5w&riu=http%3a%2f%2fwww.maggwire.com%2fwp-content%2fuploads%2f2016%2f02%2fLow-Fat-Dairy-Products-Linked-to-Infertility.jpg&ehk=CZ5S3yFiJixjp%2bJGVwXnGc4k3UrEJqzzGOk1wf7qJEU%3d&risl=&pid=ImgRaw&r=0",
      foods: [
        { name: "Egg", price: "6/egg", image: "https://media.istockphoto.com/id/173234780/photo/group-of-brown-raw-eggs-one-is-broken-isolated-white.jpg?b=1&s=612x612&w=0&k=20&c=WQVClAwH3PDkJgbP-jjZcmjKcoo-kp35WAso7S_s4hU=", benefits: "High in protein and nutrients." },
        { name: "Milk", price: "60/litre", image: "https://t4.ftcdn.net/jpg/02/31/84/29/360_F_231842968_qThCnmslPbEAwhg7nuW9rAy8qRNhRli7.jpg", benefits: "Supports bone and dental health." },
        { name: "Dark Chocolate", price: "150/100g", image: "https://t4.ftcdn.net/jpg/02/04/31/93/360_F_204319311_NwspQuun2GWdO5KnA8Grgg5CpPczQXPd.jpg", benefits: "Boosts mood and antioxidants." },
        { name: "Almond Milk", price: "200/litre", image: "https://www.rosielettsnutrition.com/wp-content/uploads/2016/04/shutterstock_225495658.jpg", benefits: "Low-calorie alternative to dairy." },
        { name: "Yogurt", price: "50/500g", image: "https://media.istockphoto.com/id/1008860374/photo/yogurt-in-bowl-on-rustic-black-table-photo-of-plain-natural-organic-yoghurt-close-up.jpg?s=612x612&w=0&k=20&c=sU5oKagNRme86nSAnIJZk0JGMcD_C0S1CrppolOA80g=", benefits: "Rich in probiotics for gut health." },
        { name: "Honey", price: "400/kg", image: "https://media.istockphoto.com/id/598241944/photo/honey-in-jar-and-bunch-of-dry-lavender.jpg?s=612x612&w=0&k=20&c=gVg1BaJ78uniQbpfdFiYvMzim98gREdx-5c4ENBp2tE=", benefits: "Natural sweetener with healing properties." },
        { name: "Olive Oil", price: "800/litre", image: "https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?cs=srgb&dl=pexels-pixabay-33783.jpg&fm=jpg", benefits: "Heart-healthy fat." }
      ]
    }
  };

  return (
    <div className="container page-container">
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Healthy Shopping</h1>
      
      {Object.entries(categories).map(([categoryName, categoryData]) => (
        <div key={categoryName} style={{ marginBottom: '50px' }}>
          <div className="category-header">
            <img src={categoryData.image} alt={categoryName} />
            <h2>{categoryName}</h2>
          </div>
          
          <div className="grid">
            {categoryData.foods.map((food, index) => (
              <FoodCard key={index} food={food} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shopping;
