import RenderTestimonials from "./RenderTestimonials";

const Section5 = () => {
  const testimonials = [
    {
      id: 1,
      review:
        "DocuSAfe made file sharing a breeze, saving us precious time. Its efficiency in collaboration is unparalleled..",
      img: "../images/profile-1.jpg",
      name: "Satish Patel",
      title: "MNNIT CSE,2025",
    },
    {
      id: 2,
      review:
        "DocuSafe revolutionized our workflow, cutting down time spent on file sharing and collaboration. A true time-saving gem!",
      img: "../images/profile-2.jpg",
      name: "Vinay McKenzie",
      title: "MNNIT CSE,2025",
    },
    {
      id: 3,
      review:
        "DocuSafe streamlined our tasks, slashing time wasted on file management. It's a lifesaver for productivity!",
      img: "../images/profile-3.jpg",
      name: "Himanshi Boyd",
      title: "MNNIT CSE,2025",
    },
  ];
  return (
    <section id="section5">
      <div className="wrapper2">
        <RenderTestimonials testimonials={testimonials} />
      </div>
    </section>
  );
};

export default Section5;