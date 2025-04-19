export async function GET() {
    const Project = [
        {   id: 1,
            name: "Amazon Clone",
            img: "assets/image/amazon-clone.png", 
            description: "An Amazon clone built with React and Firebase, featuring user authentication and a shopping cart."
        },
        {
            id: 2,
            name: "Institute Management System",
            
            img: "assets/image/Institudemangment.png", 
            description: "A web-based system for managing students, teachers, and courses efficiently."
        },
        {
            id: 3,
            name: "Online Store",
            
            img: "assets/image/online-store.png", 
            description: "An e-commerce platform with product listings, cart functionality, and secure payments."
        },
        {
            id: 4,
            name: "Weather App",
            img: "assets/image/weather-app.png", 
            description: "A weather forecasting app using an API to display real-time weather updates."
        }
    ];

    return Response.json(Project, { status: 200 });
}
