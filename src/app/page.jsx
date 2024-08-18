import { Button } from "@nextui-org/button";
import Ahora from '@/components/Ahora'

function HomePage() {
  return (
    <section className="h-full flex flex-col justify-center items-center">
      <h1 className="text-5xl mb-7">Bienvenido a LeMoUn</h1>
      <p className="max-w-2xl text-justify">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. At praesentium dolores numquam dolorem officia ea earum blanditiis error placeat velit distinctio neque dolorum esse eligendi consequatur, natus expedita quisquam id?
        Reprehenderit, eveniet dolorum? Magni esse labore excepturi similique minima exercitationem pariatur odio. Molestias earum quod doloribus aliquam, tenetur commodi nam a ducimus cupiditate quibusdam. Quam nostrum suscipit quia culpa sit!
        Ex doloribus eaque doloremque quis magni soluta veniam explicabo non cumque praesentium ipsam ipsa deleniti, adipisci deserunt dolore quod velit blanditiis commodi quibusdam! Cupiditate molestias possimus minima quis culpa exercitationem?
        Deleniti corporis molestiae consequuntur iste maiores quae doloribus, quod laborum corrupti temporibus, officiis quibusdam cupiditate eius tenetur totam labore iusto magni rem! Nobis officia ut nulla sunt porro, exercitationem facere.
        Modi numquam tempora aut corrupti? Quam amet consectetur quaerat accusantium? Maxime, ex asperiores, obcaecati nostrum voluptas cumque, atque provident beatae quisquam nesciunt iusto exercitationem quaerat ipsam eveniet inventore dolore vitae.
      </p>
      <Button>Click</Button>
      <Ahora/>
    </section>
  );
}

export default HomePage;
