import { useState } from "react"
import logo from "../../assets/images.jpg"
import { comment } from "../../types/commentType"
export default function VideoComments() {
    const com:comment[]=[
        {
          name:"Sarwesh",
          comment:"here is some comment"
        },
        {
            name:"AnyOne",
            comment:"here is some another comment"
          },
    ]
    const [comments] = useState<comment[]|null>(com);
    return (
        <div className="h-fit  md:w-[35%] lg:w-[50%] p-2 flex flex-col space-y-2">
            <hr />
            <h3 className="text-2xl text-greenc m-auto ">Comments {comments?.length}</h3>
            <div className="flex flex-col space-y-2">
                {comments?comments.map((e,i)=><div className="flex space-x-1" key={i}>
                    <img src={e.pic?e.pic:logo} alt="logo" className="mt-2 ml-2 rounded-full h-fit" />
                    <div className="rounded-md shadow-md w-full p-2 border border-gray-100">
                        <h3 className="text-md text-bold text-gray-700">
                            {e.name}
                        </h3>
                        <p className="mt-2 text-gray-500">
                            {e.comment}
                        </p>
                    </div>
                </div>):
                <p className="text-center text-gray-400">! No comments yet</p>}
            </div>
        </div>
    )
}
