export const AnnouncementBar = ({ text }) => {
    return (
        <div className="w-full py-2 bg-[#f3f3c0] dark:bg-[#857800] grid place-items-center">
            <p className="text-white font-semibold">{text}</p>
        </div>
    )
}