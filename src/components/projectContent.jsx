import React from "react";

const content = [
  {
    title: "This Site",
    id: "1",
    url: "abachant-github-pages",
    description: "",
    thumbnailSrc: "",
    thumbnailAlt: "",
    technology: [
      "javascript",
      "react",
      "jsx",
      "html",
      "css",
      "bem",
      "es6",
      "git",
    ],
    html: (
      <div>
        <div>
          <h1>Github-Pages Portfolio</h1>
          <h5>February 2018</h5>
          <p>
            This site was built from scratch in React. It is hosted though
            GitHub's lovely <a href="https://pages.github.com/">Pages.</a>
          </p>
          <p>
            After I changed my GitHub profile name the GitHub Pages portfolio
            hosted under my previous name no longer worked. So I decided to
            utilize my new React skills to completely rebuild my new portfolio
            from the ground up. The previous site was written in basic html css
            and jQuery. Most of the content stayed the same and was able to be
            transferred from the old site easily, but I was able to greatly
            improve the structure and add new functionality with React. Instead
            of just using raw html files I got the chance to implement my new
            knowledge of React-Router to dynamically create multiple pages. This
            was a lot of fun since I had only used React before for single page
            applications. I also got the chance to reorganize and improve the
            styling methodologies by implementing BEM.
          </p>
        </div>
        <hr></hr>
        <div>
          <p>
            <a
              href="https://github.com/abachant/Gbachant.github.io"
              className="footer"
            >
              View previous project on Github
            </a>
          </p>
          <p>
            <a
              href="https://github.com/abachant/abachant.github.io"
              className="footer"
            >
              View project on GitHub
            </a>
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "RIPTA Dashboard",
    id: "2",
    url: "RIPTA-dashboard",
    description: "",
    thumbnailSrc: "",
    thumbnailAlt: "",
    technology: ["python", "plotly", "api", "rest"],
    html: (
      <div>
        <div>
          <h1>RIPTA Dashboard</h1>
          <h5>January 2018</h5>
          <img
            id="ripta-background"
            src={require("../pictures/ripta-animation.gif")}
            alt="real-time RIPTA display animation"
            className="img-responsive"
          ></img>
          <p>
            RIPTA-Dashboard is a Python dashboard for viewing real-time data
            from its RIPTA's API. The data is first taken in and organized into
            a pandas dataframe then the current location of each bus is mapped
            along with information about its speed, id, and bus route using
            Ploty's framework <a href="https://plot.ly/products/dash/">Dash</a>.
          </p>
          <h4>Project Data</h4>
          <p>
            All the data for the project came from{" "}
            <a href="http://realtime.ripta.com:81/">RIPTA's own API.</a>
            The API provides us with a JSON file of a whole range of the
            statuses of its buses and bus stops at the time it was read.
          </p>
          <h4>Future Goals</h4>
          <p>
            One of the most important goals for RIPTA-Dashboard is to eventually
            be able to get smoother updates of the onscreen data. I was
            successful at first by adding the property{" "}
            <code>Animation=True</code> to the
            <code>dcc.Graph</code> and was able to have smooth updates that only
            changed the position of data plots without entirely reloading the
            whole page and other unnecessary elements. Unfortunately, the{" "}
            <code>Animate</code>
            property is still in beta and ended up breaking our ability to
            maintain camera position and zoom and as result would always go back
            to its default position after each API callback. For the time being
            I was forced to sacrifice smooth transitions for the ability to
            maintain camera position and figure since it is more important to
            have a constant state of reference when comparing the movements of
            objects.
          </p>
          <p>
            There is also a lot more data in the API than just location, speed,
            vehicle id, and which route a bus is currently on. I eventually want
            use the data they give about the buses' delay to have a real-time
            punctuality display for each bus. I would also like to keep a
            running average of delay for each bus route and individual bus stop
            in order to help identify which have the best and worst punctuality
            and to match that with other data to potentially identify why.
          </p>
        </div>
        <hr></hr>
        <div>
          <p>
            <a
              href="https://github.com/abachant/RIPTA-dashboard"
              className="footer"
            >
              View project on GitHub
            </a>
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "OSMnx Grid Analysis",
    id: "3",
    url: "osmnx-grids",
    description: "",
    thumbnailSrc: "",
    thumbnailAlt: "",
    technology: ["python", "plotly", "osm", "jupyter"],
    html: (
      <div>
        <div>
          <h1>Analyzing Grids with OSMnx</h1>
          <h5>February 2018</h5>
          <p>
            This is project I have been interested in doing for quite some time
            now. It was inspired by looking at the beautiful and chaotic mixing
            together of grids in New York City,{" "}
            <a href="https://www.google.com/maps/place/Brooklyn,+NY/@40.6496725,-73.9659865,12.5z/data=!4m5!3m4!1s0x89c24416947c2109:0x82765c7404007886!8m2!3d40.6781784!4d-73.9441579">
              Brooklyn
            </a>{" "}
            in particular. I became interested in finding a way to organize and
            analyze the relationships of the various grids based on angles of
            their bearings. It wasn't until I found{" "}
            <a href="https://github.com/gboeing/osmnx">OSMnx</a>, a Python
            package for working with and analyzing OpenStreetMap files made by{" "}
            <a href="http://geoffboeing.com/">Geoff Boeing</a>, that I was able
            to find the right tool to do so.
          </p>
          <p>
            OSMnx comes with many useful functions for analyzing maps by
            default. One such function is the ability to retrieve the bearings
            of a network's streets and{" "}
            <a href="https://github.com/gboeing/osmnx-examples/blob/master/notebooks/15-calculate-visualize-edge-bearings.ipynb">
              graph their frequency
            </a>
            , but this wasn't enough.
          </p>
          <p>
            Anyone familiar with working with OpenStreetMap files will know that
            they aren't exactly perfect representations. This is due to the very
            nature of how they are created. OSM files are composed of nodes and
            ways. Most of these nodes and ways were placed by humans physically
            overlaying them onto satellite imagery and can be prone to human
            error. As a result, nodes and ways that should theoretically be
            perfectly aligned and ordered are not.
          </p>
          <p>
            To overcome this I accessed the <code>bearing</code> attribute
            inside the networkx multidigraph and created another attribute,
            <code>rounded_bearing</code>, composed of <code>bearing</code>{" "}
            rounded to an integer. This allows us to filter the graph by edge
            bearings much easier and even chose to only graph the bearings that
            we desire.
          </p>
          <p>
            I also added another attribute <code>modulo_bearing</code> which is
            just the <code>rounded_bearing</code>modulo 90. By using modulo 90 I
            was able to get all edges placed into 90 groups composed of edges
            who share either parallel or perpendicular edge bearings. From there
            I was able use an osmnx function,{" "}
            <code>osmnx.get_edge_colors_by_attr()</code>, to assign a different
            color to each of the 90 groups of edges and eventually plot them.
          </p>
          <h5>Downtown Manhattan and Brooklyn</h5>
          <figure>
            <img
              src={require("../pictures/osmnx_nyc.png")}
              alt="osmnx-grids of New York City by compass bearing"
            ></img>
            <figcaption className="col-lg-5">
              Each group of perpendicular bearings is represented by a different
              color. The grouping of grids becomes immediately apparent. What is
              most interesting are groups of grids that aren't connected; though
              they are physically seperated they still follow the same bearings.
              For instance note the two purple bearing groups: one at the
              Brooklyn side of the Brooklyn and Manhattan bridges and the other
              to the far east of Prospect Park in the bottom right corner of the
              image.
            </figcaption>
          </figure>
        </div>
        <div>
          <h5>Closeup of downtown Manhattan and Brooklyn</h5>
          <figure>
            <img
              src={require("../pictures/osmnx_nyc_closeup.png")}
              alt="closeup of osmnx-grids of New York City"
            ></img>
            <figcaption className="col-lg-5">
              Note how the purple bearings on the Brooklyn end of the Manhattan
              and Brooklyn bridges merge with and become part of the grids of
              the dark orange bearings just south of the Brooklyn Navy Yard. One
              of the main things I was interested in doing with this project was
              analyzing the 'borders' of groups of grids and how their edges met
              and bonded together.
            </figcaption>
          </figure>
        </div>
        <div>
          <h5>Williamsburg, Brooklyn</h5>
          <figure>
            <img
              src={require("../pictures/osmnx_williamsburg.png")}
              alt="osmnx-grids of Williamsburg, Brooklyn"
            ></img>
            <figcaption className="col-lg-5">
              A close up of Williamsburg, a neighborhood of Brooklyn with a
              particularly interesting street pattern. Note the rainbow pattern
              on the curved sections of the Williamsburg Bridge and Interstate
              278 as it changes as its segments change bearings.
            </figcaption>
          </figure>
        </div>
        <hr></hr>
        <div>
          <a href="https://github.com/abachant/osmnx-grid" className="footer">
            View project on GitHub
          </a>
          <br />
          <a href="https://github.com/abachant/osmnx-examples/blob/add-bearing-analysis-example/notebooks/17-edge-bearing-analysis.ipynb">
            View Python Jupyter Notebook example on GitHub
          </a>
          <br />
          <a href="https://github.com/gboeing/osmnx/pull/135/files">
            View contribution to OSMnx sourcecode on GitHub
          </a>
        </div>
      </div>
    ),
  },
  {
    title: "Rhyme Scheme Analysis",
    id: "4",
    url: "rhyme-scheme",
    description: "",
    thumbnailSrc: "",
    thumbnailAlt: "",
    technology: ["python", "pandas", "jupyter", "git", "matplotlib"],
    html: (
      <div>
        <div>
          <h1>Analyzing the Rhyming Habits of Songwriters</h1>
          <h5>April 2018</h5>
          <p>
            This project was inspired by the peculiar songwriting habits of Ray
            Davies. Although the majority of pop songs tend to generally follow
            the traditional rhyme scheme of ABAB CDCD etc., I couldn't help but
            notice that Ray Davies had a habit of choosing lyrics that almost
            deliberately didn't rhyme. I began to wonder if there was a way to
            quantifiy and analyze this phenomena and even find other insights
            into artist's lyrical habits, so I created a jupyter notebook to
            test that thought.
          </p>
          <h4>Getting the Data</h4>
          <p>
            The lyrics for an artist's discography was obtained by using the
            python library{" "}
            <a href="https://github.com/jameswenzel/pylyrics3">pylyrics3</a>,
            which returns a nested dictionary of the artist's songs by album.
            From there I got the rhyme type (couplet, limerick, rondeau etc.)
            for for each song using the library{" "}
            <a href="https://github.com/hyperreality/Poetry-Tools">
              Poetry-tools
            </a>
            . Most importantly for this project I created the function{" "}
            <code>get_rhyme_ratio()</code> to get the rhyme ratio for each song
            and then organized all of the relevant data into a{" "}
            <a href="https://pandas.pydata.org/">Pandas</a> Dataframe.
          </p>
          <h4>Rhyme Ratio</h4>
          <p>
            From my own experience writing songs and poetry and the observations
            of other writers I've noticed that it can actually be easier to
            write lines that rhyme. It can also be all too easy to stay within
            the safe ABAB CDCD rhyme scheme. That's why the unique songwriting
            of Ray Davies of The Kinks caught the attention of mine. His songs
            had a frequent subversion of convential pop rhyming or so it did
            seem.
          </p>
          <p>
            Rhyme ratio was a variable I came up with to try to quantitatively
            measure how frequently one utilizes rhymes in their writing. It is
            essentially the total number of unique ending phonemes divided by
            the total number of lines of a song. A song with a rhyme scheme of
            ABAB CDCD EFEF would have a <code>rhyme_ratio</code> of 0.5 while a
            rhyme scheme of ABCC DEFF GHIJ would have a <code>rhyme_ratio</code>{" "}
            of 0.75. This was the metric I used to try and determine how
            prosodically creative a song was.
          </p>
          <h4>Graphing the Results</h4>
          <p>
            After all the data was sent to the Pandas Dataframe, I then used a
            combination of{" "}
            <a href="https://matplotlib.org/index.html">Matplotlib</a> and{" "}
            <a href="https://seaborn.pydata.org/">Seaborn</a> to plot the
            results.
          </p>
          <h5>Rhyme Ratio by Album over Time</h5>
          <img
            src={require("../pictures/rhyme_ratio_scatter.png")}
            alt="Scatter plot of rhyme ratio over time for The Kinks"
          ></img>
          <img
            src={require("../pictures/rhyme_ratio_violin.png")}
            alt="Violin plot of rhyme ratio over time for The Kinks"
          ></img>
          <img
            src={require("../pictures/rhyme_ratio_mean.png")}
            alt="Line plot of mean rhyme ratio over time for The Kinks"
          ></img>
          <img
            src={require("../pictures/rhyme_ratio_full.png")}
            alt="Individual and mean plot of rhyme ratio over time for The Kinks"
          ></img>
          <h5>Rhyme Type by Album over Time</h5>
          <img
            src={require("../pictures/rhyme_type.png")}
            alt="Bar chart of rhyme type over time for The Kinks"
          ></img>
          <h5>Instrumental vs Lyrical Song by album over Time</h5>
          <img
            src={require("../pictures/instrumental.png")}
            alt="Bar chart of instrumentality by album over time for The Kinks"
          ></img>
          <h4>Conclusion</h4>
          <p>
            Looking at the line graph for mean rhyme ratio over time I did
            validate my personal opinion that the 'Golden Era' Kinks (albums
            between 'Something Else (1967)' and 'Preservation Act 2 (1974)')
            were more creative than the rest of their work. Upon looking at the
            mean rhyme ratio matched over the individual rhyme ratio violin plot
            I quickly realized however that the difference in mean rhyme ratios
            was negligible.
          </p>
          <p>
            Are there any real conclusions to be drawn from the data? Not really
            but it was very fun building and interesting to look at the way we
            can try to measure subject things like creativity with objective
            metrics. If you want to see the whole Jupyter Notebook and play
            around with it with your favorite artists the link is{" "}
            <a href="https://github.com/abachant/rhyme-scheme/blob/master/rhyme-scheme.ipynb">
              here
            </a>
            .
          </p>
        </div>
        <hr></hr>
        <div>
          <p>
            <a
              href="https://github.com/abachant/rhyme-scheme/blob/master/rhyme-scheme.ipynb"
              className="footer"
            >
              View project on GitHub
            </a>
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Catwalk: Clothing Retailer Website",
    id: "5",
    url: "catwalk",
    description: "",
    thumbnailSrc: "",
    thumbnailAlt: "",
    technology: ["react", "node", "api", "rest", "aws", "postgres", "sql", "microservices"],
    html: (
      <div>
        <div>
          <h1>Catwalk: A Clothing Retail Web Portal</h1>
          <h5>March 2021</h5>
          <img
            src={require("../pictures/catwalk-product.png")}
            alt="Catwalk clothing retailer portal"
            className="img-responsive img-content"
          ></img>
          <p>
            <a href="http://54.204.74.127:8080/products/37315">Catwalk</a> is a
            clothing retailer web portal built using React that is hosted by
            node server using express. This was a project I worked on at Hack
            Reactor on team with 2 other full stack developers. Our goal was to
            create a frontend that would allow customers to interact with
            clothing products. This front shows infromation about products such
            as sizes and colors available, a section for questions and answers,
            and ratings. Catwalk also the ability to track the clicks of all
            incoming users. Besides getting the primary boilerplate set up, I
            worked on the Questions and Answers widget primarily.
          </p>
          <h4>Setting up Catwalk</h4>
          <p>
            All the product information including sizes, quantity, photos etc
            comes from an API that requires a key for authentication. Inorder to
            get access to this data while hiding the key from any users catwalk
            had to have a very basic proxy server which would handle calling
            that API and return the necessary static web pages. To keep the API
            key secret, it is stored on the server as an .env variable. This
            proxy is currently hosted on an AWS EC2 instance.
          </p>
          <h4>Questions and Answers</h4>
          <p>
            The feature that I fully owned was the Questions and Answers
            section. For each product users are able to ask and answer questions
            about the product. Questions can then be voted as useful or flagged
            if inappropriate and users can search questions for keywords.
          </p>
          <p>
            One of the bigger challenges I ran into was creating feature to
            allow users to search questions. Filtering of questions need to be
            done in real time as the user typed into the search bar. As a user
            typed into a search bar I had to make sure that the list of
            questions was filtered in real time based on their input. Since the
            amount of quesitons was relatively small, ie never above 100, I
            decided that I wouldn't need to use any debouncing yet. Although I
            did add condition to only search once the input string was atleast
            three characters long. After the user input in the search field
            reached a string of over 3 characters, every change would cause a
            function to filter through the objects in the API response. AFrom
            there they were able to be sorted and rendered just as the non
            filtered questions were.
          </p>
          <img
            src={require("../pictures/catwalk-QA.png")}
            alt="Catwalk clothing retailer questions and answers component"
            className="img-responsive img-content"
          ></img>
        </div>
        <hr></hr>
        <div>
          <p>
            <a
              href="http://54.204.74.127:8080/products/37315"
              className="footer"
            >
              View Catwalk Demo
            </a>
          </p>
          <p>
            <a href="https://github.com/abachant/FEC" className="footer">
              View sourcecode on GitHub
            </a>
          </p>
        </div>
      </div>
    ),
  },
];
export default content;
