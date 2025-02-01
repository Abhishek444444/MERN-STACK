import React, { useState } from 'react';

const Booking = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    destination: '',
    travelDate: '',
    travelers: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking Confirmed! Details: \n${JSON.stringify(formData, null, 2)}`);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f093fb, #f5576c)',
        padding: '20px'
      }}
    >
      <form 
        onSubmit={handleSubmit}
        style={{
          width: '100%',
          maxWidth: '600px',
          padding: '40px',
          background: 'rgba(255, 255, 255, 0.9)',
          borderRadius: '12px',
          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)',
          backdropFilter: 'blur(8px)',
          textAlign: 'center'
        }}
      >
        <h2 style={{ 
          textAlign: 'center', 
          color: '#f5576c', 
          fontSize: '32px', 
          marginBottom: '30px'
        }}>
          Book Your Trip
        </h2>
  
        <label style={{ 
          display: 'block', 
          marginTop: '15px', 
          fontSize: '18px',
          color: '#333'
        }}>
          Full Name:
        </label>
        <input 
          type="text" 
          name="fullName"
          placeholder="Enter your name" 
          value={formData.fullName}
          onChange={handleChange}
          style={{ 
            width: '100%', 
            padding: '12px 15px', 
            fontSize: '16px', 
            marginTop: '8px', 
            border: '1px solid #ddd', 
            borderRadius: '6px',
            transition: 'all 0.3s'
          }} 
          required
          onFocus={(e) => {
            e.target.style.borderColor = '#f5576c';
            e.target.style.boxShadow = '0 0 8px rgba(245, 87, 108, 0.5)';
          }}
          onBlur={(e) => {
            e.target.style.borderColor = '#ddd';
            e.target.style.boxShadow = 'none';
          }}
        />
  
        <label style={{ 
          display: 'block', 
          marginTop: '15px', 
          fontSize: '18px',
          color: '#333'
        }}>
          Email Address:
        </label>
        <input 
          type="email" 
          name="email"
          placeholder="Enter your email" 
          value={formData.email}
          onChange={handleChange}
          style={{ 
            width: '100%', 
            padding: '12px 15px', 
            fontSize: '16px', 
            marginTop: '8px', 
            border: '1px solid #ddd', 
            borderRadius: '6px',
            transition: 'all 0.3s'
          }} 
          required
          onFocus={(e) => {
            e.target.style.borderColor = '#f5576c';
            e.target.style.boxShadow = '0 0 8px rgba(245, 87, 108, 0.5)';
          }}
          onBlur={(e) => {
            e.target.style.borderColor = '#ddd';
            e.target.style.boxShadow = 'none';
          }}
        />
  
        <label style={{ 
          display: 'block', 
          marginTop: '15px', 
          fontSize: '18px',
          color: '#333'
        }}>
          Destination:
        </label>
        <select 
          name="destination"
          value={formData.destination}
          onChange={handleChange}
          style={{ 
            width: '100%', 
            padding: '12px 15px', 
            fontSize: '16px', 
            marginTop: '8px', 
            border: '1px solid #ddd', 
            borderRadius: '6px',
            backgroundColor: '#fff',
            transition: 'all 0.3s'
          }} 
          required
          onFocus={(e) => {
            e.target.style.borderColor = '#f5576c';
            e.target.style.boxShadow = '0 0 8px rgba(245, 87, 108, 0.5)';
          }}
          onBlur={(e) => {
            e.target.style.borderColor = '#ddd';
            e.target.style.boxShadow = 'none';
          }}
        >
          <option value="">Select a destination</option>
          <option value="Goa">Goa</option>
          <option value="Pondicherry">Pondicherry</option>
          <option value="Kerala">Kerala</option>
          <option value="Tamilnadu">Tamilnadu</option>
          <option value="Diu and Daman">Diu and Daman</option>
          <option value="Maharashtra">Maharashtra</option>
          <option value="Gujrat">Gujrat</option>
          <option value="Uttarakhand">Uttarakhand</option>
          <option value="Jammu and Kashmir">Jammu and Kashmir</option>
          <option value="Rajasthan">Rajasthan</option>
          <option value="Meghalaya">Meghalaya</option>
          <option value="Leh Ladakh">Leh Ladakh</option>
          <option value="Delhi">Delhi</option>
          <option value="Uttar Pradesh">Uttar Pradesh</option>
          <option value="Karnataka">Karnataka</option>
          <option value="Andaman">Andaman</option>
          <option value="Odisha">Odisha</option>
          <option value="Telangana">Telangana</option>
          <option value="Sikkim">Sikkim</option>
          <option value="Assam">Assam</option>
          <option value="Arunachal">Arunachal</option>
          <option value="West Bengal">West Bengal</option>
          <option value="Pune">Pune</option>
          <option value="Gir National Park">Gir National Park</option>
        </select>
  
        <label style={{ 
          display: 'block', 
          marginTop: '15px', 
          fontSize: '18px',
          color: '#333'
        }}>
          Travel Date:
        </label>
        <input 
          type="date" 
          name="travelDate"
          value={formData.travelDate}
          onChange={handleChange}
          style={{ 
            width: '100%', 
            padding: '12px 15px', 
            fontSize: '16px', 
            marginTop: '8px', 
            border: '1px solid #ddd', 
            borderRadius: '6px',
            transition: 'all 0.3s'
          }} 
          required
          onFocus={(e) => {
            e.target.style.borderColor = '#f5576c';
            e.target.style.boxShadow = '0 0 8px rgba(245, 87, 108, 0.5)';
          }}
          onBlur={(e) => {
            e.target.style.borderColor = '#ddd';
            e.target.style.boxShadow = 'none';
          }}
        />
  
        <label style={{ 
          display: 'block', 
          marginTop: '15px', 
          fontSize: '18px',
          color: '#333'
        }}>
          Number of Travelers:
        </label>
        <input 
          type="number" 
          name="travelers"
          min="1"
          value={formData.travelers}
          onChange={handleChange}
          style={{ 
            width: '100%', 
            padding: '12px 15px', 
            fontSize: '16px', 
            marginTop: '8px', 
            border: '1px solid #ddd', 
            borderRadius: '6px',
            transition: 'all 0.3s'
          }} 
          required
          onFocus={(e) => {
            e.target.style.borderColor = '#f5576c';
            e.target.style.boxShadow = '0 0 8px rgba(245, 87, 108, 0.5)';
          }}
          onBlur={(e) => {
            e.target.style.borderColor = '#ddd';
            e.target.style.boxShadow = 'none';
          }}
        />
  
        <button 
          type="submit" 
          style={{ 
            width: '100%', 
            padding: '15px', 
            fontSize: '20px', 
            backgroundColor: '#f5576c', 
            color: 'white', 
            border: 'none', 
            borderRadius: '6px', 
            cursor: 'pointer', 
            marginTop: '25px',
            transition: 'background-color 0.3s, transform 0.2s',
            fontWeight: 'bold'
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#e0455a')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#f5576c')}
          onMouseDown={(e) => (e.target.style.transform = 'scale(0.98)')}
          onMouseUp={(e) => (e.target.style.transform = 'scale(1)')}
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
  
};

export default Booking;
