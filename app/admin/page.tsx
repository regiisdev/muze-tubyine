'use client'
import { useSearchParams } from 'next/navigation'
import { Suspense, useEffect, useState } from 'react'
import MessagingTab from './_tabs/messaging'

function Page() {
    const searchParams = useSearchParams()

    useEffect(() => {
        setCurrentTab(searchParams.get('tab') as 'overview' | 'messaging' | 'children' ?? 'overview')
    })
    const [currentTab, setCurrentTab] = useState<'overview' | 'messaging' | 'children'>('overview')
    switch (currentTab) {
        // case 'overview':
        //     return (
        //         <div>
        //             Overview
        //         </div>
        //     )
        // case 'messaging':
        //     return <MessagingTab />
        // case 'children':
        //     return (
        //         <div>
        //             Children
        //         </div>
        //     )
        default:
            return <MessagingTab />
    }
}


export default function PageWrapped() {
    return <Suspense><Page /></Suspense>
}