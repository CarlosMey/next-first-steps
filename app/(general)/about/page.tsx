import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'SEO Title',
    description: 'SEO Descrption',
    keywords: ['About Page', 'Fernando', 'Informacion','...'],

};


export default function AboutPage(){
    return (
        <main className="flex flex-col items/center p/24">
            <span>About Page</span>
        </main>
    )
}