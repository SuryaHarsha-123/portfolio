import adoNetImage from '../../images/ado-net.jpg'
import flight from '../../images/flight.jpg';
import book from '../../images/book.jpg';
import portfolioproject from '../../images/portfolioproject.jpg';

export const Bio={
    name:"Garaga Harsha",
    roles:[
       // "Problem Solver",
       // "programmer",
        "Full Stack Developer"
    ],
    description:
      "I am a motivated and with a passion for learning and with a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things."
}

export const skills=[
    {
        title:"FrontEnd",
        skills:[
            {
                name:"HTML5",
                image:" https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg"
            },
            {
                name:"CSS3",
                image:" https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg"
                
            },
            {
                name:"JavaScript",
                image:" https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
            },
            {
                name:"BootStrap",
                image:" https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original-wordmark.svg"
            },
            {
                name:"React",
                image:" https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"
            },
            
        ]
    },
    {
        title:"BackEnd",
        skills:[
            {
                name:".NetFramework",
                image:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original-wordmark.svg"
            },
            {
                name:"C#",
                image:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"
            },
            {
                name:"ADO.Net",
                image:adoNetImage
            },
            {
                name:".NetCore",
                image:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg"
            },
            {
                name:"ASP.NetCore WebApi",
                image:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg"
            },
        ]
    },
    {
        title:"Database",
        skills:[
            {
                name:"SQL",
                image:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-plain-wordmark.svg"
            }
        ]
    },
    {
        title:"Others",
        skills:[
            {
                name:"Git",
                image:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-plain-wordmark.svg"
            }
        ]
    }
]



export const projects = [
    {
        title: "Book Store",
        description:
          "Designed and implemented a web application for managing books, including adding, updating, and deleting books.",
        image: book,
        link: "https://github.com/SuryaHarsha-123"
      },
    {
      title: "Flight Booking System",
      description:
        "Developed a full-stack web application that allows users to search for flights, add a flight, edit flight details, and manage flight bookings.",
      image: flight,
      link: "https://github.com/SuryaHarsha-123"
    }
   
    // {
    //   title: "Portfolio Website",
    //   description:
    //     "Built a responsive portfolio website to showcase projects, skills, and experience, using React and Material-UI for an enhanced UI.",
    //   image:portfolioproject,
    //   link: "https://github.com/SuryaHarsha-123"
    // }
  ];