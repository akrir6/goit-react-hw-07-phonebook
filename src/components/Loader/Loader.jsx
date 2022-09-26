
import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => {
    return (
        <ThreeDots 
        height="60" 
        width="60" 
        radius="9"
        color="#1F4E49" 
        ariaLabel="three-dots-loading"
        wrapperStyle={{ justifyContent: 'center'}}
        wrapperClassName=""
        visible={true}
        />
    ) 
}


