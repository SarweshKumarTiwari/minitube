
export default function Alerts() {
    return (
        <div className="absolute top-14 left-0 w-full p-2 border-[1px] border-red-200 bg-red-100 rounded-lg">
            <div className="relative w-full">
                <div className="absolute p-1  top-0 right-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"  className="fill-red-400" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                    </svg>
                </div>
            </div>
        </div>
    )
}
