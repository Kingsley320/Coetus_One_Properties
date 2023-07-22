import AgentPropertyInfo from "../components/AgentPropertyInfo"
import SideBar from "../components/SideBar"

function AgentSingleProperty() {
    return (
        <>
            <div className="h-screen flex space-between">
                <SideBar />
                <AgentPropertyInfo className="ml-20"/>
            </div>
        </>
    )
}
export default AgentSingleProperty