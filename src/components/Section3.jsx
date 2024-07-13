import RenderServices from "./RenderServices";

const Section3 = () => {
  const services = [
    {
      id: 1,
      img: "../images/icon-access-anywhere.svg",
      title: "Access documents anywhere, anytime.",
      desc: "Leverage your device to access files seamlessly, ensuring your academic essentials are always within reach.",
    },
    {
      id: 2,
      img: "../images/icon-security.svg",
      title: "Security you can trust",
      desc: "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
    },
    {
      id: 3,
      img: "../images/icon-collaboration.svg",
      title: "Instantly collaborate",
      desc: "Share files securely, enabling live collaboration without relying on email attachments.",
    },
    {
      id: 4,
      img: "../images/icon-any-file.svg",
      title: "Versatile file storage",
      desc: "From vacation snapshots to business reports, Fylo ensures secure storage and sharing of all file formats.",
    },
  ];

  return (
    <section id="section3">
      <div className="wrapper">
        <RenderServices services={services} />
      </div>
    </section>
  );
};

export default Section3;