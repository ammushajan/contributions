import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import React from "react";
import Button from "../components/button";
export default function feature(props) {
  return (
    <Carousel showThumbs={false}>
      <div>
        <h5>Featured</h5>
        <h3>Learn how to value your contributions</h3>
        <p>
          Here is the perfect system for cleaning your room. First, move all of
          the items that do not have a proper place to the center of the room.
          Get rid of at least five things that you have not used within the last
          year. Take out all of the trash, and place all of the dirty dishes in
          the kitchen sink. Now find a location for each of the items you had
          placed in the center of the room. For any remaining items, see if you
          can squeeze them in under your bed or stuff them into the back of your
          closet. See, that was easy!
        </p>
        <Button balancebutton={"LEARN MORE"}></Button>
      </div>
      <div>
        <h5>Featured</h5>
        <h3>Learn how to value your contributions</h3>
        <p>
          Sunset is the time of day when our sky meets the outer space solar
          winds. There are blue, pink, and purple swirls, spinning and twisting,
          like clouds of balloons caught in a whirlwind. The sun moves slowly to
          hide behind the line of horizon, while the moon races to take its
          place in prominence atop the night sky. People slow to a crawl,
          entranced, fully forgetting the deeds that must still be done. There
          is a coolness, a calmness, when the sun does set.
        </p>
        <Button balancebutton={"LEARN MORE"}></Button>
      </div>
      <div>
        <h5>Featured</h5>
        <h3>Learn how to value your contributions</h3>
        <p>
          Oceans and lakes have much in common, but they are also quite
          different. Both are bodies of water, but oceans are very large bodies
          of salt water, while lakes are much smaller bodies of fresh water.
          Lakes are usually surrounded by land, while oceans are what surround
          continents. Both have plants and animals living in them. The ocean is
          home to the largest animals on the planet, whereas lakes support much
          smaller forms of life. When it is time for a vacation, both will make
          a great place to visit and enjoy.
        </p>
        <Button balancebutton={"LEARN MORE"}></Button>
      </div>
    </Carousel>
  );
}
