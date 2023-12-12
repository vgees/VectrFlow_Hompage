
import LC from ".//public/LC.png";
import build from ".//public/dark.png";
import drag from ".//public/drag.png";
import emb from ".//public/embeddings.png";
import pipe from ".//public/pipe.png";
import scale from ".//public/scale.png";
import sync from ".//public/sync.png";
import home from ".//public/VectrFlow2.png";
import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

const App = () => (
  <div className="software-company-website">
    <div className="hero-wrapper">
      <div className="hero-wrapper-text">
        <div className="header-text">
          <div className="h-1-primary-text">
            <span>
              <span className="h-1-primary-text-span"></span>
              <span className="h-1-primary-text-span2">Low Code ETL</span>
              <span className="h-1-primary-text-span3"></span>
              <span className="h-1-primary-text-span4">
                <br />
              </span>
              <span className="h-1-primary-text-span5">for Unstructured Data</span>
              <span className="h-1-primary-text-span4">
                <br />
              </span>
              <span className="h-1-primary-text-span6">& GenAI Platform</span>
            </span>
          </div>
        </div>
        <div className="btn-primary">
          <Link to="/pricing" className="let-s-get-started">
            Let’s get started!
          </Link>
        </div>
        <div className="additional-text">
          A SaaS based low code ETL pipeline for creating high-quality vector
          embedding<br /> of unstructured data to build Generative AI
          applications.
        </div>
      </div>
      <div className="hero-wrapper-image">
        <div className="hero-wrapper-image-center">
          <img className="web-development-1" src={home} alt="Hero Image" />
        </div>
      </div>
    </div>

    <div className="heading-h-2-left4">
      <h2>Features of VectrFlow</h2>
    </div>

    <div className="frame-54">
      <div className="frame-53">
        <div className="way-building-details">
          <div className="frame-47">
            <div className="build-the-right-team-to-scale">Build</div>
            <div className="frame-48">
              <div className="finding-the-right-talent-is-not-easy-we-help-you-find-the-talent-that-suits-your-needs-follows-your-processes-and-sticks-with-you-long-term-not-the-case-with-freelancers">
                Automate processes by drag and dropping AI models, data loaders,
                and plugins.
              </div>
              <div className="frame-49">
                <div className="our-delivery-model-helps-you-cut-costs-and-deliver-within-budget"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-46"></div>
        <img className="rectangle-17" src={build} alt="Build Image" />
      </div>
    </div>

    <div className="card-sm">
      <div className="rectangle-21"></div>
      <div className="frame-57">
        <div className="group-34">
          <div className="rectangle-27"></div>
        </div>
        <div className="frame-56">
          <div className="card-main-title">
            Low code drag and drop functionality
          </div>
          <div className="unlike-other-companies-we-are-a-ux-first-development-company-projects-are-driven-by-designers-and-they-make-sure-design-and-experiences-translate-to-code">
            <span>
              <span className="unlike-other-companies-we-are-a-ux-first-development-company-projects-are-driven-by-designers-and-they-make-sure-design-and-experiences-translate-to-code-span">
                Low code drag and drop functionality is a user-friendly
                development approach that simplifies application creation. It
                employs a visual interface where users can easily design and
                build elements by dragging and dropping components onto a
                canvas. This approach reduces the need for extensive coding,
                making it accessible to non-developers.
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>

    <div className="card-sm2">
      <div className="rectangle-21"></div>
      <div className="frame-57">
        <div className="group-34">
          <div className="rectangle-272"></div>
        </div>
        <div className="frame-56">
          <div className="card-main-title">Automated Data Ingestion Pipeline</div>
          <div className="unlike-other-companies-we-are-a-ux-first-development-company-projects-are-driven-by-designers-and-they-make-sure-design-and-experiences-translate-to-code">
            <span>
              <span className="unlike-other-companies-we-are-a-ux-first-development-company-projects-are-driven-by-designers-and-they-make-sure-design-and-experiences-translate-to-code-span4">
                An Automated Data Ingestion Pipeline is a structured data
                workflow that efficiently collects, transforms, and loads data
                from various sources into a central repository or data
                warehouse. This pipeline automates the often complex and
                time-consuming process of data acquisition, ensuring data
                quality and consistency.
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>

    <div className="card-sm3">
      <div className="rectangle-21"></div>
      <div className="frame-57">
        <div className="group-34">
          <div className="rectangle-273"></div>
        </div>
        <div className="frame-56">
          <div className="card-main-title">Vectorstore and computed Embeddings</div>
          <div className="unlike-other-companies-we-are-a-ux-first-development-company-projects-are-driven-by-designers-and-they-make-sure-design-and-experiences-translate-to-code">
            <span>
              <span className="unlike-other-companies-we-are-a-ux-first-development-company-projects-are-driven-by-designers-and-they-make-sure-design-and-experiences-translate-to-code-span7">
                "Vectorstore" refers to a repository or database that stores
                vector representations of data points or entities. Computed
                embeddings, in this context, are vectors generated through
                techniques like word embeddings (e.g., Word2Vec or GloVe) or
                deep learning models.
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>

    <div className="card-sm4">
      <div className="rectangle-21"></div>
      <div className="frame-57">
        <div className="group-34">
          <div className="rectangle-274"></div>
        </div>
        <div className="frame-56">
          <div className="card-main-title">Scalable data Pipeline</div>
          <div className="unlike-other-companies-we-are-a-ux-first-development-company-projects-are-driven-by-designers-and-they-make-sure-design-and-experiences-translate-to-code">
            <span>
              <span className="unlike-other-companies-we-are-a-ux-first-development-company-projects-are-driven-by-designers-and-they-make-sure-design-and-experiences-translate-to-code-span10">
                A scalable data pipeline is a sophisticated architecture that
                can efficiently process, transform, and transmit large volumes
                of data. It's designed to adapt to growing data needs, ensuring
                seamless performance and accommodating increasing data volumes,
                making it ideal for organizations with dynamic data
                requirements.
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>

    <div className="card-sm5">
      <div className="rectangle-21"></div>
      <div className="frame-57">
        <div className="group-34">
          <div className="rectangle-275"></div>
        </div>
        <div className="frame-56">
          <div className="card-main-title">
            Streamline Langchain and LlamaIndex development
          </div>
          <div className="unlike-other-companies-we-are-a-ux-first-development-company-projects-are-driven-by-designers-and-they-make-sure-design-and-experiences-translate-to-code">
            <span>
              <span className="unlike-other-companies-we-are-a-ux-first-development-company-projects-are-driven-by-designers-and-they-make-sure-design-and-experiences-translate-to-code-span13">
                To streamline Langchain and LlamaIndex development, prioritize
                clear project roadmaps and agile methodologies, enhance
                cross-team collaboration and communication, and leverage
                modular, reusable code components for efficient coding and
                testing, ultimately accelerating the development process and
                improving product quality.
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>

    <div className="card-sm6">
      <div className="rectangle-21"></div>
      <div className="frame-57">
        <div className="group-34">
          <div className="rectangle-276"></div>
        </div>
        <div className="frame-56">
          <div className="card-main-title">
            Periodic data Sync and pay as you use
          </div>
          <div className="unlike-other-companies-we-are-a-ux-first-development-company-projects-are-driven-by-designers-and-they-make-sure-design-and-experiences-translate-to-code">
            <span>
              <span className="unlike-other-companies-we-are-a-ux-first-development-company-projects-are-driven-by-designers-and-they-make-sure-design-and-experiences-translate-to-code-span16">
                Periodic data sync refers to the scheduled and automatic
                updating of information between systems or databases at regular
                intervals, ensuring data consistency and accuracy. "Pay as you
                use" implies a pricing model where customers are billed based on
                the actual resources or services they consume, promoting cost
                efficiency and scalability.
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>

    <img className="heart-rate-perspective-matte" src={sync} alt="Sync Image" />
    <div className="code-perspective-matte2"></div>
    <img className="code-perspective-matte3" src={pipe} alt="Pipe Image" />
    <img className="shield-perspective-matte" src={emb} alt="Embeddings Image" />
    <img className="padlock-perspective-matte" src={scale} alt="Scale Image" />
    <img className="success-perspective-matte" src={LC} alt="LC Image" />
    <img className="rocket-perspective-matte" src={drag} alt="Drag Image" />

    <div className="footer-section">
      <div className="rectangle-34"></div>
      <div className="group-78"></div>

      <div className="_2023-copyright-by-agency-solutions-all-rights-reserved">
        © 2023 Copyright by VectrFlow. All rights reserved.
      </div>
    </div>
  </div>
);

export default App;
