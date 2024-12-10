import React from "react";

const Service = () => {
 
  const services = [
    {title: "Secure DRHP Storage",
     description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit corporis nemo earum, eligendi ullam quidem quaerat est, fugit ducimus magni at repellat quae. Laborum vel, rerum ipsum exercitationem consequatur aliquid.",
    },
    {
      title: "Global Access",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit corporis nemo earum, eligendi ullam quidem quaerat est, fugit ducimus magni at repellat quae. Laborum vel, rerum ipsum exercitationem consequatur aliquid.",
     },

     {
      title: "Exchange Service",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit corporis nemo earum, eligendi ullam quidem quaerat est, fugit ducimus magni at repellat quae. Laborum vel, rerum ipsum exercitationem consequatur aliquid.",
     },

     {
      title: "No T+2 Settlement",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit corporis nemo earum, eligendi ullam quidem quaerat est, fugit ducimus magni at repellat quae. Laborum vel, rerum ipsum exercitationem consequatur aliquid.",
     },

     {
      title: "Credit Card Use",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit corporis nemo earum, eligendi ullam quidem quaerat est, fugit ducimus magni at repellat quae. Laborum vel, rerum ipsum exercitationem consequatur aliquid.",
     },

     {
      title: "Realtime Ownership Tracking",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit corporis nemo earum, eligendi ullam quidem quaerat est, fugit ducimus magni at repellat quae. Laborum vel, rerum ipsum exercitationem consequatur aliquid.",
     },
  ];

  return (
    <section id="service" className="small_pb">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 offset-lg-2 col-md-12 col-sm-12">
            <div className="title_default_light title_border text-center">
              <h4 className="animation"
              data-animation="fadInUp"
              data-animation-delay="0.2s">
                Services
              </h4>
              
            </div>
          </div>
        </div>
        <div className="row">
          {services.map((service, i) => (
            <div key={i+1} className="col-lg-4 col-md-6 col-sm-12">
                <div className="box_wrap text-center animation"
              
                data-animation="fadInUp"
                data-animation-delay={`0.${i +1}s`}>
                   <h4>{service.title}</h4>
                  
                </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
};

export default Service;
