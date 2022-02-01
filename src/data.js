import { v4 as uuidv4 } from "uuid";

function SongPlayList() {
  return [
    {
      name: "Soulsounds",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/11/4c9682ee612a3b8ef51de286c49b5489408e9257-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=27500",
      id: uuidv4(),
      active: true,
    },
    {
      name: "Everlight",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/11/4c9682ee612a3b8ef51de286c49b5489408e9257-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=27501",
      id: uuidv4(),
      active: false,
    },
    {
      name: "Waybackwhen",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/11/4c9682ee612a3b8ef51de286c49b5489408e9257-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=27502",
      id: uuidv4(),
      active: false,
    },
    {
      name: "Turbulence",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/11/4c9682ee612a3b8ef51de286c49b5489408e9257-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=27503",
      id: uuidv4(),
      active: false,
    },
    {
      name: "Waiting",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/11/4c9682ee612a3b8ef51de286c49b5489408e9257-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=27504",
      id: uuidv4(),
      active: false,
    },
    //
    {
      name: "Polaroid",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/09/501327d9a200bed56717f5f4a0fa7e4517c491c9-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=24767",
      id: uuidv4(),
      active: false,
    },
    {
      name: "la zona",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/11/3ff29a35be582c8dc0222273cb9c401ea6b209dc-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=27455",
      id: uuidv4(),
      active: false,
    },
    {
      name: "Hung Up",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/09/dc49d7971512be0192848d072efdaaab91a4c73c-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=24699",
      id: uuidv4(),
      active: false,
    },
    {
      name: "Already Over",
      cover: "",
      audio:
        "https://drive.google.com/u/0/uc?id\u003d1-nPkNtfSmZs0RfSDEQdDCFhCQXOM90Tu\u0026export\u003ddownload",
      id: uuidv4(),
      active: false,
    },
    {
      name: "Somewhere Only We Know",
      cover: "",
      audio:
        "https://drive.google.com/u/0/uc?id\u003d118-6ADvY-FyfbyD6vOHNtwSjLgQ4uhQR\u0026export\u003ddownload",
      id: uuidv4(),
      active: false,
    },
  ];
}

export default SongPlayList;
