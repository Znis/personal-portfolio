export default function ProjectList() {
  return [
    {
      id: 0,
      orientation: 0,
      projectTitle: "Monument Recognition App",
      projectSmallTitle: "Monument Recognition",
      projectType: "ml",
      projectCategory: ["Machine Learning", "Mobile Application"],
      description: (
        <p>
          The Monument Recognition Application is a mobile app driven by machine
          learning and object detection technology. It enables real-time
          identification of historical monuments using your phone&apos;s camera.
          Additionally, it provides in-depth information about the recognized
          monuments. This app was a collaborative effort, developed as part of a
          group project during the third year of our computer engineering
          program, aiming to fulfill our minor project requirements.
          <br></br>
          <br></br>
          The mobile app employs a MobileNetSSD V2 object detection model, which
          has been trained on a custom dataset, to initially identify monuments
          in the camera feed. Once detected, the app does an API call to the
          server hosted on virtual machine in Microsoft Azure where the
          inferencing model named YOLO V7 is deployed which does the
          identification of the monument. Monument information and location
          coordinates are stored in a PostgreSQL database. An intelligent
          feature validates the monument&apos;s identification by comparing
          real-time device coordinates with monument location coordinates.
          <br></br>
          <br></br>
          Moreover, the app offers recommendations for nearby amenities such as
          hotels and ATMs based on location coordinates. The machine learning
          models were trained using a custom dataset created by our team. For
          further project details, including the proposal and report, please
          visit the project&apos;s GitHub link.
        </p>
      ),
      miniDescription: (
        <p>
          The Monument Recognition App is like a magic camera on your phone. It
          uses machine learning to instantly find and tell you about historical
          landmarks when you point your phone camera at them. It even shows you
          detailed information about these monuments.
        </p>
      ),
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
        {
          alt: "Android Platform",
          title: "Android Platform",
          src: "android-icon.png",
        },
      ],

      ghubLink: "https://github.com/Znis/monument-recognition.git",
      carouselImg: {
        web: [],

        phone: [
          {
            imgSrc: "monument-recognition-application-images/phone/1.jpg",
            imgTitle: "Splash Screen",
          },
          {
            imgSrc: "monument-recognition-application-images/phone/2.jpg",
            imgTitle: "Camera Screen",
          },
          {
            imgSrc: "monument-recognition-application-images/phone/3.jpg",
            imgTitle: "Monument Recognition",
          },
          {
            imgSrc: "monument-recognition-application-images/phone/4.jpg",
            imgTitle: "Monument Details",
          },
          {
            imgSrc: "monument-recognition-application-images/phone/5.jpg",
            imgTitle: "App Settings",
          },
          {
            imgSrc: "monument-recognition-application-images/phone/6.jpg",
            imgTitle: "Nearby Services Page",
          },
          {
            imgSrc: "monument-recognition-application-images/phone/7.jpg",
            imgTitle: "Nearby Hotels Page",
          },
          {
            imgSrc: "monument-recognition-application-images/phone/8.jpg",
            imgTitle: "Nearby ATMs Page",
          },
          {
            imgSrc: "monument-recognition-application-images/phone/9.jpg",
            imgTitle: "Redirect to Google Map",
          },
        ],
      },
      demoLink:
        "https://github.com/Znis/monument-recognition/releases/tag/apkfile",
      videoDemo: "https://www.youtube.com/embed/JQKLWwSyBII",
      projectRoute: RoutingLinks.projects + "/monument-recognition",
      hasNote: true,
      isFeatured: true,
      isLive: false,
      note: "Currently, the YOLO V7 model deployed on remote server is offline so, the app cannot do the monument identification. However, monument detection by the model running on the phone works as intended.",
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
      description: (
        <p>
          Samay Baji&apos;s web app is a full-stack web platform designed for
          ordering authentic Newari cuisines. The platform allows restaurants
          specializing in Newari cuisine to register and sell their menus. Users
          can browse through a variety of dishes, place orders, and track their
          order status in real-time. Samaybaji aims to bring the rich flavors of
          Newari cuisine to a wider audience while providing a seamless and
          efficient user experience for both customers and restaurant partners.
          <br></br>
          <br></br>
          This application is crafted using a mix of HTML, CSS, and TypeScript
          for the user interface, with Node JS and Express JS powering the
          backend and MinIO S3 Bucket for storing and retrieving media files. It
          features a PostgreSQL database.
        </p>
      ),
      miniDescription: (
        <p>
          The Samay Baji Web App is like an online food ordering website for a
          Newari restaurant. It allows you to pick your favorite Newari dishes
          from the menu and sends your order to the restaurant so they can
          prepare and deliver it to you. You can register as seller too and
          create you own menu.
        </p>
      ),
      techUsed: [
        {
          title: "Programming Language",
          technologies: [
            {
              title: "TypeScript",
              imgSrc: "ts-icon.png",
              imgAlt: "TypeScript Programming Language",
              imgTitle: "TypeScript Programming Language",
            },
          ],
        },
        {
          title: "Library",
          technologies: [
            {
              title: "Node JS",
              imgSrc: "node-icon.png",
              imgAlt: "Node JS Backend Library",
              imgTitle: "Node JS Backend Library",
            },
            {
              title: "Express JS",
              imgSrc: "express-icon.png",
              imgAlt: "Express JS Backend Library",
              imgTitle: "Express JS Backend Library",
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
          title: "Storage",
          technologies: [
            {
              title: "MinIO S3",
              imgSrc: "minio-icon.png",
              imgAlt: "MinIO S3 Bucket",
              imgTitle: "MinIO S3 Bucket",
            },
          ],
        },
        {
          title: "Containerization",
          technologies: [
            {
              title: "Docker",
              imgSrc: "docker-icon.png",
              imgAlt: "Docker",
              imgTitle: "Docker",
              isTechStack: true,
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
        { alt: "Web Platform", title: "Web Platform", src: "web-icon.png" },
      ],
      ghubLink: "https://github.com/Znis/samaybaji-web-app.git",
      carouselImg: {
        web: [
          {
            imgSrc: "samaybaji-web-application-images/web/1.jpg",
            imgTitle: "Home Page",
          },
          {
            imgSrc: "samaybaji-web-application-images/web/2.jpg",
            imgTitle: "Popular Menu Section",
          },
          {
            imgSrc: "samaybaji-web-application-images/web/3.jpg",
            imgTitle: "Menu Page",
          },
          {
            imgSrc: "samaybaji-web-application-images/web/4.jpg",
            imgTitle: "Cart Page",
          },
          {
            imgSrc: "samaybaji-web-application-images/web/5.jpg",
            imgTitle: "Authentication Modal",
          },
          {
            imgSrc: "samaybaji-web-application-images/web/6.jpg",
            imgTitle: "Checkout Page",
          },
          {
            imgSrc: "samaybaji-web-application-images/web/7.jpg",
            imgTitle: "Customer Dashboard Page",
          },
          {
            imgSrc: "samaybaji-web-application-images/web/8.jpg",
            imgTitle: "Restaurant Dashboard Page",
          },
          {
            imgSrc: "samaybaji-web-application-images/web/9.jpg",
            imgTitle: "Dish Detail Page",
          },
          {
            imgSrc: "samaybaji-web-application-images/web/10.jpg",
            imgTitle: "Dish Review Section",
          },
        ],

        phone: [
          {
            imgSrc: "samaybaji-web-application-images/phone/1.jpg",
            imgTitle: "Home Page",
          },
          {
            imgSrc: "samaybaji-web-application-images/phone/2.jpg",
            imgTitle: "Menu Section",
          },
          {
            imgSrc: "samaybaji-web-application-images/phone/3.jpg",
            imgTitle: "About Us Section",
          },
          {
            imgSrc: "samaybaji-web-application-images/phone/4.jpg",
            imgTitle: "Feedback Form Section",
          },
          {
            imgSrc: "samaybaji-web-application-images/phone/5.jpg",
            imgTitle: "Download App Section",
          },
          {
            imgSrc: "samaybaji-web-application-images/phone/6.jpg",
            imgTitle: "Footer Section",
          },
          {
            imgSrc: "samaybaji-web-application-images/phone/7.jpg",
            imgTitle: "Sign Up Page",
          },
          {
            imgSrc: "samaybaji-web-application-images/phone/8.jpg",
            imgTitle: "Cart",
          },
        ],
      },
      demoLink:
        "https://samaybaji.jenishtwayana.com.np/",
      videoDemo: "https://www.youtube.com/embed/boM0QXe7jR4",
      projectRoute: RoutingLinks.projects + "/samay-baji",
      hasNote: false,
      isFeatured: true,
      isLive: true,
      note: "",
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
      description: (
        <p>
          The Med Test Mobile App simplifies the process of scheduling medical
          tests. Users can book tests through the app and receive their reports
          conveniently within the same app. A medical officer collects the
          required samples from the user at their preferred location. The app
          also includes account sign-in and signup features for a personalized
          experience. With this app, users can easily book tests, track their
          progress, view results, and access their test history. The location
          feature ensures accurate client information, making it easier and more
          reliable to locate users when needed.
          <br></br>
          <br></br>
          The application is built using the Flutter framework, utilizing the
          Dart programming language. It incorporates a location feature powered
          by the OpenStreetMaps library. Firebase by Google serves as both the
          backend and database for the app, ensuring seamless functionality and
          data management.
        </p>
      ),

      miniDescription: (
        <p>
          The Med Test Mobile App is your healthcare companion on your phone.
          With it, you can easily book medical tests, and a medical professional
          will come to your chosen location to collect the required samples. The
          app also delivers your test reports to you, so it&apos;s all
          conveniently managed in one place.
        </p>
      ),
      techUsed: [
        {
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
        {
          alt: "Android Platform",
          title: "Android Platform",
          src: "android-icon.png",
        },
      ],
      ghubLink: "https://github.com/Znis/medtest.git",
      carouselImg: {
        web: [],

        phone: [
          {
            imgSrc: "med-test-application-images/phone/1.jpg",
            imgTitle: "Splash Screen",
          },
          {
            imgSrc: "med-test-application-images/phone/2.jpg",
            imgTitle: "Login Screen",
          },
          {
            imgSrc: "med-test-application-images/phone/3.jpg",
            imgTitle: "Home Screen",
          },
          {
            imgSrc: "med-test-application-images/phone/4.jpg",
            imgTitle: "Test Detail Screen",
          },
          {
            imgSrc: "med-test-application-images/phone/5.jpg",
            imgTitle: "Cart",
          },
          {
            imgSrc: "med-test-application-images/phone/6.jpg",
            imgTitle: "Patient Detail Page",
          },
          {
            imgSrc: "med-test-application-images/phone/7.jpg",
            imgTitle: "Location Loading Page",
          },
          {
            imgSrc: "med-test-application-images/phone/8.jpg",
            imgTitle: "Location Page",
          },
          {
            imgSrc: "med-test-application-images/phone/9.jpg",
            imgTitle: "Confirm Page",
          },
          {
            imgSrc: "med-test-application-images/phone/10.jpg",
            imgTitle: "Booking Success Page",
          },
          {
            imgSrc: "med-test-application-images/phone/11.jpg",
            imgTitle: "Active Order Page",
          },
          {
            imgSrc: "med-test-application-images/phone/12.jpg",
            imgTitle: "Order Detail page",
          },
          {
            imgSrc: "med-test-application-images/phone/13.jpg",
            imgTitle: "Past Orders Page",
          },
          {
            imgSrc: "med-test-application-images/phone/14.jpg",
            imgTitle: "Order Detail page",
          },
          {
            imgSrc: "med-test-application-images/phone/15.jpg",
            imgTitle: "Lab Reports Page",
          },
          {
            imgSrc: "med-test-application-images/phone/16.jpg",
            imgTitle: "Report Detail Page",
          },
        ],
      },
      demoLink: "https://github.com/Znis/medtest/releases/tag/apkfile",
      videoDemo: "https://www.youtube.com/embed/tmWcNpkbHy0",
      projectRoute: RoutingLinks.projects + "/med-test",
      hasNote: false,
      isFeatured: true,
      isLive: false,
      note: "hehe",
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
      description: (
        <p>
          The Debris Destroyer game, designed for Windows platform, lets players
          pilot a spaceship to shoot space debris, earning points. While doing
          so, players must also manage the spaceship&apos;s health and fuel
          levels, refilling them at checkpoint satellites. This game not only
          entertains but also educates players about the critical global issue
          of space debris.
          <br></br>
          <br></br>
          The game was crafted in Unity Engine with the C# programming language.
          Its assets, such as spaceships, satellites, planets, and the moon,
          were sourced from NASA&apos;s official resources. Our team of four
          exceptional individuals created this game as part of the NASA Space
          Apps Challenge 2019 Hackathon, where it achieved the remarkable feat
          of securing the 2nd runner-up position in this fantastic event.
        </p>
      ),

      miniDescription: (
        <p>
          The Debris Destroyer game is an interactive game that you can play on
          your windows device. In this game, you control a spaceship, shooting
          at space debris while collecting points. The game also aims to educate
          players about the important issue of space debris in our Earth orbit.
        </p>
      ),
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
              title: "Unity",
              imgSrc: "unity-icon.png",
              imgAlt: "Unity Engine",
              imgTitle: "Unity Engine",
            },
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
      ],
      ghubLink: "https://github.com/Znis/debris-destroyer.git",
      carouselImg: {
        web: [
          {
            imgSrc: "debris-destroyer-game-images/web/1.jpg",
            imgTitle: "Game Screen",
          },
          {
            imgSrc: "debris-destroyer-game-images/web/2.jpg",
            imgTitle: "Game Screen",
          },
          {
            imgSrc: "debris-destroyer-game-images/web/3.jpg",
            imgTitle: "Satellite",
          },
          {
            imgSrc: "debris-destroyer-game-images/web/4.jpg",
            imgTitle: "Game Screen",
          },
          {
            imgSrc: "debris-destroyer-game-images/web/5.jpg",
            imgTitle: "Game over Screen",
          },
          {
            imgSrc: "debris-destroyer-game-images/web/6.jpg",
            imgTitle: "Projectile Shoot",
          },
          {
            imgSrc: "debris-destroyer-game-images/web/7.jpg",
            imgTitle: "Projectile Explosion",
          },
          {
            imgSrc: "debris-destroyer-game-images/web/8.jpg",
            imgTitle: "Game Screen",
          },
          {
            imgSrc: "debris-destroyer-game-images/web/9.jpg",
            imgTitle: "Game Screen",
          },
          {
            imgSrc: "debris-destroyer-game-images/web/10.jpg",
            imgTitle: "Game Screen",
          },
        ],

        phone: [],
      },
      demoLink: "https://github.com/Znis/debris-destroyer/releases/tag/exefile",
      videoDemo: "https://www.youtube.com/embed/zEqrxhE9ag0",
      projectRoute: RoutingLinks.projects + "/debris-destroyer",
      hasNote: false,
      isFeatured: true,
      isLive: false,
      note: "hehe",
      targetDevice: "web",
      navlink: "debris-destroyer",
    },
    {
      id: 4,
      orientation: 0,
      projectTitle: "Eclipse of the Lantern Game",
      projectSmallTitle: "Eclipse of the Lantern",
      projectType: "game",
      projectCategory: ["Game Development", "Web Browser Game"],
      description: (
        <p>
          The Eclipse of the Lantern is an exciting action-adventure pixels game
          set in a world much like our own, plunged into darkness. You play as a
          lone wanderer trying to survive and eliminate the enemies. Your only
          defense against the dangers of the dark is a lantern that makes
          enemies weaker and lights your way. However, the lantern&apos;s light
          fades over time, and you must keep it glowing by refueling it. Along
          the journey, you can also find weapons and learn new abilities to help
          you survive.
          <br></br>
          <br></br>
          The game was crafted using only HTML, TypeScript and Canvas API. It
          features no any backend and database services. You can play it on your
          web browser.
        </p>
      ),

      miniDescription: (
        <p>
          Eclipse of the Lantern is an action-adventure pixel game where you, a
          lone wanderer, must survive in a darkened world. Use a fading lantern
          to weaken enemies and light your way, refueling it to stay alive while
          discovering weapons and abilities.
        </p>
      ),
      techUsed: [
        {
          title: "Programming Language",
          technologies: [
            {
              title: "TypeScript",
              imgSrc: "ts-icon.png",
              imgAlt: "TypeScript Programming Language",
              imgTitle: "TypeScript Programming Language",
            },
          ],
        },
        {
          title: "Web Technologies",
          technologies: [
            {
              title: "HTML",
              imgSrc: "html-icon.png",
              imgAlt: "HTML",
              imgTitle: "HTML",
              isTechStack: true,
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
        { alt: "Web Platform", title: "Web Platform", src: "web-icon.png" },
      ],
      ghubLink: "https://github.com/Znis/Eclipse-of-the-Lantern.git",
      carouselImg: {
        web: [
          {
            imgSrc: "eclipse-of-the-lantern-game-images/web/1.jpg",
            imgTitle: "Menu Screen",
          },
          {
            imgSrc: "eclipse-of-the-lantern-game-images/web/2.jpg",
            imgTitle: "Game Screen",
          },
          {
            imgSrc: "eclipse-of-the-lantern-game-images/web/3.jpg",
            imgTitle: "EnemyAttack Frame",
          },
          {
            imgSrc: "eclipse-of-the-lantern-game-images/web/4.jpg",
            imgTitle: "Axe Weapon Attack Screen",
          },
          {
            imgSrc: "eclipse-of-the-lantern-game-images/web/5.jpg",
            imgTitle: "Gun Attack Screen",
          },
          {
            imgSrc: "eclipse-of-the-lantern-game-images/web/6.jpg",
            imgTitle: "Lantern Refuel Screen",
          },
          {
            imgSrc: "eclipse-of-the-lantern-game-images/web/7.jpg",
            imgTitle: "Inside the House Screen",
          },
          {
            imgSrc: "eclipse-of-the-lantern-game-images/web/8.jpg",
            imgTitle: "Light of Blessings Skill Screen",
          },
          {
            imgSrc: "eclipse-of-the-lantern-game-images/web/9.jpg",
            imgTitle: "Breath of Dragon Skill Screen",
          },
          {
            imgSrc: "eclipse-of-the-lantern-game-images/web/10.jpg",
            imgTitle: "Boss Attack Screen",
          },
        ],

        phone: [],
      },
      demoLink: "https://eotl.jenishtwayana.com.np/",
      videoDemo: "https://www.youtube.com/embed/CZ-iM8cFd9A",
      projectRoute: RoutingLinks.projects + "/eclipse-of-the-lantern",
      hasNote: false,
      isFeatured: true,
      isLive: true,
      note: "hehe",
      targetDevice: "web",
      navlink: "eclipse-of-the-lantern",
    },
    {
      id: 5,
      orientation: 1,
      projectTitle: "Crop Wiki Mobile Applciation",
      projectSmallTitle: "Crop Wiki",
      projectType: "mobile",
      projectCategory: ["Android Platform", "Mobile Application"],
      description: (
        <p>
          Crop Wiki is a simple mobile app designed to suggest suitable crops
          for your farm. All it takes is a bit of information from you, such as
          humidity, temperature, rainfall, and the season, and the app will
          provide a tailored list of crops that can thrive in your specific
          conditions.
          <br></br>
          <br></br>
          The application is created using Android Studio and programmed in
          Java. It contains an integrated database to store crop data, ensuring
          a smooth and efficient user experience.
        </p>
      ),
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
        {
          alt: "Android Platform",
          title: "Android Platform",
          src: "android-icon.png",
        },
      ],
      ghubLink: "https://github.com/Znis/crop-wiki.git",
      carouselImg: {
        web: [],

        phone: [
          {
            imgSrc: "crop-wiki-application-images/phone/1.jpg",
            imgTitle: "Splash Screen",
          },
          {
            imgSrc: "crop-wiki-application-images/phone/2.jpg",
            imgTitle: "Home Screen",
          },
          {
            imgSrc: "crop-wiki-application-images/phone/3.jpg",
            imgTitle: "Create New Profile Screen",
          },
          {
            imgSrc: "crop-wiki-application-images/phone/4.jpg",
            imgTitle: "Profiles Screen",
          },
          {
            imgSrc: "crop-wiki-application-images/phone/5.jpg",
            imgTitle: "Profile Login",
          },
          {
            imgSrc: "crop-wiki-application-images/phone/6.jpg",
            imgTitle: "Suitable Crop List",
          },
          {
            imgSrc: "crop-wiki-application-images/phone/7.jpg",
            imgTitle: "Query Crop List",
          },
          {
            imgSrc: "crop-wiki-application-images/phone/8.jpg",
            imgTitle: "Crop List Query Result",
          },
          {
            imgSrc: "crop-wiki-application-images/phone/9.jpg",
            imgTitle: "Crop Data",
          },
          {
            imgSrc: "crop-wiki-application-images/phone/10.jpg",
            imgTitle: "Add New Crop Page",
          },
        ],
      },
      demoLink: "https://github.com/Znis/crop-wiki/releases/tag/apkfile",
      videoDemo: "https://www.youtube.com/embed/SOb-XXryWm8",
      projectRoute: RoutingLinks.projects + "/crop-wiki",
      isFeatured: false,
      hasNote: false,
      isLive: false,
      note: "hehe",
      targetDevice: "phone",
      navlink: "crop-wiki",
    },
    {
      id: 6,
      orientation: 1,
      projectTitle: "GpuV Web Application",
      projectSmallTitle: "GpuV",
      projectType: "web",
      projectCategory: ["Linux", "Web Application"],
      description: (
        <p>
          The GpuV web app is much like Google Colab (a cloud-based Jupyter
          notebook environment for Python coding). In this web app, users can
          sign in, gaining access to a Jupyter notebook interface to run their
          code. The app allows users to execute notebook files, upload files,
          and more. Importantly, the code runs on the server, not on the
          user&apos;s local machine. The server is equipped with multiple
          virtual machines and dedicated GPUs, providing the necessary hardware
          resources for accelerating data and machine learning projects and
          scripts.
          <br></br>
          <br></br>
          The web application is built with HTML, CSS, and JavaScript for the
          frontend, while Django powers the backend. Django handles user
          authentication, the database, and provides an admin control panel. The
          platform for Jupyter notebook is hosted on virtual machines managed by
          the QEMU virtual machine manager in a Linux operating system.
          Communication between the Django server and the virtual machine
          manager is facilitated by a message broker software called RabbitMQ.
          For additional details, please visit the GitHub repository.
        </p>
      ),
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
          title: "Operating System",
          technologies: [
            {
              title: "Linux",
              imgSrc: "linux-icon.png",
              imgAlt: "Linux",
              imgTitle: "Linux",
            },
          ],
        },
        {
          title: "Message Broker Software",
          technologies: [
            {
              title: "RabbitMQ",
              imgSrc: "rabbitmq-icon.png",
              imgAlt: "RabbitMQ",
              imgTitle: "RabbitMQ",
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
        { alt: "Web Platform", title: "Web Platform", src: "web-icon.png" },
      ],
      ghubLink: "https://github.com/Znis/gpuv.git",
      carouselImg: {
        web: [
          {
            imgSrc: "gpuv-web-application-images/web/1.jpg",
            imgTitle: "Login Page",
          },
          {
            imgSrc: "gpuv-web-application-images/web/2.jpg",
            imgTitle: "Home Page",
          },
          {
            imgSrc: "gpuv-web-application-images/web/3.jpg",
            imgTitle: "Notebook Login",
          },
          {
            imgSrc: "gpuv-web-application-images/web/4.jpg",
            imgTitle: "Notebook Dashboard",
          },
          {
            imgSrc: "gpuv-web-application-images/web/5.jpg",
            imgTitle: "Notebook Dashboard",
          },
          {
            imgSrc: "gpuv-web-application-images/web/6.jpg",
            imgTitle: "Inactivity Logout Warning",
          },
          {
            imgSrc: "gpuv-web-application-images/web/7.jpg",
            imgTitle: "Inactivity Logout",
          },
          {
            imgSrc: "gpuv-web-application-images/web/8.jpg",
            imgTitle: "Server Terminal Logs Screen",
          },
        ],

        phone: [
          {
            imgSrc: "gpuv-web-application-images/phone/1.jpg",
            imgTitle: "Login Page",
          },
          {
            imgSrc: "gpuv-web-application-images/phone/2.jpg",
            imgTitle: "Home Page",
          },
          {
            imgSrc: "gpuv-web-application-images/phone/3.jpg",
            imgTitle: "Notebook Login",
          },
          {
            imgSrc: "gpuv-web-application-images/phone/4.jpg",
            imgTitle: "Notebook Dashboard",
          },
        ],
      },
      demoLink: "",
      videoDemo: "https://www.youtube.com/embed/TGWBT7ZajAw",
      projectRoute: RoutingLinks.projects + "/gpuv",
      isFeatured: false,
      hasNote: false,
      isLive: false,
      note: "hehe",
      targetDevice: "both",
      navlink: "gpuv",
    },
    {
      id: 7,
      orientation: 1,
      projectTitle: "Movie Ticket Booking Bot",
      projectSmallTitle: "Movie Ticket Booking Bot",
      projectType: "browserAutomation",
      projectCategory: ["Browser Automation", "Bot"],
      description: (
        <p>
          The Movie Ticket Booking Bot is a script designed to streamline the
          process of reserving movie tickets from QFX Cinemas&apos; website in
          Nepal. Users input essential details like the movie name, showtime,
          and cinema location, and the bot takes care of booking or reserving
          the seats for that specific movie at the designated time and cinema by
          opening a automated browser tab. Furthermore, the bot can also monitor
          ticket availability on the website and secure seats as soon as they
          become available for booking, ensuring users don&apos;t miss out on
          their preferred shows.
          <br></br>
          <br></br>
          The bot is coded in Python, using the Selenium library for its
          functionality. This bot was created as a fun side project while I was
          learning about web scraping and browser automation. Its purpose is
          solely for learning and enjoyment, and it is not intended for any
          harmful or malicious use.
        </p>
      ),

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
          title: "Library",
          technologies: [
            {
              title: "Selenium",
              imgSrc: "selenium-icon.png",
              imgAlt: "Selenium Library",
              imgTitle: "Selenium Library",
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
        { alt: "Web Platform", title: "Web Platform", src: "web-icon.png" },
      ],
      ghubLink: "https://github.com/Znis/movie-ticket-booking-bot.git",
      carouselImg: {
        web: [
          { imgSrc: "qfx-bot-images/web/1.jpg", imgTitle: "Script Running" },
          { imgSrc: "qfx-bot-images/web/2.jpg", imgTitle: "Bot in Action" },
        ],

        phone: [],
      },
      demoLink: "",
      videoDemo: "",
      projectRoute: RoutingLinks.projects + "/movie-ticket-booking-bot",
      isFeatured: false,
      hasNote: true,
      isLive: false,
      note: "Unfortunately, the bot no longer functions as intended because the QFX Cinemas website has undergone a recent revamp, which may have affected the bot's ability to interact with the site's new structure.",
      targetDevice: "web",
      navlink: "movie-ticket-booking-bot",
    },
    {
      id: 8,
      orientation: 1,
      projectTitle: "DeepFake Detection Web Application",
      projectSmallTitle: "DeepFake Detection",
      projectType: "ml",
      projectCategory: ["Machine Learning", "Web Application"],
      description: (
        <p>
          The Deepfake Detection Web Application was a collaborative effort
          developed as part of our fourth-year computer engineering program. Our
          aim was to create a platform that detects whether uploaded videos are
          authentic or deepfake.
          <br></br>
          <br></br>
          To achieve this, we employed a detection model based on CNN with LSTM
          architecture. This model analyzes the temporal characteristics of
          facial movement within videos to determine their authenticity. We
          meticulously trained and tested the model using a dataset containing
          both real and deepfake videos.
          <br></br>
          <br></br>
          In terms of the application itself, we utilized ReactJS for the
          frontend development, ensuring an interactive and user-friendly
          experience. FastAPI, a Python-based web framework, served as the
          backbone for our backend inferencing server. This allowed seamless
          communication between the frontend and backend, enabling real-time
          analysis of uploaded videos.
          <br></br>
          <br></br>
          Moreover, our web application offers convenient account sign-in and
          sign-up features, enhancing user accessibility and personalization.
          With these features in place, users can easily access and manage their
          uploaded videos, contributing to a streamlined experience overall. For
          further project details, including the proposal and report, please
          visit the project&apos;s GitHub link.
        </p>
      ),

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
          title: "Library",
          technologies: [
            {
              title: "React",
              imgSrc: "react-icon.png",
              imgAlt: "React",
              imgTitle: "React",
            },
          ],
        },
        {
          title: "Framework",
          technologies: [
            {
              title: "Pytorch",
              imgSrc: "pytorch-icon.png",
              imgAlt: "Pytorch Framework",
              imgTitle: "Pytorch Framework",
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
          title: "Storage",
          technologies: [
            {
              title: "Bucket Storage",
              imgSrc: "bucket-icon.png",
              imgAlt: "Bucket Storage",
              imgTitle: "Bucket Storage",
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
        { alt: "Web Platform", title: "Web Platform", src: "web-icon.png" },
      ],
      ghubLink: "https://github.com/Znis/deepfake-video-detection-project",
      carouselImg: {
        web: [
          {
            imgSrc: "deepfake-detection-web-application-images/web/1.jpg",
            imgTitle: "Homepage",
          },
          {
            imgSrc: "deepfake-detection-web-application-images/web/2.jpg",
            imgTitle: "Google Sign In",
          },
          {
            imgSrc: "deepfake-detection-web-application-images/web/3.jpg",
            imgTitle: "Homepage After Signing In",
          },
          {
            imgSrc: "deepfake-detection-web-application-images/web/4.jpg",
            imgTitle: "Upload Video",
          },
          {
            imgSrc: "deepfake-detection-web-application-images/web/5.jpg",
            imgTitle: "Inferencing Video",
          },
          {
            imgSrc: "deepfake-detection-web-application-images/web/6.jpg",
            imgTitle: "Predicted Result",
          },
          {
            imgSrc: "deepfake-detection-web-application-images/web/7.jpg",
            imgTitle: "More Info on Prediction Result",
          },
          {
            imgSrc: "deepfake-detection-web-application-images/web/8.jpg",
            imgTitle: "Upload Video History",
          },
        ],

        phone: [],
      },
      demoLink: "https://deepfakedetection.me/",
      videoDemo: "https://www.youtube.com/embed/Tgo_5fGszJQ",
      projectRoute: RoutingLinks.projects + "/deepfake-detection",
      isFeatured: false,
      hasNote: true,
      isLive: true,
      note: "Currently, the detection model deployed on remote server is offline so, the app cannot perform the DeepFake detection.",
      targetDevice: "web",
      navlink: "deepfake-detection",
    },
  ];
}

export function TechnologyList() {
  return [
    {
      title: "Programming Language",
      technologies: [
        {
          title: "Python",
          imgSrc: "python-icon.png",
          imgAlt: "Python Programming Language",
          imgTitle: "Python Programming Language",
          isTechStack: true,
        },
        {
          title: "C#",
          imgSrc: "csharp-icon.png",
          imgAlt: "C# Programming Language",
          imgTitle: "C# Programming Language",
          isTechStack: false,
        },
        {
          title: "Javascript",
          imgSrc: "js-icon.png",
          imgAlt: "Javascript Programming Language",
          imgTitle: "Javascript Programming Language",
          isTechStack: true,
        },
        {
          title: "Dart",
          imgSrc: "dart-icon.png",
          imgAlt: "Dart Programming Language",
          imgTitle: "Dart Programming Language",
          isTechStack: false,
        },
        {
          title: "Java",
          imgSrc: "java-icon.png",
          imgAlt: "Java Programming Language",
          imgTitle: "Java Programming Language",
          isTechStack: false,
        },
        {
          title: "TypeScript",
          imgSrc: "ts-icon.png",
          imgAlt: "TypeScript Programming Language",
          imgTitle: "TypeScript Programming Language",
          isTechStack: true,
        },
        {
          title: "Kotlin",
          imgSrc: "kotlin-icon.png",
          imgAlt: "Kotlin Programming Language",
          imgTitle: "Kotlin Programming Language",
          isTechStack: false,
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
          isTechStack: true,
        },
        {
          title: "Flutter",
          imgSrc: "flutter-icon.png",
          imgAlt: "Flutter Framework",
          imgTitle: "Flutter Framework",
          isTechStack: true,
        },
        {
          title: "Tensorflow",
          imgSrc: "tensorflow-icon.png",
          imgAlt: "Tensorflow Framework",
          imgTitle: "Tensorflow Framework",
          isTechStack: true,
        },
        {
          title: "Pytorch",
          imgSrc: "pytorch-icon.png",
          imgAlt: "Pytorch Framework",
          imgTitle: "Pytorch Framework",
          isTechStack: true,
        },
      ],
    },
    {
      title: "Library",
      technologies: [
        {
          title: "React",
          imgSrc: "react-icon.png",
          imgAlt: "React",
          imgTitle: "React",
          isTechStack: true,
        },
        {
          title: "Node JS",
          imgSrc: "node-icon.png",
          imgAlt: "Node JS",
          imgTitle: "Node JS",
          isTechStack: true,
        },
        {
          title: "Express JS",
          imgSrc: "express-icon.png",
          imgAlt: "Express JS",
          imgTitle: "Express JS",
          isTechStack: true,
        },
        {
          title: "OpenStreetMap",
          imgSrc: "openstreetmaps-icon.png",
          imgAlt: "OpenStreetMap",
          imgTitle: "OpenStreetMap",
          isTechStack: false,
        },

        {
          title: "Selenium",
          imgSrc: "selenium-icon.png",
          imgAlt: "Selenium",
          imgTitle: "Selenium",
          isTechStack: false,
        },
      ],
    },
    {
      title: "Web Technologies",
      technologies: [
        {
          title: "HTML",
          imgSrc: "html-icon.png",
          imgAlt: "HTML",
          imgTitle: "HTML",
          isTechStack: true,
        },
        {
          title: "CSS",
          imgSrc: "css-icon.png",
          imgAlt: "CSS",
          imgTitle: "CSS",
          isTechStack: true,
        },
        {
          title: "SASS",
          imgSrc: "sass-icon.png",
          imgAlt: "SASS",
          imgTitle: "SASS",
          isTechStack: true,
        },

        {
          title: "Tailwind CSS",
          imgSrc: "tailwind-icon.png",
          imgAlt: "Tailwind CSS",
          imgTitle: "Tailwind CSS",
          isTechStack: true,
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
          isTechStack: true,
        },
        {
          title: "PostgreSQL",
          imgSrc: "postgres-icon.png",
          imgAlt: "PostgreSQL Database",
          imgTitle: "PostgreSQL Database",
          isTechStack: true,
        },
      ],
    },
    {
      title: "Containerization",
      technologies: [
        {
          title: "Docker",
          imgSrc: "docker-icon.png",
          imgAlt: "Docker",
          imgTitle: "Docker",
          isTechStack: true,
        },
      ],
    },
    {
      title: "Cloud Infrastructure and Service",
      technologies: [
        {
          title: "Microsoft Azure",
          imgSrc: "azure-icon.png",
          imgAlt: "Microsoft Azure",
          imgTitle: "Microsoft Azure",
          isTechStack: true,
        },
        {
          title: "Firebase",
          imgSrc: "firebase-icon.png",
          imgAlt: "Firebase Database",
          imgTitle: "Firebase Database",
          isTechStack: true,
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
          isTechStack: true,
        },
        {
          title: "Android Studio",
          imgSrc: "android-studio-icon.png",
          imgAlt: "Android Studio IDE",
          imgTitle: "Android Studio IDE",
          isTechStack: true,
        },

        {
          title: "Unity",
          imgSrc: "unity-icon.png",
          imgAlt: "Unity Engine",
          imgTitle: "Unity Engine",
          isTechStack: false,
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
          isTechStack: true,
        },
        {
          title: "Linux",
          imgSrc: "linux-icon.png",
          imgAlt: "Linux OS",
          imgTitle: "Linux OS",
          isTechStack: true,
        },

        {
          title: "Android",
          imgSrc: "android-icon.png",
          imgAlt: "Android OS",
          imgTitle: "Android OS",
          isTechStack: true,
        },
      ],
    },
  ];
}

export const RoutingLinks = {
  home: "/",
  projects: "/projects",
  about: "/about-me",
  contact: "/contact",
  resume: "resume.pdf",
  ghub: "https://github.com/Znis",
  linkedin: "https://linkedin.com/in/jenish-twayana",
  twitter: "https://twitter.com/zentw11",
  mail: "mailto:metwayana@gmail.com",
};

export const Gallery = {
  path: "gallery/",
  img: [
    { imgSrc: "1.jpg", imgAlt: "Silu Lake", imgTitle: "Silu Lake" },
    { imgSrc: "2.jpg", imgAlt: "Lake", imgTitle: "Lake" },
    { imgSrc: "3.jpg", imgAlt: "Trek Route", imgTitle: "Trek Route" },
  ],
};
