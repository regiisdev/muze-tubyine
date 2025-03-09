import { axios } from "@/utils/axios";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { Contact } from "@prisma/client";
import TimeAgo from "javascript-time-ago";
import { useEffect } from "react";

export default function SingleMessageView({ message, mutateFunction }: { message: Contact, mutateFunction: () => void }) {
    const timeAgo = new TimeAgo('en-US')

    useEffect(() => {
        axios.put(`/contact-us?action=read&messageId=${message.id}`)
            .then(() => {
                setTimeout(() => {
                    mutateFunction()
                }, 2000)
            })
    }, [])

    return (
        <div className="md:max-w-[70vw] mx-auto p-6 bg-white border border-slate-100 rounded-lg max-h-[80vh] overscroll-y-scroll" >

            <div className="grid grid-cols-2">

                <div className="flex flex-col gap-1">
                    <span className="text-slate-600 font-medium">
                        {message.fullNames}
                    </span>
                    <span>
                        {message.email}
                    </span>
                    <span>
                        {message.phoneNumber}
                    </span>
                </div>
                <div className="flex flex-col gap-1">
                    <div className="flex flex-col">
                        {!message.isRead ? <span className="text-[10px] w-fit  uppercase font-medium px-2 py-1 rounded-full bg-blue-700 text-white">Unread</span> : null}
                    </div>
                    <span className="text-slate-600 font-medium">
                        {timeAgo.format(new Date(message.createdAt))}
                    </span>
                    <span>
                        {new Date(message.createdAt).toLocaleString()}
                    </span>
                </div>
            </div>

            <hr className="my-6 opacity-45" />

            <div className="mt-4">
                <h3 className="text-lg font-medium text-black">{message.reason}</h3>
                <p className="mt-5 p-3 rounded-lg bg-slate-50 text-secondary">
                    {message.message}
                </p>
            </div>
            <hr className="my-6 opacity-45" />
            <div className="flex items-center gap-2">
                <a href={`mailto:${message.email}`}>
                    <button className="py-2 px-4  hover:bg-blue-50 rounded-full text-blue-500 border-blue-500  border flex items-center gap-3"><EnvelopeIcon className="w-4 " /> Reply with email</button>
                </a>
                <a href={`tel:${message.phoneNumber}`}>
                    <button className="py-2 px-4  hover:bg-blue-50 rounded-full text-blue-500 border-blue-500  border flex items-center gap-3">Call {message.phoneNumber}</button>
                </a>
            </div>

        </div>
    )
}