interface Employee {
  attributes: {
    image: ImageSrc;
    name: string;
    post: string;
    description: string;
    phone: string;
  };
}

interface Service {
  attributes: {
    title: string;
    description: string;
  };
}

interface Meeting {
  attributes: {
    title: string;
    description: string;
  };
}

interface ContactInfo {
  attributes: {
    [key: string]: string;
  };
}

interface ImageSrc {
  data: {
    attributes: {
      url: string;
    };
  };
}
