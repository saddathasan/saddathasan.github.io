import Card from "./card"

const FeaturedIn = () => {
    return (
      <div class="container mx-auto">
        <div class="flex flex-row flex-wrap justify-evenly w-screen item-center bg-purple-300 p-4">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    );
};

export default FeaturedIn;