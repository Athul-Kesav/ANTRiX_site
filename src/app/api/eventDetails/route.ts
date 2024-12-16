import { parse } from 'date-fns';
import { NextRequest, NextResponse } from 'next/server';

export function GET(req: NextRequest) { 

  const url = new URL(req.url);
  const searchParams = url.searchParams;
  const eventId = searchParams.get('eventId');
  console.log(eventId);
  
  
  const events = [
    { eventId : 1,
      image: "/Event1.webp",
      title: "ISRO NSpD'24",
      
      desc: "Live stream of the space event. Live stream of the space event.  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente hic ipsa obcaecati dignissimos. Nisi illum hic tempora facilis. Vel deserunt repellat nulla mollitia inventore quae, aperiam voluptatum laboriosam quas eveniet. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente hic ipsa obcaecati dignissimos. Nisi illum hic tempora facilis. Vel deserunt repellat nulla mollitia inventore quae, aperiam voluptatum laboriosam quas eveniet. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente hic ipsa obcaecati dignissimos. Nisi illum hic tempora facilis. Vel deserunt repellat nulla mollitia inventore quae, aperiam voluptatum laboriosam quas eveniet.",
      eventDate: parse("03/12/2024", "dd/MM/yyyy", new Date()),
    },
    { eventId : 2,
      image: "/Event2.png",
      title: "Gibberish Tech Talk'24",
      desc: "Nisi illum hic tempora facilis. Vel deserunt repellat nulla mollitia inventore quae, aperiam voluptatum laboriosam quas eveniet. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente hic ipsa obcaecati dignissimos. Nisi illum hic tempora facilis. Vel deserunt repellat nulla mollitia inventore quae, aperiam voluptatum laboriosam quas eveniet. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente hic ipsa obcaecati dignissimos. Nisi illum hic tempora facilis. Vel deserunt repellat nulla mollitia inventore quae, aperiam voluptatum laboriosam quas eveniet.",
      eventDate: parse("15/11/2024", "dd/MM/yyyy", new Date()),
    },
    { eventId : 3,
      image: "/test.jpg",
      title: "Quantum Leap Conference'25",
      desc: "Nisi illum hic tempora facilis. Vel deserunt repellat nulla mollitia inventore quae, aperiam voluptatum laboriosam quas eveniet. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente hic ipsa obcaecati dignissimos. Nisi illum hic tempora facilis. Vel deserunt repellat nulla mollitia inventore quae, aperiam voluptatum laboriosam quas eveniet. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente hic ipsa obcaecati dignissimos. Nisi illum hic tempora facilis. Vel deserunt repellat nulla mollitia inventore quae, aperiam voluptatum laboriosam quas eveniet.",
      eventDate: parse("10/01/2025", "dd/MM/yyyy", new Date()),
    },
    { eventId : 4,
      image: "/test.jpg",
      title: "XenoSpace Exploration'26",
      desc: "Nisi illum hic tempora facilis. Vel deserunt repellat nulla mollitia inventore quae, aperiam voluptatum laboriosam quas eveniet. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente hic ipsa obcaecati dignissimos. Nisi illum hic tempora facilis. Vel deserunt repellat nulla mollitia inventore quae, aperiam voluptatum laboriosam quas eveniet. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente hic ipsa obcaecati dignissimos. Nisi illum hic tempora facilis. Vel deserunt repellat nulla mollitia inventore quae, aperiam voluptatum laboriosam quas eveniet.",
      eventDate: parse("07/05/2026", "dd/MM/yyyy", new Date()),
    },
    { eventId : 5,
      image: "/test.jpg",
      title: "AI Innovators Meet'23",
      desc: "How AI is shaping the future Nisi illum hic tempora facilis. Vel deserunt repellat nulla mollitia inventore quae, aperiam voluptatum laboriosam quas eveniet. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente hic ipsa obcaecati dignissimos. Nisi illum hic tempora facilis. Vel deserunt repellat nulla mollitia inventore quae, aperiam voluptatum laboriosam quas eveniet. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente hic ipsa obcaecati dignissimos. Nisi illum hic tempora facilis. Vel deserunt repellat nulla mollitia inventore quae, aperiam voluptatum laboriosam quas eveniet.",
      eventDate: parse("22/09/2023", "dd/MM/yyyy", new Date()),
    },
    { eventId : 6,
      image: "/test.jpg",
      title: "AI Innovators Meet'23",
      desc: "How AI is shaping the future Nisi illum hic tempora facilis. Vel deserunt repellat nulla mollitia inventore quae, aperiam voluptatum laboriosam quas eveniet. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente hic ipsa obcaecati dignissimos. Nisi illum hic tempora facilis. Vel deserunt repellat nulla mollitia inventore quae, aperiam voluptatum laboriosam quas eveniet. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente hic ipsa obcaecati dignissimos. Nisi illum hic tempora facilis. Vel deserunt repellat nulla mollitia inventore quae, aperiam voluptatum laboriosam quas eveniet.",
      eventDate: parse("22/09/2023", "dd/MM/yyyy", new Date()),
    },
    { eventId : 7,
      image: "/test.jpg",
      title: "AI Innovators Meet'23",
      desc: "How AI is shaping the future Nisi illum hic tempora facilis. Vel deserunt repellat nulla mollitia inventore quae, aperiam voluptatum laboriosam quas eveniet. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente hic ipsa obcaecati dignissimos. Nisi illum hic tempora facilis. Vel deserunt repellat nulla mollitia inventore quae, aperiam voluptatum laboriosam quas eveniet. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente hic ipsa obcaecati dignissimos. Nisi illum hic tempora facilis. Vel deserunt repellat nulla mollitia inventore quae, aperiam voluptatum laboriosam quas eveniet.",
      eventDate: parse("22/09/2023", "dd/MM/yyyy", new Date()),
    },
    { eventId : 8,
      image: "/test.jpg",
      title: "AI Innovators Meet'23",
      desc: "How AI is shaping the future Nisi illum hic tempora facilis. Vel deserunt repellat nulla mollitia inventore quae, aperiam voluptatum laboriosam quas eveniet. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente hic ipsa obcaecati dignissimos. Nisi illum hic tempora facilis. Vel deserunt repellat nulla mollitia inventore quae, aperiam voluptatum laboriosam quas eveniet. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente hic ipsa obcaecati dignissimos. Nisi illum hic tempora facilis. Vel deserunt repellat nulla mollitia inventore quae, aperiam voluptatum laboriosam quas eveniet.",
      eventDate: parse("22/09/2023", "dd/MM/yyyy", new Date()),
    },
    { eventId : 9,
      image: "/test.jpg",
      title: "AI Innovators Meet'23",
      desc: "How AI is shaping the future. Nisi illum hic tempora facilis. Vel deserunt repellat nulla mollitia inventore quae, aperiam voluptatum laboriosam quas eveniet. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente hic ipsa obcaecati dignissimos. Nisi illum hic tempora facilis. Vel deserunt repellat nulla mollitia inventore quae, aperiam voluptatum laboriosam quas eveniet. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente hic ipsa obcaecati dignissimos. Nisi illum hic tempora facilis. Vel deserunt repellat nulla mollitia inventore quae, aperiam voluptatum laboriosam quas eveniet.",
      eventDate: parse("22/09/2023", "dd/MM/yyyy", new Date()),
    },
    { eventId : 10,
      image: "/test.jpg",
      title: "AI Innovators Meet'23",
      desc: "How AI is shaping the future",
      eventDate: parse("22/09/2023", "dd/MM/yyyy", new Date()),
    },
  ];

  if (eventId) {
    const event = events.find(event => event.eventId === parseInt(eventId));
    if (event) {
      return NextResponse.json(event);
    } else {
      return NextResponse.json({ error: 'Event not found' }, { status: 404 });
    }
  }

  return NextResponse.json(events);
}

