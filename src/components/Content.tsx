import { rootState } from '../redux/rootReducer';
import { useSelector } from 'react-redux';
import Overview from "./Overview";
import Team from "./Team";
import Appliances from './Appliances';



export default function Content() {

    const content = useSelector((state: rootState) => state.reducer.content);

    let con = (content: string) => {
        if(content === 'Team'){
            return <Team/>
        }
        else if (content === 'Appliances'){
            return <Appliances/>
        }
        else {
            return <Overview/>
        }
    }

    return (
        <>
           { con(content) }
        </>
    )

}