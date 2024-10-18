import ServiceCard from "./ServiceCard";
import "../styles/ServicesPage.css";

const ServicesPage = () => {
  const services = [
    {
      title: "Real Estate Professionals",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/37b6/6e95/d98410f5fa3d48135a7478378e7fd236?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e~Brvw~UqZMjUgrU-SZpWWcILo1yYGQ50nsRe9x7maBSidlwmEVmzoXBDlTNUOvMvfLqYObBt6alO~93lysyGzeWaBxo1DcQAeBzTD2WZkxE~1kKZCqjK-8i8lyNkc78JnBF8tD1AWtCowa6AIrQ8lSNAQ3GDZfabkFIyjOewb8TqxBbsSA1qEvjtM~wSWhxkSvpAnduImVg62QvSTFf72kz0RaApwvdZDeJeFB3xBcD8NGTZ5uagMd9aZmdTYXnxycRfcPBIfwQPsdl~~PG6D-xvBk-BWbWC0sgmc1h~mYQrAWKEkz020Fy3-POk53S1HhHiZiREx0ndIU2RgDINQ__",
    },
    {
      title: "Design/Architecture",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/b617/773b/b7e74ba95a9066686bcfb48042493777?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RyiHMr86B5bOwax-SRgosFABPeAt~B8W-GnZnQjWC1M~d68Wq3vy-yIMhddtTVd9AWpVyNTzEB0WaXMSc8drh7joSFYDZ-Vt~zhY3MVxMBsVmjQczqolUVS6jTpuCp0WxRjuCbRo4Knt~uCd3BqapqxenT3Hq~u8tXR8NcfmSsytPuKdO~ZR8avOd10sGr8~Jw~RdSYjN1B~cqvst~8vTa81VgOH62VO1Cg2S-RwOwClqfeRYcG6krLKqII4BXCncjWQDpir6Nydx8F5dZCCMOs7FwBOPmrWAC~ELXf1Ya6RIcpDL4XJev4z9xRIQo7zVSaG3KSCn367kCgZW4FCIw__",
    },
    {
      title: "Maintenance/Handy Services",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/0ecd/def1/ea8d9c51264d748956f999e9f9665a1b?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XDHZEy90vo9mJgt4e5PhGTuwxGLv~GTKN4HX0UZOyHkmb4caIsRquQUhdVDSpV8hjYWUlE75zF8V0Bi0G7DBO4dYYc0Oc84N5HwRTfrNcuzraBe2u3GCJWEu~hYWB4Wccb-e3PAbzRF3wrgrCS~bNRz8JEwmCerLlGe4M5HPDaYZEswSu6LuSJXlZaLN0e9~-s7bksRhPQN-H8E16mTjEWJ7RUJlJRuujEPSyluU1OEy0oH6mwTnUmM--S8w6rt2QMbre9CyCequ7In3OWyZxymLaHUsL6qdYpAsxY9SDbXvwMIV07q~9NMdhEmRXBswUW-M1~SuhcaCGrLkHSzRfA__",
    },
    {
      title: "Landscaping/Architecture",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/37b6/6e95/d98410f5fa3d48135a7478378e7fd236?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e~Brvw~UqZMjUgrU-SZpWWcILo1yYGQ50nsRe9x7maBSidlwmEVmzoXBDlTNUOvMvfLqYObBt6alO~93lysyGzeWaBxo1DcQAeBzTD2WZkxE~1kKZCqjK-8i8lyNkc78JnBF8tD1AWtCowa6AIrQ8lSNAQ3GDZfabkFIyjOewb8TqxBbsSA1qEvjtM~wSWhxkSvpAnduImVg62QvSTFf72kz0RaApwvdZDeJeFB3xBcD8NGTZ5uagMd9aZmdTYXnxycRfcPBIfwQPsdl~~PG6D-xvBk-BWbWC0sgmc1h~mYQrAWKEkz020Fy3-POk53S1HhHiZiREx0ndIU2RgDINQ__",
    },
    {
      title: "Junk Removal",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/37b6/6e95/d98410f5fa3d48135a7478378e7fd236?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e~Brvw~UqZMjUgrU-SZpWWcILo1yYGQ50nsRe9x7maBSidlwmEVmzoXBDlTNUOvMvfLqYObBt6alO~93lysyGzeWaBxo1DcQAeBzTD2WZkxE~1kKZCqjK-8i8lyNkc78JnBF8tD1AWtCowa6AIrQ8lSNAQ3GDZfabkFIyjOewb8TqxBbsSA1qEvjtM~wSWhxkSvpAnduImVg62QvSTFf72kz0RaApwvdZDeJeFB3xBcD8NGTZ5uagMd9aZmdTYXnxycRfcPBIfwQPsdl~~PG6D-xvBk-BWbWC0sgmc1h~mYQrAWKEkz020Fy3-POk53S1HhHiZiREx0ndIU2RgDINQ__",
    },
    {
      title: "Cleaning Services",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/37b6/6e95/d98410f5fa3d48135a7478378e7fd236?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e~Brvw~UqZMjUgrU-SZpWWcILo1yYGQ50nsRe9x7maBSidlwmEVmzoXBDlTNUOvMvfLqYObBt6alO~93lysyGzeWaBxo1DcQAeBzTD2WZkxE~1kKZCqjK-8i8lyNkc78JnBF8tD1AWtCowa6AIrQ8lSNAQ3GDZfabkFIyjOewb8TqxBbsSA1qEvjtM~wSWhxkSvpAnduImVg62QvSTFf72kz0RaApwvdZDeJeFB3xBcD8NGTZ5uagMd9aZmdTYXnxycRfcPBIfwQPsdl~~PG6D-xvBk-BWbWC0sgmc1h~mYQrAWKEkz020Fy3-POk53S1HhHiZiREx0ndIU2RgDINQ__",
    },
    {
      title: "Cleaning Services",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/37b6/6e95/d98410f5fa3d48135a7478378e7fd236?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e~Brvw~UqZMjUgrU-SZpWWcILo1yYGQ50nsRe9x7maBSidlwmEVmzoXBDlTNUOvMvfLqYObBt6alO~93lysyGzeWaBxo1DcQAeBzTD2WZkxE~1kKZCqjK-8i8lyNkc78JnBF8tD1AWtCowa6AIrQ8lSNAQ3GDZfabkFIyjOewb8TqxBbsSA1qEvjtM~wSWhxkSvpAnduImVg62QvSTFf72kz0RaApwvdZDeJeFB3xBcD8NGTZ5uagMd9aZmdTYXnxycRfcPBIfwQPsdl~~PG6D-xvBk-BWbWC0sgmc1h~mYQrAWKEkz020Fy3-POk53S1HhHiZiREx0ndIU2RgDINQ__",
    },
    {
      title: "Cleaning Services",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/37b6/6e95/d98410f5fa3d48135a7478378e7fd236?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e~Brvw~UqZMjUgrU-SZpWWcILo1yYGQ50nsRe9x7maBSidlwmEVmzoXBDlTNUOvMvfLqYObBt6alO~93lysyGzeWaBxo1DcQAeBzTD2WZkxE~1kKZCqjK-8i8lyNkc78JnBF8tD1AWtCowa6AIrQ8lSNAQ3GDZfabkFIyjOewb8TqxBbsSA1qEvjtM~wSWhxkSvpAnduImVg62QvSTFf72kz0RaApwvdZDeJeFB3xBcD8NGTZ5uagMd9aZmdTYXnxycRfcPBIfwQPsdl~~PG6D-xvBk-BWbWC0sgmc1h~mYQrAWKEkz020Fy3-POk53S1HhHiZiREx0ndIU2RgDINQ__",
    },
    {
      title: "Cleaning Services",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/37b6/6e95/d98410f5fa3d48135a7478378e7fd236?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e~Brvw~UqZMjUgrU-SZpWWcILo1yYGQ50nsRe9x7maBSidlwmEVmzoXBDlTNUOvMvfLqYObBt6alO~93lysyGzeWaBxo1DcQAeBzTD2WZkxE~1kKZCqjK-8i8lyNkc78JnBF8tD1AWtCowa6AIrQ8lSNAQ3GDZfabkFIyjOewb8TqxBbsSA1qEvjtM~wSWhxkSvpAnduImVg62QvSTFf72kz0RaApwvdZDeJeFB3xBcD8NGTZ5uagMd9aZmdTYXnxycRfcPBIfwQPsdl~~PG6D-xvBk-BWbWC0sgmc1h~mYQrAWKEkz020Fy3-POk53S1HhHiZiREx0ndIU2RgDINQ__",
    },
    {
      title: "Cleaning Services",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/37b6/6e95/d98410f5fa3d48135a7478378e7fd236?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e~Brvw~UqZMjUgrU-SZpWWcILo1yYGQ50nsRe9x7maBSidlwmEVmzoXBDlTNUOvMvfLqYObBt6alO~93lysyGzeWaBxo1DcQAeBzTD2WZkxE~1kKZCqjK-8i8lyNkc78JnBF8tD1AWtCowa6AIrQ8lSNAQ3GDZfabkFIyjOewb8TqxBbsSA1qEvjtM~wSWhxkSvpAnduImVg62QvSTFf72kz0RaApwvdZDeJeFB3xBcD8NGTZ5uagMd9aZmdTYXnxycRfcPBIfwQPsdl~~PG6D-xvBk-BWbWC0sgmc1h~mYQrAWKEkz020Fy3-POk53S1HhHiZiREx0ndIU2RgDINQ__",
    },
  ];

  return (
    <div className="services-page">
      <div className="search-bar-container">
        <input type="text" className="search-bar" placeholder="Search EzFix" />
      </div>

      <section className="services-page-section">
        <div className="services-header">
          <p>Services</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              imageUrl={service.imageUrl}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
