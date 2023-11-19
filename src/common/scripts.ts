import { BACKEND_URL } from "./constants";

export const scrollIndicator = () => {
  const winScroll =
    document.body.scrollTop || document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  document.getElementById("scrollIndicator")!.style.width = scrolled + "%";
};

export const toggleBurger = () => {
  (document.getElementById("menu-toggle") as HTMLInputElement).checked = false;
};

export const scrollFunction = () => {
  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
    document.getElementById(
      "navbar"
    )!.style.cssText = `background-color: white; transition: 0.5s`;
  } else {
    document.getElementById(
      "navbar"
    )!.style.cssText = `background-color: ; transition: 0.5s`;
  }
};

const fetchData = async (dataType: string) => {
  const url = `${BACKEND_URL}/api/${dataType}`;

  const emptyResult = dataType.includes("?populate") ? [] : undefined;

  try {
    const response = await fetch(url, {
      method: "GET",
    });

    const result = response?.ok ? await response.json() : emptyResult;
    return result?.data;
  } catch {
    return emptyResult;
  }
};

export const fetchAllData = async () => {
  const promises = [
    fetchData("employees?populate=*"),
    fetchData("services"),
    fetchData("meetings"),
    fetchData("hour"),
    fetchData("email"),
    fetchData("telegram"),
    fetchData("whatsapp"),
  ];

  const [employees, services, meetings, hour, email, telegram, whatsapp] =
    await Promise.all(promises);

  return {
    employees,
    services,
    meetings,
    hour,
    email,
    telegram,
    whatsapp,
  };
};
