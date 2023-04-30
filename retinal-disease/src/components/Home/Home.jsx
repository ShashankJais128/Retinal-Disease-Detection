import React from "react";
import retina from "../../../public/ret.jpg";

function Home() {
  return (
    <div
      className="h-[90vh] bg-black p-16 bg-cover  bg-center bg-fixed text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${retina})`,
      }}
    >
      <h1 className="text-5xl font-bold pb-4">Home</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi sed in
        odit. Expedita delectus tempora perspiciatis facilis, minima autem
        beatae deserunt nesciunt. Nisi in amet quaerat quos beatae repudiandae,
        aliquid, deserunt, quidem vel maxime expedita praesentium
        exercitationem! Temporibus velit fugiat aut asperiores doloremque cum
        aspernatur nostrum. Eius quia earum excepturi, accusantium reiciendis
        reprehenderit sequi praesentium, suscipit est natus totam dolor
        perspiciatis at aperiam, laboriosam aliquid autem fugit. Eveniet
        assumenda ex sint facere temporibus harum qui rerum voluptatibus nostrum
        neque quas quaerat, fugit dignissimos tempore. Ducimus sit voluptatum
        minima eveniet qui at? Quas voluptates explicabo accusamus cupiditate
        quisquam a deserunt, distinctio fugit quam quia officia, harum suscipit
        veniam iusto? Eveniet, ea quae. Sapiente, commodi distinctio dignissimos
        aliquam maxime nemo tenetur obcaecati corrupti voluptate esse corporis
        aliquid unde consequatur ullam reprehenderit harum impedit cupiditate
        necessitatibus sit. Deleniti at architecto voluptates, eveniet,
        perferendis, quam aliquam quo corrupti ipsam autem doloremque. Placeat,
        praesentium facere! Voluptatibus repellendus doloremque officiis
        incidunt debitis earum eaque suscipit, provident ad inventore, nobis
        assumenda repudiandae aliquid distinctio quaerat obcaecati maxime, vitae
        praesentium facilis sint eligendi enim. Assumenda quo inventore
        reprehenderit vitae incidunt, suscipit culpa dicta itaque sit cumque
        expedita totam nostrum laborum beatae ab consequatur molestiae, alias
        non unde quibusdam.
      </p>
    </div>
  );
}

export default Home;
