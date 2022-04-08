import "./css/SectionThreeLarge.css";

export default function CommunityProjects() {
  return (
    <>
      <div className="section-three">
        <div className="section-three-title">
          <span>COMMUNITY PROJECTS</span>
        </div>

        <div className="section-three-component">
          <div className="section-three-component-left">
            {/* image below */}
            <div className="section-three-circle1"></div>

          </div>
          <div className="section-three-component-right">
            <div className="section-three-project">
                <span className="section-three-project-title">NO PLACE LIKE HOME PROGRAM</span>
                <p className="section-three-project-content">
                  A four-step programme that will help, educate, assist and
                  support families throughout the home ownership process. The
                  programme includes financial skills learning; budget management;
                  home loan application and other financing options to purchase a
                  home; and post purchase assistance and mentoring, including
                  advice about financial obligations, house maintenance and more.
                </p>
                <div className="section-three-ready">READY TO GET STARTED</div>
              </div>
          </div> 
        </div>

        <div className="section-three-component">
          <div className="section-three-component-left">
            {/* image below */}
            <div className="section-three-circle2"></div>
            
          </div>
          <div className="section-three-component-right">
            <div className="section-three-project">
                <span className="section-three-project-title">PROJECT IKUNA PROGRAMME</span>
                <p className="section-three-project-content">
                Designed to support Pacific workers in low-skilled jobs, this programme aims at giving them useful tools and strategies to improve their abilities and move toward higher level jobs. They will learn about financial management including budgeting and goal setting; and digital skills. As a result, employers will have increased productivity and a future-ready, skilled, engaged, motivated and effective staff.
                </p>
                <div className="section-three-ready">READY TO GET STARTED</div>
              </div>
          </div> 
        </div>
      </div>
    </>
  );
}
