'use client';

import useAuthenticated from "@/app/components/design-patterns/hoc/useAuthenticated";

function Page1()
{
    const isAuth = useAuthenticated()
    return (
        <div>
            {
                isAuth ? <h1>Page 1</h1> : <AccessDenied />
            }
        </div>
    )
}

function Page2()
{
    const isAuth = useAuthenticated();
    return (
        <div>
            {
                isAuth ? <h1>Page 2</h1> : <AccessDenied />
            }
        </div>
    )
}

function AccessDenied()
{
    return(
        <div>
            AccessDenied
        </div>
    )
}


export default function WhyHOC(props) {
    return(
        <div>
            Why HOC
        </div>
    )
}