import React, { useState } from "react";


const destinationsData = {
  "North India": [
    {
      id: 1,
      title: "Himalayan Escapade",
      img: "https://www.holidify.com/images/bgImages/UTTARAKHAND.jpg",
      details:
        "Experience the serene beauty of the Himalayas in Uttarakhand, where spiritual sites and breathtaking landscapes await.",
    },
    {
      id: 2,
      title: "Royal Rajasthan",
      img: "https://www.holidify.com/images/bgImages/RAJASTHAN.jpg",
      details:
        "Immerse yourself in the vibrant culture and regal history of Rajasthan with its majestic forts and palaces.",
    },
    {
      id: 3,
      title: "Mystical Kashmir",
      img: "https://th.bing.com/th/id/OIP.UdIhiqRDAJnc1BIhzeQoEwHaFj?w=243&h=182&c=7&r=0&o=5&dpr=1.4&pid=1.7",
      details:
        "Discover the enchanting valleys and pristine lakes of Jammu and Kashmir, a land of unmatched natural beauty.",
    },
    {
      id: 4,
      title: "Ladakh Adventure",
      img: "https://hnj-website.s3.amazonaws.com/uploads/2020/12/Ancient-temple-ruins-at-Gadi-Sagar-lake-Jaipur-Rajasthan-at-sunrise.jpg",
      details:
        "Embark on an unforgettable journey through the high-altitude deserts and stunning vistas of Leh Ladakh.",
    },
    {
      id: 5,
      title: "Cultural Uttar Pradesh",
      img: "https://th.bing.com/th/id/OIP.MjfK-1KusoR19ZmS_4vigQAAAA?rs=1&pid=ImgDetMain",
      details:
        "Explore historical monuments, sacred ghats, and the rich heritage of Uttar Pradesh that echoes through the ages.",
    },
    {
      id: 6,
      title: "Vibrant Delhi",
      img: "https://www.mistay.in/travel-blog/content/images/size/w2000/2020/07/travel-4813658_1920.jpg",
      details:
        "Experience the pulsating energy of India's capital, where modernity meets a storied past.",
    },
  ],
  "South India": [
    {
      id: 7,
      title: "Kerala Backwaters",
      img: "https://www.holidify.com/images/bgImages/KERALA.jpg",
      details:
        "Sail through the serene backwaters of Kerala and indulge in a rejuvenating houseboat experience.",
    },
    {
      id: 8,
      title: "Tamil Heritage",
      img: "https://img.veenaworld.com/wp-content/uploads/2022/06/Experience-Divinity-At-These-7-Temples-In-Tirupati-scaled-e1655557181643.jpg",
      details:
        "Discover ancient temples and cultural landmarks that define Tamil Nadu's rich legacy.",
    },
    {
      id: 9,
      title: "Charming Pondicherry",
      img: "https://th.bing.com/th/id/OIP.RclZj1Mn4tQZ9L0aPqxsMgHaE5?w=265&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7",
      details:
        "Relax in the French-inspired coastal town of Pondicherry, where heritage and the beach blend harmoniously.",
    },
    {
      id: 10,
      title: "Karnataka's Wonders",
      img: "https://th.bing.com/th/id/OIP.vcs9aMgRq5VKyHF6_hdIpQHaFs?rs=1&pid=ImgDetMain",
      details:
        "Experience a fusion of modernity and tradition in Karnataka—from bustling cities to tranquil coffee plantations.",
    },
    {
      id: 11,
      title: "Island Andaman",
      img: "https://th.bing.com/th/id/OIP.xEs0FkPuU3YyD1Iuma7nTwHaFj?rs=1&pid=ImgDetMain",
      details:
        "Unwind on the pristine beaches of the Andaman Islands, a tropical paradise with vibrant marine life.",
    },
    {
      id: 12,
      title: "Telangana Treasures",
      img: "https://st.depositphotos.com/1141099/1690/i/450/depositphotos_16909969-stock-photo-charminar.jpg",
      details:
        "Explore the historical marvels and rich cultural tapestry of Telangana, a region steeped in heritage.",
    },
  ],
  "East India": [
    {
      id: 13,
      title: "Arunachal Wonders",
      img: "https://assets-news.housing.com/news/wp-content/uploads/2022/08/19190505/ARUNACHAL-PRADESH-FEATURE-compressed.jpg",
      details:
        "Discover the untouched beauty and adventurous spirit of Arunachal Pradesh, a land of mystical landscapes.",
    },
    {
      id: 14,
      title: "Sikkim Serenity",
      img: "https://static.toiimg.com/photo/64481180/.jpg",
      details:
        "Enjoy the calm and peaceful environment of Sikkim, where nature and spirituality converge.",
    },
    {
      id: 15,
      title: "Assam Eco Tour",
      img: "https://th.bing.com/th/id/OIP.XqIQFTQgHtrJ-4Si1ihpyQHaD4?w=1200&h=630&rs=1&pid=ImgDetMain",
      details:
        "Experience the lush landscapes and vibrant culture of Assam with its majestic wildlife and scenic river cruises.",
    },
    {
      id: 16,
      title: "Odisha Heritage",
      img: "https://www.holidify.com/images/bgImages/ODISHA.jpg",
      details:
        "Explore ancient temples, pristine beaches, and rich cultural traditions in Odisha.",
    },
    {
      id: 17,
      title: "Meghalaya Mystique",
      img: "https://th.bing.com/th/id/OIP.JPPK1n34q362q9PtZgSfCAHaEo?w=280&h=180&c=7&r=0&o=5&dpr=1.4&pid=ImgDetMain",
      details:
        "Experience the cool mist and scenic beauty of Meghalaya, known as the 'Abode of Clouds.'",
    },
    {
      id: 18,
      title: "West Bengal Wonders",
      img: "https://www.holidify.com/images/bgImages/WEST-BENGAL.jpg",
      details:
        "Immerse yourself in the cultural richness and breathtaking landscapes of West Bengal.",
    },
  ],
  "West India": [
    {
      id: 19,
      title: "Goa Getaway",
      img: "https://www.holidify.com/images/bgImages/GOA.jpg",
      details:
        "Enjoy sun, sand, and vibrant nightlife on the golden beaches of Goa.",
    },
    {
      id: 20,
      title: "Maharashtra Magic",
      img: "https://th.bing.com/th/id/OIP.BskFGrtAay0YV9NGPfZfNgHaE5?w=256&h=180&c=7&r=0&o=5&dpr=1.4&pid=ImgDetMain",
      details:
        "Discover the dynamic mix of modern cities and ancient heritage in Maharashtra.",
    },
    {
      id: 21,
      title: "Gujarat Grandeur",
      img: "https://img.nayatrip.com/images/state/big/12/statue-of-unity-1584792976406.jpg",
      details:
        "Explore historic sites, bustling markets, and marvel at the impressive Statue of Unity in Gujarat.",
    },
    {
      id: 22,
      title: "Pune Panorama",
      img: "https://punetourism.co.in/images/places-to-visit/headers/shaniwar-wada-pune-tourism-entry-fee-timings-holidays-reviews-header.jpg",
      details:
        "Experience the cultural and historical richness of Pune, from royal forts to vibrant street life.",
    },
    {
      id: 23,
      title: "Gir Safari",
      img: "https://www.indiaholidaymall.com/images/blog/Gir-National-Park.jpg",
      details:
        "Embark on an adventurous wildlife safari in Gir National Park, home to Asiatic lions.",
    },
    {
      id: 24,
      title: "Daman & Diu Delight",
      img: "https://th.bing.com/th/id/OIP.EgnflPNY34O1xbyzVqKlMQHaE7?rs=1&pid=ImgDetMain",
      details:
        "Enjoy a relaxing coastal retreat with pristine beaches and rich Portuguese heritage in Daman and Diu.",
    },
  ],
};

const Destinations = () => {
  const [selectedRegion, setSelectedRegion] = useState("North India");
  const [selectedDestination, setSelectedDestination] = useState(null);

  return (
    <div
      className="destination-container"
      style={{
        padding: "40px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        background: "#f8f8f8",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "40px",
          color: "#333",
          fontSize: "36px",
          fontWeight: "600",
        }}
      >
        Explore Top Destinations by Region
      </h2>

      {/* Region Tabs */}
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        {Object.keys(destinationsData).map((region) => (
          <button
            key={region}
            onClick={() => {
              setSelectedRegion(region);
              setSelectedDestination(null);
            }}
            style={{
              margin: "0 10px 10px",
              padding: "12px 24px",
              border: selectedRegion === region
                ? "2px solid #ff6600"
                : "1px solid #ccc",
              borderRadius: "30px",
              cursor: "pointer",
              backgroundColor: selectedRegion === region ? "#ff6600" : "#fff",
              color: selectedRegion === region ? "#fff" : "#333",
              transition: "all 0.3s",
            }}
          >
            {region}
          </button>
        ))}
      </div>

      {/* Destination List */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {destinationsData[selectedRegion].map((dest) => (
          <div
            key={dest.id}
            onClick={() => setSelectedDestination(dest)}
            style={{
              width: "300px",
              border: "1px solid #ddd",
              borderRadius: "15px",
              overflow: "hidden",
              boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
              cursor: "pointer",
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow =
                "0 8px 20px rgba(0,0,0,0.2)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 6px 15px rgba(0,0,0,0.1)";
            }}
          >
            <img
              src={dest.img}
              alt={dest.title}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
              }}
            />
            <div style={{ padding: "20px" }}>
              <h3 style={{ margin: "0 0 10px 0", color: "#ff6600" }}>
                {dest.title}
              </h3>
              <p
                style={{
                  margin: 0,
                  fontSize: "14px",
                  color: "#666",
                  lineHeight: "1.5",
                }}
              >
                {dest.details.length > 100
                  ? dest.details.substring(0, 100) + "..."
                  : dest.details}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Destination Description Section */}
      {selectedDestination && (
        <div
          style={{
            marginTop: "40px",
            padding: "30px",
            border: "1px solid #ddd",
            borderRadius: "15px",
            background: "#f9f9f9",
          }}
        >
          <h2 style={{ color: "#ff6600", marginBottom: "20px" }}>
            {selectedDestination.title}
          </h2>
          <img
            src={selectedDestination.img}
            alt={selectedDestination.title}
            style={{
              width: "100%",
              maxHeight: "400px",
              borderRadius: "15px",
              objectFit: "cover",
            }}
          />
          <p
            style={{
              marginTop: "20px",
              fontSize: "1.2rem",
              color: "#555",
              lineHeight: "1.6",
            }}
          >
            {selectedDestination.details}
          </p>
        </div>
      )}
    </div>
  );
};

export default Destinations;
