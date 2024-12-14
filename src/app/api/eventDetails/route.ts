import { parse } from 'date-fns';

export function GET(){

    const data = [
        {
          title: "ISRO NSpD'24",
          desc: "Live stream of the space event",
          eventDate: parse("03/12/2024", "dd/MM/yyyy", new Date()),
        },
        {
          title: "Gibberish Tech Talk'24",
          desc: "Exploring the unknown with code",
          eventDate: parse("15/11/2024", "dd/MM/yyyy", new Date()),
        },
        {
          title: "Quantum Leap Conference'25",
          desc: "Discussing the mysteries of quantum computing",
          eventDate: parse("10/01/2025", "dd/MM/yyyy", new Date()),
        },
        {
          title: "XenoSpace Exploration'26",
          desc: "A deep dive into alien tech",
          eventDate: parse("07/05/2026", "dd/MM/yyyy", new Date()),
        },
        {
          title: "AI Innovators Meet'23",
          desc: "How AI is shaping the future",
          eventDate: parse("22/09/2023", "dd/MM/yyyy", new Date()),
        },
        {
          title: "AI Innovators Meet'23",
          desc: "How AI is shaping the future",
          eventDate: parse("22/09/2023", "dd/MM/yyyy", new Date()),
        },
        {
          title: "AI Innovators Meet'23",
          desc: "How AI is shaping the future",
          eventDate: parse("22/09/2023", "dd/MM/yyyy", new Date()),
        },
        {
          title: "AI Innovators Meet'23",
          desc: "How AI is shaping the future",
          eventDate: parse("22/09/2023", "dd/MM/yyyy", new Date()),
        },
        {
          title: "AI Innovators Meet'23",
          desc: "How AI is shaping the future",
          eventDate: parse("22/09/2023", "dd/MM/yyyy", new Date()),
        },
        {
          title: "AI Innovators Meet'23",
          desc: "How AI is shaping the future",
          eventDate: parse("22/09/2023", "dd/MM/yyyy", new Date()),
        },
        {
          title: "AI Innovators Meet'23",
          desc: "How AI is shaping the future",
          eventDate: parse("22/09/2023", "dd/MM/yyyy", new Date()),
        },
        {
          title: "AI Innovators Meet'23",
          desc: "How AI is shaping the future",
          eventDate: parse("22/09/2023", "dd/MM/yyyy", new Date()),
        },
        {
          title: "AI Innovators Meet'23",
          desc: "How AI is shaping the future",
          eventDate: parse("22/09/2023", "dd/MM/yyyy", new Date()),
        },
        
      ];
      
      return Response.json(data);
}