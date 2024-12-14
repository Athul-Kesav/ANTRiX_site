import { parse } from 'date-fns';

export function GET(){

    const data = [
        {
          image: "/path/to/image.jpeg",
          title: "ISRO NSpD'24",
          desc: "Live stream of the space event",
          eventDate: parse("03/12/2024", "dd/MM/yyyy", new Date()),
        },
        {
          image: "/path/to/image.jpeg",
          title: "Gibberish Tech Talk'24",
          desc: "Exploring the unknown with code",
          eventDate: parse("15/11/2024", "dd/MM/yyyy", new Date()),
        },
        {
          image: "/path/to/image.jpeg",
          title: "Quantum Leap Conference'25",
          desc: "Discussing the mysteries of quantum computing",
          eventDate: parse("10/01/2025", "dd/MM/yyyy", new Date()),
        },
        {
          image: "/path/to/image.jpeg",
          title: "XenoSpace Exploration'26",
          desc: "A deep dive into alien tech",
          eventDate: parse("07/05/2026", "dd/MM/yyyy", new Date()),
        },
        {
          image: "/path/to/image.jpeg",
          title: "AI Innovators Meet'23",
          desc: "How AI is shaping the future",
          eventDate: parse("22/09/2023", "dd/MM/yyyy", new Date()),
        },
        {
          image: "/path/to/image.jpeg",
          title: "AI Innovators Meet'23",
          desc: "How AI is shaping the future",
          eventDate: parse("22/09/2023", "dd/MM/yyyy", new Date()),
        },
        {
          image: "/path/to/image.jpeg",
          title: "AI Innovators Meet'23",
          desc: "How AI is shaping the future",
          eventDate: parse("22/09/2023", "dd/MM/yyyy", new Date()),
        },
        {
          image: "/path/to/image.jpeg",
          title: "AI Innovators Meet'23",
          desc: "How AI is shaping the future",
          eventDate: parse("22/09/2023", "dd/MM/yyyy", new Date()),
        },
        {
          image: "/path/to/image.jpeg",
          title: "AI Innovators Meet'23",
          desc: "How AI is shaping the future",
          eventDate: parse("22/09/2023", "dd/MM/yyyy", new Date()),
        },
        {
          image: "/path/to/image.jpeg",
          title: "AI Innovators Meet'23",
          desc: "How AI is shaping the future",
          eventDate: parse("22/09/2023", "dd/MM/yyyy", new Date()),
        },
        {
          image: "/path/to/image.jpeg",
          title: "AI Innovators Meet'23",
          desc: "How AI is shaping the future",
          eventDate: parse("22/09/2023", "dd/MM/yyyy", new Date()),
        },
        {
          image: "/path/to/image.jpeg",
          title: "AI Innovators Meet'23",
          desc: "How AI is shaping the future",
          eventDate: parse("22/09/2023", "dd/MM/yyyy", new Date()),
        },
        {
          image: "/path/to/image.jpeg",
          title: "AI Innovators Meet'23",
          desc: "How AI is shaping the future",
          eventDate: parse("22/09/2023", "dd/MM/yyyy", new Date()),
        },
        
      ];
      
      return Response.json(data);
}