import { XMarkIcon } from "@heroicons/react/24/outline"
import { IconArrowBadgeDownFilled, IconArrowBadgeRightFilled } from "@tabler/icons-react"
import { setting } from "../config"

export const Sidebar = ({ open, ref }) => {

    return (
        <aside ref={ref} className="w-[19.4rem] h-full flex flex-col border-r border-r-white/20 overflow-hidden">
            <div className="logo flex w-full h-[15vh] flex-row justify-between items-center text-black dark:text-white px-4 py-5 border-b border-b-white/20 bg-default-800">
                <h1 className="text-inherit font-medium text-[2.1rem]">GLOWING</h1>
                <XMarkIcon className="h-7 w-7 text-white/60 hover:text-white/90 cursor-pointer" />
            </div>
            <div className="flex flex-col overflow-y-hidden w-full h-[70vh] justify-start items-center text-black dark:text-white px-4 py-3 border-b border-b-white/20 bg-default">
                {setting.sidebarMenu && setting.sidebarMenu.map((item, i) => (
                    <div key={i} className="w-full py-2 flex flex-row justify-between items-center cursor-pointer">
                        <h4 className="font-medium text-white/70">{item.title}</h4>
                        <IconArrowBadgeRightFilled size={20} className="text-white/60" />
                    </div>
                ))}

            </div>
            <div className="flex w-full h-[15vh] flex-row justify-between items-center text-black dark:text-white px-4 py-5 border-t border-t-white/20 bg-default-800">
                <p className="text-white/60 text-sm">© 2023 Glowing.<br />All rights reserved.</p>
            </div>
        </aside>
    )
}
