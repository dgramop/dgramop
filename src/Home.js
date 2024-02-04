import "./Home.scss"
import {Tween, Timeline, ScrollTrigger} from 'react-gsap';
import {GitHub, Key, Language, ListSharp, NearMe, Person, RestaurantMenu, SwipeDown, Web, WorkSharp} from "@mui/icons-material";
import {useState} from "react";

function WorkItem({title="TODO", type="TODO", subtext="TODO", children="TODO", interactive=false, ...props}) {
    const [coverDemo, setCoverDemo] = useState(interactive);
    return (
          <section className="workitem">
              <div className="workitem__header">
                  <div className="workitem__header__infonugget">
                      <div className="workitem__header__infonugget__title">
                          {title}
                      </div>
                      <div className="workitem__header__infonugget__subtext">
                          {type}
                      </div>
                  </div>
                  {interactive && <div className="workitem__header__symbol" onClick={() => setCoverDemo(false)} title="This project description is interactive">
                      <SwipeDown />
                  </div>}
              </div>
              <div className={"workitem__demo__cover "+(!coverDemo ? "workitem__demo__cover--off" : "")} onClick={() => setCoverDemo(false)}>
                  Click to interact with {title}
              </div> {children} <div className="workitem__subtext"> 
                  {subtext}
              </div>
          </section>
    )
}

function TweenElement({children, ...props}) {
    return (
                      <Tween
                          from={{ x: '120%', scale: 0.85, rotationZ: 20}}
                          to={{ x: '0%', scale: 1,  rotationZ:0}} >
                          {children}
                      </Tween>
    )
}

function Pill({symbol, children}) {
    return (
        <div className="pill">
            <div className="pill__symbol">{symbol}</div>
            <div className="pill__children">{children}</div>
        </div>
    )
}

function Work() {
    let [pinned, setPinned] = useState(true);
    return(
                  <ScrollTrigger 
                      trigger={".work"}
                      anticipatePin={1}
                      pin={"#pinContainer"} start="0px start" end="50% start" scrub={0.5} markers 
                  >
                    <Timeline
                      wrapper={<div id="pinContainer" />}
                    >
                        <Tween from={{scale: 1, rotationX:0}} to={{scale: 0.9, rotationX: 10}}>
                        <div className="work">
                            <div className="card_title">Work</div>

                            <Tween
                                from={{x:0}}
                                to={{x:0}}
                            >
                              <div className="workitem__container">
                                  <WorkItem title="Homology of Polyforms" type="University Mathematics Research" subtext={"In support of biochemists engaged in cancer research, I wrote and optimized algorithms that sample polyforms from the same distribution as a large 3d lattice, without populating the lattice, substantially increasing the complexity an number polyforms our team sampled."} interactive >
                                      <iframe className="workitem__demo workitem__demo--iframe" title={"Live WASM Demo of Polyform Shuffler"} src="https://dgramop.xyz/blocks.html"/>
                                  </WorkItem>
                              </div>
                            </Tween>

                            <TweenElement>
                              <div className="workitem__container">
                                  <WorkItem interactive title={"passCS"} type={"Exited Startup"} subtext={"To help bridge the gap between university and TAs angry at unpaid wages"} >
                                      <iframe className="workitem__demo workitem__demo--iframe" title={"passCS Website"} src="https://passcs.io"/>
                                  </WorkItem>
                              </div>
                          </TweenElement>
                          <TweenElement >
                              <div className="workitem__container">
                                  <WorkItem title="Solvespace" type="Open Source Contributions" subtext={"TODO"} interactive >
                                      <iframe className="workitem__demo workitem__demo--iframe" title={"Live emscripten Demo solvespace"} src="https://cad.apps.dgramop.xyz"/>
                                  </WorkItem>
                              </div>
                          </TweenElement>
                          <TweenElement >
                             <div className="workitem__container">
                                 <WorkItem title="Fixed-Wing sUAS" type="Hobby Project" subtext={"TODO"} interactive >
                                     <iframe className="workitem__demo workitem__demo--iframe" title={"3d viewer for CAD model"} src="https://dgramop.xyz/assembly.html"/>
                                 </WorkItem>
                             </div>
                          </TweenElement>

                          <TweenElement
                          >
                             <div className="workitem__container">
                                 <WorkItem title="PowerContest" type="Hackathon Project" subtext={"TODO"} interactive >
                                     <iframe className="workitem__demo workitem__demo--iframe" title={"powercontest description website"} src="https://powercontest.org"/>
                                 </WorkItem>
                             </div>
                          </TweenElement>

                          <TweenElement
                          >
                             <div className="workitem__container">
                                 <WorkItem title="null.black" type="Failed Startup" subtext={"TODO"} interactive >
                                     <iframe className="workitem__demo workitem__demo--iframe" title={"null.black web app"} src="https://null.black"/>
                                 </WorkItem>
                             </div>
                          </TweenElement>
                        </div>
                    </Tween>
                    </Timeline>
                  </ScrollTrigger>
    )
}

export default function Home(props) {
    return (
        <>
            <ScrollTrigger
                trigger=".hero"
                start="0% start"
                end="100% start"
                markers
                scrub={0.5}
            >
                <Tween from={{opacity: 1}} to={{opacity:0.5}}>
                    <div className="vid_container">
                        <video playsInline autoPlay muted loop poster="bgimg.png" id="bgvid">
                        {/*<source src="polina.webm" type="video/webm"/>*/}
                          <source src="/bgvideo.mp4" type="video/mp4"/>
                        </video>
                    </div>
                    <div className="hero">
                        <div className="hero__heading">
                            <span className="hero__heading__name">
                                Dhruv Gramopadhye. 
                            </span>
                            <span className="hero__heading__subtext">
                                Engineer, for the world
                            </span>
                        </div>
                        <div className="hero__creed">
                            <div className="hero__creed__title">
                                Creed
                            </div>
                            <div className="hero__creed__text">
                                I am an engineer; I reduce theory to practice.<br/>
                                I fix problems instead of ignoring or complaining about them. <br/>
                                I take responsibility for my product and those who use it.<br/>
                            </div>
                        </div>
                    </div>
                </Tween>
            </ScrollTrigger>
            <ScrollTrigger
                trigger={".hero"}
                start={"0 start"}
                markers
            >
                <Tween from={{opacity:0.7}} to={{opacity:1}} duration={0.5}>
                    <div className="pills__container">
                        <img className="pills__image" src="/me_dfl.jpg" alt="Dhruv Headshot"/>
                        <div className="pills">
                            <Pill symbol={<Person />}> Dhruv Gramopadhye </Pill>
                            <Pill symbol={<NearMe />}> Santa Rosa, CA </Pill>
                            <Pill symbol={<GitHub />}> 
                                <a href="https://github.com/dgramop"> github </a> 
                            </Pill>
                            <Pill symbol={<Key />}> 
                                <a href="https://keybase.io/dgramop"> keybase </a>
                            </Pill>
                            <Pill symbol={<Web />}> 
                                <a href="https://devpost.com/BrainyBrian"> devpost </a>
                            </Pill>
                            {/*<Pill symbol={<ListSharp />}>
                                <a href="/resume.pdf"> resume </a>
                            </Pill>*/}
                            <Pill symbol={<WorkSharp />}>
                                <a href="https://www.linkedin.com/in/dgramop"> linkedin </a> 
                            </Pill>
                        </div>
                    </div>
                </Tween>
            </ScrollTrigger>
            <Work />
            <div className="work__spacer"/>
            <div className="friends__container">
                <div className="friends">
                    <div className="card_title">certifications</div>
                    <ul>
                        <li><a href="https://ipv6.he.net/certification/create_badge.php?pass_name=dgramop&badge=3">Hurricane Electric IPv6 Sage Certified</a></li>
                        <li>Part 107 Drone Pilot</li>
                    </ul>
                    <div className="card_title">skills & interests</div>
                    <ul>
                        <li>Rust</li>
                        <li>C</li>
                        <li>Numerical & Symbolic Solvers</li>
                        <li>Electronics</li>
                    </ul>
                </div>
                <div className="friends">
                    <div className="card_title">George Mason University Winter '23</div>
                    <ul>
                        <li>B.S. Computer Science</li>
                        <li>Math Minor (one course away from Math Major)</li>
                        <li>Cum Laude</li>
                        <li>Graduate from the Honors College</li>
                        <li>Full-tuition University Scholar Scholarship</li>
                        <li>Graduted a semester early w. several masters courses completed</li>
                    </ul>
                </div>
                <div className="friends">
                    <div className="card_title">Oakton High School</div>
                    <ul>
                        <li>Advanced Studies Diploma</li>
                        <li>Computer Science Dep.t Award</li>
                        <li>AP Scholar with Distinction</li>
                        <li>Board of Education Excellence in Civics Education</li>
                        <li>Scholastic Excellence: Advanced Mathematics and Technology</li>
                        <li>Governor of Virginia Academic Excellence. </li>
                    </ul>
                </div>

            </div>
            <div className="work__spacer"/>
        </>
    )
}
