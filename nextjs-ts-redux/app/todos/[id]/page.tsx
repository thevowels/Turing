'use client'

import {useParams} from "next/dist/client/components/navigation";

export default function TodoDetail() {
    const params = useParams();
    const {id} = params;

    return (<div>
        Todo  detail {id}
    </div>)
}