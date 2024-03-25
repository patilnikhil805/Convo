'use client'
import useConversation from "@/hooks/useConversation"
import clsx from "clsx"
import EmptyState from "../(site)/components/EmptyState"

const Home = () => {
    const { isOpen } = useConversation();

    return (
        <div className={clsx('lg:pl-80 h-full', isOpen ? 'block' : 'hidden')}>
            <EmptyState/>
        </div>
    )
};

export default Home