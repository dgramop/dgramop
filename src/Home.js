import "./Home.scss"
import {Tween, Timeline, ScrollTrigger} from 'react-gsap';
import {Email, GitHub, Instagram, Key, Language, ListSharp, NearMe, Person, Phone, RestaurantMenu, SwipeDown, Web, WorkSharp} from "@mui/icons-material";
import {useEffect, useState} from "react";

const devmode = !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
const markers=devmode;

function WorkItem({title="TODO", type="TODO", subtext="TODO", children=<></>, interactive=false, lazyFrame, ...props}) {
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
              </div> 
                  {lazyFrame && <iframe className="workitem__demo workitem__demo--iframe" {...lazyFrame}/>}
                  {children} <div className="workitem__subtext"> 
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
                      anticipatePin={0}
                      pin={"#pinContainer"} start="0px start" end="50% start" scrub={0.5} markers={markers}
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
                                  <WorkItem 
                                      title="Homology of Polyforms"
                                      type="University Mathematics Research"
                                      subtext={<>
                                      In support of biochemists engaged in cancer research,
                                      I wrote and optimized <a rel="noreferrer" target="_blank" href="https://github.com/dgramop/faster_polyforms">algorithms</a> that sample polyforms from the same distribution as an infinite 3d lattice.
                                      The algorithms sampled without populating any lattice, substantially increasing the complexity and number polyforms our team sampled.
                                      </>}
                                      interactive 
                                      lazyFrame={{title: "Live WASM Demo of Polyform Shuffler", src: "/polyforms/index.html"}}
                                  />
                              </div>
                            </Tween>

                          <TweenElement >
                             <div className="workitem__container">
                                 <WorkItem title="Foxhunter" type="Startup" subtext={<> <a href="https://foxhunter.ai" rel="noreferrer" target="_blank">Foxhunter</a> explores a new approach towards Low-Probability of Intercept/Low-Probability of Detection (LPI/LPD) waveforms: Generative AI</>}>
                                    <video className="workitem__demo" loop controls >
                                        <source src="/firstvid.mp4" type="video/mp4"/>
                                        <source src="/firstvid.webm" type="video/webm"/>
                                    </video>
                                 </WorkItem>
                             </div>
                          </TweenElement>

                            <TweenElement>
                              <div className="workitem__container">
                                  <WorkItem 
                                      interactive
                                      title="passCS"
                                      type="Exited Startup"
                                      subtext={<>
                                      I founded <a target="_blank" rel="noreferrer" href="https://passcs.io">passCS</a> by hiring teaching assistants disgruntled by unpaid wages
                                      to help left-behind students needing one-on-one attention pass.
                                      The premise: Pass or your money back.
                                      I grew passCS to just under 20 employees and 3 subject areas,
                                      and sold it when I graduated.
                                      passCS continues to operate at GMU
                                      </>}
                                  >
                                      <iframe className="workitem__demo workitem__demo--iframe" title={"passCS Website"} src="https://passcs.io"/>
                                  </WorkItem>
                              </div>
                          </TweenElement>
                          <TweenElement >
                             <div className="workitem__container">
                                 <WorkItem title="null.black" type="Failed Startup" subtext="null.black was a VPN company I started in high school with friends. I had developed a custom protocol that evaded every censorship firewall we threw it at, even those that used deep-packet inspection to detect VPN traffic.  There's a lot to talk about for this one, so you're best off just asking me about it." interactive >
                                     <iframe className="workitem__demo workitem__demo--iframe" title={"null.black web app"} src="https://null.black"/>
                                 </WorkItem>
                             </div>
                          </TweenElement>

                          <TweenElement >
                             <div className="workitem__container">
                                 <WorkItem title="PNI Sensor" type="Employment" subtext={<> I work as an R&D Software Engineer at <a href="https://pnicorp.com" rel="noreferrer" target="_blank">PNI Sensor</a>. I'm engaged in developing novel algorithms for APNT (Assured Positioning, Navigation, and Timing). APNT, in other words, is positioning without GPS. In this video, the same one on my front page, I can been sucesfully testing an algorithm I developed on a hunch. </>}>
                                    <video className="workitem__demo" playsInline autoPlay muted loop poster="/bgimg.webp" >
                                      <source src="/bgvideo.webm" type="video/webm"/>
                                    </video>
                                 </WorkItem>
                             </div>
                          </TweenElement>

                          <TweenElement >
                              <div className="workitem__container">
                                  <WorkItem 
                                      title="Solvespace"
                                      type="Open Source Contributions"
                                      subtext={<>
                                          CAD modelers redesign large portions of their parts when dimensions change. The solution is parameterization that solves for underlying dependent geometry.

                                          The next major iteration of CAD software will be as parametric as OpenSCAD and as convenient as point-and-click CAD. <a href="https://github.com/solvespace/solvespace" target="_blank" rel="noreferrer">Solvespace</a> is on its way to being just that
                                      </>}
                                      interactive
                                  >
                                      <iframe className="workitem__demo workitem__demo--iframe" title={"Live emscripten Demo solvespace"} src="https://cad.apps.dgramop.xyz"/>
                                  </WorkItem>
                              </div>
                          </TweenElement>
                          <TweenElement >
                             <div className="workitem__container">
                                 <WorkItem title="Impact Aware" type="Winning Hackathon Project" subtext={<> <a target="_blank" rel="noreferrer" href="https://devpost.com/software/impact-aware">Impact aware</a>'s fault-tolerant mesh network of sensors detects the location and intensity of bomb detonation impacts in urban areas to help first responders prioritize after an air raid. We chose to develop this a few nights after the war in Ukraine started. It won multiple prizes, including first place at TechConnect Hacks D.C. at George Mason University. The attention earned our team invitationals to Microsoft Garage's ideathon and ideation workshop and a grant-track spot in our University/SBDC partnership Innovation Commercialization Assistance Program</>}>
                                    <img className="workitem__demo" src="impact_aware.jpg" />
                                 </WorkItem>
                             </div>
                          </TweenElement>
                            {/*
                            TODO: more hackathon projects, ideally those with videos
                            */}
                        </div>
                    </Tween>
                    </Timeline>
                  </ScrollTrigger>
    )
}

export default function Home(props) {
    useEffect(() => {
        let sm = 0
        let t = setInterval(() => {
            console.log(window.scrollY)
            if(window.scrollY == 0 && sm == 0) {
                sm++
            }
            if(window.scrollY > 0 && sm == 1) {
                sm++
            }
            if(window.scrollY == 0 && sm == 2) {
                clearInterval(t)
            }
            window.scrollTo({left:0, top: 0})
        }, 100);
        setTimeout(() => clearInterval(t), 1000);
    })
    return (
        <>
            <ScrollTrigger
                trigger=".hero"
                start="0% start"
                end="100% start"
                markers={markers}
                scrub={0.5}
            >
                <Tween from={{opacity: 1}} to={{opacity:0.5}}>
                    <div className="vid_container">
                        <video playsInline autoPlay muted loop poster="bgimg.webp" id="bgvid">
                          <source src="/bgvideo.webm" type="video/webm"/>
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
                markers={markers}
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
                                <a href="https://devpost.com/dgramop"> devpost </a>
                            </Pill>
                            {/*<Pill symbol={<ListSharp />}>
                                <a href="/resume.pdf"> resume </a>
                            </Pill>*/}
                            <Pill symbol={<WorkSharp />}>
                                <a href="https://www.linkedin.com/in/dgramop"> linkedin </a> 
                            </Pill>
                            <Pill symbol={<Instagram />}>
                                <a href="https://www.instagram.com/dgramop/"> instagram </a> 
                            </Pill>
                        </div>
                    </div>
                </Tween>
            </ScrollTrigger>
            <Work />
            {(devmode) && <div className="work__spacer"/>}
            <div className="friends__container">
                <div className="friends">
                    <div className="card_title">certifications</div>
                    <ul>
                        <li><a href="https://ipv6.he.net/certification/create_badge.php?pass_name=dgramop&badge=3">Hurricane Electric IPv6 Sage Certified</a></li>
                        <li>Part 107 Drone Pilot (WIP Feb 12)</li>
                    </ul>
                    <div className="card_title">skills & interests</div>
                    <ul>
                        <li>Rust</li>
                        <li>C</li>
                        <li>Numerical & Symbolic Solvers</li>
                        <li>Electronics</li>
                    </ul>
                </div>
                {/*<div className="friends">
                    <div className="card_title">Oakton High School</div>
                    <ul>
                        <li>Advanced Studies Diploma</li>
                        <li>Computer Science Dep.t Award</li>
                        <li>AP Scholar with Distinction</li>
                        <li>Board of Education Excellence in Civics Education</li>
                        <li>Scholastic Excellence: Advanced Mathematics and Technology</li>
                        <li>Governor of Virginia Academic Excellence. </li>
                    </ul>
                </div>*/}

                <div className="friends">
                    <div className="card_title">Contact</div><br/>
                    <Pill symbol={<Phone/>}> 571-524-3033</Pill><br/>
                    <Pill symbol={<Email/>}> dgramopadhye@gmail.com</Pill>
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


            </div>
            <div className="work__spacer"/>
        </>
    )
}
