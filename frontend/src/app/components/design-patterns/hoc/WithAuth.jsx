'use client';

import useAuthenticated from "@/app/components/design-patterns/hoc/useAuthenticated";

function AccessDenied()
{
    return(
        <div>
            AccessDenied
        </div>
    )
}

export default  function WithAuth(Component) {

    return  (props) => {
        const isAuth = useAuthenticated();
        return(<div>
            {isAuth ? <Component/> : <AccessDenied/>}
        </div>)
    }
}