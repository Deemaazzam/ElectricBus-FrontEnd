 import charging from './../assets/charging (1).png';
 import battery from './../assets/charging.png';
 import range from './../assets/frequency.png';
 import passenger from './../assets/passenger.png';
 import friendly from './../assets/system.png';
 import smart from './../assets/automation.png';
 const features = [
    {
      id: 1,
      title: "Battery Capacity",
      description: "300 kWh Lithium-ion battery ensuring long-lasting power.",
      icon: battery, 
    },
    {
      id: 2,
      title: "Range per Charge",
      description: "Capable of traveling up to 300 km on a single charge.",
      icon: range,
    },
    {
      id: 3,
      title: "Charging Time",
      description: "Fast charging in just 1.5 hours.",
      icon: charging,
    },
    {
      id: 4,
      title: "Passenger Capacity",
      description: "Spacious interior accommodating up to 10 passengers.",
      icon: passenger,
    },
    {
      id: 5,
      title: "Eco-Friendly",
      description: "Zero emissions, helping reduce your carbon footprint.",
      icon: friendly,
    },
    {
      id: 6,
      title: "Smart Systems",
      description: "Equipped with GPS tracking and intelligent BMS.",
      icon:smart,
    }
  ];
  const about=[
    {
      id: 1,
      title: "Advanced Braking Systems",
      description: "Our electric buses feature advanced braking systems, including regenerative braking, which enhances safety and energy efficiency.",
    },
    {
      id: 2,
      title: "Collision Avoidance Technology",
      description: " Equipped with sensors and cameras, our buses can alert drivers to potential hazards and automatically apply brakes if needed.",
    },
    {
      id:3,
      title: "Real-Time Monitoring",
      description: " Our buses have real-time monitoring to track performance and driver behavior, ensuring prompt issue resolution and high safety standards.",
    },
    {
      id: 4,
      title: "Emergency Response Systems",
      description: " Advanced emergency systems provide alerts and guidance, enabling swift responses during critical situations.",
    },
    {
      id: 5,
      title: "Comprehensive Driver Training",
      description: "Our electric buses feature advanced braking systems, including regenerative braking, which enhances safety and energy efficiency.",
    },
    {
      id: 6,
      title: "Experienced Drivers",
      description: " Our skilled drivers use the latest safety features and are committed to a smooth, secure travel experience.",
    },
    {
      id:7,
      title: "Regular Safety Checks",
      description: " Routine checks on all buses ensure components are functioning correctly, maintaining a safe and reliable fleet.",
    },
    {
      id: 8,
      title: "Passenger Safety Features",
      description: "  Features like secure seating, clear signage, and accessible emergency exits enhance passenger safety and comfort.",
    },
    {
      id:9,
      title: "Enhanced Visibility Systems",
      description: "High-definition cameras and advanced lighting provide clear visibility, even in low-light conditions.",
    },
    {
      id: 10,
      title: "Continuous Improvement",
      description: "  We continually update our safety features and driver training based on technology advancements and feedback.",
    },
  ];
  export {features,about};