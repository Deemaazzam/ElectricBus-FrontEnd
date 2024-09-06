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
      description: "Spacious interior accommodating up to 50 passengers.",
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
  const about={};
  export {features};