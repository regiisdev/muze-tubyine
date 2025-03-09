
'use client'
import { PowerIcon } from "@heroicons/react/24/outline";
import { SessionProvider, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from 'react';
import AuthWrapper from "./auth/authWrapper";
import Logo from "./logo";

export default function DashboardNav({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex  flex-col gap-4">
            <SessionProvider>
                <AuthWrapper>
                    <>
                        <DomainManagementTabs />
                        {children}
                    </>
                </AuthWrapper>
            </SessionProvider>

        </div>
    )
}


const DOMAIN_CONFIG_ROUTES = [
    {
        id: 0,
        title: "Overview",
        page: '/admin?tab=overview'
    },
    // {
    //     id: 1,
    //     title: "Messaging",
    //     page: '/admin?tab=messaging'
    // },
    // {
    //     id: 2,
    //     title: "Children",
    //     page: '/admin?tab=children'
    // }
]

const DomainManagementTabs = () => {
    const pathname = usePathname()
    const [selectedTab, setSelectedTab] = useState(0)

    useEffect(() => {
        setSelectedTab(DOMAIN_CONFIG_ROUTES.find(r => pathname == r.page)?.id ?? 0)
    }, [pathname])

    const { data } = useSession()

    return (
        <div className="flex items-center gap-2 sticky top-4 z-30 shadow-lg shadow-slate-100 bg-white rounded-lg border border-slate-100 px-3 justify-between py-2">
            {/* <span className="font-black font-sans  text-black">WHAT IF</span> */}
            <Link href={'/'}>
            <Logo />
            </Link>
            <div className="w-fit flex items-center gap-2">
                {/* {
                    DOMAIN_CONFIG_ROUTES.map((route) => (
                        <Link href={route.page}>
                            <button className={`px-2 py-2 rounded-lg text-black hover:bg-slate-100 ${selectedTab === route.id ? "bg-slate-100" : ""} `}>
                                {route.title}
                            </button>
                        </Link>
                    ))
                } */}
                <div className="flex items-center gap-2">
                    {data?.user?.image && <img src={data?.user?.image} alt="#" onError={e => e.currentTarget.style.display = "none"} className="w-8 aspect-square bg-slate-50 rounded-full" />}
                    <div className="flex flex-col">
                        <span className="text-black font-medium">{data?.user?.name} </span>
                        <span>{data?.user?.email} </span>
                    </div>
                </div>
                <button onClick={() => signOut()} className="ml-6">
                    <PowerIcon className="w-5 stroke-red-300  hover:stroke-red-500" />
                </button>
            </div>
        </div>
    )

}
