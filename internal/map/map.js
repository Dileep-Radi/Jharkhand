// Initialize map centered on Jharkhand
const map = L.map('map').setView([23.6, 85.3], 7);

// Add OpenStreetMap tiles (free, no API key needed)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
    maxZoom: 18
}).addTo(map);

// Cities data
const cities = [
    { name: "Ranchi", coords: [23.3441, 85.3094], info: "Capital city of Jharkhand, city of waterfalls, known for its pleasant climate and waterfalls." },
    { name: "Hazaribagh", coords: [23.9981, 85.3648], info: "Famous for its indigenous culture and Hazaribagh National Park." },
    { name: "Saraikela", coords: [22.7058, 85.9239], info: "Known for Chhau dance and cultural heritage." },
    { name: "Jamshedpur", coords: [22.8046, 86.1844], info: "Industrial city, headquarters of TISCO." },
    { name: "Deoghar", coords: [24.4823, 86.7009], info: "Religious city, famous for Baidyanath Jyotirlinga temple." },
    { name: "Dhanbad", coords: [23.7957, 86.4304], info: "Coal capital of India, major mining hub." },
    { name: "Patratu", coords: [23.6167, 85.1667], info: "Known for Patratu Valley and thermal power station." }
];

// Wildlife sanctuaries data
const wildlifeSanctuaries = [
    { name: "Dalma Wildlife Sanctuary", coords: [22.8833, 86.1333], info: "Home to elephants and diverse wildlife, established in 1975." },
    { name: "Palamau Tiger Reserve", coords: [24.0, 84.0], info: "First tiger reserve in Jharkhand, established in 1974." },
    { name: "Hazaribagh Wildlife Sanctuary", coords: [24.0, 85.25], info: "Known for sambar deer, nilgai, and various bird species." },
    { name: "Rajderwa Bird Sanctuary", coords: [24.2, 86.5], info: "Important bird sanctuary with diverse avian species." }
];

// Add cities to map
cities.forEach(city => {
    const cityIcon = L.divIcon({
        className: 'city-marker',
        iconSize: [20, 20],
        iconAnchor: [10, 10]
    });

    const marker = L.marker(city.coords, { icon: cityIcon }).addTo(map);
    
    marker.bindPopup(`
        <h3>🏙️ ${city.name}</h3>
        <p>${city.info}</p>
    `);
});

// Add wildlife sanctuaries to map
wildlifeSanctuaries.forEach(sanctuary => {
    const wildlifeIcon = L.divIcon({
        className: 'wildlife-marker',
        html: '🌳',
        iconSize: [24, 24],
        iconAnchor: [12, 12]
    });

    const marker = L.marker(sanctuary.coords, { icon: wildlifeIcon }).addTo(map);
    
    marker.bindPopup(`
        <h3>🦌 ${sanctuary.name}</h3>
        <p>${sanctuary.info}</p>
    `);
});