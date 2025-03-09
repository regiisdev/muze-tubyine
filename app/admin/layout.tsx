'use client'

import DashboardNav from "@/components/dashboardNav"
import { ModalCtxProvider } from "@/hooks/useModal"
import { Inter } from 'next/font/google'
const adminFont = Inter({ subsets: ['latin'] })
export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <ModalCtxProvider>
            <div className="bg-slate-50  relative text-secondary px-[4vw] text-sm py-2   min-h-[100vh]" >
                <DashboardNav>
                    {children}
                </DashboardNav>
            </div >
        </ModalCtxProvider>
    )
}