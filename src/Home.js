import "./Home.scss"

export default function Home() {
    return (
        <>
            <div id="dgr">
                <center>
                    <img src="/me_dfl.jpg" alt="" />
                    <h2>dGRAMOP</h2>
                    d&#275;&middot;gram&middot;op<br /><br />
                    <table><tbody>
                        <tr><td className="first">identity</td> <td><a href="https://github.com/dgramop">github</a> <a href="https://devpost.com/dgramop">devpost</a> <a href="https://keybase.io/dgramop">keybase</a> <a href="https://www.linkedin.com/in/dgramop/">linkedin</a> <a href="https://www.instagram.com/dgramop/">instagram</a></td></tr>
                        <tr><td className="first">location</td> <td>Hayes, San Francisco, CA</td></tr>
                        <br />
                        <tr><td className="first">work</td> <td><a href="https://pnicorp.com">PNI Sensor</a> &mdash; R&amp;D Software Engineer, APNT</td></tr>
                        <tr><td className="first">projects</td> <td><a href="https://passcs.io"><i>passCS</i></a> <a href="https://github.com/dgramop/faster_polyforms">polyforms</a> <a href="https://github.com/solvespace/solvespace">solvespace</a> <a href="https://powercontest.org">power contest</a> <a href="https://null.black">null.black</a> <a href="https://devpost.com/software/impact-aware">impact aware</a></td></tr>
                        <tr><td className="first">vulns</td> <td><a style={{textDecoration: "underline"}} onClick={() => alert('waiting for disclosure permission')}>blackboard SMTP injection</a> <a href="https://www.exploit-db.com/ghdb/4963">gravityforms</a></td></tr>
                        <tr><td className="first">certs</td> <td><a href="https://ipv6.he.net/certification/create_badge.php?pass_name=dgramop&badge=3">IPv6 sage</a> Part 107 drone pilot</td></tr>
                        <tr><td className="first">skills</td> <td>Rust, C, numerical &amp; symbolic solvers, electronics</td></tr>
                        <tr><td className="first">education</td> <td>George Mason &rsquo;23 &mdash; B.S. CS, math minor, cum laude, honors college</td></tr>
                        <br />
                        <tr><td className="first">contact</td> <td>571-524-3033 &middot; dgramopadhye@gmail.com</td></tr>
                    </tbody></table>
                </center><br /><br /><br />
            </div>
            <footer>
                <center><u>D</u>hruv <u>Gramop</u>adhye</center>
            </footer>
        </>
    )
}
