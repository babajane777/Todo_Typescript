import { faBook, faHand, faHome, faOm } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, } from '@fortawesome/free-solid-svg-icons';

const carddataArray = [
    { name: "Home", icon: "faHome" },
    { name: "Office", icon: "chair-office" },
    { name: "Education", icon: "faHome" },
    { name: "Religious", icon: "faHome" }
]

type cardType = {
    item: object
}

export function Dashboard() {
    return (
        <div id="dashboard">

            <div id="dashboardCard">
                <div id="Area_Icon">
                    <FontAwesomeIcon icon={faHome} size="xl" color="white" />
                    <h4>Home</h4>
                </div>
                <div id="tasks">
                    <p>Total Tasks:</p>
                    <p>Pending Tasks:</p>
                    <p>Completed Tasks:</p>
                </div>
            </div>

            <div id="dashboardCard" >
                <div id="Area_Icon">
                    <FontAwesomeIcon icon={faPhone} size="xl" color="white" />
                    <h4>Office</h4>
                </div>
                <div id="tasks">
                    <p>Total Tasks:</p>
                    <p>Pending Tasks:</p>
                    <p>Completed Tasks:</p>
                </div>
            </div>

            <div id="dashboardCard" >
                <div id="Area_Icon">
                    <FontAwesomeIcon icon={faBook} size="xl" color="white" />
                    <h4>Education</h4>
                </div>
                <div id="tasks">
                    <p>Total Tasks:</p>
                    <p>Pending Tasks:</p>
                    <p>Completed Tasks:</p>
                </div>
            </div>

            <div id="dashboardCard" >
                <div id="Area_Icon">
                    <FontAwesomeIcon icon={faOm} size="xl" color="white" />
                    <h4>Religious</h4>
                </div>
                <div id="tasks">
                    <p>Total Tasks:</p>
                    <p>Pending Tasks:</p>
                    <p>Completed Tasks:</p>
                </div>
            </div>

        </div>
    )
}

function DashboardCard({ item }: cardType) {
    return (
        <div id="dashboardCard">
            <FontAwesomeIcon icon={"chair-office"} />
            <h4>Office</h4>

        </div>
    )
}