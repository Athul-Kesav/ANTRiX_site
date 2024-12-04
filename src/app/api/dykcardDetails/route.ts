

// Handler function for the API route
export function GET() {
    
        const data = [
            {
                img: "/sample1.png", // Ensure correct path if images are in the `public` folder
                desc: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
                refer: "https://www.google.com"
            },
            {
                img: "/sample2.png",
                desc: "Consectetur adipiscing elit. Consectetur adipiscing elit. Consectetur adipiscing elit. Consectetur adipiscing elit. Consectetur adipiscing elit.",
                refer: "https://www.google.com"
            },
            {
                img: "/sample3.png",
                desc: "Sed do eiusmod tempor incididunt.Consectetur adipiscing elit. Consectetur adipiscing elit. Consectetur adipiscing elit. Consectetur adipiscing elit.",
                refer: "https://www.google.com"
            },
            {
                img: "/sample2.png",
                desc: "Sed do eiusmod tempor incididunt. Consectetur adipiscing elit. Consectetur adipiscing elit. Consectetur adipiscing elit. Consectetur adipiscing elit.",
                refer: "https://www.google.com"
            },
            {
                img: "/sample1.png",
                desc: "Sed do eiusmod tempor incididunt. Consectetur adipiscing elit. Consectetur adipiscing elit. Consectetur adipiscing elit.",
                refer: "https://www.google.com"
            },
            {
                img: "/sample1.png",
                desc: "Sed do eiusmod tempor incididunt. Consectetur adipiscing elit. Consectetur adipiscing elit. Consectetur adipiscing elit.",
                refer: "https://www.google.com"
            },
            

        ];

        return Response.json(data);
}