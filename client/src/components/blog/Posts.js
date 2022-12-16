import React from "react";
import "./Posts.css";
import Post from "./Post";
  
const Posts = () => {
  const blogPosts = [
    {
      title: "Off Grid and On The Rocks",
      body: `I think I could write a thousand articles about Hawai/’i based on a thousands trips (I may, still) and never quite capture everything that needs capturing. In fact, I think I could visit a thousand times (I may, still) and never quite experience all of Hawai’i. Or, even have the same trip twice, for that matter. Hawai’i might have been the inspiration for the phrase “you had to have been there”, as anything I write based on any of the times that I have been there, will not even begin to do the experience justice. That being said, as I have been working so hard to build the infrastructure of this website (pages, forums, etc) , I still feel compelled to use my last trip to Hawai’i’s Big Island (or “Hawai’i Island”) as the focus of my first travel journal. I guess my intention is not that you will live vicariously through my experience(s), but that you might be inspired to do some further research and maybe get yourself to one (or all) of the islands.

      Why Big Island?
      When most people think Big Island (or even research it) the first thing that comes to mind, or is brought to their attention, is Kona. Famous for the coffee exported and enjoyed by the mainland, Kona is a frequent destination for those visiting Hawai’i and, in particular, Big Island. If you know where to look, you will find nice white sand beaches, good food and excellent snorkeling. There are also huge resorts and a Bubba Gump Shrimp Co., which are both indicative of a particular type of tourist and price tag. If you find yourself preferring the comfort of a beach resort and piles of fried shrimp to a jungle adventure, local fruit and freshly caught fish, Kona might be your preferred destination (and, by the way, nothing against that). For the rest of you (and who I believe are my core readers), might I suggest a trip East to the Pahoa region of the island.
      Truth be told, choosing an Island to visit in Hawai/’i can almost be as fruitless a task as choosing a favorite child. Each is unique in its own way, and you will visit each for different reasons. As we planned this recent trip to the islands, what we found most important to us (this time) was being entrenched in history and local cultures, along with a desire to be adventurous and explore. We were looking for less crowds and more opportunities to fall (bass-ackward) into something entirely “once-in-a-lifetime”. The irony being, we likely could have found all those things on any of the islands.
      I am telling you, the choice can be painful. Ultimately, the tipping factors were Pahoa/’s equidistant offerings of volcano, jungle and beach on its eastern side. All of which converge beautifully at the doorstep (quite literally) of our final destination, in the community of Leilani Estates.`,
      author: "Antony Blaze ",
      imgUrl:
        "https://i2.wp.com/wouldbewanderer.com/wp-content/uploads/2022/11/IMG_1198-1024x683.jpg?strip=info&w=2000&ssl=1"
    }
  ];
  
  return (
    <div className="posts-container">
      {blogPosts.map((post, index) => (
        <Post key={index} index={index} post={post} />
      ))}
    </div>
  );
};
  
export default Posts;