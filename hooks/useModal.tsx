'use client'
import React, { FC, createContext, useEffect, useState } from "react"

export interface IModalCtx {
    modal: React.JSX.Element | null,
    setModal: (modal: React.JSX.Element | null) => void

}

export const ModalContext = createContext<IModalCtx>({
    modal: null,
    setModal: () => { },

})


export const ModalCtxProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
    const [modal, setModal] = useState<React.JSX.Element | null>(null)

    useEffect(() => {
        window.addEventListener('click', (e) => {
            if (e.target === document.querySelector('#modal-container')) {
                setModal(null)
            }
        })
    }, [])

    useEffect(() => {
        if (modal) document.documentElement.classList.add("overflow-hidden")
        if (!modal) document.documentElement.classList.remove("overflow-hidden")
    }, [modal])
    return (
        <ModalContext.Provider value={{ modal, setModal }}>
            <div className={`min-h-screen max-h-screen relative ${modal ? 'overflow-hidden' : ''}`}>
                {children}
                {modal && <div className="absolute  z-50 bg-blue-950/30 h-full w-full  flex items-center top-0 left-0 bottom-0 right-0 justify-center" id="modal-container" style={{
                    overflow: modal ? 'hidden' : 'auto'
                }}>
                    <div className="h-fit animate-in fade-in zoom-in  bg-transparent w-full ">
                        <modal.type  {...modal.props} key={modal.key} />
                    </div>
                </div>}
            </div>
        </ModalContext.Provider>
    )
}

export default function useModal() { return React.useContext(ModalContext) }