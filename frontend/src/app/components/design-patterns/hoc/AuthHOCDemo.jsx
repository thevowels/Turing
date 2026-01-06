'use client';

import WithAuth from "@/app/components/design-patterns/hoc/WithAuth";
import {Component} from "react";

function  Page1(){
    return (
        <div> Page 1</div>
    )
}

function Page2(){
    return (
        <div>
            Page 2
        </div>
    )
}

const AuthedPage1 = WithAuth(Page1);
const AuthedPage2 = WithAuth(Page2);

export default function AuthHOCDemo() {
    return(
        <div>
            Auth Demo
            <AuthedPage1 />
            <AuthedPage2 />
        </div>
    )
}