import ErrorIndicator from "@/components/errorIndicator"
import { Input } from "@/components/input"
import LoadingIndicator from "@/components/loadingIndicator"
import SectionTitle from "@/components/sectionTitle"
import { Select } from "@/components/select"
import SingleMessageView from "@/components/singleMessageView"
import { Table } from "@/components/table"
import useModal from "@/hooks/useModal"
import { axios, fetcher } from "@/utils/axios"
import { MagnifyingGlassIcon, StarIcon as StarIconOutline } from "@heroicons/react/24/outline"
import { ArrowUpRightIcon, StarIcon } from "@heroicons/react/24/solid"
import { Contact } from "@prisma/client"
import { Card } from "@tremor/react"
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import { useEffect, useState } from "react"
import useSWR from "swr"

TimeAgo.addDefaultLocale(en)

export default function MessagingTab() {
    const [search, setSearch] = useState<string>('')

    const [messages, setMessages] = useState<Contact[]>([])
    const [visibleMessages, setVisibleMessages] = useState<Contact[]>([])
    const [filter, setFilter] = useState<string>('all')

    const { setModal } = useModal()
    const { data, error, isLoading, mutate } = useSWR('/contact-us', fetcher);
    const timeAgo = new TimeAgo('en-US')

    useEffect(() => {
        if (data) {
            setMessages(data)
        }
    })

    useEffect(() => {
        if (filter === 'unread') {
            setVisibleMessages(messages?.filter((message: Contact) => !message.isRead))
        } else if (filter === 'starred') {
            setVisibleMessages(messages?.filter((message: Contact) => message.isStarred))
        } else if (filter === 'unstarred') {
            setVisibleMessages(messages?.filter((message: Contact) => !message.isStarred))
        } else {
            setVisibleMessages(messages)
        }
    }, [filter, messages])

    useEffect(() => {
        if (search != '') {
            setVisibleMessages(messages?.filter((message: Contact) => Object.values(message).join(' ').toLowerCase().includes(search.toLowerCase())))
        } else {
            setVisibleMessages(messages)
        }
    }, [messages, search])

    const handleStarring = async (messageId: string) => {
        try {
            await axios.put(`/contact-us?action=star&messageId=${messageId}`)
            mutate()
        } catch (error) {
            console.log(error)
        }
    }
    return <div className="flex flex-col gap-4 mt-6">
        <div className="flex  gap-4 justify-between">
            <SectionTitle title="Messages" subtitle="View all messages" />
            <div className="bg-white py-1 min-w-[100px] border border-slate-100 rounded-lg h-fit ">
                <Select value={filter} options={[
                    { label: 'All', value: 'all' },
                    { label: 'Unread', value: 'unread' },
                    { label: 'Starred', value: 'starred' },
                    { label: 'Unstarred', value: 'unstarred' },
                ]}
                    setValue={(v) => setFilter(v)}
                />
            </div>
            <Input type="text" className="bg-white" label="" placeholder="Search message" prefix={<MagnifyingGlassIcon className="h-5 w-5" />} _controller={{ setValue: (v) => setSearch(v), value: search, initialValue: search }} />
        </div>
        {data && visibleMessages && <Card className="bg-white border rounded-lg border-slate-100">
            <Table
                noHeader
                paginate
                columns={
                    [

                        {
                            key: 'sentAt',
                            label: 'Sent at'
                        },
                        {
                            key: 'from',
                            label: 'Full Names'
                        },
                        {
                            key: 'message',
                            label: 'Message'
                        },
                        {
                            key: 'view',
                            label: 'View'
                        },
                        {
                            key: 'star',
                            label: 'Star'
                        }
                    ]
                }
                data={visibleMessages.map((message) => {
                    return {
                        ...message,
                        sentAt:
                            <div className="flex flex-col gap-1">
                                <span className="text-slate-600 font-medium flex items-center">
                                    {!message.isRead ? <span className="text-[9px] uppercase font-medium px-2 py-0 rounded-full bg-primary text-white">UNREAD</span> : null}
                                    <NewMessage date={new Date(message.createdAt)} />
                                </span>
                                <span className="text-slate-600 font-medium">
                                    {timeAgo.format(new Date(message.createdAt))}
                                </span>
                                <span>
                                    {new Date(message.createdAt).toLocaleString()}
                                </span>
                            </div>
                        ,
                        from:
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
                        ,
                        message: <div className="max-w-lg"> <span className=" max-w-48 ">{message.message.slice(0, 100) + `...`}</span></div>,
                        view: <span className="text-blue-500 cursor-pointer hover:underline  flex items-center gap-2" onClick={() => setModal(<SingleMessageView message={message} mutateFunction={mutate} />)}>View message  <ArrowUpRightIcon className="w-4" /></span>,
                        star: <div className="cursor-pointer w-7 aspect-square  rounded-full flex justify-center hover:border border-slate-100 items-center" onClick={() => handleStarring(message.id)} > {!message.isStarred ? <StarIconOutline className="w-4" /> : <StarIcon className="w-4 stroke-primary fill-primary" />} </div>
                    }
                })}
            /></Card>}
        {isLoading && <LoadingIndicator />}
        {error && visibleMessages.length == 0 && <div className="py-6 flex items-center justify-center"> <ErrorIndicator /> </div>}
    </div>
}


const NewMessage = ({ date }: { date: Date }) => {
    const [show, setShow] = useState(true)


    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(false)
        }, 5000)

        return (() => {
            clearTimeout(timer)
        })
    })
    return (
        <div className={`flex items-center gap-2 ${show ? 'opacity-100' : 'opacity-0'} transition-all duration-500`}>
            {date.toDateString() === new Date().toDateString() ? <span className="text-[8px] uppercase font-medium px-2 py-0 rounded-full bg-blue-500 text-white">New</span> : null}
        </div>
    )
}