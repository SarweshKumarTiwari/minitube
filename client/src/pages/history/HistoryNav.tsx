import { useState} from "react";
import Button from "../../components/Button";
import SubNavBar from "../../components/navbar/SubNavBar";
import { useDispatch } from "react-redux";
import { clearAllHistory } from "../../app/historySlices";
import { AppDispatch } from "../../app/store";

export default function HistoryNav() {
    const [isChecked, setIsChecked] = useState(false);
    const dispatch:AppDispatch=useDispatch();

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }
    return (
        <SubNavBar>
            <Button className="flex items-center space-x-1" onClick={()=>dispatch(clearAllHistory())}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="fill-gray-600" viewBox="0 0 16 16">
                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                </svg>
                <span className="text-gray-600 text-sm">Clear History</span>
            </Button>
            <Button className="flex items-center ">
                <label className='inline-flex cursor-pointer select-none items-center'>
                    <input
                        type='checkbox'
                        name='autoSaver'
                        className='sr-only'
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                    />
                    <span
                        className={`slider mr-2 flex h-[26px] w-[50px] items-center rounded-full p-1 duration-200 ${isChecked ? 'bg-blue-600' : 'bg-[#CCCCCE]'
                            }`}
                    >
                        <span
                            className={`dot h-[18px] w-[18px] rounded-full bg-white duration-200 ${isChecked ? 'translate-x-6' : ''
                                }`}
                        ></span>
                    </span>
                    <span className='label flex items-center text-sm  text-gray-600'>
                         <span className='pl-1'> {isChecked ? 'History Paused' : 'Pause History'} </span>
                    </span>
                </label>
            </Button>
        </SubNavBar>
    )
}
