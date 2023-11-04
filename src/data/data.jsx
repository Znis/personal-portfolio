export default function ProjectList() {
  return [
    {
      id: 0,
      orientation: 0,
      projectTitle: "Monument Recognition App",
      projectSmallTitle: "Monument Recognition",
      projectType: "ml",
      projectCategory: ["Machine Learning", "Mobile Application"],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, impedit at animi ipsa facere iure cumque corrupti sit optio esse error temporibus cupiditate? Nemo iste ad error illo quasi iusto!" +
        <br></br> +
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita accusamus at magni tenetur nulla necessitatibus quas omnis eaque, exercitationem perferendis neque optio ullam excepturi aut earum natus veritatis obcaecati quibusdam!",

      miniDescription:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita accusamus at magni tenetur nulla necessitatibus quas omnis eaque, exercitationem perferendis neque optio ullam excepturi aut earum natus veritatis obcaecati quibusdam!",
      techUsed: [{
        title: "Programming Language",
        technologies: [
          {
            title: "Python",
            imgSrc: "python-icon.png",
            imgAlt: "Python Programming Language",
            imgTitle: "Python Programming Language",
          },
        
        
          {
            title: "Java",
            imgSrc: "java-icon.png",
            imgAlt: "Java Programming Language",
            imgTitle: "Java Programming Language",
          },
          {
            title: "Kotlin",
            imgSrc: "kotlin-icon.png",
            imgAlt: "Kotlin Programming Language",
            imgTitle: "Kotlin Programming Language",
          },
        ],
      },
    
      {
        title: "Framework",
        technologies: [
        
          {
            title: "Tensorflow",
            imgSrc: "tensorflow-icon.png",
            imgAlt: "Tensorflow Framework",
            imgTitle: "Tensorflow Framework",
          },
          {
            title: "Pytorch",
            imgSrc: "pytorch-icon.png",
            imgAlt: "Pytorch Framework",
            imgTitle: "Pytorch Framework",
          },
        ],
      },
    
      {
        title: "Cloud Infrastructure",
        technologies: [
          {
            title: "Microsoft Azure",
            imgSrc: "azure-icon.png",
            imgAlt: "Microsoft Azure",
            imgTitle: "Microsoft Azure",
          },
         
        ],
      },
      {
        title: "Database",
        technologies: [
         
          {
            title: "PostgreSQL",
            imgSrc: "postgres-icon.png",
            imgAlt: "PostgreSQL Database",
            imgTitle: "PostgreSQL Database",
          },
         
        
        ],
      },
      {
        title: "IDE Softwares",
        technologies: [
          {
            title: "Visual Studio Code",
            imgSrc: "vscode-icon.png",
            imgAlt: "Visual Studio Code IDE",
            imgTitle: "Visual Studio Code IDE",
          },
          {
            title: "Android Studio",
            imgSrc: "android-studio-icon.png",
            imgAlt: "Android Studio IDE",
            imgTitle: "Android Studio IDE",
          },
          
        
        
        ],
      },
      ],
      targetedPlatform: [
        { alt: "Windows", title: "Windows", src: "windows-icon.png" },
        { alt: "Linux", title: "Linux", src: "linux-icon.png" },
      ],

      ghubLink: "/",
      carouselImg: [1, 2, 3, 4, 5, 6, 7, 8, 9].map(
        (elem) => "monument-recognition-application-images/" + elem + ".jpg",
      ),
      demoLink: "/",
      videoDemo: "https://www.youtube.com/embed/17l66cbys_M?list=RD17l66cbys_M",
      projectRoute: "",
      hasNote: true,
      isFeatured: true,
      note:"hehe",
      targetDevice: "phone",
      navlink: "monument-recognition",
    },

    {
      id: 1,
      orientation: 1,
      projectTitle: "Samay Baji Web Application",
      projectSmallTitle: "Samay Baji",
      projectType: "web",
      projectCategory: ["Full Stack", "Web Application"],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, impedit at animi ipsa facere iure cumque corrupti sit optio esse error temporibus cupiditate? Nemo iste ad error illo quasi iusto!" +
        <br></br> +
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita accusamus at magni tenetur nulla necessitatibus quas omnis eaque, exercitationem perferendis neque optio ullam excepturi aut earum natus veritatis obcaecati quibusdam!",
      miniDescription:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita accusamus at magni tenetur nulla necessitatibus quas omnis eaque, exercitationem perferendis neque optio ullam excepturi aut earum natus veritatis obcaecati quibusdam!",
      techUsed: [
        {
          title: "Programming Language",
          technologies: [
            {
              title: "Python",
              imgSrc: "python-icon.png",
              imgAlt: "Python Programming Language",
              imgTitle: "Python Programming Language",
            },
         
            {
              title: "Javascript",
              imgSrc: "js-icon.png",
              imgAlt: "Javascript Programming Language",
              imgTitle: "Javascript Programming Language",
            },
            
           
          ],
        },
      
        {
          title: "Framework",
          technologies: [
            {
              title: "Django",
              imgSrc: "django-icon.png",
              imgAlt: "Django Framework",
              imgTitle: "Django Framework",
            },
          
          
            
          ],
        },
      
        {
          title: "Cloud Infrastructure",
          technologies: [
            {
              title: "Microsoft Azure",
              imgSrc: "azure-icon.png",
              imgAlt: "Microsoft Azure",
              imgTitle: "Microsoft Azure",
            },
           
          ],
        },
       
        {
          title: "IDE Softwares",
          technologies: [
            {
              title: "Visual Studio Code",
              imgSrc: "vscode-icon.png",
              imgAlt: "Visual Studio Code IDE",
              imgTitle: "Visual Studio Code IDE",
            },
          
            
          
          
          ],
        },
      ],
      targetedPlatform: [
        { alt: "Windows", title: "Windows", src: "windows-icon.png" },
        { alt: "Linux", title: "Linux", src: "linux-icon.png" },
      ],
      ghubLink: "/",
      carouselImg: [1, 2, 3, 4, 5, 6, 7, 8, 9].map(
        (elem) => "samaybaji-web-application-images/" + elem + ".jpg",
      ),
      demoLink: "",
      videoDemo: "https://www.youtube.com/embed/17l66cbys_M?list=RD17l66cbys_M",
      projectRoute: "",
      hasNote: false,
      isFeatured: true,
      note:"hehe",
      targetDevice: "both",
      navlink: "samay-baji",
    },

    {
      id: 2,
      orientation: 0,
      projectTitle: "Med Test Application",
      projectSmallTitle: "Med Test",
      projectType: "mobile",
      projectCategory: ["Android Platform", "Mobile Application"],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, impedit at animi ipsa facere iure cumque corrupti sit optio esse error temporibus cupiditate? Nemo iste ad error illo quasi iusto!" +
        <br></br> +
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita accusamus at magni tenetur nulla necessitatibus quas omnis eaque, exercitationem perferendis neque optio ullam excepturi aut earum natus veritatis obcaecati quibusdam!",
      miniDescription:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita accusamus at magni tenetur nulla necessitatibus quas omnis eaque, exercitationem perferendis neque optio ullam excepturi aut earum natus veritatis obcaecati quibusdam!",
      techUsed: [{
        title: "Programming Language",
        technologies: [

          
          {
            title: "Dart",
            imgSrc: "dart-icon.png",
            imgAlt: "Dart Programming Language",
            imgTitle: "Dart Programming Language",
          },
         
          
        ],
      },
    
      {
        title: "Framework",
        technologies: [
         
          {
            title: "Flutter",
            imgSrc: "flutter-icon.png",
            imgAlt: "Flutter Framework",
            imgTitle: "Flutter Framework",
          },
       
        ],
      },
   
      {
        title: "Database",
        technologies: [
         
          {
            title: "Firebase",
            imgSrc: "firebase-icon.png",
            imgAlt: "Firebase Database",
            imgTitle: "Firebase Database",
          },
        
        ],
      },
      {
        title: "IDE Softwares",
        technologies: [
          {
            title: "Visual Studio Code",
            imgSrc: "vscode-icon.png",
            imgAlt: "Visual Studio Code IDE",
            imgTitle: "Visual Studio Code IDE",
          },
          {
            title: "Android Studio",
            imgSrc: "android-studio-icon.png",
            imgAlt: "Android Studio IDE",
            imgTitle: "Android Studio IDE",
          },
          
          
        
        ],
      },
      ],
      targetedPlatform: [
        { alt: "Windows", title: "Windows", src: "windows-icon.png" },
        { alt: "Linux", title: "Linux", src: "linux-icon.png" },
      ],
      ghubLink: "/",
      carouselImg: [1, 2, 3, 4, 5, 6, 7, 8, 9].map(
        (elem) => "med-test-application-images/" + elem + ".jpg",
      ),
      demoLink: "/",
      videoDemo: "https://www.youtube.com/embed/17l66cbys_M?list=RD17l66cbys_M",
      projectRoute: "",
      hasNote: false,
      isFeatured: true,
      note:"hehe",
      targetDevice: "phone",
      navlink: "med-test",
    },

    {
      id: 3,
      orientation: 1,
      projectTitle: "Debris Destroyer Game",
      projectSmallTitle: "Debris Destroyer",
      projectType: "game",
      projectCategory: ["Game Development", "Executable Game"],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, impedit at animi ipsa facere iure cumque corrupti sit optio esse error temporibus cupiditate? Nemo iste ad error illo quasi iusto!" +
        <br></br> +
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita accusamus at magni tenetur nulla necessitatibus quas omnis eaque, exercitationem perferendis neque optio ullam excepturi aut earum natus veritatis obcaecati quibusdam!",
      miniDescription:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita accusamus at magni tenetur nulla necessitatibus quas omnis eaque, exercitationem perferendis neque optio ullam excepturi aut earum natus veritatis obcaecati quibusdam!",
      techUsed: [
        {
          title: "Programming Language",
          technologies: [
            
            {
              title: "C#",
              imgSrc: "csharp-icon.png",
              imgAlt: "C# Programming Language",
              imgTitle: "C# Programming Language",
            },
           
          
          
           
          ],
        },
      
        
      
       
      
        {
          title: "IDE Softwares",
          technologies: [
            {
              title: "Visual Studio Code",
              imgSrc: "vscode-icon.png",
              imgAlt: "Visual Studio Code IDE",
              imgTitle: "Visual Studio Code IDE",
            },
           
            
            {
              title: "Unity",
              imgSrc: "unity-icon.png",
              imgAlt: "Unity Engine",
              imgTitle: "Unity Engine",
            },
          
          ],
        },
      ],
      targetedPlatform: [
        { alt: "Windows", title: "Windows", src: "windows-icon.png" },
        { alt: "Linux", title: "Linux", src: "linux-icon.png" },
      ],
      ghubLink: "/",
      carouselImg: [1, 2, 3, 4, 5, 6, 7, 8, 9].map(
        (elem) => "debris-destroyer-game-images/" + elem + ".jpg",
      ),
      demoLink: "/",
      videoDemo: "https://www.youtube.com/embed/17l66cbys_M?list=RD17l66cbys_M",
      projectRoute: "",
      hasNote: false,
      isFeatured: true,
      note:"hehe",
      targetDevice: "web",
      navlink: "debris-destroyer",
    },
    {
      id: 4,
      orientation: 1,
      projectTitle: "Crop Wiki Mobile Applciation",
      projectSmallTitle: "Crop Wiki",
      projectType: "mobile",
      projectCategory: ["Android Platform", "Mobile Application"],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, impedit at animi ipsa facere iure cumque corrupti sit optio esse error temporibus cupiditate? Nemo iste ad error illo quasi iusto!" +
        <br></br> +
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita accusamus at magni tenetur nulla necessitatibus quas omnis eaque, exercitationem perferendis neque optio ullam excepturi aut earum natus veritatis obcaecati quibusdam!",
      miniDescription:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita accusamus at magni tenetur nulla necessitatibus quas omnis eaque, exercitationem perferendis neque optio ullam excepturi aut earum natus veritatis obcaecati quibusdam!",

      techUsed: [
        {
          title: "Programming Language",
          technologies: [
           
         
           
           
            {
              title: "Java",
              imgSrc: "java-icon.png",
              imgAlt: "Java Programming Language",
              imgTitle: "Java Programming Language",
            },
            {
              title: "Kotlin",
              imgSrc: "kotlin-icon.png",
              imgAlt: "Kotlin Programming Language",
              imgTitle: "Kotlin Programming Language",
            },
          ],
        },
      
       
      
       
        {
          title: "Database",
          technologies: [
            {
              title: "MySQL",
              imgSrc: "mysql-icon.png",
              imgAlt: "MySQL Database",
              imgTitle: "MySQL Database",
            },
            
           
          
          ],
        },
        {
          title: "IDE Softwares",
          technologies: [
            {
              title: "Visual Studio Code",
              imgSrc: "vscode-icon.png",
              imgAlt: "Visual Studio Code IDE",
              imgTitle: "Visual Studio Code IDE",
            },
            {
              title: "Android Studio",
              imgSrc: "android-studio-icon.png",
              imgAlt: "Android Studio IDE",
              imgTitle: "Android Studio IDE",
            },
            
            
          
          ],
        },
      ],
      targetedPlatform: [
        { alt: "Windows", title: "Windows", src: "windows-icon.png" },
        { alt: "Linux", title: "Linux", src: "linux-icon.png" },
      ],
      ghubLink: "/",
      carouselImg: [1, 2, 3, 4, 5, 6, 7, 8, 9].map(
        (elem) => "crop-wiki-application-images/" + elem + ".jpg",
      ),
      demoLink: "/",
      videoDemo: "https://www.youtube.com/embed/17l66cbys_M?list=RD17l66cbys_M",
      projectRoute: "",
      isFeatured: false,
      hasNote: false,
      note:"hehe",
      targetDevice: "phone",
      navlink: "crop-wiki",
    },
    {
      id: 5,
      orientation: 1,
      projectTitle: "GpuV Web Application",
      projectSmallTitle: "GpuV",
      projectType: "web",
      projectCategory: ["Linux", "Web Application"],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, impedit at animi ipsa facere iure cumque corrupti sit optio esse error temporibus cupiditate? Nemo iste ad error illo quasi iusto!" +
        <br></br> +
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita accusamus at magni tenetur nulla necessitatibus quas omnis eaque, exercitationem perferendis neque optio ullam excepturi aut earum natus veritatis obcaecati quibusdam!",
      miniDescription:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita accusamus at magni tenetur nulla necessitatibus quas omnis eaque, exercitationem perferendis neque optio ullam excepturi aut earum natus veritatis obcaecati quibusdam!",

      techUsed: [
        {
          title: "Programming Language",
          technologies: [
            {
              title: "Python",
              imgSrc: "python-icon.png",
              imgAlt: "Python Programming Language",
              imgTitle: "Python Programming Language",
            },
          
            {
              title: "Javascript",
              imgSrc: "js-icon.png",
              imgAlt: "Javascript Programming Language",
              imgTitle: "Javascript Programming Language",
            },
          ],
            
            
        },
      
        {
          title: "Framework",
          technologies: [
            {
              title: "Django",
              imgSrc: "django-icon.png",
              imgAlt: "Django Framework",
              imgTitle: "Django Framework",
            },
          
           
           
          ],
        },
      
       
        {
          title: "Database",
          technologies: [
            {
              title: "MySQL",
              imgSrc: "mysql-icon.png",
              imgAlt: "MySQL Database",
              imgTitle: "MySQL Database",
            },
           
           
          
          ],
        },
        {
          title: "IDE Softwares",
          technologies: [
            {
              title: "Visual Studio Code",
              imgSrc: "vscode-icon.png",
              imgAlt: "Visual Studio Code IDE",
              imgTitle: "Visual Studio Code IDE",
            },
          
            
            
          
          ],
        },
      ],
      targetedPlatform: [
        { alt: "Windows", title: "Windows", src: "windows-icon.png" },
        { alt: "Linux", title: "Linux", src: "linux-icon.png" },
      ],
      ghubLink: "/",
      carouselImg: [1, 2, 3, 4, 5, 6, 7, 8, 9].map(
        (elem) => "gpuv-web-application-images/" + elem + ".jpg",
      ),
      demoLink: "/",
      videoDemo: "https://www.youtube.com/embed/17l66cbys_M?list=RD17l66cbys_M",
      projectRoute: "",
      isFeatured: false,
      hasNote: false,
      note:"hehe",
      targetDevice: "web",
      navlink: "gpuv",
    },
    {
      id: 6,
      orientation: 1,
      projectTitle: "Movie Ticket Booking Bot",
      projectSmallTitle: "Movie Ticket Booking Bot",
      projectType: "browserAutomation",
      projectCategory: ["Browser Automation", "Bot"],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, impedit at animi ipsa facere iure cumque corrupti sit optio esse error temporibus cupiditate? Nemo iste ad error illo quasi iusto!" +
        <br></br> +
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita accusamus at magni tenetur nulla necessitatibus quas omnis eaque, exercitationem perferendis neque optio ullam excepturi aut earum natus veritatis obcaecati quibusdam!",
      miniDescription:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita accusamus at magni tenetur nulla necessitatibus quas omnis eaque, exercitationem perferendis neque optio ullam excepturi aut earum natus veritatis obcaecati quibusdam!",

      techUsed: [
        {
          title: "Programming Language",
          technologies: [
            {
              title: "Python",
              imgSrc: "python-icon.png",
              imgAlt: "Python Programming Language",
              imgTitle: "Python Programming Language",
            },
      
            
          ],
        },
      
       
      
       
        {
          title: "IDE Softwares",
          technologies: [
            {
              title: "Visual Studio Code",
              imgSrc: "vscode-icon.png",
              imgAlt: "Visual Studio Code IDE",
              imgTitle: "Visual Studio Code IDE",
            },
            
            
            
          
          ],
        },
      ],
      targetedPlatform: [
        { alt: "Windows", title: "Windows", src: "windows-icon.png" },
        { alt: "Linux", title: "Linux", src: "linux-icon.png" },
      ],
      ghubLink: "/",
      carouselImg: [1, 2, 3, 4, 5, 6, 7, 8, 9].map(
        (elem) => "qfx-bot-images/" + elem + ".jpg",
      ),
      demoLink: "",
      videoDemo: "https://www.youtube.com/embed/17l66cbys_M?list=RD17l66cbys_M",
      projectRoute: "",
      isFeatured: false,
      hasNote: true,
      note:"heheeee",
      targetDevice: "web",
      navlink: "movie-ticket-booking-bot",
    },
  ];
}


export function TechnologyList (){
return ([
  {
    title: "Programming Language",
    technologies: [
      {
        title: "Python",
        imgSrc: "python-icon.png",
        imgAlt: "Python Programming Language",
        imgTitle: "Python Programming Language",
      },
      {
        title: "C#",
        imgSrc: "csharp-icon.png",
        imgAlt: "C# Programming Language",
        imgTitle: "C# Programming Language",
      },
      {
        title: "Javascript",
        imgSrc: "js-icon.png",
        imgAlt: "Javascript Programming Language",
        imgTitle: "Javascript Programming Language",
      },
      {
        title: "Dart",
        imgSrc: "dart-icon.png",
        imgAlt: "Dart Programming Language",
        imgTitle: "Dart Programming Language",
      },
      {
        title: "Java",
        imgSrc: "java-icon.png",
        imgAlt: "Java Programming Language",
        imgTitle: "Java Programming Language",
      },
      {
        title: "Kotlin",
        imgSrc: "kotlin-icon.png",
        imgAlt: "Kotlin Programming Language",
        imgTitle: "Kotlin Programming Language",
      },
    ],
  },

  {
    title: "Framework",
    technologies: [
      {
        title: "Django",
        imgSrc: "django-icon.png",
        imgAlt: "Django Framework",
        imgTitle: "Django Framework",
      },
      {
        title: "Flutter",
        imgSrc: "flutter-icon.png",
        imgAlt: "Flutter Framework",
        imgTitle: "Flutter Framework",
      },
      {
        title: "Tensorflow",
        imgSrc: "tensorflow-icon.png",
        imgAlt: "Tensorflow Framework",
        imgTitle: "Tensorflow Framework",
      },
      {
        title: "Pytorch",
        imgSrc: "pytorch-icon.png",
        imgAlt: "Pytorch Framework",
        imgTitle: "Pytorch Framework",
      },
    ],
  },

  {
    title: "Cloud Infrastructure",
    technologies: [
      {
        title: "Microsoft Azure",
        imgSrc: "azure-icon.png",
        imgAlt: "Microsoft Azure",
        imgTitle: "Microsoft Azure",
      },
     
    ],
  },
  {
    title: "Database",
    technologies: [
      {
        title: "MySQL",
        imgSrc: "mysql-icon.png",
        imgAlt: "MySQL Database",
        imgTitle: "MySQL Database",
      },
      {
        title: "PostgreSQL",
        imgSrc: "postgres-icon.png",
        imgAlt: "PostgreSQL Database",
        imgTitle: "PostgreSQL Database",
      },
      {
        title: "Firebase",
        imgSrc: "firebase-icon.png",
        imgAlt: "Firebase Database",
        imgTitle: "Firebase Database",
      },
    
    ],
  },
  {
    title: "IDE Softwares",
    technologies: [
      {
        title: "Visual Studio Code",
        imgSrc: "vscode-icon.png",
        imgAlt: "Visual Studio Code IDE",
        imgTitle: "Visual Studio Code IDE",
      },
      {
        title: "Android Studio",
        imgSrc: "android-studio-icon.png",
        imgAlt: "Android Studio IDE",
        imgTitle: "Android Studio IDE",
      },
      
      {
        title: "Unity",
        imgSrc: "unity-icon.png",
        imgAlt: "Unity Engine",
        imgTitle: "Unity Engine",
      },
    
    ],
  },
  {
    title: "Operating System",
    technologies: [
      {
        title: "Windows",
        imgSrc: "windows-icon.png",
        imgAlt: "Windows OS",
        imgTitle: "Windows OS",
      },
      {
        title: "Linux",
        imgSrc: "linux-icon.png",
        imgAlt: "Linux OS",
        imgTitle: "Linux OS",
      },
      
      {
        title: "Android",
        imgSrc: "android-icon.png",
        imgAlt: "Android OS",
        imgTitle: "Android OS",
      },
    
    ],
  },


  
]);

}
