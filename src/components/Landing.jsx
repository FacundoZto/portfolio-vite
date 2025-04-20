import NavBar from './NavBar';
import About from './About';
import Projects from './Projects';
import './styles/Landing.css';

const Landing = () => {
  return (
    <div className="page-content">
      <NavBar active="home" />
      <div className="content-wrapper">

        <div className="homepage-container">
          <About />

          <div className="homepage-projects">
            <Projects />
          </div>

          {/* <div className="homepage-after-title">
            <div className="homepage-articles">
              {myArticles.map((article, index) => (
                <div
                  className="homepage-article"
                  key={(index + 1).toString()}
                >
                  <Article
                    key={(index + 1).toString()}
                    date={article().date}
                    title={article().title}
                    description={article().description}
                    link={"/article/" + (index + 1)}
                  />
                </div>
              ))}
            </div>

            <div className="homepage-works">
              <Works />
            </div>
          </div>

          <div className="page-footer">
            <Footer />
          </div> */}

        </div>
      </div>
    </div>
  )
};

export default Landing;